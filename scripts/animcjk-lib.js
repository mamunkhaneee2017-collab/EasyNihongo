/* ==========================================
   ANIMCJK IMPORT HELPERS
   Shared by generate-kana-strokes.js and
   generate-kanji-strokes.js. Reads the vendored
   animCJK SVGs (see scripts/README.md for how
   to fetch them) and converts their stroke data
   into this project's own {strokeCount, strokes}
   shape — an array of plain SVG path `d` strings,
   one per real stroke, in a 0-100 coordinate
   space (matching the fixed viewBox="0 0 100 100"
   used by pages/character.html and the /100 scale
   factors hardcoded in js/pages/character.js and
   js/handwriting.js).

   Verified against real vendored files before
   writing this (not guessed): every animCJK SVG
   has, in order, (1) one <path id="z{cp}d{N}"> per
   fill/glyph shape — N is the stroke number, and a
   handful of self-intersecting strokes are split
   into "{N}a"/"{N}b" sub-paths sharing that number
   — followed by (2) one thin, unstyled guide path
   per fill path in the same order, each with a
   normalized pathLength and a clip-path back-
   reference, whose `d` is a simple polyline
   (M/L commands only) driving the actual draw-on
   animation via CSS stroke-dasharray/dashoffset.
   That guide-path geometry — not the filled glyph
   outline — is the right analog for this project's
   existing thin animated "stroke path" convention,
   so it's what gets extracted here.
========================================== */

const fs = require("fs");
const path = require("path");

const VIEWBOX_SIZE = 1024; // animCJK's fixed viewBox width/height
const TARGET_SIZE = 100;   // this project's fixed stroke-viewBox convention

function svgFileFor(vendorDir, char) {
    return path.join(vendorDir, `${char.codePointAt(0)}.svg`);
}

function hasGlyph(vendorDir, char) {
    return fs.existsSync(svgFileFor(vendorDir, char));
}

// Scales every numeric coordinate token in a set of `d` strings by a uniform
// factor. Safe as a blind regex pass because by this point every `d` string
// only contains bare numeric coordinates after M/L/C command letters — no
// arc flags or other non-coordinate numeric-looking tokens.
function scaleNumbers(d, fn) {
    return d.replace(/-?\d+(\.\d+)?/g, (n) => {
        const v = fn(parseFloat(n));
        return (Math.round(v * 100) / 100).toString();
    });
}

// animCJK's guide paths are plain M/L polylines through each stroke's median
// points — fine at the thick stroke-width animCJK's own demo uses (its round
// line-joins visually mask the straight segments), but this project renders
// strokes much thinner (see css/pages/character.css), which exposes every
// polyline vertex as a sharp corner. Re-fitting a Catmull-Rom spline through
// the same points (converted to cubic Bezier segments) keeps the path
// passing through the exact same median points — so shape/accuracy for
// handwriting scoring is unchanged — while looking like a natural pen
// stroke instead of a jagged polygon.
function parsePoints(d) {
    const nums = (d.match(/-?\d+(\.\d+)?/g) || []).map(Number);
    const points = [];
    for (let i = 0; i < nums.length; i += 2) points.push([nums[i], nums[i + 1]]);
    return points;
}

function smoothPathFromPoints(points) {
    if (points.length < 3) {
        return `M${points.map((p) => p.join(",")).join("L")}`;
    }
    const at = (i) => points[Math.max(0, Math.min(points.length - 1, i))];
    let d = `M${points[0][0]},${points[0][1]}`;
    for (let i = 0; i < points.length - 1; i++) {
        const [p0x, p0y] = at(i - 1);
        const [p1x, p1y] = at(i);
        const [p2x, p2y] = at(i + 1);
        const [p3x, p3y] = at(i + 2);
        const c1x = p1x + (p2x - p0x) / 6;
        const c1y = p1y + (p2y - p0y) / 6;
        const c2x = p2x - (p3x - p1x) / 6;
        const c2y = p2y - (p3y - p1y) / 6;
        d += ` C${c1x.toFixed(2)},${c1y.toFixed(2)} ${c2x.toFixed(2)},${c2y.toFixed(2)} ${p2x},${p2y}`;
    }
    return d;
}

function smoothGuideD(rawD) {
    return smoothPathFromPoints(parsePoints(rawD));
}

/**
 * Extracts ordered, grouped stroke geometry from one animCJK SVG file's raw
 * text, in animCJK's native 1024-unit space (not yet rescaled).
 */
function extractStrokes(svgText) {
    const idRe = /<path id="z\d+d([0-9]+[a-z]?)"/g;
    const strokeIds = [];
    let m;
    while ((m = idRe.exec(svgText))) strokeIds.push(m[1]);

    const guideRe = /<path style="--d:[^"]*"\s+pathLength="[^"]*"\s+clip-path="url\(#[^)]+\)"\s+d="([^"]*)"/g;
    const guideDs = [];
    while ((m = guideRe.exec(svgText))) guideDs.push(m[1]);

    if (strokeIds.length === 0 || strokeIds.length !== guideDs.length) {
        throw new Error(
            `stroke/guide path count mismatch (${strokeIds.length} vs ${guideDs.length})`
        );
    }

    // Merge consecutive entries that share the same leading stroke number
    // (e.g. "3a"/"3b" -> "3") into one logical stroke. A single SVG `d`
    // attribute can hold multiple "M...L..." subpaths — both
    // getTotalLength()/stroke-dashoffset animation and getPointAtLength()
    // sampling treat that as one continuous path, which is exactly the
    // effect wanted for a stroke that had to be split upstream only because
    // it visually self-intersects.
    const smoothedGuideDs = guideDs.map(smoothGuideD);

    const groups = [];
    strokeIds.forEach((id, i) => {
        const num = id.match(/^\d+/)[0];
        const last = groups[groups.length - 1];
        if (last && last.num === num) {
            last.ds.push(smoothedGuideDs[i]);
        } else {
            groups.push({ num, ds: [smoothedGuideDs[i]] });
        }
    });

    return {
        strokeCount: groups.length,
        strokes: groups.map((g) => g.ds.join(" "))
    };
}

function readCharStrokes(vendorDir, char) {
    const file = svgFileFor(vendorDir, char);
    if (!fs.existsSync(file)) return null;
    return extractStrokes(fs.readFileSync(file, "utf8"));
}

function rescaleStrokeInfo(info, from = VIEWBOX_SIZE, to = TARGET_SIZE) {
    const factor = to / from;
    return {
        strokeCount: info.strokeCount,
        strokes: info.strokes.map((d) => scaleNumbers(d, (n) => n * factor))
    };
}

/**
 * Composes a two-character yōon combo (e.g. "きゃ") from two already-
 * extracted single-character stroke sets, in native 1024-space (before the
 * one final rescale). The full-size kana's strokes are kept unchanged; the
 * small kana's strokes are scaled down and translated into the bottom-right
 * corner (standard yōon typography), then appended in natural writing order.
 */
function composeYoon(baseInfo, smallInfo, smallScale = 0.62, viewboxSize = VIEWBOX_SIZE) {
    const offset = viewboxSize * (1 - smallScale);
    return {
        strokeCount: baseInfo.strokeCount + smallInfo.strokeCount,
        strokes: [
            ...baseInfo.strokes,
            ...smallInfo.strokes.map((d) => scaleNumbers(d, (n) => n * smallScale + offset))
        ]
    };
}

module.exports = {
    VIEWBOX_SIZE,
    TARGET_SIZE,
    svgFileFor,
    hasGlyph,
    extractStrokes,
    readCharStrokes,
    rescaleStrokeInfo,
    composeYoon
};
