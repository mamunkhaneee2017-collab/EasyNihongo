/* ==========================================
   Regenerates data/kana-strokes-data.js from the
   vendored animCJK dataset (see scripts/README.md
   to fetch it first). Run: npm run generate:kana-strokes

   The 208-character key set is derived from the
   live hiragana/katakana lists (data/hiragana-data.js,
   data/katakana-data.js) rather than from the old
   stroke file itself, so the output can't silently
   drift from what the kana list/quiz pages actually
   show. animCJK already provides every dakuten/
   handakuten form as its own individual glyph, so
   only the two-character yōon combos (きゃ, しゅ, ...)
   still need composing — from two animCJK glyphs, not
   hand-eyeballed shapes.
========================================== */

const fs = require("fs");
const path = require("path");
const lib = require("./animcjk-lib.js");

const VENDOR_KANA_DIR = path.join(__dirname, "..", "vendor", "animcjk", "svgsJaKana");
const OUTPUT_FILE = path.join(__dirname, "..", "data", "kana-strokes-data.js");

function loadCharacterList(dataFile, exportName) {
    const mod = require(dataFile);
    const arr = mod[exportName] || mod;
    return arr.map((item) => item.character);
}

function buildEntry(char) {
    const chars = [...char];

    if (chars.length === 1) {
        const info = lib.readCharStrokes(VENDOR_KANA_DIR, char);
        if (!info) return null;
        return lib.rescaleStrokeInfo(info);
    }

    if (chars.length === 2) {
        const [base, small] = chars;
        const baseInfo = lib.readCharStrokes(VENDOR_KANA_DIR, base);
        const smallInfo = lib.readCharStrokes(VENDOR_KANA_DIR, small);
        if (!baseInfo || !smallInfo) return null;
        return lib.rescaleStrokeInfo(lib.composeYoon(baseInfo, smallInfo));
    }

    throw new Error(`unexpected character length for "${char}"`);
}

function main() {
    if (!fs.existsSync(VENDOR_KANA_DIR)) {
        console.error(
            `Vendored animCJK kana data not found at ${VENDOR_KANA_DIR}.\n` +
            `See scripts/README.md for the one-time clone step.`
        );
        process.exit(1);
    }

    const characters = [
        ...loadCharacterList(path.join(__dirname, "..", "data", "hiragana-data.js"), "hiraganaData"),
        ...loadCharacterList(path.join(__dirname, "..", "data", "katakana-data.js"), "katakanaData")
    ];

    const entries = {};
    const missing = [];

    for (const char of characters) {
        const entry = buildEntry(char);
        if (!entry) {
            missing.push(char);
            continue;
        }
        entries[char] = entry;
    }

    if (missing.length) {
        console.error(`Missing animCJK source glyphs for: ${missing.join(", ")}`);
        process.exit(1);
    }

    const yoonCount = Object.keys(entries).filter((c) => [...c].length === 2).length;

    const body = Object.entries(entries)
        .map(([char, info]) => {
            const strokes = info.strokes.map((d) => `            ${JSON.stringify(d)}`).join(",\n");
            return `    ${JSON.stringify(char)}: {\n        "strokeCount": ${info.strokeCount},\n        "strokes": [\n${strokes}\n        ]\n    }`;
        })
        .join(",\n");

    const output = `/* ==========================================
   KANA STROKE ORDER DATA
   SVG stroke paths for all ${characters.length} Hiragana/
   Katakana characters (base + dakuten/handakuten +
   yōon), imported from the animCJK project
   (https://github.com/parsimonhi/animCJK, LGPLv3 —
   see licenses/animcjk-LGPL.txt and docs/CREDITS.md).
   Dakuten/handakuten forms are animCJK's own
   individual glyphs; the ${yoonCount} two-character yōon
   combos are geometrically composed from two animCJK
   glyphs at generation time (small kana scaled ~62%
   into the bottom-right corner) — see
   scripts/generate-kana-strokes.js. Loaded via
   <script> tag (not fetch()) so it works over file://,
   same as every other data/*.js file.

   Regenerate with: npm run generate:kana-strokes
========================================== */

const kanaStrokesData = {
${body}
};

if (typeof module !== "undefined" && module.exports) { module.exports = kanaStrokesData; }
`;

    fs.writeFileSync(OUTPUT_FILE, output);
    console.log(`Wrote ${Object.keys(entries).length} kana entries to ${OUTPUT_FILE}`);
}

main();
