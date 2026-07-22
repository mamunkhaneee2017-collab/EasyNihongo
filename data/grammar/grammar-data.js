/* ==========================================
   GRAMMAR DATA
   Loaded via <script> tag (not fetch()) so
   grammar.html still works over file://.
   N3-N1 are intentionally empty — those levels
   are locked in the UI until content is added.
========================================== */

const grammarData = {

    n5: [
        { pattern: "〜は〜です", reading: "~ wa ~ desu", meaning: "States what something is — topic followed by a description.", jp: "私は学生です。", en: "I am a student." },
        { pattern: "〜を ください", reading: "~ o kudasai", meaning: "A polite way to ask for something.", jp: "水をください。", en: "Please give me water." },
        { pattern: "〜ています", reading: "~te imasu", meaning: "Describes an ongoing action or continuous state.", jp: "今、勉強しています。", en: "I am studying right now." },
        { pattern: "〜たいです", reading: "~tai desu", meaning: "Expresses wanting to do something.", jp: "日本に行きたいです。", en: "I want to go to Japan." },
        { pattern: "〜ましょう", reading: "~mashou", meaning: "A gentle suggestion — \"let's do\" something together.", jp: "一緒に食べましょう。", en: "Let's eat together." }
    ],

    n4: [
        { pattern: "〜なければなりません", reading: "~nakereba narimasen", meaning: "Expresses obligation — \"must\" do something.", jp: "明日、早く起きなければなりません。", en: "I must wake up early tomorrow." },
        { pattern: "〜てもいいです", reading: "~temo ii desu", meaning: "Asks or grants permission — \"may\" or \"is allowed to.\"", jp: "ここに座ってもいいですか。", en: "May I sit here?" },
        { pattern: "〜たら", reading: "~tara", meaning: "A conditional — \"if\" or \"when\" something happens.", jp: "雨が降ったら、行きません。", en: "If it rains, I won't go." },
        { pattern: "〜そうです", reading: "~sou desu", meaning: "Describes an appearance — \"looks like\" or \"seems.\"", jp: "このケーキは美味しそうです。", en: "This cake looks delicious." },
        { pattern: "〜ようになる", reading: "~you ni naru", meaning: "Describes a change of state — \"come to\" be able to do something.", jp: "漢字が読めるようになりました。", en: "I've come to be able to read Kanji." }
    ],

    n3: [],
    n2: [],
    n1: []

};

if (typeof module !== "undefined" && module.exports) { module.exports = grammarData; }
