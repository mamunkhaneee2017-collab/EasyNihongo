const express = require("express");
const db = require("../db");
const { computeContentStats } = require("../lib/siteStats");

const router = express.Router();

/* ==========================================
   PUBLIC SITE STATS — GET /api/stats
   Content counts come from data/*.js (via
   backend/lib/siteStats.js, computed once at
   startup — they only change on deploy);
   people/activity counts are read live from the
   database (0 is a valid answer).
   Consumed by js/site-stats.js, which also has
   the content counts baked in via
   data/site-stats.js for when this is unreachable.
========================================== */

const CONTENT = computeContentStats();

// The baked-in copy pages fall back to must match the live data.
try {
    const baked = require("../../data/site-stats.js");
    if (JSON.stringify(baked) !== JSON.stringify(CONTENT)) {
        console.warn("data/site-stats.js is out of date with data/*.js — run: npm run generate:site-stats");
    }
} catch (err) {
    console.warn("data/site-stats.js missing — run: npm run generate:site-stats");
}

router.get("/", (req, res) => {
    const students = db.prepare(`SELECT COUNT(*) AS c FROM users WHERE role = 'student'`).get().c;
    const quizzesTaken = db.prepare(`SELECT COUNT(*) AS c FROM quiz_attempts`).get().c;
    const studyMinutes = db.prepare(`SELECT COALESCE(SUM(minutes), 0) AS m FROM activity_log`).get().m;
    const totalVisits = db.prepare(`SELECT COUNT(*) AS c FROM page_views`).get().c;

    res.set("Cache-Control", "public, max-age=60");
    res.json({
        ...CONTENT,
        students,
        quizzesTaken,
        studyHours: Math.floor(studyMinutes / 60),
        totalVisits
    });
});

module.exports = router;
