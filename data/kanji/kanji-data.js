/* ==========================================
   KANJI DATA — Level → Chapter → Characters
   Same { chapters: [...] } shape as
   vocabulary-data.js / grammar-data.js — see
   data/content-helpers.js for how the flat
   item_index used by progress_items is
   computed from this.

   examples[].reading is HIRAGANA furigana, not
   romaji — see data/grammar/grammar-data.js
   header for the full site-wide convention.
   on/kun readings were already hiragana/
   katakana as expected and are untouched.

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
                        { word: "一つ", reading: "ひとつ", meaning: "one (thing)" },
                        { word: "一月", reading: "いちがつ", meaning: "January" },
                        { word: "一人", reading: "ひとり", meaning: "one person" }
                    ] },
                    { char: "二", on: "ニ", kun: "ふた(つ)", meaning: "two", strokes: 2, examples: [
                        { word: "二つ", reading: "ふたつ", meaning: "two (things)" },
                        { word: "二月", reading: "にがつ", meaning: "February" },
                        { word: "二人", reading: "ふたり", meaning: "two people" }
                    ] },
                    { char: "三", on: "サン", kun: "み(つ)", meaning: "three", strokes: 3, examples: [
                        { word: "三つ", reading: "みっつ", meaning: "three (things)" },
                        { word: "三月", reading: "さんがつ", meaning: "March" },
                        { word: "三人", reading: "さんにん", meaning: "three people" }
                    ] },
                    { char: "四", on: "シ", kun: "よ(つ), よん", meaning: "four", strokes: 5, examples: [
                        { word: "四つ", reading: "よっつ", meaning: "four (things)" },
                        { word: "四月", reading: "しがつ", meaning: "April" },
                        { word: "四人", reading: "よにん", meaning: "four people" }
                    ] },
                    { char: "五", on: "ゴ", kun: "いつ(つ)", meaning: "five", strokes: 4, examples: [
                        { word: "五つ", reading: "いつつ", meaning: "five (things)" },
                        { word: "五月", reading: "ごがつ", meaning: "May" },
                        { word: "五人", reading: "ごにん", meaning: "five people" }
                    ] }
                ]
            },
            {
                id: "days-time",
                title: "Days & Time",
                items: [
                    { char: "日", on: "ニチ, ジツ", kun: "ひ, -び, -か", meaning: "day, sun, Japan", strokes: 4, examples: [
                        { word: "日曜日", reading: "にちようび", meaning: "Sunday" },
                        { word: "毎日", reading: "まいにち", meaning: "every day" },
                        { word: "誕生日", reading: "たんじょうび", meaning: "birthday" }
                    ] },
                    { char: "月", on: "ゲツ, ガツ", kun: "つき", meaning: "month, moon", strokes: 4, examples: [
                        { word: "月曜日", reading: "げつようび", meaning: "Monday" },
                        { word: "一月", reading: "いちがつ", meaning: "January" },
                        { word: "お月見", reading: "おつきみ", meaning: "moon viewing" }
                    ] },
                    { char: "火", on: "カ", kun: "ひ", meaning: "fire", strokes: 4, examples: [
                        { word: "火曜日", reading: "かようび", meaning: "Tuesday" },
                        { word: "花火", reading: "はなび", meaning: "fireworks" },
                        { word: "火事", reading: "かじ", meaning: "a fire (blaze)" }
                    ] },
                    { char: "水", on: "スイ", kun: "みず", meaning: "water", strokes: 4, examples: [
                        { word: "水曜日", reading: "すいようび", meaning: "Wednesday" },
                        { word: "お水", reading: "おみず", meaning: "water (polite)" },
                        { word: "水泳", reading: "すいえい", meaning: "swimming" }
                    ] },
                    { char: "木", on: "モク, ボク", kun: "き, こ", meaning: "tree, wood", strokes: 4, examples: [
                        { word: "木曜日", reading: "もくようび", meaning: "Thursday" },
                        { word: "木", reading: "き", meaning: "tree" },
                        { word: "木村", reading: "きむら", meaning: "Kimura (surname)" }
                    ] }
                ]
            },
            {
                id: "people-life",
                title: "People & Life",
                items: [
                    { char: "人", on: "ジン, ニン", kun: "ひと", meaning: "person", strokes: 2, examples: [
                        { word: "日本人", reading: "にほんじん", meaning: "Japanese person" },
                        { word: "一人", reading: "ひとり", meaning: "one person" },
                        { word: "人々", reading: "ひとびと", meaning: "people" }
                    ] },
                    { char: "子", on: "シ", kun: "こ", meaning: "child", strokes: 3, examples: [
                        { word: "子供", reading: "こども", meaning: "child" },
                        { word: "女の子", reading: "おんなのこ", meaning: "girl" },
                        { word: "男の子", reading: "おとこのこ", meaning: "boy" }
                    ] },
                    { char: "女", on: "ジョ, ニョ", kun: "おんな", meaning: "woman", strokes: 3, examples: [
                        { word: "女の人", reading: "おんなのひと", meaning: "woman" },
                        { word: "女性", reading: "じょせい", meaning: "female" },
                        { word: "彼女", reading: "かのじょ", meaning: "she / girlfriend" }
                    ] },
                    { char: "男", on: "ダン, ナン", kun: "おとこ", meaning: "man", strokes: 7, examples: [
                        { word: "男の人", reading: "おとこのひと", meaning: "man" },
                        { word: "男性", reading: "だんせい", meaning: "male" },
                        { word: "長男", reading: "ちょうなん", meaning: "eldest son" }
                    ] },
                    { char: "名", on: "メイ, ミョウ", kun: "な", meaning: "name", strokes: 6, examples: [
                        { word: "名前", reading: "なまえ", meaning: "name" },
                        { word: "有名", reading: "ゆうめい", meaning: "famous" },
                        { word: "名字", reading: "みょうじ", meaning: "surname" }
                    ] }
                ]
            },
            {
                id: "time-kanji",
                title: "Time",
                items: [
                    { char: "今", on: "コン, キン", kun: "いま", meaning: "now", strokes: 4, examples: [
                        { word: "今日", reading: "きょう", meaning: "today" },
                        { word: "今週", reading: "こんしゅう", meaning: "this week" },
                        { word: "今年", reading: "ことし", meaning: "this year" }
                    ] },
                    { char: "時", on: "ジ", kun: "とき", meaning: "time, hour", strokes: 10, examples: [
                        { word: "時間", reading: "じかん", meaning: "time / hours" },
                        { word: "何時", reading: "なんじ", meaning: "what time" },
                        { word: "時計", reading: "とけい", meaning: "clock / watch" }
                    ] },
                    { char: "分", on: "フン, ブン", kun: "わ(ける)", meaning: "minute, part", strokes: 4, examples: [
                        { word: "五分", reading: "ごふん", meaning: "five minutes" },
                        { word: "半分", reading: "はんぶん", meaning: "half" },
                        { word: "自分", reading: "じぶん", meaning: "oneself" }
                    ] },
                    { char: "半", on: "ハン", kun: "なか(ば)", meaning: "half", strokes: 5, examples: [
                        { word: "半分", reading: "はんぶん", meaning: "half" },
                        { word: "三時半", reading: "さんじはん", meaning: "half past three" },
                        { word: "後半", reading: "こうはん", meaning: "second half" }
                    ] },
                    { char: "年", on: "ネン", kun: "とし", meaning: "year", strokes: 6, examples: [
                        { word: "今年", reading: "ことし", meaning: "this year" },
                        { word: "去年", reading: "きょねん", meaning: "last year" },
                        { word: "毎年", reading: "まいとし", meaning: "every year" }
                    ] }
                ]
            },
            {
                id: "nature-kanji",
                title: "Nature",
                items: [
                    { char: "山", on: "サン", kun: "やま", meaning: "mountain", strokes: 3, examples: [
                        { word: "富士山", reading: "ふじさん", meaning: "Mt. Fuji" },
                        { word: "山道", reading: "やまみち", meaning: "mountain path" },
                        { word: "火山", reading: "かざん", meaning: "volcano" }
                    ] },
                    { char: "川", on: "セン", kun: "かわ", meaning: "river", strokes: 3, examples: [
                        { word: "川岸", reading: "かわぎし", meaning: "riverbank" },
                        { word: "小川", reading: "おがわ", meaning: "stream" },
                        { word: "川口", reading: "かわぐち", meaning: "river mouth" }
                    ] },
                    { char: "天", on: "テン", kun: "あめ", meaning: "heaven, sky", strokes: 4, examples: [
                        { word: "天気", reading: "てんき", meaning: "weather" },
                        { word: "天才", reading: "てんさい", meaning: "genius" },
                        { word: "雨天", reading: "うてん", meaning: "rainy weather" }
                    ] },
                    { char: "気", on: "キ, ケ", kun: "-", meaning: "spirit, air, feeling", strokes: 6, examples: [
                        { word: "天気", reading: "てんき", meaning: "weather" },
                        { word: "元気", reading: "げんき", meaning: "energetic / healthy" },
                        { word: "気持ち", reading: "きもち", meaning: "feeling" }
                    ] },
                    { char: "空", on: "クウ", kun: "そら, あ(く)", meaning: "sky, empty", strokes: 8, examples: [
                        { word: "空", reading: "そら", meaning: "sky" },
                        { word: "空気", reading: "くうき", meaning: "air" },
                        { word: "空港", reading: "くうこう", meaning: "airport" }
                    ] }
                ]
            },
            {
                id: "body-actions",
                title: "Body & Actions",
                items: [
                    { char: "目", on: "モク", kun: "め", meaning: "eye", strokes: 5, examples: [
                        { word: "目", reading: "め", meaning: "eye" },
                        { word: "目的", reading: "もくてき", meaning: "purpose" },
                        { word: "科目", reading: "かもく", meaning: "subject (school)" }
                    ] },
                    { char: "口", on: "コウ", kun: "くち", meaning: "mouth", strokes: 3, examples: [
                        { word: "口", reading: "くち", meaning: "mouth" },
                        { word: "入口", reading: "いりぐち", meaning: "entrance" },
                        { word: "出口", reading: "でぐち", meaning: "exit" }
                    ] },
                    { char: "手", on: "シュ", kun: "て", meaning: "hand", strokes: 4, examples: [
                        { word: "手", reading: "て", meaning: "hand" },
                        { word: "上手", reading: "じょうず", meaning: "skillful" },
                        { word: "手紙", reading: "てがみ", meaning: "letter" }
                    ] },
                    { char: "足", on: "ソク", kun: "あし", meaning: "foot, leg", strokes: 7, examples: [
                        { word: "足", reading: "あし", meaning: "foot / leg" },
                        { word: "足りる", reading: "たりる", meaning: "to be enough" },
                        { word: "満足", reading: "まんぞく", meaning: "satisfaction" }
                    ] },
                    { char: "見", on: "ケン", kun: "み(る)", meaning: "to see", strokes: 7, examples: [
                        { word: "見る", reading: "みる", meaning: "to see / watch" },
                        { word: "見物", reading: "けんぶつ", meaning: "sightseeing" },
                        { word: "花見", reading: "はなみ", meaning: "flower viewing" }
                    ] }
                ]
            },
            {
                id: "position-direction",
                title: "Position & Direction",
                items: [
                    { char: "上", on: "ジョウ", kun: "うえ, あ(げる), のぼ(る)", meaning: "up, above", strokes: 3, examples: [
                        { word: "机の上", reading: "つくえのうえ", meaning: "on the desk" },
                        { word: "上手", reading: "じょうず", meaning: "skillful" },
                        { word: "上着", reading: "うわぎ", meaning: "jacket" }
                    ] },
                    { char: "下", on: "カ, ゲ", kun: "した, さ(げる), くだ(る)", meaning: "down, below", strokes: 3, examples: [
                        { word: "木の下", reading: "きのした", meaning: "under the tree" },
                        { word: "下手", reading: "へた", meaning: "unskillful" },
                        { word: "地下", reading: "ちか", meaning: "underground" }
                    ] },
                    { char: "左", on: "サ", kun: "ひだり", meaning: "left", strokes: 5, examples: [
                        { word: "左手", reading: "ひだりて", meaning: "left hand" },
                        { word: "左側", reading: "ひだりがわ", meaning: "left side" },
                        { word: "左右", reading: "さゆう", meaning: "left and right" }
                    ] },
                    { char: "右", on: "ウ, ユウ", kun: "みぎ", meaning: "right", strokes: 5, examples: [
                        { word: "右手", reading: "みぎて", meaning: "right hand" },
                        { word: "右側", reading: "みぎがわ", meaning: "right side" },
                        { word: "右折", reading: "うせつ", meaning: "turning right" }
                    ] },
                    { char: "中", on: "チュウ", kun: "なか", meaning: "middle, inside", strokes: 4, examples: [
                        { word: "中学校", reading: "ちゅうがっこう", meaning: "junior high school" },
                        { word: "家の中", reading: "いえのなか", meaning: "inside the house" },
                        { word: "中国", reading: "ちゅうごく", meaning: "China" }
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
