const express = require("express");
const db = require("../../db");
const requireAdmin = require("../../middleware/requireAdmin");

const router = express.Router();

router.use(requireAdmin);

const STATUSES = ["new", "in_progress", "replied"];

router.get("/", (req, res) => {
    const rows = db.prepare(`SELECT * FROM messages ORDER BY created_at DESC, id DESC`).all();
    res.json({ messages: rows });
});

// Accepts any of: { status, memo, replyText, markReplied }.
router.patch("/:id", (req, res) => {
    const message = db.prepare(`SELECT * FROM messages WHERE id = ?`).get(req.params.id);
    if (!message) return res.status(404).json({ error: "Message not found." });

    const { status, memo, replyText, markReplied } = req.body || {};

    if (status !== undefined && !STATUSES.includes(status)) {
        return res.status(400).json({ error: "Invalid status." });
    }

    let newStatus = status !== undefined ? status : message.status;
    if (replyText || markReplied) newStatus = "replied";

    const newReplyText = replyText !== undefined ? replyText : message.reply_text;
    const newMemo = typeof memo === "string" ? memo : message.memo;
    const now = new Date().toISOString();
    const repliedAt = newStatus === "replied"
        ? (message.status === "replied" && message.replied_at ? message.replied_at : now)
        : null;

    db.prepare(
        `UPDATE messages SET reply_text = ?, status = ?, replied_at = ?, memo = ?, updated_at = ? WHERE id = ?`
    ).run(newReplyText, newStatus, repliedAt, newMemo, now, message.id);

    res.json({ message: db.prepare(`SELECT * FROM messages WHERE id = ?`).get(message.id) });
});

router.delete("/:id", (req, res) => {
    const result = db.prepare(`DELETE FROM messages WHERE id = ?`).run(req.params.id);
    if (!result.changes) return res.status(404).json({ error: "Message not found." });
    res.json({ ok: true });
});

module.exports = router;
