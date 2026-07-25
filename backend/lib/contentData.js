/* ==========================================
   Loads the same data/*.js files the browser
   uses (each now also does `module.exports =`
   at the bottom — see data/ comments) so the
   server has a single source of truth for
   "how many items exist per level" without
   duplicating any content or needing a build step.
========================================== */

const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "..", "data");

const { flattenLevel } = require(path.join(DATA_DIR, "content-helpers.js"));
const kanjiData = require(path.join(DATA_DIR, "kanji", "kanji-data.js"));
const grammarData = require(path.join(DATA_DIR, "grammar", "grammar-data.js"));
const quizData = require(path.join(DATA_DIR, "quiz", "quiz-data.js"));
const vocabularyData = require(path.join(DATA_DIR, "vocabulary", "vocabulary-data.js"));
const vocabularyTopicsData = require(path.join(DATA_DIR, "vocabulary", "vocabulary-topics-data.js"));
const coursesData = require(path.join(DATA_DIR, "courses", "courses-data.js"));
const hiraganaData = require(path.join(DATA_DIR, "hiragana-data.js"));
const katakanaData = require(path.join(DATA_DIR, "katakana-data.js"));
const kanaRows = require(path.join(DATA_DIR, "kana-rows.js"));
const kanaStrokesData = require(path.join(DATA_DIR, "kana-strokes-data.js"));
const kanaDetailData = require(path.join(DATA_DIR, "kana-detail-data.js"));

// kanji/grammar/vocabulary are now { chapters: [...] } per level — flatten
// once here into { chapters: [...with startIndex/endIndex], items: [...] }
// so the flat, global item_index used by progress_items keeps working
// exactly as before. The frontend chapter pages call this same
// flattenLevel() on the raw data so index math never drifts between
// server and browser.
function flattenAllLevels(rawData) {
    const result = {};
    Object.keys(rawData).forEach((level) => {
        result[level] = flattenLevel(rawData[level]);
    });
    return result;
}

const LEVEL_KEYED = {
    kanji: flattenAllLevels(kanjiData),
    grammar: flattenAllLevels(grammarData),
    vocabulary: flattenAllLevels(vocabularyData)
};
const FLAT = { hiragana: hiraganaData, katakana: katakanaData };

// Topic-based vocabulary ("Vocabulary by Subject") is a flat array of
// {id, items:[...]} objects, structurally different from the level-keyed
// {chapters:[...]} shape above — kept in its own lookup rather than forced
// through flattenLevel/LEVEL_KEYED.
const TOPIC_KEYED = {};
vocabularyTopicsData.forEach((topic) => { TOPIC_KEYED[topic.id] = topic; });

function levelItemCount(contentType, level) {
    const source = LEVEL_KEYED[contentType];
    if (!source || !source[level]) return 0;
    return source[level].items.length;
}

function levelItemExists(contentType, level, itemIndex) {
    const source = LEVEL_KEYED[contentType];
    if (!source || !source[level]) return false;
    return Number.isInteger(itemIndex) && itemIndex >= 0 && itemIndex < source[level].items.length;
}

function totalItemCount(contentType) {
    const source = LEVEL_KEYED[contentType];
    if (!source) return 0;
    return Object.keys(source).reduce((sum, level) => sum + source[level].items.length, 0);
}

function flatItemExists(contentType, itemIndex) {
    const source = FLAT[contentType];
    if (!source) return false;
    return Number.isInteger(itemIndex) && itemIndex >= 0 && itemIndex < source.length;
}

function quizLevelsWithContent() {
    return Object.keys(quizData).filter((level) => quizData[level].length > 0);
}

function topicItemExists(topicId, itemIndex) {
    const topic = TOPIC_KEYED[topicId];
    if (!topic) return false;
    return Number.isInteger(itemIndex) && itemIndex >= 0 && itemIndex < topic.items.length;
}

// Small display-data lookups used by the "My Favorites" aggregate route —
// each returns a plain object safe to send to the client, or null.

function resolveFlatItem(contentType, index) {
    const source = FLAT[contentType];
    if (!source || !source[index]) return null;
    const item = source[index];
    return { character: item.character, romaji: item.romaji, meaning: item.meaning };
}

function resolveLevelItem(contentType, level, index) {
    const source = LEVEL_KEYED[contentType];
    if (!source || !source[level] || !source[level].items[index]) return null;
    const item = source[level].items[index];
    // 1-based chapter number this item lives in, so favorites can link
    // straight into chapter.html instead of just the chapters list.
    const chapterIndex = source[level].chapters.findIndex((c) => index >= c.startIndex && index <= c.endIndex);
    const chapterNumber = chapterIndex === -1 ? 1 : chapterIndex + 1;
    if (contentType === "kanji") {
        return { char: item.char, meaning: item.meanings ? item.meanings.en : item.meaning, chapterNumber };
    }
    if (contentType === "grammar") {
        return { pattern: item.pattern, meaning: item.meanings ? item.meanings.en : item.meaning, chapterNumber };
    }
    return { word: item.word, reading: item.reading, meaning: item.meanings ? item.meanings.en : "", chapterNumber };
}

function resolveTopicItem(topicId, index) {
    const topic = TOPIC_KEYED[topicId];
    if (!topic || !topic.items[index]) return null;
    const item = topic.items[index];
    return { word: item.word, reading: item.reading, meaning: item.meanings ? item.meanings.en : "", topicTitle: topic.title };
}

module.exports = {
    kanjiData,
    grammarData,
    quizData,
    vocabularyData,
    vocabularyTopicsData,
    coursesData,
    hiraganaData,
    katakanaData,
    kanaRows,
    kanaStrokesData,
    kanaDetailData,
    levelItemCount,
    levelItemExists,
    totalItemCount,
    flatItemExists,
    quizLevelsWithContent,
    topicItemExists,
    resolveFlatItem,
    resolveLevelItem,
    resolveTopicItem
};
