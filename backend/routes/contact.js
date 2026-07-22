const express = require("express");
const db = require("../db");

const router = express.Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_SUBJECTS = ["Question", "Course", "Account", "Feedback", "Other"];

router.post("/", (req, res) => {
    const { name, email, phone, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "Name, email, subject and message are required." });
    }
    if (!EMAIL_RE.test(email)) {
        return res.status(400).json({ error: "Please enter a valid email address." });
    }
    if (!VALID_SUBJECTS.includes(subject)) {
        return res.status(400).json({ error: "Invalid subject." });
    }

    db.prepare(
        `INSERT INTO messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)`
    ).run(name, email, phone || null, subject, message);

    res.status(201).json({ ok: true });
});

module.exports = router;
