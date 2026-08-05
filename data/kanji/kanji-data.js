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

   N4: 213 kanji across 30 thematic chapters —
   the full "Basic Kanji 320" list (Meguro
   Language Center / Bonjinsha reference,
   commonly used for old JLPT Level 3/4 ≈
   today's N4/N5) minus the 107 characters
   already taught in N5 above (plus 零/億,
   which aren't in that 320 list at all).
   Same schema as N5 throughout, including
   examples[] and exampleSentence.
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
                    { char: "零", on: "レイ", kun: "ゼロ, まる", meanings: { en: "zero", bn: "শূন্য" }, strokes: 13, examples: [
                        { word: "零度", reading: "れいど", meanings: { en: "zero degrees", bn: "শূন্য ডিগ্রি" } },
                        { word: "零時", reading: "れいじ", meanings: { en: "midnight (zero o'clock)", bn: "মধ্যরাত (রাত ১২টা)" } },
                        { word: "零点", reading: "れいてん", meanings: { en: "a score of zero", bn: "শূন্য পয়েন্ট" } }
                    ], exampleSentence: { jp: "今日の気温は零度です。", reading: "きょうのきおんはれいどです。", meanings: { en: "Today's temperature is zero degrees.", bn: "আজকের তাপমাত্রা শূন্য ডিগ্রি।" } } },
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
                    ], exampleSentence: { jp: "五月は好きな月です。", reading: "ごがつはすきなつきです。", meanings: { en: "May is my favorite month.", bn: "মে আমার প্রিয় মাস।" } } },
                    { char: "六", on: "ロク", kun: "む(つ), むい", meanings: { en: "six", bn: "ছয়" }, strokes: 4, examples: [
                        { word: "六つ", reading: "むっつ", meanings: { en: "six (things)", bn: "ছয়টি" } },
                        { word: "六月", reading: "ろくがつ", meanings: { en: "June", bn: "জুন" } },
                        { word: "六人", reading: "ろくにん", meanings: { en: "six people", bn: "ছয়জন" } }
                    ], exampleSentence: { jp: "卵が六つあります。", reading: "たまごがむっつあります。", meanings: { en: "There are six eggs.", bn: "ছয়টি ডিম আছে।" } } },
                    { char: "七", on: "シチ", kun: "なな(つ), なの", meanings: { en: "seven", bn: "সাত" }, strokes: 2, examples: [
                        { word: "七つ", reading: "ななつ", meanings: { en: "seven (things)", bn: "সাতটি" } },
                        { word: "七月", reading: "しちがつ", meanings: { en: "July", bn: "জুলাই" } },
                        { word: "七人", reading: "しちにん", meanings: { en: "seven people", bn: "সাতজন" } }
                    ], exampleSentence: { jp: "教室に七人います。", reading: "きょうしつにしちにんいます。", meanings: { en: "There are seven people in the classroom.", bn: "শ্রেণীকক্ষে সাতজন আছে।" } } },
                    { char: "八", on: "ハチ", kun: "や(つ), やっ(つ)", meanings: { en: "eight", bn: "আট" }, strokes: 2, examples: [
                        { word: "八つ", reading: "やっつ", meanings: { en: "eight (things)", bn: "আটটি" } },
                        { word: "八月", reading: "はちがつ", meanings: { en: "August", bn: "আগস্ট" } },
                        { word: "八人", reading: "はちにん", meanings: { en: "eight people", bn: "আটজন" } }
                    ], exampleSentence: { jp: "今、八時です。", reading: "いま、はちじです。", meanings: { en: "It is eight o'clock now.", bn: "এখন আটটা বাজে।" } } },
                    { char: "九", on: "キュウ, ク", kun: "ここの(つ)", meanings: { en: "nine", bn: "নয়" }, strokes: 2, examples: [
                        { word: "九つ", reading: "ここのつ", meanings: { en: "nine (things)", bn: "নয়টি" } },
                        { word: "九月", reading: "くがつ", meanings: { en: "September", bn: "সেপ্টেম্বর" } },
                        { word: "九人", reading: "きゅうにん", meanings: { en: "nine people", bn: "নয়জন" } }
                    ], exampleSentence: { jp: "九月に日本へ行きます。", reading: "くがつににほんへいきます。", meanings: { en: "I will go to Japan in September.", bn: "সেপ্টেম্বরে আমি জাপানে যাব।" } } },
                    { char: "十", on: "ジュウ", kun: "とお", meanings: { en: "ten", bn: "দশ" }, strokes: 2, examples: [
                        { word: "十", reading: "とお", meanings: { en: "ten (things)", bn: "দশটি" } },
                        { word: "十月", reading: "じゅうがつ", meanings: { en: "October", bn: "অক্টোবর" } },
                        { word: "十日", reading: "とおか", meanings: { en: "the 10th day / ten days", bn: "দশ তারিখ" } }
                    ], exampleSentence: { jp: "十時に始まります。", reading: "じゅうじにはじまります。", meanings: { en: "It starts at ten o'clock.", bn: "দশটায় শুরু হয়।" } } },
                    { char: "百", on: "ヒャク", kun: "-", meanings: { en: "hundred", bn: "একশ" }, strokes: 6, examples: [
                        { word: "百円", reading: "ひゃくえん", meanings: { en: "100 yen", bn: "একশ ইয়েন" } },
                        { word: "三百", reading: "さんびゃく", meanings: { en: "three hundred", bn: "তিনশ" } },
                        { word: "百人", reading: "ひゃくにん", meanings: { en: "hundred people", bn: "একশ জন" } }
                    ], exampleSentence: { jp: "これは百円です。", reading: "これはひゃくえんです。", meanings: { en: "This is 100 yen.", bn: "এটি একশ ইয়েন।" } } },
                    { char: "千", on: "セン", kun: "-", meanings: { en: "thousand", bn: "হাজার" }, strokes: 3, examples: [
                        { word: "千円", reading: "せんえん", meanings: { en: "1000 yen", bn: "এক হাজার ইয়েন" } },
                        { word: "三千", reading: "さんぜん", meanings: { en: "three thousand", bn: "তিন হাজার" } },
                        { word: "千葉", reading: "ちば", meanings: { en: "Chiba (place name)", bn: "চিবা (স্থান)" } }
                    ], exampleSentence: { jp: "本は千円です。", reading: "ほんはせんえんです。", meanings: { en: "The book is 1000 yen.", bn: "বইটি এক হাজার ইয়েন।" } } },
                    { char: "万", on: "マン", kun: "-", meanings: { en: "ten thousand", bn: "দশ হাজার" }, strokes: 3, examples: [
                        { word: "一万円", reading: "いちまんえん", meanings: { en: "10,000 yen", bn: "দশ হাজার ইয়েন" } },
                        { word: "万年筆", reading: "まんねんひつ", meanings: { en: "fountain pen", bn: "ফাউন্টেন পেন" } },
                        { word: "十万", reading: "じゅうまん", meanings: { en: "100,000", bn: "এক লক্ষ" } }
                    ], exampleSentence: { jp: "このパソコンは十万円です。", reading: "このパソコンはじゅうまんえんです。", meanings: { en: "This computer is 100,000 yen.", bn: "এই কম্পিউটারটি এক লক্ষ ইয়েন।" } } },
                    { char: "億", on: "オク", kun: "-", meanings: { en: "hundred million", bn: "দশ কোটি" }, strokes: 15, examples: [
                        { word: "一億", reading: "いちおく", meanings: { en: "one hundred million", bn: "দশ কোটি" } },
                        { word: "億万長者", reading: "おくまんちょうじゃ", meanings: { en: "billionaire", bn: "কোটিপতি" } },
                        { word: "数億", reading: "すうおく", meanings: { en: "several hundred million", bn: "কয়েক দশ কোটি" } }
                    ], exampleSentence: { jp: "この会社は一億円の価値があります。", reading: "このかいしゃはいちおくえんのかちがあります。", meanings: { en: "This company is worth 100 million yen.", bn: "এই কোম্পানিটির মূল্য দশ কোটি ইয়েন।" } } },
                    { char: "円", on: "エン", kun: "まる(い)", meanings: { en: "yen, circle", bn: "ইয়েন, বৃত্ত" }, strokes: 4, examples: [
                        { word: "百円", reading: "ひゃくえん", meanings: { en: "100 yen", bn: "একশ ইয়েন" } },
                        { word: "円い", reading: "まるい", meanings: { en: "round", bn: "গোলাকার" } },
                        { word: "五百円", reading: "ごひゃくえん", meanings: { en: "500 yen", bn: "পাঁচশ ইয়েন" } }
                    ], exampleSentence: { jp: "これは五百円です。", reading: "これはごひゃくえんです。", meanings: { en: "This is 500 yen.", bn: "এটি পাঁচশ ইয়েন।" } } }
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
            },
            {
                id: "calendar-words",
                title: "Calendar Words",
                items: [
                    { char: "毎", on: "マイ", kun: "-", meanings: { en: "every", bn: "প্রতি" }, strokes: 6, examples: [
                        { word: "毎日", reading: "まいにち", meanings: { en: "every day", bn: "প্রতিদিন" } },
                        { word: "毎週", reading: "まいしゅう", meanings: { en: "every week", bn: "প্রতি সপ্তাহ" } },
                        { word: "毎年", reading: "まいとし", meanings: { en: "every year", bn: "প্রতি বছর" } }
                    ], exampleSentence: { jp: "毎朝、コーヒーを飲みます。", reading: "まいあさ、コーヒーをのみます。", meanings: { en: "I drink coffee every morning.", bn: "আমি প্রতি সকালে কফি পান করি।" } } },
                    { char: "週", on: "シュウ", kun: "-", meanings: { en: "week", bn: "সপ্তাহ" }, strokes: 11, examples: [
                        { word: "今週", reading: "こんしゅう", meanings: { en: "this week", bn: "এই সপ্তাহ" } },
                        { word: "来週", reading: "らいしゅう", meanings: { en: "next week", bn: "আগামী সপ্তাহ" } },
                        { word: "毎週", reading: "まいしゅう", meanings: { en: "every week", bn: "প্রতি সপ্তাহ" } }
                    ], exampleSentence: { jp: "来週、旅行します。", reading: "らいしゅう、りょこうします。", meanings: { en: "Next week, I will travel.", bn: "আগামী সপ্তাহে আমি ভ্রমণ করব।" } } },
                    { char: "午", on: "ゴ", kun: "-", meanings: { en: "noon", bn: "দুপুর" }, strokes: 4, examples: [
                        { word: "午前", reading: "ごぜん", meanings: { en: "a.m.", bn: "সকাল" } },
                        { word: "午後", reading: "ごご", meanings: { en: "p.m.", bn: "বিকেল" } },
                        { word: "正午", reading: "しょうご", meanings: { en: "noon", bn: "দুপুর ১২টা" } }
                    ], exampleSentence: { jp: "午後三時に会いましょう。", reading: "ごごさんじにあいましょう。", meanings: { en: "Let's meet at 3 p.m.", bn: "বিকেল তিনটায় দেখা করি।" } } },
                    { char: "前", on: "ゼン", kun: "まえ", meanings: { en: "before, front", bn: "আগে, সামনে" }, strokes: 9, examples: [
                        { word: "午前", reading: "ごぜん", meanings: { en: "a.m.", bn: "সকাল" } },
                        { word: "名前", reading: "なまえ", meanings: { en: "name", bn: "নাম" } },
                        { word: "駅の前", reading: "えきのまえ", meanings: { en: "in front of the station", bn: "স্টেশনের সামনে" } }
                    ], exampleSentence: { jp: "駅の前で待っています。", reading: "えきのまえでまっています。", meanings: { en: "I am waiting in front of the station.", bn: "আমি স্টেশনের সামনে অপেক্ষা করছি।" } } },
                    { char: "後", on: "ゴ, コウ", kun: "あと, うし(ろ)", meanings: { en: "after, behind", bn: "পরে, পেছনে" }, strokes: 9, examples: [
                        { word: "午後", reading: "ごご", meanings: { en: "p.m.", bn: "বিকেল" } },
                        { word: "後で", reading: "あとで", meanings: { en: "later", bn: "পরে" } },
                        { word: "後ろ", reading: "うしろ", meanings: { en: "behind", bn: "পেছনে" } }
                    ], exampleSentence: { jp: "後で電話します。", reading: "あとででんわします。", meanings: { en: "I will call later.", bn: "আমি পরে ফোন করব।" } } },
                    { char: "間", on: "カン", kun: "あいだ", meanings: { en: "interval, between", bn: "মাঝখানে, ব্যবধান" }, strokes: 12, examples: [
                        { word: "時間", reading: "じかん", meanings: { en: "time", bn: "সময়" } },
                        { word: "間", reading: "あいだ", meanings: { en: "between", bn: "মাঝখানে" } },
                        { word: "一週間", reading: "いっしゅうかん", meanings: { en: "one week", bn: "এক সপ্তাহ" } }
                    ], exampleSentence: { jp: "学校と家の間に公園があります。", reading: "がっこうといえのあいだにこうえんがあります。", meanings: { en: "There is a park between the school and the house.", bn: "স্কুল আর বাড়ির মাঝখানে একটি পার্ক আছে।" } } }
                ]
            },
            {
                id: "family-school",
                title: "Family & School",
                items: [
                    { char: "父", on: "フ", kun: "ちち", meanings: { en: "father", bn: "বাবা" }, strokes: 4, examples: [
                        { word: "父", reading: "ちち", meanings: { en: "(my) father", bn: "বাবা" } },
                        { word: "お父さん", reading: "おとうさん", meanings: { en: "father (polite)", bn: "বাবা (সম্মানসূচক)" } },
                        { word: "父親", reading: "ちちおや", meanings: { en: "father", bn: "পিতা" } }
                    ], exampleSentence: { jp: "私の父は医者です。", reading: "わたしのちちはいしゃです。", meanings: { en: "My father is a doctor.", bn: "আমার বাবা একজন ডাক্তার।" } } },
                    { char: "母", on: "ボ", kun: "はは", meanings: { en: "mother", bn: "মা" }, strokes: 5, examples: [
                        { word: "母", reading: "はは", meanings: { en: "(my) mother", bn: "মা" } },
                        { word: "お母さん", reading: "おかあさん", meanings: { en: "mother (polite)", bn: "মা (সম্মানসূচক)" } },
                        { word: "母国", reading: "ぼこく", meanings: { en: "motherland", bn: "মাতৃভূমি" } }
                    ], exampleSentence: { jp: "母は料理が上手です。", reading: "はははりょうりがじょうずです。", meanings: { en: "My mother is good at cooking.", bn: "আমার মা রান্নায় দক্ষ।" } } },
                    { char: "友", on: "ユウ", kun: "とも", meanings: { en: "friend", bn: "বন্ধু" }, strokes: 4, examples: [
                        { word: "友達", reading: "ともだち", meanings: { en: "friend", bn: "বন্ধু" } },
                        { word: "親友", reading: "しんゆう", meanings: { en: "close friend", bn: "ঘনিষ্ঠ বন্ধু" } },
                        { word: "友人", reading: "ゆうじん", meanings: { en: "friend", bn: "বন্ধু" } }
                    ], exampleSentence: { jp: "友達と映画を見ます。", reading: "ともだちとえいがをみます。", meanings: { en: "I watch a movie with my friend.", bn: "আমি বন্ধুর সাথে সিনেমা দেখি।" } } },
                    { char: "先", on: "セン", kun: "さき", meanings: { en: "previous, ahead", bn: "আগে, পূর্বে" }, strokes: 6, examples: [
                        { word: "先生", reading: "せんせい", meanings: { en: "teacher", bn: "শিক্ষক" } },
                        { word: "先週", reading: "せんしゅう", meanings: { en: "last week", bn: "গত সপ্তাহ" } },
                        { word: "先に", reading: "さきに", meanings: { en: "ahead, first", bn: "আগে" } }
                    ], exampleSentence: { jp: "先週、京都へ行きました。", reading: "せんしゅう、きょうとへいきました。", meanings: { en: "Last week, I went to Kyoto.", bn: "গত সপ্তাহে আমি কিয়োটো গিয়েছিলাম।" } } },
                    { char: "生", on: "セイ", kun: "い(きる), う(まれる)", meanings: { en: "life, birth", bn: "জীবন, জন্ম" }, strokes: 5, examples: [
                        { word: "先生", reading: "せんせい", meanings: { en: "teacher", bn: "শিক্ষক" } },
                        { word: "学生", reading: "がくせい", meanings: { en: "student", bn: "ছাত্র/ছাত্রী" } },
                        { word: "誕生日", reading: "たんじょうび", meanings: { en: "birthday", bn: "জন্মদিন" } }
                    ], exampleSentence: { jp: "私は学生です。", reading: "わたしはがくせいです。", meanings: { en: "I am a student.", bn: "আমি একজন ছাত্র।" } } },
                    { char: "学", on: "ガク", kun: "まな(ぶ)", meanings: { en: "study, learning", bn: "পড়াশোনা, শিক্ষা" }, strokes: 8, examples: [
                        { word: "学校", reading: "がっこう", meanings: { en: "school", bn: "স্কুল" } },
                        { word: "学生", reading: "がくせい", meanings: { en: "student", bn: "ছাত্র/ছাত্রী" } },
                        { word: "大学", reading: "だいがく", meanings: { en: "university", bn: "বিশ্ববিদ্যালয়" } }
                    ], exampleSentence: { jp: "大学で日本語を学びます。", reading: "だいがくでにほんごをまなびます。", meanings: { en: "I study Japanese at university.", bn: "আমি বিশ্ববিদ্যালয়ে জাপানি ভাষা শিখি।" } } }
                ]
            },
            {
                id: "self-senses",
                title: "Self & Senses",
                items: [
                    { char: "私", on: "シ", kun: "わたし, わたくし", meanings: { en: "I, me", bn: "আমি" }, strokes: 7, examples: [
                        { word: "私", reading: "わたし", meanings: { en: "I, me", bn: "আমি" } },
                        { word: "私たち", reading: "わたしたち", meanings: { en: "we", bn: "আমরা" } },
                        { word: "私立", reading: "しりつ", meanings: { en: "private (institution)", bn: "ব্যক্তিগত (প্রতিষ্ঠান)" } }
                    ], exampleSentence: { jp: "私は学生です。", reading: "わたしはがくせいです。", meanings: { en: "I am a student.", bn: "আমি একজন ছাত্র।" } } },
                    { char: "耳", on: "ジ", kun: "みみ", meanings: { en: "ear", bn: "কান" }, strokes: 6, examples: [
                        { word: "耳", reading: "みみ", meanings: { en: "ear", bn: "কান" } },
                        { word: "耳鼻科", reading: "じびか", meanings: { en: "ENT clinic", bn: "নাক-কান-গলা বিভাগ" } },
                        { word: "早耳", reading: "はやみみ", meanings: { en: "keen hearing", bn: "দ্রুত শোনা" } }
                    ], exampleSentence: { jp: "耳が痛いです。", reading: "みみがいたいです。", meanings: { en: "My ear hurts.", bn: "আমার কান ব্যথা করছে।" } } },
                    { char: "力", on: "リョク, リキ", kun: "ちから", meanings: { en: "power, strength", bn: "শক্তি" }, strokes: 2, examples: [
                        { word: "力", reading: "ちから", meanings: { en: "power", bn: "শক্তি" } },
                        { word: "努力", reading: "どりょく", meanings: { en: "effort", bn: "প্রচেষ্টা" } },
                        { word: "力持ち", reading: "ちからもち", meanings: { en: "strong person", bn: "শক্তিশালী ব্যক্তি" } }
                    ], exampleSentence: { jp: "彼は力が強いです。", reading: "かれはちからがつよいです。", meanings: { en: "He is strong.", bn: "সে শক্তিশালী।" } } }
                ]
            },
            {
                id: "countries-directions",
                title: "Countries & Directions",
                items: [
                    { char: "国", on: "コク", kun: "くに", meanings: { en: "country", bn: "দেশ" }, strokes: 8, examples: [
                        { word: "日本国", reading: "にほんこく", meanings: { en: "Japan (formal)", bn: "জাপান (আনুষ্ঠানিক)" } },
                        { word: "外国", reading: "がいこく", meanings: { en: "foreign country", bn: "বিদেশ" } },
                        { word: "国語", reading: "こくご", meanings: { en: "national language", bn: "জাতীয় ভাষা" } }
                    ], exampleSentence: { jp: "私の国はバングラデシュです。", reading: "わたしのくにはバングラデシュです。", meanings: { en: "My country is Bangladesh.", bn: "আমার দেশ বাংলাদেশ।" } } },
                    { char: "東", on: "トウ", kun: "ひがし", meanings: { en: "east", bn: "পূর্ব" }, strokes: 8, examples: [
                        { word: "東", reading: "ひがし", meanings: { en: "east", bn: "পূর্ব" } },
                        { word: "東京", reading: "とうきょう", meanings: { en: "Tokyo", bn: "টোকিও" } },
                        { word: "東口", reading: "ひがしぐち", meanings: { en: "east exit", bn: "পূর্ব দিকের গেট" } }
                    ], exampleSentence: { jp: "太陽は東から出ます。", reading: "たいようはひがしからでます。", meanings: { en: "The sun rises from the east.", bn: "সূর্য পূর্ব দিক থেকে ওঠে।" } } },
                    { char: "西", on: "セイ", kun: "にし", meanings: { en: "west", bn: "পশ্চিম" }, strokes: 6, examples: [
                        { word: "西", reading: "にし", meanings: { en: "west", bn: "পশ্চিম" } },
                        { word: "西口", reading: "にしぐち", meanings: { en: "west exit", bn: "পশ্চিম দিকের গেট" } },
                        { word: "関西", reading: "かんさい", meanings: { en: "Kansai (region)", bn: "কানসাই (অঞ্চল)" } }
                    ], exampleSentence: { jp: "太陽は西に沈みます。", reading: "たいようはにしにしずみます。", meanings: { en: "The sun sets in the west.", bn: "সূর্য পশ্চিম দিকে অস্ত যায়।" } } },
                    { char: "南", on: "ナン", kun: "みなみ", meanings: { en: "south", bn: "দক্ষিণ" }, strokes: 9, examples: [
                        { word: "南", reading: "みなみ", meanings: { en: "south", bn: "দক্ষিণ" } },
                        { word: "南口", reading: "みなみぐち", meanings: { en: "south exit", bn: "দক্ষিণ দিকের গেট" } },
                        { word: "東南アジア", reading: "とうなんアジア", meanings: { en: "Southeast Asia", bn: "দক্ষিণ-পূর্ব এশিয়া" } }
                    ], exampleSentence: { jp: "南へ行きます。", reading: "みなみへいきます。", meanings: { en: "I go to the south.", bn: "আমি দক্ষিণ দিকে যাই।" } } },
                    { char: "北", on: "ホク", kun: "きた", meanings: { en: "north", bn: "উত্তর" }, strokes: 5, examples: [
                        { word: "北", reading: "きた", meanings: { en: "north", bn: "উত্তর" } },
                        { word: "北口", reading: "きたぐち", meanings: { en: "north exit", bn: "উত্তর দিকের গেট" } },
                        { word: "北海道", reading: "ほっかいどう", meanings: { en: "Hokkaido", bn: "হোক্কাইদো" } }
                    ], exampleSentence: { jp: "北海道は北にあります。", reading: "ほっかいどうはきたにあります。", meanings: { en: "Hokkaido is in the north.", bn: "হোক্কাইদো উত্তর দিকে অবস্থিত।" } } },
                    { char: "外", on: "ガイ", kun: "そと", meanings: { en: "outside", bn: "বাইরে" }, strokes: 5, examples: [
                        { word: "外", reading: "そと", meanings: { en: "outside", bn: "বাইরে" } },
                        { word: "外国人", reading: "がいこくじん", meanings: { en: "foreigner", bn: "বিদেশি" } },
                        { word: "外食", reading: "がいしょく", meanings: { en: "eating out", bn: "বাইরে খাওয়া" } }
                    ], exampleSentence: { jp: "今日は外で食べます。", reading: "きょうはそとでたべます。", meanings: { en: "Today I will eat outside.", bn: "আজ আমি বাইরে খাব।" } } }
                ]
            },
            {
                id: "weather-nature-2",
                title: "Weather & Nature II",
                items: [
                    { char: "金", on: "キン", kun: "かね", meanings: { en: "gold, money", bn: "সোনা, টাকা" }, strokes: 8, examples: [
                        { word: "お金", reading: "おかね", meanings: { en: "money", bn: "টাকা" } },
                        { word: "金曜日", reading: "きんようび", meanings: { en: "Friday", bn: "শুক্রবার" } },
                        { word: "金魚", reading: "きんぎょ", meanings: { en: "goldfish", bn: "সোনালি মাছ" } }
                    ], exampleSentence: { jp: "お金がありません。", reading: "おかねがありません。", meanings: { en: "I don't have money.", bn: "আমার কাছে টাকা নেই।" } } },
                    { char: "土", on: "ド", kun: "つち", meanings: { en: "soil, earth", bn: "মাটি" }, strokes: 3, examples: [
                        { word: "土曜日", reading: "どようび", meanings: { en: "Saturday", bn: "শনিবার" } },
                        { word: "土", reading: "つち", meanings: { en: "soil", bn: "মাটি" } },
                        { word: "土地", reading: "とち", meanings: { en: "land", bn: "জমি" } }
                    ], exampleSentence: { jp: "土曜日に映画を見ます。", reading: "どようびにえいがをみます。", meanings: { en: "I watch a movie on Saturday.", bn: "শনিবারে আমি সিনেমা দেখি।" } } },
                    { char: "花", on: "カ", kun: "はな", meanings: { en: "flower", bn: "ফুল" }, strokes: 7, examples: [
                        { word: "花", reading: "はな", meanings: { en: "flower", bn: "ফুল" } },
                        { word: "花見", reading: "はなみ", meanings: { en: "flower viewing", bn: "ফুল দেখা" } },
                        { word: "花屋", reading: "はなや", meanings: { en: "flower shop", bn: "ফুলের দোকান" } }
                    ], exampleSentence: { jp: "この花はきれいです。", reading: "このはなはきれいです。", meanings: { en: "This flower is beautiful.", bn: "এই ফুলটি সুন্দর।" } } },
                    { char: "雨", on: "ウ", kun: "あめ", meanings: { en: "rain", bn: "বৃষ্টি" }, strokes: 8, examples: [
                        { word: "雨", reading: "あめ", meanings: { en: "rain", bn: "বৃষ্টি" } },
                        { word: "大雨", reading: "おおあめ", meanings: { en: "heavy rain", bn: "ভারী বৃষ্টি" } },
                        { word: "雨天", reading: "うてん", meanings: { en: "rainy weather", bn: "বৃষ্টির আবহাওয়া" } }
                    ], exampleSentence: { jp: "今日は雨です。", reading: "きょうはあめです。", meanings: { en: "Today it is raining.", bn: "আজ বৃষ্টি হচ্ছে।" } } }
                ]
            },
            {
                id: "speaking-reading",
                title: "Speaking & Reading",
                items: [
                    { char: "聞", on: "ブン, モン", kun: "き(く)", meanings: { en: "to hear, to listen, to ask", bn: "শোনা, জিজ্ঞাসা করা" }, strokes: 14, examples: [
                        { word: "聞く", reading: "きく", meanings: { en: "to listen, to ask", bn: "শোনা, জিজ্ঞাসা করা" } },
                        { word: "新聞", reading: "しんぶん", meanings: { en: "newspaper", bn: "সংবাদপত্র" } },
                        { word: "聞こえる", reading: "きこえる", meanings: { en: "to be audible", bn: "শোনা যাওয়া" } }
                    ], exampleSentence: { jp: "音楽を聞きます。", reading: "おんがくをききます。", meanings: { en: "I listen to music.", bn: "আমি গান শুনি।" } } },
                    { char: "話", on: "ワ", kun: "はな(す), はなし", meanings: { en: "to speak, talk", bn: "কথা বলা" }, strokes: 13, examples: [
                        { word: "話す", reading: "はなす", meanings: { en: "to speak", bn: "কথা বলা" } },
                        { word: "電話", reading: "でんわ", meanings: { en: "telephone", bn: "টেলিফোন" } },
                        { word: "話", reading: "はなし", meanings: { en: "story, talk", bn: "গল্প, কথা" } }
                    ], exampleSentence: { jp: "日本語で話します。", reading: "にほんごではなします。", meanings: { en: "I speak in Japanese.", bn: "আমি জাপানি ভাষায় কথা বলি।" } } },
                    { char: "読", on: "ドク", kun: "よ(む)", meanings: { en: "to read", bn: "পড়া" }, strokes: 14, examples: [
                        { word: "読む", reading: "よむ", meanings: { en: "to read", bn: "পড়া" } },
                        { word: "読書", reading: "どくしょ", meanings: { en: "reading (books)", bn: "বই পড়া" } },
                        { word: "読み方", reading: "よみかた", meanings: { en: "way of reading", bn: "পড়ার পদ্ধতি" } }
                    ], exampleSentence: { jp: "本を読みます。", reading: "ほんをよみます。", meanings: { en: "I read a book.", bn: "আমি একটি বই পড়ি।" } } },
                    { char: "書", on: "ショ", kun: "か(く)", meanings: { en: "to write", bn: "লেখা" }, strokes: 10, examples: [
                        { word: "書く", reading: "かく", meanings: { en: "to write", bn: "লেখা" } },
                        { word: "辞書", reading: "じしょ", meanings: { en: "dictionary", bn: "অভিধান" } },
                        { word: "図書館", reading: "としょかん", meanings: { en: "library", bn: "গ্রন্থাগার" } }
                    ], exampleSentence: { jp: "手紙を書きます。", reading: "てがみをかきます。", meanings: { en: "I write a letter.", bn: "আমি একটি চিঠি লিখি।" } } },
                    { char: "言", on: "ゲン, ゴン", kun: "い(う)", meanings: { en: "to say", bn: "বলা" }, strokes: 7, examples: [
                        { word: "言う", reading: "いう", meanings: { en: "to say", bn: "বলা" } },
                        { word: "言葉", reading: "ことば", meanings: { en: "word, language", bn: "শব্দ, ভাষা" } },
                        { word: "方言", reading: "ほうげん", meanings: { en: "dialect", bn: "আঞ্চলিক ভাষা" } }
                    ], exampleSentence: { jp: "「ありがとう」と言います。", reading: "「ありがとう」といいます。", meanings: { en: "I say \"thank you.\"", bn: "আমি \"ধন্যবাদ\" বলি।" } } },
                    { char: "語", on: "ゴ", kun: "かた(る)", meanings: { en: "language, word", bn: "ভাষা, শব্দ" }, strokes: 14, examples: [
                        { word: "日本語", reading: "にほんご", meanings: { en: "Japanese language", bn: "জাপানি ভাষা" } },
                        { word: "英語", reading: "えいご", meanings: { en: "English language", bn: "ইংরেজি ভাষা" } },
                        { word: "単語", reading: "たんご", meanings: { en: "word, vocabulary", bn: "শব্দ" } }
                    ], exampleSentence: { jp: "日本語を勉強します。", reading: "にほんごをべんきょうします。", meanings: { en: "I study Japanese.", bn: "আমি জাপানি ভাষা পড়ি।" } } }
                ]
            },
            {
                id: "eating-movement",
                title: "Eating & Movement",
                items: [
                    { char: "食", on: "ショク", kun: "た(べる)", meanings: { en: "to eat, food", bn: "খাওয়া, খাবার" }, strokes: 9, examples: [
                        { word: "食べる", reading: "たべる", meanings: { en: "to eat", bn: "খাওয়া" } },
                        { word: "食事", reading: "しょくじ", meanings: { en: "meal", bn: "খাবার" } },
                        { word: "朝食", reading: "ちょうしょく", meanings: { en: "breakfast", bn: "সকালের নাস্তা" } }
                    ], exampleSentence: { jp: "朝ごはんを食べます。", reading: "あさごはんをたべます。", meanings: { en: "I eat breakfast.", bn: "আমি সকালের নাস্তা খাই।" } } },
                    { char: "飲", on: "イン", kun: "の(む)", meanings: { en: "to drink", bn: "পান করা" }, strokes: 12, examples: [
                        { word: "飲む", reading: "のむ", meanings: { en: "to drink", bn: "পান করা" } },
                        { word: "飲み物", reading: "のみもの", meanings: { en: "beverage", bn: "পানীয়" } },
                        { word: "飲食店", reading: "いんしょくてん", meanings: { en: "restaurant", bn: "রেস্তোরাঁ" } }
                    ], exampleSentence: { jp: "水を飲みます。", reading: "みずをのみます。", meanings: { en: "I drink water.", bn: "আমি পানি পান করি।" } } },
                    { char: "行", on: "コウ, ギョウ", kun: "い(く), おこな(う)", meanings: { en: "to go", bn: "যাওয়া" }, strokes: 6, examples: [
                        { word: "行く", reading: "いく", meanings: { en: "to go", bn: "যাওয়া" } },
                        { word: "旅行", reading: "りょこう", meanings: { en: "travel", bn: "ভ্রমণ" } },
                        { word: "銀行", reading: "ぎんこう", meanings: { en: "bank", bn: "ব্যাংক" } }
                    ], exampleSentence: { jp: "学校へ行きます。", reading: "がっこうへいきます。", meanings: { en: "I go to school.", bn: "আমি স্কুলে যাই।" } } },
                    { char: "来", on: "ライ", kun: "く(る)", meanings: { en: "to come", bn: "আসা" }, strokes: 7, examples: [
                        { word: "来る", reading: "くる", meanings: { en: "to come", bn: "আসা" } },
                        { word: "来週", reading: "らいしゅう", meanings: { en: "next week", bn: "আগামী সপ্তাহ" } },
                        { word: "未来", reading: "みらい", meanings: { en: "future", bn: "ভবিষ্যৎ" } }
                    ], exampleSentence: { jp: "明日、友達が来ます。", reading: "あした、ともだちがきます。", meanings: { en: "Tomorrow, my friend will come.", bn: "আগামীকাল আমার বন্ধু আসবে।" } } },
                    { char: "帰", on: "キ", kun: "かえ(る)", meanings: { en: "to return, go home", bn: "ফিরে যাওয়া" }, strokes: 10, examples: [
                        { word: "帰る", reading: "かえる", meanings: { en: "to return home", bn: "বাড়ি ফেরা" } },
                        { word: "帰国", reading: "きこく", meanings: { en: "returning to one's country", bn: "দেশে ফেরা" } },
                        { word: "日帰り", reading: "ひがえり", meanings: { en: "day trip", bn: "একদিনের ভ্রমণ" } }
                    ], exampleSentence: { jp: "六時に家へ帰ります。", reading: "ろくじにいえへかえります。", meanings: { en: "I return home at six o'clock.", bn: "আমি ছয়টায় বাড়ি ফিরি।" } } }
                ]
            },
            {
                id: "coming-going-meeting",
                title: "Coming, Going & Meeting",
                items: [
                    { char: "出", on: "シュツ", kun: "で(る), だ(す)", meanings: { en: "to exit, go out", bn: "বের হওয়া" }, strokes: 5, examples: [
                        { word: "出る", reading: "でる", meanings: { en: "to go out, exit", bn: "বের হওয়া" } },
                        { word: "出口", reading: "でぐち", meanings: { en: "exit", bn: "বাহির পথ" } },
                        { word: "出発", reading: "しゅっぱつ", meanings: { en: "departure", bn: "যাত্রা শুরু" } }
                    ], exampleSentence: { jp: "家を出ます。", reading: "いえをでます。", meanings: { en: "I leave the house.", bn: "আমি বাড়ি থেকে বের হই।" } } },
                    { char: "入", on: "ニュウ", kun: "はい(る), い(れる)", meanings: { en: "to enter", bn: "প্রবেশ করা" }, strokes: 2, examples: [
                        { word: "入る", reading: "はいる", meanings: { en: "to enter", bn: "প্রবেশ করা" } },
                        { word: "入口", reading: "いりぐち", meanings: { en: "entrance", bn: "প্রবেশপথ" } },
                        { word: "入学", reading: "にゅうがく", meanings: { en: "school enrollment", bn: "ভর্তি" } }
                    ], exampleSentence: { jp: "部屋に入ります。", reading: "へやにはいります。", meanings: { en: "I enter the room.", bn: "আমি ঘরে প্রবেশ করি।" } } },
                    { char: "会", on: "カイ", kun: "あ(う)", meanings: { en: "to meet, association", bn: "দেখা করা, সমিতি" }, strokes: 6, examples: [
                        { word: "会う", reading: "あう", meanings: { en: "to meet", bn: "দেখা করা" } },
                        { word: "会社", reading: "かいしゃ", meanings: { en: "company", bn: "কোম্পানি" } },
                        { word: "大会", reading: "たいかい", meanings: { en: "tournament, convention", bn: "প্রতিযোগিতা" } }
                    ], exampleSentence: { jp: "駅で友達に会います。", reading: "えきでともだちにあいます。", meanings: { en: "I meet my friend at the station.", bn: "আমি স্টেশনে বন্ধুর সাথে দেখা করি।" } } }
                ]
            },
            {
                id: "size-quality",
                title: "Size & Quality",
                items: [
                    { char: "大", on: "ダイ, タイ", kun: "おお(きい)", meanings: { en: "big, large", bn: "বড়" }, strokes: 3, examples: [
                        { word: "大きい", reading: "おおきい", meanings: { en: "big", bn: "বড়" } },
                        { word: "大学", reading: "だいがく", meanings: { en: "university", bn: "বিশ্ববিদ্যালয়" } },
                        { word: "大切", reading: "たいせつ", meanings: { en: "important", bn: "গুরুত্বপূর্ণ" } }
                    ], exampleSentence: { jp: "この犬は大きいです。", reading: "このいぬはおおきいです。", meanings: { en: "This dog is big.", bn: "এই কুকুরটি বড়।" } } },
                    { char: "小", on: "ショウ", kun: "ちい(さい), こ", meanings: { en: "small", bn: "ছোট" }, strokes: 3, examples: [
                        { word: "小さい", reading: "ちいさい", meanings: { en: "small", bn: "ছোট" } },
                        { word: "小学校", reading: "しょうがっこう", meanings: { en: "elementary school", bn: "প্রাথমিক বিদ্যালয়" } },
                        { word: "小鳥", reading: "ことり", meanings: { en: "small bird", bn: "ছোট পাখি" } }
                    ], exampleSentence: { jp: "この猫は小さいです。", reading: "このねこはちいさいです。", meanings: { en: "This cat is small.", bn: "এই বিড়ালটি ছোট।" } } },
                    { char: "高", on: "コウ", kun: "たか(い)", meanings: { en: "tall, high, expensive", bn: "লম্বা, উঁচু, দামী" }, strokes: 10, examples: [
                        { word: "高い", reading: "たかい", meanings: { en: "tall, expensive", bn: "লম্বা, দামী" } },
                        { word: "高校", reading: "こうこう", meanings: { en: "high school", bn: "উচ্চ বিদ্যালয়" } },
                        { word: "高校生", reading: "こうこうせい", meanings: { en: "high school student", bn: "উচ্চ বিদ্যালয়ের ছাত্র" } }
                    ], exampleSentence: { jp: "このかばんは高いです。", reading: "このかばんはたかいです。", meanings: { en: "This bag is expensive.", bn: "এই ব্যাগটি দামী।" } } },
                    { char: "安", on: "アン", kun: "やす(い)", meanings: { en: "cheap, safe", bn: "সস্তা, নিরাপদ" }, strokes: 6, examples: [
                        { word: "安い", reading: "やすい", meanings: { en: "cheap", bn: "সস্তা" } },
                        { word: "安全", reading: "あんぜん", meanings: { en: "safety", bn: "নিরাপত্তা" } },
                        { word: "安心", reading: "あんしん", meanings: { en: "relief, peace of mind", bn: "স্বস্তি" } }
                    ], exampleSentence: { jp: "この店は安いです。", reading: "このみせはやすいです。", meanings: { en: "This shop is cheap.", bn: "এই দোকানটি সস্তা।" } } },
                    { char: "新", on: "シン", kun: "あたら(しい)", meanings: { en: "new", bn: "নতুন" }, strokes: 13, examples: [
                        { word: "新しい", reading: "あたらしい", meanings: { en: "new", bn: "নতুন" } },
                        { word: "新聞", reading: "しんぶん", meanings: { en: "newspaper", bn: "সংবাদপত্র" } },
                        { word: "新年", reading: "しんねん", meanings: { en: "New Year", bn: "নববর্ষ" } }
                    ], exampleSentence: { jp: "新しい車を買いました。", reading: "あたらしいくるまをかいました。", meanings: { en: "I bought a new car.", bn: "আমি একটি নতুন গাড়ি কিনেছি।" } } }
                ]
            },
            {
                id: "more-adjectives",
                title: "More Adjectives",
                items: [
                    { char: "古", on: "コ", kun: "ふる(い)", meanings: { en: "old (things)", bn: "পুরনো" }, strokes: 5, examples: [
                        { word: "古い", reading: "ふるい", meanings: { en: "old", bn: "পুরনো" } },
                        { word: "中古", reading: "ちゅうこ", meanings: { en: "secondhand", bn: "পুরনো/সেকেন্ড হ্যান্ড" } },
                        { word: "古本", reading: "ふるほん", meanings: { en: "used book", bn: "পুরনো বই" } }
                    ], exampleSentence: { jp: "この本は古いです。", reading: "このほんはふるいです。", meanings: { en: "This book is old.", bn: "এই বইটি পুরনো।" } } },
                    { char: "長", on: "チョウ", kun: "なが(い)", meanings: { en: "long, leader", bn: "লম্বা, নেতা" }, strokes: 8, examples: [
                        { word: "長い", reading: "ながい", meanings: { en: "long", bn: "লম্বা" } },
                        { word: "校長", reading: "こうちょう", meanings: { en: "principal", bn: "প্রধান শিক্ষক" } },
                        { word: "長さ", reading: "ながさ", meanings: { en: "length", bn: "দৈর্ঘ্য" } }
                    ], exampleSentence: { jp: "この川は長いです。", reading: "このかわはながいです。", meanings: { en: "This river is long.", bn: "এই নদীটি লম্বা।" } } },
                    { char: "白", on: "ハク", kun: "しろ, しろ(い)", meanings: { en: "white", bn: "সাদা" }, strokes: 5, examples: [
                        { word: "白い", reading: "しろい", meanings: { en: "white", bn: "সাদা" } },
                        { word: "白紙", reading: "はくし", meanings: { en: "blank paper", bn: "সাদা কাগজ" } },
                        { word: "白鳥", reading: "はくちょう", meanings: { en: "swan", bn: "রাজহাঁস" } }
                    ], exampleSentence: { jp: "白い猫がいます。", reading: "しろいねこがいます。", meanings: { en: "There is a white cat.", bn: "একটি সাদা বিড়াল আছে।" } } },
                    { char: "黒", on: "コク", kun: "くろ, くろ(い)", meanings: { en: "black", bn: "কালো" }, strokes: 11, examples: [
                        { word: "黒い", reading: "くろい", meanings: { en: "black", bn: "কালো" } },
                        { word: "黒板", reading: "こくばん", meanings: { en: "blackboard", bn: "ব্ল্যাকবোর্ড" } },
                        { word: "黒髪", reading: "くろかみ", meanings: { en: "black hair", bn: "কালো চুল" } }
                    ], exampleSentence: { jp: "黒い車が好きです。", reading: "くろいくるまがすきです。", meanings: { en: "I like black cars.", bn: "আমি কালো গাড়ি পছন্দ করি।" } } },
                    { char: "赤", on: "セキ", kun: "あか, あか(い)", meanings: { en: "red", bn: "লাল" }, strokes: 7, examples: [
                        { word: "赤い", reading: "あかい", meanings: { en: "red", bn: "লাল" } },
                        { word: "赤ちゃん", reading: "あかちゃん", meanings: { en: "baby", bn: "শিশু" } },
                        { word: "赤字", reading: "あかじ", meanings: { en: "deficit", bn: "ক্ষতি (হিসাবে)" } }
                    ], exampleSentence: { jp: "赤いりんごを食べます。", reading: "あかいりんごをたべます。", meanings: { en: "I eat a red apple.", bn: "আমি একটি লাল আপেল খাই।" } } }
                ]
            },
            {
                id: "rest-shopping",
                title: "Rest & Shopping",
                items: [
                    { char: "休", on: "キュウ", kun: "やす(む)", meanings: { en: "to rest, holiday", bn: "বিশ্রাম, ছুটি" }, strokes: 6, examples: [
                        { word: "休む", reading: "やすむ", meanings: { en: "to rest", bn: "বিশ্রাম নেওয়া" } },
                        { word: "休み", reading: "やすみ", meanings: { en: "holiday, break", bn: "ছুটি" } },
                        { word: "夏休み", reading: "なつやすみ", meanings: { en: "summer vacation", bn: "গ্রীষ্মের ছুটি" } }
                    ], exampleSentence: { jp: "今日は学校を休みます。", reading: "きょうはがっこうをやすみます。", meanings: { en: "I will take a rest from school today.", bn: "আজ আমি স্কুল থেকে ছুটি নিচ্ছি।" } } },
                    { char: "立", on: "リツ", kun: "た(つ)", meanings: { en: "to stand", bn: "দাঁড়ানো" }, strokes: 5, examples: [
                        { word: "立つ", reading: "たつ", meanings: { en: "to stand", bn: "দাঁড়ানো" } },
                        { word: "立場", reading: "たちば", meanings: { en: "position, standpoint", bn: "অবস্থান" } },
                        { word: "国立", reading: "こくりつ", meanings: { en: "national (institution)", bn: "জাতীয় (প্রতিষ্ঠান)" } }
                    ], exampleSentence: { jp: "そこに立ってください。", reading: "そこにたってください。", meanings: { en: "Please stand there.", bn: "দয়া করে ওখানে দাঁড়ান।" } } },
                    { char: "買", on: "バイ", kun: "か(う)", meanings: { en: "to buy", bn: "কেনা" }, strokes: 12, examples: [
                        { word: "買う", reading: "かう", meanings: { en: "to buy", bn: "কেনা" } },
                        { word: "買い物", reading: "かいもの", meanings: { en: "shopping", bn: "কেনাকাটা" } },
                        { word: "売買", reading: "ばいばい", meanings: { en: "buying and selling", bn: "ক্রয়-বিক্রয়" } }
                    ], exampleSentence: { jp: "果物を買います。", reading: "くだものをかいます。", meanings: { en: "I buy fruit.", bn: "আমি ফল কিনি।" } } },
                    { char: "道", on: "ドウ", kun: "みち", meanings: { en: "road, way", bn: "রাস্তা, পথ" }, strokes: 12, examples: [
                        { word: "道", reading: "みち", meanings: { en: "road", bn: "রাস্তা" } },
                        { word: "水道", reading: "すいどう", meanings: { en: "water supply", bn: "পানি সরবরাহ" } },
                        { word: "北海道", reading: "ほっかいどう", meanings: { en: "Hokkaido", bn: "হোক্কাইদো" } }
                    ], exampleSentence: { jp: "この道はまっすぐです。", reading: "このみちはまっすぐです。", meanings: { en: "This road is straight.", bn: "এই রাস্তাটি সোজা।" } } },
                    { char: "店", on: "テン", kun: "みせ", meanings: { en: "shop", bn: "দোকান" }, strokes: 8, examples: [
                        { word: "店", reading: "みせ", meanings: { en: "shop", bn: "দোকান" } },
                        { word: "喫茶店", reading: "きっさてん", meanings: { en: "coffee shop", bn: "কফি শপ" } },
                        { word: "店員", reading: "てんいん", meanings: { en: "shop clerk", bn: "দোকানের কর্মচারী" } }
                    ], exampleSentence: { jp: "あの店はパンがおいしいです。", reading: "あのみせはパンがおいしいです。", meanings: { en: "That shop's bread is delicious.", bn: "ঐ দোকানের রুটি সুস্বাদু।" } } }
                ]
            },
            {
                id: "town-transport",
                title: "Town & Transport",
                items: [
                    { char: "田", on: "デン", kun: "た", meanings: { en: "rice field", bn: "ধানক্ষেত" }, strokes: 5, examples: [
                        { word: "田んぼ", reading: "たんぼ", meanings: { en: "rice paddy", bn: "ধানক্ষেত" } },
                        { word: "田舎", reading: "いなか", meanings: { en: "countryside", bn: "গ্রামাঞ্চল" } },
                        { word: "山田", reading: "やまだ", meanings: { en: "Yamada (surname)", bn: "ইয়ামাদা (পদবি)" } }
                    ], exampleSentence: { jp: "田舎は静かです。", reading: "いなかはしずかです。", meanings: { en: "The countryside is quiet.", bn: "গ্রামাঞ্চল শান্ত।" } } },
                    { char: "町", on: "チョウ", kun: "まち", meanings: { en: "town", bn: "শহর" }, strokes: 7, examples: [
                        { word: "町", reading: "まち", meanings: { en: "town", bn: "শহর" } },
                        { word: "下町", reading: "したまち", meanings: { en: "old downtown area", bn: "পুরনো শহরাংশ" } },
                        { word: "町中", reading: "まちなか", meanings: { en: "in town", bn: "শহরের মধ্যে" } }
                    ], exampleSentence: { jp: "この町は小さいです。", reading: "このまちはちいさいです。", meanings: { en: "This town is small.", bn: "এই শহরটি ছোট।" } } },
                    { char: "校", on: "コウ", kun: "-", meanings: { en: "school", bn: "বিদ্যালয়" }, strokes: 10, examples: [
                        { word: "学校", reading: "がっこう", meanings: { en: "school", bn: "স্কুল" } },
                        { word: "高校", reading: "こうこう", meanings: { en: "high school", bn: "উচ্চ বিদ্যালয়" } },
                        { word: "転校", reading: "てんこう", meanings: { en: "school transfer", bn: "স্কুল পরিবর্তন" } }
                    ], exampleSentence: { jp: "学校はどこですか。", reading: "がっこうはどこですか。", meanings: { en: "Where is the school?", bn: "স্কুল কোথায়?" } } },
                    { char: "電", on: "デン", kun: "-", meanings: { en: "electricity", bn: "বিদ্যুৎ" }, strokes: 13, examples: [
                        { word: "電話", reading: "でんわ", meanings: { en: "telephone", bn: "টেলিফোন" } },
                        { word: "電車", reading: "でんしゃ", meanings: { en: "train", bn: "ট্রেন" } },
                        { word: "電気", reading: "でんき", meanings: { en: "electricity, light", bn: "বিদ্যুৎ, বাতি" } }
                    ], exampleSentence: { jp: "電車で会社へ行きます。", reading: "でんしゃでかいしゃへいきます。", meanings: { en: "I go to the company by train.", bn: "আমি ট্রেনে করে অফিসে যাই।" } } },
                    { char: "車", on: "シャ", kun: "くるま", meanings: { en: "car, vehicle", bn: "গাড়ি" }, strokes: 7, examples: [
                        { word: "車", reading: "くるま", meanings: { en: "car", bn: "গাড়ি" } },
                        { word: "電車", reading: "でんしゃ", meanings: { en: "train", bn: "ট্রেন" } },
                        { word: "自転車", reading: "じてんしゃ", meanings: { en: "bicycle", bn: "সাইকেল" } }
                    ], exampleSentence: { jp: "車で行きましょう。", reading: "くるまでいきましょう。", meanings: { en: "Let's go by car.", bn: "চলুন গাড়িতে করে যাই।" } } }
                ]
            },
            {
                id: "station-questions",
                title: "Station & Questions",
                items: [
                    { char: "駅", on: "エキ", kun: "-", meanings: { en: "station", bn: "স্টেশন" }, strokes: 14, examples: [
                        { word: "駅", reading: "えき", meanings: { en: "station", bn: "স্টেশন" } },
                        { word: "駅員", reading: "えきいん", meanings: { en: "station staff", bn: "স্টেশনের কর্মচারী" } },
                        { word: "東京駅", reading: "とうきょうえき", meanings: { en: "Tokyo Station", bn: "টোকিও স্টেশন" } }
                    ], exampleSentence: { jp: "駅まで歩きます。", reading: "えきまであるきます。", meanings: { en: "I walk to the station.", bn: "আমি স্টেশন পর্যন্ত হেঁটে যাই।" } } },
                    { char: "何", on: "カ", kun: "なに, なん", meanings: { en: "what", bn: "কী" }, strokes: 7, examples: [
                        { word: "何", reading: "なに", meanings: { en: "what", bn: "কী" } },
                        { word: "何時", reading: "なんじ", meanings: { en: "what time", bn: "কয়টা" } },
                        { word: "何人", reading: "なんにん", meanings: { en: "how many people", bn: "কতজন" } }
                    ], exampleSentence: { jp: "これは何ですか。", reading: "これはなんですか。", meanings: { en: "What is this?", bn: "এটি কী?" } } },
                    { char: "方", on: "ホウ", kun: "かた", meanings: { en: "direction, person (polite)", bn: "দিক, ব্যক্তি (সম্মানসূচক)" }, strokes: 4, examples: [
                        { word: "あの方", reading: "あのかた", meanings: { en: "that person (polite)", bn: "ঐ ব্যক্তি (সম্মানসূচক)" } },
                        { word: "使い方", reading: "つかいかた", meanings: { en: "way of using", bn: "ব্যবহারের পদ্ধতি" } },
                        { word: "夕方", reading: "ゆうがた", meanings: { en: "evening", bn: "সন্ধ্যা" } }
                    ], exampleSentence: { jp: "あの方は先生です。", reading: "あのかたはせんせいです。", meanings: { en: "That person is a teacher.", bn: "ঐ ব্যক্তি একজন শিক্ষক।" } } },
                    { char: "社", on: "シャ", kun: "やしろ", meanings: { en: "company, shrine", bn: "কোম্পানি, মন্দির" }, strokes: 7, examples: [
                        { word: "会社", reading: "かいしゃ", meanings: { en: "company", bn: "কোম্পানি" } },
                        { word: "神社", reading: "じんじゃ", meanings: { en: "shrine", bn: "মন্দির" } },
                        { word: "社会", reading: "しゃかい", meanings: { en: "society", bn: "সমাজ" } }
                    ], exampleSentence: { jp: "父は会社で働きます。", reading: "ちちはかいしゃではたらきます。", meanings: { en: "My father works at a company.", bn: "আমার বাবা কোম্পানিতে কাজ করেন।" } } }
                ]
            }
        ]
    },

    n4: {
        chapters: [
            {
                id: "family-members",
                title: "Family Members",
                items: [
                    { char: "兄", on: "ケイ, キョウ", kun: "あに", meanings: { en: "older brother", bn: "বড় ভাই" }, strokes: 5, examples: [
                        { word: "兄", reading: "あに", meanings: { en: "older brother (plain)", bn: "বড় ভাই (সাধারণ)" } },
                        { word: "お兄さん", reading: "おにいさん", meanings: { en: "older brother (polite)", bn: "বড় ভাই (সম্মানসূচক)" } },
                        { word: "兄弟", reading: "きょうだい", meanings: { en: "siblings", bn: "ভাইবোন" } }
                    ], exampleSentence: { jp: "私の兄は先生です。", reading: "わたしのあにはせんせいです。", meanings: { en: "My older brother is a teacher.", bn: "আমার বড় ভাই একজন শিক্ষক।" } } },
                    { char: "弟", on: "ダイ, テイ", kun: "おとうと", meanings: { en: "younger brother", bn: "ছোট ভাই" }, strokes: 7, examples: [
                        { word: "弟", reading: "おとうと", meanings: { en: "younger brother", bn: "ছোট ভাই" } },
                        { word: "兄弟", reading: "きょうだい", meanings: { en: "siblings", bn: "ভাইবোন" } },
                        { word: "弟子", reading: "でし", meanings: { en: "disciple, apprentice", bn: "শিষ্য" } }
                    ], exampleSentence: { jp: "弟は学生です。", reading: "おとうとはがくせいです。", meanings: { en: "My younger brother is a student.", bn: "আমার ছোট ভাই একজন ছাত্র।" } } },
                    { char: "姉", on: "シ", kun: "あね", meanings: { en: "older sister", bn: "বড় বোন" }, strokes: 8, examples: [
                        { word: "姉", reading: "あね", meanings: { en: "older sister (plain)", bn: "বড় বোন (সাধারণ)" } },
                        { word: "お姉さん", reading: "おねえさん", meanings: { en: "older sister (polite)", bn: "বড় বোন (সম্মানসূচক)" } },
                        { word: "姉妹", reading: "しまい", meanings: { en: "sisters", bn: "বোনেরা" } }
                    ], exampleSentence: { jp: "姉は医者です。", reading: "あねはいしゃです。", meanings: { en: "My older sister is a doctor.", bn: "আমার বড় বোন একজন ডাক্তার।" } } },
                    { char: "妹", on: "マイ", kun: "いもうと", meanings: { en: "younger sister", bn: "ছোট বোন" }, strokes: 8, examples: [
                        { word: "妹", reading: "いもうと", meanings: { en: "younger sister", bn: "ছোট বোন" } },
                        { word: "姉妹", reading: "しまい", meanings: { en: "sisters", bn: "বোনেরা" } },
                        { word: "妹さん", reading: "いもうとさん", meanings: { en: "younger sister (someone else's)", bn: "(অন্যের) ছোট বোন" } }
                    ], exampleSentence: { jp: "妹はまだ子供です。", reading: "いもうとはまだこどもです。", meanings: { en: "My younger sister is still a child.", bn: "আমার ছোট বোন এখনো শিশু।" } } },
                    { char: "親", on: "シン", kun: "おや, した(しい)", meanings: { en: "parent, intimate", bn: "বাবা-মা, ঘনিষ্ঠ" }, strokes: 16, examples: [
                        { word: "両親", reading: "りょうしん", meanings: { en: "parents", bn: "বাবা-মা" } },
                        { word: "親切", reading: "しんせつ", meanings: { en: "kindness", bn: "দয়ালু" } },
                        { word: "親友", reading: "しんゆう", meanings: { en: "close friend", bn: "ঘনিষ্ঠ বন্ধু" } }
                    ], exampleSentence: { jp: "私の両親は元気です。", reading: "わたしのりょうしんはげんきです。", meanings: { en: "My parents are well.", bn: "আমার বাবা-মা ভালো আছেন।" } } },
                    { char: "族", on: "ゾク", kun: "-", meanings: { en: "tribe, family", bn: "গোষ্ঠী, পরিবার" }, strokes: 11, examples: [
                        { word: "家族", reading: "かぞく", meanings: { en: "family", bn: "পরিবার" } },
                        { word: "民族", reading: "みんぞく", meanings: { en: "ethnic group", bn: "জাতিগোষ্ঠী" } },
                        { word: "親族", reading: "しんぞく", meanings: { en: "relatives", bn: "আত্মীয়স্বজন" } }
                    ], exampleSentence: { jp: "家族と旅行します。", reading: "かぞくとりょこうします。", meanings: { en: "I will travel with my family.", bn: "আমি পরিবারের সাথে ভ্রমণ করব।" } } },
                    { char: "祖", on: "ソ", kun: "-", meanings: { en: "ancestor", bn: "পূর্বপুরুষ" }, strokes: 9, examples: [
                        { word: "祖父", reading: "そふ", meanings: { en: "grandfather", bn: "দাদা/নানা" } },
                        { word: "祖母", reading: "そぼ", meanings: { en: "grandmother", bn: "দাদি/নানি" } },
                        { word: "先祖", reading: "せんぞ", meanings: { en: "ancestors", bn: "পূর্বপুরুষ" } }
                    ], exampleSentence: { jp: "祖父はもう九十歳です。", reading: "そふはもうきゅうじっさいです。", meanings: { en: "My grandfather is already ninety years old.", bn: "আমার দাদার বয়স ইতিমধ্যে নব্বই বছর।" } } }
                ]
            },
            {
                id: "time-day-season",
                title: "Time, Day & Season",
                items: [
                    { char: "朝", on: "チョウ", kun: "あさ", meanings: { en: "morning", bn: "সকাল" }, strokes: 12, examples: [
                        { word: "朝", reading: "あさ", meanings: { en: "morning", bn: "সকাল" } },
                        { word: "朝ご飯", reading: "あさごはん", meanings: { en: "breakfast", bn: "সকালের নাস্তা" } },
                        { word: "毎朝", reading: "まいあさ", meanings: { en: "every morning", bn: "প্রতি সকালে" } }
                    ], exampleSentence: { jp: "毎朝、六時に起きます。", reading: "まいあさ、ろくじにおきます。", meanings: { en: "I wake up at six every morning.", bn: "আমি প্রতিদিন সকালে ছয়টায় ঘুম থেকে উঠি।" } } },
                    { char: "昼", on: "チュウ", kun: "ひる", meanings: { en: "noon, daytime", bn: "দুপুর, দিনের বেলা" }, strokes: 9, examples: [
                        { word: "昼", reading: "ひる", meanings: { en: "noon", bn: "দুপুর" } },
                        { word: "昼ご飯", reading: "ひるごはん", meanings: { en: "lunch", bn: "দুপুরের খাবার" } },
                        { word: "昼休み", reading: "ひるやすみ", meanings: { en: "lunch break", bn: "দুপুরের বিরতি" } }
                    ], exampleSentence: { jp: "昼ご飯を食べましょう。", reading: "ひるごはんをたべましょう。", meanings: { en: "Let's eat lunch.", bn: "চলুন দুপুরের খাবার খাই।" } } },
                    { char: "夕", on: "セキ", kun: "ゆう", meanings: { en: "evening", bn: "সন্ধ্যা" }, strokes: 3, examples: [
                        { word: "夕方", reading: "ゆうがた", meanings: { en: "evening", bn: "সন্ধ্যা" } },
                        { word: "夕食", reading: "ゆうしょく", meanings: { en: "dinner", bn: "রাতের খাবার" } },
                        { word: "夕日", reading: "ゆうひ", meanings: { en: "evening sun", bn: "অস্তগামী সূর্য" } }
                    ], exampleSentence: { jp: "夕方、散歩します。", reading: "ゆうがた、さんぽします。", meanings: { en: "In the evening, I take a walk.", bn: "সন্ধ্যায় আমি হাঁটতে যাই।" } } },
                    { char: "夜", on: "ヤ", kun: "よる", meanings: { en: "night", bn: "রাত" }, strokes: 8, examples: [
                        { word: "夜", reading: "よる", meanings: { en: "night", bn: "রাত" } },
                        { word: "今夜", reading: "こんや", meanings: { en: "tonight", bn: "আজ রাতে" } },
                        { word: "夜中", reading: "よなか", meanings: { en: "midnight", bn: "মাঝরাত" } }
                    ], exampleSentence: { jp: "夜、本を読みます。", reading: "よる、ほんをよみます。", meanings: { en: "At night, I read a book.", bn: "রাতে আমি বই পড়ি।" } } },
                    { char: "早", on: "ソウ", kun: "はや(い)", meanings: { en: "early", bn: "তাড়াতাড়ি" }, strokes: 6, examples: [
                        { word: "早い", reading: "はやい", meanings: { en: "early, fast", bn: "তাড়াতাড়ি, দ্রুত" } },
                        { word: "早く", reading: "はやく", meanings: { en: "quickly", bn: "তাড়াতাড়ি" } },
                        { word: "早朝", reading: "そうちょう", meanings: { en: "early morning", bn: "খুব সকাল" } }
                    ], exampleSentence: { jp: "今日は早く起きました。", reading: "きょうははやくおきました。", meanings: { en: "Today I woke up early.", bn: "আজ আমি তাড়াতাড়ি ঘুম থেকে উঠেছি।" } } },
                    { char: "曜", on: "ヨウ", kun: "-", meanings: { en: "day of the week", bn: "সপ্তাহের দিন" }, strokes: 18, examples: [
                        { word: "曜日", reading: "ようび", meanings: { en: "day of the week", bn: "সপ্তাহের দিন" } },
                        { word: "何曜日", reading: "なんようび", meanings: { en: "what day of the week", bn: "সপ্তাহের কোন দিন" } },
                        { word: "土曜日", reading: "どようび", meanings: { en: "Saturday", bn: "শনিবার" } }
                    ], exampleSentence: { jp: "今日は何曜日ですか。", reading: "きょうはなんようびですか。", meanings: { en: "What day of the week is today?", bn: "আজ সপ্তাহের কোন দিন?" } } },
                    { char: "春", on: "シュン", kun: "はる", meanings: { en: "spring", bn: "বসন্ত" }, strokes: 9, examples: [
                        { word: "春", reading: "はる", meanings: { en: "spring", bn: "বসন্ত" } },
                        { word: "春休み", reading: "はるやすみ", meanings: { en: "spring break", bn: "বসন্তের ছুটি" } },
                        { word: "青春", reading: "せいしゅん", meanings: { en: "youth", bn: "যৌবন" } }
                    ], exampleSentence: { jp: "春は花がきれいです。", reading: "はるははながきれいです。", meanings: { en: "In spring, the flowers are beautiful.", bn: "বসন্তে ফুল সুন্দর হয়।" } } },
                    { char: "夏", on: "カ", kun: "なつ", meanings: { en: "summer", bn: "গ্রীষ্ম" }, strokes: 10, examples: [
                        { word: "夏", reading: "なつ", meanings: { en: "summer", bn: "গ্রীষ্ম" } },
                        { word: "夏休み", reading: "なつやすみ", meanings: { en: "summer vacation", bn: "গ্রীষ্মের ছুটি" } },
                        { word: "真夏", reading: "まなつ", meanings: { en: "midsummer", bn: "মধ্য গ্রীষ্ম" } }
                    ], exampleSentence: { jp: "夏は暑いです。", reading: "なつはあついです。", meanings: { en: "Summer is hot.", bn: "গ্রীষ্মকাল গরম।" } } }
                ]
            },
            {
                id: "weather-temperature",
                title: "Weather & Temperature",
                items: [
                    { char: "秋", on: "シュウ", kun: "あき", meanings: { en: "autumn", bn: "শরৎ" }, strokes: 9, examples: [
                        { word: "秋", reading: "あき", meanings: { en: "autumn", bn: "শরৎ" } },
                        { word: "秋分", reading: "しゅうぶん", meanings: { en: "autumnal equinox", bn: "শারদ বিষুব" } },
                        { word: "秋祭り", reading: "あきまつり", meanings: { en: "autumn festival", bn: "শরৎ উৎসব" } }
                    ], exampleSentence: { jp: "秋は涼しいです。", reading: "あきはすずしいです。", meanings: { en: "Autumn is cool.", bn: "শরৎকাল ঠান্ডা।" } } },
                    { char: "冬", on: "トウ", kun: "ふゆ", meanings: { en: "winter", bn: "শীতকাল" }, strokes: 5, examples: [
                        { word: "冬", reading: "ふゆ", meanings: { en: "winter", bn: "শীতকাল" } },
                        { word: "冬休み", reading: "ふゆやすみ", meanings: { en: "winter vacation", bn: "শীতের ছুটি" } },
                        { word: "真冬", reading: "まふゆ", meanings: { en: "midwinter", bn: "মধ্য শীত" } }
                    ], exampleSentence: { jp: "冬は雪が降ります。", reading: "ふゆはゆきがふります。", meanings: { en: "In winter, snow falls.", bn: "শীতকালে বরফ পড়ে।" } } },
                    { char: "風", on: "フウ", kun: "かぜ", meanings: { en: "wind", bn: "বাতাস" }, strokes: 9, examples: [
                        { word: "風", reading: "かぜ", meanings: { en: "wind", bn: "বাতাস" } },
                        { word: "台風", reading: "たいふう", meanings: { en: "typhoon", bn: "টাইফুন" } },
                        { word: "風邪", reading: "かぜ", meanings: { en: "a cold (illness)", bn: "সর্দি" } }
                    ], exampleSentence: { jp: "今日は風が強いです。", reading: "きょうはかぜがつよいです。", meanings: { en: "Today the wind is strong.", bn: "আজ বাতাস প্রবল।" } } },
                    { char: "寒", on: "カン", kun: "さむ(い)", meanings: { en: "cold", bn: "ঠান্ডা" }, strokes: 12, examples: [
                        { word: "寒い", reading: "さむい", meanings: { en: "cold", bn: "ঠান্ডা" } },
                        { word: "寒気", reading: "さむけ", meanings: { en: "chill", bn: "শীত অনুভূতি" } },
                        { word: "寒波", reading: "かんぱ", meanings: { en: "cold wave", bn: "শৈত্যপ্রবাহ" } }
                    ], exampleSentence: { jp: "今日はとても寒いです。", reading: "きょうはとてもさむいです。", meanings: { en: "Today is very cold.", bn: "আজ খুব ঠান্ডা।" } } },
                    { char: "暑", on: "ショ", kun: "あつ(い)", meanings: { en: "hot (weather)", bn: "গরম (আবহাওয়া)" }, strokes: 12, examples: [
                        { word: "暑い", reading: "あつい", meanings: { en: "hot", bn: "গরম" } },
                        { word: "暑さ", reading: "あつさ", meanings: { en: "heat", bn: "গরম" } },
                        { word: "蒸し暑い", reading: "むしあつい", meanings: { en: "humid and hot", bn: "আর্দ্র ও গরম" } }
                    ], exampleSentence: { jp: "夏はとても暑いです。", reading: "なつはとてもあついです。", meanings: { en: "Summer is very hot.", bn: "গ্রীষ্মকাল খুব গরম।" } } },
                    { char: "度", on: "ド", kun: "たび", meanings: { en: "degree, time(s)", bn: "ডিগ্রি, বার" }, strokes: 9, examples: [
                        { word: "今度", reading: "こんど", meanings: { en: "this time, next time", bn: "এইবার" } },
                        { word: "一度", reading: "いちど", meanings: { en: "once", bn: "একবার" } },
                        { word: "三十度", reading: "さんじゅうど", meanings: { en: "thirty degrees", bn: "ত্রিশ ডিগ্রি" } }
                    ], exampleSentence: { jp: "今日は三十度です。", reading: "きょうはさんじゅうどです。", meanings: { en: "Today is thirty degrees.", bn: "আজ তিরিশ ডিগ্রি।" } } }
                ]
            },
            {
                id: "illness-medicine",
                title: "Illness & Medicine",
                items: [
                    { char: "医", on: "イ", kun: "-", meanings: { en: "medicine, doctor", bn: "চিকিৎসা, ডাক্তার" }, strokes: 7, examples: [
                        { word: "医者", reading: "いしゃ", meanings: { en: "doctor", bn: "ডাক্তার" } },
                        { word: "医学", reading: "いがく", meanings: { en: "medical science", bn: "চিকিৎসাবিজ্ঞান" } },
                        { word: "医院", reading: "いいん", meanings: { en: "clinic", bn: "ক্লিনিক" } }
                    ], exampleSentence: { jp: "兄は医者です。", reading: "あにはいしゃです。", meanings: { en: "My older brother is a doctor.", bn: "আমার বড় ভাই একজন ডাক্তার।" } } },
                    { char: "者", on: "シャ", kun: "もの", meanings: { en: "person", bn: "ব্যক্তি" }, strokes: 8, examples: [
                        { word: "医者", reading: "いしゃ", meanings: { en: "doctor", bn: "ডাক্তার" } },
                        { word: "学者", reading: "がくしゃ", meanings: { en: "scholar", bn: "পণ্ডিত" } },
                        { word: "若者", reading: "わかもの", meanings: { en: "young person", bn: "তরুণ" } }
                    ], exampleSentence: { jp: "あの方は有名な学者です。", reading: "あのかたはゆうめいながくしゃです。", meanings: { en: "That person is a famous scholar.", bn: "ঐ ব্যক্তি একজন বিখ্যাত পণ্ডিত।" } } },
                    { char: "病", on: "ビョウ", kun: "やまい", meanings: { en: "illness", bn: "অসুখ" }, strokes: 10, examples: [
                        { word: "病気", reading: "びょうき", meanings: { en: "illness", bn: "অসুখ" } },
                        { word: "病院", reading: "びょういん", meanings: { en: "hospital", bn: "হাসপাতাল" } },
                        { word: "病人", reading: "びょうにん", meanings: { en: "sick person", bn: "রোগী" } }
                    ], exampleSentence: { jp: "母は病気です。", reading: "はははびょうきです。", meanings: { en: "My mother is sick.", bn: "আমার মা অসুস্থ।" } } },
                    { char: "院", on: "イン", kun: "-", meanings: { en: "institution", bn: "প্রতিষ্ঠান" }, strokes: 10, examples: [
                        { word: "病院", reading: "びょういん", meanings: { en: "hospital", bn: "হাসপাতাল" } },
                        { word: "入院", reading: "にゅういん", meanings: { en: "hospitalization", bn: "হাসপাতালে ভর্তি" } },
                        { word: "美容院", reading: "びよういん", meanings: { en: "beauty salon", bn: "বিউটি সেলুন" } }
                    ], exampleSentence: { jp: "病院へ行きます。", reading: "びょういんへいきます。", meanings: { en: "I will go to the hospital.", bn: "আমি হাসপাতালে যাব।" } } },
                    { char: "死", on: "シ", kun: "し(ぬ)", meanings: { en: "death, to die", bn: "মৃত্যু, মারা যাওয়া" }, strokes: 6, examples: [
                        { word: "死ぬ", reading: "しぬ", meanings: { en: "to die", bn: "মারা যাওয়া" } },
                        { word: "死亡", reading: "しぼう", meanings: { en: "death", bn: "মৃত্যু" } },
                        { word: "病死", reading: "びょうし", meanings: { en: "death from illness", bn: "রোগে মৃত্যু" } }
                    ], exampleSentence: { jp: "彼のペットが死にました。", reading: "かれのペットがしにました。", meanings: { en: "His pet died.", bn: "তার পোষা প্রাণীটি মারা গেছে।" } } },
                    { char: "悪", on: "アク", kun: "わる(い)", meanings: { en: "bad, evil", bn: "খারাপ" }, strokes: 11, examples: [
                        { word: "悪い", reading: "わるい", meanings: { en: "bad", bn: "খারাপ" } },
                        { word: "悪天候", reading: "あくてんこう", meanings: { en: "bad weather", bn: "খারাপ আবহাওয়া" } },
                        { word: "意地悪", reading: "いじわる", meanings: { en: "meanness", bn: "দুষ্টুমি" } }
                    ], exampleSentence: { jp: "今日は天気が悪いです。", reading: "きょうはてんきがわるいです。", meanings: { en: "Today the weather is bad.", bn: "আজ আবহাওয়া খারাপ।" } } },
                    { char: "急", on: "キュウ", kun: "いそ(ぐ)", meanings: { en: "urgent, hurry", bn: "জরুরি, তাড়াহুড়া" }, strokes: 9, examples: [
                        { word: "急ぐ", reading: "いそぐ", meanings: { en: "to hurry", bn: "তাড়াহুড়া করা" } },
                        { word: "急に", reading: "きゅうに", meanings: { en: "suddenly", bn: "হঠাৎ" } },
                        { word: "救急車", reading: "きゅうきゅうしゃ", meanings: { en: "ambulance", bn: "অ্যাম্বুলেন্স" } }
                    ], exampleSentence: { jp: "急いでください。", reading: "いそいでください。", meanings: { en: "Please hurry.", bn: "দয়া করে তাড়াতাড়ি করুন।" } } },
                    { char: "薬", on: "ヤク", kun: "くすり", meanings: { en: "medicine", bn: "ওষুধ" }, strokes: 16, examples: [
                        { word: "薬", reading: "くすり", meanings: { en: "medicine", bn: "ওষুধ" } },
                        { word: "薬局", reading: "やっきょく", meanings: { en: "pharmacy", bn: "ফার্মেসি" } },
                        { word: "飲み薬", reading: "のみぐすり", meanings: { en: "oral medicine", bn: "খাওয়ার ওষুধ" } }
                    ], exampleSentence: { jp: "薬を飲んでください。", reading: "くすりをのんでください。", meanings: { en: "Please take the medicine.", bn: "দয়া করে ওষুধ খান।" } } }
                ]
            },
            {
                id: "body-appearance",
                title: "Body & Appearance",
                items: [
                    { char: "顔", on: "ガン", kun: "かお", meanings: { en: "face", bn: "মুখ" }, strokes: 18, examples: [
                        { word: "顔", reading: "かお", meanings: { en: "face", bn: "মুখ" } },
                        { word: "顔色", reading: "かおいろ", meanings: { en: "complexion", bn: "মুখের রং" } },
                        { word: "洗顔", reading: "せんがん", meanings: { en: "face washing", bn: "মুখ ধোয়া" } }
                    ], exampleSentence: { jp: "顔を洗います。", reading: "かおをあらいます。", meanings: { en: "I wash my face.", bn: "আমি মুখ ধুই।" } } },
                    { char: "首", on: "シュ", kun: "くび", meanings: { en: "neck", bn: "ঘাড়" }, strokes: 9, examples: [
                        { word: "首", reading: "くび", meanings: { en: "neck", bn: "ঘাড়" } },
                        { word: "首都", reading: "しゅと", meanings: { en: "capital city", bn: "রাজধানী" } },
                        { word: "手首", reading: "てくび", meanings: { en: "wrist", bn: "কব্জি" } }
                    ], exampleSentence: { jp: "首都はどこですか。", reading: "しゅとはどこですか。", meanings: { en: "Where is the capital city?", bn: "রাজধানী কোথায়?" } } },
                    { char: "声", on: "セイ", kun: "こえ", meanings: { en: "voice", bn: "কণ্ঠস্বর" }, strokes: 7, examples: [
                        { word: "声", reading: "こえ", meanings: { en: "voice", bn: "কণ্ঠস্বর" } },
                        { word: "大声", reading: "おおごえ", meanings: { en: "loud voice", bn: "জোরে কণ্ঠ" } },
                        { word: "声を出す", reading: "こえをだす", meanings: { en: "to speak up", bn: "কণ্ঠস্বর বের করা" } }
                    ], exampleSentence: { jp: "大きい声で話してください。", reading: "おおきいこえではなしてください。", meanings: { en: "Please speak in a loud voice.", bn: "দয়া করে জোরে কথা বলুন।" } } },
                    { char: "体", on: "タイ", kun: "からだ", meanings: { en: "body", bn: "শরীর" }, strokes: 7, examples: [
                        { word: "体", reading: "からだ", meanings: { en: "body", bn: "শরীর" } },
                        { word: "体育", reading: "たいいく", meanings: { en: "physical education", bn: "শারীরিক শিক্ষা" } },
                        { word: "体調", reading: "たいちょう", meanings: { en: "physical condition", bn: "শারীরিক অবস্থা" } }
                    ], exampleSentence: { jp: "体に気をつけてください。", reading: "からだにきをつけてください。", meanings: { en: "Please take care of your body.", bn: "দয়া করে শরীরের যত্ন নিন।" } } },
                    { char: "色", on: "ショク, シキ", kun: "いろ", meanings: { en: "color", bn: "রং" }, strokes: 6, examples: [
                        { word: "色", reading: "いろ", meanings: { en: "color", bn: "রং" } },
                        { word: "景色", reading: "けしき", meanings: { en: "scenery", bn: "দৃশ্য" } },
                        { word: "顔色", reading: "かおいろ", meanings: { en: "complexion", bn: "মুখের রং" } }
                    ], exampleSentence: { jp: "どの色が好きですか。", reading: "どのいろがすきですか。", meanings: { en: "Which color do you like?", bn: "আপনি কোন রং পছন্দ করেন?" } } },
                    { char: "青", on: "セイ", kun: "あお, あお(い)", meanings: { en: "blue, green", bn: "নীল, সবুজ" }, strokes: 8, examples: [
                        { word: "青い", reading: "あおい", meanings: { en: "blue", bn: "নীল" } },
                        { word: "青年", reading: "せいねん", meanings: { en: "young man", bn: "যুবক" } },
                        { word: "青空", reading: "あおぞら", meanings: { en: "blue sky", bn: "নীল আকাশ" } }
                    ], exampleSentence: { jp: "空が青いです。", reading: "そらがあおいです。", meanings: { en: "The sky is blue.", bn: "আকাশ নীল।" } } }
                ]
            },
            {
                id: "food-taste",
                title: "Food & Taste",
                items: [
                    { char: "肉", on: "ニク", kun: "-", meanings: { en: "meat", bn: "মাংস" }, strokes: 6, examples: [
                        { word: "肉", reading: "にく", meanings: { en: "meat", bn: "মাংস" } },
                        { word: "牛肉", reading: "ぎゅうにく", meanings: { en: "beef", bn: "গরুর মাংস" } },
                        { word: "焼肉", reading: "やきにく", meanings: { en: "grilled meat", bn: "ঝলসানো মাংস" } }
                    ], exampleSentence: { jp: "肉が好きです。", reading: "にくがすきです。", meanings: { en: "I like meat.", bn: "আমি মাংস পছন্দ করি।" } } },
                    { char: "魚", on: "ギョ", kun: "さかな", meanings: { en: "fish", bn: "মাছ" }, strokes: 11, examples: [
                        { word: "魚", reading: "さかな", meanings: { en: "fish", bn: "মাছ" } },
                        { word: "魚屋", reading: "さかなや", meanings: { en: "fish shop", bn: "মাছের দোকান" } },
                        { word: "金魚", reading: "きんぎょ", meanings: { en: "goldfish", bn: "সোনালি মাছ" } }
                    ], exampleSentence: { jp: "魚を食べます。", reading: "さかなをたべます。", meanings: { en: "I eat fish.", bn: "আমি মাছ খাই।" } } },
                    { char: "牛", on: "ギュウ", kun: "うし", meanings: { en: "cow", bn: "গরু" }, strokes: 4, examples: [
                        { word: "牛", reading: "うし", meanings: { en: "cow", bn: "গরু" } },
                        { word: "牛肉", reading: "ぎゅうにく", meanings: { en: "beef", bn: "গরুর মাংস" } },
                        { word: "牛乳", reading: "ぎゅうにゅう", meanings: { en: "milk", bn: "দুধ" } }
                    ], exampleSentence: { jp: "牛乳を飲みます。", reading: "ぎゅうにゅうをのみます。", meanings: { en: "I drink milk.", bn: "আমি দুধ পান করি।" } } },
                    { char: "茶", on: "チャ", kun: "-", meanings: { en: "tea", bn: "চা" }, strokes: 9, examples: [
                        { word: "お茶", reading: "おちゃ", meanings: { en: "tea", bn: "চা" } },
                        { word: "紅茶", reading: "こうちゃ", meanings: { en: "black tea", bn: "রঙ চা" } },
                        { word: "茶色", reading: "ちゃいろ", meanings: { en: "brown", bn: "বাদামি" } }
                    ], exampleSentence: { jp: "お茶を飲みましょう。", reading: "おちゃをのみましょう。", meanings: { en: "Let's drink tea.", bn: "চলুন চা পান করি।" } } },
                    { char: "飯", on: "ハン", kun: "めし", meanings: { en: "cooked rice, meal", bn: "ভাত, খাবার" }, strokes: 12, examples: [
                        { word: "ご飯", reading: "ごはん", meanings: { en: "rice, meal", bn: "ভাত, খাবার" } },
                        { word: "朝ご飯", reading: "あさごはん", meanings: { en: "breakfast", bn: "সকালের নাস্তা" } },
                        { word: "晩ご飯", reading: "ばんごはん", meanings: { en: "dinner", bn: "রাতের খাবার" } }
                    ], exampleSentence: { jp: "ご飯を食べましょう。", reading: "ごはんをたべましょう。", meanings: { en: "Let's eat a meal.", bn: "চলুন খাবার খাই।" } } },
                    { char: "料", on: "リョウ", kun: "-", meanings: { en: "fee, materials", bn: "ফি, উপকরণ" }, strokes: 10, examples: [
                        { word: "料理", reading: "りょうり", meanings: { en: "cooking", bn: "রান্না" } },
                        { word: "料金", reading: "りょうきん", meanings: { en: "fee", bn: "ফি" } },
                        { word: "材料", reading: "ざいりょう", meanings: { en: "ingredients", bn: "উপকরণ" } }
                    ], exampleSentence: { jp: "この料理はおいしいです。", reading: "このりょうりはおいしいです。", meanings: { en: "This dish is delicious.", bn: "এই রান্নাটি সুস্বাদু।" } } },
                    { char: "理", on: "リ", kun: "-", meanings: { en: "reason, logic", bn: "যুক্তি" }, strokes: 11, examples: [
                        { word: "料理", reading: "りょうり", meanings: { en: "cooking", bn: "রান্না" } },
                        { word: "理由", reading: "りゆう", meanings: { en: "reason", bn: "কারণ" } },
                        { word: "無理", reading: "むり", meanings: { en: "impossible", bn: "অসম্ভব" } }
                    ], exampleSentence: { jp: "理由を教えてください。", reading: "りゆうをおしえてください。", meanings: { en: "Please tell me the reason.", bn: "দয়া করে কারণটি বলুন।" } } },
                    { char: "味", on: "ミ", kun: "あじ", meanings: { en: "taste", bn: "স্বাদ" }, strokes: 8, examples: [
                        { word: "味", reading: "あじ", meanings: { en: "taste", bn: "স্বাদ" } },
                        { word: "意味", reading: "いみ", meanings: { en: "meaning", bn: "অর্থ" } },
                        { word: "味見", reading: "あじみ", meanings: { en: "tasting", bn: "স্বাদ পরীক্ষা" } }
                    ], exampleSentence: { jp: "この料理は味がいいです。", reading: "このりょうりはあじがいいです。", meanings: { en: "This dish has a good taste.", bn: "এই রান্নার স্বাদ ভালো।" } } },
                    { char: "菜", on: "サイ", kun: "-", meanings: { en: "vegetable", bn: "সবজি" }, strokes: 11, examples: [
                        { word: "野菜", reading: "やさい", meanings: { en: "vegetable", bn: "সবজি" } },
                        { word: "白菜", reading: "はくさい", meanings: { en: "napa cabbage", bn: "চাইনিজ বাঁধাকপি" } },
                        { word: "菜食", reading: "さいしょく", meanings: { en: "vegetarian diet", bn: "নিরামিষ খাদ্য" } }
                    ], exampleSentence: { jp: "野菜をたくさん食べます。", reading: "やさいをたくさんたべます。", meanings: { en: "I eat a lot of vegetables.", bn: "আমি অনেক সবজি খাই।" } } }
                ]
            },
            {
                id: "nature-animals",
                title: "Nature & Animals",
                items: [
                    { char: "犬", on: "ケン", kun: "いぬ", meanings: { en: "dog", bn: "কুকুর" }, strokes: 4, examples: [
                        { word: "犬", reading: "いぬ", meanings: { en: "dog", bn: "কুকুর" } },
                        { word: "子犬", reading: "こいぬ", meanings: { en: "puppy", bn: "কুকুরছানা" } },
                        { word: "番犬", reading: "ばんけん", meanings: { en: "guard dog", bn: "পাহারাদার কুকুর" } }
                    ], exampleSentence: { jp: "私は犬が好きです。", reading: "わたしはいぬがすきです。", meanings: { en: "I like dogs.", bn: "আমি কুকুর পছন্দ করি।" } } },
                    { char: "鳥", on: "チョウ", kun: "とり", meanings: { en: "bird", bn: "পাখি" }, strokes: 11, examples: [
                        { word: "鳥", reading: "とり", meanings: { en: "bird", bn: "পাখি" } },
                        { word: "小鳥", reading: "ことり", meanings: { en: "small bird", bn: "ছোট পাখি" } },
                        { word: "白鳥", reading: "はくちょう", meanings: { en: "swan", bn: "রাজহাঁস" } }
                    ], exampleSentence: { jp: "空に鳥がいます。", reading: "そらにとりがいます。", meanings: { en: "There are birds in the sky.", bn: "আকাশে পাখি আছে।" } } },
                    { char: "海", on: "カイ", kun: "うみ", meanings: { en: "sea, ocean", bn: "সমুদ্র" }, strokes: 9, examples: [
                        { word: "海", reading: "うみ", meanings: { en: "sea", bn: "সমুদ্র" } },
                        { word: "海岸", reading: "かいがん", meanings: { en: "coast", bn: "উপকূল" } },
                        { word: "海外", reading: "かいがい", meanings: { en: "overseas", bn: "বিদেশ" } }
                    ], exampleSentence: { jp: "夏は海へ行きます。", reading: "なつはうみへいきます。", meanings: { en: "In summer, I go to the sea.", bn: "গ্রীষ্মকালে আমি সমুদ্রে যাই।" } } },
                    { char: "林", on: "リン", kun: "はやし", meanings: { en: "woods, forest", bn: "বন" }, strokes: 8, examples: [
                        { word: "林", reading: "はやし", meanings: { en: "woods", bn: "বন" } },
                        { word: "林業", reading: "りんぎょう", meanings: { en: "forestry", bn: "বনশিল্প" } },
                        { word: "竹林", reading: "ちくりん", meanings: { en: "bamboo grove", bn: "বাঁশবন" } }
                    ], exampleSentence: { jp: "林の中を歩きます。", reading: "はやしのなかをあるきます。", meanings: { en: "I walk through the woods.", bn: "আমি বনের মধ্য দিয়ে হাঁটি।" } } },
                    { char: "森", on: "シン", kun: "もり", meanings: { en: "forest", bn: "গভীর বন" }, strokes: 12, examples: [
                        { word: "森", reading: "もり", meanings: { en: "forest", bn: "গভীর বন" } },
                        { word: "森林", reading: "しんりん", meanings: { en: "forest", bn: "বনভূমি" } },
                        { word: "森の中", reading: "もりのなか", meanings: { en: "in the forest", bn: "বনের ভেতরে" } }
                    ], exampleSentence: { jp: "森の中に大きい木があります。", reading: "もりのなかにおおきいきがあります。", meanings: { en: "There is a big tree in the forest.", bn: "বনের মধ্যে একটি বড় গাছ আছে।" } } },
                    { char: "池", on: "チ", kun: "いけ", meanings: { en: "pond", bn: "পুকুর" }, strokes: 6, examples: [
                        { word: "池", reading: "いけ", meanings: { en: "pond", bn: "পুকুর" } },
                        { word: "電池", reading: "でんち", meanings: { en: "battery", bn: "ব্যাটারি" } },
                        { word: "貯水池", reading: "ちょすいち", meanings: { en: "reservoir", bn: "জলাধার" } }
                    ], exampleSentence: { jp: "公園に池があります。", reading: "こうえんにいけがあります。", meanings: { en: "There is a pond in the park.", bn: "পার্কে একটি পুকুর আছে।" } } },
                    { char: "野", on: "ヤ", kun: "の", meanings: { en: "field, plains", bn: "মাঠ, প্রান্তর" }, strokes: 11, examples: [
                        { word: "野菜", reading: "やさい", meanings: { en: "vegetable", bn: "সবজি" } },
                        { word: "野球", reading: "やきゅう", meanings: { en: "baseball", bn: "বেসবল" } },
                        { word: "分野", reading: "ぶんや", meanings: { en: "field (of study)", bn: "ক্ষেত্র" } }
                    ], exampleSentence: { jp: "野球が好きです。", reading: "やきゅうがすきです。", meanings: { en: "I like baseball.", bn: "আমি বেসবল পছন্দ করি।" } } }
                ]
            },
            {
                id: "study-research",
                title: "Study & Research",
                items: [
                    { char: "勉", on: "ベン", kun: "-", meanings: { en: "to strive, study", bn: "চেষ্টা, অধ্যয়ন" }, strokes: 10, examples: [
                        { word: "勉強", reading: "べんきょう", meanings: { en: "study", bn: "পড়াশোনা" } },
                        { word: "勉強する", reading: "べんきょうする", meanings: { en: "to study", bn: "পড়াশোনা করা" } },
                        { word: "不勉強", reading: "ふべんきょう", meanings: { en: "lack of study", bn: "পড়াশোনার অভাব" } }
                    ], exampleSentence: { jp: "日本語を勉強します。", reading: "にほんごをべんきょうします。", meanings: { en: "I study Japanese.", bn: "আমি জাপানি ভাষা পড়ি।" } } },
                    { char: "強", on: "キョウ", kun: "つよ(い)", meanings: { en: "strong", bn: "শক্তিশালী" }, strokes: 11, examples: [
                        { word: "強い", reading: "つよい", meanings: { en: "strong", bn: "শক্তিশালী" } },
                        { word: "勉強", reading: "べんきょう", meanings: { en: "study", bn: "পড়াশোনা" } },
                        { word: "強調", reading: "きょうちょう", meanings: { en: "emphasis", bn: "জোর দেওয়া" } }
                    ], exampleSentence: { jp: "彼はとても強いです。", reading: "かれはとてもつよいです。", meanings: { en: "He is very strong.", bn: "সে খুব শক্তিশালী।" } } },
                    { char: "教", on: "キョウ", kun: "おし(える)", meanings: { en: "to teach", bn: "শেখানো" }, strokes: 11, examples: [
                        { word: "教える", reading: "おしえる", meanings: { en: "to teach", bn: "শেখানো" } },
                        { word: "教室", reading: "きょうしつ", meanings: { en: "classroom", bn: "শ্রেণীকক্ষ" } },
                        { word: "教科書", reading: "きょうかしょ", meanings: { en: "textbook", bn: "পাঠ্যবই" } }
                    ], exampleSentence: { jp: "先生が日本語を教えます。", reading: "せんせいがにほんごをおしえます。", meanings: { en: "The teacher teaches Japanese.", bn: "শিক্ষক জাপানি ভাষা শেখান।" } } },
                    { char: "習", on: "シュウ", kun: "なら(う)", meanings: { en: "to learn, practice", bn: "শেখা, অনুশীলন" }, strokes: 11, examples: [
                        { word: "習う", reading: "ならう", meanings: { en: "to learn", bn: "শেখা" } },
                        { word: "練習", reading: "れんしゅう", meanings: { en: "practice", bn: "অনুশীলন" } },
                        { word: "学習", reading: "がくしゅう", meanings: { en: "learning", bn: "শিক্ষণ" } }
                    ], exampleSentence: { jp: "ピアノを習っています。", reading: "ピアノをならっています。", meanings: { en: "I am learning the piano.", bn: "আমি পিয়ানো শিখছি।" } } },
                    { char: "試", on: "シ", kun: "こころ(みる), ため(す)", meanings: { en: "to try, test", bn: "পরীক্ষা করা" }, strokes: 13, examples: [
                        { word: "試験", reading: "しけん", meanings: { en: "exam", bn: "পরীক্ষা" } },
                        { word: "試合", reading: "しあい", meanings: { en: "match, game", bn: "খেলা" } },
                        { word: "試着", reading: "しちゃく", meanings: { en: "trying on (clothes)", bn: "পোশাক পরে দেখা" } }
                    ], exampleSentence: { jp: "明日、試験があります。", reading: "あした、しけんがあります。", meanings: { en: "Tomorrow there is an exam.", bn: "আগামীকাল একটি পরীক্ষা আছে।" } } },
                    { char: "験", on: "ケン", kun: "-", meanings: { en: "test, effect", bn: "পরীক্ষা, প্রভাব" }, strokes: 18, examples: [
                        { word: "試験", reading: "しけん", meanings: { en: "exam", bn: "পরীক্ষা" } },
                        { word: "経験", reading: "けいけん", meanings: { en: "experience", bn: "অভিজ্ঞতা" } },
                        { word: "実験", reading: "じっけん", meanings: { en: "experiment", bn: "পরীক্ষা-নিরীক্ষা" } }
                    ], exampleSentence: { jp: "いい経験になりました。", reading: "いいけいけんになりました。", meanings: { en: "It became a good experience.", bn: "এটি একটি ভালো অভিজ্ঞতা হয়েছে।" } } },
                    { char: "研", on: "ケン", kun: "と(ぐ)", meanings: { en: "polish, study", bn: "পালিশ, গবেষণা" }, strokes: 9, examples: [
                        { word: "研究", reading: "けんきゅう", meanings: { en: "research", bn: "গবেষণা" } },
                        { word: "研究室", reading: "けんきゅうしつ", meanings: { en: "research lab", bn: "গবেষণাগার" } },
                        { word: "研修", reading: "けんしゅう", meanings: { en: "training", bn: "প্রশিক্ষণ" } }
                    ], exampleSentence: { jp: "大学で研究します。", reading: "だいがくでけんきゅうします。", meanings: { en: "I do research at university.", bn: "আমি বিশ্ববিদ্যালয়ে গবেষণা করি।" } } },
                    { char: "究", on: "キュウ", kun: "きわ(める)", meanings: { en: "to research thoroughly", bn: "গবেষণা করা" }, strokes: 7, examples: [
                        { word: "研究", reading: "けんきゅう", meanings: { en: "research", bn: "গবেষণা" } },
                        { word: "研究者", reading: "けんきゅうしゃ", meanings: { en: "researcher", bn: "গবেষক" } },
                        { word: "追究", reading: "ついきゅう", meanings: { en: "thorough investigation", bn: "গভীর অনুসন্ধান" } }
                    ], exampleSentence: { jp: "研究者になりたいです。", reading: "けんきゅうしゃになりたいです。", meanings: { en: "I want to become a researcher.", bn: "আমি একজন গবেষক হতে চাই।" } } }
                ]
            },
            {
                id: "work-company",
                title: "Work & Company",
                items: [
                    { char: "業", on: "ギョウ, ゴウ", kun: "-", meanings: { en: "business, vocation", bn: "ব্যবসা, পেশা" }, strokes: 13, examples: [
                        { word: "授業", reading: "じゅぎょう", meanings: { en: "class, lesson", bn: "ক্লাস" } },
                        { word: "卒業", reading: "そつぎょう", meanings: { en: "graduation", bn: "স্নাতক" } },
                        { word: "工業", reading: "こうぎょう", meanings: { en: "industry", bn: "শিল্প" } }
                    ], exampleSentence: { jp: "今日は授業があります。", reading: "きょうはじゅぎょうがあります。", meanings: { en: "Today there is a class.", bn: "আজ একটি ক্লাস আছে।" } } },
                    { char: "員", on: "イン", kun: "-", meanings: { en: "member, staff", bn: "সদস্য, কর্মী" }, strokes: 10, examples: [
                        { word: "会社員", reading: "かいしゃいん", meanings: { en: "company employee", bn: "কোম্পানির কর্মচারী" } },
                        { word: "店員", reading: "てんいん", meanings: { en: "shop clerk", bn: "দোকানের কর্মচারী" } },
                        { word: "駅員", reading: "えきいん", meanings: { en: "station staff", bn: "স্টেশনের কর্মচারী" } }
                    ], exampleSentence: { jp: "父は会社員です。", reading: "ちちはかいしゃいんです。", meanings: { en: "My father is a company employee.", bn: "আমার বাবা একজন কোম্পানির কর্মচারী।" } } },
                    { char: "部", on: "ブ", kun: "-", meanings: { en: "part, department", bn: "অংশ, বিভাগ" }, strokes: 11, examples: [
                        { word: "部屋", reading: "へや", meanings: { en: "room", bn: "ঘর" } },
                        { word: "全部", reading: "ぜんぶ", meanings: { en: "all, everything", bn: "সব" } },
                        { word: "部長", reading: "ぶちょう", meanings: { en: "department head", bn: "বিভাগীয় প্রধান" } }
                    ], exampleSentence: { jp: "この部屋は広いです。", reading: "このへやはひろいです。", meanings: { en: "This room is spacious.", bn: "এই ঘরটি প্রশস্ত।" } } },
                    { char: "仕", on: "シ", kun: "-", meanings: { en: "to serve", bn: "সেবা করা" }, strokes: 5, examples: [
                        { word: "仕事", reading: "しごと", meanings: { en: "work, job", bn: "কাজ" } },
                        { word: "仕方", reading: "しかた", meanings: { en: "way of doing", bn: "করার পদ্ধতি" } },
                        { word: "給仕", reading: "きゅうじ", meanings: { en: "waiter", bn: "ওয়েটার" } }
                    ], exampleSentence: { jp: "仕事は忙しいです。", reading: "しごとはいそがしいです。", meanings: { en: "Work is busy.", bn: "কাজ ব্যস্ত।" } } },
                    { char: "事", on: "ジ", kun: "こと", meanings: { en: "matter, thing", bn: "বিষয়, কাজ" }, strokes: 8, examples: [
                        { word: "仕事", reading: "しごと", meanings: { en: "work", bn: "কাজ" } },
                        { word: "大事", reading: "だいじ", meanings: { en: "important", bn: "গুরুত্বপূর্ণ" } },
                        { word: "食事", reading: "しょくじ", meanings: { en: "meal", bn: "খাবার" } }
                    ], exampleSentence: { jp: "大事な用事があります。", reading: "だいじなようじがあります。", meanings: { en: "I have an important errand.", bn: "আমার একটি গুরুত্বপূর্ণ কাজ আছে।" } } },
                    { char: "場", on: "ジョウ", kun: "ば", meanings: { en: "place, location", bn: "স্থান" }, strokes: 12, examples: [
                        { word: "場所", reading: "ばしょ", meanings: { en: "place", bn: "স্থান" } },
                        { word: "会場", reading: "かいじょう", meanings: { en: "venue", bn: "অনুষ্ঠানস্থল" } },
                        { word: "市場", reading: "いちば", meanings: { en: "market", bn: "বাজার" } }
                    ], exampleSentence: { jp: "会議の場所はどこですか。", reading: "かいぎのばしょはどこですか。", meanings: { en: "Where is the meeting place?", bn: "মিটিং-এর স্থান কোথায়?" } } },
                    { char: "内", on: "ナイ", kun: "うち", meanings: { en: "inside", bn: "ভেতরে" }, strokes: 4, examples: [
                        { word: "内", reading: "うち", meanings: { en: "inside", bn: "ভেতরে" } },
                        { word: "案内", reading: "あんない", meanings: { en: "guidance", bn: "গাইড" } },
                        { word: "市内", reading: "しない", meanings: { en: "within the city", bn: "শহরের মধ্যে" } }
                    ], exampleSentence: { jp: "案内してください。", reading: "あんないしてください。", meanings: { en: "Please guide me.", bn: "দয়া করে আমাকে গাইড করুন।" } } },
                    { char: "全", on: "ゼン", kun: "すべ(て)", meanings: { en: "all, whole", bn: "সম্পূর্ণ" }, strokes: 6, examples: [
                        { word: "全部", reading: "ぜんぶ", meanings: { en: "all, everything", bn: "সব" } },
                        { word: "全国", reading: "ぜんこく", meanings: { en: "whole country", bn: "সারাদেশ" } },
                        { word: "安全", reading: "あんぜん", meanings: { en: "safety", bn: "নিরাপত্তা" } }
                    ], exampleSentence: { jp: "全部食べました。", reading: "ぜんぶたべました。", meanings: { en: "I ate everything.", bn: "আমি সব খেয়েছি।" } } }
                ]
            },
            {
                id: "transportation-travel",
                title: "Transportation & Travel",
                items: [
                    { char: "旅", on: "リョ", kun: "たび", meanings: { en: "travel", bn: "ভ্রমণ" }, strokes: 10, examples: [
                        { word: "旅行", reading: "りょこう", meanings: { en: "travel", bn: "ভ্রমণ" } },
                        { word: "旅館", reading: "りょかん", meanings: { en: "Japanese inn", bn: "জাপানি সরাইখানা" } },
                        { word: "一人旅", reading: "ひとりたび", meanings: { en: "solo trip", bn: "একা ভ্রমণ" } }
                    ], exampleSentence: { jp: "家族と旅行します。", reading: "かぞくとりょこうします。", meanings: { en: "I will travel with my family.", bn: "আমি পরিবারের সাথে ভ্রমণ করব।" } } },
                    { char: "乗", on: "ジョウ", kun: "の(る)", meanings: { en: "to ride", bn: "চড়া" }, strokes: 9, examples: [
                        { word: "乗る", reading: "のる", meanings: { en: "to ride", bn: "চড়া" } },
                        { word: "乗り物", reading: "のりもの", meanings: { en: "vehicle", bn: "যানবাহন" } },
                        { word: "乗客", reading: "じょうきゃく", meanings: { en: "passenger", bn: "যাত্রী" } }
                    ], exampleSentence: { jp: "バスに乗ります。", reading: "バスにのります。", meanings: { en: "I ride the bus.", bn: "আমি বাসে চড়ি।" } } },
                    { char: "降", on: "コウ", kun: "お(りる), ふ(る)", meanings: { en: "to get off, to fall (rain)", bn: "নামা, পড়া (বৃষ্টি)" }, strokes: 10, examples: [
                        { word: "降りる", reading: "おりる", meanings: { en: "to get off", bn: "নামা" } },
                        { word: "雨が降る", reading: "あめがふる", meanings: { en: "to rain", bn: "বৃষ্টি পড়া" } },
                        { word: "下降", reading: "かこう", meanings: { en: "descent", bn: "নেমে যাওয়া" } }
                    ], exampleSentence: { jp: "駅でバスを降ります。", reading: "えきでバスをおります。", meanings: { en: "I get off the bus at the station.", bn: "আমি স্টেশনে বাস থেকে নামি।" } } },
                    { char: "通", on: "ツウ", kun: "とお(る), かよ(う)", meanings: { en: "to pass, commute", bn: "যাওয়া, যাতায়াত করা" }, strokes: 10, examples: [
                        { word: "通る", reading: "とおる", meanings: { en: "to pass through", bn: "দিয়ে যাওয়া" } },
                        { word: "通学", reading: "つうがく", meanings: { en: "commuting to school", bn: "স্কুলে যাতায়াত" } },
                        { word: "交通", reading: "こうつう", meanings: { en: "traffic", bn: "ট্রাফিক" } }
                    ], exampleSentence: { jp: "毎日、学校に通います。", reading: "まいにち、がっこうにかよいます。", meanings: { en: "I commute to school every day.", bn: "আমি প্রতিদিন স্কুলে যাতায়াত করি।" } } },
                    { char: "運", on: "ウン", kun: "はこ(ぶ)", meanings: { en: "to carry, luck", bn: "বহন করা, ভাগ্য" }, strokes: 12, examples: [
                        { word: "運ぶ", reading: "はこぶ", meanings: { en: "to carry", bn: "বহন করা" } },
                        { word: "運転", reading: "うんてん", meanings: { en: "driving", bn: "গাড়ি চালানো" } },
                        { word: "運動", reading: "うんどう", meanings: { en: "exercise", bn: "ব্যায়াম" } }
                    ], exampleSentence: { jp: "荷物を運びます。", reading: "にもつをはこびます。", meanings: { en: "I carry the luggage.", bn: "আমি মালপত্র বহন করি।" } } },
                    { char: "転", on: "テン", kun: "ころ(がる)", meanings: { en: "to turn, roll", bn: "ঘোরা, গড়ানো" }, strokes: 11, examples: [
                        { word: "運転", reading: "うんてん", meanings: { en: "driving", bn: "গাড়ি চালানো" } },
                        { word: "転校", reading: "てんこう", meanings: { en: "school transfer", bn: "স্কুল পরিবর্তন" } },
                        { word: "自転車", reading: "じてんしゃ", meanings: { en: "bicycle", bn: "সাইকেল" } }
                    ], exampleSentence: { jp: "車を運転します。", reading: "くるまをうんてんします。", meanings: { en: "I drive a car.", bn: "আমি গাড়ি চালাই।" } } },
                    { char: "鉄", on: "テツ", kun: "-", meanings: { en: "iron, railway", bn: "লোহা, রেলপথ" }, strokes: 13, examples: [
                        { word: "地下鉄", reading: "ちかてつ", meanings: { en: "subway", bn: "পাতাল রেল" } },
                        { word: "鉄道", reading: "てつどう", meanings: { en: "railway", bn: "রেলপথ" } },
                        { word: "鉄橋", reading: "てっきょう", meanings: { en: "iron bridge", bn: "লোহার সেতু" } }
                    ], exampleSentence: { jp: "地下鉄で行きます。", reading: "ちかてつでいきます。", meanings: { en: "I go by subway.", bn: "আমি পাতাল রেলে করে যাই।" } } }
                ]
            },
            {
                id: "buildings-facilities",
                title: "Buildings & Facilities",
                items: [
                    { char: "館", on: "カン", kun: "-", meanings: { en: "building, hall", bn: "ভবন, হল" }, strokes: 16, examples: [
                        { word: "図書館", reading: "としょかん", meanings: { en: "library", bn: "গ্রন্থাগার" } },
                        { word: "大使館", reading: "たいしかん", meanings: { en: "embassy", bn: "দূতাবাস" } },
                        { word: "美術館", reading: "びじゅつかん", meanings: { en: "art museum", bn: "চিত্রশালা" } }
                    ], exampleSentence: { jp: "図書館で勉強します。", reading: "としょかんでべんきょうします。", meanings: { en: "I study at the library.", bn: "আমি গ্রন্থাগারে পড়াশোনা করি।" } } },
                    { char: "堂", on: "ドウ", kun: "-", meanings: { en: "hall", bn: "হল" }, strokes: 11, examples: [
                        { word: "食堂", reading: "しょくどう", meanings: { en: "cafeteria", bn: "ক্যান্টিন" } },
                        { word: "講堂", reading: "こうどう", meanings: { en: "auditorium", bn: "মিলনায়তন" } },
                        { word: "公会堂", reading: "こうかいどう", meanings: { en: "public hall", bn: "সরকারি হল" } }
                    ], exampleSentence: { jp: "食堂で昼ご飯を食べます。", reading: "しょくどうでひるごはんをたべます。", meanings: { en: "I eat lunch at the cafeteria.", bn: "আমি ক্যান্টিনে দুপুরের খাবার খাই।" } } },
                    { char: "室", on: "シツ", kun: "-", meanings: { en: "room", bn: "কক্ষ" }, strokes: 9, examples: [
                        { word: "教室", reading: "きょうしつ", meanings: { en: "classroom", bn: "শ্রেণীকক্ষ" } },
                        { word: "会議室", reading: "かいぎしつ", meanings: { en: "meeting room", bn: "সভাকক্ষ" } },
                        { word: "研究室", reading: "けんきゅうしつ", meanings: { en: "research lab", bn: "গবেষণাগার" } }
                    ], exampleSentence: { jp: "教室で勉強します。", reading: "きょうしつでべんきょうします。", meanings: { en: "I study in the classroom.", bn: "আমি শ্রেণীকক্ষে পড়াশোনা করি।" } } },
                    { char: "屋", on: "オク", kun: "や", meanings: { en: "shop, roof", bn: "দোকান, ছাদ" }, strokes: 9, examples: [
                        { word: "花屋", reading: "はなや", meanings: { en: "flower shop", bn: "ফুলের দোকান" } },
                        { word: "本屋", reading: "ほんや", meanings: { en: "bookstore", bn: "বইয়ের দোকান" } },
                        { word: "部屋", reading: "へや", meanings: { en: "room", bn: "ঘর" } }
                    ], exampleSentence: { jp: "花屋で花を買います。", reading: "はなやではなをかいます。", meanings: { en: "I buy flowers at the flower shop.", bn: "আমি ফুলের দোকান থেকে ফুল কিনি।" } } },
                    { char: "園", on: "エン", kun: "-", meanings: { en: "garden, park", bn: "বাগান, উদ্যান" }, strokes: 13, examples: [
                        { word: "公園", reading: "こうえん", meanings: { en: "park", bn: "পার্ক" } },
                        { word: "動物園", reading: "どうぶつえん", meanings: { en: "zoo", bn: "চিড়িয়াখানা" } },
                        { word: "幼稚園", reading: "ようちえん", meanings: { en: "kindergarten", bn: "কিন্ডারগার্টেন" } }
                    ], exampleSentence: { jp: "公園で遊びます。", reading: "こうえんであそびます。", meanings: { en: "I play in the park.", bn: "আমি পার্কে খেলি।" } } },
                    { char: "所", on: "ショ", kun: "ところ", meanings: { en: "place", bn: "স্থান" }, strokes: 8, examples: [
                        { word: "所", reading: "ところ", meanings: { en: "place", bn: "স্থান" } },
                        { word: "住所", reading: "じゅうしょ", meanings: { en: "address", bn: "ঠিকানা" } },
                        { word: "台所", reading: "だいどころ", meanings: { en: "kitchen", bn: "রান্নাঘর" } }
                    ], exampleSentence: { jp: "住所を教えてください。", reading: "じゅうしょをおしえてください。", meanings: { en: "Please tell me your address.", bn: "দয়া করে আপনার ঠিকানা বলুন।" } } },
                    { char: "建", on: "ケン", kun: "た(てる)", meanings: { en: "to build", bn: "নির্মাণ করা" }, strokes: 9, examples: [
                        { word: "建てる", reading: "たてる", meanings: { en: "to build", bn: "নির্মাণ করা" } },
                        { word: "建物", reading: "たてもの", meanings: { en: "building", bn: "ভবন" } },
                        { word: "建築", reading: "けんちく", meanings: { en: "architecture", bn: "স্থাপত্য" } }
                    ], exampleSentence: { jp: "新しい家を建てます。", reading: "あたらしいいえをたてます。", meanings: { en: "I will build a new house.", bn: "আমি একটি নতুন বাড়ি নির্মাণ করব।" } } }
                ]
            },
            {
                id: "regions-administration",
                title: "Regions & Administration",
                items: [
                    { char: "都", on: "ト, ツ", kun: "みやこ", meanings: { en: "capital, metropolis", bn: "রাজধানী, মহানগর" }, strokes: 11, examples: [
                        { word: "東京都", reading: "とうきょうと", meanings: { en: "Tokyo Metropolis", bn: "টোকিও মহানগর" } },
                        { word: "都市", reading: "とし", meanings: { en: "city", bn: "শহর" } },
                        { word: "都合", reading: "つごう", meanings: { en: "circumstances", bn: "সুবিধা" } }
                    ], exampleSentence: { jp: "東京都に住んでいます。", reading: "とうきょうとにすんでいます。", meanings: { en: "I live in Tokyo.", bn: "আমি টোকিওতে বাস করি।" } } },
                    { char: "県", on: "ケン", kun: "-", meanings: { en: "prefecture", bn: "প্রদেশ" }, strokes: 9, examples: [
                        { word: "県", reading: "けん", meanings: { en: "prefecture", bn: "প্রদেশ" } },
                        { word: "神奈川県", reading: "かながわけん", meanings: { en: "Kanagawa Prefecture", bn: "কানাগাওয়া প্রদেশ" } },
                        { word: "県庁", reading: "けんちょう", meanings: { en: "prefectural office", bn: "প্রাদেশিক অফিস" } }
                    ], exampleSentence: { jp: "どこの県に住んでいますか。", reading: "どこのけんにすんでいますか。", meanings: { en: "Which prefecture do you live in?", bn: "আপনি কোন প্রদেশে বাস করেন?" } } },
                    { char: "区", on: "ク", kun: "-", meanings: { en: "ward, district", bn: "ওয়ার্ড, এলাকা" }, strokes: 4, examples: [
                        { word: "区", reading: "く", meanings: { en: "ward", bn: "ওয়ার্ড" } },
                        { word: "新宿区", reading: "しんじゅくく", meanings: { en: "Shinjuku Ward", bn: "শিনজুকু ওয়ার্ড" } },
                        { word: "地区", reading: "ちく", meanings: { en: "district", bn: "এলাকা" } }
                    ], exampleSentence: { jp: "新宿区に住んでいます。", reading: "しんじゅくくにすんでいます。", meanings: { en: "I live in Shinjuku Ward.", bn: "আমি শিনজুকু ওয়ার্ডে বাস করি।" } } },
                    { char: "市", on: "シ", kun: "いち", meanings: { en: "city", bn: "শহর" }, strokes: 5, examples: [
                        { word: "市", reading: "し", meanings: { en: "city", bn: "শহর" } },
                        { word: "市役所", reading: "しやくしょ", meanings: { en: "city hall", bn: "সিটি হল" } },
                        { word: "市場", reading: "いちば", meanings: { en: "market", bn: "বাজার" } }
                    ], exampleSentence: { jp: "市役所はどこですか。", reading: "しやくしょはどこですか。", meanings: { en: "Where is the city hall?", bn: "সিটি হল কোথায়?" } } },
                    { char: "村", on: "ソン", kun: "むら", meanings: { en: "village", bn: "গ্রাম" }, strokes: 7, examples: [
                        { word: "村", reading: "むら", meanings: { en: "village", bn: "গ্রাম" } },
                        { word: "農村", reading: "のうそん", meanings: { en: "farming village", bn: "কৃষি গ্রাম" } },
                        { word: "村人", reading: "むらびと", meanings: { en: "villager", bn: "গ্রামবাসী" } }
                    ], exampleSentence: { jp: "小さい村に住んでいます。", reading: "ちいさいむらにすんでいます。", meanings: { en: "I live in a small village.", bn: "আমি একটি ছোট গ্রামে বাস করি।" } } },
                    { char: "民", on: "ミン", kun: "-", meanings: { en: "people, citizen", bn: "জনগণ" }, strokes: 5, examples: [
                        { word: "国民", reading: "こくみん", meanings: { en: "citizen", bn: "নাগরিক" } },
                        { word: "市民", reading: "しみん", meanings: { en: "citizen (of a city)", bn: "নাগরিক (শহরের)" } },
                        { word: "民族", reading: "みんぞく", meanings: { en: "ethnic group", bn: "জাতিগোষ্ঠী" } }
                    ], exampleSentence: { jp: "国民の意見を聞きます。", reading: "こくみんのいけんをききます。", meanings: { en: "I listen to the opinions of the citizens.", bn: "আমি নাগরিকদের মতামত শুনি।" } } },
                    { char: "産", on: "サン", kun: "う(む)", meanings: { en: "to produce, birth", bn: "উৎপাদন, জন্ম" }, strokes: 11, examples: [
                        { word: "産む", reading: "うむ", meanings: { en: "to give birth", bn: "জন্ম দেওয়া" } },
                        { word: "生産", reading: "せいさん", meanings: { en: "production", bn: "উৎপাদন" } },
                        { word: "お土産", reading: "おみやげ", meanings: { en: "souvenir", bn: "স্মারক উপহার" } }
                    ], exampleSentence: { jp: "お土産を買いました。", reading: "おみやげをかいました。", meanings: { en: "I bought a souvenir.", bn: "আমি একটি স্মারক উপহার কিনেছি।" } } }
                ]
            },
            {
                id: "thinking-deciding",
                title: "Thinking & Deciding",
                items: [
                    { char: "思", on: "シ", kun: "おも(う)", meanings: { en: "to think", bn: "চিন্তা করা" }, strokes: 9, examples: [
                        { word: "思う", reading: "おもう", meanings: { en: "to think", bn: "চিন্তা করা" } },
                        { word: "思い出", reading: "おもいで", meanings: { en: "memory", bn: "স্মৃতি" } },
                        { word: "意思", reading: "いし", meanings: { en: "intention", bn: "অভিপ্রায়" } }
                    ], exampleSentence: { jp: "どう思いますか。", reading: "どうおもいますか。", meanings: { en: "What do you think?", bn: "আপনি কী মনে করেন?" } } },
                    { char: "考", on: "コウ", kun: "かんが(える)", meanings: { en: "to consider", bn: "বিবেচনা করা" }, strokes: 6, examples: [
                        { word: "考える", reading: "かんがえる", meanings: { en: "to think, consider", bn: "চিন্তা করা" } },
                        { word: "考え", reading: "かんがえ", meanings: { en: "thought, idea", bn: "চিন্তা" } },
                        { word: "参考", reading: "さんこう", meanings: { en: "reference", bn: "রেফারেন্স" } }
                    ], exampleSentence: { jp: "よく考えてください。", reading: "よくかんがえてください。", meanings: { en: "Please think carefully.", bn: "দয়া করে ভালোভাবে চিন্তা করুন।" } } },
                    { char: "知", on: "チ", kun: "し(る)", meanings: { en: "to know", bn: "জানা" }, strokes: 8, examples: [
                        { word: "知る", reading: "しる", meanings: { en: "to know", bn: "জানা" } },
                        { word: "知らせる", reading: "しらせる", meanings: { en: "to inform", bn: "জানানো" } },
                        { word: "知識", reading: "ちしき", meanings: { en: "knowledge", bn: "জ্ঞান" } }
                    ], exampleSentence: { jp: "そのニュースを知っていますか。", reading: "そのニュースをしっていますか。", meanings: { en: "Do you know that news?", bn: "আপনি কি সেই খবরটি জানেন?" } } },
                    { char: "決", on: "ケツ", kun: "き(める)", meanings: { en: "to decide", bn: "সিদ্ধান্ত নেওয়া" }, strokes: 7, examples: [
                        { word: "決める", reading: "きめる", meanings: { en: "to decide", bn: "সিদ্ধান্ত নেওয়া" } },
                        { word: "決定", reading: "けってい", meanings: { en: "decision", bn: "সিদ্ধান্ত" } },
                        { word: "解決", reading: "かいけつ", meanings: { en: "solution", bn: "সমাধান" } }
                    ], exampleSentence: { jp: "旅行の日を決めました。", reading: "りょこうのひをきめました。", meanings: { en: "I decided the day of the trip.", bn: "আমি ভ্রমণের দিন ঠিক করেছি।" } } },
                    { char: "伝", on: "デン", kun: "つた(える)", meanings: { en: "to convey", bn: "জানানো, পৌঁছে দেওয়া" }, strokes: 6, examples: [
                        { word: "伝える", reading: "つたえる", meanings: { en: "to convey, tell", bn: "জানানো" } },
                        { word: "手伝う", reading: "てつだう", meanings: { en: "to help", bn: "সাহায্য করা" } },
                        { word: "伝統", reading: "でんとう", meanings: { en: "tradition", bn: "ঐতিহ্য" } }
                    ], exampleSentence: { jp: "彼にメッセージを伝えてください。", reading: "かれにメッセージをつたえてください。", meanings: { en: "Please convey the message to him.", bn: "দয়া করে তাকে বার্তাটি জানান।" } } },
                    { char: "説", on: "セツ", kun: "と(く)", meanings: { en: "to explain, theory", bn: "ব্যাখ্যা, মতবাদ" }, strokes: 14, examples: [
                        { word: "説明", reading: "せつめい", meanings: { en: "explanation", bn: "ব্যাখ্যা" } },
                        { word: "小説", reading: "しょうせつ", meanings: { en: "novel", bn: "উপন্যাস" } },
                        { word: "説く", reading: "とく", meanings: { en: "to explain, preach", bn: "ব্যাখ্যা করা" } }
                    ], exampleSentence: { jp: "先生が説明します。", reading: "せんせいがせつめいします。", meanings: { en: "The teacher explains.", bn: "শিক্ষক ব্যাখ্যা করেন।" } } },
                    { char: "意", on: "イ", kun: "-", meanings: { en: "idea, mind", bn: "ধারণা, মন" }, strokes: 13, examples: [
                        { word: "意味", reading: "いみ", meanings: { en: "meaning", bn: "অর্থ" } },
                        { word: "注意", reading: "ちゅうい", meanings: { en: "attention, caution", bn: "সতর্কতা" } },
                        { word: "意見", reading: "いけん", meanings: { en: "opinion", bn: "মতামত" } }
                    ], exampleSentence: { jp: "この言葉の意味は何ですか。", reading: "このことばのいみはなんですか。", meanings: { en: "What is the meaning of this word?", bn: "এই শব্দটির অর্থ কী?" } } }
                ]
            },
            {
                id: "questions-topics",
                title: "Questions & Topics",
                items: [
                    { char: "質", on: "シツ", kun: "-", meanings: { en: "quality, substance", bn: "গুণমান" }, strokes: 15, examples: [
                        { word: "質問", reading: "しつもん", meanings: { en: "question", bn: "প্রশ্ন" } },
                        { word: "品質", reading: "ひんしつ", meanings: { en: "quality", bn: "মান" } },
                        { word: "性質", reading: "せいしつ", meanings: { en: "nature, character", bn: "স্বভাব" } }
                    ], exampleSentence: { jp: "質問がありますか。", reading: "しつもんがありますか。", meanings: { en: "Do you have any questions?", bn: "আপনার কোনো প্রশ্ন আছে কি?" } } },
                    { char: "問", on: "モン", kun: "と(う)", meanings: { en: "to ask, question", bn: "জিজ্ঞাসা করা" }, strokes: 11, examples: [
                        { word: "質問", reading: "しつもん", meanings: { en: "question", bn: "প্রশ্ন" } },
                        { word: "問題", reading: "もんだい", meanings: { en: "problem", bn: "সমস্যা" } },
                        { word: "問い合わせ", reading: "といあわせ", meanings: { en: "inquiry", bn: "অনুসন্ধান" } }
                    ], exampleSentence: { jp: "問題を解きます。", reading: "もんだいをときます。", meanings: { en: "I solve the problem.", bn: "আমি সমস্যাটি সমাধান করি।" } } },
                    { char: "題", on: "ダイ", kun: "-", meanings: { en: "topic, subject", bn: "বিষয়" }, strokes: 18, examples: [
                        { word: "問題", reading: "もんだい", meanings: { en: "problem", bn: "সমস্যা" } },
                        { word: "宿題", reading: "しゅくだい", meanings: { en: "homework", bn: "বাড়ির কাজ" } },
                        { word: "話題", reading: "わだい", meanings: { en: "topic", bn: "বিষয়" } }
                    ], exampleSentence: { jp: "宿題をしなければなりません。", reading: "しゅくだいをしなければなりません。", meanings: { en: "I have to do my homework.", bn: "আমাকে বাড়ির কাজ করতে হবে।" } } },
                    { char: "答", on: "トウ", kun: "こた(える)", meanings: { en: "to answer", bn: "উত্তর দেওয়া" }, strokes: 12, examples: [
                        { word: "答える", reading: "こたえる", meanings: { en: "to answer", bn: "উত্তর দেওয়া" } },
                        { word: "答え", reading: "こたえ", meanings: { en: "answer", bn: "উত্তর" } },
                        { word: "回答", reading: "かいとう", meanings: { en: "response", bn: "প্রতিক্রিয়া" } }
                    ], exampleSentence: { jp: "質問に答えてください。", reading: "しつもんにこたえてください。", meanings: { en: "Please answer the question.", bn: "দয়া করে প্রশ্নের উত্তর দিন।" } } },
                    { char: "注", on: "チュウ", kun: "そそ(ぐ)", meanings: { en: "to pour, note", bn: "ঢালা, মনোযোগ" }, strokes: 8, examples: [
                        { word: "注意", reading: "ちゅうい", meanings: { en: "attention, caution", bn: "সতর্কতা" } },
                        { word: "注文", reading: "ちゅうもん", meanings: { en: "order (request)", bn: "অর্ডার" } },
                        { word: "注射", reading: "ちゅうしゃ", meanings: { en: "injection", bn: "ইনজেকশন" } }
                    ], exampleSentence: { jp: "車に注意してください。", reading: "くるまにちゅういしてください。", meanings: { en: "Please watch out for cars.", bn: "দয়া করে গাড়ির ব্যাপারে সতর্ক থাকুন।" } } },
                    { char: "切", on: "セツ", kun: "き(る)", meanings: { en: "to cut", bn: "কাটা" }, strokes: 4, examples: [
                        { word: "切る", reading: "きる", meanings: { en: "to cut", bn: "কাটা" } },
                        { word: "大切", reading: "たいせつ", meanings: { en: "important", bn: "গুরুত্বপূর্ণ" } },
                        { word: "切符", reading: "きっぷ", meanings: { en: "ticket", bn: "টিকিট" } }
                    ], exampleSentence: { jp: "紙をはさみで切ります。", reading: "かみをはさみできります。", meanings: { en: "I cut the paper with scissors.", bn: "আমি কাগজ কাঁচি দিয়ে কাটি।" } } }
                ]
            },
            {
                id: "lending-borrowing-receiving",
                title: "Lending, Borrowing & Receiving",
                items: [
                    { char: "貸", on: "タイ", kun: "か(す)", meanings: { en: "to lend", bn: "ধার দেওয়া" }, strokes: 12, examples: [
                        { word: "貸す", reading: "かす", meanings: { en: "to lend", bn: "ধার দেওয়া" } },
                        { word: "貸し出し", reading: "かしだし", meanings: { en: "lending", bn: "ধার দেওয়া (কার্যক্রম)" } },
                        { word: "賃貸", reading: "ちんたい", meanings: { en: "rental", bn: "ভাড়া" } }
                    ], exampleSentence: { jp: "本を貸してください。", reading: "ほんをかしてください。", meanings: { en: "Please lend me the book.", bn: "দয়া করে আমাকে বইটি ধার দিন।" } } },
                    { char: "借", on: "シャク", kun: "か(りる)", meanings: { en: "to borrow", bn: "ধার নেওয়া" }, strokes: 10, examples: [
                        { word: "借りる", reading: "かりる", meanings: { en: "to borrow", bn: "ধার নেওয়া" } },
                        { word: "借金", reading: "しゃっきん", meanings: { en: "debt", bn: "ঋণ" } },
                        { word: "借り物", reading: "かりもの", meanings: { en: "borrowed item", bn: "ধার করা জিনিস" } }
                    ], exampleSentence: { jp: "ペンを借りてもいいですか。", reading: "ペンをかりてもいいですか。", meanings: { en: "May I borrow your pen?", bn: "আমি কি আপনার কলম ধার নিতে পারি?" } } },
                    { char: "返", on: "ヘン", kun: "かえ(す)", meanings: { en: "to return (something)", bn: "ফেরত দেওয়া" }, strokes: 7, examples: [
                        { word: "返す", reading: "かえす", meanings: { en: "to return (something)", bn: "ফেরত দেওয়া" } },
                        { word: "返事", reading: "へんじ", meanings: { en: "reply", bn: "উত্তর" } },
                        { word: "返却", reading: "へんきゃく", meanings: { en: "return (of an item)", bn: "ফেরত (বই ইত্যাদি)" } }
                    ], exampleSentence: { jp: "本を図書館に返します。", reading: "ほんをとしょかんにかえします。", meanings: { en: "I return the book to the library.", bn: "আমি বইটি গ্রন্থাগারে ফেরত দিই।" } } },
                    { char: "受", on: "ジュ", kun: "う(ける)", meanings: { en: "to receive", bn: "গ্রহণ করা" }, strokes: 8, examples: [
                        { word: "受ける", reading: "うける", meanings: { en: "to receive", bn: "গ্রহণ করা" } },
                        { word: "受付", reading: "うけつけ", meanings: { en: "reception", bn: "রিসেপশন" } },
                        { word: "受験", reading: "じゅけん", meanings: { en: "taking an exam", bn: "পরীক্ষা দেওয়া" } }
                    ], exampleSentence: { jp: "試験を受けます。", reading: "しけんをうけます。", meanings: { en: "I take the exam.", bn: "আমি পরীক্ষা দিই।" } } },
                    { char: "取", on: "シュ", kun: "と(る)", meanings: { en: "to take", bn: "নেওয়া" }, strokes: 8, examples: [
                        { word: "取る", reading: "とる", meanings: { en: "to take", bn: "নেওয়া" } },
                        { word: "受け取る", reading: "うけとる", meanings: { en: "to receive", bn: "গ্রহণ করা" } },
                        { word: "取り消す", reading: "とりけす", meanings: { en: "to cancel", bn: "বাতিল করা" } }
                    ], exampleSentence: { jp: "荷物を取ってください。", reading: "にもつをとってください。", meanings: { en: "Please take the luggage.", bn: "দয়া করে মালপত্র নিন।" } } },
                    { char: "拾", on: "シュウ", kun: "ひろ(う)", meanings: { en: "to pick up", bn: "কুড়িয়ে নেওয়া" }, strokes: 9, examples: [
                        { word: "拾う", reading: "ひろう", meanings: { en: "to pick up", bn: "কুড়িয়ে নেওয়া" } },
                        { word: "拾い物", reading: "ひろいもの", meanings: { en: "a find, pickup", bn: "কুড়িয়ে পাওয়া জিনিস" } },
                        { word: "ごみを拾う", reading: "ごみをひろう", meanings: { en: "to pick up trash", bn: "আবর্জনা কুড়ানো" } }
                    ], exampleSentence: { jp: "財布を拾いました。", reading: "さいふをひろいました。", meanings: { en: "I picked up a wallet.", bn: "আমি একটি মানিব্যাগ কুড়িয়ে পেয়েছি।" } } },
                    { char: "捨", on: "シャ", kun: "す(てる)", meanings: { en: "to throw away", bn: "ফেলে দেওয়া" }, strokes: 11, examples: [
                        { word: "捨てる", reading: "すてる", meanings: { en: "to throw away", bn: "ফেলে দেওয়া" } },
                        { word: "ごみを捨てる", reading: "ごみをすてる", meanings: { en: "to throw away trash", bn: "আবর্জনা ফেলা" } },
                        { word: "使い捨て", reading: "つかいすて", meanings: { en: "disposable", bn: "একবার ব্যবহারযোগ্য" } }
                    ], exampleSentence: { jp: "ごみを捨ててください。", reading: "ごみをすててください。", meanings: { en: "Please throw away the trash.", bn: "দয়া করে আবর্জনা ফেলে দিন।" } } }
                ]
            },
            {
                id: "daily-routine-clothing",
                title: "Daily Routine & Clothing",
                items: [
                    { char: "起", on: "キ", kun: "お(きる), お(こす)", meanings: { en: "to wake up, get up", bn: "ঘুম থেকে ওঠা" }, strokes: 10, examples: [
                        { word: "起きる", reading: "おきる", meanings: { en: "to wake up", bn: "ঘুম থেকে ওঠা" } },
                        { word: "起こす", reading: "おこす", meanings: { en: "to wake someone", bn: "কাউকে জাগানো" } },
                        { word: "早起き", reading: "はやおき", meanings: { en: "waking up early", bn: "তাড়াতাড়ি ঘুম থেকে ওঠা" } }
                    ], exampleSentence: { jp: "毎朝七時に起きます。", reading: "まいあさしちじにおきます。", meanings: { en: "I wake up at seven every morning.", bn: "আমি প্রতিদিন সকাল সাতটায় উঠি।" } } },
                    { char: "寝", on: "シン", kun: "ね(る)", meanings: { en: "to sleep", bn: "ঘুমানো" }, strokes: 13, examples: [
                        { word: "寝る", reading: "ねる", meanings: { en: "to sleep", bn: "ঘুমানো" } },
                        { word: "寝室", reading: "しんしつ", meanings: { en: "bedroom", bn: "শোবার ঘর" } },
                        { word: "昼寝", reading: "ひるね", meanings: { en: "nap", bn: "দুপুরের ঘুম" } }
                    ], exampleSentence: { jp: "十一時に寝ます。", reading: "じゅういちじにねます。", meanings: { en: "I sleep at eleven o'clock.", bn: "আমি রাত এগারোটায় ঘুমাই।" } } },
                    { char: "洗", on: "セン", kun: "あら(う)", meanings: { en: "to wash", bn: "ধোয়া" }, strokes: 9, examples: [
                        { word: "洗う", reading: "あらう", meanings: { en: "to wash", bn: "ধোয়া" } },
                        { word: "洗濯", reading: "せんたく", meanings: { en: "laundry", bn: "কাপড় ধোয়া" } },
                        { word: "洗顔", reading: "せんがん", meanings: { en: "face washing", bn: "মুখ ধোয়া" } }
                    ], exampleSentence: { jp: "手を洗ってください。", reading: "てをあらってください。", meanings: { en: "Please wash your hands.", bn: "দয়া করে হাত ধুয়ে নিন।" } } },
                    { char: "着", on: "チャク", kun: "き(る), つ(く)", meanings: { en: "to wear, to arrive", bn: "পরা, পৌঁছানো" }, strokes: 12, examples: [
                        { word: "着る", reading: "きる", meanings: { en: "to wear", bn: "পরা" } },
                        { word: "着く", reading: "つく", meanings: { en: "to arrive", bn: "পৌঁছানো" } },
                        { word: "到着", reading: "とうちゃく", meanings: { en: "arrival", bn: "আগমন" } }
                    ], exampleSentence: { jp: "駅に着きました。", reading: "えきにつきました。", meanings: { en: "I arrived at the station.", bn: "আমি স্টেশনে পৌঁছেছি।" } } },
                    { char: "服", on: "フク", kun: "-", meanings: { en: "clothes", bn: "পোশাক" }, strokes: 8, examples: [
                        { word: "服", reading: "ふく", meanings: { en: "clothes", bn: "পোশাক" } },
                        { word: "洋服", reading: "ようふく", meanings: { en: "Western clothes", bn: "পাশ্চাত্য পোশাক" } },
                        { word: "制服", reading: "せいふく", meanings: { en: "uniform", bn: "ইউনিফর্ম" } }
                    ], exampleSentence: { jp: "新しい服を買いました。", reading: "あたらしいふくをかいました。", meanings: { en: "I bought new clothes.", bn: "আমি নতুন পোশাক কিনেছি।" } } },
                    { char: "忘", on: "ボウ", kun: "わす(れる)", meanings: { en: "to forget", bn: "ভুলে যাওয়া" }, strokes: 7, examples: [
                        { word: "忘れる", reading: "わすれる", meanings: { en: "to forget", bn: "ভুলে যাওয়া" } },
                        { word: "忘れ物", reading: "わすれもの", meanings: { en: "lost item", bn: "ভুলে ফেলে যাওয়া জিনিস" } },
                        { word: "物忘れ", reading: "ものわすれ", meanings: { en: "forgetfulness", bn: "ভুলে যাওয়ার স্বভাব" } }
                    ], exampleSentence: { jp: "傘を忘れました。", reading: "かさをわすれました。", meanings: { en: "I forgot my umbrella.", bn: "আমি আমার ছাতা ভুলে গেছি।" } } },
                    { char: "呼", on: "コ", kun: "よ(ぶ)", meanings: { en: "to call", bn: "ডাকা" }, strokes: 8, examples: [
                        { word: "呼ぶ", reading: "よぶ", meanings: { en: "to call", bn: "ডাকা" } },
                        { word: "呼び方", reading: "よびかた", meanings: { en: "way of calling", bn: "ডাকার পদ্ধতি" } },
                        { word: "呼吸", reading: "こきゅう", meanings: { en: "breathing", bn: "শ্বাস-প্রশ্বাস" } }
                    ], exampleSentence: { jp: "タクシーを呼びます。", reading: "タクシーをよびます。", meanings: { en: "I call a taxi.", bn: "আমি একটি ট্যাক্সি ডাকি।" } } },
                    { char: "待", on: "タイ", kun: "ま(つ)", meanings: { en: "to wait", bn: "অপেক্ষা করা" }, strokes: 9, examples: [
                        { word: "待つ", reading: "まつ", meanings: { en: "to wait", bn: "অপেক্ষা করা" } },
                        { word: "待合室", reading: "まちあいしつ", meanings: { en: "waiting room", bn: "অপেক্ষা কক্ষ" } },
                        { word: "期待", reading: "きたい", meanings: { en: "expectation", bn: "প্রত্যাশা" } }
                    ], exampleSentence: { jp: "ここで待ってください。", reading: "ここでまってください。", meanings: { en: "Please wait here.", bn: "দয়া করে এখানে অপেক্ষা করুন।" } } }
                ]
            },
            {
                id: "movement-verbs",
                title: "Movement Verbs",
                items: [
                    { char: "歩", on: "ホ", kun: "ある(く)", meanings: { en: "to walk", bn: "হাঁটা" }, strokes: 8, examples: [
                        { word: "歩く", reading: "あるく", meanings: { en: "to walk", bn: "হাঁটা" } },
                        { word: "散歩", reading: "さんぽ", meanings: { en: "walk, stroll", bn: "বেড়ানো" } },
                        { word: "歩道", reading: "ほどう", meanings: { en: "sidewalk", bn: "ফুটপাথ" } }
                    ], exampleSentence: { jp: "公園を歩きます。", reading: "こうえんをあるきます。", meanings: { en: "I walk in the park.", bn: "আমি পার্কে হাঁটি।" } } },
                    { char: "走", on: "ソウ", kun: "はし(る)", meanings: { en: "to run", bn: "দৌড়ানো" }, strokes: 7, examples: [
                        { word: "走る", reading: "はしる", meanings: { en: "to run", bn: "দৌড়ানো" } },
                        { word: "競走", reading: "きょうそう", meanings: { en: "race", bn: "দৌড় প্রতিযোগিতা" } },
                        { word: "走者", reading: "そうしゃ", meanings: { en: "runner", bn: "দৌড়বিদ" } }
                    ], exampleSentence: { jp: "毎朝走ります。", reading: "まいあさはしります。", meanings: { en: "I run every morning.", bn: "আমি প্রতিদিন সকালে দৌড়াই।" } } },
                    { char: "住", on: "ジュウ", kun: "す(む)", meanings: { en: "to live, reside", bn: "বাস করা" }, strokes: 7, examples: [
                        { word: "住む", reading: "すむ", meanings: { en: "to live", bn: "বাস করা" } },
                        { word: "住所", reading: "じゅうしょ", meanings: { en: "address", bn: "ঠিকানা" } },
                        { word: "住民", reading: "じゅうみん", meanings: { en: "resident", bn: "বাসিন্দা" } }
                    ], exampleSentence: { jp: "東京に住んでいます。", reading: "とうきょうにすんでいます。", meanings: { en: "I live in Tokyo.", bn: "আমি টোকিওতে বাস করি।" } } },
                    { char: "進", on: "シン", kun: "すす(む)", meanings: { en: "to advance, proceed", bn: "এগিয়ে যাওয়া" }, strokes: 11, examples: [
                        { word: "進む", reading: "すすむ", meanings: { en: "to advance", bn: "এগিয়ে যাওয়া" } },
                        { word: "進学", reading: "しんがく", meanings: { en: "advancing to higher education", bn: "উচ্চশিক্ষায় ভর্তি" } },
                        { word: "前進", reading: "ぜんしん", meanings: { en: "moving forward", bn: "সামনে এগোনো" } }
                    ], exampleSentence: { jp: "前に進んでください。", reading: "まえにすすんでください。", meanings: { en: "Please move forward.", bn: "দয়া করে সামনে এগিয়ে যান।" } } },
                    { char: "遅", on: "チ", kun: "おく(れる), おそ(い)", meanings: { en: "late, slow", bn: "দেরি, ধীর" }, strokes: 12, examples: [
                        { word: "遅れる", reading: "おくれる", meanings: { en: "to be late", bn: "দেরি হওয়া" } },
                        { word: "遅い", reading: "おそい", meanings: { en: "slow, late", bn: "ধীর, দেরি" } },
                        { word: "遅刻", reading: "ちこく", meanings: { en: "tardiness", bn: "দেরিতে আসা" } }
                    ], exampleSentence: { jp: "電車が遅れました。", reading: "でんしゃがおくれました。", meanings: { en: "The train was late.", bn: "ট্রেনটি দেরি করেছে।" } } },
                    { char: "泳", on: "エイ", kun: "およ(ぐ)", meanings: { en: "to swim", bn: "সাঁতার কাটা" }, strokes: 8, examples: [
                        { word: "泳ぐ", reading: "およぐ", meanings: { en: "to swim", bn: "সাঁতার কাটা" } },
                        { word: "水泳", reading: "すいえい", meanings: { en: "swimming", bn: "সাঁতার" } },
                        { word: "平泳ぎ", reading: "ひらおよぎ", meanings: { en: "breaststroke", bn: "ব্রেস্টস্ট্রোক" } }
                    ], exampleSentence: { jp: "海で泳ぎます。", reading: "うみでおよぎます。", meanings: { en: "I swim in the sea.", bn: "আমি সমুদ্রে সাঁতার কাটি।" } } },
                    { char: "止", on: "シ", kun: "と(まる), と(める)", meanings: { en: "to stop", bn: "থামা" }, strokes: 4, examples: [
                        { word: "止まる", reading: "とまる", meanings: { en: "to stop (intransitive)", bn: "থামা" } },
                        { word: "止める", reading: "とめる", meanings: { en: "to stop (something)", bn: "থামানো" } },
                        { word: "禁止", reading: "きんし", meanings: { en: "prohibition", bn: "নিষেধ" } }
                    ], exampleSentence: { jp: "車が止まりました。", reading: "くるまがとまりました。", meanings: { en: "The car stopped.", bn: "গাড়িটি থেমে গেছে।" } } }
                ]
            },
            {
                id: "change-condition",
                title: "Change & Condition",
                items: [
                    { char: "変", on: "ヘン", kun: "か(わる)", meanings: { en: "to change", bn: "পরিবর্তন হওয়া" }, strokes: 9, examples: [
                        { word: "変わる", reading: "かわる", meanings: { en: "to change", bn: "পরিবর্তন হওয়া" } },
                        { word: "大変", reading: "たいへん", meanings: { en: "tough, serious", bn: "কঠিন" } },
                        { word: "変化", reading: "へんか", meanings: { en: "change", bn: "পরিবর্তন" } }
                    ], exampleSentence: { jp: "天気が変わりました。", reading: "てんきがかわりました。", meanings: { en: "The weather changed.", bn: "আবহাওয়া পরিবর্তন হয়েছে।" } } },
                    { char: "続", on: "ゾク", kun: "つづ(く)", meanings: { en: "to continue", bn: "চালিয়ে যাওয়া" }, strokes: 13, examples: [
                        { word: "続く", reading: "つづく", meanings: { en: "to continue", bn: "চলতে থাকা" } },
                        { word: "続ける", reading: "つづける", meanings: { en: "to continue (something)", bn: "চালিয়ে যাওয়া" } },
                        { word: "継続", reading: "けいぞく", meanings: { en: "continuation", bn: "ধারাবাহিকতা" } }
                    ], exampleSentence: { jp: "雨が続いています。", reading: "あめがつづいています。", meanings: { en: "The rain is continuing.", bn: "বৃষ্টি চলছে।" } } },
                    { char: "残", on: "ザン", kun: "のこ(る)", meanings: { en: "to remain", bn: "অবশিষ্ট থাকা" }, strokes: 10, examples: [
                        { word: "残る", reading: "のこる", meanings: { en: "to remain", bn: "অবশিষ্ট থাকা" } },
                        { word: "残業", reading: "ざんぎょう", meanings: { en: "overtime work", bn: "ওভারটাইম কাজ" } },
                        { word: "残念", reading: "ざんねん", meanings: { en: "regrettable", bn: "দুঃখজনক" } }
                    ], exampleSentence: { jp: "料理が残っています。", reading: "りょうりがのこっています。", meanings: { en: "There is food remaining.", bn: "খাবার অবশিষ্ট আছে।" } } },
                    { char: "落", on: "ラク", kun: "お(ちる)", meanings: { en: "to fall", bn: "পড়ে যাওয়া" }, strokes: 12, examples: [
                        { word: "落ちる", reading: "おちる", meanings: { en: "to fall", bn: "পড়ে যাওয়া" } },
                        { word: "落とす", reading: "おとす", meanings: { en: "to drop (something)", bn: "ফেলে দেওয়া" } },
                        { word: "落語", reading: "らくご", meanings: { en: "comic storytelling", bn: "কমিক গল্প বলা" } }
                    ], exampleSentence: { jp: "葉が落ちています。", reading: "はがおちています。", meanings: { en: "The leaves are falling.", bn: "পাতা ঝরে পড়ছে।" } } },
                    { char: "消", on: "ショウ", kun: "き(える), け(す)", meanings: { en: "to disappear, turn off", bn: "অদৃশ্য হওয়া, বন্ধ করা" }, strokes: 10, examples: [
                        { word: "消える", reading: "きえる", meanings: { en: "to disappear", bn: "অদৃশ্য হওয়া" } },
                        { word: "消す", reading: "けす", meanings: { en: "to turn off, erase", bn: "বন্ধ করা" } },
                        { word: "消火", reading: "しょうか", meanings: { en: "extinguishing a fire", bn: "আগুন নেভানো" } }
                    ], exampleSentence: { jp: "電気を消してください。", reading: "でんきをけしてください。", meanings: { en: "Please turn off the light.", bn: "দয়া করে বাতি নিভিয়ে দিন।" } } },
                    { char: "合", on: "ゴウ", kun: "あ(う)", meanings: { en: "to fit, match", bn: "মিলিত হওয়া" }, strokes: 6, examples: [
                        { word: "合う", reading: "あう", meanings: { en: "to fit, match", bn: "মিলিত হওয়া" } },
                        { word: "都合", reading: "つごう", meanings: { en: "circumstances", bn: "সুবিধা" } },
                        { word: "場合", reading: "ばあい", meanings: { en: "case, situation", bn: "পরিস্থিতি" } }
                    ], exampleSentence: { jp: "この靴は合いません。", reading: "このくつはあいません。", meanings: { en: "These shoes don't fit.", bn: "এই জুতাগুলো মানানসই নয়।" } } },
                    { char: "困", on: "コン", kun: "こま(る)", meanings: { en: "to be troubled", bn: "সমস্যায় পড়া" }, strokes: 7, examples: [
                        { word: "困る", reading: "こまる", meanings: { en: "to be troubled", bn: "সমস্যায় পড়া" } },
                        { word: "困難", reading: "こんなん", meanings: { en: "difficulty", bn: "কষ্ট" } },
                        { word: "貧困", reading: "ひんこん", meanings: { en: "poverty", bn: "দারিদ্র্য" } }
                    ], exampleSentence: { jp: "お金がなくて困っています。", reading: "おかねがなくてこまっています。", meanings: { en: "I am troubled because I have no money.", bn: "টাকা নেই বলে আমি সমস্যায় পড়েছি।" } } }
                ]
            },
            {
                id: "making-using-acting",
                title: "Making, Using & Acting",
                items: [
                    { char: "作", on: "サク, サ", kun: "つく(る)", meanings: { en: "to make", bn: "তৈরি করা" }, strokes: 7, examples: [
                        { word: "作る", reading: "つくる", meanings: { en: "to make", bn: "তৈরি করা" } },
                        { word: "作品", reading: "さくひん", meanings: { en: "a work (art)", bn: "শিল্পকর্ম" } },
                        { word: "作文", reading: "さくぶん", meanings: { en: "composition", bn: "রচনা" } }
                    ], exampleSentence: { jp: "料理を作ります。", reading: "りょうりをつくります。", meanings: { en: "I make food.", bn: "আমি খাবার তৈরি করি।" } } },
                    { char: "使", on: "シ", kun: "つか(う)", meanings: { en: "to use", bn: "ব্যবহার করা" }, strokes: 8, examples: [
                        { word: "使う", reading: "つかう", meanings: { en: "to use", bn: "ব্যবহার করা" } },
                        { word: "使い方", reading: "つかいかた", meanings: { en: "way of using", bn: "ব্যবহারের পদ্ধতি" } },
                        { word: "大使館", reading: "たいしかん", meanings: { en: "embassy", bn: "দূতাবাস" } }
                    ], exampleSentence: { jp: "このペンを使ってもいいですか。", reading: "このペンをつかってもいいですか。", meanings: { en: "May I use this pen?", bn: "আমি কি এই কলমটি ব্যবহার করতে পারি?" } } },
                    { char: "持", on: "ジ", kun: "も(つ)", meanings: { en: "to hold, have", bn: "ধরা, রাখা" }, strokes: 9, examples: [
                        { word: "持つ", reading: "もつ", meanings: { en: "to hold, carry", bn: "ধরা" } },
                        { word: "気持ち", reading: "きもち", meanings: { en: "feeling", bn: "অনুভূতি" } },
                        { word: "持ち物", reading: "もちもの", meanings: { en: "belongings", bn: "জিনিসপত্র" } }
                    ], exampleSentence: { jp: "荷物を持ってください。", reading: "にもつをもってください。", meanings: { en: "Please carry the luggage.", bn: "দয়া করে মালপত্র ধরুন।" } } },
                    { char: "始", on: "シ", kun: "はじ(める), はじ(まる)", meanings: { en: "to begin", bn: "শুরু করা" }, strokes: 8, examples: [
                        { word: "始める", reading: "はじめる", meanings: { en: "to begin (something)", bn: "শুরু করা" } },
                        { word: "始まる", reading: "はじまる", meanings: { en: "to begin (itself)", bn: "শুরু হওয়া" } },
                        { word: "開始", reading: "かいし", meanings: { en: "commencement", bn: "সূচনা" } }
                    ], exampleSentence: { jp: "授業が始まります。", reading: "じゅぎょうがはじまります。", meanings: { en: "The class begins.", bn: "ক্লাস শুরু হয়।" } } },
                    { char: "終", on: "シュウ", kun: "お(わる)", meanings: { en: "to end", bn: "শেষ হওয়া" }, strokes: 11, examples: [
                        { word: "終わる", reading: "おわる", meanings: { en: "to end", bn: "শেষ হওয়া" } },
                        { word: "終電", reading: "しゅうでん", meanings: { en: "last train", bn: "শেষ ট্রেন" } },
                        { word: "最終", reading: "さいしゅう", meanings: { en: "final", bn: "চূড়ান্ত" } }
                    ], exampleSentence: { jp: "仕事が終わりました。", reading: "しごとがおわりました。", meanings: { en: "The work has ended.", bn: "কাজ শেষ হয়েছে।" } } },
                    { char: "送", on: "ソウ", kun: "おく(る)", meanings: { en: "to send", bn: "পাঠানো" }, strokes: 9, examples: [
                        { word: "送る", reading: "おくる", meanings: { en: "to send", bn: "পাঠানো" } },
                        { word: "送料", reading: "そうりょう", meanings: { en: "shipping fee", bn: "শিপিং ফি" } },
                        { word: "見送る", reading: "みおくる", meanings: { en: "to see off", bn: "বিদায় দেওয়া" } }
                    ], exampleSentence: { jp: "メールを送ります。", reading: "メールをおくります。", meanings: { en: "I send an email.", bn: "আমি একটি ইমেইল পাঠাই।" } } },
                    { char: "動", on: "ドウ", kun: "うご(く)", meanings: { en: "to move", bn: "নড়াচড়া করা" }, strokes: 11, examples: [
                        { word: "動く", reading: "うごく", meanings: { en: "to move", bn: "নড়াচড়া করা" } },
                        { word: "運動", reading: "うんどう", meanings: { en: "exercise", bn: "ব্যায়াম" } },
                        { word: "自動車", reading: "じどうしゃ", meanings: { en: "automobile", bn: "গাড়ি" } }
                    ], exampleSentence: { jp: "この機械は動きません。", reading: "このきかいはうごきません。", meanings: { en: "This machine doesn't move.", bn: "এই যন্ত্রটি নড়ে না।" } } },
                    { char: "働", on: "ドウ", kun: "はたら(く)", meanings: { en: "to work", bn: "কাজ করা" }, strokes: 13, examples: [
                        { word: "働く", reading: "はたらく", meanings: { en: "to work", bn: "কাজ করা" } },
                        { word: "働き者", reading: "はたらきもの", meanings: { en: "hard worker", bn: "পরিশ্রমী মানুষ" } },
                        { word: "共働き", reading: "ともばたらき", meanings: { en: "dual-income (both spouses working)", bn: "স্বামী-স্ত্রী উভয়ে কর্মজীবী" } }
                    ], exampleSentence: { jp: "銀行で働いています。", reading: "ぎんこうではたらいています。", meanings: { en: "I work at a bank.", bn: "আমি একটি ব্যাংকে কাজ করি।" } } }
                ]
            },
            {
                id: "buying-selling-value",
                title: "Buying, Selling & Value",
                items: [
                    { char: "売", on: "バイ", kun: "う(る)", meanings: { en: "to sell", bn: "বিক্রি করা" }, strokes: 7, examples: [
                        { word: "売る", reading: "うる", meanings: { en: "to sell", bn: "বিক্রি করা" } },
                        { word: "売店", reading: "ばいてん", meanings: { en: "kiosk", bn: "স্টল" } },
                        { word: "販売", reading: "はんばい", meanings: { en: "sales", bn: "বিক্রয়" } }
                    ], exampleSentence: { jp: "この店で本を売っています。", reading: "このみせでほんをうっています。", meanings: { en: "This shop sells books.", bn: "এই দোকানে বই বিক্রি হয়।" } } },
                    { char: "品", on: "ヒン", kun: "しな", meanings: { en: "goods, item", bn: "পণ্য" }, strokes: 9, examples: [
                        { word: "品物", reading: "しなもの", meanings: { en: "goods", bn: "পণ্য" } },
                        { word: "作品", reading: "さくひん", meanings: { en: "a work (art)", bn: "শিল্পকর্ম" } },
                        { word: "食品", reading: "しょくひん", meanings: { en: "food product", bn: "খাদ্যপণ্য" } }
                    ], exampleSentence: { jp: "いい品物です。", reading: "いいしなものです。", meanings: { en: "It is a good item.", bn: "এটি একটি ভালো পণ্য।" } } },
                    { char: "台", on: "ダイ, タイ", kun: "-", meanings: { en: "stand, counter for machines", bn: "স্ট্যান্ড, গণনার শব্দ" }, strokes: 5, examples: [
                        { word: "台所", reading: "だいどころ", meanings: { en: "kitchen", bn: "রান্নাঘর" } },
                        { word: "一台", reading: "いちだい", meanings: { en: "one (machine/vehicle)", bn: "একটি (যন্ত্র)" } },
                        { word: "台風", reading: "たいふう", meanings: { en: "typhoon", bn: "টাইফুন" } }
                    ], exampleSentence: { jp: "車が一台あります。", reading: "くるまがいちだいあります。", meanings: { en: "There is one car.", bn: "একটি গাড়ি আছে।" } } },
                    { char: "代", on: "ダイ", kun: "か(わる), しろ", meanings: { en: "substitute, era, fee", bn: "বিকল্প, যুগ, ফি" }, strokes: 5, examples: [
                        { word: "時代", reading: "じだい", meanings: { en: "era", bn: "যুগ" } },
                        { word: "代わりに", reading: "かわりに", meanings: { en: "instead of", bn: "পরিবর্তে" } },
                        { word: "電気代", reading: "でんきだい", meanings: { en: "electricity fee", bn: "বিদ্যুৎ বিল" } }
                    ], exampleSentence: { jp: "今の時代は便利です。", reading: "いまのじだいはべんりです。", meanings: { en: "The current era is convenient.", bn: "বর্তমান যুগ সুবিধাজনক।" } } },
                    { char: "用", on: "ヨウ", kun: "もち(いる)", meanings: { en: "to use, business", bn: "ব্যবহার, কাজ" }, strokes: 5, examples: [
                        { word: "用事", reading: "ようじ", meanings: { en: "errand", bn: "কাজ" } },
                        { word: "使用", reading: "しよう", meanings: { en: "use", bn: "ব্যবহার" } },
                        { word: "用意", reading: "ようい", meanings: { en: "preparation", bn: "প্রস্তুতি" } }
                    ], exampleSentence: { jp: "明日、用事があります。", reading: "あした、ようじがあります。", meanings: { en: "Tomorrow I have an errand.", bn: "আগামীকাল আমার একটি কাজ আছে।" } } },
                    { char: "利", on: "リ", kun: "-", meanings: { en: "benefit, advantage", bn: "সুবিধা" }, strokes: 7, examples: [
                        { word: "便利", reading: "べんり", meanings: { en: "convenient", bn: "সুবিধাজনক" } },
                        { word: "利用", reading: "りよう", meanings: { en: "use, utilization", bn: "ব্যবহার" } },
                        { word: "権利", reading: "けんり", meanings: { en: "right", bn: "অধিকার" } }
                    ], exampleSentence: { jp: "このアプリは便利です。", reading: "このアプリはべんりです。", meanings: { en: "This app is convenient.", bn: "এই অ্যাপটি সুবিধাজনক।" } } },
                    { char: "便", on: "ベン, ビン", kun: "たよ(り)", meanings: { en: "convenience, mail", bn: "সুবিধা, ডাক" }, strokes: 9, examples: [
                        { word: "便利", reading: "べんり", meanings: { en: "convenient", bn: "সুবিধাজনক" } },
                        { word: "郵便", reading: "ゆうびん", meanings: { en: "postal mail", bn: "ডাক" } },
                        { word: "不便", reading: "ふべん", meanings: { en: "inconvenient", bn: "অসুবিধাজনক" } }
                    ], exampleSentence: { jp: "この駅は不便です。", reading: "このえきはふべんです。", meanings: { en: "This station is inconvenient.", bn: "এই স্টেশনটি অসুবিধাজনক।" } } }
                ]
            },
            {
                id: "basics-existence-direction",
                title: "Basics, Existence & Direction",
                items: [
                    { char: "本", on: "ホン", kun: "もと", meanings: { en: "book, origin", bn: "বই, মূল" }, strokes: 5, examples: [
                        { word: "本", reading: "ほん", meanings: { en: "book", bn: "বই" } },
                        { word: "日本", reading: "にほん", meanings: { en: "Japan", bn: "জাপান" } },
                        { word: "本当", reading: "ほんとう", meanings: { en: "true, real", bn: "সত্যি" } }
                    ], exampleSentence: { jp: "本当ですか。", reading: "ほんとうですか。", meanings: { en: "Is that true?", bn: "এটা কি সত্যি?" } } },
                    { char: "有", on: "ユウ", kun: "あ(る)", meanings: { en: "to exist, have", bn: "থাকা" }, strokes: 6, examples: [
                        { word: "有名", reading: "ゆうめい", meanings: { en: "famous", bn: "বিখ্যাত" } },
                        { word: "有る", reading: "ある", meanings: { en: "to exist, have", bn: "থাকা" } },
                        { word: "有効", reading: "ゆうこう", meanings: { en: "valid", bn: "বৈধ" } }
                    ], exampleSentence: { jp: "あの人は有名な歌手です。", reading: "あのひとはゆうめいなかしゅです。", meanings: { en: "That person is a famous singer.", bn: "ঐ ব্যক্তি একজন বিখ্যাত গায়ক।" } } },
                    { char: "元", on: "ゲン, ガン", kun: "もと", meanings: { en: "origin, former", bn: "মূল, পূর্বতন" }, strokes: 4, examples: [
                        { word: "元気", reading: "げんき", meanings: { en: "healthy, energetic", bn: "সুস্থ, প্রাণবন্ত" } },
                        { word: "元", reading: "もと", meanings: { en: "origin", bn: "মূল" } },
                        { word: "地元", reading: "じもと", meanings: { en: "one's hometown", bn: "নিজের এলাকা" } }
                    ], exampleSentence: { jp: "お元気ですか。", reading: "おげんきですか。", meanings: { en: "How are you?", bn: "আপনি কেমন আছেন?" } } },
                    { char: "不", on: "フ, ブ", kun: "-", meanings: { en: "negative, non-", bn: "নেতিবাচক" }, strokes: 4, examples: [
                        { word: "不便", reading: "ふべん", meanings: { en: "inconvenient", bn: "অসুবিধাজনক" } },
                        { word: "不安", reading: "ふあん", meanings: { en: "anxiety", bn: "উদ্বেগ" } },
                        { word: "不思議", reading: "ふしぎ", meanings: { en: "mysterious", bn: "রহস্যময়" } }
                    ], exampleSentence: { jp: "少し不安です。", reading: "すこしふあんです。", meanings: { en: "I am a little anxious.", bn: "আমি একটু উদ্বিগ্ন।" } } },
                    { char: "正", on: "セイ, ショウ", kun: "ただ(しい)", meanings: { en: "correct", bn: "সঠিক" }, strokes: 5, examples: [
                        { word: "正しい", reading: "ただしい", meanings: { en: "correct", bn: "সঠিক" } },
                        { word: "正直", reading: "しょうじき", meanings: { en: "honest", bn: "সৎ" } },
                        { word: "正月", reading: "しょうがつ", meanings: { en: "New Year", bn: "নববর্ষ" } }
                    ], exampleSentence: { jp: "あなたの答えは正しいです。", reading: "あなたのこたえはただしいです。", meanings: { en: "Your answer is correct.", bn: "আপনার উত্তরটি সঠিক।" } } },
                    { char: "同", on: "ドウ", kun: "おな(じ)", meanings: { en: "same", bn: "একই" }, strokes: 6, examples: [
                        { word: "同じ", reading: "おなじ", meanings: { en: "same", bn: "একই" } },
                        { word: "同時に", reading: "どうじに", meanings: { en: "at the same time", bn: "একই সময়ে" } },
                        { word: "同僚", reading: "どうりょう", meanings: { en: "colleague", bn: "সহকর্মী" } }
                    ], exampleSentence: { jp: "同じ本を持っています。", reading: "おなじほんをもっています。", meanings: { en: "I have the same book.", bn: "আমার কাছে একই বই আছে।" } } },
                    { char: "近", on: "キン", kun: "ちか(い)", meanings: { en: "near", bn: "কাছে" }, strokes: 7, examples: [
                        { word: "近い", reading: "ちかい", meanings: { en: "near", bn: "কাছে" } },
                        { word: "近く", reading: "ちかく", meanings: { en: "nearby", bn: "কাছাকাছি" } },
                        { word: "最近", reading: "さいきん", meanings: { en: "recently", bn: "সম্প্রতি" } }
                    ], exampleSentence: { jp: "駅から近いです。", reading: "えきからちかいです。", meanings: { en: "It is near the station.", bn: "এটি স্টেশনের কাছে।" } } },
                    { char: "自", on: "ジ, シ", kun: "みずか(ら)", meanings: { en: "self", bn: "নিজে" }, strokes: 6, examples: [
                        { word: "自分", reading: "じぶん", meanings: { en: "oneself", bn: "নিজে" } },
                        { word: "自転車", reading: "じてんしゃ", meanings: { en: "bicycle", bn: "সাইকেল" } },
                        { word: "自由", reading: "じゆう", meanings: { en: "freedom", bn: "স্বাধীনতা" } }
                    ], exampleSentence: { jp: "自分でやります。", reading: "じぶんでやります。", meanings: { en: "I will do it myself.", bn: "আমি নিজেই করব।" } } }
                ]
            },
            {
                id: "writing-language",
                title: "Writing & Language",
                items: [
                    { char: "文", on: "ブン, モン", kun: "ふみ", meanings: { en: "sentence, writing", bn: "বাক্য, লেখা" }, strokes: 4, examples: [
                        { word: "文", reading: "ぶん", meanings: { en: "sentence", bn: "বাক্য" } },
                        { word: "文化", reading: "ぶんか", meanings: { en: "culture", bn: "সংস্কৃতি" } },
                        { word: "作文", reading: "さくぶん", meanings: { en: "composition", bn: "রচনা" } }
                    ], exampleSentence: { jp: "この文を読んでください。", reading: "このぶんをよんでください。", meanings: { en: "Please read this sentence.", bn: "দয়া করে এই বাক্যটি পড়ুন।" } } },
                    { char: "字", on: "ジ", kun: "あざ", meanings: { en: "character, letter", bn: "অক্ষর" }, strokes: 6, examples: [
                        { word: "漢字", reading: "かんじ", meanings: { en: "kanji", bn: "কাঞ্জি" } },
                        { word: "文字", reading: "もじ", meanings: { en: "character", bn: "অক্ষর" } },
                        { word: "字を書く", reading: "じをかく", meanings: { en: "to write characters", bn: "অক্ষর লেখা" } }
                    ], exampleSentence: { jp: "漢字を勉強しています。", reading: "かんじをべんきょうしています。", meanings: { en: "I am studying kanji.", bn: "আমি কাঞ্জি পড়াশোনা করছি।" } } },
                    { char: "図", on: "ズ", kun: "はか(る)", meanings: { en: "diagram, map", bn: "নকশা, মানচিত্র" }, strokes: 7, examples: [
                        { word: "地図", reading: "ちず", meanings: { en: "map", bn: "মানচিত্র" } },
                        { word: "図書館", reading: "としょかん", meanings: { en: "library", bn: "গ্রন্থাগার" } },
                        { word: "図書", reading: "としょ", meanings: { en: "books", bn: "বইপত্র" } }
                    ], exampleSentence: { jp: "地図を見てください。", reading: "ちずをみてください。", meanings: { en: "Please look at the map.", bn: "দয়া করে মানচিত্রটি দেখুন।" } } },
                    { char: "英", on: "エイ", kun: "-", meanings: { en: "England, excellent", bn: "ইংল্যান্ড, চমৎকার" }, strokes: 8, examples: [
                        { word: "英語", reading: "えいご", meanings: { en: "English language", bn: "ইংরেজি ভাষা" } },
                        { word: "英国", reading: "えいこく", meanings: { en: "United Kingdom", bn: "যুক্তরাজ্য" } },
                        { word: "英会話", reading: "えいかいわ", meanings: { en: "English conversation", bn: "ইংরেজি কথোপকথন" } }
                    ], exampleSentence: { jp: "英語を話します。", reading: "えいごをはなします。", meanings: { en: "I speak English.", bn: "আমি ইংরেজিতে কথা বলি।" } } },
                    { char: "漢", on: "カン", kun: "-", meanings: { en: "China, Han", bn: "চীন, হান" }, strokes: 13, examples: [
                        { word: "漢字", reading: "かんじ", meanings: { en: "kanji", bn: "কাঞ্জি" } },
                        { word: "漢方", reading: "かんぽう", meanings: { en: "traditional Chinese medicine", bn: "ঐতিহ্যবাহী চীনা চিকিৎসা" } },
                        { word: "悪漢", reading: "あっかん", meanings: { en: "villain", bn: "দুর্বৃত্ত" } }
                    ], exampleSentence: { jp: "漢字は難しいです。", reading: "かんじはむずかしいです。", meanings: { en: "Kanji is difficult.", bn: "কাঞ্জি কঠিন।" } } },
                    { char: "音", on: "オン", kun: "おと", meanings: { en: "sound", bn: "শব্দ" }, strokes: 9, examples: [
                        { word: "音", reading: "おと", meanings: { en: "sound", bn: "শব্দ" } },
                        { word: "音楽", reading: "おんがく", meanings: { en: "music", bn: "সঙ্গীত" } },
                        { word: "発音", reading: "はつおん", meanings: { en: "pronunciation", bn: "উচ্চারণ" } }
                    ], exampleSentence: { jp: "音楽を聞きます。", reading: "おんがくをききます。", meanings: { en: "I listen to music.", bn: "আমি গান শুনি।" } } },
                    { char: "楽", on: "ガク, ラク", kun: "たの(しい)", meanings: { en: "music, fun", bn: "সঙ্গীত, আনন্দ" }, strokes: 13, examples: [
                        { word: "音楽", reading: "おんがく", meanings: { en: "music", bn: "সঙ্গীত" } },
                        { word: "楽しい", reading: "たのしい", meanings: { en: "fun, enjoyable", bn: "আনন্দদায়ক" } },
                        { word: "気楽", reading: "きらく", meanings: { en: "carefree", bn: "নিশ্চিন্ত" } }
                    ], exampleSentence: { jp: "日本語の勉強は楽しいです。", reading: "にほんごのべんきょうはたのしいです。", meanings: { en: "Studying Japanese is fun.", bn: "জাপানি ভাষা পড়াশোনা আনন্দদায়ক।" } } },
                    { char: "紙", on: "シ", kun: "かみ", meanings: { en: "paper", bn: "কাগজ" }, strokes: 10, examples: [
                        { word: "紙", reading: "かみ", meanings: { en: "paper", bn: "কাগজ" } },
                        { word: "手紙", reading: "てがみ", meanings: { en: "letter", bn: "চিঠি" } },
                        { word: "新聞紙", reading: "しんぶんし", meanings: { en: "newspaper (as material)", bn: "সংবাদপত্র (উপাদান)" } }
                    ], exampleSentence: { jp: "手紙を書きます。", reading: "てがみをかきます。", meanings: { en: "I write a letter.", bn: "আমি একটি চিঠি লিখি।" } } }
                ]
            },
            {
                id: "places-society-openness",
                title: "Places, Society & Openness",
                items: [
                    { char: "広", on: "コウ", kun: "ひろ(い)", meanings: { en: "wide, spacious", bn: "প্রশস্ত" }, strokes: 5, examples: [
                        { word: "広い", reading: "ひろい", meanings: { en: "wide, spacious", bn: "প্রশস্ত" } },
                        { word: "広告", reading: "こうこく", meanings: { en: "advertisement", bn: "বিজ্ঞাপন" } },
                        { word: "広場", reading: "ひろば", meanings: { en: "plaza, square", bn: "চত্বর" } }
                    ], exampleSentence: { jp: "この部屋は広いです。", reading: "このへやはひろいです。", meanings: { en: "This room is spacious.", bn: "এই ঘরটি প্রশস্ত।" } } },
                    { char: "世", on: "セイ, セ", kun: "-", meanings: { en: "world, generation", bn: "বিশ্ব, প্রজন্ম" }, strokes: 5, examples: [
                        { word: "世界", reading: "せかい", meanings: { en: "world", bn: "বিশ্ব" } },
                        { word: "世紀", reading: "せいき", meanings: { en: "century", bn: "শতাব্দী" } },
                        { word: "世の中", reading: "よのなか", meanings: { en: "society, the world", bn: "সমাজ" } }
                    ], exampleSentence: { jp: "世界を旅行したいです。", reading: "せかいをりょこうしたいです。", meanings: { en: "I want to travel the world.", bn: "আমি বিশ্ব ভ্রমণ করতে চাই।" } } },
                    { char: "界", on: "カイ", kun: "-", meanings: { en: "world, boundary", bn: "বিশ্ব, সীমানা" }, strokes: 9, examples: [
                        { word: "世界", reading: "せかい", meanings: { en: "world", bn: "বিশ্ব" } },
                        { word: "業界", reading: "ぎょうかい", meanings: { en: "industry", bn: "শিল্প" } },
                        { word: "限界", reading: "げんかい", meanings: { en: "limit", bn: "সীমা" } }
                    ], exampleSentence: { jp: "世界には多くの国があります。", reading: "せかいにはおおくのくにがあります。", meanings: { en: "There are many countries in the world.", bn: "বিশ্বে অনেক দেশ আছে।" } } },
                    { char: "京", on: "キョウ, ケイ", kun: "-", meanings: { en: "capital", bn: "রাজধানী" }, strokes: 8, examples: [
                        { word: "東京", reading: "とうきょう", meanings: { en: "Tokyo", bn: "টোকিও" } },
                        { word: "京都", reading: "きょうと", meanings: { en: "Kyoto", bn: "কিয়োটো" } },
                        { word: "上京", reading: "じょうきょう", meanings: { en: "going to the capital", bn: "রাজধানীতে যাওয়া" } }
                    ], exampleSentence: { jp: "東京に住んでいます。", reading: "とうきょうにすんでいます。", meanings: { en: "I live in Tokyo.", bn: "আমি টোকিওতে বাস করি।" } } },
                    { char: "洋", on: "ヨウ", kun: "-", meanings: { en: "ocean, Western", bn: "সমুদ্র, পাশ্চাত্য" }, strokes: 9, examples: [
                        { word: "洋服", reading: "ようふく", meanings: { en: "Western clothes", bn: "পাশ্চাত্য পোশাক" } },
                        { word: "太平洋", reading: "たいへいよう", meanings: { en: "Pacific Ocean", bn: "প্রশান্ত মহাসাগর" } },
                        { word: "洋食", reading: "ようしょく", meanings: { en: "Western food", bn: "পাশ্চাত্য খাবার" } }
                    ], exampleSentence: { jp: "洋食が好きです。", reading: "ようしょくがすきです。", meanings: { en: "I like Western food.", bn: "আমি পাশ্চাত্য খাবার পছন্দ করি।" } } },
                    { char: "公", on: "コウ", kun: "おおやけ", meanings: { en: "public", bn: "সরকারি, জনসাধারণ" }, strokes: 4, examples: [
                        { word: "公園", reading: "こうえん", meanings: { en: "park", bn: "পার্ক" } },
                        { word: "公務員", reading: "こうむいん", meanings: { en: "public servant", bn: "সরকারি কর্মচারী" } },
                        { word: "公共", reading: "こうきょう", meanings: { en: "public", bn: "জনসাধারণ" } }
                    ], exampleSentence: { jp: "公園で遊びましょう。", reading: "こうえんであそびましょう。", meanings: { en: "Let's play in the park.", bn: "চলুন পার্কে খেলি।" } } },
                    { char: "開", on: "カイ", kun: "ひら(く), あ(く)", meanings: { en: "to open", bn: "খোলা" }, strokes: 12, examples: [
                        { word: "開く", reading: "ひらく", meanings: { en: "to open", bn: "খোলা" } },
                        { word: "開ける", reading: "あける", meanings: { en: "to open (something)", bn: "খোলা" } },
                        { word: "開始", reading: "かいし", meanings: { en: "commencement", bn: "সূচনা" } }
                    ], exampleSentence: { jp: "ドアを開けてください。", reading: "ドアをあけてください。", meanings: { en: "Please open the door.", bn: "দয়া করে দরজা খুলুন।" } } }
                ]
            },
            {
                id: "culture-media",
                title: "Culture & Media",
                items: [
                    { char: "映", on: "エイ", kun: "うつ(る)", meanings: { en: "to reflect, project", bn: "প্রতিফলিত হওয়া" }, strokes: 9, examples: [
                        { word: "映画", reading: "えいが", meanings: { en: "movie", bn: "সিনেমা" } },
                        { word: "映る", reading: "うつる", meanings: { en: "to be reflected", bn: "প্রতিফলিত হওয়া" } },
                        { word: "上映", reading: "じょうえい", meanings: { en: "screening (of a film)", bn: "প্রদর্শন" } }
                    ], exampleSentence: { jp: "映画を見ます。", reading: "えいがをみます。", meanings: { en: "I watch a movie.", bn: "আমি একটি সিনেমা দেখি।" } } },
                    { char: "画", on: "ガ, カク", kun: "-", meanings: { en: "picture, plan", bn: "ছবি, পরিকল্পনা" }, strokes: 8, examples: [
                        { word: "映画", reading: "えいが", meanings: { en: "movie", bn: "সিনেমা" } },
                        { word: "絵画", reading: "かいが", meanings: { en: "painting", bn: "চিত্রকর্ম" } },
                        { word: "計画", reading: "けいかく", meanings: { en: "plan", bn: "পরিকল্পনা" } }
                    ], exampleSentence: { jp: "週末に映画を見ます。", reading: "しゅうまつにえいがをみます。", meanings: { en: "On the weekend I watch a movie.", bn: "সপ্তাহান্তে আমি সিনেমা দেখি।" } } },
                    { char: "歌", on: "カ", kun: "うた, うた(う)", meanings: { en: "song, to sing", bn: "গান, গাওয়া" }, strokes: 14, examples: [
                        { word: "歌う", reading: "うたう", meanings: { en: "to sing", bn: "গান গাওয়া" } },
                        { word: "歌", reading: "うた", meanings: { en: "song", bn: "গান" } },
                        { word: "歌手", reading: "かしゅ", meanings: { en: "singer", bn: "গায়ক" } }
                    ], exampleSentence: { jp: "カラオケで歌います。", reading: "カラオケでうたいます。", meanings: { en: "I sing at karaoke.", bn: "আমি ক্যারাওকেতে গান গাই।" } } },
                    { char: "写", on: "シャ", kun: "うつ(す)", meanings: { en: "to copy, photograph", bn: "নকল করা, ছবি তোলা" }, strokes: 5, examples: [
                        { word: "写真", reading: "しゃしん", meanings: { en: "photograph", bn: "ছবি" } },
                        { word: "写す", reading: "うつす", meanings: { en: "to copy, photograph", bn: "নকল করা" } },
                        { word: "写生", reading: "しゃせい", meanings: { en: "sketching", bn: "স্কেচ করা" } }
                    ], exampleSentence: { jp: "写真を撮ります。", reading: "しゃしんをとります。", meanings: { en: "I take a photograph.", bn: "আমি একটি ছবি তুলি।" } } },
                    { char: "真", on: "シン", kun: "ま", meanings: { en: "true, real", bn: "সত্য" }, strokes: 10, examples: [
                        { word: "写真", reading: "しゃしん", meanings: { en: "photograph", bn: "ছবি" } },
                        { word: "真実", reading: "しんじつ", meanings: { en: "truth", bn: "সত্য" } },
                        { word: "真面目", reading: "まじめ", meanings: { en: "serious, diligent", bn: "আন্তরিক" } }
                    ], exampleSentence: { jp: "写真を見てください。", reading: "しゃしんをみてください。", meanings: { en: "Please look at the photograph.", bn: "দয়া করে ছবিটি দেখুন।" } } },
                    { char: "発", on: "ハツ, ホツ", kun: "-", meanings: { en: "to depart, emit", bn: "যাত্রা করা, নির্গত করা" }, strokes: 9, examples: [
                        { word: "出発", reading: "しゅっぱつ", meanings: { en: "departure", bn: "যাত্রা শুরু" } },
                        { word: "発音", reading: "はつおん", meanings: { en: "pronunciation", bn: "উচ্চারণ" } },
                        { word: "発表", reading: "はっぴょう", meanings: { en: "presentation, announcement", bn: "উপস্থাপনা" } }
                    ], exampleSentence: { jp: "九時に出発します。", reading: "くじにしゅっぱつします。", meanings: { en: "We depart at nine o'clock.", bn: "আমরা নয়টায় যাত্রা শুরু করি।" } } }
                ]
            },
            {
                id: "personality-traits",
                title: "Personality & Traits",
                items: [
                    { char: "主", on: "シュ", kun: "おも, ぬし", meanings: { en: "main, master", bn: "প্রধান, মালিক" }, strokes: 5, examples: [
                        { word: "主人", reading: "しゅじん", meanings: { en: "husband, master", bn: "স্বামী, মালিক" } },
                        { word: "主に", reading: "おもに", meanings: { en: "mainly", bn: "প্রধানত" } },
                        { word: "主語", reading: "しゅご", meanings: { en: "subject (grammar)", bn: "কর্তা" } }
                    ], exampleSentence: { jp: "主に日本語を勉強します。", reading: "おもににほんごをべんきょうします。", meanings: { en: "I mainly study Japanese.", bn: "আমি প্রধানত জাপানি ভাষা পড়াশোনা করি।" } } },
                    { char: "特", on: "トク", kun: "-", meanings: { en: "special", bn: "বিশেষ" }, strokes: 10, examples: [
                        { word: "特別", reading: "とくべつ", meanings: { en: "special", bn: "বিশেষ" } },
                        { word: "特に", reading: "とくに", meanings: { en: "especially", bn: "বিশেষভাবে" } },
                        { word: "特急", reading: "とっきゅう", meanings: { en: "express (train)", bn: "দ্রুতগামী ট্রেন" } }
                    ], exampleSentence: { jp: "これは特別な日です。", reading: "これはとくべつなひです。", meanings: { en: "This is a special day.", bn: "আজ একটি বিশেষ দিন।" } } },
                    { char: "別", on: "ベツ", kun: "わか(れる)", meanings: { en: "separate, other", bn: "আলাদা" }, strokes: 7, examples: [
                        { word: "特別", reading: "とくべつ", meanings: { en: "special", bn: "বিশেষ" } },
                        { word: "別に", reading: "べつに", meanings: { en: "particularly (not)", bn: "বিশেষভাবে (নয়)" } },
                        { word: "別れる", reading: "わかれる", meanings: { en: "to part, separate", bn: "বিচ্ছেদ হওয়া" } }
                    ], exampleSentence: { jp: "彼と別れました。", reading: "かれとわかれました。", meanings: { en: "I broke up with him.", bn: "আমি তার সাথে বিচ্ছেদ হয়েছি।" } } },
                    { char: "好", on: "コウ", kun: "す(き), この(む)", meanings: { en: "to like", bn: "পছন্দ করা" }, strokes: 6, examples: [
                        { word: "好き", reading: "すき", meanings: { en: "to like", bn: "পছন্দ" } },
                        { word: "好きな", reading: "すきな", meanings: { en: "favorite", bn: "প্রিয়" } },
                        { word: "好み", reading: "このみ", meanings: { en: "preference", bn: "পছন্দ" } }
                    ], exampleSentence: { jp: "音楽が好きです。", reading: "おんがくがすきです。", meanings: { en: "I like music.", bn: "আমি গান পছন্দ করি।" } } },
                    { char: "若", on: "ジャク", kun: "わか(い)", meanings: { en: "young", bn: "তরুণ" }, strokes: 8, examples: [
                        { word: "若い", reading: "わかい", meanings: { en: "young", bn: "তরুণ" } },
                        { word: "若者", reading: "わかもの", meanings: { en: "young person", bn: "তরুণ ব্যক্তি" } },
                        { word: "若干", reading: "じゃっかん", meanings: { en: "a little, some", bn: "কিছুটা" } }
                    ], exampleSentence: { jp: "彼はまだ若いです。", reading: "かれはまだわかいです。", meanings: { en: "He is still young.", bn: "সে এখনও তরুণ।" } } },
                    { char: "弱", on: "ジャク", kun: "よわ(い)", meanings: { en: "weak", bn: "দুর্বল" }, strokes: 10, examples: [
                        { word: "弱い", reading: "よわい", meanings: { en: "weak", bn: "দুর্বল" } },
                        { word: "弱点", reading: "じゃくてん", meanings: { en: "weak point", bn: "দুর্বলতা" } },
                        { word: "弱火", reading: "よわび", meanings: { en: "low heat", bn: "কম আঁচ" } }
                    ], exampleSentence: { jp: "私は体が弱いです。", reading: "わたしはからだがよわいです。", meanings: { en: "My body is weak.", bn: "আমার শরীর দুর্বল।" } } },
                    { char: "軽", on: "ケイ", kun: "かる(い)", meanings: { en: "light (weight)", bn: "হালকা" }, strokes: 12, examples: [
                        { word: "軽い", reading: "かるい", meanings: { en: "light (weight)", bn: "হালকা" } },
                        { word: "軽食", reading: "けいしょく", meanings: { en: "light meal", bn: "হালকা খাবার" } },
                        { word: "軽自動車", reading: "けいじどうしゃ", meanings: { en: "kei car (small car)", bn: "ছোট গাড়ি" } }
                    ], exampleSentence: { jp: "このかばんは軽いです。", reading: "このかばんはかるいです。", meanings: { en: "This bag is light.", bn: "এই ব্যাগটি হালকা।" } } }
                ]
            },
            {
                id: "gathering-people",
                title: "Gathering & People",
                items: [
                    { char: "集", on: "シュウ", kun: "あつ(まる), あつ(める)", meanings: { en: "to gather", bn: "জড়ো হওয়া" }, strokes: 12, examples: [
                        { word: "集まる", reading: "あつまる", meanings: { en: "to gather (intransitive)", bn: "জড়ো হওয়া" } },
                        { word: "集める", reading: "あつめる", meanings: { en: "to collect", bn: "সংগ্রহ করা" } },
                        { word: "集合", reading: "しゅうごう", meanings: { en: "gathering, assembly", bn: "সমাবেশ" } }
                    ], exampleSentence: { jp: "みんなで集まりましょう。", reading: "みんなであつまりましょう。", meanings: { en: "Let's all gather together.", bn: "চলুন সবাই একত্রিত হই।" } } },
                    { char: "太", on: "タイ", kun: "ふと(い)", meanings: { en: "thick, fat", bn: "মোটা" }, strokes: 4, examples: [
                        { word: "太い", reading: "ふとい", meanings: { en: "thick", bn: "মোটা" } },
                        { word: "太る", reading: "ふとる", meanings: { en: "to gain weight", bn: "মোটা হওয়া" } },
                        { word: "太陽", reading: "たいよう", meanings: { en: "sun", bn: "সূর্য" } }
                    ], exampleSentence: { jp: "太陽が明るいです。", reading: "たいようがあかるいです。", meanings: { en: "The sun is bright.", bn: "সূর্য উজ্জ্বল।" } } },
                    { char: "低", on: "テイ", kun: "ひく(い)", meanings: { en: "low", bn: "নিচু" }, strokes: 7, examples: [
                        { word: "低い", reading: "ひくい", meanings: { en: "low", bn: "নিচু" } },
                        { word: "最低", reading: "さいてい", meanings: { en: "minimum, worst", bn: "সর্বনিম্ন" } },
                        { word: "低下", reading: "ていか", meanings: { en: "decline", bn: "হ্রাস" } }
                    ], exampleSentence: { jp: "この机は低いです。", reading: "このつくえはひくいです。", meanings: { en: "This desk is low.", bn: "এই টেবিলটি নিচু।" } } },
                    { char: "短", on: "タン", kun: "みじか(い)", meanings: { en: "short", bn: "ছোট (দৈর্ঘ্য)" }, strokes: 12, examples: [
                        { word: "短い", reading: "みじかい", meanings: { en: "short", bn: "ছোট" } },
                        { word: "短期", reading: "たんき", meanings: { en: "short term", bn: "স্বল্পমেয়াদী" } },
                        { word: "短所", reading: "たんしょ", meanings: { en: "shortcoming", bn: "ত্রুটি" } }
                    ], exampleSentence: { jp: "この映画は短いです。", reading: "このえいがはみじかいです。", meanings: { en: "This movie is short.", bn: "এই সিনেমাটি ছোট।" } } },
                    { char: "席", on: "セキ", kun: "-", meanings: { en: "seat", bn: "আসন" }, strokes: 10, examples: [
                        { word: "席", reading: "せき", meanings: { en: "seat", bn: "আসন" } },
                        { word: "出席", reading: "しゅっせき", meanings: { en: "attendance", bn: "উপস্থিতি" } },
                        { word: "座席", reading: "ざせき", meanings: { en: "seat", bn: "আসন" } }
                    ], exampleSentence: { jp: "この席は空いていますか。", reading: "このせきはあいていますか。", meanings: { en: "Is this seat available?", bn: "এই আসনটি কি খালি আছে?" } } },
                    { char: "連", on: "レン", kun: "つ(れる)", meanings: { en: "to accompany, connect", bn: "সাথে নেওয়া, সংযোগ" }, strokes: 10, examples: [
                        { word: "連れる", reading: "つれる", meanings: { en: "to bring (a person)", bn: "সাথে নিয়ে যাওয়া" } },
                        { word: "連絡", reading: "れんらく", meanings: { en: "contact", bn: "যোগাযোগ" } },
                        { word: "連休", reading: "れんきゅう", meanings: { en: "consecutive holidays", bn: "টানা ছুটি" } }
                    ], exampleSentence: { jp: "後で連絡します。", reading: "あとでれんらくします。", meanings: { en: "I will contact you later.", bn: "আমি পরে যোগাযোগ করব।" } } }
                ]
            },
            {
                id: "push-pull-practice",
                title: "Push, Pull & Practice",
                items: [
                    { char: "閉", on: "ヘイ", kun: "し(める), と(じる)", meanings: { en: "to close", bn: "বন্ধ করা" }, strokes: 11, examples: [
                        { word: "閉める", reading: "しめる", meanings: { en: "to close (something)", bn: "বন্ধ করা" } },
                        { word: "閉まる", reading: "しまる", meanings: { en: "to be closed", bn: "বন্ধ হওয়া" } },
                        { word: "閉店", reading: "へいてん", meanings: { en: "closing (a shop)", bn: "দোকান বন্ধ" } }
                    ], exampleSentence: { jp: "ドアを閉めてください。", reading: "ドアをしめてください。", meanings: { en: "Please close the door.", bn: "দয়া করে দরজা বন্ধ করুন।" } } },
                    { char: "引", on: "イン", kun: "ひ(く)", meanings: { en: "to pull", bn: "টানা" }, strokes: 4, examples: [
                        { word: "引く", reading: "ひく", meanings: { en: "to pull", bn: "টানা" } },
                        { word: "引っ越す", reading: "ひっこす", meanings: { en: "to move (house)", bn: "বাসা পরিবর্তন করা" } },
                        { word: "割引", reading: "わりびき", meanings: { en: "discount", bn: "ছাড়" } }
                    ], exampleSentence: { jp: "ドアを引いてください。", reading: "ドアをひいてください。", meanings: { en: "Please pull the door.", bn: "দয়া করে দরজা টানুন।" } } },
                    { char: "押", on: "オウ", kun: "お(す)", meanings: { en: "to push", bn: "ঠেলা" }, strokes: 8, examples: [
                        { word: "押す", reading: "おす", meanings: { en: "to push", bn: "ঠেলা" } },
                        { word: "押し入れ", reading: "おしいれ", meanings: { en: "closet", bn: "আলমারি" } },
                        { word: "押印", reading: "おういん", meanings: { en: "stamping a seal", bn: "সিল দেওয়া" } }
                    ], exampleSentence: { jp: "ボタンを押してください。", reading: "ボタンをおしてください。", meanings: { en: "Please push the button.", bn: "দয়া করে বোতাম টিপুন।" } } },
                    { char: "座", on: "ザ", kun: "すわ(る)", meanings: { en: "to sit", bn: "বসা" }, strokes: 10, examples: [
                        { word: "座る", reading: "すわる", meanings: { en: "to sit", bn: "বসা" } },
                        { word: "座席", reading: "ざせき", meanings: { en: "seat", bn: "আসন" } },
                        { word: "銀座", reading: "ぎんざ", meanings: { en: "Ginza (place name)", bn: "গিনজা (স্থান)" } }
                    ], exampleSentence: { jp: "どうぞ座ってください。", reading: "どうぞすわってください。", meanings: { en: "Please sit down.", bn: "দয়া করে বসুন।" } } },
                    { char: "調", on: "チョウ", kun: "しら(べる)", meanings: { en: "to investigate, tune", bn: "তদন্ত করা, সুর" }, strokes: 15, examples: [
                        { word: "調べる", reading: "しらべる", meanings: { en: "to investigate", bn: "তদন্ত করা" } },
                        { word: "調子", reading: "ちょうし", meanings: { en: "condition, tone", bn: "অবস্থা" } },
                        { word: "体調", reading: "たいちょう", meanings: { en: "physical condition", bn: "শারীরিক অবস্থা" } }
                    ], exampleSentence: { jp: "言葉の意味を調べます。", reading: "ことばのいみをしらべます。", meanings: { en: "I look up the meaning of the word.", bn: "আমি শব্দের অর্থ খুঁজি।" } } },
                    { char: "練", on: "レン", kun: "ね(る)", meanings: { en: "to practice, train", bn: "অনুশীলন করা" }, strokes: 14, examples: [
                        { word: "練習", reading: "れんしゅう", meanings: { en: "practice", bn: "অনুশীলন" } },
                        { word: "訓練", reading: "くんれん", meanings: { en: "training", bn: "প্রশিক্ষণ" } },
                        { word: "熟練", reading: "じゅくれん", meanings: { en: "skilled, proficient", bn: "দক্ষ" } }
                    ], exampleSentence: { jp: "毎日日本語を練習します。", reading: "まいにちにほんごをれんしゅうします。", meanings: { en: "I practice Japanese every day.", bn: "আমি প্রতিদিন জাপানি ভাষা অনুশীলন করি।" } } },
                    { char: "門", on: "モン", kun: "かど", meanings: { en: "gate", bn: "ফটক" }, strokes: 8, examples: [
                        { word: "門", reading: "もん", meanings: { en: "gate", bn: "ফটক" } },
                        { word: "専門", reading: "せんもん", meanings: { en: "specialty", bn: "বিশেষত্ব" } },
                        { word: "校門", reading: "こうもん", meanings: { en: "school gate", bn: "স্কুলের ফটক" } }
                    ], exampleSentence: { jp: "学校の門の前で待っています。", reading: "がっこうのもんのまえでまっています。", meanings: { en: "I am waiting in front of the school gate.", bn: "আমি স্কুলের ফটকের সামনে অপেক্ষা করছি।" } } }
                ]
            },
            {
                id: "amount-distance-mind",
                title: "Amount, Distance & Mind",
                items: [
                    { char: "少", on: "ショウ", kun: "すく(ない), すこ(し)", meanings: { en: "few, little", bn: "কম, সামান্য" }, strokes: 4, examples: [
                        { word: "少ない", reading: "すくない", meanings: { en: "few", bn: "কম" } },
                        { word: "少し", reading: "すこし", meanings: { en: "a little", bn: "সামান্য" } },
                        { word: "少年", reading: "しょうねん", meanings: { en: "boy", bn: "বালক" } }
                    ], exampleSentence: { jp: "お金が少ないです。", reading: "おかねがすくないです。", meanings: { en: "I have little money.", bn: "আমার টাকা কম।" } } },
                    { char: "多", on: "タ", kun: "おお(い)", meanings: { en: "many", bn: "অনেক" }, strokes: 6, examples: [
                        { word: "多い", reading: "おおい", meanings: { en: "many", bn: "অনেক" } },
                        { word: "多分", reading: "たぶん", meanings: { en: "probably", bn: "সম্ভবত" } },
                        { word: "多数", reading: "たすう", meanings: { en: "a large number", bn: "অনেক সংখ্যক" } }
                    ], exampleSentence: { jp: "学生が多いです。", reading: "がくせいがおおいです。", meanings: { en: "There are many students.", bn: "অনেক ছাত্র আছে।" } } },
                    { char: "遠", on: "エン", kun: "とお(い)", meanings: { en: "far", bn: "দূরে" }, strokes: 13, examples: [
                        { word: "遠い", reading: "とおい", meanings: { en: "far", bn: "দূরে" } },
                        { word: "遠足", reading: "えんそく", meanings: { en: "excursion, field trip", bn: "ভ্রমণ" } },
                        { word: "永遠", reading: "えいえん", meanings: { en: "eternity", bn: "চিরকাল" } }
                    ], exampleSentence: { jp: "駅から遠いです。", reading: "えきからとおいです。", meanings: { en: "It is far from the station.", bn: "এটি স্টেশন থেকে দূরে।" } } },
                    { char: "心", on: "シン", kun: "こころ", meanings: { en: "heart, mind", bn: "হৃদয়, মন" }, strokes: 4, examples: [
                        { word: "心", reading: "こころ", meanings: { en: "heart, mind", bn: "হৃদয়" } },
                        { word: "安心", reading: "あんしん", meanings: { en: "relief", bn: "স্বস্তি" } },
                        { word: "心配", reading: "しんぱい", meanings: { en: "worry", bn: "দুশ্চিন্তা" } }
                    ], exampleSentence: { jp: "心配しないでください。", reading: "しんぱいしないでください。", meanings: { en: "Please don't worry.", bn: "দয়া করে চিন্তা করবেন না।" } } },
                    { char: "以", on: "イ", kun: "-", meanings: { en: "by means of, since", bn: "দ্বারা, থেকে" }, strokes: 5, examples: [
                        { word: "以上", reading: "いじょう", meanings: { en: "more than, above", bn: "এর বেশি" } },
                        { word: "以下", reading: "いか", meanings: { en: "less than, below", bn: "এর কম" } },
                        { word: "以前", reading: "いぜん", meanings: { en: "before, previously", bn: "আগে" } }
                    ], exampleSentence: { jp: "十歳以上です。", reading: "じゅっさいいじょうです。", meanings: { en: "It is ten years old or above.", bn: "এটি দশ বছর বা তার বেশি।" } } },
                    { char: "去", on: "キョ", kun: "さ(る)", meanings: { en: "to leave, past", bn: "চলে যাওয়া, অতীত" }, strokes: 5, examples: [
                        { word: "去年", reading: "きょねん", meanings: { en: "last year", bn: "গত বছর" } },
                        { word: "去る", reading: "さる", meanings: { en: "to leave", bn: "চলে যাওয়া" } },
                        { word: "過去", reading: "かこ", meanings: { en: "past", bn: "অতীত" } }
                    ], exampleSentence: { jp: "去年、日本へ行きました。", reading: "きょねん、にほんへいきました。", meanings: { en: "Last year, I went to Japan.", bn: "গত বছর আমি জাপানে গিয়েছিলাম।" } } },
                    { char: "明", on: "メイ", kun: "あか(るい), あ(ける)", meanings: { en: "bright, clear", bn: "উজ্জ্বল, পরিষ্কার" }, strokes: 8, examples: [
                        { word: "明るい", reading: "あかるい", meanings: { en: "bright", bn: "উজ্জ্বল" } },
                        { word: "説明", reading: "せつめい", meanings: { en: "explanation", bn: "ব্যাখ্যা" } },
                        { word: "明日", reading: "あした", meanings: { en: "tomorrow", bn: "আগামীকাল" } }
                    ], exampleSentence: { jp: "この部屋は明るいです。", reading: "このへやはあかるいです。", meanings: { en: "This room is bright.", bn: "এই ঘরটি উজ্জ্বল।" } } }
                ]
            },
            {
                id: "home-bank-materials",
                title: "Home, Bank & Materials",
                items: [
                    { char: "工", on: "コウ, ク", kun: "-", meanings: { en: "craft, construction", bn: "কারুশিল্প, নির্মাণ" }, strokes: 3, examples: [
                        { word: "工場", reading: "こうじょう", meanings: { en: "factory", bn: "কারখানা" } },
                        { word: "大工", reading: "だいく", meanings: { en: "carpenter", bn: "ছুতার" } },
                        { word: "工事", reading: "こうじ", meanings: { en: "construction work", bn: "নির্মাণকাজ" } }
                    ], exampleSentence: { jp: "工場で働いています。", reading: "こうじょうではたらいています。", meanings: { en: "I work at a factory.", bn: "আমি একটি কারখানায় কাজ করি।" } } },
                    { char: "計", on: "ケイ", kun: "はか(る)", meanings: { en: "to measure, plan, total", bn: "পরিমাপ করা, পরিকল্পনা" }, strokes: 9, examples: [
                        { word: "計画", reading: "けいかく", meanings: { en: "plan", bn: "পরিকল্পনা" } },
                        { word: "時計", reading: "とけい", meanings: { en: "clock, watch", bn: "ঘড়ি" } },
                        { word: "合計", reading: "ごうけい", meanings: { en: "total", bn: "সর্বমোট" } }
                    ], exampleSentence: { jp: "時計を見てください。", reading: "とけいをみてください。", meanings: { en: "Please look at the clock.", bn: "দয়া করে ঘড়িটি দেখুন।" } } },
                    { char: "家", on: "カ, ケ", kun: "いえ, や", meanings: { en: "house, family", bn: "বাড়ি, পরিবার" }, strokes: 10, examples: [
                        { word: "家", reading: "いえ", meanings: { en: "house", bn: "বাড়ি" } },
                        { word: "家族", reading: "かぞく", meanings: { en: "family", bn: "পরিবার" } },
                        { word: "家庭", reading: "かてい", meanings: { en: "household, home", bn: "সংসার" } }
                    ], exampleSentence: { jp: "私の家は大きいです。", reading: "わたしのいえはおおきいです。", meanings: { en: "My house is big.", bn: "আমার বাড়ি বড়।" } } },
                    { char: "銀", on: "ギン", kun: "-", meanings: { en: "silver, bank", bn: "রূপা, ব্যাংক" }, strokes: 14, examples: [
                        { word: "銀行", reading: "ぎんこう", meanings: { en: "bank", bn: "ব্যাংক" } },
                        { word: "銀色", reading: "ぎんいろ", meanings: { en: "silver color", bn: "রূপালি রং" } },
                        { word: "銀行員", reading: "ぎんこういん", meanings: { en: "bank employee", bn: "ব্যাংক কর্মচারী" } }
                    ], exampleSentence: { jp: "銀行でお金を下ろします。", reading: "ぎんこうでおかねをおろします。", meanings: { en: "I withdraw money at the bank.", bn: "আমি ব্যাংক থেকে টাকা তুলি।" } } },
                    { char: "地", on: "チ, ジ", kun: "-", meanings: { en: "ground, earth", bn: "মাটি, ভূমি" }, strokes: 6, examples: [
                        { word: "地図", reading: "ちず", meanings: { en: "map", bn: "মানচিত্র" } },
                        { word: "地下鉄", reading: "ちかてつ", meanings: { en: "subway", bn: "পাতাল রেল" } },
                        { word: "地震", reading: "じしん", meanings: { en: "earthquake", bn: "ভূমিকম্প" } }
                    ], exampleSentence: { jp: "地図を見てください。", reading: "ちずをみてください。", meanings: { en: "Please look at the map.", bn: "দয়া করে মানচিত্রটি দেখুন।" } } },
                    { char: "物", on: "ブツ, モツ", kun: "もの", meanings: { en: "thing, object", bn: "জিনিস" }, strokes: 8, examples: [
                        { word: "物", reading: "もの", meanings: { en: "thing", bn: "জিনিস" } },
                        { word: "食べ物", reading: "たべもの", meanings: { en: "food", bn: "খাবার" } },
                        { word: "買い物", reading: "かいもの", meanings: { en: "shopping", bn: "কেনাকাটা" } }
                    ], exampleSentence: { jp: "買い物に行きます。", reading: "かいものにいきます。", meanings: { en: "I go shopping.", bn: "আমি কেনাকাটা করতে যাই।" } } },
                    { char: "重", on: "ジュウ, チョウ", kun: "おも(い), かさ(なる)", meanings: { en: "heavy, important", bn: "ভারী, গুরুত্বপূর্ণ" }, strokes: 9, examples: [
                        { word: "重い", reading: "おもい", meanings: { en: "heavy", bn: "ভারী" } },
                        { word: "重要", reading: "じゅうよう", meanings: { en: "important", bn: "গুরুত্বপূর্ণ" } },
                        { word: "体重", reading: "たいじゅう", meanings: { en: "body weight", bn: "শরীরের ওজন" } }
                    ], exampleSentence: { jp: "このかばんは重いです。", reading: "このかばんはおもいです。", meanings: { en: "This bag is heavy.", bn: "এই ব্যাগটি ভারী।" } } }
                ]
            },
            {
                id: "counters-light-lines",
                title: "Counters, Light & Lines",
                items: [
                    { char: "回", on: "カイ", kun: "まわ(る)", meanings: { en: "times, to turn", bn: "বার, ঘোরা" }, strokes: 6, examples: [
                        { word: "一回", reading: "いっかい", meanings: { en: "one time", bn: "একবার" } },
                        { word: "回る", reading: "まわる", meanings: { en: "to turn, go around", bn: "ঘোরা" } },
                        { word: "今回", reading: "こんかい", meanings: { en: "this time", bn: "এইবার" } }
                    ], exampleSentence: { jp: "一日に三回、薬を飲みます。", reading: "いちにちにさんかい、くすりをのみます。", meanings: { en: "I take medicine three times a day.", bn: "আমি দিনে তিনবার ওষুধ খাই।" } } },
                    { char: "頭", on: "トウ, ズ", kun: "あたま", meanings: { en: "head", bn: "মাথা" }, strokes: 16, examples: [
                        { word: "頭", reading: "あたま", meanings: { en: "head", bn: "মাথা" } },
                        { word: "頭痛", reading: "ずつう", meanings: { en: "headache", bn: "মাথাব্যথা" } },
                        { word: "先頭", reading: "せんとう", meanings: { en: "the front, lead", bn: "সামনে" } }
                    ], exampleSentence: { jp: "頭が痛いです。", reading: "あたまがいたいです。", meanings: { en: "I have a headache.", bn: "আমার মাথা ব্যথা করছে।" } } },
                    { char: "暗", on: "アン", kun: "くら(い)", meanings: { en: "dark", bn: "অন্ধকার" }, strokes: 13, examples: [
                        { word: "暗い", reading: "くらい", meanings: { en: "dark", bn: "অন্ধকার" } },
                        { word: "暗記", reading: "あんき", meanings: { en: "memorization", bn: "মুখস্থ" } },
                        { word: "真っ暗", reading: "まっくら", meanings: { en: "pitch dark", bn: "ঘোর অন্ধকার" } }
                    ], exampleSentence: { jp: "この部屋は暗いです。", reading: "このへやはくらいです。", meanings: { en: "This room is dark.", bn: "এই ঘরটি অন্ধকার।" } } },
                    { char: "光", on: "コウ", kun: "ひか(る), ひかり", meanings: { en: "light", bn: "আলো" }, strokes: 6, examples: [
                        { word: "光", reading: "ひかり", meanings: { en: "light", bn: "আলো" } },
                        { word: "光る", reading: "ひかる", meanings: { en: "to shine", bn: "জ্বলজ্বল করা" } },
                        { word: "観光", reading: "かんこう", meanings: { en: "sightseeing", bn: "পর্যটন" } }
                    ], exampleSentence: { jp: "星が光っています。", reading: "ほしがひかっています。", meanings: { en: "The stars are shining.", bn: "তারা জ্বলজ্বল করছে।" } } },
                    { char: "線", on: "セン", kun: "-", meanings: { en: "line", bn: "রেখা" }, strokes: 15, examples: [
                        { word: "線", reading: "せん", meanings: { en: "line", bn: "রেখা" } },
                        { word: "新幹線", reading: "しんかんせん", meanings: { en: "bullet train", bn: "বুলেট ট্রেন" } },
                        { word: "電線", reading: "でんせん", meanings: { en: "electric wire", bn: "বৈদ্যুতিক তার" } }
                    ], exampleSentence: { jp: "新幹線で行きます。", reading: "しんかんせんでいきます。", meanings: { en: "I go by bullet train.", bn: "আমি বুলেট ট্রেনে করে যাই।" } } }
                ]
            }
        ]
    },

    n3: { chapters: [] },
    n2: { chapters: [] },
    n1: { chapters: [] }

};

if (typeof module !== "undefined" && module.exports) { module.exports = kanjiData; }
