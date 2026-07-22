const express = require("express");
const path = require("path");
const db = require("../db");
const { UPLOADS_DIR: BASE_UPLOADS_DIR } = require("../config/paths");

const router = express.Router();
const UPLOADS_DIR = path.join(BASE_UPLOADS_DIR, "materials");

router.get("/", (req, res) => {
    const { level, category } = req.query;

    let query = `SELECT id, original_name, level, category, mime_type, size_bytes, created_at
                 FROM materials WHERE status = 'published'`;
    const params = [];

    if (level) {
        query += ` AND level = ?`;
        params.push(level);
    }
    if (category) {
        query += ` AND category = ?`;
        params.push(category);
    }
    query += ` ORDER BY created_at DESC`;

    const rows = db.prepare(query).all(...params);
    res.json({ materials: rows });
});

router.get("/:id/download", (req, res) => {
    const material = db
        .prepare(`SELECT * FROM materials WHERE id = ? AND status = 'published'`)
        .get(req.params.id);

    if (!material) return res.status(404).json({ error: "File not found." });

    res.download(path.join(UPLOADS_DIR, material.filename), material.original_name);
});

module.exports = router;
