/* ==========================================
   KANA DETAIL DATA
   Loaded via <script> tag (not fetch()) — see
   data/hiragana-data.js for why.

   One object keyed by the exact kana character
   (both hiragana and katakana keys live in this
   same object — they never collide). Each value:
     {
       nameBn,          // the sound written phonetically
                         // in Bangla script (a Bengali
                         // learner's intuitive reading of
                         // the romaji, not a literal
                         // transliteration of the kana)
       examples: [ { word, reading, meanings: {en, bn} } ],
       exampleSentence: { jp, reading, meanings: {en, bn} }
     }

   examples[0]/exampleSentence reuse the character's
   existing word/reading/meaning/sentence/translation
   from hiragana-data.js / katakana-data.js (meaning
   translated to Bangla); the rest of examples[] are
   freshly authored (native words for hiragana, loan-
   words for katakana, matching katakana-data.js's
   convention). reading is always romaji, matching the
   convention already used in hiragana-data.js /
   katakana-data.js (kana is never glossed with kana).
========================================== */

const kanaDetailData = {

    /* ---------- HIRAGANA: あ row ---------- */
    "あ": { nameBn: "আ", examples: [
        { word: "あさ", reading: "asa", meanings: { en: "Morning", bn: "সকাল" } },
        { word: "あめ", reading: "ame", meanings: { en: "Rain", bn: "বৃষ্টি" } },
        { word: "あか", reading: "aka", meanings: { en: "Red", bn: "লাল" } }
    ], exampleSentence: { jp: "あさです。", reading: "Asa desu.", meanings: { en: "It is morning.", bn: "এটি সকাল।" } } },
    "い": { nameBn: "ই", examples: [
        { word: "いぬ", reading: "inu", meanings: { en: "Dog", bn: "কুকুর" } },
        { word: "いえ", reading: "ie", meanings: { en: "House", bn: "বাড়ি" } },
        { word: "いろ", reading: "iro", meanings: { en: "Color", bn: "রং" } }
    ], exampleSentence: { jp: "いぬがいます。", reading: "Inu ga imasu.", meanings: { en: "There is a dog.", bn: "একটি কুকুর আছে।" } } },
    "う": { nameBn: "উ", examples: [
        { word: "うみ", reading: "umi", meanings: { en: "Sea", bn: "সমুদ্র" } },
        { word: "うた", reading: "uta", meanings: { en: "Song", bn: "গান" } },
        { word: "うし", reading: "ushi", meanings: { en: "Cow", bn: "গরু" } }
    ], exampleSentence: { jp: "うみは あおいです。", reading: "Umi wa aoi desu.", meanings: { en: "The sea is blue.", bn: "সমুদ্র নীল।" } } },
    "え": { nameBn: "এ", examples: [
        { word: "えき", reading: "eki", meanings: { en: "Station", bn: "স্টেশন" } },
        { word: "えんぴつ", reading: "enpitsu", meanings: { en: "Pencil", bn: "পেন্সিল" } },
        { word: "えいが", reading: "eiga", meanings: { en: "Movie", bn: "সিনেমা" } }
    ], exampleSentence: { jp: "えきは ちかいです。", reading: "Eki wa chikai desu.", meanings: { en: "The station is close.", bn: "স্টেশনটি কাছে।" } } },
    "お": { nameBn: "ও", examples: [
        { word: "おかね", reading: "okane", meanings: { en: "Money", bn: "টাকা" } },
        { word: "おちゃ", reading: "ocha", meanings: { en: "Tea", bn: "চা" } },
        { word: "おと", reading: "oto", meanings: { en: "Sound", bn: "শব্দ" } }
    ], exampleSentence: { jp: "おかねが ありません。", reading: "Okane ga arimasen.", meanings: { en: "I don't have money.", bn: "আমার কাছে টাকা নেই।" } } },

    /* ---------- HIRAGANA: か row ---------- */
    "か": { nameBn: "কা", examples: [
        { word: "かさ", reading: "kasa", meanings: { en: "Umbrella", bn: "ছাতা" } },
        { word: "かみ", reading: "kami", meanings: { en: "Paper", bn: "কাগজ" } },
        { word: "かぞく", reading: "kazoku", meanings: { en: "Family", bn: "পরিবার" } }
    ], exampleSentence: { jp: "かさを かいます。", reading: "Kasa o kaimasu.", meanings: { en: "I will buy an umbrella.", bn: "আমি একটি ছাতা কিনব।" } } },
    "き": { nameBn: "কি", examples: [
        { word: "きた", reading: "kita", meanings: { en: "North", bn: "উত্তর" } },
        { word: "きいろ", reading: "kiiro", meanings: { en: "Yellow", bn: "হলুদ" } },
        { word: "きもの", reading: "kimono", meanings: { en: "Kimono", bn: "কিমোনো" } }
    ], exampleSentence: { jp: "きたへ いきます。", reading: "Kita e ikimasu.", meanings: { en: "I am going north.", bn: "আমি উত্তরে যাচ্ছি।" } } },
    "く": { nameBn: "কু", examples: [
        { word: "くつ", reading: "kutsu", meanings: { en: "Shoes", bn: "জুতা" } },
        { word: "くも", reading: "kumo", meanings: { en: "Cloud", bn: "মেঘ" } },
        { word: "くるま", reading: "kuruma", meanings: { en: "Car", bn: "গাড়ি" } }
    ], exampleSentence: { jp: "くつを ぬぎます。", reading: "Kutsu o nugimasu.", meanings: { en: "I take off my shoes.", bn: "আমি জুতা খুলি।" } } },
    "け": { nameBn: "কে", examples: [
        { word: "けさ", reading: "kesa", meanings: { en: "This morning", bn: "আজ সকাল" } },
        { word: "けいたい", reading: "keitai", meanings: { en: "Cellphone", bn: "মোবাইল ফোন" } },
        { word: "けっこん", reading: "kekkon", meanings: { en: "Marriage", bn: "বিবাহ" } }
    ], exampleSentence: { jp: "けさ たべました。", reading: "Kesa tabemashita.", meanings: { en: "I ate this morning.", bn: "আমি আজ সকালে খেয়েছি।" } } },
    "こ": { nameBn: "কো", examples: [
        { word: "こども", reading: "kodomo", meanings: { en: "Child", bn: "শিশু" } },
        { word: "こえ", reading: "koe", meanings: { en: "Voice", bn: "কণ্ঠস্বর" } },
        { word: "こおり", reading: "koori", meanings: { en: "Ice", bn: "বরফ" } }
    ], exampleSentence: { jp: "こどもが あそびます。", reading: "Kodomo ga asobimasu.", meanings: { en: "The child plays.", bn: "শিশুটি খেলে।" } } },

    /* ---------- HIRAGANA: さ row ---------- */
    "さ": { nameBn: "সা", examples: [
        { word: "さかな", reading: "sakana", meanings: { en: "Fish", bn: "মাছ" } },
        { word: "さくら", reading: "sakura", meanings: { en: "Cherry blossom", bn: "চেরি ফুল" } },
        { word: "さいふ", reading: "saifu", meanings: { en: "Wallet", bn: "মানিব্যাগ" } }
    ], exampleSentence: { jp: "さかなを たべます。", reading: "Sakana o tabemasu.", meanings: { en: "I eat fish.", bn: "আমি মাছ খাই।" } } },
    "し": { nameBn: "শি", examples: [
        { word: "しお", reading: "shio", meanings: { en: "Salt", bn: "লবণ" } },
        { word: "しごと", reading: "shigoto", meanings: { en: "Work", bn: "কাজ" } },
        { word: "しんぶん", reading: "shinbun", meanings: { en: "Newspaper", bn: "সংবাদপত্র" } }
    ], exampleSentence: { jp: "しおを いれます。", reading: "Shio o iremasu.", meanings: { en: "I add salt.", bn: "আমি লবণ দিই।" } } },
    "す": { nameBn: "সু", examples: [
        { word: "すし", reading: "sushi", meanings: { en: "Sushi", bn: "সুশি" } },
        { word: "すいか", reading: "suika", meanings: { en: "Watermelon", bn: "তরমুজ" } },
        { word: "すいえい", reading: "suiei", meanings: { en: "Swimming", bn: "সাঁতার" } }
    ], exampleSentence: { jp: "すしが すきです。", reading: "Sushi ga suki desu.", meanings: { en: "I like sushi.", bn: "আমি সুশি পছন্দ করি।" } } },
    "せ": { nameBn: "সে", examples: [
        { word: "せんせい", reading: "sensei", meanings: { en: "Teacher", bn: "শিক্ষক" } },
        { word: "せかい", reading: "sekai", meanings: { en: "World", bn: "বিশ্ব" } },
        { word: "せなか", reading: "senaka", meanings: { en: "Back (of body)", bn: "পিঠ" } }
    ], exampleSentence: { jp: "せんせいは しんせつです。", reading: "Sensei wa shinsetsu desu.", meanings: { en: "The teacher is kind.", bn: "শিক্ষক দয়ালু।" } } },
    "そ": { nameBn: "সো", examples: [
        { word: "そら", reading: "sora", meanings: { en: "Sky", bn: "আকাশ" } },
        { word: "そと", reading: "soto", meanings: { en: "Outside", bn: "বাইরে" } },
        { word: "そうじ", reading: "souji", meanings: { en: "Cleaning", bn: "পরিষ্কার করা" } }
    ], exampleSentence: { jp: "そらが きれいです。", reading: "Sora ga kirei desu.", meanings: { en: "The sky is beautiful.", bn: "আকাশ সুন্দর।" } } },

    /* ---------- HIRAGANA: た row ---------- */
    "た": { nameBn: "তা", examples: [
        { word: "たまご", reading: "tamago", meanings: { en: "Egg", bn: "ডিম" } },
        { word: "たべもの", reading: "tabemono", meanings: { en: "Food", bn: "খাবার" } },
        { word: "たいふう", reading: "taifuu", meanings: { en: "Typhoon", bn: "টাইফুন" } }
    ], exampleSentence: { jp: "たまごを かいます。", reading: "Tamago o kaimasu.", meanings: { en: "I buy eggs.", bn: "আমি ডিম কিনি।" } } },
    "ち": { nameBn: "চি", examples: [
        { word: "ちず", reading: "chizu", meanings: { en: "Map", bn: "মানচিত্র" } },
        { word: "ちかてつ", reading: "chikatetsu", meanings: { en: "Subway", bn: "পাতাল রেল" } },
        { word: "ちち", reading: "chichi", meanings: { en: "Father (own)", bn: "বাবা" } }
    ], exampleSentence: { jp: "ちずを みます。", reading: "Chizu o mimasu.", meanings: { en: "I look at the map.", bn: "আমি মানচিত্র দেখি।" } } },
    "つ": { nameBn: "ৎসু", examples: [
        { word: "つき", reading: "tsuki", meanings: { en: "Moon", bn: "চাঁদ" } },
        { word: "つくえ", reading: "tsukue", meanings: { en: "Desk", bn: "ডেস্ক" } },
        { word: "つめたい", reading: "tsumetai", meanings: { en: "Cold (to touch)", bn: "ঠান্ডা" } }
    ], exampleSentence: { jp: "つきが きれいです。", reading: "Tsuki ga kirei desu.", meanings: { en: "The moon is beautiful.", bn: "চাঁদ সুন্দর।" } } },
    "て": { nameBn: "তে", examples: [
        { word: "てがみ", reading: "tegami", meanings: { en: "Letter", bn: "চিঠি" } },
        { word: "てんき", reading: "tenki", meanings: { en: "Weather", bn: "আবহাওয়া" } },
        { word: "てぶくろ", reading: "tebukuro", meanings: { en: "Gloves", bn: "দস্তানা" } }
    ], exampleSentence: { jp: "てがみを かきます。", reading: "Tegami o kakimasu.", meanings: { en: "I write a letter.", bn: "আমি একটি চিঠি লিখি।" } } },
    "と": { nameBn: "তো", examples: [
        { word: "とけい", reading: "tokei", meanings: { en: "Clock", bn: "ঘড়ি" } },
        { word: "ともだち", reading: "tomodachi", meanings: { en: "Friend", bn: "বন্ধু" } },
        { word: "とり", reading: "tori", meanings: { en: "Bird", bn: "পাখি" } }
    ], exampleSentence: { jp: "とけいを みます。", reading: "Tokei o mimasu.", meanings: { en: "I look at the clock.", bn: "আমি ঘড়ি দেখি।" } } },

    /* ---------- HIRAGANA: な row ---------- */
    "な": { nameBn: "না", examples: [
        { word: "なつ", reading: "natsu", meanings: { en: "Summer", bn: "গ্রীষ্মকাল" } },
        { word: "なまえ", reading: "namae", meanings: { en: "Name", bn: "নাম" } },
        { word: "ながい", reading: "nagai", meanings: { en: "Long", bn: "লম্বা" } }
    ], exampleSentence: { jp: "なつは あついです。", reading: "Natsu wa atsui desu.", meanings: { en: "Summer is hot.", bn: "গ্রীষ্মকাল গরম।" } } },
    "に": { nameBn: "নি", examples: [
        { word: "にく", reading: "niku", meanings: { en: "Meat", bn: "মাংস" } },
        { word: "にほん", reading: "nihon", meanings: { en: "Japan", bn: "জাপান" } },
        { word: "にわ", reading: "niwa", meanings: { en: "Garden", bn: "বাগান" } }
    ], exampleSentence: { jp: "にくを たべます。", reading: "Niku o tabemasu.", meanings: { en: "I eat meat.", bn: "আমি মাংস খাই।" } } },
    "ぬ": { nameBn: "নু", examples: [
        { word: "ぬの", reading: "nuno", meanings: { en: "Cloth", bn: "কাপড়" } },
        { word: "ぬいぐるみ", reading: "nuigurumi", meanings: { en: "Stuffed toy", bn: "নরম খেলনা" } },
        { word: "ぬるい", reading: "nurui", meanings: { en: "Lukewarm", bn: "কুসুম গরম" } }
    ], exampleSentence: { jp: "ぬのを かいます。", reading: "Nuno o kaimasu.", meanings: { en: "I buy cloth.", bn: "আমি কাপড় কিনি।" } } },
    "ね": { nameBn: "নে", examples: [
        { word: "ねこ", reading: "neko", meanings: { en: "Cat", bn: "বিড়াল" } },
        { word: "ねだん", reading: "nedan", meanings: { en: "Price", bn: "দাম" } },
        { word: "ねつ", reading: "netsu", meanings: { en: "Fever", bn: "জ্বর" } }
    ], exampleSentence: { jp: "ねこが ねます。", reading: "Neko ga nemasu.", meanings: { en: "The cat sleeps.", bn: "বিড়ালটি ঘুমায়।" } } },
    "の": { nameBn: "নো", examples: [
        { word: "のり", reading: "nori", meanings: { en: "Seaweed", bn: "সামুদ্রিক শৈবাল" } },
        { word: "のみもの", reading: "nomimono", meanings: { en: "Drink", bn: "পানীয়" } },
        { word: "のど", reading: "nodo", meanings: { en: "Throat", bn: "গলা" } }
    ], exampleSentence: { jp: "のりを たべます。", reading: "Nori o tabemasu.", meanings: { en: "I eat seaweed.", bn: "আমি সামুদ্রিক শৈবাল খাই।" } } },

    /* ---------- HIRAGANA: は row ---------- */
    "は": { nameBn: "হা", examples: [
        { word: "はな", reading: "hana", meanings: { en: "Flower", bn: "ফুল" } },
        { word: "はし", reading: "hashi", meanings: { en: "Chopsticks", bn: "চপস্টিক" } },
        { word: "はる", reading: "haru", meanings: { en: "Spring (season)", bn: "বসন্ত" } }
    ], exampleSentence: { jp: "はなが さきます。", reading: "Hana ga sakimasu.", meanings: { en: "The flower blooms.", bn: "ফুল ফোটে।" } } },
    "ひ": { nameBn: "হি", examples: [
        { word: "ひと", reading: "hito", meanings: { en: "Person", bn: "মানুষ" } },
        { word: "ひる", reading: "hiru", meanings: { en: "Noon", bn: "দুপুর" } },
        { word: "ひこうき", reading: "hikouki", meanings: { en: "Airplane", bn: "বিমান" } }
    ], exampleSentence: { jp: "ひとが おおいです。", reading: "Hito ga ooi desu.", meanings: { en: "There are many people.", bn: "অনেক মানুষ আছে।" } } },
    "ふ": { nameBn: "ফু", examples: [
        { word: "ふゆ", reading: "fuyu", meanings: { en: "Winter", bn: "শীতকাল" } },
        { word: "ふく", reading: "fuku", meanings: { en: "Clothes", bn: "পোশাক" } },
        { word: "ふうとう", reading: "fuutou", meanings: { en: "Envelope", bn: "খাম" } }
    ], exampleSentence: { jp: "ふゆは さむいです。", reading: "Fuyu wa samui desu.", meanings: { en: "Winter is cold.", bn: "শীতকাল ঠান্ডা।" } } },
    "へ": { nameBn: "হে", examples: [
        { word: "へや", reading: "heya", meanings: { en: "Room", bn: "ঘর" } },
        { word: "へいわ", reading: "heiwa", meanings: { en: "Peace", bn: "শান্তি" } },
        { word: "へた", reading: "heta", meanings: { en: "Unskilled", bn: "অদক্ষ" } }
    ], exampleSentence: { jp: "へやが きれいです。", reading: "Heya ga kirei desu.", meanings: { en: "The room is clean.", bn: "ঘরটি পরিষ্কার।" } } },
    "ほ": { nameBn: "হো", examples: [
        { word: "ほん", reading: "hon", meanings: { en: "Book", bn: "বই" } },
        { word: "ほし", reading: "hoshi", meanings: { en: "Star", bn: "তারা" } },
        { word: "ほうちょう", reading: "houchou", meanings: { en: "Kitchen knife", bn: "রান্নাঘরের ছুরি" } }
    ], exampleSentence: { jp: "ほんを よみます。", reading: "Hon o yomimasu.", meanings: { en: "I read a book.", bn: "আমি একটি বই পড়ি।" } } },

    /* ---------- HIRAGANA: ま row ---------- */
    "ま": { nameBn: "মা", examples: [
        { word: "まど", reading: "mado", meanings: { en: "Window", bn: "জানালা" } },
        { word: "まいにち", reading: "mainichi", meanings: { en: "Every day", bn: "প্রতিদিন" } },
        { word: "まち", reading: "machi", meanings: { en: "Town", bn: "শহর" } }
    ], exampleSentence: { jp: "まどを あけます。", reading: "Mado o akemasu.", meanings: { en: "I open the window.", bn: "আমি জানালা খুলি।" } } },
    "み": { nameBn: "মি", examples: [
        { word: "みず", reading: "mizu", meanings: { en: "Water", bn: "পানি" } },
        { word: "みみ", reading: "mimi", meanings: { en: "Ear", bn: "কান" } },
        { word: "みせ", reading: "mise", meanings: { en: "Shop", bn: "দোকান" } }
    ], exampleSentence: { jp: "みずを のみます。", reading: "Mizu o nomimasu.", meanings: { en: "I drink water.", bn: "আমি পানি পান করি।" } } },
    "む": { nameBn: "মু", examples: [
        { word: "むし", reading: "mushi", meanings: { en: "Insect", bn: "পোকা" } },
        { word: "むかし", reading: "mukashi", meanings: { en: "Long ago", bn: "বহুকাল আগে" } },
        { word: "むすこ", reading: "musuko", meanings: { en: "Son", bn: "ছেলে" } }
    ], exampleSentence: { jp: "むしが います。", reading: "Mushi ga imasu.", meanings: { en: "There is an insect.", bn: "একটি পোকা আছে।" } } },
    "め": { nameBn: "মে", examples: [
        { word: "めがね", reading: "megane", meanings: { en: "Glasses", bn: "চশমা" } },
        { word: "めいし", reading: "meishi", meanings: { en: "Business card", bn: "ভিজিটিং কার্ড" } },
        { word: "めざまし", reading: "mezamashi", meanings: { en: "Alarm clock", bn: "অ্যালার্ম ঘড়ি" } }
    ], exampleSentence: { jp: "めがねを かけます。", reading: "Megane o kakemasu.", meanings: { en: "I wear glasses.", bn: "আমি চশমা পরি।" } } },
    "も": { nameBn: "মো", examples: [
        { word: "もり", reading: "mori", meanings: { en: "Forest", bn: "বন" } },
        { word: "もの", reading: "mono", meanings: { en: "Thing", bn: "জিনিস" } },
        { word: "もくようび", reading: "mokuyoubi", meanings: { en: "Thursday", bn: "বৃহস্পতিবার" } }
    ], exampleSentence: { jp: "もりが おおきいです。", reading: "Mori ga ookii desu.", meanings: { en: "The forest is big.", bn: "বনটি বড়।" } } },

    /* ---------- HIRAGANA: や row ---------- */
    "や": { nameBn: "ইয়া", examples: [
        { word: "やま", reading: "yama", meanings: { en: "Mountain", bn: "পাহাড়" } },
        { word: "やさい", reading: "yasai", meanings: { en: "Vegetable", bn: "সবজি" } },
        { word: "やすい", reading: "yasui", meanings: { en: "Cheap", bn: "সস্তা" } }
    ], exampleSentence: { jp: "やまに のぼります。", reading: "Yama ni noborimasu.", meanings: { en: "I climb the mountain.", bn: "আমি পাহাড়ে উঠি।" } } },
    "ゆ": { nameBn: "ইউ", examples: [
        { word: "ゆき", reading: "yuki", meanings: { en: "Snow", bn: "তুষার" } },
        { word: "ゆびわ", reading: "yubiwa", meanings: { en: "Ring", bn: "আংটি" } },
        { word: "ゆうめい", reading: "yuumei", meanings: { en: "Famous", bn: "বিখ্যাত" } }
    ], exampleSentence: { jp: "ゆきが ふります。", reading: "Yuki ga furimasu.", meanings: { en: "Snow falls.", bn: "তুষার পড়ে।" } } },
    "よ": { nameBn: "ইয়ো", examples: [
        { word: "よる", reading: "yoru", meanings: { en: "Night", bn: "রাত" } },
        { word: "よてい", reading: "yotei", meanings: { en: "Plan", bn: "পরিকল্পনা" } },
        { word: "よやく", reading: "yoyaku", meanings: { en: "Reservation", bn: "রিজার্ভেশন" } }
    ], exampleSentence: { jp: "よるは くらいです。", reading: "Yoru wa kurai desu.", meanings: { en: "Night is dark.", bn: "রাত অন্ধকার।" } } },

    /* ---------- HIRAGANA: ら row ---------- */
    "ら": { nameBn: "রা", examples: [
        { word: "らいねん", reading: "rainen", meanings: { en: "Next year", bn: "আগামী বছর" } },
        { word: "らいげつ", reading: "raigetsu", meanings: { en: "Next month", bn: "আগামী মাস" } },
        { word: "らく", reading: "raku", meanings: { en: "Comfortable", bn: "আরামদায়ক" } }
    ], exampleSentence: { jp: "らいねん いきます。", reading: "Rainen ikimasu.", meanings: { en: "I will go next year.", bn: "আমি আগামী বছর যাব।" } } },
    "り": { nameBn: "রি", examples: [
        { word: "りんご", reading: "ringo", meanings: { en: "Apple", bn: "আপেল" } },
        { word: "りゆう", reading: "riyuu", meanings: { en: "Reason", bn: "কারণ" } },
        { word: "りょうり", reading: "ryouri", meanings: { en: "Cooking", bn: "রান্না" } }
    ], exampleSentence: { jp: "りんごを たべます。", reading: "Ringo o tabemasu.", meanings: { en: "I eat an apple.", bn: "আমি একটি আপেল খাই।" } } },
    "る": { nameBn: "রু", examples: [
        { word: "るす", reading: "rusu", meanings: { en: "Being out/absent", bn: "বাড়িতে না থাকা" } },
        { word: "るすばん", reading: "rusuban", meanings: { en: "House-sitting", bn: "বাড়ি পাহারা" } },
        { word: "るいじ", reading: "ruiji", meanings: { en: "Resemblance", bn: "সাদৃশ্য" } }
    ], exampleSentence: { jp: "いえは るすです。", reading: "Ie wa rusu desu.", meanings: { en: "No one is home.", bn: "বাড়িতে কেউ নেই।" } } },
    "れ": { nameBn: "রে", examples: [
        { word: "れきし", reading: "rekishi", meanings: { en: "History", bn: "ইতিহাস" } },
        { word: "れいぞうこ", reading: "reizouko", meanings: { en: "Refrigerator", bn: "ফ্রিজ" } },
        { word: "れんしゅう", reading: "renshuu", meanings: { en: "Practice", bn: "অনুশীলন" } }
    ], exampleSentence: { jp: "れきしを べんきょうします。", reading: "Rekishi o benkyoushimasu.", meanings: { en: "I study history.", bn: "আমি ইতিহাস পড়াশোনা করি।" } } },
    "ろ": { nameBn: "রো", examples: [
        { word: "ろうか", reading: "rouka", meanings: { en: "Hallway", bn: "করিডোর" } },
        { word: "ろうじん", reading: "roujin", meanings: { en: "Elderly person", bn: "বয়স্ক ব্যক্তি" } },
        { word: "ろく", reading: "roku", meanings: { en: "Six", bn: "ছয়" } }
    ], exampleSentence: { jp: "ろうかを あるきます。", reading: "Rouka o arukimasu.", meanings: { en: "I walk down the hallway.", bn: "আমি করিডোর দিয়ে হাঁটি।" } } },

    /* ---------- HIRAGANA: わ row + を + ん ---------- */
    "わ": { nameBn: "ওয়া", examples: [
        { word: "わたし", reading: "watashi", meanings: { en: "I / me", bn: "আমি" } },
        { word: "わかい", reading: "wakai", meanings: { en: "Young", bn: "তরুণ" } },
        { word: "わすれる", reading: "wasureru", meanings: { en: "To forget", bn: "ভুলে যাওয়া" } }
    ], exampleSentence: { jp: "わたしは がくせいです。", reading: "Watashi wa gakusei desu.", meanings: { en: "I am a student.", bn: "আমি একজন ছাত্র/ছাত্রী।" } } },
    "を": { nameBn: "ও", examples: [
        { word: "を", reading: "wo", meanings: { en: "Object particle (marks the direct object)", bn: "কর্ম নির্দেশক অব্যয়" } },
        { word: "ごはんを たべる", reading: "gohan o taberu", meanings: { en: "To eat a meal", bn: "ভাত/খাবার খাওয়া" } },
        { word: "みずを のむ", reading: "mizu o nomu", meanings: { en: "To drink water", bn: "পানি খাওয়া" } }
    ], exampleSentence: { jp: "ほんを よみます。", reading: "Hon o yomimasu.", meanings: { en: "I read a book (book = object).", bn: "আমি একটি বই পড়ি (বই = বস্তু)।" } } },
    "ん": { nameBn: "ন", examples: [
        { word: "ほん", reading: "hon", meanings: { en: "N sound (never starts a word)", bn: "\"ন\" ধ্বনি (শব্দের শুরুতে ব্যবহার হয় না)" } },
        { word: "せんせい", reading: "sensei", meanings: { en: "Teacher", bn: "শিক্ষক" } },
        { word: "にほん", reading: "nihon", meanings: { en: "Japan", bn: "জাপান" } }
    ], exampleSentence: { jp: "ほんが すきです。", reading: "Hon ga suki desu.", meanings: { en: "I like books.", bn: "আমি বই পছন্দ করি।" } } },

    /* ---------- KATAKANA: ア row ---------- */
    "ア": { nameBn: "আ", examples: [
        { word: "アイス", reading: "aisu", meanings: { en: "Ice cream", bn: "আইসক্রিম" } },
        { word: "アパート", reading: "apaato", meanings: { en: "Apartment", bn: "অ্যাপার্টমেন্ট" } },
        { word: "アルバイト", reading: "arubaito", meanings: { en: "Part-time job", bn: "খণ্ডকালীন কাজ" } }
    ], exampleSentence: { jp: "アイスを たべます。", reading: "Aisu o tabemasu.", meanings: { en: "I eat ice cream.", bn: "আমি আইসক্রিম খাই।" } } },
    "イ": { nameBn: "ই", examples: [
        { word: "イタリア", reading: "itaria", meanings: { en: "Italy", bn: "ইতালি" } },
        { word: "インターネット", reading: "intaanetto", meanings: { en: "Internet", bn: "ইন্টারনেট" } },
        { word: "インド", reading: "indo", meanings: { en: "India", bn: "ভারত" } }
    ], exampleSentence: { jp: "イタリアに いきたいです。", reading: "Itaria ni ikitai desu.", meanings: { en: "I want to go to Italy.", bn: "আমি ইতালি যেতে চাই।" } } },
    "ウ": { nameBn: "উ", examples: [
        { word: "ウール", reading: "uuru", meanings: { en: "Wool", bn: "উল" } },
        { word: "ウイスキー", reading: "uisukii", meanings: { en: "Whisky", bn: "হুইস্কি" } },
        { word: "ウエスト", reading: "uesuto", meanings: { en: "Waist", bn: "কোমর" } }
    ], exampleSentence: { jp: "ウールの セーターです。", reading: "Uuru no seetaa desu.", meanings: { en: "It's a wool sweater.", bn: "এটি উলের সোয়েটার।" } } },
    "エ": { nameBn: "এ", examples: [
        { word: "エレベーター", reading: "erebeetaa", meanings: { en: "Elevator", bn: "লিফট" } },
        { word: "エアコン", reading: "eakon", meanings: { en: "Air conditioner", bn: "এয়ার কন্ডিশনার" } },
        { word: "エンジン", reading: "enjin", meanings: { en: "Engine", bn: "ইঞ্জিন" } }
    ], exampleSentence: { jp: "エレベーターに のります。", reading: "Erebeetaa ni norimasu.", meanings: { en: "I get on the elevator.", bn: "আমি লিফটে উঠি।" } } },
    "オ": { nameBn: "ও", examples: [
        { word: "オレンジ", reading: "orenji", meanings: { en: "Orange", bn: "কমলা" } },
        { word: "オフィス", reading: "ofisu", meanings: { en: "Office", bn: "অফিস" } },
        { word: "オートバイ", reading: "ootobai", meanings: { en: "Motorcycle", bn: "মোটরসাইকেল" } }
    ], exampleSentence: { jp: "オレンジを かいます。", reading: "Orenji o kaimasu.", meanings: { en: "I buy an orange.", bn: "আমি একটি কমলা কিনি।" } } },

    /* ---------- KATAKANA: カ row ---------- */
    "カ": { nameBn: "কা", examples: [
        { word: "カメラ", reading: "kamera", meanings: { en: "Camera", bn: "ক্যামেরা" } },
        { word: "カード", reading: "kaado", meanings: { en: "Card", bn: "কার্ড" } },
        { word: "カレー", reading: "karee", meanings: { en: "Curry", bn: "কারি" } }
    ], exampleSentence: { jp: "カメラで とります。", reading: "Kamera de torimasu.", meanings: { en: "I take a photo with a camera.", bn: "আমি ক্যামেরা দিয়ে ছবি তুলি।" } } },
    "キ": { nameBn: "কি", examples: [
        { word: "キッチン", reading: "kicchin", meanings: { en: "Kitchen", bn: "রান্নাঘর" } },
        { word: "キロ", reading: "kiro", meanings: { en: "Kilo", bn: "কিলো" } },
        { word: "キャンプ", reading: "kyanpu", meanings: { en: "Camp", bn: "ক্যাম্প" } }
    ], exampleSentence: { jp: "キッチンで つくります。", reading: "Kicchin de tsukurimasu.", meanings: { en: "I cook in the kitchen.", bn: "আমি রান্নাঘরে রান্না করি।" } } },
    "ク": { nameBn: "কু", examples: [
        { word: "クラス", reading: "kurasu", meanings: { en: "Class", bn: "ক্লাস" } },
        { word: "クッキー", reading: "kukkii", meanings: { en: "Cookie", bn: "কুকি" } },
        { word: "クリスマス", reading: "kurisumasu", meanings: { en: "Christmas", bn: "বড়দিন" } }
    ], exampleSentence: { jp: "クラスに います。", reading: "Kurasu ni imasu.", meanings: { en: "I am in class.", bn: "আমি ক্লাসে আছি।" } } },
    "ケ": { nameBn: "কে", examples: [
        { word: "ケーキ", reading: "keeki", meanings: { en: "Cake", bn: "কেক" } },
        { word: "ケース", reading: "keesu", meanings: { en: "Case", bn: "কেস" } },
        { word: "ケチャップ", reading: "kechappu", meanings: { en: "Ketchup", bn: "কেচাপ" } }
    ], exampleSentence: { jp: "ケーキを たべます。", reading: "Keeki o tabemasu.", meanings: { en: "I eat cake.", bn: "আমি কেক খাই।" } } },
    "コ": { nameBn: "কো", examples: [
        { word: "コーヒー", reading: "koohii", meanings: { en: "Coffee", bn: "কফি" } },
        { word: "コップ", reading: "koppu", meanings: { en: "Cup", bn: "কাপ" } },
        { word: "コンピューター", reading: "konpyuutaa", meanings: { en: "Computer", bn: "কম্পিউটার" } }
    ], exampleSentence: { jp: "コーヒーを のみます。", reading: "Koohii o nomimasu.", meanings: { en: "I drink coffee.", bn: "আমি কফি পান করি।" } } },

    /* ---------- KATAKANA: サ row ---------- */
    "サ": { nameBn: "সা", examples: [
        { word: "サラダ", reading: "sarada", meanings: { en: "Salad", bn: "সালাদ" } },
        { word: "サッカー", reading: "sakkaa", meanings: { en: "Soccer", bn: "ফুটবল" } },
        { word: "サイズ", reading: "saizu", meanings: { en: "Size", bn: "আকার" } }
    ], exampleSentence: { jp: "サラダを たべます。", reading: "Sarada o tabemasu.", meanings: { en: "I eat salad.", bn: "আমি সালাদ খাই।" } } },
    "シ": { nameBn: "শি", examples: [
        { word: "シャツ", reading: "shatsu", meanings: { en: "Shirt", bn: "শার্ট" } },
        { word: "シャワー", reading: "shawaa", meanings: { en: "Shower", bn: "শাওয়ার" } },
        { word: "システム", reading: "shisutemu", meanings: { en: "System", bn: "সিস্টেম" } }
    ], exampleSentence: { jp: "シャツを きます。", reading: "Shatsu o kimasu.", meanings: { en: "I wear a shirt.", bn: "আমি শার্ট পরি।" } } },
    "ス": { nameBn: "সু", examples: [
        { word: "スープ", reading: "suupu", meanings: { en: "Soup", bn: "স্যুপ" } },
        { word: "スポーツ", reading: "supootsu", meanings: { en: "Sports", bn: "খেলাধুলা" } },
        { word: "スマホ", reading: "sumaho", meanings: { en: "Smartphone", bn: "স্মার্টফোন" } }
    ], exampleSentence: { jp: "スープを のみます。", reading: "Suupu o nomimasu.", meanings: { en: "I drink soup.", bn: "আমি স্যুপ পান করি।" } } },
    "セ": { nameBn: "সে", examples: [
        { word: "セーター", reading: "seetaa", meanings: { en: "Sweater", bn: "সোয়েটার" } },
        { word: "セール", reading: "seeru", meanings: { en: "Sale", bn: "বিক্রয় (সেল)" } },
        { word: "センチ", reading: "senchi", meanings: { en: "Centimeter", bn: "সেন্টিমিটার" } }
    ], exampleSentence: { jp: "セーターを きます。", reading: "Seetaa o kimasu.", meanings: { en: "I wear a sweater.", bn: "আমি সোয়েটার পরি।" } } },
    "ソ": { nameBn: "সো", examples: [
        { word: "ソファ", reading: "sofa", meanings: { en: "Sofa", bn: "সোফা" } },
        { word: "ソース", reading: "soosu", meanings: { en: "Sauce", bn: "সস" } },
        { word: "ソックス", reading: "sokkusu", meanings: { en: "Socks", bn: "মোজা" } }
    ], exampleSentence: { jp: "ソファに すわります。", reading: "Sofa ni suwarimasu.", meanings: { en: "I sit on the sofa.", bn: "আমি সোফায় বসি।" } } },

    /* ---------- KATAKANA: タ row ---------- */
    "タ": { nameBn: "তা", examples: [
        { word: "タクシー", reading: "takushii", meanings: { en: "Taxi", bn: "ট্যাক্সি" } },
        { word: "タオル", reading: "taoru", meanings: { en: "Towel", bn: "তোয়ালে" } },
        { word: "タイヤ", reading: "taiya", meanings: { en: "Tire", bn: "টায়ার" } }
    ], exampleSentence: { jp: "タクシーに のります。", reading: "Takushii ni norimasu.", meanings: { en: "I take a taxi.", bn: "আমি ট্যাক্সিতে চড়ি।" } } },
    "チ": { nameBn: "চি", examples: [
        { word: "チーズ", reading: "chiizu", meanings: { en: "Cheese", bn: "পনির" } },
        { word: "チーム", reading: "chiimu", meanings: { en: "Team", bn: "দল" } },
        { word: "チケット", reading: "chiketto", meanings: { en: "Ticket", bn: "টিকিট" } }
    ], exampleSentence: { jp: "チーズが すきです。", reading: "Chiizu ga suki desu.", meanings: { en: "I like cheese.", bn: "আমি পনির পছন্দ করি।" } } },
    "ツ": { nameBn: "ৎসু", examples: [
        { word: "ツアー", reading: "tsuaa", meanings: { en: "Tour", bn: "ভ্রমণ" } },
        { word: "ツイン", reading: "tsuin", meanings: { en: "Twin", bn: "টুইন" } },
        { word: "ツール", reading: "tsuuru", meanings: { en: "Tool", bn: "হাতিয়ার" } }
    ], exampleSentence: { jp: "ツアーに さんかします。", reading: "Tsuaa ni sankashimasu.", meanings: { en: "I join a tour.", bn: "আমি একটি ভ্রমণে অংশ নিই।" } } },
    "テ": { nameBn: "তে", examples: [
        { word: "テレビ", reading: "terebi", meanings: { en: "Television", bn: "টেলিভিশন" } },
        { word: "テスト", reading: "tesuto", meanings: { en: "Test", bn: "পরীক্ষা" } },
        { word: "テーブル", reading: "teeburu", meanings: { en: "Table", bn: "টেবিল" } }
    ], exampleSentence: { jp: "テレビを みます。", reading: "Terebi o mimasu.", meanings: { en: "I watch television.", bn: "আমি টেলিভিশন দেখি।" } } },
    "ト": { nameBn: "তো", examples: [
        { word: "トマト", reading: "tomato", meanings: { en: "Tomato", bn: "টমেটো" } },
        { word: "トイレ", reading: "toire", meanings: { en: "Toilet", bn: "টয়লেট" } },
        { word: "トラック", reading: "torakku", meanings: { en: "Truck", bn: "ট্রাক" } }
    ], exampleSentence: { jp: "トマトを たべます。", reading: "Tomato o tabemasu.", meanings: { en: "I eat a tomato.", bn: "আমি টমেটো খাই।" } } },

    /* ---------- KATAKANA: ナ row ---------- */
    "ナ": { nameBn: "না", examples: [
        { word: "ナイフ", reading: "naifu", meanings: { en: "Knife", bn: "ছুরি" } },
        { word: "ナンバー", reading: "nanbaa", meanings: { en: "Number", bn: "নম্বর" } },
        { word: "ナプキン", reading: "napukin", meanings: { en: "Napkin", bn: "ন্যাপকিন" } }
    ], exampleSentence: { jp: "ナイフを つかいます。", reading: "Naifu o tsukaimasu.", meanings: { en: "I use a knife.", bn: "আমি ছুরি ব্যবহার করি।" } } },
    "ニ": { nameBn: "নি", examples: [
        { word: "ニュース", reading: "nyuusu", meanings: { en: "News", bn: "সংবাদ" } },
        { word: "ニット", reading: "nitto", meanings: { en: "Knitwear", bn: "নিটওয়্যার" } },
        { word: "ニックネーム", reading: "nikkuneemu", meanings: { en: "Nickname", bn: "ডাকনাম" } }
    ], exampleSentence: { jp: "ニュースを みます。", reading: "Nyuusu o mimasu.", meanings: { en: "I watch the news.", bn: "আমি সংবাদ দেখি।" } } },
    "ヌ": { nameBn: "নু", examples: [
        { word: "ヌードル", reading: "nuudoru", meanings: { en: "Noodles", bn: "নুডলস" } },
        { word: "ヌガー", reading: "nugaa", meanings: { en: "Nougat", bn: "নুগা (বাদাম মিছরি)" } },
        { word: "カヌー", reading: "kanuu", meanings: { en: "Canoe", bn: "ক্যানু" } }
    ], exampleSentence: { jp: "ヌードルを たべます。", reading: "Nuudoru o tabemasu.", meanings: { en: "I eat noodles.", bn: "আমি নুডলস খাই।" } } },
    "ネ": { nameBn: "নে", examples: [
        { word: "ネクタイ", reading: "nekutai", meanings: { en: "Necktie", bn: "টাই" } },
        { word: "ネット", reading: "netto", meanings: { en: "Net", bn: "নেট" } },
        { word: "ネオン", reading: "neon", meanings: { en: "Neon", bn: "নিয়ন" } }
    ], exampleSentence: { jp: "ネクタイを します。", reading: "Nekutai o shimasu.", meanings: { en: "I wear a necktie.", bn: "আমি টাই পরি।" } } },
    "ノ": { nameBn: "নো", examples: [
        { word: "ノート", reading: "nooto", meanings: { en: "Notebook", bn: "নোটবুক" } },
        { word: "ノック", reading: "nokku", meanings: { en: "Knock", bn: "টোকা" } },
        { word: "ノルマ", reading: "noruma", meanings: { en: "Quota", bn: "কোটা" } }
    ], exampleSentence: { jp: "ノートに かきます。", reading: "Nooto ni kakimasu.", meanings: { en: "I write in a notebook.", bn: "আমি নোটবুকে লিখি।" } } },

    /* ---------- KATAKANA: ハ row ---------- */
    "ハ": { nameBn: "হা", examples: [
        { word: "ハンバーガー", reading: "hanbaagaa", meanings: { en: "Hamburger", bn: "হ্যামবার্গার" } },
        { word: "ハンカチ", reading: "hankachi", meanings: { en: "Handkerchief", bn: "রুমাল" } },
        { word: "ハム", reading: "hamu", meanings: { en: "Ham", bn: "হ্যাম" } }
    ], exampleSentence: { jp: "ハンバーガーを たべます。", reading: "Hanbaagaa o tabemasu.", meanings: { en: "I eat a hamburger.", bn: "আমি হ্যামবার্গার খাই।" } } },
    "ヒ": { nameBn: "হি", examples: [
        { word: "ヒーター", reading: "hiitaa", meanings: { en: "Heater", bn: "হিটার" } },
        { word: "ヒント", reading: "hinto", meanings: { en: "Hint", bn: "ইঙ্গিত" } },
        { word: "ヒーロー", reading: "hiiroo", meanings: { en: "Hero", bn: "বীর" } }
    ], exampleSentence: { jp: "ヒーターを つけます。", reading: "Hiitaa o tsukemasu.", meanings: { en: "I turn on the heater.", bn: "আমি হিটার চালু করি।" } } },
    "フ": { nameBn: "ফু", examples: [
        { word: "フォーク", reading: "fooku", meanings: { en: "Fork", bn: "কাঁটাচামচ" } },
        { word: "フルーツ", reading: "furuutsu", meanings: { en: "Fruit", bn: "ফল" } },
        { word: "フライパン", reading: "furaipan", meanings: { en: "Frying pan", bn: "ফ্রাইপ্যান" } }
    ], exampleSentence: { jp: "フォークを つかいます。", reading: "Fooku o tsukaimasu.", meanings: { en: "I use a fork.", bn: "আমি কাঁটাচামচ ব্যবহার করি।" } } },
    "ヘ": { nameBn: "হে", examples: [
        { word: "ヘリコプター", reading: "herikoputaa", meanings: { en: "Helicopter", bn: "হেলিকপ্টার" } },
        { word: "ヘアスタイル", reading: "heasutairu", meanings: { en: "Hairstyle", bn: "চুলের স্টাইল" } },
        { word: "ヘルメット", reading: "herumetto", meanings: { en: "Helmet", bn: "হেলমেট" } }
    ], exampleSentence: { jp: "ヘリコプターが とびます。", reading: "Herikoputaa ga tobimasu.", meanings: { en: "The helicopter flies.", bn: "হেলিকপ্টারটি ওড়ে।" } } },
    "ホ": { nameBn: "হো", examples: [
        { word: "ホテル", reading: "hoteru", meanings: { en: "Hotel", bn: "হোটেল" } },
        { word: "ホーム", reading: "hoomu", meanings: { en: "Platform (station)", bn: "প্ল্যাটফর্ম" } },
        { word: "ホッチキス", reading: "hocchikisu", meanings: { en: "Stapler", bn: "স্টেপলার" } }
    ], exampleSentence: { jp: "ホテルに とまります。", reading: "Hoteru ni tomarimasu.", meanings: { en: "I stay at a hotel.", bn: "আমি হোটেলে থাকি।" } } },

    /* ---------- KATAKANA: マ row ---------- */
    "マ": { nameBn: "মা", examples: [
        { word: "マスク", reading: "masuku", meanings: { en: "Mask", bn: "মাস্ক" } },
        { word: "マンション", reading: "manshon", meanings: { en: "Condominium", bn: "আবাসিক ভবন" } },
        { word: "マラソン", reading: "marason", meanings: { en: "Marathon", bn: "ম্যারাথন" } }
    ], exampleSentence: { jp: "マスクを します。", reading: "Masuku o shimasu.", meanings: { en: "I wear a mask.", bn: "আমি মাস্ক পরি।" } } },
    "ミ": { nameBn: "মি", examples: [
        { word: "ミルク", reading: "miruku", meanings: { en: "Milk", bn: "দুধ" } },
        { word: "ミーティング", reading: "miitingu", meanings: { en: "Meeting", bn: "মিটিং" } },
        { word: "ミュージック", reading: "myuujikku", meanings: { en: "Music", bn: "সঙ্গীত" } }
    ], exampleSentence: { jp: "ミルクを のみます。", reading: "Miruku o nomimasu.", meanings: { en: "I drink milk.", bn: "আমি দুধ পান করি।" } } },
    "ム": { nameBn: "মু", examples: [
        { word: "ムービー", reading: "muubii", meanings: { en: "Movie", bn: "সিনেমা" } },
        { word: "ムード", reading: "muudo", meanings: { en: "Mood", bn: "মেজাজ (মুড)" } },
        { word: "ムートン", reading: "muuton", meanings: { en: "Sheepskin", bn: "ভেড়ার চামড়া" } }
    ], exampleSentence: { jp: "ムービーを みます。", reading: "Muubii o mimasu.", meanings: { en: "I watch a movie.", bn: "আমি সিনেমা দেখি।" } } },
    "メ": { nameBn: "মে", examples: [
        { word: "メニュー", reading: "menyuu", meanings: { en: "Menu", bn: "মেনু" } },
        { word: "メール", reading: "meeru", meanings: { en: "Email", bn: "ইমেইল" } },
        { word: "メートル", reading: "meetoru", meanings: { en: "Meter", bn: "মিটার" } }
    ], exampleSentence: { jp: "メニューを みます。", reading: "Menyuu o mimasu.", meanings: { en: "I look at the menu.", bn: "আমি মেনু দেখি।" } } },
    "モ": { nameBn: "মো", examples: [
        { word: "モデル", reading: "moderu", meanings: { en: "Model", bn: "মডেল" } },
        { word: "モーター", reading: "mootaa", meanings: { en: "Motor", bn: "মোটর" } },
        { word: "モノレール", reading: "monoreeru", meanings: { en: "Monorail", bn: "মনোরেল" } }
    ], exampleSentence: { jp: "モデルに なりたいです。", reading: "Moderu ni naritai desu.", meanings: { en: "I want to become a model.", bn: "আমি মডেল হতে চাই।" } } },

    /* ---------- KATAKANA: ヤ row ---------- */
    "ヤ": { nameBn: "ইয়া", examples: [
        { word: "ヤード", reading: "yaado", meanings: { en: "Yard (unit)", bn: "গজ (একক)" } },
        { word: "カヤック", reading: "kayakku", meanings: { en: "Kayak", bn: "কায়াক" } },
        { word: "パジャマ", reading: "pajama", meanings: { en: "Pajamas", bn: "পায়জামা" } }
    ], exampleSentence: { jp: "10ヤード はしります。", reading: "Juu yaado hashirimasu.", meanings: { en: "I run 10 yards.", bn: "আমি ১০ গজ দৌড়াই।" } } },
    "ユ": { nameBn: "ইউ", examples: [
        { word: "ユーモア", reading: "yuumoa", meanings: { en: "Humor", bn: "রসবোধ" } },
        { word: "ユニフォーム", reading: "yunifoomu", meanings: { en: "Uniform", bn: "ইউনিফর্ম" } },
        { word: "ユニーク", reading: "yuniiku", meanings: { en: "Unique", bn: "অনন্য" } }
    ], exampleSentence: { jp: "ユーモアが あります。", reading: "Yuumoa ga arimasu.", meanings: { en: "He/she has humor.", bn: "তার রসবোধ আছে।" } } },
    "ヨ": { nameBn: "ইয়ো", examples: [
        { word: "ヨーグルト", reading: "yooguruto", meanings: { en: "Yogurt", bn: "দই" } },
        { word: "ヨット", reading: "yotto", meanings: { en: "Yacht", bn: "ইয়ট" } },
        { word: "ヨガ", reading: "yoga", meanings: { en: "Yoga", bn: "যোগব্যায়াম" } }
    ], exampleSentence: { jp: "ヨーグルトを たべます。", reading: "Yooguruto o tabemasu.", meanings: { en: "I eat yogurt.", bn: "আমি দই (ইয়োগার্ট) খাই।" } } },

    /* ---------- KATAKANA: ラ row ---------- */
    "ラ": { nameBn: "রা", examples: [
        { word: "ラジオ", reading: "rajio", meanings: { en: "Radio", bn: "রেডিও" } },
        { word: "ライオン", reading: "raion", meanings: { en: "Lion", bn: "সিংহ" } },
        { word: "ランチ", reading: "ranchi", meanings: { en: "Lunch", bn: "লাঞ্চ" } }
    ], exampleSentence: { jp: "ラジオを ききます。", reading: "Rajio o kikimasu.", meanings: { en: "I listen to the radio.", bn: "আমি রেডিও শুনি।" } } },
    "リ": { nameBn: "রি", examples: [
        { word: "リボン", reading: "ribon", meanings: { en: "Ribbon", bn: "ফিতা" } },
        { word: "リスト", reading: "risuto", meanings: { en: "List", bn: "তালিকা" } },
        { word: "リンス", reading: "rinsu", meanings: { en: "Conditioner", bn: "কন্ডিশনার" } }
    ], exampleSentence: { jp: "リボンを つけます。", reading: "Ribon o tsukemasu.", meanings: { en: "I attach a ribbon.", bn: "আমি একটি ফিতা লাগাই।" } } },
    "ル": { nameBn: "রু", examples: [
        { word: "ルール", reading: "ruuru", meanings: { en: "Rule", bn: "নিয়ম" } },
        { word: "ルーム", reading: "ruumu", meanings: { en: "Room", bn: "রুম" } },
        { word: "ルビー", reading: "rubii", meanings: { en: "Ruby", bn: "রুবি" } }
    ], exampleSentence: { jp: "ルールを まもります。", reading: "Ruuru o mamorimasu.", meanings: { en: "I follow the rules.", bn: "আমি নিয়ম মেনে চলি।" } } },
    "レ": { nameBn: "রে", examples: [
        { word: "レストラン", reading: "resutoran", meanings: { en: "Restaurant", bn: "রেস্তোরাঁ" } },
        { word: "レモン", reading: "remon", meanings: { en: "Lemon", bn: "লেবু" } },
        { word: "レポート", reading: "repooto", meanings: { en: "Report", bn: "রিপোর্ট" } }
    ], exampleSentence: { jp: "レストランで たべます。", reading: "Resutoran de tabemasu.", meanings: { en: "I eat at a restaurant.", bn: "আমি রেস্তোরাঁয় খাই।" } } },
    "ロ": { nameBn: "রো", examples: [
        { word: "ロボット", reading: "robotto", meanings: { en: "Robot", bn: "রোবট" } },
        { word: "ロープ", reading: "roopu", meanings: { en: "Rope", bn: "দড়ি" } },
        { word: "ロッカー", reading: "rokkaa", meanings: { en: "Locker", bn: "লকার" } }
    ], exampleSentence: { jp: "ロボットが うごきます。", reading: "Robotto ga ugokimasu.", meanings: { en: "The robot moves.", bn: "রোবটটি নড়াচড়া করে।" } } },

    /* ---------- KATAKANA: ワ row + ヲ + ン ---------- */
    "ワ": { nameBn: "ওয়া", examples: [
        { word: "ワイン", reading: "wain", meanings: { en: "Wine", bn: "ওয়াইন" } },
        { word: "ワイシャツ", reading: "waishatsu", meanings: { en: "Dress shirt", bn: "ড্রেস শার্ট" } },
        { word: "ワクチン", reading: "wakuchin", meanings: { en: "Vaccine", bn: "ভ্যাকসিন" } }
    ], exampleSentence: { jp: "ワインを のみます。", reading: "Wain o nomimasu.", meanings: { en: "I drink wine.", bn: "আমি ওয়াইন পান করি।" } } },
    "ヲ": { nameBn: "ও", examples: [
        { word: "ヲ", reading: "wo", meanings: { en: "Object particle (katakana form, rarely used)", bn: "কর্ম নির্দেশক অব্যয় (কাতাকানা রূপ, বিরল ব্যবহার)" } },
        { word: "ホンヲカウ", reading: "hon o kau", meanings: { en: "To buy a book", bn: "বই কেনা" } },
        { word: "パンヲタベル", reading: "pan o taberu", meanings: { en: "To eat bread", bn: "রুটি খাওয়া" } }
    ], exampleSentence: { jp: "ホンヲ ヨム。", reading: "Hon o yomu.", meanings: { en: "Read a book (formal/old writing style).", bn: "বই পড় (আনুষ্ঠানিক/পুরনো রীতি)।" } } },
    "ン": { nameBn: "ন", examples: [
        { word: "パン", reading: "pan", meanings: { en: "Bread", bn: "রুটি" } },
        { word: "レストラン", reading: "resutoran", meanings: { en: "Restaurant", bn: "রেস্তোরাঁ" } },
        { word: "ペン", reading: "pen", meanings: { en: "Pen", bn: "কলম" } }
    ], exampleSentence: { jp: "パンを たべます。", reading: "Pan o tabemasu.", meanings: { en: "I eat bread.", bn: "আমি রুটি খাই।" } } }
};

if (typeof module !== "undefined" && module.exports) { module.exports = kanaDetailData; }
