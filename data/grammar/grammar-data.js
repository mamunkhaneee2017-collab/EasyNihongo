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
     meaning      — what the pattern does
     connection   — 接続 (conjugation) rules, as
                    an array of one or more lines
                    (verb/i-adj/na-adj/noun forms
                    often differ, hence an array)
     examples     — exactly 3 real example
                    sentences, each with jp,
                    reading (hiragana, omitted
                    if the sentence has no kanji)
                    and en

   25 chapters, restructured from the original
   34 to pair 1:1 with vocabulary-data.js's 25
   chapters (matching id slugs) — see that file's
   header for why and for the conversation/story
   pairing this enables.

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
                id: "greetings-self-intro-numbers",
                title: "Greetings, Self-Introduction & Numbers",
                items: [
                    {
                        pattern: "〜は〜です",
                        meaning: "States what something is — topic followed by a description.",
                        connection: ["名詞 + は + 名詞／形容詞 + です"],
                        examples: [
                            { jp: "私は学生です。", reading: "わたしはがくせいです。", en: "I am a student." },
                            { jp: "これは本です。", reading: "これはほんです。", en: "This is a book." },
                            { jp: "東京は大きいです。", reading: "とうきょうはおおきいです。", en: "Tokyo is big." }
                        ]
                    },
                    {
                        pattern: "〜を",
                        meaning: "Marks the direct object of a verb — the thing an action is done to.",
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
                        meaning: "Marks a destination with a movement verb — \"go to\" a place.",
                        connection: ["場所 + に + 行きます／来ます／帰ります"],
                        examples: [
                            { jp: "学校に行きます。", reading: "がっこうにいきます。", en: "I go to school." },
                            { jp: "明日、東京に行きます。", reading: "あした、とうきょうにいきます。", en: "I will go to Tokyo tomorrow." },
                            { jp: "毎年、国に帰ります。", reading: "まいとし、くににかえります。", en: "I return to my country every year." }
                        ]
                    },
                    {
                        pattern: "〜で",
                        meaning: "Marks the place where an action happens.",
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
                        meaning: "The negative form of an i-adjective — \"is not\" (i-adjective).",
                        connection: ["い形容詞（語幹）+ くないです", "※いい → よくないです（例外）"],
                        examples: [
                            { jp: "この本は高くないです。", reading: "このほんはたかくないです。", en: "This book is not expensive." },
                            { jp: "この映画は面白くないです。", reading: "このえいがはおもしろくないです。", en: "This movie is not interesting." },
                            { jp: "今日は寒くないです。", reading: "きょうはさむくないです。", en: "It is not cold today." }
                        ]
                    },
                    {
                        pattern: "〜じゃないです",
                        meaning: "The negative form for nouns and na-adjectives — \"is not\" (＝ではありません).",
                        connection: ["名詞／な形容詞 + じゃないです"],
                        examples: [
                            { jp: "今日は休みじゃないです。", reading: "きょうはやすみじゃないです。", en: "Today is not a day off." },
                            { jp: "彼は先生じゃないです。", reading: "かれはせんせいじゃないです。", en: "He is not a teacher." },
                            { jp: "この部屋は静かじゃないです。", reading: "このへやはしずかじゃないです。", en: "This room is not quiet." }
                        ]
                    },
                    {
                        pattern: "〜でした",
                        meaning: "The past tense of です — \"was.\"",
                        connection: ["名詞／な形容詞 + でした"],
                        examples: [
                            { jp: "昨日は雨でした。", reading: "きのうはあめでした。", en: "It was rainy yesterday." },
                            { jp: "子供のとき、この町は静かでした。", reading: "こどものとき、このまちはしずかでした。", en: "This town was quiet when I was a child." },
                            { jp: "テストは簡単でした。", reading: "テストはかんたんでした。", en: "The test was easy." }
                        ]
                    },
                    {
                        pattern: "〜くて〜",
                        meaning: "Connects two i-adjectives, or an i-adjective to a following clause.",
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
                        meaning: "The polite present/future form of a verb.",
                        connection: ["動詞（ます形）"],
                        examples: [
                            { jp: "毎日、日本語を勉強します。", reading: "まいにち、にほんごをべんきょうします。", en: "I study Japanese every day." },
                            { jp: "朝、六時に起きます。", reading: "あさ、ろくじにおきます。", en: "I wake up at six in the morning." },
                            { jp: "週末、映画を見ます。", reading: "しゅうまつ、えいがをみます。", en: "I watch a movie on the weekend." }
                        ]
                    },
                    {
                        pattern: "〜ません",
                        meaning: "The polite negative present/future form of a verb.",
                        connection: ["動詞（ます形）+ ません"],
                        examples: [
                            { jp: "肉は食べません。", reading: "にくはたべません。", en: "I don't eat meat." },
                            { jp: "お酒を飲みません。", reading: "おさけをのみません。", en: "I don't drink alcohol." },
                            { jp: "今日は働きません。", reading: "きょうははたらきません。", en: "I don't work today." }
                        ]
                    },
                    {
                        pattern: "〜ました",
                        meaning: "The polite past form of a verb.",
                        connection: ["動詞（ます形）+ ました"],
                        examples: [
                            { jp: "昨日、映画を見ました。", reading: "きのう、えいがをみました。", en: "I watched a movie yesterday." },
                            { jp: "先週、京都へ行きました。", reading: "せんしゅう、きょうとへいきました。", en: "I went to Kyoto last week." },
                            { jp: "手紙を書きました。", reading: "てがみをかきました。", en: "I wrote a letter." }
                        ]
                    },
                    {
                        pattern: "〜ませんでした",
                        meaning: "The polite past negative form of a verb.",
                        connection: ["動詞（ます形）+ ませんでした"],
                        examples: [
                            { jp: "今朝、朝ご飯を食べませんでした。", reading: "けさ、あさごはんをたべませんでした。", en: "I didn't eat breakfast this morning." },
                            { jp: "昨日、勉強しませんでした。", reading: "きのう、べんきょうしませんでした。", en: "I didn't study yesterday." },
                            { jp: "パーティーに行きませんでした。", reading: "パーティーにいきませんでした。", en: "I didn't go to the party." }
                        ]
                    },
                    {
                        pattern: "〜ています",
                        meaning: "Describes an ongoing action or continuous state.",
                        connection: ["動詞（て形）+ います"],
                        examples: [
                            { jp: "今、勉強しています。", reading: "いま、べんきょうしています。", en: "I am studying right now." },
                            { jp: "彼は東京に住んでいます。", reading: "かれはとうきょうにすんでいます。", en: "He lives in Tokyo." },
                            { jp: "雨が降っています。", reading: "あめがふっています。", en: "It is raining." }
                        ]
                    },
                    {
                        pattern: "〜たいです",
                        meaning: "Expresses wanting to do something.",
                        connection: ["動詞（ます形語幹）+ たいです"],
                        examples: [
                            { jp: "日本に行きたいです。", reading: "にほんにいきたいです。", en: "I want to go to Japan." },
                            { jp: "新しい車が買いたいです。", reading: "あたらしいくるまがかいたいです。", en: "I want to buy a new car." },
                            { jp: "すしを食べたいです。", en: "I want to eat sushi." }
                        ]
                    },
                    {
                        pattern: "〜ましょう",
                        meaning: "A gentle suggestion — \"let's do\" something together.",
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
                        meaning: "The past tense of an i-adjective — \"was\" (i-adjective).",
                        connection: ["い形容詞（語幹）+ かったです", "※いい → よかったです（例外）"],
                        examples: [
                            { jp: "昨日は寒かったです。", reading: "きのうはさむかったです。", en: "It was cold yesterday." },
                            { jp: "旅行は楽しかったです。", reading: "りょこうはたのしかったです。", en: "The trip was fun." },
                            { jp: "この映画はよかったです。", reading: "このえいがはよかったです。", en: "This movie was good." }
                        ]
                    },
                    {
                        pattern: "N1とN2とどちらが〜ですか",
                        meaning: "Ask the listener to choose which of two things is more adjective.",
                        connection: ["N1 + と + N2 + と + どちらが + 形容詞 + ですか", "…N1／N2のほうが〜です"],
                        examples: [
                            { jp: "サッカーと野球とどちらが面白いですか。…サッカーのほうが面白いです。", reading: "サッカーとやきゅうとどちらがおもしろいですか。…サッカーのほうがおもしろいです。", en: "Which is more interesting, soccer or baseball? ...Soccer is." },
                            { jp: "北海道と大阪とどちらが涼しいですか。", reading: "ほっかいどうとおおさかとどちらがすずしいですか。", en: "Which is cooler, Hokkaido or Osaka?" },
                            { jp: "春と秋とどちらが好きですか。", reading: "はるとあきとどちらがすきですか。", en: "Which do you like better, spring or autumn?" }
                        ]
                    },
                    {
                        pattern: "〜くなかったです",
                        meaning: "The past negative of an i-adjective — \"was not\" (i-adjective).",
                        connection: ["い形容詞（語幹）+ くなかったです", "※いい → よくなかったです（例外）"],
                        examples: [
                            { jp: "テストは難しくなかったです。", reading: "テストはむずかしくなかったです。", en: "The test was not difficult." },
                            { jp: "天気はよくなかったです。", reading: "てんきはよくなかったです。", en: "The weather was not good." },
                            { jp: "映画はあまり面白くなかったです。", reading: "えいがはあまりおもしろくなかったです。", en: "The movie was not very interesting." }
                        ]
                    },
                    {
                        pattern: "N1[の中]で何/どこ/だれ/いつがいちばん〜ですか",
                        meaning: "Ask which one in a group or category is the most adjective.",
                        connection: ["N1[の中]で + 何／どこ／だれ／いつ + が + いちばん + 形容詞 + ですか"],
                        examples: [
                            { jp: "日本料理の中で何がいちばんおいしいですか。…天ぷらがいちばんおいしいです。", reading: "にほんりょうりのなかでなにがいちばんおいしいですか。…てんぷらがいちばんおいしいです。", en: "Among Japanese dishes, what is the most delicious? ...Tempura is." },
                            { jp: "家族でだれがいちばん背が高いですか。", reading: "かぞくでだれがいちばんせがたかいですか。", en: "Who is the tallest in your family?" },
                            { jp: "一年でいつがいちばん寒いですか。", reading: "いちねんでいつがいちばんさむいですか。", en: "When is the coldest time of the year?" }
                        ]
                    },
                    {
                        pattern: "〜より〜のほうが〜です",
                        meaning: "Compares two things — \"B is more [adjective] than A.\"",
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
                        meaning: "The superlative — \"is the most [adjective]\" among a group.",
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
                        meaning: "A polite request — \"please do\" something.",
                        connection: ["動詞（て形）+ ください"],
                        examples: [
                            { jp: "ここに名前を書いてください。", reading: "ここになまえをかいてください。", en: "Please write your name here." },
                            { jp: "窓を開けてください。", reading: "まどをあけてください。", en: "Please open the window." },
                            { jp: "ゆっくり話してください。", reading: "ゆっくりはなしてください。", en: "Please speak slowly." }
                        ]
                    },
                    {
                        pattern: "Vない-formなくてもいいです",
                        meaning: "State that an action doesn't have to be done.",
                        connection: ["動詞（ない形語幹）+ なくてもいいです"],
                        examples: [
                            { jp: "あした来なくてもいいです。", reading: "あしたこなくてもいいです。", en: "You don't have to come tomorrow." },
                            { jp: "靴を脱がなくてもいいです。", reading: "くつをぬがなくてもいいです。", en: "You don't have to take off your shoes." },
                            { jp: "心配しなくてもいいです。", reading: "しんぱいしなくてもいいです。", en: "You don't need to worry." }
                        ]
                    },
                    {
                        pattern: "〜ないでください",
                        meaning: "A polite negative request — \"please don't do\" something.",
                        connection: ["動詞（ない形）+ でください"],
                        examples: [
                            { jp: "写真を撮らないでください。", reading: "しゃしんをとらないでください。", en: "Please don't take photos." },
                            { jp: "ここに車を止めないでください。", reading: "ここにくるまをとめないでください。", en: "Please don't park your car here." },
                            { jp: "心配しないでください。", reading: "しんぱいしないでください。", en: "Please don't worry." }
                        ]
                    },
                    {
                        pattern: "N(object)は",
                        meaning: "Make a direct object the topic of the sentence by replacing を with は.",
                        connection: ["名詞（目的語）+ は"],
                        examples: [
                            { jp: "荷物はここに置かないでください。", reading: "にもつはここにおかないでください。", en: "As for parcels, don't put them here." },
                            { jp: "昼ご飯は会社の食堂で食べます。", reading: "ひるごはんはかいしゃのしょくどうでたべます。", en: "As for lunch, I have it in the company cafeteria." },
                            { jp: "肉は食べません。", reading: "にくはたべません。", en: "I don't eat meat." }
                        ]
                    },
                    {
                        pattern: "〜てはいけません",
                        meaning: "Expresses prohibition — \"must not\" do something.",
                        connection: ["動詞（て形）+ はいけません"],
                        examples: [
                            { jp: "ここでたばこを吸ってはいけません。", reading: "ここでたばこをすってはいけません。", en: "You must not smoke here." },
                            { jp: "授業中に寝てはいけません。", reading: "じゅぎょうちゅうにねてはいけません。", en: "You must not sleep during class." },
                            { jp: "ここで写真を撮ってはいけません。", reading: "ここでしゃしんをとってはいけません。", en: "You must not take photos here." }
                        ]
                    },
                    {
                        pattern: "N(time)までにV",
                        meaning: "Mark the deadline by which an action must be done.",
                        connection: ["時間 + までに + 動詞"],
                        examples: [
                            { jp: "会議は五時までに終わります。", reading: "かいぎはごじまでにおわります。", en: "The meeting will be over by five." },
                            { jp: "土曜日までに本を返さなければなりません。", reading: "どようびまでにほんをかえさなければなりません。", en: "I must return the book by Saturday." },
                            { jp: "レポートは金曜日までに出してください。", reading: "レポートはきんようびまでにだしてください。", en: "Please submit the report by Friday." }
                        ]
                    },
                    {
                        pattern: "〜ましょうか",
                        meaning: "Offers to do something for someone — \"shall I/we...?\"",
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
                        meaning: "Expresses ability — \"can do\" something.",
                        connection: ["動詞（辞書形）+ ことができます"],
                        examples: [
                            { jp: "私はピアノを弾くことができます。", reading: "わたしはピアノをひくことができます。", en: "I can play the piano." },
                            { jp: "漢字を読むことができます。", reading: "かんじをよむことができます。", en: "I can read kanji." },
                            { jp: "彼は車を運転することができます。", reading: "かれはくるまをうんてんすることができます。", en: "He can drive a car." }
                        ]
                    },
                    {
                        pattern: "〜がわかります",
                        meaning: "Expresses understanding — \"understand\" something.",
                        connection: ["名詞 + がわかります"],
                        examples: [
                            { jp: "日本語が少しわかります。", reading: "にほんごがすこしわかります。", en: "I understand a little Japanese." },
                            { jp: "この問題の意味がわかりません。", reading: "このもんだいのいみがわかりません。", en: "I don't understand the meaning of this question." },
                            { jp: "彼の気持ちがよくわかります。", reading: "かれのきもちがよくわかります。", en: "I understand his feelings well." }
                        ]
                    },
                    {
                        pattern: "〜すぎます",
                        meaning: "Expresses excess — \"too much\" (verb/adjective).",
                        connection: ["動詞（ます形語幹）+ すぎます", "い形容詞／な形容詞（語幹）+ すぎます"],
                        examples: [
                            { jp: "このコーヒーは熱すぎます。", reading: "このコーヒーはあつすぎます。", en: "This coffee is too hot." },
                            { jp: "昨日は食べすぎました。", reading: "きのうはたべすぎました。", en: "I ate too much yesterday." },
                            { jp: "この問題は簡単すぎます。", reading: "このもんだいはかんたんすぎます。", en: "This problem is too easy." }
                        ]
                    },
                    {
                        pattern: "〜ながら",
                        meaning: "Describes two actions done at the same time — \"while doing.\"",
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
                        meaning: "Expresses existence — あります for inanimate things, います for people/animals.",
                        connection: ["場所に + 名詞（もの）+ があります", "場所に + 名詞（人・動物）+ がいます"],
                        examples: [
                            { jp: "机の上に本があります。", reading: "つくえのうえにほんがあります。", en: "There is a book on the desk." },
                            { jp: "教室に学生がいます。", reading: "きょうしつにがくせいがいます。", en: "There are students in the classroom." },
                            { jp: "公園に猫がいます。", reading: "こうえんにねこがいます。", en: "There is a cat in the park." }
                        ]
                    },
                    {
                        pattern: "N1(place)にN2があります／います",
                        meaning: "State what exists at a given place, using に for the place and が for the thing/person.",
                        connection: ["場所 + に + 名詞 + が + あります／います"],
                        examples: [
                            { jp: "わたしの部屋に机があります。", reading: "わたしのへやにつくえがあります。", en: "There is a desk in my room." },
                            { jp: "事務所にミラーさんがいます。", reading: "じむしょにミラーさんがいます。", en: "Mr. Miller is in the office." },
                            { jp: "公園に猫がいます。", reading: "こうえんにねこがいます。", en: "There is a cat in the park." }
                        ]
                    },
                    {
                        pattern: "〜と〜",
                        meaning: "Connects two or more nouns exhaustively — \"A and B.\"",
                        connection: ["名詞A + と + 名詞B"],
                        examples: [
                            { jp: "机の上に本とノートがあります。", reading: "つくえのうえにほんとノートがあります。", en: "There is a book and a notebook on the desk." },
                            { jp: "私と友達は映画を見ました。", reading: "わたしとともだちはえいがをみました。", en: "My friend and I watched a movie." },
                            { jp: "りんごとみかんを買いました。", reading: "りんごとみかんをかいました。", en: "I bought apples and oranges." }
                        ]
                    },
                    {
                        pattern: "N1はN2(place)にあります／います",
                        meaning: "State where a known thing or person is, with N1 as the topic.",
                        connection: ["N1（話題）+ は + 場所 + に + あります／います"],
                        examples: [
                            { jp: "東京ディズニーランドは千葉県にあります。", reading: "とうきょうディズニーランドはちばけんにあります。", en: "Tokyo Disneyland is in Chiba Prefecture." },
                            { jp: "ミラーさんは事務所にいます。", reading: "ミラーさんはじむしょにいます。", en: "Mr. Miller is in the office." },
                            { jp: "郵便局はどこにありますか。", reading: "ゆうびんきょくはどこにありますか。", en: "Where is the post office?" }
                        ]
                    },
                    {
                        pattern: "〜や〜など",
                        meaning: "Lists a few representative nouns from a larger group — \"A, B, and so on.\"",
                        connection: ["名詞A + や + 名詞B + など"],
                        examples: [
                            { jp: "机の上に本やノートなどがあります。", reading: "つくえのうえにほんやノートなどがあります。", en: "There are things like books, notebooks, and so on, on the desk." },
                            { jp: "スーパーでりんごやみかんなどを買いました。", reading: "スーパーでりんごやみかんなどをかいました。", en: "I bought things like apples, oranges, and so on at the supermarket." },
                            { jp: "週末は掃除や洗濯などをします。", reading: "しゅうまつはそうじやせんたくなどをします。", en: "On weekends I do things like cleaning, laundry, and so on." }
                        ]
                    },
                    {
                        pattern: "N1(位置)のN2",
                        meaning: "Use position nouns (上/下/前/後ろ/中/隣 etc.) with の to locate something relative to another.",
                        connection: ["名詞 + の + 上／下／前／後ろ／右／左／中／外／隣／近く／間"],
                        examples: [
                            { jp: "机の上に写真があります。", reading: "つくえのうえにしゃしんがあります。", en: "There is a picture on the desk." },
                            { jp: "郵便局は銀行の隣にあります。", reading: "ゆうびんきょくはぎんこうのとなりにあります。", en: "The post office is next to the bank." },
                            { jp: "駅の近くで友達に会いました。", reading: "えきのちかくでともだちにあいました。", en: "I met a friend near the station." }
                        ]
                    },
                    {
                        pattern: "〜から〜まで",
                        meaning: "Marks a starting point and an ending point — of time or place.",
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
                        meaning: "Demonstrative pronouns for things — これ (near speaker), それ (near listener), あれ (far from both).",
                        connection: ["これ／それ／あれ + は／を／が ..."],
                        examples: [
                            { jp: "これは辞書です。", reading: "これはじしょです。", en: "This is a dictionary." },
                            { jp: "それを見せてください。", reading: "それをみせてください。", en: "Please show me that." },
                            { jp: "あれは何ですか。", reading: "あれはなんですか。", en: "What is that (over there)?" }
                        ]
                    },
                    {
                        pattern: "この／その／あの＋N",
                        meaning: "Modify a noun with a demonstrative — this/that/that (over there) ~.",
                        connection: ["この／その／あの + 名詞"],
                        examples: [
                            { jp: "この本はわたしのです。", reading: "このほんはわたしのです。", en: "This book is mine." },
                            { jp: "その傘は誰のですか。", reading: "そのかさはだれのですか。", en: "Whose umbrella is that?" },
                            { jp: "あの人は先生です。", reading: "あのひとはせんせいです。", en: "That person is a teacher." }
                        ]
                    },
                    {
                        pattern: "ここ／そこ／あそこ",
                        meaning: "Demonstrative pronouns for places — here, there (near listener), over there.",
                        connection: ["ここ／そこ／あそこ + は／に／で ..."],
                        examples: [
                            { jp: "ここは教室です。", reading: "ここはきょうしつです。", en: "This is the classroom." },
                            { jp: "そこに座ってください。", reading: "そこにすわってください。", en: "Please sit there." },
                            { jp: "あそこに銀行があります。", reading: "あそこにぎんこうがあります。", en: "There is a bank over there." }
                        ]
                    },
                    {
                        pattern: "こちら／そちら／あちら／どちら",
                        meaning: "Polite equivalents of ここ／そこ／あそこ／どこ — also used to ask where someone is from.",
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
                        meaning: "Affirm or deny a yes/no question about a noun sentence.",
                        connection: ["はい、そうです。", "いいえ、そうじゃありません。"],
                        examples: [
                            { jp: "それはテレホンカードですか。…はい、そうです。", en: "Is that a telephone card? ...Yes, it is." },
                            { jp: "田中さんは学生ですか。…いいえ、そうじゃありません。", reading: "たなかさんはがくせいですか。…いいえ、そうじゃありません。", en: "Is Mr. Tanaka a student? ...No, he isn't." },
                            { jp: "違います。", reading: "ちがいます。", en: "No, that's wrong." }
                        ]
                    },
                    {
                        pattern: "とても",
                        meaning: "An adverb of degree meaning 'very', placed before the adjective it modifies — used in affirmative sentences.",
                        connection: ["とても + 形容詞"],
                        examples: [
                            { jp: "ペキンはとても寒いです。", reading: "ペキンはとてもさむいです。", en: "Beijing is very cold." },
                            { jp: "これはとても有名な映画です。", reading: "これはとてもゆうめいなえいがです。", en: "This is a very famous movie." },
                            { jp: "日本の食べ物はとてもおいしいです。", reading: "にほんのたべものはとてもおいしいです。", en: "Japanese food is very delicious." }
                        ]
                    },
                    {
                        pattern: "S1か、S2か",
                        meaning: "Ask the listener to choose between two alternatives.",
                        connection: ["文1か、文2か"],
                        examples: [
                            { jp: "これは「9」ですか、「7」ですか。", en: "Is this a '9' or a '7'?" },
                            { jp: "コーヒーですか、紅茶ですか。", reading: "コーヒーですか、こうちゃですか。", en: "Coffee or black tea?" },
                            { jp: "今日ですか、明日ですか。", reading: "きょうですか、あしたですか。", en: "Today or tomorrow?" }
                        ]
                    },
                    {
                        pattern: "S1が、S2",
                        meaning: "が connects two sentences to mean 'but' — a milder contrast than けど.",
                        connection: ["文1が、文2"],
                        examples: [
                            { jp: "日本の食べ物はおいしいですが、高いです。", reading: "にほんのたべものはおいしいですが、たかいです。", en: "Japanese food is good, but expensive." },
                            { jp: "すみませんが、塩を取ってください。", reading: "すみませんが、しおをとってください。", en: "Excuse me, but please pass the salt." },
                            { jp: "辛いですが、おいしいです。", reading: "からいですが、おいしいです。", en: "It's spicy, but tasty." }
                        ]
                    },
                    {
                        pattern: "Word(s)ですか（確認）",
                        meaning: "Confirm a word or phrase by repeating it back with か.",
                        connection: ["確認したい言葉 + ですか"],
                        examples: [
                            { jp: "ユニューヤ・ストアはどこですか。…ユニューヤ・ストアですか。あのビルの中です。", en: "Where is Yunyu-ya Store? ...Yunyu-ya Store? It's in that building." },
                            { jp: "871の6813ですね。", en: "871-6813, right?" },
                            { jp: "京都駅ですか。分かりました。", reading: "きょうとえきですか。わかりました。", en: "Kyoto station? Got it." }
                        ]
                    },
                    {
                        pattern: "そうですね",
                        meaning: "Express agreement or sympathy with what the listener just said — unlike そうですか, which reacts to new information.",
                        connection: ["そうですね"],
                        examples: [
                            { jp: "寒くなりましたね。…そうですね。", reading: "さむくなりましたね。…そうですね。", en: "It's got cold, hasn't it? ...Yes, it has." },
                            { jp: "このラーメンはおいしいですね。…そうですね。", en: "This ramen is delicious, isn't it? ...Yes, it is." },
                            { jp: "今日は暑いですね。…そうですね。", reading: "きょうはあついですね。…そうですね。", en: "It's hot today, isn't it? ...Yes, it is." }
                        ]
                    },
                    {
                        pattern: "何（なん and なに）",
                        meaning: "Both mean 'what' — use なん before だ/な/た/だ行 sounds or before a counter, and なに in most other cases.",
                        connection: ["なん + です／の／と 等（た・だ・な行の前、助数詞の前）", "なに + を／が 等"],
                        examples: [
                            { jp: "それは何ですか。", reading: "それはなんですか。", en: "What is that?" },
                            { jp: "何を買いますか。", reading: "なにをかいますか。", en: "What will you buy?" },
                            { jp: "テレサちゃんは何歳ですか。", reading: "テレサちゃんはなんさいですか。", en: "How old is Teresa?" }
                        ]
                    },
                    {
                        pattern: "N(time)にV",
                        meaning: "Mark a specific point in time with に for a momentary action — used when the time noun includes a number, but usually omitted for relative time words like 今日/明日.",
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
                        meaning: "State the current time using hour and minute counters.",
                        connection: ["今 + 数字時 + 数字分 + です"],
                        examples: [
                            { jp: "今、何時ですか。…七時十分です。", reading: "いま、なんじですか。…しちじじゅっぷんです。", en: "What time is it now? ...It's seven ten." },
                            { jp: "ニューヨークは今、何時ですか。", reading: "ニューヨークはいま、なんじですか。", en: "What time is it now in New York?" },
                            { jp: "今、三時半です。", reading: "いま、さんじはんです。", en: "It's half past three now." }
                        ]
                    },
                    {
                        pattern: "V辞書形／ない形／い-adj／な-adjな／Nの＋とき、〜",
                        meaning: "とき connects two clauses to say when the state/action of the main clause happens — the form before とき matches noun-modification rules.",
                        connection: ["動詞（辞書形／ない形／た形）+ とき、〜", "い形容詞（〜い）+ とき、〜", "な形容詞 + な + とき、〜", "名詞 + の + とき、〜"],
                        examples: [
                            { jp: "図書館で本を借りるとき、カードが要ります。", reading: "としょかんでほんをかりるとき、カードがいります。", en: "When you borrow books from the library, you need a card." },
                            { jp: "暇なとき、うちへ遊びに来ませんか。", reading: "ひまなとき、うちへあそびにきませんか。", en: "Won't you come to my place when you are free?" },
                            { jp: "子供のとき、よく川で泳ぎました。", reading: "こどものとき、よくかわでおよぎました。", en: "I used to swim in a river when I was a child." }
                        ]
                    },
                    {
                        pattern: "Sね",
                        meaning: "Add ね to the end of a sentence to show sympathy or seek the listener's agreement.",
                        connection: ["文 + ね"],
                        examples: [
                            { jp: "大変ですね。", reading: "たいへんですね。", en: "That must be hard." },
                            { jp: "いい天気ですね。", reading: "いいてんきですね。", en: "Nice weather, isn't it?" },
                            { jp: "このラーメンはおいしいですね。", en: "This ramen is delicious, isn't it?" }
                        ]
                    },
                    {
                        pattern: "V辞書形／た形＋と、〜",
                        meaning: "と connects two sentences to show that S2 inevitably happens as a result of S1 — cannot be used with will/hope/invitation/request in S2.",
                        connection: ["動詞（辞書形）+ と、〜"],
                        examples: [
                            { jp: "このボタンを押すと、お釣りが出ます。", reading: "このボタンをおすと、おつりがでます。", en: "Press this button, and the change will come out." },
                            { jp: "右へ曲がると、郵便局があります。", reading: "みぎへまがると、ゆうびんきょくがあります。", en: "Turn to the right, and you will find the post office." },
                            { jp: "これを回すと、音が大きくなります。", reading: "これをまわすと、おとがおおきくなります。", en: "Turn this, and the volume will go up." }
                        ]
                    },
                    {
                        pattern: "Sよ",
                        meaning: "Add よ to the end of a sentence to emphasize new information or assert your opinion.",
                        connection: ["文 + よ"],
                        examples: [
                            { jp: "次の普通ですよ。", reading: "つぎのふつうですよ。", en: "The next local train is the one." },
                            { jp: "危ないですよ。", reading: "あぶないですよ。", en: "It's dangerous!" },
                            { jp: "無理なダイエットは体によくないですよ。", reading: "むりなダイエットはからだによくないですよ。", en: "Excessive dieting is bad for your health." }
                        ]
                    },
                    {
                        pattern: "N(place)をV(移動動詞)",
                        meaning: "Use を to mark the place a person or thing passes through, with a verb of movement.",
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
                        meaning: "Deny an entire category asked about by an interrogative + も, with a negative verb.",
                        connection: ["interrogative + も + Vません"],
                        examples: [
                            { jp: "どこへも行きません。", reading: "どこへもいきません。", en: "I don't go anywhere." },
                            { jp: "何も食べません。", reading: "なにもたべません。", en: "I don't eat anything." },
                            { jp: "誰もいません。", reading: "だれもいません。", en: "Nobody is there." }
                        ]
                    },
                    {
                        pattern: "N(place)へVます-form／Nに行きます",
                        meaning: "Express the purpose of going somewhere with に.",
                        connection: ["場所へ + Vます形（語幹）／名詞 + に + 行きます／来ます／帰ります"],
                        examples: [
                            { jp: "神戸へ買い物に行きます。", reading: "こうべへかいものにいきます。", en: "I'm going to Kobe for shopping." },
                            { jp: "日本へ美術の勉強に来ました。", reading: "にほんへびじゅつのべんきょうにきました。", en: "I came to Japan to study art." },
                            { jp: "京都のお祭りに行きます。", reading: "きょうとのおまつりにいきます。", en: "I'll go to the festival in Kyoto." }
                        ]
                    },
                    {
                        pattern: "N(乗り物)で行きます",
                        meaning: "Mark the means of transportation with で.",
                        connection: ["乗り物 + で + 行きます／来ます／帰ります"],
                        examples: [
                            { jp: "電車で行きます。", reading: "でんしゃでいきます。", en: "I'll go by train." },
                            { jp: "タクシーで来ました。", reading: "タクシーできました。", en: "I came by taxi." },
                            { jp: "歩いて帰りました。", reading: "あるいてかえりました。", en: "I walked home." }
                        ]
                    },
                    {
                        pattern: "Nをします",
                        meaning: "する with a noun object — used broadly for playing sports/games, holding gatherings, and doing tasks.",
                        connection: ["名詞 + を + します"],
                        examples: [
                            { jp: "サッカーをします。", en: "I play soccer." },
                            { jp: "パーティーをします。", en: "I give a party." },
                            { jp: "宿題をします。", reading: "しゅくだいをします。", en: "I do my homework." }
                        ]
                    },
                    {
                        pattern: "N(人・動物)とV",
                        meaning: "Mark a companion (person or animal) with と when doing something together.",
                        connection: ["人／動物 + と + 動詞", "一人で（一人の場合、とは使わない）"],
                        examples: [
                            { jp: "家族と日本へ来ました。", reading: "かぞくとにほんへきました。", en: "I came to Japan with my family." },
                            { jp: "一人で東京へ行きます。", reading: "ひとりでとうきょうへいきます。", en: "I'll go to Tokyo alone." },
                            { jp: "友達と映画を見ました。", reading: "ともだちとえいがをみました。", en: "I watched a movie with a friend." }
                        ]
                    },
                    {
                        pattern: "お〜",
                        meaning: "The prefix お is added to words to show respect toward the listener, or simply to speak politely.",
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
                        meaning: "Mark the tool or means used for an action with で.",
                        connection: ["道具／手段 + で + 動詞"],
                        examples: [
                            { jp: "はしで食べます。", en: "I eat with chopsticks." },
                            { jp: "日本語でレポートを書きます。", reading: "にほんごでレポートをかきます。", en: "I write my report in Japanese." },
                            { jp: "ボールペンで書いてください。", en: "Please write with a ballpoint pen." }
                        ]
                    },
                    {
                        pattern: "N1はN2が adjective",
                        meaning: "Describe an attribute of N1 — N1 is the topic (は), N2 is the subject of the description (が).",
                        connection: ["N1（話題）+ は + N2（属性）+ が + 形容詞"],
                        examples: [
                            { jp: "大阪は食べ物がおいしいです。", reading: "おおさかはたべものがおいしいです。", en: "Food is tasty in Osaka." },
                            { jp: "マリアさんは髪が長いです。", reading: "マリアさんはかみがながいです。", en: "Maria has long hair." },
                            { jp: "ドイツのフランケンはワインが有名です。", reading: "ドイツのフランケンはワインがゆうめいです。", en: "Franken in Germany produces famous wine." }
                        ]
                    },
                    {
                        pattern: "「言葉」は〜語で何ですか",
                        meaning: "Ask how to say a word or sentence in another language.",
                        connection: ["「言葉」は + 言語 + で + 何ですか"],
                        examples: [
                            { jp: "「ありがとう」は英語で何ですか。…「Thank you」です。", reading: "「ありがとう」はえいごでなんですか。…「Thank you」です。", en: "What's 'arigatou' in English? ...It's 'Thank you.'" },
                            { jp: "これは日本語で何ですか。", reading: "これはにほんごでなんですか。", en: "What is this called in Japanese?" },
                            { jp: "「さようなら」は中国語で何ですか。", reading: "「さようなら」はちゅうごくごでなんですか。", en: "What is 'sayonara' in Chinese?" }
                        ]
                    },
                    {
                        pattern: "どうやって",
                        meaning: "Ask the way or method of doing something.",
                        connection: ["どうやって + 動詞"],
                        examples: [
                            { jp: "大学までどうやって行きますか。…京都駅から16番のバスに乗って、大学前で降ります。", reading: "だいがくまでどうやっていきますか。…きょうとえきからじゅうろくばんのバスにのって、だいがくまえでおります。", en: "How do you go to your university? ...I take a No.16 bus from Kyoto Station and get off at Daigaku-mae." },
                            { jp: "どうやって使いますか。", reading: "どうやってつかいますか。", en: "How do you use it?" },
                            { jp: "漢字はどうやって覚えますか。", reading: "かんじはどうやっておぼえますか。", en: "How do you memorize kanji?" }
                        ]
                    },
                    {
                        pattern: "もうVました",
                        meaning: "State that an action has already been completed, using もう with the past tense.",
                        connection: ["もう + Vました"],
                        examples: [
                            { jp: "もう荷物を送りましたか。…はい、もう送りました。", reading: "もうにもつをおくりましたか。…はい、もうおくりました。", en: "Have you sent the parcel yet? ...Yes, I already sent it." },
                            { jp: "もう昼ご飯を食べましたか。…いいえ、まだです。", reading: "もうひるごはんをたべましたか。…いいえ、まだです。", en: "Have you had lunch yet? ...No, not yet." },
                            { jp: "切符はもう買いましたか。", reading: "きっぷはもうかいましたか。", en: "Have you bought the ticket yet?" }
                        ]
                    },
                    {
                        pattern: "どのN",
                        meaning: "Ask the listener to identify one among more than two concrete options.",
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
                        meaning: "Place an adjective directly before a noun to modify it.",
                        connection: ["な形容詞 + な + 名詞", "い形容詞（〜い）+ 名詞"],
                        examples: [
                            { jp: "親切な先生です。", reading: "しんせつなせんせいです。", en: "He is a kind teacher." },
                            { jp: "富士山は高い山です。", reading: "ふじさんはたかいやまです。", en: "Mt. Fuji is a high mountain." },
                            { jp: "きれいな部屋に住んでいます。", reading: "きれいなへやにすんでいます。", en: "I live in a clean room." }
                        ]
                    },
                    {
                        pattern: "文＋N（名詞修飾）",
                        meaning: "A whole sentence can modify a noun, with its predicate in the plain form (な for な-adjectives, の for nouns) — placed directly before the noun.",
                        connection: ["動詞（普通形）+ 名詞", "い形容詞（普通形）+ 名詞", "な形容詞 + な + 名詞", "名詞1 + の + 名詞2"],
                        examples: [
                            { jp: "これはミラーさんが作ったケーキです。", reading: "これはミラーさんがつくったケーキです。", en: "This is the cake which Mr. Miller baked." },
                            { jp: "わたしはカリナさんがかいた絵が好きです。", reading: "わたしはカリナさんがかいたえがすきです。", en: "I like the picture that Ms. Karina drew." },
                            { jp: "きれいで、静かなうちに住んでいます。", reading: "きれいで、しずかなうちにすんでいます。", en: "I live in a house that is clean and quiet." }
                        ]
                    },
                    {
                        pattern: "Nはどうですか",
                        meaning: "Ask for an impression or opinion about something the listener has experienced.",
                        connection: ["名詞 + は + どうですか"],
                        examples: [
                            { jp: "日本の生活はどうですか。…楽しいです。", reading: "にほんのせいかつはどうですか。…たのしいです。", en: "How is life in Japan? ...It's enjoyable." },
                            { jp: "この映画はどうでしたか。", reading: "このえいがはどうでしたか。", en: "How was this movie?" },
                            { jp: "新しい仕事はどうですか。", reading: "あたらしいしごとはどうですか。", en: "How is your new job?" }
                        ]
                    },
                    {
                        pattern: "N(従属節の主語)が",
                        meaning: "In a clause that modifies a noun, the subject of that clause is marked with が, not は.",
                        connection: ["N1（従属節の主語）+ が + 動詞／形容詞 + N2"],
                        examples: [
                            { jp: "これはミラーさんが住んでいたうちです。", reading: "これはミラーさんがすんでいたうちです。", en: "This is the house where Mr. Miller lived." },
                            { jp: "あなたは彼が生まれた所を知っていますか。", reading: "あなたはかれがうまれたところをしっていますか。", en: "Do you know the place where he was born?" },
                            { jp: "わたしは友達と映画を見る約束があります。", reading: "わたしはともだちとえいがをみるやくそくがあります。", en: "I have an arrangement to see a movie with a friend of mine." }
                        ]
                    },
                    {
                        pattern: "N1はどんなN2ですか",
                        meaning: "Ask the listener to describe or characterize N1.",
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
                        meaning: "Adverbs of degree/amount placed before the verb they modify.",
                        connection: ["よく／だいたい／たくさん／少し + Vます（肯定）", "あまり／全然 + Vません（否定）"],
                        examples: [
                            { jp: "英語がよく分かります。", reading: "えいごがよくわかります。", en: "I understand English very well." },
                            { jp: "お金があまりありません。", reading: "おかねがあまりありません。", en: "I don't have much money." },
                            { jp: "英語が全然分かりません。", reading: "えいごがぜんぜんわかりません。", en: "I don't understand English at all." }
                        ]
                    },
                    {
                        pattern: "S1から、S2",
                        meaning: "Connect two sentences to show a causal relationship — S1 is the reason for S2.",
                        connection: ["文1（理由）から、文2"],
                        examples: [
                            { jp: "時間がありませんから、新聞を読みません。", reading: "じかんがありませんから、しんぶんをよみません。", en: "Because I don't have time, I don't read the newspaper." },
                            { jp: "今日は子供の誕生日ですから、早く帰ります。", reading: "きょうはこどものたんじょうびですから、はやくかえります。", en: "Today is my child's birthday, so I'll go home early." },
                            { jp: "暇ですから、手伝います。", reading: "ひまですから、てつだいます。", en: "Since I'm free, I'll help." }
                        ]
                    },
                    {
                        pattern: "どうして",
                        meaning: "Ask the reason for something — the answer usually ends with から.",
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
                        meaning: "Say how often you do something, per a given period.",
                        connection: ["期間 + に + 数量 + 回 + 動詞"],
                        examples: [
                            { jp: "一か月に二回映画を見ます。", reading: "いっかげつににかいえいがをみます。", en: "I go to see movies twice a month." },
                            { jp: "一週間に三回泳ぎます。", reading: "いっしゅうかんにさんかいおよぎます。", en: "I swim three times a week." },
                            { jp: "一年に一回国へ帰ります。", reading: "いちねんにいっかいくにへかえります。", en: "I go back to my country once a year." }
                        ]
                    },
                    {
                        pattern: "Quantifierだけ／Nだけ",
                        meaning: "Add だけ after a quantifier or noun to mean 'only'.",
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
                        meaning: "Express the speaker's desire to have something.",
                        connection: ["名詞 + が + 欲しいです"],
                        examples: [
                            { jp: "わたしは友達が欲しいです。", reading: "わたしはともだちがほしいです。", en: "I want a friend." },
                            { jp: "今、何がいちばん欲しいですか。…車が欲しいです。", reading: "いま、なにがいちばんほしいですか。…くるまがほしいです。", en: "What do you want most now? ...I want a car." },
                            { jp: "子供が欲しいですか。…いいえ、欲しくないです。", reading: "こどもがほしいですか。…いいえ、ほしくないです。", en: "Do you want a child? ...No, I don't." }
                        ]
                    },
                    {
                        pattern: "どこか／何か",
                        meaning: "Indefinite pronouns meaning 'somewhere/anywhere' and 'something/anything'.",
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
                        meaning: "Japanese verbs fall into three conjugation groups based on their ます-form ending, which determines how to build the て-form, ない-form, dictionary form and た-form.",
                        connection: ["グループI：ます形の最後がい段（例：書きます）", "グループII：ます形の最後がえ段が多い（例：食べます）", "グループIII：します・来ます"],
                        examples: [
                            { jp: "「書きます」はグループIです。", reading: "「かきます」はグループいちです。", en: "'Kakimasu' is a Group I verb." },
                            { jp: "「食べます」はグループIIです。", reading: "「たべます」はグループにです。", en: "'Tabemasu' is a Group II verb." },
                            { jp: "「します」と「来ます」はグループIIIです。", reading: "「します」と「きます」はグループさんです。", en: "'Shimasu' and 'kimasu' are Group III verbs." }
                        ]
                    },
                    {
                        pattern: "Vます-formましょうか",
                        meaning: "Offer to do something for the listener.",
                        connection: ["動詞（ます形語幹）+ ましょうか"],
                        examples: [
                            { jp: "荷物を持ちましょうか。…すみません。お願いします。", reading: "にもつをもちましょうか。…すみません。おねがいします。", en: "Shall I carry your luggage? ...Thank you. Please." },
                            { jp: "窓を開けましょうか。", reading: "まどをあけましょうか。", en: "Shall I open the window?" },
                            { jp: "タクシーを呼びましょうか。", reading: "タクシーをよびましょうか。", en: "Shall I call a taxi?" }
                        ]
                    },
                    {
                        pattern: "Nが V（自然現象・状態）",
                        meaning: "When describing a natural phenomenon or a state/scene as it is, the subject is marked with が.",
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
                        meaning: "In addition to 'be doing', て-formいます also describes a continuing state resulting from a past action — knowing, living, being married.",
                        connection: ["動詞（て形）+ います"],
                        examples: [
                            { jp: "わたしは結婚しています。", reading: "わたしはけっこんしています。", en: "I'm married." },
                            { jp: "わたしは田中さんを知っています。", reading: "わたしはたなかさんをしっています。", en: "I know Mr. Tanaka." },
                            { jp: "大阪に住んでいます。", reading: "おおさかにすんでいます。", en: "I live in Osaka." }
                        ]
                    },
                    {
                        pattern: "知りません",
                        meaning: "The negative of 知っています is 知りません, not 知っていません.",
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
                        meaning: "Join verb sentences describing actions in the order they happen, using the て-form.",
                        connection: ["動詞（て形）、動詞（て形）、〜"],
                        examples: [
                            { jp: "朝ジョギングをして、シャワーを浴びて、会社へ行きます。", reading: "あさジョギングをして、シャワーをあびて、かいしゃへいきます。", en: "In the morning, I jog, take a shower and go to the office." },
                            { jp: "神戸へ行って、映画を見て、お茶を飲みました。", reading: "こうべへいって、えいがをみて、おちゃをのみました。", en: "I went to Kobe, saw a movie and drank tea." },
                            { jp: "手を洗って、ご飯を食べます。", reading: "てをあらって、ごはんをたべます。", en: "I wash my hands and eat a meal." }
                        ]
                    },
                    {
                        pattern: "い-adj(〜い)→〜くて、〜／N・な-adj[な]で、〜",
                        meaning: "Join a descriptive sentence to another sentence — drop い and add くて for i-adjectives, or change です to で for nouns/na-adjectives.",
                        connection: ["い形容詞（語幹）+ くて、〜", "名詞／な形容詞 + で、〜"],
                        examples: [
                            { jp: "ミラーさんは若くて、元気です。", reading: "ミラーさんはわかくて、げんきです。", en: "Mr. Miller is young and lively." },
                            { jp: "カリナさんはインドネシア人で、京都大学の留学生です。", reading: "カリナさんはインドネシアじんで、きょうとだいがくのりゅうがくせいです。", en: "Ms. Karina is Indonesian and a student of Kyoto University." },
                            { jp: "奈良は静かで、きれいな町です。", reading: "ならはしずかで、きれいなまちです。", en: "Nara is a quiet and beautiful city." }
                        ]
                    },
                    {
                        pattern: "V1て-formから、V2",
                        meaning: "State that V2 happens after V1 is completed.",
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
                        meaning: "Express ability or possibility, with a noun or a nominalized verb phrase.",
                        connection: ["名詞 + が + できます", "動詞（辞書形）+ こと + が + できます"],
                        examples: [
                            { jp: "ミラーさんは日本語ができます。", reading: "ミラーさんはにほんごができます。", en: "Mr. Miller can speak Japanese." },
                            { jp: "ミラーさんは漢字を読むことができます。", reading: "ミラーさんはかんじをよむことができます。", en: "Mr. Miller can read Kanji." },
                            { jp: "カードで払うことができます。", reading: "カードではらうことができます。", en: "You can pay by credit card." }
                        ]
                    },
                    {
                        pattern: "わたしの趣味は{N／Vdictionary formこと}です",
                        meaning: "State a hobby, optionally describing it more concretely with a nominalized verb phrase.",
                        connection: ["わたしの趣味は + 名詞 + です", "わたしの趣味は + 動詞（辞書形）+ こと + です"],
                        examples: [
                            { jp: "わたしの趣味は音楽です。", reading: "わたしのしゅみはおんがくです。", en: "My hobby is music." },
                            { jp: "わたしの趣味は音楽を聞くことです。", reading: "わたしのしゅみはおんがくをきくことです。", en: "My hobby is listening to music." },
                            { jp: "わたしの趣味は写真を撮ることです。", reading: "わたしのしゅみはしゃしんをとることです。", en: "My hobby is taking photographs." }
                        ]
                    },
                    {
                        pattern: "V1dictionary形／Nの／Quantifier(期間)＋まえに、V2",
                        meaning: "State that V2 happens before V1 — the first verb stays in dictionary form regardless of tense.",
                        connection: ["動詞（辞書形）+ まえに、〜", "名詞 + の + まえに、〜", "期間 + まえに、〜"],
                        examples: [
                            { jp: "日本へ来るまえに、日本語を勉強しました。", reading: "にほんへくるまえに、にほんごをべんきょうしました。", en: "I studied Japanese before I came to Japan." },
                            { jp: "食事のまえに、手を洗います。", reading: "しょくじのまえに、てをあらいます。", en: "I wash my hands before eating." },
                            { jp: "田中さんは一時間まえに、出かけました。", reading: "たなかさんはいちじかんまえに、でかけました。", en: "Mr. Tanaka left an hour ago." }
                        ]
                    },
                    {
                        pattern: "なかなか／ぜひ",
                        meaning: "なかなか with a negative means 'not easily'; ぜひ emphasizes a hope or request.",
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
                        meaning: "Describe an experience you have had, using the nominalized た-form + こと.",
                        connection: ["動詞（た形）+ こと + が + あります"],
                        examples: [
                            { jp: "馬に乗ったことがあります。", reading: "うまにのったことがあります。", en: "I have ridden a horse." },
                            { jp: "すしを食べたことがありません。", reading: "すしをたべたことがありません。", en: "I have never eaten sushi." },
                            { jp: "北海道へ行ったことがありますか。", reading: "ほっかいどうへいったことがありますか。", en: "Have you been to Hokkaido?" }
                        ]
                    },
                    {
                        pattern: "Vた-formり、Vた-formりします",
                        meaning: "List a few representative actions among others, without implying a time order between them.",
                        connection: ["動詞1（た形）+ り、動詞2（た形）+ り + します"],
                        examples: [
                            { jp: "日曜日はテニスをしたり、映画を見たりします。", reading: "にちようびはテニスをしたり、えいがをみたりします。", en: "On Sundays I play tennis, see a movie and so on." },
                            { jp: "休みの日は本を読んだり、音楽を聞いたりします。", reading: "やすみのひはほんをよんだり、おんがくをきいたりします。", en: "On days off I read books, listen to music and so on." },
                            { jp: "京都のお寺や神社を見たり、買い物をしたりしました。", reading: "きょうとのおてらやじんじゃをみたり、かいものをしたりしました。", en: "I visited temples and shrines in Kyoto, did some shopping, and so on." }
                        ]
                    },
                    {
                        pattern: "い-adj→〜く／な-adj[な]→に／Nに＋なります",
                        meaning: "Express a change of state — 'become'.",
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
                        meaning: "Japanese has two speech styles: polite (です／ます) and plain (だ／辞書形). Polite style suits most conversation; plain style suits close friends, family and writing.",
                        connection: ["丁寧体：あした東京へ行きます。", "普通体：あした東京へ行く。"],
                        examples: [
                            { jp: "毎日忙しいです。／毎日忙しい。", reading: "まいにちいそがしいです。／まいにちいそがしい。", en: "I am busy every day. (polite / plain)" },
                            { jp: "相撲が好きです。／相撲が好きだ。", reading: "すもうがすきです。／すもうがすきだ。", en: "I like sumo. (polite / plain)" },
                            { jp: "ドイツへ行ったことがありません。／ドイツへ行ったことがない。", reading: "ドイツへいったことがありません。／ドイツへいったことがない。", en: "I have never been to Germany. (polite / plain)" }
                        ]
                    },
                    {
                        pattern: "普通体の会話",
                        meaning: "In plain-style conversation, the question particle か and many other particles are often dropped, and です becomes だ (often also dropped).",
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
                        meaning: "State a conjecture or opinion, marking the content with と before おもいます.",
                        connection: ["普通形 + と + 思います"],
                        examples: [
                            { jp: "あした雨が降ると思います。", reading: "あしたあめがふるとおもいます。", en: "I think it will rain tomorrow." },
                            { jp: "日本は物価が高いと思います。", reading: "にほんはぶっかがたかいとおもいます。", en: "I think that prices are high in Japan." },
                            { jp: "ミラーさんはこのニュースを知っていますか。…いいえ、たぶん知らないと思います。", reading: "ミラーさんはこのニュースをしっていますか。…いいえ、たぶんしらないとおもいます。", en: "Does Mr. Miller know this news? ...No, I don't think he does." }
                        ]
                    },
                    {
                        pattern: "N1(place)でN2があります",
                        meaning: "When N2 is an event (party, concert, festival, accident etc.), あります means 'to take place'.",
                        connection: ["場所 + で + 行事 + が + あります"],
                        examples: [
                            { jp: "東京で日本とブラジルのサッカーの試合があります。", reading: "とうきょうでにほんとブラジルのサッカーのしあいがあります。", en: "A football game between Japan and Brazil will be held in Tokyo." },
                            { jp: "来月、京都でお祭りがあります。", reading: "らいげつ、きょうとでおまつりがあります。", en: "There will be a festival in Kyoto next month." },
                            { jp: "会社でパーティーがありました。", reading: "かいしゃでパーティーがありました。", en: "There was a party at the company." }
                        ]
                    },
                    {
                        pattern: "「S」plain formといいます",
                        meaning: "Quote what someone says or said — directly with the exact words in quotes, or indirectly with the plain form.",
                        connection: ["「文」と + 言います（直接引用）", "普通形 + と + 言います（間接引用）"],
                        examples: [
                            { jp: "寝るまえに「お休みなさい」と言います。", reading: "ねるまえに「おやすみなさい」といいます。", en: "We say \"Good night\" before going to bed." },
                            { jp: "ミラーさんは「来週東京へ出張します」と言いました。", reading: "ミラーさんは「らいしゅうとうきょうへしゅっちょうします」といいました。", en: "Mr. Miller said, \"I will go to Tokyo on a business trip next week.\"" },
                            { jp: "ミラーさんは来週東京へ出張すると言いました。", reading: "ミラーさんはらいしゅうとうきょうへしゅっちょうするといいました。", en: "Mr. Miller said that he would go to Tokyo on a business trip next week." }
                        ]
                    },
                    {
                        pattern: "N(occasion)で／NでもV",
                        meaning: "で marks the occasion an action takes place on; でも gives one example among similar options when suggesting something.",
                        connection: ["行事 + で", "名詞（例）+ でも + 動詞"],
                        examples: [
                            { jp: "会議で何か意見を言いましたか。", reading: "かいぎでなにかいけんをいいましたか。", en: "Did you give your opinion at the meeting?" },
                            { jp: "ちょっとビールでも飲みませんか。", en: "Shall we drink beer or something?" },
                            { jp: "お茶でも飲みましょう。", reading: "おちゃでものみましょう。", en: "Let's have some tea or something." }
                        ]
                    },
                    {
                        pattern: "V／い-adj／な-adj plain form＋でしょう？",
                        meaning: "Say でしょう with rising intonation to confirm that the listener agrees or shares the same knowledge.",
                        connection: ["普通形 + でしょう？", "名詞 + だ + でしょう？"],
                        examples: [
                            { jp: "あしたパーティーに行くでしょう？…ええ、行きます。", reading: "あしたパーティーにいくでしょう？…ええ、いきます。", en: "You are going to the party tomorrow, aren't you? ...Yes, I am." },
                            { jp: "北海道は寒かったでしょう？…いいえ、そんなに寒くなかったです。", reading: "ほっかいどうはさむかったでしょう？…いいえ、そんなにさむくなかったです。", en: "It was cold in Hokkaido, wasn't it? ...No, it wasn't that cold." },
                            { jp: "パソコンは便利でしょう？", reading: "パソコンはべんりでしょう？", en: "Personal computers are useful, aren't they?" }
                        ]
                    },
                    {
                        pattern: "Vない-formないと……",
                        meaning: "An abbreviated form of Vない-formないといけません, implying 'I have to ~' by trailing off.",
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
                        meaning: "Unlike あげます, くれます is used when someone gives something to the speaker (or the speaker's in-group).",
                        connection: ["N（あげる人）は + わたし[に] + N（もの）を + くれます"],
                        examples: [
                            { jp: "佐藤さんはわたしにクリスマスカードをくれました。", reading: "さとうさんはわたしにクリスマスカードをくれました。", en: "Ms. Sato gave me a Christmas card." },
                            { jp: "母がセーターを送ってくれました。", reading: "ははがセーターをおくってくれました。", en: "My mother sent me a sweater." },
                            { jp: "佐藤さんは妹にお菓子をくれました。", reading: "さとうさんはいもうとにおかしをくれました。", en: "Ms. Sato gave candies to my younger sister." }
                        ]
                    },
                    {
                        pattern: "Vて-form あげます／もらいます／くれます",
                        meaning: "These verbs also describe doing an action for/from someone, expressing who benefits and a sense of goodwill or gratitude.",
                        connection: ["Vて形 + あげます（する側が話者の場合、目上の人には使わない）", "Vて形 + もらいます（してもらう側が主語）", "Vて形 + くれます（する側が主語、多くは「わたしに」が省略される）"],
                        examples: [
                            { jp: "わたしは木村さんに本を貸してあげました。", reading: "わたしはきむらさんにほんをかしてあげました。", en: "I lent Ms. Kimura a book." },
                            { jp: "わたしは山田さんに図書館の電話番号を教えてもらいました。", reading: "わたしはやまださんにとしょかんのでんわばんごうをおしえてもらいました。", en: "Mr. Yamada told me the telephone number of the library." },
                            { jp: "山田さんは車で送ってくれました。", reading: "やまださんはくるまでおくってくれました。", en: "Mr. Yamada drove me in his car." }
                        ]
                    },
                    {
                        pattern: "疑問詞が V",
                        meaning: "When the subject itself is being asked about, the interrogative is marked with が.",
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
                        meaning: "Attach ら to the past-tense plain form to make a conditional 'if' clause.",
                        connection: ["普通形（た形）+ ら、〜"],
                        examples: [
                            { jp: "お金があったら、旅行します。", reading: "おかねがあったら、りょこうします。", en: "If I had money, I would travel." },
                            { jp: "安かったら、パソコンを買いたいです。", reading: "やすかったら、パソコンをかいたいです。", en: "If it's inexpensive, I want to buy a personal computer." },
                            { jp: "暇だったら、手伝ってください。", reading: "ひまだったら、てつだってください。", en: "If you are free, please give me a hand." }
                        ]
                    },
                    {
                        pattern: "Vた-formら、〜",
                        meaning: "Say that an action or state that is sure to happen will trigger the main clause once it's finished — the main clause is in the present tense.",
                        connection: ["動詞（た形）+ ら、〜"],
                        examples: [
                            { jp: "十時になったら、出かけましょう。", reading: "じゅうじになったら、でかけましょう。", en: "Let's go out when it gets to ten." },
                            { jp: "うちへ帰ったら、すぐシャワーを浴びます。", reading: "うちへかえったら、すぐシャワーをあびます。", en: "I take a shower soon after I return home." },
                            { jp: "雨が降ったら、行きません。", reading: "あめがふったら、いきません。", en: "If it rains, I won't go." }
                        ]
                    },
                    {
                        pattern: "Vて-form／い-adj〜くて／な-adj[な]で／Nでも、〜",
                        meaning: "Present a reverse condition — 'even if' — where what naturally follows doesn't happen.",
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
                id: "n4-carryover-chapter-1",
                title: "Chapter 1",
                items: [
                    {
                        pattern: "〜なければなりません",
                        meaning: "Expresses obligation — \"must\" do something.",
                        connection: ["動詞（ない形語幹）+ なければなりません"],
                        examples: [
                            { jp: "明日、早く起きなければなりません。", reading: "あした、はやくおきなければなりません。", en: "I must wake up early tomorrow." },
                            { jp: "宿題をしなければなりません。", reading: "しゅくだいをしなければなりません。", en: "I must do my homework." },
                            { jp: "薬を飲まなければなりません。", reading: "くすりをのまなければなりません。", en: "I must take medicine." }
                        ]
                    },
                    {
                        pattern: "〜てもいいです",
                        meaning: "Asks or grants permission — \"may\" or \"is allowed to.\"",
                        connection: ["動詞（て形）+ もいいです"],
                        examples: [
                            { jp: "ここに座ってもいいですか。", reading: "ここにすわってもいいですか。", en: "May I sit here?" },
                            { jp: "このペンを使ってもいいですか。", reading: "このペンをつかってもいいですか。", en: "May I use this pen?" },
                            { jp: "窓を開けてもいいですか。", reading: "まどをあけてもいいですか。", en: "May I open the window?" }
                        ]
                    },
                    {
                        pattern: "〜たら",
                        meaning: "A conditional — \"if\" or \"when\" something happens.",
                        connection: ["動詞／形容詞／名詞（た形）+ ら"],
                        examples: [
                            { jp: "雨が降ったら、行きません。", reading: "あめがふったら、いきません。", en: "If it rains, I won't go." },
                            { jp: "安かったら、買います。", reading: "やすかったら、かいます。", en: "If it's cheap, I'll buy it." },
                            { jp: "時間があったら、遊びに来てください。", reading: "じかんがあったら、あそびにきてください。", en: "If you have time, please come play." }
                        ]
                    },
                    {
                        pattern: "〜そうです",
                        meaning: "Describes an appearance — \"looks like\" or \"seems.\"",
                        connection: ["動詞（ます形語幹）／い形容詞／な形容詞（語幹）+ そうです", "※いい → よさそうです（例外）"],
                        examples: [
                            { jp: "このケーキは美味しそうです。", reading: "このケーキはおいしそうです。", en: "This cake looks delicious." },
                            { jp: "雨が降りそうです。", reading: "あめがふりそうです。", en: "It looks like it's going to rain." },
                            { jp: "彼は元気そうです。", reading: "かれはげんきそうです。", en: "He looks well." }
                        ]
                    },
                    {
                        pattern: "〜ようになる",
                        meaning: "Describes a change of state — \"come to\" be able to do something.",
                        connection: ["動詞（辞書形／可能形）+ ようになる"],
                        examples: [
                            { jp: "漢字が読めるようになりました。", reading: "かんじがよめるようになりました。", en: "I've come to be able to read Kanji." },
                            { jp: "少し日本語が話せるようになりました。", reading: "すこしにほんごがはなせるようになりました。", en: "I've come to be able to speak a little Japanese." },
                            { jp: "毎日練習して、上手に泳げるようになりました。", reading: "まいにちれんしゅうして、じょうずにおよげるようになりました。", en: "I practiced every day and became able to swim well." }
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
