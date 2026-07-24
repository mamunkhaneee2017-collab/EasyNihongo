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
    },
    {
        id: "countries-languages",
        title: "Countries & Languages",
        icon: "fa-solid fa-earth-asia",
        items: [
            { word: "アメリカ", meanings: { en: "U.S.A.", bn: "যুক্তরাষ্ট্র" } },
            { word: "イギリス", meanings: { en: "U.K.", bn: "যুক্তরাজ্য" } },
            { word: "中国", reading: "ちゅうごく", meanings: { en: "China", bn: "চীন" } },
            { word: "韓国", reading: "かんこく", meanings: { en: "South Korea", bn: "দক্ষিণ কোরিয়া" } },
            { word: "インド", meanings: { en: "India", bn: "ভারত" } },
            { word: "インドネシア", meanings: { en: "Indonesia", bn: "ইন্দোনেশিয়া" } },
            { word: "タイ", meanings: { en: "Thailand", bn: "থাইল্যান্ড" } },
            { word: "ドイツ", meanings: { en: "Germany", bn: "জার্মানি" } },
            { word: "フランス", meanings: { en: "France", bn: "ফ্রান্স" } },
            { word: "ブラジル", meanings: { en: "Brazil", bn: "ব্রাজিল" } },
            { word: "イタリア", meanings: { en: "Italy", bn: "ইতালি" } },
            { word: "スペイン", meanings: { en: "Spain", bn: "স্পেন" } },
            { word: "ロシア", meanings: { en: "Russia", bn: "রাশিয়া" } },
            { word: "英語", reading: "えいご", meanings: { en: "English (language)", bn: "ইংরেজি ভাষা" } },
            { word: "日本語", reading: "にほんご", meanings: { en: "Japanese (language)", bn: "জাপানি ভাষা" } },
            { word: "中国語", reading: "ちゅうごくご", meanings: { en: "Chinese (language)", bn: "চীনা ভাষা" } }
        ]
    },
    {
        id: "department-store",
        title: "Department Store",
        icon: "fa-solid fa-building",
        items: [
            { word: "屋上", reading: "おくじょう", meanings: { en: "Rooftop", bn: "ছাদ" } },
            { word: "時計", reading: "とけい", meanings: { en: "Watch / clock", bn: "ঘড়ি" } },
            { word: "眼鏡", reading: "めがね", meanings: { en: "Glasses", bn: "চশমা" } },
            { word: "カメラ", meanings: { en: "Camera", bn: "ক্যামেরা" } },
            { word: "子供服", reading: "こどもふく", meanings: { en: "Children's clothes", bn: "শিশুদের পোশাক" } },
            { word: "おもちゃ", meanings: { en: "Toy", bn: "খেলনা" } },
            { word: "文房具", reading: "ぶんぼうぐ", meanings: { en: "Stationery", bn: "স্টেশনারি" } },
            { word: "家具", reading: "かぐ", meanings: { en: "Furniture", bn: "আসবাবপত্র" } },
            { word: "食器", reading: "しょっき", meanings: { en: "Tableware", bn: "বাসনপত্র" } },
            { word: "電気製品", reading: "でんきせいひん", meanings: { en: "Electrical appliances", bn: "বৈদ্যুতিক সামগ্রী" } },
            { word: "紳士服", reading: "しんしふく", meanings: { en: "Menswear", bn: "পুরুষদের পোশাক" } },
            { word: "婦人服", reading: "ふじんふく", meanings: { en: "Ladies' wear", bn: "মহিলাদের পোশাক" } },
            { word: "靴", reading: "くつ", meanings: { en: "Shoes", bn: "জুতা" } },
            { word: "化粧品", reading: "けしょうひん", meanings: { en: "Cosmetics", bn: "প্রসাধনী" } },
            { word: "食料品", reading: "しょくりょうひん", meanings: { en: "Groceries", bn: "মুদি সামগ্রী" } },
            { word: "駐車場", reading: "ちゅうしゃじょう", meanings: { en: "Parking lot", bn: "পার্কিং লট" } }
        ]
    },
    {
        id: "vegetables-fruits",
        title: "Vegetables & Fruits",
        icon: "fa-solid fa-carrot",
        items: [
            { word: "きゅうり", meanings: { en: "Cucumber", bn: "শসা" } },
            { word: "トマト", meanings: { en: "Tomato", bn: "টমেটো" } },
            { word: "なす", meanings: { en: "Eggplant", bn: "বেগুন" } },
            { word: "キャベツ", meanings: { en: "Cabbage", bn: "বাঁধাকপি" } },
            { word: "たまねぎ", meanings: { en: "Onion", bn: "পেঁয়াজ" } },
            { word: "にんじん", meanings: { en: "Carrot", bn: "গাজর" } },
            { word: "じゃがいも", meanings: { en: "Potato", bn: "আলু" } },
            { word: "レタス", meanings: { en: "Lettuce", bn: "লেটুস" } },
            { word: "いちご", meanings: { en: "Strawberry", bn: "স্ট্রবেরি" } },
            { word: "もも", meanings: { en: "Peach", bn: "পীচ" } },
            { word: "すいか", meanings: { en: "Watermelon", bn: "তরমুজ" } },
            { word: "ぶどう", meanings: { en: "Grape", bn: "আঙুর" } },
            { word: "みかん", meanings: { en: "Mandarin orange", bn: "কমলা" } },
            { word: "バナナ", meanings: { en: "Banana", bn: "কলা" } }
        ]
    },
    {
        id: "meat-fish",
        title: "Meat & Fish",
        icon: "fa-solid fa-drumstick-bite",
        items: [
            { word: "牛肉", reading: "ぎゅうにく", meanings: { en: "Beef", bn: "গরুর মাংস" } },
            { word: "鶏肉", reading: "とりにく", meanings: { en: "Chicken", bn: "মুরগির মাংস" } },
            { word: "豚肉", reading: "ぶたにく", meanings: { en: "Pork", bn: "শুকরের মাংস" } },
            { word: "ハム", meanings: { en: "Ham", bn: "হ্যাম" } },
            { word: "ソーセージ", meanings: { en: "Sausage", bn: "সসেজ" } },
            { word: "さけ", meanings: { en: "Salmon", bn: "স্যামন মাছ" } },
            { word: "まぐろ", meanings: { en: "Tuna", bn: "টুনা মাছ" } },
            { word: "えび", meanings: { en: "Shrimp", bn: "চিংড়ি" } },
            { word: "かに", meanings: { en: "Crab", bn: "কাঁকড়া" } },
            { word: "たこ", meanings: { en: "Octopus", bn: "অক্টোপাস" } }
        ]
    },
    {
        id: "color-taste",
        title: "Color & Taste",
        icon: "fa-solid fa-palette",
        items: [
            { word: "白", reading: "しろ", meanings: { en: "White", bn: "সাদা" } },
            { word: "黒", reading: "くろ", meanings: { en: "Black", bn: "কালো" } },
            { word: "赤", reading: "あか", meanings: { en: "Red", bn: "লাল" } },
            { word: "青", reading: "あお", meanings: { en: "Blue", bn: "নীল" } },
            { word: "緑", reading: "みどり", meanings: { en: "Green", bn: "সবুজ" } },
            { word: "紫", reading: "むらさき", meanings: { en: "Purple", bn: "বেগুনি" } },
            { word: "黄色", reading: "きいろ", meanings: { en: "Yellow", bn: "হলুদ" } },
            { word: "茶色", reading: "ちゃいろ", meanings: { en: "Brown", bn: "বাদামি" } },
            { word: "甘い", reading: "あまい", meanings: { en: "Sweet", bn: "মিষ্টি" } },
            { word: "辛い", reading: "からい", meanings: { en: "Spicy / hot", bn: "ঝাল" } },
            { word: "苦い", reading: "にがい", meanings: { en: "Bitter", bn: "তেতো" } },
            { word: "酸っぱい", reading: "すっぱい", meanings: { en: "Sour", bn: "টক" } },
            { word: "塩辛い", reading: "しおからい", meanings: { en: "Salty", bn: "নোনতা" } }
        ]
    },
    {
        id: "music-sports-movies",
        title: "Music, Sports & Movies",
        icon: "fa-solid fa-music",
        items: [
            { word: "ポップス", meanings: { en: "Pop (music)", bn: "পপ সঙ্গীত" } },
            { word: "ロック", meanings: { en: "Rock (music)", bn: "রক সঙ্গীত" } },
            { word: "ジャズ", meanings: { en: "Jazz", bn: "জ্যাজ" } },
            { word: "クラシック", meanings: { en: "Classical music", bn: "ধ্রুপদী সঙ্গীত" } },
            { word: "サッカー", meanings: { en: "Soccer", bn: "ফুটবল" } },
            { word: "野球", reading: "やきゅう", meanings: { en: "Baseball", bn: "বেসবল" } },
            { word: "テニス", meanings: { en: "Tennis", bn: "টেনিস" } },
            { word: "バスケットボール", meanings: { en: "Basketball", bn: "বাস্কেটবল" } },
            { word: "水泳", reading: "すいえい", meanings: { en: "Swimming", bn: "সাঁতার" } },
            { word: "ホラー", meanings: { en: "Horror (film)", bn: "ভৌতিক সিনেমা" } },
            { word: "アクション", meanings: { en: "Action (film)", bn: "অ্যাকশন সিনেমা" } },
            { word: "喜劇", reading: "きげき", meanings: { en: "Comedy (film)", bn: "কমেডি সিনেমা" } }
        ]
    },
    {
        id: "inside-house",
        title: "Inside the House",
        icon: "fa-solid fa-door-open",
        items: [
            { word: "玄関", reading: "げんかん", meanings: { en: "Entrance hall", bn: "প্রবেশপথ" } },
            { word: "居間", reading: "いま", meanings: { en: "Living room", bn: "বসার ঘর" } },
            { word: "寝室", reading: "しんしつ", meanings: { en: "Bedroom", bn: "শোবার ঘর" } },
            { word: "台所", reading: "だいどころ", meanings: { en: "Kitchen", bn: "রান্নাঘর" } },
            { word: "風呂場", reading: "ふろば", meanings: { en: "Bathroom", bn: "গোসলখানা" } },
            { word: "洗面所", reading: "せんめんじょ", meanings: { en: "Washroom", bn: "হাত-মুখ ধোয়ার ঘর" } },
            { word: "トイレ", meanings: { en: "Toilet", bn: "টয়লেট" } },
            { word: "廊下", reading: "ろうか", meanings: { en: "Hallway", bn: "করিডোর" } },
            { word: "ベランダ", meanings: { en: "Balcony", bn: "বারান্দা" } },
            { word: "庭", reading: "にわ", meanings: { en: "Garden", bn: "বাগান" } },
            { word: "押し入れ", reading: "おしいれ", meanings: { en: "Japanese-style closet", bn: "জাপানি স্টাইলের আলমারি" } },
            { word: "布団", reading: "ふとん", meanings: { en: "Futon (mattress & quilt)", bn: "জাপানি স্টাইলের বিছানা" } }
        ]
    },
    {
        id: "restaurant-menu",
        title: "Restaurant Menu",
        icon: "fa-solid fa-utensils",
        items: [
            { word: "定食", reading: "ていしょく", meanings: { en: "Set meal", bn: "সেট মিল" } },
            { word: "カレーライス", meanings: { en: "Curry and rice", bn: "কারি রাইস" } },
            { word: "ハンバーグ", meanings: { en: "Hamburg steak", bn: "হ্যামবার্গ স্টিক" } },
            { word: "サラダ", meanings: { en: "Salad", bn: "সালাদ" } },
            { word: "スープ", meanings: { en: "Soup", bn: "স্যুপ" } },
            { word: "スパゲティー", meanings: { en: "Spaghetti", bn: "স্প্যাগেটি" } },
            { word: "サンドウィッチ", meanings: { en: "Sandwich", bn: "স্যান্ডউইচ" } },
            { word: "うどん", meanings: { en: "Udon noodles", bn: "উদন নুডলস" } },
            { word: "そば", meanings: { en: "Soba noodles", bn: "সোবা নুডলস" } },
            { word: "ラーメン", meanings: { en: "Ramen", bn: "রামেন" } },
            { word: "すし", meanings: { en: "Sushi", bn: "সুশি" } },
            { word: "てんぷら", meanings: { en: "Tempura", bn: "টেম্পুরা" } },
            { word: "みそ汁", reading: "みそしる", meanings: { en: "Miso soup", bn: "মিসো স্যুপ" } }
        ]
    },
    {
        id: "town-places",
        title: "Places in Town",
        icon: "fa-solid fa-city",
        items: [
            { word: "博物館", reading: "はくぶつかん", meanings: { en: "Museum", bn: "জাদুঘর" } },
            { word: "美術館", reading: "びじゅつかん", meanings: { en: "Art museum", bn: "আর্ট মিউজিয়াম" } },
            { word: "図書館", reading: "としょかん", meanings: { en: "Library", bn: "গ্রন্থাগার" } },
            { word: "映画館", reading: "えいがかん", meanings: { en: "Movie theater", bn: "সিনেমা হল" } },
            { word: "動物園", reading: "どうぶつえん", meanings: { en: "Zoo", bn: "চিড়িয়াখানা" } },
            { word: "遊園地", reading: "ゆうえんち", meanings: { en: "Amusement park", bn: "বিনোদন পার্ক" } },
            { word: "お寺", reading: "おてら", meanings: { en: "Buddhist temple", bn: "বৌদ্ধ মন্দির" } },
            { word: "神社", reading: "じんじゃ", meanings: { en: "Shinto shrine", bn: "শিন্তো মন্দির" } },
            { word: "市役所", reading: "しやくしょ", meanings: { en: "City hall", bn: "পৌরসভা" } },
            { word: "警察署", reading: "けいさつしょ", meanings: { en: "Police station", bn: "থানা" } },
            { word: "消防署", reading: "しょうぼうしょ", meanings: { en: "Fire station", bn: "দমকল স্টেশন" } },
            { word: "大使館", reading: "たいしかん", meanings: { en: "Embassy", bn: "দূতাবাস" } }
        ]
    },
    {
        id: "occupations",
        title: "Occupations",
        icon: "fa-solid fa-briefcase",
        items: [
            { word: "公務員", reading: "こうむいん", meanings: { en: "Civil servant", bn: "সরকারি কর্মচারী" } },
            { word: "店員", reading: "てんいん", meanings: { en: "Shop clerk", bn: "দোকান কর্মী" } },
            { word: "調理師", reading: "ちょうりし", meanings: { en: "Cook", bn: "রাঁধুনি" } },
            { word: "理容師", reading: "りようし", meanings: { en: "Barber", bn: "নাপিত" } },
            { word: "弁護士", reading: "べんごし", meanings: { en: "Lawyer", bn: "আইনজীবী" } },
            { word: "運転手", reading: "うんてんしゅ", meanings: { en: "Driver", bn: "চালক" } },
            { word: "警察官", reading: "けいさつかん", meanings: { en: "Police officer", bn: "পুলিশ কর্মকর্তা" } },
            { word: "外交官", reading: "がいこうかん", meanings: { en: "Diplomat", bn: "কূটনীতিক" } },
            { word: "政治家", reading: "せいじか", meanings: { en: "Politician", bn: "রাজনীতিবিদ" } },
            { word: "画家", reading: "がか", meanings: { en: "Painter", bn: "চিত্রশিল্পী" } },
            { word: "作家", reading: "さっか", meanings: { en: "Author", bn: "লেখক" } },
            { word: "建築家", reading: "けんちくか", meanings: { en: "Architect", bn: "স্থপতি" } },
            { word: "デザイナー", meanings: { en: "Designer", bn: "ডিজাইনার" } },
            { word: "ジャーナリスト", meanings: { en: "Journalist", bn: "সাংবাদিক" } }
        ]
    },
    {
        id: "body-symptoms",
        title: "Body & Symptoms",
        icon: "fa-solid fa-user-injured",
        items: [
            { word: "頭", reading: "あたま", meanings: { en: "Head", bn: "মাথা" } },
            { word: "髪", reading: "かみ", meanings: { en: "Hair", bn: "চুল" } },
            { word: "顔", reading: "かお", meanings: { en: "Face", bn: "মুখ" } },
            { word: "目", reading: "め", meanings: { en: "Eye", bn: "চোখ" } },
            { word: "耳", reading: "みみ", meanings: { en: "Ear", bn: "কান" } },
            { word: "口", reading: "くち", meanings: { en: "Mouth", bn: "মুখগহ্বর" } },
            { word: "歯", reading: "は", meanings: { en: "Tooth", bn: "দাঁত" } },
            { word: "のど", meanings: { en: "Throat", bn: "গলা" } },
            { word: "手", reading: "て", meanings: { en: "Hand", bn: "হাত" } },
            { word: "足", reading: "あし", meanings: { en: "Leg / foot", bn: "পা" } },
            { word: "せきが出る", reading: "せきがでる", meanings: { en: "To have a cough", bn: "কাশি হওয়া" } },
            { word: "鼻水が出る", reading: "はなみずがでる", meanings: { en: "To have a runny nose", bn: "নাক দিয়ে পানি পড়া" } },
            { word: "めまいがする", meanings: { en: "To feel dizzy", bn: "মাথা ঘোরা" } }
        ]
    },
    {
        id: "physical-actions",
        title: "Physical Actions",
        icon: "fa-solid fa-person-running",
        items: [
            { word: "飛ぶ", reading: "とぶ", meanings: { en: "To fly", bn: "ওড়া" } },
            { word: "跳ぶ", reading: "とぶ", meanings: { en: "To jump", bn: "লাফানো" } },
            { word: "登る", reading: "のぼる", meanings: { en: "To climb", bn: "আরোহণ করা" } },
            { word: "走る", reading: "はしる", meanings: { en: "To run", bn: "দৌড়ানো" } },
            { word: "泳ぐ", reading: "およぐ", meanings: { en: "To swim", bn: "সাঁতার কাটা" } },
            { word: "転ぶ", reading: "ころぶ", meanings: { en: "To fall down", bn: "পড়ে যাওয়া" } },
            { word: "投げる", reading: "なげる", meanings: { en: "To throw", bn: "ছোঁড়া" } },
            { word: "引く", reading: "ひく", meanings: { en: "To pull", bn: "টানা" } },
            { word: "押す", reading: "おす", meanings: { en: "To push", bn: "ধাক্কা দেওয়া" } },
            { word: "曲げる", reading: "まげる", meanings: { en: "To bend", bn: "বাঁকানো" } },
            { word: "伸ばす", reading: "のばす", meanings: { en: "To extend / stretch", bn: "প্রসারিত করা" } }
        ]
    },
    {
        id: "traditional-culture",
        title: "Traditional Culture",
        icon: "fa-solid fa-torii-gate",
        items: [
            { word: "茶道", reading: "さどう", meanings: { en: "Tea ceremony", bn: "চা অনুষ্ঠান" } },
            { word: "華道", reading: "かどう", meanings: { en: "Flower arrangement", bn: "ফুল সাজানোর শিল্প" } },
            { word: "書道", reading: "しょどう", meanings: { en: "Calligraphy", bn: "ক্যালিগ্রাফি" } },
            { word: "歌舞伎", reading: "かぶき", meanings: { en: "Kabuki (theater)", bn: "কাবুকি নাট্যধারা" } },
            { word: "能", reading: "のう", meanings: { en: "Noh (theater)", bn: "নো নাট্যধারা" } },
            { word: "相撲", reading: "すもう", meanings: { en: "Sumo wrestling", bn: "সুমো কুস্তি" } },
            { word: "柔道", reading: "じゅうどう", meanings: { en: "Judo", bn: "জুডো" } },
            { word: "剣道", reading: "けんどう", meanings: { en: "Kendo", bn: "কেন্ডো" } },
            { word: "空手", reading: "からて", meanings: { en: "Karate", bn: "কারাতে" } },
            { word: "カラオケ", meanings: { en: "Karaoke", bn: "ক্যারাওকে" } },
            { word: "盆踊り", reading: "ぼんおどり", meanings: { en: "Bon dance", bn: "বন নৃত্য" } }
        ]
    },
    {
        id: "clothes",
        title: "Clothes",
        icon: "fa-solid fa-shirt",
        items: [
            { word: "スーツ", meanings: { en: "Suit", bn: "স্যুট" } },
            { word: "ワンピース", meanings: { en: "One-piece dress", bn: "ওয়ানপিস" } },
            { word: "上着", reading: "うわぎ", meanings: { en: "Jacket", bn: "জ্যাকেট" } },
            { word: "ズボン", meanings: { en: "Trousers / pants", bn: "প্যান্ট" } },
            { word: "スカート", meanings: { en: "Skirt", bn: "স্কার্ট" } },
            { word: "ブラウス", meanings: { en: "Blouse", bn: "ব্লাউজ" } },
            { word: "セーター", meanings: { en: "Sweater", bn: "সোয়েটার" } },
            { word: "下着", reading: "したぎ", meanings: { en: "Underwear", bn: "আন্ডারওয়্যার" } },
            { word: "くつした", meanings: { en: "Socks", bn: "মোজা" } },
            { word: "着物", reading: "きもの", meanings: { en: "Kimono", bn: "কিমোনো" } },
            { word: "ネクタイ", meanings: { en: "Necktie", bn: "টাই" } },
            { word: "ベルト", meanings: { en: "Belt", bn: "বেল্ট" } },
            { word: "手袋", reading: "てぶくろ", meanings: { en: "Gloves", bn: "দস্তানা" } }
        ]
    },
    {
        id: "road-traffic",
        title: "Road & Traffic",
        icon: "fa-solid fa-road",
        items: [
            { word: "歩道", reading: "ほどう", meanings: { en: "Sidewalk", bn: "ফুটপাত" } },
            { word: "車道", reading: "しゃどう", meanings: { en: "Road (for vehicles)", bn: "গাড়ির রাস্তা" } },
            { word: "高速道路", reading: "こうそくどうろ", meanings: { en: "Expressway", bn: "এক্সপ্রেসওয়ে" } },
            { word: "交差点", reading: "こうさてん", meanings: { en: "Intersection", bn: "মোড়" } },
            { word: "横断歩道", reading: "おうだんほどう", meanings: { en: "Pedestrian crossing", bn: "জেব্রা ক্রসিং" } },
            { word: "信号", reading: "しんごう", meanings: { en: "Traffic light", bn: "সিগন্যাল" } },
            { word: "坂", reading: "さか", meanings: { en: "Slope", bn: "ঢাল" } },
            { word: "踏切", reading: "ふみきり", meanings: { en: "Railroad crossing", bn: "রেলক্রসিং" } },
            { word: "ガソリンスタンド", meanings: { en: "Gas station", bn: "গ্যাস স্টেশন" } },
            { word: "駐車禁止", reading: "ちゅうしゃきんし", meanings: { en: "No parking", bn: "পার্কিং নিষেধ" } },
            { word: "一方通行", reading: "いっぽうつうこう", meanings: { en: "One way", bn: "একমুখী রাস্তা" } }
        ]
    }
];

if (typeof module !== "undefined" && module.exports) { module.exports = vocabularyTopicsData; }
