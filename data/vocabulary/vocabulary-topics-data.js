/* ==========================================
   VOCABULARY TOPICS DATA
   Subject-based word lists, independent of
   JLPT level — browse/reference only in this
   pass (no mark-as-learned/progress tracking,
   per the confirmed v1 scope). Flat array, no
   backend indexing needed at all.

   `reading` is HIRAGANA furigana, not romaji —
   see data/grammar/grammar-data.js header for
   the full site-wide convention. Words already
   written entirely in kana (hiragana or
   katakana, e.g. コンビニ, おにぎり) carry no
   `reading` field at all: a kana gloss over
   kana is redundant, same as real textbooks
   never furigana-gloss kana.
========================================== */

const vocabularyTopicsData = [
    {
        id: "everyday",
        title: "Everyday Life",
        icon: "fa-solid fa-house",
        items: [
            { word: "起きる", reading: "おきる", meanings: { en: "To wake up", bn: "ঘুম থেকে ওঠা" } },
            { word: "寝る", reading: "ねる", meanings: { en: "To sleep", bn: "ঘুমানো" } },
            { word: "食べる", reading: "たべる", meanings: { en: "To eat", bn: "খাওয়া" } },
            { word: "飲む", reading: "のむ", meanings: { en: "To drink", bn: "পান করা" } },
            { word: "歩く", reading: "あるく", meanings: { en: "To walk", bn: "হাঁটা" } },
            { word: "話す", reading: "はなす", meanings: { en: "To speak", bn: "কথা বলা" } },
            { word: "読む", reading: "よむ", meanings: { en: "To read", bn: "পড়া" } },
            { word: "書く", reading: "かく", meanings: { en: "To write", bn: "লেখা" } },
            { word: "見る", reading: "みる", meanings: { en: "To see / watch", bn: "দেখা" } },
            { word: "聞く", reading: "きく", meanings: { en: "To listen / hear", bn: "শোনা" } },
            { word: "買う", reading: "かう", meanings: { en: "To buy", bn: "কেনা" } },
            { word: "働く", reading: "はたらく", meanings: { en: "To work", bn: "কাজ করা" } }
        ]
    },
    {
        id: "kitchen",
        title: "Kitchen",
        icon: "fa-solid fa-kitchen-set",
        items: [
            { word: "台所", reading: "だいどころ", meanings: { en: "Kitchen", bn: "রান্নাঘর" } },
            { word: "冷蔵庫", reading: "れいぞうこ", meanings: { en: "Refrigerator", bn: "ফ্রিজ" } },
            { word: "コンロ", meanings: { en: "Stove", bn: "চুলা" } },
            { word: "電子レンジ", reading: "でんしレンジ", meanings: { en: "Microwave", bn: "মাইক্রোওয়েভ" } },
            { word: "鍋", reading: "なべ", meanings: { en: "Pot", bn: "হাঁড়ি" } },
            { word: "フライパン", meanings: { en: "Frying pan", bn: "ফ্রাইং প্যান" } },
            { word: "皿", reading: "さら", meanings: { en: "Plate", bn: "থালা" } },
            { word: "コップ", meanings: { en: "Cup / glass", bn: "গ্লাস" } },
            { word: "箸", reading: "はし", meanings: { en: "Chopsticks", bn: "চপস্টিক" } },
            { word: "スプーン", meanings: { en: "Spoon", bn: "চামচ" } },
            { word: "フォーク", meanings: { en: "Fork", bn: "কাঁটাচামচ" } },
            { word: "包丁", reading: "ほうちょう", meanings: { en: "Kitchen knife", bn: "ছুরি" } }
        ]
    },
    {
        id: "games",
        title: "Games & Hobbies",
        icon: "fa-solid fa-gamepad",
        items: [
            { word: "ゲーム", meanings: { en: "Game", bn: "খেলা (গেম)" } },
            { word: "遊ぶ", reading: "あそぶ", meanings: { en: "To play", bn: "খেলা করা" } },
            { word: "カード", meanings: { en: "Card", bn: "কার্ড" } },
            { word: "ボール", meanings: { en: "Ball", bn: "বল" } },
            { word: "音楽", reading: "おんがく", meanings: { en: "Music", bn: "সঙ্গীত" } },
            { word: "映画", reading: "えいが", meanings: { en: "Movie", bn: "চলচ্চিত্র" } },
            { word: "絵", reading: "え", meanings: { en: "Picture / drawing", bn: "ছবি" } },
            { word: "写真", reading: "しゃしん", meanings: { en: "Photo", bn: "ফটো" } },
            { word: "本", reading: "ほん", meanings: { en: "Book", bn: "বই" } },
            { word: "スポーツ", meanings: { en: "Sports", bn: "খেলাধুলা" } },
            { word: "旅行", reading: "りょこう", meanings: { en: "Travel", bn: "ভ্রমণ" } },
            { word: "趣味", reading: "しゅみ", meanings: { en: "Hobby", bn: "শখ" } }
        ]
    },
    {
        id: "farm",
        title: "Farm & Nature",
        icon: "fa-solid fa-tractor",
        items: [
            { word: "農場", reading: "のうじょう", meanings: { en: "Farm", bn: "খামার" } },
            { word: "野菜", reading: "やさい", meanings: { en: "Vegetable", bn: "সবজি" } },
            { word: "果物", reading: "くだもの", meanings: { en: "Fruit", bn: "ফল" } },
            { word: "米", reading: "こめ", meanings: { en: "Rice", bn: "চাল" } },
            { word: "牛", reading: "うし", meanings: { en: "Cow", bn: "গরু" } },
            { word: "馬", reading: "うま", meanings: { en: "Horse", bn: "ঘোড়া" } },
            { word: "鳥", reading: "とり", meanings: { en: "Bird", bn: "পাখি" } },
            { word: "魚", reading: "さかな", meanings: { en: "Fish", bn: "মাছ" } },
            { word: "木", reading: "き", meanings: { en: "Tree", bn: "গাছ" } },
            { word: "花", reading: "はな", meanings: { en: "Flower", bn: "ফুল" } },
            { word: "山", reading: "やま", meanings: { en: "Mountain", bn: "পাহাড়" } },
            { word: "川", reading: "かわ", meanings: { en: "River", bn: "নদী" } }
        ]
    },
    {
        id: "it",
        title: "IT & Technology",
        icon: "fa-solid fa-laptop",
        items: [
            { word: "コンピューター", meanings: { en: "Computer", bn: "কম্পিউটার" } },
            { word: "パソコン", meanings: { en: "Personal computer", bn: "পিসি" } },
            { word: "インターネット", meanings: { en: "Internet", bn: "ইন্টারনেট" } },
            { word: "スマホ", meanings: { en: "Smartphone", bn: "স্মার্টফোন" } },
            { word: "メール", meanings: { en: "Email", bn: "ইমেইল" } },
            { word: "パスワード", meanings: { en: "Password", bn: "পাসওয়ার্ড" } },
            { word: "画面", reading: "がめん", meanings: { en: "Screen", bn: "স্ক্রিন" } },
            { word: "キーボード", meanings: { en: "Keyboard", bn: "কীবোর্ড" } },
            { word: "アプリ", meanings: { en: "App", bn: "অ্যাপ" } },
            { word: "充電", reading: "じゅうでん", meanings: { en: "Charging (battery)", bn: "চার্জ" } },
            { word: "Wi-Fi", meanings: { en: "Wi-Fi", bn: "ওয়াইফাই" } },
            { word: "データ", meanings: { en: "Data", bn: "ডেটা" } }
        ]
    },
    {
        id: "hospital",
        title: "Hospital & Health",
        icon: "fa-solid fa-hospital",
        items: [
            { word: "病院", reading: "びょういん", meanings: { en: "Hospital", bn: "হাসপাতাল" } },
            { word: "医者", reading: "いしゃ", meanings: { en: "Doctor", bn: "ডাক্তার" } },
            { word: "看護師", reading: "かんごし", meanings: { en: "Nurse", bn: "নার্স" } },
            { word: "薬", reading: "くすり", meanings: { en: "Medicine", bn: "ওষুধ" } },
            { word: "熱", reading: "ねつ", meanings: { en: "Fever", bn: "জ্বর" } },
            { word: "頭痛", reading: "ずつう", meanings: { en: "Headache", bn: "মাথাব্যথা" } },
            { word: "痛い", reading: "いたい", meanings: { en: "Painful", bn: "ব্যথাযুক্ত" } },
            { word: "風邪", reading: "かぜ", meanings: { en: "A cold (illness)", bn: "সর্দি-কাশি" } },
            { word: "注射", reading: "ちゅうしゃ", meanings: { en: "Injection", bn: "ইনজেকশন" } },
            { word: "検査", reading: "けんさ", meanings: { en: "Examination / test", bn: "পরীক্ষা (চিকিৎসা)" } },
            { word: "薬局", reading: "やっきょく", meanings: { en: "Pharmacy", bn: "ফার্মেসি" } },
            { word: "具合", reading: "ぐあい", meanings: { en: "Condition (health)", bn: "শারীরিক অবস্থা" } }
        ]
    },
    {
        id: "hotel",
        title: "Hotel & Travel",
        icon: "fa-solid fa-hotel",
        items: [
            { word: "ホテル", meanings: { en: "Hotel", bn: "হোটেল" } },
            { word: "予約", reading: "よやく", meanings: { en: "Reservation", bn: "বুকিং" } },
            { word: "部屋", reading: "へや", meanings: { en: "Room", bn: "কক্ষ" } },
            { word: "フロント", meanings: { en: "Front desk", bn: "ফ্রন্ট ডেস্ক" } },
            { word: "鍵", reading: "かぎ", meanings: { en: "Key", bn: "চাবি" } },
            { word: "荷物", reading: "にもつ", meanings: { en: "Luggage", bn: "মালামাল" } },
            { word: "チェックイン", meanings: { en: "Check-in", bn: "চেক-ইন" } },
            { word: "チェックアウト", meanings: { en: "Check-out", bn: "চেক-আউট" } },
            { word: "宿泊", reading: "しゅくはく", meanings: { en: "Lodging / stay", bn: "থাকার ব্যবস্থা" } },
            { word: "パスポート", meanings: { en: "Passport", bn: "পাসপোর্ট" } },
            { word: "観光", reading: "かんこう", meanings: { en: "Sightseeing", bn: "ভ্রমণ (দর্শনীয় স্থান)" } },
            { word: "空港", reading: "くうこう", meanings: { en: "Airport", bn: "বিমানবন্দর" } }
        ]
    },
    {
        id: "convenience-store",
        title: "Convenience Store",
        icon: "fa-solid fa-store",
        items: [
            { word: "コンビニ", meanings: { en: "Convenience store", bn: "কনভিনিয়েন্স স্টোর" } },
            { word: "レジ", meanings: { en: "Cash register / checkout", bn: "ক্যাশ কাউন্টার" } },
            { word: "弁当", reading: "べんとう", meanings: { en: "Boxed lunch", bn: "বক্স লাঞ্চ" } },
            { word: "おにぎり", meanings: { en: "Rice ball", bn: "রাইস বল" } },
            { word: "飲み物", reading: "のみもの", meanings: { en: "Drink", bn: "পানীয়" } },
            { word: "お菓子", reading: "おかし", meanings: { en: "Snack / sweets", bn: "নাস্তা/মিষ্টি" } },
            { word: "袋", reading: "ふくろ", meanings: { en: "Bag", bn: "ব্যাগ" } },
            { word: "領収書", reading: "りょうしゅうしょ", meanings: { en: "Receipt", bn: "রসিদ" } },
            { word: "店員", reading: "てんいん", meanings: { en: "Store clerk", bn: "দোকান কর্মী" } },
            { word: "ATM", meanings: { en: "ATM", bn: "এটিএম" } },
            { word: "雑誌", reading: "ざっし", meanings: { en: "Magazine", bn: "ম্যাগাজিন" } },
            { word: "電子マネー", reading: "でんしマネー", meanings: { en: "Electronic money", bn: "ইলেকট্রনিক মানি" } }
        ]
    },
    {
        id: "supermarket",
        title: "Supermarket",
        icon: "fa-solid fa-cart-shopping",
        items: [
            { word: "スーパー", meanings: { en: "Supermarket", bn: "সুপারমার্কেট" } },
            { word: "買い物", reading: "かいもの", meanings: { en: "Shopping", bn: "কেনাকাটা" } },
            { word: "カート", meanings: { en: "Shopping cart", bn: "শপিং কার্ট" } },
            { word: "レジ袋", reading: "レジぶくろ", meanings: { en: "Plastic shopping bag", bn: "প্লাস্টিক ব্যাগ" } },
            { word: "肉", reading: "にく", meanings: { en: "Meat", bn: "মাংস" } },
            { word: "魚", reading: "さかな", meanings: { en: "Fish", bn: "মাছ" } },
            { word: "卵", reading: "たまご", meanings: { en: "Egg", bn: "ডিম" } },
            { word: "牛乳", reading: "ぎゅうにゅう", meanings: { en: "Milk", bn: "দুধ" } },
            { word: "パン", meanings: { en: "Bread", bn: "রুটি" } },
            { word: "値段", reading: "ねだん", meanings: { en: "Price", bn: "দাম" } },
            { word: "セール", meanings: { en: "Sale", bn: "সেল" } },
            { word: "割引", reading: "わりびき", meanings: { en: "Discount", bn: "ছাড়" } }
        ]
    }
];

if (typeof module !== "undefined" && module.exports) { module.exports = vocabularyTopicsData; }
