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

    n3: {
        chapters: [
            {
                id: "economy-money",
                title: "Economy & Money",
                items: [
                    { char: "経", on: "ケイ、キョウ", kun: "へ(る)", meanings: { en: "pass through, manage, sutra", bn: "অতিক্রম করা, পরিচালনা করা" }, strokes: 11, examples: [
                        { word: "経済", reading: "けいざい", meanings: { en: "economy", bn: "অর্থনীতি" } },
                        { word: "経験", reading: "けいけん", meanings: { en: "experience", bn: "অভিজ্ঞতা" } },
                        { word: "神経", reading: "しんけい", meanings: { en: "nerve", bn: "স্নায়ু" } }
                    ], exampleSentence: { jp: "彼は多くの経験があります。", reading: "かれはおおくのけいけんがあります。", meanings: { en: "He has a lot of experience.", bn: "তার প্রচুর অভিজ্ঞতা আছে।" } } },
                    { char: "済", on: "サイ", kun: "す(む)、す(ませる)", meanings: { en: "finish, settle (a matter)", bn: "শেষ করা, নিষ্পত্তি করা" }, strokes: 11, examples: [
                        { word: "経済", reading: "けいざい", meanings: { en: "economy", bn: "অর্থনীতি" } },
                        { word: "返済", reading: "へんさい", meanings: { en: "repayment", bn: "পরিশোধ" } },
                        { word: "済む", reading: "すむ", meanings: { en: "to be finished", bn: "সম্পন্ন হওয়া" } }
                    ], exampleSentence: { jp: "宿題はもう済みました。", reading: "しゅくだいはもうすみました。", meanings: { en: "The homework is already finished.", bn: "বাড়ির কাজ ইতিমধ্যে শেষ হয়েছে।" } } },
                    { char: "費", on: "ヒ", kun: "つい(やす)", meanings: { en: "cost, expense", bn: "খরচ, ব্যয়" }, strokes: 12, examples: [
                        { word: "費用", reading: "ひよう", meanings: { en: "cost, expenses", bn: "খরচ" } },
                        { word: "食費", reading: "しょくひ", meanings: { en: "food expenses", bn: "খাদ্য ব্যয়" } },
                        { word: "消費", reading: "しょうひ", meanings: { en: "consumption", bn: "ভোগ (ক্রয়ব্যবহার)" } }
                    ], exampleSentence: { jp: "旅行の費用はいくらですか。", reading: "りょこうのひようはいくらですか。", meanings: { en: "How much are the travel expenses?", bn: "ভ্রমণের খরচ কত?" } } },
                    { char: "給", on: "キュウ", kun: "", meanings: { en: "supply, wage", bn: "সরবরাহ, বেতন" }, strokes: 12, examples: [
                        { word: "給料", reading: "きゅうりょう", meanings: { en: "salary", bn: "বেতন" } },
                        { word: "月給", reading: "げっきゅう", meanings: { en: "monthly salary", bn: "মাসিক বেতন" } },
                        { word: "補給", reading: "ほきゅう", meanings: { en: "supply, replenishment", bn: "সরবরাহ" } }
                    ], exampleSentence: { jp: "毎月、給料をもらいます。", reading: "まいつき、きゅうりょうをもらいます。", meanings: { en: "I receive my salary every month.", bn: "আমি প্রতি মাসে বেতন পাই।" } } },
                    { char: "資", on: "シ", kun: "", meanings: { en: "resources, capital", bn: "সম্পদ, মূলধন" }, strokes: 13, examples: [
                        { word: "資源", reading: "しげん", meanings: { en: "resources", bn: "সম্পদ" } },
                        { word: "資金", reading: "しきん", meanings: { en: "funds", bn: "তহবিল" } },
                        { word: "資料", reading: "しりょう", meanings: { en: "materials, documents", bn: "নথিপত্র" } }
                    ], exampleSentence: { jp: "新しい事業のための資金を集めています。", reading: "あたらしいじぎょうのためのしきんをあつめています。", meanings: { en: "I am gathering funds for a new business.", bn: "আমি একটি নতুন ব্যবসার জন্য তহবিল সংগ্রহ করছি।" } } },
                    { char: "益", on: "エキ、ヤク", kun: "", meanings: { en: "profit, benefit", bn: "লাভ, উপকার" }, strokes: 10, examples: [
                        { word: "利益", reading: "りえき", meanings: { en: "profit", bn: "লাভ" } },
                        { word: "有益", reading: "ゆうえき", meanings: { en: "beneficial", bn: "উপকারী" } },
                        { word: "国益", reading: "こくえき", meanings: { en: "national interest", bn: "জাতীয় স্বার্থ" } }
                    ], exampleSentence: { jp: "会社は今年大きな利益を出した。", reading: "かいしゃはことしおおきなりえきをだした。", meanings: { en: "The company made a big profit this year.", bn: "কোম্পানি এই বছর বড় লাভ করেছে।" } } },
                    { char: "損", on: "ソン", kun: "そこ(なう)", meanings: { en: "loss, damage", bn: "ক্ষতি" }, strokes: 13, examples: [
                        { word: "損害", reading: "そんがい", meanings: { en: "damage, loss", bn: "ক্ষতি" } },
                        { word: "損失", reading: "そんしつ", meanings: { en: "a loss (financial)", bn: "লোকসান" } },
                        { word: "破損", reading: "はそん", meanings: { en: "breakage, damage", bn: "ভাঙ্গন" } }
                    ], exampleSentence: { jp: "台風で大きな損害を受けた。", reading: "たいふうでおおきなそんがいをうけた。", meanings: { en: "We suffered great damage from the typhoon.", bn: "ঘূর্ণিঝড়ে আমরা বড় ক্ষতির সম্মুখীন হয়েছি।" } } }
                ]
            },
            {
                id: "politics-law",
                title: "Politics & Law",
                items: [
                    { char: "政", on: "セイ、ショウ", kun: "まつりごと", meanings: { en: "politics, government", bn: "রাজনীতি, শাসন" }, strokes: 9, examples: [
                        { word: "政治", reading: "せいじ", meanings: { en: "politics", bn: "রাজনীতি" } },
                        { word: "政府", reading: "せいふ", meanings: { en: "government", bn: "সরকার" } },
                        { word: "政策", reading: "せいさく", meanings: { en: "policy", bn: "নীতি" } }
                    ], exampleSentence: { jp: "政治に興味があります。", reading: "せいじにきょうみがあります。", meanings: { en: "I am interested in politics.", bn: "আমার রাজনীতিতে আগ্রহ আছে।" } } },
                    { char: "府", on: "フ", kun: "", meanings: { en: "government office, urban prefecture", bn: "সরকারি দপ্তর" }, strokes: 8, examples: [
                        { word: "政府", reading: "せいふ", meanings: { en: "government", bn: "সরকার" } },
                        { word: "大阪府", reading: "おおさかふ", meanings: { en: "Osaka Prefecture", bn: "ওসাকা প্রশাসনিক অঞ্চল" } },
                        { word: "首府", reading: "しゅふ", meanings: { en: "capital city", bn: "রাজধানী" } }
                    ], exampleSentence: { jp: "政府が新しい法律を作った。", reading: "せいふがあたらしいほうりつをつくった。", meanings: { en: "The government made a new law.", bn: "সরকার একটি নতুন আইন তৈরি করেছে।" } } },
                    { char: "選", on: "セン", kun: "えら(ぶ)", meanings: { en: "choose, select, election", bn: "নির্বাচন করা" }, strokes: 15, examples: [
                        { word: "選挙", reading: "せんきょ", meanings: { en: "election", bn: "নির্বাচন" } },
                        { word: "選択", reading: "せんたく", meanings: { en: "choice, selection", bn: "নির্বাচন (পছন্দ)" } },
                        { word: "選ぶ", reading: "えらぶ", meanings: { en: "to choose", bn: "বেছে নেওয়া" } }
                    ], exampleSentence: { jp: "好きな色を選んでください。", reading: "すきないろをえらんでください。", meanings: { en: "Please choose your favorite color.", bn: "অনুগ্রহ করে আপনার পছন্দের রঙ বেছে নিন।" } } },
                    { char: "挙", on: "キョ", kun: "あ(げる)", meanings: { en: "raise, conduct (an event)", bn: "উত্থাপন করা, অনুষ্ঠিত করা" }, strokes: 10, examples: [
                        { word: "選挙", reading: "せんきょ", meanings: { en: "election", bn: "নির্বাচন" } },
                        { word: "挙式", reading: "きょしき", meanings: { en: "wedding ceremony", bn: "বিবাহ অনুষ্ঠান" } },
                        { word: "手を挙げる", reading: "てをあげる", meanings: { en: "to raise one's hand", bn: "হাত তোলা" } }
                    ], exampleSentence: { jp: "質問がある人は手を挙げてください。", reading: "しつもんがあるひとはてをあげてください。", meanings: { en: "If you have a question, please raise your hand.", bn: "যদি প্রশ্ন থাকে, অনুগ্রহ করে হাত তুলুন।" } } },
                    { char: "票", on: "ヒョウ", kun: "", meanings: { en: "vote, ballot", bn: "ভোট" }, strokes: 11, examples: [
                        { word: "投票", reading: "とうひょう", meanings: { en: "voting", bn: "ভোটদান" } },
                        { word: "票数", reading: "ひょうすう", meanings: { en: "number of votes", bn: "ভোটের সংখ্যা" } },
                        { word: "伝票", reading: "でんぴょう", meanings: { en: "receipt, slip", bn: "রসিদ" } }
                    ], exampleSentence: { jp: "選挙で投票しました。", reading: "せんきょでとうひょうしました。", meanings: { en: "I voted in the election.", bn: "আমি নির্বাচনে ভোট দিয়েছি।" } } },
                    { char: "規", on: "キ", kun: "", meanings: { en: "rule, standard", bn: "নিয়ম, মানদণ্ড" }, strokes: 11, examples: [
                        { word: "規則", reading: "きそく", meanings: { en: "rule, regulation", bn: "নিয়ম" } },
                        { word: "規模", reading: "きぼ", meanings: { en: "scale, scope", bn: "পরিসর" } },
                        { word: "新規", reading: "しんき", meanings: { en: "new, fresh", bn: "নতুন" } }
                    ], exampleSentence: { jp: "学校の規則を守ってください。", reading: "がっこうのきそくをまもってください。", meanings: { en: "Please follow the school rules.", bn: "অনুগ্রহ করে স্কুলের নিয়ম মেনে চলুন।" } } },
                    { char: "則", on: "ソク", kun: "", meanings: { en: "rule, law", bn: "নিয়ম" }, strokes: 9, examples: [
                        { word: "規則", reading: "きそく", meanings: { en: "rule, regulation", bn: "নিয়ম" } },
                        { word: "原則", reading: "げんそく", meanings: { en: "principle", bn: "মূলনীতি" } },
                        { word: "法則", reading: "ほうそく", meanings: { en: "law (of nature/science)", bn: "সূত্র" } }
                    ], exampleSentence: { jp: "これは大切な原則です。", reading: "これはたいせつなげんそくです。", meanings: { en: "This is an important principle.", bn: "এটি একটি গুরুত্বপূর্ণ মূলনীতি।" } } }
                ]
            },
            {
                id: "environment-disaster",
                title: "Environment & Disaster",
                items: [
                    { char: "環", on: "カン", kun: "", meanings: { en: "ring, surround", bn: "বৃত্ত, বেষ্টন করা" }, strokes: 17, examples: [
                        { word: "環境", reading: "かんきょう", meanings: { en: "environment", bn: "পরিবেশ" } },
                        { word: "循環", reading: "じゅんかん", meanings: { en: "circulation", bn: "সঞ্চালন" } },
                        { word: "環境問題", reading: "かんきょうもんだい", meanings: { en: "environmental problem", bn: "পরিবেশগত সমস্যা" } }
                    ], exampleSentence: { jp: "環境を守ることが大切です。", reading: "かんきょうをまもることがたいせつです。", meanings: { en: "It is important to protect the environment.", bn: "পরিবেশ রক্ষা করা গুরুত্বপূর্ণ।" } } },
                    { char: "境", on: "キョウ、ケイ", kun: "さかい", meanings: { en: "boundary, border", bn: "সীমানা" }, strokes: 14, examples: [
                        { word: "環境", reading: "かんきょう", meanings: { en: "environment", bn: "পরিবেশ" } },
                        { word: "国境", reading: "こっきょう", meanings: { en: "national border", bn: "সীমান্ত" } },
                        { word: "境界", reading: "きょうかい", meanings: { en: "boundary", bn: "সীমারেখা" } }
                    ], exampleSentence: { jp: "この川が二つの国の境です。", reading: "このかわがふたつのくにのさかいです。", meanings: { en: "This river is the border between the two countries.", bn: "এই নদীটি দুটি দেশের সীমান্ত।" } } },
                    { char: "汚", on: "オ", kun: "きたな(い)、よご(れる)", meanings: { en: "dirty, pollute", bn: "নোংরা, দূষিত করা" }, strokes: 6, examples: [
                        { word: "汚染", reading: "おせん", meanings: { en: "pollution", bn: "দূষণ" } },
                        { word: "汚い", reading: "きたない", meanings: { en: "dirty", bn: "নোংরা" } },
                        { word: "汚れる", reading: "よごれる", meanings: { en: "to become dirty", bn: "নোংরা হওয়া" } }
                    ], exampleSentence: { jp: "空気の汚染がひどくなっている。", reading: "くうきのおせんがひどくなっている。", meanings: { en: "Air pollution is getting worse.", bn: "বায়ু দূষণ আরও খারাপ হচ্ছে।" } } },
                    { char: "染", on: "セン", kun: "そ(める)、し(みる)", meanings: { en: "dye, be infected/stained", bn: "রঙ করা, দূষিত হওয়া" }, strokes: 9, examples: [
                        { word: "汚染", reading: "おせん", meanings: { en: "pollution", bn: "দূষণ" } },
                        { word: "感染", reading: "かんせん", meanings: { en: "infection", bn: "সংক্রমণ" } },
                        { word: "染める", reading: "そめる", meanings: { en: "to dye", bn: "রঙ করা" } }
                    ], exampleSentence: { jp: "髪を茶色に染めました。", reading: "かみをちゃいろにそめました。", meanings: { en: "I dyed my hair brown.", bn: "আমি চুল বাদামী রঙ করেছি।" } } },
                    { char: "源", on: "ゲン", kun: "みなもと", meanings: { en: "source, origin", bn: "উৎস" }, strokes: 13, examples: [
                        { word: "資源", reading: "しげん", meanings: { en: "resources", bn: "সম্পদ" } },
                        { word: "水源", reading: "すいげん", meanings: { en: "water source", bn: "পানির উৎস" } },
                        { word: "起源", reading: "きげん", meanings: { en: "origin", bn: "উৎপত্তি" } }
                    ], exampleSentence: { jp: "エネルギー資源が不足しています。", reading: "エネルギーしげんがふそくしています。", meanings: { en: "Energy resources are in short supply.", bn: "শক্তি সম্পদের ঘাটতি রয়েছে।" } } },
                    { char: "防", on: "ボウ", kun: "ふせ(ぐ)", meanings: { en: "prevent, defend", bn: "প্রতিরোধ করা" }, strokes: 7, examples: [
                        { word: "予防", reading: "よぼう", meanings: { en: "prevention", bn: "প্রতিরোধ" } },
                        { word: "防止", reading: "ぼうし", meanings: { en: "prevention", bn: "প্রতিরোধ" } },
                        { word: "消防", reading: "しょうぼう", meanings: { en: "fire fighting", bn: "অগ্নিনির্বাপণ" } }
                    ], exampleSentence: { jp: "病気を予防しましょう。", reading: "びょうきをよぼうしましょう。", meanings: { en: "Let's prevent illness.", bn: "চলুন রোগ প্রতিরোধ করি।" } } },
                    { char: "災", on: "サイ", kun: "わざわ(い)", meanings: { en: "disaster, calamity", bn: "দুর্যোগ" }, strokes: 7, examples: [
                        { word: "災害", reading: "さいがい", meanings: { en: "disaster", bn: "দুর্যোগ" } },
                        { word: "火災", reading: "かさい", meanings: { en: "fire (disaster)", bn: "অগ্নিকাণ্ড" } },
                        { word: "天災", reading: "てんさい", meanings: { en: "natural disaster", bn: "প্রাকৃতিক দুর্যোগ" } }
                    ], exampleSentence: { jp: "自然災害に気をつけてください。", reading: "しぜんさいがいにきをつけてください。", meanings: { en: "Please be careful of natural disasters.", bn: "অনুগ্রহ করে প্রাকৃতিক দুর্যোগ সম্পর্কে সতর্ক থাকুন।" } } }
                ]
            },
            {
                id: "health-medicine",
                title: "Health & Medicine",
                items: [
                    { char: "療", on: "リョウ", kun: "", meanings: { en: "medical treatment", bn: "চিকিৎসা" }, strokes: 17, examples: [
                        { word: "治療", reading: "ちりょう", meanings: { en: "medical treatment", bn: "চিকিৎসা" } },
                        { word: "医療", reading: "いりょう", meanings: { en: "medical care", bn: "চিকিৎসা সেবা" } },
                        { word: "診療", reading: "しんりょう", meanings: { en: "medical examination", bn: "রোগ পরীক্ষা" } }
                    ], exampleSentence: { jp: "病院で治療を受けました。", reading: "びょういんでちりょうをうけました。", meanings: { en: "I received treatment at the hospital.", bn: "আমি হাসপাতালে চিকিৎসা নিয়েছি।" } } },
                    { char: "症", on: "ショウ", kun: "", meanings: { en: "symptom, illness", bn: "উপসর্গ" }, strokes: 10, examples: [
                        { word: "症状", reading: "しょうじょう", meanings: { en: "symptom", bn: "উপসর্গ" } },
                        { word: "重症", reading: "じゅうしょう", meanings: { en: "serious illness", bn: "গুরুতর রোগ" } },
                        { word: "花粉症", reading: "かふんしょう", meanings: { en: "hay fever", bn: "পরাগ অ্যালার্জি" } }
                    ], exampleSentence: { jp: "どんな症状がありますか。", reading: "どんなしょうじょうがありますか。", meanings: { en: "What symptoms do you have?", bn: "আপনার কী কী উপসর্গ আছে?" } } },
                    { char: "状", on: "ジョウ", kun: "", meanings: { en: "state, condition, letter", bn: "অবস্থা, চিঠি" }, strokes: 7, examples: [
                        { word: "状態", reading: "じょうたい", meanings: { en: "condition, state", bn: "অবস্থা" } },
                        { word: "症状", reading: "しょうじょう", meanings: { en: "symptom", bn: "উপসর্গ" } },
                        { word: "年賀状", reading: "ねんがじょう", meanings: { en: "New Year's card", bn: "নববর্ষের কার্ড" } }
                    ], exampleSentence: { jp: "彼の体の状態はよくなりました。", reading: "かれのからだのじょうたいはよくなりました。", meanings: { en: "His physical condition has improved.", bn: "তার শারীরিক অবস্থার উন্নতি হয়েছে।" } } },
                    { char: "健", on: "ケン", kun: "すこ(やか)", meanings: { en: "healthy", bn: "সুস্থ" }, strokes: 11, examples: [
                        { word: "健康", reading: "けんこう", meanings: { en: "health", bn: "স্বাস্থ্য" } },
                        { word: "健全", reading: "けんぜん", meanings: { en: "sound, wholesome", bn: "সুস্থ (মন-মানসিকতা)" } },
                        { word: "保健", reading: "ほけん", meanings: { en: "health preservation", bn: "স্বাস্থ্য সংরক্ষণ" } }
                    ], exampleSentence: { jp: "健康に気をつけています。", reading: "けんこうにきをつけています。", meanings: { en: "I am careful about my health.", bn: "আমি আমার স্বাস্থ্যের যত্ন নিচ্ছি।" } } },
                    { char: "康", on: "コウ", kun: "", meanings: { en: "peaceful, healthy", bn: "শান্তিপূর্ণ, সুস্থ" }, strokes: 11, examples: [
                        { word: "健康", reading: "けんこう", meanings: { en: "health", bn: "স্বাস্থ্য" } },
                        { word: "健康診断", reading: "けんこうしんだん", meanings: { en: "health checkup", bn: "স্বাস্থ্য পরীক্ষা" } },
                        { word: "小康", reading: "しょうこう", meanings: { en: "a lull, temporary calm", bn: "সাময়িক প্রশান্তি" } }
                    ], exampleSentence: { jp: "毎年、健康診断を受けます。", reading: "まいとし、けんこうしんだんをうけます。", meanings: { en: "I get a health checkup every year.", bn: "আমি প্রতি বছর স্বাস্থ্য পরীক্ষা করাই।" } } },
                    { char: "栄", on: "エイ", kun: "さか(える)", meanings: { en: "prosper, glory", bn: "সমৃদ্ধ হওয়া" }, strokes: 9, examples: [
                        { word: "栄養", reading: "えいよう", meanings: { en: "nutrition", bn: "পুষ্টি" } },
                        { word: "光栄", reading: "こうえい", meanings: { en: "honor, privilege", bn: "সম্মান" } },
                        { word: "栄える", reading: "さかえる", meanings: { en: "to prosper", bn: "সমৃদ্ধ হওয়া" } }
                    ], exampleSentence: { jp: "栄養のバランスが大切です。", reading: "えいようのバランスがたいせつです。", meanings: { en: "Nutritional balance is important.", bn: "পুষ্টির ভারসাম্য গুরুত্বপূর্ণ।" } } },
                    { char: "養", on: "ヨウ", kun: "やしな(う)", meanings: { en: "nourish, cultivate", bn: "লালন-পালন করা" }, strokes: 15, examples: [
                        { word: "栄養", reading: "えいよう", meanings: { en: "nutrition", bn: "পুষ্টি" } },
                        { word: "養う", reading: "やしなう", meanings: { en: "to support, raise", bn: "প্রতিপালন করা" } },
                        { word: "教養", reading: "きょうよう", meanings: { en: "culture, education", bn: "শিক্ষা-সংস্কৃতি" } }
                    ], exampleSentence: { jp: "彼は家族を養っています。", reading: "かれはかぞくをやしなっています。", meanings: { en: "He supports his family.", bn: "সে তার পরিবারের ভরণপোষণ করে।" } } }
                ]
            },
            {
                id: "society-justice",
                title: "Society & Justice",
                items: [
                    { char: "貧", on: "ヒン、ビン", kun: "まず(しい)", meanings: { en: "poor", bn: "দরিদ্র" }, strokes: 11, examples: [
                        { word: "貧困", reading: "ひんこん", meanings: { en: "poverty", bn: "দারিদ্র্য" } },
                        { word: "貧しい", reading: "まずしい", meanings: { en: "poor", bn: "দরিদ্র" } },
                        { word: "貧富", reading: "ひんぷ", meanings: { en: "rich and poor", bn: "ধনী ও দরিদ্র" } }
                    ], exampleSentence: { jp: "貧困問題について考えます。", reading: "ひんこんもんだいについてかんがえます。", meanings: { en: "I think about the poverty problem.", bn: "আমি দারিদ্র্য সমস্যা নিয়ে চিন্তা করি।" } } },
                    { char: "差", on: "サ", kun: "さ(す)", meanings: { en: "difference", bn: "পার্থক্য" }, strokes: 10, examples: [
                        { word: "格差", reading: "かくさ", meanings: { en: "gap, disparity", bn: "বৈষম্য" } },
                        { word: "差別", reading: "さべつ", meanings: { en: "discrimination", bn: "বৈষম্য (বিভেদ)" } },
                        { word: "時差", reading: "じさ", meanings: { en: "time difference", bn: "সময়ের পার্থক্য" } }
                    ], exampleSentence: { jp: "経済格差が広がっています。", reading: "けいざいかくさがひろがっています。", meanings: { en: "The economic gap is widening.", bn: "অর্থনৈতিক বৈষম্য বাড়ছে।" } } },
                    { char: "罪", on: "ザイ", kun: "つみ", meanings: { en: "crime, sin", bn: "অপরাধ" }, strokes: 13, examples: [
                        { word: "犯罪", reading: "はんざい", meanings: { en: "crime", bn: "অপরাধ" } },
                        { word: "罪人", reading: "ざいにん", meanings: { en: "criminal", bn: "অপরাধী" } },
                        { word: "謝罪", reading: "しゃざい", meanings: { en: "apology", bn: "ক্ষমাপ্রার্থনা" } }
                    ], exampleSentence: { jp: "犯罪が減っています。", reading: "はんざいがへっています。", meanings: { en: "Crime is decreasing.", bn: "অপরাধ কমছে।" } } },
                    { char: "犯", on: "ハン", kun: "おか(す)", meanings: { en: "commit (a crime), violate", bn: "লঙ্ঘন করা" }, strokes: 5, examples: [
                        { word: "犯罪", reading: "はんざい", meanings: { en: "crime", bn: "অপরাধ" } },
                        { word: "犯人", reading: "はんにん", meanings: { en: "culprit, criminal", bn: "অপরাধী" } },
                        { word: "犯す", reading: "おかす", meanings: { en: "to commit (a crime)", bn: "অপরাধ করা" } }
                    ], exampleSentence: { jp: "犯人はまだ捕まっていない。", reading: "はんにんはまだつかまっていない。", meanings: { en: "The culprit has not been caught yet.", bn: "অপরাধী এখনো ধরা পড়েনি।" } } },
                    { char: "裁", on: "サイ", kun: "さば(く)、た(つ)", meanings: { en: "judge, cut cloth", bn: "বিচার করা" }, strokes: 12, examples: [
                        { word: "裁判", reading: "さいばん", meanings: { en: "trial, court case", bn: "বিচার" } },
                        { word: "裁判所", reading: "さいばんしょ", meanings: { en: "courthouse", bn: "আদালত" } },
                        { word: "独裁", reading: "どくさい", meanings: { en: "dictatorship", bn: "একনায়কতন্ত্র" } }
                    ], exampleSentence: { jp: "裁判が始まりました。", reading: "さいばんがはじまりました。", meanings: { en: "The trial has begun.", bn: "বিচার শুরু হয়েছে।" } } },
                    { char: "賛", on: "サン", kun: "", meanings: { en: "agree, approve", bn: "সম্মত হওয়া" }, strokes: 15, examples: [
                        { word: "賛成", reading: "さんせい", meanings: { en: "agreement", bn: "সম্মতি" } },
                        { word: "賛否", reading: "さんぴ", meanings: { en: "pros and cons", bn: "পক্ষে-বিপক্ষে" } },
                        { word: "絶賛", reading: "ぜっさん", meanings: { en: "high praise", bn: "উচ্চ প্রশংসা" } }
                    ], exampleSentence: { jp: "その意見に賛成です。", reading: "そのいけんにさんせいです。", meanings: { en: "I agree with that opinion.", bn: "আমি সেই মতামতের সাথে একমত।" } } },
                    { char: "否", on: "ヒ", kun: "いな", meanings: { en: "no, deny", bn: "না, অস্বীকার" }, strokes: 7, examples: [
                        { word: "賛否", reading: "さんぴ", meanings: { en: "pros and cons", bn: "পক্ষে-বিপক্ষে" } },
                        { word: "否定", reading: "ひてい", meanings: { en: "denial", bn: "অস্বীকৃতি" } },
                        { word: "拒否", reading: "きょひ", meanings: { en: "refusal", bn: "প্রত্যাখ্যান" } }
                    ], exampleSentence: { jp: "彼はその話を否定した。", reading: "かれはそのはなしをひていした。", meanings: { en: "He denied that story.", bn: "সে সেই কথাটি অস্বীকার করেছে।" } } }
                ]
            },
            {
                id: "technology",
                title: "Technology",
                items: [
                    { char: "技", on: "ギ", kun: "わざ", meanings: { en: "skill, technique", bn: "দক্ষতা" }, strokes: 7, examples: [
                        { word: "技術", reading: "ぎじゅつ", meanings: { en: "technology, skill", bn: "প্রযুক্তি" } },
                        { word: "特技", reading: "とくぎ", meanings: { en: "special skill", bn: "বিশেষ দক্ষতা" } },
                        { word: "演技", reading: "えんぎ", meanings: { en: "acting, performance", bn: "অভিনয়" } }
                    ], exampleSentence: { jp: "技術が進歩しました。", reading: "ぎじゅつがしんぽしました。", meanings: { en: "Technology has advanced.", bn: "প্রযুক্তি উন্নত হয়েছে।" } } },
                    { char: "術", on: "ジュツ", kun: "", meanings: { en: "art, technique", bn: "কৌশল, শিল্প" }, strokes: 11, examples: [
                        { word: "技術", reading: "ぎじゅつ", meanings: { en: "technology, skill", bn: "প্রযুক্তি" } },
                        { word: "美術", reading: "びじゅつ", meanings: { en: "fine art", bn: "চারুকলা" } },
                        { word: "手術", reading: "しゅじゅつ", meanings: { en: "surgery", bn: "অস্ত্রোপচার" } }
                    ], exampleSentence: { jp: "美術館へ行きました。", reading: "びじゅつかんへいきました。", meanings: { en: "I went to the art museum.", bn: "আমি চারুকলা জাদুঘরে গিয়েছিলাম।" } } },
                    { char: "科", on: "カ", kun: "", meanings: { en: "field of study, department", bn: "বিভাগ, শাখা" }, strokes: 9, examples: [
                        { word: "科学", reading: "かがく", meanings: { en: "science", bn: "বিজ্ঞান" } },
                        { word: "教科書", reading: "きょうかしょ", meanings: { en: "textbook", bn: "পাঠ্যপুস্তক" } },
                        { word: "内科", reading: "ないか", meanings: { en: "internal medicine (dept.)", bn: "অভ্যন্তরীণ চিকিৎসা বিভাগ" } }
                    ], exampleSentence: { jp: "科学は面白いです。", reading: "かがくはおもしろいです。", meanings: { en: "Science is interesting.", bn: "বিজ্ঞান মজার।" } } },
                    { char: "情", on: "ジョウ", kun: "なさ(け)", meanings: { en: "emotion, information", bn: "আবেগ, তথ্য" }, strokes: 11, examples: [
                        { word: "情報", reading: "じょうほう", meanings: { en: "information", bn: "তথ্য" } },
                        { word: "感情", reading: "かんじょう", meanings: { en: "emotion", bn: "আবেগ" } },
                        { word: "友情", reading: "ゆうじょう", meanings: { en: "friendship", bn: "বন্ধুত্ব" } }
                    ], exampleSentence: { jp: "たくさんの情報があります。", reading: "たくさんのじょうほうがあります。", meanings: { en: "There is a lot of information.", bn: "প্রচুর তথ্য রয়েছে।" } } },
                    { char: "報", on: "ホウ", kun: "むく(いる)", meanings: { en: "report, news, reward", bn: "প্রতিবেদন, খবর" }, strokes: 12, examples: [
                        { word: "情報", reading: "じょうほう", meanings: { en: "information", bn: "তথ্য" } },
                        { word: "報告", reading: "ほうこく", meanings: { en: "report", bn: "প্রতিবেদন" } },
                        { word: "天気予報", reading: "てんきよほう", meanings: { en: "weather forecast", bn: "আবহাওয়ার পূর্বাভাস" } }
                    ], exampleSentence: { jp: "結果を報告してください。", reading: "けっかをほうこくしてください。", meanings: { en: "Please report the results.", bn: "অনুগ্রহ করে ফলাফল প্রতিবেদন করুন।" } } },
                    { char: "査", on: "サ", kun: "", meanings: { en: "investigate", bn: "তদন্ত করা" }, strokes: 9, examples: [
                        { word: "調査", reading: "ちょうさ", meanings: { en: "survey, investigation", bn: "জরিপ" } },
                        { word: "検査", reading: "けんさ", meanings: { en: "examination, inspection", bn: "পরীক্ষা" } },
                        { word: "審査", reading: "しんさ", meanings: { en: "screening, judging", bn: "মূল্যায়ন" } }
                    ], exampleSentence: { jp: "アンケート調査をしました。", reading: "アンケートちょうさをしました。", meanings: { en: "We conducted a questionnaire survey.", bn: "আমরা একটি প্রশ্নাবলী জরিপ পরিচালনা করেছি।" } } },
                    { char: "検", on: "ケン", kun: "", meanings: { en: "examine, inspect", bn: "পরীক্ষা করা" }, strokes: 12, examples: [
                        { word: "検査", reading: "けんさ", meanings: { en: "examination, inspection", bn: "পরীক্ষা" } },
                        { word: "点検", reading: "てんけん", meanings: { en: "inspection, check", bn: "যাচাই" } },
                        { word: "検討", reading: "けんとう", meanings: { en: "consideration, study", bn: "বিবেচনা" } }
                    ], exampleSentence: { jp: "健康診断で検査を受けました。", reading: "けんこうしんだんでけんさをうけました。", meanings: { en: "I had an examination during the health checkup.", bn: "স্বাস্থ্য পরীক্ষার সময় আমি পরীক্ষা করিয়েছি।" } } }
                ]
            },
            {
                id: "expression-rights",
                title: "Expression & Rights",
                items: [
                    { char: "達", on: "タツ", kun: "", meanings: { en: "reach, attain; plural suffix", bn: "পৌঁছানো, অর্জন করা" }, strokes: 12, examples: [
                        { word: "発達", reading: "はったつ", meanings: { en: "development", bn: "বিকাশ" } },
                        { word: "友達", reading: "ともだち", meanings: { en: "friend", bn: "বন্ধু" } },
                        { word: "配達", reading: "はいたつ", meanings: { en: "delivery", bn: "ডেলিভারি" } }
                    ], exampleSentence: { jp: "技術が発達しました。", reading: "ぎじゅつがはったつしました。", meanings: { en: "Technology has developed.", bn: "প্রযুক্তির বিকাশ হয়েছে।" } } },
                    { char: "述", on: "ジュツ", kun: "の(べる)", meanings: { en: "state, mention", bn: "বর্ণনা করা, বলা" }, strokes: 8, examples: [
                        { word: "述べる", reading: "のべる", meanings: { en: "to state, mention", bn: "বলা / বর্ণনা করা" } },
                        { word: "記述", reading: "きじゅつ", meanings: { en: "description", bn: "বর্ণনা" } },
                        { word: "口述", reading: "こうじゅつ", meanings: { en: "oral statement", bn: "মৌখিক বিবৃতি" } }
                    ], exampleSentence: { jp: "自分の意見を述べてください。", reading: "じぶんのいけんをのべてください。", meanings: { en: "Please state your own opinion.", bn: "অনুগ্রহ করে নিজের মতামত বলুন।" } } },
                    { char: "表", on: "ヒョウ", kun: "あらわ(す)、おもて", meanings: { en: "express, surface, table (chart)", bn: "প্রকাশ করা, তালিকা" }, strokes: 8, examples: [
                        { word: "表現", reading: "ひょうげん", meanings: { en: "expression", bn: "প্রকাশ" } },
                        { word: "発表", reading: "はっぴょう", meanings: { en: "announcement, presentation", bn: "ঘোষণা" } },
                        { word: "表す", reading: "あらわす", meanings: { en: "to express, represent", bn: "প্রকাশ করা" } }
                    ], exampleSentence: { jp: "感情を表に出します。", reading: "かんじょうをおもてにだします。", meanings: { en: "I express my emotions.", bn: "আমি আমার আবেগ প্রকাশ করি।" } } },
                    { char: "印", on: "イン", kun: "しるし", meanings: { en: "mark, seal, impression", bn: "চিহ্ন, ছাপ" }, strokes: 6, examples: [
                        { word: "印象", reading: "いんしょう", meanings: { en: "impression", bn: "ছাপ" } },
                        { word: "印刷", reading: "いんさつ", meanings: { en: "printing", bn: "মুদ্রণ" } },
                        { word: "目印", reading: "めじるし", meanings: { en: "landmark, sign", bn: "চিহ্ন" } }
                    ], exampleSentence: { jp: "いい印象を持ちました。", reading: "いいいんしょうをもちました。", meanings: { en: "I got a good impression.", bn: "আমি একটি ভালো ছাপ পেয়েছি।" } } },
                    { char: "積", on: "セキ", kun: "つ(む)", meanings: { en: "accumulate, load, area", bn: "সঞ্চিত করা, ক্ষেত্রফল" }, strokes: 16, examples: [
                        { word: "積極的", reading: "せっきょくてき", meanings: { en: "proactive, positive", bn: "উদ্যমী" } },
                        { word: "面積", reading: "めんせき", meanings: { en: "area (measurement)", bn: "ক্ষেত্রফল" } },
                        { word: "積む", reading: "つむ", meanings: { en: "to pile up, load", bn: "স্তূপ করা" } }
                    ], exampleSentence: { jp: "積極的に参加します。", reading: "せっきょくてきにさんかします。", meanings: { en: "I will participate proactively.", bn: "আমি উদ্যমীভাবে অংশগ্রহণ করব।" } } },
                    { char: "極", on: "キョク、ゴク", kun: "きわ(める)", meanings: { en: "extreme, pole", bn: "চরম, মেরু" }, strokes: 12, examples: [
                        { word: "積極的", reading: "せっきょくてき", meanings: { en: "proactive, positive", bn: "উদ্যমী" } },
                        { word: "消極的", reading: "しょうきょくてき", meanings: { en: "passive, negative", bn: "নিষ্ক্রিয়" } },
                        { word: "北極", reading: "ほっきょく", meanings: { en: "North Pole", bn: "উত্তর মেরু" } }
                    ], exampleSentence: { jp: "彼は消極的な性格です。", reading: "かれはしょうきょくてきなせいかくです。", meanings: { en: "He has a passive personality.", bn: "তার একটি নিষ্ক্রিয় ব্যক্তিত্ব রয়েছে।" } } },
                    { char: "権", on: "ケン、ゴン", kun: "", meanings: { en: "right, authority", bn: "অধিকার, ক্ষমতা" }, strokes: 15, examples: [
                        { word: "権利", reading: "けんり", meanings: { en: "right (legal)", bn: "অধিকার" } },
                        { word: "人権", reading: "じんけん", meanings: { en: "human rights", bn: "মানবাধিকার" } },
                        { word: "権力", reading: "けんりょく", meanings: { en: "power, authority", bn: "ক্ষমতা" } }
                    ], exampleSentence: { jp: "人には権利があります。", reading: "ひとにはけんりがあります。", meanings: { en: "People have rights.", bn: "মানুষের অধিকার আছে।" } } }
                ]
            },
            {
                id: "cause-relation",
                title: "Cause & Relation",
                items: [
                    { char: "効", on: "コウ", kun: "き(く)", meanings: { en: "effect, efficacy", bn: "কার্যকারিতা" }, strokes: 8, examples: [
                        { word: "効果", reading: "こうか", meanings: { en: "effect", bn: "প্রভাব" } },
                        { word: "有効", reading: "ゆうこう", meanings: { en: "valid, effective", bn: "কার্যকর" } },
                        { word: "効く", reading: "きく", meanings: { en: "to be effective", bn: "কাজ করা (প্রভাব ফেলা)" } }
                    ], exampleSentence: { jp: "この薬は効果があります。", reading: "このくすりはこうかがあります。", meanings: { en: "This medicine is effective.", bn: "এই ওষুধটি কার্যকর।" } } },
                    { char: "果", on: "カ", kun: "は(たす)、くだもの", meanings: { en: "result, fruit", bn: "ফলাফল, ফল" }, strokes: 8, examples: [
                        { word: "結果", reading: "けっか", meanings: { en: "result", bn: "ফলাফল" } },
                        { word: "効果", reading: "こうか", meanings: { en: "effect", bn: "প্রভাব" } },
                        { word: "果物", reading: "くだもの", meanings: { en: "fruit", bn: "ফল" } }
                    ], exampleSentence: { jp: "いい結果が出ました。", reading: "いいけっかがでました。", meanings: { en: "A good result came out.", bn: "একটি ভালো ফলাফল এসেছে।" } } },
                    { char: "原", on: "ゲン", kun: "はら", meanings: { en: "origin, plain, original", bn: "মূল, প্রান্তর" }, strokes: 10, examples: [
                        { word: "原因", reading: "げんいん", meanings: { en: "cause", bn: "কারণ" } },
                        { word: "原則", reading: "げんそく", meanings: { en: "principle", bn: "মূলনীতি" } },
                        { word: "高原", reading: "こうげん", meanings: { en: "plateau", bn: "মালভূমি" } }
                    ], exampleSentence: { jp: "事故の原因を調べます。", reading: "じこのげんいんをしらべます。", meanings: { en: "I will investigate the cause of the accident.", bn: "আমি দুর্ঘটনার কারণ অনুসন্ধান করব।" } } },
                    { char: "因", on: "イン", kun: "よ(る)", meanings: { en: "cause, factor", bn: "কারণ, কারক" }, strokes: 6, examples: [
                        { word: "原因", reading: "げんいん", meanings: { en: "cause", bn: "কারণ" } },
                        { word: "因果", reading: "いんが", meanings: { en: "cause and effect", bn: "কার্যকারণ" } },
                        { word: "要因", reading: "よういん", meanings: { en: "(key) factor", bn: "প্রধান কারণ" } }
                    ], exampleSentence: { jp: "失敗の要因はいくつかある。", reading: "しっぱいのよういんはいくつかある。", meanings: { en: "There are several factors behind the failure.", bn: "ব্যর্থতার পেছনে বেশ কয়েকটি কারণ রয়েছে।" } } },
                    { char: "結", on: "ケツ", kun: "むす(ぶ)", meanings: { en: "tie, conclude", bn: "বাঁধা, সমাপ্ত করা" }, strokes: 12, examples: [
                        { word: "結果", reading: "けっか", meanings: { en: "result", bn: "ফলাফল" } },
                        { word: "結婚", reading: "けっこん", meanings: { en: "marriage", bn: "বিবাহ" } },
                        { word: "結ぶ", reading: "むすぶ", meanings: { en: "to tie, connect", bn: "সংযুক্ত করা" } }
                    ], exampleSentence: { jp: "新しい契約を結びました。", reading: "あたらしいけいやくをむすびました。", meanings: { en: "We signed a new contract.", bn: "আমরা একটি নতুন চুক্তি স্বাক্ষর করেছি।" } } },
                    { char: "関", on: "カン", kun: "せき、かか(わる)", meanings: { en: "connection, related to", bn: "সম্পর্ক, সংযোগ" }, strokes: 14, examples: [
                        { word: "関係", reading: "かんけい", meanings: { en: "relationship", bn: "সম্পর্ক" } },
                        { word: "関心", reading: "かんしん", meanings: { en: "interest, concern", bn: "আগ্রহ" } },
                        { word: "税関", reading: "ぜいかん", meanings: { en: "customs (border)", bn: "শুল্ক অফিস" } }
                    ], exampleSentence: { jp: "いい関係を作りましょう。", reading: "いいかんけいをつくりましょう。", meanings: { en: "Let's build a good relationship.", bn: "চলুন একটি ভালো সম্পর্ক গড়ি।" } } },
                    { char: "係", on: "ケイ", kun: "かかり、かか(わる)", meanings: { en: "in charge of, relation", bn: "দায়িত্বপ্রাপ্ত, সম্পর্ক" }, strokes: 9, examples: [
                        { word: "関係", reading: "かんけい", meanings: { en: "relationship", bn: "সম্পর্ক" } },
                        { word: "係員", reading: "かかりいん", meanings: { en: "person in charge", bn: "দায়িত্বপ্রাপ্ত ব্যক্তি" } },
                        { word: "人間関係", reading: "にんげんかんけい", meanings: { en: "human relationships", bn: "মানব সম্পর্ক" } }
                    ], exampleSentence: { jp: "係の人に聞いてください。", reading: "かかりのひとにきいてください。", meanings: { en: "Please ask the person in charge.", bn: "অনুগ্রহ করে দায়িত্বপ্রাপ্ত ব্যক্তিকে জিজ্ঞাসা করুন।" } } }
                ]
            },
            {
                id: "standards-scope",
                title: "Standards & Scope",
                items: [
                    { char: "基", on: "キ", kun: "もと(づく)、もとい", meanings: { en: "base, foundation", bn: "ভিত্তি" }, strokes: 11, examples: [
                        { word: "基準", reading: "きじゅん", meanings: { en: "standard, criterion", bn: "মানদণ্ড" } },
                        { word: "基本", reading: "きほん", meanings: { en: "basics", bn: "মূল বিষয়" } },
                        { word: "基づく", reading: "もとづく", meanings: { en: "to be based on", bn: "ভিত্তি করা" } }
                    ], exampleSentence: { jp: "これが判断の基準です。", reading: "これがはんだんのきじゅんです。", meanings: { en: "This is the standard for judgment.", bn: "এটি বিচারের মানদণ্ড।" } } },
                    { char: "準", on: "ジュン", kun: "", meanings: { en: "standard, semi-", bn: "মান, প্রায়" }, strokes: 13, examples: [
                        { word: "基準", reading: "きじゅん", meanings: { en: "standard, criterion", bn: "মানদণ্ড" } },
                        { word: "準備", reading: "じゅんび", meanings: { en: "preparation", bn: "প্রস্তুতি" } },
                        { word: "標準", reading: "ひょうじゅん", meanings: { en: "standard, norm", bn: "প্রমিত মান" } }
                    ], exampleSentence: { jp: "会議の準備をします。", reading: "かいぎのじゅんびをします。", meanings: { en: "I will prepare for the meeting.", bn: "আমি সভার প্রস্তুতি নেব।" } } },
                    { char: "対", on: "タイ、ツイ", kun: "", meanings: { en: "against, versus, pair", bn: "বিরুদ্ধে, জোড়া" }, strokes: 7, examples: [
                        { word: "反対", reading: "はんたい", meanings: { en: "opposition", bn: "বিরোধিতা" } },
                        { word: "対して", reading: "たいして", meanings: { en: "towards, against", bn: "প্রতি" } },
                        { word: "絶対", reading: "ぜったい", meanings: { en: "absolute(ly)", bn: "একেবারে" } }
                    ], exampleSentence: { jp: "私は計画に反対です。", reading: "わたしはけいかくにはんたいです。", meanings: { en: "I am against the plan.", bn: "আমি পরিকল্পনার বিরোধিতা করি।" } } },
                    { char: "範", on: "ハン", kun: "", meanings: { en: "scope, model", bn: "পরিসর, আদর্শ" }, strokes: 15, examples: [
                        { word: "範囲", reading: "はんい", meanings: { en: "scope, range", bn: "পরিসর" } },
                        { word: "模範", reading: "もはん", meanings: { en: "model, example", bn: "আদর্শ" } },
                        { word: "規範", reading: "きはん", meanings: { en: "norm, standard", bn: "রীতি" } }
                    ], exampleSentence: { jp: "試験の範囲を教えてください。", reading: "しけんのはんいをおしえてください。", meanings: { en: "Please tell me the scope of the exam.", bn: "অনুগ্রহ করে পরীক্ষার পরিসর জানান।" } } },
                    { char: "囲", on: "イ", kun: "かこ(む)", meanings: { en: "surround, enclose", bn: "ঘিরে রাখা" }, strokes: 7, examples: [
                        { word: "範囲", reading: "はんい", meanings: { en: "scope, range", bn: "পরিসর" } },
                        { word: "周囲", reading: "しゅうい", meanings: { en: "surroundings", bn: "চারপাশ" } },
                        { word: "囲む", reading: "かこむ", meanings: { en: "to surround", bn: "ঘিরে রাখা" } }
                    ], exampleSentence: { jp: "町は山に囲まれています。", reading: "まちはやまにかこまれています。", meanings: { en: "The town is surrounded by mountains.", bn: "শহরটি পাহাড় দ্বারা ঘেরা।" } } },
                    { char: "割", on: "カツ", kun: "わ(る)、わり", meanings: { en: "divide, ratio, 10%", bn: "ভাগ করা, অনুপাত" }, strokes: 12, examples: [
                        { word: "割合", reading: "わりあい", meanings: { en: "ratio, proportion", bn: "অনুপাত" } },
                        { word: "割引", reading: "わりびき", meanings: { en: "discount", bn: "মূল্যছাড়" } },
                        { word: "役割", reading: "やくわり", meanings: { en: "role", bn: "ভূমিকা" } }
                    ], exampleSentence: { jp: "その割引は今週だけです。", reading: "そのわりびきはこんしゅうだけです。", meanings: { en: "That discount is only this week.", bn: "সেই ছাড়টি শুধু এই সপ্তাহে।" } } },
                    { char: "傾", on: "ケイ", kun: "かたむ(く)", meanings: { en: "tend, incline", bn: "ঝুঁকে পড়া, প্রবণতা" }, strokes: 13, examples: [
                        { word: "傾向", reading: "けいこう", meanings: { en: "tendency, trend", bn: "প্রবণতা" } },
                        { word: "傾く", reading: "かたむく", meanings: { en: "to lean, tilt", bn: "কাত হওয়া" } },
                        { word: "傾ける", reading: "かたむける", meanings: { en: "to tilt (something)", bn: "কাত করা" } }
                    ], exampleSentence: { jp: "最近そういう傾向があります。", reading: "さいきんそういうけいこうがあります。", meanings: { en: "There has been such a trend recently.", bn: "সম্প্রতি এমন একটি প্রবণতা দেখা যাচ্ছে।" } } }
                ]
            },
            {
                id: "knowledge-effort",
                title: "Knowledge & Effort",
                items: [
                    { char: "識", on: "シキ", kun: "", meanings: { en: "knowledge, discern", bn: "জ্ঞান" }, strokes: 19, examples: [
                        { word: "知識", reading: "ちしき", meanings: { en: "knowledge", bn: "জ্ঞান" } },
                        { word: "意識", reading: "いしき", meanings: { en: "consciousness, awareness", bn: "সচেতনতা" } },
                        { word: "常識", reading: "じょうしき", meanings: { en: "common sense", bn: "সাধারণ জ্ঞান" } }
                    ], exampleSentence: { jp: "彼は広い知識を持っています。", reading: "かれはひろいちしきをもっています。", meanings: { en: "He has broad knowledge.", bn: "তার ব্যাপক জ্ঞান রয়েছে।" } } },
                    { char: "記", on: "キ", kun: "しる(す)", meanings: { en: "record, write down", bn: "লিপিবদ্ধ করা" }, strokes: 10, examples: [
                        { word: "記憶", reading: "きおく", meanings: { en: "memory", bn: "স্মৃতি" } },
                        { word: "日記", reading: "にっき", meanings: { en: "diary", bn: "দিনলিপি" } },
                        { word: "記録", reading: "きろく", meanings: { en: "record", bn: "রেকর্ড" } }
                    ], exampleSentence: { jp: "毎日、日記を書いています。", reading: "まいにち、にっきをかいています。", meanings: { en: "I write a diary every day.", bn: "আমি প্রতিদিন দিনলিপি লিখি।" } } },
                    { char: "憶", on: "オク", kun: "", meanings: { en: "remember, recollect", bn: "স্মরণ করা" }, strokes: 16, examples: [
                        { word: "記憶", reading: "きおく", meanings: { en: "memory", bn: "স্মৃতি" } },
                        { word: "記憶力", reading: "きおくりょく", meanings: { en: "memory power", bn: "স্মৃতিশক্তি" } },
                        { word: "追憶", reading: "ついおく", meanings: { en: "reminiscence", bn: "স্মৃতিচারণ" } }
                    ], exampleSentence: { jp: "その日のことをよく記憶しています。", reading: "そのひのことをよくきおくしています。", meanings: { en: "I remember that day well.", bn: "আমি সেই দিনটির কথা ভালোভাবে মনে রেখেছি।" } } },
                    { char: "能", on: "ノウ", kun: "", meanings: { en: "ability, capable", bn: "সামর্থ্য" }, strokes: 10, examples: [
                        { word: "能力", reading: "のうりょく", meanings: { en: "ability", bn: "দক্ষতা" } },
                        { word: "可能", reading: "かのう", meanings: { en: "possible", bn: "সম্ভব" } },
                        { word: "才能", reading: "さいのう", meanings: { en: "talent", bn: "প্রতিভা" } }
                    ], exampleSentence: { jp: "高い能力を持っています。", reading: "たかいのうりょくをもっています。", meanings: { en: "I have a high level of ability.", bn: "আমার উচ্চ দক্ষতা রয়েছে।" } } },
                    { char: "努", on: "ド", kun: "つと(める)", meanings: { en: "endeavor, strive", bn: "চেষ্টা করা" }, strokes: 7, examples: [
                        { word: "努力", reading: "どりょく", meanings: { en: "effort", bn: "প্রচেষ্টা" } },
                        { word: "努める", reading: "つとめる", meanings: { en: "to endeavor, strive", bn: "প্রচেষ্টা করা" } },
                        { word: "努力家", reading: "どりょくか", meanings: { en: "hard worker", bn: "পরিশ্রমী মানুষ" } }
                    ], exampleSentence: { jp: "努力したからこそ、成功したのだ。", reading: "どりょくしたからこそ、せいこうしたのだ。", meanings: { en: "It's precisely because I made an effort that I succeeded.", bn: "ঠিক এই কারণেই যে আমি প্রচেষ্টা করেছি, আমি সফল হয়েছি।" } } },
                    { char: "望", on: "ボウ、モウ", kun: "のぞ(む)", meanings: { en: "hope, wish, view", bn: "আশা করা" }, strokes: 11, examples: [
                        { word: "希望", reading: "きぼう", meanings: { en: "hope, wish", bn: "আশা" } },
                        { word: "望む", reading: "のぞむ", meanings: { en: "to hope, wish for", bn: "কামনা করা" } },
                        { word: "絶望", reading: "ぜつぼう", meanings: { en: "despair", bn: "হতাশা" } }
                    ], exampleSentence: { jp: "将来に希望を持っています。", reading: "しょうらいにきぼうをもっています。", meanings: { en: "I have hope for the future.", bn: "ভবিষ্যতের জন্য আমার আশা আছে।" } } },
                    { char: "夢", on: "ム", kun: "ゆめ", meanings: { en: "dream", bn: "স্বপ্ন" }, strokes: 13, examples: [
                        { word: "夢", reading: "ゆめ", meanings: { en: "dream", bn: "স্বপ্ন" } },
                        { word: "夢中", reading: "むちゅう", meanings: { en: "absorbed, engrossed", bn: "মগ্ন" } },
                        { word: "悪夢", reading: "あくむ", meanings: { en: "nightmare", bn: "দুঃস্বপ্ন" } }
                    ], exampleSentence: { jp: "私の夢は医者になることです。", reading: "わたしのゆめはいしゃになることです。", meanings: { en: "My dream is to become a doctor.", bn: "আমার স্বপ্ন একজন ডাক্তার হওয়া।" } } }
                ]
            },
            {
                id: "time-order",
                title: "Time & Order",
                items: [
                    { char: "第", on: "ダイ", kun: "", meanings: { en: "ordinal prefix (no. ~)", bn: "ক্রমসূচক (নং ~)" }, strokes: 11, examples: [
                        { word: "第一", reading: "だいいち", meanings: { en: "the first, number one", bn: "প্রথম" } },
                        { word: "次第に", reading: "しだいに", meanings: { en: "gradually", bn: "ধীরে ধীরে" } },
                        { word: "第三者", reading: "だいさんしゃ", meanings: { en: "third party", bn: "তৃতীয় পক্ষ" } }
                    ], exampleSentence: { jp: "これが第一の理由です。", reading: "これがだいいちのりゆうです。", meanings: { en: "This is the first reason.", bn: "এটাই প্রথম কারণ।" } } },
                    { char: "番", on: "バン", kun: "", meanings: { en: "number, turn, watch", bn: "নম্বর, পালা" }, strokes: 12, examples: [
                        { word: "番号", reading: "ばんごう", meanings: { en: "number", bn: "নম্বর" } },
                        { word: "一番", reading: "いちばん", meanings: { en: "the most, number one", bn: "সবচেয়ে" } },
                        { word: "順番", reading: "じゅんばん", meanings: { en: "order, turn", bn: "পালা" } }
                    ], exampleSentence: { jp: "電話番号を教えてください。", reading: "でんわばんごうをおしえてください。", meanings: { en: "Please tell me your phone number.", bn: "অনুগ্রহ করে আপনার ফোন নম্বর বলুন।" } } },
                    { char: "順", on: "ジュン", kun: "", meanings: { en: "order, sequence", bn: "ক্রম" }, strokes: 12, examples: [
                        { word: "順番", reading: "じゅんばん", meanings: { en: "order, turn", bn: "পালা" } },
                        { word: "順調", reading: "じゅんちょう", meanings: { en: "favorable, smooth", bn: "মসৃণ" } },
                        { word: "手順", reading: "てじゅん", meanings: { en: "procedure, steps", bn: "পদ্ধতি" } }
                    ], exampleSentence: { jp: "順番に並んでください。", reading: "じゅんばんにならんでください。", meanings: { en: "Please line up in order.", bn: "অনুগ্রহ করে ক্রম অনুযায়ী লাইনে দাঁড়ান।" } } },
                    { char: "号", on: "ゴウ", kun: "", meanings: { en: "number, issue", bn: "সংখ্যা, সংস্করণ" }, strokes: 5, examples: [
                        { word: "番号", reading: "ばんごう", meanings: { en: "number", bn: "নম্বর" } },
                        { word: "信号", reading: "しんごう", meanings: { en: "traffic light, signal", bn: "সিগন্যাল" } },
                        { word: "三号", reading: "さんごう", meanings: { en: "issue no. 3", bn: "৩ নং সংস্করণ" } }
                    ], exampleSentence: { jp: "信号が赤になりました。", reading: "しんごうがあかになりました。", meanings: { en: "The traffic light turned red.", bn: "সিগন্যাল লাল হয়ে গেছে।" } } },
                    { char: "初", on: "ショ", kun: "はじ(め)、はつ、うい、そ(める)", meanings: { en: "first, beginning", bn: "প্রথম, শুরু" }, strokes: 7, examples: [
                        { word: "最初", reading: "さいしょ", meanings: { en: "the very first", bn: "সর্বপ্রথম" } },
                        { word: "初めて", reading: "はじめて", meanings: { en: "for the first time", bn: "প্রথমবারের মতো" } },
                        { word: "初日", reading: "しょにち", meanings: { en: "first day", bn: "প্রথম দিন" } }
                    ], exampleSentence: { jp: "初めて日本に来ました。", reading: "はじめてにほんにきました。", meanings: { en: "I came to Japan for the first time.", bn: "আমি প্রথমবারের মতো জাপানে এসেছি।" } } },
                    { char: "次", on: "ジ", kun: "つぎ、つ(ぐ)", meanings: { en: "next", bn: "পরবর্তী" }, strokes: 6, examples: [
                        { word: "次回", reading: "じかい", meanings: { en: "next time", bn: "পরের বার" } },
                        { word: "次の", reading: "つぎの", meanings: { en: "the next (one)", bn: "পরবর্তী" } },
                        { word: "目次", reading: "もくじ", meanings: { en: "table of contents", bn: "সূচিপত্র" } }
                    ], exampleSentence: { jp: "次の駅で降ります。", reading: "つぎのえきでおります。", meanings: { en: "I will get off at the next station.", bn: "আমি পরবর্তী স্টেশনে নামব।" } } },
                    { char: "現", on: "ゲン", kun: "あらわ(れる)、あらわ(す)", meanings: { en: "present, appear", bn: "বর্তমান, দেখা দেওয়া" }, strokes: 11, examples: [
                        { word: "現在", reading: "げんざい", meanings: { en: "the present, now", bn: "বর্তমান" } },
                        { word: "現実", reading: "げんじつ", meanings: { en: "reality", bn: "বাস্তবতা" } },
                        { word: "現れる", reading: "あらわれる", meanings: { en: "to appear", bn: "আবির্ভূত হওয়া" } }
                    ], exampleSentence: { jp: "現在、東京に住んでいます。", reading: "げんざい、とうきょうにすんでいます。", meanings: { en: "I currently live in Tokyo.", bn: "বর্তমানে আমি টোকিওতে বাস করি।" } } },
                    { char: "在", on: "ザイ", kun: "あ(る)", meanings: { en: "exist, be located", bn: "বিদ্যমান থাকা" }, strokes: 6, examples: [
                        { word: "現在", reading: "げんざい", meanings: { en: "the present, now", bn: "বর্তমান" } },
                        { word: "在庫", reading: "ざいこ", meanings: { en: "stock, inventory", bn: "মজুদ" } },
                        { word: "存在", reading: "そんざい", meanings: { en: "existence", bn: "অস্তিত্ব" } }
                    ], exampleSentence: { jp: "在庫がまだあります。", reading: "ざいこがまだあります。", meanings: { en: "There is still stock available.", bn: "এখনো মজুদ আছে।" } } },
                    { char: "存", on: "ソン、ゾン", kun: "", meanings: { en: "exist, be aware", bn: "বিদ্যমান, জানা" }, strokes: 6, examples: [
                        { word: "存在", reading: "そんざい", meanings: { en: "existence", bn: "অস্তিত্ব" } },
                        { word: "保存", reading: "ほぞん", meanings: { en: "preservation, saving", bn: "সংরক্ষণ" } },
                        { word: "ご存じ", reading: "ごぞんじ", meanings: { en: "(you) know (polite)", bn: "আপনি জানেন (ভদ্রভাবে)" } }
                    ], exampleSentence: { jp: "このデータを保存してください。", reading: "このデータをほぞんしてください。", meanings: { en: "Please save this data.", bn: "অনুগ্রহ করে এই তথ্য সংরক্ষণ করুন।" } } },
                    { char: "未", on: "ミ", kun: "", meanings: { en: "not yet", bn: "এখনো না" }, strokes: 5, examples: [
                        { word: "未来", reading: "みらい", meanings: { en: "future", bn: "ভবিষ্যৎ" } },
                        { word: "未定", reading: "みてい", meanings: { en: "undecided", bn: "অনির্ধারিত" } },
                        { word: "未成年", reading: "みせいねん", meanings: { en: "minor (not adult)", bn: "নাবালক" } }
                    ], exampleSentence: { jp: "旅行の日程はまだ未定です。", reading: "りょこうのにっていはまだみていです。", meanings: { en: "The travel schedule is still undecided.", bn: "ভ্রমণের সময়সূচি এখনো অনির্ধারিত।" } } },
                    { char: "過", on: "カ", kun: "す(ぎる)、あやま(つ)", meanings: { en: "pass, exceed, error", bn: "অতিক্রম করা, ত্রুটি" }, strokes: 12, examples: [
                        { word: "過去", reading: "かこ", meanings: { en: "the past", bn: "অতীত" } },
                        { word: "通過", reading: "つうか", meanings: { en: "passing through", bn: "অতিক্রম" } },
                        { word: "過ぎる", reading: "すぎる", meanings: { en: "to pass, exceed", bn: "অতিক্রম করা" } }
                    ], exampleSentence: { jp: "もう三時を過ぎました。", reading: "もうさんじをすぎました。", meanings: { en: "It has already passed three o'clock.", bn: "ইতিমধ্যে তিনটা পেরিয়ে গেছে।" } } },
                    { char: "秒", on: "ビョウ", kun: "", meanings: { en: "second (time)", bn: "সেকেন্ড" }, strokes: 9, examples: [
                        { word: "一秒", reading: "いちびょう", meanings: { en: "one second", bn: "এক সেকেন্ড" } },
                        { word: "秒速", reading: "びょうそく", meanings: { en: "speed per second", bn: "প্রতি সেকেন্ডে গতি" } },
                        { word: "秒針", reading: "びょうしん", meanings: { en: "second hand (clock)", bn: "সেকেন্ডের কাঁটা" } }
                    ], exampleSentence: { jp: "五秒待ってください。", reading: "ごびょうまってください。", meanings: { en: "Please wait five seconds.", bn: "অনুগ্রহ করে পাঁচ সেকেন্ড অপেক্ষা করুন।" } } },
                    { char: "昨", on: "サク", kun: "", meanings: { en: "yesterday, previous", bn: "গতকাল, পূর্ববর্তী" }, strokes: 9, examples: [
                        { word: "昨日", reading: "きのう", meanings: { en: "yesterday", bn: "গতকাল" } },
                        { word: "昨年", reading: "さくねん", meanings: { en: "last year", bn: "গত বছর" } },
                        { word: "昨夜", reading: "さくや", meanings: { en: "last night", bn: "গতকাল রাত" } }
                    ], exampleSentence: { jp: "昨年、日本へ行きました。", reading: "さくねん、にほんへいきました。", meanings: { en: "I went to Japan last year.", bn: "গত বছর আমি জাপানে গিয়েছিলাম।" } } },
                    { char: "翌", on: "ヨク", kun: "", meanings: { en: "the following (day/year)", bn: "পরবর্তী (দিন/বছর)" }, strokes: 11, examples: [
                        { word: "翌日", reading: "よくじつ", meanings: { en: "the next day", bn: "পরের দিন" } },
                        { word: "翌年", reading: "よくねん", meanings: { en: "the following year", bn: "পরের বছর" } },
                        { word: "翌朝", reading: "よくあさ", meanings: { en: "the next morning", bn: "পরের দিন সকাল" } }
                    ], exampleSentence: { jp: "翌日、早く起きました。", reading: "よくじつ、はやくおきました。", meanings: { en: "The next day, I woke up early.", bn: "পরের দিন, আমি তাড়াতাড়ি জেগেছিলাম।" } } },
                    { char: "晩", on: "バン", kun: "", meanings: { en: "evening, night", bn: "সন্ধ্যা, রাত" }, strokes: 12, examples: [
                        { word: "今晩", reading: "こんばん", meanings: { en: "tonight", bn: "আজ রাতে" } },
                        { word: "毎晩", reading: "まいばん", meanings: { en: "every night", bn: "প্রতি রাতে" } },
                        { word: "晩ご飯", reading: "ばんごはん", meanings: { en: "dinner", bn: "রাতের খাবার" } }
                    ], exampleSentence: { jp: "今晩、何を食べますか。", reading: "こんばん、なにをたべますか。", meanings: { en: "What will you eat tonight?", bn: "আজ রাতে কী খাবেন?" } } },
                    { char: "平", on: "ヘイ、ビョウ", kun: "たい(ら)、ひら", meanings: { en: "flat, peace, ordinary", bn: "সমতল, শান্তি" }, strokes: 5, examples: [
                        { word: "平日", reading: "へいじつ", meanings: { en: "weekday", bn: "সাপ্তাহিক কর্মদিবস" } },
                        { word: "平和", reading: "へいわ", meanings: { en: "peace", bn: "শান্তি" } },
                        { word: "平均", reading: "へいきん", meanings: { en: "average", bn: "গড়" } }
                    ], exampleSentence: { jp: "平日は仕事があります。", reading: "へいじつはしごとがあります。", meanings: { en: "I have work on weekdays.", bn: "সাপ্তাহিক কর্মদিবসে আমার কাজ থাকে।" } } },
                    { char: "再", on: "サイ、サ", kun: "ふたた(び)", meanings: { en: "again, re-", bn: "আবার, পুনরায়" }, strokes: 6, examples: [
                        { word: "再来週", reading: "さらいしゅう", meanings: { en: "the week after next", bn: "পরের পরের সপ্তাহ" } },
                        { word: "再び", reading: "ふたたび", meanings: { en: "again", bn: "আবার" } },
                        { word: "再開", reading: "さいかい", meanings: { en: "restart, resumption", bn: "পুনরায় শুরু" } }
                    ], exampleSentence: { jp: "会議は来週再開します。", reading: "かいぎはらいしゅうさいかいします。", meanings: { en: "The meeting will resume next week.", bn: "সভা আগামী সপ্তাহে পুনরায় শুরু হবে।" } } },
                    { char: "末", on: "マツ、バツ", kun: "すえ", meanings: { en: "end, close", bn: "শেষ" }, strokes: 5, examples: [
                        { word: "週末", reading: "しゅうまつ", meanings: { en: "weekend", bn: "সপ্তাহান্ত" } },
                        { word: "月末", reading: "げつまつ", meanings: { en: "end of the month", bn: "মাসের শেষ" } },
                        { word: "年末", reading: "ねんまつ", meanings: { en: "end of the year", bn: "বছরের শেষ" } }
                    ], exampleSentence: { jp: "週末は何をしますか。", reading: "しゅうまつはなにをしますか。", meanings: { en: "What will you do this weekend?", bn: "সপ্তাহান্তে আপনি কী করবেন?" } } },
                    { char: "季", on: "キ", kun: "", meanings: { en: "season", bn: "ঋতু" }, strokes: 8, examples: [
                        { word: "季節", reading: "きせつ", meanings: { en: "season", bn: "ঋতু" } },
                        { word: "四季", reading: "しき", meanings: { en: "the four seasons", bn: "চার ঋতু" } },
                        { word: "雨季", reading: "うき", meanings: { en: "rainy season", bn: "বর্ষাকাল" } }
                    ], exampleSentence: { jp: "日本には四季があります。", reading: "にほんにはしきがあります。", meanings: { en: "Japan has four seasons.", bn: "জাপানে চারটি ঋতু আছে।" } } },
                    { char: "節", on: "セツ", kun: "ふし", meanings: { en: "season, joint, verse", bn: "পর্ব, ঋতু" }, strokes: 13, examples: [
                        { word: "季節", reading: "きせつ", meanings: { en: "season", bn: "ঋতু" } },
                        { word: "節約", reading: "せつやく", meanings: { en: "saving, economizing", bn: "সাশ্রয়" } },
                        { word: "関節", reading: "かんせつ", meanings: { en: "joint (body)", bn: "গিরা" } }
                    ], exampleSentence: { jp: "電気を節約しましょう。", reading: "でんきをせつやくしましょう。", meanings: { en: "Let's save electricity.", bn: "চলুন বিদ্যুৎ সাশ্রয় করি।" } } },
                    { char: "暖", on: "ダン", kun: "あたた(かい)", meanings: { en: "warm", bn: "উষ্ণ" }, strokes: 13, examples: [
                        { word: "暖かい", reading: "あたたかい", meanings: { en: "warm", bn: "উষ্ণ" } },
                        { word: "暖房", reading: "だんぼう", meanings: { en: "heating", bn: "গরম করার ব্যবস্থা" } },
                        { word: "温暖", reading: "おんだん", meanings: { en: "mild, warm (climate)", bn: "মৃদু উষ্ণ" } }
                    ], exampleSentence: { jp: "今日は暖かいです。", reading: "きょうはあたたかいです。", meanings: { en: "It is warm today.", bn: "আজ আবহাওয়া উষ্ণ।" } } },
                    { char: "冷", on: "レイ", kun: "つめ(たい)、ひ(える)、さ(ます)", meanings: { en: "cold, cool", bn: "ঠান্ডা" }, strokes: 7, examples: [
                        { word: "冷たい", reading: "つめたい", meanings: { en: "cold (to touch)", bn: "ঠান্ডা" } },
                        { word: "冷房", reading: "れいぼう", meanings: { en: "air conditioning", bn: "শীতাতপ ব্যবস্থা" } },
                        { word: "冷蔵庫", reading: "れいぞうこ", meanings: { en: "refrigerator", bn: "রেফ্রিজারেটর" } }
                    ], exampleSentence: { jp: "冷たい水が飲みたいです。", reading: "つめたいみずがのみたいです。", meanings: { en: "I want to drink cold water.", bn: "আমি ঠান্ডা পানি পান করতে চাই।" } } },
                    { char: "温", on: "オン", kun: "あたた(かい)", meanings: { en: "warm, temperature", bn: "তাপমাত্রা, উষ্ণ" }, strokes: 12, examples: [
                        { word: "気温", reading: "きおん", meanings: { en: "air temperature", bn: "তাপমাত্রা" } },
                        { word: "温度", reading: "おんど", meanings: { en: "temperature", bn: "তাপমাত্রা" } },
                        { word: "温泉", reading: "おんせん", meanings: { en: "hot spring", bn: "উষ্ণ প্রস্রবণ" } }
                    ], exampleSentence: { jp: "今日の気温は何度ですか。", reading: "きょうのきおんはなんどですか。", meanings: { en: "What is today's temperature?", bn: "আজকের তাপমাত্রা কত?" } } },
                    { char: "熱", on: "ネツ", kun: "あつ(い)", meanings: { en: "heat, fever", bn: "তাপ, জ্বর" }, strokes: 15, examples: [
                        { word: "熱い", reading: "あつい", meanings: { en: "hot (to touch)", bn: "গরম" } },
                        { word: "熱心", reading: "ねっしん", meanings: { en: "enthusiasm", bn: "উৎসাহ" } },
                        { word: "発熱", reading: "はつねつ", meanings: { en: "fever", bn: "জ্বর" } }
                    ], exampleSentence: { jp: "熱いお茶をください。", reading: "あついおちゃをください。", meanings: { en: "Please give me hot tea.", bn: "অনুগ্রহ করে গরম চা দিন।" } } },
                    { char: "予", on: "ヨ", kun: "", meanings: { en: "beforehand, in advance", bn: "পূর্বে" }, strokes: 4, examples: [
                        { word: "予定", reading: "よてい", meanings: { en: "schedule, plan", bn: "পরিকল্পনা" } },
                        { word: "予約", reading: "よやく", meanings: { en: "reservation", bn: "সংরক্ষণ" } },
                        { word: "予習", reading: "よしゅう", meanings: { en: "preparation for a lesson", bn: "পাঠের পূর্বপ্রস্তুতি" } }
                    ], exampleSentence: { jp: "明日の予定を教えてください。", reading: "あしたのよていをおしえてください。", meanings: { en: "Please tell me tomorrow's schedule.", bn: "অনুগ্রহ করে আগামীকালের পরিকল্পনা জানান।" } } },
                    { char: "定", on: "テイ、ジョウ", kun: "さだ(める)", meanings: { en: "decide, fix, stable", bn: "নির্ধারণ করা" }, strokes: 8, examples: [
                        { word: "予定", reading: "よてい", meanings: { en: "schedule, plan", bn: "পরিকল্পনা" } },
                        { word: "決定", reading: "けってい", meanings: { en: "decision", bn: "সিদ্ধান্ত" } },
                        { word: "定休日", reading: "ていきゅうび", meanings: { en: "regular holiday (shop)", bn: "নিয়মিত ছুটির দিন" } }
                    ], exampleSentence: { jp: "会議の日を決定しました。", reading: "かいぎのひをけっていしました。", meanings: { en: "We decided the date of the meeting.", bn: "আমরা সভার তারিখ নির্ধারণ করেছি।" } } },
                    { char: "約", on: "ヤク", kun: "", meanings: { en: "approximately, promise", bn: "প্রায়, প্রতিশ্রুতি" }, strokes: 9, examples: [
                        { word: "約束", reading: "やくそく", meanings: { en: "promise", bn: "প্রতিশ্রুতি" } },
                        { word: "予約", reading: "よやく", meanings: { en: "reservation", bn: "সংরক্ষণ" } },
                        { word: "約10分", reading: "やくじゅっぷん", meanings: { en: "about 10 minutes", bn: "প্রায় ১০ মিনিট" } }
                    ], exampleSentence: { jp: "友達と約束があります。", reading: "ともだちとやくそくがあります。", meanings: { en: "I have a promise (appointment) with a friend.", bn: "বন্ধুর সাথে আমার একটি প্রতিশ্রুতি (অ্যাপয়েন্টমেন্ট) আছে।" } } },
                    { char: "束", on: "ソク", kun: "たば", meanings: { en: "bundle, tie", bn: "গুচ্ছ, বাঁধা" }, strokes: 7, examples: [
                        { word: "約束", reading: "やくそく", meanings: { en: "promise", bn: "প্রতিশ্রুতি" } },
                        { word: "花束", reading: "はなたば", meanings: { en: "bouquet of flowers", bn: "ফুলের তোড়া" } },
                        { word: "結束", reading: "けっそく", meanings: { en: "unity, solidarity", bn: "ঐক্য" } }
                    ], exampleSentence: { jp: "花束をもらいました。", reading: "はなたばをもらいました。", meanings: { en: "I received a bouquet of flowers.", bn: "আমি একটি ফুলের তোড়া পেয়েছি।" } } },
                    { char: "期", on: "キ、ゴ", kun: "", meanings: { en: "period, term", bn: "সময়কাল" }, strokes: 12, examples: [
                        { word: "予定", reading: "よてい", meanings: { en: "schedule, plan", bn: "পরিকল্পনা" } },
                        { word: "期間", reading: "きかん", meanings: { en: "period (of time)", bn: "সময়কাল" } },
                        { word: "時期", reading: "じき", meanings: { en: "time, season", bn: "সময়" } }
                    ], exampleSentence: { jp: "期間は一週間です。", reading: "きかんはいっしゅうかんです。", meanings: { en: "The period is one week.", bn: "সময়কাল এক সপ্তাহ।" } } },
                    { char: "限", on: "ゲン", kun: "かぎ(る)", meanings: { en: "limit", bn: "সীমা" }, strokes: 9, examples: [
                        { word: "期限", reading: "きげん", meanings: { en: "deadline, time limit", bn: "সময়সীমা" } },
                        { word: "制限", reading: "せいげん", meanings: { en: "restriction, limit", bn: "সীমাবদ্ধতা" } },
                        { word: "限る", reading: "かぎる", meanings: { en: "to limit, restrict to", bn: "সীমাবদ্ধ করা" } }
                    ], exampleSentence: { jp: "レポートの期限はいつですか。", reading: "レポートのきげんはいつですか。", meanings: { en: "When is the deadline for the report?", bn: "রিপোর্টের সময়সীমা কবে?" } } }
                ]
            },

            {
                id: "people-relationships",
                title: "People & Relationships",
                items: [
                    { char: "式", on: "シキ", kun: "", meanings: { en: "ceremony, formula, style", bn: "অনুষ্ঠান, সূত্র" }, strokes: 6, examples: [
                        { word: "結婚式", reading: "けっこんしき", meanings: { en: "wedding ceremony", bn: "বিবাহ অনুষ্ঠান" } },
                        { word: "式場", reading: "しきじょう", meanings: { en: "ceremony hall/venue", bn: "অনুষ্ঠান স্থান" } },
                        { word: "正式", reading: "せいしき", meanings: { en: "formal, official", bn: "আনুষ্ঠানিক" } }
                    ], exampleSentence: { jp: "来月、結婚式をします。", reading: "らいげつ、けっこんしきをします。", meanings: { en: "I will have my wedding ceremony next month.", bn: "আগামী মাসে আমার বিবাহ অনুষ্ঠান হবে।" } } },
                    { char: "婚", on: "コン", kun: "", meanings: { en: "marriage", bn: "বিবাহ" }, strokes: 11, examples: [
                        { word: "結婚", reading: "けっこん", meanings: { en: "marriage", bn: "বিবাহ" } },
                        { word: "婚約", reading: "こんやく", meanings: { en: "engagement", bn: "বাগদান" } },
                        { word: "離婚", reading: "りこん", meanings: { en: "divorce", bn: "বিবাহবিচ্ছেদ" } }
                    ], exampleSentence: { jp: "二人は結婚しました。", reading: "ふたりはけっこんしました。", meanings: { en: "The two of them got married.", bn: "তারা দুজন বিয়ে করেছে।" } } },
                    { char: "婦", on: "フ", kun: "", meanings: { en: "woman, wife", bn: "নারী, স্ত্রী" }, strokes: 11, examples: [
                        { word: "夫婦", reading: "ふうふ", meanings: { en: "married couple", bn: "দম্পতি" } },
                        { word: "主婦", reading: "しゅふ", meanings: { en: "housewife", bn: "গৃহিণী" } },
                        { word: "看護婦", reading: "かんごふ", meanings: { en: "nurse (female, dated term)", bn: "নার্স" } }
                    ], exampleSentence: { jp: "あの夫婦は仲がいいです。", reading: "あのふうふはなかがいいです。", meanings: { en: "That couple gets along well.", bn: "সেই দম্পতি একে অপরের সাথে ভালো সম্পর্ক রাখে।" } } },
                    { char: "夫", on: "フ、フウ", kun: "おっと", meanings: { en: "husband", bn: "স্বামী" }, strokes: 4, examples: [
                        { word: "夫婦", reading: "ふうふ", meanings: { en: "married couple", bn: "দম্পতি" } },
                        { word: "夫", reading: "おっと", meanings: { en: "husband", bn: "স্বামী" } },
                        { word: "工夫", reading: "くふう", meanings: { en: "ingenuity, device", bn: "কৌশল" } }
                    ], exampleSentence: { jp: "私の夫は医者です。", reading: "わたしのおっとはいしゃです。", meanings: { en: "My husband is a doctor.", bn: "আমার স্বামী একজন ডাক্তার।" } } },
                    { char: "妻", on: "サイ", kun: "つま", meanings: { en: "wife", bn: "স্ত্রী" }, strokes: 8, examples: [
                        { word: "妻", reading: "つま", meanings: { en: "wife", bn: "স্ত্রী" } },
                        { word: "夫妻", reading: "ふさい", meanings: { en: "husband and wife", bn: "স্বামী-স্ত্রী" } },
                        { word: "妻子", reading: "さいし", meanings: { en: "wife and children", bn: "স্ত্রী ও সন্তান" } }
                    ], exampleSentence: { jp: "彼の妻は先生です。", reading: "かれのつまはせんせいです。", meanings: { en: "His wife is a teacher.", bn: "তার স্ত্রী একজন শিক্ষক।" } } },
                    { char: "氏", on: "シ", kun: "うじ", meanings: { en: "Mr./Ms., clan name", bn: "জনাব, বংশনাম" }, strokes: 4, examples: [
                        { word: "田中氏", reading: "たなかし", meanings: { en: "Mr. Tanaka (formal)", bn: "জনাব তানাকা" } },
                        { word: "氏名", reading: "しめい", meanings: { en: "full name", bn: "পূর্ণ নাম" } },
                        { word: "彼氏", reading: "かれし", meanings: { en: "boyfriend", bn: "প্রেমিক" } }
                    ], exampleSentence: { jp: "こちらに氏名を書いてください。", reading: "こちらにしめいをかいてください。", meanings: { en: "Please write your full name here.", bn: "অনুগ্রহ করে এখানে আপনার পূর্ণ নাম লিখুন।" } } },
                    { char: "性", on: "セイ、ショウ", kun: "", meanings: { en: "nature, gender, -ness", bn: "প্রকৃতি, লিঙ্গ" }, strokes: 8, examples: [
                        { word: "性格", reading: "せいかく", meanings: { en: "personality", bn: "ব্যক্তিত্ব" } },
                        { word: "女性", reading: "じょせい", meanings: { en: "woman", bn: "নারী" } },
                        { word: "可能性", reading: "かのうせい", meanings: { en: "possibility", bn: "সম্ভাবনা" } }
                    ], exampleSentence: { jp: "彼女は明るい性格です。", reading: "かのじょはあかるいせいかくです。", meanings: { en: "She has a cheerful personality.", bn: "তার একটি প্রাণবন্ত ব্যক্তিত্ব রয়েছে।" } } },
                    { char: "格", on: "カク、コウ", kun: "", meanings: { en: "status, character, case", bn: "মর্যাদা, চরিত্র" }, strokes: 10, examples: [
                        { word: "性格", reading: "せいかく", meanings: { en: "personality", bn: "ব্যক্তিত্ব" } },
                        { word: "資格", reading: "しかく", meanings: { en: "qualification", bn: "যোগ্যতা" } },
                        { word: "合格", reading: "ごうかく", meanings: { en: "passing (an exam)", bn: "উত্তীর্ণ হওয়া" } }
                    ], exampleSentence: { jp: "試験に合格しました。", reading: "しけんにごうかくしました。", meanings: { en: "I passed the exam.", bn: "আমি পরীক্ষায় উত্তীর্ণ হয়েছি।" } } },
                    { char: "優", on: "ユウ", kun: "やさ(しい)、すぐ(れる)", meanings: { en: "gentle, superior, actor", bn: "ভদ্র, শ্রেষ্ঠ" }, strokes: 17, examples: [
                        { word: "優しい", reading: "やさしい", meanings: { en: "kind, gentle", bn: "ভদ্র, সদয়" } },
                        { word: "優秀", reading: "ゆうしゅう", meanings: { en: "excellent", bn: "উৎকৃষ্ট" } },
                        { word: "女優", reading: "じょゆう", meanings: { en: "actress", bn: "অভিনেত্রী" } }
                    ], exampleSentence: { jp: "彼はとても優しい人です。", reading: "かれはとてもやさしいひとです。", meanings: { en: "He is a very kind person.", bn: "সে খুবই ভদ্র মানুষ।" } } },
                    { char: "身", on: "シン", kun: "み", meanings: { en: "body, oneself", bn: "শরীর, নিজে" }, strokes: 7, examples: [
                        { word: "自身", reading: "じしん", meanings: { en: "oneself", bn: "নিজে" } },
                        { word: "身長", reading: "しんちょう", meanings: { en: "height (body)", bn: "উচ্চতা" } },
                        { word: "出身", reading: "しゅっしん", meanings: { en: "hometown, origin", bn: "আদি নিবাস" } }
                    ], exampleSentence: { jp: "私は東京出身です。", reading: "わたしはとうきょうしゅっしんです。", meanings: { en: "I am from Tokyo.", bn: "আমি টোকিও থেকে এসেছি।" } } },
                    { char: "独", on: "ドク", kun: "ひと(り)", meanings: { en: "alone, single, Germany", bn: "একা" }, strokes: 9, examples: [
                        { word: "独身", reading: "どくしん", meanings: { en: "single (unmarried)", bn: "অবিবাহিত" } },
                        { word: "独立", reading: "どくりつ", meanings: { en: "independence", bn: "স্বাধীনতা" } },
                        { word: "独特", reading: "どくとく", meanings: { en: "unique, peculiar", bn: "অনন্য" } }
                    ], exampleSentence: { jp: "彼はまだ独身です。", reading: "かれはまだどくしんです。", meanings: { en: "He is still single.", bn: "সে এখনো অবিবাহিত।" } } },
                    { char: "客", on: "キャク、カク", kun: "", meanings: { en: "guest, customer", bn: "অতিথি, গ্রাহক" }, strokes: 9, examples: [
                        { word: "お客様", reading: "おきゃくさま", meanings: { en: "customer, guest (polite)", bn: "গ্রাহক (ভদ্রভাবে)" } },
                        { word: "観光客", reading: "かんこうきゃく", meanings: { en: "tourist", bn: "পর্যটক" } },
                        { word: "客席", reading: "きゃくせき", meanings: { en: "audience seats", bn: "দর্শকাসন" } }
                    ], exampleSentence: { jp: "お客様が来ました。", reading: "おきゃくさまがきました。", meanings: { en: "A guest has arrived.", bn: "একজন অতিথি এসেছেন।" } } },
                    { char: "様", on: "ヨウ", kun: "さま", meanings: { en: "manner, Mr./Ms. (polite)", bn: "ধরন, শ্রদ্ধেয়" }, strokes: 14, examples: [
                        { word: "お客様", reading: "おきゃくさま", meanings: { en: "customer, guest (polite)", bn: "গ্রাহক (ভদ্রভাবে)" } },
                        { word: "様子", reading: "ようす", meanings: { en: "appearance, situation", bn: "অবস্থা" } },
                        { word: "同様", reading: "どうよう", meanings: { en: "the same way", bn: "একইভাবে" } }
                    ], exampleSentence: { jp: "彼の様子がおかしいです。", reading: "かれのようすがおかしいです。", meanings: { en: "His appearance/condition seems strange.", bn: "তার অবস্থা অদ্ভুত মনে হচ্ছে।" } } },
                    { char: "彼", on: "ヒ", kun: "かれ、かの", meanings: { en: "he, that", bn: "সে (পুরুষ)" }, strokes: 8, examples: [
                        { word: "彼", reading: "かれ", meanings: { en: "he, boyfriend", bn: "সে (পুরুষ), প্রেমিক" } },
                        { word: "彼女", reading: "かのじょ", meanings: { en: "she, girlfriend", bn: "সে (নারী), প্রেমিকা" } },
                        { word: "彼氏", reading: "かれし", meanings: { en: "boyfriend", bn: "প্রেমিক" } }
                    ], exampleSentence: { jp: "彼は私の友達です。", reading: "かれはわたしのともだちです。", meanings: { en: "He is my friend.", bn: "সে আমার বন্ধু।" } } },
                    { char: "君", on: "クン", kun: "きみ", meanings: { en: "you (casual), lord", bn: "তুমি (সাধারণ)" }, strokes: 7, examples: [
                        { word: "君", reading: "きみ", meanings: { en: "you (casual, to equals/juniors)", bn: "তুমি" } },
                        { word: "田中君", reading: "たなかくん", meanings: { en: "Tanaka (casual name suffix)", bn: "তানাকা (নাম প্রত্যয়)" } },
                        { word: "君主", reading: "くんしゅ", meanings: { en: "monarch", bn: "রাজা" } }
                    ], exampleSentence: { jp: "君は今日暇ですか。", reading: "きみはきょうひまですか。", meanings: { en: "Are you free today?", bn: "তুমি কি আজ ফ্রি আছো?" } } },
                    { char: "奥", on: "オウ", kun: "おく", meanings: { en: "interior, depths", bn: "অভ্যন্তর, গভীর" }, strokes: 12, examples: [
                        { word: "奥さん", reading: "おくさん", meanings: { en: "wife (someone else's)", bn: "স্ত্রী (অন্যের)" } },
                        { word: "奥", reading: "おく", meanings: { en: "the back, inner part", bn: "ভেতরের দিক" } },
                        { word: "山奥", reading: "やまおく", meanings: { en: "deep in the mountains", bn: "পাহাড়ের গভীরে" } }
                    ], exampleSentence: { jp: "田中さんの奥さんに会いました。", reading: "たなかさんのおくさんにあいました。", meanings: { en: "I met Mr. Tanaka's wife.", bn: "আমি তানাকার স্ত্রীর সাথে দেখা করেছি।" } } },
                    { char: "宅", on: "タク", kun: "", meanings: { en: "home, residence", bn: "বাসস্থান" }, strokes: 6, examples: [
                        { word: "お宅", reading: "おたく", meanings: { en: "your home (polite)", bn: "আপনার বাড়ি" } },
                        { word: "自宅", reading: "じたく", meanings: { en: "one's own home", bn: "নিজের বাড়ি" } },
                        { word: "宅配", reading: "たくはい", meanings: { en: "home delivery", bn: "বাড়িতে ডেলিভারি" } }
                    ], exampleSentence: { jp: "自宅で仕事をしています。", reading: "じたくでしごとをしています。", meanings: { en: "I am working from home.", bn: "আমি বাড়িতে বসে কাজ করছি।" } } },
                    { char: "圧", on: "アツ", kun: "", meanings: { en: "pressure", bn: "চাপ" }, strokes: 5, examples: [
                        { word: "血圧", reading: "けつあつ", meanings: { en: "blood pressure", bn: "রক্তচাপ" } },
                        { word: "圧力", reading: "あつりょく", meanings: { en: "pressure", bn: "চাপ" } },
                        { word: "気圧", reading: "きあつ", meanings: { en: "atmospheric pressure", bn: "বায়ুচাপ" } }
                    ], exampleSentence: { jp: "血圧を測りましょう。", reading: "けつあつをはかりましょう。", meanings: { en: "Let's measure your blood pressure.", bn: "চলুন আপনার রক্তচাপ মাপি।" } } },
                    { char: "血", on: "ケツ", kun: "ち", meanings: { en: "blood", bn: "রক্ত" }, strokes: 6, examples: [
                        { word: "血圧", reading: "けつあつ", meanings: { en: "blood pressure", bn: "রক্তচাপ" } },
                        { word: "血液", reading: "けつえき", meanings: { en: "blood", bn: "রক্ত" } },
                        { word: "鼻血", reading: "はなぢ", meanings: { en: "nosebleed", bn: "নাক দিয়ে রক্তপাত" } }
                    ], exampleSentence: { jp: "献血をしたことがあります。", reading: "けんけつをしたことがあります。", meanings: { en: "I have donated blood before.", bn: "আমি আগে রক্তদান করেছি।" } } },
                    { char: "測", on: "ソク", kun: "はか(る)", meanings: { en: "measure", bn: "পরিমাপ করা" }, strokes: 12, examples: [
                        { word: "測る", reading: "はかる", meanings: { en: "to measure", bn: "পরিমাপ করা" } },
                        { word: "観測", reading: "かんそく", meanings: { en: "observation", bn: "পর্যবেক্ষণ" } },
                        { word: "予測", reading: "よそく", meanings: { en: "prediction", bn: "পূর্বাভাস" } }
                    ], exampleSentence: { jp: "体温を測ってください。", reading: "たいおんをはかってください。", meanings: { en: "Please measure your body temperature.", bn: "অনুগ্রহ করে আপনার শরীরের তাপমাত্রা পরিমাপ করুন।" } } },
                    { char: "鼻", on: "ビ", kun: "はな", meanings: { en: "nose", bn: "নাক" }, strokes: 14, examples: [
                        { word: "鼻", reading: "はな", meanings: { en: "nose", bn: "নাক" } },
                        { word: "鼻水", reading: "はなみず", meanings: { en: "runny nose", bn: "নাক দিয়ে পানি পড়া" } },
                        { word: "鼻血", reading: "はなぢ", meanings: { en: "nosebleed", bn: "নাক দিয়ে রক্তপাত" } }
                    ], exampleSentence: { jp: "鼻が痛いです。", reading: "はながいたいです。", meanings: { en: "My nose hurts.", bn: "আমার নাকে ব্যথা করছে।" } } },
                    { char: "投", on: "トウ", kun: "な(げる)", meanings: { en: "throw", bn: "নিক্ষেপ করা" }, strokes: 7, examples: [
                        { word: "投げる", reading: "なげる", meanings: { en: "to throw", bn: "নিক্ষেপ করা" } },
                        { word: "投票", reading: "とうひょう", meanings: { en: "voting", bn: "ভোটদান" } },
                        { word: "投資", reading: "とうし", meanings: { en: "investment", bn: "বিনিয়োগ" } }
                    ], exampleSentence: { jp: "ボールを投げてください。", reading: "ボールをなげてください。", meanings: { en: "Please throw the ball.", bn: "অনুগ্রহ করে বলটি ছুঁড়ে দিন।" } } },
                    { char: "曲", on: "キョク", kun: "ま(がる)", meanings: { en: "bend, music tune", bn: "বাঁক, সুর" }, strokes: 6, examples: [
                        { word: "曲がる", reading: "まがる", meanings: { en: "to turn, bend", bn: "মোড় নেওয়া" } },
                        { word: "曲", reading: "きょく", meanings: { en: "song, tune", bn: "গান" } },
                        { word: "作曲", reading: "さっきょく", meanings: { en: "composing music", bn: "সুর রচনা" } }
                    ], exampleSentence: { jp: "次の角を右に曲がってください。", reading: "つぎのかどをみぎにまがってください。", meanings: { en: "Please turn right at the next corner.", bn: "অনুগ্রহ করে পরের মোড়ে ডানে ঘুরুন।" } } },
                    { char: "直", on: "チョク、ジキ", kun: "なお(す)、なお(る)、ただ(ちに)", meanings: { en: "straight, fix, direct", bn: "সোজা, ঠিক করা" }, strokes: 8, examples: [
                        { word: "直す", reading: "なおす", meanings: { en: "to fix, repair", bn: "ঠিক করা" } },
                        { word: "正直", reading: "しょうじき", meanings: { en: "honest", bn: "সৎ" } },
                        { word: "直接", reading: "ちょくせつ", meanings: { en: "direct(ly)", bn: "সরাসরি" } }
                    ], exampleSentence: { jp: "壊れたパソコンを直しました。", reading: "こわれたパソコンをなおしました。", meanings: { en: "I fixed the broken computer.", bn: "আমি ভাঙা কম্পিউটারটি ঠিক করেছি।" } } }
                ]
            },

            {
                id: "mind-emotions",
                title: "Mind & Emotions",
                items: [
                    { char: "恋", on: "レン", kun: "こい、こ(う)", meanings: { en: "love, romance", bn: "প্রেম" }, strokes: 10, examples: [
                        { word: "恋", reading: "こい", meanings: { en: "romantic love", bn: "প্রেম" } },
                        { word: "恋人", reading: "こいびと", meanings: { en: "lover, boyfriend/girlfriend", bn: "প্রেমিক/প্রেমিকা" } },
                        { word: "初恋", reading: "はつこい", meanings: { en: "first love", bn: "প্রথম প্রেম" } }
                    ], exampleSentence: { jp: "彼女には恋人がいます。", reading: "かのじょにはこいびとがいます。", meanings: { en: "She has a boyfriend.", bn: "তার একজন প্রেমিক আছে।" } } },
                    { char: "笑", on: "ショウ", kun: "わら(う)、え(む)", meanings: { en: "laugh, smile", bn: "হাসা" }, strokes: 10, examples: [
                        { word: "笑う", reading: "わらう", meanings: { en: "to laugh", bn: "হাসা" } },
                        { word: "笑顔", reading: "えがお", meanings: { en: "smiling face", bn: "হাসিমুখ" } },
                        { word: "微笑む", reading: "ほほえむ", meanings: { en: "to smile", bn: "মৃদু হাসা" } }
                    ], exampleSentence: { jp: "彼女はいつも笑っています。", reading: "かのじょはいつもわらっています。", meanings: { en: "She is always laughing.", bn: "সে সবসময় হাসছে।" } } },
                    { char: "喜", on: "キ", kun: "よろこ(ぶ)", meanings: { en: "rejoice, be glad", bn: "আনন্দিত হওয়া" }, strokes: 12, examples: [
                        { word: "喜ぶ", reading: "よろこぶ", meanings: { en: "to be glad, pleased", bn: "আনন্দিত হওয়া" } },
                        { word: "喜び", reading: "よろこび", meanings: { en: "joy, pleasure", bn: "আনন্দ" } },
                        { word: "大喜び", reading: "おおよろこび", meanings: { en: "great joy", bn: "প্রবল আনন্দ" } }
                    ], exampleSentence: { jp: "プレゼントをもらって喜びました。", reading: "プレゼントをもらってよろこびました。", meanings: { en: "I was glad to receive the present.", bn: "উপহার পেয়ে আমি আনন্দিত হয়েছিলাম।" } } },
                    { char: "悲", on: "ヒ", kun: "かな(しい)", meanings: { en: "sad", bn: "দুঃখিত" }, strokes: 12, examples: [
                        { word: "悲しい", reading: "かなしい", meanings: { en: "sad", bn: "দুঃখিত" } },
                        { word: "悲しむ", reading: "かなしむ", meanings: { en: "to grieve", bn: "শোক করা" } },
                        { word: "悲劇", reading: "ひげき", meanings: { en: "tragedy", bn: "ট্র্যাজেডি" } }
                    ], exampleSentence: { jp: "その話を聞いて悲しくなりました。", reading: "そのはなしをきいてかなしくなりました。", meanings: { en: "I became sad after hearing that story.", bn: "সেই কথা শুনে আমি দুঃখিত হয়েছিলাম।" } } },
                    { char: "涙", on: "ルイ", kun: "なみだ", meanings: { en: "tears", bn: "অশ্রু" }, strokes: 10, examples: [
                        { word: "涙", reading: "なみだ", meanings: { en: "tears", bn: "অশ্রু" } },
                        { word: "涙が出る", reading: "なみだがでる", meanings: { en: "tears come out", bn: "চোখ থেকে অশ্রু ঝরা" } },
                        { word: "感涙", reading: "かんるい", meanings: { en: "tears of emotion", bn: "আবেগঘন অশ্রু" } }
                    ], exampleSentence: { jp: "映画を見て涙が出ました。", reading: "えいがをみてなみだがでました。", meanings: { en: "I shed tears while watching the movie.", bn: "সিনেমা দেখতে গিয়ে আমার চোখে জল এসেছিল।" } } },
                    { char: "怒", on: "ド", kun: "おこ(る)、いか(る)", meanings: { en: "anger", bn: "রাগ" }, strokes: 9, examples: [
                        { word: "怒る", reading: "おこる", meanings: { en: "to get angry", bn: "রাগান্বিত হওয়া" } },
                        { word: "怒り", reading: "いかり", meanings: { en: "anger", bn: "রাগ" } },
                        { word: "怒鳴る", reading: "どなる", meanings: { en: "to shout angrily", bn: "চিৎকার করে বলা" } }
                    ], exampleSentence: { jp: "先生は生徒に怒りました。", reading: "せんせいはせいとにおこりました。", meanings: { en: "The teacher got angry at the student.", bn: "শিক্ষক শিক্ষার্থীর উপর রেগে গিয়েছিলেন।" } } },
                    { char: "感", on: "カン", kun: "", meanings: { en: "feel, sense, emotion", bn: "অনুভব করা" }, strokes: 13, examples: [
                        { word: "感じる", reading: "かんじる", meanings: { en: "to feel, sense", bn: "অনুভব করা" } },
                        { word: "感情", reading: "かんじょう", meanings: { en: "emotion", bn: "আবেগ" } },
                        { word: "感謝", reading: "かんしゃ", meanings: { en: "gratitude", bn: "কৃতজ্ঞতা" } }
                    ], exampleSentence: { jp: "寒さを感じます。", reading: "さむさをかんじます。", meanings: { en: "I feel the cold.", bn: "আমি ঠান্ডা অনুভব করছি।" } } },
                    { char: "覚", on: "カク", kun: "おぼ(える)、さ(める)", meanings: { en: "remember, awaken, sense", bn: "মনে রাখা, জাগা" }, strokes: 12, examples: [
                        { word: "覚える", reading: "おぼえる", meanings: { en: "to remember, memorize", bn: "মনে রাখা" } },
                        { word: "感覚", reading: "かんかく", meanings: { en: "sense, feeling", bn: "অনুভূতি" } },
                        { word: "目が覚める", reading: "めがさめる", meanings: { en: "to wake up", bn: "ঘুম থেকে জাগা" } }
                    ], exampleSentence: { jp: "新しい言葉を覚えました。", reading: "あたらしいことばをおぼえました。", meanings: { en: "I memorized a new word.", bn: "আমি একটি নতুন শব্দ মুখস্থ করেছি।" } } },
                    { char: "痛", on: "ツウ", kun: "いた(い)", meanings: { en: "pain", bn: "ব্যথা" }, strokes: 12, examples: [
                        { word: "痛い", reading: "いたい", meanings: { en: "painful", bn: "ব্যথাযুক্ত" } },
                        { word: "頭痛", reading: "ずつう", meanings: { en: "headache", bn: "মাথাব্যথা" } },
                        { word: "痛み", reading: "いたみ", meanings: { en: "pain", bn: "ব্যথা" } }
                    ], exampleSentence: { jp: "お腹が痛いです。", reading: "おなかがいたいです。", meanings: { en: "My stomach hurts.", bn: "আমার পেটে ব্যথা করছে।" } } },
                    { char: "疲", on: "ヒ", kun: "つか(れる)", meanings: { en: "tired", bn: "ক্লান্ত" }, strokes: 10, examples: [
                        { word: "疲れる", reading: "つかれる", meanings: { en: "to get tired", bn: "ক্লান্ত হওয়া" } },
                        { word: "疲れ", reading: "つかれ", meanings: { en: "fatigue", bn: "ক্লান্তি" } },
                        { word: "疲労", reading: "ひろう", meanings: { en: "fatigue, exhaustion", bn: "অবসাদ" } }
                    ], exampleSentence: { jp: "今日はとても疲れました。", reading: "きょうはとてもつかれました。", meanings: { en: "I got very tired today.", bn: "আজ আমি খুব ক্লান্ত হয়ে পড়েছি।" } } },
                    { char: "苦", on: "ク", kun: "くる(しい)、にが(い)", meanings: { en: "suffer, bitter", bn: "কষ্ট, তেতো" }, strokes: 8, examples: [
                        { word: "苦しい", reading: "くるしい", meanings: { en: "painful, hard", bn: "কষ্টকর" } },
                        { word: "苦手", reading: "にがて", meanings: { en: "weak point, not good at", bn: "দুর্বলতা" } },
                        { word: "苦労", reading: "くろう", meanings: { en: "hardship, trouble", bn: "কষ্ট" } }
                    ], exampleSentence: { jp: "数学が苦手です。", reading: "すうがくがにがてです。", meanings: { en: "I am not good at math.", bn: "আমি গণিতে দুর্বল।" } } },
                    { char: "労", on: "ロウ", kun: "", meanings: { en: "labor, toil", bn: "শ্রম" }, strokes: 7, examples: [
                        { word: "苦労", reading: "くろう", meanings: { en: "hardship, trouble", bn: "কষ্ট" } },
                        { word: "労働", reading: "ろうどう", meanings: { en: "labor, work", bn: "শ্রম" } },
                        { word: "疲労", reading: "ひろう", meanings: { en: "fatigue, exhaustion", bn: "অবসাদ" } }
                    ], exampleSentence: { jp: "彼は毎日労働しています。", reading: "かれはまいにちろうどうしています。", meanings: { en: "He works (labors) every day.", bn: "সে প্রতিদিন পরিশ্রম করে।" } } },
                    { char: "想", on: "ソウ", kun: "", meanings: { en: "think, imagine", bn: "চিন্তা করা, কল্পনা" }, strokes: 13, examples: [
                        { word: "想像", reading: "そうぞう", meanings: { en: "imagination", bn: "কল্পনা" } },
                        { word: "予想", reading: "よそう", meanings: { en: "prediction, expectation", bn: "পূর্বানুমান" } },
                        { word: "理想", reading: "りそう", meanings: { en: "ideal", bn: "আদর্শ" } }
                    ], exampleSentence: { jp: "未来を想像してみてください。", reading: "みらいをそうぞうしてみてください。", meanings: { en: "Please try to imagine the future.", bn: "অনুগ্রহ করে ভবিষ্যৎ কল্পনা করার চেষ্টা করুন।" } } },
                    { char: "像", on: "ゾウ", kun: "", meanings: { en: "image, statue", bn: "প্রতিমূর্তি, চিত্র" }, strokes: 14, examples: [
                        { word: "想像", reading: "そうぞう", meanings: { en: "imagination", bn: "কল্পনা" } },
                        { word: "映像", reading: "えいぞう", meanings: { en: "video, footage", bn: "চলচ্চিত্র" } },
                        { word: "銅像", reading: "どうぞう", meanings: { en: "bronze statue", bn: "ব্রোঞ্জ মূর্তি" } }
                    ], exampleSentence: { jp: "駅前に銅像があります。", reading: "えきまえにどうぞうがあります。", meanings: { en: "There is a bronze statue in front of the station.", bn: "স্টেশনের সামনে একটি ব্রোঞ্জ মূর্তি আছে।" } } },
                    { char: "信", on: "シン", kun: "", meanings: { en: "trust, believe", bn: "বিশ্বাস" }, strokes: 9, examples: [
                        { word: "信じる", reading: "しんじる", meanings: { en: "to believe, trust", bn: "বিশ্বাস করা" } },
                        { word: "自信", reading: "じしん", meanings: { en: "self-confidence", bn: "আত্মবিশ্বাস" } },
                        { word: "信頼", reading: "しんらい", meanings: { en: "trust, reliance", bn: "আস্থা" } }
                    ], exampleSentence: { jp: "私は彼を信じています。", reading: "わたしはかれをしんじています。", meanings: { en: "I trust him.", bn: "আমি তাকে বিশ্বাস করি।" } } },
                    { char: "希", on: "キ", kun: "", meanings: { en: "hope, rare", bn: "আশা, বিরল" }, strokes: 7, examples: [
                        { word: "希望", reading: "きぼう", meanings: { en: "hope, wish", bn: "আশা" } },
                        { word: "希少", reading: "きしょう", meanings: { en: "rare, scarce", bn: "বিরল" } },
                        { word: "古希", reading: "こき", meanings: { en: "70th birthday", bn: "৭০তম জন্মদিন" } }
                    ], exampleSentence: { jp: "彼の希望は医者になることです。", reading: "かれのきぼうはいしゃになることです。", meanings: { en: "His hope is to become a doctor.", bn: "তার আশা একজন ডাক্তার হওয়া।" } } },
                    { char: "願", on: "ガン", kun: "ねが(う)", meanings: { en: "wish, request", bn: "কামনা করা" }, strokes: 19, examples: [
                        { word: "願う", reading: "ねがう", meanings: { en: "to wish, hope for", bn: "কামনা করা" } },
                        { word: "お願いします", reading: "おねがいします", meanings: { en: "please (I request)", bn: "অনুগ্রহ করে" } },
                        { word: "願望", reading: "がんぼう", meanings: { en: "desire, wish", bn: "আকাঙ্ক্ষা" } }
                    ], exampleSentence: { jp: "世界の平和を願っています。", reading: "せかいのへいわをねがっています。", meanings: { en: "I wish for world peace.", bn: "আমি বিশ্ব শান্তি কামনা করি।" } } },
                    { char: "失", on: "シツ", kun: "うしな(う)", meanings: { en: "lose, error", bn: "হারানো, ভুল" }, strokes: 5, examples: [
                        { word: "失礼", reading: "しつれい", meanings: { en: "rudeness, excuse me", bn: "অভদ্রতা, মাফ করবেন" } },
                        { word: "失敗", reading: "しっぱい", meanings: { en: "failure", bn: "ব্যর্থতা" } },
                        { word: "失う", reading: "うしなう", meanings: { en: "to lose", bn: "হারানো" } }
                    ], exampleSentence: { jp: "失礼ですが、お名前は？", reading: "しつれいですが、おなまえは？", meanings: { en: "Excuse me, but what is your name?", bn: "মাফ করবেন, আপনার নাম কী?" } } },
                    { char: "礼", on: "レイ", kun: "", meanings: { en: "courtesy, bow, thanks", bn: "শিষ্টাচার, প্রণাম" }, strokes: 5, examples: [
                        { word: "失礼", reading: "しつれい", meanings: { en: "rudeness, excuse me", bn: "অভদ্রতা, মাফ করবেন" } },
                        { word: "お礼", reading: "おれい", meanings: { en: "thanks, gratitude", bn: "কৃতজ্ঞতা" } },
                        { word: "礼儀", reading: "れいぎ", meanings: { en: "manners, etiquette", bn: "শিষ্টাচার" } }
                    ], exampleSentence: { jp: "お礼を言いたいです。", reading: "おれいをいいたいです。", meanings: { en: "I want to say thank you.", bn: "আমি ধন্যবাদ জানাতে চাই।" } } },
                    { char: "敬", on: "ケイ", kun: "うやま(う)", meanings: { en: "respect, honor", bn: "শ্রদ্ধা করা" }, strokes: 12, examples: [
                        { word: "尊敬", reading: "そんけい", meanings: { en: "respect", bn: "শ্রদ্ধা" } },
                        { word: "敬語", reading: "けいご", meanings: { en: "honorific language", bn: "সম্মানসূচক ভাষা" } },
                        { word: "敬う", reading: "うやまう", meanings: { en: "to respect, revere", bn: "শ্রদ্ধা করা" } }
                    ], exampleSentence: { jp: "先生を尊敬しています。", reading: "せんせいをそんけいしています。", meanings: { en: "I respect my teacher.", bn: "আমি আমার শিক্ষককে শ্রদ্ধা করি।" } } },
                    { char: "祝", on: "シュク", kun: "いわ(う)", meanings: { en: "celebrate", bn: "উদযাপন করা" }, strokes: 9, examples: [
                        { word: "祝う", reading: "いわう", meanings: { en: "to celebrate", bn: "উদযাপন করা" } },
                        { word: "お祝い", reading: "おいわい", meanings: { en: "celebration, congratulation", bn: "উদযাপন" } },
                        { word: "祝日", reading: "しゅくじつ", meanings: { en: "national holiday", bn: "জাতীয় ছুটির দিন" } }
                    ], exampleSentence: { jp: "誕生日を祝いましょう。", reading: "たんじょうびをいわいましょう。", meanings: { en: "Let's celebrate the birthday.", bn: "চলুন জন্মদিন উদযাপন করি।" } } },
                    { char: "念", on: "ネン", kun: "", meanings: { en: "sense, thought, concern", bn: "ভাবনা, উদ্বেগ" }, strokes: 8, examples: [
                        { word: "残念", reading: "ざんねん", meanings: { en: "regrettable, too bad", bn: "দুঃখজনক" } },
                        { word: "記念", reading: "きねん", meanings: { en: "commemoration", bn: "স্মরণ" } },
                        { word: "念のため", reading: "ねんのため", meanings: { en: "just in case", bn: "সতর্কতাবশত" } }
                    ], exampleSentence: { jp: "それは残念でしたね。", reading: "それはざんねんでしたね。", meanings: { en: "That was too bad, wasn't it?", bn: "সেটা দুঃখজনক ছিল, তাই না?" } } },
                    { char: "配", on: "ハイ", kun: "くば(る)", meanings: { en: "distribute, arrange, worry", bn: "বিতরণ করা, চিন্তা" }, strokes: 10, examples: [
                        { word: "心配", reading: "しんぱい", meanings: { en: "worry", bn: "উদ্বেগ" } },
                        { word: "配る", reading: "くばる", meanings: { en: "to distribute", bn: "বিতরণ করা" } },
                        { word: "宅配", reading: "たくはい", meanings: { en: "home delivery", bn: "বাড়িতে ডেলিভারি" } }
                    ], exampleSentence: { jp: "心配しないでください。", reading: "しんぱいしないでください。", meanings: { en: "Please don't worry.", bn: "অনুগ্রহ করে চিন্তা করবেন না।" } } },
                    { char: "勝", on: "ショウ", kun: "か(つ)", meanings: { en: "win, victory", bn: "জয়ী হওয়া" }, strokes: 12, examples: [
                        { word: "勝つ", reading: "かつ", meanings: { en: "to win", bn: "জয়ী হওয়া" } },
                        { word: "勝利", reading: "しょうり", meanings: { en: "victory", bn: "বিজয়" } },
                        { word: "決勝", reading: "けっしょう", meanings: { en: "the finals", bn: "ফাইনাল" } }
                    ], exampleSentence: { jp: "私たちのチームが勝ちました。", reading: "わたしたちのチームがかちました。", meanings: { en: "Our team won.", bn: "আমাদের দল জিতেছে।" } } },
                    { char: "負", on: "フ", kun: "ま(ける)、お(う)", meanings: { en: "lose, bear (burden)", bn: "হেরে যাওয়া, বহন করা" }, strokes: 9, examples: [
                        { word: "負ける", reading: "まける", meanings: { en: "to lose", bn: "হেরে যাওয়া" } },
                        { word: "勝負", reading: "しょうぶ", meanings: { en: "match, contest", bn: "প্রতিযোগিতা" } },
                        { word: "自負", reading: "じふ", meanings: { en: "pride, self-confidence", bn: "আত্মগর্ব" } }
                    ], exampleSentence: { jp: "試合に負けました。", reading: "しあいにまけました。", meanings: { en: "I lost the match.", bn: "আমি ম্যাচে হেরে গেছি।" } } },
                    { char: "敗", on: "ハイ", kun: "やぶ(れる)", meanings: { en: "defeat, failure", bn: "পরাজয়" }, strokes: 11, examples: [
                        { word: "失敗", reading: "しっぱい", meanings: { en: "failure", bn: "ব্যর্থতা" } },
                        { word: "敗北", reading: "はいぼく", meanings: { en: "defeat", bn: "পরাজয়" } },
                        { word: "勝敗", reading: "しょうはい", meanings: { en: "victory or defeat", bn: "জয়-পরাজয়" } }
                    ], exampleSentence: { jp: "計画は失敗に終わりました。", reading: "けいかくはしっぱいにおわりました。", meanings: { en: "The plan ended in failure.", bn: "পরিকল্পনাটি ব্যর্থতায় শেষ হয়েছে।" } } }
                ]
            },

            {
                id: "traffic",
                title: "Traffic",
                items: [
                    { char: "交", on: "コウ", kun: "まじ(わる)、か(わす)", meanings: { en: "mix, exchange, cross", bn: "মিশ্রণ, বিনিময়" }, strokes: 6, examples: [
                        { word: "交通", reading: "こうつう", meanings: { en: "traffic, transportation", bn: "যানবাহন" } },
                        { word: "交差点", reading: "こうさてん", meanings: { en: "intersection", bn: "চৌরাস্তা" } },
                        { word: "交換", reading: "こうかん", meanings: { en: "exchange", bn: "বিনিময়" } }
                    ], exampleSentence: { jp: "この交差点は危ないです。", reading: "このこうさてんはあぶないです。", meanings: { en: "This intersection is dangerous.", bn: "এই চৌরাস্তাটি বিপজ্জনক।" } } },
                    { char: "点", on: "テン", kun: "", meanings: { en: "point, dot, mark (score)", bn: "বিন্দু, নম্বর" }, strokes: 9, examples: [
                        { word: "交差点", reading: "こうさてん", meanings: { en: "intersection", bn: "চৌরাস্তা" } },
                        { word: "点数", reading: "てんすう", meanings: { en: "score, points", bn: "নম্বর" } },
                        { word: "注意点", reading: "ちゅういてん", meanings: { en: "point to note", bn: "লক্ষণীয় বিষয়" } }
                    ], exampleSentence: { jp: "テストの点数がよかったです。", reading: "テストのてんすうがよかったです。", meanings: { en: "My test score was good.", bn: "আমার পরীক্ষার নম্বর ভালো ছিল।" } } },
                    { char: "路", on: "ロ", kun: "", meanings: { en: "road, route", bn: "রাস্তা" }, strokes: 13, examples: [
                        { word: "道路", reading: "どうろ", meanings: { en: "road", bn: "রাস্তা" } },
                        { word: "線路", reading: "せんろ", meanings: { en: "railway track", bn: "রেললাইন" } },
                        { word: "通路", reading: "つうろ", meanings: { en: "passage, aisle", bn: "পথ" } }
                    ], exampleSentence: { jp: "この道路はいつも混んでいます。", reading: "このどうろはいつもこんでいます。", meanings: { en: "This road is always crowded.", bn: "এই রাস্তাটি সবসময় ভিড়পূর্ণ থাকে।" } } },
                    { char: "横", on: "オウ", kun: "よこ", meanings: { en: "side, horizontal", bn: "পাশ, আনুভূমিক" }, strokes: 15, examples: [
                        { word: "横", reading: "よこ", meanings: { en: "side, next to", bn: "পাশে" } },
                        { word: "横断", reading: "おうだん", meanings: { en: "crossing (a road)", bn: "রাস্তা পারাপার" } },
                        { word: "横になる", reading: "よこになる", meanings: { en: "to lie down", bn: "শুয়ে পড়া" } }
                    ], exampleSentence: { jp: "駅の横に銀行があります。", reading: "えきのよこにぎんこうがあります。", meanings: { en: "There is a bank next to the station.", bn: "স্টেশনের পাশে একটি ব্যাংক আছে।" } } },
                    { char: "断", on: "ダン", kun: "ことわ(る)、た(つ)", meanings: { en: "cut off, refuse, decide", bn: "কাটা, প্রত্যাখ্যান করা" }, strokes: 11, examples: [
                        { word: "横断", reading: "おうだん", meanings: { en: "crossing (a road)", bn: "রাস্তা পারাপার" } },
                        { word: "断る", reading: "ことわる", meanings: { en: "to refuse, decline", bn: "প্রত্যাখ্যান করা" } },
                        { word: "判断", reading: "はんだん", meanings: { en: "judgment, decision", bn: "বিচার-বিবেচনা" } }
                    ], exampleSentence: { jp: "その誘いを断りました。", reading: "そのさそいをことわりました。", meanings: { en: "I declined that invitation.", bn: "আমি সেই আমন্ত্রণ প্রত্যাখ্যান করেছি।" } } },
                    { char: "駐", on: "チュウ", kun: "", meanings: { en: "stop, station (vehicle)", bn: "গাড়ি রাখা" }, strokes: 15, examples: [
                        { word: "駐車", reading: "ちゅうしゃ", meanings: { en: "parking", bn: "গাড়ি পার্কিং" } },
                        { word: "駐車場", reading: "ちゅうしゃじょう", meanings: { en: "parking lot", bn: "পার্কিং লট" } },
                        { word: "駐在", reading: "ちゅうざい", meanings: { en: "residency, stationing", bn: "অবস্থান" } }
                    ], exampleSentence: { jp: "ここに駐車できません。", reading: "ここにちゅうしゃできません。", meanings: { en: "You cannot park here.", bn: "এখানে গাড়ি পার্ক করা যাবে না।" } } },
                    { char: "停", on: "テイ", kun: "", meanings: { en: "stop, halt", bn: "থামা" }, strokes: 11, examples: [
                        { word: "停止", reading: "ていし", meanings: { en: "stop, halt", bn: "থামা" } },
                        { word: "停車", reading: "ていしゃ", meanings: { en: "stopping (a vehicle)", bn: "গাড়ি থামানো" } },
                        { word: "バス停", reading: "バスてい", meanings: { en: "bus stop", bn: "বাস স্টপ" } }
                    ], exampleSentence: { jp: "バス停で待っています。", reading: "バスていでまっています。", meanings: { en: "I am waiting at the bus stop.", bn: "আমি বাস স্টপে অপেক্ষা করছি।" } } },
                    { char: "追", on: "ツイ", kun: "お(う)", meanings: { en: "chase, follow, additional", bn: "তাড়া করা, অতিরিক্ত" }, strokes: 9, examples: [
                        { word: "追う", reading: "おう", meanings: { en: "to chase, pursue", bn: "তাড়া করা" } },
                        { word: "追加", reading: "ついか", meanings: { en: "addition", bn: "সংযোজন" } },
                        { word: "追い越す", reading: "おいこす", meanings: { en: "to overtake", bn: "অতিক্রম করা" } }
                    ], exampleSentence: { jp: "追加の料金がかかります。", reading: "ついかのりょうきんがかかります。", meanings: { en: "There is an additional charge.", bn: "অতিরিক্ত মূল্য দিতে হবে।" } } },
                    { char: "禁", on: "キン", kun: "", meanings: { en: "prohibit", bn: "নিষিদ্ধ করা" }, strokes: 13, examples: [
                        { word: "禁止", reading: "きんし", meanings: { en: "prohibition", bn: "নিষেধাজ্ঞা" } },
                        { word: "禁煙", reading: "きんえん", meanings: { en: "no smoking", bn: "ধূমপান নিষেধ" } },
                        { word: "立入禁止", reading: "たちいりきんし", meanings: { en: "no entry", bn: "প্রবেশ নিষেধ" } }
                    ], exampleSentence: { jp: "ここは駐車禁止です。", reading: "ここはちゅうしゃきんしです。", meanings: { en: "Parking is prohibited here.", bn: "এখানে গাড়ি পার্কিং নিষিদ্ধ।" } } },
                    { char: "緑", on: "リョク", kun: "みどり", meanings: { en: "green", bn: "সবুজ" }, strokes: 14, examples: [
                        { word: "緑", reading: "みどり", meanings: { en: "green (color)", bn: "সবুজ" } },
                        { word: "緑茶", reading: "りょくちゃ", meanings: { en: "green tea", bn: "সবুজ চা" } },
                        { word: "緑色", reading: "みどりいろ", meanings: { en: "green color", bn: "সবুজ রঙ" } }
                    ], exampleSentence: { jp: "信号が緑になりました。", reading: "しんごうがみどりになりました。", meanings: { en: "The traffic light turned green.", bn: "সিগন্যাল সবুজ হয়ে গেছে।" } } },
                    { char: "黄", on: "オウ、コウ", kun: "き", meanings: { en: "yellow", bn: "হলুদ" }, strokes: 11, examples: [
                        { word: "黄色", reading: "きいろ", meanings: { en: "yellow color", bn: "হলুদ রঙ" } },
                        { word: "黄信号", reading: "きしんごう", meanings: { en: "yellow (traffic) light", bn: "হলুদ সিগন্যাল" } },
                        { word: "黄金", reading: "おうごん", meanings: { en: "gold, golden", bn: "সোনালি" } }
                    ], exampleSentence: { jp: "黄色い花が咲いています。", reading: "きいろいはながさいています。", meanings: { en: "Yellow flowers are blooming.", bn: "হলুদ ফুল ফুটছে।" } } },
                    { char: "改", on: "カイ", kun: "あらた(める)", meanings: { en: "reform, revise", bn: "সংশোধন করা" }, strokes: 7, examples: [
                        { word: "改札", reading: "かいさつ", meanings: { en: "ticket gate", bn: "টিকিট গেট" } },
                        { word: "改善", reading: "かいぜん", meanings: { en: "improvement", bn: "উন্নতি" } },
                        { word: "改める", reading: "あらためる", meanings: { en: "to revise, correct", bn: "সংশোধন করা" } }
                    ], exampleSentence: { jp: "改札口で待っています。", reading: "かいさつぐちでまっています。", meanings: { en: "I am waiting at the ticket gate.", bn: "আমি টিকিট গেটে অপেক্ষা করছি।" } } },
                    { char: "札", on: "サツ", kun: "ふだ", meanings: { en: "ticket, sign, bill (money)", bn: "টিকিট, নোট" }, strokes: 5, examples: [
                        { word: "改札", reading: "かいさつ", meanings: { en: "ticket gate", bn: "টিকিট গেট" } },
                        { word: "千円札", reading: "せんえんさつ", meanings: { en: "1000 yen bill", bn: "১০০০ ইয়েনের নোট" } },
                        { word: "名札", reading: "なふだ", meanings: { en: "name tag", bn: "নামফলক" } }
                    ], exampleSentence: { jp: "千円札はありますか。", reading: "せんえんさつはありますか。", meanings: { en: "Do you have a 1000 yen bill?", bn: "আপনার কাছে ১০০০ ইয়েনের নোট আছে?" } } },
                    { char: "換", on: "カン", kun: "か(える)", meanings: { en: "exchange, replace", bn: "বিনিময় করা" }, strokes: 12, examples: [
                        { word: "交換", reading: "こうかん", meanings: { en: "exchange", bn: "বিনিময়" } },
                        { word: "乗り換え", reading: "のりかえ", meanings: { en: "transfer (transport)", bn: "বাহন পরিবর্তন" } },
                        { word: "両替", reading: "りょうがえ", meanings: { en: "currency exchange", bn: "মুদ্রা বিনিময়" } }
                    ], exampleSentence: { jp: "次の駅で乗り換えます。", reading: "つぎのえきでのりかえます。", meanings: { en: "I will transfer at the next station.", bn: "আমি পরবর্তী স্টেশনে বাহন পরিবর্তন করব।" } } },
                    { char: "指", on: "シ", kun: "ゆび、さ(す)", meanings: { en: "finger, point at", bn: "আঙুল, নির্দেশ করা" }, strokes: 9, examples: [
                        { word: "指", reading: "ゆび", meanings: { en: "finger", bn: "আঙুল" } },
                        { word: "指定席", reading: "していせき", meanings: { en: "reserved seat", bn: "সংরক্ষিত আসন" } },
                        { word: "指す", reading: "さす", meanings: { en: "to point at", bn: "নির্দেশ করা" } }
                    ], exampleSentence: { jp: "指定席を予約しました。", reading: "していせきをよやくしました。", meanings: { en: "I reserved a seat.", bn: "আমি একটি সংরক্ষিত আসন বুক করেছি।" } } },
                    { char: "由", on: "ユ、ユウ", kun: "よし", meanings: { en: "reason, cause, origin", bn: "কারণ, উৎস" }, strokes: 5, examples: [
                        { word: "自由", reading: "じゆう", meanings: { en: "freedom", bn: "স্বাধীনতা" } },
                        { word: "理由", reading: "りゆう", meanings: { en: "reason", bn: "কারণ" } },
                        { word: "由来", reading: "ゆらい", meanings: { en: "origin, derivation", bn: "উৎপত্তি" } }
                    ], exampleSentence: { jp: "理由を教えてください。", reading: "りゆうをおしえてください。", meanings: { en: "Please tell me the reason.", bn: "অনুগ্রহ করে কারণটি বলুন।" } } },
                    { char: "窓", on: "ソウ", kun: "まど", meanings: { en: "window", bn: "জানালা" }, strokes: 11, examples: [
                        { word: "窓", reading: "まど", meanings: { en: "window", bn: "জানালা" } },
                        { word: "窓口", reading: "まどぐち", meanings: { en: "counter, window (service)", bn: "সেবা কাউন্টার" } },
                        { word: "車窓", reading: "しゃそう", meanings: { en: "car/train window", bn: "গাড়ির জানালা" } }
                    ], exampleSentence: { jp: "窓を開けてください。", reading: "まどをあけてください。", meanings: { en: "Please open the window.", bn: "অনুগ্রহ করে জানালাটি খুলুন।" } } },
                    { char: "側", on: "ソク", kun: "がわ", meanings: { en: "side", bn: "পাশ" }, strokes: 11, examples: [
                        { word: "右側", reading: "みぎがわ", meanings: { en: "right side", bn: "ডান পাশ" } },
                        { word: "内側", reading: "うちがわ", meanings: { en: "inside", bn: "ভেতরের দিক" } },
                        { word: "側面", reading: "そくめん", meanings: { en: "side, aspect", bn: "পার্শ্ব" } }
                    ], exampleSentence: { jp: "右側を歩いてください。", reading: "みぎがわをあるいてください。", meanings: { en: "Please walk on the right side.", bn: "অনুগ্রহ করে ডান পাশ দিয়ে হাঁটুন।" } } },
                    { char: "列", on: "レツ", kun: "", meanings: { en: "row, line, queue", bn: "সারি, লাইন" }, strokes: 6, examples: [
                        { word: "列", reading: "れつ", meanings: { en: "row, queue", bn: "সারি" } },
                        { word: "行列", reading: "ぎょうれつ", meanings: { en: "queue, procession", bn: "লাইন" } },
                        { word: "新幹線", reading: "しんかんせん", meanings: { en: "bullet train", bn: "বুলেট ট্রেন" } }
                    ], exampleSentence: { jp: "切符を買うために並んでいます。", reading: "きっぷをかうためにならんでいます。", meanings: { en: "I am lining up to buy a ticket.", bn: "টিকিট কেনার জন্য আমি লাইনে দাঁড়িয়ে আছি।" } } },
                    { char: "飛", on: "ヒ", kun: "と(ぶ)", meanings: { en: "fly", bn: "উড়া" }, strokes: 9, examples: [
                        { word: "飛行機", reading: "ひこうき", meanings: { en: "airplane", bn: "বিমান" } },
                        { word: "飛ぶ", reading: "とぶ", meanings: { en: "to fly", bn: "উড়া" } },
                        { word: "飛行場", reading: "ひこうじょう", meanings: { en: "airfield", bn: "বিমানক্ষেত্র" } }
                    ], exampleSentence: { jp: "飛行機で日本へ行きます。", reading: "ひこうきでにほんへいきます。", meanings: { en: "I will go to Japan by airplane.", bn: "আমি বিমানে জাপান যাব।" } } },
                    { char: "機", on: "キ", kun: "", meanings: { en: "machine, opportunity", bn: "যন্ত্র, সুযোগ" }, strokes: 16, examples: [
                        { word: "飛行機", reading: "ひこうき", meanings: { en: "airplane", bn: "বিমান" } },
                        { word: "機会", reading: "きかい", meanings: { en: "opportunity, chance", bn: "সুযোগ" } },
                        { word: "洗濯機", reading: "せんたくき", meanings: { en: "washing machine", bn: "ওয়াশিং মেশিন" } }
                    ], exampleSentence: { jp: "いい機会だと思います。", reading: "いいきかいだとおもいます。", meanings: { en: "I think it's a good opportunity.", bn: "আমি মনে করি এটা একটা ভালো সুযোগ।" } } },
                    { char: "到", on: "トウ", kun: "", meanings: { en: "arrive", bn: "পৌঁছানো" }, strokes: 8, examples: [
                        { word: "到着", reading: "とうちゃく", meanings: { en: "arrival", bn: "আগমন" } },
                        { word: "到達", reading: "とうたつ", meanings: { en: "reaching, attaining", bn: "পৌঁছানো" } },
                        { word: "殺到", reading: "さっとう", meanings: { en: "rush, flood (of people)", bn: "ভিড় জমানো" } }
                    ], exampleSentence: { jp: "電車は九時に到着します。", reading: "でんしゃはくじにとうちゃくします。", meanings: { en: "The train will arrive at nine o'clock.", bn: "ট্রেনটি নয়টায় পৌঁছাবে।" } } },
                    { char: "迎", on: "ゲイ", kun: "むか(える)", meanings: { en: "welcome, greet, pick up", bn: "স্বাগত জানানো" }, strokes: 7, examples: [
                        { word: "迎える", reading: "むかえる", meanings: { en: "to welcome, greet, pick up", bn: "স্বাগত জানানো" } },
                        { word: "出迎え", reading: "でむかえ", meanings: { en: "greeting, reception", bn: "অভ্যর্থনা" } },
                        { word: "歓迎", reading: "かんげい", meanings: { en: "welcome", bn: "স্বাগত" } }
                    ], exampleSentence: { jp: "空港まで迎えに行きます。", reading: "くうこうまでむかえにいきます。", meanings: { en: "I will go to pick you up at the airport.", bn: "আমি বিমানবন্দরে আপনাকে নিতে যাব।" } } },
                    { char: "速", on: "ソク", kun: "はや(い)", meanings: { en: "fast, speed", bn: "দ্রুত, গতি" }, strokes: 10, examples: [
                        { word: "速い", reading: "はやい", meanings: { en: "fast", bn: "দ্রুত" } },
                        { word: "速度", reading: "そくど", meanings: { en: "speed", bn: "গতি" } },
                        { word: "高速道路", reading: "こうそくどうろ", meanings: { en: "highway, expressway", bn: "মহাসড়ক" } }
                    ], exampleSentence: { jp: "この電車は速いです。", reading: "このでんしゃははやいです。", meanings: { en: "This train is fast.", bn: "এই ট্রেনটি দ্রুতগতির।" } } }
                ]
            },

            {
                id: "school",
                title: "School",
                items: [
                    { char: "授", on: "ジュ", kun: "さず(ける)", meanings: { en: "instruct, grant", bn: "শিক্ষা দেওয়া" }, strokes: 11, examples: [
                        { word: "授業", reading: "じゅぎょう", meanings: { en: "class, lesson", bn: "ক্লাস" } },
                        { word: "教授", reading: "きょうじゅ", meanings: { en: "professor", bn: "অধ্যাপক" } },
                        { word: "授かる", reading: "さずかる", meanings: { en: "to be granted, blessed with", bn: "লাভ করা" } }
                    ], exampleSentence: { jp: "授業に出ます。", reading: "じゅぎょうにでます。", meanings: { en: "I will attend class.", bn: "আমি ক্লাসে যোগ দেব।" } } },
                    { char: "欠", on: "ケツ", kun: "か(ける)、か(く)", meanings: { en: "lack, absence", bn: "অভাব, অনুপস্থিতি" }, strokes: 4, examples: [
                        { word: "欠席", reading: "けっせき", meanings: { en: "absence (from a class/event)", bn: "অনুপস্থিতি" } },
                        { word: "欠点", reading: "けってん", meanings: { en: "fault, weak point", bn: "ত্রুটি" } },
                        { word: "欠かす", reading: "かかす", meanings: { en: "to miss, omit", bn: "বাদ দেওয়া" } }
                    ], exampleSentence: { jp: "今日は授業を欠席しました。", reading: "きょうはじゅぎょうをけっせきしました。", meanings: { en: "I was absent from class today.", bn: "আজ আমি ক্লাসে অনুপস্থিত ছিলাম।" } } },
                    { char: "成", on: "セイ", kun: "な(る)", meanings: { en: "become, achieve", bn: "হওয়া, অর্জন করা" }, strokes: 6, examples: [
                        { word: "成績", reading: "せいせき", meanings: { en: "grades, results", bn: "ফলাফল" } },
                        { word: "成功", reading: "せいこう", meanings: { en: "success", bn: "সফলতা" } },
                        { word: "完成", reading: "かんせい", meanings: { en: "completion", bn: "সমাপ্তি" } }
                    ], exampleSentence: { jp: "成績がよくなりました。", reading: "せいせきがよくなりました。", meanings: { en: "My grades have improved.", bn: "আমার ফলাফল ভালো হয়েছে।" } } },
                    { char: "績", on: "セキ", kun: "", meanings: { en: "achievement, results", bn: "অর্জন, ফলাফল" }, strokes: 17, examples: [
                        { word: "成績", reading: "せいせき", meanings: { en: "grades, results", bn: "ফলাফল" } },
                        { word: "業績", reading: "ぎょうせき", meanings: { en: "achievements, performance", bn: "কর্মদক্ষতা" } },
                        { word: "実績", reading: "じっせき", meanings: { en: "track record", bn: "প্রকৃত ফলাফল" } }
                    ], exampleSentence: { jp: "会社の業績が上がりました。", reading: "かいしゃのぎょうせきがあがりました。", meanings: { en: "The company's performance has improved.", bn: "কোম্পানির কর্মদক্ষতা বৃদ্ধি পেয়েছে।" } } },
                    { char: "実", on: "ジツ", kun: "み、みの(る)", meanings: { en: "truth, reality, fruit", bn: "সত্য, ফল" }, strokes: 8, examples: [
                        { word: "実は", reading: "じつは", meanings: { en: "actually, in fact", bn: "আসলে" } },
                        { word: "実際", reading: "じっさい", meanings: { en: "actual, in reality", bn: "বাস্তবে" } },
                        { word: "現実", reading: "げんじつ", meanings: { en: "reality", bn: "বাস্তবতা" } }
                    ], exampleSentence: { jp: "実は、彼は知っていました。", reading: "じつは、かれはしっていました。", meanings: { en: "Actually, he knew.", bn: "আসলে, সে জানত।" } } },
                    { char: "卒", on: "ソツ", kun: "", meanings: { en: "graduate", bn: "স্নাতক" }, strokes: 9, examples: [
                        { word: "卒業", reading: "そつぎょう", meanings: { en: "graduation", bn: "স্নাতক সমাপন" } },
                        { word: "新卒", reading: "しんそつ", meanings: { en: "new graduate", bn: "নতুন স্নাতক" } },
                        { word: "卒業式", reading: "そつぎょうしき", meanings: { en: "graduation ceremony", bn: "সমাবর্তন অনুষ্ঠান" } }
                    ], exampleSentence: { jp: "来年卒業します。", reading: "らいねんそつぎょうします。", meanings: { en: "I will graduate next year.", bn: "আমি আগামী বছর স্নাতক সম্পন্ন করব।" } } },
                    { char: "得", on: "トク", kun: "え(る)", meanings: { en: "gain, profit, good at", bn: "লাভ করা" }, strokes: 11, examples: [
                        { word: "得意", reading: "とくい", meanings: { en: "strong point, good at", bn: "দক্ষতা" } },
                        { word: "得る", reading: "える", meanings: { en: "to gain, obtain", bn: "অর্জন করা" } },
                        { word: "納得", reading: "なっとく", meanings: { en: "understanding, agreement", bn: "সম্মতি" } }
                    ], exampleSentence: { jp: "料理が得意です。", reading: "りょうりがとくいです。", meanings: { en: "I am good at cooking.", bn: "আমি রান্নায় দক্ষ।" } } },
                    { char: "歴", on: "レキ", kun: "", meanings: { en: "history, experience", bn: "ইতিহাস" }, strokes: 14, examples: [
                        { word: "歴史", reading: "れきし", meanings: { en: "history", bn: "ইতিহাস" } },
                        { word: "経歴", reading: "けいれき", meanings: { en: "career history", bn: "কর্মজীবনের ইতিহাস" } },
                        { word: "履歴書", reading: "りれきしょ", meanings: { en: "resume, CV", bn: "জীবনবৃত্তান্ত" } }
                    ], exampleSentence: { jp: "日本の歴史について調べています。", reading: "にほんのれきしについてしらべています。", meanings: { en: "I am researching about Japanese history.", bn: "আমি জাপানের ইতিহাস নিয়ে গবেষণা করছি।" } } },
                    { char: "史", on: "シ", kun: "", meanings: { en: "history", bn: "ইতিহাস" }, strokes: 5, examples: [
                        { word: "歴史", reading: "れきし", meanings: { en: "history", bn: "ইতিহাস" } },
                        { word: "世界史", reading: "せかいし", meanings: { en: "world history", bn: "বিশ্ব ইতিহাস" } },
                        { word: "日本史", reading: "にほんし", meanings: { en: "Japanese history (subject)", bn: "জাপানি ইতিহাস" } }
                    ], exampleSentence: { jp: "日本史が好きです。", reading: "にほんしがすきです。", meanings: { en: "I like Japanese history.", bn: "আমার জাপানি ইতিহাস পছন্দ।" } } },
                    { char: "宿", on: "シュク", kun: "やど", meanings: { en: "lodging, inn", bn: "থাকার জায়গা" }, strokes: 11, examples: [
                        { word: "宿題", reading: "しゅくだい", meanings: { en: "homework", bn: "বাড়ির কাজ" } },
                        { word: "宿", reading: "やど", meanings: { en: "lodging, inn", bn: "সরাইখানা" } },
                        { word: "宿泊", reading: "しゅくはく", meanings: { en: "lodging, staying overnight", bn: "রাত্রিযাপন" } }
                    ], exampleSentence: { jp: "宿題はもう済みました。", reading: "しゅくだいはもうすみました。", meanings: { en: "The homework is already finished.", bn: "বাড়ির কাজ ইতিমধ্যে শেষ হয়েছে।" } } },
                    { char: "球", on: "キュウ", kun: "たま", meanings: { en: "ball, sphere", bn: "বল, গোলক" }, strokes: 11, examples: [
                        { word: "野球", reading: "やきゅう", meanings: { en: "baseball", bn: "বেসবল" } },
                        { word: "地球", reading: "ちきゅう", meanings: { en: "earth, globe", bn: "পৃথিবী" } },
                        { word: "電球", reading: "でんきゅう", meanings: { en: "light bulb", bn: "বাল্ব" } }
                    ], exampleSentence: { jp: "地球を守りましょう。", reading: "ちきゅうをまもりましょう。", meanings: { en: "Let's protect the earth.", bn: "চলুন পৃথিবীকে রক্ষা করি।" } } },
                    { char: "章", on: "ショウ", kun: "", meanings: { en: "chapter, badge", bn: "অধ্যায়, ব্যাজ" }, strokes: 11, examples: [
                        { word: "文章", reading: "ぶんしょう", meanings: { en: "sentence, writing", bn: "রচনা" } },
                        { word: "第一章", reading: "だいいっしょう", meanings: { en: "chapter one", bn: "প্রথম অধ্যায়" } },
                        { word: "勲章", reading: "くんしょう", meanings: { en: "medal, decoration", bn: "পদক" } }
                    ], exampleSentence: { jp: "この文章を読んでください。", reading: "このぶんしょうをよんでください。", meanings: { en: "Please read this sentence/passage.", bn: "অনুগ্রহ করে এই রচনাটি পড়ুন।" } } },
                    { char: "解", on: "カイ", kun: "と(く)、と(ける)", meanings: { en: "solve, understand, dissolve", bn: "সমাধান করা, বোঝা" }, strokes: 13, examples: [
                        { word: "正解", reading: "せいかい", meanings: { en: "correct answer", bn: "সঠিক উত্তর" } },
                        { word: "理解", reading: "りかい", meanings: { en: "understanding", bn: "বোঝা" } },
                        { word: "解く", reading: "とく", meanings: { en: "to solve", bn: "সমাধান করা" } }
                    ], exampleSentence: { jp: "この問題を解いてください。", reading: "このもんだいをといてください。", meanings: { en: "Please solve this problem.", bn: "অনুগ্রহ করে এই সমস্যাটি সমাধান করুন।" } } },
                    { char: "例", on: "レイ", kun: "たと(えば)", meanings: { en: "example", bn: "উদাহরণ" }, strokes: 8, examples: [
                        { word: "例えば", reading: "たとえば", meanings: { en: "for example", bn: "উদাহরণস্বরূপ" } },
                        { word: "例文", reading: "れいぶん", meanings: { en: "example sentence", bn: "উদাহরণ বাক্য" } },
                        { word: "例外", reading: "れいがい", meanings: { en: "exception", bn: "ব্যতিক্রম" } }
                    ], exampleSentence: { jp: "例えば、りんごやみかんです。", meanings: { en: "For example, apples and oranges.", bn: "উদাহরণস্বরূপ, আপেল এবং কমলা।" } } },
                    { char: "辞", on: "ジ", kun: "や(める)", meanings: { en: "resign, word, decline", bn: "পদত্যাগ করা, শব্দ" }, strokes: 13, examples: [
                        { word: "辞書", reading: "じしょ", meanings: { en: "dictionary", bn: "অভিধান" } },
                        { word: "辞める", reading: "やめる", meanings: { en: "to resign, quit", bn: "পদত্যাগ করা" } },
                        { word: "辞退", reading: "じたい", meanings: { en: "declining, refusal", bn: "প্রত্যাখ্যান" } }
                    ], exampleSentence: { jp: "辞書を使います。", reading: "じしょをつかいます。", meanings: { en: "I will use a dictionary.", bn: "আমি একটি অভিধান ব্যবহার করব।" } } },
                    { char: "違", on: "イ", kun: "ちが(う)", meanings: { en: "differ, wrong", bn: "ভিন্ন হওয়া" }, strokes: 13, examples: [
                        { word: "違う", reading: "ちがう", meanings: { en: "to differ, be wrong", bn: "ভিন্ন হওয়া" } },
                        { word: "間違い", reading: "まちがい", meanings: { en: "mistake", bn: "ভুল" } },
                        { word: "違反", reading: "いはん", meanings: { en: "violation", bn: "লঙ্ঘন" } }
                    ], exampleSentence: { jp: "それは違います。", reading: "それはちがいます。", meanings: { en: "That is wrong/different.", bn: "সেটা ভুল।" } } },
                    { char: "疑", on: "ギ", kun: "うたが(う)", meanings: { en: "doubt, suspect", bn: "সন্দেহ করা" }, strokes: 14, examples: [
                        { word: "疑問", reading: "ぎもん", meanings: { en: "question, doubt", bn: "সন্দেহ" } },
                        { word: "疑う", reading: "うたがう", meanings: { en: "to doubt, suspect", bn: "সন্দেহ করা" } },
                        { word: "質疑", reading: "しつぎ", meanings: { en: "questions and answers", bn: "প্রশ্নোত্তর" } }
                    ], exampleSentence: { jp: "その説明に疑問があります。", reading: "そのせつめいにぎもんがあります。", meanings: { en: "I have doubts about that explanation.", bn: "সেই ব্যাখ্যা নিয়ে আমার সন্দেহ আছে।" } } },
                    { char: "草", on: "ソウ", kun: "くさ", meanings: { en: "grass", bn: "ঘাস" }, strokes: 9, examples: [
                        { word: "草", reading: "くさ", meanings: { en: "grass", bn: "ঘাস" } },
                        { word: "海草", reading: "かいそう", meanings: { en: "seaweed", bn: "সামুদ্রিক শৈবাল" } },
                        { word: "草原", reading: "そうげん", meanings: { en: "grassland, prairie", bn: "তৃণভূমি" } }
                    ], exampleSentence: { jp: "庭に草が生えています。", reading: "にわにくさがはえています。", meanings: { en: "Grass is growing in the garden.", bn: "বাগানে ঘাস গজিয়েছে।" } } },
                    { char: "葉", on: "ヨウ", kun: "は", meanings: { en: "leaf", bn: "পাতা" }, strokes: 12, examples: [
                        { word: "葉", reading: "は", meanings: { en: "leaf", bn: "পাতা" } },
                        { word: "紅葉", reading: "こうよう", meanings: { en: "autumn leaves", bn: "শরৎকালীন রঙিন পাতা" } },
                        { word: "言葉", reading: "ことば", meanings: { en: "word, language", bn: "শব্দ, ভাষা" } }
                    ], exampleSentence: { jp: "秋には紅葉がきれいです。", reading: "あきにはこうようがきれいです。", meanings: { en: "The autumn leaves are beautiful in fall.", bn: "শরৎকালে রঙিন পাতা সুন্দর দেখায়।" } } },
                    { char: "根", on: "コン", kun: "ね", meanings: { en: "root", bn: "মূল" }, strokes: 10, examples: [
                        { word: "根", reading: "ね", meanings: { en: "root", bn: "মূল" } },
                        { word: "屋根", reading: "やね", meanings: { en: "roof", bn: "ছাদ" } },
                        { word: "根本", reading: "こんぽん", meanings: { en: "fundamental, root cause", bn: "মূলগত" } }
                    ], exampleSentence: { jp: "木の根が深いです。", reading: "きのねがふかいです。", meanings: { en: "The tree's roots are deep.", bn: "গাছের মূল গভীর।" } } },
                    { char: "虫", on: "チュウ", kun: "むし", meanings: { en: "insect, bug", bn: "পোকা" }, strokes: 6, examples: [
                        { word: "虫", reading: "むし", meanings: { en: "insect, bug", bn: "পোকা" } },
                        { word: "昆虫", reading: "こんちゅう", meanings: { en: "insect", bn: "কীটপতঙ্গ" } },
                        { word: "虫歯", reading: "むしば", meanings: { en: "cavity (tooth)", bn: "দাঁতে পোকা" } }
                    ], exampleSentence: { jp: "夏は虫が多いです。", reading: "なつはむしがおおいです。", meanings: { en: "There are many insects in summer.", bn: "গ্রীষ্মে অনেক পোকামাকড় থাকে।" } } },
                    { char: "植", on: "ショク", kun: "う(える)", meanings: { en: "plant", bn: "রোপণ করা" }, strokes: 12, examples: [
                        { word: "植える", reading: "うえる", meanings: { en: "to plant", bn: "রোপণ করা" } },
                        { word: "植物", reading: "しょくぶつ", meanings: { en: "plant", bn: "উদ্ভিদ" } },
                        { word: "植木", reading: "うえき", meanings: { en: "garden plant, potted tree", bn: "বাগানের গাছ" } }
                    ], exampleSentence: { jp: "庭に花を植えました。", reading: "にわにはなをうえました。", meanings: { en: "I planted flowers in the garden.", bn: "আমি বাগানে ফুল রোপণ করেছি।" } } },
                    { char: "育", on: "イク", kun: "そだ(てる)、そだ(つ)", meanings: { en: "raise, grow up", bn: "লালন-পালন করা" }, strokes: 8, examples: [
                        { word: "育てる", reading: "そだてる", meanings: { en: "to raise, bring up", bn: "লালন-পালন করা" } },
                        { word: "教育", reading: "きょういく", meanings: { en: "education", bn: "শিক্ষা" } },
                        { word: "育つ", reading: "そだつ", meanings: { en: "to grow up", bn: "বড় হওয়া" } }
                    ], exampleSentence: { jp: "子供を育てています。", reading: "こどもをそだてています。", meanings: { en: "I am raising children.", bn: "আমি সন্তান লালন-পালন করছি।" } } },
                    { char: "数", on: "スウ", kun: "かず、かぞ(える)", meanings: { en: "number, count", bn: "সংখ্যা, গণনা করা" }, strokes: 13, examples: [
                        { word: "数", reading: "かず", meanings: { en: "number", bn: "সংখ্যা" } },
                        { word: "数える", reading: "かぞえる", meanings: { en: "to count", bn: "গণনা করা" } },
                        { word: "点数", reading: "てんすう", meanings: { en: "score, points", bn: "নম্বর" } }
                    ], exampleSentence: { jp: "人数を数えてください。", reading: "にんずうをかぞえてください。", meanings: { en: "Please count the number of people.", bn: "অনুগ্রহ করে মানুষের সংখ্যা গণনা করুন।" } } },
                    { char: "算", on: "サン", kun: "", meanings: { en: "calculate", bn: "গণনা করা" }, strokes: 14, examples: [
                        { word: "計算", reading: "けいさん", meanings: { en: "calculation", bn: "হিসাব" } },
                        { word: "予算", reading: "よさん", meanings: { en: "budget", bn: "বাজেট" } },
                        { word: "算数", reading: "さんすう", meanings: { en: "arithmetic (subject)", bn: "গণিত" } }
                    ], exampleSentence: { jp: "計算が苦手です。", reading: "けいさんがにがてです。", meanings: { en: "I am not good at calculation.", bn: "আমি হিসাবে দুর্বল।" } } },
                    { char: "単", on: "タン", kun: "", meanings: { en: "single, simple", bn: "একক, সরল" }, strokes: 9, examples: [
                        { word: "簡単", reading: "かんたん", meanings: { en: "simple, easy", bn: "সহজ" } },
                        { word: "単語", reading: "たんご", meanings: { en: "word, vocabulary", bn: "শব্দ" } },
                        { word: "単純", reading: "たんじゅん", meanings: { en: "simple", bn: "সরল" } }
                    ], exampleSentence: { jp: "新しい単語を覚えました。", reading: "あたらしいたんごをおぼえました。", meanings: { en: "I memorized a new word.", bn: "আমি একটি নতুন শব্দ মুখস্থ করেছি।" } } },
                    { char: "複", on: "フク", kun: "", meanings: { en: "multiple, duplicate", bn: "একাধিক, নকল" }, strokes: 14, examples: [
                        { word: "複雑", reading: "ふくざつ", meanings: { en: "complicated", bn: "জটিল" } },
                        { word: "複数", reading: "ふくすう", meanings: { en: "plural, multiple", bn: "একাধিক" } },
                        { word: "複写", reading: "ふくしゃ", meanings: { en: "copy, duplication", bn: "প্রতিলিপি" } }
                    ], exampleSentence: { jp: "この問題は複雑です。", reading: "このもんだいはふくざつです。", meanings: { en: "This problem is complicated.", bn: "এই সমস্যাটি জটিল।" } } },
                    { char: "復", on: "フク", kun: "", meanings: { en: "return, restore", bn: "প্রত্যাবর্তন" }, strokes: 12, examples: [
                        { word: "復習", reading: "ふくしゅう", meanings: { en: "review (of a lesson)", bn: "পুনরালোচনা" } },
                        { word: "回復", reading: "かいふく", meanings: { en: "recovery", bn: "পুনরুদ্ধার" } },
                        { word: "往復", reading: "おうふく", meanings: { en: "round trip", bn: "যাওয়া-আসা" } }
                    ], exampleSentence: { jp: "毎日、復習しています。", reading: "まいにち、ふくしゅうしています。", meanings: { en: "I review my lessons every day.", bn: "আমি প্রতিদিন পাঠ পুনরালোচনা করি।" } } }
                ]
            },

            {
                id: "daily-life",
                title: "Daily Life",
                items: [
                    { char: "晴", on: "セイ", kun: "は(れる)", meanings: { en: "clear weather, sunny", bn: "পরিষ্কার আবহাওয়া" }, strokes: 12, examples: [
                        { word: "晴れ", reading: "はれ", meanings: { en: "clear weather, sunny day", bn: "রৌদ্রোজ্জ্বল দিন" } },
                        { word: "晴れる", reading: "はれる", meanings: { en: "to clear up (weather)", bn: "আবহাওয়া পরিষ্কার হওয়া" } },
                        { word: "快晴", reading: "かいせい", meanings: { en: "clear sky", bn: "একেবারে পরিষ্কার আকাশ" } }
                    ], exampleSentence: { jp: "明日は晴れるでしょう。", reading: "あしたははれるでしょう。", meanings: { en: "It will probably be clear tomorrow.", bn: "আগামীকাল সম্ভবত আবহাওয়া পরিষ্কার থাকবে।" } } },
                    { char: "干", on: "カン", kun: "ほ(す)、ひ(る)", meanings: { en: "dry, dried", bn: "শুকানো" }, strokes: 3, examples: [
                        { word: "干す", reading: "ほす", meanings: { en: "to dry, air out", bn: "শুকানো" } },
                        { word: "干物", reading: "ひもの", meanings: { en: "dried fish", bn: "শুকনো মাছ" } },
                        { word: "若干", reading: "じゃっかん", meanings: { en: "somewhat, a little", bn: "কিছুটা" } }
                    ], exampleSentence: { jp: "洗濯物を外に干します。", reading: "せんたくものをそとにほします。", meanings: { en: "I will hang the laundry outside to dry.", bn: "আমি বাইরে কাপড় শুকাতে দেব।" } } },
                    { char: "汗", on: "カン", kun: "あせ", meanings: { en: "sweat", bn: "ঘাম" }, strokes: 6, examples: [
                        { word: "汗", reading: "あせ", meanings: { en: "sweat", bn: "ঘাম" } },
                        { word: "汗をかく", reading: "あせをかく", meanings: { en: "to sweat", bn: "ঘামা" } },
                        { word: "発汗", reading: "はっかん", meanings: { en: "perspiration", bn: "ঘর্মাক্ত হওয়া" } }
                    ], exampleSentence: { jp: "運動をして汗をかきました。", reading: "うんどうをしてあせをかきました。", meanings: { en: "I sweated from exercising.", bn: "ব্যায়াম করে আমি ঘেমে গিয়েছিলাম।" } } },
                    { char: "流", on: "リュウ", kun: "なが(れる)、なが(す)", meanings: { en: "flow, stream", bn: "প্রবাহিত হওয়া" }, strokes: 10, examples: [
                        { word: "流れる", reading: "ながれる", meanings: { en: "to flow", bn: "প্রবাহিত হওয়া" } },
                        { word: "流行", reading: "りゅうこう", meanings: { en: "trend, fashion", bn: "চলতি ধারা" } },
                        { word: "交流", reading: "こうりゅう", meanings: { en: "exchange, interaction", bn: "মেলামেশা" } }
                    ], exampleSentence: { jp: "川が静かに流れています。", reading: "かわがしずかにながれています。", meanings: { en: "The river flows quietly.", bn: "নদীটি শান্তভাবে প্রবাহিত হচ্ছে।" } } },
                    { char: "収", on: "シュウ", kun: "おさ(める)", meanings: { en: "obtain, receive, store", bn: "গ্রহণ করা, সংগ্রহ" }, strokes: 4, examples: [
                        { word: "収入", reading: "しゅうにゅう", meanings: { en: "income", bn: "আয়" } },
                        { word: "収集", reading: "しゅうしゅう", meanings: { en: "collection", bn: "সংগ্রহ" } },
                        { word: "収める", reading: "おさめる", meanings: { en: "to obtain, store", bn: "সংরক্ষণ করা" } }
                    ], exampleSentence: { jp: "収入が増えました。", reading: "しゅうにゅうがふえました。", meanings: { en: "My income has increased.", bn: "আমার আয় বেড়েছে।" } } },
                    { char: "容", on: "ヨウ", kun: "", meanings: { en: "contain, form, appearance", bn: "ধারণ করা, রূপ" }, strokes: 10, examples: [
                        { word: "内容", reading: "ないよう", meanings: { en: "content, substance", bn: "বিষয়বস্তু" } },
                        { word: "容器", reading: "ようき", meanings: { en: "container", bn: "পাত্র" } },
                        { word: "美容院", reading: "びよういん", meanings: { en: "beauty salon", bn: "সৌন্দর্য সেলুন" } }
                    ], exampleSentence: { jp: "手紙の内容を教えてください。", reading: "てがみのないようをおしえてください。", meanings: { en: "Please tell me the content of the letter.", bn: "অনুগ্রহ করে চিঠির বিষয়বস্তু জানান।" } } },
                    { char: "器", on: "キ", kun: "うつわ", meanings: { en: "container, vessel", bn: "পাত্র" }, strokes: 15, examples: [
                        { word: "容器", reading: "ようき", meanings: { en: "container", bn: "পাত্র" } },
                        { word: "食器", reading: "しょっき", meanings: { en: "tableware, dishes", bn: "খাবারের বাসনপত্র" } },
                        { word: "楽器", reading: "がっき", meanings: { en: "musical instrument", bn: "বাদ্যযন্ত্র" } }
                    ], exampleSentence: { jp: "食器を洗います。", reading: "しょっきをあらいます。", meanings: { en: "I will wash the dishes.", bn: "আমি বাসনপত্র ধোব।" } } },
                    { char: "留", on: "リュウ、ル", kun: "と(める)", meanings: { en: "stay, detain", bn: "থাকা, আটকে রাখা" }, strokes: 10, examples: [
                        { word: "留守", reading: "るす", meanings: { en: "being out/absent (from home)", bn: "বাসায় না থাকা" } },
                        { word: "留学", reading: "りゅうがく", meanings: { en: "studying abroad", bn: "বিদেশে অধ্যয়ন" } },
                        { word: "留める", reading: "とめる", meanings: { en: "to fasten, fix in place", bn: "আটকানো" } }
                    ], exampleSentence: { jp: "留学したいと思っています。", reading: "りゅうがくしたいとおもっています。", meanings: { en: "I want to study abroad.", bn: "আমি বিদেশে পড়াশোনা করতে চাই।" } } },
                    { char: "守", on: "シュ、ス", kun: "まも(る)", meanings: { en: "protect, guard", bn: "রক্ষা করা" }, strokes: 6, examples: [
                        { word: "留守", reading: "るす", meanings: { en: "being out/absent (from home)", bn: "বাসায় না থাকা" } },
                        { word: "守る", reading: "まもる", meanings: { en: "to protect, keep", bn: "রক্ষা করা" } },
                        { word: "保守", reading: "ほしゅ", meanings: { en: "conservative, maintenance", bn: "রক্ষণশীল" } }
                    ], exampleSentence: { jp: "規則を守ってください。", reading: "きそくをまもってください。", meanings: { en: "Please follow the rules.", bn: "অনুগ্রহ করে নিয়ম মেনে চলুন।" } } },
                    { char: "階", on: "カイ", kun: "", meanings: { en: "floor, story, stairs", bn: "তলা, সিঁড়ি" }, strokes: 12, examples: [
                        { word: "二階", reading: "にかい", meanings: { en: "second floor", bn: "দ্বিতীয় তলা" } },
                        { word: "階段", reading: "かいだん", meanings: { en: "stairs", bn: "সিঁড়ি" } },
                        { word: "段階", reading: "だんかい", meanings: { en: "stage, phase", bn: "পর্যায়" } }
                    ], exampleSentence: { jp: "階段を上ってください。", reading: "かいだんをのぼってください。", meanings: { en: "Please go up the stairs.", bn: "অনুগ্রহ করে সিঁড়ি দিয়ে উপরে উঠুন।" } } },
                    { char: "段", on: "ダン", kun: "", meanings: { en: "step, level, grade", bn: "ধাপ, স্তর" }, strokes: 9, examples: [
                        { word: "階段", reading: "かいだん", meanings: { en: "stairs", bn: "সিঁড়ি" } },
                        { word: "値段", reading: "ねだん", meanings: { en: "price", bn: "মূল্য" } },
                        { word: "手段", reading: "しゅだん", meanings: { en: "means, method", bn: "উপায়" } }
                    ], exampleSentence: { jp: "この服の値段はいくらですか。", reading: "このふくのねだんはいくらですか。", meanings: { en: "How much is this piece of clothing?", bn: "এই পোশাকের দাম কত?" } } },
                    { char: "荷", on: "カ", kun: "に", meanings: { en: "load, cargo, luggage", bn: "মালামাল, বোঝা" }, strokes: 10, examples: [
                        { word: "荷物", reading: "にもつ", meanings: { en: "luggage, baggage", bn: "মালামাল" } },
                        { word: "出荷", reading: "しゅっか", meanings: { en: "shipping (goods)", bn: "চালান" } },
                        { word: "重荷", reading: "おもに", meanings: { en: "heavy burden", bn: "ভারী বোঝা" } }
                    ], exampleSentence: { jp: "荷物が重いです。", reading: "にもつがおもいです。", meanings: { en: "The luggage is heavy.", bn: "মালামালটি ভারী।" } } },
                    { char: "届", on: "カイ", kun: "とど(く)、とど(ける)", meanings: { en: "reach, deliver", bn: "পৌঁছানো" }, strokes: 8, examples: [
                        { word: "届く", reading: "とどく", meanings: { en: "to reach, arrive", bn: "পৌঁছানো" } },
                        { word: "届ける", reading: "とどける", meanings: { en: "to deliver", bn: "সরবরাহ করা" } },
                        { word: "欠席届", reading: "けっせきとどけ", meanings: { en: "absence notification", bn: "অনুপস্থিতির নোটিশ" } }
                    ], exampleSentence: { jp: "荷物が届きました。", reading: "にもつがとどきました。", meanings: { en: "The package has arrived.", bn: "মালামাল পৌঁছেছে।" } } },
                    { char: "郵", on: "ユウ", kun: "", meanings: { en: "mail, post", bn: "ডাক" }, strokes: 11, examples: [
                        { word: "郵便", reading: "ゆうびん", meanings: { en: "mail, postal service", bn: "ডাক" } },
                        { word: "郵便局", reading: "ゆうびんきょく", meanings: { en: "post office", bn: "ডাকঘর" } },
                        { word: "郵送", reading: "ゆうそう", meanings: { en: "mailing, postal delivery", bn: "ডাকযোগে পাঠানো" } }
                    ], exampleSentence: { jp: "郵便局へ行きます。", reading: "ゆうびんきょくへいきます。", meanings: { en: "I will go to the post office.", bn: "আমি ডাকঘরে যাব।" } } },
                    { char: "局", on: "キョク", kun: "", meanings: { en: "bureau, office, station", bn: "দপ্তর, কেন্দ্র" }, strokes: 7, examples: [
                        { word: "郵便局", reading: "ゆうびんきょく", meanings: { en: "post office", bn: "ডাকঘর" } },
                        { word: "薬局", reading: "やっきょく", meanings: { en: "pharmacy", bn: "ফার্মেসি" } },
                        { word: "テレビ局", reading: "テレビきょく", meanings: { en: "TV station", bn: "টিভি স্টেশন" } }
                    ], exampleSentence: { jp: "薬局で薬を買いました。", reading: "やっきょくでくすりをかいました。", meanings: { en: "I bought medicine at the pharmacy.", bn: "আমি ফার্মেসি থেকে ওষুধ কিনেছি।" } } },
                    { char: "包", on: "ホウ", kun: "つつ(む)", meanings: { en: "wrap, envelop", bn: "মোড়ানো" }, strokes: 5, examples: [
                        { word: "包む", reading: "つつむ", meanings: { en: "to wrap", bn: "মোড়ানো" } },
                        { word: "小包", reading: "こづつみ", meanings: { en: "parcel", bn: "পার্সেল" } },
                        { word: "包帯", reading: "ほうたい", meanings: { en: "bandage", bn: "ব্যান্ডেজ" } }
                    ], exampleSentence: { jp: "プレゼントを包みました。", reading: "プレゼントをつつみました。", meanings: { en: "I wrapped the present.", bn: "আমি উপহারটি মুড়িয়েছি।" } } },
                    { char: "貯", on: "チョ", kun: "", meanings: { en: "savings, store up", bn: "সঞ্চয় করা" }, strokes: 12, examples: [
                        { word: "貯金", reading: "ちょきん", meanings: { en: "savings", bn: "সঞ্চয়" } },
                        { word: "貯蓄", reading: "ちょちく", meanings: { en: "savings, accumulation", bn: "সঞ্চয়" } },
                        { word: "貯める", reading: "ためる", meanings: { en: "to save up", bn: "জমানো" } }
                    ], exampleSentence: { jp: "毎月貯金しています。", reading: "まいつきちょきんしています。", meanings: { en: "I save money every month.", bn: "আমি প্রতি মাসে সঞ্চয় করি।" } } },
                    { char: "箱", on: "ソウ", kun: "はこ", meanings: { en: "box", bn: "বাক্স" }, strokes: 15, examples: [
                        { word: "箱", reading: "はこ", meanings: { en: "box", bn: "বাক্স" } },
                        { word: "本箱", reading: "ほんばこ", meanings: { en: "bookcase", bn: "বইয়ের তাক" } },
                        { word: "ゴミ箱", reading: "ゴミばこ", meanings: { en: "trash can", bn: "ময়লার ঝুড়ি" } }
                    ], exampleSentence: { jp: "箱の中に本があります。", reading: "はこのなかにほんがあります。", meanings: { en: "There is a book inside the box.", bn: "বাক্সের ভেতরে একটি বই আছে।" } } },
                    { char: "支", on: "シ", kun: "ささ(える)", meanings: { en: "support, branch, pay", bn: "সমর্থন করা, শাখা" }, strokes: 4, examples: [
                        { word: "支払う", reading: "しはらう", meanings: { en: "to pay", bn: "পরিশোধ করা" } },
                        { word: "支える", reading: "ささえる", meanings: { en: "to support", bn: "সমর্থন করা" } },
                        { word: "支店", reading: "してん", meanings: { en: "branch (of a store/company)", bn: "শাখা" } }
                    ], exampleSentence: { jp: "家族を支えています。", reading: "かぞくをささえています。", meanings: { en: "I support my family.", bn: "আমি আমার পরিবারকে সমর্থন করি।" } } },
                    { char: "払", on: "フツ", kun: "はら(う)", meanings: { en: "pay, sweep away", bn: "পরিশোধ করা" }, strokes: 5, examples: [
                        { word: "支払う", reading: "しはらう", meanings: { en: "to pay", bn: "পরিশোধ করা" } },
                        { word: "払う", reading: "はらう", meanings: { en: "to pay", bn: "পরিশোধ করা" } },
                        { word: "支払い", reading: "しはらい", meanings: { en: "payment", bn: "পরিশোধ" } }
                    ], exampleSentence: { jp: "レジでお金を払います。", reading: "レジでおかねをはらいます。", meanings: { en: "I will pay money at the cash register.", bn: "আমি ক্যাশ কাউন্টারে টাকা পরিশোধ করব।" } } },
                    { char: "預", on: "ヨ", kun: "あず(ける)、あず(かる)", meanings: { en: "deposit, entrust", bn: "জমা রাখা" }, strokes: 13, examples: [
                        { word: "預金", reading: "よきん", meanings: { en: "bank deposit, savings", bn: "ব্যাংক জমা" } },
                        { word: "預ける", reading: "あずける", meanings: { en: "to deposit, entrust", bn: "গচ্ছিত রাখা" } },
                        { word: "預かる", reading: "あずかる", meanings: { en: "to keep, look after", bn: "রক্ষণাবেক্ষণ করা" } }
                    ], exampleSentence: { jp: "銀行にお金を預けました。", reading: "ぎんこうにおかねをあずけました。", meanings: { en: "I deposited money at the bank.", bn: "আমি ব্যাংকে টাকা জমা রেখেছি।" } } },
                    { char: "両", on: "リョウ", kun: "", meanings: { en: "both, pair", bn: "উভয়" }, strokes: 6, examples: [
                        { word: "両親", reading: "りょうしん", meanings: { en: "parents", bn: "বাবা-মা" } },
                        { word: "両方", reading: "りょうほう", meanings: { en: "both", bn: "উভয়" } },
                        { word: "両替", reading: "りょうがえ", meanings: { en: "currency exchange", bn: "মুদ্রা বিনিময়" } }
                    ], exampleSentence: { jp: "両親と旅行します。", reading: "りょうしんとりょこうします。", meanings: { en: "I will travel with my parents.", bn: "আমি বাবা-মায়ের সাথে ভ্রমণ করব।" } } },
                    { char: "替", on: "タイ", kun: "か(える)", meanings: { en: "exchange, replace", bn: "বিনিময় করা" }, strokes: 12, examples: [
                        { word: "両替", reading: "りょうがえ", meanings: { en: "currency exchange", bn: "মুদ্রা বিনিময়" } },
                        { word: "着替える", reading: "きがえる", meanings: { en: "to change clothes", bn: "কাপড় পরিবর্তন করা" } },
                        { word: "入れ替える", reading: "いれかえる", meanings: { en: "to swap, replace", bn: "প্রতিস্থাপন করা" } }
                    ], exampleSentence: { jp: "お金を両替したいです。", reading: "おかねをりょうがえしたいです。", meanings: { en: "I want to exchange money.", bn: "আমি টাকা বিনিময় করতে চাই।" } } }
                ]
            },

            {
                id: "shopping",
                title: "Shopping",
                items: [
                    { char: "商", on: "ショウ", kun: "", meanings: { en: "commerce, trade", bn: "বাণিজ্য" }, strokes: 11, examples: [
                        { word: "商品", reading: "しょうひん", meanings: { en: "product, merchandise", bn: "পণ্য" } },
                        { word: "商店", reading: "しょうてん", meanings: { en: "shop, store", bn: "দোকান" } },
                        { word: "商売", reading: "しょうばい", meanings: { en: "business, trade", bn: "ব্যবসা" } }
                    ], exampleSentence: { jp: "新しい商品が出ました。", reading: "あたらしいしょうひんがでました。", meanings: { en: "A new product has come out.", bn: "একটি নতুন পণ্য বাজারে এসেছে।" } } },
                    { char: "各", on: "カク", kun: "おのおの", meanings: { en: "each, every", bn: "প্রত্যেক" }, strokes: 6, examples: [
                        { word: "各地", reading: "かくち", meanings: { en: "various places, each region", bn: "বিভিন্ন স্থান" } },
                        { word: "各国", reading: "かっこく", meanings: { en: "each country", bn: "প্রতিটি দেশ" } },
                        { word: "各自", reading: "かくじ", meanings: { en: "each person, individually", bn: "প্রত্যেকে" } }
                    ], exampleSentence: { jp: "各自で用意してください。", reading: "かくじでよういしてください。", meanings: { en: "Please prepare individually.", bn: "অনুগ্রহ করে যার যার প্রস্তুতি নিন।" } } },
                    { char: "類", on: "ルイ", kun: "たぐい", meanings: { en: "kind, type, similar", bn: "ধরন, প্রকার" }, strokes: 18, examples: [
                        { word: "種類", reading: "しゅるい", meanings: { en: "kind, variety", bn: "ধরন" } },
                        { word: "書類", reading: "しょるい", meanings: { en: "documents", bn: "নথিপত্র" } },
                        { word: "分類", reading: "ぶんるい", meanings: { en: "classification", bn: "শ্রেণিবিন্যাস" } }
                    ], exampleSentence: { jp: "書類を準備してください。", reading: "しょるいをじゅんびしてください。", meanings: { en: "Please prepare the documents.", bn: "অনুগ্রহ করে নথিপত্র প্রস্তুত করুন।" } } },
                    { char: "種", on: "シュ", kun: "たね", meanings: { en: "kind, seed", bn: "প্রকার, বীজ" }, strokes: 14, examples: [
                        { word: "種類", reading: "しゅるい", meanings: { en: "kind, variety", bn: "ধরন" } },
                        { word: "種", reading: "たね", meanings: { en: "seed", bn: "বীজ" } },
                        { word: "人種", reading: "じんしゅ", meanings: { en: "race (of people)", bn: "জাতি" } }
                    ], exampleSentence: { jp: "この店にはいろいろな種類の服があります。", reading: "このみせにはいろいろなしゅるいのふくがあります。", meanings: { en: "This shop has various kinds of clothes.", bn: "এই দোকানে বিভিন্ন ধরনের পোশাক আছে।" } } },
                    { char: "量", on: "リョウ", kun: "", meanings: { en: "quantity, amount", bn: "পরিমাণ" }, strokes: 12, examples: [
                        { word: "量", reading: "りょう", meanings: { en: "amount, quantity", bn: "পরিমাণ" } },
                        { word: "重量", reading: "じゅうりょう", meanings: { en: "weight", bn: "ওজন" } },
                        { word: "分量", reading: "ぶんりょう", meanings: { en: "quantity, dose", bn: "মাত্রা" } }
                    ], exampleSentence: { jp: "食べる量を減らしています。", reading: "たべるりょうをへらしています。", meanings: { en: "I am reducing the amount I eat.", bn: "আমি খাওয়ার পরিমাণ কমাচ্ছি।" } } },
                    { char: "無", on: "ム、ブ", kun: "な(い)", meanings: { en: "nothing, without", bn: "শূন্য, ছাড়া" }, strokes: 12, examples: [
                        { word: "無料", reading: "むりょう", meanings: { en: "free of charge", bn: "বিনামূল্যে" } },
                        { word: "無理", reading: "むり", meanings: { en: "unreasonable, impossible", bn: "অসম্ভব" } },
                        { word: "無い", reading: "ない", meanings: { en: "to not exist, not have", bn: "না থাকা" } }
                    ], exampleSentence: { jp: "この駐車場は無料です。", reading: "このちゅうしゃじょうはむりょうです。", meanings: { en: "This parking lot is free of charge.", bn: "এই পার্কিং লট বিনামূল্যে।" } } },
                    { char: "価", on: "カ", kun: "", meanings: { en: "value, price", bn: "মূল্য" }, strokes: 8, examples: [
                        { word: "価値", reading: "かち", meanings: { en: "value", bn: "মূল্য" } },
                        { word: "価格", reading: "かかく", meanings: { en: "price", bn: "দাম" } },
                        { word: "物価", reading: "ぶっか", meanings: { en: "prices (of goods)", bn: "দ্রব্যমূল্য" } }
                    ], exampleSentence: { jp: "この製品の価格は高いです。", reading: "このせいひんのかかくはたかいです。", meanings: { en: "This product's price is expensive.", bn: "এই পণ্যের দাম বেশি।" } } },
                    { char: "値", on: "チ", kun: "ね、あたい", meanings: { en: "value, price", bn: "মূল্য" }, strokes: 10, examples: [
                        { word: "価値", reading: "かち", meanings: { en: "value", bn: "মূল্য" } },
                        { word: "値段", reading: "ねだん", meanings: { en: "price", bn: "দাম" } },
                        { word: "数値", reading: "すうち", meanings: { en: "numerical value", bn: "সাংখ্যিক মান" } }
                    ], exampleSentence: { jp: "この経験は価値があります。", reading: "このけいけんはかちがあります。", meanings: { en: "This experience has value.", bn: "এই অভিজ্ঞতার মূল্য রয়েছে।" } } },
                    { char: "税", on: "ゼイ", kun: "", meanings: { en: "tax", bn: "কর" }, strokes: 12, examples: [
                        { word: "税金", reading: "ぜいきん", meanings: { en: "tax", bn: "কর" } },
                        { word: "消費税", reading: "しょうひぜい", meanings: { en: "consumption tax", bn: "ভোগ কর" } },
                        { word: "税関", reading: "ぜいかん", meanings: { en: "customs (border)", bn: "শুল্ক অফিস" } }
                    ], exampleSentence: { jp: "税金を払います。", reading: "ぜいきんをはらいます。", meanings: { en: "I pay taxes.", bn: "আমি কর প্রদান করি।" } } },
                    { char: "製", on: "セイ", kun: "", meanings: { en: "manufacture, made in", bn: "উৎপাদন করা" }, strokes: 14, examples: [
                        { word: "日本製", reading: "にほんせい", meanings: { en: "made in Japan", bn: "জাপানে তৈরি" } },
                        { word: "製品", reading: "せいひん", meanings: { en: "product", bn: "পণ্য" } },
                        { word: "製造", reading: "せいぞう", meanings: { en: "manufacturing", bn: "উৎপাদন" } }
                    ], exampleSentence: { jp: "これは日本製です。", reading: "これはにほんせいです。", meanings: { en: "This is made in Japan.", bn: "এটি জাপানে তৈরি।" } } },
                    { char: "毛", on: "モウ", kun: "け", meanings: { en: "hair, fur, wool", bn: "লোম, পশম" }, strokes: 4, examples: [
                        { word: "毛", reading: "け", meanings: { en: "hair, fur", bn: "লোম" } },
                        { word: "毛布", reading: "もうふ", meanings: { en: "blanket", bn: "কম্বল" } },
                        { word: "髪の毛", reading: "かみのけ", meanings: { en: "hair (head)", bn: "মাথার চুল" } }
                    ], exampleSentence: { jp: "この毛布は暖かいです。", reading: "このもうふはあたたかいです。", meanings: { en: "This blanket is warm.", bn: "এই কম্বলটি উষ্ণ।" } } },
                    { char: "糸", on: "シ", kun: "いと", meanings: { en: "thread", bn: "সুতা" }, strokes: 6, examples: [
                        { word: "糸", reading: "いと", meanings: { en: "thread", bn: "সুতা" } },
                        { word: "毛糸", reading: "けいと", meanings: { en: "wool yarn", bn: "পশমের সুতা" } },
                        { word: "糸口", reading: "いとぐち", meanings: { en: "clue, thread end", bn: "সূত্র" } }
                    ], exampleSentence: { jp: "毛糸でセーターを編みます。", reading: "けいとでセーターをあみます。", meanings: { en: "I will knit a sweater with wool yarn.", bn: "আমি পশমের সুতা দিয়ে সোয়েটার বুনব।" } } },
                    { char: "老", on: "ロウ", kun: "お(いる)", meanings: { en: "old age", bn: "বার্ধক্য" }, strokes: 6, examples: [
                        { word: "老人", reading: "ろうじん", meanings: { en: "elderly person", bn: "বয়স্ক ব্যক্তি" } },
                        { word: "老いる", reading: "おいる", meanings: { en: "to grow old", bn: "বার্ধক্যে উপনীত হওয়া" } },
                        { word: "老後", reading: "ろうご", meanings: { en: "old age, later years", bn: "বার্ধক্যকাল" } }
                    ], exampleSentence: { jp: "老人に席を譲りました。", reading: "ろうじんにせきをゆずりました。", meanings: { en: "I gave up my seat to an elderly person.", bn: "আমি একজন বয়স্ক ব্যক্তিকে আসন ছেড়ে দিয়েছি।" } } },
                    { char: "向", on: "コウ", kun: "む(く)、む(かう)", meanings: { en: "face, direction, towards", bn: "দিক, মুখ করা" }, strokes: 6, examples: [
                        { word: "向く", reading: "むく", meanings: { en: "to face, turn towards", bn: "মুখ করা" } },
                        { word: "方向", reading: "ほうこう", meanings: { en: "direction", bn: "দিক" } },
                        { word: "向かう", reading: "むかう", meanings: { en: "to head towards", bn: "দিকে যাওয়া" } }
                    ], exampleSentence: { jp: "駅の方向に向かっています。", reading: "えきのほうこうにむかっています。", meanings: { en: "I am heading towards the station.", bn: "আমি স্টেশনের দিকে যাচ্ছি।" } } },
                    { char: "告", on: "コク", kun: "つ(げる)", meanings: { en: "announce, tell", bn: "ঘোষণা করা" }, strokes: 7, examples: [
                        { word: "広告", reading: "こうこく", meanings: { en: "advertisement", bn: "বিজ্ঞাপন" } },
                        { word: "報告", reading: "ほうこく", meanings: { en: "report", bn: "প্রতিবেদন" } },
                        { word: "告げる", reading: "つげる", meanings: { en: "to announce, tell", bn: "জানানো" } }
                    ], exampleSentence: { jp: "この広告は面白いです。", reading: "このこうこくはおもしろいです。", meanings: { en: "This advertisement is interesting.", bn: "এই বিজ্ঞাপনটি মজার।" } } },
                    { char: "乳", on: "ニュウ", kun: "ちち、ち", meanings: { en: "milk, breast", bn: "দুধ" }, strokes: 8, examples: [
                        { word: "牛乳", reading: "ぎゅうにゅう", meanings: { en: "cow's milk", bn: "গরুর দুধ" } },
                        { word: "乳製品", reading: "にゅうせいひん", meanings: { en: "dairy products", bn: "দুগ্ধজাত পণ্য" } },
                        { word: "母乳", reading: "ぼにゅう", meanings: { en: "breast milk", bn: "মায়ের দুধ" } }
                    ], exampleSentence: { jp: "牛乳を毎日飲みます。", reading: "ぎゅうにゅうをまいにちのみます。", meanings: { en: "I drink milk every day.", bn: "আমি প্রতিদিন দুধ পান করি।" } } },
                    { char: "酒", on: "シュ", kun: "さけ", meanings: { en: "alcohol, sake", bn: "মদ" }, strokes: 10, examples: [
                        { word: "お酒", reading: "おさけ", meanings: { en: "alcohol, sake", bn: "মদ" } },
                        { word: "酒屋", reading: "さかや", meanings: { en: "liquor store", bn: "মদের দোকান" } },
                        { word: "日本酒", reading: "にほんしゅ", meanings: { en: "Japanese sake", bn: "জাপানি সাকে" } }
                    ], exampleSentence: { jp: "お酒はあまり飲みません。", reading: "おさけはあまりのみません。", meanings: { en: "I don't drink alcohol much.", bn: "আমি খুব একটা মদ পান করি না।" } } },
                    { char: "豆", on: "トウ", kun: "まめ", meanings: { en: "bean", bn: "শিম" }, strokes: 7, examples: [
                        { word: "豆", reading: "まめ", meanings: { en: "bean", bn: "শিম" } },
                        { word: "納豆", reading: "なっとう", meanings: { en: "natto (fermented soybeans)", bn: "নাত্তো" } },
                        { word: "豆腐", reading: "とうふ", meanings: { en: "tofu", bn: "টফু" } }
                    ], exampleSentence: { jp: "納豆はあまり好きではありません。", reading: "なっとうはあまりすきではありません。", meanings: { en: "I don't really like natto.", bn: "আমি নাত্তো তেমন পছন্দ করি না।" } } },
                    { char: "油", on: "ユ", kun: "あぶら", meanings: { en: "oil", bn: "তেল" }, strokes: 8, examples: [
                        { word: "油", reading: "あぶら", meanings: { en: "oil", bn: "তেল" } },
                        { word: "石油", reading: "せきゆ", meanings: { en: "petroleum, oil", bn: "খনিজ তেল" } },
                        { word: "油断", reading: "ゆだん", meanings: { en: "carelessness, negligence", bn: "অসতর্কতা" } }
                    ], exampleSentence: { jp: "油で野菜を炒めます。", reading: "あぶらでやさいをいためます。", meanings: { en: "I will stir-fry vegetables with oil.", bn: "আমি তেল দিয়ে সবজি ভাজব।" } } },
                    { char: "形", on: "ケイ、ギョウ", kun: "かたち、かた", meanings: { en: "shape, form", bn: "আকৃতি" }, strokes: 7, examples: [
                        { word: "形", reading: "かたち", meanings: { en: "shape, form", bn: "আকৃতি" } },
                        { word: "人形", reading: "にんぎょう", meanings: { en: "doll", bn: "পুতুল" } },
                        { word: "形式", reading: "けいしき", meanings: { en: "format, formality", bn: "ফরম্যাট" } }
                    ], exampleSentence: { jp: "この容器の形は丸いです。", reading: "このようきのかたちはまるいです。", meanings: { en: "The shape of this container is round.", bn: "এই পাত্রের আকৃতি গোলাকার।" } } },
                    { char: "丸", on: "ガン", kun: "まる(い)", meanings: { en: "circle, round", bn: "গোল, বৃত্ত" }, strokes: 3, examples: [
                        { word: "丸い", reading: "まるい", meanings: { en: "round", bn: "গোলাকার" } },
                        { word: "丸", reading: "まる", meanings: { en: "circle, zero mark", bn: "বৃত্ত" } },
                        { word: "丸ごと", reading: "まるごと", meanings: { en: "whole, entirely", bn: "সম্পূর্ণভাবে" } }
                    ], exampleSentence: { jp: "丸いテーブルがあります。", reading: "まるいテーブルがあります。", meanings: { en: "There is a round table.", bn: "একটি গোলাকার টেবিল আছে।" } } },
                    { char: "浅", on: "セン", kun: "あさ(い)", meanings: { en: "shallow", bn: "অগভীর" }, strokes: 9, examples: [
                        { word: "浅い", reading: "あさい", meanings: { en: "shallow", bn: "অগভীর" } },
                        { word: "浅はか", reading: "あさはか", meanings: { en: "shallow-minded, foolish", bn: "অগভীর চিন্তাযুক্ত" } },
                        { word: "経験が浅い", reading: "けいけんがあさい", meanings: { en: "inexperienced", bn: "কম অভিজ্ঞতাসম্পন্ন" } }
                    ], exampleSentence: { jp: "この川は浅いです。", reading: "このかわはあさいです。", meanings: { en: "This river is shallow.", bn: "এই নদীটি অগভীর।" } } },
                    { char: "深", on: "シン", kun: "ふか(い)", meanings: { en: "deep", bn: "গভীর" }, strokes: 11, examples: [
                        { word: "深い", reading: "ふかい", meanings: { en: "deep", bn: "গভীর" } },
                        { word: "深夜", reading: "しんや", meanings: { en: "late at night", bn: "গভীর রাত" } },
                        { word: "興味深い", reading: "きょうみぶかい", meanings: { en: "very interesting", bn: "অত্যন্ত আকর্ষণীয়" } }
                    ], exampleSentence: { jp: "この湖はとても深いです。", reading: "このみずうみはとてもふかいです。", meanings: { en: "This lake is very deep.", bn: "এই হ্রদটি অত্যন্ত গভীর।" } } },
                    { char: "固", on: "コ", kun: "かた(い)、かた(める)", meanings: { en: "hard, solid, firm", bn: "শক্ত, কঠিন" }, strokes: 8, examples: [
                        { word: "固い", reading: "かたい", meanings: { en: "hard, firm", bn: "শক্ত" } },
                        { word: "固定", reading: "こてい", meanings: { en: "fixed, stationary", bn: "স্থির" } },
                        { word: "頑固", reading: "がんこ", meanings: { en: "stubborn", bn: "একগুঁয়ে" } }
                    ], exampleSentence: { jp: "このパンは固いです。", reading: "このパンはかたいです。", meanings: { en: "This bread is hard.", bn: "এই রুটিটি শক্ত।" } } },
                    { char: "厚", on: "コウ", kun: "あつ(い)", meanings: { en: "thick", bn: "পুরু" }, strokes: 9, examples: [
                        { word: "厚い", reading: "あつい", meanings: { en: "thick (objects)", bn: "পুরু" } },
                        { word: "厚さ", reading: "あつさ", meanings: { en: "thickness", bn: "পুরুত্ব" } },
                        { word: "厚生労働省", reading: "こうせいろうどうしょう", meanings: { en: "Ministry of Health, Labour and Welfare", bn: "স্বাস্থ্য ও শ্রম মন্ত্রণালয়" } }
                    ], exampleSentence: { jp: "厚い本を読んでいます。", reading: "あついほんをよんでいます。", meanings: { en: "I am reading a thick book.", bn: "আমি একটি পুরু বই পড়ছি।" } } }
                ]
            },

            {
                id: "sightseeing",
                title: "Sightseeing",
                items: [
                    { char: "観", on: "カン", kun: "", meanings: { en: "view, observe", bn: "দর্শন করা" }, strokes: 18, examples: [
                        { word: "観光", reading: "かんこう", meanings: { en: "sightseeing", bn: "ভ্রমণ" } },
                        { word: "観察", reading: "かんさつ", meanings: { en: "observation", bn: "পর্যবেক্ষণ" } },
                        { word: "観客", reading: "かんきゃく", meanings: { en: "audience, spectator", bn: "দর্শক" } }
                    ], exampleSentence: { jp: "京都を観光します。", reading: "きょうとをかんこうします。", meanings: { en: "I will go sightseeing in Kyoto.", bn: "আমি কিয়োতোতে ভ্রমণ করব।" } } },
                    { char: "辺", on: "ヘン", kun: "あた(り)、べ", meanings: { en: "area, vicinity, side", bn: "এলাকা, আশপাশ" }, strokes: 5, examples: [
                        { word: "周辺", reading: "しゅうへん", meanings: { en: "surrounding area", bn: "চারপাশের এলাকা" } },
                        { word: "海辺", reading: "うみべ", meanings: { en: "seaside, beach", bn: "সমুদ্রতীর" } },
                        { word: "この辺", reading: "このへん", meanings: { en: "around here", bn: "এই এলাকায়" } }
                    ], exampleSentence: { jp: "この辺にレストランがありますか。", reading: "このへんにレストランがありますか。", meanings: { en: "Is there a restaurant around here?", bn: "এই এলাকায় কোনো রেস্তোরাঁ আছে কি?" } } },
                    { char: "然", on: "ゼン、ネン", kun: "", meanings: { en: "nature, so, thus", bn: "প্রকৃতি, তাই" }, strokes: 12, examples: [
                        { word: "自然", reading: "しぜん", meanings: { en: "nature", bn: "প্রকৃতি" } },
                        { word: "当然", reading: "とうぜん", meanings: { en: "naturally, of course", bn: "স্বাভাবিকভাবে" } },
                        { word: "全然", reading: "ぜんぜん", meanings: { en: "not at all", bn: "একেবারেই না" } }
                    ], exampleSentence: { jp: "自然が豊かな場所です。", reading: "しぜんがゆたかなばしょです。", meanings: { en: "It is a place rich in nature.", bn: "এটি প্রকৃতিতে সমৃদ্ধ একটি জায়গা।" } } },
                    { char: "泊", on: "ハク", kun: "と(まる)", meanings: { en: "stay overnight, lodge", bn: "রাত্রিযাপন করা" }, strokes: 8, examples: [
                        { word: "泊まる", reading: "とまる", meanings: { en: "to stay overnight", bn: "রাত্রিযাপন করা" } },
                        { word: "宿泊", reading: "しゅくはく", meanings: { en: "lodging, staying overnight", bn: "রাত্রিযাপন" } },
                        { word: "一泊", reading: "いっぱく", meanings: { en: "one night's stay", bn: "এক রাতের থাকা" } }
                    ], exampleSentence: { jp: "ホテルに二泊します。", reading: "ホテルににはくします。", meanings: { en: "I will stay two nights at the hotel.", bn: "আমি হোটেলে দুই রাত থাকব।" } } },
                    { char: "泉", on: "セン", kun: "いずみ", meanings: { en: "spring (water)", bn: "প্রস্রবণ" }, strokes: 9, examples: [
                        { word: "温泉", reading: "おんせん", meanings: { en: "hot spring", bn: "উষ্ণ প্রস্রবণ" } },
                        { word: "泉", reading: "いずみ", meanings: { en: "spring, fountain", bn: "প্রস্রবণ" } },
                        { word: "源泉", reading: "げんせん", meanings: { en: "source, origin", bn: "উৎস" } }
                    ], exampleSentence: { jp: "温泉に入りたいです。", reading: "おんせんにはいりたいです。", meanings: { en: "I want to go into a hot spring.", bn: "আমি একটি উষ্ণ প্রস্রবণে যেতে চাই।" } } },
                    { char: "湯", on: "トウ", kun: "ゆ", meanings: { en: "hot water", bn: "গরম পানি" }, strokes: 12, examples: [
                        { word: "お湯", reading: "おゆ", meanings: { en: "hot water", bn: "গরম পানি" } },
                        { word: "銭湯", reading: "せんとう", meanings: { en: "public bathhouse", bn: "পাবলিক স্নানাগার" } },
                        { word: "湯気", reading: "ゆげ", meanings: { en: "steam", bn: "বাষ্প" } }
                    ], exampleSentence: { jp: "お湯を沸かしています。", reading: "おゆをわかしています。", meanings: { en: "I am boiling hot water.", bn: "আমি গরম পানি ফোটাচ্ছি।" } } },
                    { char: "美", on: "ビ", kun: "うつく(しい)", meanings: { en: "beautiful", bn: "সুন্দর" }, strokes: 9, examples: [
                        { word: "美しい", reading: "うつくしい", meanings: { en: "beautiful", bn: "সুন্দর" } },
                        { word: "美術館", reading: "びじゅつかん", meanings: { en: "art museum", bn: "চারুকলা জাদুঘর" } },
                        { word: "美容院", reading: "びよういん", meanings: { en: "beauty salon", bn: "সৌন্দর্য সেলুন" } }
                    ], exampleSentence: { jp: "この景色は美しいです。", reading: "このけしきはうつくしいです。", meanings: { en: "This scenery is beautiful.", bn: "এই দৃশ্যটি সুন্দর।" } } },
                    { char: "芸", on: "ゲイ", kun: "", meanings: { en: "art, performance, skill", bn: "শিল্প, দক্ষতা" }, strokes: 7, examples: [
                        { word: "芸術", reading: "げいじゅつ", meanings: { en: "art", bn: "শিল্পকলা" } },
                        { word: "芸能人", reading: "げいのうじん", meanings: { en: "entertainer, celebrity", bn: "তারকা" } },
                        { word: "文芸", reading: "ぶんげい", meanings: { en: "literature, literary arts", bn: "সাহিত্য" } }
                    ], exampleSentence: { jp: "芸術に興味があります。", reading: "げいじゅつにきょうみがあります。", meanings: { en: "I am interested in art.", bn: "আমার শিল্পকলায় আগ্রহ আছে।" } } },
                    { char: "絵", on: "エ、カイ", kun: "", meanings: { en: "picture, painting", bn: "ছবি" }, strokes: 12, examples: [
                        { word: "絵", reading: "え", meanings: { en: "picture, drawing", bn: "ছবি" } },
                        { word: "絵画", reading: "かいが", meanings: { en: "painting", bn: "চিত্রকর্ম" } },
                        { word: "絵本", reading: "えほん", meanings: { en: "picture book", bn: "চিত্রপুস্তক" } }
                    ], exampleSentence: { jp: "美しい絵を見ました。", reading: "うつくしいえをみました。", meanings: { en: "I saw a beautiful picture.", bn: "আমি একটি সুন্দর ছবি দেখেছি।" } } },
                    { char: "遊", on: "ユウ", kun: "あそ(ぶ)", meanings: { en: "play", bn: "খেলা করা" }, strokes: 12, examples: [
                        { word: "遊ぶ", reading: "あそぶ", meanings: { en: "to play", bn: "খেলা করা" } },
                        { word: "遊園地", reading: "ゆうえんち", meanings: { en: "amusement park", bn: "চিত্তবিনোদন উদ্যান" } },
                        { word: "遊び", reading: "あそび", meanings: { en: "play, game", bn: "খেলা" } }
                    ], exampleSentence: { jp: "子供たちが公園で遊んでいます。", reading: "こどもたちがこうえんであそんでいます。", meanings: { en: "The children are playing in the park.", bn: "শিশুরা পার্কে খেলছে।" } } },
                    { char: "券", on: "ケン", kun: "", meanings: { en: "ticket, coupon", bn: "টিকিট, কুপন" }, strokes: 8, examples: [
                        { word: "券", reading: "けん", meanings: { en: "ticket, coupon", bn: "টিকিট" } },
                        { word: "食券", reading: "しょっけん", meanings: { en: "meal ticket", bn: "খাবারের টিকিট" } },
                        { word: "入場券", reading: "にゅうじょうけん", meanings: { en: "admission ticket", bn: "প্রবেশ টিকিট" } }
                    ], exampleSentence: { jp: "入場券を買いました。", reading: "にゅうじょうけんをかいました。", meanings: { en: "I bought an admission ticket.", bn: "আমি একটি প্রবেশ টিকিট কিনেছি।" } } },
                    { char: "共", on: "キョウ", kun: "とも", meanings: { en: "together, both", bn: "একসাথে" }, strokes: 6, examples: [
                        { word: "共通", reading: "きょうつう", meanings: { en: "common, shared", bn: "সাধারণ" } },
                        { word: "共に", reading: "ともに", meanings: { en: "together with", bn: "সাথে" } },
                        { word: "公共", reading: "こうきょう", meanings: { en: "public", bn: "সরকারি" } }
                    ], exampleSentence: { jp: "私たちには共通の趣味があります。", reading: "わたしたちにはきょうつうのしゅみがあります。", meanings: { en: "We have a common hobby.", bn: "আমাদের একটি সাধারণ শখ আছে।" } } },
                    { char: "般", on: "ハン", kun: "", meanings: { en: "general, all kinds", bn: "সাধারণ" }, strokes: 10, examples: [
                        { word: "一般", reading: "いっぱん", meanings: { en: "general, ordinary", bn: "সাধারণ" } },
                        { word: "全般", reading: "ぜんぱん", meanings: { en: "the whole, overall", bn: "সামগ্রিক" } },
                        { word: "一般的", reading: "いっぱんてき", meanings: { en: "general, typical", bn: "সাধারণভাবে" } }
                    ], exampleSentence: { jp: "これは一般的な考え方です。", reading: "これはいっぱんてきなかんがえかたです。", meanings: { en: "This is a general way of thinking.", bn: "এটি একটি সাধারণ চিন্তাভাবনা।" } } },
                    { char: "個", on: "コ", kun: "", meanings: { en: "individual, counter for items", bn: "স্বতন্ত্র, গণনা প্রত্যয়" }, strokes: 10, examples: [
                        { word: "個人", reading: "こじん", meanings: { en: "individual, private person", bn: "ব্যক্তি" } },
                        { word: "一個", reading: "いっこ", meanings: { en: "one piece/item", bn: "একটি" } },
                        { word: "個性", reading: "こせい", meanings: { en: "individuality", bn: "স্বাতন্ত্র্য" } }
                    ], exampleSentence: { jp: "りんごを三個買いました。", reading: "りんごをさんこかいました。", meanings: { en: "I bought three apples.", bn: "আমি তিনটি আপেল কিনেছি।" } } },
                    { char: "団", on: "ダン", kun: "", meanings: { en: "group, association", bn: "দল, সংগঠন" }, strokes: 6, examples: [
                        { word: "団体", reading: "だんたい", meanings: { en: "group, organization", bn: "সংগঠন" } },
                        { word: "布団", reading: "ふとん", meanings: { en: "futon (bedding)", bn: "ফুটন (বিছানা)" } },
                        { word: "団地", reading: "だんち", meanings: { en: "housing complex", bn: "আবাসিক এলাকা" } }
                    ], exampleSentence: { jp: "団体で観光しています。", reading: "だんたいでかんこうしています。", meanings: { en: "We are sightseeing as a group.", bn: "আমরা দলগতভাবে ভ্রমণ করছি।" } } },
                    { char: "岸", on: "ガン", kun: "きし", meanings: { en: "shore, coast, bank", bn: "তীর" }, strokes: 8, examples: [
                        { word: "岸", reading: "きし", meanings: { en: "shore, bank", bn: "তীর" } },
                        { word: "海岸", reading: "かいがん", meanings: { en: "coast, seashore", bn: "সমুদ্রতীর" } },
                        { word: "対岸", reading: "たいがん", meanings: { en: "opposite bank/shore", bn: "বিপরীত তীর" } }
                    ], exampleSentence: { jp: "海岸を散歩しました。", reading: "かいがんをさんぽしました。", meanings: { en: "I took a walk along the coast.", bn: "আমি সমুদ্রতীরে হেঁটেছি।" } } },
                    { char: "湖", on: "コ", kun: "みずうみ", meanings: { en: "lake", bn: "হ্রদ" }, strokes: 12, examples: [
                        { word: "湖", reading: "みずうみ", meanings: { en: "lake", bn: "হ্রদ" } },
                        { word: "湖畔", reading: "こはん", meanings: { en: "lakeside", bn: "হ্রদের তীর" } },
                        { word: "琵琶湖", reading: "びわこ", meanings: { en: "Lake Biwa", bn: "বিওয়া হ্রদ" } }
                    ], exampleSentence: { jp: "湖のそばにホテルがあります。", reading: "みずうみのそばにホテルがあります。", meanings: { en: "There is a hotel by the lake.", bn: "হ্রদের পাশে একটি হোটেল আছে।" } } },
                    { char: "波", on: "ハ", kun: "なみ", meanings: { en: "wave", bn: "তরঙ্গ" }, strokes: 8, examples: [
                        { word: "波", reading: "なみ", meanings: { en: "wave", bn: "তরঙ্গ" } },
                        { word: "電波", reading: "でんぱ", meanings: { en: "radio wave, signal", bn: "রেডিও তরঙ্গ" } },
                        { word: "波乱", reading: "はらん", meanings: { en: "turbulence, upheaval", bn: "অস্থিরতা" } }
                    ], exampleSentence: { jp: "今日は波が高いです。", reading: "きょうはなみがたかいです。", meanings: { en: "The waves are high today.", bn: "আজ ঢেউ উঁচু।" } } },
                    { char: "島", on: "トウ", kun: "しま", meanings: { en: "island", bn: "দ্বীপ" }, strokes: 10, examples: [
                        { word: "島", reading: "しま", meanings: { en: "island", bn: "দ্বীপ" } },
                        { word: "半島", reading: "はんとう", meanings: { en: "peninsula", bn: "উপদ্বীপ" } },
                        { word: "島国", reading: "しまぐに", meanings: { en: "island nation", bn: "দ্বীপরাষ্ট্র" } }
                    ], exampleSentence: { jp: "日本は島国です。", reading: "にほんはしまぐにです。", meanings: { en: "Japan is an island nation.", bn: "জাপান একটি দ্বীপরাষ্ট্র।" } } },
                    { char: "船", on: "セン", kun: "ふね", meanings: { en: "ship, boat", bn: "জাহাজ" }, strokes: 11, examples: [
                        { word: "船", reading: "ふね", meanings: { en: "ship, boat", bn: "জাহাজ" } },
                        { word: "乗船", reading: "じょうせん", meanings: { en: "boarding a ship", bn: "জাহাজে ওঠা" } },
                        { word: "船便", reading: "ふなびん", meanings: { en: "surface mail, sea mail", bn: "জাহাজে পাঠানো ডাক" } }
                    ], exampleSentence: { jp: "船で島へ行きます。", reading: "ふねでしまへいきます。", meanings: { en: "I will go to the island by boat.", bn: "আমি জাহাজে করে দ্বীপে যাব।" } } },
                    { char: "橋", on: "キョウ", kun: "はし", meanings: { en: "bridge", bn: "সেতু" }, strokes: 16, examples: [
                        { word: "橋", reading: "はし", meanings: { en: "bridge", bn: "সেতু" } },
                        { word: "歩道橋", reading: "ほどうきょう", meanings: { en: "pedestrian bridge", bn: "পথচারী সেতু" } },
                        { word: "石橋", reading: "いしばし", meanings: { en: "stone bridge", bn: "পাথরের সেতু" } }
                    ], exampleSentence: { jp: "この橋はとても長いです。", reading: "このはしはとてもながいです。", meanings: { en: "This bridge is very long.", bn: "এই সেতুটি অনেক লম্বা।" } } },
                    { char: "神", on: "シン、ジン", kun: "かみ", meanings: { en: "god, deity", bn: "দেবতা" }, strokes: 9, examples: [
                        { word: "神社", reading: "じんじゃ", meanings: { en: "Shinto shrine", bn: "শিন্তো মন্দির" } },
                        { word: "神", reading: "かみ", meanings: { en: "god", bn: "দেবতা" } },
                        { word: "精神", reading: "せいしん", meanings: { en: "spirit, mind", bn: "মানসিকতা" } }
                    ], exampleSentence: { jp: "神社にお参りしました。", reading: "じんじゃにおまいりしました。", meanings: { en: "I visited (worshiped at) a shrine.", bn: "আমি একটি মন্দিরে পূজা দিতে গিয়েছিলাম।" } } },
                    { char: "寺", on: "ジ", kun: "てら", meanings: { en: "temple", bn: "মন্দির" }, strokes: 6, examples: [
                        { word: "お寺", reading: "おてら", meanings: { en: "Buddhist temple", bn: "বৌদ্ধ মন্দির" } },
                        { word: "寺院", reading: "じいん", meanings: { en: "temple", bn: "মন্দির" } },
                        { word: "金閣寺", reading: "きんかくじ", meanings: { en: "Kinkaku-ji (Golden Pavilion)", bn: "কিনকাকুজি (স্বর্ণমন্দির)" } }
                    ], exampleSentence: { jp: "京都には有名なお寺があります。", reading: "きょうとにはゆうめいなおてらがあります。", meanings: { en: "There is a famous temple in Kyoto.", bn: "কিয়োতোতে একটি বিখ্যাত মন্দির আছে।" } } },
                    { char: "祭", on: "サイ", kun: "まつ(り)", meanings: { en: "festival", bn: "উৎসব" }, strokes: 11, examples: [
                        { word: "祭り", reading: "まつり", meanings: { en: "festival", bn: "উৎসব" } },
                        { word: "文化祭", reading: "ぶんかさい", meanings: { en: "school culture festival", bn: "সংস্কৃতি উৎসব" } },
                        { word: "祭日", reading: "さいじつ", meanings: { en: "holiday, festival day", bn: "ছুটির দিন" } }
                    ], exampleSentence: { jp: "夏祭りに行きました。", reading: "なつまつりにいきました。", meanings: { en: "I went to a summer festival.", bn: "আমি একটি গ্রীষ্মকালীন উৎসবে গিয়েছিলাম।" } } },
                    { char: "昔", on: "セキ", kun: "むかし", meanings: { en: "long ago, old times", bn: "অতীতে, পুরনো দিনে" }, strokes: 8, examples: [
                        { word: "昔", reading: "むかし", meanings: { en: "long ago, the past", bn: "অতীত" } },
                        { word: "昔話", reading: "むかしばなし", meanings: { en: "folk tale, old story", bn: "লোককথা" } },
                        { word: "大昔", reading: "おおむかし", meanings: { en: "ancient times", bn: "সুপ্রাচীনকাল" } }
                    ], exampleSentence: { jp: "昔の伝説を聞きました。", reading: "むかしのでんせつをききました。", meanings: { en: "I heard an old legend.", bn: "আমি একটি পুরনো কিংবদন্তি শুনেছি।" } } },
                    { char: "岩", on: "ガン", kun: "いわ", meanings: { en: "rock", bn: "পাথর" }, strokes: 8, examples: [
                        { word: "岩", reading: "いわ", meanings: { en: "rock", bn: "পাথর" } },
                        { word: "岩石", reading: "がんせき", meanings: { en: "rock, boulder", bn: "শিলাখণ্ড" } },
                        { word: "溶岩", reading: "ようがん", meanings: { en: "lava", bn: "লাভা" } }
                    ], exampleSentence: { jp: "大きな岩がありました。", reading: "おおきないわがありました。", meanings: { en: "There was a big rock.", bn: "একটি বড় পাথর ছিল।" } } },
                    { char: "馬", on: "バ", kun: "うま", meanings: { en: "horse", bn: "ঘোড়া" }, strokes: 10, examples: [
                        { word: "馬", reading: "うま", meanings: { en: "horse", bn: "ঘোড়া" } },
                        { word: "競馬", reading: "けいば", meanings: { en: "horse racing", bn: "ঘোড়দৌড়" } },
                        { word: "乗馬", reading: "じょうば", meanings: { en: "horseback riding", bn: "ঘোড়ায় চড়া" } }
                    ], exampleSentence: { jp: "馬に乗ったことがあります。", reading: "うまにのったことがあります。", meanings: { en: "I have ridden a horse before.", bn: "আমি আগে ঘোড়ায় চড়েছি।" } } }
                ]
            },

            {
                id: "work",
                title: "Work",
                items: [
                    { char: "職", on: "ショク", kun: "", meanings: { en: "occupation, job", bn: "পেশা" }, strokes: 18, examples: [
                        { word: "職業", reading: "しょくぎょう", meanings: { en: "occupation, profession", bn: "পেশা" } },
                        { word: "就職", reading: "しゅうしょく", meanings: { en: "getting a job", bn: "চাকরি লাভ" } },
                        { word: "職場", reading: "しょくば", meanings: { en: "workplace", bn: "কর্মস্থল" } }
                    ], exampleSentence: { jp: "来年就職します。", reading: "らいねんしゅうしょくします。", meanings: { en: "I will get a job next year.", bn: "আমি আগামী বছর চাকরি পাব।" } } },
                    { char: "勤", on: "キン", kun: "つと(める)", meanings: { en: "work, serve, be employed", bn: "কর্মরত থাকা" }, strokes: 12, examples: [
                        { word: "勤める", reading: "つとめる", meanings: { en: "to work for, be employed at", bn: "চাকরি করা" } },
                        { word: "出勤", reading: "しゅっきん", meanings: { en: "going to work", bn: "কাজে যাওয়া" } },
                        { word: "勤務", reading: "きんむ", meanings: { en: "work, duty", bn: "কর্মরত অবস্থা" } }
                    ], exampleSentence: { jp: "銀行に勤めています。", reading: "ぎんこうにつとめています。", meanings: { en: "I work at a bank.", bn: "আমি একটি ব্যাংকে কাজ করি।" } } },
                    { char: "張", on: "チョウ", kun: "は(る)", meanings: { en: "stretch, expand, insist", bn: "প্রসারিত করা" }, strokes: 11, examples: [
                        { word: "主張", reading: "しゅちょう", meanings: { en: "assertion, claim", bn: "দাবি" } },
                        { word: "出張", reading: "しゅっちょう", meanings: { en: "business trip", bn: "ব্যবসায়িক সফর" } },
                        { word: "頑張る", reading: "がんばる", meanings: { en: "to do one's best", bn: "সর্বোচ্চ চেষ্টা করা" } }
                    ], exampleSentence: { jp: "来週大阪へ出張します。", reading: "らいしゅうおおさかへしゅっちょうします。", meanings: { en: "I will go on a business trip to Osaka next week.", bn: "আগামী সপ্তাহে আমি ওসাকায় ব্যবসায়িক সফরে যাব।" } } },
                    { char: "退", on: "タイ", kun: "しりぞ(く)", meanings: { en: "retreat, retire, leave", bn: "প্রত্যাহার করা" }, strokes: 9, examples: [
                        { word: "退職", reading: "たいしょく", meanings: { en: "retirement, resignation", bn: "অবসর গ্রহণ" } },
                        { word: "退勤", reading: "たいきん", meanings: { en: "leaving work", bn: "কাজ থেকে ফেরা" } },
                        { word: "後退", reading: "こうたい", meanings: { en: "retreat, moving back", bn: "পশ্চাদপসরণ" } }
                    ], exampleSentence: { jp: "来月退職します。", reading: "らいげつたいしょくします。", meanings: { en: "I will retire next month.", bn: "আমি আগামী মাসে অবসর নেব।" } } },
                    { char: "募", on: "ボ", kun: "つの(る)", meanings: { en: "recruit, solicit", bn: "নিয়োগের আহ্বান জানানো" }, strokes: 12, examples: [
                        { word: "応募", reading: "おうぼ", meanings: { en: "applying (for a job/contest)", bn: "আবেদন করা" } },
                        { word: "募集", reading: "ぼしゅう", meanings: { en: "recruitment", bn: "নিয়োগ বিজ্ঞপ্তি" } },
                        { word: "急募", reading: "きゅうぼ", meanings: { en: "urgent recruitment", bn: "জরুরি নিয়োগ" } }
                    ], exampleSentence: { jp: "新しい社員を募集しています。", reading: "あたらしいしゃいんをぼしゅうしています。", meanings: { en: "We are recruiting new employees.", bn: "আমরা নতুন কর্মচারী নিয়োগ দিচ্ছি।" } } },
                    { char: "応", on: "オウ", kun: "こた(える)", meanings: { en: "respond, apply", bn: "সাড়া দেওয়া" }, strokes: 7, examples: [
                        { word: "応募", reading: "おうぼ", meanings: { en: "applying (for a job/contest)", bn: "আবেদন করা" } },
                        { word: "対応", reading: "たいおう", meanings: { en: "response, handling", bn: "মোকাবিলা" } },
                        { word: "応援", reading: "おうえん", meanings: { en: "cheering, support", bn: "উৎসাহ প্রদান" } }
                    ], exampleSentence: { jp: "求人に応募しました。", reading: "きゅうじんにおうぼしました。", meanings: { en: "I applied for the job opening.", bn: "আমি চাকরির বিজ্ঞপ্তিতে আবেদন করেছি।" } } },
                    { char: "接", on: "セツ", kun: "つ(ぐ)", meanings: { en: "contact, adjoin", bn: "সংযোগ, সংস্পর্শ" }, strokes: 11, examples: [
                        { word: "面接", reading: "めんせつ", meanings: { en: "interview (job)", bn: "সাক্ষাৎকার" } },
                        { word: "接する", reading: "せっする", meanings: { en: "to contact, come into contact", bn: "সংস্পর্শে আসা" } },
                        { word: "直接", reading: "ちょくせつ", meanings: { en: "direct(ly)", bn: "সরাসরি" } }
                    ], exampleSentence: { jp: "明日面接があります。", reading: "あしためんせつがあります。", meanings: { en: "I have an interview tomorrow.", bn: "আগামীকাল আমার একটি সাক্ষাৎকার আছে।" } } },
                    { char: "面", on: "メン", kun: "おも、つら", meanings: { en: "face, surface, aspect", bn: "মুখ, পৃষ্ঠ" }, strokes: 9, examples: [
                        { word: "面接", reading: "めんせつ", meanings: { en: "interview (job)", bn: "সাক্ষাৎকার" } },
                        { word: "画面", reading: "がめん", meanings: { en: "screen (display)", bn: "স্ক্রিন" } },
                        { word: "真面目", reading: "まじめ", meanings: { en: "serious, diligent", bn: "গম্ভীর, পরিশ্রমী" } }
                    ], exampleSentence: { jp: "画面が見えません。", reading: "がめんがみえません。", meanings: { en: "I cannot see the screen.", bn: "আমি স্ক্রিন দেখতে পাচ্ছি না।" } } },
                    { char: "訪", on: "ホウ", kun: "おとず(れる)、たず(ねる)", meanings: { en: "visit", bn: "পরিদর্শন করা" }, strokes: 11, examples: [
                        { word: "訪問", reading: "ほうもん", meanings: { en: "visit", bn: "পরিদর্শন" } },
                        { word: "訪れる", reading: "おとずれる", meanings: { en: "to visit", bn: "পরিদর্শন করা" } },
                        { word: "訪ねる", reading: "たずねる", meanings: { en: "to visit (a person)", bn: "সাক্ষাৎ করতে যাওয়া" } }
                    ], exampleSentence: { jp: "来週、会社を訪問します。", reading: "らいしゅう、かいしゃをほうもんします。", meanings: { en: "I will visit the company next week.", bn: "আগামী সপ্তাহে আমি কোম্পানি পরিদর্শন করব।" } } },
                    { char: "設", on: "セツ", kun: "もう(ける)", meanings: { en: "establish, set up", bn: "প্রতিষ্ঠা করা" }, strokes: 11, examples: [
                        { word: "設置", reading: "せっち", meanings: { en: "installation", bn: "স্থাপন" } },
                        { word: "設備", reading: "せつび", meanings: { en: "equipment, facilities", bn: "সরঞ্জাম" } },
                        { word: "建設", reading: "けんせつ", meanings: { en: "construction", bn: "নির্মাণ" } }
                    ], exampleSentence: { jp: "新しい設備を導入しました。", reading: "あたらしいせつびをどうにゅうしました。", meanings: { en: "We introduced new equipment.", bn: "আমরা নতুন সরঞ্জাম চালু করেছি।" } } },
                    { char: "議", on: "ギ", kun: "", meanings: { en: "discuss, deliberate", bn: "আলোচনা করা" }, strokes: 20, examples: [
                        { word: "会議", reading: "かいぎ", meanings: { en: "meeting", bn: "সভা" } },
                        { word: "議論", reading: "ぎろん", meanings: { en: "discussion, debate", bn: "আলোচনা" } },
                        { word: "議員", reading: "ぎいん", meanings: { en: "member of parliament", bn: "সংসদ সদস্য" } }
                    ], exampleSentence: { jp: "明日会議があります。", reading: "あしたかいぎがあります。", meanings: { en: "There is a meeting tomorrow.", bn: "আগামীকাল একটি সভা আছে।" } } },
                    { char: "打", on: "ダ", kun: "う(つ)", meanings: { en: "hit, strike", bn: "আঘাত করা" }, strokes: 5, examples: [
                        { word: "打つ", reading: "うつ", meanings: { en: "to hit, strike", bn: "আঘাত করা" } },
                        { word: "打ち合わせ", reading: "うちあわせ", meanings: { en: "business meeting/arrangement", bn: "প্রস্তুতিমূলক সভা" } },
                        { word: "打撃", reading: "だげき", meanings: { en: "blow, impact", bn: "আঘাত" } }
                    ], exampleSentence: { jp: "午後打ち合わせがあります。", reading: "ごごうちあわせがあります。", meanings: { en: "There is a meeting in the afternoon.", bn: "বিকেলে একটি প্রস্তুতিমূলক সভা আছে।" } } },
                    { char: "専", on: "セン", kun: "", meanings: { en: "special, exclusive", bn: "বিশেষ, একচেটিয়া" }, strokes: 9, examples: [
                        { word: "専門", reading: "せんもん", meanings: { en: "specialty, expertise", bn: "বিশেষত্ব" } },
                        { word: "専攻", reading: "せんこう", meanings: { en: "major (academic)", bn: "প্রধান বিষয়" } },
                        { word: "専用", reading: "せんよう", meanings: { en: "exclusive use", bn: "একচেটিয়া ব্যবহার" } }
                    ], exampleSentence: { jp: "経済学を専攻しています。", reading: "けいざいがくをせんこうしています。", meanings: { en: "I am majoring in economics.", bn: "আমি অর্থনীতি বিষয়ে অধ্যয়ন করছি।" } } },
                    { char: "案", on: "アン", kun: "", meanings: { en: "plan, proposal", bn: "পরিকল্পনা" }, strokes: 10, examples: [
                        { word: "案", reading: "あん", meanings: { en: "plan, proposal", bn: "পরিকল্পনা" } },
                        { word: "提案", reading: "ていあん", meanings: { en: "proposal", bn: "প্রস্তাব" } },
                        { word: "案内", reading: "あんない", meanings: { en: "guide, information", bn: "নির্দেশনা" } }
                    ], exampleSentence: { jp: "新しいアイデアを提案します。", reading: "あたらしいアイデアをていあんします。", meanings: { en: "I will propose a new idea.", bn: "আমি একটি নতুন ধারণা প্রস্তাব করব।" } } },
                    { char: "的", on: "テキ", kun: "まと", meanings: { en: "-like, target, aim", bn: "-এর মতো, লক্ষ্য" }, strokes: 8, examples: [
                        { word: "目的", reading: "もくてき", meanings: { en: "purpose", bn: "উদ্দেশ্য" } },
                        { word: "積極的", reading: "せっきょくてき", meanings: { en: "proactive, positive", bn: "উদ্যমী" } },
                        { word: "的", reading: "まと", meanings: { en: "target", bn: "লক্ষ্যবস্তু" } }
                    ], exampleSentence: { jp: "目的を持って勉強します。", reading: "もくてきをもってべんきょうします。", meanings: { en: "I study with a purpose.", bn: "আমি একটি উদ্দেশ্য নিয়ে পড়াশোনা করি।" } } },
                    { char: "具", on: "グ", kun: "", meanings: { en: "tool, ingredient, concrete", bn: "সরঞ্জাম, উপাদান" }, strokes: 8, examples: [
                        { word: "具体的", reading: "ぐたいてき", meanings: { en: "concrete, specific", bn: "সুনির্দিষ্ট" } },
                        { word: "道具", reading: "どうぐ", meanings: { en: "tool", bn: "সরঞ্জাম" } },
                        { word: "家具", reading: "かぐ", meanings: { en: "furniture", bn: "আসবাবপত্র" } }
                    ], exampleSentence: { jp: "もっと具体的に説明してください。", reading: "もっとぐたいてきにせつめいしてください。", meanings: { en: "Please explain more concretely.", bn: "অনুগ্রহ করে আরও সুনির্দিষ্টভাবে ব্যাখ্যা করুন।" } } },
                    { char: "当", on: "トウ", kun: "あ(たる)、あ(てる)", meanings: { en: "hit, appropriate, this", bn: "উপযুক্ত, এই" }, strokes: 6, examples: [
                        { word: "当然", reading: "とうぜん", meanings: { en: "naturally, of course", bn: "স্বাভাবিকভাবে" } },
                        { word: "本当", reading: "ほんとう", meanings: { en: "really, true", bn: "সত্যিই" } },
                        { word: "担当", reading: "たんとう", meanings: { en: "in charge of", bn: "দায়িত্বে থাকা" } }
                    ], exampleSentence: { jp: "私がこの仕事を担当します。", reading: "わたしがこのしごとをたんとうします。", meanings: { en: "I am in charge of this work.", bn: "আমি এই কাজের দায়িত্বে আছি।" } } },
                    { char: "満", on: "マン", kun: "み(ちる)、み(たす)", meanings: { en: "full, fulfill", bn: "পূর্ণ" }, strokes: 12, examples: [
                        { word: "満足", reading: "まんぞく", meanings: { en: "satisfaction", bn: "সন্তুষ্টি" } },
                        { word: "満員", reading: "まんいん", meanings: { en: "full (of people)", bn: "পূর্ণ (মানুষে)" } },
                        { word: "不満", reading: "ふまん", meanings: { en: "dissatisfaction", bn: "অসন্তুষ্টি" } }
                    ], exampleSentence: { jp: "結果に満足しています。", reading: "けっかにまんぞくしています。", meanings: { en: "I am satisfied with the result.", bn: "আমি ফলাফলে সন্তুষ্ট।" } } },
                    { char: "課", on: "カ", kun: "", meanings: { en: "section, lesson, assign", bn: "বিভাগ, পাঠ" }, strokes: 15, examples: [
                        { word: "課", reading: "か", meanings: { en: "section (of a company)", bn: "বিভাগ" } },
                        { word: "課題", reading: "かだい", meanings: { en: "task, assignment", bn: "কার্যভার" } },
                        { word: "第一課", reading: "だいいっか", meanings: { en: "lesson one", bn: "প্রথম পাঠ" } }
                    ], exampleSentence: { jp: "今日の課題を終わらせました。", reading: "きょうのかだいをおわらせました。", meanings: { en: "I finished today's assignment.", bn: "আমি আজকের কার্যভার শেষ করেছি।" } } },
                    { char: "整", on: "セイ", kun: "ととの(える)", meanings: { en: "arrange, put in order", bn: "সাজানো" }, strokes: 16, examples: [
                        { word: "整理", reading: "せいり", meanings: { en: "organizing, arranging", bn: "গোছানো" } },
                        { word: "調整", reading: "ちょうせい", meanings: { en: "adjustment", bn: "সমন্বয়" } },
                        { word: "整える", reading: "ととのえる", meanings: { en: "to arrange, prepare", bn: "প্রস্তুত করা" } }
                    ], exampleSentence: { jp: "机の上を整理しました。", reading: "つくえのうえをせいりしました。", meanings: { en: "I organized the top of my desk.", bn: "আমি আমার ডেস্কের উপরটা গুছিয়েছি।" } } },
                    { char: "役", on: "ヤク、エキ", kun: "", meanings: { en: "role, duty, use", bn: "ভূমিকা, কর্তব্য" }, strokes: 7, examples: [
                        { word: "役割", reading: "やくわり", meanings: { en: "role", bn: "ভূমিকা" } },
                        { word: "役に立つ", reading: "やくにたつ", meanings: { en: "to be useful", bn: "কাজে লাগা" } },
                        { word: "市役所", reading: "しやくしょ", meanings: { en: "city hall", bn: "সিটি হল" } }
                    ], exampleSentence: { jp: "これはとても役に立ちます。", reading: "これはとてもやくにたちます。", meanings: { en: "This is very useful.", bn: "এটি খুবই কাজে লাগে।" } } },
                    { char: "完", on: "カン", kun: "", meanings: { en: "complete, perfect", bn: "সম্পূর্ণ" }, strokes: 7, examples: [
                        { word: "完成", reading: "かんせい", meanings: { en: "completion", bn: "সমাপ্তি" } },
                        { word: "完全", reading: "かんぜん", meanings: { en: "perfect, complete", bn: "নিখুঁত" } },
                        { word: "完了", reading: "かんりょう", meanings: { en: "completion, finish", bn: "সম্পন্ন" } }
                    ], exampleSentence: { jp: "作業が完成しました。", reading: "さぎょうがかんせいしました。", meanings: { en: "The work has been completed.", bn: "কাজটি সম্পন্ন হয়েছে।" } } },
                    { char: "録", on: "ロク", kun: "", meanings: { en: "record", bn: "রেকর্ড" }, strokes: 16, examples: [
                        { word: "記録", reading: "きろく", meanings: { en: "record", bn: "রেকর্ড" } },
                        { word: "録音", reading: "ろくおん", meanings: { en: "audio recording", bn: "অডিও রেকর্ডিং" } },
                        { word: "登録", reading: "とうろく", meanings: { en: "registration", bn: "নিবন্ধন" } }
                    ], exampleSentence: { jp: "会議の内容を記録します。", reading: "かいぎのないようをきろくします。", meanings: { en: "I will record the content of the meeting.", bn: "আমি সভার বিষয়বস্তু রেকর্ড করব।" } } }
                ]
            },

            {
                id: "trouble",
                title: "Trouble",
                items: [
                    { char: "危", on: "キ", kun: "あぶ(ない)、あや(うい)", meanings: { en: "dangerous", bn: "বিপজ্জনক" }, strokes: 6, examples: [
                        { word: "危険", reading: "きけん", meanings: { en: "danger", bn: "বিপদ" } },
                        { word: "危ない", reading: "あぶない", meanings: { en: "dangerous", bn: "বিপজ্জনক" } },
                        { word: "危機", reading: "きき", meanings: { en: "crisis", bn: "সংকট" } }
                    ], exampleSentence: { jp: "この道は危険です。", reading: "このみちはきけんです。", meanings: { en: "This road is dangerous.", bn: "এই রাস্তাটি বিপজ্জনক।" } } },
                    { char: "険", on: "ケン", kun: "けわ(しい)", meanings: { en: "steep, risky", bn: "খাড়া, ঝুঁকিপূর্ণ" }, strokes: 11, examples: [
                        { word: "危険", reading: "きけん", meanings: { en: "danger", bn: "বিপদ" } },
                        { word: "保険", reading: "ほけん", meanings: { en: "insurance", bn: "বীমা" } },
                        { word: "険しい", reading: "けわしい", meanings: { en: "steep, harsh", bn: "খাড়া" } }
                    ], exampleSentence: { jp: "保険に入っています。", reading: "ほけんにはいっています。", meanings: { en: "I have insurance.", bn: "আমার বীমা আছে।" } } },
                    { char: "常", on: "ジョウ", kun: "つね", meanings: { en: "normal, always", bn: "স্বাভাবিক, সর্বদা" }, strokes: 11, examples: [
                        { word: "非常", reading: "ひじょう", meanings: { en: "extraordinary, emergency", bn: "অস্বাভাবিক, জরুরি" } },
                        { word: "日常", reading: "にちじょう", meanings: { en: "everyday, daily life", bn: "দৈনন্দিন" } },
                        { word: "正常", reading: "せいじょう", meanings: { en: "normal", bn: "স্বাভাবিক" } }
                    ], exampleSentence: { jp: "非常に大切なことです。", reading: "ひじょうにたいせつなことです。", meanings: { en: "It is an extremely important matter.", bn: "এটি একটি অত্যন্ত গুরুত্বপূর্ণ বিষয়।" } } },
                    { char: "非", on: "ヒ", kun: "", meanings: { en: "not, non-, wrong", bn: "না, ভুল" }, strokes: 8, examples: [
                        { word: "非常", reading: "ひじょう", meanings: { en: "extraordinary, emergency", bn: "অস্বাভাবিক, জরুরি" } },
                        { word: "非常口", reading: "ひじょうぐち", meanings: { en: "emergency exit", bn: "জরুরি নির্গমন পথ" } },
                        { word: "非常識", reading: "ひじょうしき", meanings: { en: "senseless, thoughtless", bn: "অসংবেদনশীল" } }
                    ], exampleSentence: { jp: "非常口はどこですか。", reading: "ひじょうぐちはどこですか。", meanings: { en: "Where is the emergency exit?", bn: "জরুরি নির্গমন পথ কোথায়?" } } },
                    { char: "折", on: "セツ", kun: "お(る)、お(れる)", meanings: { en: "fold, break", bn: "ভাঁজ করা, ভাঙা" }, strokes: 7, examples: [
                        { word: "折る", reading: "おる", meanings: { en: "to fold, break", bn: "ভাঁজ করা" } },
                        { word: "骨折", reading: "こっせつ", meanings: { en: "bone fracture", bn: "হাড় ভাঙা" } },
                        { word: "折れる", reading: "おれる", meanings: { en: "to break, snap", bn: "ভেঙে যাওয়া" } }
                    ], exampleSentence: { jp: "腕を骨折しました。", reading: "うでをこっせつしました。", meanings: { en: "I fractured my arm.", bn: "আমার হাত ভেঙে গেছে।" } } },
                    { char: "倒", on: "トウ", kun: "たお(れる)、たお(す)", meanings: { en: "fall down, overthrow", bn: "পড়ে যাওয়া" }, strokes: 10, examples: [
                        { word: "倒れる", reading: "たおれる", meanings: { en: "to fall down, collapse", bn: "পড়ে যাওয়া" } },
                        { word: "面倒", reading: "めんどう", meanings: { en: "troublesome, bother", bn: "ঝামেলাপূর্ণ" } },
                        { word: "倒産", reading: "とうさん", meanings: { en: "bankruptcy", bn: "দেউলিয়া হওয়া" } }
                    ], exampleSentence: { jp: "この作業は面倒です。", reading: "このさぎょうはめんどうです。", meanings: { en: "This task is troublesome.", bn: "এই কাজটি ঝামেলাপূর্ণ।" } } },
                    { char: "訓", on: "クン", kun: "", meanings: { en: "instruction, teaching", bn: "শিক্ষাদান, নির্দেশনা" }, strokes: 10, examples: [
                        { word: "訓練", reading: "くんれん", meanings: { en: "training", bn: "প্রশিক্ষণ" } },
                        { word: "教訓", reading: "きょうくん", meanings: { en: "lesson, moral", bn: "শিক্ষণীয় বিষয়" } },
                        { word: "訓読み", reading: "くんよみ", meanings: { en: "kun reading (of kanji)", bn: "কুন রিডিং" } }
                    ], exampleSentence: { jp: "毎月、避難訓練をします。", reading: "まいつき、ひなんくんれんをします。", meanings: { en: "We do an evacuation drill every month.", bn: "আমরা প্রতি মাসে সরে যাওয়ার মহড়া করি।" } } },
                    { char: "助", on: "ジョ", kun: "たす(ける)、たす(かる)", meanings: { en: "help, assist", bn: "সাহায্য করা" }, strokes: 7, examples: [
                        { word: "助ける", reading: "たすける", meanings: { en: "to help, save", bn: "সাহায্য করা" } },
                        { word: "助手", reading: "じょしゅ", meanings: { en: "assistant", bn: "সহকারী" } },
                        { word: "援助", reading: "えんじょ", meanings: { en: "aid, assistance", bn: "সহায়তা" } }
                    ], exampleSentence: { jp: "困っている人を助けました。", reading: "こまっているひとをたすけました。", meanings: { en: "I helped a person in trouble.", bn: "আমি বিপদগ্রস্ত একজনকে সাহায্য করেছি।" } } },
                    { char: "仮", on: "カ", kun: "かり", meanings: { en: "temporary, provisional", bn: "সাময়িক" }, strokes: 6, examples: [
                        { word: "仮に", reading: "かりに", meanings: { en: "hypothetically, temporarily", bn: "সাময়িকভাবে" } },
                        { word: "仮定", reading: "かてい", meanings: { en: "assumption, hypothesis", bn: "অনুমান" } },
                        { word: "仮面", reading: "かめん", meanings: { en: "mask", bn: "মুখোশ" } }
                    ], exampleSentence: { jp: "仮に失敗しても大丈夫です。", reading: "かりにしっぱいしてもだいじょうぶです。", meanings: { en: "Even if we fail hypothetically, it's okay.", bn: "যদি ব্যর্থও হই, তাতেও সমস্যা নেই।" } } },
                    { char: "組", on: "ソ", kun: "く(む)、くみ", meanings: { en: "group, assemble", bn: "দল, একত্রিত করা" }, strokes: 11, examples: [
                        { word: "組む", reading: "くむ", meanings: { en: "to assemble, form", bn: "একত্রিত করা" } },
                        { word: "番組", reading: "ばんぐみ", meanings: { en: "(TV/radio) program", bn: "অনুষ্ঠান" } },
                        { word: "組織", reading: "そしき", meanings: { en: "organization", bn: "প্রতিষ্ঠান" } }
                    ], exampleSentence: { jp: "面白い番組を見ました。", reading: "おもしろいばんぐみをみました。", meanings: { en: "I watched an interesting program.", bn: "আমি একটি মজার অনুষ্ঠান দেখেছি।" } } },
                    { char: "吸", on: "キュウ", kun: "す(う)", meanings: { en: "inhale, absorb", bn: "শ্বাস নেওয়া" }, strokes: 6, examples: [
                        { word: "呼吸", reading: "こきゅう", meanings: { en: "breathing, respiration", bn: "শ্বাস-প্রশ্বাস" } },
                        { word: "吸う", reading: "すう", meanings: { en: "to inhale, breathe in", bn: "শ্বাস নেওয়া" } },
                        { word: "吸収", reading: "きゅうしゅう", meanings: { en: "absorption", bn: "শোষণ" } }
                    ], exampleSentence: { jp: "深呼吸をしてください。", reading: "しんこきゅうをしてください。", meanings: { en: "Please take a deep breath.", bn: "অনুগ্রহ করে গভীর শ্বাস নিন।" } } },
                    { char: "難", on: "ナン", kun: "むずか(しい)、かた(い)", meanings: { en: "difficult, disaster", bn: "কঠিন, দুর্যোগ" }, strokes: 18, examples: [
                        { word: "難しい", reading: "むずかしい", meanings: { en: "difficult", bn: "কঠিন" } },
                        { word: "困難", reading: "こんなん", meanings: { en: "difficulty, hardship", bn: "কষ্ট" } },
                        { word: "災難", reading: "さいなん", meanings: { en: "disaster, misfortune", bn: "দুর্যোগ" } }
                    ], exampleSentence: { jp: "この問題は難しいです。", reading: "このもんだいはむずかしいです。", meanings: { en: "This problem is difficult.", bn: "এই সমস্যাটি কঠিন।" } } },
                    { char: "息", on: "ソク", kun: "いき", meanings: { en: "breath", bn: "শ্বাস" }, strokes: 10, examples: [
                        { word: "息", reading: "いき", meanings: { en: "breath", bn: "শ্বাস" } },
                        { word: "息子", reading: "むすこ", meanings: { en: "son", bn: "ছেলে" } },
                        { word: "休息", reading: "きゅうそく", meanings: { en: "rest", bn: "বিশ্রাম" } }
                    ], exampleSentence: { jp: "大きく息を吸ってください。", reading: "おおきくいきをすってください。", meanings: { en: "Please take a big breath.", bn: "অনুগ্রহ করে বড় করে শ্বাস নিন।" } } },
                    { char: "逃", on: "トウ", kun: "に(げる)、のが(れる)", meanings: { en: "escape, flee", bn: "পালানো" }, strokes: 9, examples: [
                        { word: "逃げる", reading: "にげる", meanings: { en: "to escape, run away", bn: "পালানো" } },
                        { word: "逃走", reading: "とうそう", meanings: { en: "flight, escape", bn: "পলায়ন" } },
                        { word: "見逃す", reading: "みのがす", meanings: { en: "to overlook, miss", bn: "লক্ষ্য না করা" } }
                    ], exampleSentence: { jp: "すぐに逃げてください。", reading: "すぐににげてください。", meanings: { en: "Please run away immediately.", bn: "অনুগ্রহ করে অবিলম্বে পালিয়ে যান।" } } },
                    { char: "察", on: "サツ", kun: "", meanings: { en: "guess, sense, inspect", bn: "অনুমান করা" }, strokes: 14, examples: [
                        { word: "警察", reading: "けいさつ", meanings: { en: "police", bn: "পুলিশ" } },
                        { word: "観察", reading: "かんさつ", meanings: { en: "observation", bn: "পর্যবেক্ষণ" } },
                        { word: "察する", reading: "さっする", meanings: { en: "to guess, sense", bn: "অনুমান করা" } }
                    ], exampleSentence: { jp: "警察に電話しました。", reading: "けいさつにでんわしました。", meanings: { en: "I called the police.", bn: "আমি পুলিশকে ফোন করেছি।" } } },
                    { char: "警", on: "ケイ", kun: "", meanings: { en: "warn, alert", bn: "সতর্ক করা" }, strokes: 19, examples: [
                        { word: "警察", reading: "けいさつ", meanings: { en: "police", bn: "পুলিশ" } },
                        { word: "警告", reading: "けいこく", meanings: { en: "warning", bn: "সতর্কতা" } },
                        { word: "警備", reading: "けいび", meanings: { en: "security, guarding", bn: "নিরাপত্তা" } }
                    ], exampleSentence: { jp: "警備員が立っています。", reading: "けいびいんがたっています。", meanings: { en: "A security guard is standing there.", bn: "একজন নিরাপত্তারক্ষী দাঁড়িয়ে আছে।" } } },
                    { char: "官", on: "カン", kun: "", meanings: { en: "government official", bn: "সরকারি কর্মকর্তা" }, strokes: 8, examples: [
                        { word: "警官", reading: "けいかん", meanings: { en: "police officer", bn: "পুলিশ কর্মকর্তা" } },
                        { word: "官庁", reading: "かんちょう", meanings: { en: "government office", bn: "সরকারি দপ্তর" } },
                        { word: "外交官", reading: "がいこうかん", meanings: { en: "diplomat", bn: "কূটনীতিক" } }
                    ], exampleSentence: { jp: "警官に道を聞きました。", reading: "けいかんにみちをききました。", meanings: { en: "I asked a police officer for directions.", bn: "আমি একজন পুলিশ কর্মকর্তাকে রাস্তা জিজ্ঞাসা করেছি।" } } },
                    { char: "故", on: "コ", kun: "ゆえ", meanings: { en: "reason, incident, deceased", bn: "কারণ, ঘটনা" }, strokes: 9, examples: [
                        { word: "事故", reading: "じこ", meanings: { en: "accident", bn: "দুর্ঘটনা" } },
                        { word: "故障", reading: "こしょう", meanings: { en: "breakdown, malfunction", bn: "বিকল হওয়া" } },
                        { word: "故郷", reading: "こきょう", meanings: { en: "hometown", bn: "জন্মভূমি" } }
                    ], exampleSentence: { jp: "事故の原因を調べます。", reading: "じこのげんいんをしらべます。", meanings: { en: "I will investigate the cause of the accident.", bn: "আমি দুর্ঘটনার কারণ অনুসন্ধান করব।" } } },
                    { char: "件", on: "ケン", kun: "", meanings: { en: "matter, case, item", bn: "বিষয়, ঘটনা" }, strokes: 6, examples: [
                        { word: "事件", reading: "じけん", meanings: { en: "incident", bn: "ঘটনা" } },
                        { word: "件", reading: "けん", meanings: { en: "matter, item", bn: "বিষয়" } },
                        { word: "条件", reading: "じょうけん", meanings: { en: "condition", bn: "শর্ত" } }
                    ], exampleSentence: { jp: "大きな事件が起きました。", reading: "おおきなじけんがおきました。", meanings: { en: "A big incident occurred.", bn: "একটি বড় ঘটনা ঘটেছে।" } } },
                    { char: "液", on: "エキ", kun: "", meanings: { en: "liquid, fluid", bn: "তরল" }, strokes: 11, examples: [
                        { word: "液体", reading: "えきたい", meanings: { en: "liquid", bn: "তরল পদার্থ" } },
                        { word: "血液", reading: "けつえき", meanings: { en: "blood", bn: "রক্ত" } },
                        { word: "液晶", reading: "えきしょう", meanings: { en: "liquid crystal (LCD)", bn: "লিকুইড ক্রিস্টাল" } }
                    ], exampleSentence: { jp: "血液型は何ですか。", reading: "けつえきがたはなんですか。", meanings: { en: "What is your blood type?", bn: "আপনার রক্তের গ্রুপ কী?" } } }
                ]
            },

            {
                id: "preparation-reception",
                title: "Preparation & Reception",
                items: [
                    { char: "備", on: "ビ", kun: "そな(える)", meanings: { en: "prepare, equip", bn: "প্রস্তুত করা" }, strokes: 12, examples: [
                        { word: "準備", reading: "じゅんび", meanings: { en: "preparation", bn: "প্রস্তুতি" } },
                        { word: "設備", reading: "せつび", meanings: { en: "equipment, facilities", bn: "সরঞ্জাম" } },
                        { word: "備える", reading: "そなえる", meanings: { en: "to prepare, equip", bn: "প্রস্তুত রাখা" } }
                    ], exampleSentence: { jp: "会議の準備をします。", reading: "かいぎのじゅんびをします。", meanings: { en: "I will prepare for the meeting.", bn: "আমি সভার প্রস্তুতি নেব।" } } },
                    { char: "位", on: "イ", kun: "くらい", meanings: { en: "rank, position", bn: "অবস্থান, পদ" }, strokes: 7, examples: [
                        { word: "位置", reading: "いち", meanings: { en: "position, location", bn: "অবস্থান" } },
                        { word: "一位", reading: "いちい", meanings: { en: "first place", bn: "প্রথম স্থান" } },
                        { word: "地位", reading: "ちい", meanings: { en: "social status, position", bn: "সামাজিক মর্যাদা" } }
                    ], exampleSentence: { jp: "現在の位置を教えてください。", reading: "げんざいのいちをおしえてください。", meanings: { en: "Please tell me your current position.", bn: "অনুগ্রহ করে আপনার বর্তমান অবস্থান জানান।" } } },
                    { char: "置", on: "チ", kun: "お(く)", meanings: { en: "put, place", bn: "রাখা" }, strokes: 13, examples: [
                        { word: "位置", reading: "いち", meanings: { en: "position, location", bn: "অবস্থান" } },
                        { word: "置く", reading: "おく", meanings: { en: "to put, place", bn: "রাখা" } },
                        { word: "装置", reading: "そうち", meanings: { en: "device, apparatus", bn: "যন্ত্র" } }
                    ], exampleSentence: { jp: "机の上に本を置きました。", reading: "つくえのうえにほんをおきました。", meanings: { en: "I put the book on the desk.", bn: "আমি ডেস্কের উপর বইটি রেখেছি।" } } },
                    { char: "移", on: "イ", kun: "うつ(る)、うつ(す)", meanings: { en: "move, shift", bn: "স্থানান্তর করা" }, strokes: 11, examples: [
                        { word: "移動", reading: "いどう", meanings: { en: "movement, transfer", bn: "স্থানান্তর" } },
                        { word: "移る", reading: "うつる", meanings: { en: "to move, shift", bn: "স্থানান্তরিত হওয়া" } },
                        { word: "移民", reading: "いみん", meanings: { en: "immigrant, immigration", bn: "অভিবাসী" } }
                    ], exampleSentence: { jp: "別の部屋に移動しました。", reading: "べつのへやにいどうしました。", meanings: { en: "I moved to a different room.", bn: "আমি অন্য একটি রুমে স্থানান্তরিত হয়েছি।" } } },
                    { char: "静", on: "セイ、ジョウ", kun: "しず(か)", meanings: { en: "quiet, still", bn: "শান্ত" }, strokes: 14, examples: [
                        { word: "静か", reading: "しずか", meanings: { en: "quiet", bn: "শান্ত" } },
                        { word: "冷静", reading: "れいせい", meanings: { en: "calm, composed", bn: "শান্ত (মানসিকভাবে)" } },
                        { word: "静止", reading: "せいし", meanings: { en: "stillness, rest", bn: "স্থিরতা" } }
                    ], exampleSentence: { jp: "冷静に考えましょう。", reading: "れいせいにかんがえましょう。", meanings: { en: "Let's think calmly.", bn: "চলুন শান্তভাবে চিন্তা করি।" } } },
                    { char: "参", on: "サン", kun: "まい(る)", meanings: { en: "participate, visit (humble)", bn: "অংশগ্রহণ করা" }, strokes: 8, examples: [
                        { word: "参加", reading: "さんか", meanings: { en: "participation", bn: "অংশগ্রহণ" } },
                        { word: "参考", reading: "さんこう", meanings: { en: "reference", bn: "তথ্যসূত্র" } },
                        { word: "参る", reading: "まいる", meanings: { en: "to go/come (humble)", bn: "যাওয়া (নম্র রূপ)" } }
                    ], exampleSentence: { jp: "会議に参加します。", reading: "かいぎにさんかします。", meanings: { en: "I will participate in the meeting.", bn: "আমি সভায় অংশগ্রহণ করব।" } } },
                    { char: "協", on: "キョウ", kun: "", meanings: { en: "cooperate", bn: "সহযোগিতা করা" }, strokes: 8, examples: [
                        { word: "協力", reading: "きょうりょく", meanings: { en: "cooperation", bn: "সহযোগিতা" } },
                        { word: "協会", reading: "きょうかい", meanings: { en: "association, society", bn: "সমিতি" } },
                        { word: "協定", reading: "きょうてい", meanings: { en: "agreement, pact", bn: "চুক্তি" } }
                    ], exampleSentence: { jp: "みんなで協力しましょう。", reading: "みんなできょうりょくしましょう。", meanings: { en: "Let's cooperate together.", bn: "চলুন সবাই মিলে সহযোগিতা করি।" } } },
                    { char: "型", on: "ケイ", kun: "かた", meanings: { en: "model, type, mold", bn: "মডেল, ধরন" }, strokes: 9, examples: [
                        { word: "型", reading: "かた", meanings: { en: "type, model, mold", bn: "ধরন" } },
                        { word: "血液型", reading: "けつえきがた", meanings: { en: "blood type", bn: "রক্তের গ্রুপ" } },
                        { word: "大型", reading: "おおがた", meanings: { en: "large-scale, large size", bn: "বড় আকারের" } }
                    ], exampleSentence: { jp: "血液型は何ですか。", reading: "けつえきがたはなんですか。", meanings: { en: "What is your blood type?", bn: "আপনার রক্তের গ্রুপ কী?" } } },
                    { char: "付", on: "フ", kun: "つ(く)、つ(ける)", meanings: { en: "attach, apply", bn: "সংযুক্ত করা" }, strokes: 5, examples: [
                        { word: "受付", reading: "うけつけ", meanings: { en: "reception desk", bn: "অভ্যর্থনা ডেস্ক" } },
                        { word: "付ける", reading: "つける", meanings: { en: "to attach, put on", bn: "সংযুক্ত করা" } },
                        { word: "気付く", reading: "きづく", meanings: { en: "to notice, realize", bn: "উপলব্ধি করা" } }
                    ], exampleSentence: { jp: "受付はどこですか。", reading: "うけつけはどこですか。", meanings: { en: "Where is the reception desk?", bn: "অভ্যর্থনা ডেস্ক কোথায়?" } } },
                    { char: "制", on: "セイ", kun: "", meanings: { en: "system, control, regulate", bn: "ব্যবস্থা, নিয়ন্ত্রণ" }, strokes: 8, examples: [
                        { word: "制度", reading: "せいど", meanings: { en: "system, institution", bn: "ব্যবস্থা" } },
                        { word: "制限", reading: "せいげん", meanings: { en: "restriction, limit", bn: "সীমাবদ্ধতা" } },
                        { word: "制服", reading: "せいふく", meanings: { en: "uniform", bn: "ইউনিফর্ম" } }
                    ], exampleSentence: { jp: "新しい制度ができました。", reading: "あたらしいせいどができました。", meanings: { en: "A new system was created.", bn: "একটি নতুন ব্যবস্থা তৈরি হয়েছে।" } } },
                    { char: "申", on: "シン", kun: "もう(す)", meanings: { en: "state, apply (humble)", bn: "বলা (নম্র রূপ), আবেদন করা" }, strokes: 5, examples: [
                        { word: "申し込む", reading: "もうしこむ", meanings: { en: "to apply, sign up", bn: "আবেদন করা" } },
                        { word: "申す", reading: "もうす", meanings: { en: "to say (humble)", bn: "বলা (নম্র রূপ)" } },
                        { word: "申請", reading: "しんせい", meanings: { en: "application, request", bn: "আবেদন" } }
                    ], exampleSentence: { jp: "コースに申し込みました。", reading: "コースにもうしこみました。", meanings: { en: "I applied for the course.", bn: "আমি কোর্সে আবেদন করেছি।" } } },
                    { char: "込", on: "コミ", kun: "こ(む)、こ(める)", meanings: { en: "crowded, included, enter into", bn: "ভিড়পূর্ণ, অন্তর্ভুক্ত" }, strokes: 5, examples: [
                        { word: "申し込む", reading: "もうしこむ", meanings: { en: "to apply, sign up", bn: "আবেদন করা" } },
                        { word: "込む", reading: "こむ", meanings: { en: "to be crowded", bn: "ভিড়পূর্ণ হওয়া" } },
                        { word: "税込み", reading: "ぜいこみ", meanings: { en: "tax included", bn: "করসহ" } }
                    ], exampleSentence: { jp: "電車が込んでいます。", reading: "でんしゃがこんでいます。", meanings: { en: "The train is crowded.", bn: "ট্রেনটি ভিড়পূর্ণ।" } } },
                    { char: "示", on: "ジ、シ", kun: "しめ(す)", meanings: { en: "show, indicate", bn: "দেখানো" }, strokes: 5, examples: [
                        { word: "示す", reading: "しめす", meanings: { en: "to show, indicate", bn: "দেখানো" } },
                        { word: "指示", reading: "しじ", meanings: { en: "instruction", bn: "নির্দেশনা" } },
                        { word: "表示", reading: "ひょうじ", meanings: { en: "display, indication", bn: "প্রদর্শন" } }
                    ], exampleSentence: { jp: "指示に従ってください。", reading: "しじにしたがってください。", meanings: { en: "Please follow the instructions.", bn: "অনুগ্রহ করে নির্দেশনা অনুসরণ করুন।" } } },
                    { char: "要", on: "ヨウ", kun: "い(る)", meanings: { en: "need, important", bn: "প্রয়োজন, গুরুত্বপূর্ণ" }, strokes: 9, examples: [
                        { word: "必要", reading: "ひつよう", meanings: { en: "necessary", bn: "প্রয়োজনীয়" } },
                        { word: "重要", reading: "じゅうよう", meanings: { en: "important", bn: "গুরুত্বপূর্ণ" } },
                        { word: "要求", reading: "ようきゅう", meanings: { en: "demand, request", bn: "দাবি" } }
                    ], exampleSentence: { jp: "これは必要な書類です。", reading: "これはひつようなしょるいです。", meanings: { en: "This is a necessary document.", bn: "এটি একটি প্রয়োজনীয় নথি।" } } },
                    { char: "必", on: "ヒツ", kun: "かなら(ず)", meanings: { en: "certainly, must", bn: "অবশ্যই" }, strokes: 5, examples: [
                        { word: "必要", reading: "ひつよう", meanings: { en: "necessary", bn: "প্রয়োজনীয়" } },
                        { word: "必ず", reading: "かならず", meanings: { en: "certainly, without fail", bn: "অবশ্যই" } },
                        { word: "必死", reading: "ひっし", meanings: { en: "desperate, frantic", bn: "মরিয়া" } }
                    ], exampleSentence: { jp: "必ず約束を守ります。", reading: "かならずやくそくをまもります。", meanings: { en: "I will definitely keep my promise.", bn: "আমি অবশ্যই আমার প্রতিশ্রুতি রক্ষা করব।" } } },
                    { char: "確", on: "カク", kun: "たし(かめる)、たし(か)", meanings: { en: "certain, confirm", bn: "নিশ্চিত করা" }, strokes: 15, examples: [
                        { word: "確認", reading: "かくにん", meanings: { en: "confirmation", bn: "নিশ্চিতকরণ" } },
                        { word: "確かに", reading: "たしかに", meanings: { en: "certainly, indeed", bn: "নিশ্চিতভাবে" } },
                        { word: "正確", reading: "せいかく", meanings: { en: "accurate", bn: "সঠিক" } }
                    ], exampleSentence: { jp: "予定を確認しました。", reading: "よていをかくにんしました。", meanings: { en: "I confirmed the schedule.", bn: "আমি সময়সূচি নিশ্চিত করেছি।" } } },
                    { char: "認", on: "ニン", kun: "みと(める)", meanings: { en: "recognize, approve", bn: "স্বীকৃতি দেওয়া" }, strokes: 14, examples: [
                        { word: "確認", reading: "かくにん", meanings: { en: "confirmation", bn: "নিশ্চিতকরণ" } },
                        { word: "認める", reading: "みとめる", meanings: { en: "to recognize, admit", bn: "স্বীকার করা" } },
                        { word: "承認", reading: "しょうにん", meanings: { en: "approval", bn: "অনুমোদন" } }
                    ], exampleSentence: { jp: "彼はミスを認めました。", reading: "かれはミスをみとめました。", meanings: { en: "He admitted his mistake.", bn: "সে তার ভুল স্বীকার করেছে।" } } },
                    { char: "絡", on: "ラク", kun: "から(む)", meanings: { en: "get in touch, entangle", bn: "যোগাযোগ করা" }, strokes: 12, examples: [
                        { word: "連絡", reading: "れんらく", meanings: { en: "contact, communication", bn: "যোগাযোগ" } },
                        { word: "絡む", reading: "からむ", meanings: { en: "to be entangled, involved", bn: "জড়িত হওয়া" } },
                        { word: "連絡先", reading: "れんらくさき", meanings: { en: "contact information", bn: "যোগাযোগের তথ্য" } }
                    ], exampleSentence: { jp: "後で連絡します。", reading: "あとでれんらくします。", meanings: { en: "I will contact you later.", bn: "আমি পরে যোগাযোগ করব।" } } },
                    { char: "修", on: "シュウ", kun: "おさ(める)", meanings: { en: "study, master, repair", bn: "অধ্যয়ন করা, মেরামত করা" }, strokes: 10, examples: [
                        { word: "修理", reading: "しゅうり", meanings: { en: "repair", bn: "মেরামত" } },
                        { word: "修学旅行", reading: "しゅうがくりょこう", meanings: { en: "school (study) trip", bn: "শিক্ষাসফর" } },
                        { word: "研修", reading: "けんしゅう", meanings: { en: "training", bn: "প্রশিক্ষণ" } }
                    ], exampleSentence: { jp: "パソコンを修理してもらいました。", reading: "パソコンをしゅうりしてもらいました。", meanings: { en: "I had my computer repaired.", bn: "আমি আমার কম্পিউটার মেরামত করিয়েছি।" } } },
                    { char: "可", on: "カ", kun: "", meanings: { en: "possible, permit", bn: "সম্ভব, অনুমতি" }, strokes: 5, examples: [
                        { word: "可能", reading: "かのう", meanings: { en: "possible", bn: "সম্ভব" } },
                        { word: "許可", reading: "きょか", meanings: { en: "permission", bn: "অনুমতি" } },
                        { word: "可能性", reading: "かのうせい", meanings: { en: "possibility", bn: "সম্ভাবনা" } }
                    ], exampleSentence: { jp: "成功の可能性があります。", reading: "せいこうのかのうせいがあります。", meanings: { en: "There is a possibility of success.", bn: "সফলতার সম্ভাবনা রয়েছে।" } } }
                ]
            },

            {
                id: "politics-economics",
                title: "Politics & Economics",
                items: [
                    { char: "貿", on: "ボウ", kun: "", meanings: { en: "trade, exchange", bn: "বাণিজ্য" }, strokes: 12, examples: [
                        { word: "貿易", reading: "ぼうえき", meanings: { en: "trade", bn: "বাণিজ্য" } },
                        { word: "貿易会社", reading: "ぼうえきがいしゃ", meanings: { en: "trading company", bn: "বাণিজ্য কোম্পানি" } },
                        { word: "貿易赤字", reading: "ぼうえきあかじ", meanings: { en: "trade deficit", bn: "বাণিজ্য ঘাটতি" } }
                    ], exampleSentence: { jp: "貿易が盛んです。", reading: "ぼうえきがさかんです。", meanings: { en: "Trade is thriving.", bn: "বাণিজ্য সমৃদ্ধ হচ্ছে।" } } },
                    { char: "易", on: "エキ、イ", kun: "やさ(しい)", meanings: { en: "easy, exchange", bn: "সহজ, বিনিময়" }, strokes: 8, examples: [
                        { word: "貿易", reading: "ぼうえき", meanings: { en: "trade", bn: "বাণিজ্য" } },
                        { word: "容易", reading: "ようい", meanings: { en: "easy, simple", bn: "সহজ" } },
                        { word: "安易", reading: "あんい", meanings: { en: "easygoing, facile", bn: "সহজসাধ্য" } }
                    ], exampleSentence: { jp: "この問題は容易ではありません。", reading: "このもんだいはよういではありません。", meanings: { en: "This problem is not easy.", bn: "এই সমস্যাটি সহজ নয়।" } } },
                    { char: "比", on: "ヒ", kun: "くら(べる)", meanings: { en: "compare, ratio", bn: "তুলনা করা" }, strokes: 4, examples: [
                        { word: "比較", reading: "ひかく", meanings: { en: "comparison", bn: "তুলনা" } },
                        { word: "比べる", reading: "くらべる", meanings: { en: "to compare", bn: "তুলনা করা" } },
                        { word: "比較的", reading: "ひかくてき", meanings: { en: "relatively", bn: "তুলনামূলকভাবে" } }
                    ], exampleSentence: { jp: "比較的簡単な問題です。", reading: "ひかくてきかんたんなもんだいです。", meanings: { en: "It is a relatively easy problem.", bn: "এটি তুলনামূলকভাবে সহজ একটি সমস্যা।" } } },
                    { char: "輸", on: "ユ", kun: "", meanings: { en: "transport, import/export", bn: "পরিবহন" }, strokes: 16, examples: [
                        { word: "輸出", reading: "ゆしゅつ", meanings: { en: "export", bn: "রপ্তানি" } },
                        { word: "輸入", reading: "ゆにゅう", meanings: { en: "import", bn: "আমদানি" } },
                        { word: "輸送", reading: "ゆそう", meanings: { en: "transport", bn: "পরিবহন" } }
                    ], exampleSentence: { jp: "車を輸出しています。", reading: "くるまをゆしゅつしています。", meanings: { en: "We export cars.", bn: "আমরা গাড়ি রপ্তানি করি।" } } },
                    { char: "他", on: "タ", kun: "ほか", meanings: { en: "other", bn: "অন্য" }, strokes: 5, examples: [
                        { word: "他", reading: "ほか", meanings: { en: "other, else", bn: "অন্য" } },
                        { word: "他人", reading: "たにん", meanings: { en: "another person, stranger", bn: "অন্য ব্যক্তি" } },
                        { word: "その他", reading: "そのた", meanings: { en: "others, etcetera", bn: "অন্যান্য" } }
                    ], exampleSentence: { jp: "他に質問はありますか。", reading: "ほかにしつもんはありますか。", meanings: { en: "Do you have any other questions?", bn: "আপনার আর কোনো প্রশ্ন আছে কি?" } } },
                    { char: "化", on: "カ、ケ", kun: "ば(ける)", meanings: { en: "change, -ify, transform", bn: "পরিবর্তন" }, strokes: 4, examples: [
                        { word: "変化", reading: "へんか", meanings: { en: "change", bn: "পরিবর্তন" } },
                        { word: "文化", reading: "ぶんか", meanings: { en: "culture", bn: "সংস্কৃতি" } },
                        { word: "国際化", reading: "こくさいか", meanings: { en: "internationalization", bn: "আন্তর্জাতিকীকরণ" } }
                    ], exampleSentence: { jp: "大きな変化がありました。", reading: "おおきなへんかがありました。", meanings: { en: "There was a big change.", bn: "একটি বড় পরিবর্তন হয়েছে।" } } },
                    { char: "均", on: "キン", kun: "", meanings: { en: "equal, average", bn: "সমান, গড়" }, strokes: 7, examples: [
                        { word: "平均", reading: "へいきん", meanings: { en: "average", bn: "গড়" } },
                        { word: "均等", reading: "きんとう", meanings: { en: "equality, evenness", bn: "সমতা" } },
                        { word: "均衡", reading: "きんこう", meanings: { en: "balance, equilibrium", bn: "ভারসাম্য" } }
                    ], exampleSentence: { jp: "平均点は70点でした。", reading: "へいきんてんはななじゅってんでした。", meanings: { en: "The average score was 70 points.", bn: "গড় নম্বর ছিল ৭০।" } } },
                    { char: "倍", on: "バイ", kun: "", meanings: { en: "times, -fold, double", bn: "গুণ" }, strokes: 10, examples: [
                        { word: "二倍", reading: "にばい", meanings: { en: "double, twice", bn: "দ্বিগুণ" } },
                        { word: "倍増", reading: "ばいぞう", meanings: { en: "doubling", bn: "দ্বিগুণ বৃদ্ধি" } },
                        { word: "倍率", reading: "ばいりつ", meanings: { en: "magnification ratio", bn: "বিবর্ধন অনুপাত" } }
                    ], exampleSentence: { jp: "価格が二倍になりました。", reading: "かかくがにばいになりました。", meanings: { en: "The price has doubled.", bn: "দাম দ্বিগুণ হয়েছে।" } } },
                    { char: "増", on: "ゾウ", kun: "ふ(える)、ふ(やす)", meanings: { en: "increase", bn: "বৃদ্ধি পাওয়া" }, strokes: 14, examples: [
                        { word: "増える", reading: "ふえる", meanings: { en: "to increase", bn: "বৃদ্ধি পাওয়া" } },
                        { word: "増加", reading: "ぞうか", meanings: { en: "increase", bn: "বৃদ্ধি" } },
                        { word: "急増", reading: "きゅうぞう", meanings: { en: "rapid increase", bn: "দ্রুত বৃদ্ধি" } }
                    ], exampleSentence: { jp: "収入が増えました。", reading: "しゅうにゅうがふえました。", meanings: { en: "My income has increased.", bn: "আমার আয় বেড়েছে।" } } },
                    { char: "減", on: "ゲン", kun: "へ(る)、へ(らす)", meanings: { en: "decrease", bn: "হ্রাস পাওয়া" }, strokes: 12, examples: [
                        { word: "減る", reading: "へる", meanings: { en: "to decrease", bn: "হ্রাস পাওয়া" } },
                        { word: "減少", reading: "げんしょう", meanings: { en: "decrease, reduction", bn: "হ্রাস" } },
                        { word: "減らす", reading: "へらす", meanings: { en: "to reduce (something)", bn: "কমানো" } }
                    ], exampleSentence: { jp: "支出を減らしましょう。", reading: "ししゅつをへらしましょう。", meanings: { en: "Let's reduce expenditure.", bn: "চলুন ব্যয় কমাই।" } } },
                    { char: "法", on: "ホウ", kun: "", meanings: { en: "law, method", bn: "আইন, পদ্ধতি" }, strokes: 8, examples: [
                        { word: "法律", reading: "ほうりつ", meanings: { en: "law", bn: "আইন" } },
                        { word: "方法", reading: "ほうほう", meanings: { en: "method", bn: "পদ্ধতি" } },
                        { word: "文法", reading: "ぶんぽう", meanings: { en: "grammar", bn: "ব্যাকরণ" } }
                    ], exampleSentence: { jp: "法律を守ってください。", reading: "ほうりつをまもってください。", meanings: { en: "Please obey the law.", bn: "অনুগ্রহ করে আইন মেনে চলুন।" } } },
                    { char: "律", on: "リツ", kun: "", meanings: { en: "law, rhythm", bn: "আইন, ছন্দ" }, strokes: 9, examples: [
                        { word: "法律", reading: "ほうりつ", meanings: { en: "law", bn: "আইন" } },
                        { word: "規律", reading: "きりつ", meanings: { en: "discipline, order", bn: "শৃঙ্খলা" } },
                        { word: "自律", reading: "じりつ", meanings: { en: "self-discipline, autonomy", bn: "স্বায়ত্তশাসন" } }
                    ], exampleSentence: { jp: "この学校は規律が厳しいです。", reading: "このがっこうはきりつがきびしいです。", meanings: { en: "This school's discipline is strict.", bn: "এই স্কুলের শৃঙ্খলা কঠোর।" } } },
                    { char: "治", on: "ジ、チ", kun: "おさ(める)、なお(る)", meanings: { en: "govern, cure", bn: "শাসন করা, নিরাময় করা" }, strokes: 8, examples: [
                        { word: "政治", reading: "せいじ", meanings: { en: "politics", bn: "রাজনীতি" } },
                        { word: "治療", reading: "ちりょう", meanings: { en: "medical treatment", bn: "চিকিৎসা" } },
                        { word: "治る", reading: "なおる", meanings: { en: "to be cured, healed", bn: "সুস্থ হওয়া" } }
                    ], exampleSentence: { jp: "政治に興味があります。", reading: "せいじにきょうみがあります。", meanings: { en: "I am interested in politics.", bn: "আমার রাজনীতিতে আগ্রহ আছে।" } } },
                    { char: "相", on: "ソウ、ショウ", kun: "あい", meanings: { en: "mutual, minister, aspect", bn: "পারস্পরিক, মন্ত্রী" }, strokes: 9, examples: [
                        { word: "相談", reading: "そうだん", meanings: { en: "consultation", bn: "পরামর্শ" } },
                        { word: "首相", reading: "しゅしょう", meanings: { en: "prime minister", bn: "প্রধানমন্ত্রী" } },
                        { word: "相手", reading: "あいて", meanings: { en: "partner, opponent", bn: "প্রতিপক্ষ" } }
                    ], exampleSentence: { jp: "先生に相談します。", reading: "せんせいにそうだんします。", meanings: { en: "I will consult the teacher.", bn: "আমি শিক্ষকের সাথে পরামর্শ করব।" } } },
                    { char: "談", on: "ダン", kun: "", meanings: { en: "talk, discuss", bn: "কথোপকথন" }, strokes: 15, examples: [
                        { word: "相談", reading: "そうだん", meanings: { en: "consultation", bn: "পরামর্শ" } },
                        { word: "会談", reading: "かいだん", meanings: { en: "talks, conference", bn: "আলোচনা" } },
                        { word: "冗談", reading: "じょうだん", meanings: { en: "joke", bn: "রসিকতা" } }
                    ], exampleSentence: { jp: "それは冗談です。", reading: "それはじょうだんです。", meanings: { en: "That is a joke.", bn: "সেটা একটা রসিকতা।" } } },
                    { char: "際", on: "サイ", kun: "きわ", meanings: { en: "occasion, boundary, actual", bn: "উপলক্ষ, সীমানা" }, strokes: 14, examples: [
                        { word: "国際", reading: "こくさい", meanings: { en: "international", bn: "আন্তর্জাতিক" } },
                        { word: "実際", reading: "じっさい", meanings: { en: "actual, in reality", bn: "বাস্তবে" } },
                        { word: "その際", reading: "そのさい", meanings: { en: "on that occasion", bn: "সেই সময়ে" } }
                    ], exampleSentence: { jp: "国際交流をします。", reading: "こくさいこうりゅうをします。", meanings: { en: "I take part in international exchange.", bn: "আমি আন্তর্জাতিক মেলামেশায় অংশ নিই।" } } },
                    { char: "戦", on: "セン", kun: "たたか(う)、いくさ", meanings: { en: "war, battle, fight", bn: "যুদ্ধ" }, strokes: 13, examples: [
                        { word: "戦争", reading: "せんそう", meanings: { en: "war", bn: "যুদ্ধ" } },
                        { word: "戦う", reading: "たたかう", meanings: { en: "to fight, battle", bn: "লড়াই করা" } },
                        { word: "挑戦", reading: "ちょうせん", meanings: { en: "challenge", bn: "চ্যালেঞ্জ" } }
                    ], exampleSentence: { jp: "新しいことに挑戦したいです。", reading: "あたらしいことにちょうせんしたいです。", meanings: { en: "I want to challenge myself with something new.", bn: "আমি নতুন কিছুতে চ্যালেঞ্জ নিতে চাই।" } } },
                    { char: "争", on: "ソウ", kun: "あらそ(う)", meanings: { en: "dispute, compete", bn: "বিবাদ, প্রতিযোগিতা করা" }, strokes: 6, examples: [
                        { word: "戦争", reading: "せんそう", meanings: { en: "war", bn: "যুদ্ধ" } },
                        { word: "争う", reading: "あらそう", meanings: { en: "to dispute, compete", bn: "প্রতিদ্বন্দ্বিতা করা" } },
                        { word: "競争", reading: "きょうそう", meanings: { en: "competition", bn: "প্রতিযোগিতা" } }
                    ], exampleSentence: { jp: "会社間の競争が激しいです。", reading: "かいしゃかんのきょうそうがはげしいです。", meanings: { en: "Competition between companies is fierce.", bn: "কোম্পানিগুলোর মধ্যে প্রতিযোগিতা তীব্র।" } } },
                    { char: "焼", on: "ショウ", kun: "や(く)、や(ける)", meanings: { en: "burn, roast, grill", bn: "পোড়ানো" }, strokes: 12, examples: [
                        { word: "焼く", reading: "やく", meanings: { en: "to burn, grill, bake", bn: "পোড়ানো" } },
                        { word: "日焼け", reading: "ひやけ", meanings: { en: "suntan, sunburn", bn: "রোদে পোড়া" } },
                        { word: "焼き魚", reading: "やきざかな", meanings: { en: "grilled fish", bn: "গ্রিল করা মাছ" } }
                    ], exampleSentence: { jp: "魚を焼きます。", reading: "さかなをやきます。", meanings: { en: "I will grill the fish.", bn: "আমি মাছ গ্রিল করব।" } } },
                    { char: "亡", on: "ボウ", kun: "な(くなる)", meanings: { en: "death, lose, flee", bn: "মৃত্যু, হারানো" }, strokes: 3, examples: [
                        { word: "死亡", reading: "しぼう", meanings: { en: "death", bn: "মৃত্যু" } },
                        { word: "亡くなる", reading: "なくなる", meanings: { en: "to pass away", bn: "মারা যাওয়া" } },
                        { word: "逃亡", reading: "とうぼう", meanings: { en: "flight, escape", bn: "পলায়ন" } }
                    ], exampleSentence: { jp: "祖父が去年亡くなりました。", reading: "そふがきょねんなくなりました。", meanings: { en: "My grandfather passed away last year.", bn: "আমার দাদা গত বছর মারা গেছেন।" } } },
                    { char: "忙", on: "ボウ", kun: "いそが(しい)", meanings: { en: "busy", bn: "ব্যস্ত" }, strokes: 6, examples: [
                        { word: "忙しい", reading: "いそがしい", meanings: { en: "busy", bn: "ব্যস্ত" } },
                        { word: "多忙", reading: "たぼう", meanings: { en: "very busy", bn: "অত্যন্ত ব্যস্ত" } },
                        { word: "忙しく働く", reading: "いそがしくはたらく", meanings: { en: "to work busily", bn: "ব্যস্তভাবে কাজ করা" } }
                    ], exampleSentence: { jp: "今週はとても忙しいです。", reading: "こんしゅうはとてもいそがしいです。", meanings: { en: "I am very busy this week.", bn: "এই সপ্তাহে আমি খুব ব্যস্ত।" } } },
                    { char: "刊", on: "カン", kun: "", meanings: { en: "publish, issue", bn: "প্রকাশ করা" }, strokes: 5, examples: [
                        { word: "刊行", reading: "かんこう", meanings: { en: "publication", bn: "প্রকাশনা" } },
                        { word: "週刊誌", reading: "しゅうかんし", meanings: { en: "weekly magazine", bn: "সাপ্তাহিক পত্রিকা" } },
                        { word: "朝刊", reading: "ちょうかん", meanings: { en: "morning newspaper", bn: "সকালের সংবাদপত্র" } }
                    ], exampleSentence: { jp: "毎朝、朝刊を読みます。", reading: "まいあさ、ちょうかんをよみます。", meanings: { en: "I read the morning newspaper every day.", bn: "আমি প্রতিদিন সকালের সংবাদপত্র পড়ি।" } } },
                    { char: "誌", on: "シ", kun: "", meanings: { en: "magazine, record", bn: "পত্রিকা" }, strokes: 14, examples: [
                        { word: "雑誌", reading: "ざっし", meanings: { en: "magazine", bn: "পত্রিকা" } },
                        { word: "週刊誌", reading: "しゅうかんし", meanings: { en: "weekly magazine", bn: "সাপ্তাহিক পত্রিকা" } },
                        { word: "日誌", reading: "にっし", meanings: { en: "daily journal, log", bn: "দৈনিক জার্নাল" } }
                    ], exampleSentence: { jp: "雑誌を読んでいます。", reading: "ざっしをよんでいます。", meanings: { en: "I am reading a magazine.", bn: "আমি একটি পত্রিকা পড়ছি।" } } },
                    { char: "雑", on: "ザツ、ゾウ", kun: "", meanings: { en: "miscellaneous, rough", bn: "বিবিধ, এলোমেলো" }, strokes: 14, examples: [
                        { word: "雑誌", reading: "ざっし", meanings: { en: "magazine", bn: "পত্রিকা" } },
                        { word: "複雑", reading: "ふくざつ", meanings: { en: "complicated", bn: "জটিল" } },
                        { word: "雑用", reading: "ざつよう", meanings: { en: "miscellaneous tasks, chores", bn: "টুকিটাকি কাজ" } }
                    ], exampleSentence: { jp: "この問題は複雑です。", reading: "このもんだいはふくざつです。", meanings: { en: "This problem is complicated.", bn: "এই সমস্যাটি জটিল।" } } }
                ]
            }
        ]
    },

    n2: { chapters: [] },
    n1: { chapters: [] }

};

if (typeof module !== "undefined" && module.exports) { module.exports = kanjiData; }
