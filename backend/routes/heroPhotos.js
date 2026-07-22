const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
    const rows = db
        .prepare(
            `SELECT id, image_path, shape FROM hero_photos
             WHERE is_active = 1
             ORDER BY display_order ASC, id ASC`
        )
        .all();

    res.json({
        photos: rows.map((r) => ({ id: r.id, imagePath: r.image_path, shape: r.shape }))
    });
});

module.exports = router;
