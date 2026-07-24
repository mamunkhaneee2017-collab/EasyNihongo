/* ==========================================
   GRAMMAR DATA — Level → Chapter → Patterns
   Same { chapters: [...] } shape as
   vocabulary-data.js / kanji-data.js — see
   data/content-helpers.js for how the flat
   item_index used by progress_items is
   computed from this.

   N4 keeps its previously-authored 5 patterns
   as a single chapter (real content, just not
   yet re-organized into a full chapter set).
   N3-N1 stay empty/locked until content is
   written for those levels.
========================================== */

const grammarData = {

    n5: {
        chapters: [
            {
                id: "basic-particles",
                title: "Basic Particles (は・を・に・で)",
                items: [
                    { pattern: "〜は〜です", reading: "~ wa ~ desu", meaning: "States what something is — topic followed by a description.", jp: "私は学生です。", en: "I am a student." },
                    { pattern: "〜を", reading: "~ wo", meaning: "Marks the direct object of a verb — the thing an action is done to.", jp: "水を飲みます。", en: "I drink water." },
                    { pattern: "〜に行きます", reading: "~ ni ikimasu", meaning: "Marks a destination with a movement verb — \"go to\" a place.", jp: "学校に行きます。", en: "I go to school." },
                    { pattern: "〜で", reading: "~ de", meaning: "Marks the place where an action happens.", jp: "図書館で勉強します。", en: "I study at the library." }
                ]
            },
            {
                id: "desu-copula-adjectives",
                title: "です Copula & Adjectives",
                items: [
                    { pattern: "〜くないです", reading: "~ kunai desu", meaning: "The negative form of an i-adjective — \"is not\" (i-adjective).", jp: "この本は高くないです。", en: "This book is not expensive." },
                    { pattern: "〜じゃないです", reading: "~ ja nai desu", meaning: "The negative form for nouns and na-adjectives — \"is not.\"", jp: "今日は休みじゃないです。", en: "Today is not a day off." },
                    { pattern: "〜でした", reading: "~ deshita", meaning: "The past tense of です — \"was.\"", jp: "昨日は雨でした。", en: "It was rainy yesterday." },
                    { pattern: "〜くて〜", reading: "~ kute ~", meaning: "Connects two i-adjectives, or an i-adjective to a following clause.", jp: "このラーメンは安くておいしいです。", en: "This ramen is cheap and delicious." }
                ]
            },
            {
                id: "masu-form-verbs",
                title: "Polite Verb Forms (ます-form)",
                items: [
                    { pattern: "〜ます", reading: "~ masu", meaning: "The polite present/future form of a verb.", jp: "毎日、日本語を勉強します。", en: "I study Japanese every day." },
                    { pattern: "〜ません", reading: "~ masen", meaning: "The polite negative present/future form of a verb.", jp: "肉は食べません。", en: "I don't eat meat." },
                    { pattern: "〜ました", reading: "~ mashita", meaning: "The polite past form of a verb.", jp: "昨日、映画を見ました。", en: "I watched a movie yesterday." },
                    { pattern: "〜ませんでした", reading: "~ masen deshita", meaning: "The polite past negative form of a verb.", jp: "今朝、朝ご飯を食べませんでした。", en: "I didn't eat breakfast this morning." },
                    { pattern: "〜ています", reading: "~te imasu", meaning: "Describes an ongoing action or continuous state.", jp: "今、勉強しています。", en: "I am studying right now." },
                    { pattern: "〜たいです", reading: "~tai desu", meaning: "Expresses wanting to do something.", jp: "日本に行きたいです。", en: "I want to go to Japan." },
                    { pattern: "〜ましょう", reading: "~mashou", meaning: "A gentle suggestion — \"let's do\" something together.", jp: "一緒に食べましょう。", en: "Let's eat together." }
                ]
            },
            {
                id: "adjective-past-comparison",
                title: "Adjectives: Past & Comparison",
                items: [
                    { pattern: "〜かったです", reading: "~ katta desu", meaning: "The past tense of an i-adjective — \"was\" (i-adjective).", jp: "昨日は寒かったです。", en: "It was cold yesterday." },
                    { pattern: "〜くなかったです", reading: "~ kunakatta desu", meaning: "The past negative of an i-adjective — \"was not\" (i-adjective).", jp: "テストは難しくなかったです。", en: "The test was not difficult." },
                    { pattern: "〜より〜のほうが〜です", reading: "~ yori ~ no hou ga ~ desu", meaning: "Compares two things — \"B is more [adjective] than A.\"", jp: "電車よりバスのほうが安いです。", en: "The bus is cheaper than the train." },
                    { pattern: "〜が一番〜です", reading: "~ ga ichiban ~ desu", meaning: "The superlative — \"is the most [adjective]\" among a group.", jp: "これが一番いいです。", en: "This is the best." }
                ]
            },
            {
                id: "requests-prohibition",
                title: "Requests & Prohibition",
                items: [
                    { pattern: "〜てください", reading: "~ te kudasai", meaning: "A polite request — \"please do\" something.", jp: "ここに名前を書いてください。", en: "Please write your name here." },
                    { pattern: "〜ないでください", reading: "~ naide kudasai", meaning: "A polite negative request — \"please don't do\" something.", jp: "写真を撮らないでください。", en: "Please don't take photos." },
                    { pattern: "〜てはいけません", reading: "~ te wa ikemasen", meaning: "Expresses prohibition — \"must not\" do something.", jp: "ここでたばこを吸ってはいけません。", en: "You must not smoke here." },
                    { pattern: "〜ましょうか", reading: "~ mashou ka", meaning: "Offers to do something for someone — \"shall I/we...?\"", jp: "荷物を持ちましょうか。", en: "Shall I carry your luggage?" }
                ]
            },
            {
                id: "ability-manner",
                title: "Ability & Manner",
                items: [
                    { pattern: "〜ことができます", reading: "~ koto ga dekimasu", meaning: "Expresses ability — \"can do\" something.", jp: "私はピアノを弾くことができます。", en: "I can play the piano." },
                    { pattern: "〜がわかります", reading: "~ ga wakarimasu", meaning: "Expresses understanding — \"understand\" something.", jp: "日本語が少しわかります。", en: "I understand a little Japanese." },
                    { pattern: "〜すぎます", reading: "~ sugimasu", meaning: "Expresses excess — \"too much\" (verb/adjective).", jp: "このコーヒーは熱すぎます。", en: "This coffee is too hot." },
                    { pattern: "〜ながら", reading: "~ nagara", meaning: "Describes two actions done at the same time — \"while doing.\"", jp: "音楽を聞きながら勉強します。", en: "I study while listening to music." }
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
                    { pattern: "〜なければなりません", reading: "~nakereba narimasen", meaning: "Expresses obligation — \"must\" do something.", jp: "明日、早く起きなければなりません。", en: "I must wake up early tomorrow." },
                    { pattern: "〜てもいいです", reading: "~temo ii desu", meaning: "Asks or grants permission — \"may\" or \"is allowed to.\"", jp: "ここに座ってもいいですか。", en: "May I sit here?" },
                    { pattern: "〜たら", reading: "~tara", meaning: "A conditional — \"if\" or \"when\" something happens.", jp: "雨が降ったら、行きません。", en: "If it rains, I won't go." },
                    { pattern: "〜そうです", reading: "~sou desu", meaning: "Describes an appearance — \"looks like\" or \"seems.\"", jp: "このケーキは美味しそうです。", en: "This cake looks delicious." },
                    { pattern: "〜ようになる", reading: "~you ni naru", meaning: "Describes a change of state — \"come to\" be able to do something.", jp: "漢字が読めるようになりました。", en: "I've come to be able to read Kanji." }
                ]
            }
        ]
    },

    n3: { chapters: [] },
    n2: { chapters: [] },
    n1: { chapters: [] }

};

if (typeof module !== "undefined" && module.exports) { module.exports = grammarData; }
