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

// Measured 2026-11-11 with the real system prompt: flash-lite streams its
// first words in ~1-2.5s. The full "gemini-flash-latest" model thinks before
// answering and took 50-280s (or failed outright), so it must never be used
// here — not even as the fallback, where it would turn a quick failure into
// a multi-minute hang.
const MODEL = process.env.GEMINI_MODEL || "gemini-flash-lite-latest";
// A different, equally fast lite model, tried once if the primary errors or
// stalls before sending any text (~1-1.5s in the same test).
const FALLBACK_MODEL = process.env.GEMINI_FALLBACK_MODEL || "gemini-3.1-flash-lite";
// If a model hasn't produced its first words by now, give up on it and try
// the fallback instead of leaving the visitor staring at the typing dots.
const FIRST_CHUNK_TIMEOUT_MS = 12000;
const MAX_HISTORY_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 1000;

const SUPPORTED_LANGS = { en: "English", bn: "Bengali (Bangla)", ja: "Japanese", ne: "Nepali" };

let client = null;
function getClient() {
    if (!process.env.GEMINI_API_KEY) return null;
    if (!client) client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    return client;
}

// Everything except the reply language is identical for every request, and
// the language line sits at the very END — so Gemini's automatic prefix
// caching can reuse the large site-content block across all visitors and
// languages, which shortens time-to-first-word. Built once per language.
const instructionCache = {};
function systemInstruction(lang) {
    const code = SUPPORTED_LANGS[lang] ? lang : "en";
    if (instructionCache[code]) return instructionCache[code];
    const langName = SUPPORTED_LANGS[code];
    instructionCache[code] = `You are the friendly, knowledgeable assistant embedded on the Easy Japanese homepage — a free site for learning Japanese (JLPT N5-N1). Visitors ask you about the site's courses and about Japanese itself.

Ground every claim about what the site offers in the reference data below — never invent chapters, levels, or features that aren't listed there. When a chapter or topic is relevant, mention it by name so the visitor can find it (e.g. "check out Vocabulary Chapter 3: Daily Routine, Time & Dates").

You may also directly help with Japanese-language questions (vocabulary, grammar, readings, translations) even if they're not about the site's own content — that's core to being useful to a Japanese learner.

Keep answers short and conversational — a few sentences, not an essay.

--- SITE CONTENT REFERENCE ---
${buildContext()}
--- END REFERENCE ---

Respond in ${langName} unless the visitor writes in a different language, in which case follow their lead.`;
    return instructionCache[code];
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

    const models = FALLBACK_MODEL && FALLBACK_MODEL !== MODEL ? [MODEL, FALLBACK_MODEL] : [MODEL];
    let wroteAny = false;

    try {
        for (let i = 0; i < models.length; i++) {
            const abort = new AbortController();
            // Only guards the wait for the FIRST words — once text is
            // flowing, the reply is allowed to finish normally.
            const stallTimer = setTimeout(() => abort.abort(), FIRST_CHUNK_TIMEOUT_MS);
            try {
                const stream = await genAI.models.generateContentStream({
                    model: models[i],
                    contents,
                    config: {
                        systemInstruction: systemInstruction(lang),
                        maxOutputTokens: 600,
                        abortSignal: abort.signal
                    }
                });

                for await (const chunk of stream) {
                    if (chunk.text) {
                        if (!wroteAny) clearTimeout(stallTimer);
                        res.write(chunk.text);
                        wroteAny = true;
                    }
                }
                clearTimeout(stallTimer);
                if (!wroteAny) throw new Error(`Empty response from ${models[i]}`);
                break;
            } catch (err) {
                clearTimeout(stallTimer);
                // Only retry if nothing reached the visitor yet — otherwise the
                // fallback's answer would be appended to a half-written reply.
                if (wroteAny || i === models.length - 1) throw err;
                console.warn(`Chatbot: ${models[i]} failed, retrying with ${models[i + 1]}:`, err.message);
            }
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
