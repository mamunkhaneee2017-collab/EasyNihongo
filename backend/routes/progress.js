const express = require("express");
const db = require("../db");
const requireAuth = require("../middleware/requireAuth");
const content = require("../lib/contentData");
const activity = require("../lib/activity");

const router = express.Router();

const FLAT_TYPES = ["hiragana", "katakana"];
const LEVEL_TYPES = ["kanji", "grammar", "vocabulary"];
const TOPIC_TYPES = ["vocabulary-topic"];

/* ---------------- FAVORITES (hiragana/katakana + vocabulary/grammar/kanji + vocabulary-topic) ---------------- */

// Flat types (hiragana/katakana) are addressed by a global item_index
// alone; level types (vocabulary/grammar/kanji) also need a `level`
// since the same item_index repeats per level; topic types
// (vocabulary-topic) reuse the same `level` column to hold the topic
// slug instead of a JLPT level — same storage shape, different existence
// check (content.topicItemExists instead of content.levelItemExists).
// `level` is stored as '' for flat-type rows to keep the
// (content_type, level, item_index) unique constraint meaningful for
// every shape in one table.
router.get("/favorites", requireAuth, (req, res) => {
    const { contentType, level } = req.query;

    if (FLAT_TYPES.includes(contentType)) {
        const rows = db
            .prepare(`SELECT item_index FROM favorites WHERE user_id = ? AND content_type = ? AND level = ''`)
            .all(req.session.user.id, contentType);
        return res.json({ itemIndexes: rows.map((r) => r.item_index) });
    }

    if ((LEVEL_TYPES.includes(contentType) || TOPIC_TYPES.includes(contentType)) && level) {
        const rows = db
            .prepare(`SELECT item_index FROM favorites WHERE user_id = ? AND content_type = ? AND level = ?`)
            .all(req.session.user.id, contentType, level);
        return res.json({ itemIndexes: rows.map((r) => r.item_index) });
    }

    res.status(400).json({ error: "contentType must be hiragana/katakana, or kanji/grammar/vocabulary/vocabulary-topic with a level." });
});

router.post("/favorite", requireAuth, (req, res) => {
    const { contentType, level, itemIndex } = req.body || {};
    const index = parseInt(itemIndex, 10);
    const userId = req.session.user.id;

    const isFlat = FLAT_TYPES.includes(contentType);
    const isLevel = LEVEL_TYPES.includes(contentType) && !!level;
    const isTopic = TOPIC_TYPES.includes(contentType) && !!level;

    if (!isFlat && !isLevel && !isTopic) {
        return res.status(400).json({ error: "contentType must be hiragana/katakana, or kanji/grammar/vocabulary/vocabulary-topic with a level." });
    }

    const exists = isFlat
        ? content.flatItemExists(contentType, index)
        : isTopic
        ? content.topicItemExists(level, index)
        : content.levelItemExists(contentType, level, index);
    if (!exists) {
        return res.status(400).json({ error: "That item does not exist." });
    }

    const levelKey = isFlat ? "" : level;
    const existing = db
        .prepare(`SELECT id FROM favorites WHERE user_id = ? AND content_type = ? AND level = ? AND item_index = ?`)
        .get(userId, contentType, levelKey, index);

    if (existing) {
        db.prepare(`DELETE FROM favorites WHERE id = ?`).run(existing.id);
        return res.json({ favorited: false });
    }

    db.prepare(`INSERT INTO favorites (user_id, content_type, level, item_index) VALUES (?, ?, ?, ?)`).run(
        userId,
        contentType,
        levelKey,
        index
    );
    res.json({ favorited: true });
});

/* ---------------- MARK AS LEARNED (kanji/grammar) ---------------- */

router.get("/completed", requireAuth, (req, res) => {
    const { contentType, level } = req.query;
    if (!LEVEL_TYPES.includes(contentType) || !level) {
        return res.status(400).json({ error: "contentType (kanji/grammar) and level are required." });
    }
    const rows = db
        .prepare(
            `SELECT item_index FROM progress_items WHERE user_id = ? AND content_type = ? AND level = ?`
        )
        .all(req.session.user.id, contentType, level);
    res.json({ itemIndexes: rows.map((r) => r.item_index) });
});

router.post("/complete", requireAuth, (req, res) => {
    const { contentType, level, itemIndex } = req.body || {};
    const index = parseInt(itemIndex, 10);

    if (!LEVEL_TYPES.includes(contentType) || !level) {
        return res.status(400).json({ error: "contentType (kanji/grammar) and level are required." });
    }
    if (!content.levelItemExists(contentType, level, index)) {
        return res.status(400).json({ error: "That item does not exist." });
    }

    const userId = req.session.user.id;
    const existing = db
        .prepare(
            `SELECT id FROM progress_items WHERE user_id = ? AND content_type = ? AND level = ? AND item_index = ?`
        )
        .get(userId, contentType, level, index);

    if (existing) {
        db.prepare(`DELETE FROM progress_items WHERE id = ?`).run(existing.id);
        return res.json({ completed: false });
    }

    db.prepare(
        `INSERT INTO progress_items (user_id, content_type, level, item_index) VALUES (?, ?, ?, ?)`
    ).run(userId, contentType, level, index);

    activity.logActivity(userId, 2);
    activity.addXp(userId, 5);

    res.json({ completed: true });
});

/* ---------------- MY FAVORITES (aggregate across every content type) ---------------- */

