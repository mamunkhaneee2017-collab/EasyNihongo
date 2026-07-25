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
    ], exampleSentence: { jp: "パンを たべます。", reading: "Pan o tabemasu.", meanings: { en: "I eat bread.", bn: "আমি রুটি খাই।" } } },

    /* ================================================
       DAKUTEN (゛) / HANDAKUTEN (゜) / YŌON (contracted)
       ================================================ */

    /* ---------- HIRAGANA: が row (dakuten) ---------- */
    "が": { nameBn: "গা", examples: [
        { word: "がっこう", reading: "gakkou", meanings: { en: "School", bn: "স্কুল" } },
        { word: "がいこく", reading: "gaikoku", meanings: { en: "Foreign country", bn: "বিদেশ" } },
        { word: "かがみ", reading: "kagami", meanings: { en: "Mirror", bn: "আয়না" } }
    ], exampleSentence: { jp: "がっこうへ いきます。", reading: "Gakkou e ikimasu.", meanings: { en: "I go to school.", bn: "আমি স্কুলে যাই।" } } },
    "ぎ": { nameBn: "গি", examples: [
        { word: "ぎんこう", reading: "ginkou", meanings: { en: "Bank", bn: "ব্যাংক" } },
        { word: "ぎじゅつ", reading: "gijutsu", meanings: { en: "Technology / skill", bn: "প্রযুক্তি" } },
        { word: "かぎ", reading: "kagi", meanings: { en: "Key", bn: "চাবি" } }
    ], exampleSentence: { jp: "ぎんこうへ いきます。", reading: "Ginkou e ikimasu.", meanings: { en: "I go to the bank.", bn: "আমি ব্যাংকে যাই।" } } },
    "ぐ": { nameBn: "গু", examples: [
        { word: "かぐ", reading: "kagu", meanings: { en: "Furniture", bn: "আসবাবপত্র" } },
        { word: "どうぐ", reading: "dougu", meanings: { en: "Tool", bn: "সরঞ্জাম" } },
        { word: "ぐあい", reading: "guai", meanings: { en: "Condition (physical)", bn: "শারীরিক অবস্থা" } }
    ], exampleSentence: { jp: "かぐを かいます。", reading: "Kagu o kaimasu.", meanings: { en: "I buy furniture.", bn: "আমি আসবাবপত্র কিনি।" } } },
    "げ": { nameBn: "গে", examples: [
        { word: "げんき", reading: "genki", meanings: { en: "Healthy / energetic", bn: "সুস্থ ও প্রাণবন্ত" } },
        { word: "げつようび", reading: "getsuyoubi", meanings: { en: "Monday", bn: "সোমবার" } },
        { word: "げんいん", reading: "gen'in", meanings: { en: "Cause / reason", bn: "কারণ" } }
    ], exampleSentence: { jp: "げんきです。", reading: "Genki desu.", meanings: { en: "I am fine.", bn: "আমি ভালো আছি।" } } },
    "ご": { nameBn: "গো", examples: [
        { word: "ごはん", reading: "gohan", meanings: { en: "Meal / rice", bn: "ভাত/খাবার" } },
        { word: "ごご", reading: "gogo", meanings: { en: "Afternoon / PM", bn: "বিকাল" } },
        { word: "えいご", reading: "eigo", meanings: { en: "English language", bn: "ইংরেজি ভাষা" } }
    ], exampleSentence: { jp: "ごはんを たべます。", reading: "Gohan o tabemasu.", meanings: { en: "I eat a meal.", bn: "আমি খাবার খাই।" } } },

    /* ---------- HIRAGANA: ざ row (dakuten) ---------- */
    "ざ": { nameBn: "জা", examples: [
        { word: "ざっし", reading: "zasshi", meanings: { en: "Magazine", bn: "ম্যাগাজিন" } },
        { word: "ざぶとん", reading: "zabuton", meanings: { en: "Floor cushion", bn: "মেঝের কুশন" } },
        { word: "ひざ", reading: "hiza", meanings: { en: "Knee", bn: "হাঁটু" } }
    ], exampleSentence: { jp: "ざっしを よみます。", reading: "Zasshi o yomimasu.", meanings: { en: "I read a magazine.", bn: "আমি ম্যাগাজিন পড়ি।" } } },
    "じ": { nameBn: "জি", examples: [
        { word: "じかん", reading: "jikan", meanings: { en: "Time", bn: "সময়" } },
        { word: "じてんしゃ", reading: "jitensha", meanings: { en: "Bicycle", bn: "সাইকেল" } },
        { word: "しんじる", reading: "shinjiru", meanings: { en: "To believe", bn: "বিশ্বাস করা" } }
    ], exampleSentence: { jp: "じかんが ありません。", reading: "Jikan ga arimasen.", meanings: { en: "I don't have time.", bn: "আমার সময় নেই।" } } },
    "ず": { nameBn: "জু", examples: [
        { word: "ずつう", reading: "zutsuu", meanings: { en: "Headache", bn: "মাথাব্যথা" } },
        { word: "すず", reading: "suzu", meanings: { en: "Bell", bn: "ঘণ্টা" } },
        { word: "みずうみ", reading: "mizuumi", meanings: { en: "Lake", bn: "হ্রদ" } }
    ], exampleSentence: { jp: "ずつうが します。", reading: "Zutsuu ga shimasu.", meanings: { en: "I have a headache.", bn: "আমার মাথাব্যথা করছে।" } } },
    "ぜ": { nameBn: "জে", examples: [
        { word: "ぜんぶ", reading: "zenbu", meanings: { en: "All / everything", bn: "সবকিছু" } },
        { word: "ぜいきん", reading: "zeikin", meanings: { en: "Tax", bn: "কর" } },
        { word: "かぜ", reading: "kaze", meanings: { en: "Wind / cold (illness)", bn: "বাতাস/সর্দি" } }
    ], exampleSentence: { jp: "ぜんぶ たべました。", reading: "Zenbu tabemashita.", meanings: { en: "I ate everything.", bn: "আমি সবকিছু খেয়েছি।" } } },
    "ぞ": { nameBn: "জো", examples: [
        { word: "ぞう", reading: "zou", meanings: { en: "Elephant", bn: "হাতি" } },
        { word: "ぞうきん", reading: "zoukin", meanings: { en: "Cleaning rag", bn: "পরিষ্কারের কাপড়" } },
        { word: "かぞえる", reading: "kazoeru", meanings: { en: "To count", bn: "গণনা করা" } }
    ], exampleSentence: { jp: "ぞうが います。", reading: "Zou ga imasu.", meanings: { en: "There is an elephant.", bn: "একটি হাতি আছে।" } } },

    /* ---------- HIRAGANA: だ row (dakuten; ぢ/づ share じ/ず's pronunciation) ---------- */
    "だ": { nameBn: "দা", examples: [
        { word: "だいがく", reading: "daigaku", meanings: { en: "University", bn: "বিশ্ববিদ্যালয়" } },
        { word: "だいじ", reading: "daiji", meanings: { en: "Important", bn: "গুরুত্বপূর্ণ" } },
        { word: "からだ", reading: "karada", meanings: { en: "Body", bn: "শরীর" } }
    ], exampleSentence: { jp: "だいがくへ いきます。", reading: "Daigaku e ikimasu.", meanings: { en: "I go to university.", bn: "আমি বিশ্ববিদ্যালয়ে যাই।" } } },
    "ぢ": { nameBn: "জি", examples: [
        { word: "はなぢ", reading: "hanaji", meanings: { en: "Nosebleed", bn: "নাক দিয়ে রক্তপড়া" } },
        { word: "ちぢむ", reading: "chijimu", meanings: { en: "To shrink", bn: "সঙ্কুচিত হওয়া" } },
        { word: "ちぢれる", reading: "chijireru", meanings: { en: "To curl / frizz", bn: "কোঁকড়ানো" } }
    ], exampleSentence: { jp: "はなぢが でました。", reading: "Hanaji ga demashita.", meanings: { en: "I got a nosebleed.", bn: "আমার নাক দিয়ে রক্ত পড়েছিল।" } } },
    "づ": { nameBn: "জু", examples: [
        { word: "つづく", reading: "tsuzuku", meanings: { en: "To continue", bn: "চলতে থাকা" } },
        { word: "みかづき", reading: "mikazuki", meanings: { en: "Crescent moon", bn: "অর্ধচন্দ্র" } },
        { word: "つづり", reading: "tsuzuri", meanings: { en: "Spelling", bn: "বানান" } }
    ], exampleSentence: { jp: "はなしが つづきます。", reading: "Hanashi ga tsuzukimasu.", meanings: { en: "The story continues.", bn: "গল্পটি চলতে থাকে।" } } },
    "で": { nameBn: "দে", examples: [
        { word: "でんわ", reading: "denwa", meanings: { en: "Telephone", bn: "টেলিফোন" } },
        { word: "でぐち", reading: "deguchi", meanings: { en: "Exit", bn: "বাহির হওয়ার পথ" } },
        { word: "でんしゃ", reading: "densha", meanings: { en: "Train", bn: "ট্রেন" } }
    ], exampleSentence: { jp: "でんわを かけます。", reading: "Denwa o kakemasu.", meanings: { en: "I make a phone call.", bn: "আমি ফোন করি।" } } },
    "ど": { nameBn: "দো", examples: [
        { word: "どようび", reading: "doyoubi", meanings: { en: "Saturday", bn: "শনিবার" } },
        { word: "どうぶつ", reading: "doubutsu", meanings: { en: "Animal", bn: "প্রাণী" } },
        { word: "どこ", reading: "doko", meanings: { en: "Where", bn: "কোথায়" } }
    ], exampleSentence: { jp: "どようびは やすみです。", reading: "Doyoubi wa yasumi desu.", meanings: { en: "Saturday is a day off.", bn: "শনিবার ছুটির দিন।" } } },

    /* ---------- HIRAGANA: ば row (dakuten) ---------- */
    "ば": { nameBn: "বা", examples: [
        { word: "ばしょ", reading: "basho", meanings: { en: "Place", bn: "জায়গা" } },
        { word: "ばんごう", reading: "bangou", meanings: { en: "Number", bn: "নম্বর" } },
        { word: "たばこ", reading: "tabako", meanings: { en: "Tobacco / cigarette", bn: "তামাক/সিগারেট" } }
    ], exampleSentence: { jp: "ばしょが わかりません。", reading: "Basho ga wakarimasen.", meanings: { en: "I don't know the place.", bn: "আমি জায়গাটি জানি না।" } } },
    "び": { nameBn: "বি", examples: [
        { word: "びょういん", reading: "byouin", meanings: { en: "Hospital", bn: "হাসপাতাল" } },
        { word: "びじゅつかん", reading: "bijutsukan", meanings: { en: "Art museum", bn: "চারুকলা জাদুঘর" } },
        { word: "くび", reading: "kubi", meanings: { en: "Neck", bn: "ঘাড়" } }
    ], exampleSentence: { jp: "びょういんへ いきます。", reading: "Byouin e ikimasu.", meanings: { en: "I go to the hospital.", bn: "আমি হাসপাতালে যাই।" } } },
    "ぶ": { nameBn: "বু", examples: [
        { word: "ぶた", reading: "buta", meanings: { en: "Pig", bn: "শূকর" } },
        { word: "ぶんか", reading: "bunka", meanings: { en: "Culture", bn: "সংস্কৃতি" } },
        { word: "しんぶん", reading: "shinbun", meanings: { en: "Newspaper", bn: "সংবাদপত্র" } }
    ], exampleSentence: { jp: "ぶたが います。", reading: "Buta ga imasu.", meanings: { en: "There is a pig.", bn: "একটি শূকর আছে।" } } },
    "べ": { nameBn: "বে", examples: [
        { word: "べんきょう", reading: "benkyou", meanings: { en: "Study", bn: "পড়াশোনা" } },
        { word: "べつ", reading: "betsu", meanings: { en: "Separate / different", bn: "আলাদা" } },
        { word: "たべもの", reading: "tabemono", meanings: { en: "Food", bn: "খাবার" } }
    ], exampleSentence: { jp: "にほんごを べんきょうします。", reading: "Nihongo o benkyoushimasu.", meanings: { en: "I study Japanese.", bn: "আমি জাপানি ভাষা পড়াশোনা করি।" } } },
    "ぼ": { nameBn: "বো", examples: [
        { word: "ぼうし", reading: "boushi", meanings: { en: "Hat", bn: "টুপি" } },
        { word: "ぼく", reading: "boku", meanings: { en: "I / me (male)", bn: "আমি (পুরুষবাচক)" } },
        { word: "ぼうえんきょう", reading: "bouenkyou", meanings: { en: "Telescope", bn: "দূরবীন" } }
    ], exampleSentence: { jp: "ぼうしを かぶります。", reading: "Boushi o kaburimasu.", meanings: { en: "I wear a hat.", bn: "আমি টুপি পরি।" } } },

    /* ---------- HIRAGANA: ぱ row (handakuten) ---------- */
    "ぱ": { nameBn: "পা", examples: [
        { word: "いっぱい", reading: "ippai", meanings: { en: "Full / a lot", bn: "পূর্ণ/অনেক" } },
        { word: "さんぱつ", reading: "sanpatsu", meanings: { en: "Haircut", bn: "চুল কাটা" } },
        { word: "ぱくぱく", reading: "pakupaku", meanings: { en: "Eating in big bites (onomatopoeia)", bn: "বড় বড় গ্রাসে খাওয়া (ধ্বন্যাত্মক)" } }
    ], exampleSentence: { jp: "おなかが いっぱいです。", reading: "Onaka ga ippai desu.", meanings: { en: "My stomach is full.", bn: "আমার পেট ভরা।" } } },
    "ぴ": { nameBn: "পি", examples: [
        { word: "えんぴつ", reading: "enpitsu", meanings: { en: "Pencil", bn: "পেন্সিল" } },
        { word: "ぴかぴか", reading: "pikapika", meanings: { en: "Shiny / sparkling (onomatopoeia)", bn: "চকচকে (ধ্বন্যাত্মক)" } },
        { word: "ぴったり", reading: "pittari", meanings: { en: "Exactly / perfectly fitting", bn: "একদম মানানসই" } }
    ], exampleSentence: { jp: "えんぴつで かきます。", reading: "Enpitsu de kakimasu.", meanings: { en: "I write with a pencil.", bn: "আমি পেন্সিল দিয়ে লিখি।" } } },
    "ぷ": { nameBn: "পু", examples: [
        { word: "てんぷら", reading: "tenpura", meanings: { en: "Tempura", bn: "টেম্পুরা" } },
        { word: "きっぷ", reading: "kippu", meanings: { en: "Ticket", bn: "টিকেট" } },
        { word: "ぷんぷん", reading: "punpun", meanings: { en: "Fuming with anger (onomatopoeia)", bn: "রাগে গজগজ করা (ধ্বন্যাত্মক)" } }
    ], exampleSentence: { jp: "てんぷらを たべます。", reading: "Tenpura o tabemasu.", meanings: { en: "I eat tempura.", bn: "আমি টেম্পুরা খাই।" } } },
    "ぺ": { nameBn: "পে", examples: [
        { word: "ぺらぺら", reading: "perapera", meanings: { en: "Fluent (speaking)", bn: "সাবলীল (কথা বলায়)" } },
        { word: "ぺこぺこ", reading: "pekopeko", meanings: { en: "Very hungry (onomatopoeia)", bn: "খুব ক্ষুধার্ত (ধ্বন্যাত্মক)" } },
        { word: "かんぺき", reading: "kanpeki", meanings: { en: "Perfect", bn: "নিখুঁত" } }
    ], exampleSentence: { jp: "にほんごが ぺらぺらです。", reading: "Nihongo ga perapera desu.", meanings: { en: "[He/She] speaks Japanese fluently.", bn: "সে সাবলীলভাবে জাপানি ভাষায় কথা বলে।" } } },
    "ぽ": { nameBn: "পো", examples: [
        { word: "たんぽぽ", reading: "tanpopo", meanings: { en: "Dandelion", bn: "ড্যান্ডেলিয়ন ফুল" } },
        { word: "さんぽ", reading: "sanpo", meanings: { en: "Walk / stroll", bn: "হাঁটাহাঁটি" } },
        { word: "ぽかぽか", reading: "pokapoka", meanings: { en: "Warm and cozy (onomatopoeia)", bn: "আরামদায়ক উষ্ণতা (ধ্বন্যাত্মক)" } }
    ], exampleSentence: { jp: "たんぽぽが さいています。", reading: "Tanpopo ga saite imasu.", meanings: { en: "The dandelion is blooming.", bn: "ড্যান্ডেলিয়ন ফুল ফুটেছে।" } } },

    /* ---------- HIRAGANA: きゃ/しゃ/ちゃ row (yōon) ---------- */
    "きゃ": { nameBn: "কিয়া", examples: [
        { word: "きゃく", reading: "kyaku", meanings: { en: "Guest / customer", bn: "অতিথি/গ্রাহক" } },
        { word: "おきゃくさん", reading: "okyakusan", meanings: { en: "Customer / guest (polite)", bn: "অতিথি (সম্মানসূচক)" } },
        { word: "きゃべつ", reading: "kyabetsu", meanings: { en: "Cabbage", bn: "বাঁধাকপি" } }
    ], exampleSentence: { jp: "きゃくが きます。", reading: "Kyaku ga kimasu.", meanings: { en: "A guest is coming.", bn: "একজন অতিথি আসছে।" } } },
    "きゅ": { nameBn: "কিউ", examples: [
        { word: "きゅうり", reading: "kyuuri", meanings: { en: "Cucumber", bn: "শসা" } },
        { word: "きゅうきゅうしゃ", reading: "kyuukyuusha", meanings: { en: "Ambulance", bn: "অ্যাম্বুলেন্স" } },
        { word: "やきゅう", reading: "yakyuu", meanings: { en: "Baseball", bn: "বেসবল" } }
    ], exampleSentence: { jp: "きゅうりを たべます。", reading: "Kyuuri o tabemasu.", meanings: { en: "I eat cucumber.", bn: "আমি শসা খাই।" } } },
    "きょ": { nameBn: "কিয়ো", examples: [
        { word: "きょう", reading: "kyou", meanings: { en: "Today", bn: "আজ" } },
        { word: "きょうしつ", reading: "kyoushitsu", meanings: { en: "Classroom", bn: "শ্রেণিকক্ষ" } },
        { word: "きょねん", reading: "kyonen", meanings: { en: "Last year", bn: "গত বছর" } }
    ], exampleSentence: { jp: "きょうは あついです。", reading: "Kyou wa atsui desu.", meanings: { en: "Today is hot.", bn: "আজ গরম।" } } },
    "しゃ": { nameBn: "শা", examples: [
        { word: "かいしゃ", reading: "kaisha", meanings: { en: "Company", bn: "কোম্পানি" } },
        { word: "しゃしん", reading: "shashin", meanings: { en: "Photo", bn: "ছবি" } },
        { word: "しゃかい", reading: "shakai", meanings: { en: "Society", bn: "সমাজ" } }
    ], exampleSentence: { jp: "かいしゃへ いきます。", reading: "Kaisha e ikimasu.", meanings: { en: "I go to the company.", bn: "আমি কোম্পানিতে যাই।" } } },
    "しゅ": { nameBn: "শু", examples: [
        { word: "しゅみ", reading: "shumi", meanings: { en: "Hobby", bn: "শখ" } },
        { word: "しゅくだい", reading: "shukudai", meanings: { en: "Homework", bn: "বাড়ির কাজ" } },
        { word: "しゅっぱつ", reading: "shuppatsu", meanings: { en: "Departure", bn: "যাত্রা শুরু" } }
    ], exampleSentence: { jp: "しゅみは どくしょです。", reading: "Shumi wa dokusho desu.", meanings: { en: "My hobby is reading.", bn: "আমার শখ বই পড়া।" } } },
    "しょ": { nameBn: "শো", examples: [
        { word: "じしょ", reading: "jisho", meanings: { en: "Dictionary", bn: "অভিধান" } },
        { word: "しょくじ", reading: "shokuji", meanings: { en: "Meal", bn: "আহার" } },
        { word: "としょかん", reading: "toshokan", meanings: { en: "Library", bn: "গ্রন্থাগার" } }
    ], exampleSentence: { jp: "じしょを つかいます。", reading: "Jisho o tsukaimasu.", meanings: { en: "I use a dictionary.", bn: "আমি অভিধান ব্যবহার করি।" } } },
    "ちゃ": { nameBn: "চা", examples: [
        { word: "おちゃ", reading: "ocha", meanings: { en: "Tea", bn: "চা" } },
        { word: "ちゃわん", reading: "chawan", meanings: { en: "Rice bowl", bn: "ভাতের বাটি" } },
        { word: "こうちゃ", reading: "koucha", meanings: { en: "Black tea", bn: "রঙ চা" } }
    ], exampleSentence: { jp: "おちゃを のみます。", reading: "Ocha o nomimasu.", meanings: { en: "I drink tea.", bn: "আমি চা পান করি।" } } },
    "ちゅ": { nameBn: "চু", examples: [
        { word: "ちゅうごく", reading: "chuugoku", meanings: { en: "China", bn: "চীন" } },
        { word: "ちゅうい", reading: "chuui", meanings: { en: "Caution / attention", bn: "সতর্কতা" } },
        { word: "ちゅうしゃじょう", reading: "chuushajou", meanings: { en: "Parking lot", bn: "গাড়ি রাখার জায়গা" } }
    ], exampleSentence: { jp: "ちゅうごくへ いきます。", reading: "Chuugoku e ikimasu.", meanings: { en: "I go to China.", bn: "আমি চীনে যাই।" } } },
    "ちょ": { nameBn: "চো", examples: [
        { word: "ちょっと", reading: "chotto", meanings: { en: "A little / a moment", bn: "একটু/কিছুক্ষণ" } },
        { word: "ちょきん", reading: "chokin", meanings: { en: "Savings", bn: "সঞ্চয়" } },
        { word: "ちょうしょく", reading: "choushoku", meanings: { en: "Breakfast", bn: "সকালের নাস্তা" } }
    ], exampleSentence: { jp: "ちょっと まってください。", reading: "Chotto matte kudasai.", meanings: { en: "Please wait a moment.", bn: "একটু অপেক্ষা করুন।" } } },

    /* ---------- HIRAGANA: にゃ/ひゃ/みゃ row (yōon) ---------- */
    "にゃ": { nameBn: "নিয়া", examples: [
        { word: "こんにゃく", reading: "konnyaku", meanings: { en: "Konjac (jelly food)", bn: "কনজ্যাক (জেলি জাতীয় খাবার)" } },
        { word: "にゃあ", reading: "nyaa", meanings: { en: "Meow", bn: "বিড়ালের ডাক \"মিয়াও\"" } },
        { word: "こんにゃくゼリー", reading: "konnyaku zerii", meanings: { en: "Konjac jelly", bn: "কনজ্যাক জেলি" } }
    ], exampleSentence: { jp: "こんにゃくを たべます。", reading: "Konnyaku o tabemasu.", meanings: { en: "I eat konjac.", bn: "আমি কনজ্যাক খাই।" } } },
    "にゅ": { nameBn: "নিউ", examples: [
        { word: "にゅうがく", reading: "nyuugaku", meanings: { en: "School enrollment", bn: "স্কুলে ভর্তি" } },
        { word: "にゅういん", reading: "nyuuin", meanings: { en: "Hospitalization", bn: "হাসপাতালে ভর্তি" } },
        { word: "ぎゅうにゅう", reading: "gyuunyuu", meanings: { en: "Milk", bn: "দুধ" } }
    ], exampleSentence: { jp: "らいねん にゅうがくします。", reading: "Rainen nyuugaku shimasu.", meanings: { en: "I will enroll in school next year.", bn: "আমি আগামী বছর স্কুলে ভর্তি হব।" } } },
    "にょ": { nameBn: "নিয়ো", examples: [
        { word: "にょろにょろ", reading: "nyoronyoro", meanings: { en: "Wriggling / slithering (onomatopoeia)", bn: "কিলবিল করে চলা (ধ্বন্যাত্মক)" } },
        { word: "にょきにょき", reading: "nyokinyoki", meanings: { en: "Sprouting up one after another (onomatopoeia)", bn: "একের পর এক গজিয়ে ওঠা (ধ্বন্যাত্মক)" } },
        { word: "てんにょ", reading: "tennyo", meanings: { en: "Celestial maiden (mythical)", bn: "স্বর্গের অপ্সরা" } }
    ], exampleSentence: { jp: "へびが にょろにょろ うごきます。", reading: "Hebi ga nyoronyoro ugokimasu.", meanings: { en: "The snake moves in a wriggling way.", bn: "সাপটি কিলবিল করে নড়াচড়া করে।" } } },
    "ひゃ": { nameBn: "হিয়া", examples: [
        { word: "ひゃく", reading: "hyaku", meanings: { en: "Hundred", bn: "একশ" } },
        { word: "にひゃく", reading: "nihyaku", meanings: { en: "Two hundred", bn: "দুইশ" } },
        { word: "ひゃくえん", reading: "hyakuen", meanings: { en: "100 yen", bn: "১০০ ইয়েন" } }
    ], exampleSentence: { jp: "ひゃくえんです。", reading: "Hyakuen desu.", meanings: { en: "It's 100 yen.", bn: "এটি ১০০ ইয়েন।" } } },
    "ひゅ": { nameBn: "হিউ", examples: [
        { word: "ひゅうひゅう", reading: "hyuuhyuu", meanings: { en: "Whistling (wind sound, onomatopoeia)", bn: "হুহু শব্দ (বাতাসের, ধ্বন্যাত্মক)" } },
        { word: "ひゅっと", reading: "hyutto", meanings: { en: "With a whoosh / swish (onomatopoeia)", bn: "হুশ করে (ধ্বন্যাত্মক)" } },
        { word: "ひゅうが", reading: "hyuuga", meanings: { en: "Hyuga (a place name in Japan)", bn: "হিউগা (জাপানের একটি স্থান)" } }
    ], exampleSentence: { jp: "かぜが ひゅうひゅう ふきます。", reading: "Kaze ga hyuuhyuu fukimasu.", meanings: { en: "The wind blows with a whistling sound.", bn: "বাতাস হুহু শব্দ করে বয়।" } } },
    "ひょ": { nameBn: "হিয়ো", examples: [
        { word: "ひょう", reading: "hyou", meanings: { en: "Table / chart", bn: "তালিকা/ছক" } },
        { word: "ひょうか", reading: "hyouka", meanings: { en: "Evaluation", bn: "মূল্যায়ন" } },
        { word: "ひょうげん", reading: "hyougen", meanings: { en: "Expression", bn: "প্রকাশভঙ্গি" } }
    ], exampleSentence: { jp: "ひょうを みます。", reading: "Hyou o mimasu.", meanings: { en: "I look at the table (chart).", bn: "আমি তালিকাটি দেখি।" } } },
    "みゃ": { nameBn: "মিয়া", examples: [
        { word: "みゃく", reading: "myaku", meanings: { en: "Pulse", bn: "নাড়ি" } },
        { word: "みゃくはく", reading: "myakuhaku", meanings: { en: "Pulse beat", bn: "নাড়ির স্পন্দন" } },
        { word: "じんみゃく", reading: "jinmyaku", meanings: { en: "Network of contacts", bn: "সামাজিক যোগাযোগ" } }
    ], exampleSentence: { jp: "みゃくを はかります。", reading: "Myaku o hakarimasu.", meanings: { en: "I measure the pulse.", bn: "আমি নাড়ি মাপি।" } } },
    "みゅ": { nameBn: "মিউ", examples: [
        { word: "みゅ", reading: "myu", meanings: { en: "Rare hiragana sound (mostly appears in loanwords, normally written in katakana)", bn: "বিরল হিরাগানা ধ্বনি (সাধারণত ঋণশব্দে দেখা যায়, যা কাতাকানায় লেখা হয়)" } },
        { word: "ミュージック", reading: "myuujikku", meanings: { en: "Music (this sound is normally written in katakana)", bn: "সঙ্গীত (এই ধ্বনি সাধারণত কাতাকানায় লেখা হয়)" } },
        { word: "ミュージアム", reading: "myuujiamu", meanings: { en: "Museum (another katakana example of this sound)", bn: "জাদুঘর (এই ধ্বনির আরেকটি কাতাকানা উদাহরণ)" } }
    ], exampleSentence: { jp: "みゅという おとは めずらしいです。", reading: "Myu to iu oto wa mezurashii desu.", meanings: { en: "The sound 'myu' is rare.", bn: "'মিউ' ধ্বনিটি বিরল।" } } },
    "みょ": { nameBn: "মিয়ো", examples: [
        { word: "みょうじ", reading: "myouji", meanings: { en: "Surname", bn: "পদবি" } },
        { word: "みょうにち", reading: "myounichi", meanings: { en: "Tomorrow (formal)", bn: "আগামীকাল (আনুষ্ঠানিক)" } },
        { word: "みょうばん", reading: "myouban", meanings: { en: "Alum (mineral)", bn: "ফটকিরি" } }
    ], exampleSentence: { jp: "みょうじは たなかです。", reading: "Myouji wa Tanaka desu.", meanings: { en: "My surname is Tanaka.", bn: "আমার পদবি তানাকা।" } } },

    /* ---------- HIRAGANA: りゃ row (yōon) ---------- */
    "りゃ": { nameBn: "রিয়া", examples: [
        { word: "りゃくご", reading: "ryakugo", meanings: { en: "Abbreviation", bn: "সংক্ষিপ্ত রূপ" } },
        { word: "しょうりゃく", reading: "shouryaku", meanings: { en: "Omission", bn: "বাদ দেওয়া" } },
        { word: "りゃくす", reading: "ryakusu", meanings: { en: "To abbreviate", bn: "সংক্ষিপ্ত করা" } }
    ], exampleSentence: { jp: "これは りゃくごです。", reading: "Kore wa ryakugo desu.", meanings: { en: "This is an abbreviation.", bn: "এটি একটি সংক্ষিপ্ত রূপ।" } } },
    "りゅ": { nameBn: "রিউ", examples: [
        { word: "りゅう", reading: "ryuu", meanings: { en: "Dragon", bn: "ড্রাগন" } },
        { word: "りゅうがく", reading: "ryuugaku", meanings: { en: "Studying abroad", bn: "বিদেশে পড়াশোনা" } },
        { word: "りゅうこう", reading: "ryuukou", meanings: { en: "Trend / fashion", bn: "চলতি ধারা/ফ্যাশন" } }
    ], exampleSentence: { jp: "りゅうの えを かきます。", reading: "Ryuu no e o kakimasu.", meanings: { en: "I draw a picture of a dragon.", bn: "আমি একটি ড্রাগনের ছবি আঁকি।" } } },
    "りょ": { nameBn: "রিয়ো", examples: [
        { word: "りょこう", reading: "ryokou", meanings: { en: "Travel / trip", bn: "ভ্রমণ" } },
        { word: "りょうり", reading: "ryouri", meanings: { en: "Cooking", bn: "রান্না" } },
        { word: "りょうしん", reading: "ryoushin", meanings: { en: "Parents", bn: "বাবা-মা" } }
    ], exampleSentence: { jp: "りょこうに いきます。", reading: "Ryokou ni ikimasu.", meanings: { en: "I go on a trip.", bn: "আমি ভ্রমণে যাই।" } } },

    /* ---------- HIRAGANA: ぎゃ/じゃ row (yōon, dakuten) ---------- */
    "ぎゃ": { nameBn: "গিয়া", examples: [
        { word: "ぎゃく", reading: "gyaku", meanings: { en: "Opposite / reverse", bn: "বিপরীত" } },
        { word: "ぎゃくてん", reading: "gyakuten", meanings: { en: "Reversal / turnaround", bn: "পরিস্থিতি উলটে যাওয়া" } },
        { word: "ぎゃくせつ", reading: "gyakusetsu", meanings: { en: "Paradox", bn: "স্ববিরোধিতা" } }
    ], exampleSentence: { jp: "それは ぎゃくです。", reading: "Sore wa gyaku desu.", meanings: { en: "That is the opposite.", bn: "সেটি বিপরীত।" } } },
    "ぎゅ": { nameBn: "গিউ", examples: [
        { word: "ぎゅうにゅう", reading: "gyuunyuu", meanings: { en: "Milk", bn: "দুধ" } },
        { word: "ぎゅうにく", reading: "gyuuniku", meanings: { en: "Beef", bn: "গরুর মাংস" } },
        { word: "ぎゅっと", reading: "gyutto", meanings: { en: "Tightly (onomatopoeia)", bn: "শক্ত করে (ধ্বন্যাত্মক)" } }
    ], exampleSentence: { jp: "ぎゅうにゅうを のみます。", reading: "Gyuunyuu o nomimasu.", meanings: { en: "I drink milk.", bn: "আমি দুধ পান করি।" } } },
    "ぎょ": { nameBn: "গিয়ো", examples: [
        { word: "ぎょうざ", reading: "gyouza", meanings: { en: "Gyoza (dumpling)", bn: "গিয়োজা (ডাম্পলিং)" } },
        { word: "ぎょせん", reading: "gyosen", meanings: { en: "Fishing boat", bn: "মাছ ধরার নৌকা" } },
        { word: "きんぎょ", reading: "kingyo", meanings: { en: "Goldfish", bn: "সোনালি মাছ" } }
    ], exampleSentence: { jp: "ぎょうざを たべます。", reading: "Gyouza o tabemasu.", meanings: { en: "I eat gyoza.", bn: "আমি গিয়োজা খাই।" } } },
    "じゃ": { nameBn: "জা", examples: [
        { word: "じゃがいも", reading: "jagaimo", meanings: { en: "Potato", bn: "আলু" } },
        { word: "じゃま", reading: "jama", meanings: { en: "Obstacle / hindrance", bn: "বাধা" } },
        { word: "じゃんけん", reading: "janken", meanings: { en: "Rock-paper-scissors", bn: "কাঁচি-পাথর-কাগজ খেলা" } }
    ], exampleSentence: { jp: "じゃがいもを たべます。", reading: "Jagaimo o tabemasu.", meanings: { en: "I eat potato.", bn: "আমি আলু খাই।" } } },
    "じゅ": { nameBn: "জু", examples: [
        { word: "じゅぎょう", reading: "jugyou", meanings: { en: "Class / lesson", bn: "ক্লাস/পাঠ" } },
        { word: "じゅうしょ", reading: "juusho", meanings: { en: "Address", bn: "ঠিকানা" } },
        { word: "じゅんび", reading: "junbi", meanings: { en: "Preparation", bn: "প্রস্তুতি" } }
    ], exampleSentence: { jp: "じゅぎょうが あります。", reading: "Jugyou ga arimasu.", meanings: { en: "There is a class.", bn: "একটি ক্লাস আছে।" } } },
    "じょ": { nameBn: "জো", examples: [
        { word: "じょうず", reading: "jouzu", meanings: { en: "Skillful", bn: "দক্ষ" } },
        { word: "じょせい", reading: "josei", meanings: { en: "Woman", bn: "নারী" } },
        { word: "じょうたい", reading: "joutai", meanings: { en: "Condition / state", bn: "অবস্থা" } }
    ], exampleSentence: { jp: "りょうりが じょうずです。", reading: "Ryouri ga jouzu desu.", meanings: { en: "[He/She] is good at cooking.", bn: "সে রান্নায় দক্ষ।" } } },

    /* ---------- HIRAGANA: びゃ/ぴゃ row (yōon, dakuten/handakuten) ---------- */
    "びゃ": { nameBn: "বিয়া", examples: [
        { word: "さんびゃく", reading: "sanbyaku", meanings: { en: "Three hundred", bn: "তিনশ" } },
        { word: "びゃくや", reading: "byakuya", meanings: { en: "White night (polar phenomenon)", bn: "সাদা রাত (মেরু অঞ্চলের ঘটনা)" } },
        { word: "びゃくだん", reading: "byakudan", meanings: { en: "Sandalwood", bn: "চন্দনকাঠ" } }
    ], exampleSentence: { jp: "さんびゃくえんです。", reading: "Sanbyakuen desu.", meanings: { en: "It's 300 yen.", bn: "এটি ৩০০ ইয়েন।" } } },
    "びゅ": { nameBn: "বিউ", examples: [
        { word: "びゅうびゅう", reading: "byuubyuu", meanings: { en: "Blowing fiercely (wind sound, onomatopoeia)", bn: "তীব্রভাবে বাতাস বওয়া (ধ্বন্যাত্মক)" } },
        { word: "びゅんびゅん", reading: "byunbyun", meanings: { en: "Whizzing by quickly (onomatopoeia)", bn: "দ্রুত সাঁইসাঁই শব্দ (ধ্বন্যাত্মক)" } },
        { word: "インタビュー", reading: "intabyuu", meanings: { en: "Interview (katakana loanword with the same sound)", bn: "সাক্ষাৎকার (একই ধ্বনিযুক্ত কাতাকানা ঋণশব্দ)" } }
    ], exampleSentence: { jp: "かぜが びゅうびゅう ふきます。", reading: "Kaze ga byuubyuu fukimasu.", meanings: { en: "The wind blows fiercely.", bn: "বাতাস প্রচণ্ডভাবে বয়।" } } },
    "びょ": { nameBn: "বিয়ো", examples: [
        { word: "びょうき", reading: "byouki", meanings: { en: "Sickness / illness", bn: "অসুখ" } },
        { word: "びょういん", reading: "byouin", meanings: { en: "Hospital", bn: "হাসপাতাল" } },
        { word: "びょうどう", reading: "byoudou", meanings: { en: "Equality", bn: "সমতা" } }
    ], exampleSentence: { jp: "びょうきに なりました。", reading: "Byouki ni narimashita.", meanings: { en: "I got sick.", bn: "আমি অসুস্থ হয়ে পড়েছি।" } } },
    "ぴゃ": { nameBn: "পিয়া", examples: [
        { word: "はっぴゃく", reading: "happyaku", meanings: { en: "Eight hundred", bn: "আটশ" } },
        { word: "ろっぴゃく", reading: "roppyaku", meanings: { en: "Six hundred", bn: "ছয়শ" } },
        { word: "はっぴゃくえん", reading: "happyakuen", meanings: { en: "800 yen", bn: "৮০০ ইয়েন" } }
    ], exampleSentence: { jp: "はっぴゃくえんです。", reading: "Happyakuen desu.", meanings: { en: "It's 800 yen.", bn: "এটি ৮০০ ইয়েন।" } } },
    "ぴゅ": { nameBn: "পিউ", examples: [
        { word: "ぴゅうぴゅう", reading: "pyuupyuu", meanings: { en: "Whistling (thin wind sound, onomatopoeia)", bn: "সরু শিসের শব্দ (বাতাসের, ধ্বন্যাত্মক)" } },
        { word: "ぴゅんぴゅん", reading: "pyunpyun", meanings: { en: "Zipping / whizzing sound (onomatopoeia)", bn: "দ্রুত শোঁ শোঁ শব্দ (ধ্বন্যাত্মক)" } },
        { word: "コンピューター", reading: "konpyuutaa", meanings: { en: "Computer (katakana loanword with a similar sound)", bn: "কম্পিউটার (একই রকম ধ্বনিযুক্ত কাতাকানা ঋণশব্দ)" } }
    ], exampleSentence: { jp: "かぜが ぴゅうぴゅう なります。", reading: "Kaze ga pyuupyuu narimasu.", meanings: { en: "The wind whistles.", bn: "বাতাস শিস দিয়ে বয়।" } } },
    "ぴょ": { nameBn: "পিয়ো", examples: [
        { word: "ぴょんぴょん", reading: "pyonpyon", meanings: { en: "Hopping (onomatopoeia)", bn: "লাফানো (ধ্বন্যাত্মক)" } },
        { word: "ぴょこぴょこ", reading: "pyokopyoko", meanings: { en: "Bobbing repeatedly (onomatopoeia)", bn: "বারবার লাফানো/মাথা নাড়া (ধ্বন্যাত্মক)" } },
        { word: "いっぴょう", reading: "ippyou", meanings: { en: "One vote", bn: "একটি ভোট" } }
    ], exampleSentence: { jp: "うさぎが ぴょんぴょん はねます。", reading: "Usagi ga pyonpyon hanemasu.", meanings: { en: "The rabbit hops around.", bn: "খরগোশটি লাফাতে থাকে।" } } },

    /* ---------- KATAKANA: ガ row (dakuten) ---------- */
    "ガ": { nameBn: "গা", examples: [
        { word: "ガソリン", reading: "gasorin", meanings: { en: "Gasoline", bn: "পেট্রোল" } },
        { word: "ガム", reading: "gamu", meanings: { en: "Gum", bn: "চুইংগাম" } },
        { word: "ガレージ", reading: "gareeji", meanings: { en: "Garage", bn: "গ্যারেজ" } }
    ], exampleSentence: { jp: "ガソリンを いれます。", reading: "Gasorin o iremasu.", meanings: { en: "I put in gasoline.", bn: "আমি পেট্রোল ভরি।" } } },
    "ギ": { nameBn: "গি", examples: [
        { word: "ギター", reading: "gitaa", meanings: { en: "Guitar", bn: "গিটার" } },
        { word: "ギフト", reading: "gifuto", meanings: { en: "Gift", bn: "উপহার" } },
        { word: "ギリシャ", reading: "girisha", meanings: { en: "Greece", bn: "গ্রিস" } }
    ], exampleSentence: { jp: "ギターを ひきます。", reading: "Gitaa o hikimasu.", meanings: { en: "I play the guitar.", bn: "আমি গিটার বাজাই।" } } },
    "グ": { nameBn: "গু", examples: [
        { word: "グラス", reading: "gurasu", meanings: { en: "Glass (drinking cup)", bn: "গ্লাস" } },
        { word: "グループ", reading: "guruupu", meanings: { en: "Group", bn: "দল" } },
        { word: "グレー", reading: "guree", meanings: { en: "Gray (color)", bn: "ধূসর রং" } }
    ], exampleSentence: { jp: "グラスに みずを いれます。", reading: "Gurasu ni mizu o iremasu.", meanings: { en: "I pour water into the glass.", bn: "আমি গ্লাসে পানি ঢালি।" } } },
    "ゲ": { nameBn: "গে", examples: [
        { word: "ゲーム", reading: "geemu", meanings: { en: "Game", bn: "খেলা (গেম)" } },
        { word: "ゲスト", reading: "gesuto", meanings: { en: "Guest", bn: "অতিথি" } },
        { word: "ゲート", reading: "geeto", meanings: { en: "Gate", bn: "ফটক" } }
    ], exampleSentence: { jp: "ゲームを します。", reading: "Geemu o shimasu.", meanings: { en: "I play a game.", bn: "আমি গেম খেলি।" } } },
    "ゴ": { nameBn: "গো", examples: [
        { word: "ゴム", reading: "gomu", meanings: { en: "Rubber", bn: "রাবার" } },
        { word: "ゴール", reading: "gooru", meanings: { en: "Goal", bn: "লক্ষ্য/গোল" } },
        { word: "マンゴー", reading: "mangoo", meanings: { en: "Mango", bn: "আম" } }
    ], exampleSentence: { jp: "ゴムを つかいます。", reading: "Gomu o tsukaimasu.", meanings: { en: "I use a rubber band.", bn: "আমি রাবার ব্যবহার করি।" } } },

    /* ---------- KATAKANA: ザ row (dakuten) ---------- */
    "ザ": { nameBn: "জা", examples: [
        { word: "ザリガニ", reading: "zarigani", meanings: { en: "Crayfish", bn: "ক্রেফিশ" } },
        { word: "ピザ", reading: "piza", meanings: { en: "Pizza", bn: "পিৎজা" } },
        { word: "デザイン", reading: "dezain", meanings: { en: "Design", bn: "নকশা" } }
    ], exampleSentence: { jp: "ザリガニを つかまえます。", reading: "Zarigani o tsukamaemasu.", meanings: { en: "I catch a crayfish.", bn: "আমি একটি ক্রেফিশ ধরি।" } } },
    "ジ": { nameBn: "জি", examples: [
        { word: "ジーンズ", reading: "jiinzu", meanings: { en: "Jeans", bn: "জিন্স" } },
        { word: "レジ", reading: "reji", meanings: { en: "Cash register / checkout", bn: "ক্যাশ কাউন্টার" } },
        { word: "ジム", reading: "jimu", meanings: { en: "Gym", bn: "জিম" } }
    ], exampleSentence: { jp: "ジーンズを はきます。", reading: "Jiinzu o hakimasu.", meanings: { en: "I wear jeans.", bn: "আমি জিন্স পরি।" } } },
    "ズ": { nameBn: "জু", examples: [
        { word: "ズボン", reading: "zubon", meanings: { en: "Trousers / pants", bn: "ট্রাউজার" } },
        { word: "サイズ", reading: "saizu", meanings: { en: "Size", bn: "আকার" } },
        { word: "クイズ", reading: "kuizu", meanings: { en: "Quiz", bn: "কুইজ" } }
    ], exampleSentence: { jp: "ズボンを かいます。", reading: "Zubon o kaimasu.", meanings: { en: "I buy trousers.", bn: "আমি ট্রাউজার কিনি।" } } },
    "ゼ": { nameBn: "জে", examples: [
        { word: "ゼロ", reading: "zero", meanings: { en: "Zero", bn: "শূন্য" } },
        { word: "ゼリー", reading: "zerii", meanings: { en: "Jelly", bn: "জেলি" } },
        { word: "ゼミ", reading: "zemi", meanings: { en: "Seminar (university)", bn: "সেমিনার" } }
    ], exampleSentence: { jp: "こたえは ゼロです。", reading: "Kotae wa zero desu.", meanings: { en: "The answer is zero.", bn: "উত্তরটি শূন্য।" } } },
    "ゾ": { nameBn: "জো", examples: [
        { word: "ゾウ", reading: "zou", meanings: { en: "Elephant", bn: "হাতি" } },
        { word: "ゾンビ", reading: "zonbi", meanings: { en: "Zombie", bn: "জম্বি" } },
        { word: "リゾート", reading: "rizooto", meanings: { en: "Resort", bn: "রিসোর্ট" } }
    ], exampleSentence: { jp: "ゾウは おおきいです。", reading: "Zou wa ookii desu.", meanings: { en: "The elephant is big.", bn: "হাতিটি বড়।" } } },

    /* ---------- KATAKANA: ダ row (dakuten; ヂ/ヅ are almost never used) ---------- */
    "ダ": { nameBn: "দা", examples: [
        { word: "ダンス", reading: "dansu", meanings: { en: "Dance", bn: "নাচ" } },
        { word: "ダイエット", reading: "daietto", meanings: { en: "Diet", bn: "ডায়েট" } },
        { word: "ダイヤモンド", reading: "daiyamondo", meanings: { en: "Diamond", bn: "হীরা" } }
    ], exampleSentence: { jp: "ダンスを します。", reading: "Dansu o shimasu.", meanings: { en: "I dance.", bn: "আমি নাচি।" } } },
    "ヂ": { nameBn: "জি", examples: [
        { word: "ヂ", reading: "ji", meanings: { en: "Rare katakana sound (same pronunciation as ジ; almost never appears in real words)", bn: "বিরল কাতাকানা ধ্বনি (ジ-এর মতোই উচ্চারণ; বাস্তব শব্দে প্রায় ব্যবহৃত হয় না)" } },
        { word: "はなぢ", reading: "hanaji", meanings: { en: "Nosebleed (the hiragana counterpart ぢ is more commonly seen than katakana ヂ)", bn: "নাক দিয়ে রক্তপড়া (হিরাগানা রূপ ぢ কাতাকানা ヂ-এর চেয়ে বেশি দেখা যায়)" } },
        { word: "ジ (どうおん)", reading: "ji (douon)", meanings: { en: "Modern Japanese usually writes this sound as ジ instead of ヂ", bn: "আধুনিক জাপানি ভাষায় এই ধ্বনি সাধারণত ヂ-এর বদলে ジ লেখা হয়" } }
    ], exampleSentence: { jp: "ヂは めったに つかいません。", reading: "Ji wa mettani tsukaimasen.", meanings: { en: "Ji (ヂ) is rarely used.", bn: "ヂ (জি) খুব কমই ব্যবহৃত হয়।" } } },
    "ヅ": { nameBn: "জু", examples: [
        { word: "ヅラ", reading: "zura", meanings: { en: "Wig (colloquial)", bn: "পরচুলা (কথ্য ভাষায়)" } },
        { word: "ズ (どうおん)", reading: "zu (douon)", meanings: { en: "Modern Japanese usually writes this sound as ズ instead of ヅ", bn: "আধুনিক জাপানি ভাষায় এই ধ্বনি সাধারণত ヅ-এর বদলে ズ লেখা হয়" } },
        { word: "つづく", reading: "tsuzuku", meanings: { en: "To continue (the hiragana counterpart づ is more commonly seen than katakana ヅ)", bn: "চলতে থাকা (হিরাগানা রূপ づ কাতাকানা ヅ-এর চেয়ে বেশি দেখা যায়)" } }
    ], exampleSentence: { jp: "あれは ヅラですか。", reading: "Are wa zura desu ka.", meanings: { en: "Is that a wig?", bn: "ওটা কি একটা পরচুলা?" } } },
    "デ": { nameBn: "দে", examples: [
        { word: "デパート", reading: "depaato", meanings: { en: "Department store", bn: "ডিপার্টমেন্ট স্টোর" } },
        { word: "デート", reading: "deeto", meanings: { en: "Date (romantic)", bn: "ডেট (প্রণয়সাক্ষাৎ)" } },
        { word: "データ", reading: "deeta", meanings: { en: "Data", bn: "তথ্য (ডেটা)" } }
    ], exampleSentence: { jp: "デパートへ いきます。", reading: "Depaato e ikimasu.", meanings: { en: "I go to the department store.", bn: "আমি ডিপার্টমেন্ট স্টোরে যাই।" } } },
    "ド": { nameBn: "দো", examples: [
        { word: "ドア", reading: "doa", meanings: { en: "Door", bn: "দরজা" } },
        { word: "ドライブ", reading: "doraibu", meanings: { en: "Drive (car)", bn: "গাড়ি চালানো" } },
        { word: "ドラマ", reading: "dorama", meanings: { en: "Drama (TV show)", bn: "নাটক" } }
    ], exampleSentence: { jp: "ドアを あけます。", reading: "Doa o akemasu.", meanings: { en: "I open the door.", bn: "আমি দরজা খুলি।" } } },

    /* ---------- KATAKANA: バ row (dakuten) ---------- */
    "バ": { nameBn: "বা", examples: [
        { word: "バス", reading: "basu", meanings: { en: "Bus", bn: "বাস" } },
        { word: "バナナ", reading: "banana", meanings: { en: "Banana", bn: "কলা" } },
        { word: "バッグ", reading: "baggu", meanings: { en: "Bag", bn: "ব্যাগ" } }
    ], exampleSentence: { jp: "バスに のります。", reading: "Basu ni norimasu.", meanings: { en: "I ride the bus.", bn: "আমি বাসে চড়ি।" } } },
    "ビ": { nameBn: "বি", examples: [
        { word: "ビル", reading: "biru", meanings: { en: "Building", bn: "ভবন" } },
        { word: "ビタミン", reading: "bitamin", meanings: { en: "Vitamin", bn: "ভিটামিন" } },
        { word: "ビデオ", reading: "bideo", meanings: { en: "Video", bn: "ভিডিও" } }
    ], exampleSentence: { jp: "ビルが たかいです。", reading: "Biru ga takai desu.", meanings: { en: "The building is tall.", bn: "ভবনটি উঁচু।" } } },
    "ブ": { nameBn: "বু", examples: [
        { word: "ブドウ", reading: "budou", meanings: { en: "Grape", bn: "আঙুর" } },
        { word: "ブラウス", reading: "burausu", meanings: { en: "Blouse", bn: "ব্লাউজ" } },
        { word: "ブラシ", reading: "burashi", meanings: { en: "Brush", bn: "ব্রাশ" } }
    ], exampleSentence: { jp: "ブドウを たべます。", reading: "Budou o tabemasu.", meanings: { en: "I eat grapes.", bn: "আমি আঙুর খাই।" } } },
    "ベ": { nameBn: "বে", examples: [
        { word: "ベッド", reading: "beddo", meanings: { en: "Bed", bn: "বিছানা" } },
        { word: "ベル", reading: "beru", meanings: { en: "Bell", bn: "ঘণ্টা" } },
        { word: "ベルト", reading: "beruto", meanings: { en: "Belt", bn: "বেল্ট" } }
    ], exampleSentence: { jp: "ベッドで ねます。", reading: "Beddo de nemasu.", meanings: { en: "I sleep in the bed.", bn: "আমি বিছানায় ঘুমাই।" } } },
    "ボ": { nameBn: "বো", examples: [
        { word: "ボール", reading: "booru", meanings: { en: "Ball", bn: "বল" } },
        { word: "ボタン", reading: "botan", meanings: { en: "Button", bn: "বোতাম" } },
        { word: "ボート", reading: "booto", meanings: { en: "Boat", bn: "নৌকা" } }
    ], exampleSentence: { jp: "ボールで あそびます。", reading: "Booru de asobimasu.", meanings: { en: "I play with a ball.", bn: "আমি বল দিয়ে খেলি।" } } },

    /* ---------- KATAKANA: パ row (handakuten) ---------- */
    "パ": { nameBn: "পা", examples: [
        { word: "パーティー", reading: "paatii", meanings: { en: "Party", bn: "পার্টি" } },
        { word: "パン", reading: "pan", meanings: { en: "Bread", bn: "রুটি" } },
        { word: "パスポート", reading: "pasupooto", meanings: { en: "Passport", bn: "পাসপোর্ট" } }
    ], exampleSentence: { jp: "パーティーに いきます。", reading: "Paatii ni ikimasu.", meanings: { en: "I go to the party.", bn: "আমি পার্টিতে যাই।" } } },
    "ピ": { nameBn: "পি", examples: [
        { word: "ピアノ", reading: "piano", meanings: { en: "Piano", bn: "পিয়ানো" } },
        { word: "ピンク", reading: "pinku", meanings: { en: "Pink", bn: "গোলাপি" } },
        { word: "ピクニック", reading: "pikunikku", meanings: { en: "Picnic", bn: "বনভোজন" } }
    ], exampleSentence: { jp: "ピアノを ひきます。", reading: "Piano o hikimasu.", meanings: { en: "I play the piano.", bn: "আমি পিয়ানো বাজাই।" } } },
    "プ": { nameBn: "পু", examples: [
        { word: "プール", reading: "puuru", meanings: { en: "Pool", bn: "সুইমিং পুল" } },
        { word: "プレゼント", reading: "purezento", meanings: { en: "Present / gift", bn: "উপহার" } },
        { word: "プリン", reading: "purin", meanings: { en: "Pudding", bn: "পুডিং" } }
    ], exampleSentence: { jp: "プールで およぎます。", reading: "Puuru de oyogimasu.", meanings: { en: "I swim in the pool.", bn: "আমি পুলে সাঁতার কাটি।" } } },
    "ペ": { nameBn: "পে", examples: [
        { word: "ペン", reading: "pen", meanings: { en: "Pen", bn: "কলম" } },
        { word: "ペット", reading: "petto", meanings: { en: "Pet", bn: "পোষা প্রাণী" } },
        { word: "ペーパー", reading: "peepaa", meanings: { en: "Paper", bn: "কাগজ" } }
    ], exampleSentence: { jp: "ペンで かきます。", reading: "Pen de kakimasu.", meanings: { en: "I write with a pen.", bn: "আমি কলম দিয়ে লিখি।" } } },
    "ポ": { nameBn: "পো", examples: [
        { word: "ポケット", reading: "poketto", meanings: { en: "Pocket", bn: "পকেট" } },
        { word: "ポスト", reading: "posuto", meanings: { en: "Mailbox / post", bn: "ডাকবাক্স" } },
        { word: "ポテト", reading: "poteto", meanings: { en: "Potato (fries)", bn: "আলু (ফ্রাই)" } }
    ], exampleSentence: { jp: "ポケットに いれます。", reading: "Poketto ni iremasu.", meanings: { en: "I put it in my pocket.", bn: "আমি এটা পকেটে রাখি।" } } },

    /* ---------- KATAKANA: キャ/シャ/チャ row (yōon) ---------- */
    "キャ": { nameBn: "কিয়া", examples: [
        { word: "キャンプ", reading: "kyanpu", meanings: { en: "Camp", bn: "ক্যাম্প" } },
        { word: "キャンパス", reading: "kyanpasu", meanings: { en: "Campus", bn: "ক্যাম্পাস" } },
        { word: "キャンディー", reading: "kyandii", meanings: { en: "Candy", bn: "ক্যান্ডি" } }
    ], exampleSentence: { jp: "キャンプを します。", reading: "Kyanpu o shimasu.", meanings: { en: "I go camping.", bn: "আমি ক্যাম্পিং করি।" } } },
    "キュ": { nameBn: "কিউ", examples: [
        { word: "キュート", reading: "kyuuto", meanings: { en: "Cute", bn: "কিউট/সুন্দর" } },
        { word: "キュウリ", reading: "kyuuri", meanings: { en: "Cucumber (katakana style)", bn: "শসা" } },
        { word: "バーベキュー", reading: "baabekyuu", meanings: { en: "Barbecue", bn: "বারবিকিউ" } }
    ], exampleSentence: { jp: "そのいぬは キュートです。", reading: "Sono inu wa kyuuto desu.", meanings: { en: "That dog is cute.", bn: "সেই কুকুরটি কিউট।" } } },
    "キョ": { nameBn: "কিয়ো", examples: [
        { word: "トウキョウ", reading: "toukyou", meanings: { en: "Tokyo", bn: "টোকিও" } },
        { word: "キョロキョロ", reading: "kyorokyoro", meanings: { en: "Looking around restlessly (onomatopoeia)", bn: "এদিক-ওদিক তাকানো (ধ্বন্যাত্মক)" } },
        { word: "キョ (ちめい)", reading: "kyo", meanings: { en: "Mostly appears in the place name Tokyo or onomatopoeia", bn: "বেশিরভাগ ক্ষেত্রে টোকিও শহরের নামে বা ধ্বন্যাত্মক শব্দে ব্যবহৃত হয়" } }
    ], exampleSentence: { jp: "トウキョウに すんでいます。", reading: "Toukyou ni sunde imasu.", meanings: { en: "I live in Tokyo.", bn: "আমি টোকিওতে থাকি।" } } },
    "シャ": { nameBn: "শা", examples: [
        { word: "シャワー", reading: "shawaa", meanings: { en: "Shower", bn: "শাওয়ার" } },
        { word: "シャンプー", reading: "shanpuu", meanings: { en: "Shampoo", bn: "শ্যাম্পু" } },
        { word: "シャベル", reading: "shaberu", meanings: { en: "Shovel", bn: "বেলচা" } }
    ], exampleSentence: { jp: "シャワーを あびます。", reading: "Shawaa o abimasu.", meanings: { en: "I take a shower.", bn: "আমি শাওয়ার নিই।" } } },
    "シュ": { nameBn: "শু", examples: [
        { word: "シュークリーム", reading: "shuukuriimu", meanings: { en: "Cream puff", bn: "ক্রিম পাফ" } },
        { word: "シュガー", reading: "shugaa", meanings: { en: "Sugar", bn: "চিনি" } },
        { word: "シュノーケル", reading: "shunookeru", meanings: { en: "Snorkel", bn: "স্নরকেল" } }
    ], exampleSentence: { jp: "シュークリームを たべます。", reading: "Shuukuriimu o tabemasu.", meanings: { en: "I eat a cream puff.", bn: "আমি ক্রিম পাফ খাই।" } } },
    "ショ": { nameBn: "শো", examples: [
        { word: "ショッピング", reading: "shoppingu", meanings: { en: "Shopping", bn: "কেনাকাটা" } },
        { word: "ショー", reading: "shoo", meanings: { en: "Show", bn: "প্রদর্শনী" } },
        { word: "ショック", reading: "shokku", meanings: { en: "Shock", bn: "ধাক্কা" } }
    ], exampleSentence: { jp: "ショッピングを します。", reading: "Shoppingu o shimasu.", meanings: { en: "I go shopping.", bn: "আমি কেনাকাটা করি।" } } },
    "チャ": { nameBn: "চা", examples: [
        { word: "チャンス", reading: "chansu", meanings: { en: "Chance", bn: "সুযোগ" } },
        { word: "チャレンジ", reading: "charenji", meanings: { en: "Challenge", bn: "চ্যালেঞ্জ" } },
        { word: "チャンネル", reading: "channeru", meanings: { en: "Channel", bn: "চ্যানেল" } }
    ], exampleSentence: { jp: "チャンスが あります。", reading: "Chansu ga arimasu.", meanings: { en: "There is a chance.", bn: "একটি সুযোগ আছে।" } } },
    "チュ": { nameBn: "চু", examples: [
        { word: "チューリップ", reading: "chuurippu", meanings: { en: "Tulip", bn: "টিউলিপ ফুল" } },
        { word: "チューブ", reading: "chuubu", meanings: { en: "Tube", bn: "টিউব" } },
        { word: "チュチュ", reading: "chuchu", meanings: { en: "Tutu (ballet skirt)", bn: "ব্যালে স্কার্ট (টুটু)" } }
    ], exampleSentence: { jp: "チューリップが さいています。", reading: "Chuurippu ga saite imasu.", meanings: { en: "The tulip is blooming.", bn: "টিউলিপ ফুল ফুটেছে।" } } },
    "チョ": { nameBn: "চো", examples: [
        { word: "チョコレート", reading: "chokoreeto", meanings: { en: "Chocolate", bn: "চকলেট" } },
        { word: "チョーク", reading: "chooku", meanings: { en: "Chalk", bn: "চক" } },
        { word: "チョッキ", reading: "chokki", meanings: { en: "Vest", bn: "ভেস্ট" } }
    ], exampleSentence: { jp: "チョコレートを たべます。", reading: "Chokoreeto o tabemasu.", meanings: { en: "I eat chocolate.", bn: "আমি চকলেট খাই।" } } },

    /* ---------- KATAKANA: ニャ/ヒャ/ミャ row (yōon) ---------- */
    "ニャ": { nameBn: "নিয়া", examples: [
        { word: "ニャンコ", reading: "nyanko", meanings: { en: "Kitty (cute word for cat)", bn: "বিড়ালছানা (আদুরে শব্দ)" } },
        { word: "ニャンニャン", reading: "nyannyan", meanings: { en: "Meow meow", bn: "বিড়ালের ডাক" } },
        { word: "ニャ (ねこ)", reading: "nya", meanings: { en: "Mostly used for cat sounds / cute cat words", bn: "বেশিরভাগ ক্ষেত্রে বিড়ালের ডাক বা আদুরে শব্দে ব্যবহৃত হয়" } }
    ], exampleSentence: { jp: "ニャンコが かわいいです。", reading: "Nyanko ga kawaii desu.", meanings: { en: "The kitty is cute.", bn: "বিড়ালছানাটি আদুরে।" } } },
    "ニュ": { nameBn: "নিউ", examples: [
        { word: "ニュアンス", reading: "nyuansu", meanings: { en: "Nuance", bn: "সূক্ষ্ম পার্থক্য" } },
        { word: "ニュートン", reading: "nyuuton", meanings: { en: "Newton (unit/name)", bn: "নিউটন" } },
        { word: "マニュアル", reading: "manyuaru", meanings: { en: "Manual", bn: "ম্যানুয়াল" } }
    ], exampleSentence: { jp: "ニュアンスが ちがいます。", reading: "Nyuansu ga chigaimasu.", meanings: { en: "The nuance is different.", bn: "সূক্ষ্ম পার্থক্যটি ভিন্ন।" } } },
    "ニョ": { nameBn: "নিয়ো", examples: [
        { word: "ニョッキ", reading: "nyokki", meanings: { en: "Gnocchi", bn: "নোক্কি (ইতালীয় খাবার)" } },
        { word: "ニョ (めずらしい おと)", reading: "nyo", meanings: { en: "Very rare in loanwords; gnocchi (ニョッキ) is the most common example", bn: "ঋণশব্দে খুবই বিরল; নোক্কি (ニョッキ) সবচেয়ে প্রচলিত উদাহরণ" } },
        { word: "コンニャク (きょうちょう)", reading: "konnyaku", meanings: { en: "Konjac - written in katakana here for emphasis", bn: "কনজ্যাক - এখানে জোর দেওয়ার জন্য কাতাকানায় লেখা হয়েছে" } }
    ], exampleSentence: { jp: "ニョッキを たべます。", reading: "Nyokki o tabemasu.", meanings: { en: "I eat gnocchi.", bn: "আমি নোক্কি খাই।" } } },
    "ヒャ": { nameBn: "হিয়া", examples: [
        { word: "ヒャー", reading: "hyaa", meanings: { en: "Wow! (exclamation of surprise)", bn: "বিস্ময়সূচক আওয়াজ" } },
        { word: "ヒャッハー", reading: "hyahhaa", meanings: { en: "Wild exclamation (informal slang)", bn: "উত্তেজনার অনানুষ্ঠানিক আওয়াজ" } },
        { word: "ヒャ (めずらしい おと)", reading: "hya", meanings: { en: "Very rare in loanwords; mostly appears in exclamations", bn: "ঋণশব্দে খুবই বিরল; বেশিরভাগ ক্ষেত্রে বিস্ময়সূচক শব্দে ব্যবহৃত হয়" } }
    ], exampleSentence: { jp: "ヒャー、びっくりした!", reading: "Hyaa, bikkurishita!", meanings: { en: "Wow, that startled me!", bn: "ওহ, আমি চমকে গেছি!" } } },
    "ヒュ": { nameBn: "হিউ", examples: [
        { word: "ヒューズ", reading: "hyuuzu", meanings: { en: "Fuse (electrical)", bn: "ফিউজ" } },
        { word: "ヒューマン", reading: "hyuuman", meanings: { en: "Human", bn: "মানুষ" } },
        { word: "ヒュンダイ", reading: "hyundai", meanings: { en: "Hyundai (car brand)", bn: "হুন্দাই (গাড়ি ব্র্যান্ড)" } }
    ], exampleSentence: { jp: "ヒューズが きれました。", reading: "Hyuuzu ga kiremashita.", meanings: { en: "The fuse blew.", bn: "ফিউজটি পুড়ে গেছে।" } } },
    "ヒョ": { nameBn: "হিয়ো", examples: [
        { word: "ヒョウ", reading: "hyou", meanings: { en: "Leopard", bn: "চিতাবাঘ" } },
        { word: "ヒョコヒョコ", reading: "hyokohyoko", meanings: { en: "Bobbing / wobbling walk (onomatopoeia)", bn: "টলমল করে হাঁটা (ধ্বন্যাত্মক)" } },
        { word: "ヒョ (めずらしい おと)", reading: "hyo", meanings: { en: "Mostly appears in the animal name leopard (ヒョウ) and onomatopoeia", bn: "বেশিরভাগ ক্ষেত্রে চিতাবাঘ (ヒョウ) প্রাণীর নামে বা ধ্বন্যাত্মক শব্দে ব্যবহৃত হয়" } }
    ], exampleSentence: { jp: "ヒョウは はやいです。", reading: "Hyou wa hayai desu.", meanings: { en: "The leopard is fast.", bn: "চিতাবাঘটি দ্রুতগামী।" } } },
    "ミャ": { nameBn: "মিয়া", examples: [
        { word: "ミャンマー", reading: "myanmaa", meanings: { en: "Myanmar", bn: "মিয়ানমার" } },
        { word: "ミャオ", reading: "myao", meanings: { en: "Meow (cat sound, alt spelling)", bn: "বিড়ালের ডাক" } },
        { word: "ミャ (めずらしい おと)", reading: "mya", meanings: { en: "Mostly appears in the country name Myanmar", bn: "বেশিরভাগ ক্ষেত্রে মিয়ানমার দেশের নামে ব্যবহৃত হয়" } }
    ], exampleSentence: { jp: "ミャンマーへ りょこうします。", reading: "Myanmaa e ryokou shimasu.", meanings: { en: "I travel to Myanmar.", bn: "আমি মিয়ানমারে ভ্রমণ করি।" } } },
    "ミュ": { nameBn: "মিউ", examples: [
        { word: "ミュージアム", reading: "myuujiamu", meanings: { en: "Museum", bn: "জাদুঘর" } },
        { word: "ミュージシャン", reading: "myuujishan", meanings: { en: "Musician", bn: "সঙ্গীতশিল্পী" } },
        { word: "コミュニケーション", reading: "komyunikeeshon", meanings: { en: "Communication", bn: "যোগাযোগ" } }
    ], exampleSentence: { jp: "ミュージアムへ いきます。", reading: "Myuujiamu e ikimasu.", meanings: { en: "I go to the museum.", bn: "আমি জাদুঘরে যাই।" } } },
    "ミョ": { nameBn: "মিয়ো", examples: [
        { word: "ミョンドン", reading: "myondon", meanings: { en: "Myeongdong (shopping district in Seoul)", bn: "ম্যিয়ংদং (সিউলের একটি কেনাকাটার এলাকা)" } },
        { word: "ミョ (めずらしい おと)", reading: "myo", meanings: { en: "Very rare in loanwords; mostly appears in proper nouns", bn: "ঋণশব্দে খুবই বিরল; বেশিরভাগ ক্ষেত্রে নামবাচক শব্দে ব্যবহৃত হয়" } },
        { word: "ミョンドン (かんこく の ちめい)", reading: "myondon", meanings: { en: "Often appears when transliterating Korean place names into Japanese", bn: "কোরিয়ান স্থানের নাম জাপানিতে লেখার সময় প্রায়ই ব্যবহৃত হয়" } }
    ], exampleSentence: { jp: "ミョンドンで かいものします。", reading: "Myondon de kaimono shimasu.", meanings: { en: "I shop in Myeongdong.", bn: "আমি ম্যিয়ংদং-এ কেনাকাটা করি।" } } },

    /* ---------- KATAKANA: リャ row (yōon) ---------- */
    "リャ": { nameBn: "রিয়া", examples: [
        { word: "リャマ", reading: "ryama", meanings: { en: "Llama", bn: "লামা (প্রাণী)" } },
        { word: "リャ (めずらしい おと)", reading: "rya", meanings: { en: "Rare in loanwords; llama (リャマ) is the most common example", bn: "ঋণশব্দে বিরল; লামা (リャマ) সবচেয়ে প্রচলিত উদাহরণ" } },
        { word: "リャノ", reading: "ryano", meanings: { en: "Llano (a type of grassland, geography term)", bn: "ইয়ানো (তৃণভূমি, ভূগোল পরিভাষা)" } }
    ], exampleSentence: { jp: "どうぶつえんに リャマが います。", reading: "Doubutsuen ni ryama ga imasu.", meanings: { en: "There is a llama at the zoo.", bn: "চিড়িয়াখানায় একটি লামা আছে।" } } },
    "リュ": { nameBn: "রিউ", examples: [
        { word: "リュック", reading: "ryukku", meanings: { en: "Backpack", bn: "ব্যাকপ্যাক" } },
        { word: "リュックサック", reading: "ryukkusakku", meanings: { en: "Backpack (full form)", bn: "ব্যাকপ্যাক (সম্পূর্ণ রূপ)" } },
        { word: "リュウグウ", reading: "ryuugu", meanings: { en: "Ryugu (asteroid explored by Hayabusa2)", bn: "রিউগু (হায়াবুসা২ কর্তৃক অনুসন্ধানকৃত গ্রহাণু)" } }
    ], exampleSentence: { jp: "リュックを せおいます。", reading: "Ryukku o seoimasu.", meanings: { en: "I carry a backpack.", bn: "আমি একটি ব্যাকপ্যাক বহন করি।" } } },
    "リョ": { nameBn: "রিয়ো", examples: [
        { word: "リョコウ", reading: "ryokou", meanings: { en: "Travel / trip (katakana-stylized)", bn: "ভ্রমণ (কাতাকানা শৈলীতে)" } },
        { word: "リョ (めずらしい おと)", reading: "ryo", meanings: { en: "Rarely written in katakana; usually appears as native words in hiragana/kanji", bn: "সাধারণত কাতাকানায় লেখা হয় না; হিরাগানা/কাঞ্জিতেই বেশি দেখা যায়" } },
        { word: "リョウリ (きょうちょう)", reading: "ryouri", meanings: { en: "Cooking (katakana-stylized)", bn: "রান্না (কাতাকানা শৈলীতে)" } }
    ], exampleSentence: { jp: "リョコウに いきます。", reading: "Ryokou ni ikimasu.", meanings: { en: "I go on a trip.", bn: "আমি ভ্রমণে যাই।" } } },

    /* ---------- KATAKANA: ギャ/ジャ row (yōon, dakuten) ---------- */
    "ギャ": { nameBn: "গিয়া", examples: [
        { word: "ギャグ", reading: "gyagu", meanings: { en: "Joke / gag", bn: "রসিকতা" } },
        { word: "ギャラリー", reading: "gyararii", meanings: { en: "Gallery", bn: "গ্যালারি" } },
        { word: "ギャップ", reading: "gyappu", meanings: { en: "Gap", bn: "ফাঁক/পার্থক্য" } }
    ], exampleSentence: { jp: "ギャグを いいます。", reading: "Gyagu o iimasu.", meanings: { en: "I tell a joke.", bn: "আমি একটি রসিকতা বলি।" } } },
    "ギュ": { nameBn: "গিউ", examples: [
        { word: "レギュラー", reading: "regyuraa", meanings: { en: "Regular", bn: "নিয়মিত/রেগুলার" } },
        { word: "ギュウギュウ", reading: "gyuugyuu", meanings: { en: "Packed tightly (onomatopoeia)", bn: "ঠাসাঠাসি (ধ্বন্যাত্মক)" } },
        { word: "ギュッと", reading: "gyutto", meanings: { en: "Tightly / firmly (onomatopoeia)", bn: "শক্ত করে চেপে ধরা (ধ্বন্যাত্মক)" } }
    ], exampleSentence: { jp: "レギュラーサイズを ください。", reading: "Regyuraa saizu o kudasai.", meanings: { en: "Regular size, please.", bn: "রেগুলার সাইজ দিন।" } } },
    "ギョ": { nameBn: "গিয়ো", examples: [
        { word: "ギョーザ", reading: "gyooza", meanings: { en: "Gyoza (dumpling, menu-style spelling)", bn: "গিয়োজা (মেনু শৈলীর বানান)" } },
        { word: "ギョギョッと", reading: "gyogyotto", meanings: { en: "Onomatopoeia for being surprised", bn: "বিস্ময়সূচক শব্দ" } },
        { word: "ギョ (めずらしい おと)", reading: "gyo", meanings: { en: "Rarely appears in katakana beyond gyoza styling", bn: "গিয়োজার বানান ছাড়া কাতাকানায় খুব কমই ব্যবহৃত হয়" } }
    ], exampleSentence: { jp: "ギョーザを ちゅうもんします。", reading: "Gyooza o chuumon shimasu.", meanings: { en: "I order gyoza.", bn: "আমি গিয়োজা অর্ডার করি।" } } },
    "ジャ": { nameBn: "জা", examples: [
        { word: "ジャム", reading: "jamu", meanings: { en: "Jam", bn: "জ্যাম" } },
        { word: "ジャケット", reading: "jaketto", meanings: { en: "Jacket", bn: "জ্যাকেট" } },
        { word: "ジャングル", reading: "janguru", meanings: { en: "Jungle", bn: "জঙ্গল" } }
    ], exampleSentence: { jp: "パンに ジャムを つけます。", reading: "Pan ni jamu o tsukemasu.", meanings: { en: "I put jam on bread.", bn: "আমি রুটিতে জ্যাম মাখাই।" } } },
    "ジュ": { nameBn: "জু", examples: [
        { word: "ジュース", reading: "juusu", meanings: { en: "Juice", bn: "জুস" } },
        { word: "ジュニア", reading: "junia", meanings: { en: "Junior", bn: "জুনিয়র" } },
        { word: "ジューシー", reading: "juushii", meanings: { en: "Juicy", bn: "রসালো" } }
    ], exampleSentence: { jp: "ジュースを のみます。", reading: "Juusu o nomimasu.", meanings: { en: "I drink juice.", bn: "আমি জুস পান করি।" } } },
    "ジョ": { nameBn: "জো", examples: [
        { word: "ジョギング", reading: "jogingu", meanings: { en: "Jogging", bn: "জগিং" } },
        { word: "ジョーク", reading: "jooku", meanings: { en: "Joke", bn: "রসিকতা" } },
        { word: "ジョイント", reading: "jointo", meanings: { en: "Joint", bn: "জোড়/সংযোগস্থল" } }
    ], exampleSentence: { jp: "まいあさ ジョギングを します。", reading: "Maiasa jogingu o shimasu.", meanings: { en: "I jog every morning.", bn: "আমি প্রতিদিন সকালে জগিং করি।" } } },

    /* ---------- KATAKANA: ビャ/ピャ row (yōon, dakuten/handakuten; ビャ/ビョ/ピャ have no common loanword) ---------- */
    "ビャ": { nameBn: "বিয়া", examples: [
        { word: "ビャ", reading: "bya", meanings: { en: "Rare katakana yōon sound (no common loanword uses it)", bn: "বিরল কাতাকানা য়োওন ধ্বনি (কোনো প্রচলিত ঋণশব্দে ব্যবহৃত হয় না)" } },
        { word: "さんびゃく (hiragana example)", reading: "sanbyaku", meanings: { en: "Three hundred - the hiragana びゃ sound does appear in numbers", bn: "তিনশ - সংখ্যায় হিরাগানা びゃ ধ্বনিটি পাওয়া যায়" } },
        { word: "ビ + ヤ (breakdown)", reading: "bi + ya", meanings: { en: "Written by combining ビ with a small ヤ", bn: "ছোট ヤ-এর সাথে ビ যুক্ত করে লেখা হয়" } }
    ], exampleSentence: { jp: "ビャという おとは めずらしいです。", reading: "Bya to iu oto wa mezurashii desu.", meanings: { en: "The sound 'bya' is rare.", bn: "'ব্যা' ধ্বনিটি বিরল।" } } },
    "ビュ": { nameBn: "বিউ", examples: [
        { word: "インタビュー", reading: "intabyuu", meanings: { en: "Interview", bn: "সাক্ষাৎকার" } },
        { word: "デビュー", reading: "debyuu", meanings: { en: "Debut", bn: "অভিষেক" } },
        { word: "レビュー", reading: "rebyuu", meanings: { en: "Review", bn: "পর্যালোচনা" } }
    ], exampleSentence: { jp: "かしゅに インタビューします。", reading: "Kashu ni intabyuu shimasu.", meanings: { en: "I interview the singer.", bn: "আমি গায়কের সাক্ষাৎকার নিই।" } } },
    "ビョ": { nameBn: "বিয়ো", examples: [
        { word: "ビョ", reading: "byo", meanings: { en: "Rare katakana yōon sound (no common loanword uses it)", bn: "বিরল কাতাকানা য়োওন ধ্বনি (কোনো প্রচলিত ঋণশব্দে ব্যবহৃত হয় না)" } },
        { word: "びょうき (hiragana example)", reading: "byouki", meanings: { en: "Sickness - the hiragana びょ sound is common, unlike katakana ビョ", bn: "অসুখ - হিরাগানা びょ ধ্বনিটি প্রচলিত, কাতাকানা ビョ নয়" } },
        { word: "ビ + ヨ (breakdown)", reading: "bi + yo", meanings: { en: "Written by combining ビ with a small ヨ", bn: "ছোট ヨ-এর সাথে ビ যুক্ত করে লেখা হয়" } }
    ], exampleSentence: { jp: "ビョという おとは あまり つかいません。", reading: "Byo to iu oto wa amari tsukaimasen.", meanings: { en: "The sound 'byo' is not used much.", bn: "'ব্যো' ধ্বনিটি খুব একটা ব্যবহৃত হয় না।" } } },
    "ピャ": { nameBn: "পিয়া", examples: [
        { word: "ピャ", reading: "pya", meanings: { en: "Rare katakana yōon sound (no common loanword uses it)", bn: "বিরল কাতাকানা য়োওন ধ্বনি (কোনো প্রচলিত ঋণশব্দে ব্যবহৃত হয় না)" } },
        { word: "はっぴゃく (hiragana example)", reading: "happyaku", meanings: { en: "Eight hundred - the hiragana ぴゃ sound does appear in numbers", bn: "আটশ - সংখ্যায় হিরাগানা ぴゃ ধ্বনিটি পাওয়া যায়" } },
        { word: "ピ + ヤ (breakdown)", reading: "pi + ya", meanings: { en: "Written by combining ピ with a small ヤ", bn: "ছোট ヤ-এর সাথে ピ যুক্ত করে লেখা হয়" } }
    ], exampleSentence: { jp: "ピャという おとは めずらしいです。", reading: "Pya to iu oto wa mezurashii desu.", meanings: { en: "The sound 'pya' is rare.", bn: "'প্যা' ধ্বনিটি বিরল।" } } },
    "ピュ": { nameBn: "পিউ", examples: [
        { word: "ピュア", reading: "pyua", meanings: { en: "Pure", bn: "নির্মল/খাঁটি" } },
        { word: "コンピューター", reading: "konpyuutaa", meanings: { en: "Computer", bn: "কম্পিউটার" } },
        { word: "ピューマ", reading: "pyuuma", meanings: { en: "Puma (animal)", bn: "পুমা (প্রাণী)" } }
    ], exampleSentence: { jp: "かのじょは ピュアです。", reading: "Kanojo wa pyua desu.", meanings: { en: "She is pure(-hearted).", bn: "সে মনের দিক থেকে নির্মল।" } } },
    "ピョ": { nameBn: "পিয়ো", examples: [
        { word: "ピョンピョン", reading: "pyonpyon", meanings: { en: "Hopping (onomatopoeia)", bn: "লাফানো (ধ্বন্যাত্মক)" } },
        { word: "ピョ (めずらしい おと)", reading: "pyo", meanings: { en: "Mostly appears in onomatopoeia like hopping", bn: "বেশিরভাগ ক্ষেত্রে লাফানোর মতো ধ্বন্যাত্মক শব্দে ব্যবহৃত হয়" } },
        { word: "ピョコン", reading: "pyokon", meanings: { en: "Quick bow / bob (onomatopoeia)", bn: "দ্রুত মাথা নোয়ানোর শব্দ (ধ্বন্যাত্মক)" } }
    ], exampleSentence: { jp: "カエルが ピョンピョン はねます。", reading: "Kaeru ga pyonpyon hanemasu.", meanings: { en: "The frog hops.", bn: "ব্যাঙটি লাফায়।" } } }
};

if (typeof module !== "undefined" && module.exports) { module.exports = kanaDetailData; }
