/* ==========================================
   Generates one stroke-data JSON file per kanji
   currently authored in data/kanji/kanji-data.js,
   from the vendored animCJK dataset (see
   scripts/README.md to fetch it first).
   Run: npm run generate:kanji-strokes

   Deliberately scoped to characters that actually
   appear in kanji-data.js today, not animCJK's full
   ~7,000-file svgsJa/ dump — that folder mixes in
   Kangxi radicals, components, and variant forms
   with no jōyō/jinmeiyō classification to filter by,
   so generating from it wholesale would produce
   thousands of JSON files nobody would ever look up.
   Coverage still fully future-proofs N4-N1 content
   authoring: animCJK covers ~2,999 jōyō+jinmeiyō
   kanji by codepoint, so re-running this script
   after new chapters are added picks up their
   strokes automatically — nothing about the lookup
   (character -> codepoint -> file) is tied to what's
   authored today.

   Output: data/kanji/strokes/{codepointDecimal}.json,
   fetched on demand by js/kanji-strokes.js — kept
   out of kanji-data.js's own inlined <script> payload
   since stroke animation is only needed on the
   per-character view, not for a chapter list to render.
========================================== */

const fs = require("fs");
const path = require("path");
const lib = require("./animcjk-lib.js");
const { flattenLevel } = require("../data/content-helpers.js");

const VENDOR_KANJI_DIR = path.join(__dirname, "..", "vendor", "animcjk", "svgsJa");
const OUTPUT_DIR = path.join(__dirname, "..", "data", "kanji", "strokes");

function collectKanjiChars() {
    const kanjiData = require("../data/kanji/kanji-data.js");
    const chars = new Set();
    for (const level of Object.keys(kanjiData)) {
        const { items } = flattenLevel(kanjiData[level]);
        items.forEach((item) => chars.add(item.char));
    }
    return [...chars];
}

function main() {
    if (!fs.existsSync(VENDOR_KANJI_DIR)) {
        console.error(
            `Vendored animCJK kanji data not found at ${VENDOR_KANJI_DIR}.\n` +
            `See scripts/README.md for the one-time clone step.`
        );
        process.exit(1);
    }

    fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    const chars = collectKanjiChars();
    const missing = [];
    let written = 0;

    for (const char of chars) {
        const info = lib.readCharStrokes(VENDOR_KANJI_DIR, char);
        if (!info) {
            missing.push(char);
            continue;
        }
        const scaled = lib.rescaleStrokeInfo(info);
        const outFile = path.join(OUTPUT_DIR, `${char.codePointAt(0)}.json`);
        fs.writeFileSync(outFile, JSON.stringify(scaled));
        written++;
    }

    console.log(`Wrote ${written} kanji stroke files to ${OUTPUT_DIR}`);
    if (missing.length) {
        console.warn(`No animCJK glyph found for: ${missing.join(", ")}`);
    }
}

main();
