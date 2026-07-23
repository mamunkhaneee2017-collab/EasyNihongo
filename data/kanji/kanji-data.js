/* ==========================================
   KANJI DATA — Level → Chapter → Characters
   Same { chapters: [...] } shape as
   vocabulary-data.js / grammar-data.js — see
   data/content-helpers.js for how the flat
   item_index used by progress_items is
   computed from this.

   N4 keeps its previously-authored 4 kanji as
   a single chapter (real content, just not yet
   re-organized into a full chapter set).
   N3-N1 stay empty/locked until content is
   written for those levels.
========================================== */

const kanjiData = {

    n5: {
        chapters: [
            {
                id: "numbers",
                title: "Numbers",
                items: [
                    { char: "一", on: "イチ", kun: "ひと(つ)", meaning: "one", strokes: 1, examples: [
                        { word: "一つ", reading: "hitotsu", meaning: "one (thing)" },
                        { word: "一月", reading: "ichigatsu", meaning: "January" },
                        { word: "一人", reading: "hitori", meaning: "one person" }
                    ] },
                    { char: "二", on: "ニ", kun: "ふた(つ)", meaning: "two", strokes: 2, examples: [
                        { word: "二つ", reading: "futatsu", meaning: "two (things)" },
                        { word: "二月", reading: "nigatsu", meaning: "February" },
                        { word: "二人", reading: "futari", meaning: "two people" }
                    ] },
                    { char: "三", on: "サン", kun: "み(つ)", meaning: "three", strokes: 3, examples: [
                        { word: "三つ", reading: "mittsu", meaning: "three (things)" },
                        { word: "三月", reading: "sangatsu", meaning: "March" },
                        { word: "三人", reading: "sannin", meaning: "three people" }
                    ] },
                    { char: "四", on: "シ", kun: "よ(つ), よん", meaning: "four", strokes: 5, examples: [
                        { word: "四つ", reading: "yottsu", meaning: "four (things)" },
                        { word: "四月", reading: "shigatsu", meaning: "April" },
                        { word: "四人", reading: "yonin", meaning: "four people" }
                    ] },
                    { char: "五", on: "ゴ", kun: "いつ(つ)", meaning: "five", strokes: 4, examples: [
                        { word: "五つ", reading: "itsutsu", meaning: "five (things)" },
                        { word: "五月", reading: "gogatsu", meaning: "May" },
                        { word: "五人", reading: "gonin", meaning: "five people" }
                    ] }
                ]
            },
            {
                id: "days-time",
                title: "Days & Time",
                items: [
                    { char: "日", on: "ニチ, ジツ", kun: "ひ, -び, -か", meaning: "day, sun, Japan", strokes: 4, examples: [
                        { word: "日曜日", reading: "nichiyoubi", meaning: "Sunday" },
                        { word: "毎日", reading: "mainichi", meaning: "every day" },
                        { word: "誕生日", reading: "tanjoubi", meaning: "birthday" }
                    ] },
                    { char: "月", on: "ゲツ, ガツ", kun: "つき", meaning: "month, moon", strokes: 4, examples: [
                        { word: "月曜日", reading: "getsuyoubi", meaning: "Monday" },
                        { word: "一月", reading: "ichigatsu", meaning: "January" },
                        { word: "お月見", reading: "otsukimi", meaning: "moon viewing" }
                    ] },
                    { char: "火", on: "カ", kun: "ひ", meaning: "fire", strokes: 4, examples: [
                        { word: "火曜日", reading: "kayoubi", meaning: "Tuesday" },
                        { word: "花火", reading: "hanabi", meaning: "fireworks" },
                        { word: "火事", reading: "kaji", meaning: "a fire (blaze)" }
                    ] },
                    { char: "水", on: "スイ", kun: "みず", meaning: "water", strokes: 4, examples: [
                        { word: "水曜日", reading: "suiyoubi", meaning: "Wednesday" },
                        { word: "お水", reading: "omizu", meaning: "water (polite)" },
                        { word: "水泳", reading: "suiei", meaning: "swimming" }
                    ] },
                    { char: "木", on: "モク, ボク", kun: "き, こ", meaning: "tree, wood", strokes: 4, examples: [
                        { word: "木曜日", reading: "mokuyoubi", meaning: "Thursday" },
                        { word: "木", reading: "ki", meaning: "tree" },
                        { word: "木村", reading: "kimura", meaning: "Kimura (surname)" }
                    ] }
                ]
            },
            {
                id: "people-life",
                title: "People & Life",
                items: [
                    { char: "人", on: "ジン, ニン", kun: "ひと", meaning: "person", strokes: 2, examples: [
                        { word: "日本人", reading: "nihonjin", meaning: "Japanese person" },
                        { word: "一人", reading: "hitori", meaning: "one person" },
                        { word: "人々", reading: "hitobito", meaning: "people" }
                    ] },
                    { char: "子", on: "シ", kun: "こ", meaning: "child", strokes: 3, examples: [
                        { word: "子供", reading: "kodomo", meaning: "child" },
                        { word: "女の子", reading: "onnanoko", meaning: "girl" },
                        { word: "男の子", reading: "otokonoko", meaning: "boy" }
                    ] },
                    { char: "女", on: "ジョ, ニョ", kun: "おんな", meaning: "woman", strokes: 3, examples: [
                        { word: "女の人", reading: "onnanohito", meaning: "woman" },
                        { word: "女性", reading: "josei", meaning: "female" },
                        { word: "彼女", reading: "kanojo", meaning: "she / girlfriend" }
                    ] },
                    { char: "男", on: "ダン, ナン", kun: "おとこ", meaning: "man", strokes: 7, examples: [
                        { word: "男の人", reading: "otokonohito", meaning: "man" },
                        { word: "男性", reading: "dansei", meaning: "male" },
                        { word: "長男", reading: "chounan", meaning: "eldest son" }
                    ] },
                    { char: "名", on: "メイ, ミョウ", kun: "な", meaning: "name", strokes: 6, examples: [
                        { word: "名前", reading: "namae", meaning: "name" },
                        { word: "有名", reading: "yuumei", meaning: "famous" },
                        { word: "名字", reading: "myouji", meaning: "surname" }
                    ] }
                ]
            }
        ]
    },

    n4: {
        chapters: [
            {
                id: "n4-carryover-chapter-1",
                title: "Chapter 1",
                items: [
                    { char: "家", on: "カ, ケ", kun: "いえ, や", meaning: "house, family", strokes: 10 },
                    { char: "車", on: "シャ", kun: "くるま", meaning: "car, vehicle", strokes: 7 },
                    { char: "教", on: "キョウ", kun: "おし(える)", meaning: "teach", strokes: 11 },
                    { char: "会", on: "カイ, エ", kun: "あ(う)", meaning: "meet, association", strokes: 6 }
                ]
            }
        ]
    },

    n3: { chapters: [] },
    n2: { chapters: [] },
    n1: { chapters: [] }

};

if (typeof module !== "undefined" && module.exports) { module.exports = kanjiData; }
