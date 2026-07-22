const db = require("../db");

const insertView = db.prepare(
    `INSERT INTO page_views (path, device_type, user_agent, ip) VALUES (?, ?, ?, ?)`
);

const ASSET_EXTENSION = /\.(css|js|json|png|jpe?g|gif|svg|ico|webp|mp3|wav|mp4|woff2?|ttf|map)$/i;

function detectDeviceType(userAgent) {
    const ua = (userAgent || "").toLowerCase();
    if (/ipad|tablet/.test(ua)) return "Tablet";
    if (/mobi|android|iphone/.test(ua)) return "Mobile";
    return "Desktop";
}

module.exports = function logVisit(req, res, next) {
    const isPageRequest =
        req.method === "GET" &&
        !req.path.startsWith("/api/") &&
        !ASSET_EXTENSION.test(req.path);

    if (isPageRequest) {
        try {
            insertView.run(
                req.path,
                detectDeviceType(req.headers["user-agent"]),
                req.headers["user-agent"] || null,
                req.ip
            );
        } catch (err) {
            console.error("Failed to log page view:", err.message);
        }
    }

    next();
};
