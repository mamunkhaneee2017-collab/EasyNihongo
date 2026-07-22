const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const multer = require("multer");
const bcrypt = require("bcryptjs");
const db = require("../db");
const requireAuth = require("../middleware/requireAuth");
const { UPLOADS_DIR } = require("../config/paths");

const router = express.Router();

const AVATAR_DIR = path.join(UPLOADS_DIR, "avatars");
fs.mkdirSync(AVATAR_DIR, { recursive: true });

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, AVATAR_DIR),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        cb(null, `${crypto.randomUUID()}${ext}`);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 3 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (!/^image\/(png|jpe?g|webp)$/.test(file.mimetype)) {
            return cb(new Error("Avatar must be a PNG, JPG or WEBP image."));
        }
        cb(null, true);
    }
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

router.get("/me", requireAuth, (req, res) => {
    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(req.session.user.id);
    res.json({ user: toPublicUser(user) });
});

router.patch("/me", requireAuth, upload.single("avatar"), (req, res) => {
    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(req.session.user.id);
    if (!user) return res.status(404).json({ error: "User not found." });

    const { fullName, targetLevel, dailyGoalMinutes, currentPassword, newPassword } = req.body || {};

    const updates = {
        full_name: fullName !== undefined && fullName !== "" ? fullName : user.full_name,
        target_level: targetLevel !== undefined ? (targetLevel || null) : user.target_level,
        daily_goal_minutes:
            dailyGoalMinutes !== undefined && dailyGoalMinutes !== ""
                ? Math.max(10, parseInt(dailyGoalMinutes, 10) || user.daily_goal_minutes)
                : user.daily_goal_minutes,
        password_hash: user.password_hash,
        avatar_path: user.avatar_path
    };

    if (req.file) {
        updates.avatar_path = `/uploads/avatars/${req.file.filename}`;
    }

    if (newPassword) {
        if (!currentPassword || !bcrypt.compareSync(currentPassword, user.password_hash)) {
            return res.status(400).json({ error: "Current password is incorrect." });
        }
        if (String(newPassword).length < 8) {
            return res.status(400).json({ error: "New password must be at least 8 characters." });
        }
        updates.password_hash = bcrypt.hashSync(newPassword, 10);
    }

    db.prepare(
        `UPDATE users SET full_name = ?, target_level = ?, daily_goal_minutes = ?, password_hash = ?, avatar_path = ?
         WHERE id = ?`
    ).run(
        updates.full_name,
        updates.target_level,
        updates.daily_goal_minutes,
        updates.password_hash,
        updates.avatar_path,
        user.id
    );

    const updated = db.prepare("SELECT * FROM users WHERE id = ?").get(user.id);
    res.json({ user: toPublicUser(updated) });
});

module.exports = router;
