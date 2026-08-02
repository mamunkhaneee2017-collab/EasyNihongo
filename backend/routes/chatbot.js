const express = require("express");
const rateLimit = require("express-rate-limit");
const { GoogleGenAI } = require("@google/genai");
const { buildContext } = require("../lib/chatbotContext");

const router = express.Router();

// Keyed by IP (trust proxy is already set in server.js). Free-tier Gemini
// keys have their own rate limits upstream, but this also caps runaway
// cost/abuse from a single visitor hammering the widget.
const chatLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "You're sending messages a bit fast — please wait a few minutes and try again." }
});

const MODEL = process.env.GEMINI_MODEL || "gemini-flash-latest";
const MAX_HISTORY_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 1000;

const SUPPORTED_LANGS = { en: "English", bn: "Bengali (Bangla)", ja: "Japanese" };

let client = null;
function getClient() {
    if (!process.env.GEMINI_API_KEY) return null;
    if (!client) client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    return client;
}

function systemInstruction(lang) {
    const langName = SUPPORTED_LANGS[lang] || "English";
    return `You are the friendly, knowledgeable assistant embedded on the Easy Nihongo homepage — a free site for learning Japanese (JLPT N5-N1). Visitors ask you about the site's courses and about Japanese itself.

Ground every claim about what the site offers in the reference data below — never invent chapters, levels, or features that aren't listed there. When a chapter or topic is relevant, mention it by name so the visitor can find it (e.g. "check out Vocabulary Chapter 3: Daily Routine, Time & Dates").

You may also directly help with Japanese-language questions (vocabulary, grammar, readings, translations) even if they're not about the site's own content — that's core to being useful to a Japanese learner.

Keep answers short and conversational — a few sentences, not an essay. Respond in ${langName} unless the visitor writes in a different language, in which case follow their lead.

--- SITE CONTENT REFERENCE ---
${buildContext()}
--- END REFERENCE ---`;
}

function sanitizeHistory(rawHistory) {
    if (!Array.isArray(rawHistory)) return [];
    return rawHistory
        .filter((m) => m && (m.role === "user" || m.role === "model") && typeof m.text === "string")
        .slice(-MAX_HISTORY_MESSAGES)
        .map((m) => ({
            role: m.role,
            parts: [{ text: m.text.slice(0, MAX_MESSAGE_LENGTH) }]
        }));
}

router.post("/message", chatLimiter, async (req, res) => {
    const genAI = getClient();
    if (!genAI) {
        return res.status(503).json({ error: "The chatbot isn't configured yet — GEMINI_API_KEY is missing on the server." });
    }

    const { message, history, lang } = req.body || {};
    if (typeof message !== "string" || !message.trim()) {
        return res.status(400).json({ error: "Message is required." });
    }

    const contents = [
        ...sanitizeHistory(history),
        { role: "user", parts: [{ text: message.trim().slice(0, MAX_MESSAGE_LENGTH) }] }
    ];

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");

    try {
        const stream = await genAI.models.generateContentStream({
            model: MODEL,
            contents,
            config: {
                systemInstruction: systemInstruction(lang),
                maxOutputTokens: 600
            }
        });

        for await (const chunk of stream) {
            if (chunk.text) res.write(chunk.text);
        }
        res.end();
    } catch (err) {
        console.error("Chatbot error:", err);
        // Headers may already be sent if the stream started before it failed —
        // in that case just end the response; the client treats a response
        // with no recognizable content as a failure and shows its own fallback.
        if (!res.headersSent) {
            res.status(502).json({ error: "The assistant is temporarily unavailable. Please try again shortly." });
        } else {
            res.end();
        }
    }
});

module.exports = router;
