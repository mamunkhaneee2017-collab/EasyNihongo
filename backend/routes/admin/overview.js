const express = require("express");
const db = require("../../db");
const requireAdmin = require("../../middleware/requireAdmin");

const router = express.Router();

router.use(requireAdmin);

router.get("/", (req, res) => {
    const studentCount = db.prepare(`SELECT COUNT(*) as c FROM users WHERE role = 'student'`).get().c;
    const materialCount = db.prepare(`SELECT COUNT(*) as c FROM materials`).get().c;
    const unreadMessages = db.prepare(`SELECT COUNT(*) as c FROM messages WHERE status = 'new'`).get().c;
    const visitorsToday = db
        .prepare(`SELECT COUNT(*) as c FROM page_views WHERE date(created_at) = date('now')`)
        .get().c;

    const rows = db
        .prepare(
            `SELECT date(created_at) as day, COUNT(*) as c FROM page_views
             WHERE created_at >= datetime('now', '-6 days') GROUP BY day`
        )
        .all();
    const countsByDay = {};
    rows.forEach((r) => { countsByDay[r.day] = r.c; });

    const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const maxCount = Math.max(1, ...Object.values(countsByDay));
    const weeklyVisits = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = d.toISOString().slice(0, 10);
        const count = countsByDay[key] || 0;
        weeklyVisits.push({
            day: dayLabels[d.getUTCDay()],
            percent: Math.round((count / maxCount) * 100)
        });
    }

    res.json({
        studentCount,
        materialCount,
        unreadMessages,
        visitorsToday,
        weeklyVisits
    });
});

module.exports = router;
