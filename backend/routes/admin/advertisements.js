const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const multer = require("multer");
const db = require("../../db");
const requireAdmin = require("../../middleware/requireAdmin");
const { UPLOADS_DIR: BASE_UPLOADS_DIR } = require("../../config/paths");

const router = express.Router();

const ADS_DIR = path.join(BASE_UPLOADS_DIR, "ads");
fs.mkdirSync(ADS_DIR, { recursive: true });

const ALLOWED_MEDIA = {
    "image/jpeg": "image",
    "image/png": "image",
    "image/webp": "image",
    "image/gif": "image",
    "video/mp4": "video",
    "video/webm": "video",
    "video/quicktime": "video",
    "video/x-msvideo": "video"
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, ADS_DIR),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${crypto.randomUUID()}${ext}`);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 150 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (!ALLOWED_MEDIA[file.mimetype]) {
            return cb(new Error("Media must be an image (JPG/PNG/WEBP/GIF) or a video (MP4/WEBM/MOV/AVI)."));
        }
        cb(null, true);
    }
});

router.use(requireAdmin);

function toPublicAd(row) {
    return {
        id: row.id,
        type: row.type,
        title: row.title,
        content: row.content,
        mediaPath: row.media_path,
        mediaType: row.media_type,
        linkUrl: row.link_url,
        startDate: row.start_date,
        endDate: row.end_date,
        priority: row.priority,
        isActive: !!row.is_active,
        createdAt: row.created_at
    };
}

function isTruthy(value) {
    return value === true || value === "true" || value === "1" || value === 1;
}

router.get("/", (req, res) => {
    const rows = db
        .prepare(`SELECT * FROM advertisements ORDER BY type, priority DESC, id DESC`)
        .all();
    res.json({ advertisements: rows.map(toPublicAd) });
});

router.post("/", upload.single("media"), (req, res) => {
    const { type, title, content, linkUrl, startDate, endDate, priority } = req.body || {};

    if (!["text", "banner"].includes(type)) {
        return res.status(400).json({ error: "Type must be 'text' or 'banner'." });
    }
    if (!title || !title.trim()) {
        return res.status(400).json({ error: "Title is required." });
    }
    if (type === "text" && (!content || !content.trim())) {
        return res.status(400).json({ error: "Scrolling text content is required." });
    }
    if (type === "banner" && !req.file) {
        return res.status(400).json({ error: "An image or video file is required for a banner ad." });
    }
    if (startDate && endDate && endDate < startDate) {
        return res.status(400).json({ error: "End date can't be before start date." });
    }

    const mediaPath = req.file ? `/uploads/ads/${req.file.filename}` : null;
    const mediaType = req.file ? ALLOWED_MEDIA[req.file.mimetype] : null;
    const priorityValue = Number.isFinite(parseInt(priority, 10)) ? parseInt(priority, 10) : 0;

    const result = db
        .prepare(
            `INSERT INTO advertisements
                (type, title, content, media_path, media_type, link_url, start_date, end_date, priority, is_active, created_by)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?)`
        )
        .run(
            type,
            title.trim(),
            content ? content.trim() : null,
            mediaPath,
            mediaType,
            linkUrl ? linkUrl.trim() : null,
            startDate || null,
            endDate || null,
            priorityValue,
            req.session.user.id
        );

    const row = db.prepare(`SELECT * FROM advertisements WHERE id = ?`).get(result.lastInsertRowid);
    res.status(201).json({ advertisement: toPublicAd(row) });
});

router.patch("/:id", upload.single("media"), (req, res) => {
    const ad = db.prepare(`SELECT * FROM advertisements WHERE id = ?`).get(req.params.id);
    if (!ad) return res.status(404).json({ error: "Advertisement not found." });

    const { title, content, linkUrl, startDate, endDate, priority, isActive } = req.body || {};

    const startDateFinal = startDate !== undefined ? (startDate || null) : ad.start_date;
    const endDateFinal = endDate !== undefined ? (endDate || null) : ad.end_date;
    if (startDateFinal && endDateFinal && endDateFinal < startDateFinal) {
        return res.status(400).json({ error: "End date can't be before start date." });
    }

    let mediaPath = ad.media_path;
    let mediaType = ad.media_type;
    if (req.file) {
        if (ad.media_path) {
            fs.unlink(path.join(ADS_DIR, path.basename(ad.media_path)), () => {});
        }
        mediaPath = `/uploads/ads/${req.file.filename}`;
        mediaType = ALLOWED_MEDIA[req.file.mimetype];
    }

    db.prepare(
        `UPDATE advertisements SET
            title = ?, content = ?, media_path = ?, media_type = ?, link_url = ?,
            start_date = ?, end_date = ?, priority = ?, is_active = ?
         WHERE id = ?`
    ).run(
        title !== undefined && title !== "" ? title.trim() : ad.title,
        content !== undefined ? (content ? content.trim() : null) : ad.content,
        mediaPath,
        mediaType,
        linkUrl !== undefined ? (linkUrl ? linkUrl.trim() : null) : ad.link_url,
        startDateFinal,
        endDateFinal,
        priority !== undefined && priority !== "" ? parseInt(priority, 10) : ad.priority,
        isActive !== undefined ? (isTruthy(isActive) ? 1 : 0) : ad.is_active,
        ad.id
    );

    const updated = db.prepare(`SELECT * FROM advertisements WHERE id = ?`).get(ad.id);
    res.json({ advertisement: toPublicAd(updated) });
});

router.delete("/:id", (req, res) => {
    const ad = db.prepare(`SELECT * FROM advertisements WHERE id = ?`).get(req.params.id);
    if (!ad) return res.status(404).json({ error: "Advertisement not found." });

    db.prepare(`DELETE FROM advertisements WHERE id = ?`).run(ad.id);
    if (ad.media_path) {
        fs.unlink(path.join(ADS_DIR, path.basename(ad.media_path)), () => {});
    }

    res.json({ ok: true });
});

module.exports = router;