// Powers the "My Favorites" page (Hiragana/Katakana/Kanji/Vocabulary/
// Grammar/Topics all in one list) with a single query instead of the
// client firing one /favorites request per content type. Rows whose
// underlying content no longer resolves (should not normally happen —
// content only grows) are silently dropped rather than erroring.
router.get("/favorites/all", requireAuth, (req, res) => {
    const rows = db
        .prepare(`SELECT content_type, level, item_index FROM favorites WHERE user_id = ? ORDER BY created_at DESC`)
        .all(req.session.user.id);

    const favorites = rows
        .map((row) => {
            let display = null;
            if (FLAT_TYPES.includes(row.content_type)) {
                display = content.resolveFlatItem(row.content_type, row.item_index);
            } else if (row.content_type === "vocabulary-topic") {
                display = content.resolveTopicItem(row.level, row.item_index);
            } else {
                display = content.resolveLevelItem(row.content_type, row.level, row.item_index);
            }
            if (!display) return null;
            return { contentType: row.content_type, level: row.level, itemIndex: row.item_index, ...display };
        })
        .filter(Boolean);

    res.json({ favorites });
});

/* ---------------- CHARACTER LEARNING PROGRESS (hiragana/katakana) ----------------
   Not Started -> Learning -> Practicing -> Completed -> Mastered.
   "Not Started" is row absence (no character_progress row), matching the
   same "no row = not done" convention favorites/progress_items already
   use, so simple COUNT(*) queries elsewhere keep working unmodified. */

const CHARACTER_STATUSES = ["learning", "practicing", "completed", "mastered"];

router.get("/character-status", requireAuth, (req, res) => {
    const { contentType } = req.query;
    if (!FLAT_TYPES.includes(contentType)) {
        return res.status(400).json({ error: "contentType must be hiragana or katakana." });
    }

    const rows = db
        .prepare(`SELECT item_index, status, best_accuracy, practice_count FROM character_progress WHERE user_id = ? AND content_type = ?`)
        .all(req.session.user.id, contentType);

    res.json({
        statuses: rows.map((r) => ({
            itemIndex: r.item_index,
            status: r.status,
            bestAccuracy: r.best_accuracy,
            practiceCount: r.practice_count
        }))
    });
});

// Sets a character's stage directly — used once when a detail page is
// first opened, to move a not-started character to "learning".
router.post("/character-status", requireAuth, (req, res) => {
    const { contentType, itemIndex, status } = req.body || {};
    const index = parseInt(itemIndex, 10);

    if (!FLAT_TYPES.includes(contentType) || !CHARACTER_STATUSES.includes(status)) {
        return res.status(400).json({ error: "contentType must be hiragana/katakana and status must be a valid stage." });
    }
    if (!content.flatItemExists(contentType, index)) {
        return res.status(400).json({ error: "That item does not exist." });
    }

    const userId = req.session.user.id;
    const existing = db
        .prepare(`SELECT id FROM character_progress WHERE user_id = ? AND content_type = ? AND item_index = ?`)
        .get(userId, contentType, index);

    if (existing) {
        db.prepare(`UPDATE character_progress SET status = ?, updated_at = datetime('now') WHERE id = ?`).run(status, existing.id);
    } else {
        db.prepare(
            `INSERT INTO character_progress (user_id, content_type, item_index, status) VALUES (?, ?, ?, ?)`
        ).run(userId, contentType, index, status);
    }

    res.json({ status });
});

// Records one handwriting-practice attempt (accuracy 0-100 from the
// client-side geometric scoring in js/handwriting.js) and derives the
// new stage server-side: any attempt -> at least "practicing";
// best_accuracy >= 80 -> "completed"; best_accuracy >= 95 with 3+
// attempts -> "mastered". XP/activity only fire the first time a
// character reaches completed/mastered, mirroring /complete's rules.
router.post("/practice-attempt", requireAuth, (req, res) => {
    const { contentType, itemIndex, accuracy } = req.body || {};
    const index = parseInt(itemIndex, 10);
    const acc = Math.max(0, Math.min(100, Math.round(Number(accuracy))));

    if (!FLAT_TYPES.includes(contentType) || Number.isNaN(acc)) {
        return res.status(400).json({ error: "contentType must be hiragana/katakana and accuracy must be a number." });
    }
    if (!content.flatItemExists(contentType, index)) {
        return res.status(400).json({ error: "That item does not exist." });
    }

    const userId = req.session.user.id;
    const existing = db
        .prepare(`SELECT id, status, best_accuracy, practice_count FROM character_progress WHERE user_id = ? AND content_type = ? AND item_index = ?`)
        .get(userId, contentType, index);

    const bestAccuracy = existing ? Math.max(existing.best_accuracy, acc) : acc;
    const practiceCount = (existing ? existing.practice_count : 0) + 1;
    const wasAlreadyDone = !!existing && (existing.status === "completed" || existing.status === "mastered");

    let status = "practicing";
    if (bestAccuracy >= 80) status = "completed";
    if (bestAccuracy >= 95 && practiceCount >= 3) status = "mastered";

    if (existing) {
        db.prepare(
            `UPDATE character_progress SET status = ?, best_accuracy = ?, practice_count = ?, last_practiced_at = datetime('now'), updated_at = datetime('now') WHERE id = ?`
        ).run(status, bestAccuracy, practiceCount, existing.id);
    } else {
        db.prepare(
            `INSERT INTO character_progress (user_id, content_type, item_index, status, best_accuracy, practice_count, last_practiced_at) VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`
        ).run(userId, contentType, index, status, bestAccuracy, practiceCount);
    }

    if (!wasAlreadyDone && (status === "completed" || status === "mastered")) {
        activity.logActivity(userId, 2);
        activity.addXp(userId, 5);
    } else {
        activity.logActivity(userId, 1);
    }

    res.json({ status, bestAccuracy, practiceCount });
});

module.exports = router;
