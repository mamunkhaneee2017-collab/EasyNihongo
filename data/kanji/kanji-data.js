/* ==========================================
   KANJI DATA — Level → Chapter → Characters
   Same { chapters: [...] } shape as
   vocabulary-data.js / grammar-data.js — see
   data/content-helpers.js for how the flat
   item_index used by progress_items is
   computed from this.

   meanings/examples[].meanings are bilingual
   { en, bn } objects (matching vocabulary's and
   grammar's convention), and each kanji now also
   carries an exampleSentence — a full jp/reading/
   meanings sentence, same shape as vocabulary's
   `example` field — not just example words.

   examples[].reading and exampleSentence.reading
   are HIRAGANA furigana, not romaji — see
   data/grammar/grammar-data.js header for the
   full site-wide convention. on/kun readings were
   already hiragana/katakana as expected and are
   untouched.

   N4 keeps its previously-authored 4 kanji as
   a single chapter (real content, just not yet
   re-organized into a full chapter set) — these
   have no example words (none were authored
   originally) but do get an exampleSentence.
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
                    { char: "一", on: "イチ", kun: "ひと(つ)", meanings: { en: "one", bn: "এক" }, strokes: 1, examples: [
                        { word: "一つ", reading: "ひとつ", meanings: { en: "one (thing)", bn: "একটি" } },
                        { word: "一月", reading: "いちがつ", meanings: { en: "January", bn: "জানুয়ারি" } },
                        { word: "一人", reading: "ひとり", meanings: { en: "one person", bn: "একজন" } }
                    ], exampleSentence: { jp: "りんごが一つあります。", reading: "りんごがひとつあります。", meanings: { en: "There is one apple.", bn: "একটি আপেল আছে।" } } },
                    { char: "二", on: "ニ", kun: "ふた(つ)", meanings: { en: "two", bn: "দুই" }, strokes: 2, examples: [
                        { word: "二つ", reading: "ふたつ", meanings: { en: "two (things)", bn: "দুটি" } },
                        { word: "二月", reading: "にがつ", meanings: { en: "February", bn: "ফেব্রুয়ারি" } },
                        { word: "二人", reading: "ふたり", meanings: { en: "two people", bn: "দুইজন" } }
                    ], exampleSentence: { jp: "犬が二匹います。", reading: "いぬがにひきいます。", meanings: { en: "There are two dogs.", bn: "দুটি কুকুর আছে।" } } },
                    { char: "三", on: "サン", kun: "み(つ)", meanings: { en: "three", bn: "তিন" }, strokes: 3, examples: [
                        { word: "三つ", reading: "みっつ", meanings: { en: "three (things)", bn: "তিনটি" } },
                        { word: "三月", reading: "さんがつ", meanings: { en: "March", bn: "মার্চ" } },
                        { word: "三人", reading: "さんにん", meanings: { en: "three people", bn: "তিনজন" } }
                    ], exampleSentence: { jp: "本が三さつあります。", reading: "ほんがさんさつあります。", meanings: { en: "There are three books.", bn: "তিনটি বই আছে।" } } },
                    { char: "四", on: "シ", kun: "よ(つ), よん", meanings: { en: "four", bn: "চার" }, strokes: 5, examples: [
                        { word: "四つ", reading: "よっつ", meanings: { en: "four (things)", bn: "চারটি" } },
                        { word: "四月", reading: "しがつ", meanings: { en: "April", bn: "এপ্রিল" } },
                        { word: "四人", reading: "よにん", meanings: { en: "four people", bn: "চারজন" } }
                    ], exampleSentence: { jp: "テーブルに四つのコップがあります。", reading: "テーブルによっつのコップがあります。", meanings: { en: "There are four cups on the table.", bn: "টেবিলে চারটি গ্লাস আছে।" } } },
                    { char: "五", on: "ゴ", kun: "いつ(つ)", meanings: { en: "five", bn: "পাঁচ" }, strokes: 4, examples: [
                        { word: "五つ", reading: "いつつ", meanings: { en: "five (things)", bn: "পাঁচটি" } },
                        { word: "五月", reading: "ごがつ", meanings: { en: "May", bn: "মে" } },
                        { word: "五人", reading: "ごにん", meanings: { en: "five people", bn: "পাঁচজন" } }
                    ], exampleSentence: { jp: "五月は好きな月です。", reading: "ごがつはすきなつきです。", meanings: { en: "May is my favorite month.", bn: "মে আমার প্রিয় মাস।" } } }
                ]
            },
            {
                id: "days-time",
                title: "Days & Time",
                items: [
                    { char: "日", on: "ニチ, ジツ", kun: "ひ, -び, -か", meanings: { en: "day, sun, Japan", bn: "দিন, সূর্য, জাপান" }, strokes: 4, examples: [
                        { word: "日曜日", reading: "にちようび", meanings: { en: "Sunday", bn: "রবিবার" } },
                        { word: "毎日", reading: "まいにち", meanings: { en: "every day", bn: "প্রতিদিন" } },
                        { word: "誕生日", reading: "たんじょうび", meanings: { en: "birthday", bn: "জন্মদিন" } }
                    ], exampleSentence: { jp: "今日はいい天気です。", reading: "きょうはいいてんきです。", meanings: { en: "Today the weather is nice.", bn: "আজ আবহাওয়া ভালো।" } } },
                    { char: "月", on: "ゲツ, ガツ", kun: "つき", meanings: { en: "month, moon", bn: "মাস, চাঁদ" }, strokes: 4, examples: [
                        { word: "月曜日", reading: "げつようび", meanings: { en: "Monday", bn: "সোমবার" } },
                        { word: "一月", reading: "いちがつ", meanings: { en: "January", bn: "জানুয়ারি" } },
                        { word: "お月見", reading: "おつきみ", meanings: { en: "moon viewing", bn: "চাঁদ দেখা" } }
                    ], exampleSentence: { jp: "空に月が見えます。", reading: "そらにつきがみえます。", meanings: { en: "The moon is visible in the sky.", bn: "আকাশে চাঁদ দেখা যাচ্ছে।" } } },
                    { char: "火", on: "カ", kun: "ひ", meanings: { en: "fire", bn: "আগুন" }, strokes: 4, examples: [
                        { word: "火曜日", reading: "かようび", meanings: { en: "Tuesday", bn: "মঙ্গলবার" } },
                        { word: "花火", reading: "はなび", meanings: { en: "fireworks", bn: "আতশবাজি" } },
                        { word: "火事", reading: "かじ", meanings: { en: "a fire (blaze)", bn: "অগ্নিকাণ্ড" } }
                    ], exampleSentence: { jp: "火は熱いです。", reading: "ひはあついです。", meanings: { en: "Fire is hot.", bn: "আগুন গরম।" } } },
                    { char: "水", on: "スイ", kun: "みず", meanings: { en: "water", bn: "পানি" }, strokes: 4, examples: [
                        { word: "水曜日", reading: "すいようび", meanings: { en: "Wednesday", bn: "বুধবার" } },
                        { word: "お水", reading: "おみず", meanings: { en: "water (polite)", bn: "পানি (নম্র)" } },
                        { word: "水泳", reading: "すいえい", meanings: { en: "swimming", bn: "সাঁতার" } }
                    ], exampleSentence: { jp: "水を飲みます。", reading: "みずをのみます。", meanings: { en: "I drink water.", bn: "আমি পানি পান করি।" } } },
                    { char: "木", on: "モク, ボク", kun: "き, こ", meanings: { en: "tree, wood", bn: "গাছ, কাঠ" }, strokes: 4, examples: [
                        { word: "木曜日", reading: "もくようび", meanings: { en: "Thursday", bn: "বৃহস্পতিবার" } },
                        { word: "木", reading: "き", meanings: { en: "tree", bn: "গাছ" } },
                        { word: "木村", reading: "きむら", meanings: { en: "Kimura (surname)", bn: "কিমুরা (পদবি)" } }
                    ], exampleSentence: { jp: "公園に大きい木があります。", reading: "こうえんにおおきいきがあります。", meanings: { en: "There is a big tree in the park.", bn: "পার্কে একটি বড় গাছ আছে।" } } }
                ]
            },
            {
                id: "people-life",
                title: "People & Life",
                items: [
                    { char: "人", on: "ジン, ニン", kun: "ひと", meanings: { en: "person", bn: "মানুষ" }, strokes: 2, examples: [
                        { word: "日本人", reading: "にほんじん", meanings: { en: "Japanese person", bn: "জাপানি মানুষ" } },
                        { word: "一人", reading: "ひとり", meanings: { en: "one person", bn: "একজন মানুষ" } },
                        { word: "人々", reading: "ひとびと", meanings: { en: "people", bn: "মানুষেরা" } }
                    ], exampleSentence: { jp: "あの人は先生です。", reading: "あのひとはせんせいです。", meanings: { en: "That person is a teacher.", bn: "ঐ মানুষটি একজন শিক্ষক।" } } },
                    { char: "子", on: "シ", kun: "こ", meanings: { en: "child", bn: "শিশু" }, strokes: 3, examples: [
                        { word: "子供", reading: "こども", meanings: { en: "child", bn: "শিশু" } },
                        { word: "女の子", reading: "おんなのこ", meanings: { en: "girl", bn: "মেয়ে" } },
                        { word: "男の子", reading: "おとこのこ", meanings: { en: "boy", bn: "ছেলে" } }
                    ], exampleSentence: { jp: "子供が公園で遊びます。", reading: "こどもがこうえんであそびます。", meanings: { en: "The child plays in the park.", bn: "শিশুটি পার্কে খেলে।" } } },
                    { char: "女", on: "ジョ, ニョ", kun: "おんな", meanings: { en: "woman", bn: "নারী" }, strokes: 3, examples: [
                        { word: "女の人", reading: "おんなのひと", meanings: { en: "woman", bn: "নারী" } },
                        { word: "女性", reading: "じょせい", meanings: { en: "female", bn: "মহিলা" } },
                        { word: "彼女", reading: "かのじょ", meanings: { en: "she / girlfriend", bn: "সে (মেয়ে) / বান্ধবী" } }
                    ], exampleSentence: { jp: "あの女の人はきれいです。", reading: "あのおんなのひとはきれいです。", meanings: { en: "That woman is beautiful.", bn: "ঐ নারীটি সুন্দর।" } } },
                    { char: "男", on: "ダン, ナン", kun: "おとこ", meanings: { en: "man", bn: "পুরুষ" }, strokes: 7, examples: [
                        { word: "男の人", reading: "おとこのひと", meanings: { en: "man", bn: "পুরুষ" } },
                        { word: "男性", reading: "だんせい", meanings: { en: "male", bn: "পুরুষ (লিঙ্গ)" } },
                        { word: "長男", reading: "ちょうなん", meanings: { en: "eldest son", bn: "বড় ছেলে" } }
                    ], exampleSentence: { jp: "あの男の人は医者です。", reading: "あのおとこのひとはいしゃです。", meanings: { en: "That man is a doctor.", bn: "ঐ পুরুষটি একজন ডাক্তার।" } } },
                    { char: "名", on: "メイ, ミョウ", kun: "な", meanings: { en: "name", bn: "নাম" }, strokes: 6, examples: [
                        { word: "名前", reading: "なまえ", meanings: { en: "name", bn: "নাম" } },
                        { word: "有名", reading: "ゆうめい", meanings: { en: "famous", bn: "বিখ্যাত" } },
                        { word: "名字", reading: "みょうじ", meanings: { en: "surname", bn: "পদবি" } }
                    ], exampleSentence: { jp: "お名前は何ですか。", reading: "おなまえはなんですか。", meanings: { en: "What is your name?", bn: "আপনার নাম কী?" } } }
                ]
            },
            {
                id: "time-kanji",
                title: "Time",
                items: [
                    { char: "今", on: "コン, キン", kun: "いま", meanings: { en: "now", bn: "এখন" }, strokes: 4, examples: [
                        { word: "今日", reading: "きょう", meanings: { en: "today", bn: "আজ" } },
                        { word: "今週", reading: "こんしゅう", meanings: { en: "this week", bn: "এই সপ্তাহ" } },
                        { word: "今年", reading: "ことし", meanings: { en: "this year", bn: "এই বছর" } }
                    ], exampleSentence: { jp: "今、何をしていますか。", reading: "いま、なにをしていますか。", meanings: { en: "What are you doing now?", bn: "তুমি এখন কী করছ?" } } },
                    { char: "時", on: "ジ", kun: "とき", meanings: { en: "time, hour", bn: "সময়, ঘণ্টা" }, strokes: 10, examples: [
                        { word: "時間", reading: "じかん", meanings: { en: "time / hours", bn: "সময় / ঘণ্টা" } },
                        { word: "何時", reading: "なんじ", meanings: { en: "what time", bn: "কয়টা বাজে" } },
                        { word: "時計", reading: "とけい", meanings: { en: "clock / watch", bn: "ঘড়ি" } }
                    ], exampleSentence: { jp: "今、何時ですか。", reading: "いま、なんじですか。", meanings: { en: "What time is it now?", bn: "এখন কয়টা বাজে?" } } },
                    { char: "分", on: "フン, ブン", kun: "わ(ける)", meanings: { en: "minute, part", bn: "মিনিট, অংশ" }, strokes: 4, examples: [
                        { word: "五分", reading: "ごふん", meanings: { en: "five minutes", bn: "পাঁচ মিনিট" } },
                        { word: "半分", reading: "はんぶん", meanings: { en: "half", bn: "অর্ধেক" } },
                        { word: "自分", reading: "じぶん", meanings: { en: "oneself", bn: "নিজে" } }
                    ], exampleSentence: { jp: "駅まで五分かかります。", reading: "えきまでごふんかかります。", meanings: { en: "It takes five minutes to the station.", bn: "স্টেশন পর্যন্ত পাঁচ মিনিট লাগে।" } } },
                    { char: "半", on: "ハン", kun: "なか(ば)", meanings: { en: "half", bn: "অর্ধেক" }, strokes: 5, examples: [
                        { word: "半分", reading: "はんぶん", meanings: { en: "half", bn: "অর্ধেক" } },
                        { word: "三時半", reading: "さんじはん", meanings: { en: "half past three", bn: "সাড়ে তিনটা" } },
                        { word: "後半", reading: "こうはん", meanings: { en: "second half", bn: "দ্বিতীয়ার্ধ" } }
                    ], exampleSentence: { jp: "三時半に会いましょう。", reading: "さんじはんにあいましょう。", meanings: { en: "Let's meet at half past three.", bn: "সাড়ে তিনটায় দেখা করি।" } } },
                    { char: "年", on: "ネン", kun: "とし", meanings: { en: "year", bn: "বছর" }, strokes: 6, examples: [
                        { word: "今年", reading: "ことし", meanings: { en: "this year", bn: "এই বছর" } },
                        { word: "去年", reading: "きょねん", meanings: { en: "last year", bn: "গত বছর" } },
                        { word: "毎年", reading: "まいとし", meanings: { en: "every year", bn: "প্রতি বছর" } }
                    ], exampleSentence: { jp: "今年、日本語を勉強します。", reading: "ことし、にほんごをべんきょうします。", meanings: { en: "This year, I will study Japanese.", bn: "এই বছর আমি জাপানি ভাষা শিখব।" } } }
                ]
            },
            {
                id: "nature-kanji",
                title: "Nature",
                items: [
                    { char: "山", on: "サン", kun: "やま", meanings: { en: "mountain", bn: "পাহাড়" }, strokes: 3, examples: [
                        { word: "富士山", reading: "ふじさん", meanings: { en: "Mt. Fuji", bn: "ফুজি পর্বত" } },
                        { word: "山道", reading: "やまみち", meanings: { en: "mountain path", bn: "পাহাড়ি পথ" } },
                        { word: "火山", reading: "かざん", meanings: { en: "volcano", bn: "আগ্নেয়গিরি" } }
                    ], exampleSentence: { jp: "富士山はきれいです。", reading: "ふじさんはきれいです。", meanings: { en: "Mt. Fuji is beautiful.", bn: "ফুজি পর্বত সুন্দর।" } } },
                    { char: "川", on: "セン", kun: "かわ", meanings: { en: "river", bn: "নদী" }, strokes: 3, examples: [
                        { word: "川岸", reading: "かわぎし", meanings: { en: "riverbank", bn: "নদীর তীর" } },
                        { word: "小川", reading: "おがわ", meanings: { en: "stream", bn: "ছোট নদী" } },
                        { word: "川口", reading: "かわぐち", meanings: { en: "river mouth", bn: "নদীর মোহনা" } }
                    ], exampleSentence: { jp: "川で泳ぎます。", reading: "かわでおよぎます。", meanings: { en: "I swim in the river.", bn: "আমি নদীতে সাঁতার কাটি।" } } },
                    { char: "天", on: "テン", kun: "あめ", meanings: { en: "heaven, sky", bn: "আকাশ, স্বর্গ" }, strokes: 4, examples: [
                        { word: "天気", reading: "てんき", meanings: { en: "weather", bn: "আবহাওয়া" } },
                        { word: "天才", reading: "てんさい", meanings: { en: "genius", bn: "প্রতিভাবান" } },
                        { word: "雨天", reading: "うてん", meanings: { en: "rainy weather", bn: "বৃষ্টির আবহাওয়া" } }
                    ], exampleSentence: { jp: "天気がいいから、散歩しましょう。", reading: "てんきがいいから、さんぽしましょう。", meanings: { en: "Since the weather is nice, let's take a walk.", bn: "আবহাওয়া ভালো, তাই চলুন হাঁটতে যাই।" } } },
                    { char: "気", on: "キ, ケ", kun: "-", meanings: { en: "spirit, air, feeling", bn: "মন, বাতাস, অনুভূতি" }, strokes: 6, examples: [
                        { word: "天気", reading: "てんき", meanings: { en: "weather", bn: "আবহাওয়া" } },
                        { word: "元気", reading: "げんき", meanings: { en: "energetic / healthy", bn: "সুস্থ / প্রাণবন্ত" } },
                        { word: "気持ち", reading: "きもち", meanings: { en: "feeling", bn: "অনুভূতি" } }
                    ], exampleSentence: { jp: "お元気ですか。", reading: "おげんきですか。", meanings: { en: "How are you?", bn: "আপনি কেমন আছেন?" } } },
                    { char: "空", on: "クウ", kun: "そら, あ(く)", meanings: { en: "sky, empty", bn: "আকাশ, খালি" }, strokes: 8, examples: [
                        { word: "空", reading: "そら", meanings: { en: "sky", bn: "আকাশ" } },
                        { word: "空気", reading: "くうき", meanings: { en: "air", bn: "বাতাস" } },
                        { word: "空港", reading: "くうこう", meanings: { en: "airport", bn: "বিমানবন্দর" } }
                    ], exampleSentence: { jp: "空はとても青いです。", reading: "そらはとてもあおいです。", meanings: { en: "The sky is very blue.", bn: "আকাশ খুব নীল।" } } }
                ]
            },
            {
                id: "body-actions",
                title: "Body & Actions",
                items: [
                    { char: "目", on: "モク", kun: "め", meanings: { en: "eye", bn: "চোখ" }, strokes: 5, examples: [
                        { word: "目", reading: "め", meanings: { en: "eye", bn: "চোখ" } },
                        { word: "目的", reading: "もくてき", meanings: { en: "purpose", bn: "উদ্দেশ্য" } },
                        { word: "科目", reading: "かもく", meanings: { en: "subject (school)", bn: "বিষয় (স্কুল)" } }
                    ], exampleSentence: { jp: "目が痛いです。", reading: "めがいたいです。", meanings: { en: "My eyes hurt.", bn: "আমার চোখ ব্যথা করছে।" } } },
                    { char: "口", on: "コウ", kun: "くち", meanings: { en: "mouth", bn: "মুখ" }, strokes: 3, examples: [
                        { word: "口", reading: "くち", meanings: { en: "mouth", bn: "মুখ" } },
                        { word: "入口", reading: "いりぐち", meanings: { en: "entrance", bn: "প্রবেশপথ" } },
                        { word: "出口", reading: "でぐち", meanings: { en: "exit", bn: "বাহির পথ" } }
                    ], exampleSentence: { jp: "出口はどこですか。", reading: "でぐちはどこですか。", meanings: { en: "Where is the exit?", bn: "বাহির পথ কোথায়?" } } },
                    { char: "手", on: "シュ", kun: "て", meanings: { en: "hand", bn: "হাত" }, strokes: 4, examples: [
                        { word: "手", reading: "て", meanings: { en: "hand", bn: "হাত" } },
                        { word: "上手", reading: "じょうず", meanings: { en: "skillful", bn: "দক্ষ" } },
                        { word: "手紙", reading: "てがみ", meanings: { en: "letter", bn: "চিঠি" } }
                    ], exampleSentence: { jp: "手紙を書きます。", reading: "てがみをかきます。", meanings: { en: "I write a letter.", bn: "আমি একটি চিঠি লিখি।" } } },
                    { char: "足", on: "ソク", kun: "あし", meanings: { en: "foot, leg", bn: "পা" }, strokes: 7, examples: [
                        { word: "足", reading: "あし", meanings: { en: "foot / leg", bn: "পা" } },
                        { word: "足りる", reading: "たりる", meanings: { en: "to be enough", bn: "যথেষ্ট হওয়া" } },
                        { word: "満足", reading: "まんぞく", meanings: { en: "satisfaction", bn: "সন্তুষ্টি" } }
                    ], exampleSentence: { jp: "足が痛いです。", reading: "あしがいたいです。", meanings: { en: "My leg hurts.", bn: "আমার পা ব্যথা করছে।" } } },
                    { char: "見", on: "ケン", kun: "み(る)", meanings: { en: "to see", bn: "দেখা" }, strokes: 7, examples: [
                        { word: "見る", reading: "みる", meanings: { en: "to see / watch", bn: "দেখা" } },
                        { word: "見物", reading: "けんぶつ", meanings: { en: "sightseeing", bn: "দর্শন" } },
                        { word: "花見", reading: "はなみ", meanings: { en: "flower viewing", bn: "ফুল দেখা (হানামি)" } }
                    ], exampleSentence: { jp: "映画を見ます。", reading: "えいがをみます。", meanings: { en: "I watch a movie.", bn: "আমি একটি সিনেমা দেখি।" } } }
                ]
            },
            {
                id: "position-direction",
                title: "Position & Direction",
                items: [
                    { char: "上", on: "ジョウ", kun: "うえ, あ(げる), のぼ(る)", meanings: { en: "up, above", bn: "উপরে" }, strokes: 3, examples: [
                        { word: "机の上", reading: "つくえのうえ", meanings: { en: "on the desk", bn: "টেবিলের উপরে" } },
                        { word: "上手", reading: "じょうず", meanings: { en: "skillful", bn: "দক্ষ" } },
                        { word: "上着", reading: "うわぎ", meanings: { en: "jacket", bn: "জ্যাকেট" } }
                    ], exampleSentence: { jp: "本は机の上にあります。", reading: "ほんはつくえのうえにあります。", meanings: { en: "The book is on the desk.", bn: "বইটি টেবিলের উপরে আছে।" } } },
                    { char: "下", on: "カ, ゲ", kun: "した, さ(げる), くだ(る)", meanings: { en: "down, below", bn: "নিচে" }, strokes: 3, examples: [
                        { word: "木の下", reading: "きのした", meanings: { en: "under the tree", bn: "গাছের নিচে" } },
                        { word: "下手", reading: "へた", meanings: { en: "unskillful", bn: "অদক্ষ" } },
                        { word: "地下", reading: "ちか", meanings: { en: "underground", bn: "ভূগর্ভস্থ" } }
                    ], exampleSentence: { jp: "猫は木の下にいます。", reading: "ねこはきのしたにいます。", meanings: { en: "The cat is under the tree.", bn: "বিড়ালটি গাছের নিচে আছে।" } } },
                    { char: "左", on: "サ", kun: "ひだり", meanings: { en: "left", bn: "বাম" }, strokes: 5, examples: [
                        { word: "左手", reading: "ひだりて", meanings: { en: "left hand", bn: "বাম হাত" } },
                        { word: "左側", reading: "ひだりがわ", meanings: { en: "left side", bn: "বাম পাশ" } },
                        { word: "左右", reading: "さゆう", meanings: { en: "left and right", bn: "বাম ও ডান" } }
                    ], exampleSentence: { jp: "左に曲がってください。", reading: "ひだりにまがってください。", meanings: { en: "Please turn left.", bn: "দয়া করে বামে ঘুরুন।" } } },
                    { char: "右", on: "ウ, ユウ", kun: "みぎ", meanings: { en: "right", bn: "ডান" }, strokes: 5, examples: [
                        { word: "右手", reading: "みぎて", meanings: { en: "right hand", bn: "ডান হাত" } },
                        { word: "右側", reading: "みぎがわ", meanings: { en: "right side", bn: "ডান পাশ" } },
                        { word: "右折", reading: "うせつ", meanings: { en: "turning right", bn: "ডানে মোড়" } }
                    ], exampleSentence: { jp: "右に曲がってください。", reading: "みぎにまがってください。", meanings: { en: "Please turn right.", bn: "দয়া করে ডানে ঘুরুন।" } } },
                    { char: "中", on: "チュウ", kun: "なか", meanings: { en: "middle, inside", bn: "মাঝখানে, ভেতরে" }, strokes: 4, examples: [
                        { word: "中学校", reading: "ちゅうがっこう", meanings: { en: "junior high school", bn: "মধ্য বিদ্যালয়" } },
                        { word: "家の中", reading: "いえのなか", meanings: { en: "inside the house", bn: "বাড়ির ভেতরে" } },
                        { word: "中国", reading: "ちゅうごく", meanings: { en: "China", bn: "চীন" } }
                    ], exampleSentence: { jp: "猫は家の中にいます。", reading: "ねこはいえのなかにいます。", meanings: { en: "The cat is inside the house.", bn: "বিড়ালটি বাড়ির ভেতরে আছে।" } } }
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
                    { char: "家", on: "カ, ケ", kun: "いえ, や", meanings: { en: "house, family", bn: "বাড়ি, পরিবার" }, strokes: 10, exampleSentence: { jp: "私の家は大きいです。", reading: "わたしのいえはおおきいです。", meanings: { en: "My house is big.", bn: "আমার বাড়ি বড়।" } } },
                    { char: "車", on: "シャ", kun: "くるま", meanings: { en: "car, vehicle", bn: "গাড়ি" }, strokes: 7, exampleSentence: { jp: "車で行きます。", reading: "くるまでいきます。", meanings: { en: "I go by car.", bn: "আমি গাড়িতে করে যাই।" } } },
                    { char: "教", on: "キョウ", kun: "おし(える)", meanings: { en: "teach", bn: "শেখানো" }, strokes: 11, exampleSentence: { jp: "先生が日本語を教えます。", reading: "せんせいがにほんごをおしえます。", meanings: { en: "The teacher teaches Japanese.", bn: "শিক্ষক জাপানি ভাষা শেখান।" } } },
                    { char: "会", on: "カイ, エ", kun: "あ(う)", meanings: { en: "meet, association", bn: "সাক্ষাৎ, সমিতি" }, strokes: 6, exampleSentence: { jp: "友達に会います。", reading: "ともだちにあいます。", meanings: { en: "I meet my friend.", bn: "আমি আমার বন্ধুর সাথে দেখা করি।" } } }
                ]
            }
        ]
    },

    n3: { chapters: [] },
    n2: { chapters: [] },
    n1: { chapters: [] }

};

if (typeof module !== "undefined" && module.exports) { module.exports = kanjiData; }
