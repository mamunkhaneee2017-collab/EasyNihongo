const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
    const settings = db.prepare(`SELECT * FROM site_settings WHERE id = 1`).get();
    res.json({
        siteName: settings.site_name,
        contactEmail: settings.contact_email,
        supportPhone: settings.support_phone,
        social: {
            facebook: settings.social_facebook,
            instagram: settings.social_instagram,
            youtube: settings.social_youtube,
            github: settings.social_github
        }
    });
});

module.exports = router;
