const express = require("express");
const db = require("../../db");
const requireAdmin = require("../../middleware/requireAdmin");

const router = express.Router();

router.use(requireAdmin);

router.get("/", (req, res) => {
    const rows = db
        .prepare(
            `SELECT id, full_name, email, country, current_level, target_level, is_active, created_at
             FROM users WHERE role = 'student' ORDER BY created_at DESC`
        )
        .all();

    res.json({
        students: rows.map((u) => ({
            id: u.id,
            name: u.full_name,
            email: u.email,
            country: u.country,
            level: u.target_level || u.current_level || "N5",
            joined: u.created_at,
            status: u.is_active ? "active" : "inactive"
        }))
    });
});

router.patch("/:id", (req, res) => {
    const student = db
        .prepare(`SELECT * FROM users WHERE id = ? AND role = 'student'`)
        .get(req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found." });

    const { isActive } = req.body || {};
    const newActive = isActive !== undefined ? (isActive ? 1 : 0) : student.is_active;

    db.prepare(`UPDATE users SET is_active = ? WHERE id = ?`).run(newActive, student.id);

    res.json({ status: newActive ? "active" : "inactive" });
});

module.exports = router;
