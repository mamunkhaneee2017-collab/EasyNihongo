/* ==========================================
   KANA ROW GROUPING (五十音 / gojuon)
   Shared grouping config for hiragana AND
   katakana, used by:
     - the quiz system (one "module" = one row)
     - any future chunked review UI
   data/hiragana-data.js and data/katakana-data.js
   are both flat 46-entry arrays in identical
   gojuon order, so a single index-range config
   works for both content types.
========================================== */

const kanaRows = [
    { id: "a", label: "あ行 / ア行", startIndex: 0, endIndex: 4 },
    { id: "ka", label: "か行 / カ行", startIndex: 5, endIndex: 9 },
    { id: "sa", label: "さ行 / サ行", startIndex: 10, endIndex: 14 },
    { id: "ta", label: "た行 / タ行", startIndex: 15, endIndex: 19 },
    { id: "na", label: "な行 / ナ行", startIndex: 20, endIndex: 24 },
    { id: "ha", label: "は行 / ハ行", startIndex: 25, endIndex: 29 },
    { id: "ma", label: "ま行 / マ行", startIndex: 30, endIndex: 34 },
    { id: "ya", label: "や行 / ヤ行", startIndex: 35, endIndex: 37 },
    { id: "ra", label: "ら行 / ラ行", startIndex: 38, endIndex: 42 },
    { id: "wa", label: "わ行 + ん / ワ行 + ン", startIndex: 43, endIndex: 45 }
];

if (typeof module !== "undefined" && module.exports) { module.exports = kanaRows; }
