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

db.exec(`
    INSERT OR IGNORE INTO site_settings (id, site_name, contact_email, social_facebook, social_instagram, social_youtube, social_github)
    VALUES (1, 'Easy Nihongo', 'info@easynihongo.com',
        'https://facebook.com/mamun.999.690',
        'https://instagram.com/mamun.999.690',
        'https://www.youtube.com/channel/UCQnO_ceT5HFF9UtRC266Ykg',
        'https://github.com/mamunkhaneee2017-collab');
`);

module.exports = db;
