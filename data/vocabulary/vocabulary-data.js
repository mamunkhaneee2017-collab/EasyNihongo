/* ==========================================
   VOCABULARY DATA — Level → Chapter → Words
   Each level holds a { chapters: [...] } list;
   each chapter holds { id, title, items }.
   item_index (used by progress_items) is the
   FLAT position across all of a level's
   chapters, computed once by
   data/content-helpers.js's flattenLevel() —
   both the backend and the frontend chapter
   pages call that same function, so the index
   math is never duplicated or allowed to drift.

   `reading` (word- and example-level) is
   HIRAGANA furigana, not romaji — see
   data/grammar/grammar-data.js header for the
   full site-wide convention. Words/sentences
   already written entirely in kana carry no
   `reading` at all — see e.g. はい below.

   Only N5 has real chapters authored so far —
   N4-N1 stay empty/locked, same convention as
   the rest of the site until that content is
   written.
========================================== */

const vocabularyData = {

    n5: {
        chapters: [
            {
                id: "greetings-introductions",
                title: "Greetings & Introductions",
                items: [
                    { word: "おはよう", meanings: { en: "Good morning (casual)", bn: "শুভ সকাল (সাধারণ)" }, example: { jp: "おはよう、元気？", reading: "おはよう、げんき？", meanings: { en: "Good morning, how are you?", bn: "শুভ সকাল, কেমন আছো?" } } },
                    { word: "おはようございます", meanings: { en: "Good morning (polite)", bn: "শুভ সকাল (ভদ্রভাবে)" }, example: { jp: "先生、おはようございます。", reading: "せんせい、おはようございます。", meanings: { en: "Good morning, teacher.", bn: "শিক্ষক, শুভ সকাল।" } } },
                    { word: "こんにちは", meanings: { en: "Hello / Good afternoon", bn: "হ্যালো / শুভ অপরাহ্ন" }, example: { jp: "こんにちは、田中さん。", reading: "こんにちは、たなかさん。", meanings: { en: "Hello, Mr. Tanaka.", bn: "হ্যালো, তানাকা সান।" } } },
                    { word: "こんばんは", meanings: { en: "Good evening", bn: "শুভ সন্ধ্যা" }, example: { jp: "こんばんは、お元気ですか。", reading: "こんばんは、おげんきですか。", meanings: { en: "Good evening, how are you?", bn: "শুভ সন্ধ্যা, আপনি কেমন আছেন?" } } },
                    { word: "さようなら", meanings: { en: "Goodbye", bn: "বিদায়" }, example: { jp: "さようなら、また明日。", reading: "さようなら、またあした。", meanings: { en: "Goodbye, see you tomorrow.", bn: "বিদায়, আগামীকাল দেখা হবে।" } } },
                    { word: "ありがとうございます", meanings: { en: "Thank you (polite)", bn: "ধন্যবাদ (ভদ্রভাবে)" }, example: { jp: "本当にありがとうございます。", reading: "ほんとうにありがとうございます。", meanings: { en: "Thank you so much.", bn: "সত্যিই অনেক ধন্যবাদ।" } } },
                    { word: "すみません", meanings: { en: "Excuse me / I'm sorry", bn: "মাফ করবেন / দুঃখিত" }, example: { jp: "すみません、駅はどこですか。", reading: "すみません、えきはどこですか。", meanings: { en: "Excuse me, where is the station?", bn: "মাফ করবেন, স্টেশন কোথায়?" } } },
                    { word: "はい", meanings: { en: "Yes", bn: "হ্যাঁ" }, example: { jp: "はい、そうです。", meanings: { en: "Yes, that's right.", bn: "হ্যাঁ, ঠিক আছে।" } } },
                    { word: "いいえ", meanings: { en: "No", bn: "না" }, example: { jp: "いいえ、違います。", reading: "いいえ、ちがいます。", meanings: { en: "No, that's wrong.", bn: "না, এটা ভুল।" } } },
                    { word: "私", reading: "わたし", meanings: { en: "I / me", bn: "আমি" }, example: { jp: "私は学生です。", reading: "わたしはがくせいです。", meanings: { en: "I am a student.", bn: "আমি একজন ছাত্র।" } } },
                    { word: "あなた", meanings: { en: "You", bn: "তুমি / আপনি" }, example: { jp: "あなたの名前は何ですか。", reading: "あなたのなまえはなんですか。", meanings: { en: "What is your name?", bn: "আপনার নাম কী?" } } },
                    { word: "名前", reading: "なまえ", meanings: { en: "Name", bn: "নাম" }, example: { jp: "私の名前はマムンです。", reading: "わたしのなまえはマムンです。", meanings: { en: "My name is Mamun.", bn: "আমার নাম মামুন।" } } },
                    { word: "学生", reading: "がくせい", meanings: { en: "Student", bn: "ছাত্র/ছাত্রী" }, example: { jp: "彼は大学の学生です。", reading: "かれはだいがくのがくせいです。", meanings: { en: "He is a university student.", bn: "সে একজন বিশ্ববিদ্যালয়ের ছাত্র।" } } },
                    { word: "先生", reading: "せんせい", meanings: { en: "Teacher", bn: "শিক্ষক" }, example: { jp: "山田先生は優しいです。", reading: "やまだせんせいはやさしいです。", meanings: { en: "Teacher Yamada is kind.", bn: "শিক্ষক ইয়ামাদা সদয়।" } } },
                    { word: "友達", reading: "ともだち", meanings: { en: "Friend", bn: "বন্ধু" }, example: { jp: "彼女は私の友達です。", reading: "かのじょはわたしのともだちです。", meanings: { en: "She is my friend.", bn: "সে আমার বন্ধু।" } } },
                    { word: "はじめまして", meanings: { en: "Nice to meet you (first time)", bn: "আপনার সাথে দেখা হয়ে ভালো লাগলো" }, example: { jp: "はじめまして、山本です。", reading: "はじめまして、やまもとです。", meanings: { en: "Nice to meet you, I'm Yamamoto.", bn: "আপনার সাথে পরিচিত হয়ে ভালো লাগলো, আমি ইয়ামামোতো।" } } },
                    { word: "よろしくお願いします", reading: "よろしくおねがいします", meanings: { en: "Please treat me well / Nice to meet you", bn: "আমার প্রতি সদয় থাকবেন / সাক্ষাৎ ভালো লাগলো" }, example: { jp: "これからよろしくお願いします。", reading: "これからよろしくおねがいします。", meanings: { en: "I look forward to working with you.", bn: "এখন থেকে আপনার সাথে কাজ করতে চাই।" } } }
                ]
            },
            {
                id: "numbers-1-100",
                title: "Numbers 1-100",
                items: [
                    { word: "一", reading: "いち", meanings: { en: "One (1)", bn: "এক (১)" }, example: { jp: "りんごが一つあります。", reading: "りんごがひとつあります。", meanings: { en: "There is one apple.", bn: "একটি আপেল আছে।" } } },
                    { word: "二", reading: "に", meanings: { en: "Two (2)", bn: "দুই (২)" }, example: { jp: "猫が二匹います。", reading: "ねこがにひきいます。", meanings: { en: "There are two cats.", bn: "দুটি বিড়াল আছে।" } } },
                    { word: "三", reading: "さん", meanings: { en: "Three (3)", bn: "তিন (৩)" }, example: { jp: "三時に会いましょう。", reading: "さんじにあいましょう。", meanings: { en: "Let's meet at three o'clock.", bn: "তিনটার সময় দেখা করি।" } } },
                    { word: "四", reading: "よん・し", meanings: { en: "Four (4)", bn: "চার (৪)" }, example: { jp: "四月に日本へ行きます。", reading: "しがつににほんへいきます。", meanings: { en: "I will go to Japan in April.", bn: "এপ্রিল মাসে জাপান যাবো।" } } },
                    { word: "五", reading: "ご", meanings: { en: "Five (5)", bn: "পাঁচ (৫)" }, example: { jp: "五分待ってください。", reading: "ごふんまってください。", meanings: { en: "Please wait five minutes.", bn: "পাঁচ মিনিট অপেক্ষা করুন।" } } },
                    { word: "六", reading: "ろく", meanings: { en: "Six (6)", bn: "ছয় (৬)" }, example: { jp: "六時に起きます。", reading: "ろくじにおきます。", meanings: { en: "I wake up at six o'clock.", bn: "ছয়টার সময় ঘুম থেকে উঠি।" } } },
                    { word: "七", reading: "なな・しち", meanings: { en: "Seven (7)", bn: "সাত (৭)" }, example: { jp: "一週間は七日です。", reading: "いっしゅうかんはなのかです。", meanings: { en: "A week is seven days.", bn: "এক সপ্তাহে সাত দিন।" } } },
                    { word: "八", reading: "はち", meanings: { en: "Eight (8)", bn: "আট (৮)" }, example: { jp: "八時に寝ます。", reading: "はちじにねます。", meanings: { en: "I sleep at eight o'clock.", bn: "আটটার সময় ঘুমাই।" } } },
                    { word: "九", reading: "きゅう", meanings: { en: "Nine (9)", bn: "নয় (৯)" }, example: { jp: "九月は秋です。", reading: "くがつはあきです。", meanings: { en: "September is autumn.", bn: "সেপ্টেম্বর শরৎকাল।" } } },
                    { word: "十", reading: "じゅう", meanings: { en: "Ten (10)", bn: "দশ (১০)" }, example: { jp: "十分かかります。", reading: "じゅっぷんかかります。", meanings: { en: "It takes ten minutes.", bn: "দশ মিনিট লাগে।" } } },
                    { word: "二十", reading: "にじゅう", meanings: { en: "Twenty (20)", bn: "বিশ (২০)" }, example: { jp: "彼は二十歳です。", reading: "かれははたちです。", meanings: { en: "He is twenty years old.", bn: "তার বয়স বিশ বছর।" } } },
                    { word: "三十", reading: "さんじゅう", meanings: { en: "Thirty (30)", bn: "ত্রিশ (৩০)" }, example: { jp: "三十分休みます。", reading: "さんじゅっぷんやすみます。", meanings: { en: "I will rest for thirty minutes.", bn: "ত্রিশ মিনিট বিশ্রাম নেব।" } } },
                    { word: "五十", reading: "ごじゅう", meanings: { en: "Fifty (50)", bn: "পঞ্চাশ (৫০)" }, example: { jp: "五十円ください。", reading: "ごじゅうえんください。", meanings: { en: "Fifty yen, please.", bn: "পঞ্চাশ ইয়েন দিন।" } } },
                    { word: "百", reading: "ひゃく", meanings: { en: "Hundred (100)", bn: "একশ (১০০)" }, example: { jp: "百人が来ました。", reading: "ひゃくにんがきました。", meanings: { en: "A hundred people came.", bn: "একশ জন মানুষ এসেছিল।" } } },
                    { word: "何", reading: "なん・なに", meanings: { en: "What / how many", bn: "কী / কতগুলো" }, example: { jp: "これは何ですか。", reading: "これはなんですか。", meanings: { en: "What is this?", bn: "এটা কী?" } } },
                    { word: "何歳", reading: "なんさい", meanings: { en: "How old", bn: "বয়স কত" }, example: { jp: "何歳ですか。", reading: "なんさいですか。", meanings: { en: "How old are you?", bn: "আপনার বয়স কত?" } } },
                    { word: "一つ", reading: "ひとつ", meanings: { en: "One (thing — counter)", bn: "একটি (জিনিস)" }, example: { jp: "ケーキを一つください。", reading: "ケーキをひとつください。", meanings: { en: "One cake, please.", bn: "একটি কেক দিন।" } } },
                    { word: "二つ", reading: "ふたつ", meanings: { en: "Two (things — counter)", bn: "দুটি (জিনিস)" }, example: { jp: "りんごを二つ買いました。", reading: "りんごをふたつかいました。", meanings: { en: "I bought two apples.", bn: "আমি দুটি আপেল কিনেছি।" } } }
                ]
            },
            {
                id: "family-members",
                title: "Family Members",
                items: [
                    { word: "家族", reading: "かぞく", meanings: { en: "Family", bn: "পরিবার" }, example: { jp: "私の家族は四人です。", reading: "わたしのかぞくはよにんです。", meanings: { en: "My family has four people.", bn: "আমার পরিবারে চারজন সদস্য আছে।" } } },
                    { word: "父", reading: "ちち", meanings: { en: "Father (my own)", bn: "বাবা (নিজের)" }, example: { jp: "父は医者です。", reading: "ちちはいしゃです。", meanings: { en: "My father is a doctor.", bn: "আমার বাবা একজন ডাক্তার।" } } },
                    { word: "母", reading: "はは", meanings: { en: "Mother (my own)", bn: "মা (নিজের)" }, example: { jp: "母は料理が上手です。", reading: "はははりょうりがじょうずです。", meanings: { en: "My mother is good at cooking.", bn: "আমার মা রান্নায় দক্ষ।" } } },
                    { word: "お父さん", reading: "おとうさん", meanings: { en: "Father (someone else's / polite)", bn: "বাবা (অন্যের / ভদ্রভাবে)" }, example: { jp: "田中さんのお父さんは先生です。", reading: "たなかさんのおとうさんはせんせいです。", meanings: { en: "Mr. Tanaka's father is a teacher.", bn: "তানাকার বাবা একজন শিক্ষক।" } } },
                    { word: "お母さん", reading: "おかあさん", meanings: { en: "Mother (someone else's / polite)", bn: "মা (অন্যের / ভদ্রভাবে)" }, example: { jp: "お母さんは家にいますか。", reading: "おかあさんはいえにいますか。", meanings: { en: "Is your mother at home?", bn: "আপনার মা কি বাসায় আছেন?" } } },
                    { word: "兄", reading: "あに", meanings: { en: "Older brother (my own)", bn: "বড় ভাই (নিজের)" }, example: { jp: "兄はサッカーが好きです。", reading: "あにはサッカーがすきです。", meanings: { en: "My older brother likes soccer.", bn: "আমার বড় ভাই ফুটবল পছন্দ করে।" } } },
                    { word: "姉", reading: "あね", meanings: { en: "Older sister (my own)", bn: "বড় বোন (নিজের)" }, example: { jp: "姉は看護師です。", reading: "あねはかんごしです。", meanings: { en: "My older sister is a nurse.", bn: "আমার বড় বোন একজন নার্স।" } } },
                    { word: "弟", reading: "おとうと", meanings: { en: "Younger brother", bn: "ছোট ভাই" }, example: { jp: "弟はまだ小さいです。", reading: "おとうとはまだちいさいです。", meanings: { en: "My younger brother is still small.", bn: "আমার ছোট ভাই এখনও ছোট।" } } },
                    { word: "妹", reading: "いもうと", meanings: { en: "Younger sister", bn: "ছোট বোন" }, example: { jp: "妹は学校に行きます。", reading: "いもうとはがっこうにいきます。", meanings: { en: "My younger sister goes to school.", bn: "আমার ছোট বোন স্কুলে যায়।" } } },
                    { word: "兄弟", reading: "きょうだい", meanings: { en: "Siblings", bn: "ভাইবোন" }, example: { jp: "兄弟がいますか。", reading: "きょうだいがいますか。", meanings: { en: "Do you have any siblings?", bn: "তোমার কি ভাইবোন আছে?" } } },
                    { word: "両親", reading: "りょうしん", meanings: { en: "Parents", bn: "বাবা-মা" }, example: { jp: "両親と旅行します。", reading: "りょうしんとりょこうします。", meanings: { en: "I will travel with my parents.", bn: "আমি বাবা-মায়ের সাথে ভ্রমণ করব।" } } },
                    { word: "子供", reading: "こども", meanings: { en: "Child / children", bn: "শিশু / সন্তান" }, example: { jp: "子供が公園で遊んでいます。", reading: "こどもがこうえんであそんでいます。", meanings: { en: "The children are playing in the park.", bn: "শিশুরা পার্কে খেলছে।" } } },
                    { word: "祖父", reading: "そふ", meanings: { en: "Grandfather (my own)", bn: "দাদা/নানা (নিজের)" }, example: { jp: "祖父は九十歳です。", reading: "そふはきゅうじゅっさいです。", meanings: { en: "My grandfather is ninety years old.", bn: "আমার দাদার বয়স নব্বই বছর।" } } },
                    { word: "祖母", reading: "そぼ", meanings: { en: "Grandmother (my own)", bn: "দাদি/নানি (নিজের)" }, example: { jp: "祖母はいつも優しいです。", reading: "そぼはいつもやさしいです。", meanings: { en: "My grandmother is always kind.", bn: "আমার দাদি সবসময় সদয়।" } } },
                    { word: "夫", reading: "おっと", meanings: { en: "Husband", bn: "স্বামী" }, example: { jp: "夫は会社員です。", reading: "おっとはかいしゃいんです。", meanings: { en: "My husband is an office worker.", bn: "আমার স্বামী একজন অফিস কর্মী।" } } },
                    { word: "妻", reading: "つま", meanings: { en: "Wife", bn: "স্ত্রী" }, example: { jp: "妻と一緒に映画を見ます。", reading: "つまといっしょにえいがをみます。", meanings: { en: "I watch movies together with my wife.", bn: "আমি স্ত্রীর সাথে সিনেমা দেখি।" } } }
                ]
            },
            {
                id: "days-weeks-months",
                title: "Days, Weeks & Months",
                items: [
                    { word: "今日", reading: "きょう", meanings: { en: "Today", bn: "আজ" }, example: { jp: "今日は晴れです。", reading: "きょうははれです。", meanings: { en: "Today is sunny.", bn: "আজ রোদ উঠেছে।" } } },
                    { word: "明日", reading: "あした", meanings: { en: "Tomorrow", bn: "আগামীকাল" }, example: { jp: "明日、テストがあります。", reading: "あした、テストがあります。", meanings: { en: "There is a test tomorrow.", bn: "আগামীকাল একটা পরীক্ষা আছে।" } } },
                    { word: "昨日", reading: "きのう", meanings: { en: "Yesterday", bn: "গতকাল" }, example: { jp: "昨日、映画を見ました。", reading: "きのう、えいがをみました。", meanings: { en: "I watched a movie yesterday.", bn: "গতকাল একটা সিনেমা দেখেছি।" } } },
                    { word: "今週", reading: "こんしゅう", meanings: { en: "This week", bn: "এই সপ্তাহ" }, example: { jp: "今週は忙しいです。", reading: "こんしゅうはいそがしいです。", meanings: { en: "This week is busy.", bn: "এই সপ্তাহ ব্যস্ত।" } } },
                    { word: "来週", reading: "らいしゅう", meanings: { en: "Next week", bn: "আগামী সপ্তাহ" }, example: { jp: "来週、旅行します。", reading: "らいしゅう、りょこうします。", meanings: { en: "I will travel next week.", bn: "আগামী সপ্তাহ ভ্রমণ করব।" } } },
                    { word: "先週", reading: "せんしゅう", meanings: { en: "Last week", bn: "গত সপ্তাহ" }, example: { jp: "先週、日本に行きました。", reading: "せんしゅう、にほんにいきました。", meanings: { en: "I went to Japan last week.", bn: "গত সপ্তাহ জাপান গিয়েছিলাম।" } } },
                    { word: "毎週", reading: "まいしゅう", meanings: { en: "Every week", bn: "প্রতি সপ্তাহ" }, example: { jp: "毎週、日本語を勉強します。", reading: "まいしゅう、にほんごをべんきょうします。", meanings: { en: "I study Japanese every week.", bn: "প্রতি সপ্তাহ জাপানি ভাষা শিখি।" } } },
                    { word: "月曜日", reading: "げつようび", meanings: { en: "Monday", bn: "সোমবার" }, example: { jp: "月曜日から始まります。", reading: "げつようびからはじまります。", meanings: { en: "It starts from Monday.", bn: "সোমবার থেকে শুরু হয়।" } } },
                    { word: "火曜日", reading: "かようび", meanings: { en: "Tuesday", bn: "মঙ্গলবার" }, example: { jp: "火曜日に会議があります。", reading: "かようびにかいぎがあります。", meanings: { en: "There is a meeting on Tuesday.", bn: "মঙ্গলবার একটা মিটিং আছে।" } } },
                    { word: "水曜日", reading: "すいようび", meanings: { en: "Wednesday", bn: "বুধবার" }, example: { jp: "水曜日は休みです。", reading: "すいようびはやすみです。", meanings: { en: "Wednesday is a day off.", bn: "বুধবার ছুটির দিন।" } } },
                    { word: "木曜日", reading: "もくようび", meanings: { en: "Thursday", bn: "বৃহস্পতিবার" }, example: { jp: "木曜日に病院へ行きます。", reading: "もくようびにびょういんへいきます。", meanings: { en: "I go to the hospital on Thursday.", bn: "বৃহস্পতিবার হাসপাতালে যাই।" } } },
                    { word: "金曜日", reading: "きんようび", meanings: { en: "Friday", bn: "শুক্রবার" }, example: { jp: "金曜日の夜は自由です。", reading: "きんようびのよるはじゆうです。", meanings: { en: "Friday night is free.", bn: "শুক্রবার রাত মুক্ত থাকে।" } } },
                    { word: "土曜日", reading: "どようび", meanings: { en: "Saturday", bn: "শনিবার" }, example: { jp: "土曜日に買い物します。", reading: "どようびにかいものします。", meanings: { en: "I go shopping on Saturday.", bn: "শনিবার কেনাকাটা করি।" } } },
                    { word: "日曜日", reading: "にちようび", meanings: { en: "Sunday", bn: "রবিবার" }, example: { jp: "日曜日はゆっくり休みます。", reading: "にちようびはゆっくりやすみます。", meanings: { en: "I rest slowly on Sunday.", bn: "রবিবার আরাম করে বিশ্রাম নিই।" } } },
                    { word: "今月", reading: "こんげつ", meanings: { en: "This month", bn: "এই মাস" }, example: { jp: "今月は忙しいです。", reading: "こんげつはいそがしいです。", meanings: { en: "This month is busy.", bn: "এই মাস ব্যস্ত।" } } },
                    { word: "来月", reading: "らいげつ", meanings: { en: "Next month", bn: "আগামী মাস" }, example: { jp: "来月、結婚します。", reading: "らいげつ、けっこんします。", meanings: { en: "I will get married next month.", bn: "আগামী মাস বিয়ে করব।" } } },
                    { word: "誕生日", reading: "たんじょうび", meanings: { en: "Birthday", bn: "জন্মদিন" }, example: { jp: "誕生日おめでとうございます。", reading: "たんじょうびおめでとうございます。", meanings: { en: "Happy birthday.", bn: "জন্মদিনের শুভেচ্ছা।" } } }
                ]
            },
            {
                id: "time-clock",
                title: "Time & Clock",
                items: [
                    { word: "時間", reading: "じかん", meanings: { en: "Time / hours", bn: "সময়" }, example: { jp: "時間がありません。", reading: "じかんがありません。", meanings: { en: "I don't have time.", bn: "সময় নেই।" } } },
                    { word: "何時", reading: "なんじ", meanings: { en: "What time", bn: "কয়টা বাজে" }, example: { jp: "今、何時ですか。", reading: "いま、なんじですか。", meanings: { en: "What time is it now?", bn: "এখন কয়টা বাজে?" } } },
                    { word: "分", reading: "ふん・ぷん", meanings: { en: "Minute", bn: "মিনিট" }, example: { jp: "十分待ってください。", reading: "じゅっぷんまってください。", meanings: { en: "Please wait ten minutes.", bn: "দশ মিনিট অপেক্ষা করুন।" } } },
                    { word: "半", reading: "はん", meanings: { en: "Half (past the hour)", bn: "সাড়ে (আধা)" }, example: { jp: "三時半に会いましょう。", reading: "さんじはんにあいましょう。", meanings: { en: "Let's meet at half past three.", bn: "সাড়ে তিনটার সময় দেখা করি।" } } },
                    { word: "朝", reading: "あさ", meanings: { en: "Morning", bn: "সকাল" }, example: { jp: "朝、コーヒーを飲みます。", reading: "あさ、コーヒーをのみます。", meanings: { en: "I drink coffee in the morning.", bn: "সকালে কফি খাই।" } } },
                    { word: "昼", reading: "ひる", meanings: { en: "Noon / daytime", bn: "দুপুর" }, example: { jp: "昼ご飯を食べました。", reading: "ひるごはんをたべました。", meanings: { en: "I ate lunch.", bn: "দুপুরের খাবার খেয়েছি।" } } },
                    { word: "夜", reading: "よる", meanings: { en: "Night", bn: "রাত" }, example: { jp: "夜は静かです。", reading: "よるはしずかです。", meanings: { en: "The night is quiet.", bn: "রাত শান্ত থাকে।" } } },
                    { word: "午前", reading: "ごぜん", meanings: { en: "A.M.", bn: "সকালবেলা (এএম)" }, example: { jp: "午前九時に始まります。", reading: "ごぜんくじにはじまります。", meanings: { en: "It starts at 9 a.m.", bn: "সকাল ৯টায় শুরু হয়।" } } },
                    { word: "午後", reading: "ごご", meanings: { en: "P.M.", bn: "বিকেলবেলা (পিএম)" }, example: { jp: "午後三時に会いましょう。", reading: "ごごさんじにあいましょう。", meanings: { en: "Let's meet at 3 p.m.", bn: "বিকেল ৩টায় দেখা করি।" } } },
                    { word: "早い", reading: "はやい", meanings: { en: "Early / fast", bn: "তাড়াতাড়ি / দ্রুত" }, example: { jp: "今日は早く起きました。", reading: "きょうははやくおきました。", meanings: { en: "I woke up early today.", bn: "আজ তাড়াতাড়ি ঘুম থেকে উঠেছি।" } } },
                    { word: "遅い", reading: "おそい", meanings: { en: "Late / slow", bn: "দেরি / ধীর" }, example: { jp: "バスが遅いです。", reading: "バスがおそいです。", meanings: { en: "The bus is late.", bn: "বাস দেরি করছে।" } } },
                    { word: "今", reading: "いま", meanings: { en: "Now", bn: "এখন" }, example: { jp: "今、忙しいです。", reading: "いま、いそがしいです。", meanings: { en: "I'm busy right now.", bn: "এখন ব্যস্ত আছি।" } } },
                    { word: "前", reading: "まえ", meanings: { en: "Before / in front of", bn: "আগে / সামনে" }, example: { jp: "駅の前で待っています。", reading: "えきのまえでまっています。", meanings: { en: "I'm waiting in front of the station.", bn: "স্টেশনের সামনে অপেক্ষা করছি।" } } },
                    { word: "後", reading: "あと", meanings: { en: "After", bn: "পরে" }, example: { jp: "仕事の後で食事します。", reading: "しごとのあとでしょくじします。", meanings: { en: "I will eat after work.", bn: "কাজের পরে খাবো।" } } },
                    { word: "時計", reading: "とけい", meanings: { en: "Clock / watch", bn: "ঘড়ি" }, example: { jp: "新しい時計を買いました。", reading: "あたらしいとけいをかいました。", meanings: { en: "I bought a new watch.", bn: "নতুন একটা ঘড়ি কিনেছি।" } } }
                ]
            },
            {
                id: "daily-routine",
                title: "Daily Routine (Verbs)",
                items: [
                    { word: "顔を洗う", reading: "かおをあらう", meanings: { en: "To wash one's face", bn: "মুখ ধোয়া" }, example: { jp: "毎朝、顔を洗います。", reading: "まいあさ、かおをあらいます。", meanings: { en: "I wash my face every morning.", bn: "প্রতিদিন সকালে মুখ ধুই।" } } },
                    { word: "歯を磨く", reading: "はをみがく", meanings: { en: "To brush teeth", bn: "দাঁত মাজা" }, example: { jp: "寝る前に歯を磨きます。", reading: "ねるまえにはをみがきます。", meanings: { en: "I brush my teeth before sleeping.", bn: "ঘুমানোর আগে দাঁত মাজি।" } } },
                    { word: "シャワーを浴びる", reading: "シャワーをあびる", meanings: { en: "To take a shower", bn: "শাওয়ার নেওয়া" }, example: { jp: "朝、シャワーを浴びます。", reading: "あさ、シャワーをあびます。", meanings: { en: "I take a shower in the morning.", bn: "সকালে শাওয়ার নিই।" } } },
                    { word: "着替える", reading: "きがえる", meanings: { en: "To change clothes", bn: "কাপড় বদলানো" }, example: { jp: "早く着替えてください。", reading: "はやくきがえてください。", meanings: { en: "Please change your clothes quickly.", bn: "তাড়াতাড়ি কাপড় বদলান।" } } },
                    { word: "出かける", reading: "でかける", meanings: { en: "To go out", bn: "বাইরে যাওয়া" }, example: { jp: "今から出かけます。", reading: "いまからでかけます。", meanings: { en: "I'm going out now.", bn: "এখন থেকে বাইরে যাচ্ছি।" } } },
                    { word: "帰る", reading: "かえる", meanings: { en: "To return / go home", bn: "বাড়ি ফেরা" }, example: { jp: "六時に家に帰ります。", reading: "ろくじにいえにかえります。", meanings: { en: "I go home at six o'clock.", bn: "ছয়টায় বাড়ি ফিরি।" } } },
                    { word: "休む", reading: "やすむ", meanings: { en: "To rest / take a day off", bn: "বিশ্রাম নেওয়া / ছুটি নেওয়া" }, example: { jp: "今日は家で休みます。", reading: "きょうはいえでやすみます。", meanings: { en: "I will rest at home today.", bn: "আজ বাসায় বিশ্রাম নেব।" } } },
                    { word: "掃除する", reading: "そうじする", meanings: { en: "To clean", bn: "পরিষ্কার করা" }, example: { jp: "週末に部屋を掃除します。", reading: "しゅうまつにへやをそうじします。", meanings: { en: "I clean my room on weekends.", bn: "সপ্তাহান্তে ঘর পরিষ্কার করি।" } } },
                    { word: "洗濯する", reading: "せんたくする", meanings: { en: "To do laundry", bn: "কাপড় ধোয়া" }, example: { jp: "毎日、洗濯します。", reading: "まいにち、せんたくします。", meanings: { en: "I do laundry every day.", bn: "প্রতিদিন কাপড় ধুই।" } } },
                    { word: "準備する", reading: "じゅんびする", meanings: { en: "To prepare", bn: "প্রস্তুতি নেওয়া" }, example: { jp: "テストの準備をしています。", reading: "テストのじゅんびをしています。", meanings: { en: "I am preparing for the test.", bn: "পরীক্ষার প্রস্তুতি নিচ্ছি।" } } },
                    { word: "忙しい", reading: "いそがしい", meanings: { en: "Busy", bn: "ব্যস্ত" }, example: { jp: "今週はとても忙しいです。", reading: "こんしゅうはとてもいそがしいです。", meanings: { en: "This week is very busy.", bn: "এই সপ্তাহ খুব ব্যস্ত।" } } },
                    { word: "暇", reading: "ひま", meanings: { en: "Free time / not busy", bn: "অবসর সময়" }, example: { jp: "週末は暇です。", reading: "しゅうまつはひまです。", meanings: { en: "I am free on the weekend.", bn: "সপ্তাহান্তে অবসর থাকি।" } } }
                ]
            },
            {
                id: "school-study",
                title: "School & Study",
                items: [
                    { word: "学校", reading: "がっこう", meanings: { en: "School", bn: "স্কুল" }, example: { jp: "学校で日本語を勉強します。", reading: "がっこうでにほんごをべんきょうします。", meanings: { en: "I study Japanese at school.", bn: "স্কুলে জাপানি ভাষা শিখি।" } } },
                    { word: "教室", reading: "きょうしつ", meanings: { en: "Classroom", bn: "শ্রেণিকক্ষ" }, example: { jp: "教室に入ります。", reading: "きょうしつにはいります。", meanings: { en: "I enter the classroom.", bn: "শ্রেণিকক্ষে প্রবেশ করি।" } } },
                    { word: "教科書", reading: "きょうかしょ", meanings: { en: "Textbook", bn: "পাঠ্যবই" }, example: { jp: "教科書を開いてください。", reading: "きょうかしょをひらいてください。", meanings: { en: "Please open your textbook.", bn: "পাঠ্যবই খুলুন।" } } },
                    { word: "ノート", meanings: { en: "Notebook", bn: "নোটবুক" }, example: { jp: "ノートに書きます。", reading: "ノートにかきます。", meanings: { en: "I write in my notebook.", bn: "নোটবুকে লিখি।" } } },
                    { word: "鉛筆", reading: "えんぴつ", meanings: { en: "Pencil", bn: "পেন্সিল" }, example: { jp: "鉛筆で書きます。", reading: "えんぴつでかきます。", meanings: { en: "I write with a pencil.", bn: "পেন্সিল দিয়ে লিখি।" } } },
                    { word: "ペン", meanings: { en: "Pen", bn: "কলম" }, example: { jp: "ペンを貸してください。", reading: "ペンをかしてください。", meanings: { en: "Please lend me a pen.", bn: "একটা কলম দিন।" } } },
                    { word: "質問", reading: "しつもん", meanings: { en: "Question", bn: "প্রশ্ন" }, example: { jp: "質問があります。", reading: "しつもんがあります。", meanings: { en: "I have a question.", bn: "আমার একটা প্রশ্ন আছে।" } } },
                    { word: "答え", reading: "こたえ", meanings: { en: "Answer", bn: "উত্তর" }, example: { jp: "答えがわかりません。", reading: "こたえがわかりません。", meanings: { en: "I don't know the answer.", bn: "উত্তরটা জানি না।" } } },
                    { word: "試験", reading: "しけん", meanings: { en: "Exam / test", bn: "পরীক্ষা" }, example: { jp: "来週、試験があります。", reading: "らいしゅう、しけんがあります。", meanings: { en: "There is an exam next week.", bn: "আগামী সপ্তাহ একটা পরীক্ষা আছে।" } } },
                    { word: "宿題", reading: "しゅくだい", meanings: { en: "Homework", bn: "বাড়ির কাজ" }, example: { jp: "宿題をします。", reading: "しゅくだいをします。", meanings: { en: "I do my homework.", bn: "বাড়ির কাজ করি।" } } },
                    { word: "図書館", reading: "としょかん", meanings: { en: "Library", bn: "গ্রন্থাগার" }, example: { jp: "図書館で本を読みます。", reading: "としょかんでほんをよみます。", meanings: { en: "I read a book at the library.", bn: "গ্রন্থাগারে বই পড়ি।" } } },
                    { word: "辞書", reading: "じしょ", meanings: { en: "Dictionary", bn: "অভিধান" }, example: { jp: "辞書で言葉を調べます。", reading: "じしょでことばをしらべます。", meanings: { en: "I look up words in a dictionary.", bn: "অভিধানে শব্দ খুঁজি।" } } },
                    { word: "習う", reading: "ならう", meanings: { en: "To learn", bn: "শেখা" }, example: { jp: "日本語を習っています。", reading: "にほんごをならっています。", meanings: { en: "I am learning Japanese.", bn: "আমি জাপানি ভাষা শিখছি।" } } },
                    { word: "教える", reading: "おしえる", meanings: { en: "To teach", bn: "শেখানো" }, example: { jp: "英語を教えています。", reading: "えいごをおしえています。", meanings: { en: "I teach English.", bn: "আমি ইংরেজি শেখাই।" } } },
                    { word: "難しい", reading: "むずかしい", meanings: { en: "Difficult", bn: "কঠিন" }, example: { jp: "この問題は難しいです。", reading: "このもんだいはむずかしいです。", meanings: { en: "This problem is difficult.", bn: "এই সমস্যাটা কঠিন।" } } },
                    { word: "簡単", reading: "かんたん", meanings: { en: "Easy / simple", bn: "সহজ" }, example: { jp: "この漢字は簡単です。", reading: "このかんじはかんたんです。", meanings: { en: "This kanji is easy.", bn: "এই কাঞ্জিটা সহজ।" } } }
                ]
            }
        ]
    },

    n4: { chapters: [] },
    n3: { chapters: [] },
    n2: { chapters: [] },
    n1: { chapters: [] }

};

if (typeof module !== "undefined" && module.exports) { module.exports = vocabularyData; }
