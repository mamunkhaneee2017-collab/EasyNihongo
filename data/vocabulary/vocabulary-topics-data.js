/* ==========================================
   VOCABULARY TOPICS DATA
   Subject-based word lists, independent of
   JLPT level — browse/reference only in this
   pass (no mark-as-learned/progress tracking,
   per the confirmed v1 scope). Flat array, no
   backend indexing needed at all.
========================================== */

const vocabularyTopicsData = [
    {
        id: "everyday",
        title: "Everyday Life",
        icon: "fa-solid fa-house",
        items: [
            { word: "起きる", reading: "okiru", meanings: { en: "To wake up", bn: "ঘুম থেকে ওঠা" } },
            { word: "寝る", reading: "neru", meanings: { en: "To sleep", bn: "ঘুমানো" } },
            { word: "食べる", reading: "taberu", meanings: { en: "To eat", bn: "খাওয়া" } },
            { word: "飲む", reading: "nomu", meanings: { en: "To drink", bn: "পান করা" } },
            { word: "歩く", reading: "aruku", meanings: { en: "To walk", bn: "হাঁটা" } },
            { word: "話す", reading: "hanasu", meanings: { en: "To speak", bn: "কথা বলা" } },
            { word: "読む", reading: "yomu", meanings: { en: "To read", bn: "পড়া" } },
            { word: "書く", reading: "kaku", meanings: { en: "To write", bn: "লেখা" } },
            { word: "見る", reading: "miru", meanings: { en: "To see / watch", bn: "দেখা" } },
            { word: "聞く", reading: "kiku", meanings: { en: "To listen / hear", bn: "শোনা" } },
            { word: "買う", reading: "kau", meanings: { en: "To buy", bn: "কেনা" } },
            { word: "働く", reading: "hataraku", meanings: { en: "To work", bn: "কাজ করা" } }
        ]
    },
    {
        id: "kitchen",
        title: "Kitchen",
        icon: "fa-solid fa-kitchen-set",
        items: [
            { word: "台所", reading: "daidokoro", meanings: { en: "Kitchen", bn: "রান্নাঘর" } },
            { word: "冷蔵庫", reading: "reizouko", meanings: { en: "Refrigerator", bn: "ফ্রিজ" } },
            { word: "コンロ", reading: "konro", meanings: { en: "Stove", bn: "চুলা" } },
            { word: "電子レンジ", reading: "denshi renji", meanings: { en: "Microwave", bn: "মাইক্রোওয়েভ" } },
            { word: "鍋", reading: "nabe", meanings: { en: "Pot", bn: "হাঁড়ি" } },
            { word: "フライパン", reading: "furaipan", meanings: { en: "Frying pan", bn: "ফ্রাইং প্যান" } },
            { word: "皿", reading: "sara", meanings: { en: "Plate", bn: "থালা" } },
            { word: "コップ", reading: "koppu", meanings: { en: "Cup / glass", bn: "গ্লাস" } },
            { word: "箸", reading: "hashi", meanings: { en: "Chopsticks", bn: "চপস্টিক" } },
            { word: "スプーン", reading: "supuun", meanings: { en: "Spoon", bn: "চামচ" } },
            { word: "フォーク", reading: "fooku", meanings: { en: "Fork", bn: "কাঁটাচামচ" } },
            { word: "包丁", reading: "houchou", meanings: { en: "Kitchen knife", bn: "ছুরি" } }
        ]
    },
    {
        id: "games",
        title: "Games & Hobbies",
        icon: "fa-solid fa-gamepad",
        items: [
            { word: "ゲーム", reading: "geemu", meanings: { en: "Game", bn: "খেলা (গেম)" } },
            { word: "遊ぶ", reading: "asobu", meanings: { en: "To play", bn: "খেলা করা" } },
            { word: "カード", reading: "kaado", meanings: { en: "Card", bn: "কার্ড" } },
            { word: "ボール", reading: "booru", meanings: { en: "Ball", bn: "বল" } },
            { word: "音楽", reading: "ongaku", meanings: { en: "Music", bn: "সঙ্গীত" } },
            { word: "映画", reading: "eiga", meanings: { en: "Movie", bn: "চলচ্চিত্র" } },
            { word: "絵", reading: "e", meanings: { en: "Picture / drawing", bn: "ছবি" } },
            { word: "写真", reading: "shashin", meanings: { en: "Photo", bn: "ফটো" } },
            { word: "本", reading: "hon", meanings: { en: "Book", bn: "বই" } },
            { word: "スポーツ", reading: "supootsu", meanings: { en: "Sports", bn: "খেলাধুলা" } },
            { word: "旅行", reading: "ryokou", meanings: { en: "Travel", bn: "ভ্রমণ" } },
            { word: "趣味", reading: "shumi", meanings: { en: "Hobby", bn: "শখ" } }
        ]
    },
    {
        id: "farm",
        title: "Farm & Nature",
        icon: "fa-solid fa-tractor",
        items: [
            { word: "農場", reading: "noujou", meanings: { en: "Farm", bn: "খামার" } },
            { word: "野菜", reading: "yasai", meanings: { en: "Vegetable", bn: "সবজি" } },
            { word: "果物", reading: "kudamono", meanings: { en: "Fruit", bn: "ফল" } },
            { word: "米", reading: "kome", meanings: { en: "Rice", bn: "চাল" } },
            { word: "牛", reading: "ushi", meanings: { en: "Cow", bn: "গরু" } },
            { word: "馬", reading: "uma", meanings: { en: "Horse", bn: "ঘোড়া" } },
            { word: "鳥", reading: "tori", meanings: { en: "Bird", bn: "পাখি" } },
            { word: "魚", reading: "sakana", meanings: { en: "Fish", bn: "মাছ" } },
            { word: "木", reading: "ki", meanings: { en: "Tree", bn: "গাছ" } },
            { word: "花", reading: "hana", meanings: { en: "Flower", bn: "ফুল" } },
            { word: "山", reading: "yama", meanings: { en: "Mountain", bn: "পাহাড়" } },
            { word: "川", reading: "kawa", meanings: { en: "River", bn: "নদী" } }
        ]
    },
    {
        id: "it",
        title: "IT & Technology",
        icon: "fa-solid fa-laptop",
        items: [
            { word: "コンピューター", reading: "konpyuutaa", meanings: { en: "Computer", bn: "কম্পিউটার" } },
            { word: "パソコン", reading: "pasokon", meanings: { en: "Personal computer", bn: "পিসি" } },
            { word: "インターネット", reading: "intaanetto", meanings: { en: "Internet", bn: "ইন্টারনেট" } },
            { word: "スマホ", reading: "sumaho", meanings: { en: "Smartphone", bn: "স্মার্টফোন" } },
            { word: "メール", reading: "meeru", meanings: { en: "Email", bn: "ইমেইল" } },
            { word: "パスワード", reading: "pasuwaado", meanings: { en: "Password", bn: "পাসওয়ার্ড" } },
            { word: "画面", reading: "gamen", meanings: { en: "Screen", bn: "স্ক্রিন" } },
            { word: "キーボード", reading: "kiiboodo", meanings: { en: "Keyboard", bn: "কীবোর্ড" } },
            { word: "アプリ", reading: "apuri", meanings: { en: "App", bn: "অ্যাপ" } },
            { word: "充電", reading: "juuden", meanings: { en: "Charging (battery)", bn: "চার্জ" } },
            { word: "Wi-Fi", reading: "waifai", meanings: { en: "Wi-Fi", bn: "ওয়াইফাই" } },
            { word: "データ", reading: "deeta", meanings: { en: "Data", bn: "ডেটা" } }
        ]
    },
    {
        id: "hospital",
        title: "Hospital & Health",
        icon: "fa-solid fa-hospital",
        items: [
            { word: "病院", reading: "byouin", meanings: { en: "Hospital", bn: "হাসপাতাল" } },
            { word: "医者", reading: "isha", meanings: { en: "Doctor", bn: "ডাক্তার" } },
            { word: "看護師", reading: "kangoshi", meanings: { en: "Nurse", bn: "নার্স" } },
            { word: "薬", reading: "kusuri", meanings: { en: "Medicine", bn: "ওষুধ" } },
            { word: "熱", reading: "netsu", meanings: { en: "Fever", bn: "জ্বর" } },
            { word: "頭痛", reading: "zutsuu", meanings: { en: "Headache", bn: "মাথাব্যথা" } },
            { word: "痛い", reading: "itai", meanings: { en: "Painful", bn: "ব্যথাযুক্ত" } },
            { word: "風邪", reading: "kaze", meanings: { en: "A cold (illness)", bn: "সর্দি-কাশি" } },
            { word: "注射", reading: "chuusha", meanings: { en: "Injection", bn: "ইনজেকশন" } },
            { word: "検査", reading: "kensa", meanings: { en: "Examination / test", bn: "পরীক্ষা (চিকিৎসা)" } },
            { word: "薬局", reading: "yakkyoku", meanings: { en: "Pharmacy", bn: "ফার্মেসি" } },
            { word: "具合", reading: "guai", meanings: { en: "Condition (health)", bn: "শারীরিক অবস্থা" } }
        ]
    },
    {
        id: "hotel",
        title: "Hotel & Travel",
        icon: "fa-solid fa-hotel",
        items: [
            { word: "ホテル", reading: "hoteru", meanings: { en: "Hotel", bn: "হোটেল" } },
            { word: "予約", reading: "yoyaku", meanings: { en: "Reservation", bn: "বুকিং" } },
            { word: "部屋", reading: "heya", meanings: { en: "Room", bn: "কক্ষ" } },
            { word: "フロント", reading: "furonto", meanings: { en: "Front desk", bn: "ফ্রন্ট ডেস্ক" } },
            { word: "鍵", reading: "kagi", meanings: { en: "Key", bn: "চাবি" } },
            { word: "荷物", reading: "nimotsu", meanings: { en: "Luggage", bn: "মালামাল" } },
            { word: "チェックイン", reading: "chekku in", meanings: { en: "Check-in", bn: "চেক-ইন" } },
            { word: "チェックアウト", reading: "chekku auto", meanings: { en: "Check-out", bn: "চেক-আউট" } },
            { word: "宿泊", reading: "shukuhaku", meanings: { en: "Lodging / stay", bn: "থাকার ব্যবস্থা" } },
            { word: "パスポート", reading: "pasupooto", meanings: { en: "Passport", bn: "পাসপোর্ট" } },
            { word: "観光", reading: "kankou", meanings: { en: "Sightseeing", bn: "ভ্রমণ (দর্শনীয় স্থান)" } },
            { word: "空港", reading: "kuukou", meanings: { en: "Airport", bn: "বিমানবন্দর" } }
        ]
    },
    {
        id: "convenience-store",
        title: "Convenience Store",
        icon: "fa-solid fa-store",
        items: [
            { word: "コンビニ", reading: "konbini", meanings: { en: "Convenience store", bn: "কনভিনিয়েন্স স্টোর" } },
            { word: "レジ", reading: "reji", meanings: { en: "Cash register / checkout", bn: "ক্যাশ কাউন্টার" } },
            { word: "弁当", reading: "bentou", meanings: { en: "Boxed lunch", bn: "বক্স লাঞ্চ" } },
            { word: "おにぎり", reading: "onigiri", meanings: { en: "Rice ball", bn: "রাইস বল" } },
            { word: "飲み物", reading: "nomimono", meanings: { en: "Drink", bn: "পানীয়" } },
            { word: "お菓子", reading: "okashi", meanings: { en: "Snack / sweets", bn: "নাস্তা/মিষ্টি" } },
            { word: "袋", reading: "fukuro", meanings: { en: "Bag", bn: "ব্যাগ" } },
            { word: "領収書", reading: "ryoushuusho", meanings: { en: "Receipt", bn: "রসিদ" } },
            { word: "店員", reading: "ten'in", meanings: { en: "Store clerk", bn: "দোকান কর্মী" } },
            { word: "ATM", reading: "eetiiemu", meanings: { en: "ATM", bn: "এটিএম" } },
            { word: "雑誌", reading: "zasshi", meanings: { en: "Magazine", bn: "ম্যাগাজিন" } },
            { word: "電子マネー", reading: "denshi manee", meanings: { en: "Electronic money", bn: "ইলেকট্রনিক মানি" } }
        ]
    },
    {
        id: "supermarket",
        title: "Supermarket",
        icon: "fa-solid fa-cart-shopping",
        items: [
            { word: "スーパー", reading: "suupaa", meanings: { en: "Supermarket", bn: "সুপারমার্কেট" } },
            { word: "買い物", reading: "kaimono", meanings: { en: "Shopping", bn: "কেনাকাটা" } },
            { word: "カート", reading: "kaato", meanings: { en: "Shopping cart", bn: "শপিং কার্ট" } },
            { word: "レジ袋", reading: "rejibukuro", meanings: { en: "Plastic shopping bag", bn: "প্লাস্টিক ব্যাগ" } },
            { word: "肉", reading: "niku", meanings: { en: "Meat", bn: "মাংস" } },
            { word: "魚", reading: "sakana", meanings: { en: "Fish", bn: "মাছ" } },
            { word: "卵", reading: "tamago", meanings: { en: "Egg", bn: "ডিম" } },
            { word: "牛乳", reading: "gyuunyuu", meanings: { en: "Milk", bn: "দুধ" } },
            { word: "パン", reading: "pan", meanings: { en: "Bread", bn: "রুটি" } },
            { word: "値段", reading: "nedan", meanings: { en: "Price", bn: "দাম" } },
            { word: "セール", reading: "seeru", meanings: { en: "Sale", bn: "সেল" } },
            { word: "割引", reading: "waribiki", meanings: { en: "Discount", bn: "ছাড়" } }
        ]
    }
];

if (typeof module !== "undefined" && module.exports) { module.exports = vocabularyTopicsData; }
