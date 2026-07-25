/* ==========================================
   KANA ROW GROUPING (五十音 / gojuon + extended)
   Shared grouping config for hiragana AND
   katakana, used by:
     - the quiz system (one "module" = one row)
     - the list-page category tabs (Basic /
       Dakuten / Handakuten / Yōon)
   data/hiragana-data.js and data/katakana-data.js
   are both flat arrays in identical order: the
   original 46 base characters (indices 0-45),
   then 20 dakuten (46-65), 5 handakuten (66-70),
   then 33 yōon (71-103) — 104 entries total per
   file. A single index-range config works for
   both content types since the order matches.
========================================== */

const kanaRows = [
    { id: "a", label: "あ行 / ア行", startIndex: 0, endIndex: 4, category: "base" },
    { id: "ka", label: "か行 / カ行", startIndex: 5, endIndex: 9, category: "base" },
    { id: "sa", label: "さ行 / サ行", startIndex: 10, endIndex: 14, category: "base" },
    { id: "ta", label: "た行 / タ行", startIndex: 15, endIndex: 19, category: "base" },
    { id: "na", label: "な行 / ナ行", startIndex: 20, endIndex: 24, category: "base" },
    { id: "ha", label: "は行 / ハ行", startIndex: 25, endIndex: 29, category: "base" },
    { id: "ma", label: "ま行 / マ行", startIndex: 30, endIndex: 34, category: "base" },
    { id: "ya", label: "や行 / ヤ行", startIndex: 35, endIndex: 37, category: "base" },
    { id: "ra", label: "ら行 / ラ行", startIndex: 38, endIndex: 42, category: "base" },
    { id: "wa", label: "わ行 + ん / ワ行 + ン", startIndex: 43, endIndex: 45, category: "base" },

    { id: "ga", label: "が行 / ガ行", startIndex: 46, endIndex: 50, category: "dakuten" },
    { id: "za", label: "ざ行 / ザ行", startIndex: 51, endIndex: 55, category: "dakuten" },
    { id: "da", label: "だ行 / ダ行", startIndex: 56, endIndex: 60, category: "dakuten" },
    { id: "ba", label: "ば行 / バ行", startIndex: 61, endIndex: 65, category: "dakuten" },

    { id: "pa", label: "ぱ行 / パ行", startIndex: 66, endIndex: 70, category: "handakuten" },

    { id: "kya", label: "きゃ行 / キャ行", startIndex: 71, endIndex: 73, category: "youon" },
    { id: "sha", label: "しゃ行 / シャ行", startIndex: 74, endIndex: 76, category: "youon" },
    { id: "cha", label: "ちゃ行 / チャ行", startIndex: 77, endIndex: 79, category: "youon" },
    { id: "nya", label: "にゃ行 / ニャ行", startIndex: 80, endIndex: 82, category: "youon" },
    { id: "hya", label: "ひゃ行 / ヒャ行", startIndex: 83, endIndex: 85, category: "youon" },
    { id: "mya", label: "みゃ行 / ミャ行", startIndex: 86, endIndex: 88, category: "youon" },
    { id: "rya", label: "りゃ行 / リャ行", startIndex: 89, endIndex: 91, category: "youon" },
    { id: "gya", label: "ぎゃ行 / ギャ行", startIndex: 92, endIndex: 94, category: "youon" },
    { id: "ja", label: "じゃ行 / ジャ行", startIndex: 95, endIndex: 97, category: "youon" },
    { id: "bya", label: "びゃ行 / ビャ行", startIndex: 98, endIndex: 100, category: "youon" },
    { id: "pya", label: "ぴゃ行 / ピャ行", startIndex: 101, endIndex: 103, category: "youon" }
];

if (typeof module !== "undefined" && module.exports) { module.exports = kanaRows; }
