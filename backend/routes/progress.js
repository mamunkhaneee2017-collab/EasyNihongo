const express = require("express");
const db = require("../db");
const requireAuth = require("../middleware/requireAuth");
const content = require("../lib/contentData");
const activity = require("../lib/activity");

const router = express.Router();

const FLAT_TYPES = ["hiragana", "katakana"];
const LEVEL_TYPES = ["kanji", "grammar", "vocabulary"];

/* ---------------- FAVORITES (hiragana/katakana + vocabulary/grammar/kanji) ---------------- */

// Flat types (hiragana/katakana) are addressed by a global item_index
// alone; level types (vocabulary/grammar/kanji) also need a `level`
// since the same item_index repeats per level. `level` is stored as ''
// for flat-type rows to keep the (content_type, level, item_index)
// unique constraint meaningful for both shapes in one table.
router.get("/favorites", requireAuth, (req, res) => {
    const { contentType, level } = req.query;

    if (FLAT_TYPES.includes(contentType)) {
        const rows = db
            .prepare(`SELECT item_index FROM favorites WHERE user_id = ? AND content_type = ? AND level = ''`)
            .all(req.session.user.id, contentType);
        return res.json({ itemIndexes: rows.map((r) => r.item_index) });
    }

    if (LEVEL_TYPES.includes(contentType) && level) {
        const rows = db
            .prepare(`SELECT item_index FROM favorites WHERE user_id = ? AND content_type = ? AND level = ?`)
            .all(req.session.user.id, contentType, level);
        return res.json({ itemIndexes: rows.map((r) => r.item_index) });
    }

    res.status(400).json({ error: "contentType must be hiragana/katakana, or kanji/grammar/vocabulary with a level." });
});

router.post("/favorite", requireAuth, (req, res) => {
    const { contentType, level, itemIndex } = req.body || {};
    const index = parseInt(itemIndex, 10);
    const userId = req.session.user.id;

    const isFlat = FLAT_TYPES.includes(contentType);
    const isLevel = LEVEL_TYPES.includes(contentType) && !!level;

    if (!isFlat && !isLevel) {
        return res.status(400).json({ error: "contentType must be hiragana/katakana, or kanji/grammar/vocabulary with a level." });
    }

    const exists = isFlat ? content.flatItemExists(contentType, index) : content.levelItemExists(contentType, level, index);
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

module.exports = router;
