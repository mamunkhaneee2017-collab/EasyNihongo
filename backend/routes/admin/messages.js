const express = require("express");
const db = require("../../db");
const requireAdmin = require("../../middleware/requireAdmin");

const router = express.Router();

router.use(requireAdmin);

router.get("/", (req, res) => {
    const rows = db.prepare(`SELECT * FROM messages ORDER BY created_at DESC`).all();
    res.json({ messages: rows });
});

router.patch("/:id", (req, res) => {
    const message = db.prepare(`SELECT * FROM messages WHERE id = ?`).get(req.params.id);
    if (!message) return res.status(404).json({ error: "Message not found." });

    const { replyText, markReplied } = req.body || {};

    const newReplyText = replyText !== undefined ? replyText : message.reply_text;
    const newStatus = replyText || markReplied ? "replied" : message.status;
    const repliedAt = newStatus === "replied" ? new Date().toISOString() : message.replied_at;

    db.prepare(
        `UPDATE messages SET reply_text = ?, status = ?, replied_at = ? WHERE id = ?`
    ).run(newReplyText, newStatus, repliedAt, message.id);

    res.json({ message: db.prepare(`SELECT * FROM messages WHERE id = ?`).get(message.id) });
});

module.exports = router;
