/* ==========================================
   GRAMMAR DATA — Level → Chapter → Patterns
   Same { chapters: [...] } shape as
   vocabulary-data.js / kanji-data.js — see
   data/content-helpers.js for how the flat
   item_index used by progress_items is
   computed from this.

   Each pattern follows one template:
     pattern      — the grammar point itself
     reading      — HIRAGANA furigana for the
                    pattern, omitted when the
                    pattern is already pure kana
                    (particles like 〜は〜です
                    carry no kanji, so no reading
                    is needed — same convention
                    used across vocabulary/kanji
                    data: never gloss kana with
                    kana)
     meanings     — bilingual { en, bn } object for
                    what the pattern does
     connection   — 接続 (conjugation) rules, as
                    an array of one or more lines
                    (verb/i-adj/na-adj/noun forms
                    often differ, hence an array)
     examples     — exactly 3 real example
                    sentences, each with jp,
                    reading (hiragana, omitted
                    if the sentence has no kanji)
                    and en

   N5: 25 chapters, restructured from the
   original 34 to pair 1:1 with vocabulary-data.js's
   25 chapters (matching id slugs) — see that
   file's header for why and for the
   conversation/story pairing this enables.

   N4: 25 chapters of its own (source: the three
   N4-grammar PDFs — Learnjapaneseaz's "N4 All
   Grammar", japanesetest4you's grammar list, and
   passjapanesetest's N4 grammar table), following
   a Minna no Nihongo II-style progression
   (obligation/permission → conditionals →
   giving/receiving → potential/passive/causative →
   keigo → volitional → advanced connectors →
   uncertainty). These ids are NOT paired 1:1 with
   vocabulary-data.js's N4 chapters (see that
   file's header) — conversations-data.js and
   stories-data.js key off grammar-data.js's N4
   ids instead. Kanji (with furigana in `reading`)
   is used from chapter 1, since N4 assumes the
   N5 kana/kanji base is already known.

   N3: 26 chapters, 90 patterns, covering the
   standard N3 grammar syllabus (judgment,
   concession, reason, degree, timing, hedging,
   quotation, keigo basics, etc.) — not paired
   1:1 with vocabulary-data.js's N3 chapters.

   N1: 25 chapters, 90 patterns (matching N3's
   scale), covering the standard N1 grammar
   canon (advanced reason/concession, extreme
   degree, immediate succession, forced
   circumstance, classical/literary forms like
   〜べし／〜まじき／〜んがため, hedging and
   rhetorical judgment, etc.) — not paired 1:1
   with vocabulary-data.js's N1 chapters. Every
   pattern was checked against the full N5-N3
   pattern list to avoid duplicates.

   N2 stays empty/locked until content is
   written for that level.
========================================== */

const grammarData = {

    n5: {
        chapters: [
            {
                id: "greetings-self-intro-numbers",
                title: "Greetings, Self-Introduction & Numbers",
                items: [
                    {
                        pattern: "〜は〜です",
                        meanings: { en: "States what something is — topic followed by a description.", bn: "কোনো কিছু কী তা বলে — বিষয়ের (topic) পর একটি বর্ণনা আসে।" },
                        connection: ["名詞 + は + 名詞／形容詞 + です"],
                        examples: [
                            { jp: "私は学生です。", reading: "わたしはがくせいです。", en: "I am a student." },
                            { jp: "これは本です。", reading: "これはほんです。", en: "This is a book." },
                            { jp: "東京は大きいです。", reading: "とうきょうはおおきいです。", en: "Tokyo is big." }
                        ]
                    },
                    {
                        pattern: "〜を",
                        meanings: { en: "Marks the direct object of a verb — the thing an action is done to.", bn: "ক্রিয়ার সরাসরি কর্ম (object) চিহ্নিত করে — যে জিনিসের উপর কাজটি করা হয়।" },
                        connection: ["名詞 + を + 他動詞"],
                        examples: [
                            { jp: "水を飲みます。", reading: "みずをのみます。", en: "I drink water." },
                            { jp: "パンを食べます。", reading: "パンをたべます。", en: "I eat bread." },
                            { jp: "新聞を読みます。", reading: "しんぶんをよみます。", en: "I read the newspaper." }
                        ]
                    },
                    {
                        pattern: "〜に行きます",
                        reading: "〜にいきます",
                        meanings: { en: "Marks a destination with a movement verb — \"go to\" a place.", bn: "গতিবাচক ক্রিয়ার সাথে গন্তব্যস্থল চিহ্নিত করে — কোথাও \"যাওয়া\" বোঝাতে।" },
                        connection: ["場所 + に + 行きます／来ます／帰ります"],
                        examples: [
                            { jp: "学校に行きます。", reading: "がっこうにいきます。", en: "I go to school." },
                            { jp: "明日、東京に行きます。", reading: "あした、とうきょうにいきます。", en: "I will go to Tokyo tomorrow." },
                            { jp: "毎年、国に帰ります。", reading: "まいとし、くににかえります。", en: "I return to my country every year." }
                        ]
                    },
                    {
                        pattern: "〜で",
                        meanings: { en: "Marks the place where an action happens.", bn: "যে স্থানে কাজটি ঘটে সেই স্থান চিহ্নিত করে।" },
                        connection: ["場所 + で + 動詞（動作）"],
                        examples: [
                            { jp: "図書館で勉強します。", reading: "としょかんでべんきょうします。", en: "I study at the library." },
                            { jp: "公園で遊びます。", reading: "こうえんであそびます。", en: "I play at the park." },
                            { jp: "レストランで食べます。", en: "I eat at the restaurant." }
                        ]
                    }
                ]
            },
            {
                id: "family-desu",
                title: "Family & the です Copula",
                items: [
                    {
                        pattern: "〜くないです",
                        meanings: { en: "The negative form of an i-adjective — \"is not\" (i-adjective).", bn: "i-বিশেষণের নেতিবাচক রূপ — \"নয়\" (i-adjective)।" },
                        connection: ["い形容詞（語幹）+ くないです", "※いい → よくないです（例外）"],
                        examples: [
                            { jp: "この本は高くないです。", reading: "このほんはたかくないです。", en: "This book is not expensive." },
                            { jp: "この映画は面白くないです。", reading: "このえいがはおもしろくないです。", en: "This movie is not interesting." },
                            { jp: "今日は寒くないです。", reading: "きょうはさむくないです。", en: "It is not cold today." }
                        ]
                    },
                    {
                        pattern: "〜じゃないです",
                        meanings: { en: "The negative form for nouns and na-adjectives — \"is not\" (＝ではありません).", bn: "বিশেষ্য ও na-বিশেষণের নেতিবাচক রূপ — \"নয়\" (＝ではありません)।" },
                        connection: ["名詞／な形容詞 + じゃないです"],
                        examples: [
                            { jp: "今日は休みじゃないです。", reading: "きょうはやすみじゃないです。", en: "Today is not a day off." },
                            { jp: "彼は先生じゃないです。", reading: "かれはせんせいじゃないです。", en: "He is not a teacher." },
                            { jp: "この部屋は静かじゃないです。", reading: "このへやはしずかじゃないです。", en: "This room is not quiet." }
                        ]
                    },
                    {
                        pattern: "〜でした",
                        meanings: { en: "The past tense of です — \"was.\"", bn: "です-এর অতীত কাল — \"ছিল\"।" },
                        connection: ["名詞／な形容詞 + でした"],
                        examples: [
                            { jp: "昨日は雨でした。", reading: "きのうはあめでした。", en: "It was rainy yesterday." },
                            { jp: "子供のとき、この町は静かでした。", reading: "こどものとき、このまちはしずかでした。", en: "This town was quiet when I was a child." },
                            { jp: "テストは簡単でした。", reading: "テストはかんたんでした。", en: "The test was easy." }
                        ]
                    },
                    {
                        pattern: "〜くて〜",
                        meanings: { en: "Connects two i-adjectives, or an i-adjective to a following clause.", bn: "দুটি i-বিশেষণকে, বা একটি i-বিশেষণকে পরবর্তী বাক্যাংশের সাথে যুক্ত করে।" },
                        connection: ["い形容詞（語幹）+ くて + 形容詞／文", "※いい → よくて（例外）"],
                        examples: [
                            { jp: "このラーメンは安くておいしいです。", reading: "このラーメンはやすくておいしいです。", en: "This ramen is cheap and delicious." },
                            { jp: "部屋は広くて明るいです。", reading: "へやはひろくてあかるいです。", en: "The room is spacious and bright." },
                            { jp: "この靴は軽くて丈夫です。", reading: "このくつはかるくてじょうぶです。", en: "These shoes are light and durable." }
                        ]
                    }
                ]
            },
            {
                id: "daily-routine-time-dates",
                title: "Daily Routine, Time & Dates",
                items: [
                    {
                        pattern: "〜ます",
                        meanings: { en: "The polite present/future form of a verb.", bn: "ক্রিয়ার নম্র বর্তমান/ভবিষ্যৎ কালের রূপ।" },
                        connection: ["動詞（ます形）"],
                        examples: [
                            { jp: "毎日、日本語を勉強します。", reading: "まいにち、にほんごをべんきょうします。", en: "I study Japanese every day." },
                            { jp: "朝、六時に起きます。", reading: "あさ、ろくじにおきます。", en: "I wake up at six in the morning." },
                            { jp: "週末、映画を見ます。", reading: "しゅうまつ、えいがをみます。", en: "I watch a movie on the weekend." }
                        ]
                    },
                    {
                        pattern: "〜ません",
                        meanings: { en: "The polite negative present/future form of a verb.", bn: "ক্রিয়ার নম্র নেতিবাচক বর্তমান/ভবিষ্যৎ কালের রূপ।" },
                        connection: ["動詞（ます形）+ ません"],
                        examples: [
                            { jp: "肉は食べません。", reading: "にくはたべません。", en: "I don't eat meat." },
                            { jp: "お酒を飲みません。", reading: "おさけをのみません。", en: "I don't drink alcohol." },
                            { jp: "今日は働きません。", reading: "きょうははたらきません。", en: "I don't work today." }
                        ]
                    },
                    {
                        pattern: "〜ました",
                        meanings: { en: "The polite past form of a verb.", bn: "ক্রিয়ার নম্র অতীত কালের রূপ।" },
                        connection: ["動詞（ます形）+ ました"],
                        examples: [
                            { jp: "昨日、映画を見ました。", reading: "きのう、えいがをみました。", en: "I watched a movie yesterday." },
                            { jp: "先週、京都へ行きました。", reading: "せんしゅう、きょうとへいきました。", en: "I went to Kyoto last week." },
                            { jp: "手紙を書きました。", reading: "てがみをかきました。", en: "I wrote a letter." }
                        ]
                    },
                    {
                        pattern: "〜ませんでした",
                        meanings: { en: "The polite past negative form of a verb.", bn: "ক্রিয়ার নম্র অতীত নেতিবাচক রূপ।" },
                        connection: ["動詞（ます形）+ ませんでした"],
                        examples: [
                            { jp: "今朝、朝ご飯を食べませんでした。", reading: "けさ、あさごはんをたべませんでした。", en: "I didn't eat breakfast this morning." },
                            { jp: "昨日、勉強しませんでした。", reading: "きのう、べんきょうしませんでした。", en: "I didn't study yesterday." },
                            { jp: "パーティーに行きませんでした。", reading: "パーティーにいきませんでした。", en: "I didn't go to the party." }
                        ]
                    },
                    {
                        pattern: "〜ています",
                        meanings: { en: "Describes an ongoing action or continuous state.", bn: "চলমান কাজ বা স্থায়ী অবস্থা বর্ণনা করে।" },
                        connection: ["動詞（て形）+ います"],
                        examples: [
                            { jp: "今、勉強しています。", reading: "いま、べんきょうしています。", en: "I am studying right now." },
                            { jp: "彼は東京に住んでいます。", reading: "かれはとうきょうにすんでいます。", en: "He lives in Tokyo." },
                            { jp: "雨が降っています。", reading: "あめがふっています。", en: "It is raining." }
                        ]
                    },
                    {
                        pattern: "〜たいです",
                        meanings: { en: "Expresses wanting to do something.", bn: "কিছু করতে চাওয়া প্রকাশ করে।" },
                        connection: ["動詞（ます形語幹）+ たいです"],
                        examples: [
                            { jp: "日本に行きたいです。", reading: "にほんにいきたいです。", en: "I want to go to Japan." },
                            { jp: "新しい車が買いたいです。", reading: "あたらしいくるまがかいたいです。", en: "I want to buy a new car." },
                            { jp: "すしを食べたいです。", en: "I want to eat sushi." }
                        ]
                    },
                    {
                        pattern: "〜ましょう",
                        meanings: { en: "A gentle suggestion — \"let's do\" something together.", bn: "একটি ভদ্র প্রস্তাব — একসাথে কিছু \"করা যাক\"।" },
                        connection: ["動詞（ます形語幹）+ ましょう"],
                        examples: [
                            { jp: "一緒に食べましょう。", reading: "いっしょにたべましょう。", en: "Let's eat together." },
                            { jp: "少し休みましょう。", reading: "すこしやすみましょう。", en: "Let's rest a little." },
                            { jp: "明日、また会いましょう。", reading: "あした、またあいましょう。", en: "Let's meet again tomorrow." }
                        ]
                    }
                ]
            },
            {
                id: "adjectives-comparison",
                title: "Adjectives & Comparison",
                items: [
                    {
                        pattern: "〜かったです",
                        meanings: { en: "The past tense of an i-adjective — \"was\" (i-adjective).", bn: "i-বিশেষণের অতীত কাল — \"ছিল\" (i-adjective)।" },
                        connection: ["い形容詞（語幹）+ かったです", "※いい → よかったです（例外）"],
                        examples: [
                            { jp: "昨日は寒かったです。", reading: "きのうはさむかったです。", en: "It was cold yesterday." },
                            { jp: "旅行は楽しかったです。", reading: "りょこうはたのしかったです。", en: "The trip was fun." },
                            { jp: "この映画はよかったです。", reading: "このえいがはよかったです。", en: "This movie was good." }
                        ]
                    },
                    {
                        pattern: "N1とN2とどちらが〜ですか",
                        meanings: { en: "Ask the listener to choose which of two things is more adjective.", bn: "দুটি জিনিসের মধ্যে কোনটি বেশি [বিশেষণ] তা শ্রোতাকে বেছে নিতে বলা।" },
                        connection: ["N1 + と + N2 + と + どちらが + 形容詞 + ですか", "…N1／N2のほうが〜です"],
                        examples: [
                            { jp: "サッカーと野球とどちらが面白いですか。…サッカーのほうが面白いです。", reading: "サッカーとやきゅうとどちらがおもしろいですか。…サッカーのほうがおもしろいです。", en: "Which is more interesting, soccer or baseball? ...Soccer is." },
                            { jp: "北海道と大阪とどちらが涼しいですか。", reading: "ほっかいどうとおおさかとどちらがすずしいですか。", en: "Which is cooler, Hokkaido or Osaka?" },
                            { jp: "春と秋とどちらが好きですか。", reading: "はるとあきとどちらがすきですか。", en: "Which do you like better, spring or autumn?" }
                        ]
                    },
                    {
                        pattern: "〜くなかったです",
                        meanings: { en: "The past negative of an i-adjective — \"was not\" (i-adjective).", bn: "i-বিশেষণের অতীত নেতিবাচক রূপ — \"ছিল না\" (i-adjective)।" },
                        connection: ["い形容詞（語幹）+ くなかったです", "※いい → よくなかったです（例外）"],
                        examples: [
                            { jp: "テストは難しくなかったです。", reading: "テストはむずかしくなかったです。", en: "The test was not difficult." },
                            { jp: "天気はよくなかったです。", reading: "てんきはよくなかったです。", en: "The weather was not good." },
                            { jp: "映画はあまり面白くなかったです。", reading: "えいがはあまりおもしろくなかったです。", en: "The movie was not very interesting." }
                        ]
                    },
                    {
                        pattern: "N1[の中]で何/どこ/だれ/いつがいちばん〜ですか",
                        meanings: { en: "Ask which one in a group or category is the most adjective.", bn: "একটি দল বা শ্রেণির মধ্যে কোনটি সবচেয়ে বেশি [বিশেষণ] তা জিজ্ঞাসা করা।" },
                        connection: ["N1[の中]で + 何／どこ／だれ／いつ + が + いちばん + 形容詞 + ですか"],
                        examples: [
                            { jp: "日本料理の中で何がいちばんおいしいですか。…天ぷらがいちばんおいしいです。", reading: "にほんりょうりのなかでなにがいちばんおいしいですか。…てんぷらがいちばんおいしいです。", en: "Among Japanese dishes, what is the most delicious? ...Tempura is." },
                            { jp: "家族でだれがいちばん背が高いですか。", reading: "かぞくでだれがいちばんせがたかいですか。", en: "Who is the tallest in your family?" },
                            { jp: "一年でいつがいちばん寒いですか。", reading: "いちねんでいつがいちばんさむいですか。", en: "When is the coldest time of the year?" }
                        ]
                    },
                    {
                        pattern: "〜より〜のほうが〜です",
                        meanings: { en: "Compares two things — \"B is more [adjective] than A.\"", bn: "দুটি জিনিসের তুলনা করে — \"A-এর চেয়ে B বেশি [বিশেষণ]\"।" },
                        connection: ["名詞A + より + 名詞B + のほうが + 形容詞 + です"],
                        examples: [
                            { jp: "電車よりバスのほうが安いです。", reading: "でんしゃよりバスのほうがやすいです。", en: "The bus is cheaper than the train." },
                            { jp: "夏より冬のほうが好きです。", reading: "なつよりふゆのほうがすきです。", en: "I like winter more than summer." },
                            { jp: "兄より弟のほうが背が高いです。", reading: "あによりおとうとのほうがせがたかいです。", en: "My younger brother is taller than my older brother." }
                        ]
                    },
                    {
                        pattern: "〜が一番〜です",
                        reading: "〜がいちばん〜です",
                        meanings: { en: "The superlative — \"is the most [adjective]\" among a group.", bn: "সর্বোচ্চ মাত্রা প্রকাশ করে — একটি দলের মধ্যে \"সবচেয়ে বেশি [বিশেষণ]\"।" },
                        connection: ["名詞 + が一番 + 形容詞 + です", "（範囲）で／の中で + 名詞 + が一番〜です"],
                        examples: [
                            { jp: "これが一番いいです。", reading: "これがいちばんいいです。", en: "This is the best." },
                            { jp: "家族の中で父が一番背が高いです。", reading: "かぞくのなかでちちがいちばんせがたかいです。", en: "In my family, my father is the tallest." },
                            { jp: "一年で夏が一番暑いです。", reading: "いちねんでなつがいちばんあついです。", en: "Summer is the hottest in the year." }
                        ]
                    }
                ]
            },
            {
                id: "school-requests-rules",
                title: "School, Requests & Rules",
                items: [
                    {
                        pattern: "〜てください",
                        meanings: { en: "A polite request — \"please do\" something.", bn: "একটি নম্র অনুরোধ — কিছু \"করুন দয়া করে\"।" },
                        connection: ["動詞（て形）+ ください"],
                        examples: [
                            { jp: "ここに名前を書いてください。", reading: "ここになまえをかいてください。", en: "Please write your name here." },
                            { jp: "窓を開けてください。", reading: "まどをあけてください。", en: "Please open the window." },
                            { jp: "ゆっくり話してください。", reading: "ゆっくりはなしてください。", en: "Please speak slowly." }
                        ]
                    },
                    {
                        pattern: "Vない-formなくてもいいです",
                        meanings: { en: "State that an action doesn't have to be done.", bn: "কোনো কাজ করার প্রয়োজন নেই তা বলে।" },
                        connection: ["動詞（ない形語幹）+ なくてもいいです"],
                        examples: [
                            { jp: "あした来なくてもいいです。", reading: "あしたこなくてもいいです。", en: "You don't have to come tomorrow." },
                            { jp: "靴を脱がなくてもいいです。", reading: "くつをぬがなくてもいいです。", en: "You don't have to take off your shoes." },
                            { jp: "心配しなくてもいいです。", reading: "しんぱいしなくてもいいです。", en: "You don't need to worry." }
                        ]
                    },
                    {
                        pattern: "〜ないでください",
                        meanings: { en: "A polite negative request — \"please don't do\" something.", bn: "একটি নম্র নেতিবাচক অনুরোধ — কিছু \"করবেন না দয়া করে\"।" },
                        connection: ["動詞（ない形）+ でください"],
                        examples: [
                            { jp: "写真を撮らないでください。", reading: "しゃしんをとらないでください。", en: "Please don't take photos." },
                            { jp: "ここに車を止めないでください。", reading: "ここにくるまをとめないでください。", en: "Please don't park your car here." },
                            { jp: "心配しないでください。", reading: "しんぱいしないでください。", en: "Please don't worry." }
                        ]
                    },
                    {
                        pattern: "N(object)は",
                        meanings: { en: "Make a direct object the topic of the sentence by replacing を with は.", bn: "を-এর জায়গায় は ব্যবহার করে সরাসরি কর্মকে বাক্যের বিষয় (topic) বানানো।" },
                        connection: ["名詞（目的語）+ は"],
                        examples: [
                            { jp: "荷物はここに置かないでください。", reading: "にもつはここにおかないでください。", en: "As for parcels, don't put them here." },
                            { jp: "昼ご飯は会社の食堂で食べます。", reading: "ひるごはんはかいしゃのしょくどうでたべます。", en: "As for lunch, I have it in the company cafeteria." },
                            { jp: "肉は食べません。", reading: "にくはたべません。", en: "I don't eat meat." }
                        ]
                    },
                    {
                        pattern: "〜てはいけません",
                        meanings: { en: "Expresses prohibition — \"must not\" do something.", bn: "নিষেধ প্রকাশ করে — কিছু \"করা যাবে না\"।" },
                        connection: ["動詞（て形）+ はいけません"],
                        examples: [
                            { jp: "ここでたばこを吸ってはいけません。", reading: "ここでたばこをすってはいけません。", en: "You must not smoke here." },
                            { jp: "授業中に寝てはいけません。", reading: "じゅぎょうちゅうにねてはいけません。", en: "You must not sleep during class." },
                            { jp: "ここで写真を撮ってはいけません。", reading: "ここでしゃしんをとってはいけません。", en: "You must not take photos here." }
                        ]
                    },
                    {
                        pattern: "N(time)までにV",
                        meanings: { en: "Mark the deadline by which an action must be done.", bn: "যে সময়সীমার মধ্যে একটি কাজ শেষ করতে হবে তা চিহ্নিত করে।" },
                        connection: ["時間 + までに + 動詞"],
                        examples: [
                            { jp: "会議は五時までに終わります。", reading: "かいぎはごじまでにおわります。", en: "The meeting will be over by five." },
                            { jp: "土曜日までに本を返さなければなりません。", reading: "どようびまでにほんをかえさなければなりません。", en: "I must return the book by Saturday." },
                            { jp: "レポートは金曜日までに出してください。", reading: "レポートはきんようびまでにだしてください。", en: "Please submit the report by Friday." }
                        ]
                    },
                    {
                        pattern: "〜ましょうか",
                        meanings: { en: "Offers to do something for someone — \"shall I/we...?\"", bn: "কারো জন্য কিছু করার প্রস্তাব দেয় — \"আমি/আমরা কি...?\"" },
                        connection: ["動詞（ます形語幹）+ ましょうか"],
                        examples: [
                            { jp: "荷物を持ちましょうか。", reading: "にもつをもちましょうか。", en: "Shall I carry your luggage?" },
                            { jp: "窓を開けましょうか。", reading: "まどをあけましょうか。", en: "Shall I open the window?" },
                            { jp: "一緒に行きましょうか。", reading: "いっしょにいきましょうか。", en: "Shall we go together?" }
                        ]
                    }
                ]
            },
            {
                id: "hobbies-skills-ability",
                title: "Hobbies, Skills & Ability",
                items: [
                    {
                        pattern: "〜ことができます",
                        meanings: { en: "Expresses ability — \"can do\" something.", bn: "সামর্থ্য প্রকাশ করে — কিছু \"করতে পারা\"।" },
                        connection: ["動詞（辞書形）+ ことができます"],
                        examples: [
                            { jp: "私はピアノを弾くことができます。", reading: "わたしはピアノをひくことができます。", en: "I can play the piano." },
                            { jp: "漢字を読むことができます。", reading: "かんじをよむことができます。", en: "I can read kanji." },
                            { jp: "彼は車を運転することができます。", reading: "かれはくるまをうんてんすることができます。", en: "He can drive a car." }
                        ]
                    },
                    {
                        pattern: "〜がわかります",
                        meanings: { en: "Expresses understanding — \"understand\" something.", bn: "বোঝা প্রকাশ করে — কিছু \"বোঝা\"।" },
                        connection: ["名詞 + がわかります"],
                        examples: [
                            { jp: "日本語が少しわかります。", reading: "にほんごがすこしわかります。", en: "I understand a little Japanese." },
                            { jp: "この問題の意味がわかりません。", reading: "このもんだいのいみがわかりません。", en: "I don't understand the meaning of this question." },
                            { jp: "彼の気持ちがよくわかります。", reading: "かれのきもちがよくわかります。", en: "I understand his feelings well." }
                        ]
                    },
                    {
                        pattern: "〜すぎます",
                        meanings: { en: "Expresses excess — \"too much\" (verb/adjective).", bn: "অতিরিক্ত মাত্রা প্রকাশ করে — \"অতিরিক্ত/খুব বেশি\" (ক্রিয়া/বিশেষণ)।" },
                        connection: ["動詞（ます形語幹）+ すぎます", "い形容詞／な形容詞（語幹）+ すぎます"],
                        examples: [
                            { jp: "このコーヒーは熱すぎます。", reading: "このコーヒーはあつすぎます。", en: "This coffee is too hot." },
                            { jp: "昨日は食べすぎました。", reading: "きのうはたべすぎました。", en: "I ate too much yesterday." },
                            { jp: "この問題は簡単すぎます。", reading: "このもんだいはかんたんすぎます。", en: "This problem is too easy." }
                        ]
                    },
                    {
                        pattern: "〜ながら",
                        meanings: { en: "Describes two actions done at the same time — \"while doing.\"", bn: "একই সময়ে করা দুটি কাজ বর্ণনা করে — \"করার সময়\"।" },
                        connection: ["動詞（ます形語幹）+ ながら"],
                        examples: [
                            { jp: "音楽を聞きながら勉強します。", reading: "おんがくをききながらべんきょうします。", en: "I study while listening to music." },
                            { jp: "テレビを見ながらご飯を食べます。", reading: "テレビをみながらごはんをたべます。", en: "I eat while watching TV." },
                            { jp: "歌いながら歩きます。", reading: "うたいながらあるきます。", en: "I walk while singing." }
                        ]
                    }
                ]
            },
            {
                id: "home-furniture-existence",
                title: "Home, Furniture & Existence",
                items: [
                    {
                        pattern: "〜があります／います",
                        meanings: { en: "Expresses existence — あります for inanimate things, います for people/animals.", bn: "অস্তিত্ব প্রকাশ করে — জড় বস্তুর জন্য あります, মানুষ/প্রাণীর জন্য います।" },
                        connection: ["場所に + 名詞（もの）+ があります", "場所に + 名詞（人・動物）+ がいます"],
                        examples: [
                            { jp: "机の上に本があります。", reading: "つくえのうえにほんがあります。", en: "There is a book on the desk." },
                            { jp: "教室に学生がいます。", reading: "きょうしつにがくせいがいます。", en: "There are students in the classroom." },
                            { jp: "公園に猫がいます。", reading: "こうえんにねこがいます。", en: "There is a cat in the park." }
                        ]
                    },
                    {
                        pattern: "N1(place)にN2があります／います",
                        meanings: { en: "State what exists at a given place, using に for the place and が for the thing/person.", bn: "নির্দিষ্ট স্থানে কী আছে তা বলে — স্থানের জন্য に এবং জিনিস/ব্যক্তির জন্য が ব্যবহার করে।" },
                        connection: ["場所 + に + 名詞 + が + あります／います"],
                        examples: [
                            { jp: "わたしの部屋に机があります。", reading: "わたしのへやにつくえがあります。", en: "There is a desk in my room." },
                            { jp: "事務所にミラーさんがいます。", reading: "じむしょにミラーさんがいます。", en: "Mr. Miller is in the office." },
                            { jp: "公園に猫がいます。", reading: "こうえんにねこがいます。", en: "There is a cat in the park." }
                        ]
                    },
                    {
                        pattern: "〜と〜",
                        meanings: { en: "Connects two or more nouns exhaustively — \"A and B.\"", bn: "দুই বা ততোধিক বিশেষ্যকে সম্পূর্ণভাবে যুক্ত করে — \"A এবং B\"।" },
                        connection: ["名詞A + と + 名詞B"],
                        examples: [
                            { jp: "机の上に本とノートがあります。", reading: "つくえのうえにほんとノートがあります。", en: "There is a book and a notebook on the desk." },
                            { jp: "私と友達は映画を見ました。", reading: "わたしとともだちはえいがをみました。", en: "My friend and I watched a movie." },
                            { jp: "りんごとみかんを買いました。", reading: "りんごとみかんをかいました。", en: "I bought apples and oranges." }
                        ]
                    },
                    {
                        pattern: "N1はN2(place)にあります／います",
                        meanings: { en: "State where a known thing or person is, with N1 as the topic.", bn: "পরিচিত কোনো জিনিস বা ব্যক্তি কোথায় আছে তা বলে, N1 বাক্যের বিষয় (topic) হিসেবে থাকে।" },
                        connection: ["N1（話題）+ は + 場所 + に + あります／います"],
                        examples: [
                            { jp: "東京ディズニーランドは千葉県にあります。", reading: "とうきょうディズニーランドはちばけんにあります。", en: "Tokyo Disneyland is in Chiba Prefecture." },
                            { jp: "ミラーさんは事務所にいます。", reading: "ミラーさんはじむしょにいます。", en: "Mr. Miller is in the office." },
                            { jp: "郵便局はどこにありますか。", reading: "ゆうびんきょくはどこにありますか。", en: "Where is the post office?" }
                        ]
                    },
                    {
                        pattern: "〜や〜など",
                        meanings: { en: "Lists a few representative nouns from a larger group — \"A, B, and so on.\"", bn: "একটি বড় দল থেকে কিছু প্রতিনিধিত্বমূলক বিশেষ্যের তালিকা দেয় — \"A, B, ইত্যাদি\"।" },
                        connection: ["名詞A + や + 名詞B + など"],
                        examples: [
                            { jp: "机の上に本やノートなどがあります。", reading: "つくえのうえにほんやノートなどがあります。", en: "There are things like books, notebooks, and so on, on the desk." },
                            { jp: "スーパーでりんごやみかんなどを買いました。", reading: "スーパーでりんごやみかんなどをかいました。", en: "I bought things like apples, oranges, and so on at the supermarket." },
                            { jp: "週末は掃除や洗濯などをします。", reading: "しゅうまつはそうじやせんたくなどをします。", en: "On weekends I do things like cleaning, laundry, and so on." }
                        ]
                    },
                    {
                        pattern: "N1(位置)のN2",
                        meanings: { en: "Use position nouns (上/下/前/後ろ/中/隣 etc.) with の to locate something relative to another.", bn: "অবস্থান-বাচক বিশেষ্য (上/下/前/後ろ/中/隣 ইত্যাদি) の সহ ব্যবহার করে একটি জিনিসের সাপেক্ষে অন্যটির অবস্থান বলে।" },
                        connection: ["名詞 + の + 上／下／前／後ろ／右／左／中／外／隣／近く／間"],
                        examples: [
                            { jp: "机の上に写真があります。", reading: "つくえのうえにしゃしんがあります。", en: "There is a picture on the desk." },
                            { jp: "郵便局は銀行の隣にあります。", reading: "ゆうびんきょくはぎんこうのとなりにあります。", en: "The post office is next to the bank." },
                            { jp: "駅の近くで友達に会いました。", reading: "えきのちかくでともだちにあいました。", en: "I met a friend near the station." }
                        ]
                    },
                    {
                        pattern: "〜から〜まで",
                        meanings: { en: "Marks a starting point and an ending point — of time or place.", bn: "সময় বা স্থানের শুরু এবং শেষ বিন্দু চিহ্নিত করে।" },
                        connection: ["名詞（時間／場所）+ から + 名詞（時間／場所）+ まで"],
                        examples: [
                            { jp: "九時から五時まで働きます。", reading: "くじからごじまではたらきます。", en: "I work from nine to five." },
                            { jp: "家から駅まで歩きます。", reading: "いえからえきまであるきます。", en: "I walk from home to the station." },
                            { jp: "月曜日から金曜日まで学校があります。", reading: "げつようびからきんようびまでがっこうがあります。", en: "There is school from Monday to Friday." }
                        ]
                    }
                ]
            },
            {
                id: "objects-places-demonstratives",
                title: "Objects, Places & Demonstratives",
                items: [
                    {
                        pattern: "これ／それ／あれ",
                        meanings: { en: "Demonstrative pronouns for things — これ (near speaker), それ (near listener), あれ (far from both).", bn: "জিনিসের জন্য নির্দেশক সর্বনাম — これ (বক্তার কাছে), それ (শ্রোতার কাছে), あれ (উভয়ের থেকে দূরে)।" },
                        connection: ["これ／それ／あれ + は／を／が ..."],
                        examples: [
                            { jp: "これは辞書です。", reading: "これはじしょです。", en: "This is a dictionary." },
                            { jp: "それを見せてください。", reading: "それをみせてください。", en: "Please show me that." },
                            { jp: "あれは何ですか。", reading: "あれはなんですか。", en: "What is that (over there)?" }
                        ]
                    },
                    {
                        pattern: "この／その／あの＋N",
                        meanings: { en: "Modify a noun with a demonstrative — this/that/that (over there) ~.", bn: "নির্দেশক শব্দ দিয়ে একটি বিশেষ্যকে নির্দিষ্ট করে — এই/সেই/ঐ ~।" },
                        connection: ["この／その／あの + 名詞"],
                        examples: [
                            { jp: "この本はわたしのです。", reading: "このほんはわたしのです。", en: "This book is mine." },
                            { jp: "その傘は誰のですか。", reading: "そのかさはだれのですか。", en: "Whose umbrella is that?" },
                            { jp: "あの人は先生です。", reading: "あのひとはせんせいです。", en: "That person is a teacher." }
                        ]
                    },
                    {
                        pattern: "ここ／そこ／あそこ",
                        meanings: { en: "Demonstrative pronouns for places — here, there (near listener), over there.", bn: "স্থানের জন্য নির্দেশক সর্বনাম — এখানে, সেখানে (শ্রোতার কাছে), ওখানে।" },
                        connection: ["ここ／そこ／あそこ + は／に／で ..."],
                        examples: [
                            { jp: "ここは教室です。", reading: "ここはきょうしつです。", en: "This is the classroom." },
                            { jp: "そこに座ってください。", reading: "そこにすわってください。", en: "Please sit there." },
                            { jp: "あそこに銀行があります。", reading: "あそこにぎんこうがあります。", en: "There is a bank over there." }
                        ]
                    },
                    {
                        pattern: "こちら／そちら／あちら／どちら",
                        meanings: { en: "Polite equivalents of ここ／そこ／あそこ／どこ — also used to ask where someone is from.", bn: "ここ／そこ／あそこ／どこ-এর নম্র রূপ — কেউ কোথা থেকে এসেছে তা জিজ্ঞাসা করতেও ব্যবহৃত হয়।" },
                        connection: ["こちら／そちら／あちら／どちら + は／へ ..."],
                        examples: [
                            { jp: "こちらへどうぞ。", en: "This way, please." },
                            { jp: "お国はどちらですか。", reading: "おくにはどちらですか。", en: "Where are you from?" },
                            { jp: "エレベーターはあちらです。", en: "The elevator is that way." }
                        ]
                    }
                ]
            },
            {
                id: "shopping-money-clothing",
                title: "Shopping, Money & Clothing",
                items: [
                    {
                        pattern: "そうです／そうじゃありません",
                        meanings: { en: "Affirm or deny a yes/no question about a noun sentence.", bn: "বিশেষ্য-বাক্য সম্পর্কিত হ্যাঁ/না প্রশ্নের ইতিবাচক বা নেতিবাচক উত্তর দেয়।" },
                        connection: ["はい、そうです。", "いいえ、そうじゃありません。"],
                        examples: [
                            { jp: "それはテレホンカードですか。…はい、そうです。", en: "Is that a telephone card? ...Yes, it is." },
                            { jp: "田中さんは学生ですか。…いいえ、そうじゃありません。", reading: "たなかさんはがくせいですか。…いいえ、そうじゃありません。", en: "Is Mr. Tanaka a student? ...No, he isn't." },
                            { jp: "違います。", reading: "ちがいます。", en: "No, that's wrong." }
                        ]
                    },
                    {
                        pattern: "とても",
                        meanings: { en: "An adverb of degree meaning 'very', placed before the adjective it modifies — used in affirmative sentences.", bn: "\"অত্যন্ত/খুব\" অর্থবোধক মাত্রাবাচক ক্রিয়াবিশেষণ, যে বিশেষণকে বিশেষায়িত করে তার আগে বসে — শুধু ইতিবাচক বাক্যে ব্যবহৃত হয়।" },
                        connection: ["とても + 形容詞"],
                        examples: [
                            { jp: "ペキンはとても寒いです。", reading: "ペキンはとてもさむいです。", en: "Beijing is very cold." },
                            { jp: "これはとても有名な映画です。", reading: "これはとてもゆうめいなえいがです。", en: "This is a very famous movie." },
                            { jp: "日本の食べ物はとてもおいしいです。", reading: "にほんのたべものはとてもおいしいです。", en: "Japanese food is very delicious." }
                        ]
                    },
                    {
                        pattern: "S1か、S2か",
                        meanings: { en: "Ask the listener to choose between two alternatives.", bn: "শ্রোতাকে দুটি বিকল্পের মধ্যে একটি বেছে নিতে বলা।" },
                        connection: ["文1か、文2か"],
                        examples: [
                            { jp: "これは「9」ですか、「7」ですか。", en: "Is this a '9' or a '7'?" },
                            { jp: "コーヒーですか、紅茶ですか。", reading: "コーヒーですか、こうちゃですか。", en: "Coffee or black tea?" },
                            { jp: "今日ですか、明日ですか。", reading: "きょうですか、あしたですか。", en: "Today or tomorrow?" }
                        ]
                    },
                    {
                        pattern: "S1が、S2",
                        meanings: { en: "が connects two sentences to mean 'but' — a milder contrast than けど.", bn: "が দুটি বাক্যকে \"কিন্তু\" অর্থে যুক্ত করে — けど-এর চেয়ে মৃদু বৈপরীত্য।" },
                        connection: ["文1が、文2"],
                        examples: [
                            { jp: "日本の食べ物はおいしいですが、高いです。", reading: "にほんのたべものはおいしいですが、たかいです。", en: "Japanese food is good, but expensive." },
                            { jp: "すみませんが、塩を取ってください。", reading: "すみませんが、しおをとってください。", en: "Excuse me, but please pass the salt." },
                            { jp: "辛いですが、おいしいです。", reading: "からいですが、おいしいです。", en: "It's spicy, but tasty." }
                        ]
                    },
                    {
                        pattern: "Word(s)ですか（確認）",
                        meanings: { en: "Confirm a word or phrase by repeating it back with か.", bn: "কোনো শব্দ বা বাক্যাংশ か যোগ করে পুনরাবৃত্তি করে নিশ্চিত করা।" },
                        connection: ["確認したい言葉 + ですか"],
                        examples: [
                            { jp: "ユニューヤ・ストアはどこですか。…ユニューヤ・ストアですか。あのビルの中です。", en: "Where is Yunyu-ya Store? ...Yunyu-ya Store? It's in that building." },
                            { jp: "871の6813ですね。", en: "871-6813, right?" },
                            { jp: "京都駅ですか。分かりました。", reading: "きょうとえきですか。わかりました。", en: "Kyoto station? Got it." }
                        ]
                    },
                    {
                        pattern: "そうですね",
                        meanings: { en: "Express agreement or sympathy with what the listener just said — unlike そうですか, which reacts to new information.", bn: "শ্রোতা মাত্র যা বলল তার সাথে সহমত বা সহানুভূতি প্রকাশ করে — そうですか-এর বিপরীতে, যা নতুন তথ্যে প্রতিক্রিয়া জানায়।" },
                        connection: ["そうですね"],
                        examples: [
                            { jp: "寒くなりましたね。…そうですね。", reading: "さむくなりましたね。…そうですね。", en: "It's got cold, hasn't it? ...Yes, it has." },
                            { jp: "このラーメンはおいしいですね。…そうですね。", en: "This ramen is delicious, isn't it? ...Yes, it is." },
                            { jp: "今日は暑いですね。…そうですね。", reading: "きょうはあついですね。…そうですね。", en: "It's hot today, isn't it? ...Yes, it is." }
                        ]
                    },
                    {
                        pattern: "何（なん and なに）",
                        meanings: { en: "Both mean 'what' — use なん before だ/な/た/だ行 sounds or before a counter, and なに in most other cases.", bn: "দুটোরই অর্থ \"কী\" — だ/な/た/だ行 ধ্বনির আগে বা কাউন্টারের আগে なん ব্যবহার করুন, বাকি বেশিরভাগ ক্ষেত্রে なに।" },
                        connection: ["なん + です／の／と 等（た・だ・な行の前、助数詞の前）", "なに + を／が 等"],
                        examples: [
                            { jp: "それは何ですか。", reading: "それはなんですか。", en: "What is that?" },
                            { jp: "何を買いますか。", reading: "なにをかいますか。", en: "What will you buy?" },
                            { jp: "テレサちゃんは何歳ですか。", reading: "テレサちゃんはなんさいですか。", en: "How old is Teresa?" }
                        ]
                    },
                    {
                        pattern: "N(time)にV",
                        meanings: { en: "Mark a specific point in time with に for a momentary action — used when the time noun includes a number, but usually omitted for relative time words like 今日/明日.", bn: "একটি নির্দিষ্ট সময়বিন্দুকে に দিয়ে চিহ্নিত করে ক্ষণস্থায়ী কাজের জন্য — সময়ের বিশেষ্যে সংখ্যা থাকলে ব্যবহৃত হয়, কিন্তু 今日/明日-এর মতো আপেক্ষিক সময়বাচক শব্দে সাধারণত বাদ দেওয়া হয়।" },
                        connection: ["数字を含む時間 + に + 動詞", "きょう／あした 等（にをつけない）"],
                        examples: [
                            { jp: "六時半に起きます。", reading: "ろくじはんにおきます。", en: "I get up at six thirty." },
                            { jp: "七月二日に日本へ来ました。", reading: "しちがつふつかににほんへきました。", en: "I came to Japan on July 2nd." },
                            { jp: "きのう勉強しました。", reading: "きのうべんきょうしました。", en: "I studied yesterday." }
                        ]
                    }
                ]
            },
            {
                id: "getting-around-time-sequencing",
                title: "Getting Around Town & Time Sequencing",
                items: [
                    {
                        pattern: "今〜時〜分です",
                        meanings: { en: "State the current time using hour and minute counters.", bn: "ঘণ্টা ও মিনিটের কাউন্টার ব্যবহার করে বর্তমান সময় বলে।" },
                        connection: ["今 + 数字時 + 数字分 + です"],
                        examples: [
                            { jp: "今、何時ですか。…七時十分です。", reading: "いま、なんじですか。…しちじじゅっぷんです。", en: "What time is it now? ...It's seven ten." },
                            { jp: "ニューヨークは今、何時ですか。", reading: "ニューヨークはいま、なんじですか。", en: "What time is it now in New York?" },
                            { jp: "今、三時半です。", reading: "いま、さんじはんです。", en: "It's half past three now." }
                        ]
                    },
                    {
                        pattern: "V辞書形／ない形／い-adj／な-adjな／Nの＋とき、〜",
                        meanings: { en: "とき connects two clauses to say when the state/action of the main clause happens — the form before とき matches noun-modification rules.", bn: "とき দুটি বাক্যাংশকে যুক্ত করে বলে যে মূল বাক্যাংশের অবস্থা/কাজ কখন ঘটে — とき-এর আগের রূপ বিশেষ্য-পরিবর্তনের নিয়ম অনুসরণ করে।" },
                        connection: ["動詞（辞書形／ない形／た形）+ とき、〜", "い形容詞（〜い）+ とき、〜", "な形容詞 + な + とき、〜", "名詞 + の + とき、〜"],
                        examples: [
                            { jp: "図書館で本を借りるとき、カードが要ります。", reading: "としょかんでほんをかりるとき、カードがいります。", en: "When you borrow books from the library, you need a card." },
                            { jp: "暇なとき、うちへ遊びに来ませんか。", reading: "ひまなとき、うちへあそびにきませんか。", en: "Won't you come to my place when you are free?" },
                            { jp: "子供のとき、よく川で泳ぎました。", reading: "こどものとき、よくかわでおよぎました。", en: "I used to swim in a river when I was a child." }
                        ]
                    },
                    {
                        pattern: "Sね",
                        meanings: { en: "Add ね to the end of a sentence to show sympathy or seek the listener's agreement.", bn: "সহানুভূতি দেখাতে বা শ্রোতার সম্মতি চাইতে বাক্যের শেষে ね যোগ করা হয়।" },
                        connection: ["文 + ね"],
                        examples: [
                            { jp: "大変ですね。", reading: "たいへんですね。", en: "That must be hard." },
                            { jp: "いい天気ですね。", reading: "いいてんきですね。", en: "Nice weather, isn't it?" },
                            { jp: "このラーメンはおいしいですね。", en: "This ramen is delicious, isn't it?" }
                        ]
                    },
                    {
                        pattern: "V辞書形／た形＋と、〜",
                        meanings: { en: "と connects two sentences to show that S2 inevitably happens as a result of S1 — cannot be used with will/hope/invitation/request in S2.", bn: "と দুটি বাক্যকে যুক্ত করে দেখায় যে S1-এর ফলে S2 অনিবার্যভাবে ঘটে — S2-তে ইচ্ছা/আশা/আমন্ত্রণ/অনুরোধ ব্যবহার করা যায় না।" },
                        connection: ["動詞（辞書形）+ と、〜"],
                        examples: [
                            { jp: "このボタンを押すと、お釣りが出ます。", reading: "このボタンをおすと、おつりがでます。", en: "Press this button, and the change will come out." },
                            { jp: "右へ曲がると、郵便局があります。", reading: "みぎへまがると、ゆうびんきょくがあります。", en: "Turn to the right, and you will find the post office." },
                            { jp: "これを回すと、音が大きくなります。", reading: "これをまわすと、おとがおおきくなります。", en: "Turn this, and the volume will go up." }
                        ]
                    },
                    {
                        pattern: "Sよ",
                        meanings: { en: "Add よ to the end of a sentence to emphasize new information or assert your opinion.", bn: "নতুন তথ্যের ওপর জোর দিতে বা নিজের মতামত দৃঢ়ভাবে প্রকাশ করতে বাক্যের শেষে よ যোগ করা হয়।" },
                        connection: ["文 + よ"],
                        examples: [
                            { jp: "次の普通ですよ。", reading: "つぎのふつうですよ。", en: "The next local train is the one." },
                            { jp: "危ないですよ。", reading: "あぶないですよ。", en: "It's dangerous!" },
                            { jp: "無理なダイエットは体によくないですよ。", reading: "むりなダイエットはからだによくないですよ。", en: "Excessive dieting is bad for your health." }
                        ]
                    },
                    {
                        pattern: "N(place)をV(移動動詞)",
                        meanings: { en: "Use を to mark the place a person or thing passes through, with a verb of movement.", bn: "গতিবাচক ক্রিয়ার সাথে を ব্যবহার করে সেই স্থান চিহ্নিত করে যার মধ্য দিয়ে কেউ বা কিছু অতিক্রম করে।" },
                        connection: ["場所 + を + 歩きます／渡ります／散歩します 等"],
                        examples: [
                            { jp: "公園を散歩します。", reading: "こうえんをさんぽします。", en: "I take a walk in the park." },
                            { jp: "道を渡ります。", reading: "みちをわたります。", en: "I cross the road." },
                            { jp: "交差点を右へ曲がります。", reading: "こうさてんをみぎへまがります。", en: "I turn to the right at the intersection." }
                        ]
                    }
                ]
            },
            {
                id: "transportation-directions-movement",
                title: "Transportation, Directions & Movement",
                items: [
                    {
                        pattern: "どこへも〜ません",
                        meanings: { en: "Deny an entire category asked about by an interrogative + も, with a negative verb.", bn: "প্রশ্নবাচক শব্দ + も এবং নেতিবাচক ক্রিয়া দিয়ে সম্পূর্ণ একটি শ্রেণিকে অস্বীকার করে।" },
                        connection: ["interrogative + も + Vません"],
                        examples: [
                            { jp: "どこへも行きません。", reading: "どこへもいきません。", en: "I don't go anywhere." },
                            { jp: "何も食べません。", reading: "なにもたべません。", en: "I don't eat anything." },
                            { jp: "誰もいません。", reading: "だれもいません。", en: "Nobody is there." }
                        ]
                    },
                    {
                        pattern: "N(place)へVます-form／Nに行きます",
                        meanings: { en: "Express the purpose of going somewhere with に.", bn: "に দিয়ে কোথাও যাওয়ার উদ্দেশ্য প্রকাশ করে।" },
                        connection: ["場所へ + Vます形（語幹）／名詞 + に + 行きます／来ます／帰ります"],
                        examples: [
                            { jp: "神戸へ買い物に行きます。", reading: "こうべへかいものにいきます。", en: "I'm going to Kobe for shopping." },
                            { jp: "日本へ美術の勉強に来ました。", reading: "にほんへびじゅつのべんきょうにきました。", en: "I came to Japan to study art." },
                            { jp: "京都のお祭りに行きます。", reading: "きょうとのおまつりにいきます。", en: "I'll go to the festival in Kyoto." }
                        ]
                    },
                    {
                        pattern: "N(乗り物)で行きます",
                        meanings: { en: "Mark the means of transportation with で.", bn: "で দিয়ে যাতায়াতের মাধ্যম চিহ্নিত করে।" },
                        connection: ["乗り物 + で + 行きます／来ます／帰ります"],
                        examples: [
                            { jp: "電車で行きます。", reading: "でんしゃでいきます。", en: "I'll go by train." },
                            { jp: "タクシーで来ました。", reading: "タクシーできました。", en: "I came by taxi." },
                            { jp: "歩いて帰りました。", reading: "あるいてかえりました。", en: "I walked home." }
                        ]
                    },
                    {
                        pattern: "Nをします",
                        meanings: { en: "する with a noun object — used broadly for playing sports/games, holding gatherings, and doing tasks.", bn: "বিশেষ্য কর্মের সাথে する — খেলাধুলা, অনুষ্ঠান আয়োজন ও কাজ করার ক্ষেত্রে ব্যাপকভাবে ব্যবহৃত হয়।" },
                        connection: ["名詞 + を + します"],
                        examples: [
                            { jp: "サッカーをします。", en: "I play soccer." },
                            { jp: "パーティーをします。", en: "I give a party." },
                            { jp: "宿題をします。", reading: "しゅくだいをします。", en: "I do my homework." }
                        ]
                    },
                    {
                        pattern: "N(人・動物)とV",
                        meanings: { en: "Mark a companion (person or animal) with と when doing something together.", bn: "একসাথে কিছু করার সময় সঙ্গী (মানুষ বা প্রাণী) কে と দিয়ে চিহ্নিত করা।" },
                        connection: ["人／動物 + と + 動詞", "一人で（一人の場合、とは使わない）"],
                        examples: [
                            { jp: "家族と日本へ来ました。", reading: "かぞくとにほんへきました。", en: "I came to Japan with my family." },
                            { jp: "一人で東京へ行きます。", reading: "ひとりでとうきょうへいきます。", en: "I'll go to Tokyo alone." },
                            { jp: "友達と映画を見ました。", reading: "ともだちとえいがをみました。", en: "I watched a movie with a friend." }
                        ]
                    },
                    {
                        pattern: "お〜",
                        meanings: { en: "The prefix お is added to words to show respect toward the listener, or simply to speak politely.", bn: "শ্রোতার প্রতি সম্মান দেখাতে বা নম্রভাবে কথা বলতে শব্দের আগে お উপসর্গ যোগ করা হয়।" },
                        connection: ["お + 名詞"],
                        examples: [
                            { jp: "お国はどちらですか。", reading: "おくにはどちらですか。", en: "Where are you from?" },
                            { jp: "お酒を飲みます。", reading: "おさけをのみます。", en: "I drink alcohol." },
                            { jp: "お花見をしましょう。", reading: "おはなみをしましょう。", en: "Let's go cherry-blossom viewing." }
                        ]
                    }
                ]
            },
            {
                id: "everyday-actions-howto",
                title: "Everyday Actions & How-To",
                items: [
                    {
                        pattern: "N(道具・手段)でV",
                        meanings: { en: "Mark the tool or means used for an action with で.", bn: "で দিয়ে একটি কাজে ব্যবহৃত যন্ত্র বা উপায় চিহ্নিত করে।" },
                        connection: ["道具／手段 + で + 動詞"],
                        examples: [
                            { jp: "はしで食べます。", en: "I eat with chopsticks." },
                            { jp: "日本語でレポートを書きます。", reading: "にほんごでレポートをかきます。", en: "I write my report in Japanese." },
                            { jp: "ボールペンで書いてください。", en: "Please write with a ballpoint pen." }
                        ]
                    },
                    {
                        pattern: "N1はN2が adjective",
                        meanings: { en: "Describe an attribute of N1 — N1 is the topic (は), N2 is the subject of the description (が).", bn: "N1-এর একটি বৈশিষ্ট্য বর্ণনা করে — N1 বাক্যের বিষয় (は), N2 বর্ণনার কর্তা (が)।" },
                        connection: ["N1（話題）+ は + N2（属性）+ が + 形容詞"],
                        examples: [
                            { jp: "大阪は食べ物がおいしいです。", reading: "おおさかはたべものがおいしいです。", en: "Food is tasty in Osaka." },
                            { jp: "マリアさんは髪が長いです。", reading: "マリアさんはかみがながいです。", en: "Maria has long hair." },
                            { jp: "ドイツのフランケンはワインが有名です。", reading: "ドイツのフランケンはワインがゆうめいです。", en: "Franken in Germany produces famous wine." }
                        ]
                    },
                    {
                        pattern: "「言葉」は〜語で何ですか",
                        meanings: { en: "Ask how to say a word or sentence in another language.", bn: "একটি শব্দ বা বাক্য অন্য ভাষায় কীভাবে বলতে হয় তা জিজ্ঞাসা করা।" },
                        connection: ["「言葉」は + 言語 + で + 何ですか"],
                        examples: [
                            { jp: "「ありがとう」は英語で何ですか。…「Thank you」です。", reading: "「ありがとう」はえいごでなんですか。…「Thank you」です。", en: "What's 'arigatou' in English? ...It's 'Thank you.'" },
                            { jp: "これは日本語で何ですか。", reading: "これはにほんごでなんですか。", en: "What is this called in Japanese?" },
                            { jp: "「さようなら」は中国語で何ですか。", reading: "「さようなら」はちゅうごくごでなんですか。", en: "What is 'sayonara' in Chinese?" }
                        ]
                    },
                    {
                        pattern: "どうやって",
                        meanings: { en: "Ask the way or method of doing something.", bn: "কিছু করার পদ্ধতি বা উপায় জিজ্ঞাসা করা।" },
                        connection: ["どうやって + 動詞"],
                        examples: [
                            { jp: "大学までどうやって行きますか。…京都駅から16番のバスに乗って、大学前で降ります。", reading: "だいがくまでどうやっていきますか。…きょうとえきからじゅうろくばんのバスにのって、だいがくまえでおります。", en: "How do you go to your university? ...I take a No.16 bus from Kyoto Station and get off at Daigaku-mae." },
                            { jp: "どうやって使いますか。", reading: "どうやってつかいますか。", en: "How do you use it?" },
                            { jp: "漢字はどうやって覚えますか。", reading: "かんじはどうやっておぼえますか。", en: "How do you memorize kanji?" }
                        ]
                    },
                    {
                        pattern: "もうVました",
                        meanings: { en: "State that an action has already been completed, using もう with the past tense.", bn: "অতীত কালের সাথে もう ব্যবহার করে বলা যে একটি কাজ ইতিমধ্যে সম্পন্ন হয়ে গেছে।" },
                        connection: ["もう + Vました"],
                        examples: [
                            { jp: "もう荷物を送りましたか。…はい、もう送りました。", reading: "もうにもつをおくりましたか。…はい、もうおくりました。", en: "Have you sent the parcel yet? ...Yes, I already sent it." },
                            { jp: "もう昼ご飯を食べましたか。…いいえ、まだです。", reading: "もうひるごはんをたべましたか。…いいえ、まだです。", en: "Have you had lunch yet? ...No, not yet." },
                            { jp: "切符はもう買いましたか。", reading: "きっぷはもうかいましたか。", en: "Have you bought the ticket yet?" }
                        ]
                    },
                    {
                        pattern: "どのN",
                        meanings: { en: "Ask the listener to identify one among more than two concrete options.", bn: "দুইয়ের বেশি সুনির্দিষ্ট বিকল্পের মধ্যে একটি শনাক্ত করতে শ্রোতাকে জিজ্ঞাসা করা।" },
                        connection: ["どの + 名詞"],
                        examples: [
                            { jp: "サントスさんはどの人ですか。…あの背が高くて、髪が黒い人です。", reading: "サントスさんはどのひとですか。…あのせがたかくて、かみがくろいひとです。", en: "Which one is Mr. Santos? ...That tall man with black hair." },
                            { jp: "どの傘があなたのですか。", reading: "どのかさがあなたのですか。", en: "Which umbrella is yours?" },
                            { jp: "どの店が安いですか。", reading: "どのみせがやすいですか。", en: "Which shop is cheap?" }
                        ]
                    }
                ]
            },
            {
                id: "describing-people-things",
                title: "Describing People & Things",
                items: [
                    {
                        pattern: "な-adjなN／い-adj(〜い)N",
                        meanings: { en: "Place an adjective directly before a noun to modify it.", bn: "একটি বিশেষণকে সরাসরি বিশেষ্যের আগে বসিয়ে সেটিকে বিশেষায়িত করা।" },
                        connection: ["な形容詞 + な + 名詞", "い形容詞（〜い）+ 名詞"],
                        examples: [
                            { jp: "親切な先生です。", reading: "しんせつなせんせいです。", en: "He is a kind teacher." },
                            { jp: "富士山は高い山です。", reading: "ふじさんはたかいやまです。", en: "Mt. Fuji is a high mountain." },
                            { jp: "きれいな部屋に住んでいます。", reading: "きれいなへやにすんでいます。", en: "I live in a clean room." }
                        ]
                    },
                    {
                        pattern: "文＋N（名詞修飾）",
                        meanings: { en: "A whole sentence can modify a noun, with its predicate in the plain form (な for な-adjectives, の for nouns) — placed directly before the noun.", bn: "একটি সম্পূর্ণ বাক্য একটি বিশেষ্যকে বিশেষায়িত করতে পারে, যার predicate সাধারণ রূপে থাকে (な-বিশেষণের জন্য な, বিশেষ্যের জন্য の) — বিশেষ্যের ঠিক আগে বসে।" },
                        connection: ["動詞（普通形）+ 名詞", "い形容詞（普通形）+ 名詞", "な形容詞 + な + 名詞", "名詞1 + の + 名詞2"],
                        examples: [
                            { jp: "これはミラーさんが作ったケーキです。", reading: "これはミラーさんがつくったケーキです。", en: "This is the cake which Mr. Miller baked." },
                            { jp: "わたしはカリナさんがかいた絵が好きです。", reading: "わたしはカリナさんがかいたえがすきです。", en: "I like the picture that Ms. Karina drew." },
                            { jp: "きれいで、静かなうちに住んでいます。", reading: "きれいで、しずかなうちにすんでいます。", en: "I live in a house that is clean and quiet." }
                        ]
                    },
                    {
                        pattern: "Nはどうですか",
                        meanings: { en: "Ask for an impression or opinion about something the listener has experienced.", bn: "শ্রোতা যা অভিজ্ঞতা লাভ করেছে তা সম্পর্কে তার মতামত বা অনুভূতি জিজ্ঞাসা করা।" },
                        connection: ["名詞 + は + どうですか"],
                        examples: [
                            { jp: "日本の生活はどうですか。…楽しいです。", reading: "にほんのせいかつはどうですか。…たのしいです。", en: "How is life in Japan? ...It's enjoyable." },
                            { jp: "この映画はどうでしたか。", reading: "このえいがはどうでしたか。", en: "How was this movie?" },
                            { jp: "新しい仕事はどうですか。", reading: "あたらしいしごとはどうですか。", en: "How is your new job?" }
                        ]
                    },
                    {
                        pattern: "N(従属節の主語)が",
                        meanings: { en: "In a clause that modifies a noun, the subject of that clause is marked with が, not は.", bn: "বিশেষ্য-বিশেষায়ণকারী বাক্যাংশে সেই বাক্যাংশের কর্তা は নয়, が দিয়ে চিহ্নিত করা হয়।" },
                        connection: ["N1（従属節の主語）+ が + 動詞／形容詞 + N2"],
                        examples: [
                            { jp: "これはミラーさんが住んでいたうちです。", reading: "これはミラーさんがすんでいたうちです。", en: "This is the house where Mr. Miller lived." },
                            { jp: "あなたは彼が生まれた所を知っていますか。", reading: "あなたはかれがうまれたところをしっていますか。", en: "Do you know the place where he was born?" },
                            { jp: "わたしは友達と映画を見る約束があります。", reading: "わたしはともだちとえいがをみるやくそくがあります。", en: "I have an arrangement to see a movie with a friend of mine." }
                        ]
                    },
                    {
                        pattern: "N1はどんなN2ですか",
                        meanings: { en: "Ask the listener to describe or characterize N1.", bn: "শ্রোতাকে N1-এর বৈশিষ্ট্য বা বর্ণনা দিতে বলা।" },
                        connection: ["N1 + は + どんな + N2 + ですか"],
                        examples: [
                            { jp: "奈良はどんな町ですか。…古い町です。", reading: "ならはどんなまちですか。…ふるいまちです。", en: "What kind of town is Nara? ...It's an old town." },
                            { jp: "どんな映画が好きですか。", reading: "どんなえいががすきですか。", en: "What kind of movies do you like?" },
                            { jp: "田中さんはどんな人ですか。", reading: "たなかさんはどんなひとですか。", en: "What kind of person is Mr. Tanaka?" }
                        ]
                    }
                ]
            },
            {
                id: "weather-seasons-reasons",
                title: "Weather, Seasons & Reasons",
                items: [
                    {
                        pattern: "よく／だいたい／たくさん／少し／全然",
                        meanings: { en: "Adverbs of degree/amount placed before the verb they modify.", bn: "মাত্রা/পরিমাণবাচক ক্রিয়াবিশেষণ, যে ক্রিয়াকে বিশেষায়িত করে তার আগে বসে।" },
                        connection: ["よく／だいたい／たくさん／少し + Vます（肯定）", "あまり／全然 + Vません（否定）"],
                        examples: [
                            { jp: "英語がよく分かります。", reading: "えいごがよくわかります。", en: "I understand English very well." },
                            { jp: "お金があまりありません。", reading: "おかねがあまりありません。", en: "I don't have much money." },
                            { jp: "英語が全然分かりません。", reading: "えいごがぜんぜんわかりません。", en: "I don't understand English at all." }
                        ]
                    },
                    {
                        pattern: "S1から、S2",
                        meanings: { en: "Connect two sentences to show a causal relationship — S1 is the reason for S2.", bn: "কার্যকারণ সম্পর্ক দেখাতে দুটি বাক্যকে যুক্ত করা — S1 হলো S2-এর কারণ।" },
                        connection: ["文1（理由）から、文2"],
                        examples: [
                            { jp: "時間がありませんから、新聞を読みません。", reading: "じかんがありませんから、しんぶんをよみません。", en: "Because I don't have time, I don't read the newspaper." },
                            { jp: "今日は子供の誕生日ですから、早く帰ります。", reading: "きょうはこどものたんじょうびですから、はやくかえります。", en: "Today is my child's birthday, so I'll go home early." },
                            { jp: "暇ですから、手伝います。", reading: "ひまですから、てつだいます。", en: "Since I'm free, I'll help." }
                        ]
                    },
                    {
                        pattern: "どうして",
                        meanings: { en: "Ask the reason for something — the answer usually ends with から.", bn: "কোনো কিছুর কারণ জিজ্ঞাসা করা — উত্তর সাধারণত から দিয়ে শেষ হয়।" },
                        connection: ["どうして + 文か。"],
                        examples: [
                            { jp: "どうして朝新聞を読みませんか。…時間がありませんから。", reading: "どうしてあさしんぶんをよみませんか。…じかんがありませんから。", en: "Why don't you read the newspaper in the morning? ...Because I don't have time." },
                            { jp: "どうして休みましたか。", reading: "どうしてやすみましたか。", en: "Why did you take the day off?" },
                            { jp: "どうしてですか。", en: "Why is that?" }
                        ]
                    }
                ]
            },
            {
                id: "food-drink-frequency",
                title: "Food, Drink & Frequency",
                items: [
                    {
                        pattern: "Quantifier(期間)に〜回V",
                        meanings: { en: "Say how often you do something, per a given period.", bn: "নির্দিষ্ট সময়ের মধ্যে কতবার কিছু করা হয় তা বলা।" },
                        connection: ["期間 + に + 数量 + 回 + 動詞"],
                        examples: [
                            { jp: "一か月に二回映画を見ます。", reading: "いっかげつににかいえいがをみます。", en: "I go to see movies twice a month." },
                            { jp: "一週間に三回泳ぎます。", reading: "いっしゅうかんにさんかいおよぎます。", en: "I swim three times a week." },
                            { jp: "一年に一回国へ帰ります。", reading: "いちねんにいっかいくにへかえります。", en: "I go back to my country once a year." }
                        ]
                    },
                    {
                        pattern: "Quantifierだけ／Nだけ",
                        meanings: { en: "Add だけ after a quantifier or noun to mean 'only'.", bn: "পরিমাণবাচক শব্দ বা বিশেষ্যের পর だけ যোগ করলে \"শুধুমাত্র\" অর্থ প্রকাশ পায়।" },
                        connection: ["数量／名詞 + だけ"],
                        examples: [
                            { jp: "パワー電気に外国人の社員が一人だけいます。", reading: "パワーでんきにがいこくじんのしゃいんがひとりだけいます。", en: "There is only one foreign employee at Power Electric." },
                            { jp: "休みは日曜日だけです。", reading: "やすみはにちようびだけです。", en: "I only have Sundays off." },
                            { jp: "少しだけ食べました。", reading: "すこしだけたべました。", en: "I ate just a little." }
                        ]
                    }
                ]
            },
            {
                id: "gifts-presents-wants",
                title: "Gifts, Presents & Wants",
                items: [
                    {
                        pattern: "Nが欲しいです",
                        meanings: { en: "Express the speaker's desire to have something.", bn: "বক্তার কিছু পাওয়ার ইচ্ছা প্রকাশ করে।" },
                        connection: ["名詞 + が + 欲しいです"],
                        examples: [
                            { jp: "わたしは友達が欲しいです。", reading: "わたしはともだちがほしいです。", en: "I want a friend." },
                            { jp: "今、何がいちばん欲しいですか。…車が欲しいです。", reading: "いま、なにがいちばんほしいですか。…くるまがほしいです。", en: "What do you want most now? ...I want a car." },
                            { jp: "子供が欲しいですか。…いいえ、欲しくないです。", reading: "こどもがほしいですか。…いいえ、ほしくないです。", en: "Do you want a child? ...No, I don't." }
                        ]
                    },
                    {
                        pattern: "どこか／何か",
                        meanings: { en: "Indefinite pronouns meaning 'somewhere/anywhere' and 'something/anything'.", bn: "\"কোথাও\" এবং \"কিছু একটা\" অর্থবোধক অনির্দিষ্ট সর্বনাম।" },
                        connection: ["どこか[へ] + 動詞", "何か[を] + 動詞"],
                        examples: [
                            { jp: "冬休みはどこかへ行きましたか。…はい、行きました。", reading: "ふゆやすみはどこかへいきましたか。…はい、いきました。", en: "Did you go anywhere in the winter vacation? ...Yes, I did." },
                            { jp: "のどが渇きましたから、何か飲みたいです。", reading: "のどがかわきましたから、なにかのみたいです。", en: "I'm thirsty. I want to drink something." },
                            { jp: "何か食べたいですか。", reading: "なにかたべたいですか。", en: "Do you want to eat something?" }
                        ]
                    }
                ]
            },
            {
                id: "giving-lending-events",
                title: "Giving, Lending & Natural Events",
                items: [
                    {
                        pattern: "動詞のグループ（I・II・III）",
                        meanings: { en: "Japanese verbs fall into three conjugation groups based on their ます-form ending, which determines how to build the て-form, ない-form, dictionary form and た-form.", bn: "জাপানি ক্রিয়াপদ তাদের ます-রূপের শেষ ধ্বনির ভিত্তিতে তিনটি রূপান্তর গ্রুপে বিভক্ত, যা て-রূপ, ない-রূপ, অভিধান রূপ ও た-রূপ কীভাবে তৈরি হবে তা নির্ধারণ করে।" },
                        connection: ["グループI：ます形の最後がい段（例：書きます）", "グループII：ます形の最後がえ段が多い（例：食べます）", "グループIII：します・来ます"],
                        examples: [
                            { jp: "「書きます」はグループIです。", reading: "「かきます」はグループいちです。", en: "'Kakimasu' is a Group I verb." },
                            { jp: "「食べます」はグループIIです。", reading: "「たべます」はグループにです。", en: "'Tabemasu' is a Group II verb." },
                            { jp: "「します」と「来ます」はグループIIIです。", reading: "「します」と「きます」はグループさんです。", en: "'Shimasu' and 'kimasu' are Group III verbs." }
                        ]
                    },
                    {
                        pattern: "Vます-formましょうか",
                        meanings: { en: "Offer to do something for the listener.", bn: "শ্রোতার জন্য কিছু করার প্রস্তাব দেওয়া।" },
                        connection: ["動詞（ます形語幹）+ ましょうか"],
                        examples: [
                            { jp: "荷物を持ちましょうか。…すみません。お願いします。", reading: "にもつをもちましょうか。…すみません。おねがいします。", en: "Shall I carry your luggage? ...Thank you. Please." },
                            { jp: "窓を開けましょうか。", reading: "まどをあけましょうか。", en: "Shall I open the window?" },
                            { jp: "タクシーを呼びましょうか。", reading: "タクシーをよびましょうか。", en: "Shall I call a taxi?" }
                        ]
                    },
                    {
                        pattern: "Nが V（自然現象・状態）",
                        meanings: { en: "When describing a natural phenomenon or a state/scene as it is, the subject is marked with が.", bn: "প্রাকৃতিক ঘটনা বা কোনো অবস্থা/দৃশ্য যেমন আছে তেমন বর্ণনা করার সময় কর্তা が দিয়ে চিহ্নিত করা হয়।" },
                        connection: ["名詞（自然現象・状態）+ が + 動詞／形容詞"],
                        examples: [
                            { jp: "雨が降っています。", reading: "あめがふっています。", en: "It is raining." },
                            { jp: "音が小さいです。", reading: "おとがちいさいです。", en: "The volume is low." },
                            { jp: "このボタンを押すと、切符が出ます。", reading: "このボタンをおすと、きっぷがでます。", en: "Press this button, and a ticket will come out." }
                        ]
                    }
                ]
            },
            {
                id: "body-health-resultant-states",
                title: "Body, Health & Resultant States",
                items: [
                    {
                        pattern: "Vて-formいます（結果の状態）",
                        meanings: { en: "In addition to 'be doing', て-formいます also describes a continuing state resulting from a past action — knowing, living, being married.", bn: "\"করছি\" বোঝানো ছাড়াও, て-form + います একটি অতীত কাজের ফলে সৃষ্ট চলমান অবস্থাও বর্ণনা করে — যেমন জানা, বসবাস করা, বিবাহিত হওয়া।" },
                        connection: ["動詞（て形）+ います"],
                        examples: [
                            { jp: "わたしは結婚しています。", reading: "わたしはけっこんしています。", en: "I'm married." },
                            { jp: "わたしは田中さんを知っています。", reading: "わたしはたなかさんをしっています。", en: "I know Mr. Tanaka." },
                            { jp: "大阪に住んでいます。", reading: "おおさかにすんでいます。", en: "I live in Osaka." }
                        ]
                    },
                    {
                        pattern: "知りません",
                        meanings: { en: "The negative of 知っています is 知りません, not 知っていません.", bn: "知っています-এর নেতিবাচক রূপ 知りません, 知っていません নয়।" },
                        connection: ["知りません（「知っていません」は使わない）"],
                        examples: [
                            { jp: "市役所の電話番号を知っていますか。…いいえ、知りません。", reading: "しやくしょのでんわばんごうをしっていますか。…いいえ、しりません。", en: "Do you know the telephone number of the city hall? ...No, I don't." },
                            { jp: "あの人を知りません。", reading: "あのひとをしりません。", en: "I don't know that person." },
                            { jp: "すみません、知りません。", reading: "すみません、しりません。", en: "Sorry, I don't know." }
                        ]
                    }
                ]
            },
            {
                id: "errands-verbs-connecting",
                title: "Errands, More Verbs & Connecting Ideas",
                items: [
                    {
                        pattern: "Vて-form、[Vて-form]、〜",
                        meanings: { en: "Join verb sentences describing actions in the order they happen, using the て-form.", bn: "て-form ব্যবহার করে ঘটনাক্রম অনুযায়ী কাজ বর্ণনাকারী ক্রিয়া-বাক্যগুলোকে যুক্ত করা।" },
                        connection: ["動詞（て形）、動詞（て形）、〜"],
                        examples: [
                            { jp: "朝ジョギングをして、シャワーを浴びて、会社へ行きます。", reading: "あさジョギングをして、シャワーをあびて、かいしゃへいきます。", en: "In the morning, I jog, take a shower and go to the office." },
                            { jp: "神戸へ行って、映画を見て、お茶を飲みました。", reading: "こうべへいって、えいがをみて、おちゃをのみました。", en: "I went to Kobe, saw a movie and drank tea." },
                            { jp: "手を洗って、ご飯を食べます。", reading: "てをあらって、ごはんをたべます。", en: "I wash my hands and eat a meal." }
                        ]
                    },
                    {
                        pattern: "い-adj(〜い)→〜くて、〜／N・な-adj[な]で、〜",
                        meanings: { en: "Join a descriptive sentence to another sentence — drop い and add くて for i-adjectives, or change です to で for nouns/na-adjectives.", bn: "একটি বর্ণনামূলক বাক্যকে অন্য বাক্যের সাথে যুক্ত করা — i-বিশেষণের ক্ষেত্রে い বাদ দিয়ে くて যোগ করুন, বা বিশেষ্য/na-বিশেষণের ক্ষেত্রে です-কে で করুন।" },
                        connection: ["い形容詞（語幹）+ くて、〜", "名詞／な形容詞 + で、〜"],
                        examples: [
                            { jp: "ミラーさんは若くて、元気です。", reading: "ミラーさんはわかくて、げんきです。", en: "Mr. Miller is young and lively." },
                            { jp: "カリナさんはインドネシア人で、京都大学の留学生です。", reading: "カリナさんはインドネシアじんで、きょうとだいがくのりゅうがくせいです。", en: "Ms. Karina is Indonesian and a student of Kyoto University." },
                            { jp: "奈良は静かで、きれいな町です。", reading: "ならはしずかで、きれいなまちです。", en: "Nara is a quiet and beautiful city." }
                        ]
                    },
                    {
                        pattern: "V1て-formから、V2",
                        meanings: { en: "State that V2 happens after V1 is completed.", bn: "V1 সম্পন্ন হওয়ার পর V2 ঘটে তা বলা।" },
                        connection: ["動詞1（て形）+ から、動詞2"],
                        examples: [
                            { jp: "国へ帰ってから、父の会社で働きます。", reading: "くにへかえってから、ちちのかいしゃではたらきます。", en: "I will work for my father's company after going back to my country." },
                            { jp: "コンサートが終わってから、レストランで食事しました。", reading: "コンサートがおわってから、レストランでしょくじしました。", en: "We ate at a restaurant after the concert was over." },
                            { jp: "シャワーを浴びてから、寝ます。", reading: "シャワーをあびてから、ねます。", en: "I sleep after taking a shower." }
                        ]
                    }
                ]
            },
            {
                id: "position-adverbs-ability-emphasis",
                title: "Position, Adverbs, Ability & Emphasis",
                items: [
                    {
                        pattern: "N／Vdictionary formこと＋が＋できます",
                        meanings: { en: "Express ability or possibility, with a noun or a nominalized verb phrase.", bn: "একটি বিশেষ্য বা বিশেষ্যীভূত ক্রিয়া-বাক্যাংশ দিয়ে সামর্থ্য বা সম্ভাবনা প্রকাশ করা।" },
                        connection: ["名詞 + が + できます", "動詞（辞書形）+ こと + が + できます"],
                        examples: [
                            { jp: "ミラーさんは日本語ができます。", reading: "ミラーさんはにほんごができます。", en: "Mr. Miller can speak Japanese." },
                            { jp: "ミラーさんは漢字を読むことができます。", reading: "ミラーさんはかんじをよむことができます。", en: "Mr. Miller can read Kanji." },
                            { jp: "カードで払うことができます。", reading: "カードではらうことができます。", en: "You can pay by credit card." }
                        ]
                    },
                    {
                        pattern: "わたしの趣味は{N／Vdictionary formこと}です",
                        meanings: { en: "State a hobby, optionally describing it more concretely with a nominalized verb phrase.", bn: "একটি শখ বলা, চাইলে একটি বিশেষ্যীভূত ক্রিয়া-বাক্যাংশ দিয়ে আরও সুনির্দিষ্টভাবে বর্ণনা করা যায়।" },
                        connection: ["わたしの趣味は + 名詞 + です", "わたしの趣味は + 動詞（辞書形）+ こと + です"],
                        examples: [
                            { jp: "わたしの趣味は音楽です。", reading: "わたしのしゅみはおんがくです。", en: "My hobby is music." },
                            { jp: "わたしの趣味は音楽を聞くことです。", reading: "わたしのしゅみはおんがくをきくことです。", en: "My hobby is listening to music." },
                            { jp: "わたしの趣味は写真を撮ることです。", reading: "わたしのしゅみはしゃしんをとることです。", en: "My hobby is taking photographs." }
                        ]
                    },
                    {
                        pattern: "V1dictionary形／Nの／Quantifier(期間)＋まえに、V2",
                        meanings: { en: "State that V2 happens before V1 — the first verb stays in dictionary form regardless of tense.", bn: "V1-এর আগে V2 ঘটে তা বলা — কালনির্বিশেষে প্রথম ক্রিয়াটি অভিধান রূপেই থাকে।" },
                        connection: ["動詞（辞書形）+ まえに、〜", "名詞 + の + まえに、〜", "期間 + まえに、〜"],
                        examples: [
                            { jp: "日本へ来るまえに、日本語を勉強しました。", reading: "にほんへくるまえに、にほんごをべんきょうしました。", en: "I studied Japanese before I came to Japan." },
                            { jp: "食事のまえに、手を洗います。", reading: "しょくじのまえに、てをあらいます。", en: "I wash my hands before eating." },
                            { jp: "田中さんは一時間まえに、出かけました。", reading: "たなかさんはいちじかんまえに、でかけました。", en: "Mr. Tanaka left an hour ago." }
                        ]
                    },
                    {
                        pattern: "なかなか／ぜひ",
                        meanings: { en: "なかなか with a negative means 'not easily'; ぜひ emphasizes a hope or request.", bn: "なかなか নেতিবাচকের সাথে \"সহজে নয়\" বোঝায়; ぜひ একটি আশা বা অনুরোধের ওপর জোর দেয়।" },
                        connection: ["なかなか + 否定形", "ぜひ + Vたいです／Vてください"],
                        examples: [
                            { jp: "日本ではなかなか馬を見ることができません。", reading: "にほんではなかなかうまをみることができません。", en: "In Japan we can rarely see horses." },
                            { jp: "ぜひ北海道へ行きたいです。", reading: "ぜひほっかいどうへいきたいです。", en: "I want to go to Hokkaido very much." },
                            { jp: "ぜひ遊びに来てください。", reading: "ぜひあそびにきてください。", en: "Please do come to my place." }
                        ]
                    }
                ]
            },
            {
                id: "travel-life-events-experience",
                title: "Travel, Life Events & Experience",
                items: [
                    {
                        pattern: "Vた-formことがあります",
                        meanings: { en: "Describe an experience you have had, using the nominalized た-form + こと.", bn: "বিশেষ্যীভূত た-form + こと ব্যবহার করে নিজের অভিজ্ঞতা বর্ণনা করা।" },
                        connection: ["動詞（た形）+ こと + が + あります"],
                        examples: [
                            { jp: "馬に乗ったことがあります。", reading: "うまにのったことがあります。", en: "I have ridden a horse." },
                            { jp: "すしを食べたことがありません。", reading: "すしをたべたことがありません。", en: "I have never eaten sushi." },
                            { jp: "北海道へ行ったことがありますか。", reading: "ほっかいどうへいったことがありますか。", en: "Have you been to Hokkaido?" }
                        ]
                    },
                    {
                        pattern: "Vた-formり、Vた-formりします",
                        meanings: { en: "List a few representative actions among others, without implying a time order between them.", bn: "সময়ক্রম না বুঝিয়ে অন্যান্যের মধ্যে কয়েকটি প্রতিনিধিত্বমূলক কাজের তালিকা দেওয়া।" },
                        connection: ["動詞1（た形）+ り、動詞2（た形）+ り + します"],
                        examples: [
                            { jp: "日曜日はテニスをしたり、映画を見たりします。", reading: "にちようびはテニスをしたり、えいがをみたりします。", en: "On Sundays I play tennis, see a movie and so on." },
                            { jp: "休みの日は本を読んだり、音楽を聞いたりします。", reading: "やすみのひはほんをよんだり、おんがくをきいたりします。", en: "On days off I read books, listen to music and so on." },
                            { jp: "京都のお寺や神社を見たり、買い物をしたりしました。", reading: "きょうとのおてらやじんじゃをみたり、かいものをしたりしました。", en: "I visited temples and shrines in Kyoto, did some shopping, and so on." }
                        ]
                    },
                    {
                        pattern: "い-adj→〜く／な-adj[な]→に／Nに＋なります",
                        meanings: { en: "Express a change of state — 'become'.", bn: "অবস্থার পরিবর্তন প্রকাশ করে — \"হয়ে যাওয়া\"।" },
                        connection: ["い形容詞（語幹）+ く + なります", "な形容詞／名詞 + に + なります"],
                        examples: [
                            { jp: "寒くなりました。", reading: "さむくなりました。", en: "It has gotten cold." },
                            { jp: "漢字が読めるようになりました。", reading: "かんじがよめるようになりました。", en: "I've come to be able to read Kanji." },
                            { jp: "元気になりました。", reading: "げんきになりました。", en: "I've gotten better." }
                        ]
                    }
                ]
            },
            {
                id: "opinions-society-politeness",
                title: "Opinions, Society & Politeness",
                items: [
                    {
                        pattern: "丁寧体／普通体",
                        meanings: { en: "Japanese has two speech styles: polite (です／ます) and plain (だ／辞書形). Polite style suits most conversation; plain style suits close friends, family and writing.", bn: "জাপানি ভাষায় দুটি কথন-শৈলী আছে: নম্র (です／ます) এবং সাধারণ (だ／辞書形)। নম্র শৈলী বেশিরভাগ কথোপকথনের জন্য উপযুক্ত; সাধারণ শৈলী ঘনিষ্ঠ বন্ধু, পরিবার ও লেখার জন্য উপযুক্ত।" },
                        connection: ["丁寧体：あした東京へ行きます。", "普通体：あした東京へ行く。"],
                        examples: [
                            { jp: "毎日忙しいです。／毎日忙しい。", reading: "まいにちいそがしいです。／まいにちいそがしい。", en: "I am busy every day. (polite / plain)" },
                            { jp: "相撲が好きです。／相撲が好きだ。", reading: "すもうがすきです。／すもうがすきだ。", en: "I like sumo. (polite / plain)" },
                            { jp: "ドイツへ行ったことがありません。／ドイツへ行ったことがない。", reading: "ドイツへいったことがありません。／ドイツへいったことがない。", en: "I have never been to Germany. (polite / plain)" }
                        ]
                    },
                    {
                        pattern: "普通体の会話",
                        meanings: { en: "In plain-style conversation, the question particle か and many other particles are often dropped, and です becomes だ (often also dropped).", bn: "সাধারণ শৈলীর কথোপকথনে প্রশ্নবাচক অব্যয় か এবং আরও অনেক অব্যয় প্রায়ই বাদ পড়ে, এবং です হয়ে যায় だ (যা প্রায়ই বাদও দেওয়া হয়)।" },
                        connection: ["Vる？（かを省略、上昇イントネーション）", "N／な形＋だ／だよ／よ（女性はだを省略しがち）"],
                        examples: [
                            { jp: "コーヒーを飲む？…うん、飲む。", reading: "コーヒーをのむ？…うん、のむ。", en: "Do you want a coffee? ...Yes, I do." },
                            { jp: "今晩暇？…うん、暇。／ううん、暇じゃない。", reading: "こんばんひま？…うん、ひま。／ううん、ひまじゃない。", en: "Are you free tonight? ...Yes, I am. / No, I'm not." },
                            { jp: "辞書、持ってる？…うん、持ってる。", reading: "じしょ、もってる？…うん、もってる。", en: "Do you have a dictionary? ...Yes, I do." }
                        ]
                    }
                ]
            },
            {
                id: "family-honorifics-reported-speech",
                title: "Family Honorifics & Reported Speech",
                items: [
                    {
                        pattern: "plain formとおもいます",
                        meanings: { en: "State a conjecture or opinion, marking the content with と before おもいます.", bn: "おもいます-এর আগে と দিয়ে বিষয়বস্তু চিহ্নিত করে অনুমান বা মতামত প্রকাশ করা।" },
                        connection: ["普通形 + と + 思います"],
                        examples: [
                            { jp: "あした雨が降ると思います。", reading: "あしたあめがふるとおもいます。", en: "I think it will rain tomorrow." },
                            { jp: "日本は物価が高いと思います。", reading: "にほんはぶっかがたかいとおもいます。", en: "I think that prices are high in Japan." },
                            { jp: "ミラーさんはこのニュースを知っていますか。…いいえ、たぶん知らないと思います。", reading: "ミラーさんはこのニュースをしっていますか。…いいえ、たぶんしらないとおもいます。", en: "Does Mr. Miller know this news? ...No, I don't think he does." }
                        ]
                    },
                    {
                        pattern: "N1(place)でN2があります",
                        meanings: { en: "When N2 is an event (party, concert, festival, accident etc.), あります means 'to take place'.", bn: "N2 যখন একটি অনুষ্ঠান (পার্টি, কনসার্ট, উৎসব, দুর্ঘটনা ইত্যাদি), তখন あります-এর অর্থ \"অনুষ্ঠিত হওয়া\"।" },
                        connection: ["場所 + で + 行事 + が + あります"],
                        examples: [
                            { jp: "東京で日本とブラジルのサッカーの試合があります。", reading: "とうきょうでにほんとブラジルのサッカーのしあいがあります。", en: "A football game between Japan and Brazil will be held in Tokyo." },
                            { jp: "来月、京都でお祭りがあります。", reading: "らいげつ、きょうとでおまつりがあります。", en: "There will be a festival in Kyoto next month." },
                            { jp: "会社でパーティーがありました。", reading: "かいしゃでパーティーがありました。", en: "There was a party at the company." }
                        ]
                    },
                    {
                        pattern: "「S」plain formといいます",
                        meanings: { en: "Quote what someone says or said — directly with the exact words in quotes, or indirectly with the plain form.", bn: "কেউ যা বলে বা বলেছিল তা উদ্ধৃত করা — উদ্ধৃতিচিহ্নে হুবহু শব্দ দিয়ে সরাসরি, অথবা সাধারণ রূপ দিয়ে পরোক্ষভাবে।" },
                        connection: ["「文」と + 言います（直接引用）", "普通形 + と + 言います（間接引用）"],
                        examples: [
                            { jp: "寝るまえに「お休みなさい」と言います。", reading: "ねるまえに「おやすみなさい」といいます。", en: "We say \"Good night\" before going to bed." },
                            { jp: "ミラーさんは「来週東京へ出張します」と言いました。", reading: "ミラーさんは「らいしゅうとうきょうへしゅっちょうします」といいました。", en: "Mr. Miller said, \"I will go to Tokyo on a business trip next week.\"" },
                            { jp: "ミラーさんは来週東京へ出張すると言いました。", reading: "ミラーさんはらいしゅうとうきょうへしゅっちょうするといいました。", en: "Mr. Miller said that he would go to Tokyo on a business trip next week." }
                        ]
                    },
                    {
                        pattern: "N(occasion)で／NでもV",
                        meanings: { en: "で marks the occasion an action takes place on; でも gives one example among similar options when suggesting something.", bn: "で যে উপলক্ষে একটি কাজ ঘটে তা চিহ্নিত করে; でも কিছু প্রস্তাব করার সময় একই ধরনের বিকল্পের মধ্য থেকে একটি উদাহরণ দেয়।" },
                        connection: ["行事 + で", "名詞（例）+ でも + 動詞"],
                        examples: [
                            { jp: "会議で何か意見を言いましたか。", reading: "かいぎでなにかいけんをいいましたか。", en: "Did you give your opinion at the meeting?" },
                            { jp: "ちょっとビールでも飲みませんか。", en: "Shall we drink beer or something?" },
                            { jp: "お茶でも飲みましょう。", reading: "おちゃでものみましょう。", en: "Let's have some tea or something." }
                        ]
                    },
                    {
                        pattern: "V／い-adj／な-adj plain form＋でしょう？",
                        meanings: { en: "Say でしょう with rising intonation to confirm that the listener agrees or shares the same knowledge.", bn: "শ্রোতা সহমত কিনা বা একই তথ্য জানে কিনা তা নিশ্চিত করতে ঊর্ধ্বগামী স্বরে でしょう বলা।" },
                        connection: ["普通形 + でしょう？", "名詞 + だ + でしょう？"],
                        examples: [
                            { jp: "あしたパーティーに行くでしょう？…ええ、行きます。", reading: "あしたパーティーにいくでしょう？…ええ、いきます。", en: "You are going to the party tomorrow, aren't you? ...Yes, I am." },
                            { jp: "北海道は寒かったでしょう？…いいえ、そんなに寒くなかったです。", reading: "ほっかいどうはさむかったでしょう？…いいえ、そんなにさむくなかったです。", en: "It was cold in Hokkaido, wasn't it? ...No, it wasn't that cold." },
                            { jp: "パソコンは便利でしょう？", reading: "パソコンはべんりでしょう？", en: "Personal computers are useful, aren't they?" }
                        ]
                    },
                    {
                        pattern: "Vない-formないと……",
                        meanings: { en: "An abbreviated form of Vない-formないといけません, implying 'I have to ~' by trailing off.", bn: "Vない-form + ないといけません-এর সংক্ষিপ্ত রূপ, বাক্য অসমাপ্ত রেখে \"আমাকে ~ করতে হবে\" বোঝায়।" },
                        connection: ["動詞（ない形）+ ないと……"],
                        examples: [
                            { jp: "もう帰らないと……。", reading: "もうかえらないと……。", en: "I have to go home now." },
                            { jp: "薬を飲まないと……。", reading: "くすりをのまないと……。", en: "I have to take my medicine." },
                            { jp: "そろそろ準備しないと……。", reading: "そろそろじゅんびしないと……。", en: "I should start getting ready soon." }
                        ]
                    }
                ]
            },
            {
                id: "counting-giving-receiving",
                title: "Native Counting & Giving/Receiving Actions",
                items: [
                    {
                        pattern: "くれます",
                        meanings: { en: "Unlike あげます, くれます is used when someone gives something to the speaker (or the speaker's in-group).", bn: "あげます-এর বিপরীতে, くれます ব্যবহৃত হয় যখন কেউ বক্তাকে (বা বক্তার নিজস্ব দলের কাউকে) কিছু দেয়।" },
                        connection: ["N（あげる人）は + わたし[に] + N（もの）を + くれます"],
                        examples: [
                            { jp: "佐藤さんはわたしにクリスマスカードをくれました。", reading: "さとうさんはわたしにクリスマスカードをくれました。", en: "Ms. Sato gave me a Christmas card." },
                            { jp: "母がセーターを送ってくれました。", reading: "ははがセーターをおくってくれました。", en: "My mother sent me a sweater." },
                            { jp: "佐藤さんは妹にお菓子をくれました。", reading: "さとうさんはいもうとにおかしをくれました。", en: "Ms. Sato gave candies to my younger sister." }
                        ]
                    },
                    {
                        pattern: "Vて-form あげます／もらいます／くれます",
                        meanings: { en: "These verbs also describe doing an action for/from someone, expressing who benefits and a sense of goodwill or gratitude.", bn: "এই ক্রিয়াগুলো কারো জন্য/কারো কাছ থেকে একটি কাজ করা বর্ণনা করে, কে উপকৃত হয় এবং সদিচ্ছা বা কৃতজ্ঞতার অনুভূতি প্রকাশ করে।" },
                        connection: ["Vて形 + あげます（する側が話者の場合、目上の人には使わない）", "Vて形 + もらいます（してもらう側が主語）", "Vて形 + くれます（する側が主語、多くは「わたしに」が省略される）"],
                        examples: [
                            { jp: "わたしは木村さんに本を貸してあげました。", reading: "わたしはきむらさんにほんをかしてあげました。", en: "I lent Ms. Kimura a book." },
                            { jp: "わたしは山田さんに図書館の電話番号を教えてもらいました。", reading: "わたしはやまださんにとしょかんのでんわばんごうをおしえてもらいました。", en: "Mr. Yamada told me the telephone number of the library." },
                            { jp: "山田さんは車で送ってくれました。", reading: "やまださんはくるまでおくってくれました。", en: "Mr. Yamada drove me in his car." }
                        ]
                    },
                    {
                        pattern: "疑問詞が V",
                        meanings: { en: "When the subject itself is being asked about, the interrogative is marked with が.", bn: "কর্তা সম্পর্কে যখন প্রশ্ন করা হয়, তখন প্রশ্নবাচক শব্দটি が দিয়ে চিহ্নিত করা হয়।" },
                        connection: ["だれ／なに／どの人 + が + 動詞"],
                        examples: [
                            { jp: "だれが手伝いに行きますか。…カリナさんが行きます。", reading: "だれがてつだいにいきますか。…カリナさんがいきます。", en: "Who will go to give him a hand? ...Ms. Karina will." },
                            { jp: "だれが窓を開けましたか。", reading: "だれがまどをあけましたか。", en: "Who opened the window?" },
                            { jp: "何がいちばん欲しいですか。", reading: "なにがいちばんほしいですか。", en: "What do you want most?" }
                        ]
                    }
                ]
            },
            {
                id: "everyday-essentials-conditionals",
                title: "Everyday Essentials & Conditionals",
                items: [
                    {
                        pattern: "plain past formら、〜",
                        meanings: { en: "Attach ら to the past-tense plain form to make a conditional 'if' clause.", bn: "অতীত কালের সাধারণ রূপের সাথে ら যুক্ত করে একটি শর্তসাপেক্ষ \"যদি\" বাক্যাংশ তৈরি করা।" },
                        connection: ["普通形（た形）+ ら、〜"],
                        examples: [
                            { jp: "お金があったら、旅行します。", reading: "おかねがあったら、りょこうします。", en: "If I had money, I would travel." },
                            { jp: "安かったら、パソコンを買いたいです。", reading: "やすかったら、パソコンをかいたいです。", en: "If it's inexpensive, I want to buy a personal computer." },
                            { jp: "暇だったら、手伝ってください。", reading: "ひまだったら、てつだってください。", en: "If you are free, please give me a hand." }
                        ]
                    },
                    {
                        pattern: "Vた-formら、〜",
                        meanings: { en: "Say that an action or state that is sure to happen will trigger the main clause once it's finished — the main clause is in the present tense.", bn: "নিশ্চিতভাবে ঘটবে এমন একটি কাজ বা অবস্থা শেষ হলে মূল বাক্যাংশটি ঘটবে তা বলা — মূল বাক্যাংশ বর্তমান কালে থাকে।" },
                        connection: ["動詞（た形）+ ら、〜"],
                        examples: [
                            { jp: "十時になったら、出かけましょう。", reading: "じゅうじになったら、でかけましょう。", en: "Let's go out when it gets to ten." },
                            { jp: "うちへ帰ったら、すぐシャワーを浴びます。", reading: "うちへかえったら、すぐシャワーをあびます。", en: "I take a shower soon after I return home." },
                            { jp: "雨が降ったら、行きません。", reading: "あめがふったら、いきません。", en: "If it rains, I won't go." }
                        ]
                    },
                    {
                        pattern: "Vて-form／い-adj〜くて／な-adj[な]で／Nでも、〜",
                        meanings: { en: "Present a reverse condition — 'even if' — where what naturally follows doesn't happen.", bn: "একটি বিপরীত শর্ত উপস্থাপন করে — \"যদিও/তবুও\" — যেখানে স্বাভাবিকভাবে যা হওয়ার কথা তা ঘটে না।" },
                        connection: ["動詞（て形）+ も、〜", "い形容詞（語幹）+ くても、〜", "な形容詞／名詞 + でも、〜"],
                        examples: [
                            { jp: "雨が降っても、洗濯します。", reading: "あめがふっても、せんたくします。", en: "Even if it rains, I'll do the laundry." },
                            { jp: "いくら高くても、買います。", reading: "いくらたかくても、かいます。", en: "However expensive it is, I will buy it." },
                            { jp: "日曜日でも、働きます。", reading: "にちようびでも、はたらきます。", en: "Even if it is Sunday, I will work." }
                        ]
                    }
                ]
            }
        ]
    },

    n4: {
        chapters: [
            {
                id: "obligation-permission-prohibition",
                title: "Obligation, Permission & Prohibition",
                items: [
                    {
                        pattern: "〜なければなりません",
                        meanings: { en: "Expresses obligation — \"must\" do something.", bn: "কর্তব্য প্রকাশ করে — কিছু \"করতেই হবে\"।" },
                        connection: ["動詞（ない形語幹）+ なければなりません"],
                        examples: [
                            { jp: "明日、早く起きなければなりません。", reading: "あした、はやくおきなければなりません。", en: "I must wake up early tomorrow." },
                            { jp: "宿題を今日中にしなければなりません。", reading: "しゅくだいをきょうじゅうにしなければなりません。", en: "I must finish my homework by the end of today." },
                            { jp: "体のために野菜を食べなければなりません。", reading: "からだのためにやさいをたべなければなりません。", en: "I must eat vegetables for my health." }
                        ]
                    },
                    {
                        pattern: "〜なくてもいいです",
                        meanings: { en: "Expresses that something is not necessary — \"don't have to\" do it.", bn: "কোনো কিছু করা আবশ্যক নয় তা বোঝায় — \"করতে হবে না\"।" },
                        connection: ["動詞（ない形語幹）+ なくてもいいです"],
                        examples: [
                            { jp: "今日は残業しなくてもいいです。", reading: "きょうはざんぎょうしなくてもいいです。", en: "You don't have to work overtime today." },
                            { jp: "靴を脱がなくてもいいですよ。", reading: "くつをぬがなくてもいいですよ。", en: "You don't have to take off your shoes." },
                            { jp: "心配しなくてもいいです。大丈夫です。", reading: "しんぱいしなくてもいいです。だいじょうぶです。", en: "You don't need to worry. It's fine." }
                        ]
                    },
                    {
                        pattern: "〜てもいいです",
                        meanings: { en: "Asks for or grants permission — \"may\" or \"is allowed to.\"", bn: "অনুমতি চাওয়া বা দেওয়া বোঝায় — \"করতে পারা\" বা \"করার অনুমতি থাকা\"।" },
                        connection: ["動詞（て形）+ もいいです"],
                        examples: [
                            { jp: "ここに座ってもいいですか。", reading: "ここにすわってもいいですか。", en: "May I sit here?" },
                            { jp: "写真を撮ってもいいですか。", reading: "しゃしんをとってもいいですか。", en: "May I take a photo?" },
                            { jp: "もう帰ってもいいですよ。", reading: "もうかえってもいいですよ。", en: "You may go home now." }
                        ]
                    },
                    {
                        pattern: "〜てはいけません",
                        meanings: { en: "Expresses prohibition — \"must not\" do something.", bn: "নিষেধ প্রকাশ করে — কিছু করা \"যাবে না\"।" },
                        connection: ["動詞（て形）+ はいけません"],
                        examples: [
                            { jp: "ここでたばこを吸ってはいけません。", reading: "ここでたばこをすってはいけません。", en: "You must not smoke here." },
                            { jp: "授業中に携帯電話を使ってはいけません。", reading: "じゅぎょうちゅうにけいたいでんわをつかってはいけません。", en: "You must not use your phone during class." },
                            { jp: "人の物を勝手に使ってはいけません。", reading: "ひとのものをかってにつかってはいけません。", en: "You must not use other people's things without permission." }
                        ]
                    }
                ]
            },
            {
                id: "conditionals-tara-to",
                title: "Conditionals I: たら & と",
                items: [
                    {
                        pattern: "〜たら",
                        meanings: { en: "A conditional — \"if\" or \"when\" something happens.", bn: "একটি শর্তসাপেক্ষ রূপ — কিছু ঘটলে \"যদি\" বা \"যখন\"।" },
                        connection: ["動詞／形容詞／名詞（た形）+ ら"],
                        examples: [
                            { jp: "雨が降ったら、試合は中止です。", reading: "あめがふったら、しあいはちゅうしです。", en: "If it rains, the match will be cancelled." },
                            { jp: "安かったら、買います。", reading: "やすかったら、かいます。", en: "If it's cheap, I'll buy it." },
                            { jp: "日本に着いたら、電話してください。", reading: "にほんについたら、でんわしてください。", en: "When you arrive in Japan, please call me." }
                        ]
                    },
                    {
                        pattern: "〜たらどうですか",
                        meanings: { en: "A suggestion — \"why don't you...\" or \"maybe you should...\"", bn: "পরামর্শ দেওয়ার রূপ — \"করলে কেমন হয়?\" বা \"করা উচিত না?\"।" },
                        connection: ["動詞（た形）+ らどうですか"],
                        examples: [
                            { jp: "疲れているなら、少し休んだらどうですか。", reading: "つかれているなら、すこしやすんだらどうですか。", en: "If you're tired, why don't you rest a little?" },
                            { jp: "先生に聞いたらどうですか。", reading: "せんせいにきいたらどうですか。", en: "Why don't you ask the teacher?" },
                            { jp: "医者に見てもらったらどうですか。", reading: "いしゃにみてもらったらどうですか。", en: "Why don't you have a doctor look at it?" }
                        ]
                    },
                    {
                        pattern: "〜と、〜",
                        meanings: { en: "A conditional used for automatic or habitual results — when/if ... happens, ... naturally follows.", bn: "স্বাভাবিক বা অভ্যাসগত ফলাফলের শর্তসাপেক্ষ রূপ — \"করলেই\" স্বাভাবিকভাবে যা ঘটে।" },
                        connection: ["動詞（辞書形）+ と、〜", "※後件に意志・命令・依頼は使えない"],
                        examples: [
                            { jp: "このボタンを押すと、電気がつきます。", reading: "このボタンをおすと、でんきがつきます。", en: "When you press this button, the light turns on." },
                            { jp: "春になると、桜が咲きます。", reading: "はるになると、さくらがさきます。", en: "When spring comes, the cherry blossoms bloom." },
                            { jp: "まっすぐ行くと、右に駅があります。", reading: "まっすぐいくと、みぎにえきがあります。", en: "If you go straight, the station is on the right." }
                        ]
                    },
                    {
                        pattern: "〜ば良かった",
                        reading: "〜ばよかった",
                        meanings: { en: "Expresses regret — \"I should have...\" or \"I wish I had...\"", bn: "অনুশোচনা প্রকাশ করে — \"করলে ভালো হতো\" বা \"করা উচিত ছিল\"।" },
                        connection: ["動詞（ば形）+ 良かった"],
                        examples: [
                            { jp: "もっと早く勉強すればよかったです。", reading: "もっとはやくべんきょうすればよかったです。", en: "I should have studied earlier." },
                            { jp: "傘を持ってくればよかったです。", reading: "かさをもってくればよかったです。", en: "I wish I had brought an umbrella." },
                            { jp: "あの時、本当のことを言えばよかったです。", reading: "あのとき、ほんとうのことをいえばよかったです。", en: "I wish I had told the truth back then." }
                        ]
                    }
                ]
            },
            {
                id: "conditionals-ba-nara",
                title: "Conditionals II: ば & なら",
                items: [
                    {
                        pattern: "〜ば",
                        meanings: { en: "A conditional — \"if ... then ...\" for a general or hypothetical condition.", bn: "শর্তসাপেক্ষ রূপ — \"যদি ... তাহলে ...\" (সাধারণ বা অনুমানভিত্তিক শর্ত)।" },
                        connection: ["動詞（ば形）", "い形容詞（語幹）+ ければ", "な形容詞／名詞 + であれば"],
                        examples: [
                            { jp: "薬を飲めば、風邪はすぐに治ります。", reading: "くすりをのめば、かぜはすぐになおります。", en: "If you take medicine, your cold will heal quickly." },
                            { jp: "時間があれば、旅行に行きたいです。", reading: "じかんがあれば、りょこうにいきたいです。", en: "If I have time, I want to go on a trip." },
                            { jp: "安ければ、もう一つ買います。", reading: "やすければ、もうひとつかいます。", en: "If it's cheap, I'll buy one more." }
                        ]
                    },
                    {
                        pattern: "〜なら",
                        meanings: { en: "Introduces a topic based on what the other person said or the situation — \"if that's the case,\" \"as for...\"", bn: "অন্যের কথা বা পরিস্থিতির ভিত্তিতে একটি বিষয় উপস্থাপন করে — \"যদি তাই হয়\" বা \"...-এর ক্ষেত্রে\"।" },
                        connection: ["動詞（辞書形）+ なら", "い形容詞 + なら", "な形容詞／名詞 + なら"],
                        examples: [
                            { jp: "日本語を習いたいのなら、いい先生を紹介します。", reading: "にほんごをならいたいのなら、いいせんせいをしょうかいします。", en: "If you want to learn Japanese, I'll introduce you to a good teacher." },
                            { jp: "京都に行くなら、秋がいちばんきれいです。", reading: "きょうとにいくなら、あきがいちばんきれいです。", en: "If you're going to Kyoto, autumn is the most beautiful time." },
                            { jp: "暇なら、手伝ってください。", reading: "ひまなら、てつだってください。", en: "If you're free, please help me." }
                        ]
                    },
                    {
                        pattern: "〜ても／〜でも",
                        meanings: { en: "Presents a reverse condition — \"even if...\" — where the expected result doesn't happen.", bn: "একটি বিপরীত শর্ত উপস্থাপন করে — \"যদিও/তবুও\" — যেখানে প্রত্যাশিত ফলাফল ঘটে না।" },
                        connection: ["動詞（て形）+ も、〜", "い形容詞（語幹）+ くても、〜", "な形容詞／名詞 + でも、〜"],
                        examples: [
                            { jp: "雨が降っても、出かけます。", reading: "あめがふっても、でかけます。", en: "Even if it rains, I'll go out." },
                            { jp: "いくら高くても、これを買います。", reading: "いくらたかくても、これをかいます。", en: "However expensive it is, I'll buy this." },
                            { jp: "休みの日でも、六時に起きます。", reading: "やすみのひでも、ろくじにおきます。", en: "Even on a day off, I get up at six." }
                        ]
                    }
                ]
            },
            {
                id: "trying-preparing-finishing",
                title: "Trying, Preparing & Finishing Actions",
                items: [
                    {
                        pattern: "〜てみる",
                        meanings: { en: "Expresses trying to do something to see the result.", bn: "ফলাফল দেখার জন্য কিছু করে দেখা বোঝায়।" },
                        connection: ["動詞（て形）+ みる"],
                        examples: [
                            { jp: "おいしいかどうか分からないので、食べてみます。", reading: "おいしいかどうかわからないので、たべてみます。", en: "I don't know if it's tasty, so I'll try eating it." },
                            { jp: "一度、着物を着てみたいです。", reading: "いちど、きものをきてみたいです。", en: "I'd like to try wearing a kimono once." },
                            { jp: "分からない言葉は辞書で調べてみてください。", reading: "わからないことばはじしょでしらべてみてください。", en: "Please try looking up words you don't know in a dictionary." }
                        ]
                    },
                    {
                        pattern: "〜ておく",
                        meanings: { en: "Expresses doing something in advance, in preparation for later.", bn: "পরবর্তী সময়ের জন্য আগে থেকেই কিছু করে রাখা বোঝায়।" },
                        connection: ["動詞（て形）+ おく"],
                        examples: [
                            { jp: "旅行の前に、ホテルを予約しておきます。", reading: "りょこうのまえに、ホテルをよやくしておきます。", en: "Before the trip, I'll make a hotel reservation in advance." },
                            { jp: "会議の資料を準備しておいてください。", reading: "かいぎのしりょうをじゅんびしておいてください。", en: "Please prepare the meeting materials in advance." },
                            { jp: "暑いので、窓を開けておきました。", reading: "あついので、まどをあけておきました。", en: "Since it's hot, I left the window open." }
                        ]
                    },
                    {
                        pattern: "〜てしまう",
                        meanings: { en: "Expresses that an action is completed entirely, or that something happened regrettably.", bn: "কোনো কাজ পুরোপুরি শেষ হওয়া, অথবা দুর্ভাগ্যবশত/অনিচ্ছাকৃতভাবে কিছু ঘটে যাওয়া বোঝায়।" },
                        connection: ["動詞（て形）+ しまう"],
                        examples: [
                            { jp: "この本はもう全部読んでしまいました。", reading: "このほんはもうぜんぶよんでしまいました。", en: "I've already finished reading this whole book." },
                            { jp: "電車の中で財布をなくしてしまいました。", reading: "でんしゃのなかでさいふをなくしてしまいました。", en: "I ended up losing my wallet on the train." },
                            { jp: "大切な約束を忘れてしまいました。", reading: "たいせつなやくそくをわすれてしまいました。", en: "I ended up forgetting an important promise." }
                        ]
                    },
                    {
                        pattern: "〜終わる",
                        reading: "〜おわる",
                        meanings: { en: "Expresses finishing the act of doing something.", bn: "কোনো কাজ করা শেষ হওয়া বোঝায়।" },
                        connection: ["動詞（ます形語幹）+ 終わる"],
                        examples: [
                            { jp: "レポートを書き終わりました。", reading: "レポートをかきおわりました。", en: "I finished writing the report." },
                            { jp: "ご飯を食べ終わったら、教えてください。", reading: "ごはんをたべおわったら、おしえてください。", en: "Please tell me when you finish eating." },
                            { jp: "話し終わると、みんなが拍手しました。", reading: "はなしおわると、みんながはくしゅしました。", en: "When I finished speaking, everyone applauded." }
                        ]
                    }
                ]
            },
            {
                id: "appearance-hearsay-sou",
                title: "Appearance & Hearsay: そうです",
                items: [
                    {
                        pattern: "〜そうです（様態）",
                        reading: "〜そうです（ようたい）",
                        meanings: { en: "Describes an appearance based on what you see — \"looks like,\" \"seems.\"", bn: "চোখে দেখে ধারণা প্রকাশ করে — \"দেখতে মনে হচ্ছে\"।" },
                        connection: ["動詞（ます形語幹）+ そうです", "い形容詞（語幹）+ そうです", "な形容詞（語幹）+ そうです", "※いい → よさそうです（例外）"],
                        examples: [
                            { jp: "このケーキは美味しそうです。", reading: "このケーキはおいしそうです。", en: "This cake looks delicious." },
                            { jp: "雨が降りそうです。", reading: "あめがふりそうです。", en: "It looks like it's going to rain." },
                            { jp: "彼は元気そうです。", reading: "かれはげんきそうです。", en: "He looks well." }
                        ]
                    },
                    {
                        pattern: "〜そうです（伝聞）",
                        reading: "〜そうです（でんぶん）",
                        meanings: { en: "Reports information heard from another source — \"I heard that...,\" \"it is said that...\"", bn: "অন্য কারো কাছ থেকে শোনা তথ্য জানায় — \"শুনেছি যে...\"।" },
                        connection: ["普通形 + そうです"],
                        examples: [
                            { jp: "天気予報によると、明日は雨だそうです。", reading: "てんきよほうによると、あしたはあめだそうです。", en: "According to the weather forecast, I heard it will rain tomorrow." },
                            { jp: "あの店のラーメンはとてもおいしいそうです。", reading: "あのみせのラーメンはとてもおいしいそうです。", en: "I heard that ramen at that shop is very delicious." },
                            { jp: "田中さんはもう国に帰ったそうです。", reading: "たなかさんはもうくにかえったそうです。", en: "I heard that Tanaka has already returned to his home country." }
                        ]
                    },
                    {
                        pattern: "〜出す",
                        reading: "〜だす",
                        meanings: { en: "Expresses that an action or state suddenly begins.", bn: "হঠাৎ কোনো কাজ বা অবস্থা শুরু হওয়া বোঝায়।" },
                        connection: ["動詞（ます形語幹）+ 出す"],
                        examples: [
                            { jp: "赤ちゃんが急に泣き出しました。", reading: "あかちゃんがきゅうになきだしました。", en: "The baby suddenly started crying." },
                            { jp: "空が暗くなって、雨が降り出しました。", reading: "そらがくらくなって、あめがふりだしました。", en: "The sky got dark and it started raining." },
                            { jp: "彼の話を聞いて、みんな笑い出しました。", reading: "かれのはなしをきいて、みんなわらいだしました。", en: "Hearing his story, everyone burst out laughing." }
                        ]
                    }
                ]
            },
            {
                id: "seeming-and-comparing",
                title: "Seeming & Comparing: ようだ・らしい・みたい",
                items: [
                    {
                        pattern: "〜ようです",
                        meanings: { en: "Expresses that something seems or appears to be so, based on the speaker's own observation.", bn: "বক্তার নিজস্ব পর্যবেক্ষণের ভিত্তিতে কিছু মনে হওয়া/মনে হচ্ছে বোঝায়।" },
                        connection: ["動詞／い形容詞（普通形）+ ようです", "な形容詞（な）+ ようです", "名詞（の）+ ようです"],
                        examples: [
                            { jp: "午後から雨が降るようです。", reading: "ごごからあめがふるようです。", en: "It seems it will rain from this afternoon." },
                            { jp: "隣の部屋にだれかいるようです。", reading: "となりのへやにだれかいるようです。", en: "It seems someone is in the next room." },
                            { jp: "彼はこの町のことをよく知っているようです。", reading: "かれはこのまちのことをよくしっているようです。", en: "He seems to know a lot about this town." }
                        ]
                    },
                    {
                        pattern: "〜らしいです",
                        meanings: { en: "Expresses that something seems to be true, usually based on information heard from others.", bn: "সাধারণত অন্যের কাছ থেকে শোনা তথ্যের ভিত্তিতে কিছু সত্য বলে মনে হওয়া বোঝায়।" },
                        connection: ["普通形 + らしいです"],
                        examples: [
                            { jp: "あの店は本当においしいらしいです。", reading: "あのみせはほんとうにおいしいらしいです。", en: "I hear that shop is really delicious." },
                            { jp: "来年、この道路が新しくなるらしいです。", reading: "らいねん、このどうろがあたらしくなるらしいです。", en: "I hear this road will be renovated next year." },
                            { jp: "田中さんは今日、休みらしいです。", reading: "たなかさんはきょう、やすみらしいです。", en: "I hear Tanaka is off today." }
                        ]
                    },
                    {
                        pattern: "〜みたいです",
                        meanings: { en: "A casual way of saying \"seems\" or \"like,\" similar in meaning to ようです.", bn: "\"মনে হচ্ছে\" বা \"মতো\" বোঝানোর একটি সাধারণ/কথ্য রূপ, ようです-এর কাছাকাছি অর্থ।" },
                        connection: ["普通形 + みたいです", "※な形容詞／名詞は「だ」を取る"],
                        examples: [
                            { jp: "外は寒いみたいです。", reading: "そとはさむいみたいです。", en: "It seems cold outside." },
                            { jp: "彼女はこの歌手のファンみたいです。", reading: "かのじょはこのかしゅのファンみたいです。", en: "It seems she's a fan of this singer." },
                            { jp: "だれもいないみたいですね。", reading: "だれもいないみたいですね。", en: "It seems no one is here, huh." }
                        ]
                    },
                    {
                        pattern: "〜のような／〜のように",
                        meanings: { en: "Compares one thing to another — \"like,\" \"similar to.\"", bn: "একটি জিনিসকে অন্য কিছুর সাথে তুলনা করে — \"মতো\", \"সদৃশ\"।" },
                        connection: ["名詞 + のような + 名詞", "名詞 + のように + 動詞／形容詞"],
                        examples: [
                            { jp: "彼女の肌は雪のように白いです。", reading: "かのじょのはだはゆきのようにしろいです。", en: "Her skin is as white as snow." },
                            { jp: "兄のような人になりたいです。", reading: "あにのようなひとになりたいです。", en: "I want to become a person like my older brother." },
                            { jp: "鳥のように空を飛びたいです。", reading: "とりのようにそらをとびたいです。", en: "I want to fly through the sky like a bird." }
                        ]
                    }
                ]
            },
            {
                id: "giving-receiving-favors",
                title: "Giving & Receiving Favors",
                items: [
                    {
                        pattern: "〜てあげる",
                        meanings: { en: "Expresses doing something for someone else's benefit.", bn: "অন্য কারো উপকারের জন্য কিছু করে দেওয়া বোঝায়।" },
                        connection: ["動詞（て形）+ あげる"],
                        examples: [
                            { jp: "友達に日本語を教えてあげました。", reading: "ともだちににほんごをおしえてあげました。", en: "I taught my friend Japanese." },
                            { jp: "荷物を持ってあげましょうか。", reading: "にもつをもってあげましょうか。", en: "Shall I carry your luggage for you?" },
                            { jp: "妹に本を読んであげました。", reading: "いもうとにほんをよんであげました。", en: "I read a book for my little sister." }
                        ]
                    },
                    {
                        pattern: "〜てくれる",
                        meanings: { en: "Expresses someone doing something for the speaker's benefit.", bn: "অন্য কেউ বক্তার উপকারের জন্য কিছু করে দেওয়া বোঝায়।" },
                        connection: ["動詞（て形）+ くれる"],
                        examples: [
                            { jp: "友達が駅まで迎えに来てくれました。", reading: "ともだちがえきまでむかえにきてくれました。", en: "My friend came to pick me up at the station." },
                            { jp: "田中さんが仕事を手伝ってくれました。", reading: "たなかさんがしごとをてつだってくれました。", en: "Tanaka helped me with my work." },
                            { jp: "母がセーターを送ってくれました。", reading: "ははがセーターをおくってくれました。", en: "My mother sent me a sweater." }
                        ]
                    },
                    {
                        pattern: "〜てもらう",
                        meanings: { en: "Expresses receiving the favor of someone doing something.", bn: "কারো কাছ থেকে কোনো কাজ করিয়ে নেওয়ার সুবিধা পাওয়া বোঝায়।" },
                        connection: ["動詞（て形）+ もらう"],
                        examples: [
                            { jp: "先生に作文を直してもらいました。", reading: "せんせいにさくぶんをなおしてもらいました。", en: "I had the teacher correct my essay." },
                            { jp: "友達に空港まで送ってもらいました。", reading: "ともだちにくうこうまでおくってもらいました。", en: "I had a friend take me to the airport." },
                            { jp: "兄に宿題を手伝ってもらいました。", reading: "あににしゅくだいをてつだってもらいました。", en: "I had my older brother help me with my homework." }
                        ]
                    },
                    {
                        pattern: "〜ていただけませんか",
                        meanings: { en: "A polite way to ask someone to do something — \"could you please...\"", bn: "কাউকে কিছু করার জন্য ভদ্রভাবে অনুরোধ করার রূপ — \"করে দিতে পারবেন কি?\"।" },
                        connection: ["動詞（て形）+ いただけませんか"],
                        examples: [
                            { jp: "すみません、写真を撮っていただけませんか。", reading: "すみません、しゃしんをとっていただけませんか。", en: "Excuse me, could you take a photo for me?" },
                            { jp: "もう一度説明していただけませんか。", reading: "もういちどせつめいしていただけませんか。", en: "Could you please explain that one more time?" },
                            { jp: "少し待っていただけませんか。", reading: "すこしまっていただけませんか。", en: "Could you please wait a little?" }
                        ]
                    },
                    {
                        pattern: "〜てほしい",
                        meanings: { en: "Expresses wanting someone else to do something.", bn: "অন্য কাউকে দিয়ে কিছু করাতে চাওয়া বোঝায়।" },
                        connection: ["（人）に + 動詞（て形）+ ほしい"],
                        examples: [
                            { jp: "もっと野菜を食べてほしいです。", reading: "もっとやさいをたべてほしいです。", en: "I want you to eat more vegetables." },
                            { jp: "早く元気になってほしいです。", reading: "はやくげんきになってほしいです。", en: "I want you to get well soon." },
                            { jp: "私の気持ちを分かってほしいです。", reading: "わたしのきもちをわかってほしいです。", en: "I want you to understand my feelings." }
                        ]
                    }
                ]
            },
            {
                id: "potential-form-ability",
                title: "Potential Form & Ability",
                items: [
                    {
                        pattern: "可能形",
                        reading: "かのうけい",
                        meanings: { en: "The potential form of a verb, expressing the ability to do something.", bn: "ক্রিয়ার সামর্থ্যবাচক রূপ, যা কিছু করার সক্ষমতা প্রকাশ করে।" },
                        connection: ["グループ1：う→える（例：読む→読める）", "グループ2：る→られる（例：食べる→食べられる）", "グループ3：する→できる、来る→来られる"],
                        examples: [
                            { jp: "私は漢字が読めます。", reading: "わたしはかんじがよめます。", en: "I can read kanji." },
                            { jp: "妹はピアノが弾けます。", reading: "いもうとはピアノがひけます。", en: "My little sister can play the piano." },
                            { jp: "明日は早く来られますか。", reading: "あしたははやくこられますか。", en: "Can you come early tomorrow?" }
                        ]
                    },
                    {
                        pattern: "〜ことができる",
                        meanings: { en: "Expresses being able to do something.", bn: "কিছু করতে সক্ষম হওয়া বোঝায়।" },
                        connection: ["動詞（辞書形）+ ことができる"],
                        examples: [
                            { jp: "田中さんは車を運転することができます。", reading: "たなかさんはくるまをうんてんすることができます。", en: "Tanaka can drive a car." },
                            { jp: "この図書館では本を借りることができます。", reading: "このとしょかんではほんをかりることができます。", en: "You can borrow books at this library." },
                            { jp: "一人で漢字を書くことができますか。", reading: "ひとりでかんじをかくことができますか。", en: "Can you write kanji by yourself?" }
                        ]
                    },
                    {
                        pattern: "見える／聞こえる",
                        reading: "みえる／きこえる",
                        meanings: { en: "Expresses that something is naturally visible or audible, without deliberate effort.", bn: "ইচ্ছাকৃত চেষ্টা ছাড়াই স্বাভাবিকভাবে কিছু দেখা বা শোনা যাওয়া বোঝায় — \"দেখা যায়\", \"শোনা যায়\"।" },
                        connection: ["名詞 + が + 見えます／聞こえます"],
                        examples: [
                            { jp: "窓から山が見えます。", reading: "まどからやまがみえます。", en: "You can see the mountain from the window." },
                            { jp: "隣の部屋から音楽が聞こえます。", reading: "となりのへやからおんがくがきこえます。", en: "I can hear music from the next room." },
                            { jp: "ここから海が見えますか。", reading: "ここからうみがみえますか。", en: "Can you see the ocean from here?" }
                        ]
                    }
                ]
            },
            {
                id: "passive-voice",
                title: "Passive Voice",
                items: [
                    {
                        pattern: "受身形（られる）",
                        reading: "うけみけい",
                        meanings: { en: "The passive form of a verb, used when the subject receives the action.", bn: "ক্রিয়ার কর্মবাচ্য রূপ, যখন কর্তা নিজে ক্রিয়াটি ভোগ করে।" },
                        connection: ["グループ1：う→われる（例：使う→使われる）", "グループ2：る→られる（例：ほめる→ほめられる）", "グループ3：する→される、来る→来られる"],
                        examples: [
                            { jp: "この本は多くの人に読まれています。", reading: "このほんはおおくのひとによまれています。", en: "This book is read by many people." },
                            { jp: "先生に褒められました。", reading: "せんせいにほめられました。", en: "I was praised by the teacher." },
                            { jp: "昨日、雨に降られました。", reading: "きのう、あめにふられました。", en: "I got rained on yesterday." }
                        ]
                    },
                    {
                        pattern: "（人）に〜される",
                        meanings: { en: "Marks the agent of a passive action — \"by (someone).\"", bn: "কর্মবাচ্য ক্রিয়ার কর্তা চিহ্নিত করে — \"...-এর দ্বারা\"।" },
                        connection: ["（人）に + 動詞（受身形）"],
                        examples: [
                            { jp: "妹に大事な本を破られました。", reading: "いもうとにだいじなほんをやぶられました。", en: "My important book was torn by my little sister." },
                            { jp: "電車の中で足を踏まれました。", reading: "でんしゃのなかであしをふまれました。", en: "My foot was stepped on in the train." },
                            { jp: "犬に手を噛まれました。", reading: "いぬにてをかまれました。", en: "I was bitten on the hand by a dog." }
                        ]
                    },
                    {
                        pattern: "〜によって（受身の動作主）",
                        meanings: { en: "Marks the agent in a passive sentence, typically for things created, discovered, or decided by someone.", bn: "কর্মবাচ্য বাক্যে কর্তা চিহ্নিত করে, সাধারণত কেউ কিছু তৈরি, আবিষ্কার বা সিদ্ধান্ত নিলে ব্যবহৃত হয়।" },
                        connection: ["（人）によって + 動詞（受身形）"],
                        examples: [
                            { jp: "この絵は有名な画家によって描かれました。", reading: "このえはゆうめいながかによってかかれました。", en: "This picture was painted by a famous artist." },
                            { jp: "電話はベルによって発明されました。", reading: "でんわはベルによってはつめいされました。", en: "The telephone was invented by Bell." },
                            { jp: "その法律は国会によって決められました。", reading: "そのほうりつはこっかいによってきめられました。", en: "That law was decided by the parliament." }
                        ]
                    }
                ]
            },
            {
                id: "causative-form",
                title: "Causative Form",
                items: [
                    {
                        pattern: "使役形（させる）",
                        reading: "しえきけい",
                        meanings: { en: "The causative form of a verb, used to express making or letting someone do something.", bn: "ক্রিয়ার প্রযোজক রূপ, যা কাউকে দিয়ে কিছু করানো বা করতে দেওয়া বোঝায়।" },
                        connection: ["グループ1：う→わせる（例：使う→使わせる）", "グループ2：る→させる（例：食べる→食べさせる）", "グループ3：する→させる、来る→来させる"],
                        examples: [
                            { jp: "母は子供に野菜を食べさせます。", reading: "はははこどもにやさいをたべさせます。", en: "The mother makes her child eat vegetables." },
                            { jp: "先生は学生に本を読ませました。", reading: "せんせいはがくせいにほんをよませました。", en: "The teacher had the students read the book." },
                            { jp: "今日は休ませてください。", reading: "きょうはやすませてください。", en: "Please let me take the day off today." }
                        ]
                    },
                    {
                        pattern: "〜（さ）せてください",
                        meanings: { en: "A polite way to ask permission to do something oneself.", bn: "নিজে কিছু করার অনুমতি ভদ্রভাবে চাওয়ার রূপ।" },
                        connection: ["動詞（使役形）+ てください"],
                        examples: [
                            { jp: "私にその仕事をさせてください。", reading: "わたしにそのしごとをさせてください。", en: "Please let me do that job." },
                            { jp: "少し考えさせてください。", reading: "すこしかんがえさせてください。", en: "Please let me think about it a little." },
                            { jp: "ここで写真を撮らせてください。", reading: "ここでしゃしんをとらせてください。", en: "Please let me take a photo here." }
                        ]
                    },
                    {
                        pattern: "〜させてもらう／〜させていただく",
                        meanings: { en: "Politely expresses receiving permission to do something oneself.", bn: "নিজে কিছু করার অনুমতি বিনয়ের সাথে পাওয়া বোঝায়।" },
                        connection: ["動詞（使役形）+ てもらう／ていただく"],
                        examples: [
                            { jp: "今日は早く帰らせてもらいます。", reading: "きょうははやくかえらせてもらいます。", en: "I'll go home early today, if that's alright." },
                            { jp: "お先に失礼させていただきます。", reading: "おさきにしつれいさせていただきます。", en: "Please allow me to leave before you." },
                            { jp: "この件について話させていただきます。", reading: "このけんについてはなさせていただきます。", en: "Allow me to talk about this matter." }
                        ]
                    }
                ]
            },
            {
                id: "causative-passive",
                title: "Causative-Passive Form",
                items: [
                    {
                        pattern: "使役受身形（させられる）",
                        reading: "しえきうけみけい",
                        meanings: { en: "The causative-passive form, expressing being made to do something, usually against one's will.", bn: "প্রযোজক-কর্মবাচ্য রূপ, যা কাউকে দিয়ে জোরপূর্বক কিছু করানো (সাধারণত অনিচ্ছাসত্ত্বেও) বোঝায়।" },
                        connection: ["グループ1：う→わされる（例：歌う→歌わされる）", "グループ2：る→させられる（例：食べる→食べさせられる）", "グループ3：する→させられる、来る→来させられる"],
                        examples: [
                            { jp: "子供のとき、よく野菜を食べさせられました。", reading: "こどものとき、よくやさいをたべさせられました。", en: "When I was a child, I was often made to eat vegetables." },
                            { jp: "先生に漢字を百回書かされました。", reading: "せんせいにかんじをひゃっかいかかされました。", en: "The teacher made me write the kanji a hundred times." },
                            { jp: "パーティーで歌を歌わされました。", reading: "パーティーでうたをうたわされました。", en: "I was made to sing a song at the party." }
                        ]
                    },
                    {
                        pattern: "〜させられる（感情の使役受身）",
                        meanings: { en: "Uses the causative-passive form to express a feeling that was caused involuntarily.", bn: "প্রযোজক-কর্মবাচ্য রূপ ব্যবহার করে অনিচ্ছাকৃতভাবে সৃষ্ট অনুভূতি প্রকাশ করা হয়।" },
                        connection: ["動詞（使役受身形）"],
                        examples: [
                            { jp: "その映画を見て、泣かされました。", reading: "そのえいがをみて、なかされました。", en: "That movie made me cry." },
                            { jp: "彼の話にはいつも驚かされます。", reading: "かれのはなしにはいつもおどろかされます。", en: "His stories always surprise me." },
                            { jp: "娘の一言に考えさせられました。", reading: "むすめのひとことにかんがえさせられました。", en: "My daughter's remark made me think." }
                        ]
                    }
                ]
            },
            {
                id: "respectful-keigo",
                title: "Respectful Keigo (尊敬語)",
                items: [
                    {
                        pattern: "尊敬の特別な動詞",
                        reading: "そんけいのとくべつなどうし",
                        meanings: { en: "Special respectful verbs used when talking about the actions of someone of higher status.", bn: "উচ্চপদস্থ বা সম্মানিত ব্যক্তির কাজ সম্পর্কে বলার সময় ব্যবহৃত বিশেষ সম্মানসূচক ক্রিয়া।" },
                        connection: ["いる／行く／来る → いらっしゃる", "言う → おっしゃる", "する → なさる", "食べる／飲む → 召し上がる", "見る → ご覧になる"],
                        examples: [
                            { jp: "社長は明日、大阪にいらっしゃいます。", reading: "しゃちょうはあした、おおさかにいらっしゃいます。", en: "The president will go to Osaka tomorrow." },
                            { jp: "先生が何かおっしゃいました。", reading: "せんせいがなにかおっしゃいました。", en: "The teacher said something." },
                            { jp: "どうぞ、召し上がってください。", reading: "どうぞ、めしあがってください。", en: "Please, go ahead and eat." }
                        ]
                    },
                    {
                        pattern: "お（ご）〜になる",
                        meanings: { en: "A respectful pattern used to describe another person's action politely.", bn: "অন্য কারো কাজ ভদ্র/সম্মানজনকভাবে বর্ণনা করার একটি রূপ।" },
                        connection: ["お + 動詞（ます形語幹）+ になる", "ご + 名詞（する動詞の語幹）+ になる"],
                        examples: [
                            { jp: "田中先生はもうお帰りになりました。", reading: "たなかせんせいはもうおかえりになりました。", en: "Mr. Tanaka has already gone home." },
                            { jp: "この新聞をお読みになりましたか。", reading: "このしんぶんをおよみになりましたか。", en: "Have you read this newspaper?" },
                            { jp: "お客様は何時にご出発になりますか。", reading: "おきゃくさまはなんじにごしゅっぱつになりますか。", en: "What time will you be departing?" }
                        ]
                    },
                    {
                        pattern: "お（ご）〜ください",
                        meanings: { en: "A respectful request pattern — a polite \"please do (something)\" for someone of higher status.", bn: "সম্মানসূচক অনুরোধের রূপ — কাউকে ভদ্রভাবে \"দয়া করে করুন\" বলার জন্য।" },
                        connection: ["お + 動詞（ます形語幹）+ ください", "ご + 名詞（する動詞の語幹）+ ください"],
                        examples: [
                            { jp: "こちらにお名前をお書きください。", reading: "こちらにおなまえをおかきください。", en: "Please write your name here." },
                            { jp: "少々お待ちください。", reading: "しょうしょうおまちください。", en: "Please wait a moment." },
                            { jp: "どうぞご安心ください。", reading: "どうぞごあんしんください。", en: "Please rest assured." }
                        ]
                    }
                ]
            },
            {
                id: "humble-keigo",
                title: "Humble Keigo (謙譲語)",
                items: [
                    {
                        pattern: "謙譲の特別な動詞 I",
                        reading: "けんじょうのとくべつなどうし いち",
                        meanings: { en: "Special humble verbs used to lower the speaker's own action out of respect for the listener.", bn: "শ্রোতার প্রতি সম্মান দেখাতে নিজের কাজকে নম্রভাবে প্রকাশ করার বিশেষ ক্রিয়া।" },
                        connection: ["行く／来る → 参る", "言う → 申す", "する → いたす", "いる → おる"],
                        examples: [
                            { jp: "明日、そちらへ参ります。", reading: "あした、そちらへまいります。", en: "I will go there tomorrow." },
                            { jp: "田中と申します。", reading: "たなかともうします。", en: "My name is Tanaka." },
                            { jp: "私がご案内いたします。", reading: "わたしがごあんないいたします。", en: "I will guide you." }
                        ]
                    },
                    {
                        pattern: "謙譲の特別な動詞 II",
                        reading: "けんじょうのとくべつなどうし に",
                        meanings: { en: "More special humble verbs used to lower the speaker's own action.", bn: "নিজের কাজকে নম্রভাবে প্রকাশ করার আরও কিছু বিশেষ ক্রিয়া।" },
                        connection: ["行く（訪問）→ 伺う", "見る → 拝見する", "食べる／飲む／もらう → いただく", "あげる → 差し上げる"],
                        examples: [
                            { jp: "明日、お宅に伺います。", reading: "あした、おたくにうかがいます。", en: "I will visit your home tomorrow." },
                            { jp: "資料を拝見しました。", reading: "しりょうをはいけんしました。", en: "I have looked at the materials." },
                            { jp: "お茶をいただきます。", reading: "おちゃをいただきます。", en: "I will have some tea." }
                        ]
                    },
                    {
                        pattern: "ご存じです",
                        reading: "ごぞんじです",
                        meanings: { en: "The respectful way of saying \"to know,\" used for someone of higher status.", bn: "\"জানা\"-এর সম্মানসূচক রূপ, উচ্চপদস্থ ব্যক্তির ক্ষেত্রে ব্যবহৃত হয়।" },
                        connection: ["名詞 + を + ご存じです"],
                        examples: [
                            { jp: "この件をご存じですか。", reading: "このけんをごぞんじですか。", en: "Do you know about this matter?" },
                            { jp: "山田さんのことをご存じですか。", reading: "やまださんのことをごぞんじですか。", en: "Do you know Mr. Yamada?" },
                            { jp: "先生はもうご存じでした。", reading: "せんせいはもうごぞんじでした。", en: "The teacher already knew." }
                        ]
                    }
                ]
            },
            {
                id: "commands-and-orders",
                title: "Commands, Orders & Strong Requests",
                items: [
                    {
                        pattern: "命令形",
                        reading: "めいれいけい",
                        meanings: { en: "The plain command form of a verb, used for strong, direct orders.", bn: "ক্রিয়ার সাধারণ আদেশসূচক রূপ, কঠোর ও সরাসরি নির্দেশের জন্য ব্যবহৃত হয়।" },
                        connection: ["グループ1：う段→え段（例：読む→読め）", "グループ2：る→ろ（例：食べる→食べろ）", "グループ3：する→しろ、来る→来い"],
                        examples: [
                            { jp: "早く来い。", reading: "はやくこい。", en: "Come quickly!" },
                            { jp: "ここに座れ。", reading: "ここにすわれ。", en: "Sit here!" },
                            { jp: "静かにしろ。", reading: "しずかにしろ。", en: "Be quiet!" }
                        ]
                    },
                    {
                        pattern: "〜な（禁止形）",
                        reading: "〜な（きんしけい）",
                        meanings: { en: "The plain prohibitive form — a strong \"don't do\" command.", bn: "সাধারণ নিষেধসূচক রূপ — কঠোরভাবে \"করো না\" বলার জন্য।" },
                        connection: ["動詞（辞書形）+ な"],
                        examples: [
                            { jp: "危ないから、触るな。", reading: "あぶないから、さわるな。", en: "Don't touch it, it's dangerous." },
                            { jp: "ここに車を止めるな。", reading: "ここにくるまをとめるな。", en: "Don't park your car here." },
                            { jp: "心配するな。", reading: "しんぱいするな。", en: "Don't worry." }
                        ]
                    },
                    {
                        pattern: "〜なさい",
                        meanings: { en: "A command form softer than the plain imperative, often used by parents or teachers.", bn: "সাধারণ আদেশের চেয়ে নরম রূপ, প্রায়ই বাবা-মা বা শিক্ষকরা ব্যবহার করেন।" },
                        connection: ["動詞（ます形語幹）+ なさい"],
                        examples: [
                            { jp: "早く宿題をしなさい。", reading: "はやくしゅくだいをしなさい。", en: "Do your homework quickly." },
                            { jp: "もっと野菜を食べなさい。", reading: "もっとやさいをたべなさい。", en: "Eat more vegetables." },
                            { jp: "気をつけなさい。", reading: "きをつけなさい。", en: "Be careful." }
                        ]
                    }
                ]
            },
            {
                id: "volitional-and-intentions",
                title: "Volitional Form & Intentions",
                items: [
                    {
                        pattern: "意向形",
                        reading: "いこうけい",
                        meanings: { en: "The volitional form of a verb, expressing the speaker's will or a suggestion — \"let's...\"", bn: "ক্রিয়ার ইচ্ছাসূচক রূপ, যা বক্তার ইচ্ছা বা প্রস্তাব প্রকাশ করে — \"চলো...\"।" },
                        connection: ["グループ1：う段→お段+う（例：行く→行こう）", "グループ2：る→よう（例：食べる→食べよう）", "グループ3：する→しよう、来る→来よう"],
                        examples: [
                            { jp: "お腹が空いたから、何か食べよう。", reading: "おなかがすいたから、なにかたべよう。", en: "I'm hungry, so let's eat something." },
                            { jp: "明日、一緒に映画を見に行こう。", reading: "あした、いっしょにえいがをみにいこう。", en: "Let's go watch a movie together tomorrow." },
                            { jp: "そろそろ帰ろう。", reading: "そろそろかえろう。", en: "Let's head home soon." }
                        ]
                    },
                    {
                        pattern: "〜（よ）うと思います",
                        meanings: { en: "Expresses the speaker's own intention — \"I'm thinking of doing...\"", bn: "বক্তার নিজের ইচ্ছা প্রকাশ করে — \"...করব বলে ভাবছি\"।" },
                        connection: ["動詞（意向形）+ と思います"],
                        examples: [
                            { jp: "来年、日本へ留学しようと思います。", reading: "らいねん、にほんへりゅうがくしようとおもいます。", en: "I'm thinking of studying abroad in Japan next year." },
                            { jp: "週末、部屋を掃除しようと思います。", reading: "しゅうまつ、へやをそうじしようとおもいます。", en: "I'm thinking of cleaning my room this weekend." },
                            { jp: "夜遅くまで働かないようにしようと思います。", reading: "よるおそくまではたらかないようにしようとおもいます。", en: "I'm thinking of trying not to work until late at night." }
                        ]
                    },
                    {
                        pattern: "〜つもりです",
                        meanings: { en: "Expresses a plan or intention decided upon in advance.", bn: "আগে থেকে নেওয়া পরিকল্পনা বা সিদ্ধান্ত প্রকাশ করে।" },
                        connection: ["動詞（辞書形／ない形）+ つもりです"],
                        examples: [
                            { jp: "今年、車を買うつもりです。", reading: "ことし、くるまをかうつもりです。", en: "I intend to buy a car this year." },
                            { jp: "もうお酒は飲まないつもりです。", reading: "もうおさけはのまないつもりです。", en: "I intend not to drink alcohol anymore." },
                            { jp: "卒業したら、国へ帰るつもりです。", reading: "そつぎょうしたら、くにへかえるつもりです。", en: "After graduating, I intend to return to my country." }
                        ]
                    },
                    {
                        pattern: "〜予定です",
                        reading: "〜よていです",
                        meanings: { en: "Expresses a scheduled plan.", bn: "নির্ধারিত পরিকল্পনা প্রকাশ করে।" },
                        connection: ["動詞（辞書形）／名詞（の）+ 予定です"],
                        examples: [
                            { jp: "来月、大阪へ出張する予定です。", reading: "らいげつ、おおさかへしゅっちょうするよていです。", en: "I'm scheduled to go on a business trip to Osaka next month." },
                            { jp: "会議は三時に始まる予定です。", reading: "かいぎはさんじにはじまるよていです。", en: "The meeting is scheduled to start at three." },
                            { jp: "十日間の旅行の予定です。", reading: "とおかかんのりょこうのよていです。", en: "It's a planned ten-day trip." }
                        ]
                    }
                ]
            },
            {
                id: "reasons-and-connectors",
                title: "Reasons & Connecting Sentences",
                items: [
                    {
                        pattern: "〜し〜し",
                        meanings: { en: "Lists two or more reasons or facts together.", bn: "দুই বা ততোধিক কারণ বা তথ্য একসাথে তুলে ধরে।" },
                        connection: ["普通形 + し、普通形 + し"],
                        examples: [
                            { jp: "この店は安いし、おいしいし、いつも人気です。", reading: "このみせはやすいし、おいしいし、いつもにんきです。", en: "This shop is cheap, delicious, and always popular." },
                            { jp: "頭も痛いし、熱もあるし、今日は休みます。", reading: "あたまもいたいし、ねつもあるし、きょうはやすみます。", en: "My head hurts and I have a fever, so I'll rest today." },
                            { jp: "彼は親切だし、頭もいいし、みんなに好かれています。", reading: "かれはしんせつだし、あたまもいいし、みんなにすかれています。", en: "He's kind, smart, and liked by everyone." }
                        ]
                    },
                    {
                        pattern: "〜たり〜たり",
                        meanings: { en: "Lists representative actions or states among several — \"doing things like A and B.\"", bn: "একাধিক কাজ বা অবস্থার মধ্য থেকে কিছু প্রতিনিধিত্বমূলক উদাহরণ তুলে ধরে — \"এটা-ওটা করা\"।" },
                        connection: ["動詞（た形）+ り、動詞（た形）+ り＋する"],
                        examples: [
                            { jp: "週末は本を読んだり、音楽を聞いたりします。", reading: "しゅうまつはほんをよんだり、おんがくをきいたりします。", en: "On weekends I do things like reading books and listening to music." },
                            { jp: "公園で写真を撮ったり、サッカーをしたりしました。", reading: "こうえんでしゃしんをとったり、サッカーをしたりしました。", en: "At the park we took photos, played soccer, and so on." },
                            { jp: "この道は広かったり狭かったりします。", reading: "このみちはひろかったりせまかったりします。", en: "This road is sometimes wide, sometimes narrow." }
                        ]
                    },
                    {
                        pattern: "〜ながら",
                        meanings: { en: "Expresses two actions happening at the same time, done by the same person.", bn: "একই ব্যক্তির দ্বারা একসাথে দুটি কাজ করা বোঝায়।" },
                        connection: ["動詞（ます形語幹）+ ながら"],
                        examples: [
                            { jp: "音楽を聞きながら、勉強します。", reading: "おんがくをききながら、べんきょうします。", en: "I study while listening to music." },
                            { jp: "テレビを見ながら、ご飯を食べないでください。", reading: "テレビをみながら、ごはんをたべないでください。", en: "Please don't eat while watching TV." },
                            { jp: "彼はいつも笑いながら話します。", reading: "かれはいつもわらいながらはなします。", en: "He always talks while smiling." }
                        ]
                    }
                ]
            },
            {
                id: "concession-and-contrast",
                title: "Concession, Contrast & Unexpected Outcomes",
                items: [
                    {
                        pattern: "〜のに",
                        meanings: { en: "Expresses an unexpected or contrary result — \"although,\" \"even though,\" often with surprise or complaint.", bn: "অপ্রত্যাশিত বা বিপরীত ফলাফল প্রকাশ করে — \"যদিও/তা সত্ত্বেও\", প্রায়ই বিস্ময় বা অভিযোগের সুরে।" },
                        connection: ["普通形 + のに"],
                        examples: [
                            { jp: "一生懸命勉強したのに、試験に落ちました。", reading: "いっしょうけんめいべんきょうしたのに、しけんにおちました。", en: "Even though I studied hard, I failed the exam." },
                            { jp: "天気がいいのに、家にいます。", reading: "てんきがいいのに、いえにいます。", en: "Even though the weather is nice, I'm staying home." },
                            { jp: "まだ子供なのに、とても頼りになります。", reading: "まだこどもなのに、とてもたよりになります。", en: "Even though he's still a child, he's very reliable." }
                        ]
                    },
                    {
                        pattern: "それでも",
                        meanings: { en: "Expresses a contrast — \"but still,\" \"and yet\" — used to start a new sentence.", bn: "বৈপরীত্য প্রকাশ করে — \"তবুও\" — নতুন বাক্য শুরু করতে ব্যবহৃত হয়।" },
                        connection: ["文。それでも、文。"],
                        examples: [
                            { jp: "熱があります。それでも、学校に行きます。", reading: "ねつがあります。それでも、がっこうにいきます。", en: "I have a fever. Even so, I'll go to school." },
                            { jp: "何度も失敗しました。それでも、諦めませんでした。", reading: "なんどもしっぱいしました。それでも、あきらめませんでした。", en: "I failed many times. Even so, I didn't give up." },
                            { jp: "高いです。それでも、買いたいです。", reading: "たかいです。それでも、かいたいです。", en: "It's expensive. Even so, I want to buy it." }
                        ]
                    },
                    {
                        pattern: "〜けれど（も）",
                        meanings: { en: "A softer, more conversational way to say \"but\" or \"however.\"", bn: "\"কিন্তু\" বা \"তবে\" বলার নরম ও কথ্য রূপ।" },
                        connection: ["普通形 + けれど（も）"],
                        examples: [
                            { jp: "この漢字は難しいけれど、面白いです。", reading: "このかんじはむずかしいけれど、おもしろいです。", en: "This kanji is difficult, but interesting." },
                            { jp: "行きたいけれども、時間がありません。", reading: "いきたいけれども、じかんがありません。", en: "I want to go, but I don't have time." },
                            { jp: "雨が降っているけれど、出かけます。", reading: "あめがふっているけれど、でかけます。", en: "It's raining, but I'll go out." }
                        ]
                    }
                ]
            },
            {
                id: "quoting-and-reported-speech",
                title: "Quoting & Reported Speech",
                items: [
                    {
                        pattern: "〜と言っていました",
                        reading: "〜といっていました",
                        meanings: { en: "Reports what someone else said.", bn: "অন্য কেউ কী বলেছিল তা জানায়।" },
                        connection: ["普通形 + と言っていました"],
                        examples: [
                            { jp: "田中さんは明日休みだと言っていました。", reading: "たなかさんはあしたやすみだといっていました。", en: "Tanaka said he's off tomorrow." },
                            { jp: "兄はもう結婚したと言っていました。", reading: "あにはもうけっこんしたといっていました。", en: "My older brother said he already got married." },
                            { jp: "母は元気だと言っていました。", reading: "はははげんきだといっていました。", en: "My mother said she's doing well." }
                        ]
                    },
                    {
                        pattern: "〜と思います",
                        meanings: { en: "Expresses the speaker's own thought or opinion — \"I think that...\"", bn: "বক্তার নিজের মতামত প্রকাশ করে — \"আমার মনে হয় যে...\"।" },
                        connection: ["普通形 + と思います"],
                        examples: [
                            { jp: "明日は雨が降ると思います。", reading: "あしたはあめがふるとおもいます。", en: "I think it will rain tomorrow." },
                            { jp: "この映画はおもしろいと思います。", reading: "このえいがはおもしろいとおもいます。", en: "I think this movie is interesting." },
                            { jp: "彼は来ないと思います。", reading: "かれはこないとおもいます。", en: "I don't think he'll come." }
                        ]
                    },
                    {
                        pattern: "〜ということ",
                        meanings: { en: "Turns a sentence or phrase into a noun — \"the fact that...\" or introducing what something is called.", bn: "একটি বাক্য বা বাক্যাংশকে বিশেষ্যে রূপান্তরিত করে — \"যে বিষয়টি\" বা কোনো কিছুর নাম বোঝাতে।" },
                        connection: ["文 + ということ"],
                        examples: [
                            { jp: "彼が来月結婚するということを聞きました。", reading: "かれがらいげつけっこんするということをききました。", en: "I heard that he's getting married next month." },
                            { jp: "分からないということを正直に言いました。", reading: "わからないということをしょうじきにいいました。", en: "I honestly said that I don't understand." },
                            { jp: "これは「もったいない」ということです。", reading: "これは「もったいない」ということです。", en: "This is what's called \"mottainai.\"" }
                        ]
                    },
                    {
                        pattern: "って",
                        meanings: { en: "A casual particle used for quoting or reporting speech, similar to と.", bn: "উদ্ধৃতি দেওয়ার একটি কথ্য/সাধারণ রূপ, と-এর কাছাকাছি অর্থ।" },
                        connection: ["普通形 + って"],
                        examples: [
                            { jp: "田中さん、今日休みだって。", reading: "たなかさん、きょうやすみだって。", en: "I heard Tanaka is off today." },
                            { jp: "明日、雨が降るって聞きました。", reading: "あした、あめがふるってききました。", en: "I heard it's going to rain tomorrow." },
                            { jp: "「駅で待ってて」って言われた。", reading: "「えきでまってて」っていわれた。", en: "I was told, \"Wait at the station.\"" }
                        ]
                    }
                ]
            },
            {
                id: "degree-and-extent",
                title: "Degree & Extent",
                items: [
                    {
                        pattern: "〜すぎる",
                        meanings: { en: "Expresses that something is done or is to an excessive degree — \"too much.\"", bn: "কোনো কিছু অতিরিক্ত পরিমাণে করা বা হওয়া বোঝায় — \"খুব বেশি\"।" },
                        connection: ["動詞（ます形語幹）+ すぎる", "い形容詞（語幹）+ すぎる", "な形容詞（語幹）+ すぎる"],
                        examples: [
                            { jp: "昨日、お酒を飲みすぎました。", reading: "きのう、おさけをのみすぎました。", en: "I drank too much alcohol yesterday." },
                            { jp: "この問題は簡単すぎます。", reading: "このもんだいはかんたんすぎます。", en: "This problem is too easy." },
                            { jp: "その靴は私には派手すぎます。", reading: "そのくつはわたしにははですぎます。", en: "Those shoes are too flashy for me." }
                        ]
                    },
                    {
                        pattern: "〜ほど",
                        meanings: { en: "Expresses degree or extent — \"to the point that,\" \"as much as.\"", bn: "মাত্রা বা পরিমাণ প্রকাশ করে — \"এতটাই যে\", \"যতটা\"।" },
                        connection: ["普通形／名詞 + ほど"],
                        examples: [
                            { jp: "疲れて、動けないほどです。", reading: "つかれて、うごけないほどです。", en: "I'm so tired I can hardly move." },
                            { jp: "彼ほど日本語が上手な人はいません。", reading: "かれほどにほんごがじょうずなひとはいません。", en: "There's no one as good at Japanese as him." },
                            { jp: "今日は昨日ほど寒くないです。", reading: "きょうはきのうほどさむくないです。", en: "Today isn't as cold as yesterday." }
                        ]
                    },
                    {
                        pattern: "〜くらい／〜ぐらい",
                        meanings: { en: "Expresses an approximate amount, or gives an example of degree.", bn: "আনুমানিক পরিমাণ বা মাত্রার একটি উদাহরণ প্রকাশ করে — \"প্রায়\", \"এতটা\"।" },
                        connection: ["数量／名詞 + くらい／ぐらい"],
                        examples: [
                            { jp: "駅まで十分くらいかかります。", reading: "えきまでじゅっぷんくらいかかります。", en: "It takes about ten minutes to the station." },
                            { jp: "漢字が二千字くらい読めます。", reading: "かんじがにせんじくらいよめます。", en: "I can read about two thousand kanji." },
                            { jp: "泣きたいくらい嬉しいです。", reading: "なきたいくらいうれしいです。", en: "I'm so happy I could cry." }
                        ]
                    }
                ]
            },
            {
                id: "difficulty-and-ease",
                title: "Difficulty & Ease of Doing",
                items: [
                    {
                        pattern: "〜やすい",
                        meanings: { en: "Expresses that something is easy to do.", bn: "কোনো কিছু করা সহজ তা প্রকাশ করে।" },
                        connection: ["動詞（ます形語幹）+ やすい"],
                        examples: [
                            { jp: "この本は字が大きくて、読みやすいです。", reading: "このほんはじがおおきくて、よみやすいです。", en: "This book's letters are big, so it's easy to read." },
                            { jp: "あの先生の説明は分かりやすいです。", reading: "あのせんせいのせつめいはわかりやすいです。", en: "That teacher's explanation is easy to understand." },
                            { jp: "この靴は歩きやすいです。", reading: "このくつはあるきやすいです。", en: "These shoes are easy to walk in." }
                        ]
                    },
                    {
                        pattern: "〜にくい",
                        meanings: { en: "Expresses that something is difficult to do.", bn: "কোনো কিছু করা কঠিন তা প্রকাশ করে।" },
                        connection: ["動詞（ます形語幹）+ にくい"],
                        examples: [
                            { jp: "この漢字は複雑で、覚えにくいです。", reading: "このかんじはふくざつで、おぼえにくいです。", en: "This kanji is complex and hard to remember." },
                            { jp: "この魚は骨が多くて、食べにくいです。", reading: "このさかなはほねがおおくて、たべにくいです。", en: "This fish has a lot of bones, so it's hard to eat." },
                            { jp: "悪い知らせは言いにくいです。", reading: "わるいしらせはいいにくいです。", en: "Bad news is hard to tell." }
                        ]
                    },
                    {
                        pattern: "〜方",
                        reading: "〜かた",
                        meanings: { en: "Expresses the way or method of doing something — \"how to...\"", bn: "কিছু করার পদ্ধতি বা উপায় প্রকাশ করে — \"কীভাবে করে\"।" },
                        connection: ["動詞（ます形語幹）+ 方"],
                        examples: [
                            { jp: "この漢字の読み方が分かりません。", reading: "このかんじのよみかたがわかりません。", en: "I don't know how to read this kanji." },
                            { jp: "料理の作り方を教えてください。", reading: "りょうりのつくりかたをおしえてください。", en: "Please teach me how to make this dish." },
                            { jp: "使い方が簡単です。", reading: "つかいかたがかんたんです。", en: "The way to use it is simple." }
                        ]
                    }
                ]
            },
            {
                id: "change-of-state",
                title: "Change of State & Decisions",
                items: [
                    {
                        pattern: "〜ようになる",
                        meanings: { en: "Describes a gradual change of state — \"come to\" be able to do or be a certain way.", bn: "ধীরে ধীরে অবস্থার পরিবর্তন বর্ণনা করে — কিছু করতে/হতে \"সক্ষম হয়ে ওঠা\"।" },
                        connection: ["動詞（辞書形／可能形）+ ようになる"],
                        examples: [
                            { jp: "漢字が読めるようになりました。", reading: "かんじがよめるようになりました。", en: "I've come to be able to read kanji." },
                            { jp: "毎日練習して、上手に泳げるようになりました。", reading: "まいにちれんしゅうして、じょうずにおよげるようになりました。", en: "I practiced every day and became able to swim well." },
                            { jp: "最近、野菜を食べるようになりました。", reading: "さいきん、やさいをたべるようになりました。", en: "Lately I've come to eat vegetables." }
                        ]
                    },
                    {
                        pattern: "〜ことになる",
                        meanings: { en: "Expresses that something has been decided, often by circumstances beyond the speaker's own choice.", bn: "কোনো কিছু সিদ্ধান্ত হয়ে যাওয়া বোঝায়, প্রায়ই বক্তার নিজের ইচ্ছার বাইরে পরিস্থিতির কারণে।" },
                        connection: ["動詞（辞書形／ない形）+ ことになる"],
                        examples: [
                            { jp: "来月から大阪で働くことになりました。", reading: "らいげつからおおさかではたらくことになりました。", en: "It has been decided that I will work in Osaka from next month." },
                            { jp: "会議は来週に延期することになりました。", reading: "かいぎはらいしゅうにえんきすることになりました。", en: "It has been decided that the meeting will be postponed to next week." },
                            { jp: "駅前に新しい店ができることになりました。", reading: "えきまえにあたらしいみせができることになりました。", en: "It has been decided that a new shop will open in front of the station." }
                        ]
                    },
                    {
                        pattern: "〜ことにする",
                        meanings: { en: "Expresses the speaker's own decision to do something.", bn: "বক্তা নিজে কিছু করার সিদ্ধান্ত নেওয়া বোঝায়।" },
                        connection: ["動詞（辞書形／ない形）+ ことにする"],
                        examples: [
                            { jp: "今度の休みに旅行に行くことにしました。", reading: "こんどのやすみにりょこうにいくことにしました。", en: "I decided to go on a trip during my next holiday." },
                            { jp: "今日から毎日運動することにしました。", reading: "きょうからまいにちうんどうすることにしました。", en: "I decided to exercise every day starting today." },
                            { jp: "お酒はもう飲まないことにしました。", reading: "おさけはもうのまないことにしました。", en: "I decided not to drink alcohol anymore." }
                        ]
                    }
                ]
            },
            {
                id: "time-and-simultaneity",
                title: "Time Relations & Simultaneous Actions",
                items: [
                    {
                        pattern: "〜ているところ",
                        meanings: { en: "Expresses being in the middle of doing something right now.", bn: "এই মুহূর্তে কোনো কাজ চলমান থাকা বোঝায়।" },
                        connection: ["動詞（て形）+ いるところ"],
                        examples: [
                            { jp: "今、資料を作っているところです。", reading: "いま、しりょうをつくっているところです。", en: "I'm in the middle of making the materials right now." },
                            { jp: "ちょうどご飯を食べているところです。", reading: "ちょうどごはんをたべているところです。", en: "I'm just eating right now." },
                            { jp: "会議は今、始まっているところです。", reading: "かいぎはいま、はじまっているところです。", en: "The meeting is just starting right now." }
                        ]
                    },
                    {
                        pattern: "〜たところ",
                        meanings: { en: "Expresses that an action has just finished happening.", bn: "কোনো কাজ সবে শেষ হয়েছে তা বোঝায়।" },
                        connection: ["動詞（た形）+ ところ"],
                        examples: [
                            { jp: "たった今、駅に着いたところです。", reading: "たったいま、えきについたところです。", en: "I've just arrived at the station right now." },
                            { jp: "会議が終わったところです。", reading: "かいぎがおわったところです。", en: "The meeting has just ended." },
                            { jp: "ちょうどご飯を食べたところです。", reading: "ちょうどごはんをたべたところです。", en: "I've just finished eating." }
                        ]
                    },
                    {
                        pattern: "〜たばかり",
                        meanings: { en: "Expresses that something happened only very recently.", bn: "কোনো কিছু খুব সম্প্রতি ঘটেছে তা বোঝায়।" },
                        connection: ["動詞（た形）+ ばかり"],
                        examples: [
                            { jp: "日本に来たばかりで、まだ道が分かりません。", reading: "にほんにきたばかりで、まだみちがわかりません。", en: "I just came to Japan, so I don't know the streets yet." },
                            { jp: "この本は買ったばかりです。", reading: "このほんはかったばかりです。", en: "I just bought this book." },
                            { jp: "娘は先月、生まれたばかりです。", reading: "むすめはせんげつ、うまれたばかりです。", en: "My daughter was just born last month." }
                        ]
                    },
                    {
                        pattern: "〜まま",
                        meanings: { en: "Expresses that a state continues unchanged while something else happens.", bn: "একটি অবস্থা অপরিবর্তিত থাকা অবস্থায় অন্য কিছু ঘটা বোঝায়।" },
                        connection: ["動詞（た形）+ まま", "名詞＋の＋まま"],
                        examples: [
                            { jp: "靴を履いたまま、部屋に入らないでください。", reading: "くつをはいたまま、へやにはいらないでください。", en: "Please don't come into the room with your shoes still on." },
                            { jp: "窓を開けたまま、寝てしまいました。", reading: "まどをあけたまま、ねてしまいました。", en: "I fell asleep with the window left open." },
                            { jp: "昔のまま、何も変わっていません。", reading: "むかしのまま、なにもかわっていません。", en: "Nothing has changed — it's just as it was before." }
                        ]
                    }
                ]
            },
            {
                id: "uncertainty-and-possibility",
                title: "Uncertainty, Possibility & Confirmation",
                items: [
                    {
                        pattern: "〜かどうか",
                        meanings: { en: "Expresses uncertainty about whether something is true or not — \"whether or not.\"", bn: "কোনো কিছু সত্য কিনা তা নিয়ে অনিশ্চয়তা প্রকাশ করে — \"হোক বা না হোক\"।" },
                        connection: ["普通形 + かどうか"],
                        examples: [
                            { jp: "これが正しいかどうか分かりません。", reading: "これがただしいかどうかわかりません。", en: "I don't know whether this is correct or not." },
                            { jp: "明日、雨が降るかどうか心配です。", reading: "あした、あめがふるかどうかしんぱいです。", en: "I'm worried about whether it will rain tomorrow or not." },
                            { jp: "彼が来るかどうか聞いてください。", reading: "かれがくるかどうかきいてください。", en: "Please ask whether he's coming or not." }
                        ]
                    },
                    {
                        pattern: "〜かもしれません",
                        meanings: { en: "Expresses a possibility — \"might,\" \"may.\"", bn: "একটি সম্ভাবনা প্রকাশ করে — \"হতে পারে\"।" },
                        connection: ["普通形 + かもしれません"],
                        examples: [
                            { jp: "電車に間に合わないかもしれません。", reading: "でんしゃにまにあわないかもしれません。", en: "I might not make it to the train in time." },
                            { jp: "来年、この会社を辞めるかもしれません。", reading: "らいねん、このかいしゃをやめるかもしれません。", en: "I might quit this company next year." },
                            { jp: "彼は今日、忙しいかもしれません。", reading: "かれはきょう、いそがしいかもしれません。", en: "He might be busy today." }
                        ]
                    },
                    {
                        pattern: "〜はずです",
                        meanings: { en: "Expresses a strong expectation based on reason or evidence — \"should be,\" \"is supposed to be.\"", bn: "যুক্তি বা প্রমাণের ভিত্তিতে দৃঢ় প্রত্যাশা প্রকাশ করে — \"নিশ্চয়ই হওয়ার কথা\"।" },
                        connection: ["普通形 + はずです"],
                        examples: [
                            { jp: "彼はもう空港に着いているはずです。", reading: "かれはもうくうこうについているはずです。", en: "He should have already arrived at the airport." },
                            { jp: "今日は休みのはずです。", reading: "きょうはやすみのはずです。", en: "Today should be a day off." },
                            { jp: "田中さんは日本語が上手なはずです。", reading: "たなかさんはにほんごがじょうずなはずです。", en: "Tanaka should be good at Japanese." }
                        ]
                    },
                    {
                        pattern: "〜でしょう",
                        meanings: { en: "Expresses probability, seeks confirmation, or is used as a polite way to ask a question.", bn: "সম্ভাবনা প্রকাশ করে, নিশ্চিতকরণ চায়, অথবা ভদ্রভাবে প্রশ্ন করার জন্য ব্যবহৃত হয়।" },
                        connection: ["普通形 + でしょう"],
                        examples: [
                            { jp: "明日は雨でしょう。", reading: "あしたはあめでしょう。", en: "It will probably rain tomorrow." },
                            { jp: "疲れたでしょう。ゆっくり休んでください。", reading: "つかれたでしょう。ゆっくりやすんでください。", en: "You must be tired, right? Please rest well." },
                            { jp: "こちらはお客様のお荷物でしょうか。", reading: "こちらはおきゃくさまのおにもつでしょうか。", en: "Would this be your luggage, sir?" }
                        ]
                    }
                ]
            },
            {
                id: "purpose-and-advice",
                title: "Purpose & Giving Advice",
                items: [
                    {
                        pattern: "〜ように",
                        meanings: { en: "Expresses acting with a purpose or goal in mind — \"in order to,\" \"so that.\"", bn: "একটি লক্ষ্য বা উদ্দেশ্য নিয়ে কাজ করা বোঝায় — \"যাতে করে\"।" },
                        connection: ["動詞（辞書形／可能形）+ ように", "動詞（ない形）+ ように"],
                        examples: [
                            { jp: "日本語が上手になるように、毎日勉強しています。", reading: "にほんごがじょうずになるように、まいにちべんきょうしています。", en: "I study every day so that I can become good at Japanese." },
                            { jp: "忘れないように、メモしておきます。", reading: "わすれないように、メモしておきます。", en: "I'll write it down so I don't forget." },
                            { jp: "風邪をひかないように、気をつけてください。", reading: "かぜをひかないように、きをつけてください。", en: "Please take care so you don't catch a cold." }
                        ]
                    },
                    {
                        pattern: "〜たほうがいいです",
                        meanings: { en: "Gives advice or a suggestion — \"you'd better...\"", bn: "পরামর্শ বা প্রস্তাব দেয় — \"করা উচিত\"।" },
                        connection: ["動詞（た形）+ ほうがいいです"],
                        examples: [
                            { jp: "疲れたら、早く寝たほうがいいです。", reading: "つかれたら、はやくねたほうがいいです。", en: "If you're tired, you'd better go to bed early." },
                            { jp: "暑い日には、水をたくさん飲んだほうがいいです。", reading: "あついひには、みずをたくさんのんだほうがいいです。", en: "On hot days, you'd better drink a lot of water." },
                            { jp: "医者に相談したほうがいいですよ。", reading: "いしゃにそうだんしたほうがいいですよ。", en: "You'd better consult a doctor." }
                        ]
                    },
                    {
                        pattern: "〜ないほうがいいです",
                        meanings: { en: "Gives advice against doing something — \"you'd better not...\"", bn: "কোনো কিছু না করার পরামর্শ দেয় — \"না করাই ভালো\"।" },
                        connection: ["動詞（ない形）+ ほうがいいです"],
                        examples: [
                            { jp: "夜遅くまで働かないほうがいいです。", reading: "よるおそくまではたらかないほうがいいです。", en: "You'd better not work late into the night." },
                            { jp: "甘い物を食べすぎないほうがいいです。", reading: "あまいものをたべすぎないほうがいいです。", en: "You'd better not eat too many sweets." },
                            { jp: "一人で行かないほうがいいですよ。", reading: "ひとりでいかないほうがいいですよ。", en: "You'd better not go alone." }
                        ]
                    }
                ]
            },
            {
                id: "compound-verbs-and-review",
                title: "Compound Verbs & Everyday Expressions",
                items: [
                    {
                        pattern: "〜始める",
                        reading: "〜はじめる",
                        meanings: { en: "Expresses the beginning of an action.", bn: "কোনো কাজ শুরু হওয়া বোঝায়।" },
                        connection: ["動詞（ます形語幹）+ 始める"],
                        examples: [
                            { jp: "三年前に日本語を勉強し始めました。", reading: "さんねんまえににほんごをべんきょうしはじめました。", en: "I started studying Japanese three years ago." },
                            { jp: "空が暗くなって、雨が降り始めました。", reading: "そらがくらくなって、あめがふりはじめました。", en: "The sky darkened and it started to rain." },
                            { jp: "赤ちゃんが泣き始めました。", reading: "あかちゃんがなきはじめました。", en: "The baby started crying." }
                        ]
                    },
                    {
                        pattern: "〜続ける",
                        reading: "〜つづける",
                        meanings: { en: "Expresses continuing an action.", bn: "কোনো কাজ চালিয়ে যাওয়া বোঝায়।" },
                        connection: ["動詞（ます形語幹）+ 続ける"],
                        examples: [
                            { jp: "十年間、この会社で働き続けています。", reading: "じゅうねんかん、このかいしゃではたらきつづけています。", en: "I've been working at this company continuously for ten years." },
                            { jp: "面白くなくても、この本を最後まで読み続けます。", reading: "おもしろくなくても、このほんをさいごまでよみつづけます。", en: "Even if it's not interesting, I'll keep reading this book to the end." },
                            { jp: "諦めないで、練習し続けてください。", reading: "あきらめないで、れんしゅうしつづけてください。", en: "Please don't give up, and keep practicing." }
                        ]
                    },
                    {
                        pattern: "〜がる",
                        meanings: { en: "Expresses that someone, usually a third person, outwardly shows a feeling or desire.", bn: "কেউ (সাধারণত তৃতীয় ব্যক্তি) বাহ্যিকভাবে কোনো অনুভূতি বা ইচ্ছা প্রকাশ করছে তা বোঝায়।" },
                        connection: ["い形容詞（語幹）+ がる", "な形容詞（語幹）+ がる"],
                        examples: [
                            { jp: "子供は新しいおもちゃを欲しがっています。", reading: "こどもはあたらしいおもちゃをほしがっています。", en: "The child wants a new toy." },
                            { jp: "妹は一人で暗い部屋を怖がります。", reading: "いもうとはひとりでくらいへやをこわがります。", en: "My little sister is scared of dark rooms when alone." },
                            { jp: "みんなが彼の成功を羨ましがっています。", reading: "みんながかれのせいこうをうらやましがっています。", en: "Everyone is envious of his success." }
                        ]
                    },
                    {
                        pattern: "〜とか〜とか",
                        meanings: { en: "Lists examples informally — \"things like ... and ...\"", bn: "অনানুষ্ঠানিকভাবে উদাহরণ তালিকাভুক্ত করে — \"যেমন ... আর ...\"।" },
                        connection: ["名詞／動詞（辞書形）+ とか"],
                        examples: [
                            { jp: "休みの日は、掃除をするとか、洗濯をするとかします。", reading: "やすみのひは、そうじをするとか、せんたくをするとかします。", en: "On days off, I do things like cleaning and doing laundry." },
                            { jp: "果物とか野菜とかをよく食べます。", reading: "くだものとかやさいとかをよくたべます。", en: "I often eat things like fruit and vegetables." },
                            { jp: "忙しくて、休むとか無理です。", reading: "いそがしくて、やすむとかむりです。", en: "I'm too busy — resting and such is impossible." }
                        ]
                    }
                ]
            }
        ]
    },

    n3: {
        chapters: [
            {
                id: "judgment-certainty",
                title: "Judgment & Certainty",
                items: [
                    {
                        pattern: "〜にちがいない",
                        meanings: { en: "Must be / I'm certain that — a stronger, more confident judgment than 〜はずだ or 〜かもしれない.", bn: "নিশ্চিতভাবে হবে — 〜はずだ বা 〜かもしれない-এর চেয়ে বেশি নিশ্চিত একটি সিদ্ধান্ত।" },
                        connection: ["普通形 + にちがいない", "な形容詞／名詞 + にちがいない"],
                        examples: [
                            { jp: "この字は田中さんが書いたにちがいない。", reading: "このじはたなかさんがかいたにちがいない。", en: "This handwriting must have been written by Mr. Tanaka." },
                            { jp: "あの店はいつも混んでいる。おいしいにちがいない。", reading: "あのみせはいつもこんでいる。おいしいにちがいない。", en: "That shop is always crowded. It must be delicious." },
                            { jp: "彼は疲れているにちがいない。", reading: "かれはつかれているにちがいない。", en: "He must be tired." }
                        ]
                    },
                    {
                        pattern: "〜わけだ",
                        meanings: { en: "It means that / no wonder — a natural conclusion drawn from what was just said.", bn: "তাহলে বোঝা যাচ্ছে যে / আশ্চর্যের কিছু নেই — যা বলা হয়েছে তা থেকে স্বাভাবিক সিদ্ধান্ত।" },
                        connection: ["普通形 + わけだ", "な形容詞／名詞 + な・の + わけだ"],
                        examples: [
                            { jp: "10年も日本に住んでいるんですか。道理で日本語が上手なわけですね。", reading: "じゅうねんもにほんにすんでいるんですか。どうりでにほんごがじょうずなわけですね。", en: "You've lived in Japan for 10 years? No wonder your Japanese is so good." },
                            { jp: "彼は医者の息子だ。だから病院を継ぐわけだ。", reading: "かれはいしゃのむすこだ。だからびょういんをつぐわけだ。", en: "He's a doctor's son. That's why he's taking over the hospital." },
                            { jp: "3時間も歩いた。疲れたわけだ。", reading: "さんじかんもあるいた。つかれたわけだ。", en: "I walked for three whole hours. No wonder I'm tired." }
                        ]
                    },
                    {
                        pattern: "〜わけがない",
                        meanings: { en: "There's no way that / it's impossible that — strong denial of a possibility.", bn: "এটা হওয়ার কোনো সম্ভাবনাই নেই — একটি সম্ভাবনার জোরালো অস্বীকৃতি।" },
                        connection: ["普通形 + わけがない", "な形容詞／名詞 + な・の + わけがない"],
                        examples: [
                            { jp: "彼が嘘をつくわけがない。", reading: "かれがうそをつくわけがない。", en: "There's no way he would lie." },
                            { jp: "こんな難しい問題、子供にできるわけがない。", reading: "こんなむずかしいもんだい、こどもにできるわけがない。", en: "There's no way a child could solve such a difficult problem." },
                            { jp: "あの二人が知らないわけがない。", reading: "あのふたりがしらないわけがない。", en: "There's no way those two don't know." }
                        ]
                    }
                ]
            },
            {
                id: "concession-contrast",
                title: "Concession & Contrast",
                items: [
                    {
                        pattern: "〜くせに",
                        meanings: { en: "Even though / despite — used critically, implying the second clause is inappropriate given the first.", bn: "যদিও / সত্ত্বেও — সমালোচনামূলকভাবে ব্যবহৃত হয়, প্রথম অংশের তুলনায় দ্বিতীয় অংশটি অনুপযুক্ত এমন ইঙ্গিত দেয়।" },
                        connection: ["普通形 + くせに", "な形容詞／名詞 + な・の + くせに"],
                        examples: [
                            { jp: "彼は下手なくせに、いつも自信がある。", reading: "かれはへたなくせに、いつもじしんがある。", en: "Even though he's bad at it, he's always confident." },
                            { jp: "知っているくせに、教えてくれなかった。", reading: "しっているくせに、おしえてくれなかった。", en: "Even though he knew, he didn't tell me." },
                            { jp: "子供のくせに生意気だ。", reading: "こどものくせになまいきだ。", en: "He's cheeky for a kid." }
                        ]
                    },
                    {
                        pattern: "〜にもかかわらず",
                        meanings: { en: "Despite / in spite of — a more formal concession than 〜のに.", bn: "সত্ত্বেও — 〜のに-এর চেয়ে বেশি আনুষ্ঠানিক ছাড়।" },
                        connection: ["普通形 + にもかかわらず", "な形容詞／名詞 + にもかかわらず"],
                        examples: [
                            { jp: "雨にもかかわらず、大勢の人が集まった。", reading: "あめにもかかわらず、おおぜいのひとがあつまった。", en: "Despite the rain, a large crowd gathered." },
                            { jp: "努力したにもかかわらず、失敗した。", reading: "どりょくしたにもかかわらず、しっぱいした。", en: "Despite my efforts, I failed." },
                            { jp: "忙しいにもかかわらず、手伝ってくれた。", reading: "いそがしいにもかかわらず、てつだってくれた。", en: "Despite being busy, he helped me." }
                        ]
                    },
                    {
                        pattern: "〜一方で",
                        reading: "〜いっぽうで",
                        meanings: { en: "While / on the other hand — contrasts two sides of the same situation.", bn: "একদিকে... অন্যদিকে — একই পরিস্থিতির দুটি দিকের মধ্যে বৈসাদৃশ্য দেখায়।" },
                        connection: ["普通形 + 一方で"],
                        examples: [
                            { jp: "都会は便利な一方で、物価が高い。", reading: "とかいはべんりないっぽうで、ぶっかがたかい。", en: "Cities are convenient, but on the other hand, prices are high." },
                            { jp: "彼は厳しい一方で、とても優しい。", reading: "かれはきびしいいっぽうで、とてもやさしい。", en: "He's strict, but on the other hand, he's very kind." },
                            { jp: "収入が増える一方で、自由な時間が減った。", reading: "しゅうにゅうがふえるいっぽうで、じゆうなじかんがへった。", en: "While my income increased, my free time decreased." }
                        ]
                    }
                ]
            },
            {
                id: "perspective-topic-markers",
                title: "Perspective & Topic Markers",
                items: [
                    {
                        pattern: "〜に対して",
                        reading: "〜にたいして",
                        meanings: { en: "Towards / in response to — marks the target of an attitude or action.", bn: "প্রতি / এর প্রতিক্রিয়ায় — কোনো মনোভাব বা কাজের লক্ষ্যবস্তু চিহ্নিত করে।" },
                        connection: ["名詞 + に対して"],
                        examples: [
                            { jp: "先生に対して失礼な態度を取った。", reading: "せんせいにたいしてしつれいなたいどをとった。", en: "He took a rude attitude towards the teacher." },
                            { jp: "この質問に対して、どう答えますか。", reading: "このしつもんにたいして、どうこたえますか。", en: "How would you answer this question?" },
                            { jp: "子供に対する教育は大切だ。", reading: "こどもにたいするきょういくはたいせつだ。", en: "Education for children is important." }
                        ]
                    },
                    {
                        pattern: "〜にとって",
                        meanings: { en: "For / from the standpoint of — evaluates something from someone's perspective.", bn: "এর জন্য / এর দৃষ্টিকোণ থেকে — কারো দৃষ্টিভঙ্গি থেকে কোনো কিছুর মূল্যায়ন করে।" },
                        connection: ["名詞 + にとって"],
                        examples: [
                            { jp: "私にとって家族が一番大切です。", reading: "わたしにとってかぞくがいちばんたいせつです。", en: "For me, family is the most important thing." },
                            { jp: "学生にとってこの本は難しすぎる。", reading: "がくせいにとってこのほんはむずかしすぎる。", en: "This book is too difficult for students." },
                            { jp: "それは会社にとって大きな問題だ。", reading: "それはかいしゃにとっておおきなもんだいだ。", en: "That is a big problem for the company." }
                        ]
                    },
                    {
                        pattern: "〜について",
                        meanings: { en: "About / concerning — introduces the topic being discussed.", bn: "সম্পর্কে — আলোচিত বিষয় উপস্থাপন করে।" },
                        connection: ["名詞 + について"],
                        examples: [
                            { jp: "日本の歴史について調べています。", reading: "にほんのれきしについてしらべています。", en: "I am researching about Japanese history." },
                            { jp: "この計画について意見を聞かせてください。", reading: "このけいかくについていけんをきかせてください。", en: "Please tell me your opinion about this plan." },
                            { jp: "先生は環境問題について話した。", reading: "せんせいはかんきょうもんだいについてはなした。", en: "The teacher talked about environmental issues." }
                        ]
                    }
                ]
            },
            {
                id: "reason-emphasis",
                title: "Reason & Emphasis",
                items: [
                    {
                        pattern: "〜によると",
                        meanings: { en: "According to — introduces the source of information (news, someone's word).", bn: "অনুযায়ী — তথ্যের উৎস (খবর, কারো কথা) উপস্থাপন করে।" },
                        connection: ["名詞 + によると、〜そうだ／らしい"],
                        examples: [
                            { jp: "天気予報によると、明日は雨だそうです。", reading: "てんきよほうによると、あしたはあめだそうです。", en: "According to the weather forecast, it will rain tomorrow." },
                            { jp: "ニュースによると、事故があったらしい。", reading: "ニュースによると、じこがあったらしい。", en: "According to the news, there seems to have been an accident." },
                            { jp: "田中さんの話によると、社長は来週出張するそうだ。", reading: "たなかさんのはなしによると、しゃちょうはらいしゅうしゅっちょうするそうだ。", en: "According to Mr. Tanaka, the president will go on a business trip next week." }
                        ]
                    },
                    {
                        pattern: "〜からこそ",
                        meanings: { en: "Precisely because — emphasizes the reason as the true, important one.", bn: "ঠিক এই কারণেই — কারণটিকে প্রকৃত ও গুরুত্বপূর্ণ হিসেবে জোর দেয়।" },
                        connection: ["普通形 + からこそ"],
                        examples: [
                            { jp: "君のことを思うからこそ、厳しく言うんだ。", reading: "きみのことをおもうからこそ、きびしくいうんだ。", en: "It's precisely because I care about you that I speak strictly." },
                            { jp: "失敗したからこそ、成長できた。", reading: "しっぱいしたからこそ、せいちょうできた。", en: "It was precisely because I failed that I was able to grow." },
                            { jp: "努力したからこそ、成功したのだ。", reading: "どりょくしたからこそ、せいこうしたのだ。", en: "It's precisely because I made an effort that I succeeded." }
                        ]
                    },
                    {
                        pattern: "〜からといって",
                        meanings: { en: "Just because... (doesn't mean) — rejects a simple conclusion drawn from a reason.", bn: "শুধু এই কারণে (তার মানে এই নয় যে) — একটি কারণ থেকে সহজ সিদ্ধান্ত নাকচ করে।" },
                        connection: ["普通形 + からといって、〜ない"],
                        examples: [
                            { jp: "安いからといって、質が悪いとは限らない。", reading: "やすいからといって、しつがわるいとはかぎらない。", en: "Just because it's cheap doesn't necessarily mean the quality is bad." },
                            { jp: "日本人だからといって、みんな漢字が得意なわけではない。", reading: "にほんじんだからといって、みんなかんじがとくいなわけではない。", en: "Just because someone is Japanese doesn't mean everyone is good at kanji." },
                            { jp: "忙しいからといって、連絡しないのはよくない。", reading: "いそがしいからといって、れんらくしないのはよくない。", en: "Just because you're busy, it's not good to not contact me." }
                        ]
                    }
                ]
            },
            {
                id: "degree-emphasis",
                title: "Degree & Emphasis",
                items: [
                    {
                        pattern: "〜ば〜ほど",
                        meanings: { en: "The more... the more — as one thing increases, so does another.", bn: "যত বেশি... তত বেশি — একটি জিনিস বাড়লে অন্যটিও বাড়ে।" },
                        connection: ["動詞（ば形）+ 動詞（辞書形）+ ほど", "い形容詞（ければ）+ い形容詞 + ほど"],
                        examples: [
                            { jp: "この本は読めば読むほど面白くなる。", reading: "このほんはよめばよむほどおもしろくなる。", en: "The more I read this book, the more interesting it becomes." },
                            { jp: "野菜は新鮮であればあるほどおいしい。", reading: "やさいはしんせんであればあるほどおいしい。", en: "The fresher the vegetables are, the more delicious they are." },
                            { jp: "練習すればするほど上手になります。", reading: "れんしゅうすればするほどじょうずになります。", en: "The more you practice, the better you get." }
                        ]
                    },
                    {
                        pattern: "〜さえ〜ば",
                        meanings: { en: "If only — expresses that just one condition is enough for something to happen.", bn: "শুধু যদি — কোনো কিছু ঘটার জন্য শুধু একটি শর্তই যথেষ্ট তা প্রকাশ করে।" },
                        connection: ["名詞 + さえ + 動詞（ば形）"],
                        examples: [
                            { jp: "薬さえ飲めば、すぐによくなります。", reading: "くすりさえのめば、すぐによくなります。", en: "If you just take the medicine, you'll get better soon." },
                            { jp: "お金さえあれば、何でも買える。", reading: "おかねさえあれば、なんでもかえる。", en: "If you just have money, you can buy anything." },
                            { jp: "時間さえあれば、旅行に行きたい。", reading: "じかんさえあれば、りょこうにいきたい。", en: "If only I had time, I would want to travel." }
                        ]
                    },
                    {
                        pattern: "〜にすぎない",
                        meanings: { en: "Nothing more than / merely — downplays the significance of something.", bn: "শুধুমাত্র / নেহাতই — কোনো কিছুর গুরুত্ব কমিয়ে বলে।" },
                        connection: ["普通形 + にすぎない"],
                        examples: [
                            { jp: "それはただのうわさにすぎない。", reading: "それはただのうわさにすぎない。", en: "That is nothing more than a rumor." },
                            { jp: "彼はまだ学生にすぎない。", reading: "かれはまだがくせいにすぎない。", en: "He is nothing more than a student still." },
                            { jp: "これは一つの例にすぎません。", reading: "これはひとつのれいにすぎません。", en: "This is merely one example." }
                        ]
                    }
                ]
            },
            {
                id: "gradual-change",
                title: "Gradual Change & Tendency",
                items: [
                    {
                        pattern: "〜つつある",
                        meanings: { en: "Is in the process of — a change that is gradually happening now.", bn: "ধীরে ধীরে ঘটছে — একটি পরিবর্তন যা এখন ধীরে ধীরে ঘটছে।" },
                        connection: ["動詞（ます形語幹）+ つつある"],
                        examples: [
                            { jp: "地球の環境は破壊されつつある。", reading: "ちきゅうのかんきょうははかいされつつある。", en: "The earth's environment is gradually being destroyed." },
                            { jp: "景気は回復しつつある。", reading: "けいきはかいふくしつつある。", en: "The economy is gradually recovering." },
                            { jp: "問題は解決しつつある。", reading: "もんだいはかいけつしつつある。", en: "The problem is gradually being resolved." }
                        ]
                    },
                    {
                        pattern: "〜がちだ",
                        meanings: { en: "Tend to / prone to — a tendency that happens often, usually negative.", bn: "ঝোঁক থাকা / প্রবণ — একটি প্রবণতা যা প্রায়ই ঘটে, সাধারণত নেতিবাচক।" },
                        connection: ["動詞（ます形語幹）+ がちだ", "名詞 + がちだ"],
                        examples: [
                            { jp: "最近、忘れがちだ。", reading: "さいきん、わすれがちだ。", en: "Lately, I tend to forget things." },
                            { jp: "冬は運動不足になりがちです。", reading: "ふゆはうんどうぶそくになりがちです。", en: "In winter, people tend to lack exercise." },
                            { jp: "彼は病気がちで、よく学校を休む。", reading: "かれはびょうきがちで、よくがっこうをやすむ。", en: "He is often sick and frequently misses school." }
                        ]
                    },
                    {
                        pattern: "〜っぽい",
                        meanings: { en: "-ish / seems like — describes a strong impression or tendency of something.", bn: "-এর মতো / মনে হয় — কোনো কিছুর একটি শক্তিশালী ধারণা বা প্রবণতা বর্ণনা করে।" },
                        connection: ["動詞（ます形語幹）+ っぽい", "名詞 + っぽい"],
                        examples: [
                            { jp: "彼は子供っぽい性格です。", reading: "かれはこどもっぽいせいかくです。", en: "He has a childish personality." },
                            { jp: "最近、忘れっぽくなった。", reading: "さいきん、わすれっぽくなった。", en: "Lately, I have become forgetful." },
                            { jp: "この水は白っぽい色をしている。", reading: "このみずはしろっぽいいろをしている。", en: "This water has a whitish color." }
                        ]
                    }
                ]
            },
            {
                id: "moment-timing",
                title: "Moment & Timing",
                items: [
                    {
                        pattern: "〜たとたん(に)",
                        meanings: { en: "The moment... / just as — one thing happens immediately after another.", bn: "ঠিক সেই মুহূর্তে — একটি ঘটনার ঠিক পরপরই আরেকটি ঘটে।" },
                        connection: ["動詞（た形）+ とたん(に)"],
                        examples: [
                            { jp: "家を出たとたん、雨が降ってきた。", reading: "いえをでたとたん、あめがふってきた。", en: "The moment I left the house, it started raining." },
                            { jp: "彼女の顔を見たとたん、名前を思い出した。", reading: "かのじょのかおをみたとたん、なまえをおもいだした。", en: "The moment I saw her face, I remembered her name." },
                            { jp: "電気を消したとたんに、電話が鳴った。", reading: "でんきをけしたとたんに、でんわがなった。", en: "Just as I turned off the light, the phone rang." }
                        ]
                    },
                    {
                        pattern: "〜最中に",
                        reading: "〜さいちゅうに",
                        meanings: { en: "Right in the middle of — an interruption happens while an action is at its peak.", bn: "ঠিক মাঝখানে — একটি কাজ চলাকালীন সময়ে একটি বাধা ঘটে।" },
                        connection: ["動詞（ている形）+ 最中に", "名詞 + の最中に"],
                        examples: [
                            { jp: "会議の最中に、電話がかかってきた。", reading: "かいぎのさいちゅうに、でんわがかかってきた。", en: "Right in the middle of the meeting, a call came in." },
                            { jp: "食事をしている最中に、地震があった。", reading: "しょくじをしているさいちゅうに、じしんがあった。", en: "There was an earthquake right in the middle of our meal." },
                            { jp: "試験の最中に、携帯電話が鳴った。", reading: "しけんのさいちゅうに、けいたいでんわがなった。", en: "A cell phone rang right in the middle of the exam." }
                        ]
                    },
                    {
                        pattern: "〜か〜ないかのうちに",
                        meanings: { en: "As soon as / just before — an action happens almost simultaneously with another.", bn: "যেই না... তখনই — একটি কাজ প্রায় একই সাথে আরেকটির সাথে ঘটে।" },
                        connection: ["動詞（辞書形）+ か + 動詞（ない形）+ ないかのうちに"],
                        examples: [
                            { jp: "ベルが鳴るか鳴らないかのうちに、教室を出た。", reading: "ベルがなるかならないかのうちに、きょうしつをでた。", en: "I left the classroom just as the bell was ringing." },
                            { jp: "彼は座るか座らないかのうちに、寝てしまった。", reading: "かれはすわるかすわらないかのうちに、ねてしまった。", en: "He fell asleep almost the moment he sat down." },
                            { jp: "食べ終わるか終わらないかのうちに、店を出た。", reading: "たべおわるかおわらないかのうちに、みせをでた。", en: "I left the shop almost as soon as I finished eating." }
                        ]
                    }
                ]
            },
            {
                id: "possibility-risk",
                title: "Possibility & Risk",
                items: [
                    {
                        pattern: "〜かねない",
                        meanings: { en: "Might well (happen) — a negative or dangerous possibility.", bn: "হতেই পারে — একটি নেতিবাচক বা বিপজ্জনক সম্ভাবনা।" },
                        connection: ["動詞（ます形語幹）+ かねない"],
                        examples: [
                            { jp: "そんな運転をすると、事故を起こしかねない。", reading: "そんなうんてんをすると、じこをおこしかねない。", en: "If you drive like that, you might well cause an accident." },
                            { jp: "無理をすると、病気になりかねません。", reading: "むりをすると、びょうきになりかねません。", en: "If you overdo it, you might well get sick." },
                            { jp: "彼なら、そんなことも言いかねない。", reading: "かれなら、そんなこともいいかねない。", en: "If it's him, he might well say something like that." }
                        ]
                    },
                    {
                        pattern: "〜かねる",
                        meanings: { en: "Cannot do / find it hard to do — used politely to refuse or express difficulty.", bn: "করতে পারা যায় না / করা কঠিন — ভদ্রভাবে প্রত্যাখ্যান বা অসুবিধা প্রকাশ করতে ব্যবহৃত হয়।" },
                        connection: ["動詞（ます形語幹）+ かねる"],
                        examples: [
                            { jp: "その質問にはお答えしかねます。", reading: "そのしつもんにはおこたえしかねます。", en: "I'm afraid I cannot answer that question." },
                            { jp: "急な変更は承知しかねます。", reading: "きゅうなへんこうはしょうちしかねます。", en: "I'm afraid I cannot agree to such a sudden change." },
                            { jp: "一人では決めかねる問題だ。", reading: "ひとりではきめかねるもんだいだ。", en: "It is a problem I cannot decide alone." }
                        ]
                    },
                    {
                        pattern: "〜恐れがある",
                        reading: "〜おそれがある",
                        meanings: { en: "There is a risk / fear that — a formal warning about a possible bad outcome.", bn: "আশঙ্কা আছে — একটি সম্ভাব্য খারাপ পরিণতি সম্পর্কে আনুষ্ঠানিক সতর্কতা।" },
                        connection: ["動詞（辞書形）+ 恐れがある", "名詞 + の恐れがある"],
                        examples: [
                            { jp: "台風で川が氾濫する恐れがある。", reading: "たいふうでかわがはんらんするおそれがある。", en: "There is a risk that the river will flood due to the typhoon." },
                            { jp: "この薬には副作用の恐れがある。", reading: "このくすりにはふくさようのおそれがある。", en: "There is a risk of side effects with this medicine." },
                            { jp: "地震が再び起こる恐れがある。", reading: "じしんがふたたびおこるおそれがある。", en: "There is a risk that another earthquake will occur." }
                        ]
                    }
                ]
            },
            {
                id: "obligation-necessity-advanced",
                title: "Obligation & Necessity",
                items: [
                    {
                        pattern: "〜べきだ",
                        meanings: { en: "Should / ought to — a strong opinion about what is the right thing to do.", bn: "উচিত — কী করা সঠিক তা নিয়ে একটি শক্তিশালী মতামত।" },
                        connection: ["動詞（辞書形）+ べきだ", "※する → すべきだ／するべきだ"],
                        examples: [
                            { jp: "約束は守るべきだ。", reading: "やくそくはまもるべきだ。", en: "You should keep your promises." },
                            { jp: "もっと勉強すべきです。", reading: "もっとべんきょうすべきです。", en: "You should study more." },
                            { jp: "この問題について、みんなで話し合うべきだ。", reading: "このもんだいについて、みんなではなしあうべきだ。", en: "We should discuss this problem together." }
                        ]
                    },
                    {
                        pattern: "〜ざるを得ない",
                        reading: "〜ざるをえない",
                        meanings: { en: "Have no choice but to — forced into doing something despite not wanting to.", bn: "করা ছাড়া উপায় নেই — চাওয়া না থাকা সত্ত্বেও কিছু করতে বাধ্য হওয়া।" },
                        connection: ["動詞（ない形語幹）+ ざるを得ない", "※する → せざるを得ない"],
                        examples: [
                            { jp: "台風のため、旅行を中止せざるを得なかった。", reading: "たいふうのため、りょこうをちゅうしせざるをえなかった。", en: "Due to the typhoon, we had no choice but to cancel the trip." },
                            { jp: "会社の命令だから、従わざるを得ない。", reading: "かいしゃのめいれいだから、したがわざるをえない。", en: "Since it's an order from the company, I have no choice but to follow it." },
                            { jp: "値段が高くても、買わざるを得ない。", reading: "ねだんがたかくても、かわざるをえない。", en: "Even though it's expensive, I have no choice but to buy it." }
                        ]
                    },
                    {
                        pattern: "〜ないことには",
                        meanings: { en: "Unless / without doing — nothing can happen until this condition is met.", bn: "যদি না... — এই শর্ত পূরণ না হওয়া পর্যন্ত কিছুই ঘটতে পারে না।" },
                        connection: ["動詞（ない形）+ ないことには、〜ない"],
                        examples: [
                            { jp: "実際に見ないことには、判断できない。", reading: "じっさいにみないことには、はんだんできない。", en: "Unless I actually see it, I can't make a judgment." },
                            { jp: "練習しないことには、上手にならない。", reading: "れんしゅうしないことには、じょうずにならない。", en: "Without practicing, you won't get good at it." },
                            { jp: "話を聞かないことには、始まらない。", reading: "はなしをきかないことには、はじまらない。", en: "Unless we hear the story, we can't get started." }
                        ]
                    }
                ]
            },
            {
                id: "manner-comparison",
                title: "Manner & Comparison",
                items: [
                    {
                        pattern: "〜とおりに",
                        meanings: { en: "As / in accordance with — doing something exactly following a model or instruction.", bn: "যেভাবে / অনুযায়ী — একটি মডেল বা নির্দেশ অনুসরণ করে ঠিক সেভাবে কিছু করা।" },
                        connection: ["動詞（辞書形／た形）+ とおりに", "名詞 + のとおりに"],
                        examples: [
                            { jp: "先生が言ったとおりにやってください。", reading: "せんせいがいったとおりにやってください。", en: "Please do it exactly as the teacher said." },
                            { jp: "地図のとおりに歩いたら、駅に着いた。", reading: "ちずのとおりにあるいたら、えきについた。", en: "I walked as the map showed, and arrived at the station." },
                            { jp: "予想したとおりに、試験は難しかった。", reading: "よそうしたとおりに、しけんはむずかしかった。", en: "Just as I predicted, the exam was difficult." }
                        ]
                    },
                    {
                        pattern: "〜かのように",
                        meanings: { en: "As if / as though — describes something that resembles a situation which isn't actually true.", bn: "যেন / যেন মনে হয় — এমন কিছু বর্ণনা করে যা সত্য নয় এমন একটি পরিস্থিতির সাথে সাদৃশ্যপূর্ণ।" },
                        connection: ["普通形 + かのように", "な形容詞／名詞 + であるかのように"],
                        examples: [
                            { jp: "彼はまるで何も知らないかのように話した。", reading: "かれはまるでなにもしらないかのようにはなした。", en: "He spoke as if he knew nothing." },
                            { jp: "彼女は自分が悪くないかのような態度だった。", reading: "かのじょはじぶんがわるくないかのようなたいどだった。", en: "She had an attitude as if she weren't at fault." },
                            { jp: "まるで夢であるかのように感じた。", reading: "まるでゆめであるかのようにかんじた。", en: "It felt as if it were a dream." }
                        ]
                    },
                    {
                        pattern: "〜にしては",
                        meanings: { en: "Considering / for — a result is unexpected given the standard set by something.", bn: "বিবেচনা করে / জন্য — কোনো মানদণ্ডের নিরিখে একটি ফলাফল অপ্রত্যাশিত।" },
                        connection: ["普通形 + にしては", "名詞 + にしては"],
                        examples: [
                            { jp: "彼は初心者にしては上手だ。", reading: "かれはしょしんしゃにしてはじょうずだ。", en: "For a beginner, he's quite good." },
                            { jp: "3月にしては、今日は暖かい。", reading: "さんがつにしては、きょうはあたたかい。", en: "For March, it's warm today." },
                            { jp: "この店は安いにしては、味がいい。", reading: "このみせはやすいにしては、あじがいい。", en: "Considering how cheap this shop is, the taste is good." }
                        ]
                    }
                ]
            },
            {
                id: "extent-range",
                title: "Extent & Range",
                items: [
                    {
                        pattern: "〜を通じて／〜を通して",
                        reading: "〜をつうじて／〜をとおして",
                        meanings: { en: "Through / via — a means, channel, or period through which something happens.", bn: "মাধ্যমে — যে উপায়, মাধ্যম বা সময়ের মধ্য দিয়ে কিছু ঘটে।" },
                        connection: ["名詞 + を通じて／を通して"],
                        examples: [
                            { jp: "友人を通じて、その情報を知った。", reading: "ゆうじんをつうじて、そのじょうほうをしった。", en: "I learned that information through a friend." },
                            { jp: "一年を通して、この地域は暖かい。", reading: "いちねんをとおして、このちいきはあたたかい。", en: "This region is warm throughout the year." },
                            { jp: "インターネットを通じて世界中とつながる。", reading: "インターネットをつうじてせかいじゅうとつながる。", en: "We connect with the whole world through the internet." }
                        ]
                    },
                    {
                        pattern: "〜とともに",
                        meanings: { en: "Together with / as — either accompanying someone, or one change happening as another does.", bn: "সাথে / যেভাবে — কারো সাথে অথবা একটি পরিবর্তনের সাথে সাথে আরেকটি পরিবর্তন ঘটা।" },
                        connection: ["名詞 + とともに", "動詞（辞書形）+ とともに"],
                        examples: [
                            { jp: "家族とともに、新しい町に引っ越した。", reading: "かぞくとともに、あたらしいまちにひっこした。", en: "I moved to a new town together with my family." },
                            { jp: "年をとるとともに、体力が落ちていく。", reading: "としをとるとともに、たいりょくがおちていく。", en: "As one gets older, physical strength declines." },
                            { jp: "技術の発展とともに、生活が便利になった。", reading: "ぎじゅつのはってんとともに、せいかつがべんりになった。", en: "As technology developed, life became more convenient." }
                        ]
                    },
                    {
                        pattern: "〜にわたって",
                        meanings: { en: "Over (a span of) — a range of time, distance, or scope.", bn: "জুড়ে — সময়, দূরত্ব বা পরিসরের একটি ব্যাপ্তি।" },
                        connection: ["名詞 + にわたって"],
                        examples: [
                            { jp: "3年間にわたって、この研究を続けている。", reading: "さんねんかんにわたって、このけんきゅうをつづけている。", en: "I have continued this research over three years." },
                            { jp: "台風の影響は全国にわたって広がった。", reading: "たいふうのえいきょうはぜんこくにわたってひろがった。", en: "The effects of the typhoon spread across the entire country." },
                            { jp: "会議は5時間にわたって行われた。", reading: "かいぎはごじかんにわたっておこなわれた。", en: "The meeting was held over a span of five hours." }
                        ]
                    }
                ]
            },
            {
                id: "completion-degree",
                title: "Completion & Degree",
                items: [
                    {
                        pattern: "〜きる",
                        meanings: { en: "Completely do / do all the way through — finishing an action entirely.", bn: "সম্পূর্ণভাবে করা — একটি কাজ সম্পূর্ণভাবে শেষ করা।" },
                        connection: ["動詞（ます形語幹）+ きる"],
                        examples: [
                            { jp: "マラソンを最後まで走りきった。", reading: "マラソンをさいごまではしりきった。", en: "I ran the marathon all the way to the end." },
                            { jp: "疲れきって、何もできない。", reading: "つかれきって、なにもできない。", en: "I'm completely exhausted and can't do anything." },
                            { jp: "この本を一日で読みきった。", reading: "このほんをいちにちでよみきった。", en: "I read this book completely in one day." }
                        ]
                    },
                    {
                        pattern: "〜ぬく",
                        meanings: { en: "Do something all the way through (despite difficulty) — persevering to the end.", bn: "কষ্ট সত্ত্বেও শেষ পর্যন্ত করা — শেষ পর্যন্ত অধ্যবসায় বজায় রাখা।" },
                        connection: ["動詞（ます形語幹）+ ぬく"],
                        examples: [
                            { jp: "苦しい練習に耐えぬいた。", reading: "くるしいれんしゅうにたえぬいた。", en: "I endured the hard training all the way through." },
                            { jp: "最後まで生きぬくつもりだ。", reading: "さいごまでいきぬくつもりだ。", en: "I intend to live through to the very end." },
                            { jp: "厳しいレースを走りぬいた。", reading: "きびしいレースをはしりぬいた。", en: "I ran through the tough race to the end." }
                        ]
                    },
                    {
                        pattern: "〜かける",
                        meanings: { en: "Be about to / partway through — an action that started but is not yet finished.", bn: "প্রায়... / আংশিকভাবে সম্পন্ন — একটি কাজ যা শুরু হয়েছে কিন্তু এখনো শেষ হয়নি।" },
                        connection: ["動詞（ます形語幹）+ かける"],
                        examples: [
                            { jp: "食べかけのケーキがテーブルにある。", reading: "たべかけのケーキがテーブルにある。", en: "There is a half-eaten cake on the table." },
                            { jp: "言いかけて、やめた。", reading: "いいかけて、やめた。", en: "I started to say something, but stopped." },
                            { jp: "本を読みかけたまま、寝てしまった。", reading: "ほんをよみかけたまま、ねてしまった。", en: "I fell asleep while I was in the middle of reading the book." }
                        ]
                    }
                ]
            },
            {
                id: "strong-feeling-emphasis",
                title: "Strong Feeling & Emphasis",
                items: [
                    {
                        pattern: "〜ずにはいられない",
                        meanings: { en: "Can't help but / can't resist — an emotion or urge too strong to suppress.", bn: "না করে থাকা যায় না — এমন একটি আবেগ বা তাগিদ যা দমন করা যায় না।" },
                        connection: ["動詞（ない形語幹）+ ずにはいられない", "※する → せずにはいられない"],
                        examples: [
                            { jp: "その映画を見て、泣かずにはいられなかった。", reading: "そのえいがをみて、なかずにはいられなかった。", en: "After watching that movie, I couldn't help but cry." },
                            { jp: "おもしろいニュースを聞くと、話さずにはいられない。", reading: "おもしろいニュースをきくと、はなさずにはいられない。", en: "When I hear interesting news, I can't help but talk about it." },
                            { jp: "彼のミスに笑わずにはいられなかった。", reading: "かれのミスにわらわずにはいられなかった。", en: "I couldn't help but laugh at his mistake." }
                        ]
                    },
                    {
                        pattern: "〜ことか",
                        meanings: { en: "How...! — an exclamatory expression of strong emotion.", bn: "কতই না...! — শক্তিশালী আবেগের একটি বিস্ময়সূচক প্রকাশ।" },
                        connection: ["普通形 + ことか", "な形容詞／名詞 + な + ことか"],
                        examples: [
                            { jp: "この景色はなんと美しいことか。", reading: "このけしきはなんとうつくしいことか。", en: "How beautiful this scenery is!" },
                            { jp: "どんなに心配したことか。", reading: "どんなにしんぱいしたことか。", en: "How worried I was!" },
                            { jp: "あの時、どれほど嬉しかったことか。", reading: "あのとき、どれほどうれしかったことか。", en: "How happy I was at that time!" }
                        ]
                    },
                    {
                        pattern: "〜っこない",
                        meanings: { en: "There's no way — a casual, strong denial of a possibility.", bn: "কোনোভাবেই না — একটি সম্ভাবনার একটি সাধারণ, জোরালো অস্বীকৃতি।" },
                        connection: ["動詞（ます形語幹）+ っこない"],
                        examples: [
                            { jp: "そんな高い服、買えっこない。", reading: "そんなたかいふく、かえっこない。", en: "There's no way I can buy such an expensive piece of clothing." },
                            { jp: "一日でこの仕事、終わりっこないよ。", reading: "いちにちでこのしごと、おわりっこないよ。", en: "There's no way this job will be finished in one day." },
                            { jp: "彼が試験に合格するわけっこない、と思っていた。", reading: "かれがしけんにごうかくするわけっこない、とおもっていた。", en: "I thought there was no way he would pass the exam." }
                        ]
                    }
                ]
            },
            {
                id: "reasoning-nuance",
                title: "Reasoning & Nuance",
                items: [
                    {
                        pattern: "〜ものだ",
                        meanings: { en: "It's natural that / used to — either a general truth, or a nostalgic memory of the past.", bn: "স্বাভাবিক যে / আগে করতাম — হয় একটি সাধারণ সত্য, অথবা অতীতের একটি স্মৃতিমূলক স্মৃতি।" },
                        connection: ["普通形 + ものだ", "動詞（た形）+ ものだ（回想）"],
                        examples: [
                            { jp: "子供は外で遊ぶものだ。", reading: "こどもはそとであそぶものだ。", en: "It's natural for children to play outside." },
                            { jp: "若い頃は、よく夜遅くまで勉強したものだ。", reading: "わかいころは、よくよるおそくまでべんきょうしたものだ。", en: "When I was young, I used to study until late at night." },
                            { jp: "時間はあっという間に過ぎるものだ。", reading: "じかんはあっというまにすぎるものだ。", en: "Time really does pass in the blink of an eye." }
                        ]
                    },
                    {
                        pattern: "〜にほかならない",
                        meanings: { en: "Is nothing but / none other than — strongly asserts that something is exactly this and nothing else.", bn: "আর কিছুই নয় / এটাই — জোরালোভাবে দাবি করে যে কিছু ঠিক এটাই, আর কিছু নয়।" },
                        connection: ["名詞 + にほかならない"],
                        examples: [
                            { jp: "彼の成功は努力の結果にほかならない。", reading: "かれのせいこうはどりょくのけっかにほかならない。", en: "His success is nothing but the result of hard work." },
                            { jp: "この事故は不注意が原因にほかならない。", reading: "このじこはふちゅういがげんいんにほかならない。", en: "This accident is caused by nothing other than carelessness." },
                            { jp: "それは愛情の表現にほかならない。", reading: "それはあいじょうのひょうげんにほかならない。", en: "That is nothing other than an expression of love." }
                        ]
                    },
                    {
                        pattern: "〜ばかりに",
                        meanings: { en: "Precisely because / all because — a small cause leads to a serious, often regrettable result.", bn: "শুধু এই কারণেই — একটি ছোট কারণ একটি গুরুতর, প্রায়শই দুঃখজনক পরিণতির দিকে নিয়ে যায়।" },
                        connection: ["普通形 + ばかりに"],
                        examples: [
                            { jp: "急いでいたばかりに、財布を忘れてしまった。", reading: "いそいでいたばかりに、さいふをわすれてしまった。", en: "Precisely because I was in a hurry, I forgot my wallet." },
                            { jp: "一言余計なことを言ったばかりに、喧嘩になった。", reading: "ひとことよけいなことをいったばかりに、けんかになった。", en: "Just because I said one unnecessary thing, it turned into a fight." },
                            { jp: "彼を信じたばかりに、大きな損をした。", reading: "かれをしんじたばかりに、おおきなそんをした。", en: "Just because I trusted him, I suffered a huge loss." }
                        ]
                    }
                ]
            },
            {
                id: "basis-reference",
                title: "Basis & Reference",
                items: [
                    {
                        pattern: "〜において／〜における",
                        meanings: { en: "In / at (formal) — a formal way to indicate a time, place, or situation.", bn: "-এ / -তে (আনুষ্ঠানিক) — সময়, স্থান বা পরিস্থিতি নির্দেশ করার একটি আনুষ্ঠানিক উপায়।" },
                        connection: ["名詞 + において", "名詞 + における + 名詞"],
                        examples: [
                            { jp: "会議は会議室において行われます。", reading: "かいぎはかいぎしつにおいておこなわれます。", en: "The meeting will be held in the conference room." },
                            { jp: "現代社会において、環境問題は重要だ。", reading: "げんだいしゃかいにおいて、かんきょうもんだいはじゅうようだ。", en: "In modern society, environmental issues are important." },
                            { jp: "学校における教育の役割は大きい。", reading: "がっこうにおけるきょういくのやくわりはおおきい。", en: "The role of education in schools is significant." }
                        ]
                    },
                    {
                        pattern: "〜に基づいて",
                        reading: "〜にもとづいて",
                        meanings: { en: "Based on — an action or judgment grounded in something specific.", bn: "এর ভিত্তিতে — কোনো নির্দিষ্ট বিষয়ের উপর ভিত্তি করে কোনো কাজ বা সিদ্ধান্ত।" },
                        connection: ["名詞 + に基づいて"],
                        examples: [
                            { jp: "この映画は実話に基づいている。", reading: "このえいがはじつわにもとづいている。", en: "This movie is based on a true story." },
                            { jp: "データに基づいて計画を立てました。", reading: "データにもとづいてけいかくをたてました。", en: "I made a plan based on the data." },
                            { jp: "規則に基づいて行動してください。", reading: "きそくにもとづいてこうどうしてください。", en: "Please act based on the rules." }
                        ]
                    },
                    {
                        pattern: "〜をもとに",
                        meanings: { en: "Based on / using as a source — building something using existing material as the foundation.", bn: "এর উপর ভিত্তি করে / উৎস হিসেবে ব্যবহার করে — বিদ্যমান উপাদানকে ভিত্তি করে কিছু তৈরি করা।" },
                        connection: ["名詞 + をもとに"],
                        examples: [
                            { jp: "この小説は彼の経験をもとに書かれた。", reading: "このしょうせつはかれのけいけんをもとにかかれた。", en: "This novel was written based on his experience." },
                            { jp: "アンケートの結果をもとに、商品を改良します。", reading: "アンケートのけっかをもとに、しょうひんをかいりょうします。", en: "We will improve the product based on the survey results." },
                            { jp: "古い写真をもとに絵を描いた。", reading: "ふるいしゃしんをもとにえをかいた。", en: "I drew a picture based on an old photo." }
                        ]
                    },
                    {
                        pattern: "〜に応じて",
                        reading: "〜におうじて",
                        meanings: { en: "According to / depending on — an action or amount that changes to match a condition.", bn: "অনুযায়ী / নির্ভর করে — একটি শর্তের সাথে মিল রেখে পরিবর্তিত হওয়া কাজ বা পরিমাণ।" },
                        connection: ["名詞 + に応じて"],
                        examples: [
                            { jp: "収入に応じて税金を払います。", reading: "しゅうにゅうにおうじてぜいきんをはらいます。", en: "I pay taxes according to my income." },
                            { jp: "お客様のニーズに応じてサービスを変えます。", reading: "おきゃくさまのニーズにおうじてサービスをかえます。", en: "We change our service according to the customer's needs." },
                            { jp: "天気に応じて予定を変更しましょう。", reading: "てんきにおうじてよていをへんこうしましょう。", en: "Let's change our plans according to the weather." }
                        ]
                    }
                ]
            },
            {
                id: "condition-supposition",
                title: "Condition & Supposition",
                items: [
                    {
                        pattern: "〜としたら",
                        meanings: { en: "If / supposing that — presents a hypothetical premise to reason from.", bn: "যদি / ধরে নিলে — যুক্তির জন্য একটি অনুমানমূলক ভিত্তি উপস্থাপন করে।" },
                        connection: ["普通形 + としたら"],
                        examples: [
                            { jp: "もし宝くじが当たったとしたら、何をしますか。", reading: "もしたからくじがあたったとしたら、なにをしますか。", en: "If you won the lottery, what would you do?" },
                            { jp: "明日雨が降るとしたら、試合は中止です。", reading: "あしたあめがふるとしたら、しあいはちゅうしです。", en: "If it rains tomorrow, the game will be cancelled." },
                            { jp: "彼の話が本当だとしたら、大変なことになる。", reading: "かれのはなしがほんとうだとしたら、たいへんなことになる。", en: "If his story is true, it will become a serious matter." }
                        ]
                    },
                    {
                        pattern: "〜ない限り",
                        reading: "〜ないかぎり",
                        meanings: { en: "Unless — as long as this negative condition holds, the result won't change.", bn: "যতক্ষণ না — এই নেতিবাচক শর্ত বজায় থাকা পর্যন্ত ফলাফল পরিবর্তন হবে না।" },
                        connection: ["動詞（ない形）+ 限り"],
                        examples: [
                            { jp: "努力しない限り、成功しません。", reading: "どりょくしないかぎり、せいこうしません。", en: "Unless you make an effort, you won't succeed." },
                            { jp: "あなたが謝らない限り、彼は許さないだろう。", reading: "あなたがあやまらないかぎり、かれはゆるさないだろう。", en: "Unless you apologize, he probably won't forgive you." },
                            { jp: "事情が変わらない限り、計画は変更しません。", reading: "じじょうがかわらないかぎり、けいかくはへんこうしません。", en: "Unless circumstances change, we won't change the plan." }
                        ]
                    },
                    {
                        pattern: "〜ものなら",
                        meanings: { en: "If (one) could / were to — a hypothetical about something difficult or risky.", bn: "যদি (কেউ) পারত / করত — কঠিন বা ঝুঁকিপূর্ণ কিছু সম্পর্কে একটি অনুমান।" },
                        connection: ["動詞（可能形）+ ものなら"],
                        examples: [
                            { jp: "帰れるものなら、今すぐ国に帰りたい。", reading: "かえれるものなら、いますぐくににかえりたい。", en: "If I could, I'd want to return to my country right now." },
                            { jp: "できるものなら、彼を助けたい。", reading: "できるものなら、かれをたすけたい。", en: "If I could, I would want to help him." },
                            { jp: "やれるものならやってみろ。", reading: "やれるものならやってみろ。", en: "If you think you can do it, try it." }
                        ]
                    },
                    {
                        pattern: "〜としても",
                        meanings: { en: "Even if — grants a hypothesis but says the conclusion still doesn't change.", bn: "যদিও / এমনকি যদি হয়ও — একটি অনুমান মেনে নিয়েও বলে যে সিদ্ধান্ত পরিবর্তন হয় না।" },
                        connection: ["普通形 + としても"],
                        examples: [
                            { jp: "高いとしても、この時計を買いたい。", reading: "たかいとしても、このとけいをかいたい。", en: "Even if it's expensive, I want to buy this watch." },
                            { jp: "急いだとしても、間に合わないだろう。", reading: "いそいだとしても、まにあわないだろう。", en: "Even if I hurry, I probably won't make it in time." },
                            { jp: "冗談だとしても、あの言い方はひどい。", reading: "じょうだんだとしても、あのいいかたはひどい。", en: "Even if it was a joke, that way of speaking was terrible." }
                        ]
                    }
                ]
            },
            {
                id: "addition-inclusion",
                title: "Addition & Inclusion",
                items: [
                    {
                        pattern: "〜ばかりでなく",
                        meanings: { en: "Not only... but also — adds a further, often more significant point.", bn: "শুধু তাই নয়... বরং — একটি অতিরিক্ত, প্রায়শই বেশি গুরুত্বপূর্ণ বিষয় যোগ করে।" },
                        connection: ["普通形 + ばかりでなく", "名詞 + ばかりでなく"],
                        examples: [
                            { jp: "彼は英語ばかりでなく、フランス語も話せる。", reading: "かれはえいごばかりでなく、フランスごもはなせる。", en: "He can speak not only English but also French." },
                            { jp: "この店は安いばかりでなく、味もいい。", reading: "このみせはやすいばかりでなく、あじもいい。", en: "This restaurant is not only cheap but also tasty." },
                            { jp: "子供ばかりでなく、大人もこのゲームを楽しんでいる。", reading: "こどもばかりでなく、おとなもこのゲームをたのしんでいる。", en: "Not only children but also adults enjoy this game." }
                        ]
                    },
                    {
                        pattern: "〜のみならず",
                        meanings: { en: "Not only... (but also) — a more formal, written equivalent of 〜ばかりでなく.", bn: "শুধু তাই নয়... — 〜ばかりでなく-এর একটি বেশি আনুষ্ঠানিক, লিখিত রূপ।" },
                        connection: ["普通形 + のみならず", "名詞 + のみならず"],
                        examples: [
                            { jp: "彼は仕事のみならず、家庭でも忙しい。", reading: "かれはしごとのみならず、かていでもいそがしい。", en: "He is busy not only at work but also at home." },
                            { jp: "この問題は日本のみならず、世界中で起きている。", reading: "このもんだいはにほんのみならず、せかいじゅうでおきている。", en: "This problem is occurring not only in Japan but around the world." },
                            { jp: "彼女は美しいのみならず、頭もいい。", reading: "かのじょはうつくしいのみならず、あたまもいい。", en: "She is not only beautiful but also smart." }
                        ]
                    },
                    {
                        pattern: "〜はもちろん",
                        meanings: { en: "Not to mention / needless to say — states an obvious case before adding another.", bn: "উল্লেখ না করলেও চলে / স্বাভাবিকভাবেই — একটি স্পষ্ট বিষয় বলার পর আরেকটি যোগ করে।" },
                        connection: ["名詞 + はもちろん"],
                        examples: [
                            { jp: "この店は味はもちろん、値段も安い。", reading: "このみせはあじはもちろん、ねだんもやすい。", en: "This restaurant's taste is great, not to mention its cheap price." },
                            { jp: "平日はもちろん、週末も働いています。", reading: "へいじつはもちろん、しゅうまつもはたらいています。", en: "Not to mention weekdays, I work on weekends too." },
                            { jp: "子供はもちろん、大人にも人気があります。", reading: "こどもはもちろん、おとなにもにんきがあります。", en: "It's popular not only with children but adults too." }
                        ]
                    },
                    {
                        pattern: "〜に加えて",
                        reading: "〜にくわえて",
                        meanings: { en: "In addition to / on top of — adds one more element to what already exists.", bn: "এছাড়াও / এর সাথে যোগ করে — যা ইতিমধ্যে আছে তার সাথে আরেকটি উপাদান যোগ করে।" },
                        connection: ["名詞 + に加えて"],
                        examples: [
                            { jp: "雨に加えて、風も強くなってきた。", reading: "あめにくわえて、かぜもつよくなってきた。", en: "In addition to the rain, the wind has also gotten stronger." },
                            { jp: "英語に加えて、中国語も勉強しています。", reading: "えいごにくわえて、ちゅうごくごもべんきょうしています。", en: "In addition to English, I am also studying Chinese." },
                            { jp: "忙しさに加えて、体調も悪い。", reading: "いそがしさにくわえて、たいちょうもわるい。", en: "On top of being busy, I'm also not feeling well." }
                        ]
                    }
                ]
            },
            {
                id: "limitation-exception",
                title: "Limitation & Exception",
                items: [
                    {
                        pattern: "〜に限って",
                        reading: "〜にかぎって",
                        meanings: { en: "Especially / only when — used ironically to mark an exception, often about bad luck.", bn: "বিশেষত / শুধু যখন — একটি ব্যতিক্রম চিহ্নিত করতে বিদ্রূপাত্মকভাবে ব্যবহৃত হয়, প্রায়ই দুর্ভাগ্য সম্পর্কে।" },
                        connection: ["名詞 + に限って"],
                        examples: [
                            { jp: "傘を忘れた日に限って、雨が降る。", reading: "かさをわすれたひにかぎって、あめがふる。", en: "It rains especially on the day I forget my umbrella." },
                            { jp: "急いでいる時に限って、電車が遅れる。", reading: "いそいでいるときにかぎって、でんしゃがおくれる。", en: "The train is late especially when I'm in a hurry." },
                            { jp: "うちの子に限って、そんなことはしません。", reading: "うちのこにかぎって、そんなことはしません。", en: "My child, of all people, would not do such a thing." }
                        ]
                    },
                    {
                        pattern: "〜を除いて",
                        reading: "〜をのぞいて",
                        meanings: { en: "Except for / excluding — marks one thing that is not included in a general statement.", bn: "ব্যতীত / বাদ দিয়ে — একটি সাধারণ বিবৃতিতে অন্তর্ভুক্ত নয় এমন একটি জিনিস চিহ্নিত করে।" },
                        connection: ["名詞 + を除いて"],
                        examples: [
                            { jp: "日曜日を除いて、毎日開いています。", reading: "にちようびをのぞいて、まいにちひらいています。", en: "It is open every day except Sunday." },
                            { jp: "彼を除いて、全員が参加しました。", reading: "かれをのぞいて、ぜんいんがさんかしました。", en: "Everyone participated except him." },
                            { jp: "この地域を除いて、雪は降らなかった。", reading: "このちいきをのぞいて、ゆきはふらなかった。", en: "It didn't snow anywhere except this area." }
                        ]
                    },
                    {
                        pattern: "〜どころか",
                        meanings: { en: "Far from / let alone — strongly denies something and contrasts it with the opposite reality.", bn: "তো দূরের কথা — জোরালোভাবে কিছু অস্বীকার করে এবং এর বিপরীত বাস্তবতার সাথে তুলনা করে।" },
                        connection: ["普通形 + どころか", "名詞 + どころか"],
                        examples: [
                            { jp: "忙しいどころか、暇で仕方がない。", reading: "いそがしいどころか、ひまでしかたがない。", en: "Far from being busy, I'm bored to death." },
                            { jp: "お礼を言うどころか、文句を言われた。", reading: "おれいをいうどころか、もんくをいわれた。", en: "Far from thanking me, he complained." },
                            { jp: "一万円どころか、百円も持っていない。", reading: "いちまんえんどころか、ひゃくえんももっていない。", en: "Let alone 10,000 yen, I don't even have 100 yen." }
                        ]
                    },
                    {
                        pattern: "〜に限らず",
                        reading: "〜にかぎらず",
                        meanings: { en: "Not limited to — the statement applies more broadly than just this one case.", bn: "শুধু এতেই সীমাবদ্ধ নয় — বিবৃতিটি শুধু এই একটি ক্ষেত্রে নয়, আরও ব্যাপকভাবে প্রযোজ্য।" },
                        connection: ["名詞 + に限らず"],
                        examples: [
                            { jp: "週末に限らず、平日も忙しいです。", reading: "しゅうまつにかぎらず、へいじつもいそがしいです。", en: "I'm busy not just on weekends but on weekdays too." },
                            { jp: "この問題は学生に限らず、社会人にも関係がある。", reading: "このもんだいはがくせいにかぎらず、しゃかいじんにもかんけいがある。", en: "This problem concerns not just students, but working adults too." },
                            { jp: "日本語に限らず、外国語の勉強は難しい。", reading: "にほんごにかぎらず、がいこくごのべんきょうはむずかしい。", en: "Not just Japanese — studying any foreign language is difficult." }
                        ]
                    }
                ]
            },
            {
                id: "sequence-outcome",
                title: "Sequence & Outcome",
                items: [
                    {
                        pattern: "〜あげく（に）",
                        meanings: { en: "After all that / in the end — the (often bad) result after a long process of trouble.", bn: "সব কিছুর পরে / শেষমেশ — দীর্ঘ ঝামেলার পর (প্রায়ই খারাপ) ফলাফল।" },
                        connection: ["動詞（た形）+ あげく（に）", "名詞（の）+ あげく（に）"],
                        examples: [
                            { jp: "さんざん悩んだあげく、会社を辞めることにした。", reading: "さんざんなやんだあげく、かいしゃをやめることにした。", en: "After a lot of agonizing, I decided to quit the company." },
                            { jp: "長い議論のあげく、結論は出なかった。", reading: "ながいぎろんのあげく、けつろんはでなかった。", en: "After a long discussion, no conclusion was reached." },
                            { jp: "彼は借金を重ねたあげく、失踪した。", reading: "かれはしゃっきんをかさねたあげく、しっそうした。", en: "After piling up debt, he disappeared." }
                        ]
                    },
                    {
                        pattern: "〜末に",
                        reading: "〜すえに",
                        meanings: { en: "After (a period of) — a result reached after a long process, more neutral than 〜あげく.", bn: "পরে (একটি সময়কাল) — দীর্ঘ প্রক্রিয়ার পর একটি ফলাফল, 〜あげく-এর চেয়ে বেশি নিরপেক্ষ।" },
                        connection: ["動詞（た形）+ 末に", "名詞（の）+ 末に"],
                        examples: [
                            { jp: "長い検討の末に、決定しました。", reading: "ながいけんとうのすえに、けっていしました。", en: "After long consideration, we made a decision." },
                            { jp: "何年もの努力の末に、夢が叶った。", reading: "なんねんものどりょくのすえに、ゆめがかなった。", en: "After years of effort, the dream came true." },
                            { jp: "悩んだ末に、彼女は転職を決めた。", reading: "なやんだすえに、かのじょはてんしょくをきめた。", en: "After much worrying, she decided to change jobs." }
                        ]
                    },
                    {
                        pattern: "〜次第",
                        reading: "〜しだい",
                        meanings: { en: "As soon as — an action will happen immediately after another; also, depends on.", bn: "যত তাড়াতাড়ি / নির্ভর করে — একটি কাজ অন্যটির পরপরই ঘটবে; এছাড়াও, নির্ভর করে অর্থেও ব্যবহৃত হয়।" },
                        connection: ["動詞（ます形語幹）+ 次第", "名詞 + 次第"],
                        examples: [
                            { jp: "着き次第、電話します。", reading: "つきしだい、でんわします。", en: "I'll call you as soon as I arrive." },
                            { jp: "資料が届き次第、お送りします。", reading: "しりょうがとどきしだい、おおくりします。", en: "I will send it to you as soon as the materials arrive." },
                            { jp: "成功するかどうかは、努力次第です。", reading: "せいこうするかどうかは、どりょくしだいです。", en: "Whether you succeed or not depends on your effort." }
                        ]
                    },
                    {
                        pattern: "〜てからでないと",
                        meanings: { en: "Not until / unless first — one thing must happen before another can proceed.", bn: "প্রথমে না হওয়া পর্যন্ত — একটি কাজ শুরুর আগে অন্য একটি ঘটতে হবে।" },
                        connection: ["動詞（て形）+ からでないと"],
                        examples: [
                            { jp: "全部確認してからでないと、送信できません。", reading: "ぜんぶかくにんしてからでないと、そうしんできません。", en: "You can't send it until you've checked everything." },
                            { jp: "許可を取ってからでないと、入れません。", reading: "きょかをとってからでないと、はいれません。", en: "You can't enter unless you get permission first." },
                            { jp: "準備が終わってからでないと、出発できない。", reading: "じゅんびがおわってからでないと、しゅっぱつできない。", en: "We can't leave until the preparations are finished." }
                        ]
                    }
                ]
            },
            {
                id: "state-continuation",
                title: "State & Continuation",
                items: [
                    {
                        pattern: "〜まま",
                        meanings: { en: "As it is / while remaining — a state continues unchanged while something else happens.", bn: "যেমন আছে তেমনই / অপরিবর্তিত থেকে — একটি অবস্থা অপরিবর্তিত থেকে যায় যখন অন্য কিছু ঘটে।" },
                        connection: ["動詞（た形／ない形）+ まま", "い形容詞 + まま", "な形容詞／名詞 + の + まま"],
                        examples: [
                            { jp: "靴を履いたまま、部屋に入らないでください。", reading: "くつをはいたまま、へやにはいらないでください。", en: "Please don't enter the room with your shoes still on." },
                            { jp: "窓を開けたまま、寝てしまった。", reading: "まどをあけたまま、ねてしまった。", en: "I fell asleep with the window left open." },
                            { jp: "昔のまま、何も変わっていない。", reading: "むかしのまま、なにもかわっていない。", en: "Nothing has changed; it's still the same as before." }
                        ]
                    },
                    {
                        pattern: "〜きり",
                        meanings: { en: "Only / ever since — either an exclusive limit, or a state that hasn't changed since then.", bn: "শুধুমাত্র / তখন থেকেই — হয় একটি একচেটিয়া সীমা, অথবা তখন থেকে পরিবর্তিত হয়নি এমন একটি অবস্থা।" },
                        connection: ["動詞（た形）+ きり", "名詞 + きり"],
                        examples: [
                            { jp: "彼とは一度会ったきりだ。", reading: "かれとはいちどあったきりだ。", en: "I've only met him once." },
                            { jp: "二人きりで話したいことがある。", reading: "ふたりきりではなしたいことがある。", en: "There's something I want to talk about, just the two of us." },
                            { jp: "彼女は出て行ったきり、戻ってこない。", reading: "かのじょはでていったきり、もどってこない。", en: "She left and hasn't come back since." }
                        ]
                    },
                    {
                        pattern: "〜っぱなし",
                        meanings: { en: "Left (in a state) / keep doing — leaving something as-is without stopping or fixing it.", bn: "যেমন আছে তেমনই ফেলে রাখা / করেই যাওয়া — কোনো কিছু না থামিয়ে বা ঠিক না করে সেভাবেই ফেলে রাখা।" },
                        connection: ["動詞（ます形語幹）+ っぱなし"],
                        examples: [
                            { jp: "テレビをつけっぱなしで寝てしまった。", reading: "テレビをつけっぱなしでねてしまった。", en: "I fell asleep with the TV left on." },
                            { jp: "ドアを開けっぱなしにしないでください。", reading: "ドアをあけっぱなしにしないでください。", en: "Please don't leave the door open." },
                            { jp: "一日中立ちっぱなしで疲れた。", reading: "いちにちじゅうたちっぱなしでつかれた。", en: "I was standing all day and got tired." }
                        ]
                    },
                    {
                        pattern: "〜ながら（も）",
                        meanings: { en: "Although / while — a contrast between two things that are true at the same time (concessive).", bn: "যদিও / থাকা সত্ত্বেও — একই সময়ে সত্য দুটি বিষয়ের মধ্যে বৈসাদৃশ্য (ছাড়সূচক)।" },
                        connection: ["動詞（ます形語幹）+ ながら（も）", "い形容詞／な形容詞 + ながら（も）"],
                        examples: [
                            { jp: "貧しいながらも、幸せに暮らしている。", reading: "まずしいながらも、しあわせにくらしている。", en: "Although poor, we live happily." },
                            { jp: "知っていながら、教えてくれなかった。", reading: "しっていながら、おしえてくれなかった。", en: "Although he knew, he didn't tell me." },
                            { jp: "小さいながらも、立派な家だ。", reading: "ちいさいながらも、りっぱないえだ。", en: "Although small, it's a fine house." }
                        ]
                    }
                ]
            },
            {
                id: "cause-consequence",
                title: "Cause & Consequence",
                items: [
                    {
                        pattern: "〜せいで",
                        meanings: { en: "Because of / due to (blame) — attributes a bad result to a cause, often blaming it.", bn: "এর কারণে (দোষারোপ) — একটি খারাপ ফলাফলের জন্য একটি কারণকে দায়ী করে।" },
                        connection: ["普通形 + せいで", "な形容詞／名詞 + の + せいで"],
                        examples: [
                            { jp: "大雨のせいで、電車が止まった。", reading: "おおあめのせいで、でんしゃがとまった。", en: "Because of the heavy rain, the train stopped." },
                            { jp: "寝坊したせいで、遅刻した。", reading: "ねぼうしたせいで、ちこくした。", en: "Because I overslept, I was late." },
                            { jp: "彼のせいで、計画が失敗した。", reading: "かれのせいで、けいかくがしっぱいした。", en: "Because of him, the plan failed." }
                        ]
                    },
                    {
                        pattern: "〜おかげで",
                        meanings: { en: "Thanks to — attributes a good result to a cause, expressing gratitude.", bn: "এর সৌজন্যে / এর ফলে (কৃতজ্ঞতা) — একটি ভালো ফলাফলের জন্য একটি কারণকে দায়ী করে, কৃতজ্ঞতা প্রকাশ করে।" },
                        connection: ["普通形 + おかげで", "な形容詞／名詞 + の + おかげで"],
                        examples: [
                            { jp: "先生のおかげで、試験に合格した。", reading: "せんせいのおかげで、しけんにごうかくした。", en: "Thanks to the teacher, I passed the exam." },
                            { jp: "天気がいいおかげで、気持ちよく散歩できた。", reading: "てんきがいいおかげで、きもちよくさんぽできた。", en: "Thanks to the nice weather, I could take a pleasant walk." },
                            { jp: "あなたが手伝ってくれたおかげで、早く終わった。", reading: "あなたがてつだってくれたおかげで、はやくおわった。", en: "Thanks to your help, we finished early." }
                        ]
                    },
                    {
                        pattern: "〜ことから",
                        meanings: { en: "Judging from the fact that / that's why — a reason inferred from a certain fact.", bn: "এই তথ্য থেকে বিচার করে / সেই কারণেই — একটি নির্দিষ্ট তথ্য থেকে অনুমিত একটি কারণ।" },
                        connection: ["普通形 + ことから"],
                        examples: [
                            { jp: "顔が似ていることから、双子だとわかった。", reading: "かおがにていることから、ふたごだとわかった。", en: "Judging from how similar their faces were, I realized they were twins." },
                            { jp: "この町は温泉があることから、観光地として有名だ。", reading: "このまちはおんせんがあることから、かんこうちとしてゆうめいだ。", en: "Because this town has hot springs, it is famous as a tourist spot." },
                            { jp: "彼が来なかったことから、何かあったのだろう。", reading: "かれがこなかったことから、なにかあったのだろう。", en: "Judging from the fact that he didn't come, something must have happened." }
                        ]
                    },
                    {
                        pattern: "〜あまり",
                        meanings: { en: "Because of too much / to the extent that — an excessive degree leads to an unusual result.", bn: "অতিরিক্ত হওয়ার কারণে — একটি অতিরিক্ত মাত্রা একটি অস্বাভাবিক ফলাফলের দিকে নিয়ে যায়।" },
                        connection: ["動詞（辞書形）+ あまり", "名詞 + の + あまり"],
                        examples: [
                            { jp: "心配のあまり、何も食べられなかった。", reading: "しんぱいのあまり、なにもたべられなかった。", en: "Because I was so worried, I couldn't eat anything." },
                            { jp: "驚きのあまり、声が出なかった。", reading: "おどろきのあまり、こえがでなかった。", en: "I was so surprised that I couldn't make a sound." },
                            { jp: "考えすぎるあまり、決められなくなった。", reading: "かんがえすぎるあまり、きめられなくなった。", en: "Because I thought about it too much, I became unable to decide." }
                        ]
                    }
                ]
            },
            {
                id: "emphasis-focus",
                title: "Emphasis & Focus",
                items: [
                    {
                        pattern: "〜こそ",
                        meanings: { en: "Precisely / it is ... that — strongly emphasizes the word right before it.", bn: "ঠিক এটাই / এটাই সেই — ঠিক আগের শব্দটির উপর জোরালোভাবে গুরুত্ব দেয়।" },
                        connection: ["名詞 + こそ"],
                        examples: [
                            { jp: "今度こそ成功させる。", reading: "こんどこそせいこうさせる。", en: "This time, I will definitely make it succeed." },
                            { jp: "あなたの助けがあったからこそ、成功できた。", reading: "あなたのたすけがあったからこそ、せいこうできた。", en: "It was precisely because of your help that I could succeed." },
                            { jp: "こちらこそ、よろしくお願いします。", reading: "こちらこそ、よろしくおねがいします。", en: "The pleasure is mine; please treat me well too." }
                        ]
                    },
                    {
                        pattern: "〜すら",
                        meanings: { en: "Even — highlights an extreme example to emphasize a point.", bn: "এমনকি — একটি বিষয় জোরদার করতে একটি চরম উদাহরণ তুলে ধরে।" },
                        connection: ["名詞 + すら"],
                        examples: [
                            { jp: "忙しくて、食事する時間すらない。", reading: "いそがしくて、しょくじするじかんすらない。", en: "I'm so busy I don't even have time to eat." },
                            { jp: "子供にすらわかることだ。", reading: "こどもにすらわかることだ。", en: "Even a child can understand this." },
                            { jp: "彼は自分の名前すら書けなかった。", reading: "かれはじぶんのなまえすらかけなかった。", en: "He couldn't even write his own name." }
                        ]
                    },
                    {
                        pattern: "〜だけでなく",
                        meanings: { en: "Not only ... but also — a plain, everyday version of 〜ばかりでなく／〜のみならず.", bn: "শুধু তাই নয়... বরং — 〜ばかりでなく／〜のみならず-এর একটি সাধারণ, দৈনন্দিন রূপ।" },
                        connection: ["普通形 + だけでなく", "名詞 + だけでなく"],
                        examples: [
                            { jp: "このアプリは便利なだけでなく、無料です。", reading: "このアプリはべんりなだけでなく、むりょうです。", en: "This app is not only convenient but also free." },
                            { jp: "私だけでなく、家族もみんな日本が好きです。", reading: "わたしだけでなく、かぞくもみんなにほんがすきです。", en: "Not just me, but my whole family loves Japan." },
                            { jp: "見た目がいいだけでなく、性能もいい。", reading: "みためがいいだけでなく、せいのうもいい。", en: "Not only does it look good, but it performs well too." }
                        ]
                    },
                    {
                        pattern: "〜てまで",
                        meanings: { en: "Even to the extent of doing — implies the action goes too far or is an extreme measure.", bn: "এমনকি এতদূর করেও — কাজটি অতিরিক্ত পর্যায়ে যাওয়া বা একটি চরম পদক্ষেপ বোঝায়।" },
                        connection: ["動詞（て形）+ まで"],
                        examples: [
                            { jp: "借金をしてまで、旅行に行きたくない。", reading: "しゃっきんをしてまで、りょこうにいきたくない。", en: "I don't want to go so far as to take on debt just to travel." },
                            { jp: "嘘をついてまで、彼を守りたいのですか。", reading: "うそをついてまで、かれをまもりたいのですか。", en: "Do you want to protect him even to the extent of lying?" },
                            { jp: "会社を辞めてまで、留学する必要はない。", reading: "かいしゃをやめてまで、りゅうがくするひつようはない。", en: "There's no need to go so far as to quit your job to study abroad." }
                        ]
                    }
                ]
            },
            {
                id: "quotation-hearsay",
                title: "Quotation & Hearsay",
                items: [
                    {
                        pattern: "〜ということだ",
                        meanings: { en: "I heard that / it means that — reports what someone else said, or clarifies a meaning.", bn: "শুনেছি যে / এর মানে হলো — অন্য কেউ যা বলেছে তা প্রতিবেদন করে, অথবা একটি অর্থ স্পষ্ট করে।" },
                        connection: ["普通形 + ということだ"],
                        examples: [
                            { jp: "天気予報によると、明日は晴れるということだ。", reading: "てんきよほうによると、あしたははれるということだ。", en: "According to the weather forecast, I heard it will be sunny tomorrow." },
                            { jp: "彼は来月結婚するということだ。", reading: "かれはらいげつけっこんするということだ。", en: "I heard he is getting married next month." },
                            { jp: "つまり、これはやり直しということだ。", reading: "つまり、これはやりなおしということだ。", en: "In other words, this means starting over." }
                        ]
                    },
                    {
                        pattern: "〜ことになっている",
                        meanings: { en: "It is arranged/decided that — describes a rule, schedule, or custom already fixed.", bn: "এমন সিদ্ধান্ত/নিয়ম করা আছে যে — একটি ইতিমধ্যে নির্ধারিত নিয়ম, সময়সূচি বা রীতি বর্ণনা করে।" },
                        connection: ["動詞（辞書形／ない形）+ ことになっている"],
                        examples: [
                            { jp: "このクラスでは日本語で話すことになっている。", reading: "このクラスではにほんごではなすことになっている。", en: "In this class, it is a rule that we speak in Japanese." },
                            { jp: "会議は九時に始まることになっている。", reading: "かいぎはくじにはじまることになっている。", en: "The meeting is scheduled to start at nine." },
                            { jp: "ここでは靴を脱ぐことになっている。", reading: "ここではくつをぬぐことになっている。", en: "It is the custom to take off your shoes here." }
                        ]
                    },
                    {
                        pattern: "〜というより",
                        meanings: { en: "Rather than saying / more like — corrects a description to a more accurate one.", bn: "বলার চেয়ে বরং / আরও বলা যায় — একটি বর্ণনা সংশোধন করে আরও সঠিক একটি বর্ণনা দেয়।" },
                        connection: ["普通形 + というより"],
                        examples: [
                            { jp: "これは料理というより、実験だ。", reading: "これはりょうりというより、じっけんだ。", en: "This is more like an experiment than cooking." },
                            { jp: "彼は厳しいというより、公平なんだと思う。", reading: "かれはきびしいというより、こうへいなんだとおもう。", en: "I think he's more fair than strict." },
                            { jp: "好きというより、必要なんです。", reading: "すきというより、ひつようなんです。", en: "It's not so much that I like it, more that I need it." }
                        ]
                    },
                    {
                        pattern: "〜とか",
                        meanings: { en: "I heard / or something — a casual way of quoting hearsay, or listing vague examples.", bn: "শুনেছি / বা এরকম কিছু — শোনা কথা উদ্ধৃত করার একটি সাধারণ উপায়, অথবা অস্পষ্ট উদাহরণ তালিকাভুক্ত করা।" },
                        connection: ["普通形 + とか"],
                        examples: [
                            { jp: "田中さん、来月引っ越すとか聞きましたよ。", reading: "たなかさん、らいげつひっこすとかききましたよ。", en: "I heard that Mr. Tanaka is moving next month, or something like that." },
                            { jp: "週末は映画を見るとか、買い物するとかしたいです。", reading: "しゅうまつはえいがをみるとか、かいものするとかしたいです。", en: "On the weekend, I'd like to do things like watch a movie or go shopping." },
                            { jp: "彼は病気だとか言っていました。", reading: "かれはびょうきだとかいっていました。", en: "He said something about being sick." }
                        ]
                    }
                ]
            },
            {
                id: "hedging-judgment",
                title: "Hedging & Judgment",
                items: [
                    {
                        pattern: "〜わけにはいかない",
                        meanings: { en: "Cannot afford to / can't just — a social or moral reason makes an action impossible.", bn: "করা যায় না — একটি সামাজিক বা নৈতিক কারণে কাজটি অসম্ভব হয়ে যায়।" },
                        connection: ["動詞（辞書形／ない形）+ わけにはいかない"],
                        examples: [
                            { jp: "明日は大事な会議があるから、休むわけにはいかない。", reading: "あしたはだいじなかいぎがあるから、やすむわけにはいかない。", en: "I can't afford to take a day off tomorrow because there's an important meeting." },
                            { jp: "約束したから、行かないわけにはいかない。", reading: "やくそくしたから、いかないわけにはいかない。", en: "I promised, so I can't just not go." },
                            { jp: "お金がないので、それを買うわけにはいかない。", reading: "おかねがないので、それをかうわけにはいかない。", en: "I don't have money, so I can't just buy that." }
                        ]
                    },
                    {
                        pattern: "〜ないでもない",
                        meanings: { en: "It's not that... not — a cautious, indirect way of admitting something partially.", bn: "একেবারে না তা নয় — কোনো কিছু আংশিকভাবে স্বীকার করার একটি সতর্ক, পরোক্ষ উপায়।" },
                        connection: ["動詞（ない形）+ でもない"],
                        examples: [
                            { jp: "彼の気持ちもわからないでもない。", reading: "かれのきもちもわからないでもない。", en: "It's not that I don't understand his feelings." },
                            { jp: "時間があれば、行かないでもない。", reading: "じかんがあれば、いかないでもない。", en: "If I had time, it's not that I wouldn't go." },
                            { jp: "少し高いが、買えないでもない。", reading: "すこしたかいが、かえないでもない。", en: "It's a bit expensive, but it's not that I can't buy it." }
                        ]
                    },
                    {
                        pattern: "〜というものだ",
                        meanings: { en: "That's exactly what... is — asserts a general, common-sense conclusion about something.", bn: "এটাই তো... — কোনো কিছু সম্পর্কে একটি সাধারণ, স্বাভাবিক সিদ্ধান্ত দৃঢ়ভাবে বলে।" },
                        connection: ["普通形 + というものだ"],
                        examples: [
                            { jp: "一人で全部やろうとするのは無理というものだ。", reading: "ひとりでぜんぶやろうとするのはむりというものだ。", en: "Trying to do everything alone is simply unreasonable." },
                            { jp: "それでこそ、友達というものだ。", reading: "それでこそ、ともだちというものだ。", en: "That's exactly what a friend is." },
                            { jp: "諦めないのが彼らしいというものだ。", reading: "あきらめないのがかれらしいというものだ。", en: "Not giving up is exactly like him." }
                        ]
                    },
                    {
                        pattern: "〜まい",
                        meanings: { en: "Will not / probably not — a formal expression of negative volition or negative guess.", bn: "করব না / সম্ভবত না — নেতিবাচক ইচ্ছা বা নেতিবাচক অনুমানের একটি আনুষ্ঠানিক প্রকাশ।" },
                        connection: ["動詞（辞書形）+ まい"],
                        examples: [
                            { jp: "もう二度と同じ失敗はするまいと決めた。", reading: "もうにどとおなじしっぱいはするまいときめた。", en: "I decided I would never make the same mistake again." },
                            { jp: "あの店にはもう行くまい。", reading: "あのみせにはもういくまい。", en: "I probably won't go to that shop again." },
                            { jp: "彼は約束を忘れまい。", reading: "かれはやくそくをわすれまい。", en: "He probably won't forget the promise." }
                        ]
                    }
                ]
            },
            {
                id: "target-orientation",
                title: "Target & Orientation",
                items: [
                    {
                        pattern: "〜向けに／〜向けの",
                        reading: "〜むけに／〜むけの",
                        meanings: { en: "Aimed at / for (a target audience) — designed specifically for a certain group.", bn: "এর জন্য লক্ষ্যযুক্ত / উদ্দেশ্যে (একটি নির্দিষ্ট শ্রোতা) — একটি নির্দিষ্ট গোষ্ঠীর জন্য বিশেষভাবে তৈরি।" },
                        connection: ["名詞 + 向けに／向けの + 名詞"],
                        examples: [
                            { jp: "これは初心者向けに書かれた本です。", reading: "これはしょしんしゃむけにかかれたほんです。", en: "This is a book written for beginners." },
                            { jp: "子供向けのアニメが人気です。", reading: "こどもむけのアニメがにんきです。", en: "Anime for children is popular." },
                            { jp: "海外向けに商品を輸出しています。", reading: "かいがいむけにしょうひんをゆしゅつしています。", en: "We export products aimed at overseas markets." }
                        ]
                    },
                    {
                        pattern: "〜向きに／〜向きの",
                        reading: "〜むきに／〜むきの",
                        meanings: { en: "Suited to / facing — naturally appropriate for a purpose, or a physical direction.", bn: "উপযোগী / দিকে মুখ করা — কোনো উদ্দেশ্যের জন্য স্বাভাবিকভাবে উপযুক্ত, অথবা একটি শারীরিক দিক।" },
                        connection: ["名詞 + 向きに／向きの + 名詞"],
                        examples: [
                            { jp: "この仕事は几帳面な人向きだ。", reading: "このしごとはきちょうめんなひとむきだ。", en: "This job is suited to meticulous people." },
                            { jp: "南向きの部屋は明るい。", reading: "みなみむきのへやはあかるい。", en: "South-facing rooms are bright." },
                            { jp: "初心者向きの簡単な本を選びました。", reading: "しょしんしゃむきのかんたんなほんをえらびました。", en: "I chose an easy book suited for beginners." }
                        ]
                    },
                    {
                        pattern: "〜として",
                        meanings: { en: "As (in the capacity of) — states the role or qualification something has.", bn: "হিসেবে (এই ভূমিকায়) — কোনো কিছুর ভূমিকা বা যোগ্যতা বর্ণনা করে।" },
                        connection: ["名詞 + として"],
                        examples: [
                            { jp: "彼は医者として働いています。", reading: "かれはいしゃとしてはたらいています。", en: "He works as a doctor." },
                            { jp: "この作品は代表作として知られている。", reading: "このさくひんはだいひょうさくとしてしられている。", en: "This work is known as his representative piece." },
                            { jp: "友人として、忠告させてください。", reading: "ゆうじんとして、ちゅうこくさせてください。", en: "As a friend, let me give you some advice." }
                        ]
                    },
                    {
                        pattern: "〜をめぐって",
                        meanings: { en: "Regarding / over (a dispute) — marks a topic that people are arguing or discussing about.", bn: "নিয়ে / এই বিষয়ে (বিতর্ক) — একটি বিষয় চিহ্নিত করে যা নিয়ে মানুষ তর্ক বা আলোচনা করছে।" },
                        connection: ["名詞 + をめぐって"],
                        examples: [
                            { jp: "その土地をめぐって、裁判になった。", reading: "そのとちをめぐって、さいばんになった。", en: "A lawsuit arose over that land." },
                            { jp: "新しい法律をめぐって、議論が続いている。", reading: "あたらしいほうりつをめぐって、ぎろんがつづいている。", en: "Discussion continues regarding the new law." },
                            { jp: "遺産をめぐって、兄弟が争っている。", reading: "いさんをめぐって、きょうだいがあらそっている。", en: "The siblings are fighting over the inheritance." }
                        ]
                    }
                ]
            },
            {
                id: "keigo-basics",
                title: "Basic Honorific & Humble Forms",
                items: [
                    {
                        pattern: "〜（ら）れる",
                        meanings: { en: "Respectful passive-form honorific — a simple way to show respect using the passive conjugation.", bn: "সম্মানসূচক প্যাসিভ-রূপ — প্যাসিভ রূপ ব্যবহার করে সম্মান দেখানোর একটি সহজ উপায়।" },
                        connection: ["動詞（受身形）"],
                        examples: [
                            { jp: "社長は何時に来られますか。", reading: "しゃちょうはなんじにこられますか。", en: "What time will the president arrive?" },
                            { jp: "先生はもう帰られました。", reading: "せんせいはもうかえられました。", en: "The teacher has already gone home." },
                            { jp: "この本、読まれましたか。", reading: "このほん、よまれましたか。", en: "Have you read this book?" }
                        ]
                    },
                    {
                        pattern: "お〜になる",
                        meanings: { en: "Honorific pattern — a more polite honorific than the passive form, used for others' actions.", bn: "সম্মানসূচক প্যাটার্ন — অন্যদের কাজের জন্য প্যাসিভ রূপের চেয়ে বেশি ভদ্র সম্মানসূচক রূপ।" },
                        connection: ["お + 動詞（ます形語幹）+ になる"],
                        examples: [
                            { jp: "先生はもうお帰りになりました。", reading: "せんせいはもうおかえりになりました。", en: "The teacher has already gone home." },
                            { jp: "資料はもうお読みになりましたか。", reading: "しりょうはもうおよみになりましたか。", en: "Have you already read the materials?" },
                            { jp: "どうぞお座りになってください。", reading: "どうぞおすわりになってください。", en: "Please have a seat." }
                        ]
                    },
                    {
                        pattern: "お〜する",
                        meanings: { en: "Humble pattern — lowers your own action to show respect toward the listener.", bn: "বিনয়সূচক প্যাটার্ন — শ্রোতার প্রতি সম্মান দেখাতে নিজের কাজকে নত করে।" },
                        connection: ["お + 動詞（ます形語幹）+ する"],
                        examples: [
                            { jp: "荷物をお持ちします。", reading: "にもつをおもちします。", en: "I will carry your luggage." },
                            { jp: "資料はこちらからお送りします。", reading: "しりょうはこちらからおおくりします。", en: "I will send the materials from here." },
                            { jp: "何かあれば、お手伝いします。", reading: "なにかあれば、おてつだいします。", en: "If there's anything, I will help you." }
                        ]
                    },
                    {
                        pattern: "〜させていただく",
                        meanings: { en: "Humbly ask to (do) — politely requests permission to do something, common in business Japanese.", bn: "বিনীতভাবে করার অনুমতি চাওয়া — ব্যবসায়িক জাপানি ভাষায় সাধারণ, বিনয়ের সাথে কিছু করার অনুমতি চায়।" },
                        connection: ["動詞（使役形）+ いただく"],
                        examples: [
                            { jp: "今日はこれで失礼させていただきます。", reading: "きょうはこれでしつれいさせていただきます。", en: "I will humbly take my leave for today." },
                            { jp: "資料を確認させていただきます。", reading: "しりょうをかくにんさせていただきます。", en: "Allow me to check the materials." },
                            { jp: "詳しく説明させていただきます。", reading: "くわしくせつめいさせていただきます。", en: "Allow me to explain in detail." }
                        ]
                    }
                ]
            }
        ]
    },

    n2: { chapters: [] },
    n1: {
        chapters: [
            {
                id: "causal-reason-advanced",
                title: "Advanced Reason & Cause",
                items: [
                    {
                        pattern: "〜ゆえに",
                        meanings: { en: "Because of / due to — a formal, literary way to state a reason, often for a weighty or unfortunate situation.", bn: "কারণে / জন্য — একটি আনুষ্ঠানিক, সাহিত্যিক কারণ প্রকাশের রূপ, প্রায়ই গুরুত্বপূর্ণ বা দুর্ভাগ্যজনক পরিস্থিতির জন্য ব্যবহৃত হয়।" },
                        connection: ["名詞（の）＋ゆえに", "普通形＋（が）ゆえに", "な形容詞＋（である）ゆえに"],
                        examples: [
                            { jp: "彼は貧しい家に生まれたゆえに、若い頃から働かざるを得なかった。", reading: "かれはまずしいいえにうまれたゆえに、わかいころからはたらかざるをえなかった。", en: "Because he was born into a poor family, he had no choice but to work from a young age." },
                            { jp: "若さゆえに、彼は大きな過ちを犯してしまった。", reading: "わかさゆえに、かれはおおきなあやまちをおかしてしまった。", en: "Because of his youth, he made a big mistake." },
                            { jp: "病気ゆえに、彼女は大会への出場を諦めた。", reading: "びょうきゆえに、かのじょはたいかいへのしゅつじょうをあきらめた。", en: "Due to illness, she gave up participating in the competition." }
                        ]
                    },
                    {
                        pattern: "〜とあって",
                        meanings: { en: "Given the special circumstance that / since it is — explains a reason tied to an unusual or notable event.", bn: "এই বিশেষ পরিস্থিতির কারণে — একটি অস্বাভাবিক বা বিশেষ ঘটনার সাথে যুক্ত কারণ ব্যাখ্যা করে।" },
                        connection: ["名詞＋とあって", "普通形＋とあって"],
                        examples: [
                            { jp: "連休とあって、高速道路はどこも混雑している。", reading: "れんきゅうとあって、こうそくどうろはどこもこんざつしている。", en: "Since it's a long holiday, the highways are crowded everywhere." },
                            { jp: "人気歌手のコンサートとあって、会場は若者であふれていた。", reading: "にんきかしゅのコンサートとあって、かいじょうはわかものであふれていた。", en: "Since it was a popular singer's concert, the venue was overflowing with young people." },
                            { jp: "初めての海外旅行とあって、彼女はとても興奮していた。", reading: "はじめてのかいがいりょこうとあって、かのじょはとてもこうふんしていた。", en: "Since it was her first overseas trip, she was very excited." }
                        ]
                    },
                    {
                        pattern: "〜ばこそ",
                        meanings: { en: "Precisely because — strongly emphasizes that the stated reason is the one true, positive reason.", bn: "ঠিক এই কারণেই — বিবৃত কারণটিই একমাত্র সত্য, ইতিবাচক কারণ তা জোরালোভাবে প্রকাশ করে।" },
                        connection: ["動詞・い形容詞（ば形）＋こそ", "な形容詞・名詞＋であればこそ"],
                        examples: [
                            { jp: "あなたのことを思えばこそ、厳しいことを言うのです。", reading: "あなたのことをおもえばこそ、きびしいことをいうのです。", en: "It's precisely because I care about you that I say such harsh things." },
                            { jp: "健康な体があればこそ、仕事にも全力を尽くせる。", reading: "けんこうなからだがあればこそ、しごとにもぜんりょくをつくせる。", en: "It's precisely because I have a healthy body that I can give my full effort at work." },
                            { jp: "困難な時代であればこそ、人々は助け合う。", reading: "こんなんなじだいであればこそ、ひとびとはたすけあう。", en: "It is precisely because these are difficult times that people help each other." }
                        ]
                    }
                ]
            },
            {
                id: "extreme-degree",
                title: "Extreme Degree & Intensity",
                items: [
                    {
                        pattern: "〜の極み",
                        reading: "〜のきわみ",
                        meanings: { en: "The height / extreme of — expresses that something has reached the utmost degree of a feeling or state.", bn: "চূড়ান্ত পর্যায় — কোনো অনুভূতি বা অবস্থা যে চরম মাত্রায় পৌঁছেছে তা প্রকাশ করে।" },
                        connection: ["名詞＋の極み"],
                        examples: [
                            { jp: "こんな豪華な料理をいただけるとは、贅沢の極みです。", reading: "こんなごうかなりょうりをいただけるとは、ぜいたくのきわみです。", en: "Being treated to such a luxurious meal is the height of extravagance." },
                            { jp: "一人で三日も山に取り残されるとは、恐怖の極みだった。", reading: "ひとりでみっかもやまにとりのこされるとは、きょうふのきわみだった。", en: "Being left alone on the mountain for three days was the height of terror." },
                            { jp: "彼の無責任な発言は、非常識の極みだ。", reading: "かれのむせきにんなはつげんは、ひじょうしきのきわみだ。", en: "His irresponsible remark is the height of absurdity." }
                        ]
                    },
                    {
                        pattern: "〜極まる／〜極まりない",
                        reading: "〜きわまる／〜きわまりない",
                        meanings: { en: "Extremely / in the extreme — intensifies a na-adjective to an extreme degree, often with a negative or dramatic nuance.", bn: "চরম মাত্রায় — না-বিশেষণকে চরম পর্যায়ে তীব্র করে, প্রায়ই নেতিবাচক বা নাটকীয় অর্থে।" },
                        connection: ["な形容詞（語幹）＋極まる／極まりない"],
                        examples: [
                            { jp: "彼のマナーのなさは失礼極まりない。", reading: "かれのマナーのなさはしつれいきわまりない。", en: "His lack of manners is extremely rude." },
                            { jp: "危険極まる行動はやめてほしい。", reading: "きけんきわまるこうどうはやめてほしい。", en: "I wish he would stop such extremely dangerous behavior." },
                            { jp: "彼女の態度は傲慢極まりないものだった。", reading: "かのじょのたいどはごうまんきわまりないものだった。", en: "Her attitude was extremely arrogant." }
                        ]
                    },
                    {
                        pattern: "〜といったら",
                        meanings: { en: "To such an extent that... (exclamatory) — expresses strong emotion about the degree of something.", bn: "এমন মাত্রায় যে... (বিস্ময়সূচক) — কোনো কিছুর মাত্রা সম্পর্কে তীব্র অনুভূতি প্রকাশ করে।" },
                        connection: ["名詞＋といったら", "普通形＋といったら"],
                        examples: [
                            { jp: "初めて富士山を見た時の感動といったら、言葉にできないほどだった。", reading: "はじめてふじさんをみたときのかんどうといったら、ことばにできないほどだった。", en: "The emotion I felt when I first saw Mt. Fuji was beyond words." },
                            { jp: "あの日の暑さといったら、本当にひどかった。", reading: "あのひのあつさといったら、ほんとうにひどかった。", en: "The heat that day was just terrible, I can't tell you." },
                            { jp: "彼の喜びようといったら、子供のようだった。", reading: "かれのよろこびようといったら、こどものようだった。", en: "The way he was so delighted — he was just like a child." }
                        ]
                    }
                ]
            },
            {
                id: "concession-advanced",
                title: "Advanced Concession",
                items: [
                    {
                        pattern: "〜とはいえ",
                        meanings: { en: "That said / even though — acknowledges a fact but points out that the expected conclusion doesn't fully follow.", bn: "তা সত্ত্বেও / যদিও তা বলা হলেও — একটি সত্য স্বীকার করে কিন্তু প্রত্যাশিত সিদ্ধান্ত সম্পূর্ণভাবে অনুসরণ করে না তা উল্লেখ করে।" },
                        connection: ["普通形＋とはいえ", "名詞＋とはいえ"],
                        examples: [
                            { jp: "不景気とはいえ、売り上げが伸びている会社もある。", reading: "ふけいきとはいえ、うりあげがのびているかいしゃもある。", en: "Even though it's a recession, there are companies whose sales are growing." },
                            { jp: "子供とはいえ、言ったことには責任を持つべきだ。", reading: "こどもとはいえ、いったことにはせきにんをもつべきだ。", en: "Even though he's a child, he should take responsibility for what he says." },
                            { jp: "春とはいえ、まだ朝晩は寒い。", reading: "はるとはいえ、まだあさばんはさむい。", en: "Even though it's spring, it's still cold in the mornings and evenings." }
                        ]
                    },
                    {
                        pattern: "〜であれ〜であれ",
                        meanings: { en: "Whether A or B — lists contrasting possibilities, all of which lead to the same conclusion.", bn: "A হোক বা B হোক — বিপরীত সম্ভাবনাগুলো তালিকাভুক্ত করে, যেগুলো সবই একই সিদ্ধান্তে পৌঁছায়।" },
                        connection: ["名詞＋であれ＋名詞＋であれ"],
                        examples: [
                            { jp: "晴れであれ雨であれ、試合は予定通り行われる。", reading: "はれであれあめであれ、しあいはよていどおりおこなわれる。", en: "Whether it's sunny or rainy, the match will be held as scheduled." },
                            { jp: "子供であれ大人であれ、ルールは守らなければならない。", reading: "こどもであれおとなであれ、ルールはまもらなければならない。", en: "Whether child or adult, everyone must follow the rules." },
                            { jp: "賛成であれ反対であれ、自分の意見を言うべきだ。", reading: "さんせいであれはんたいであれ、じぶんのいけんをいうべきだ。", en: "Whether you agree or disagree, you should voice your own opinion." }
                        ]
                    },
                    {
                        pattern: "〜もさることながら",
                        meanings: { en: "Not to mention... but also — notes one noteworthy point, while indicating another point is even more significant.", bn: "উল্লেখ না করলেও... কিন্তু আরও বেশি — একটি গুরুত্বপূর্ণ বিষয় উল্লেখ করে, পাশাপাশি আরেকটি বিষয় তার চেয়েও বেশি গুরুত্বপূর্ণ তা নির্দেশ করে।" },
                        connection: ["名詞＋もさることながら"],
                        examples: [
                            { jp: "この店は味もさることながら、店員の対応も素晴らしい。", reading: "このみせはあじもさることながら、てんいんのたいおうもすばらしい。", en: "This restaurant's taste is great, but not to mention, the staff's service is also wonderful." },
                            { jp: "デザインもさることながら、機能性も優れている。", reading: "デザインもさることながら、きのうせいもすぐれている。", en: "Not only is the design great, but the functionality is also excellent." },
                            { jp: "彼女は美しさもさることながら、知性にも優れている。", reading: "かのじょはうつくしさもさることながら、ちせいにもすぐれている。", en: "Not to mention her beauty, she is also highly intelligent." }
                        ]
                    },
                    {
                        pattern: "〜といえども",
                        meanings: { en: "Even though / even if — a formal, written-style concession, often implying \"no matter how great or small\".", bn: "যদিও / এমনকি হলেও — একটি আনুষ্ঠানিক, লিখিত রূপের ছাড়, প্রায়ই 'যতই বড়/ছোট হোক না কেন' এই অর্থ বহন করে।" },
                        connection: ["名詞＋といえども", "普通形＋といえども"],
                        examples: [
                            { jp: "プロの選手といえども、失敗することはある。", reading: "プロのせんしゅといえども、しっぱいすることはある。", en: "Even professional athletes sometimes fail." },
                            { jp: "小さな会社といえども、優れた技術を持っている。", reading: "ちいさなかいしゃといえども、すぐれたぎじゅつをもっている。", en: "Even though it's a small company, it has excellent technology." },
                            { jp: "一国の王といえども、自然の力には勝てない。", reading: "いっこくのおうといえども、しぜんのちからにはかてない。", en: "Even a king of a nation cannot overcome the power of nature." }
                        ]
                    }
                ]
            },
            {
                id: "hypothetical-advanced",
                title: "Advanced Hypothetical & Conditional",
                items: [
                    {
                        pattern: "〜(よ)うが〜まいが",
                        meanings: { en: "Whether or not — states that something will happen or be true regardless of two opposite possibilities.", bn: "হোক বা না হোক — দুটি বিপরীত সম্ভাবনা নির্বিশেষে কিছু ঘটবে বা সত্য হবে তা প্রকাশ করে।" },
                        connection: ["動詞（意向形）＋が＋動詞（まい形）＋が"],
                        examples: [
                            { jp: "君が信じようが信じまいが、これは事実だ。", reading: "きみがしんじようがしんじまいが、これはじじつだ。", en: "Whether you believe it or not, this is a fact." },
                            { jp: "雨が降ろうが降るまいが、イベントは行われる。", reading: "あめがふろうがふるまいが、イベントはおこなわれる。", en: "Whether it rains or not, the event will be held." },
                            { jp: "彼が来ようが来まいが、私には関係ない。", reading: "かれがこようがこまいが、わたしにはかんけいない。", en: "Whether he comes or not, it has nothing to do with me." }
                        ]
                    },
                    {
                        pattern: "〜うものなら",
                        meanings: { en: "If one were to dare (do something) — a hypothetical minor action that would trigger a serious, often negative, consequence.", bn: "যদি কেউ এমনটা করার সাহস করে — একটি কাল্পনিক ক্ষুদ্র কাজ যা একটি গুরুত্বপূর্ণ, প্রায়ই নেতিবাচক, পরিণতি ডেকে আনবে।" },
                        connection: ["動詞（意向形）＋ものなら"],
                        examples: [
                            { jp: "彼の前でその名前を出そうものなら、大変なことになる。", reading: "かれのまえでそのなまえをだそうものなら、たいへんなことになる。", en: "If you were to even mention that name in front of him, it would cause big trouble." },
                            { jp: "少しでも遅刻しようものなら、厳しく注意される。", reading: "すこしでもちこくしようものなら、きびしくちゅういされる。", en: "If I were even a little late, I'd be strictly scolded." },
                            { jp: "一度でも約束を破ろうものなら、二度と信用してもらえない。", reading: "いちどでもやくそくをやぶろうものなら、にどとしんようしてもらえない。", en: "If you were to break your promise even once, you'd never be trusted again." }
                        ]
                    },
                    {
                        pattern: "〜なくして(は)",
                        meanings: { en: "Without — states that without the preceding thing, the following outcome would be impossible.", bn: "ছাড়া — পূর্ববর্তী বিষয়টি ছাড়া পরবর্তী ফলাফল অসম্ভব হবে তা প্রকাশ করে।" },
                        connection: ["名詞＋なくして（は）"],
                        examples: [
                            { jp: "努力なくして、成功はあり得ない。", reading: "どりょくなくして、せいこうはありえない。", en: "Without effort, success is impossible." },
                            { jp: "愛情なくしては、子供は健全に育たない。", reading: "あいじょうなくしては、こどもはけんぜんにそだたない。", en: "Without love, children cannot grow up healthy." },
                            { jp: "信頼関係なくして、良いチームワークは生まれない。", reading: "しんらいかんけいなくして、よいチームワークはうまれない。", en: "Without a relationship of trust, good teamwork cannot be born." }
                        ]
                    }
                ]
            },
            {
                id: "timing-succession",
                title: "Immediate Succession & Timing",
                items: [
                    {
                        pattern: "〜や／〜や否や",
                        reading: "〜や／〜やいなや",
                        meanings: { en: "The moment / as soon as — describes an immediate second action that follows right after the first, with no time gap.", bn: "যে মুহূর্তে / যত দ্রুত — প্রথম কাজের ঠিক পরেই, কোনো সময়ের ব্যবধান ছাড়াই দ্বিতীয় কাজ ঘটে তা বর্ণনা করে।" },
                        connection: ["動詞（辞書形）＋や／や否や"],
                        examples: [
                            { jp: "ベルが鳴るや否や、子供たちは教室を飛び出した。", reading: "ベルがなるやいなや、こどもたちはきょうしつをとびだした。", en: "The moment the bell rang, the children ran out of the classroom." },
                            { jp: "彼は家に着くや、すぐにベッドに倒れ込んだ。", reading: "かれはいえにつくや、すぐにベッドにたおれこんだ。", en: "As soon as he got home, he collapsed onto the bed." },
                            { jp: "そのニュースを聞くや否や、彼女は泣き出した。", reading: "そのニュースをきくやいなや、かのじょはなきだした。", en: "The moment she heard the news, she burst into tears." }
                        ]
                    },
                    {
                        pattern: "〜そばから",
                        meanings: { en: "No sooner... than / right after, repeatedly — an action that undoes or follows another almost immediately, often with frustration.", bn: "করার সাথে সাথেই, বারবার — একটি কাজ আরেকটি কাজের সাথে সাথেই পুনরাবৃত্তি হয় তা বর্ণনা করে, প্রায়ই বিরক্তির সুরে।" },
                        connection: ["動詞（辞書形・た形）＋そばから"],
                        examples: [
                            { jp: "覚えたそばから忘れてしまう。", reading: "おぼえたそばからわすれてしまう。", en: "I forget things as soon as I learn them." },
                            { jp: "片付けるそばから、子供がまた部屋を散らかす。", reading: "かたづけるそばから、こどもがまたへやをちらかす。", en: "No sooner do I tidy up than the child messes up the room again." },
                            { jp: "注意するそばから、同じ間違いを繰り返す。", reading: "ちゅういするそばから、おなじまちがいをくりかえす。", en: "No sooner do I warn him than he repeats the same mistake." }
                        ]
                    },
                    {
                        pattern: "〜が早いか",
                        reading: "〜がはやいか",
                        meanings: { en: "No sooner... than — emphasizes that the second action happened at almost the exact same instant as the first.", bn: "করার সাথে সাথেই — দ্বিতীয় কাজটি প্রথম কাজের প্রায় একই মুহূর্তে ঘটেছে তা জোর দিয়ে বলে।" },
                        connection: ["動詞（辞書形・た形）＋が早いか"],
                        examples: [
                            { jp: "席に着くが早いか、彼は資料を読み始めた。", reading: "せきにつくがはやいか、かれはしりょうをよみはじめた。", en: "No sooner had he sat down than he began reading the documents." },
                            { jp: "合図を聞くが早いか、選手たちは一斉に走り出した。", reading: "あいずをきくがはやいか、せんしゅたちはいっせいにはしりだした。", en: "No sooner did they hear the signal than the athletes all started running at once." },
                            { jp: "ドアが開くが早いか、客が一気に入ってきた。", reading: "ドアがひらくがはやいか、きゃくがいっきにはいってきた。", en: "No sooner had the door opened than the customers all came rushing in." }
                        ]
                    },
                    {
                        pattern: "〜なり",
                        meanings: { en: "As soon as / right after — an action immediately followed by another, often an unexpected or notable one.", bn: "যত দ্রুত / ঠিক পরেই — একটি কাজের ঠিক পরেই আরেকটি কাজ ঘটে তা বর্ণনা করে, প্রায়ই অপ্রত্যাশিত বা উল্লেখযোগ্য।" },
                        connection: ["動詞（辞書形）＋なり"],
                        examples: [
                            { jp: "彼は帰宅するなり、自分の部屋に閉じこもった。", reading: "かれはきたくするなり、じぶんのへやにとじこもった。", en: "As soon as he got home, he shut himself in his room." },
                            { jp: "その話を聞くなり、彼女は顔色を変えた。", reading: "そのはなしをきくなり、かのじょはかおいろをかえた。", en: "As soon as she heard that story, her expression changed." },
                            { jp: "息子は学校から帰るなり、ゲームを始めた。", reading: "むすこはがっこうからかえるなり、ゲームをはじめた。", en: "As soon as my son got home from school, he started playing video games." }
                        ]
                    }
                ]
            },
            {
                id: "situational-context",
                title: "Situational Context",
                items: [
                    {
                        pattern: "〜を皮切りに(して)",
                        reading: "〜をかわきりに(して)",
                        meanings: { en: "Starting with / triggered by — marks the starting point of a series of similar events that follow.", bn: "শুরু হয়ে / দ্বারা সূচিত হয়ে — একটি ধারাবাহিক ঘটনার সূচনা বিন্দু চিহ্নিত করে।" },
                        connection: ["名詞＋を皮切りに（して）"],
                        examples: [
                            { jp: "東京公演を皮切りに、全国ツアーが始まる。", reading: "とうきょうこうえんをかわきりに、ぜんこくツアーがはじまる。", en: "Starting with the Tokyo performance, the nationwide tour will begin." },
                            { jp: "この新製品の発売を皮切りにして、会社は海外進出を目指す。", reading: "このしんせいひんのはつばいをかわきりにして、かいしゃはかいがいしんしゅつをめざす。", en: "Starting with the launch of this new product, the company aims to expand overseas." },
                            { jp: "一人の抗議を皮切りに、多くの市民が声を上げ始めた。", reading: "ひとりのこうぎをかわきりに、おおくのしみんがこえをあげはじめた。", en: "Starting with one person's protest, many citizens began to raise their voices." }
                        ]
                    },
                    {
                        pattern: "〜にあって",
                        meanings: { en: "In the situation / position of — points to a particular, often special or difficult, circumstance as the setting for what follows.", bn: "এই পরিস্থিতি / অবস্থানে — যা অনুসরণ করে তার প্রেক্ষাপট হিসেবে একটি বিশেষ বা কঠিন পরিস্থিতি নির্দেশ করে।" },
                        connection: ["名詞＋にあって"],
                        examples: [
                            { jp: "この困難な時代にあって、私たちは何を大切にすべきか。", reading: "このこんなんなじだいにあって、わたしたちはなにをたいせつにすべきか。", en: "In these difficult times, what should we value?" },
                            { jp: "非常時にあっても、彼は冷静さを失わなかった。", reading: "ひじょうじにあっても、かれはれいせいさをうしなわなかった。", en: "Even in an emergency situation, he did not lose his composure." },
                            { jp: "情報化社会にあって、正しい知識を見極める力が求められる。", reading: "じょうほうかしゃかいにあって、ただしいちしきをみきわめるちからがもとめられる。", en: "In an information society, the ability to discern correct knowledge is required." }
                        ]
                    },
                    {
                        pattern: "〜とあれば",
                        meanings: { en: "If it's the case that / given that — given a particular condition, one is prepared to act decisively.", bn: "যদি এমনটা হয় / এই পরিস্থিতিতে — একটি নির্দিষ্ট শর্ত থাকলে কেউ দৃঢ়ভাবে কাজ করতে প্রস্তুত তা প্রকাশ করে।" },
                        connection: ["名詞＋とあれば", "普通形＋とあれば"],
                        examples: [
                            { jp: "子供のためとあれば、どんな苦労も惜しまない。", reading: "こどものためとあれば、どんなくろうもおしまない。", en: "If it's for my child's sake, I won't spare any effort." },
                            { jp: "社長の命令とあれば、従うしかない。", reading: "しゃちょうのめいれいとあれば、したがうしかない。", en: "If it's an order from the president, there's no choice but to follow it." },
                            { jp: "必要とあれば、いつでもお手伝いします。", reading: "ひつようとあれば、いつでもおてつだいします。", en: "If it's necessary, I'll help anytime." }
                        ]
                    }
                ]
            },
            {
                id: "prohibition-no-need",
                title: "Prohibition & No Need",
                items: [
                    {
                        pattern: "〜べからず",
                        meanings: { en: "Must not — a classical, formal prohibition often seen on written signs and notices.", bn: "করা নিষেধ — একটি শাস্ত্রীয়, আনুষ্ঠানিক নিষেধাজ্ঞা যা প্রায়ই লিখিত সাইনবোর্ড ও নোটিশে দেখা যায়।" },
                        connection: ["動詞（辞書形）＋べからず"],
                        examples: [
                            { jp: "この花を折るべからず。", reading: "このはなをおるべからず。", en: "Do not pick these flowers." },
                            { jp: "初心忘るべからず。", reading: "しょしんわするべからず。", en: "One must not forget one's original resolve." },
                            { jp: "芝生に入るべからず。", reading: "しばふにはいるべからず。", en: "Do not step on the lawn." }
                        ]
                    },
                    {
                        pattern: "〜までもない",
                        meanings: { en: "There's no need to go so far as to — an action, while possible, is unnecessary because the matter is obvious or minor.", bn: "এতটা করার প্রয়োজন নেই — একটি কাজ সম্ভব হলেও তা অপ্রয়োজনীয় কারণ বিষয়টি স্পষ্ট বা ছোট।" },
                        connection: ["動詞（辞書形）＋までもない"],
                        examples: [
                            { jp: "わざわざ説明するまでもなく、誰でも分かることだ。", reading: "わざわざせつめいするまでもなく、だれでもわかることだ。", en: "There's no need to even explain it; anyone can understand." },
                            { jp: "言うまでもなく、健康が一番大切だ。", reading: "いうまでもなく、けんこうがいちばんたいせつだ。", en: "Needless to say, health is the most important thing." },
                            { jp: "確認するまでもなく、彼は正しいとわかっていた。", reading: "かくにんするまでもなく、かれはただしいとわかっていた。", en: "Without even needing to check, I knew he was right." }
                        ]
                    },
                    {
                        pattern: "〜に(は)あたらない",
                        meanings: { en: "It's not warranted to / there's no need to — rejects a reaction such as surprise, praise, or blame as excessive for the situation.", bn: "প্রয়োজন নেই / যুক্তিসঙ্গত নয় — বিস্ময়, প্রশংসা বা দোষের মতো প্রতিক্রিয়াকে পরিস্থিতির জন্য অতিরিক্ত বলে প্রত্যাখ্যান করে।" },
                        connection: ["動詞（辞書形）＋に（は）あたらない", "名詞＋に（は）あたらない"],
                        examples: [
                            { jp: "彼が合格したのは当然で、驚くにはあたらない。", reading: "かれがごうかくしたのはとうぜんで、おどろくにはあたらない。", en: "It's natural that he passed; there's no need to be surprised." },
                            { jp: "彼女の行動は非難するにはあたらない。", reading: "かのじょのこうどうはひなんするにはあたらない。", en: "Her actions don't warrant criticism." },
                            { jp: "これくらいの失敗は、問題にするにはあたらない。", reading: "これくらいのしっぱいは、もんだいにするにはあたらない。", en: "A mistake this small doesn't warrant being made into a problem." }
                        ]
                    }
                ]
            },
            {
                id: "sufficiency-worth",
                title: "Sufficiency & Worth",
                items: [
                    {
                        pattern: "〜に足る／〜に足りない",
                        reading: "〜にたる／〜にたりない",
                        meanings: { en: "Worthy of / sufficient to... (or not) — judges whether something meets a standard high enough to deserve a certain treatment.", bn: "যোগ্য / পর্যাপ্ত (বা নয়) — কোনো কিছু একটি নির্দিষ্ট মানদণ্ড পূরণ করে কিনা তা বিচার করে।" },
                        connection: ["動詞（辞書形）＋に足る／に足りない", "名詞＋に足る／に足りない"],
                        examples: [
                            { jp: "彼は信頼に足る人物だ。", reading: "かれはしんらいにたるじんぶつだ。", en: "He is a person worthy of trust." },
                            { jp: "この計画は実行するに足る根拠がない。", reading: "このけいかくはじっこうするにたるこんきょがない。", en: "This plan lacks sufficient grounds to be carried out." },
                            { jp: "彼の説明は納得するに足りないものだった。", reading: "かれのせつめいはなっとくするにたりないものだった。", en: "His explanation was not convincing enough." }
                        ]
                    },
                    {
                        pattern: "〜にかたくない",
                        meanings: { en: "Easy to (imagine/understand) — something, such as imagining a feeling, requires little effort to do given the situation.", bn: "সহজেই (অনুমান/বোঝা) যায় — পরিস্থিতি বিবেচনায় কোনো কিছু করতে সামান্যই প্রচেষ্টা প্রয়োজন তা বলে।" },
                        connection: ["動詞（辞書形）＋にかたくない"],
                        examples: [
                            { jp: "彼女の悲しみは想像にかたくない。", reading: "かのじょのかなしみはそうぞうにかたくない。", en: "It's easy to imagine her sadness." },
                            { jp: "両親の心配は察するにかたくない。", reading: "りょうしんのしんぱいはさっするにかたくない。", en: "It's not hard to guess how worried the parents are." },
                            { jp: "彼がどれほど努力したか、理解にかたくない。", reading: "かれがどれほどどりょくしたか、りかいにかたくない。", en: "It's easy to understand how much effort he put in." }
                        ]
                    },
                    {
                        pattern: "〜に値する",
                        reading: "〜にあたいする",
                        meanings: { en: "Worth / deserving of — something has enough value or merit to deserve a particular evaluation or action.", bn: "মূল্যবান / যোগ্য — কোনো কিছুর একটি নির্দিষ্ট মূল্যায়ন বা কাজের যোগ্য হওয়ার মতো যথেষ্ট মূল্য বা যোগ্যতা আছে তা বলে।" },
                        connection: ["動詞（辞書形）＋に値する", "名詞＋に値する"],
                        examples: [
                            { jp: "彼の功績は称賛に値する。", reading: "かれのこうせきはしょうさんにあたいする。", en: "His achievements deserve praise." },
                            { jp: "この映画は一度見るに値する。", reading: "このえいがはいちどみるにあたいする。", en: "This movie is worth watching at least once." },
                            { jp: "その提案は検討に値するものだ。", reading: "そのていあんはけんとうにあたいするものだ。", en: "That proposal is worth considering." }
                        ]
                    }
                ]
            },
            {
                id: "limitation-exception-advanced",
                title: "Advanced Limitation & Exception",
                items: [
                    {
                        pattern: "〜をおいて他に〜ない",
                        reading: "〜をおいてほかに〜ない",
                        meanings: { en: "Except for / other than — emphasizes that nothing else could possibly be as suitable as the thing mentioned.", bn: "ছাড়া অন্য কিছু নয় — উল্লেখিত বিষয়টির মতো উপযুক্ত আর কিছু হতে পারে না তা জোর দিয়ে বলে।" },
                        connection: ["名詞＋をおいて他に〜ない"],
                        examples: [
                            { jp: "このチームを率いられるのは、彼をおいて他にいない。", reading: "このチームをひきいられるのは、かれをおいてほかにいない。", en: "There is no one other than him who can lead this team." },
                            { jp: "この仕事を任せられる人は、彼女をおいて他にいないだろう。", reading: "このしごとをまかせられるひとは、かのじょをおいてほかにいないだろう。", en: "There is probably no one other than her to whom this job can be entrusted." },
                            { jp: "日本の美を代表する山は、富士山をおいて他にないだろう。", reading: "にほんのびをだいひょうするやまは、ふじさんをおいてほかにないだろう。", en: "There is probably no mountain other than Mt. Fuji that represents Japan's beauty." }
                        ]
                    },
                    {
                        pattern: "〜ならでは",
                        meanings: { en: "Uniquely possible because of / only possible due to — highlights that something could only happen because of a particular person, place, or thing.", bn: "একমাত্র এর কারণেই সম্ভব — কোনো কিছু বিশেষ এবং একটি নির্দিষ্ট ব্যক্তি, স্থান বা বিষয়ের কারণেই ঘটতে পারে তা তুলে ধরে।" },
                        connection: ["名詞＋ならでは（の＋名詞）"],
                        examples: [
                            { jp: "これは京都ならではの風景だ。", reading: "これはきょうとならではのふうけいだ。", en: "This is a scenery that is only possible in Kyoto." },
                            { jp: "このサービスは、この店ならではのものだ。", reading: "このサービスは、このみせならではのものだ。", en: "This service is something unique to this shop." },
                            { jp: "子供ならではの発想に、大人たちは驚いた。", reading: "こどもならではのはっそうに、おとなたちはおどろいた。", en: "The adults were surprised by an idea that only a child could come up with." }
                        ]
                    },
                    {
                        pattern: "〜にとどまらず",
                        meanings: { en: "Not limited to / extending beyond — the scope or effect of something is wider than just the initial point mentioned.", bn: "সীমাবদ্ধ নয় / বিস্তৃত — কোনো কিছুর পরিসর বা প্রভাব শুধু উল্লেখিত প্রাথমিক বিষয়ের চেয়ে বিস্তৃত তা নির্দেশ করে।" },
                        connection: ["名詞＋にとどまらず"],
                        examples: [
                            { jp: "その影響は日本国内にとどまらず、世界中に広がった。", reading: "そのえいきょうはにほんこくないにとどまらず、せかいじゅうにひろがった。", en: "The effect was not limited to within Japan but spread all over the world." },
                            { jp: "彼の活動は音楽にとどまらず、映画制作にも及んでいる。", reading: "かれのかつどうはおんがくにとどまらず、えいがせいさくにもおよんでいる。", en: "His activities are not limited to music but extend to filmmaking as well." },
                            { jp: "問題は経済面にとどまらず、社会全体に広がっている。", reading: "もんだいはけいざいめんにとどまらず、しゃかいぜんたいにひろがっている。", en: "The problem is not limited to the economic aspect but has spread throughout society." }
                        ]
                    },
                    {
                        pattern: "〜はおろか",
                        meanings: { en: "Let alone / not to mention — presents an extreme example to emphasize that even a lesser case is also not met.", bn: "তো দূরের কথা / উল্লেখই করা যায় না — একটি চরম উদাহরণ উপস্থাপন করে জোর দেয় যে এর চেয়ে কম কিছুও পূরণ হয় না।" },
                        connection: ["名詞＋はおろか"],
                        examples: [
                            { jp: "漢字はおろか、ひらがなも読めない。", reading: "かんじはおろか、ひらがなもよめない。", en: "Let alone kanji, I can't even read hiragana." },
                            { jp: "彼は海外旅行はおろか、国内旅行さえしたことがない。", reading: "かれはかいがいりょこうはおろか、こくないりょこうさえしたことがない。", en: "Let alone traveling abroad, he hasn't even traveled domestically." },
                            { jp: "給料が上がることはおろか、下がる一方だ。", reading: "きゅうりょうがあがることはおろか、さがるいっぽうだ。", en: "Far from rising, my salary just keeps falling." }
                        ]
                    }
                ]
            },
            {
                id: "addition-concurrent-action",
                title: "Addition & Concurrent Action",
                items: [
                    {
                        pattern: "〜はさておき",
                        meanings: { en: "Setting aside / leaving aside — moves on from one topic to focus attention on another, more pressing one.", bn: "একপাশে রেখে / বাদ দিয়ে — একটি বিষয় থেকে সরে এসে আরেকটি, বেশি গুরুত্বপূর্ণ বিষয়ের দিকে মনোযোগ দেয়।" },
                        connection: ["名詞＋はさておき"],
                        examples: [
                            { jp: "冗談はさておき、本題に入りましょう。", reading: "じょうだんはさておき、ほんだいにはいりましょう。", en: "Jokes aside, let's get to the main topic." },
                            { jp: "細かいことはさておき、まずは全体の計画を決めよう。", reading: "こまかいことはさておき、まずはぜんたいのけいかくをきめよう。", en: "Setting aside the details, let's first decide on the overall plan." },
                            { jp: "その話はさておき、今日の会議の目的を確認したい。", reading: "そのはなしはさておき、きょうのかいぎのもくてきをかくにんしたい。", en: "Setting that story aside, I'd like to confirm today's meeting objective." }
                        ]
                    },
                    {
                        pattern: "〜かたがた",
                        meanings: { en: "While also / on the occasion of — a formal expression that one action is done together with another, usually as a greeting or courtesy.", bn: "একই সাথে / উপলক্ষে — একটি আনুষ্ঠানিক প্রকাশভঙ্গি যা একটি কাজ অন্য একটির সাথে একসাথে করা হয়, সাধারণত শুভেচ্ছা বা সৌজন্য হিসেবে।" },
                        connection: ["名詞＋かたがた"],
                        examples: [
                            { jp: "お礼のご挨拶かたがた、お伺いいたしました。", reading: "おれいのごあいさつかたがた、おうかがいいたしました。", en: "I came to visit both to pay my respects and to say thank you." },
                            { jp: "ご報告かたがた、お詫びに参りました。", reading: "ごほうこくかたがた、おわびにまいりました。", en: "I have come both to report and to apologize." },
                            { jp: "お見舞いかたがた、近況を伺いました。", reading: "おみまいかたがた、きんきょうをうかがいました。", en: "I visited to inquire after his health and also to hear how he's been." }
                        ]
                    },
                    {
                        pattern: "〜かたわら",
                        meanings: { en: "While also doing / besides one's main activity — a secondary activity carried out alongside one's main occupation.", bn: "পাশাপাশি করা / মূল কাজের পাশাপাশি — মূল পেশার পাশাপাশি পরিচালিত একটি দ্বিতীয় কার্যক্রম বর্ণনা করে।" },
                        connection: ["動詞（辞書形）＋かたわら", "名詞の＋かたわら"],
                        examples: [
                            { jp: "彼は会社員として働くかたわら、小説を書いている。", reading: "かれはかいしゃいんとしてはたらくかたわら、しょうせつをかいている。", en: "While working as a company employee, he also writes novels." },
                            { jp: "彼女は大学で教えるかたわら、研究も続けている。", reading: "かのじょはだいがくでおしえるかたわら、けんきゅうもつづけている。", en: "While teaching at university, she also continues her research." },
                            { jp: "家業のかたわら、地域活動にも積極的に参加している。", reading: "かぎょうのかたわら、ちいきかつどうにもせっきょくてきにさんかしている。", en: "Alongside the family business, he also actively participates in community activities." }
                        ]
                    },
                    {
                        pattern: "〜がてら",
                        meanings: { en: "While / on the way doing something else — combines a main errand with another convenient activity done at the same time.", bn: "এর ফাঁকে / যাওয়ার পথে — একটি মূল কাজের সাথে একই সময়ে করা আরেকটি সুবিধাজনক কাজকে একত্রিত করে।" },
                        connection: ["動詞（ます形語幹）＋がてら", "名詞＋がてら"],
                        examples: [
                            { jp: "散歩がてら、コンビニに寄った。", reading: "さんぽがてら、コンビニによった。", en: "While out for a walk, I stopped by the convenience store." },
                            { jp: "買い物に行きがてら、友達の家に顔を出した。", reading: "かいものにいきがてら、ともだちのいえにかおをだした。", en: "On the way to go shopping, I dropped by my friend's house." },
                            { jp: "観光がてら、地元のおいしい店を探してみた。", reading: "かんこうがてら、じもとのおいしいみせをさがしてみた。", en: "While sightseeing, I looked for good local restaurants." }
                        ]
                    }
                ]
            },
            {
                id: "manner-state-advanced",
                title: "Advanced Manner & State",
                items: [
                    {
                        pattern: "〜なりに",
                        meanings: { en: "In one's own way / to the extent of — acknowledges one's limitations while showing an appropriate effort within them.", bn: "নিজের মতো করে / যতটুকু সম্ভব — নিজের সীমাবদ্ধতা স্বীকার করে দেখায় যে তার মধ্যেই যথাসাধ্য চেষ্টা করা হয়েছে।" },
                        connection: ["名詞＋なりに"],
                        examples: [
                            { jp: "子供なりに、一生懸命考えて答えを出した。", reading: "こどもなりに、いっしょうけんめいかんがえてこたえをだした。", en: "In his own childlike way, he thought hard and came up with an answer." },
                            { jp: "私なりに最善を尽くしたつもりです。", reading: "わたしなりにさいぜんをつくしたつもりです。", en: "I believe I did my best in my own way." },
                            { jp: "それぞれが自分なりに努力している。", reading: "それぞれがじぶんなりにどりょくしている。", en: "Each person is making an effort in their own way." }
                        ]
                    },
                    {
                        pattern: "〜ながらに(して)",
                        meanings: { en: "In the state of / as being — a certain quality or state has existed continuously since a particular point, such as birth.", bn: "অবস্থায় / থাকা অবস্থায় — জন্মের মতো একটি নির্দিষ্ট সময় থেকে একটি গুণ বা অবস্থা অব্যাহতভাবে বিদ্যমান তা নির্দেশ করে।" },
                        connection: ["名詞＋ながらに（して）"],
                        examples: [
                            { jp: "彼は生まれながらにして、音楽の才能を持っていた。", reading: "かれはうまれながらにして、おんがくのさいのうをもっていた。", en: "He was born with musical talent." },
                            { jp: "彼女は涙ながらに、当時の苦しみを語った。", reading: "かのじょはなみだながらに、とうじのくるしみをかたった。", en: "With tears in her eyes, she spoke of the suffering she experienced at that time." },
                            { jp: "生まれながらの才能だけでは、成功できない。", reading: "うまれながらのさいのうだけでは、せいこうできない。", en: "With innate talent alone, one cannot succeed." }
                        ]
                    },
                    {
                        pattern: "〜とばかりに",
                        meanings: { en: "As if to say / as though — an action performed with such force or clarity that it seems to make an unspoken statement.", bn: "যেন বলার জন্য / যেন — এমন শক্তি বা স্পষ্টতার সাথে একটি কাজ করা হয় যে মনে হয় এটি একটি অকথিত বিবৃতি দিচ্ছে।" },
                        connection: ["引用句＋とばかりに"],
                        examples: [
                            { jp: "彼はこれでいいだろうとばかりに、仕事を終わらせた。", reading: "かれはこれでいいだろうとばかりに、しごとをおわらせた。", en: "As if to say \"this should be fine,\" he finished the job." },
                            { jp: "待っていましたとばかりに、彼女は飛び出してきた。", reading: "まっていましたとばかりに、かのじょはとびだしてきた。", en: "As if she had been waiting for this moment, she came rushing out." },
                            { jp: "チャンスだとばかりに、彼は一気に攻め込んだ。", reading: "チャンスだとばかりに、かれはいっきにせめこんだ。", en: "As if to say \"this is my chance,\" he attacked all at once." }
                        ]
                    },
                    {
                        pattern: "〜まみれ",
                        meanings: { en: "Covered in / smeared with — entirely covered by something dirty, sticky, or unpleasant.", bn: "আবৃত / মাখা — কোনো নোংরা, আঠালো বা অপ্রীতিকর বস্তু দ্বারা সম্পূর্ণভাবে আবৃত থাকা বর্ণনা করে।" },
                        connection: ["名詞＋まみれ"],
                        examples: [
                            { jp: "工事現場で働く彼は、いつも汗まみれだ。", reading: "こうじげんばではたらくかれは、いつもあせまみれだ。", en: "He, who works at the construction site, is always covered in sweat." },
                            { jp: "子供は泥まみれになって遊んでいた。", reading: "こどもはどろまみれになってあそんでいた。", en: "The children were playing, completely covered in mud." },
                            { jp: "あの会社は借金まみれで、倒産寸前だ。", reading: "あのかいしゃはしゃっきんまみれで、とうさんすんぜんだ。", en: "That company is buried in debt and on the verge of bankruptcy." }
                        ]
                    }
                ]
            },
            {
                id: "compulsion-state",
                title: "Compulsion & Saturated State",
                items: [
                    {
                        pattern: "〜ずくめ",
                        meanings: { en: "Full of / nothing but — a situation is filled entirely with one particular kind of thing, often something positive.", bn: "পূর্ণ / শুধু তাই — একটি পরিস্থিতি সম্পূর্ণভাবে একটি নির্দিষ্ট জিনিসে পূর্ণ, প্রায়ই ইতিবাচক কিছু তা প্রকাশ করে।" },
                        connection: ["名詞＋ずくめ"],
                        examples: [
                            { jp: "今年はいいことずくめだった。", reading: "こんねんはいいことずくめだった。", en: "This year was full of good things." },
                            { jp: "彼女はいつも黒ずくめの服を着ている。", reading: "かのじょはいつもくろずくめのふくをきている。", en: "She always wears clothes that are entirely black." },
                            { jp: "結婚、出産、昇進と、今年はめでたいことずくめだ。", reading: "けっこん、しゅっさん、しょうしんと、こんねんはめでたいことずくめだ。", en: "Marriage, childbirth, promotion — this year has been nothing but happy events." }
                        ]
                    },
                    {
                        pattern: "〜ずにはすまない",
                        meanings: { en: "Cannot get away without doing — a certain action is socially or morally unavoidable given the circumstances.", bn: "না করে ছাড় পাওয়া যায় না — পরিস্থিতি বিবেচনায় একটি নির্দিষ্ট কাজ সামাজিক বা নৈতিকভাবে অনিবার্য তা বলে।" },
                        connection: ["動詞（ない形）＋ずにはすまない"],
                        examples: [
                            { jp: "こんな失敗をしたら、上司に報告せずにはすまない。", reading: "こんなしっぱいをしたら、じょうしにほうこくせずにはすまない。", en: "If I make a mistake like this, I can't avoid reporting it to my boss." },
                            { jp: "彼を傷つけてしまった以上、謝らずにはすまない。", reading: "かれをきずつけてしまったいじょう、あやまらずにはすまない。", en: "Since I've hurt him, I can't get away without apologizing." },
                            { jp: "約束を破ったのだから、何か償いをせずにはすまないだろう。", reading: "やくそくをやぶったのだから、なにかつぐないをせずにはすまないだろう。", en: "Since I broke my promise, I probably can't avoid making some kind of amends." }
                        ]
                    },
                    {
                        pattern: "〜を禁じ得ない",
                        reading: "〜をきんじえない",
                        meanings: { en: "Cannot help but feel — describes an emotional reaction, usually negative, that one cannot suppress.", bn: "অনুভূতি দমন করতে পারে না — একটি মানসিক প্রতিক্রিয়া, সাধারণত নেতিবাচক, যা দমন করা যায় না তা বর্ণনা করে।" },
                        connection: ["名詞＋を禁じ得ない"],
                        examples: [
                            { jp: "その悲惨な光景に、涙を禁じ得なかった。", reading: "そのひさんなこうけいに、なみだをきんじえなかった。", en: "I couldn't help but shed tears at that tragic sight." },
                            { jp: "彼の無責任な態度には、怒りを禁じ得ない。", reading: "かれのむせきにんなたいどには、いかりをきんじえない。", en: "I cannot help but feel angry at his irresponsible attitude." },
                            { jp: "被害者たちの話を聞いて、同情を禁じ得なかった。", reading: "ひがいしゃたちのはなしをきいて、どうじょうをきんじえなかった。", en: "Hearing the victims' stories, I couldn't help but feel sympathy." }
                        ]
                    }
                ]
            },
            {
                id: "forced-circumstance",
                title: "Forced Circumstance",
                items: [
                    {
                        pattern: "〜を余儀なくされる",
                        reading: "〜をよぎなくされる",
                        meanings: { en: "Be forced to / have no choice but to — being compelled, by circumstances beyond one's control, to take an unwanted action.", bn: "বাধ্য হওয়া — নিয়ন্ত্রণের বাইরের পরিস্থিতির কারণে একটি অনাকাঙ্ক্ষিত কাজ করতে বাধ্য হওয়া বর্ণনা করে।" },
                        connection: ["名詞＋を余儀なくされる"],
                        examples: [
                            { jp: "大雪のため、イベントは中止を余儀なくされた。", reading: "おおゆきのため、イベントはちゅうしをよぎなくされた。", en: "Due to the heavy snow, the event was forced to be cancelled." },
                            { jp: "会社の経営悪化により、多くの社員が退職を余儀なくされた。", reading: "かいしゃのけいえいあっかにより、おおくのしゃいんがたいしょくをよぎなくされた。", en: "Due to the company's worsening management, many employees were forced to resign." },
                            { jp: "台風の影響で、工事の延期を余儀なくされた。", reading: "たいふうのえいきょうで、こうじのえんきをよぎなくされた。", en: "Due to the typhoon's impact, the construction was forced to be postponed." }
                        ]
                    },
                    {
                        pattern: "〜を強いられる",
                        reading: "〜をしいられる",
                        meanings: { en: "Be compelled / forced to — being forced by another's power or by circumstances to do something against one's will.", bn: "বাধ্য করা হয় — অন্যের ক্ষমতা বা পরিস্থিতির কারণে ইচ্ছার বিরুদ্ধে কিছু করতে বাধ্য করা হয় তা প্রকাশ করে।" },
                        connection: ["名詞＋を強いられる"],
                        examples: [
                            { jp: "戦争によって、多くの人々が避難生活を強いられた。", reading: "せんそうによって、おおくのひとびとがひなんせいかつをしいられた。", en: "Due to the war, many people were forced into life as refugees." },
                            { jp: "厳しい競争の中で、企業は価格の見直しを強いられている。", reading: "きびしいきょうそうのなかで、きぎょうはかかくのみなおしをしいられている。", en: "Amid fierce competition, companies are being forced to review their prices." },
                            { jp: "彼は不利な条件での契約を強いられた。", reading: "かれはふりなじょうけんでのけいやくをしいられた。", en: "He was forced into a contract under unfavorable conditions." }
                        ]
                    },
                    {
                        pattern: "〜ずにはおかない",
                        meanings: { en: "Will definitely (happen/make happen) — something naturally and inevitably brings about a certain effect, often an emotional reaction.", bn: "অবশ্যই ঘটাবে — কোনো কিছু স্বাভাবিকভাবে এবং অনিবার্যভাবে একটি নির্দিষ্ট প্রভাব, প্রায়ই একটি মানসিক প্রতিক্রিয়া, নিয়ে আসে তা বলে।" },
                        connection: ["動詞（ない形）＋ずにはおかない"],
                        examples: [
                            { jp: "彼の演技は観客を感動させずにはおかなかった。", reading: "かれのえんぎはかんきゃくをかんどうさせずにはおかなかった。", en: "His performance was bound to move the audience." },
                            { jp: "この事件は社会に大きな影響を与えずにはおかないだろう。", reading: "このじけんはしゃかいにおおきなえいきょうをあたえずにはおかないだろう。", en: "This incident is bound to have a major impact on society." },
                            { jp: "その美しい景色は人々を驚かせずにはおかない。", reading: "そのうつくしいけしきはひとびとをおどろかせずにはおかない。", en: "That beautiful scenery never fails to amaze people." }
                        ]
                    }
                ]
            },
            {
                id: "quotation-appearance-advanced",
                title: "Advanced Quotation & Appearance",
                items: [
                    {
                        pattern: "〜と言わんばかりに",
                        reading: "〜といわんばかりに",
                        meanings: { en: "As if to say / as though saying — a clear, almost explicit, non-verbal expression of an unspoken thought.", bn: "যেন বলার মতো — একটি স্পষ্ট, প্রায় সুনির্দিষ্ট, অকথিত চিন্তার অ-মৌখিক প্রকাশ বর্ণনা করে।" },
                        connection: ["引用句＋と言わんばかりに"],
                        examples: [
                            { jp: "もう帰れと言わんばかりに、彼は時計を何度も見た。", reading: "もうかえれといわんばかりに、かれはとけいをなんどもみた。", en: "As if to say \"go home already,\" he kept glancing at the clock." },
                            { jp: "それは私の責任ではないと言わんばかりの態度だった。", reading: "それはわたしのせきにんではないといわんばかりのたいどだった。", en: "It was an attitude as if to say \"that's not my responsibility.\"" },
                            { jp: "彼女は信じられないと言わんばかりに目を見開いた。", reading: "かのじょはしんじられないといわんばかりにめをみひらいた。", en: "As if to say \"I can't believe it,\" she opened her eyes wide." }
                        ]
                    },
                    {
                        pattern: "〜と思いきや",
                        reading: "〜とおもいきや",
                        meanings: { en: "Thought that..., but contrary to expectation — an expected outcome turned out to be different from reality.", bn: "ভেবেছিলাম যে..., কিন্তু প্রত্যাশার বিপরীতে — একটি প্রত্যাশিত ফলাফল বাস্তবতা থেকে ভিন্ন হয়েছে তা প্রকাশ করে।" },
                        connection: ["普通形＋と思いきや"],
                        examples: [
                            { jp: "今日は晴れると思いきや、急に雨が降り出した。", reading: "きょうははれるとおもいきや、きゅうにあめがふりだした。", en: "I thought it would be sunny today, but it suddenly started raining." },
                            { jp: "試合は楽勝だと思いきや、思わぬ苦戦を強いられた。", reading: "しあいはらくしょうだとおもいきや、おもわぬくせんをしいられた。", en: "I thought the match would be an easy win, but we were forced into an unexpected hard fight." },
                            { jp: "彼は反対すると思いきや、意外にも賛成してくれた。", reading: "かれははんたいするとおもいきや、いがいにもさんせいしてくれた。", en: "I thought he would oppose it, but surprisingly, he agreed." }
                        ]
                    },
                    {
                        pattern: "〜んばかりに",
                        meanings: { en: "As if about to / almost to the point of — a state or action on the very verge of happening, emphasized through exaggeration.", bn: "যেন ঘটতেই যাচ্ছে / প্রায় সেই পর্যায়ে — একটি অবস্থা বা কাজ যা ঘটার ঠিক প্রান্তে আছে, অতিশয়োক্তির মাধ্যমে জোর দেওয়া হয়।" },
                        connection: ["動詞（ない形）＋んばかりに"],
                        examples: [
                            { jp: "彼女は泣き出さんばかりの顔をしていた。", reading: "かのじょはなきださんばかりのかおをしていた。", en: "She had a face as if she was about to burst into tears." },
                            { jp: "彼は飛び上がらんばかりに驚いた。", reading: "かれはとびあがらんばかりにおどろいた。", en: "He was so surprised he looked as if he was about to jump up." },
                            { jp: "会場は割れんばかりの拍手に包まれた。", reading: "かいじょうはわれんばかりのはくしゅにつつまれた。", en: "The venue was enveloped in applause so loud it seemed as if it would split the place apart." }
                        ]
                    }
                ]
            },
            {
                id: "judgment-evaluation-advanced",
                title: "Advanced Judgment & Evaluation",
                items: [
                    {
                        pattern: "〜に越したことはない",
                        reading: "〜にこしたことはない",
                        meanings: { en: "It's best if / nothing is better than — recommends an ideal course of action while acknowledging it isn't strictly necessary.", bn: "সবচেয়ে ভালো হয় যদি — একটি আদর্শ পথ সুপারিশ করে, যদিও তা কঠোরভাবে প্রয়োজনীয় নয় তা স্বীকার করে।" },
                        connection: ["普通形＋に越したことはない"],
                        examples: [
                            { jp: "お金はたくさんあるに越したことはない。", reading: "おかねはたくさんあるにこしたことはない。", en: "It's best to have as much money as possible." },
                            { jp: "準備は早いに越したことはない。", reading: "じゅんびははやいにこしたことはない。", en: "It's best to prepare as early as possible." },
                            { jp: "健康のためには、無理をしないに越したことはない。", reading: "けんこうのためには、むりをしないにこしたことはない。", en: "For your health, it's best not to overdo it." }
                        ]
                    },
                    {
                        pattern: "〜きらいがある",
                        meanings: { en: "Tend to / have a tendency toward — a recurring negative tendency in someone's behavior or in a general situation.", bn: "প্রবণতা থাকে — কারো আচরণে বা সাধারণ পরিস্থিতিতে একটি পুনরাবৃত্ত নেতিবাচক প্রবণতা নির্দেশ করে।" },
                        connection: ["動詞（辞書形）＋きらいがある", "名詞の＋きらいがある"],
                        examples: [
                            { jp: "彼は物事を大げさに言うきらいがある。", reading: "かれはものごとをおおげさにいうきらいがある。", en: "He has a tendency to exaggerate things." },
                            { jp: "この資料は、データが古いきらいがある。", reading: "このしりょうは、データがふるいきらいがある。", en: "This material has a tendency to use outdated data." },
                            { jp: "若い世代は、すぐに結果を求めるきらいがある。", reading: "わかいせだいは、すぐにけっかをもとめるきらいがある。", en: "The younger generation tends to seek results too quickly." }
                        ]
                    },
                    {
                        pattern: "〜でなくてなんだろう",
                        meanings: { en: "If this isn't X, what is — a rhetorical way of strongly asserting that something is precisely a given thing.", bn: "এটা যদি X না হয়, তাহলে কী — কোনো কিছু ঠিক একটি নির্দিষ্ট বিষয় তা দৃঢ়ভাবে প্রকাশের একটি অলংকারিক উপায়।" },
                        connection: ["名詞＋でなくてなんだろう"],
                        examples: [
                            { jp: "これが愛でなくてなんだろう。", reading: "これがあいでなくてなんだろう。", en: "If this isn't love, what is?" },
                            { jp: "命をかけて人を救う。これが勇気でなくてなんだろう。", reading: "いのちをかけてひとをすくう。これがゆうきでなくてなんだろう。", en: "Risking one's life to save someone — if this isn't courage, what is?" },
                            { jp: "彼の行動は裏切りでなくてなんだろう。", reading: "かれのこうどうはうらぎりでなくてなんだろう。", en: "If his actions aren't betrayal, what are they?" }
                        ]
                    },
                    {
                        pattern: "〜までだ",
                        meanings: { en: "That's all there is to it / simply — a simple, resigned course of action as the natural conclusion, with nothing more to add.", bn: "তাতেই শেষ / কেবল — একটি সহজ, মেনে নেওয়া পথকে স্বাভাবিক সিদ্ধান্ত হিসেবে বলে, যার বেশি কিছু বলার নেই।" },
                        connection: ["動詞（辞書形）＋までだ"],
                        examples: [
                            { jp: "誰も手伝ってくれないなら、一人でやるまでだ。", reading: "だれもてつだってくれないなら、ひとりでやるまでだ。", en: "If no one will help me, then I'll simply do it alone." },
                            { jp: "失敗したら、もう一度挑戦するまでだ。", reading: "しっぱいしたら、もういちどちょうせんするまでだ。", en: "If I fail, I'll simply try again." },
                            { jp: "これでだめなら、諦めるまでのことだ。", reading: "これでだめなら、あきらめるまでのことだ。", en: "If this doesn't work, then I'll simply give up." }
                        ]
                    }
                ]
            },
            {
                id: "will-determination-advanced",
                title: "Advanced Will & Determination",
                items: [
                    {
                        pattern: "〜てやまない",
                        meanings: { en: "Never ceasing to / continually — a formal expression for a strong, ongoing feeling, especially hope or respect, that doesn't fade.", bn: "অবিরাম / ক্রমাগত — একটি দৃঢ়, অব্যাহত অনুভূতি, বিশেষত আশা বা সম্মান, যা কমে না তা প্রকাশের একটি আনুষ্ঠানিক উপায়।" },
                        connection: ["動詞（て形）＋やまない"],
                        examples: [
                            { jp: "皆様のご健康とご活躍を願ってやみません。", reading: "みなさまのごけんこうとごかつやくをねがってやみません。", en: "I sincerely wish, without ceasing, for everyone's health and success." },
                            { jp: "彼女は祖国の平和を愛してやまなかった。", reading: "かのじょはそこくのへいわをあいしてやまなかった。", en: "She never ceased to love the peace of her homeland." },
                            { jp: "先生のご指導に感謝してやみません。", reading: "せんせいのごしどうにかんしゃしてやみません。", en: "I am forever grateful for my teacher's guidance." }
                        ]
                    },
                    {
                        pattern: "〜てはばからない",
                        meanings: { en: "Unhesitatingly / without reservation — saying or doing something boldly, without fear of criticism.", bn: "দ্বিধাহীনভাবে / কোনো সংরক্ষণ ছাড়া — সমালোচনার ভয় ছাড়া সাহসের সাথে কিছু বলা বা করা বর্ণনা করে।" },
                        connection: ["動詞（て形）＋はばからない"],
                        examples: [
                            { jp: "彼は自分が一番優秀だと言ってはばからない。", reading: "かれはじぶんがいちばんゆうしゅうだといってはばからない。", en: "He unhesitatingly says that he himself is the most excellent." },
                            { jp: "社長はこの計画は必ず成功すると言ってはばからなかった。", reading: "しゃちょうはこのけいかくはかならずせいこうするといってはばからなかった。", en: "The president boldly declared that this plan would definitely succeed." },
                            { jp: "彼女は批判を恐れず、自分の意見を主張してはばからない。", reading: "かのじょはひはんをおそれず、じぶんのいけんをしゅちょうしてはばからない。", en: "Without fear of criticism, she boldly asserts her own opinion." }
                        ]
                    },
                    {
                        pattern: "〜まじき",
                        meanings: { en: "Should not / unbefitting of — a formal expression condemning an action as absolutely inappropriate for someone's position.", bn: "করা উচিত নয় / অনুপযুক্ত — একটি আনুষ্ঠানিক প্রকাশভঙ্গি যা একটি কাজকে কারো পদের জন্য সম্পূর্ণভাবে অনুপযুক্ত বলে নিন্দা করে।" },
                        connection: ["動詞（辞書形）＋まじき＋名詞"],
                        examples: [
                            { jp: "それは教師として許すまじき行為だ。", reading: "それはきょうしとしてゆるすまじきこういだ。", en: "That is an act that cannot be forgiven as a teacher." },
                            { jp: "公務員にあるまじき発言に、批判が集まった。", reading: "こうむいんにあるまじきはつげんに、ひはんがあつまった。", en: "Criticism gathered over remarks unbefitting a public servant." },
                            { jp: "これは医者として犯すまじき過ちだ。", reading: "これはいしゃとしておかすまじきあやまちだ。", en: "This is a mistake that a doctor should never make." }
                        ]
                    },
                    {
                        pattern: "〜べくもない",
                        meanings: { en: "There's no way to / impossible to — denies the very possibility of an action, often implying the matter is hopeless.", bn: "কোনো উপায়ই নেই / অসম্ভব — একটি কাজের সম্ভাবনাই অস্বীকার করে, প্রায়ই বিষয়টি নিরাশ তা বোঝায়।" },
                        connection: ["動詞（辞書形）＋べくもない"],
                        examples: [
                            { jp: "当時の記録が残っていないため、真相は知るべくもない。", reading: "とうじのきろくがのこっていないため、しんそうはしるべくもない。", en: "Since no records from that time remain, there's no way to know the truth." },
                            { jp: "一人の力では、この問題を解決するべくもない。", reading: "ひとりのちからでは、このもんだいをかいけつするべくもない。", en: "With just one person's strength, there's no way to solve this problem." },
                            { jp: "彼の実力は、私などが及ぶべくもない。", reading: "かれのじつりょくは、わたしなどがおよぶべくもない。", en: "His ability is something I could never hope to match." }
                        ]
                    }
                ]
            },
            {
                id: "purpose-necessity-advanced",
                title: "Purpose & Necessity",
                items: [
                    {
                        pattern: "〜んがため(に)",
                        meanings: { en: "In order to / for the purpose of — a classical, literary expression of strong purpose or determination.", bn: "উদ্দেশ্যে / জন্য — দৃঢ় উদ্দেশ্য বা সংকল্পের একটি শাস্ত্রীয়, সাহিত্যিক প্রকাশভঙ্গি।" },
                        connection: ["動詞（ない形）＋んがため（に）"],
                        examples: [
                            { jp: "家族を守らんがために、彼は危険を顧みず戦った。", reading: "かぞくをまもらんがために、かれはきけんをかえりみずたたかった。", en: "In order to protect his family, he fought without regard for danger." },
                            { jp: "生きんがために、彼らは厳しい環境の中で働いた。", reading: "いきんがために、かれらはきびしいかんきょうのなかではたらいた。", en: "In order to survive, they worked in harsh conditions." },
                            { jp: "夢を実現せんがために、彼女は全てを捧げた。", reading: "ゆめをじつげんせんがために、かのじょはすべてをささげた。", en: "In order to realize her dream, she dedicated everything." }
                        ]
                    },
                    {
                        pattern: "〜(よ)うにも〜ない",
                        meanings: { en: "Even if one tries to / no matter how one tries, cannot — an action is impossible to carry out even if attempted, due to some obstacle.", bn: "চেষ্টা করলেও পারা যায় না — কোনো বাধার কারণে একটি কাজ চেষ্টা করলেও করা অসম্ভব তা বলে।" },
                        connection: ["動詞（意向形）＋にも＋動詞（可能形のない形）"],
                        examples: [
                            { jp: "電話をかけようにも、電波が届かない。", reading: "でんわをかけようにも、でんぱがとどかない。", en: "Even if I try to make a phone call, there's no signal." },
                            { jp: "逃げようにも、道がふさがっていて逃げられない。", reading: "にげようにも、みちがふさがっていてにげられない。", en: "Even if I try to run away, the road is blocked and I can't." },
                            { jp: "謝ろうにも、彼はもう電話に出てくれない。", reading: "あやまろうにも、かれはもうでんわにでてくれない。", en: "Even if I try to apologize, he won't answer the phone anymore." }
                        ]
                    },
                    {
                        pattern: "〜に(は)及ばない",
                        reading: "〜に(は)およばない",
                        meanings: { en: "Not as good as / no need to — either one thing does not reach the level of another, or an action is unnecessary.", bn: "সমান নয় / প্রয়োজন নেই — একটি বিষয় অন্যটির স্তরে পৌঁছায় না, অথবা একটি কাজ অপ্রয়োজনীয় তা বলে।" },
                        connection: ["名詞＋に（は）及ばない", "動詞（辞書形）＋に（は）及ばない"],
                        examples: [
                            { jp: "彼の実力は、兄に及ばない。", reading: "かれのじつりょくは、あににおよばない。", en: "His ability does not match up to his older brother's." },
                            { jp: "ご心配には及びません。もう大丈夫です。", reading: "ごしんぱいにはおよびません。もうだいじょうぶです。", en: "There's no need to worry. I'm already fine." },
                            { jp: "わざわざお越しいただくには及びません。", reading: "わざわざおこしいただくにはおよびません。", en: "There's no need for you to go out of your way to come." }
                        ]
                    },
                    {
                        pattern: "〜なしに(は)",
                        meanings: { en: "Without — without the stated thing, a certain action cannot be taken or the following outcome won't occur.", bn: "ছাড়া — উল্লেখিত বিষয়টি ছাড়া একটি নির্দিষ্ট কাজ করা যায় না বা পরবর্তী ফলাফল ঘটবে না তা বলে।" },
                        connection: ["名詞＋なしに（は）"],
                        examples: [
                            { jp: "許可なしに、この部屋に入ってはいけない。", reading: "きょかなしに、このへやにはいってはいけない。", en: "You must not enter this room without permission." },
                            { jp: "彼は何の説明もなしに、突然会社を辞めた。", reading: "かれはなんのせつめいもなしに、とつぜんかいしゃをやめた。", en: "Without any explanation at all, he suddenly quit the company." },
                            { jp: "練習なしには、本番でうまく演奏することはできない。", reading: "れんしゅうなしには、ほんばんでうまくえんそうすることはできない。", en: "Without practice, you cannot perform well on the actual day." }
                        ]
                    }
                ]
            },
            {
                id: "similarity-dependency",
                title: "Similarity & Dependency",
                items: [
                    {
                        pattern: "〜ごとし／〜ごとく",
                        meanings: { en: "Like / as if — a classical, literary way to express similarity or resemblance.", bn: "যেন / মতো — সাদৃশ্য প্রকাশের একটি শাস্ত্রীয়, সাহিত্যিক উপায়।" },
                        connection: ["名詞の＋ごとし／ごとく", "動詞（辞書形・た形）＋がごとし／ごとく"],
                        examples: [
                            { jp: "光陰矢のごとし。", reading: "こういんやのごとし。", en: "Time flies like an arrow." },
                            { jp: "彼は何事もなかったかのごとく、平然としていた。", reading: "かれはなにごともなかったかのごとく、へいぜんとしていた。", en: "He remained calm, as if nothing had happened." },
                            { jp: "彼女は水を得た魚のごとく、生き生きと働いていた。", reading: "かのじょはみずをえたうおのごとく、いきいきとはたらいていた。", en: "She worked vibrantly, like a fish that had found water." }
                        ]
                    },
                    {
                        pattern: "〜に(も)ひとしい",
                        meanings: { en: "Equivalent to / tantamount to — something, while not technically identical, is practically the same as the thing mentioned.", bn: "সমতুল্য / তুল্য — কোনো কিছু, প্রযুক্তিগতভাবে অভিন্ন না হলেও, উল্লেখিত বিষয়ের সাথে বাস্তবিকভাবে একই তা বলে।" },
                        connection: ["名詞＋に（も）ひとしい"],
                        examples: [
                            { jp: "彼にとって、この失敗は人生の終わりに等しかった。", reading: "かれにとって、このしっぱいはじんせいのおわりにひとしかった。", en: "For him, this failure was tantamount to the end of his life." },
                            { jp: "その知らせは、彼女にとって死刑宣告にも等しいものだった。", reading: "そのしらせは、かのじょにとってしけいせんこくにもひとしいものだった。", en: "That news was equivalent to a death sentence for her." },
                            { jp: "彼の無関心は、無視に等しい。", reading: "かれのむかんしんは、むしにひとしい。", en: "His indifference is tantamount to ignoring us." }
                        ]
                    },
                    {
                        pattern: "〜いかんで(は)",
                        meanings: { en: "Depending on — the outcome of something will change according to how a particular factor turns out.", bn: "নির্ভর করে — একটি নির্দিষ্ট ফ্যাক্টর কীভাবে হয় তার উপর কোনো কিছুর ফলাফল পরিবর্তিত হবে তা নির্দেশ করে।" },
                        connection: ["名詞（の）＋いかんで（は）"],
                        examples: [
                            { jp: "試験の結果いかんで、進学先が決まる。", reading: "しけんのけっかいかんで、しんがくさきがきまる。", en: "Depending on the exam results, the school you go on to will be decided." },
                            { jp: "天候のいかんでは、イベントが中止になることもある。", reading: "てんこうのいかんでは、イベントがちゅうしになることもある。", en: "Depending on the weather, the event might be cancelled." },
                            { jp: "今後の交渉いかんで、両国の関係は大きく変わるだろう。", reading: "こんごのこうしょういかんで、りょうこくのかんけいはおおきくかわるだろう。", en: "Depending on future negotiations, the relationship between the two countries will likely change greatly." }
                        ]
                    },
                    {
                        pattern: "〜いかんにかかわらず",
                        meanings: { en: "Regardless of — something applies no matter how a particular factor turns out.", bn: "নির্বিশেষে — একটি নির্দিষ্ট ফ্যাক্টর যেভাবেই হোক, কোনো কিছু প্রযোজ্য হয় তা বলে।" },
                        connection: ["名詞（の）＋いかんにかかわらず"],
                        examples: [
                            { jp: "結果のいかんにかかわらず、全力を尽くしたことに意味がある。", reading: "けっかのいかんにかかわらず、ぜんりょくをつくしたことにいみがある。", en: "Regardless of the result, there is meaning in having given one's all." },
                            { jp: "理由のいかんにかかわらず、遅刻は遅刻だ。", reading: "りゆうのいかんにかかわらず、ちこくはちこくだ。", en: "Regardless of the reason, being late is being late." },
                            { jp: "成績のいかんにかかわらず、全員が卒業できる。", reading: "せいせきのいかんにかかわらず、ぜんいんがそつぎょうできる。", en: "Regardless of grades, everyone can graduate." }
                        ]
                    }
                ]
            },
            {
                id: "comparison-contrast-advanced",
                title: "Advanced Comparison & Contrast",
                items: [
                    {
                        pattern: "〜にひきかえ",
                        meanings: { en: "In contrast to / whereas — strongly contrasts two things, usually highlighting a surprising or notable difference.", bn: "তুলনায় / বিপরীতে — দুটি বিষয়ের মধ্যে জোরালো বৈসাদৃশ্য দেখায়, সাধারণত একটি আশ্চর্যজনক পার্থক্য তুলে ধরে।" },
                        connection: ["名詞＋にひきかえ", "普通形＋のにひきかえ"],
                        examples: [
                            { jp: "兄が優秀なのにひきかえ、弟は勉強が苦手だ。", reading: "あにがゆうしゅうなのにひきかえ、おとうとはべんきょうがにがてだ。", en: "In contrast to his excellent older brother, the younger brother is bad at studying." },
                            { jp: "去年の豊作にひきかえ、今年は不作だった。", reading: "きょねんのほうさくにひきかえ、こんねんはふさくだった。", en: "In contrast to last year's bountiful harvest, this year's harvest was poor." },
                            { jp: "彼女の華やかな外見にひきかえ、生活は質素だった。", reading: "かのじょのはなやかながいけんにひきかえ、せいかつはしっそだった。", en: "In contrast to her glamorous appearance, her lifestyle was simple." }
                        ]
                    },
                    {
                        pattern: "〜にもまして",
                        meanings: { en: "Even more than — something exceeds even a standard that was already considered high.", bn: "তার চেয়েও বেশি — কোনো কিছু ইতিমধ্যে উচ্চ বলে বিবেচিত একটি মানকেও ছাড়িয়ে যায় তা নির্দেশ করে।" },
                        connection: ["名詞＋にもまして"],
                        examples: [
                            { jp: "今年は例年にもまして暑い。", reading: "こんねんはれいねんにもましてあつい。", en: "This year is even hotter than usual." },
                            { jp: "彼は何にもまして家族を大切にしている。", reading: "かれはなににもましてかぞくをたいせつにしている。", en: "He values his family more than anything else." },
                            { jp: "以前にもまして、彼女は仕事に熱心になった。", reading: "いぜんにもまして、かのじょはしごとにねっしんになった。", en: "She became even more enthusiastic about her work than before." }
                        ]
                    },
                    {
                        pattern: "〜ときたら",
                        meanings: { en: "When it comes to... (critical tone) — introduces a topic in order to complain about it.", bn: "যখন কথা আসে... (সমালোচনামূলক সুরে) — একটি বিষয় নিয়ে অভিযোগ করার জন্য উপস্থাপন করে।" },
                        connection: ["名詞＋ときたら"],
                        examples: [
                            { jp: "うちの子ときたら、全然勉強しない。", reading: "うちのこときたら、ぜんぜんべんきょうしない。", en: "When it comes to my kid, he doesn't study at all." },
                            { jp: "最近の天気ときたら、本当におかしい。", reading: "さいきんのてんきときたら、ほんとうにおかしい。", en: "When it comes to the weather lately, it's really strange." },
                            { jp: "あの店の店員ときたら、いつも態度が悪い。", reading: "あのみせのてんいんときたら、いつもたいどがわるい。", en: "When it comes to that shop's staff, their attitude is always bad." }
                        ]
                    }
                ]
            },
            {
                id: "circumstance-background",
                title: "Circumstance & Background",
                items: [
                    {
                        pattern: "〜とあいまって",
                        meanings: { en: "Combined with / coupled with — two factors work together to produce a combined effect.", bn: "এর সাথে মিলিত হয়ে — দুটি ফ্যাক্টর একসাথে কাজ করে একটি সম্মিলিত প্রভাব তৈরি করে তা বলে।" },
                        connection: ["名詞＋とあいまって"],
                        examples: [
                            { jp: "美しい景色と涼しい風とあいまって、最高の旅行になった。", reading: "うつくしいけしきとすずしいかぜとあいまって、さいこうのりょこうになった。", en: "Combined with the beautiful scenery and cool breeze, it turned into the best trip." },
                            { jp: "円安は、好景気とあいまって、輸出企業の業績を伸ばした。", reading: "えんやすは、こうけいきとあいまって、ゆしゅつきぎょうのぎょうせきをのばした。", en: "The weak yen, combined with the economic boom, boosted the performance of exporting companies." },
                            { jp: "努力と運とあいまって、彼は見事に成功した。", reading: "どりょくとうんとあいまって、かれはみごとにせいこうした。", en: "Combined with effort and luck, he achieved splendid success." }
                        ]
                    },
                    {
                        pattern: "〜をものともせず(に)",
                        meanings: { en: "Undaunted by / without being deterred by — continuing an action despite a difficult or dangerous obstacle.", bn: "ভয় না পেয়ে / বাধা না মেনে — একটি কঠিন বা বিপজ্জনক বাধা থাকলেও কাজ চালিয়ে যাওয়া বর্ণনা করে।" },
                        connection: ["名詞＋をものともせず（に）"],
                        examples: [
                            { jp: "彼は周囲の反対をものともせず、自分の道を進んだ。", reading: "かれはしゅういのはんたいをものともせず、じぶんのみちをすすんだ。", en: "Undaunted by the opposition around him, he went his own way." },
                            { jp: "彼女は厳しい批判をものともせずに、挑戦を続けた。", reading: "かのじょはきびしいひはんをものともせずに、ちょうせんをつづけた。", en: "Without being deterred by harsh criticism, she continued to take on challenges." },
                            { jp: "選手たちは悪天候をものともせず、試合を続けた。", reading: "せんしゅたちはあくてんこうをものともせず、しあいをつづけた。", en: "The players continued the match, undeterred by the bad weather." }
                        ]
                    },
                    {
                        pattern: "〜をよそに",
                        meanings: { en: "Ignoring / paying no heed to — acting while disregarding others' concerns, warnings, or expectations.", bn: "উপেক্ষা করে / গুরুত্ব না দিয়ে — অন্যদের উদ্বেগ, সতর্কতা বা প্রত্যাশাকে উপেক্ষা করে কাজ করা বর্ণনা করে।" },
                        connection: ["名詞＋をよそに"],
                        examples: [
                            { jp: "親の心配をよそに、彼は一人で海外へ行ってしまった。", reading: "おやのしんぱいをよそに、かれはひとりでかいがいへいってしまった。", en: "Ignoring his parents' worries, he went abroad alone." },
                            { jp: "周囲の反対をよそに、彼女は結婚を決めた。", reading: "しゅういのはんたいをよそに、かのじょはけっこんをきめた。", en: "Paying no heed to the opposition around her, she decided to get married." },
                            { jp: "社会の批判をよそに、その企業は方針を変えなかった。", reading: "しゃかいのひはんをよそに、そのきぎょうはほうしんをかえなかった。", en: "Ignoring society's criticism, the company did not change its policy." }
                        ]
                    },
                    {
                        pattern: "〜にして",
                        meanings: { en: "Only at / precisely at — emphasizes that something was achieved only at a particular, often late or notable, point.", bn: "ঠিক তখনই / মাত্র তখনই — কোনো কিছু একটি নির্দিষ্ট, প্রায়ই দেরিতে বা উল্লেখযোগ্য, সময়ে অর্জিত হয়েছে তা জোর দেয়।" },
                        connection: ["名詞＋にして"],
                        examples: [
                            { jp: "彼は50歳にして、初めて自分の店を持った。", reading: "かれはごじゅっさいにして、はじめてじぶんのみせをもった。", en: "Only at the age of 50 did he finally have his own shop." },
                            { jp: "三度目の挑戦にして、ようやく合格した。", reading: "さんどめのちょうせんにして、ようやくごうかくした。", en: "Only on his third attempt did he finally pass." },
                            { jp: "これは一瞬にして崩れ去った幸せだった。", reading: "これはいっしゅんにしてくずれさったしあわせだった。", en: "This was a happiness that crumbled away in an instant." }
                        ]
                    }
                ]
            },
            {
                id: "result-conclusion-advanced",
                title: "Advanced Result & Conclusion",
                items: [
                    {
                        pattern: "〜に至る",
                        reading: "〜にいたる",
                        meanings: { en: "To reach the point of / to result in — a long process finally reaching a significant, often serious, final stage.", bn: "পর্যায়ে পৌঁছানো / পরিণতি হওয়া — একটি দীর্ঘ প্রক্রিয়া শেষে একটি গুরুত্বপূর্ণ, প্রায়ই গুরুতর, শেষ পর্যায়ে পৌঁছানো বর্ণনা করে।" },
                        connection: ["動詞（辞書形）＋に至る", "名詞＋に至る"],
                        examples: [
                            { jp: "長い交渉の末、両国はようやく合意に至った。", reading: "ながいこうしょうのすえ、りょうこくはようやくごういにいたった。", en: "After long negotiations, the two countries finally reached an agreement." },
                            { jp: "彼女は何度も失敗を重ね、ついに成功に至った。", reading: "かのじょはなんどもしっぱいをかさね、ついにせいこうにいたった。", en: "She repeated failure many times before finally reaching success." },
                            { jp: "小さな誤解が、深刻な対立に至ることもある。", reading: "ちいさなごかいが、しんこくなたいりつにいたることもある。", en: "A small misunderstanding can sometimes result in a serious conflict." }
                        ]
                    },
                    {
                        pattern: "〜に至って(は)",
                        reading: "〜にいたって(は)",
                        meanings: { en: "Even when it reached the point of / as for the matter once it got to — an extreme final stage, often with a sense of exasperation.", bn: "যখন পর্যায়ে পৌঁছাল তখনও / যখন তা হলো — একটি চরম শেষ পর্যায় জোর দিয়ে বলে, প্রায়ই বিরক্তির অনুভূতি সহ।" },
                        connection: ["動詞（辞書形）＋に至って（は）", "名詞＋に至って（は）"],
                        examples: [
                            { jp: "病気が悪化するに至って、彼はやっと病院に行った。", reading: "びょうきがあっかするにいたって、かれはやっとびょういんにいった。", en: "Only when his illness got worse did he finally go to the hospital." },
                            { jp: "この問題に至っては、もう手の打ちようがない。", reading: "このもんだいにいたっては、もうてのうちようがない。", en: "As for this problem, having reached this point, there's nothing more that can be done." },
                            { jp: "会社が倒産するに至っては、誰もが驚いた。", reading: "かいしゃがとうさんするにいたっては、だれもがおどろいた。", en: "When it got to the point of the company going bankrupt, everyone was shocked." }
                        ]
                    },
                    {
                        pattern: "〜たところで",
                        meanings: { en: "Even if / no matter how much — even performing an action would not lead to a meaningful result, often with a resigned tone.", bn: "করলেও / যতই করা হোক — একটি কাজ করলেও তা অর্থপূর্ণ ফলাফলে পরিণত হবে না তা বলে, প্রায়ই মেনে নেওয়ার সুরে।" },
                        connection: ["動詞（た形）＋ところで"],
                        examples: [
                            { jp: "今から急いだところで、終電には間に合わないだろう。", reading: "いまからいそいだところで、しゅうでんにはまにあわないだろう。", en: "Even if I hurry now, I probably won't make the last train." },
                            { jp: "いくら話し合ったところで、彼の考えは変わらない。", reading: "いくらはなしあったところで、かれのかんがえはかわらない。", en: "No matter how much we discuss it, his mind won't change." },
                            { jp: "今さら後悔したところで、何も変わらない。", reading: "いまさらこうかいしたところで、なにもかわらない。", en: "Even if I regret it now, nothing will change." }
                        ]
                    },
                    {
                        pattern: "〜を踏まえて",
                        reading: "〜をふまえて",
                        meanings: { en: "Based on / taking into account — a decision or statement is made in consideration of the previously mentioned facts or situation.", bn: "ভিত্তিতে / বিবেচনায় নিয়ে — পূর্বে উল্লেখিত তথ্য বা পরিস্থিতি বিবেচনা করে একটি সিদ্ধান্ত বা বিবৃতি দেওয়া হয় তা বলে।" },
                        connection: ["名詞＋を踏まえて"],
                        examples: [
                            { jp: "これまでの調査結果を踏まえて、新しい方針を決定した。", reading: "これまでのちょうさけっかをふまえて、あたらしいほうしんをけっていした。", en: "Based on the survey results so far, we decided on a new policy." },
                            { jp: "現状を踏まえた上で、今後の対策を考える必要がある。", reading: "げんじょうをふまえたうえで、こんごのたいさくをかんがえるひつようがある。", en: "We need to consider future measures while taking the current situation into account." },
                            { jp: "お客様の意見を踏まえて、サービスを改善した。", reading: "おきゃくさまのいけんをふまえて、サービスをかいぜんした。", en: "We improved our service based on customers' feedback." }
                        ]
                    }
                ]
            },
            {
                id: "idiomatic-expressions-advanced",
                title: "Advanced Idiomatic Expressions",
                items: [
                    {
                        pattern: "〜にかこつけて",
                        meanings: { en: "Using as an excuse / pretext — doing something, often self-serving, under the guise of another reason.", bn: "অজুহাত ব্যবহার করে — অন্য একটি কারণের ছদ্মবেশে কিছু করা (প্রায়ই স্বার্থপরভাবে) বর্ণনা করে।" },
                        connection: ["名詞＋にかこつけて"],
                        examples: [
                            { jp: "出張にかこつけて、観光も楽しんできた。", reading: "しゅっちょうにかこつけて、かんこうもたのしんできた。", en: "Using the business trip as an excuse, I also enjoyed some sightseeing." },
                            { jp: "彼は仕事にかこつけて、家族との時間を避けている。", reading: "かれはしごとにかこつけて、かぞくとのじかんをさけている。", en: "Using work as an excuse, he avoids spending time with his family." },
                            { jp: "彼女は病気にかこつけて、会議を欠席した。", reading: "かのじょはびょうきにかこつけて、かいぎをけっせきした。", en: "Using illness as a pretext, she skipped the meeting." }
                        ]
                    },
                    {
                        pattern: "〜を物語る",
                        reading: "〜をものがたる",
                        meanings: { en: "To tell / to be evidence of — a fact or piece of evidence that clearly conveys or proves something.", bn: "বলে দেয় / প্রমাণ হয় — একটি সত্য বা প্রমাণ যা স্পষ্টভাবে কিছু প্রকাশ করে বা প্রমাণ করে তা বর্ণনা করে।" },
                        connection: ["名詞＋を物語る"],
                        examples: [
                            { jp: "この古い写真は、当時の生活を物語っている。", reading: "このふるいしゃしんは、とうじのせいかつをものがたっている。", en: "This old photograph tells the story of life at that time." },
                            { jp: "彼の手の傷が、長年の苦労を物語っていた。", reading: "かれのてのきずが、ながねんのくろうをものがたっていた。", en: "The scars on his hands told of years of hardship." },
                            { jp: "売り上げの急増は、商品の人気を物語っている。", reading: "うりあげのきゅうぞうは、しょうひんのにんきをものがたっている。", en: "The sharp increase in sales is evidence of the product's popularity." }
                        ]
                    },
                    {
                        pattern: "〜始末だ",
                        reading: "〜しまつだ",
                        meanings: { en: "Ended up in the unfortunate situation of — a bad outcome that resulted from a series of poor decisions or actions.", bn: "অবশেষে এই দুর্ভাগ্যজনক পরিস্থিতিতে পরিণত হয়েছে — একাধিক ভুল সিদ্ধান্ত বা কাজের ফলে একটি খারাপ পরিণতি বর্ণনা করে।" },
                        connection: ["動詞（辞書形）＋始末だ"],
                        examples: [
                            { jp: "彼は何度も注意されたのに、結局会社を辞める始末だ。", reading: "かれはなんどもちゅういされたのに、けっきょくかいしゃをやめるしまつだ。", en: "Despite being warned many times, he ended up quitting the company in the end." },
                            { jp: "計画はずさんで、最後には中止になる始末だった。", reading: "けいかくはずさんで、さいごにはちゅうしになるしまつだった。", en: "The plan was sloppy, and in the end, it ended up being cancelled." },
                            { jp: "彼女は約束を破り続け、ついには誰も信じてくれない始末だ。", reading: "かのじょはやくそくをやぶりつづけ、ついにはだれもしんじてくれないしまつだ。", en: "She kept breaking her promises, and in the end, no one believes her anymore." }
                        ]
                    },
                    {
                        pattern: "〜手前",
                        reading: "〜てまえ",
                        meanings: { en: "Given that / in light of one's position — one must act a certain way because of appearances or obligations toward others.", bn: "অবস্থান বিবেচনায় / এই কারণে — অন্যদের প্রতি উপস্থিতি বা দায়বদ্ধতার কারণে একটি নির্দিষ্ট উপায়ে কাজ করতে হয় তা ব্যাখ্যা করে।" },
                        connection: ["動詞（た形）＋手前", "名詞の＋手前"],
                        examples: [
                            { jp: "子供に約束した手前、今さらやめるわけにはいかない。", reading: "こどもにやくそくしたてまえ、いまさらやめるわけにはいかない。", en: "Having promised my child, I can't back out now." },
                            { jp: "自分で言い出した手前、最後まで責任を持たなければならない。", reading: "じぶんでいいだしたてまえ、さいごまでせきにんをもたなければならない。", en: "Since I was the one who brought it up, I have to take responsibility to the end." },
                            { jp: "皆の前で宣言した手前、途中で投げ出すことはできない。", reading: "みなのまえでせんげんしたてまえ、とちゅうでなげだすことはできない。", en: "Having declared it in front of everyone, I can't give up halfway." }
                        ]
                    }
                ]
            },
            {
                id: "attitude-feeling-set-phrases",
                title: "Attitude & Feeling Set Phrases",
                items: [
                    {
                        pattern: "〜あっての",
                        meanings: { en: "That exists thanks to / contingent on — something's existence or worth is entirely dependent on another thing.", bn: "যার কারণে টিকে থাকে / এর উপর নির্ভরশীল — কোনো কিছুর অস্তিত্ব বা মূল্য সম্পূর্ণভাবে অন্য একটি বিষয়ের উপর নির্ভরশীল তা বলে।" },
                        connection: ["名詞＋あっての＋名詞"],
                        examples: [
                            { jp: "健康あっての人生だ。", reading: "けんこうあってのじんせいだ。", en: "It's thanks to health that life is possible." },
                            { jp: "お客様あっての商売だということを忘れてはいけない。", reading: "おきゃくさまあってのしょうばいだということをわすれてはいけない。", en: "We must not forget that business exists thanks to customers." },
                            { jp: "チームの協力あっての優勝だった。", reading: "チームのきょうりょくあってのゆうしょうだった。", en: "The victory was only possible thanks to the team's cooperation." }
                        ]
                    },
                    {
                        pattern: "言わずもがな",
                        reading: "いわずもがな",
                        meanings: { en: "Needless to say / not to mention — something so obvious that it goes without saying, often while adding something further.", bn: "বলার অপেক্ষা রাখে না — এমন কিছু উপস্থাপন করে যা বলার প্রয়োজন নেই, প্রায়ই আরও কিছু যুক্ত করার সময়।" },
                        connection: ["名詞＋は言わずもがな、〜も"],
                        examples: [
                            { jp: "英語は言わずもがな、彼はフランス語も話せる。", reading: "えいごはいわずもがな、かれはフランスごもはなせる。", en: "Needless to say about English, he can also speak French." },
                            { jp: "本人は言わずもがな、家族まで批判された。", reading: "ほんにんはいわずもがな、かぞくまでひはんされた。", en: "Not to mention the person himself, even his family was criticized." },
                            { jp: "このことは言わずもがな、皆わかっているはずだ。", reading: "このことはいわずもがな、みなわかっているはずだ。", en: "Needless to say, everyone should understand this." }
                        ]
                    },
                    {
                        pattern: "〜もなんでもない",
                        meanings: { en: "Not X at all / far from X — strongly denies that something is the case, often correcting a mistaken assumption.", bn: "একদমই X নয় / X থেকে অনেক দূরে — কোনো কিছু সত্য তা দৃঢ়ভাবে অস্বীকার করে, প্রায়ই একটি ভুল ধারণা সংশোধন করে।" },
                        connection: ["名詞＋もなんでもない", "な形容詞＋でもなんでもない"],
                        examples: [
                            { jp: "これは贈り物でもなんでもない、ただの借りたものだ。", reading: "これはおくりものでもなんでもない、ただのかりたものだ。", en: "This isn't a gift or anything of the sort, it's just something borrowed." },
                            { jp: "彼は専門家でもなんでもないのに、知ったように話す。", reading: "かれはせんもんかでもなんでもないのに、しったようにはなす。", en: "Even though he's not an expert at all, he talks as if he knows everything." },
                            { jp: "その話は秘密でもなんでもない、みんな知っている。", reading: "そのはなしはひみつでもなんでもない、みんなしっている。", en: "That story isn't a secret at all; everyone knows about it." }
                        ]
                    },
                    {
                        pattern: "〜ところを",
                        meanings: { en: "Even though it was a moment/situation when... (thank you for, apologize for) — politely acknowledges an inconvenient situation someone was in.", bn: "যে মুহূর্তে/পরিস্থিতিতে ছিলেন তা সত্ত্বেও (ধন্যবাদ/ক্ষমা) — কেউ একটি অসুবিধাজনক পরিস্থিতিতে ছিলেন তা ভদ্রভাবে স্বীকার করতে ব্যবহৃত হয়।" },
                        connection: ["普通形＋ところを"],
                        examples: [
                            { jp: "お忙しいところを、お時間をいただきありがとうございます。", reading: "おいそがしいところを、おじかんをいただきありがとうございます。", en: "Thank you for taking the time even though you must be busy." },
                            { jp: "お休みのところを、お邪魔して申し訳ございません。", reading: "おやすみのところを、おじゃましてもうしわけございません。", en: "I'm sorry for disturbing you during your time off." },
                            { jp: "休んでいるところを起こしてしまい、すみません。", reading: "やすんでいるところをおこしてしまい、すみません。", en: "I'm sorry for waking you up while you were resting." }
                        ]
                    }
                ]
            },
            {
                id: "final-concession-exception",
                title: "Final Concession & Exception",
                items: [
                    {
                        pattern: "〜ないまでも",
                        meanings: { en: "Even if not to the extent of — a lesser, more achievable action is presented as acceptable, since a greater one isn't possible.", bn: "এতটা না হলেও — একটি বড় কাজ সম্ভব না হওয়ায় একটি ছোট, অর্জনযোগ্য কাজকে গ্রহণযোগ্য হিসেবে উপস্থাপন করে।" },
                        connection: ["動詞（ない形）＋までも"],
                        examples: [
                            { jp: "毎日とは言わないまでも、週に一度は運動したほうがいい。", reading: "まいにちとはいわないまでも、しゅうにいちどはうんどうしたほうがいい。", en: "Even if not every day, it's better to exercise at least once a week." },
                            { jp: "完璧とは言えないまでも、かなり良い出来だと思う。", reading: "かんぺきとはいえないまでも、かなりよいできだとおもう。", en: "While I wouldn't call it perfect, I think it turned out quite well." },
                            { jp: "全部は無理だとしても、終わらせないまでも少しは進めておきたい。", reading: "ぜんぶはむりだとしても、おわらせないまでもすこしはすすめておきたい。", en: "Even if finishing it all is impossible, I'd like to at least make some progress, even if not finishing it." }
                        ]
                    },
                    {
                        pattern: "いかんせん",
                        meanings: { en: "Unfortunately / regrettably — introduces a reason that unfortunately prevents a desired outcome, despite one's wishes.", bn: "দুর্ভাগ্যবশত / আক্ষেপের বিষয় হলো — একটি কারণ উপস্থাপন করে যা দুর্ভাগ্যবশত একটি কাঙ্ক্ষিত ফলাফল প্রতিরোধ করে।" },
                        connection: ["いかんせん＋普通形"],
                        examples: [
                            { jp: "行きたかったが、いかんせん時間がなかった。", reading: "いきたかったが、いかんせんじかんがなかった。", en: "I wanted to go, but unfortunately I had no time." },
                            { jp: "このデザインは素晴らしいが、いかんせん値段が高すぎる。", reading: "このデザインはすばらしいが、いかんせんねだんがたかすぎる。", en: "This design is wonderful, but unfortunately the price is too high." },
                            { jp: "やる気はあるのだが、いかんせん経験が不足している。", reading: "やるきはあるのだが、いかんせんけいけんがふそくしている。", en: "I have the motivation, but unfortunately I lack experience." }
                        ]
                    },
                    {
                        pattern: "〜とて",
                        meanings: { en: "Even / even if — a classical expression used to say that even a given person or case is no exception to a general rule.", bn: "এমনকি / হলেও — একটি নির্দিষ্ট ব্যক্তি বা ঘটনাও একটি সাধারণ নিয়মের ব্যতিক্রম নয় তা বলার জন্য একটি শাস্ত্রীয় প্রকাশভঙ্গি।" },
                        connection: ["名詞＋とて", "普通形＋とて"],
                        examples: [
                            { jp: "子供とて、言っていいことと悪いことがある。", reading: "こどもとて、いっていいこととわるいことがある。", en: "Even children have things that are okay and not okay to say." },
                            { jp: "専門家とて、すべてを知っているわけではない。", reading: "せんもんかとて、すべてをしっているわけではない。", en: "Even experts don't know everything." },
                            { jp: "いくら頑張ったとて、結果が変わるわけではない。", reading: "いくらがんばったとて、けっかがかわるわけではない。", en: "No matter how hard you try, it doesn't mean the result will change." }
                        ]
                    },
                    {
                        pattern: "〜ならいざしらず",
                        meanings: { en: "If it were... that would be one thing, but — contrasts an acceptable hypothetical case with the actual, less acceptable, situation.", bn: "যদি তা হতো তাহলে এক কথা, কিন্তু — একটি গ্রহণযোগ্য কাল্পনিক পরিস্থিতির সাথে বাস্তব, কম গ্রহণযোগ্য পরিস্থিতির বৈসাদৃশ্য দেখায়।" },
                        connection: ["名詞＋ならいざしらず"],
                        examples: [
                            { jp: "子供ならいざしらず、大人がこんな失敗をするとは思わなかった。", reading: "こどもならいざしらず、おとながこんなしっぱいをするとはおもわなかった。", en: "If it were a child, that'd be one thing, but I didn't expect an adult to make such a mistake." },
                            { jp: "初心者ならいざしらず、プロの選手がこんなミスをするなんて。", reading: "しょしんしゃならいざしらず、プロのせんしゅがこんなミスをするなんて。", en: "If it were a beginner, that'd be understandable, but for a professional athlete to make such a mistake..." },
                            { jp: "昔ならいざしらず、今はそんな方法は通用しない。", reading: "むかしならいざしらず、いまはそんなほうほうはつうようしない。", en: "If it were the old days, that'd be one thing, but such a method doesn't work now." }
                        ]
                    }
                ]
            },
            {
                id: "emphasis-scope-advanced",
                title: "Advanced Emphasis & Scope",
                items: [
                    {
                        pattern: "〜ことなしに",
                        meanings: { en: "Without doing — a formal way of saying that one thing is accomplished without the presence of another.", bn: "না করে — একটি বিষয় অন্য একটির উপস্থিতি ছাড়াই সম্পন্ন হয় তা বলার একটি আনুষ্ঠানিক উপায়।" },
                        connection: ["動詞（辞書形）＋ことなしに"],
                        examples: [
                            { jp: "努力することなしに、夢を叶えることはできない。", reading: "どりょくすることなしに、ゆめをかなえることはできない。", en: "Without making an effort, you cannot make your dreams come true." },
                            { jp: "彼は休むことなしに、一日中働き続けた。", reading: "かれはやすむことなしに、いちにちじゅうはたらきつづけた。", en: "He kept working all day long without resting." },
                            { jp: "人は誰かと関わることなしに、生きていくことはできない。", reading: "ひとはだれかとかかわることなしに、いきていくことはできない。", en: "People cannot live without connecting with someone." }
                        ]
                    },
                    {
                        pattern: "〜ともなると",
                        meanings: { en: "Once it's reached the stage of / when it comes to — when a situation reaches a certain notable level, a natural consequence follows.", bn: "যখন সেই পর্যায়ে পৌঁছায় / যখন কথা আসে — একটি পরিস্থিতি একটি নির্দিষ্ট উল্লেখযোগ্য স্তরে পৌঁছালে একটি স্বাভাবিক পরিণতি ঘটে তা নির্দেশ করে।" },
                        connection: ["名詞＋ともなると"],
                        examples: [
                            { jp: "週末ともなると、この公園は家族連れでいっぱいになる。", reading: "しゅうまつともなると、このこうえんはかぞくづれでいっぱいになる。", en: "Once the weekend comes around, this park becomes full of families." },
                            { jp: "社長ともなると、責任も重くなる。", reading: "しゃちょうともなると、せきにんもおもくなる。", en: "Once you become a company president, the responsibilities become heavier too." },
                            { jp: "高校生ともなると、自分で将来を考えるようになる。", reading: "こうこうせいともなると、じぶんでしょうらいをかんがえるようになる。", en: "Once you're a high school student, you start thinking about your own future." }
                        ]
                    },
                    {
                        pattern: "〜なくもない",
                        meanings: { en: "It's not that... / not unlikely — softly admits a possibility while sounding hesitant or reluctant.", bn: "এমন নয় যে... / অসম্ভব না — একটি সম্ভাবনা মৃদুভাবে স্বীকার করে, কিন্তু দ্বিধা বা অনিচ্ছুক সুরে।" },
                        connection: ["動詞（ない形）＋くもない", "い形容詞（く）＋なくもない"],
                        examples: [
                            { jp: "彼の言い分も分からなくもない。", reading: "かれのいいぶんもわからなくもない。", en: "I don't entirely fail to understand his reasoning either." },
                            { jp: "時間があれば、手伝えなくもない。", reading: "じかんがあれば、てつだえなくもない。", en: "If I had time, it's not that I couldn't help." },
                            { jp: "その案も悪くはなくもない。", reading: "そのあんもわるくはなくもない。", en: "That proposal isn't necessarily bad either." }
                        ]
                    },
                    {
                        pattern: "〜なりとも",
                        meanings: { en: "Even just / at least — a classical expression emphasizing that even a small amount of something would be acceptable or helpful.", bn: "অন্তত / ন্যূনতম — একটি শাস্ত্রীয় প্রকাশভঙ্গি যা একটি ক্ষুদ্র পরিমাণও গ্রহণযোগ্য বা সহায়ক হবে তা জোর দেয়।" },
                        connection: ["名詞＋なりとも"],
                        examples: [
                            { jp: "少しなりとも、お役に立てれば幸いです。", reading: "すこしなりとも、おやくにたてればさいわいです。", en: "I would be glad if I could be of even a little help." },
                            { jp: "一言なりとも、お礼を言わせてください。", reading: "ひとことなりとも、おれいをいわせてください。", en: "Please let me say at least a word of thanks." },
                            { jp: "何なりとも、お申し付けください。", reading: "なんなりとも、おもうしつけください。", en: "Please let me know whatever it is you need." }
                        ]
                    }
                ]
            }
        ]
    }

};

if (typeof module !== "undefined" && module.exports) { module.exports = grammarData; }
