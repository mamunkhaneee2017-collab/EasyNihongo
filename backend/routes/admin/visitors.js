const express = require("express");
const db = require("../../db");
const requireAdmin = require("../../middleware/requireAdmin");

const router = express.Router();

router.use(requireAdmin);

function timeAgo(isoString) {
    const seconds = Math.max(0, Math.round((Date.now() - new Date(isoString + "Z").getTime()) / 1000));
    if (seconds < 60) return "Just now";
    const minutes = Math.round(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    const hours = Math.round(minutes / 60);
    if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    const days = Math.round(hours / 24);
    return `${days} day${days === 1 ? "" : "s"} ago`;
}

router.get("/", (req, res) => {
    const rows = db
        .prepare(`SELECT * FROM page_views ORDER BY created_at DESC LIMIT 50`)
        .all();

    const todayCount = db
        .prepare(`SELECT COUNT(*) as c FROM page_views WHERE date(created_at) = date('now')`)
        .get().c;

    const weekCount = db
        .prepare(`SELECT COUNT(*) as c FROM page_views WHERE created_at >= datetime('now', '-6 days')`)
        .get().c;

    const totalCount = db.prepare(`SELECT COUNT(*) as c FROM page_views`).get().c;

    const deviceBreakdown = db
        .prepare(`SELECT device_type, COUNT(*) as c FROM page_views GROUP BY device_type ORDER BY c DESC`)
        .all();

    res.json({
        visitors: rows.map((v) => ({
            path: v.path,
            device: v.device_type,
            time: timeAgo(v.created_at)
        })),
        summary: { todayCount, weekCount, totalCount },
        deviceBreakdown: deviceBreakdown.map((d) => ({ device: d.device_type, count: d.c }))
    });
});

module.exports = router;
