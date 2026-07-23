const { DatabaseSync } = require("node:sqlite");
const fs = require("fs");
const path = require("path");
const { DB_DIR } = require("../config/paths");

const DB_PATH = path.join(DB_DIR, "easynihongo.sqlite");

fs.mkdirSync(DB_DIR, { recursive: true });

const db = new DatabaseSync(DB_PATH);
db.exec("PRAGMA foreign_keys = ON;");

const schema = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf8");
db.exec(schema);

// SQLite can't add a UNIQUE constraint to an existing column, so OAuth
// linkage columns are added here (idempotently) instead of schema.sql,
// with partial unique indexes so multiple users who never used a given
// provider (NULL) don't collide.
const userColumns = db.prepare("PRAGMA table_info(users)").all().map((c) => c.name);
if (!userColumns.includes("google_id")) {
    db.exec("ALTER TABLE users ADD COLUMN google_id TEXT;");
}
if (!userColumns.includes("github_id")) {
    db.exec("ALTER TABLE users ADD COLUMN github_id TEXT;");
}
db.exec(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id) WHERE google_id IS NOT NULL;
    CREATE UNIQUE INDEX IF NOT EXISTS idx_users_github_id ON users(github_id) WHERE github_id IS NOT NULL;
`);

// SQLite can't ALTER a CHECK constraint, so a database created before
// vocabulary joined mark-as-learned progress tracking needs progress_items
// rebuilt to allow content_type='vocabulary'. Guarded by inspecting the
// table's own stored CREATE TABLE text so this only ever runs once, and
// every existing row is preserved.
const progressItemsRow = db
    .prepare("SELECT sql FROM sqlite_master WHERE type = 'table' AND name = 'progress_items'")
    .get();

if (progressItemsRow && !progressItemsRow.sql.includes("'vocabulary'")) {
    db.exec("BEGIN;");
    try {
        db.exec(`
            CREATE TABLE progress_items_new (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                content_type TEXT NOT NULL CHECK(content_type IN ('kanji','grammar','hiragana','katakana','vocabulary')),
                level TEXT NOT NULL,
                item_index INTEGER NOT NULL,
                completed_at TEXT NOT NULL DEFAULT (datetime('now')),
                UNIQUE(user_id, content_type, level, item_index)
            );
            INSERT INTO progress_items_new SELECT * FROM progress_items;
            DROP TABLE progress_items;
            ALTER TABLE progress_items_new RENAME TO progress_items;
        `);
        db.exec("COMMIT;");
    } catch (err) {
        db.exec("ROLLBACK;");
        throw err;
    }
}

db.exec(`
    INSERT OR IGNORE INTO site_settings (id, site_name, contact_email, social_facebook, social_instagram, social_youtube, social_github)
    VALUES (1, 'Easy Nihongo', 'info@easynihongo.com',
        'https://facebook.com/mamun.999.690',
        'https://instagram.com/mamun.999.690',
        'https://www.youtube.com/channel/UCQnO_ceT5HFF9UtRC266Ykg',
        'https://github.com/mamunkhaneee2017-collab');
`);

module.exports = db;
