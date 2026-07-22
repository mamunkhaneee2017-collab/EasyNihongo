const bcrypt = require("bcryptjs");
const db = require("./index");

function seedAdmin() {
    const existing = db.prepare("SELECT id FROM users WHERE role = 'admin' LIMIT 1").get();
    if (existing) return;

    const email = process.env.ADMIN_SEED_EMAIL || "admin@easynihongo.com";
    const password = process.env.ADMIN_SEED_PASSWORD || "admin123";
    const passwordHash = bcrypt.hashSync(password, 10);

    db.prepare(
        `INSERT INTO users (full_name, email, password_hash, role, is_active)
         VALUES (?, ?, ?, 'admin', 1)`
    ).run("Md Mamun Khan", email, passwordHash);

    console.log(`Seeded admin account: ${email}`);
}

function seedDefaultAd() {
    const existing = db.prepare("SELECT id FROM advertisements LIMIT 1").get();
    if (existing) return;

    db.prepare(
        `INSERT INTO advertisements (type, title, content, priority, is_active)
         VALUES ('text', ?, ?, 0, 1)`
    ).run(
        "Default scrolling announcement",
        "🎉 New: JLPT N4 course is now live — start learning today! &nbsp;&nbsp;•&nbsp;&nbsp; 📚 500+ free practice questions across N5–N1 &nbsp;&nbsp;•&nbsp;&nbsp; 🔥 Track your streak and XP on your dashboard"
    );
}

module.exports = { seedAdmin, seedDefaultAd };
