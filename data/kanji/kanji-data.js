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
