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

   N3-N1 stay empty/locked until content is
   written for those levels.
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

    n3: { chapters: [] },
    n2: { chapters: [] },
    n1: { chapters: [] }

};

if (typeof module !== "undefined" && module.exports) { module.exports = grammarData; }
