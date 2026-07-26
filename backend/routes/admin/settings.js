const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../../db");
const requireAdmin = require("../../middleware/requireAdmin");

const router = express.Router();

router.use(requireAdmin);

router.get("/", (req, res) => {
    const settings = db.prepare(`SELECT * FROM site_settings WHERE id = 1`).get();
    res.json({ settings });
});

router.patch("/", (req, res) => {
    const current = db.prepare(`SELECT * FROM site_settings WHERE id = 1`).get();
    const {
        siteName,
        contactEmail,
        supportPhone,
        socialFacebook,
        socialInstagram,
        socialYoutube,
        socialGithub
    } = req.body || {};

    db.prepare(
        `UPDATE site_settings SET
            site_name = ?, contact_email = ?, support_phone = ?,
            social_facebook = ?, social_instagram = ?, social_youtube = ?, social_github = ?
         WHERE id = 1`
    ).run(
        siteName ?? current.site_name,
        contactEmail ?? current.contact_email,
        supportPhone ?? current.support_phone,
        socialFacebook ?? current.social_facebook,
        socialInstagram ?? current.social_instagram,
        socialYoutube ?? current.social_youtube,
        socialGithub ?? current.social_github
    );

    res.json({ settings: db.prepare(`SELECT * FROM site_settings WHERE id = 1`).get() });
});

router.patch("/me", (req, res) => {
    const admin = db.prepare(`SELECT * FROM users WHERE id = ?`).get(req.session.user.id);
    const { fullName, currentPassword, newPassword } = req.body || {};

    const updates = {
        full_name: fullName !== undefined && fullName !== "" ? fullName : admin.full_name,
        password_hash: admin.password_hash
    };

    if (newPassword) {
        if (!currentPassword || !bcrypt.compareSync(currentPassword, admin.password_hash)) {
            return res.status(400).json({ error: "Current password is incorrect." });
        }
        if (String(newPassword).length < 8) {
            return res.status(400).json({ error: "New password must be at least 8 characters." });
        }
        updates.password_hash = bcrypt.hashSync(newPassword, 10);
    }

    db.prepare(`UPDATE users SET full_name = ?, password_hash = ? WHERE id = ?`).run(
        updates.full_name,
        updates.password_hash,
        admin.id
    );

    res.json({ fullName: updates.full_name });
});

module.exports = router;
