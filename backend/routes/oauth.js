const express = require("express");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const db = require("../db");

const router = express.Router();

// Must match the platform this is actually running on — localhost while
// developing, the real Render/Fly URL once deployed — because Google and
// GitHub both check the redirect_uri against what's registered on the
// OAuth app, so it can't be inferred from the request alone.
const BASE_URL = process.env.APP_BASE_URL || "http://localhost:3000";

function findOrCreateOAuthUser({ column, providerId, email, name }) {
    let user = db.prepare(`SELECT * FROM users WHERE ${column} = ?`).get(providerId);
    if (user) return user;

    // Same email already registered (e.g. via password signup) — link
    // this provider to that existing account instead of creating a dupe.
    user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
    if (user) {
        db.prepare(`UPDATE users SET ${column} = ? WHERE id = ?`).run(providerId, user.id);
        return db.prepare("SELECT * FROM users WHERE id = ?").get(user.id);
    }

    // OAuth-only accounts still need *some* password_hash to satisfy the
    // NOT NULL column — a random one nobody knows, since they'll only
    // ever sign in through the provider.
    const randomPasswordHash = bcrypt.hashSync(crypto.randomUUID(), 10);
    const result = db
        .prepare(
            `INSERT INTO users (full_name, email, password_hash, role, ${column})
             VALUES (?, ?, ?, 'student', ?)`
        )
        .run(name || email.split("@")[0], email, randomPasswordHash, providerId);

    return db.prepare("SELECT * FROM users WHERE id = ?").get(result.lastInsertRowid);
}

function signInAndRedirect(req, res, user) {
    req.session.user = { id: user.id, role: user.role };
    res.redirect(user.role === "admin" ? "/admin/index.html" : "/pages/dashboard.html");
}

/* =============================== GOOGLE =============================== */

router.get("/google", (req, res) => {
    if (!process.env.GOOGLE_CLIENT_ID) {
        return res.redirect("/pages/login.html?error=oauth_not_configured");
    }

    const params = new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID,
        redirect_uri: `${BASE_URL}/api/auth/google/callback`,
        response_type: "code",
        scope: "openid email profile",
        prompt: "select_account"
    });
    res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`);
});

router.get("/google/callback", async (req, res) => {
    try {
        const { code } = req.query;
        if (!code) throw new Error("Missing authorization code");

        const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                code,
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                redirect_uri: `${BASE_URL}/api/auth/google/callback`,
                grant_type: "authorization_code"
            })
        });
        const tokenData = await tokenRes.json();
        if (!tokenData.access_token) throw new Error("Google token exchange failed");

        const profileRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
            headers: { Authorization: `Bearer ${tokenData.access_token}` }
        });
        const profile = await profileRes.json();
        if (!profile.email) throw new Error("Google profile had no email");

        const user = findOrCreateOAuthUser({
            column: "google_id",
            providerId: profile.id,
            email: profile.email,
            name: profile.name
        });

        signInAndRedirect(req, res, user);
    } catch (err) {
        console.error("Google OAuth error:", err.message);
        res.redirect("/pages/login.html?error=oauth");
    }
});

/* =============================== GITHUB =============================== */

router.get("/github", (req, res) => {
    if (!process.env.GITHUB_CLIENT_ID) {
        return res.redirect("/pages/login.html?error=oauth_not_configured");
    }

    const params = new URLSearchParams({
        client_id: process.env.GITHUB_CLIENT_ID,
        redirect_uri: `${BASE_URL}/api/auth/github/callback`,
        scope: "read:user user:email"
    });
    res.redirect(`https://github.com/login/oauth/authorize?${params}`);
});

router.get("/github/callback", async (req, res) => {
    try {
        const { code } = req.query;
        if (!code) throw new Error("Missing authorization code");

        const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
            body: new URLSearchParams({
                code,
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                redirect_uri: `${BASE_URL}/api/auth/github/callback`
            })
        });
        const tokenData = await tokenRes.json();
        if (!tokenData.access_token) throw new Error("GitHub token exchange failed");

        const authHeaders = {
            Authorization: `Bearer ${tokenData.access_token}`,
            "User-Agent": "EasyNihongo"
        };

        const profileRes = await fetch("https://api.github.com/user", { headers: authHeaders });
        const profile = await profileRes.json();

        let email = profile.email;
        if (!email) {
            const emailsRes = await fetch("https://api.github.com/user/emails", { headers: authHeaders });
            const emails = await emailsRes.json();
            const primary = Array.isArray(emails) ? emails.find((e) => e.primary) || emails[0] : null;
            email = primary ? primary.email : `github-${profile.id}@users.noreply.github.com`;
        }

        const user = findOrCreateOAuthUser({
            column: "github_id",
            providerId: String(profile.id),
            email,
            name: profile.name || profile.login
        });

        signInAndRedirect(req, res, user);
    } catch (err) {
        console.error("GitHub OAuth error:", err.message);
        res.redirect("/pages/login.html?error=oauth");
    }
});

module.exports = router;
