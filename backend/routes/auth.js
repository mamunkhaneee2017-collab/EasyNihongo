const express = require("express");
const bcrypt = require("bcryptjs");
const rateLimit = require("express-rate-limit");
const db = require("../db");

const router = express.Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Brute-force guards. Keyed by IP (trust proxy is already set in
// server.js so this reads the real client IP behind Render's proxy,
// not the proxy's own address for every request).
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many login attempts. Please try again in a few minutes." }
});

const registerLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    limit: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many accounts created from this network. Please try again later." }
});

function toPublicUser(user) {
    return {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        role: user.role,
        country: user.country,
        currentLevel: user.current_level,
        targetLevel: user.target_level,
        dailyGoalMinutes: user.daily_goal_minutes,
        avatar: user.avatar_path,
        xp: user.xp
    };
}

router.post("/register", registerLimiter, (req, res) => {
    const { fullName, email, password, country, currentLevel, goalLevel } = req.body || {};

    if (!fullName || !email || !password) {
        return res.status(400).json({ error: "Full name, email and password are required." });
    }
    if (!EMAIL_RE.test(email)) {
        return res.status(400).json({ error: "Please enter a valid email address." });
    }
    if (String(password).length < 8) {
        return res.status(400).json({ error: "Password must be at least 8 characters." });
    }

    const existing = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
    if (existing) {
        return res.status(409).json({ error: "An account with this email already exists." });
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    const result = db
        .prepare(
            `INSERT INTO users (full_name, email, password_hash, role, country, current_level, target_level)
             VALUES (?, ?, ?, 'student', ?, ?, ?)`
        )
        .run(fullName, email, passwordHash, country || null, currentLevel || null, goalLevel || null);

    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(result.lastInsertRowid);

    res.status(201).json({ user: toPublicUser(user) });
});

router.post("/login", loginLimiter, (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }

    const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
    if (!user || !bcrypt.compareSync(password, user.password_hash)) {
        return res.status(401).json({ error: "Incorrect email or password." });
    }
    if (!user.is_active) {
        return res.status(403).json({ error: "This account has been suspended." });
    }

    req.session.user = { id: user.id, role: user.role };
    res.json({ user: toPublicUser(user) });
});

router.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.json({ ok: true });
    });
});

router.get("/me", (req, res) => {
    if (!req.session || !req.session.user) {
        return res.status(401).json({ error: "Not logged in." });
    }

    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(req.session.user.id);
    if (!user) {
        req.session.destroy(() => {});
        return res.status(401).json({ error: "Not logged in." });
    }

    res.json({ user: toPublicUser(user) });
});

module.exports = router;
