const express = require("express");
const db = require("../db");

const router = express.Router();

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
        priority: row.priority
    };
}

// Public: the single highest-priority, currently-active, in-date-range ad
// per slot (text scroller + image/video banner). Admin can run many ads at
// once; only the top one per type is ever shown here.
router.get("/", (req, res) => {
    const today = new Date().toISOString().slice(0, 10);

    const rows = db
        .prepare(
            `SELECT * FROM advertisements
             WHERE is_active = 1
               AND (start_date IS NULL OR start_date <= ?)
               AND (end_date IS NULL OR end_date >= ?)
             ORDER BY priority DESC, id DESC`
        )
        .all(today, today);

    const text = rows.find((r) => r.type === "text") || null;
    const banner = rows.find((r) => r.type === "banner") || null;

    res.json({
        text: text ? toPublicAd(text) : null,
        banner: banner ? toPublicAd(banner) : null
    });
});

module.exports = router;
