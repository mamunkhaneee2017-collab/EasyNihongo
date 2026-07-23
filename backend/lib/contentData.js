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
const coursesData = require(path.join(DATA_DIR, "courses", "courses-data.js"));
const hiraganaData = require(path.join(DATA_DIR, "hiragana-data.js"));
const katakanaData = require(path.join(DATA_DIR, "katakana-data.js"));

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

module.exports = {
    kanjiData,
    grammarData,
    quizData,
    vocabularyData,
    coursesData,
    hiraganaData,
    katakanaData,
    levelItemCount,
    levelItemExists,
    totalItemCount,
    flatItemExists,
    quizLevelsWithContent
};
