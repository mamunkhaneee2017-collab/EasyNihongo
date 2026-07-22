/* ==========================================
   KANJI DATA
   Loaded via <script> tag (not fetch()) so
   kanji.html still works over file://.
   N3-N1 are intentionally empty — those levels
   are locked in the UI until content is added.
========================================== */

const kanjiData = {

    n5: [
        { char: "日", on: "ニチ, ジツ", kun: "ひ, -び, -か", meaning: "day, sun, Japan", strokes: 4 },
        { char: "月", on: "ゲツ, ガツ", kun: "つき", meaning: "month, moon", strokes: 4 },
        { char: "火", on: "カ", kun: "ひ", meaning: "fire", strokes: 4 },
        { char: "水", on: "スイ", kun: "みず", meaning: "water", strokes: 4 },
        { char: "木", on: "モク, ボク", kun: "き, こ", meaning: "tree, wood", strokes: 4 },
        { char: "人", on: "ジン, ニン", kun: "ひと", meaning: "person", strokes: 2 }
    ],

    n4: [
        { char: "家", on: "カ, ケ", kun: "いえ, や", meaning: "house, family", strokes: 10 },
        { char: "車", on: "シャ", kun: "くるま", meaning: "car, vehicle", strokes: 7 },
        { char: "教", on: "キョウ", kun: "おし(える)", meaning: "teach", strokes: 11 },
        { char: "会", on: "カイ, エ", kun: "あ(う)", meaning: "meet, association", strokes: 6 }
    ],

    n3: [],
    n2: [],
    n1: []

};

if (typeof module !== "undefined" && module.exports) { module.exports = kanjiData; }
