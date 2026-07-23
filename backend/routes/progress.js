const express = require("express");
const db = require("../db");
const requireAuth = require("../middleware/requireAuth");
const content = require("../lib/contentData");
const activity = require("../lib/activity");

const router = express.Router();

const FLAT_TYPES = ["hiragana", "katakana"];
const LEVEL_TYPES = ["kanji", "grammar", "vocabulary"];

/* ---------------- FAVORITES (hiragana/katakana) ---------------- */

router.get("/favorites", requireAuth, (req, res) => {
    const { contentType } = req.query;
    if (!FLAT_TYPES.includes(contentType)) {
        return res.status(400).json({ error: "contentType must be hiragana or katakana." });
    }
    const rows = db
        .prepare(`SELECT item_index FROM favorites WHERE user_id = ? AND content_type = ?`)
        .all(req.session.user.id, contentType);
    res.json({ itemIndexes: rows.map((r) => r.item_index) });
});

router.post("/favorite", requireAuth, (req, res) => {
    const { contentType, itemIndex } = req.body || {};
    const index = parseInt(itemIndex, 10);

    if (!FLAT_TYPES.includes(contentType)) {
        return res.status(400).json({ error: "contentType must be hiragana or katakana." });
    }
    if (!content.flatItemExists(contentType, index)) {
        return res.status(400).json({ error: "That item does not exist." });
    }

    const userId = req.session.user.id;
    const existing = db
        .prepare(`SELECT id FROM favorites WHERE user_id = ? AND content_type = ? AND item_index = ?`)
        .get(userId, contentType, index);

    if (existing) {
        db.prepare(`DELETE FROM favorites WHERE id = ?`).run(existing.id);
        return res.json({ favorited: false });
    }

    db.prepare(`INSERT INTO favorites (user_id, content_type, item_index) VALUES (?, ?, ?)`).run(
        userId,
        contentType,
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
