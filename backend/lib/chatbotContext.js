/* ==========================================
   CHATBOT GROUNDING CONTEXT
   Builds a compact, factual summary of what
   content actually exists on the site (from the
   same data files the rest of the backend uses —
   see contentData.js) so the chatbot's system
   prompt never drifts from reality or invents
   chapters/features that don't exist. Computed
   once at server startup and cached, since the
   underlying data files only change on deploy.
========================================== */

const content = require("./contentData");

const LEVELS = ["n5", "n4", "n3", "n2", "n1"];

function summarizeLevelSet(rawData) {
    return LEVELS.map((level) => {
        const chapters = rawData[level].chapters;
        const itemCount = chapters.reduce((sum, c) => sum + c.items.length, 0);
        if (!chapters.length) return `${level.toUpperCase()}: not available yet`;
        const titles = chapters.map((c) => c.title).join("; ");
        return `${level.toUpperCase()}: ${chapters.length} chapters, ${itemCount} items — ${titles}`;
    }).join("\n");
}

function summarizeQuiz() {
    return LEVELS.map((level) => {
        const count = content.quizData[level].length;
        return `${level.toUpperCase()}: ${count > 0 ? `${count} practice questions` : "not available yet"}`;
    }).join("\n");
}

let cached = null;

function buildContext() {
    if (cached) return cached;

    cached = `
SITE: Easy Nihongo (easynihongo.com) — a free Japanese-learning site covering
JLPT N5 through N1: hiragana, katakana, kanji, vocabulary, grammar, and JLPT
practice quizzes. Registration is free; a logged-in student gets a dashboard
with XP, streak, favorites, and progress tracking.

HIRAGANA & KATAKANA: All ${content.hiraganaData.length} hiragana and ${content.katakanaData.length} katakana
characters (including dakuten/handakuten and yōon combinations), each with
stroke-order animation, audio pronunciation, and practice quizzes.

VOCABULARY BY JLPT LEVEL (chapters go in order, chapter 1 first):
${summarizeLevelSet(content.vocabularyData)}

GRAMMAR BY JLPT LEVEL:
${summarizeLevelSet(content.grammarData)}

KANJI BY JLPT LEVEL:
${summarizeLevelSet(content.kanjiData)}

VOCABULARY BY TOPIC (not tied to a JLPT level — everyday situational words):
${content.vocabularyTopicsData.map((t) => t.title).join(", ")}

JLPT PRACTICE QUIZZES (multiple-choice, instant scoring):
${summarizeQuiz()}

IMPORTANT: N5 is the only fully built level right now. N4 has only a
small amount of grammar and kanji content and no vocabulary chapters yet.
N3, N2, and N1 have no content yet. Never claim N3-N1 content exists, and
be upfront that N4 is still thin — direct students to N5 as the complete,
recommended starting point.
`.trim();

    return cached;
}

module.exports = { buildContext };
