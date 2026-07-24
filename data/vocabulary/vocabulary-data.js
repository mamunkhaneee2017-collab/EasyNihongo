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
                    { word: "おはよう", reading: "ohayou", meanings: { en: "Good morning (casual)", bn: "শুভ সকাল (সাধারণ)" }, example: { jp: "おはよう、元気？", reading: "Ohayou, genki?", meanings: { en: "Good morning, how are you?", bn: "শুভ সকাল, কেমন আছো?" } } },
                    { word: "おはようございます", reading: "ohayou gozaimasu", meanings: { en: "Good morning (polite)", bn: "শুভ সকাল (ভদ্রভাবে)" }, example: { jp: "先生、おはようございます。", reading: "Sensei, ohayou gozaimasu.", meanings: { en: "Good morning, teacher.", bn: "শিক্ষক, শুভ সকাল।" } } },
                    { word: "こんにちは", reading: "konnichiwa", meanings: { en: "Hello / Good afternoon", bn: "হ্যালো / শুভ অপরাহ্ন" }, example: { jp: "こんにちは、田中さん。", reading: "Konnichiwa, Tanaka-san.", meanings: { en: "Hello, Mr. Tanaka.", bn: "হ্যালো, তানাকা সান।" } } },
                    { word: "こんばんは", reading: "konbanwa", meanings: { en: "Good evening", bn: "শুভ সন্ধ্যা" }, example: { jp: "こんばんは、お元気ですか。", reading: "Konbanwa, ogenki desu ka.", meanings: { en: "Good evening, how are you?", bn: "শুভ সন্ধ্যা, আপনি কেমন আছেন?" } } },
                    { word: "さようなら", reading: "sayounara", meanings: { en: "Goodbye", bn: "বিদায়" }, example: { jp: "さようなら、また明日。", reading: "Sayounara, mata ashita.", meanings: { en: "Goodbye, see you tomorrow.", bn: "বিদায়, আগামীকাল দেখা হবে।" } } },
                    { word: "ありがとうございます", reading: "arigatou gozaimasu", meanings: { en: "Thank you (polite)", bn: "ধন্যবাদ (ভদ্রভাবে)" }, example: { jp: "本当にありがとうございます。", reading: "Hontou ni arigatou gozaimasu.", meanings: { en: "Thank you so much.", bn: "সত্যিই অনেক ধন্যবাদ।" } } },
                    { word: "すみません", reading: "sumimasen", meanings: { en: "Excuse me / I'm sorry", bn: "মাফ করবেন / দুঃখিত" }, example: { jp: "すみません、駅はどこですか。", reading: "Sumimasen, eki wa doko desu ka.", meanings: { en: "Excuse me, where is the station?", bn: "মাফ করবেন, স্টেশন কোথায়?" } } },
                    { word: "はい", reading: "hai", meanings: { en: "Yes", bn: "হ্যাঁ" }, example: { jp: "はい、そうです。", reading: "Hai, sou desu.", meanings: { en: "Yes, that's right.", bn: "হ্যাঁ, ঠিক আছে।" } } },
                    { word: "いいえ", reading: "iie", meanings: { en: "No", bn: "না" }, example: { jp: "いいえ、違います。", reading: "Iie, chigaimasu.", meanings: { en: "No, that's wrong.", bn: "না, এটা ভুল।" } } },
                    { word: "私", reading: "watashi", meanings: { en: "I / me", bn: "আমি" }, example: { jp: "私は学生です。", reading: "Watashi wa gakusei desu.", meanings: { en: "I am a student.", bn: "আমি একজন ছাত্র।" } } },
                    { word: "あなた", reading: "anata", meanings: { en: "You", bn: "তুমি / আপনি" }, example: { jp: "あなたの名前は何ですか。", reading: "Anata no namae wa nan desu ka.", meanings: { en: "What is your name?", bn: "আপনার নাম কী?" } } },
                    { word: "名前", reading: "namae", meanings: { en: "Name", bn: "নাম" }, example: { jp: "私の名前はマムンです。", reading: "Watashi no namae wa Mamun desu.", meanings: { en: "My name is Mamun.", bn: "আমার নাম মামুন।" } } },
                    { word: "学生", reading: "gakusei", meanings: { en: "Student", bn: "ছাত্র/ছাত্রী" }, example: { jp: "彼は大学の学生です。", reading: "Kare wa daigaku no gakusei desu.", meanings: { en: "He is a university student.", bn: "সে একজন বিশ্ববিদ্যালয়ের ছাত্র।" } } },
                    { word: "先生", reading: "sensei", meanings: { en: "Teacher", bn: "শিক্ষক" }, example: { jp: "山田先生は優しいです。", reading: "Yamada sensei wa yasashii desu.", meanings: { en: "Teacher Yamada is kind.", bn: "শিক্ষক ইয়ামাদা সদয়।" } } },
                    { word: "友達", reading: "tomodachi", meanings: { en: "Friend", bn: "বন্ধু" }, example: { jp: "彼女は私の友達です。", reading: "Kanojo wa watashi no tomodachi desu.", meanings: { en: "She is my friend.", bn: "সে আমার বন্ধু।" } } },
                    { word: "はじめまして", reading: "hajimemashite", meanings: { en: "Nice to meet you (first time)", bn: "আপনার সাথে দেখা হয়ে ভালো লাগলো" }, example: { jp: "はじめまして、山本です。", reading: "Hajimemashite, Yamamoto desu.", meanings: { en: "Nice to meet you, I'm Yamamoto.", bn: "আপনার সাথে পরিচিত হয়ে ভালো লাগলো, আমি ইয়ামামোতো।" } } },
                    { word: "よろしくお願いします", reading: "yoroshiku onegaishimasu", meanings: { en: "Please treat me well / Nice to meet you", bn: "আমার প্রতি সদয় থাকবেন / সাক্ষাৎ ভালো লাগলো" }, example: { jp: "これからよろしくお願いします。", reading: "Korekara yoroshiku onegaishimasu.", meanings: { en: "I look forward to working with you.", bn: "এখন থেকে আপনার সাথে কাজ করতে চাই।" } } }
                ]
            },
            {
                id: "numbers-1-100",
                title: "Numbers 1-100",
                items: [
                    { word: "一", reading: "ichi", meanings: { en: "One (1)", bn: "এক (১)" }, example: { jp: "りんごが一つあります。", reading: "Ringo ga hitotsu arimasu.", meanings: { en: "There is one apple.", bn: "একটি আপেল আছে।" } } },
                    { word: "二", reading: "ni", meanings: { en: "Two (2)", bn: "দুই (২)" }, example: { jp: "猫が二匹います。", reading: "Neko ga nihiki imasu.", meanings: { en: "There are two cats.", bn: "দুটি বিড়াল আছে।" } } },
                    { word: "三", reading: "san", meanings: { en: "Three (3)", bn: "তিন (৩)" }, example: { jp: "三時に会いましょう。", reading: "San-ji ni aimashou.", meanings: { en: "Let's meet at three o'clock.", bn: "তিনটার সময় দেখা করি।" } } },
                    { word: "四", reading: "yon / shi", meanings: { en: "Four (4)", bn: "চার (৪)" }, example: { jp: "四月に日本へ行きます。", reading: "Shigatsu ni Nihon e ikimasu.", meanings: { en: "I will go to Japan in April.", bn: "এপ্রিল মাসে জাপান যাবো।" } } },
                    { word: "五", reading: "go", meanings: { en: "Five (5)", bn: "পাঁচ (৫)" }, example: { jp: "五分待ってください。", reading: "Gofun matte kudasai.", meanings: { en: "Please wait five minutes.", bn: "পাঁচ মিনিট অপেক্ষা করুন।" } } },
                    { word: "六", reading: "roku", meanings: { en: "Six (6)", bn: "ছয় (৬)" }, example: { jp: "六時に起きます。", reading: "Roku-ji ni okimasu.", meanings: { en: "I wake up at six o'clock.", bn: "ছয়টার সময় ঘুম থেকে উঠি।" } } },
                    { word: "七", reading: "nana / shichi", meanings: { en: "Seven (7)", bn: "সাত (৭)" }, example: { jp: "一週間は七日です。", reading: "Isshuukan wa nanoka desu.", meanings: { en: "A week is seven days.", bn: "এক সপ্তাহে সাত দিন।" } } },
                    { word: "八", reading: "hachi", meanings: { en: "Eight (8)", bn: "আট (৮)" }, example: { jp: "八時に寝ます。", reading: "Hachi-ji ni nemasu.", meanings: { en: "I sleep at eight o'clock.", bn: "আটটার সময় ঘুমাই।" } } },
                    { word: "九", reading: "kyuu", meanings: { en: "Nine (9)", bn: "নয় (৯)" }, example: { jp: "九月は秋です。", reading: "Kugatsu wa aki desu.", meanings: { en: "September is autumn.", bn: "সেপ্টেম্বর শরৎকাল।" } } },
                    { word: "十", reading: "juu", meanings: { en: "Ten (10)", bn: "দশ (১০)" }, example: { jp: "十分かかります。", reading: "Juppun kakarimasu.", meanings: { en: "It takes ten minutes.", bn: "দশ মিনিট লাগে।" } } },
                    { word: "二十", reading: "nijuu", meanings: { en: "Twenty (20)", bn: "বিশ (২০)" }, example: { jp: "彼は二十歳です。", reading: "Kare wa hatachi desu.", meanings: { en: "He is twenty years old.", bn: "তার বয়স বিশ বছর।" } } },
                    { word: "三十", reading: "sanjuu", meanings: { en: "Thirty (30)", bn: "ত্রিশ (৩০)" }, example: { jp: "三十分休みます。", reading: "Sanjuppun yasumimasu.", meanings: { en: "I will rest for thirty minutes.", bn: "ত্রিশ মিনিট বিশ্রাম নেব।" } } },
                    { word: "五十", reading: "gojuu", meanings: { en: "Fifty (50)", bn: "পঞ্চাশ (৫০)" }, example: { jp: "五十円ください。", reading: "Gojuu-en kudasai.", meanings: { en: "Fifty yen, please.", bn: "পঞ্চাশ ইয়েন দিন।" } } },
                    { word: "百", reading: "hyaku", meanings: { en: "Hundred (100)", bn: "একশ (১০০)" }, example: { jp: "百人が来ました。", reading: "Hyakunin ga kimashita.", meanings: { en: "A hundred people came.", bn: "একশ জন মানুষ এসেছিল।" } } },
                    { word: "何", reading: "nan / nani", meanings: { en: "What / how many", bn: "কী / কতগুলো" }, example: { jp: "これは何ですか。", reading: "Kore wa nan desu ka.", meanings: { en: "What is this?", bn: "এটা কী?" } } },
                    { word: "何歳", reading: "nansai", meanings: { en: "How old", bn: "বয়স কত" }, example: { jp: "何歳ですか。", reading: "Nansai desu ka.", meanings: { en: "How old are you?", bn: "আপনার বয়স কত?" } } },
                    { word: "一つ", reading: "hitotsu", meanings: { en: "One (thing — counter)", bn: "একটি (জিনিস)" }, example: { jp: "ケーキを一つください。", reading: "Keeki wo hitotsu kudasai.", meanings: { en: "One cake, please.", bn: "একটি কেক দিন।" } } },
                    { word: "二つ", reading: "futatsu", meanings: { en: "Two (things — counter)", bn: "দুটি (জিনিস)" }, example: { jp: "りんごを二つ買いました。", reading: "Ringo wo futatsu kaimashita.", meanings: { en: "I bought two apples.", bn: "আমি দুটি আপেল কিনেছি।" } } }
                ]
            },
            {
                id: "family-members",
                title: "Family Members",
                items: [
                    { word: "家族", reading: "kazoku", meanings: { en: "Family", bn: "পরিবার" }, example: { jp: "私の家族は四人です。", reading: "Watashi no kazoku wa yonin desu.", meanings: { en: "My family has four people.", bn: "আমার পরিবারে চারজন সদস্য আছে।" } } },
                    { word: "父", reading: "chichi", meanings: { en: "Father (my own)", bn: "বাবা (নিজের)" }, example: { jp: "父は医者です。", reading: "Chichi wa isha desu.", meanings: { en: "My father is a doctor.", bn: "আমার বাবা একজন ডাক্তার।" } } },
                    { word: "母", reading: "haha", meanings: { en: "Mother (my own)", bn: "মা (নিজের)" }, example: { jp: "母は料理が上手です。", reading: "Haha wa ryouri ga jouzu desu.", meanings: { en: "My mother is good at cooking.", bn: "আমার মা রান্নায় দক্ষ।" } } },
                    { word: "お父さん", reading: "otousan", meanings: { en: "Father (someone else's / polite)", bn: "বাবা (অন্যের / ভদ্রভাবে)" }, example: { jp: "田中さんのお父さんは先生です。", reading: "Tanaka-san no otousan wa sensei desu.", meanings: { en: "Mr. Tanaka's father is a teacher.", bn: "তানাকার বাবা একজন শিক্ষক।" } } },
                    { word: "お母さん", reading: "okaasan", meanings: { en: "Mother (someone else's / polite)", bn: "মা (অন্যের / ভদ্রভাবে)" }, example: { jp: "お母さんは家にいますか。", reading: "Okaasan wa ie ni imasu ka.", meanings: { en: "Is your mother at home?", bn: "আপনার মা কি বাসায় আছেন?" } } },
                    { word: "兄", reading: "ani", meanings: { en: "Older brother (my own)", bn: "বড় ভাই (নিজের)" }, example: { jp: "兄はサッカーが好きです。", reading: "Ani wa sakkaa ga suki desu.", meanings: { en: "My older brother likes soccer.", bn: "আমার বড় ভাই ফুটবল পছন্দ করে।" } } },
                    { word: "姉", reading: "ane", meanings: { en: "Older sister (my own)", bn: "বড় বোন (নিজের)" }, example: { jp: "姉は看護師です。", reading: "Ane wa kangoshi desu.", meanings: { en: "My older sister is a nurse.", bn: "আমার বড় বোন একজন নার্স।" } } },
                    { word: "弟", reading: "otouto", meanings: { en: "Younger brother", bn: "ছোট ভাই" }, example: { jp: "弟はまだ小さいです。", reading: "Otouto wa mada chiisai desu.", meanings: { en: "My younger brother is still small.", bn: "আমার ছোট ভাই এখনও ছোট।" } } },
                    { word: "妹", reading: "imouto", meanings: { en: "Younger sister", bn: "ছোট বোন" }, example: { jp: "妹は学校に行きます。", reading: "Imouto wa gakkou ni ikimasu.", meanings: { en: "My younger sister goes to school.", bn: "আমার ছোট বোন স্কুলে যায়।" } } },
                    { word: "兄弟", reading: "kyoudai", meanings: { en: "Siblings", bn: "ভাইবোন" }, example: { jp: "兄弟がいますか。", reading: "Kyoudai ga imasu ka.", meanings: { en: "Do you have any siblings?", bn: "তোমার কি ভাইবোন আছে?" } } },
                    { word: "両親", reading: "ryoushin", meanings: { en: "Parents", bn: "বাবা-মা" }, example: { jp: "両親と旅行します。", reading: "Ryoushin to ryokou shimasu.", meanings: { en: "I will travel with my parents.", bn: "আমি বাবা-মায়ের সাথে ভ্রমণ করব।" } } },
                    { word: "子供", reading: "kodomo", meanings: { en: "Child / children", bn: "শিশু / সন্তান" }, example: { jp: "子供が公園で遊んでいます。", reading: "Kodomo ga kouen de asonde imasu.", meanings: { en: "The children are playing in the park.", bn: "শিশুরা পার্কে খেলছে।" } } },
                    { word: "祖父", reading: "sofu", meanings: { en: "Grandfather (my own)", bn: "দাদা/নানা (নিজের)" }, example: { jp: "祖父は九十歳です。", reading: "Sofu wa kyuujussai desu.", meanings: { en: "My grandfather is ninety years old.", bn: "আমার দাদার বয়স নব্বই বছর।" } } },
                    { word: "祖母", reading: "sobo", meanings: { en: "Grandmother (my own)", bn: "দাদি/নানি (নিজের)" }, example: { jp: "祖母はいつも優しいです。", reading: "Sobo wa itsumo yasashii desu.", meanings: { en: "My grandmother is always kind.", bn: "আমার দাদি সবসময় সদয়।" } } },
                    { word: "夫", reading: "otto", meanings: { en: "Husband", bn: "স্বামী" }, example: { jp: "夫は会社員です。", reading: "Otto wa kaishain desu.", meanings: { en: "My husband is an office worker.", bn: "আমার স্বামী একজন অফিস কর্মী।" } } },
                    { word: "妻", reading: "tsuma", meanings: { en: "Wife", bn: "স্ত্রী" }, example: { jp: "妻と一緒に映画を見ます。", reading: "Tsuma to issho ni eiga wo mimasu.", meanings: { en: "I watch movies together with my wife.", bn: "আমি স্ত্রীর সাথে সিনেমা দেখি।" } } }
                ]
            },
            {
                id: "days-weeks-months",
                title: "Days, Weeks & Months",
                items: [
                    { word: "今日", reading: "kyou", meanings: { en: "Today", bn: "আজ" }, example: { jp: "今日は晴れです。", reading: "Kyou wa hare desu.", meanings: { en: "Today is sunny.", bn: "আজ রোদ উঠেছে।" } } },
                    { word: "明日", reading: "ashita", meanings: { en: "Tomorrow", bn: "আগামীকাল" }, example: { jp: "明日、テストがあります。", reading: "Ashita, tesuto ga arimasu.", meanings: { en: "There is a test tomorrow.", bn: "আগামীকাল একটা পরীক্ষা আছে।" } } },
                    { word: "昨日", reading: "kinou", meanings: { en: "Yesterday", bn: "গতকাল" }, example: { jp: "昨日、映画を見ました。", reading: "Kinou, eiga wo mimashita.", meanings: { en: "I watched a movie yesterday.", bn: "গতকাল একটা সিনেমা দেখেছি।" } } },
                    { word: "今週", reading: "konshuu", meanings: { en: "This week", bn: "এই সপ্তাহ" }, example: { jp: "今週は忙しいです。", reading: "Konshuu wa isogashii desu.", meanings: { en: "This week is busy.", bn: "এই সপ্তাহ ব্যস্ত।" } } },
                    { word: "来週", reading: "raishuu", meanings: { en: "Next week", bn: "আগামী সপ্তাহ" }, example: { jp: "来週、旅行します。", reading: "Raishuu, ryokou shimasu.", meanings: { en: "I will travel next week.", bn: "আগামী সপ্তাহ ভ্রমণ করব।" } } },
                    { word: "先週", reading: "senshuu", meanings: { en: "Last week", bn: "গত সপ্তাহ" }, example: { jp: "先週、日本に行きました。", reading: "Senshuu, Nihon ni ikimashita.", meanings: { en: "I went to Japan last week.", bn: "গত সপ্তাহ জাপান গিয়েছিলাম।" } } },
                    { word: "毎週", reading: "maishuu", meanings: { en: "Every week", bn: "প্রতি সপ্তাহ" }, example: { jp: "毎週、日本語を勉強します。", reading: "Maishuu, nihongo wo benkyou shimasu.", meanings: { en: "I study Japanese every week.", bn: "প্রতি সপ্তাহ জাপানি ভাষা শিখি।" } } },
                    { word: "月曜日", reading: "getsuyoubi", meanings: { en: "Monday", bn: "সোমবার" }, example: { jp: "月曜日から始まります。", reading: "Getsuyoubi kara hajimarimasu.", meanings: { en: "It starts from Monday.", bn: "সোমবার থেকে শুরু হয়।" } } },
                    { word: "火曜日", reading: "kayoubi", meanings: { en: "Tuesday", bn: "মঙ্গলবার" }, example: { jp: "火曜日に会議があります。", reading: "Kayoubi ni kaigi ga arimasu.", meanings: { en: "There is a meeting on Tuesday.", bn: "মঙ্গলবার একটা মিটিং আছে।" } } },
                    { word: "水曜日", reading: "suiyoubi", meanings: { en: "Wednesday", bn: "বুধবার" }, example: { jp: "水曜日は休みです。", reading: "Suiyoubi wa yasumi desu.", meanings: { en: "Wednesday is a day off.", bn: "বুধবার ছুটির দিন।" } } },
                    { word: "木曜日", reading: "mokuyoubi", meanings: { en: "Thursday", bn: "বৃহস্পতিবার" }, example: { jp: "木曜日に病院へ行きます。", reading: "Mokuyoubi ni byouin e ikimasu.", meanings: { en: "I go to the hospital on Thursday.", bn: "বৃহস্পতিবার হাসপাতালে যাই।" } } },
                    { word: "金曜日", reading: "kinyoubi", meanings: { en: "Friday", bn: "শুক্রবার" }, example: { jp: "金曜日の夜は自由です。", reading: "Kinyoubi no yoru wa jiyuu desu.", meanings: { en: "Friday night is free.", bn: "শুক্রবার রাত মুক্ত থাকে।" } } },
                    { word: "土曜日", reading: "doyoubi", meanings: { en: "Saturday", bn: "শনিবার" }, example: { jp: "土曜日に買い物します。", reading: "Doyoubi ni kaimono shimasu.", meanings: { en: "I go shopping on Saturday.", bn: "শনিবার কেনাকাটা করি।" } } },
                    { word: "日曜日", reading: "nichiyoubi", meanings: { en: "Sunday", bn: "রবিবার" }, example: { jp: "日曜日はゆっくり休みます。", reading: "Nichiyoubi wa yukkuri yasumimasu.", meanings: { en: "I rest slowly on Sunday.", bn: "রবিবার আরাম করে বিশ্রাম নিই।" } } },
                    { word: "今月", reading: "kongetsu", meanings: { en: "This month", bn: "এই মাস" }, example: { jp: "今月は忙しいです。", reading: "Kongetsu wa isogashii desu.", meanings: { en: "This month is busy.", bn: "এই মাস ব্যস্ত।" } } },
                    { word: "来月", reading: "raigetsu", meanings: { en: "Next month", bn: "আগামী মাস" }, example: { jp: "来月、結婚します。", reading: "Raigetsu, kekkon shimasu.", meanings: { en: "I will get married next month.", bn: "আগামী মাস বিয়ে করব।" } } },
                    { word: "誕生日", reading: "tanjoubi", meanings: { en: "Birthday", bn: "জন্মদিন" }, example: { jp: "誕生日おめでとうございます。", reading: "Tanjoubi omedetou gozaimasu.", meanings: { en: "Happy birthday.", bn: "জন্মদিনের শুভেচ্ছা।" } } }
                ]
            },
            {
                id: "time-clock",
                title: "Time & Clock",
                items: [
                    { word: "時間", reading: "jikan", meanings: { en: "Time / hours", bn: "সময়" }, example: { jp: "時間がありません。", reading: "Jikan ga arimasen.", meanings: { en: "I don't have time.", bn: "সময় নেই।" } } },
                    { word: "何時", reading: "nanji", meanings: { en: "What time", bn: "কয়টা বাজে" }, example: { jp: "今、何時ですか。", reading: "Ima, nanji desu ka.", meanings: { en: "What time is it now?", bn: "এখন কয়টা বাজে?" } } },
                    { word: "分", reading: "fun / pun", meanings: { en: "Minute", bn: "মিনিট" }, example: { jp: "十分待ってください。", reading: "Juppun matte kudasai.", meanings: { en: "Please wait ten minutes.", bn: "দশ মিনিট অপেক্ষা করুন।" } } },
                    { word: "半", reading: "han", meanings: { en: "Half (past the hour)", bn: "সাড়ে (আধা)" }, example: { jp: "三時半に会いましょう。", reading: "San-ji han ni aimashou.", meanings: { en: "Let's meet at half past three.", bn: "সাড়ে তিনটার সময় দেখা করি।" } } },
                    { word: "朝", reading: "asa", meanings: { en: "Morning", bn: "সকাল" }, example: { jp: "朝、コーヒーを飲みます。", reading: "Asa, koohii wo nomimasu.", meanings: { en: "I drink coffee in the morning.", bn: "সকালে কফি খাই।" } } },
                    { word: "昼", reading: "hiru", meanings: { en: "Noon / daytime", bn: "দুপুর" }, example: { jp: "昼ご飯を食べました。", reading: "Hirugohan wo tabemashita.", meanings: { en: "I ate lunch.", bn: "দুপুরের খাবার খেয়েছি।" } } },
                    { word: "夜", reading: "yoru", meanings: { en: "Night", bn: "রাত" }, example: { jp: "夜は静かです。", reading: "Yoru wa shizuka desu.", meanings: { en: "The night is quiet.", bn: "রাত শান্ত থাকে।" } } },
                    { word: "午前", reading: "gozen", meanings: { en: "A.M.", bn: "সকালবেলা (এএম)" }, example: { jp: "午前九時に始まります。", reading: "Gozen kuji ni hajimarimasu.", meanings: { en: "It starts at 9 a.m.", bn: "সকাল ৯টায় শুরু হয়।" } } },
                    { word: "午後", reading: "gogo", meanings: { en: "P.M.", bn: "বিকেলবেলা (পিএম)" }, example: { jp: "午後三時に会いましょう。", reading: "Gogo san-ji ni aimashou.", meanings: { en: "Let's meet at 3 p.m.", bn: "বিকেল ৩টায় দেখা করি।" } } },
                    { word: "早い", reading: "hayai", meanings: { en: "Early / fast", bn: "তাড়াতাড়ি / দ্রুত" }, example: { jp: "今日は早く起きました。", reading: "Kyou wa hayaku okimashita.", meanings: { en: "I woke up early today.", bn: "আজ তাড়াতাড়ি ঘুম থেকে উঠেছি।" } } },
                    { word: "遅い", reading: "osoi", meanings: { en: "Late / slow", bn: "দেরি / ধীর" }, example: { jp: "バスが遅いです。", reading: "Basu ga osoi desu.", meanings: { en: "The bus is late.", bn: "বাস দেরি করছে।" } } },
                    { word: "今", reading: "ima", meanings: { en: "Now", bn: "এখন" }, example: { jp: "今、忙しいです。", reading: "Ima, isogashii desu.", meanings: { en: "I'm busy right now.", bn: "এখন ব্যস্ত আছি।" } } },
                    { word: "前", reading: "mae", meanings: { en: "Before / in front of", bn: "আগে / সামনে" }, example: { jp: "駅の前で待っています。", reading: "Eki no mae de matte imasu.", meanings: { en: "I'm waiting in front of the station.", bn: "স্টেশনের সামনে অপেক্ষা করছি।" } } },
                    { word: "後", reading: "ato", meanings: { en: "After", bn: "পরে" }, example: { jp: "仕事の後で食事します。", reading: "Shigoto no ato de shokuji shimasu.", meanings: { en: "I will eat after work.", bn: "কাজের পরে খাবো।" } } },
                    { word: "時計", reading: "tokei", meanings: { en: "Clock / watch", bn: "ঘড়ি" }, example: { jp: "新しい時計を買いました。", reading: "Atarashii tokei wo kaimashita.", meanings: { en: "I bought a new watch.", bn: "নতুন একটা ঘড়ি কিনেছি।" } } }
                ]
            },
            {
                id: "daily-routine",
                title: "Daily Routine (Verbs)",
                items: [
                    { word: "顔を洗う", reading: "kao wo arau", meanings: { en: "To wash one's face", bn: "মুখ ধোয়া" }, example: { jp: "毎朝、顔を洗います。", reading: "Maiasa, kao wo araimasu.", meanings: { en: "I wash my face every morning.", bn: "প্রতিদিন সকালে মুখ ধুই।" } } },
                    { word: "歯を磨く", reading: "ha wo migaku", meanings: { en: "To brush teeth", bn: "দাঁত মাজা" }, example: { jp: "寝る前に歯を磨きます。", reading: "Neru mae ni ha wo migakimasu.", meanings: { en: "I brush my teeth before sleeping.", bn: "ঘুমানোর আগে দাঁত মাজি।" } } },
                    { word: "シャワーを浴びる", reading: "shawaa wo abiru", meanings: { en: "To take a shower", bn: "শাওয়ার নেওয়া" }, example: { jp: "朝、シャワーを浴びます。", reading: "Asa, shawaa wo abimasu.", meanings: { en: "I take a shower in the morning.", bn: "সকালে শাওয়ার নিই।" } } },
                    { word: "着替える", reading: "kigaeru", meanings: { en: "To change clothes", bn: "কাপড় বদলানো" }, example: { jp: "早く着替えてください。", reading: "Hayaku kigaete kudasai.", meanings: { en: "Please change your clothes quickly.", bn: "তাড়াতাড়ি কাপড় বদলান।" } } },
                    { word: "出かける", reading: "dekakeru", meanings: { en: "To go out", bn: "বাইরে যাওয়া" }, example: { jp: "今から出かけます。", reading: "Ima kara dekakemasu.", meanings: { en: "I'm going out now.", bn: "এখন থেকে বাইরে যাচ্ছি।" } } },
                    { word: "帰る", reading: "kaeru", meanings: { en: "To return / go home", bn: "বাড়ি ফেরা" }, example: { jp: "六時に家に帰ります。", reading: "Roku-ji ni ie ni kaerimasu.", meanings: { en: "I go home at six o'clock.", bn: "ছয়টায় বাড়ি ফিরি।" } } },
                    { word: "休む", reading: "yasumu", meanings: { en: "To rest / take a day off", bn: "বিশ্রাম নেওয়া / ছুটি নেওয়া" }, example: { jp: "今日は家で休みます。", reading: "Kyou wa ie de yasumimasu.", meanings: { en: "I will rest at home today.", bn: "আজ বাসায় বিশ্রাম নেব।" } } },
                    { word: "掃除する", reading: "souji suru", meanings: { en: "To clean", bn: "পরিষ্কার করা" }, example: { jp: "週末に部屋を掃除します。", reading: "Shuumatsu ni heya wo souji shimasu.", meanings: { en: "I clean my room on weekends.", bn: "সপ্তাহান্তে ঘর পরিষ্কার করি।" } } },
                    { word: "洗濯する", reading: "sentaku suru", meanings: { en: "To do laundry", bn: "কাপড় ধোয়া" }, example: { jp: "毎日、洗濯します。", reading: "Mainichi, sentaku shimasu.", meanings: { en: "I do laundry every day.", bn: "প্রতিদিন কাপড় ধুই।" } } },
                    { word: "準備する", reading: "junbi suru", meanings: { en: "To prepare", bn: "প্রস্তুতি নেওয়া" }, example: { jp: "テストの準備をしています。", reading: "Tesuto no junbi wo shite imasu.", meanings: { en: "I am preparing for the test.", bn: "পরীক্ষার প্রস্তুতি নিচ্ছি।" } } },
                    { word: "忙しい", reading: "isogashii", meanings: { en: "Busy", bn: "ব্যস্ত" }, example: { jp: "今週はとても忙しいです。", reading: "Konshuu wa totemo isogashii desu.", meanings: { en: "This week is very busy.", bn: "এই সপ্তাহ খুব ব্যস্ত।" } } },
                    { word: "暇", reading: "hima", meanings: { en: "Free time / not busy", bn: "অবসর সময়" }, example: { jp: "週末は暇です。", reading: "Shuumatsu wa hima desu.", meanings: { en: "I am free on the weekend.", bn: "সপ্তাহান্তে অবসর থাকি।" } } }
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
