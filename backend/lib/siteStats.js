/* ==========================================
   CONTENT STATS — single source of truth
   Counts what actually exists in data/*.js.
   Used by:
   - backend/routes/stats.js   (GET /api/stats)
   - scripts/generate-site-stats.js → writes
     data/site-stats.js, which pages load so the
     real numbers show even without the server
     (Live Server, file://, cold start).
========================================== */

const content = require("./contentData");

const LEVELS = ["n5", "n4", "n3", "n2", "n1"];

function levelItems(raw, level) {
    return raw[level] ? raw[level].chapters.flatMap((ch) => ch.items || []) : [];
}

function chapterCount(raw, level) {
    return raw[level] ? raw[level].chapters.length : 0;
}

function computeContentStats() {
    const perLevel = {};
    let kanji = 0, kanjiExampleWords = 0, grammar = 0, grammarExamples = 0, vocabularyLevel = 0, chapters = 0, quizQuestions = 0;

    LEVELS.forEach((level) => {
        const k = levelItems(content.kanjiData, level);
        const g = levelItems(content.grammarData, level);
        const v = levelItems(content.vocabularyData, level);
        const levelChapters =
            chapterCount(content.kanjiData, level) +
            chapterCount(content.grammarData, level) +
            chapterCount(content.vocabularyData, level);

        kanji += k.length;
        kanjiExampleWords += k.reduce((s, item) => s + (item.examples || []).length, 0);
        grammar += g.length;
        grammarExamples += g.reduce((s, item) => s + (item.examples || []).length, 0);
        vocabularyLevel += v.length;
        chapters += levelChapters;
        quizQuestions += (content.quizData[level] || []).length;

        perLevel[level] = { lessons: levelChapters, kanji: k.length, grammar: g.length, vocabulary: v.length };
    });

    const topicWords = content.vocabularyTopicsData.reduce((s, t) => s + (t.items || []).length, 0);

    return {
        levels: LEVELS.length,
        lessons: chapters,
        kanji,
        kanjiExampleWords,
        grammar,
        grammarExamples,
        vocabulary: vocabularyLevel + topicWords,
        vocabularyChapters: LEVELS.reduce((s, l) => s + chapterCount(content.vocabularyData, l), 0),
        kana: content.hiraganaData.length + content.katakanaData.length,
        quizQuestions,
        perLevel
    };
}

module.exports = { computeContentStats };
