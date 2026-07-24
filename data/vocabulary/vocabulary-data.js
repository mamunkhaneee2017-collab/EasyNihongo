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
            },
            {
                id: "classroom-stationery",
                title: "Classroom & Stationery",
                items: [
                    { word: "雑誌", reading: "ざっし", meanings: { en: "Magazine", bn: "ম্যাগাজিন" }, example: { jp: "雑誌を読みます。", reading: "ざっしをよみます。", meanings: { en: "I read a magazine.", bn: "আমি ম্যাগাজিন পড়ি।" } } },
                    { word: "新聞", reading: "しんぶん", meanings: { en: "Newspaper", bn: "সংবাদপত্র" }, example: { jp: "毎朝、新聞を読みます。", reading: "まいあさ、しんぶんをよみます。", meanings: { en: "I read the newspaper every morning.", bn: "আমি প্রতিদিন সকালে সংবাদপত্র পড়ি।" } } },
                    { word: "手帳", reading: "てちょう", meanings: { en: "Pocket notebook", bn: "পকেট নোটবুক" }, example: { jp: "手帳に予定を書きます。", reading: "てちょうによていをかきます。", meanings: { en: "I write my schedule in a pocket notebook.", bn: "আমি পকেট নোটবুকে সময়সূচি লিখি।" } } },
                    { word: "名刺", reading: "めいし", meanings: { en: "Business card", bn: "ভিজিটিং কার্ড" }, example: { jp: "名刺をください。", reading: "めいしをください。", meanings: { en: "Please give me your business card.", bn: "আপনার ভিজিটিং কার্ডটা দিন।" } } },
                    { word: "テレホンカード", meanings: { en: "Telephone card", bn: "টেলিফোন কার্ড" }, example: { jp: "テレホンカードで電話をかけます。", reading: "テレホンカードででんわをかけます。", meanings: { en: "I make a phone call with a telephone card.", bn: "আমি টেলিফোন কার্ড দিয়ে ফোন করি।" } } },
                    { word: "ボールペン", meanings: { en: "Ballpoint pen", bn: "বলপেন" }, example: { jp: "ボールペンで書いてください。", reading: "ボールペンでかいてください。", meanings: { en: "Please write with a ballpoint pen.", bn: "বলপেন দিয়ে লিখুন।" } } },
                    { word: "シャープペンシル", meanings: { en: "Mechanical pencil", bn: "মেকানিক্যাল পেন্সিল" }, example: { jp: "シャープペンシルを使います。", reading: "シャープペンシルをつかいます。", meanings: { en: "I use a mechanical pencil.", bn: "আমি মেকানিক্যাল পেন্সিল ব্যবহার করি।" } } },
                    { word: "かぎ", meanings: { en: "Key", bn: "চাবি" }, example: { jp: "かぎをなくしました。", meanings: { en: "I lost my key.", bn: "আমি চাবি হারিয়ে ফেলেছি।" } } },
                    { word: "傘", reading: "かさ", meanings: { en: "Umbrella", bn: "ছাতা" }, example: { jp: "傘を持っていますか。", reading: "かさをもっていますか。", meanings: { en: "Do you have an umbrella?", bn: "আপনার কাছে ছাতা আছে?" } } },
                    { word: "かばん", meanings: { en: "Bag", bn: "ব্যাগ" }, example: { jp: "かばんの中に本があります。", reading: "かばんのなかにほんがあります。", meanings: { en: "There is a book in my bag.", bn: "ব্যাগের ভেতরে একটা বই আছে।" } } },
                    { word: "はさみ", meanings: { en: "Scissors", bn: "কাঁচি" }, example: { jp: "はさみで紙を切ります。", reading: "はさみでかみをきります。", meanings: { en: "I cut paper with scissors.", bn: "আমি কাঁচি দিয়ে কাগজ কাটি।" } } },
                    { word: "ホッチキス", meanings: { en: "Stapler", bn: "স্টেপলার" }, example: { jp: "ホッチキスを貸してください。", reading: "ホッチキスをかしてください。", meanings: { en: "Please lend me a stapler.", bn: "স্টেপলারটা ধার দিন।" } } },
                    { word: "セロテープ", meanings: { en: "Scotch tape", bn: "টেপ" }, example: { jp: "セロテープで紙を貼ります。", reading: "セロテープでかみをはります。", meanings: { en: "I stick paper with tape.", bn: "আমি টেপ দিয়ে কাগজ আটকাই।" } } },
                    { word: "消しゴム", reading: "けしゴム", meanings: { en: "Eraser", bn: "রাবার" }, example: { jp: "消しゴムを忘れました。", reading: "けしゴムをわすれました。", meanings: { en: "I forgot my eraser.", bn: "আমি রাবার ভুলে গেছি।" } } },
                    { word: "紙", reading: "かみ", meanings: { en: "Paper", bn: "কাগজ" }, example: { jp: "紙に名前を書きます。", reading: "かみになまえをかきます。", meanings: { en: "I write my name on paper.", bn: "আমি কাগজে নাম লিখি।" } } },
                    { word: "パンチ", meanings: { en: "Hole punch", bn: "পাঞ্চার" }, example: { jp: "パンチで穴を開けます。", reading: "パンチであなをあけます。", meanings: { en: "I make a hole with a punch.", bn: "আমি পাঞ্চার দিয়ে ছিদ্র করি।" } } }
                ]
            },
            {
                id: "electronics-furniture",
                title: "Electronics & Furniture",
                items: [
                    { word: "カセットテープ", meanings: { en: "Cassette tape", bn: "ক্যাসেট টেপ" }, example: { jp: "カセットテープを聞きます。", reading: "カセットテープをききます。", meanings: { en: "I listen to a cassette tape.", bn: "আমি ক্যাসেট টেপ শুনি।" } } },
                    { word: "テープレコーダー", meanings: { en: "Tape recorder", bn: "টেপ রেকর্ডার" }, example: { jp: "テープレコーダーを使います。", reading: "テープレコーダーをつかいます。", meanings: { en: "I use a tape recorder.", bn: "আমি টেপ রেকর্ডার ব্যবহার করি।" } } },
                    { word: "テレビ", meanings: { en: "Television", bn: "টেলিভিশন" }, example: { jp: "テレビを見ます。", reading: "テレビをみます。", meanings: { en: "I watch TV.", bn: "আমি টিভি দেখি।" } } },
                    { word: "ラジオ", meanings: { en: "Radio", bn: "রেডিও" }, example: { jp: "ラジオを聞きます。", reading: "ラジオをききます。", meanings: { en: "I listen to the radio.", bn: "আমি রেডিও শুনি।" } } },
                    { word: "カメラ", meanings: { en: "Camera", bn: "ক্যামেরা" }, example: { jp: "カメラで写真を撮ります。", reading: "カメラでしゃしんをとります。", meanings: { en: "I take photos with a camera.", bn: "আমি ক্যামেরা দিয়ে ছবি তুলি।" } } },
                    { word: "コンピューター", meanings: { en: "Computer", bn: "কম্পিউটার" }, example: { jp: "コンピューターを使います。", reading: "コンピューターをつかいます。", meanings: { en: "I use a computer.", bn: "আমি কম্পিউটার ব্যবহার করি।" } } },
                    { word: "パソコン", meanings: { en: "Personal computer", bn: "পিসি" }, example: { jp: "パソコンでレポートを書きます。", reading: "パソコンでレポートをかきます。", meanings: { en: "I write a report on a personal computer.", bn: "আমি পিসিতে রিপোর্ট লিখি।" } } },
                    { word: "ファクス", meanings: { en: "Fax", bn: "ফ্যাক্স" }, example: { jp: "ファクスを送ります。", reading: "ファクスをおくります。", meanings: { en: "I send a fax.", bn: "আমি ফ্যাক্স পাঠাই।" } } },
                    { word: "ワープロ", meanings: { en: "Word processor", bn: "ওয়ার্ড প্রসেসর" }, example: { jp: "ワープロで手紙を書きます。", reading: "ワープロでてがみをかきます。", meanings: { en: "I write a letter on a word processor.", bn: "আমি ওয়ার্ড প্রসেসরে চিঠি লিখি।" } } },
                    { word: "自動車", reading: "じどうしゃ", meanings: { en: "Automobile / car", bn: "গাড়ি" }, example: { jp: "自動車を運転します。", reading: "じどうしゃをうんてんします。", meanings: { en: "I drive a car.", bn: "আমি গাড়ি চালাই।" } } },
                    { word: "机", reading: "つくえ", meanings: { en: "Desk", bn: "ডেস্ক" }, example: { jp: "机の上に本があります。", reading: "つくえのうえにほんがあります。", meanings: { en: "There is a book on the desk.", bn: "ডেস্কের উপর একটা বই আছে।" } } },
                    { word: "いす", meanings: { en: "Chair", bn: "চেয়ার" }, example: { jp: "いすに座ります。", reading: "いすにすわります。", meanings: { en: "I sit on a chair.", bn: "আমি চেয়ারে বসি।" } } },
                    { word: "スイッチ", meanings: { en: "Switch", bn: "সুইচ" }, example: { jp: "スイッチを押します。", reading: "スイッチをおします。", meanings: { en: "I press the switch.", bn: "আমি সুইচ চাপি।" } } },
                    { word: "冷蔵庫", reading: "れいぞうこ", meanings: { en: "Refrigerator", bn: "ফ্রিজ" }, example: { jp: "冷蔵庫に牛乳があります。", reading: "れいぞうこにぎゅうにゅうがあります。", meanings: { en: "There is milk in the refrigerator.", bn: "ফ্রিজে দুধ আছে।" } } },
                    { word: "テーブル", meanings: { en: "Table", bn: "টেবিল" }, example: { jp: "テーブルの上に花があります。", reading: "テーブルのうえにはながあります。", meanings: { en: "There are flowers on the table.", bn: "টেবিলের উপর ফুল আছে।" } } },
                    { word: "ベッド", meanings: { en: "Bed", bn: "বিছানা" }, example: { jp: "ベッドで寝ます。", reading: "ベッドでねます。", meanings: { en: "I sleep on the bed.", bn: "আমি বিছানায় ঘুমাই।" } } },
                    { word: "棚", reading: "たな", meanings: { en: "Shelf", bn: "তাক" }, example: { jp: "棚に本があります。", reading: "たなにほんがあります。", meanings: { en: "There are books on the shelf.", bn: "তাকে বই আছে।" } } },
                    { word: "ドア", meanings: { en: "Door", bn: "দরজা" }, example: { jp: "ドアを開けます。", reading: "ドアをあけます。", meanings: { en: "I open the door.", bn: "আমি দরজা খুলি।" } } },
                    { word: "窓", reading: "まど", meanings: { en: "Window", bn: "জানালা" }, example: { jp: "窓を閉めます。", reading: "まどをしめます。", meanings: { en: "I close the window.", bn: "আমি জানালা বন্ধ করি।" } } }
                ]
            },
            {
                id: "places-around-town",
                title: "Places Around Town",
                items: [
                    { word: "事務所", reading: "じむしょ", meanings: { en: "Office", bn: "অফিস" }, example: { jp: "事務所で働きます。", reading: "じむしょではたらきます。", meanings: { en: "I work at the office.", bn: "আমি অফিসে কাজ করি।" } } },
                    { word: "会議室", reading: "かいぎしつ", meanings: { en: "Conference room", bn: "সভাকক্ষ" }, example: { jp: "会議室で会議をします。", reading: "かいぎしつでかいぎをします。", meanings: { en: "I have a meeting in the conference room.", bn: "আমি সভাকক্ষে মিটিং করি।" } } },
                    { word: "受付", reading: "うけつけ", meanings: { en: "Reception desk", bn: "রিসেপশন ডেস্ক" }, example: { jp: "受付で聞いてください。", reading: "うけつけできいてください。", meanings: { en: "Please ask at the reception desk.", bn: "রিসেপশনে জিজ্ঞেস করুন।" } } },
                    { word: "ロビー", meanings: { en: "Lobby", bn: "লবি" }, example: { jp: "ロビーで待ちます。", reading: "ロビーでまちます。", meanings: { en: "I wait in the lobby.", bn: "আমি লবিতে অপেক্ষা করি।" } } },
                    { word: "会社", reading: "かいしゃ", meanings: { en: "Company", bn: "কোম্পানি" }, example: { jp: "会社に行きます。", reading: "かいしゃにいきます。", meanings: { en: "I go to the company.", bn: "আমি কোম্পানিতে যাই।" } } },
                    { word: "駅", reading: "えき", meanings: { en: "Station", bn: "স্টেশন" }, example: { jp: "駅まで歩きます。", reading: "えきまであるきます。", meanings: { en: "I walk to the station.", bn: "আমি স্টেশন পর্যন্ত হাঁটি।" } } },
                    { word: "ポスト", meanings: { en: "Mailbox / postbox", bn: "পোস্ট বক্স" }, example: { jp: "ポストに手紙を入れます。", reading: "ポストにてがみをいれます。", meanings: { en: "I put a letter in the mailbox.", bn: "আমি পোস্ট বক্সে চিঠি রাখি।" } } },
                    { word: "ビル", meanings: { en: "Building", bn: "বিল্ডিং" }, example: { jp: "あのビルは銀行です。", reading: "あのビルはぎんこうです。", meanings: { en: "That building is a bank.", bn: "ঐ বিল্ডিংটা একটা ব্যাংক।" } } },
                    { word: "公園", reading: "こうえん", meanings: { en: "Park", bn: "পার্ক" }, example: { jp: "公園で遊びます。", reading: "こうえんであそびます。", meanings: { en: "I play in the park.", bn: "আমি পার্কে খেলি।" } } },
                    { word: "喫茶店", reading: "きっさてん", meanings: { en: "Coffee shop", bn: "কফি শপ" }, example: { jp: "喫茶店でコーヒーを飲みます。", reading: "きっさてんでコーヒーをのみます。", meanings: { en: "I drink coffee at a coffee shop.", bn: "আমি কফি শপে কফি খাই।" } } },
                    { word: "本屋", reading: "ほんや", meanings: { en: "Bookstore", bn: "বইয়ের দোকান" }, example: { jp: "本屋で本を買います。", reading: "ほんやでほんをかいます。", meanings: { en: "I buy a book at the bookstore.", bn: "আমি বইয়ের দোকানে বই কিনি।" } } },
                    { word: "乗り場", reading: "のりば", meanings: { en: "Taxi / bus stand", bn: "গাড়ি ধরার স্থান" }, example: { jp: "タクシー乗り場はどこですか。", reading: "タクシーのりばはどこですか。", meanings: { en: "Where is the taxi stand?", bn: "ট্যাক্সি ধরার জায়গা কোথায়?" } } },
                    { word: "県", reading: "けん", meanings: { en: "Prefecture", bn: "প্রিফেকচার (জাপানি প্রশাসনিক অঞ্চল)" }, example: { jp: "兵庫県に住んでいます。", reading: "ひょうごけんにすんでいます。", meanings: { en: "I live in Hyogo Prefecture.", bn: "আমি হিয়োগো প্রিফেকচারে থাকি।" } } }
                ]
            },
            {
                id: "money-counters",
                title: "Money, Counters & Quantity",
                items: [
                    { word: "千", reading: "せん", meanings: { en: "Thousand", bn: "হাজার" }, example: { jp: "千円あります。", reading: "せんえんあります。", meanings: { en: "I have a thousand yen.", bn: "আমার কাছে হাজার ইয়েন আছে।" } } },
                    { word: "万", reading: "まん", meanings: { en: "Ten thousand", bn: "দশ হাজার" }, example: { jp: "一万円札です。", reading: "いちまんえんさつです。", meanings: { en: "It's a ten-thousand-yen bill.", bn: "এটা দশ হাজার ইয়েনের নোট।" } } },
                    { word: "円", reading: "えん", meanings: { en: "Yen", bn: "ইয়েন" }, example: { jp: "五百円ください。", reading: "ごひゃくえんください。", meanings: { en: "Five hundred yen, please.", bn: "পাঁচশ ইয়েন দিন।" } } },
                    { word: "いくら", meanings: { en: "How much", bn: "কত (দাম)" }, example: { jp: "これはいくらですか。", meanings: { en: "How much is this?", bn: "এটার দাম কত?" } } },
                    { word: "お金", reading: "おかね", meanings: { en: "Money", bn: "টাকা" }, example: { jp: "お金がありません。", reading: "おかねがありません。", meanings: { en: "I don't have money.", bn: "আমার কাছে টাকা নেই।" } } },
                    { word: "切符", reading: "きっぷ", meanings: { en: "Ticket", bn: "টিকিট" }, example: { jp: "切符を買います。", reading: "きっぷをかいます。", meanings: { en: "I buy a ticket.", bn: "আমি টিকিট কিনি।" } } },
                    { word: "いくつ", meanings: { en: "How many", bn: "কয়টি" }, example: { jp: "りんごがいくつありますか。", meanings: { en: "How many apples are there?", bn: "কয়টা আপেল আছে?" } } },
                    { word: "〜人", reading: "にん", meanings: { en: "Counter for people", bn: "জনের গণনাসূচক" }, example: { jp: "学生が三人います。", reading: "がくせいがさんにんいます。", meanings: { en: "There are three students.", bn: "তিনজন ছাত্র আছে।" } } },
                    { word: "〜台", reading: "だい", meanings: { en: "Counter for machines / vehicles", bn: "যন্ত্র/গাড়ির গণনাসূচক" }, example: { jp: "車が二台あります。", reading: "くるまがにだいあります。", meanings: { en: "There are two cars.", bn: "দুটো গাড়ি আছে।" } } },
                    { word: "〜枚", reading: "まい", meanings: { en: "Counter for flat things", bn: "পাতলা জিনিসের গণনাসূচক" }, example: { jp: "紙が五枚あります。", reading: "かみがごまいあります。", meanings: { en: "There are five sheets of paper.", bn: "পাঁচটা কাগজ আছে।" } } },
                    { word: "〜回", reading: "かい", meanings: { en: "Counter for times", bn: "বারের গণনাসূচক" }, example: { jp: "一週間に三回泳ぎます。", reading: "いっしゅうかんにさんかいおよぎます。", meanings: { en: "I swim three times a week.", bn: "সপ্তাহে তিনবার সাঁতার কাটি।" } } },
                    { word: "〜時間", reading: "じかん", meanings: { en: "Counter for hours", bn: "ঘণ্টার গণনাসূচক" }, example: { jp: "三時間勉強しました。", reading: "さんじかんべんきょうしました。", meanings: { en: "I studied for three hours.", bn: "আমি তিন ঘণ্টা পড়াশোনা করেছি।" } } },
                    { word: "〜週間", reading: "しゅうかん", meanings: { en: "Counter for weeks", bn: "সপ্তাহের গণনাসূচক" }, example: { jp: "二週間休みます。", reading: "にしゅうかんやすみます。", meanings: { en: "I will take two weeks off.", bn: "আমি দুই সপ্তাহ ছুটি নেব।" } } },
                    { word: "〜か月", reading: "かげつ", meanings: { en: "Counter for months", bn: "মাসের গণনাসূচক" }, example: { jp: "三か月日本語を勉強しました。", reading: "さんかげつにほんごをべんきょうしました。", meanings: { en: "I studied Japanese for three months.", bn: "আমি তিন মাস জাপানি ভাষা শিখেছি।" } } },
                    { word: "ぐらい", meanings: { en: "About 〜", bn: "প্রায়" }, example: { jp: "十分ぐらいかかります。", reading: "じゅっぷんぐらいかかります。", meanings: { en: "It takes about ten minutes.", bn: "প্রায় দশ মিনিট সময় লাগে।" } } },
                    { word: "全部で", reading: "ぜんぶで", meanings: { en: "In total", bn: "সর্বমোট" }, example: { jp: "全部で三千円です。", reading: "ぜんぶでさんぜんえんです。", meanings: { en: "It's three thousand yen in total.", bn: "সর্বমোট তিন হাজার ইয়েন।" } } }
                ]
            },
            {
                id: "basic-verbs-1",
                title: "Basic Verbs I",
                items: [
                    { word: "食べる", reading: "たべる", meanings: { en: "To eat", bn: "খাওয়া" }, example: { jp: "ご飯を食べます。", reading: "ごはんをたべます。", meanings: { en: "I eat a meal.", bn: "আমি ভাত খাই।" } } },
                    { word: "飲む", reading: "のむ", meanings: { en: "To drink", bn: "পান করা" }, example: { jp: "水を飲みます。", reading: "みずをのみます。", meanings: { en: "I drink water.", bn: "আমি পানি পান করি।" } } },
                    { word: "たばこを吸う", reading: "たばこをすう", meanings: { en: "To smoke (a cigarette)", bn: "ধূমপান করা" }, example: { jp: "たばこを吸います。", reading: "たばこをすいます。", meanings: { en: "I smoke a cigarette.", bn: "আমি সিগারেট খাই (ধূমপান করি)।" } } },
                    { word: "見る", reading: "みる", meanings: { en: "To see / watch", bn: "দেখা" }, example: { jp: "映画を見ます。", reading: "えいがをみます。", meanings: { en: "I watch a movie.", bn: "আমি সিনেমা দেখি।" } } },
                    { word: "聞く", reading: "きく", meanings: { en: "To listen / hear", bn: "শোনা" }, example: { jp: "音楽を聞きます。", reading: "おんがくをききます。", meanings: { en: "I listen to music.", bn: "আমি গান শুনি।" } } },
                    { word: "読む", reading: "よむ", meanings: { en: "To read", bn: "পড়া" }, example: { jp: "新聞を読みます。", reading: "しんぶんをよみます。", meanings: { en: "I read the newspaper.", bn: "আমি সংবাদপত্র পড়ি।" } } },
                    { word: "書く", reading: "かく", meanings: { en: "To write", bn: "লেখা" }, example: { jp: "手紙を書きます。", reading: "てがみをかきます。", meanings: { en: "I write a letter.", bn: "আমি চিঠি লিখি।" } } },
                    { word: "買う", reading: "かう", meanings: { en: "To buy", bn: "কেনা" }, example: { jp: "パンを買います。", reading: "パンをかいます。", meanings: { en: "I buy bread.", bn: "আমি রুটি কিনি।" } } },
                    { word: "写真を撮る", reading: "しゃしんをとる", meanings: { en: "To take (a photograph)", bn: "ছবি তোলা" }, example: { jp: "写真を撮ります。", reading: "しゃしんをとります。", meanings: { en: "I take a photo.", bn: "আমি ছবি তুলি।" } } },
                    { word: "する", meanings: { en: "To do", bn: "করা" }, example: { jp: "宿題をします。", reading: "しゅくだいをします。", meanings: { en: "I do my homework.", bn: "আমি বাড়ির কাজ করি।" } } },
                    { word: "友達に会う", reading: "ともだちにあう", meanings: { en: "To meet (a friend)", bn: "বন্ধুর সাথে দেখা করা" }, example: { jp: "友達に会います。", reading: "ともだちにあいます。", meanings: { en: "I meet a friend.", bn: "আমি বন্ধুর সাথে দেখা করি।" } } }
                ]
            },
            {
                id: "food-drink",
                title: "Food & Drink",
                items: [
                    { word: "ご飯", reading: "ごはん", meanings: { en: "Meal / cooked rice", bn: "ভাত / খাবার" }, example: { jp: "ご飯を食べましょう。", reading: "ごはんをたべましょう。", meanings: { en: "Let's eat a meal.", bn: "চলুন ভাত খাই।" } } },
                    { word: "朝ご飯", reading: "あさごはん", meanings: { en: "Breakfast", bn: "সকালের নাস্তা" }, example: { jp: "朝ご飯は何ですか。", reading: "あさごはんはなんですか。", meanings: { en: "What's for breakfast?", bn: "সকালের নাস্তায় কী আছে?" } } },
                    { word: "昼ご飯", reading: "ひるごはん", meanings: { en: "Lunch", bn: "দুপুরের খাবার" }, example: { jp: "昼ご飯を食べました。", reading: "ひるごはんをたべました。", meanings: { en: "I ate lunch.", bn: "আমি দুপুরের খাবার খেয়েছি।" } } },
                    { word: "晩ご飯", reading: "ばんごはん", meanings: { en: "Supper", bn: "রাতের খাবার" }, example: { jp: "晩ご飯を作ります。", reading: "ばんごはんをつくります。", meanings: { en: "I cook supper.", bn: "আমি রাতের খাবার রান্না করি।" } } },
                    { word: "パン", meanings: { en: "Bread", bn: "রুটি" }, example: { jp: "パンを食べて、コーヒーを飲みます。", reading: "パンをたべて、コーヒーをのみます。", meanings: { en: "I eat bread and drink coffee.", bn: "আমি রুটি খাই আর কফি পান করি।" } } },
                    { word: "卵", reading: "たまご", meanings: { en: "Egg", bn: "ডিম" }, example: { jp: "卵を二つ買います。", reading: "たまごをふたつかいます。", meanings: { en: "I buy two eggs.", bn: "আমি দুটো ডিম কিনি।" } } },
                    { word: "肉", reading: "にく", meanings: { en: "Meat", bn: "মাংস" }, example: { jp: "肉は食べません。", reading: "にくはたべません。", meanings: { en: "I don't eat meat.", bn: "আমি মাংস খাই না।" } } },
                    { word: "魚", reading: "さかな", meanings: { en: "Fish", bn: "মাছ" }, example: { jp: "魚が好きです。", reading: "さかながすきです。", meanings: { en: "I like fish.", bn: "আমি মাছ পছন্দ করি।" } } },
                    { word: "野菜", reading: "やさい", meanings: { en: "Vegetable", bn: "সবজি" }, example: { jp: "野菜を食べてください。", reading: "やさいをたべてください。", meanings: { en: "Please eat vegetables.", bn: "সবজি খান।" } } },
                    { word: "果物", reading: "くだもの", meanings: { en: "Fruit", bn: "ফল" }, example: { jp: "果物が好きです。", reading: "くだものがすきです。", meanings: { en: "I like fruit.", bn: "আমি ফল পছন্দ করি।" } } },
                    { word: "水", reading: "みず", meanings: { en: "Water", bn: "পানি" }, example: { jp: "水を一杯ください。", reading: "みずをいっぱいください。", meanings: { en: "Please give me a glass of water.", bn: "এক গ্লাস পানি দিন।" } } },
                    { word: "お茶", reading: "おちゃ", meanings: { en: "Tea / green tea", bn: "চা" }, example: { jp: "お茶を飲みませんか。", reading: "おちゃをのみませんか。", meanings: { en: "Won't you have some tea?", bn: "একটু চা খাবেন?" } } },
                    { word: "紅茶", reading: "こうちゃ", meanings: { en: "Black tea", bn: "রঙ চা" }, example: { jp: "紅茶が好きです。", reading: "こうちゃがすきです。", meanings: { en: "I like black tea.", bn: "আমি রঙ চা পছন্দ করি।" } } },
                    { word: "牛乳", reading: "ぎゅうにゅう", meanings: { en: "Milk", bn: "দুধ" }, example: { jp: "毎朝、牛乳を飲みます。", reading: "まいあさ、ぎゅうにゅうをのみます。", meanings: { en: "I drink milk every morning.", bn: "আমি প্রতিদিন সকালে দুধ খাই।" } } },
                    { word: "ジュース", meanings: { en: "Juice", bn: "জুস" }, example: { jp: "ジュースをください。", meanings: { en: "Juice, please.", bn: "একটা জুস দিন।" } } },
                    { word: "ビール", meanings: { en: "Beer", bn: "বিয়ার" }, example: { jp: "ビールを飲みましょう。", reading: "ビールをのみましょう。", meanings: { en: "Let's drink beer.", bn: "চলুন বিয়ার খাই।" } } },
                    { word: "お酒", reading: "おさけ", meanings: { en: "Alcohol / sake", bn: "মদ" }, example: { jp: "お酒を飲みません。", reading: "おさけをのみません。", meanings: { en: "I don't drink alcohol.", bn: "আমি মদ পান করি না।" } } }
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
