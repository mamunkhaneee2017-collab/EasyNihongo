-- EasyNihongo database schema

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('student','admin')) DEFAULT 'student',
    country TEXT,
    current_level TEXT,
    target_level TEXT,
    daily_goal_minutes INTEGER NOT NULL DEFAULT 60,
    avatar_path TEXT,
    xp INTEGER NOT NULL DEFAULT 0,
    is_active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS activity_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    activity_date TEXT NOT NULL,
    minutes INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS quiz_attempts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    level TEXT NOT NULL,
    correct INTEGER NOT NULL,
    total INTEGER NOT NULL,
    percent INTEGER NOT NULL,
    taken_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS progress_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content_type TEXT NOT NULL CHECK(content_type IN ('kanji','grammar','hiragana','katakana','vocabulary')),
    level TEXT NOT NULL,
    item_index INTEGER NOT NULL,
    completed_at TEXT NOT NULL DEFAULT (datetime('now')),
    UNIQUE(user_id, content_type, level, item_index)
);

CREATE TABLE IF NOT EXISTS favorites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content_type TEXT NOT NULL CHECK(content_type IN ('hiragana','katakana','vocabulary','vocabulary-topic','grammar','kanji')),
    level TEXT NOT NULL DEFAULT '',
    item_index INTEGER NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    UNIQUE(user_id, content_type, level, item_index)
);

CREATE TABLE IF NOT EXISTS character_progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content_type TEXT NOT NULL CHECK(content_type IN ('hiragana','katakana')),
    item_index INTEGER NOT NULL,
    status TEXT NOT NULL CHECK(status IN ('learning','practicing','completed','mastered')) DEFAULT 'learning',
    best_accuracy INTEGER NOT NULL DEFAULT 0,
    practice_count INTEGER NOT NULL DEFAULT 0,
    last_practiced_at TEXT,
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    UNIQUE(user_id, content_type, item_index)
);

-- Legacy/superseded: vocabulary now has real per-word chapters and tracks
-- progress the same way as kanji/grammar, via progress_items with
-- content_type='vocabulary'. This table is kept only so any pre-existing
-- rows aren't lost; nothing reads or writes it anymore.
CREATE TABLE IF NOT EXISTS vocabulary_progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    level TEXT NOT NULL,
    completed INTEGER NOT NULL DEFAULT 0,
    completed_at TEXT,
    UNIQUE(user_id, level)
);

CREATE TABLE IF NOT EXISTS materials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    filename TEXT NOT NULL,
    original_name TEXT NOT NULL,
    level TEXT NOT NULL,
    category TEXT NOT NULL,
    mime_type TEXT NOT NULL,
    size_bytes INTEGER NOT NULL,
    status TEXT NOT NULL CHECK(status IN ('draft','published')) DEFAULT 'draft',
    uploaded_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL CHECK(status IN ('new','replied')) DEFAULT 'new',
    reply_text TEXT,
    replied_at TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS page_views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    path TEXT NOT NULL,
    device_type TEXT NOT NULL DEFAULT 'unknown',
    user_agent TEXT,
    ip TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS advertisements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL CHECK(type IN ('text','banner')),
    title TEXT NOT NULL,
    content TEXT,
    media_path TEXT,
    media_type TEXT CHECK(media_type IN ('image','video')),
    link_url TEXT,
    start_date TEXT,
    end_date TEXT,
    priority INTEGER NOT NULL DEFAULT 0,
    is_active INTEGER NOT NULL DEFAULT 1,
    created_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS hero_photos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image_path TEXT NOT NULL,
    shape TEXT NOT NULL DEFAULT 'circle' CHECK(shape IN ('circle','rounded-square','blob','hexagon')),
    display_order INTEGER NOT NULL DEFAULT 0,
    is_active INTEGER NOT NULL DEFAULT 1,
    uploaded_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS site_settings (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    site_name TEXT NOT NULL DEFAULT 'Easy Nihongo',
    contact_email TEXT NOT NULL DEFAULT 'info@easynihongo.com',
    support_phone TEXT,
    social_facebook TEXT,
    social_instagram TEXT,
    social_youtube TEXT,
    social_github TEXT,
    maintenance_mode INTEGER NOT NULL DEFAULT 0,
    notify_admin_on_message INTEGER NOT NULL DEFAULT 1
);
