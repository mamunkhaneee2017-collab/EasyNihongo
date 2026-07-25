/* ==========================================
   KANA STROKE DATA
   Loaded via <script> tag (not fetch()) — see
   data/hiragana-data.js for why.

   One object keyed by the exact kana character
   (both hiragana and katakana keys live in this
   same object — they never collide). Each value:
     { strokeCount, strokes: [d1, d2, ...] }
   where each dN is ONE complete SVG path "d"
   string for ONE stroke, in real Japanese
   stroke-writing order (Monbukagakusho-style:
   top-to-bottom, left-to-right).

   Coordinate space: a shared viewBox="0 0 100 100".
   Each stroke's d string has exactly one M
   (moveto) at the start, followed only by L/Q/C
   commands — never a second M, never Z (kana
   strokes essentially never close on themselves).

   Consumers (planned): an SVG stroke-dasharray/
   dashoffset draw-on animation, a Canvas
   Path2D ghost-guide, and getPointAtLength()
   point-sampling for handwriting-accuracy scoring.
========================================== */

const kanaStrokesData = {

    /* ---------- HIRAGANA: あ row ---------- */
    "あ": { strokeCount: 3, strokes: [
        "M32,28 Q45,24 52,26",
        "M46,20 C44,32 38,48 28,60 Q22,68 20,74",
        "M53,40 C64,42 70,52 67,64 C64,75 52,78 44,70"
    ] },
    "い": { strokeCount: 2, strokes: [
        "M40,25 Q36,45 38,60",
        "M60,20 C64,35 66,55 58,70 Q52,78 46,75"
    ] },
    "う": { strokeCount: 2, strokes: [
        "M35,22 L55,20",
        "M60,32 C66,42 64,56 52,66 C42,74 32,70 32,62 Q33,58 38,56"
    ] },
    "え": { strokeCount: 2, strokes: [
        "M32,32 L64,30",
        "M38,22 Q30,35 36,45 C44,55 60,50 64,62 C68,74 56,82 42,76 Q34,72 34,66"
    ] },
    "お": { strokeCount: 3, strokes: [
        "M30,30 L58,28",
        "M45,18 C42,35 36,55 24,68 Q20,74 18,78",
        "M58,32 C64,34 66,42 60,46 Q56,48 55,44"
    ] },

    /* ---------- HIRAGANA: か row ---------- */
    "か": { strokeCount: 3, strokes: [
        "M35,22 Q34,45 32,66",
        "M26,40 L58,38 Q64,38 66,44",
        "M62,50 C66,58 62,68 52,72"
    ] },
    "き": { strokeCount: 4, strokes: [
        "M30,26 L60,24",
        "M28,42 L58,40",
        "M45,18 Q42,45 38,62 Q36,70 30,74",
        "M50,58 C58,62 60,70 52,76 Q46,80 42,76"
    ] },
    "く": { strokeCount: 1, strokes: [
        "M58,22 Q34,32 30,50 Q34,68 58,78"
    ] },
    "け": { strokeCount: 3, strokes: [
        "M32,22 Q30,48 28,68",
        "M26,40 L58,38",
        "M58,20 C62,35 60,58 52,72 C48,78 42,80 38,76"
    ] },
    "こ": { strokeCount: 2, strokes: [
        "M28,32 L62,30",
        "M26,52 C40,50 60,50 66,60 C70,68 60,76 46,74 Q36,72 30,66"
    ] },

    /* ---------- HIRAGANA: さ row ---------- */
    "さ": { strokeCount: 3, strokes: [
        "M34,22 L50,26",
        "M26,42 L60,40",
        "M48,20 Q44,45 38,62 C34,72 38,80 48,78 Q56,76 58,68"
    ] },
    "し": { strokeCount: 1, strokes: [
        "M56,22 Q40,50 34,66 C30,76 38,82 48,78"
    ] },
    "す": { strokeCount: 2, strokes: [
        "M30,28 L58,26 Q64,26 62,34",
        "M50,20 C46,40 30,55 26,68 C24,76 32,80 42,74 C52,68 56,58 50,50"
    ] },
    "せ": { strokeCount: 3, strokes: [
        "M34,18 L38,28",
        "M24,40 L64,38",
        "M50,20 Q46,45 40,62 C36,72 40,80 50,78 Q58,76 60,68"
    ] },
    "そ": { strokeCount: 1, strokes: [
        "M32,22 L58,20 Q64,22 60,28 Q40,36 46,46 C56,52 68,58 64,68 C60,78 46,80 34,72"
    ] },

    /* ---------- HIRAGANA: た row ---------- */
    "た": { strokeCount: 4, strokes: [
        "M30,20 Q28,28 26,34",
        "M22,44 L58,42",
        "M48,18 Q44,40 34,58 Q28,66 24,70",
        "M52,48 C60,52 64,62 58,72 C54,78 46,80 42,74"
    ] },
    "ち": { strokeCount: 2, strokes: [
        "M30,26 L58,24",
        "M55,32 C60,44 56,60 44,70 C36,76 26,74 26,66 Q27,60 32,58"
    ] },
    "つ": { strokeCount: 1, strokes: [
        "M62,26 C68,24 70,30 64,34 C48,40 28,48 26,58 C24,70 38,78 54,74"
    ] },
    "て": { strokeCount: 1, strokes: [
        "M26,30 L64,28 Q68,28 66,36 C60,52 44,66 30,72"
    ] },
    "と": { strokeCount: 2, strokes: [
        "M34,20 Q32,42 30,60 Q28,70 24,74",
        "M40,46 C50,48 60,54 62,64 C64,74 54,80 42,76"
    ] },

    /* ---------- HIRAGANA: な row ---------- */
    "な": { strokeCount: 4, strokes: [
        "M28,22 Q27,38 26,50",
        "M22,42 L54,40",
        "M58,18 C56,35 50,52 42,62",
        "M40,50 C50,52 62,56 66,66 C70,78 56,84 44,78 C38,75 38,68 44,64"
    ] },
    "に": { strokeCount: 3, strokes: [
        "M26,28 L34,24",
        "M26,44 L36,40",
        "M44,20 Q42,45 38,62 C36,72 40,80 50,78 Q60,76 64,68"
    ] },
    "ぬ": { strokeCount: 2, strokes: [
        "M30,20 Q28,42 26,60 Q25,70 22,76",
        "M28,42 C40,38 56,40 62,52 C68,64 60,76 46,78 C36,79 28,74 30,66 C32,60 40,58 46,62"
    ] },
    "ね": { strokeCount: 2, strokes: [
        "M30,22 L38,18",
        "M40,18 Q38,42 32,60 C28,70 30,78 40,80 C48,82 54,76 50,68 C48,64 42,64 40,68"
    ] },
    "の": { strokeCount: 1, strokes: [
        "M52,20 C34,20 22,34 24,50 C26,68 42,78 58,72 C70,67 72,52 62,44 Q56,40 50,44"
    ] },

    /* ---------- HIRAGANA: は row ---------- */
    "は": { strokeCount: 3, strokes: [
        "M28,20 Q26,40 24,58",
        "M22,38 L52,36",
        "M56,20 Q54,40 48,56 C44,68 50,78 60,76 C68,74 70,64 62,58 Q56,54 54,58"
    ] },
    "ひ": { strokeCount: 1, strokes: [
        "M34,28 C26,40 28,56 38,62 C48,68 60,60 58,48 C57,42 50,40 46,44"
    ] },
    "ふ": { strokeCount: 4, strokes: [
        "M32,22 Q40,24 38,30",
        "M28,34 Q38,36 40,42 Q36,45 30,42",
        "M30,48 Q42,50 44,56 Q40,59 34,56",
        "M52,18 C58,30 56,50 46,64 C38,74 28,76 26,68 C25,62 32,60 38,64"
    ] },
    "へ": { strokeCount: 1, strokes: [
        "M26,36 Q52,20 74,42"
    ] },
    "ほ": { strokeCount: 4, strokes: [
        "M30,18 Q28,45 26,70",
        "M22,36 L54,34",
        "M22,48 L54,46",
        "M58,18 Q56,40 50,56 C46,68 52,78 62,76 C70,74 72,64 64,58 Q58,54 56,58"
    ] },

    /* ---------- HIRAGANA: ま row ---------- */
    "ま": { strokeCount: 3, strokes: [
        "M24,32 L58,30",
        "M22,46 L56,44",
        "M44,18 Q40,45 32,62 C26,72 30,80 40,78 C50,76 54,66 48,58 Q42,54 40,58"
    ] },
    "み": { strokeCount: 2, strokes: [
        "M30,20 Q28,42 34,54 C40,64 52,60 50,48 Q48,40 40,42",
        "M56,22 C50,40 36,56 28,66 C22,74 26,82 36,80 C46,78 54,68 52,58"
    ] },
    "む": { strokeCount: 3, strokes: [
        "M28,24 Q42,20 52,28 Q46,34 36,32",
        "M46,20 Q42,45 34,62 C28,72 32,80 42,78",
        "M46,50 C56,48 66,54 66,64 C66,74 56,80 46,76 C40,73 40,66 46,64 Q52,62 54,66"
    ] },
    "め": { strokeCount: 2, strokes: [
        "M30,20 Q28,42 32,56 C36,66 46,64 46,54 Q46,46 38,46",
        "M52,18 C48,38 34,58 26,70 C20,78 26,84 38,80 C50,76 58,64 54,54 C52,48 46,48 44,54"
    ] },
    "も": { strokeCount: 3, strokes: [
        "M26,30 L58,28",
        "M24,44 L56,42",
        "M46,18 Q42,45 34,62 Q28,70 24,74"
    ] },

    /* ---------- HIRAGANA: や row ---------- */
    "や": { strokeCount: 3, strokes: [
        "M28,30 Q40,26 48,32 Q42,36 32,36",
        "M44,18 Q40,42 30,58 C24,68 28,76 38,74",
        "M52,40 L52,64 Q52,72 46,74"
    ] },
    "ゆ": { strokeCount: 2, strokes: [
        "M40,18 Q38,30 40,38",
        "M42,34 C30,36 24,48 26,60 C28,72 42,78 54,72 C64,67 64,52 54,44 C48,40 40,42 38,48"
    ] },
    "よ": { strokeCount: 2, strokes: [
        "M36,18 Q34,38 36,50",
        "M28,54 C36,50 50,50 56,58 C62,66 54,76 42,76 C34,76 28,70 30,64"
    ] },

    /* ---------- HIRAGANA: ら row ---------- */
    "ら": { strokeCount: 2, strokes: [
        "M30,20 L54,18 Q58,18 56,26",
        "M34,32 Q26,48 30,60 C34,70 48,74 56,66 C62,60 58,50 48,50 Q42,50 40,56"
    ] },
    "り": { strokeCount: 2, strokes: [
        "M36,22 Q34,45 32,62 Q31,70 28,74",
        "M54,20 Q52,42 50,58 C49,68 54,76 62,72"
    ] },
    "る": { strokeCount: 1, strokes: [
        "M44,20 C32,20 24,30 28,42 C31,50 42,50 44,42 C46,36 40,32 34,36 Q30,40 32,46 C36,56 54,54 58,64 C62,74 48,80 36,74"
    ] },
    "れ": { strokeCount: 2, strokes: [
        "M30,20 Q28,42 26,58 Q25,66 22,70",
        "M42,18 Q40,42 34,58 C30,68 34,78 44,78 C52,78 58,70 54,62 C50,56 42,58 40,64"
    ] },
    "ろ": { strokeCount: 1, strokes: [
        "M40,20 Q28,24 26,38 C24,50 32,58 42,56 Q50,54 52,62 C54,72 42,80 30,74"
    ] },

    /* ---------- HIRAGANA: わ row + を + ん ---------- */
    "わ": { strokeCount: 2, strokes: [
        "M30,20 Q28,42 26,58 Q25,66 22,70",
        "M42,18 Q46,40 46,54 C46,64 40,72 46,78 C52,84 62,78 60,68 Q58,62 52,64"
    ] },
    "を": { strokeCount: 3, strokes: [
        "M28,28 L56,26",
        "M44,18 C41,35 35,55 24,68 Q20,74 18,78",
        "M58,36 C66,40 68,50 62,54 Q58,56 56,52"
    ] },
    "ん": { strokeCount: 1, strokes: [
        "M32,22 C24,30 26,42 36,44 C46,46 40,58 30,56 C26,62 28,72 38,78 C50,84 66,76 68,62"
    ] },

    /* ---------- KATAKANA: ア row ---------- */
    "ア": { strokeCount: 2, strokes: [
        "M30,22 L56,26",
        "M64,18 C50,40 34,58 24,72 Q20,76 22,80"
    ] },
    "イ": { strokeCount: 2, strokes: [
        "M44,20 L38,46",
        "M60,22 C50,42 36,62 24,74"
    ] },
    "ウ": { strokeCount: 3, strokes: [
        "M40,18 Q38,24 42,28",
        "M26,32 L64,30",
        "M52,36 Q44,52 38,64 Q34,72 28,76"
    ] },
    "エ": { strokeCount: 3, strokes: [
        "M28,24 L62,24",
        "M45,26 L45,68",
        "M26,72 L64,72"
    ] },
    "オ": { strokeCount: 3, strokes: [
        "M26,32 L64,30",
        "M46,20 L42,76",
        "M56,46 Q48,60 38,70"
    ] },

    /* ---------- KATAKANA: カ row ---------- */
    "カ": { strokeCount: 2, strokes: [
        "M28,26 L58,24 Q62,24 60,32",
        "M50,18 C46,38 34,58 22,72 Q18,76 17,72"
    ] },
    "キ": { strokeCount: 3, strokes: [
        "M28,28 L60,26",
        "M26,44 L58,42",
        "M46,18 L38,50 Q34,62 42,68 Q52,74 58,66"
    ] },
    "ク": { strokeCount: 2, strokes: [
        "M34,20 L28,50",
        "M58,18 Q40,42 24,58 Q20,62 22,68"
    ] },
    "ケ": { strokeCount: 3, strokes: [
        "M32,20 L26,52",
        "M44,24 L44,54 Q44,62 38,64",
        "M62,18 C56,40 42,60 26,74 Q20,78 18,74"
    ] },
    "コ": { strokeCount: 2, strokes: [
        "M30,24 L64,24 L64,58",
        "M28,72 L62,72"
    ] },

    /* ---------- KATAKANA: サ row ---------- */
    "サ": { strokeCount: 3, strokes: [
        "M28,32 L62,30",
        "M46,18 L42,76",
        "M56,44 Q48,58 36,68"
    ] },
    "シ": { strokeCount: 3, strokes: [
        "M34,26 Q40,22 44,28",
        "M46,36 Q52,32 56,38",
        "M56,50 C50,62 38,72 26,76 Q22,78 24,74"
    ] },
    "ス": { strokeCount: 2, strokes: [
        "M28,26 L60,24",
        "M52,30 C46,46 32,62 20,72 Q16,76 18,70"
    ] },
    "セ": { strokeCount: 2, strokes: [
        "M26,36 L62,34 Q66,34 64,42",
        "M42,20 L38,56 Q36,68 46,72 Q54,76 60,68"
    ] },
    "ソ": { strokeCount: 2, strokes: [
        "M38,22 Q44,30 40,36",
        "M56,20 C48,38 34,56 20,68 Q17,72 18,66"
    ] },

    /* ---------- KATAKANA: タ row ---------- */
    "タ": { strokeCount: 3, strokes: [
        "M32,22 Q40,28 34,34",
        "M52,18 L34,52",
        "M24,44 C36,42 54,44 62,54 Q66,60 60,64"
    ] },
    "チ": { strokeCount: 3, strokes: [
        "M28,26 L60,24",
        "M44,18 L40,48",
        "M50,42 C44,56 30,68 18,74 Q15,76 16,70"
    ] },
    "ツ": { strokeCount: 3, strokes: [
        "M34,26 Q40,22 44,30",
        "M50,24 Q56,20 58,28",
        "M60,38 C54,52 40,64 26,70 Q20,72 22,66"
    ] },
    "テ": { strokeCount: 3, strokes: [
        "M28,26 L62,24",
        "M44,28 L44,44",
        "M24,48 C36,44 56,46 62,56 C66,64 56,74 42,74 Q32,74 28,68"
    ] },
    "ト": { strokeCount: 2, strokes: [
        "M34,20 L30,74",
        "M40,42 L64,38"
    ] },

    /* ---------- KATAKANA: ナ row ---------- */
    "ナ": { strokeCount: 2, strokes: [
        "M24,34 L62,32",
        "M46,20 Q42,48 34,66 Q30,74 26,78"
    ] },
    "ニ": { strokeCount: 2, strokes: [
        "M28,32 L58,30",
        "M24,62 L64,60"
    ] },
    "ヌ": { strokeCount: 2, strokes: [
        "M30,20 L48,46",
        "M58,22 C50,42 34,62 20,74 Q17,78 18,72"
    ] },
    "ネ": { strokeCount: 4, strokes: [
        "M40,18 Q38,24 42,28",
        "M26,34 L60,32",
        "M44,26 L40,76 Q38,82 30,80",
        "M28,50 Q40,58 50,50 Q56,46 58,52"
    ] },
    "ノ": { strokeCount: 1, strokes: [
        "M56,20 Q40,42 28,58 Q22,66 18,70"
    ] },

    /* ---------- KATAKANA: ハ row ---------- */
    "ハ": { strokeCount: 2, strokes: [
        "M38,22 Q30,46 20,68",
        "M52,22 Q60,46 70,68"
    ] },
    "ヒ": { strokeCount: 2, strokes: [
        "M30,22 Q28,45 28,60",
        "M26,52 L58,48 Q66,46 64,38"
    ] },
    "フ": { strokeCount: 1, strokes: [
        "M26,26 L62,24 Q68,24 64,32 C56,50 40,62 26,68"
    ] },
    "ヘ": { strokeCount: 1, strokes: [
        "M24,40 Q50,20 76,44"
    ] },
    "ホ": { strokeCount: 4, strokes: [
        "M44,18 L40,76",
        "M24,36 L62,34",
        "M28,52 Q34,62 30,70",
        "M56,50 Q60,62 66,70"
    ] },

    /* ---------- KATAKANA: マ row ---------- */
    "マ": { strokeCount: 2, strokes: [
        "M26,26 L62,24 Q66,24 62,30",
        "M52,28 C44,44 30,60 18,72"
    ] },
    "ミ": { strokeCount: 3, strokes: [
        "M26,30 L54,26",
        "M28,48 L56,44",
        "M30,66 L58,60"
    ] },
    "ム": { strokeCount: 2, strokes: [
        "M52,20 Q34,32 30,46 Q28,52 34,54",
        "M36,50 Q50,60 66,74"
    ] },
    "メ": { strokeCount: 2, strokes: [
        "M30,22 Q46,48 62,72",
        "M58,20 Q42,48 26,72"
    ] },
    "モ": { strokeCount: 3, strokes: [
        "M28,30 L60,28",
        "M24,48 L58,46",
        "M44,18 Q42,45 38,62 Q35,72 30,76"
    ] },

    /* ---------- KATAKANA: ヤ row ---------- */
    "ヤ": { strokeCount: 2, strokes: [
        "M52,20 L36,42",
        "M44,18 Q40,45 30,64 Q26,72 22,74"
    ] },
    "ユ": { strokeCount: 2, strokes: [
        "M34,20 Q32,50 36,64 Q40,74 52,72",
        "M24,38 L58,34"
    ] },
    "ヨ": { strokeCount: 3, strokes: [
        "M26,26 L58,24",
        "M26,48 L56,46",
        "M24,70 L58,68"
    ] },

    /* ---------- KATAKANA: ラ row ---------- */
    "ラ": { strokeCount: 2, strokes: [
        "M28,26 L58,24",
        "M48,28 C42,44 30,60 18,72 Q16,76 18,70"
    ] },
    "リ": { strokeCount: 2, strokes: [
        "M36,22 L32,58 Q31,66 34,70",
        "M56,20 L52,64 Q51,74 58,76"
    ] },
    "ル": { strokeCount: 2, strokes: [
        "M34,22 L30,58 Q29,68 24,74",
        "M56,20 L54,60 Q54,72 62,76"
    ] },
    "レ": { strokeCount: 1, strokes: [
        "M46,18 Q40,50 30,66 Q22,78 16,72"
    ] },
    "ロ": { strokeCount: 3, strokes: [
        "M26,24 L26,74",
        "M26,24 L62,24 L62,74",
        "M26,74 L62,74"
    ] },

    /* ---------- KATAKANA: ワ row + ヲ + ン ---------- */
    "ワ": { strokeCount: 2, strokes: [
        "M26,26 L58,24",
        "M50,28 C44,44 32,60 20,72 Q16,76 20,68"
    ] },
    "ヲ": { strokeCount: 3, strokes: [
        "M24,26 L58,24",
        "M40,20 L36,52",
        "M26,44 C36,42 54,44 62,56 Q66,62 58,66"
    ] },
    "ン": { strokeCount: 2, strokes: [
        "M34,26 Q30,36 34,42",
        "M46,22 C36,40 26,58 30,72 C34,82 50,80 58,68"
    ] }
};

if (typeof module !== "undefined" && module.exports) { module.exports = kanaStrokesData; }
