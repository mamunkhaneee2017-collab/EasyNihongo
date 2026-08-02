const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const multer = require("multer");
const db = require("../../db");
const requireAdmin = require("../../middleware/requireAdmin");
const { UPLOADS_DIR: BASE_UPLOADS_DIR } = require("../../config/paths");

const router = express.Router();

const UPLOADS_DIR = path.join(BASE_UPLOADS_DIR, "materials");
fs.mkdirSync(UPLOADS_DIR, { recursive: true });

const ALLOWED_MIME = new Set([
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "text/plain",
    "audio/mpeg",
    "audio/wav",
    "video/mp4",
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/zip",
    "application/x-zip-compressed"
]);

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOADS_DIR),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${crypto.randomUUID()}${ext}`);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 50 * 1024 * 1024, files: 10 },
    fileFilter: (req, file, cb) => {
        if (!ALLOWED_MIME.has(file.mimetype)) {
            return cb(new Error("Unsupported file type."));
        }
        cb(null, true);
    }
});

router.use(requireAdmin);

router.get("/", (req, res) => {
    const rows = db
        .prepare(`SELECT * FROM materials ORDER BY created_at DESC`)
        .all();
    res.json({ materials: rows });
});

router.post("/", upload.array("files", 10), (req, res) => {
    const { level, category } = req.body || {};
    if (!level || !category) {
        return res.status(400).json({ error: "Level and category are required." });
    }
    if (!req.files || !req.files.length) {
        return res.status(400).json({ error: "At least one file is required." });
    }

    const insert = db.prepare(
        `INSERT INTO materials (filename, original_name, level, category, mime_type, size_bytes, status, uploaded_by)
         VALUES (?, ?, ?, ?, ?, ?, 'draft', ?)`
    );

    const inserted = req.files.map((file) => {
        // Multer decodes multipart filename headers as latin1, but browsers send UTF-8 —
        // re-decode so non-ASCII original names (e.g. Japanese) don't come out as mojibake.
        const originalName = Buffer.from(file.originalname, "latin1").toString("utf8");
        const result = insert.run(
            file.filename,
            originalName,
            level,
            category,
            file.mimetype,
            file.size,
            req.session.user.id
        );
        return db.prepare(`SELECT * FROM materials WHERE id = ?`).get(result.lastInsertRowid);
    });

    res.status(201).json({ materials: inserted });
});

router.patch("/:id", (req, res) => {
    const material = db.prepare(`SELECT * FROM materials WHERE id = ?`).get(req.params.id);
    if (!material) return res.status(404).json({ error: "File not found." });

    const { status } = req.body || {};
    if (status && !["draft", "published"].includes(status)) {
        return res.status(400).json({ error: "Invalid status." });
    }

    db.prepare(`UPDATE materials SET status = ? WHERE id = ?`).run(
        status || material.status,
        material.id
    );

    res.json({ material: db.prepare(`SELECT * FROM materials WHERE id = ?`).get(material.id) });
});

router.delete("/:id", (req, res) => {
    const material = db.prepare(`SELECT * FROM materials WHERE id = ?`).get(req.params.id);
    if (!material) return res.status(404).json({ error: "File not found." });

    db.prepare(`DELETE FROM materials WHERE id = ?`).run(material.id);

    fs.unlink(path.join(UPLOADS_DIR, material.filename), () => {});

    res.json({ ok: true });
});

module.exports = router;
