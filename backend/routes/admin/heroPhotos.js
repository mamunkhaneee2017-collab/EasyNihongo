const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const multer = require("multer");
const db = require("../../db");
const requireAdmin = require("../../middleware/requireAdmin");
const { UPLOADS_DIR: BASE_UPLOADS_DIR } = require("../../config/paths");

const router = express.Router();

const HERO_DIR = path.join(BASE_UPLOADS_DIR, "hero");
fs.mkdirSync(HERO_DIR, { recursive: true });

const ALLOWED_IMAGE = new Set(["image/jpeg", "image/png", "image/webp"]);
const VALID_SHAPES = new Set(["circle", "rounded-square", "blob", "hexagon"]);

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, HERO_DIR),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${crypto.randomUUID()}${ext}`);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (!ALLOWED_IMAGE.has(file.mimetype)) {
            return cb(new Error("Photo must be a JPG, PNG, or WEBP image."));
        }
        cb(null, true);
    }
});

router.use(requireAdmin);

function toPublicPhoto(row) {
    return {
        id: row.id,
        imagePath: row.image_path,
        shape: row.shape,
        displayOrder: row.display_order,
        isActive: !!row.is_active,
        createdAt: row.created_at
    };
}

function isTruthy(value) {
    return value === true || value === "true" || value === "1" || value === 1;
}

router.get("/", (req, res) => {
    const rows = db
        .prepare(`SELECT * FROM hero_photos ORDER BY display_order ASC, id ASC`)
        .all();
    res.json({ photos: rows.map(toPublicPhoto) });
});

router.post("/", upload.single("photo"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "A photo file is required." });
    }

    const { shape, displayOrder } = req.body || {};
    const shapeValue = VALID_SHAPES.has(shape) ? shape : "circle";
    const maxOrder = db.prepare(`SELECT MAX(display_order) AS m FROM hero_photos`).get().m;
    const orderValue = Number.isFinite(parseInt(displayOrder, 10))
        ? parseInt(displayOrder, 10)
        : (maxOrder === null ? 0 : maxOrder + 1);

    const result = db
        .prepare(
            `INSERT INTO hero_photos (image_path, shape, display_order, is_active, uploaded_by)
             VALUES (?, ?, ?, 1, ?)`
        )
        .run(`/uploads/hero/${req.file.filename}`, shapeValue, orderValue, req.session.user.id);

    const row = db.prepare(`SELECT * FROM hero_photos WHERE id = ?`).get(result.lastInsertRowid);
    res.status(201).json({ photo: toPublicPhoto(row) });
});

router.patch("/:id", upload.none(), (req, res) => {
    const photo = db.prepare(`SELECT * FROM hero_photos WHERE id = ?`).get(req.params.id);
    if (!photo) return res.status(404).json({ error: "Photo not found." });

    const { shape, displayOrder, isActive } = req.body || {};

    db.prepare(
        `UPDATE hero_photos SET shape = ?, display_order = ?, is_active = ? WHERE id = ?`
    ).run(
        shape !== undefined && VALID_SHAPES.has(shape) ? shape : photo.shape,
        displayOrder !== undefined && displayOrder !== "" ? parseInt(displayOrder, 10) : photo.display_order,
        isActive !== undefined ? (isTruthy(isActive) ? 1 : 0) : photo.is_active,
        photo.id
    );

    const updated = db.prepare(`SELECT * FROM hero_photos WHERE id = ?`).get(photo.id);
    res.json({ photo: toPublicPhoto(updated) });
});

router.delete("/:id", (req, res) => {
    const photo = db.prepare(`SELECT * FROM hero_photos WHERE id = ?`).get(req.params.id);
    if (!photo) return res.status(404).json({ error: "Photo not found." });

    db.prepare(`DELETE FROM hero_photos WHERE id = ?`).run(photo.id);
    fs.unlink(path.join(HERO_DIR, path.basename(photo.image_path)), () => {});

    res.json({ ok: true });
});

module.exports = router;
