const path = require("path");

// Locally this resolves to the repo root, so `database/` and `uploads/`
// sit next to package.json exactly as before — zero change to local dev.
// In production (Fly.io) DATA_DIR is set to the mounted persistent volume
// (e.g. /data), so the SQLite file and uploaded media survive redeploys
// and restarts instead of living on the container's ephemeral disk.
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, "..", "..");

const DB_DIR = path.join(DATA_DIR, "database");
const UPLOADS_DIR = path.join(DATA_DIR, "uploads");
const SESSIONS_DIR = path.join(DB_DIR, "sessions");

module.exports = { DATA_DIR, DB_DIR, UPLOADS_DIR, SESSIONS_DIR };
