const express = require("express");
const db = require("../db");
const requireAuth = require("../middleware/requireAuth");
const content = require("../lib/contentData");
const activity = require("../lib/activity");

const router = express.Router();

// Hiragana/Katakana quiz "levels" are synthetic strings like
// "kana:hiragana:ka" (one gojuon row) or "kana:hiragana:final" (cumulative
// review) — generated client-side per module, not authored in
// data/quiz/quiz-data.js. Validated against data/kana-rows.js instead.
function isValidKanaQuizLevel(level) {
    const parts = String(level).split(":");
    if (parts.length !== 3 || parts[0] !== "kana") return false;
    const [, kanaType, rowId] = parts;
    if (kanaType !== "hiragana" && kanaType !== "katakana") return false;
    if (rowId === "final") return true;
    return content.kanaRows.some((r) => r.id === rowId);
}

router.post("/attempts", requireAuth, (req, res) => {
    const { level, correct, total } = req.body || {};
    const correctNum = parseInt(correct, 10);
    const totalNum = parseInt(total, 10);

    if (!level || (!content.quizData[level] && !isValidKanaQuizLevel(level))) {
        return res.status(400).json({ error: "Unknown quiz level." });
    }
    if (!Number.isInteger(correctNum) || !Number.isInteger(totalNum) || totalNum <= 0 || correctNum < 0 || correctNum > totalNum) {
        return res.status(400).json({ error: "Invalid score." });
    }

    const percent = Math.round((correctNum / totalNum) * 100);
    const userId = req.session.user.id;

    db.prepare(
        `INSERT INTO quiz_attempts (user_id, level, correct, total, percent) VALUES (?, ?, ?, ?, ?)`
    ).run(userId, level, correctNum, totalNum, percent);

    activity.logActivity(userId, Math.max(5, totalNum));
    activity.addXp(userId, correctNum * 10);

    res.status(201).json({ percent, passed: percent >= 60 });
});

router.get("/attempts", requireAuth, (req, res) => {
    const rows = db
        .prepare(
            `SELECT level, correct, total, percent, taken_at FROM quiz_attempts
             WHERE user_id = ? ORDER BY taken_at DESC LIMIT 20`
        )
        .all(req.session.user.id);
    res.json({ attempts: rows });
});

module.exports = router;
