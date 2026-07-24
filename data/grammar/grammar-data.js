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
                id: "desu-copula-adjectives",
                title: "です Copula & Adjectives",
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
                id: "masu-form-verbs",
                title: "Polite Verb Forms (ます-form)",
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
                id: "adjective-past-comparison",
                title: "Adjectives: Past & Comparison",
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
                id: "requests-prohibition",
                title: "Requests & Prohibition",
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
                id: "ability-manner",
                title: "Ability & Manner",
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
                id: "existence-connectors",
                title: "Existence & Connecting Words",
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
