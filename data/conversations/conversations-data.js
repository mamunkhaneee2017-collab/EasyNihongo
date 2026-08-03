/* ==========================================
   CONVERSATIONS DATA — Level → Chapter → Dialogue
   One conversation per chapter, keyed by the same
   `id` slug used in vocabulary-data.js and
   grammar-data.js — each conversation is built
   from that chapter's own vocabulary and grammar
   points (plus material from earlier chapters),
   so it can be looked up by chapter id from
   js/pages/chapter.js regardless of chapter
   position/renumbering.

   Difficulty pacing: chapters 1-14 are written
   entirely in hiragana/katakana (no kanji at all,
   so no `reading` field either — a kana gloss
   over kana is redundant, same rule the rest of
   the site follows). Kanji (always with furigana
   in `reading`) is phased back in from chapter 15
   onward.

   Shape: { id, title, conversation: { title,
   participants: [...], lines: [ { speaker, jp,
   reading, en, bn } ] } }.

   Only N5 has content so far — N4-N1 stay
   empty/locked, same convention as the rest of
   the site.
========================================== */

const conversationsData = {

    n5: {
        chapters: [
            {
                id: "greetings-self-intro-numbers",
                title: "Greetings, Self-Introduction & Numbers",
                conversation: {
                    title: "はじめまして",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "おはようございます。", en: "Good morning.", bn: "শুভ সকাল।" },
                        { speaker: "ラキブ", jp: "おはようございます。", en: "Good morning.", bn: "শুভ সকাল।" },
                        { speaker: "田中", jp: "はじめまして。わたしはたなかです。", en: "Nice to meet you. I'm Tanaka.", bn: "পরিচিত হয়ে ভালো লাগলো। আমি তানাকা।" },
                        { speaker: "ラキブ", jp: "はじめまして。わたしはラキブです。よろしくおねがいします。", en: "Nice to meet you. I'm Rakib. Pleased to meet you.", bn: "পরিচিত হয়ে ভালো লাগলো। আমি রাকিব। আপনার সাথে কাজ করতে পেরে ভালো লাগবে।" },
                        { speaker: "田中", jp: "ラキブさんはがくせいですか。", en: "Are you a student, Rakib?", bn: "রাকিব, তুমি কি ছাত্র?" },
                        { speaker: "ラキブ", jp: "はい、がくせいです。", en: "Yes, I'm a student.", bn: "হ্যাঁ, আমি ছাত্র।" },
                        { speaker: "田中", jp: "わたしもがくせいです。きょう、としょかんにいきますか。", en: "I'm a student too. Are you going to the library today?", bn: "আমিও ছাত্র। আজ কি তুমি লাইব্রেরিতে যাচ্ছো?" },
                        { speaker: "ラキブ", jp: "はい、いきます。としょかんでにほんごをべんきょうします。", en: "Yes, I am. I'll study Japanese at the library.", bn: "হ্যাঁ, যাচ্ছি। লাইব্রেরিতে জাপানি ভাষা পড়ব।" },
                        { speaker: "田中", jp: "わたしもとしょかんでべんきょうします。", en: "I'll study at the library too.", bn: "আমিও লাইব্রেরিতে পড়ব।" },
                        { speaker: "ラキブ", jp: "よろしくおねがいします、たなかさん。", en: "Pleased to meet you, Tanaka.", bn: "আপনার সাথে দেখা হয়ে ভালো লাগলো, তানাকা সান।" }
                    ]
                }
            },
            {
                id: "family-desu",
                title: "Family & the です Copula",
                conversation: {
                    title: "家族の写真",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさん、これはかぞくのしゃしんですか。", en: "Rakib, is this a photo of your family?", bn: "রাকিব, এটা কি তোমার পরিবারের ছবি?" },
                        { speaker: "ラキブ", jp: "はい、そうです。ちちとははとあにです。", en: "Yes, that's right. This is my father, mother, and older brother.", bn: "হ্যাঁ, ঠিক। এখানে আমার বাবা, মা আর বড় ভাই।" },
                        { speaker: "田中", jp: "おとうさんとおかあさんはげんきですか。", en: "Are your father and mother well?", bn: "তোমার বাবা-মা কি ভালো আছেন?" },
                        { speaker: "ラキブ", jp: "はい、げんきです。でも、いそがしくないです。いまはやすみです。", en: "Yes, they're well. But they're not busy — it's a holiday now.", bn: "হ্যাঁ, ভালো আছেন। তবে ব্যস্ত না, এখন ছুটি।" },
                        { speaker: "田中", jp: "このへやはしずかじゃないですね。", en: "This room isn't quiet, is it?", bn: "এই ঘরটা তো শান্ত না, তাই না?" },
                        { speaker: "ラキブ", jp: "はい。きょうだいがおおいですから。でも、きのうはしずかでした。", en: "Right — I have a lot of siblings. But yesterday it was quiet.", bn: "হ্যাঁ, ভাইবোন অনেক তো তাই। কিন্তু গতকাল শান্ত ছিল।" },
                        { speaker: "田中", jp: "いいですね。やすくて、おおきいいえですね。", en: "That's nice. It's an affordable, big house, isn't it?", bn: "সুন্দর তো। সস্তা আর বড় বাড়ি, তাই না?" },
                        { speaker: "ラキブ", jp: "ありがとうございます。", en: "Thank you.", bn: "ধন্যবাদ।" }
                    ]
                }
            },
            {
                id: "daily-routine-time-dates",
                title: "Daily Routine, Time & Dates",
                conversation: {
                    title: "毎日の生活",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさん、まいにちなんじにおきますか。", en: "Rakib, what time do you get up every day?", bn: "রাকিব, তুমি প্রতিদিন কয়টায় ওঠো?" },
                        { speaker: "ラキブ", jp: "ろくじはんにおきます。それから、かおをあらって、はをみがきます。", en: "I get up at six thirty. After that, I wash my face and brush my teeth.", bn: "ছয়টা ত্রিশে উঠি। এরপর মুখ ধুই আর দাঁত মাজি।" },
                        { speaker: "田中", jp: "あさごはんをたべますか。", en: "Do you eat breakfast?", bn: "সকালের নাস্তা খাও?" },
                        { speaker: "ラキブ", jp: "はい、たべます。それから、がっこうにいきます。", en: "Yes, I do. After that, I go to school.", bn: "হ্যাঁ, খাই। এরপর স্কুলে যাই।" },
                        { speaker: "田中", jp: "こんしゅうのどようび、ひまですか。", en: "Are you free this Saturday?", bn: "এই সপ্তাহের শনিবার তুমি কি ফ্রি?" },
                        { speaker: "ラキブ", jp: "いいえ、いそがしいです。どようびはそうじとせんたくをします。", en: "No, I'm busy. On Saturday I do cleaning and laundry.", bn: "না, ব্যস্ত থাকি। শনিবার পরিষ্কার আর কাপড় ধোয়া করি।" },
                        { speaker: "田中", jp: "そうですか。にちようびは。", en: "I see. What about Sunday?", bn: "আচ্ছা। রবিবার?" },
                        { speaker: "ラキブ", jp: "にちようびはやすみます。よる、すこしべんきょうします。", en: "On Sunday I rest. At night, I study a little.", bn: "রবিবার বিশ্রাম নিই। রাতে একটু পড়াশোনা করি।" }
                    ]
                }
            },
            {
                id: "adjectives-comparison",
                title: "Adjectives & Comparison",
                conversation: {
                    title: "夏と冬とどちらが好きですか",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさん、なつとふゆとどちらがすきですか。", en: "Rakib, which do you like better, summer or winter?", bn: "রাকিব, গ্রীষ্ম আর শীত — কোনটা তোমার বেশি পছন্দ?" },
                        { speaker: "ラキブ", jp: "ふゆよりなつのほうがすきです。なつはたのしいです。", en: "I like summer more than winter. Summer is fun.", bn: "শীতের চেয়ে গ্রীষ্ম বেশি পছন্দ। গ্রীষ্মটা মজার।" },
                        { speaker: "田中", jp: "そうですか。でも、なつはとてもあついですね。", en: "I see. But summer is very hot, isn't it?", bn: "আচ্ছা। কিন্তু গ্রীষ্মে তো খুব গরম, তাই না?" },
                        { speaker: "ラキブ", jp: "はい、あついです。でも、さむいよりあついほうがいいです。", en: "Yes, it's hot. But hot is better than cold.", bn: "হ্যাঁ, গরম। কিন্তু ঠান্ডার চেয়ে গরম ভালো।" },
                        { speaker: "田中", jp: "わたしはふゆがすきです。ふゆのやまはとてもきれいです。", en: "I like winter. The mountains are very beautiful in winter.", bn: "আমি শীতকাল পছন্দ করি। শীতে পাহাড় খুব সুন্দর।" },
                        { speaker: "ラキブ", jp: "このまちのたべもののなかでなにがいちばんおいしいですか。", en: "Among this town's food, what's the most delicious?", bn: "এই শহরের খাবারের মধ্যে সবচেয়ে সুস্বাদু কোনটা?" },
                        { speaker: "田中", jp: "えきのちかくのみせがいちばんおいしいです。やすくて、おいしいです。", en: "The shop near the station is the most delicious. It's cheap and good.", bn: "স্টেশনের কাছের দোকানটা সবচেয়ে ভালো। সস্তা আর সুস্বাদু।" },
                        { speaker: "ラキブ", jp: "いいですね。こんど、いっしょにいきましょう。", en: "Sounds good. Let's go together sometime.", bn: "বেশ ভালো। এবার একসাথে যাই।" }
                    ]
                }
            },
            {
                id: "school-requests-rules",
                title: "School, Requests & Rules",
                conversation: {
                    title: "教室で",
                    participants: ["山田先生", "ラキブ", "田中"],
                    lines: [
                        { speaker: "山田先生", jp: "ここになまえをかいてください。", en: "Please write your name here.", bn: "এখানে নাম লিখুন।" },
                        { speaker: "ラキブ", jp: "はい、わかりました。せんせい、えんぴつをかしてください。", en: "Yes, understood. Teacher, please lend me a pencil.", bn: "জি, বুঝলাম। স্যার, একটা পেন্সিল ধার দিন।" },
                        { speaker: "山田先生", jp: "はい、どうぞ。きょうはじしょをつかわなくてもいいです。", en: "Here you go. You don't have to use a dictionary today.", bn: "এই নিন। আজ অভিধান ব্যবহার করতে হবে না।" },
                        { speaker: "田中", jp: "せんせい、きょうしつでしゃしんをとってはいけませんか。", en: "Teacher, are we not allowed to take photos in the classroom?", bn: "স্যার, ক্লাসরুমে কি ছবি তোলা যাবে না?" },
                        { speaker: "山田先生", jp: "はい、いけません。しけんのまえですから、しずかにしてください。", en: "That's right, you can't. It's before an exam, so please be quiet.", bn: "হ্যাঁ, পারবে না। পরীক্ষার আগে বলে চুপ থাকুন।" },
                        { speaker: "ラキブ", jp: "しゅくだいはきょうまでにださなければなりませんか。", en: "Do we have to submit the homework by today?", bn: "হোমওয়ার্ক কি আজকের মধ্যে জমা দিতেই হবে?" },
                        { speaker: "山田先生", jp: "いいえ、きんようびまでにだしてください。", en: "No, please submit it by Friday.", bn: "না, শুক্রবারের মধ্যে জমা দিন।" },
                        { speaker: "田中", jp: "わかりました。ありがとうございます。", en: "Understood. Thank you.", bn: "বুঝলাম। ধন্যবাদ।" }
                    ]
                }
            },
            {
                id: "hobbies-skills-ability",
                title: "Hobbies, Skills & Ability",
                conversation: {
                    title: "趣味は何ですか",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさんのしゅみはなんですか。", en: "Rakib, what's your hobby?", bn: "রাকিব, তোমার শখ কী?" },
                        { speaker: "ラキブ", jp: "わたしのしゅみはおんがくです。うたをうたうことができます。", en: "My hobby is music. I can sing songs.", bn: "আমার শখ গান। আমি গান গাইতে পারি।" },
                        { speaker: "田中", jp: "じょうずですか。", en: "Are you good at it?", bn: "তুমি কি ভালো গাও?" },
                        { speaker: "ラキブ", jp: "はい、じょうずです。でも、ダンスはへたです。たなかさんのしゅみはなんですか。", en: "Yes, I'm good. But I'm bad at dancing. What's your hobby, Tanaka?", bn: "হ্যাঁ, ভালো গাই। কিন্তু নাচে খারাপ। তানাকা, তোমার শখ কী?" },
                        { speaker: "田中", jp: "わたしはスポーツがすきです。かんじをよむこともできます。", en: "I like sports. I can also read kanji.", bn: "আমি খেলাধুলা পছন্দ করি। কাঞ্জিও পড়তে পারি।" },
                        { speaker: "ラキブ", jp: "すごいですね。にほんごがよくわかりますか。", en: "That's amazing. Do you understand Japanese well?", bn: "দারুণ তো। জাপানি ভাষা ভালো বোঝো?" },
                        { speaker: "田中", jp: "すこしわかります。でも、べんきょうしすぎるとつかれます。", en: "I understand a little. But if I study too much I get tired.", bn: "একটু বুঝি। কিন্তু বেশি পড়লে ক্লান্ত হয়ে যাই।" },
                        { speaker: "ラキブ", jp: "おんがくをききながらべんきょうしますか。", en: "Do you study while listening to music?", bn: "গান শুনতে শুনতে পড়ো?" }
                    ]
                }
            },
            {
                id: "home-furniture-existence",
                title: "Home, Furniture & Existence",
                conversation: {
                    title: "部屋には何がありますか",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさんのへやにはなにがありますか。", en: "What's in your room, Rakib?", bn: "রাকিব, তোমার ঘরে কী কী আছে?" },
                        { speaker: "ラキブ", jp: "つくえといすとベッドがあります。つくえのうえにパソコンがあります。", en: "There's a desk, a chair, and a bed. There's a computer on the desk.", bn: "একটা টেবিল, চেয়ার আর বিছানা আছে। টেবিলের উপর একটা কম্পিউটার আছে।" },
                        { speaker: "田中", jp: "テレビもありますか。", en: "Is there a TV too?", bn: "টিভিও আছে?" },
                        { speaker: "ラキブ", jp: "いいえ、テレビはありません。でも、まどのちかくにれいぞうこがあります。", en: "No, there's no TV. But there's a fridge near the window.", bn: "না, টিভি নেই। তবে জানালার কাছে একটা ফ্রিজ আছে।" },
                        { speaker: "田中", jp: "ほんだなにはなにがありますか。", en: "What's on the bookshelf?", bn: "বইয়ের তাকে কী আছে?" },
                        { speaker: "ラキブ", jp: "ほんやノートなどがあります。まどをあけると、こうえんがみえます。", en: "There are books, notebooks, and things like that. If you open the window, you can see a park.", bn: "বই, নোটবুক এসবই আছে। জানালা খুললে পার্ক দেখা যায়।" },
                        { speaker: "田中", jp: "いいへやですね。てつだいましょうか。", en: "It's a nice room. Shall I help you?", bn: "সুন্দর ঘর। সাহায্য করি?" },
                        { speaker: "ラキブ", jp: "はい、おねがいします。まどのそばにつくえをおきましょう。", en: "Yes, please. Let's put the desk by the window.", bn: "হ্যাঁ, দয়া করে। জানালার পাশে টেবিলটা রাখি।" }
                    ]
                }
            },
            {
                id: "objects-places-demonstratives",
                title: "Objects, Places & Demonstratives",
                conversation: {
                    title: "これは何ですか",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "たなかさん、これはなんですか。", en: "Tanaka, what is this?", bn: "তানাকা, এটা কী?" },
                        { speaker: "田中", jp: "それはちずです。まちのちずです。", en: "That's a map. It's a map of the town.", bn: "ওটা একটা ম্যাপ। শহরের ম্যাপ।" },
                        { speaker: "ラキブ", jp: "ぎんこうはどこですか。", en: "Where is the bank?", bn: "ব্যাংক কোথায়?" },
                        { speaker: "田中", jp: "あそこです。あのたかいたてものです。", en: "It's over there. That tall building.", bn: "ওইখানে। ওই লম্বা বিল্ডিংটা।" },
                        { speaker: "ラキブ", jp: "ゆうびんきょくはどこにありますか。", en: "Where is the post office?", bn: "পোস্ট অফিস কোথায়?" },
                        { speaker: "田中", jp: "ぎんこうのとなりです。デパートのちかくです。", en: "It's next to the bank, near the department store.", bn: "ব্যাংকের পাশে। ডিপার্টমেন্ট স্টোরের কাছে।" },
                        { speaker: "ラキブ", jp: "こちらとあちらとどちらがちかいですか。", en: "Which is closer, this way or that way?", bn: "এদিক আর ওদিক — কোনটা কাছে?" },
                        { speaker: "田中", jp: "こちらのほうがちかいです。いっしょにいきましょう。", en: "This way is closer. Let's go together.", bn: "এদিকটাই কাছে। একসাথে চলো।" }
                    ]
                }
            },
            {
                id: "shopping-money-clothing",
                title: "Shopping, Money & Clothing",
                conversation: {
                    title: "デパートで",
                    participants: ["店員", "ラキブ"],
                    lines: [
                        { speaker: "ラキブ", jp: "すみません、そのシャツはいくらですか。", en: "Excuse me, how much is that shirt?", bn: "মাফ করবেন, ওই শার্টটার দাম কত?" },
                        { speaker: "店員", jp: "さんぜんえんです。とてもにんきがあります。", en: "It's three thousand yen. It's very popular.", bn: "তিন হাজার ইয়েন। খুব জনপ্রিয়।" },
                        { speaker: "ラキブ", jp: "コートもみたいです。コーヒーですか、こうちゃですか、ときかれましたが、いまはいりません。", en: "I'd like to see a coat too. They asked coffee or tea, but I don't need any right now.", bn: "একটা কোটও দেখতে চাই। কফি না চা জিজ্ঞেস করা হলো, কিন্তু এখন লাগবে না।" },
                        { speaker: "店員", jp: "コートはこちらです。ぜんぶでよんせんえんです。", en: "The coats are this way. It's four thousand yen in total.", bn: "কোট এদিকে। সব মিলিয়ে চার হাজার ইয়েন।" },
                        { speaker: "ラキブ", jp: "すこしたかいですが、かわいいですね。これをください。", en: "It's a bit expensive, but it's cute. I'll take this one.", bn: "একটু দাম বেশি, কিন্তু সুন্দর। এটাই নেব।" },
                        { speaker: "店員", jp: "カードではらいますか、げんきんではらいますか。", en: "Will you pay by card or cash?", bn: "কার্ডে দেবেন, নাকি নগদ?" },
                        { speaker: "ラキブ", jp: "カードでおねがいします。", en: "Card, please.", bn: "কার্ডেই দিচ্ছি।" },
                        { speaker: "店員", jp: "ありがとうございます。またおこしください。", en: "Thank you. Please come again.", bn: "ধন্যবাদ। আবার আসবেন।" }
                    ]
                }
            },
            {
                id: "getting-around-time-sequencing",
                title: "Getting Around Town & Time Sequencing",
                conversation: {
                    title: "今、何時ですか",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "いま、なんじですか。", en: "What time is it now?", bn: "এখন কয়টা বাজে?" },
                        { speaker: "田中", jp: "しちじじゅっぷんです。もういきましょう。", en: "It's seven ten. Let's go now.", bn: "সাতটা দশ। এবার চলি।" },
                        { speaker: "ラキブ", jp: "えきまでどうやっていきますか。", en: "How do we get to the station?", bn: "স্টেশন পর্যন্ত কীভাবে যাব?" },
                        { speaker: "田中", jp: "こうえんをあるいて、こうさてんをみぎへまがると、えきがあります。", en: "Walk through the park, and if you turn right at the intersection, the station is there.", bn: "পার্কের ভেতর দিয়ে হেঁটে, মোড়ে ডানে ঘুরলেই স্টেশন পাওয়া যাবে।" },
                        { speaker: "ラキブ", jp: "でんしゃがこんでいるとき、たいへんですね。", en: "It must be hard when the train is crowded.", bn: "ট্রেন ভিড় থাকলে তো কষ্ট হয়, তাই না?" },
                        { speaker: "田中", jp: "そうですね。でも、このとけいをみると、まだじかんがありますよ。", en: "Right. But if you look at this clock, we still have time.", bn: "হ্যাঁ। তবে এই ঘড়ি দেখলে বোঝা যায় এখনো সময় আছে।" },
                        { speaker: "ラキブ", jp: "ほんとうですか。よかったです。", en: "Really? That's a relief.", bn: "সত্যি? ভালো হলো তাহলে।" },
                        { speaker: "田中", jp: "えきについたら、でんわしてください。", en: "When you arrive at the station, please call me.", bn: "স্টেশনে পৌঁছালে ফোন কোরো।" }
                    ]
                }
            },
            {
                id: "transportation-directions-movement",
                title: "Transportation, Directions & Movement",
                conversation: {
                    title: "どうやって行きますか",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "たなかさん、こうえんまでどうやっていきますか。", en: "Tanaka, how do I get to the park?", bn: "তানাকা, পার্ক পর্যন্ত কীভাবে যাব?" },
                        { speaker: "田中", jp: "でんしゃでいきます。それから、バスにのりかえます。", en: "You go by train. After that, you change to a bus.", bn: "ট্রেনে যাও। এরপর বাসে বদলাও।" },
                        { speaker: "ラキブ", jp: "ともだちといっしょにいきます。ひとりでいくのはたいへんですから。", en: "I'll go together with a friend, since going alone is hard.", bn: "বন্ধুর সাথেই যাব, একা যাওয়া কঠিন তো তাই।" },
                        { speaker: "田中", jp: "そうですね。タクシーでいってもいいですよ。", en: "That's true. You could also go by taxi.", bn: "ঠিক আছে। ট্যাক্সিতেও যেতে পারো।" },
                        { speaker: "ラキブ", jp: "こうえんでサッカーをします。しゃしんもとります。", en: "We'll play soccer at the park. We'll take photos too.", bn: "পার্কে ফুটবল খেলব। ছবিও তুলব।" },
                        { speaker: "田中", jp: "きをつけていってください。しんごうにちゅういしてください。", en: "Please go carefully. Watch out for the traffic light.", bn: "সাবধানে যেয়ো। ট্রাফিক সিগন্যালে খেয়াল রেখো।" },
                        { speaker: "ラキブ", jp: "はい、みちをわたるとき、きをつけます。", en: "Yes, I'll be careful when crossing the road.", bn: "হ্যাঁ, রাস্তা পার হওয়ার সময় খেয়াল রাখব।" }
                    ]
                }
            },
            {
                id: "everyday-actions-howto",
                title: "Everyday Actions & How-To",
                conversation: {
                    title: "どうやって使いますか",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "たなかさん、これはどうやってつかいますか。", en: "Tanaka, how do you use this?", bn: "তানাকা, এটা কীভাবে ব্যবহার করে?" },
                        { speaker: "田中", jp: "はしでたべます。にほんりょうりはだいたいはしをつかいます。", en: "You eat with chopsticks. Japanese food is usually eaten with chopsticks.", bn: "চপস্টিক দিয়ে খায়। জাপানি খাবার সাধারণত চপস্টিক দিয়ে খাওয়া হয়।" },
                        { speaker: "ラキブ", jp: "「ありがとう」はえいごでなんですか。", en: "What is 'arigatou' in English?", bn: "\"আরিগাতো\" ইংরেজিতে কী?" },
                        { speaker: "田中", jp: "「Thank you」です。もうおぼえましたか。", en: "It's 'Thank you.' Have you already memorized it?", bn: "\"থ্যাঙ্ক ইউ\"। ইতিমধ্যে মনে রেখেছো?" },
                        { speaker: "ラキブ", jp: "はい、おぼえました。もうごはんをたべましたか。", en: "Yes, I've memorized it. Have you already eaten?", bn: "হ্যাঁ, মনে রেখেছি। ভাত খেয়েছো?" },
                        { speaker: "田中", jp: "いいえ、まだです。あのみせのたべものはとてもおいしいとおもいます。", en: "No, not yet. I think that shop's food is very delicious.", bn: "না, এখনো না। ওই দোকানের খাবার খুব সুস্বাদু মনে হয়।" },
                        { speaker: "ラキブ", jp: "どのみせですか。", en: "Which shop?", bn: "কোন দোকান?" },
                        { speaker: "田中", jp: "あのあたらしいみせです。いっしょにいきましょう。", en: "That new shop. Let's go together.", bn: "ওই নতুন দোকানটা। চলো একসাথে যাই।" }
                    ]
                }
            },
            {
                id: "describing-people-things",
                title: "Describing People & Things",
                conversation: {
                    title: "どんな人ですか",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさんのともだちはどんなひとですか。", en: "What kind of person is your friend, Rakib?", bn: "রাকিব, তোমার বন্ধু কেমন মানুষ?" },
                        { speaker: "ラキブ", jp: "とてもしんせつなひとです。ハンサムで、げんきです。", en: "A very kind person. Handsome and energetic.", bn: "খুব ভালো মানুষ। সুদর্শন আর প্রাণবন্ত।" },
                        { speaker: "田中", jp: "いぬかねこをかっていますか。", en: "Do they have a dog or a cat?", bn: "কুকুর বা বিড়াল পোষে?" },
                        { speaker: "ラキブ", jp: "はい、かわいいねこがいます。とてもきれいなねこです。", en: "Yes, they have a cute cat. A very pretty cat.", bn: "হ্যাঁ, একটা মিষ্টি বিড়াল আছে। খুব সুন্দর বিড়াল।" },
                        { speaker: "田中", jp: "いろいろなはなしをききたいです。このしゃしんはどうですか。", en: "I'd like to hear all sorts of stories. How about this photo?", bn: "নানারকম গল্প শুনতে চাই। এই ছবিটা কেমন?" },
                        { speaker: "ラキブ", jp: "これはともだちがとったしゃしんです。いいしゃしんでしょう？", en: "This is a photo my friend took. It's a good photo, isn't it?", bn: "এটা আমার বন্ধুর তোলা ছবি। ভালো ছবি, তাই না?" },
                        { speaker: "田中", jp: "このまちはにぎやかですね。ゆうめいなところですか。", en: "This town is lively, isn't it? Is it a famous place?", bn: "শহরটা তো প্রাণবন্ত। বিখ্যাত জায়গা?" },
                        { speaker: "ラキブ", jp: "はい、ゆうめいなところです。すてきなこうえんもあります。", en: "Yes, it's a famous place. There's a lovely park too.", bn: "হ্যাঁ, বিখ্যাত জায়গা। একটা চমৎকার পার্কও আছে।" }
                    ]
                }
            },
            {
                id: "weather-seasons-reasons",
                title: "Weather, Seasons & Reasons",
                conversation: {
                    title: "今日の天気",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "きょうのてんきはどうですか。", en: "How's the weather today?", bn: "আজকের আবহাওয়া কেমন?" },
                        { speaker: "ラキブ", jp: "くもりです。すこしさむいです。かさをもってきましたか。", en: "It's cloudy. A bit cold. Did you bring an umbrella?", bn: "মেঘলা। একটু ঠান্ডা। ছাতা এনেছো?" },
                        { speaker: "田中", jp: "はい、もってきました。どうしてかさがいりますか。", en: "Yes, I brought one. Why do we need an umbrella?", bn: "হ্যাঁ, এনেছি। ছাতা কেন লাগবে?" },
                        { speaker: "ラキブ", jp: "あめがふりますから。いまはあきですが、もうすぐふゆですね。", en: "Because it's going to rain. It's autumn now, but winter is coming soon.", bn: "কারণ বৃষ্টি হবে। এখন শরৎকাল, তবে শীঘ্রই শীত আসবে।" },
                        { speaker: "田中", jp: "ふゆはゆきがたくさんふります。なつよりふゆのほうがすきですか。", en: "It snows a lot in winter. Do you like winter more than summer?", bn: "শীতে অনেক তুষারপাত হয়। গ্রীষ্মের চেয়ে শীত বেশি পছন্দ?" },
                        { speaker: "ラキブ", jp: "ぜんぜんすきじゃないです。ふゆはさむすぎますから。", en: "Not at all. Because winter is too cold.", bn: "একদমই না। শীতে অনেক বেশি ঠান্ডা তো তাই।" },
                        { speaker: "田中", jp: "でも、あたたかいふくがあれば、だいじょうぶですよ。", en: "But if you have warm clothes, it'll be fine.", bn: "তবে গরম কাপড় থাকলে ঠিক আছে।" }
                    ]
                }
            },
            {
                id: "food-drink-frequency",
                title: "Food, Drink & Frequency",
                conversation: {
                    title: "何を食べますか",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさん、朝ご飯は何を食べますか。", reading: "ラキブさん、あさごはんはなにをたべますか。", en: "Rakib, what do you eat for breakfast?", bn: "রাকিব, নাস্তায় কী খাও?" },
                        { speaker: "ラキブ", jp: "パンと卵を食べます。それから、牛乳を飲みます。", reading: "パンとたまごをたべます。それから、ぎゅうにゅうをのみます。", en: "I eat bread and eggs. After that, I drink milk.", bn: "রুটি আর ডিম খাই। এরপর দুধ খাই।" },
                        { speaker: "田中", jp: "毎日、肉を食べますか。", reading: "まいにち、にくをたべますか。", en: "Do you eat meat every day?", bn: "প্রতিদিন মাংস খাও?" },
                        { speaker: "ラキブ", jp: "いいえ、一週間に二回だけ食べます。魚と野菜のほうが好きです。", reading: "いいえ、いっしゅうかんににかいだけたべます。さかなとやさいのほうがすきです。", en: "No, I only eat it twice a week. I prefer fish and vegetables.", bn: "না, সপ্তাহে মাত্র দুবার খাই। মাছ আর সবজিই বেশি পছন্দ।" },
                        { speaker: "田中", jp: "昼ご飯は何を食べますか。", reading: "ひるごはんはなにをたべますか。", en: "What do you eat for lunch?", bn: "দুপুরে কী খাও?" },
                        { speaker: "ラキブ", jp: "サンドイッチと果物だけです。晩ご飯にお茶かジュースを飲みます。", reading: "サンドイッチとくだものだけです。ばんごはんにおちゃかジュースをのみます。", en: "Just a sandwich and fruit. At dinner I drink tea or juice.", bn: "শুধু স্যান্ডউইচ আর ফল। রাতের খাবারে চা বা জুস খাই।" },
                        { speaker: "田中", jp: "お酒やビールは飲みますか。", reading: "おさけやビールはのみますか。", en: "Do you drink alcohol or beer?", bn: "মদ বা বিয়ার খাও?" },
                        { speaker: "ラキブ", jp: "いいえ、全然飲みません。アイスクリームのほうが好きです。", reading: "いいえ、ぜんぜんのみません。アイスクリームのほうがすきです。", en: "No, not at all. I prefer ice cream.", bn: "না, একেবারেই না। আইসক্রিমই বেশি পছন্দ।" }
                    ]
                }
            },
            {
                id: "gifts-presents-wants",
                title: "Gifts, Presents & Wants",
                conversation: {
                    title: "誕生日のプレゼント",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさん、何が欲しいですか。誕生日のプレゼントを準備したいです。", reading: "ラキブさん、なにがほしいですか。たんじょうびのプレゼントをじゅんびしたいです。", en: "Rakib, what do you want? I want to prepare a birthday present.", bn: "রাকিব, তোমার কী চাই? জন্মদিনের উপহার প্রস্তুত করতে চাই।" },
                        { speaker: "ラキブ", jp: "ありがとうございます。花が欲しいです。", reading: "ありがとうございます。はながほしいです。", en: "Thank you. I'd like flowers.", bn: "ধন্যবাদ। ফুল চাই।" },
                        { speaker: "田中", jp: "分かりました。何かほかに欲しい物はありますか。", reading: "わかりました。なにかほかにほしいものはありますか。", en: "Got it. Is there anything else you'd like?", bn: "বুঝেছি। আর কিছু চাও কি?" },
                        { speaker: "ラキブ", jp: "お菓子もいいです。それから、フォークとスプーンも欲しいです。", reading: "おかしもいいです。それから、フォークとスプーンもほしいです。", en: "Candy would also be nice. And I'd also like a fork and spoon.", bn: "মিষ্টিও ভালো হয়। আর কাঁটাচামচ আর চামচও চাই।" },
                        { speaker: "田中", jp: "分かりました。友達を紹介してもいいですか。", reading: "わかりました。ともだちをしょうかいしてもいいですか。", en: "Got it. May I introduce a friend?", bn: "বুঝেছি। একজন বন্ধুর সাথে পরিচয় করিয়ে দিই?" },
                        { speaker: "ラキブ", jp: "はい、ぜひ。案内してください。", reading: "はい、ぜひ。あんないしてください。", en: "Yes, please do. Please show me around.", bn: "হ্যাঁ, অবশ্যই। নিয়ে যেয়ো।" },
                        { speaker: "田中", jp: "意味が分からない言葉があったら、説明します。", reading: "いみがわからないことばがあったら、せつめいします。", en: "If there's a word whose meaning you don't understand, I'll explain it.", bn: "কোনো শব্দের অর্থ না বুঝলে ব্যাখ্যা করে দেব।" }
                    ]
                }
            },
            {
                id: "giving-lending-events",
                title: "Giving, Lending & Natural Events",
                conversation: {
                    title: "ペンを貸してください",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "田中さん、ペンを貸してください。", reading: "たなかさん、ペンをかしてください。", en: "Tanaka, please lend me a pen.", bn: "তানাকা, একটা কলম ধার দাও।" },
                        { speaker: "田中", jp: "はい、どうぞ。でも、なくさないでくださいね。", reading: "はい、どうぞ。でも、なくさないでくださいね。", en: "Here you go. But please don't lose it, okay?", bn: "নাও। তবে হারিয়ে ফেলো না, কেমন?" },
                        { speaker: "ラキブ", jp: "ありがとうございます。あとで返します。", reading: "ありがとうございます。あとでかえします。", en: "Thank you. I'll return it later.", bn: "ধন্যবাদ। পরে ফেরত দেব।" },
                        { speaker: "田中", jp: "「切る」はグループIです。「あげる」はグループIIです。分かりますか。", reading: "「きる」はグループいちです。「あげる」はグループにです。わかりますか。", en: "'Kiru' is a Group I verb. 'Ageru' is a Group II verb. Do you understand?", bn: "\"কিরু\" গ্রুপ ওয়ান। \"আগেরু\" গ্রুপ টু। বুঝলে?" },
                        { speaker: "ラキブ", jp: "少し分かります。田中さんが友達に本をあげましたか。", reading: "すこしわかります。たなかさんがともだちにほんをあげましたか。", en: "I understand a little. Did you give a book to a friend?", bn: "একটু বুঝি। তানাকা কি বন্ধুকে বই দিয়েছিলে?" },
                        { speaker: "田中", jp: "はい、あげました。友達からお菓子をもらいました。", reading: "はい、あげました。ともだちからおかしをもらいました。", en: "Yes, I gave it. I received candy from a friend.", bn: "হ্যাঁ, দিয়েছিলাম। বন্ধুর কাছ থেকে মিষ্টি পেয়েছিলাম।" },
                        { speaker: "ラキブ", jp: "外を見てください。雨が降っていますよ。", reading: "そとをみてください。あめがふっていますよ。", en: "Please look outside. It's raining.", bn: "বাইরে দেখো তো। বৃষ্টি হচ্ছে।" }
                    ]
                }
            },
            {
                id: "body-health-resultant-states",
                title: "Body, Health & Resultant States",
                conversation: {
                    title: "顔色が悪いですよ",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさん、顔色が悪いですよ。大丈夫ですか。", reading: "ラキブさん、かおいろがわるいですよ。だいじょうぶですか。", en: "Rakib, you don't look well. Are you okay?", bn: "রাকিব, তোমার মুখটা ফ্যাকাশে দেখাচ্ছে। ঠিক আছো তো?" },
                        { speaker: "ラキブ", jp: "熱があります。頭も痛いです。風邪だと思います。", reading: "ねつがあります。あたまもいたいです。かぜだとおもいます。", en: "I have a fever. My head hurts too. I think it's a cold.", bn: "জ্বর আছে। মাথাও ব্যথা করছে। মনে হয় ঠান্ডা লেগেছে।" },
                        { speaker: "田中", jp: "薬を飲みましたか。", reading: "くすりをのみましたか。", en: "Did you take medicine?", bn: "ওষুধ খেয়েছো?" },
                        { speaker: "ラキブ", jp: "いいえ、まだです。薬の名前を知りません。", reading: "いいえ、まだです。くすりのなまえをしりません。", en: "No, not yet. I don't know the name of the medicine.", bn: "না, এখনো না। ওষুধের নাম জানি না।" },
                        { speaker: "田中", jp: "危ないですよ。お風呂に入らないで、早く寝てください。", reading: "あぶないですよ。おふろにはいらないで、はやくねてください。", en: "That's risky. Don't take a bath — please go to sleep early.", bn: "এটা ঠিক না। গোসল না করে তাড়াতাড়ি ঘুমাও।" },
                        { speaker: "ラキブ", jp: "分かりました。田中さんは病院を知っていますか。", reading: "わかりました。たなかさんはびょういんをしっていますか。", en: "Understood. Do you know a hospital?", bn: "বুঝেছি। তানাকা, একটা হাসপাতাল চেনো?" },
                        { speaker: "田中", jp: "はい、知っています。大切な体ですから、気をつけてください。", reading: "はい、しっています。たいせつなからだですから、きをつけてください。", en: "Yes, I know one. Your body is important, so please take care.", bn: "হ্যাঁ, চিনি। শরীর গুরুত্বপূর্ণ, তাই খেয়াল রেখো।" }
                    ]
                }
            },
            {
                id: "errands-verbs-connecting",
                title: "Errands, More Verbs & Connecting Ideas",
                conversation: {
                    title: "残業の日",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "今日も残業しますか。", reading: "きょうもざんぎょうしますか。", en: "Are you working overtime today too?", bn: "আজও কি ওভারটাইম করবে?" },
                        { speaker: "ラキブ", jp: "はい。会議があって、それから資料を集めて、報告書を書きます。", reading: "はい。かいぎがあって、それからしりょうをあつめて、ほうこくしょをかきます。", en: "Yes. There's a meeting, and after that I'll gather materials and write a report.", bn: "হ্যাঁ। একটা মিটিং আছে, এরপর তথ্য জোগাড় করে রিপোর্ট লিখব।" },
                        { speaker: "田中", jp: "上着を脱いでもいいですよ。部屋は暖かいですから。", reading: "うわぎをぬいでもいいですよ。へやはあたたかいですから。", en: "You can take off your jacket. The room is warm.", bn: "কোট খুলে ফেলতে পারো। ঘরটা গরম তো।" },
                        { speaker: "ラキブ", jp: "会議の予約を忘れないでください。三時からです。", reading: "かいぎのよやくをわすれないでください。さんじからです。", en: "Please don't forget the meeting reservation. It starts at three.", bn: "মিটিংয়ের বুকিং ভুলে যেয়ো না। তিনটা থেকে।" },
                        { speaker: "田中", jp: "分かりました。会議が終わってから、費用を払いに行きます。", reading: "わかりました。かいぎがおわってから、ひようをはらいにいきます。", en: "Got it. After the meeting ends, I'll go pay the expenses.", bn: "বুঝেছি। মিটিং শেষ হওয়ার পর খরচটা দিতে যাব।" },
                        { speaker: "ラキブ", jp: "運転して行きますか。", reading: "うんてんしていきますか。", en: "Will you drive there?", bn: "গাড়ি চালিয়ে যাবে?" },
                        { speaker: "田中", jp: "いいえ、歩いて行って、それから帰って来ます。", reading: "いいえ、あるいていって、それからかえってきます。", en: "No, I'll walk there and then come back.", bn: "না, হেঁটে যাব, এরপর ফিরে আসব।" }
                    ]
                }
            },
            {
                id: "position-adverbs-ability-emphasis",
                title: "Position, Adverbs, Ability & Emphasis",
                conversation: {
                    title: "わたしの趣味",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさんの趣味は何ですか。", reading: "ラキブさんのしゅみはなんですか。", en: "Rakib, what is your hobby?", bn: "রাকিব, তোমার শখ কী?" },
                        { speaker: "ラキブ", jp: "わたしの趣味は写真を撮ることです。よく公園で撮ります。", reading: "わたしのしゅみはしゃしんをとることです。よくこうえんでとります。", en: "My hobby is taking photos. I often take them at the park.", bn: "আমার শখ ছবি তোলা। প্রায়ই পার্কে তুলি।" },
                        { speaker: "田中", jp: "食事のまえに、写真を撮りますか。", reading: "しょくじのまえに、しゃしんをとりますか。", en: "Do you take photos before meals?", bn: "খাওয়ার আগে ছবি তোলো?" },
                        { speaker: "ラキブ", jp: "はい、いつも撮ります。テーブルの上に食べ物を置いて、撮ります。", reading: "はい、いつもとります。テーブルのうえにたべものをおいて、とります。", en: "Yes, I always do. I put the food on the table and take a photo.", bn: "হ্যাঁ, সবসময় তুলি। টেবিলের উপর খাবার রেখে ছবি তুলি।" },
                        { speaker: "田中", jp: "初めて聞きました。なかなかいい趣味ですね。", reading: "はじめてききました。なかなかいいしゅみですね。", en: "That's the first time I've heard that. It's quite a nice hobby.", bn: "প্রথমবার শুনলাম। বেশ ভালো একটা শখ তো।" },
                        { speaker: "ラキブ", jp: "ぜひ田中さんの写真も撮りたいです。", reading: "ぜひたなかさんのしゃしんもとりたいです。", en: "I'd really like to take a photo of you too.", bn: "তোমার একটা ছবিও অবশ্যই তুলতে চাই।" },
                        { speaker: "田中", jp: "本当にいいですか。恥ずかしいですが、いいですよ。", reading: "ほんとうにいいですか。はずかしいですが、いいですよ。", en: "Really? It's a bit embarrassing, but okay.", bn: "সত্যি? লজ্জা লাগছে, তবে ঠিক আছে।" }
                    ]
                }
            },
            {
                id: "travel-life-events-experience",
                title: "Travel, Life Events & Experience",
                conversation: {
                    title: "旅行の話",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさんは外国へ行ったことがありますか。", reading: "ラキブさんはがいこくへいったことがありますか。", en: "Rakib, have you ever been abroad?", bn: "রাকিব, তুমি কি কখনো বিদেশ গেছো?" },
                        { speaker: "ラキブ", jp: "はい、あります。空港からホテルまでタクシーで行きました。", reading: "はい、あります。くうこうからホテルまでタクシーでいきました。", en: "Yes, I have. I went from the airport to the hotel by taxi.", bn: "হ্যাঁ, গেছি। বিমানবন্দর থেকে হোটেল পর্যন্ত ট্যাক্সিতে গিয়েছিলাম।" },
                        { speaker: "田中", jp: "海を見ましたか。", reading: "うみをみましたか。", en: "Did you see the ocean?", bn: "সমুদ্র দেখেছিলে?" },
                        { speaker: "ラキブ", jp: "はい、見ました。お寿司や刺身を食べたり、写真を撮ったりしました。", reading: "はい、みました。おすしやさしみをたべたり、しゃしんをとったりしました。", en: "Yes, I did. I ate sushi and sashimi, took photos, and so on.", bn: "হ্যাঁ, দেখেছিলাম। সুশি, সাশিমি খেয়েছিলাম, ছবি তুলেছিলাম, ইত্যাদি।" },
                        { speaker: "田中", jp: "お祭りにも行きましたか。", reading: "おまつりにもいきましたか。", en: "Did you go to a festival too?", bn: "উৎসবেও গিয়েছিলে?" },
                        { speaker: "ラキブ", jp: "はい、田舎のお祭りに行きました。とてもいいチャンスでした。", reading: "はい、いなかのおまつりにいきました。とてもいいチャンスでした。", en: "Yes, I went to a countryside festival. It was a great chance.", bn: "হ্যাঁ, গ্রামের একটা উৎসবে গিয়েছিলাম। খুব ভালো একটা সুযোগ ছিল।" },
                        { speaker: "田中", jp: "年を取っても、いい思い出になりますね。", reading: "としをとっても、いいおもいでになりますね。", en: "Even as you get older, it'll become a good memory.", bn: "বয়স হলেও একটা সুন্দর স্মৃতি হয়ে থাকবে, তাই না?" }
                    ]
                }
            },
            {
                id: "opinions-society-politeness",
                title: "Opinions, Society & Politeness",
                conversation: {
                    title: "ニュースについて",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "今日のニュース、見た？", reading: "きょうのニュース、みた？", en: "Did you see today's news?", bn: "আজকের খবর দেখেছো?" },
                        { speaker: "ラキブ", jp: "うん、見た。試合のニュースでしょう？", reading: "うん、みた。しあいのニュースでしょう？", en: "Yeah, I saw it. It's about the match, right?", bn: "হ্যাঁ, দেখেছি। খেলার খবর, তাই না?" },
                        { speaker: "田中", jp: "そう。日本のチームが勝ったよ。", reading: "そう。にほんのチームがかったよ。", en: "That's right. The Japanese team won.", bn: "হ্যাঁ। জাপানি দল জিতেছে।" },
                        { speaker: "ラキブ", jp: "本当？相手のチームは負けたの？", reading: "ほんとう？あいてのチームはまけたの？", en: "Really? Did the other team lose?", bn: "সত্যি? প্রতিপক্ষ দল হেরেছে?" },
                        { speaker: "田中", jp: "うん、負けた。でも、いい試合だったと思う。", reading: "うん、まけた。でも、いいしあいだったとおもう。", en: "Yeah, they lost. But I think it was a good match.", bn: "হ্যাঁ, হেরেছে। তবে আমার মনে হয় ভালো খেলা হয়েছে।" },
                        { speaker: "ラキブ", jp: "政治のニュースも役に立つと思う？", reading: "せいじのニュースもやくにたつとおもう？", en: "Do you think political news is useful too?", bn: "রাজনৈতিক খবরও কি উপকারী মনে হয়?" },
                        { speaker: "田中", jp: "うん、たぶん役に立つと思う。最近、あまり見ていないけど。", reading: "うん、たぶんやくにたつとおもう。さいきん、あまりみていないけど。", en: "Yeah, I think it's probably useful. Though I haven't watched much lately.", bn: "হ্যাঁ, মনে হয় উপকারী। তবে সম্প্রতি খুব একটা দেখি না।" }
                    ]
                }
            },
            {
                id: "family-honorifics-reported-speech",
                title: "Family Honorifics & Reported Speech",
                conversation: {
                    title: "田中さんのご主人",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "田中さん、お兄さんはいますか。", reading: "たなかさん、おにいさんはいますか。", en: "Tanaka, do you have an older brother?", bn: "তানাকা, তোমার কি বড় ভাই আছে?" },
                        { speaker: "田中", jp: "はい、います。それから、妹さんも一人います。", reading: "はい、います。それから、いもうとさんもひとりいます。", en: "Yes, I do. I also have one younger sister.", bn: "হ্যাঁ, আছে। আর একটা ছোট বোনও আছে।" },
                        { speaker: "ラキブ", jp: "お兄さんは「もう結婚した」と言いましたか。", reading: "おにいさんは「もうけっこんした」といいましたか。", en: "Did your older brother say, \"I've already gotten married\"?", bn: "তোমার বড় ভাই কি বলেছিল \"আমি ইতিমধ্যে বিয়ে করে ফেলেছি\"?" },
                        { speaker: "田中", jp: "はい、そう言いました。奥さんはとても親切な人です。", reading: "はい、そういいました。おくさんはとてもしんせつなひとです。", en: "Yes, that's what he said. His wife is a very kind person.", bn: "হ্যাঁ, তাই বলেছিল। তার স্ত্রী খুব ভালো মানুষ।" },
                        { speaker: "ラキブ", jp: "来週、会社でパーティーがあるでしょう？", reading: "らいしゅう、かいしゃでパーティーがあるでしょう？", en: "There's a party at the company next week, right?", bn: "আগামী সপ্তাহে অফিসে একটা পার্টি হচ্ছে, তাই না?" },
                        { speaker: "田中", jp: "うん、そう。うちの主人も来ると言っていました。", reading: "うん、そう。うちのしゅじんもくるといっていました。", en: "Yeah, that's right. My husband said he'd come too.", bn: "হ্যাঁ, ঠিক। আমার স্বামীও আসবে বলেছিল।" },
                        { speaker: "ラキブ", jp: "そろそろ準備しないと……。手伝いましょうか。", reading: "そろそろじゅんびしないと……。てつだいましょうか。", en: "I should start preparing soon... Shall I help?", bn: "শীঘ্রই প্রস্তুতি শুরু করতে হবে... সাহায্য করি?" }
                    ]
                }
            },
            {
                id: "counting-giving-receiving",
                title: "Native Counting & Giving/Receiving Actions",
                conversation: {
                    title: "だれが手伝いに行きますか",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "陽子さんの誕生日は二十日ですね。だれが手伝いに行きますか。", reading: "ようこさんのたんじょうびははつかですね。だれがてつだいにいきますか。", en: "Yoko's birthday is the twentieth, right? Who will go to help?", bn: "ইয়োকোর জন্মদিন কুড়ি তারিখে, তাই না? কে সাহায্য করতে যাবে?" },
                        { speaker: "ラキブ", jp: "わたしが行きます。ケーキを九つ買います。", reading: "わたしがいきます。ケーキをここのつかいます。", en: "I'll go. I'll buy nine cakes.", bn: "আমি যাব। নয়টা কেক কিনব।" },
                        { speaker: "田中", jp: "多いですね。三つでいいですよ。", reading: "おおいですね。みっつでいいですよ。", en: "That's a lot. Three would be enough.", bn: "অনেক তো। তিনটাই যথেষ্ট।" },
                        { speaker: "ラキブ", jp: "分かりました。花もあげたいです。だれが花を選びますか。", reading: "わかりました。はなもあげたいです。だれがはなをえらびますか。", en: "Got it. I want to give flowers too. Who will choose the flowers?", bn: "বুঝেছি। ফুলও দিতে চাই। কে ফুল বাছাই করবে?" },
                        { speaker: "田中", jp: "わたしが選びます。陽子さんはわたしにいつも親切にしてくれますから。", reading: "わたしがえらびます。ようこさんはわたしにいつもしんせつにしてくれますから。", en: "I'll choose. Since Yoko is always kind to me.", bn: "আমি বাছাই করব। ইয়োকো আমার সাথে সবসময় বন্ধুত্বপূর্ণ ব্যবহার করে তো।" },
                        { speaker: "ラキブ", jp: "パーティーは十日から二十日まで準備しましょう。", reading: "パーティーはとおかからはつかまでじゅんびしましょう。", en: "Let's prepare for the party from the tenth to the twentieth.", bn: "দশ তারিখ থেকে কুড়ি তারিখ পর্যন্ত পার্টির প্রস্তুতি নেওয়া যাক।" },
                        { speaker: "田中", jp: "いいですね。一日、時間をあげましょう。", reading: "いいですね。ついたち、じかんをあげましょう。", en: "Sounds good. Let's give it a day, the first.", bn: "বেশ ভালো। এক তারিখে সময় দেওয়া যাক।" }
                    ]
                }
            },
            {
                id: "everyday-essentials-conditionals",
                title: "Everyday Essentials & Conditionals",
                conversation: {
                    title: "用事があったら",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさん、今日、用事がありますか。", reading: "ラキブさん、きょう、ようじがありますか。", en: "Rakib, do you have anything to do today?", bn: "রাকিব, আজ কি তোমার কোনো কাজ আছে?" },
                        { speaker: "ラキブ", jp: "はい。切手とはがきを買いたいです。", reading: "はい。きってとはがきをかいたいです。", en: "Yes. I want to buy stamps and postcards.", bn: "হ্যাঁ। স্ট্যাম্প আর পোস্টকার্ড কিনতে চাই।" },
                        { speaker: "田中", jp: "封筒も買いますか。", reading: "ふうとうもかいますか。", en: "Will you buy envelopes too?", bn: "খামও কিনবে?" },
                        { speaker: "ラキブ", jp: "はい。安かったら、たくさん買います。", reading: "はい。やすかったら、たくさんかいます。", en: "Yes. If they're cheap, I'll buy a lot.", bn: "হ্যাঁ। সস্তা হলে অনেক কিনব।" },
                        { speaker: "田中", jp: "チケットも要りますか。映画のチケットです。", reading: "チケットもいりますか。えいがのチケットです。", en: "Do you need a ticket too? A movie ticket.", bn: "টিকিটও লাগবে? সিনেমার টিকিট।" },
                        { speaker: "ラキブ", jp: "はい、欲しいです。時間があったら、一緒に見ましょう。", reading: "はい、ほしいです。じかんがあったら、いっしょにみましょう。", en: "Yes, I'd like one. If we have time, let's watch it together.", bn: "হ্যাঁ, চাই। সময় থাকলে একসাথে দেখি।" },
                        { speaker: "田中", jp: "うちに帰ったら、電話します。りんごも買いましょうか。", reading: "うちにかえったら、でんわします。りんごもかいましょうか。", en: "When I get home, I'll call you. Shall I buy apples too?", bn: "বাসায় ফিরলে ফোন করব। আপেলও কিনব?" },
                        { speaker: "ラキブ", jp: "はい、お願いします。雨が降っても、行きますから。", reading: "はい、おねがいします。あめがふっても、いきますから。", en: "Yes, please. Since I'll go even if it rains.", bn: "হ্যাঁ, দাও। বৃষ্টি হলেও যাব তো।" }
                    ]
                }
            }
        ]
    },

    n4: {
        chapters: [
            {
                id: "obligation-permission-prohibition",
                title: "Obligation, Permission & Prohibition",
                conversation: {
                    title: "テストの前に",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "明日、テストがありますよね。", reading: "あした、テストがありますよね。", en: "There's a test tomorrow, right?", bn: "আগামীকাল তো পরীক্ষা আছে, তাই না?" },
                        { speaker: "ラキブ", jp: "はい。今日中に文法を復習しなければなりません。", reading: "はい。きょうじゅうにぶんぽうをふくしゅうしなければなりません。", en: "Yes. I have to review the grammar by the end of today.", bn: "হ্যাঁ। আজকের মধ্যেই গ্রামার রিভিশন করতেই হবে।" },
                        { speaker: "田中", jp: "テストのとき、辞書を使ってもいいですか。", reading: "テストのとき、じしょをつかってもいいですか。", en: "May I use a dictionary during the test?", bn: "পরীক্ষার সময় অভিধান ব্যবহার করা যাবে কি?" },
                        { speaker: "ラキブ", jp: "いいえ、テストのときは辞書を使ってはいけませんよ。", reading: "いいえ、テストのときはじしょをつかってはいけませんよ。", en: "No, you must not use a dictionary during the test.", bn: "না, পরীক্ষার সময় অভিধান ব্যবহার করা যাবে না।" },
                        { speaker: "田中", jp: "そうですか。じゃ、単語を全部覚えなければなりませんね。", reading: "そうですか。じゃ、たんごをぜんぶおぼえなければなりませんね。", en: "I see. Then I have to memorize all the words.", bn: "আচ্ছা। তাহলে তো সব শব্দ মুখস্থ করতেই হবে।" },
                        { speaker: "ラキブ", jp: "でも、漢字は全部書けなくてもいいですよ。読めれば大丈夫です。", reading: "でも、かんじはぜんぶかけなくてもいいですよ。よめればだいじょうぶです。", en: "But you don't have to be able to write all the kanji. It's fine if you can read them.", bn: "তবে সব কাঞ্জি লিখতে না পারলেও চলবে। পড়তে পারলেই হবে।" },
                        { speaker: "田中", jp: "良かったです。少し安心しました。一緒に勉強しませんか。", reading: "よかったです。すこしあんしんしました。いっしょにべんきょうしませんか。", en: "That's a relief. I feel a bit more at ease. Shall we study together?", bn: "যাক, একটু স্বস্তি পেলাম। একসাথে পড়ব কি?" },
                        { speaker: "ラキブ", jp: "いいですね。図書館へ行きましょう。", reading: "いいですね。としょかんへいきましょう。", en: "Sounds good. Let's go to the library.", bn: "বেশ ভালো। লাইব্রেরিতে যাই চলো।" }
                    ]
                }
            },
            {
                id: "conditionals-tara-to",
                title: "Conditionals I: たら & と",
                conversation: {
                    title: "週末の予定",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさん、週末、暇だったら、何をしますか。", reading: "ラキブさん、しゅうまつ、ひまだったら、なにをしますか。", en: "Rakib, if you're free this weekend, what will you do?", bn: "রাকিব, সপ্তাহান্তে ফ্রি থাকলে কী করবে?" },
                        { speaker: "ラキブ", jp: "天気が良かったら、山に登りたいです。", reading: "てんきがよかったら、やまにのぼりたいです。", en: "If the weather's good, I want to climb a mountain.", bn: "আবহাওয়া ভালো থাকলে পাহাড়ে উঠতে চাই।" },
                        { speaker: "田中", jp: "いいですね。疲れているなら、家で休んだらどうですか。", reading: "いいですね。つかれているなら、いえでやすんだらどうですか。", en: "That's nice. But if you're tired, why don't you rest at home instead?", bn: "বেশ ভালো। ক্লান্ত থাকলে বাসায় বিশ্রাম নিলে কেমন হয়?" },
                        { speaker: "ラキブ", jp: "大丈夫です。この道をまっすぐ行くと、山の入り口がありますよね。", reading: "だいじょうぶです。このみちをまっすぐいくと、やまのいりぐちがありますよね。", en: "I'm fine. If you go straight down this road, there's the mountain entrance, right?", bn: "ঠিক আছি। এই রাস্তা ধরে সোজা গেলেই পাহাড়ের প্রবেশপথ পাওয়া যায়, তাই না?" },
                        { speaker: "田中", jp: "はい、そうです。去年、もっと早く準備すればよかったと思いました。", reading: "はい、そうです。きょねん、もっとはやくじゅんびすればよかったとおもいました。", en: "Yes, that's right. Last year I thought I should have prepared earlier.", bn: "হ্যাঁ, ঠিক। গত বছর মনে হয়েছিল আরও আগে প্রস্তুতি নিলে ভালো হতো।" },
                        { speaker: "ラキブ", jp: "どうしてですか。", reading: "どうしてですか。", en: "Why is that?", bn: "কেন?" },
                        { speaker: "田中", jp: "山に着いたら、もう暗くなっていましたから。", reading: "やまについたら、もうくらくなっていましたから。", en: "Because by the time I got to the mountain, it was already dark.", bn: "কারণ পাহাড়ে পৌঁছাতে পৌঁছাতে অন্ধকার হয়ে গিয়েছিল।" },
                        { speaker: "ラキブ", jp: "今度は、早く出発しましょう。", reading: "こんどは、はやくしゅっぱつしましょう。", en: "Let's set out early this time.", bn: "এবার তাড়াতাড়ি রওনা দিই চলো।" }
                    ]
                }
            },
            {
                id: "conditionals-ba-nara",
                title: "Conditionals II: ば & なら",
                conversation: {
                    title: "日本語が上手になりたい",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "日本語が上手になりたいです。どうしたらいいですか。", reading: "にほんごがじょうずになりたいです。どうしたらいいですか。", en: "I want to get good at Japanese. What should I do?", bn: "জাপানি ভাষায় দক্ষ হতে চাই। কী করলে ভালো হবে?" },
                        { speaker: "田中", jp: "毎日練習すれば、必ず上手になりますよ。", reading: "まいにちれんしゅうすれば、かならずじょうずになりますよ。", en: "If you practice every day, you'll definitely improve.", bn: "প্রতিদিন অনুশীলন করলে অবশ্যই দক্ষ হয়ে যাবে।" },
                        { speaker: "ラキブ", jp: "日本語を習いたいのなら、いい先生も必要ですよね。", reading: "にほんごをならいたいのなら、いいせんせいもひつようですよね。", en: "If I want to learn Japanese, I need a good teacher too, right?", bn: "জাপানি শিখতে চাইলে তো একজন ভালো শিক্ষকও দরকার, তাই না?" },
                        { speaker: "田中", jp: "そうですね。時間があれば、私が手伝います。", reading: "そうですね。じかんがあれば、わたしがてつだいます。", en: "That's true. If I have time, I'll help you.", bn: "ঠিক তাই। সময় থাকলে আমিই সাহায্য করব।" },
                        { speaker: "ラキブ", jp: "ありがとうございます。難しくても、頑張ります。", reading: "ありがとうございます。むずかしくても、がんばります。", en: "Thank you. Even if it's difficult, I'll do my best.", bn: "ধন্যবাদ। কঠিন হলেও চেষ্টা করে যাব।" },
                        { speaker: "田中", jp: "いいですね。雨の日でも、一緒に勉強しましょう。", reading: "いいですね。あめのひでも、いっしょにべんきょうしましょう。", en: "Good. Let's study together even on rainy days.", bn: "বেশ ভালো। বৃষ্টির দিনেও একসাথে পড়ব চলো।" },
                        { speaker: "ラキブ", jp: "分かりました。安ければ、新しい教科書も買いたいです。", reading: "わかりました。やすければ、あたらしいきょうかしょもかいたいです。", en: "Got it. If it's cheap, I want to buy a new textbook too.", bn: "বুঝেছি। সস্তা হলে নতুন পাঠ্যবইও কিনতে চাই।" },
                        { speaker: "田中", jp: "本屋に行くなら、一緒に行きましょう。", reading: "ほんやにいくなら、いっしょにいきましょう。", en: "If you're going to the bookstore, let's go together.", bn: "বইয়ের দোকানে যেতে চাইলে একসাথেই যাই চলো।" }
                    ]
                }
            },
            {
                id: "trying-preparing-finishing",
                title: "Trying, Preparing & Finishing Actions",
                conversation: {
                    title: "新しい店で",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "あの新しい店、行ってみましたか。", reading: "あのあたらしいみせ、いってみましたか。", en: "Have you tried going to that new shop?", bn: "ওই নতুন দোকানটায় গিয়েছিলে নাকি?" },
                        { speaker: "ラキブ", jp: "いいえ、まだです。今度、行ってみたいです。", reading: "いいえ、まだです。こんど、いってみたいです。", en: "No, not yet. I'd like to try going sometime.", bn: "না, এখনো যাইনি। এবার গিয়ে দেখতে চাই।" },
                        { speaker: "田中", jp: "人気がありますから、予約しておいたほうがいいですよ。", reading: "にんきがありますから、よやくしておいたほうがいいですよ。", en: "Since it's popular, you should make a reservation in advance.", bn: "ওটা জনপ্রিয় তো, তাই আগে থেকে বুকিং করে রাখাই ভালো।" },
                        { speaker: "ラキブ", jp: "分かりました。今、電話しておきます。", reading: "わかりました。いま、でんわしておきます。", en: "Got it. I'll call now, in advance.", bn: "বুঝেছি। এখনই ফোন করে রাখছি।" },
                        { speaker: "田中", jp: "すみません、さっき晩ご飯を全部食べてしまいました。", reading: "すみません、さっきばんごはんをぜんぶたべてしまいました。", en: "Sorry, I already ate up all of dinner earlier.", bn: "দুঃখিত, একটু আগে রাতের খাবার পুরোটাই খেয়ে ফেলেছি।" },
                        { speaker: "ラキブ", jp: "大丈夫です。デザートだけ食べ終わったら、出かけましょう。", reading: "だいじょうぶです。デザートだけたべおわったら、でかけましょう。", en: "It's fine. Once you finish eating just the dessert, let's head out.", bn: "কোনো ব্যাপার না। শুধু ডেজার্টটা খাওয়া শেষ হলেই বেরিয়ে পড়ি।" },
                        { speaker: "田中", jp: "はい。宿題も終わったし、時間がありますね。", reading: "はい。しゅくだいもおわったし、じかんがありますね。", en: "Yes. My homework is done too, so I have time.", bn: "হ্যাঁ। হোমওয়ার্কও শেষ, সময়ও আছে।" },
                        { speaker: "ラキブ", jp: "じゃ、一緒に新しい店を見てみましょう。", reading: "じゃ、いっしょにあたらしいみせをみてみましょう。", en: "Then, let's go see the new shop together.", bn: "তাহলে চলো, একসাথে নতুন দোকানটা দেখে আসি।" }
                    ]
                }
            },
            {
                id: "appearance-hearsay-sou",
                title: "Appearance & Hearsay: そうです",
                conversation: {
                    title: "天気予報",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "空が暗いですね。雨が降りそうです。", reading: "そらがくらいですね。あめがふりそうです。", en: "The sky is dark. It looks like it's going to rain.", bn: "আকাশ তো অন্ধকার হয়ে আছে। বৃষ্টি হবে বলে মনে হচ্ছে।" },
                        { speaker: "田中", jp: "天気予報によると、午後から大雨だそうです。", reading: "てんきよほうによると、ごごからおおあめだそうです。", en: "According to the weather forecast, I heard there'll be heavy rain from the afternoon.", bn: "আবহাওয়ার পূর্বাভাস অনুযায়ী, বিকেল থেকে নাকি ভারী বৃষ্টি হবে।" },
                        { speaker: "ラキブ", jp: "本当ですか。傘を持ってきて良かったです。", reading: "ほんとうですか。かさをもってきてよかったです。", en: "Really? I'm glad I brought an umbrella.", bn: "সত্যি? ছাতা নিয়ে আসা ভালোই হলো তাহলে।" },
                        { speaker: "田中", jp: "このケーキ、美味しそうですね。一つどうですか。", reading: "このケーキ、おいしそうですね。ひとつどうですか。", en: "This cake looks delicious. Would you like one?", bn: "এই কেকটা তো দেখতে সুস্বাদু লাগছে। একটা নেবে?" },
                        { speaker: "ラキブ", jp: "ありがとうございます。あ、外で誰かが急に歌い出しましたよ。", reading: "ありがとうございます。あ、そとでだれかがきゅうにうたいだしましたよ。", en: "Thank you. Oh, someone outside suddenly started singing.", bn: "ধন্যবাদ। আরে, বাইরে কেউ হঠাৎ গান গাইতে শুরু করল দেখো।" },
                        { speaker: "田中", jp: "本当ですね。あの人は歌手らしいですよ。", reading: "ほんとうですね。あのひとはかしゅらしいですよ。", en: "True. I hear that person is a singer.", bn: "তাই তো। শুনেছি ওই লোকটা নাকি একজন গায়ক।" },
                        { speaker: "ラキブ", jp: "そうなんですか。じゃ、雨が降り出す前に、聞きましょう。", reading: "そうなんですか。じゃ、あめがふりだすまえに、ききましょう。", en: "Is that so? Then let's listen before the rain starts.", bn: "তাই নাকি? তাহলে বৃষ্টি শুরু হওয়ার আগেই শুনে নিই চলো।" },
                        { speaker: "田中", jp: "いいですね。", reading: "いいですね。", en: "Sounds good.", bn: "বেশ ভালো।" }
                    ]
                }
            },
            {
                id: "seeming-and-comparing",
                title: "Seeming & Comparing: ようだ・らしい・みたい",
                conversation: {
                    title: "有名なレストラン",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "あの店、いつも人がたくさん並んでいますね。", reading: "あのみせ、いつもひとがたくさんならんでいますね。", en: "That shop always has a lot of people lining up.", bn: "ওই দোকানটায় তো সবসময় অনেক মানুষ লাইনে দাঁড়িয়ে থাকে দেখো।" },
                        { speaker: "ラキブ", jp: "はい。とても人気があるようです。", reading: "はい。とてもにんきがあるようです。", en: "Yes. It seems to be very popular.", bn: "হ্যাঁ। খুব জনপ্রিয় বলে মনে হচ্ছে।" },
                        { speaker: "田中", jp: "料理がおいしいらしいですよ。友達がそう言っていました。", reading: "りょうりがおいしいらしいですよ。ともだちがそういっていました。", en: "I hear the food is delicious. My friend said so.", bn: "শুনেছি খাবারটা নাকি সুস্বাদু। বন্ধু তাই বলেছিল।" },
                        { speaker: "ラキブ", jp: "値段も高くないみたいですね。", reading: "ねだんもたかくないみたいですね。", en: "It seems the price isn't high either.", bn: "দামও বেশি না বলে মনে হচ্ছে।" },
                        { speaker: "田中", jp: "そうですね。まるで家族のようなお店だと聞きました。", reading: "そうですね。まるでかぞくのようなおみせだときました。", en: "That's right. I heard it's like a family-run shop.", bn: "ঠিক তাই। শুনেছি এটা যেন একদম পারিবারিক দোকানের মতো।" },
                        { speaker: "ラキブ", jp: "楽しみですね。今度、一緒に行ってみましょう。", reading: "たのしみですね。こんど、いっしょにいってみましょう。", en: "I'm looking forward to it. Let's go together sometime.", bn: "বেশ আগ্রহ জাগছে তো। এবার একসাথে গিয়ে দেখি চলো।" },
                        { speaker: "田中", jp: "はい。今週末は忙しいようですから、来週はどうですか。", reading: "はい。こんしゅうまつはいそがしいようですから、らいしゅうはどうですか。", en: "Yes. It seems I'm busy this weekend, so how about next week?", bn: "হ্যাঁ। এই সপ্তাহান্তে ব্যস্ত থাকব বলে মনে হচ্ছে, তাহলে আগামী সপ্তাহে কেমন হয়?" },
                        { speaker: "ラキブ", jp: "いいですよ。楽しみに待っています。", reading: "いいですよ。たのしみにまっています。", en: "Sounds good. I'll be looking forward to it.", bn: "ঠিক আছে। অপেক্ষায় থাকব।" }
                    ]
                }
            },
            {
                id: "giving-receiving-favors",
                title: "Giving & Receiving Favors",
                conversation: {
                    title: "引っ越しの手伝い",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "今度の日曜日、引っ越しをします。", reading: "こんどのにちようび、ひっこしをします。", en: "I'm moving this coming Sunday.", bn: "আগামী রবিবার বাসা পরিবর্তন করছি।" },
                        { speaker: "田中", jp: "大変ですね。荷物を運ぶのを手伝ってあげましょうか。", reading: "たいへんですね。にもつをはこぶのをてつだってあげましょうか。", en: "That sounds tough. Shall I help you carry your things?", bn: "কঠিন কাজ তো। জিনিসপত্র বহন করতে সাহায্য করি?" },
                        { speaker: "ラキブ", jp: "本当ですか。手伝ってくれるなら、とても助かります。", reading: "ほんとうですか。てつだってくれるなら、とてもたすかります。", en: "Really? If you help me, it would be a great help.", bn: "সত্যি? সাহায্য করলে খুব উপকার হবে।" },
                        { speaker: "田中", jp: "友達にも車を貸してもらいます。", reading: "ともだちにもくるまをかしてもらいます。", en: "I'll also have a friend lend me a car.", bn: "বন্ধুর কাছ থেকেও গাড়ি ধার নেব।" },
                        { speaker: "ラキブ", jp: "すみません、朝九時に来ていただけませんか。", reading: "すみません、あさくじにきていただけませんか。", en: "Sorry, could you come at nine in the morning?", bn: "দুঃখিত, সকাল নয়টায় আসতে পারবে কি?" },
                        { speaker: "田中", jp: "はい、大丈夫です。他に何か手伝ってほしいことがありますか。", reading: "はい、だいじょうぶです。ほかになにかてつだってほしいことがありますか。", en: "Yes, that's fine. Is there anything else you'd like help with?", bn: "হ্যাঁ, ঠিক আছে। আর কিছুতে সাহায্য দরকার?" },
                        { speaker: "ラキブ", jp: "箱を組み立ててほしいです。一人では時間がかかりますから。", reading: "はこをくみたててほしいです。ひとりではじかんがかかりますから。", en: "I'd like you to help assemble the boxes. It takes time to do alone.", bn: "বাক্সগুলো জোড়া লাগাতে সাহায্য চাই। একা করলে সময় লাগবে তো।" },
                        { speaker: "田中", jp: "分かりました。日曜日、頑張りましょう。", reading: "わかりました。にちようび、がんばりましょう。", en: "Got it. Let's do our best on Sunday.", bn: "বুঝেছি। রবিবার একসাথে করে ফেলি।" }
                    ]
                }
            },
            {
                id: "potential-form-ability",
                title: "Potential Form & Ability",
                conversation: {
                    title: "マラソン大会",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさんは何キロ走れますか。", reading: "ラキブさんはなんキロはしれますか。", en: "How many kilometers can you run, Rakib?", bn: "রাকিব, তুমি কত কিলোমিটার দৌড়াতে পারো?" },
                        { speaker: "ラキブ", jp: "十キロぐらいなら走れます。フルマラソンはまだ走ることができません。", reading: "じゅっキロぐらいならはしれます。フルマラソンはまだはしることができません。", en: "I can run about ten kilometers. I still can't run a full marathon.", bn: "প্রায় দশ কিলোমিটার দৌড়াতে পারি। পুরো ম্যারাথন এখনো দৌড়াতে পারি না।" },
                        { speaker: "田中", jp: "すごいですね。私は五キロしか走れません。", reading: "すごいですね。わたしはごキロしかはしれません。", en: "That's amazing. I can only run five kilometers.", bn: "দারুণ তো। আমি মাত্র পাঁচ কিলোমিটার দৌড়াতে পারি।" },
                        { speaker: "ラキブ", jp: "練習すれば、もっと長く走れるようになりますよ。", reading: "れんしゅうすれば、もっとながくはしれるようになりますよ。", en: "If you practice, you'll become able to run longer.", bn: "অনুশীলন করলে আরও বেশি দূরত্ব দৌড়াতে পারবে।" },
                        { speaker: "田中", jp: "この公園から海が見えますね。", reading: "このこうえんからうみがみえますね。", en: "You can see the ocean from this park.", bn: "এই পার্ক থেকে সমুদ্র দেখা যায় দেখো।" },
                        { speaker: "ラキブ", jp: "はい、鳥の声も聞こえます。走るのに気持ちがいい場所です。", reading: "はい、とりのこえもきこえます。はしるのにきもちがいいばしょです。", en: "Yes, you can hear the birds too. It's a nice place to run.", bn: "হ্যাঁ, পাখির ডাকও শোনা যায়। দৌড়ানোর জন্য বেশ আরামদায়ক জায়গা।" },
                        { speaker: "田中", jp: "来月のマラソン大会に参加することができますか。", reading: "らいげつのマラソンたいかいにさんかすることができますか。", en: "Can you participate in next month's marathon race?", bn: "আগামী মাসের ম্যারাথন প্রতিযোগিতায় অংশ নিতে পারবে?" },
                        { speaker: "ラキブ", jp: "はい、もう申し込みました。一緒に頑張りましょう。", reading: "はい、もうもうしこみました。いっしょにがんばりましょう。", en: "Yes, I've already signed up. Let's do our best together.", bn: "হ্যাঁ, ইতিমধ্যে নিবন্ধন করে ফেলেছি। একসাথে চেষ্টা করি চলো।" }
                    ]
                }
            },
            {
                id: "passive-voice",
                title: "Passive Voice",
                conversation: {
                    title: "会議での出来事",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "今日の会議はどうでしたか。", reading: "きょうのかいぎはどうでしたか。", en: "How was today's meeting?", bn: "আজকের মিটিং কেমন হলো?" },
                        { speaker: "田中", jp: "部長にみんなの前で褒められました。", reading: "ぶちょうにみんなのまえでほめられました。", en: "I was praised by the manager in front of everyone.", bn: "সবার সামনে ম্যানেজার আমাকে প্রশংসা করেছেন।" },
                        { speaker: "ラキブ", jp: "すごいですね。おめでとうございます。", reading: "すごいですね。おめでとうございます。", en: "That's amazing. Congratulations.", bn: "দারুণ তো। অভিনন্দন।" },
                        { speaker: "田中", jp: "ありがとうございます。でも、帰るとき、雨に降られて大変でした。", reading: "ありがとうございます。でも、かえるとき、あめにふられてたいへんでした。", en: "Thank you. But on my way home, I got caught in the rain and it was rough.", bn: "ধন্যবাদ। তবে ফেরার সময় বৃষ্টিতে ভিজে খুব কষ্ট হয়েছে।" },
                        { speaker: "ラキブ", jp: "それは大変でしたね。この本、有名な作家によって書かれたそうです。", reading: "それはたいへんでしたね。このほん、ゆうめいなさっかによってかかれたそうです。", en: "That sounds tough. I heard this book was written by a famous author.", bn: "কষ্ট হয়েছে তাহলে। এই বইটা নাকি একজন বিখ্যাত লেখকের লেখা।" },
                        { speaker: "田中", jp: "本当ですか。読んでみたいです。", reading: "ほんとうですか。よんでみたいです。", en: "Really? I'd like to try reading it.", bn: "সত্যি? পড়ে দেখতে চাই।" },
                        { speaker: "ラキブ", jp: "電車の中で、足を踏まれたことがありますか。", reading: "でんしゃのなかで、あしをふまれたことがありますか。", en: "Have you ever had your foot stepped on in the train?", bn: "ট্রেনে কখনো কারো পায়ে চাপা পড়েছ?" },
                        { speaker: "田中", jp: "はい、何度もあります。", reading: "はい、なんどもあります。", en: "Yes, many times.", bn: "হ্যাঁ, অনেকবার হয়েছে।" }
                    ]
                }
            },
            {
                id: "causative-form",
                title: "Causative Form",
                conversation: {
                    title: "子供のしつけ",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "お子さんに、毎日野菜を食べさせていますか。", reading: "おこさんに、まいにちやさいをたべさせていますか。", en: "Do you make your child eat vegetables every day?", bn: "তোমার বাচ্চাকে কি প্রতিদিন সবজি খাওয়াও?" },
                        { speaker: "ラキブ", jp: "はい、食べさせています。でも、なかなか食べてくれません。", reading: "はい、たべさせています。でも、なかなかたべてくれません。", en: "Yes, I make them. But they won't easily eat them.", bn: "হ্যাঁ, খাওয়াই। তবে সহজে খেতে চায় না।" },
                        { speaker: "田中", jp: "大変ですね。うちの子は、毎晩本を読ませています。", reading: "たいへんですね。うちのこは、まいばんほんをよませています。", en: "That sounds hard. I have my child read a book every night.", bn: "কঠিন তো। আমার বাচ্চাকে প্রতি রাতে বই পড়াই।" },
                        { speaker: "ラキブ", jp: "いいですね。あ、ちょっとこの資料を確認させてください。", reading: "いいですね。あ、ちょっとこのしりょうをかくにんさせてください。", en: "That's nice. Oh, please let me check this document for a moment.", bn: "ভালোই তো। ও, একটু এই কাগজটা দেখে নিতে দাও।" },
                        { speaker: "田中", jp: "どうぞ。今日は早く帰らせてもらいます。子供が熱を出しましたから。", reading: "どうぞ。きょうははやくかえらせてもらいます。こどもがねつをだしましたから。", en: "Go ahead. I'll go home early today, if that's okay — my child came down with a fever.", bn: "নাও। আজ একটু তাড়াতাড়ি বাসায় ফিরতে হবে, বাচ্চার জ্বর এসেছে তো।" },
                        { speaker: "ラキブ", jp: "それは心配ですね。お大事に。", reading: "それはしんぱいですね。おだいじに。", en: "That's worrying. Take care.", bn: "চিন্তার বিষয় তো। যত্ন নিও।" },
                        { speaker: "田中", jp: "ありがとうございます。明日、また休ませていただくかもしれません。", reading: "ありがとうございます。あした、またやすませていただくかもしれません。", en: "Thank you. I might need to take tomorrow off as well.", bn: "ধন্যবাদ। আগামীকালও হয়তো ছুটি নিতে হতে পারে।" },
                        { speaker: "ラキブ", jp: "大丈夫ですよ。子供のことを優先してください。", reading: "だいじょうぶですよ。こどものことをゆうせんしてください。", en: "That's fine. Please prioritize your child.", bn: "কোনো ব্যাপার না। বাচ্চার দিকেই আগে খেয়াল রেখো।" }
                    ]
                }
            },
            {
                id: "causative-passive",
                title: "Causative-Passive Form",
                conversation: {
                    title: "子供のころの思い出",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "子供のころ、よく親に野菜を食べさせられました。", reading: "こどものころ、よくおやにやさいをたべさせられました。", en: "When I was a child, my parents often made me eat vegetables.", bn: "ছোটবেলায় বাবা-মা প্রায়ই জোর করে সবজি খাওয়াতেন।" },
                        { speaker: "田中", jp: "私もです。学校でも、漢字を百回書かされました。", reading: "わたしもです。がっこうでも、かんじをひゃっかいかかされました。", en: "Me too. At school, I was also made to write kanji a hundred times.", bn: "আমারও তাই। স্কুলেও কাঞ্জি একশোবার লেখাতে বাধ্য করা হতো।" },
                        { speaker: "ラキブ", jp: "大変でしたね。パーティーで歌を歌わされたこともあります。", reading: "たいへんでしたね。パーティーでうたをうたわされたこともあります。", en: "That sounds tough. I've also been made to sing a song at a party.", bn: "কষ্টের ছিল তো। পার্টিতে জোর করে গানও গাওয়ানো হয়েছিল একবার।" },
                        { speaker: "田中", jp: "それは恥ずかしいですね。私はその映画を見て、泣かされました。", reading: "それははずかしいですね。わたしはそのえいがをみて、なかされました。", en: "That's embarrassing. That movie made me cry.", bn: "লজ্জার ব্যাপার তো। আমাকে তো ওই সিনেমাটা দেখে কাঁদিয়ে দিয়েছিল।" },
                        { speaker: "ラキブ", jp: "分かります。彼の話にはいつも驚かされますよね。", reading: "わかります。かれのはなしにはいつもおどろかされますよね。", en: "I understand. His stories always surprise us, don't they?", bn: "বুঝি। তার গল্পগুলো সবসময়ই অবাক করে দেয়, তাই না?" },
                        { speaker: "田中", jp: "本当に。でも、いい思い出です。", reading: "ほんとうに。でも、いいおもいでです。", en: "Really. But they're good memories.", bn: "সত্যিই তাই। তবে সুন্দর স্মৃতি।" },
                        { speaker: "ラキブ", jp: "娘の一言に、よく考えさせられます。", reading: "むすめのひとことに、よくかんがえさせられます。", en: "My daughter's remarks often make me think.", bn: "মেয়ের একটা কথায় প্রায়ই ভাবতে বাধ্য হই।" },
                        { speaker: "田中", jp: "子供から学ぶことも多いですね。", reading: "こどもからまなぶこともおおいですね。", en: "There's a lot to learn from children too.", bn: "বাচ্চাদের কাছ থেকেও অনেক কিছু শেখার আছে, তাই না।" }
                    ]
                }
            },
            {
                id: "respectful-keigo",
                title: "Respectful Keigo (尊敬語)",
                conversation: {
                    title: "敬語の練習",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "田中さん、社長はもう会社にいらっしゃいますか。", reading: "たなかさん、しゃちょうはもうかいしゃにいらっしゃいますか。", en: "Tanaka, has the president already arrived at the office?", bn: "তানাকা, প্রেসিডেন্ট কি ইতিমধ্যে অফিসে চলে এসেছেন?" },
                        { speaker: "田中", jp: "はい、もういらっしゃいます。何かおっしゃっていましたよ。", reading: "はい、もういらっしゃいます。なにかおっしゃっていましたよ。", en: "Yes, he's already here. He said something.", bn: "হ্যাঁ, ইতিমধ্যে এসে গেছেন। কিছু একটা বলেছিলেন।" },
                        { speaker: "ラキブ", jp: "そうですか。何とおっしゃいましたか。", reading: "そうですか。なんとおっしゃいましたか。", en: "I see. What did he say?", bn: "তাই নাকি? কী বলেছিলেন?" },
                        { speaker: "田中", jp: "「会議の資料をお読みになりましたか」とおっしゃいました。", reading: "「かいぎのしりょうをおよみになりましたか」とおっしゃいました。", en: "He said, \"Have you read the meeting materials?\"", bn: "\"মিটিংয়ের কাগজপত্র পড়েছেন কি?\" বলেছিলেন।" },
                        { speaker: "ラキブ", jp: "大変です。まだ読んでいません。少々お待ちくださいと伝えてください。", reading: "たいへんです。まだよんでいません。しょうしょうおまちくださいとつたえてください。", en: "That's a problem. I haven't read them yet. Please tell him to wait a moment.", bn: "সমস্যা তো। এখনো পড়িনি। একটু অপেক্ষা করতে বলে দাও।" },
                        { speaker: "田中", jp: "分かりました。お茶もお持ちしましょうか。", reading: "わかりました。おちゃもおもちしましょうか。", en: "Understood. Shall I bring some tea as well?", bn: "বুঝেছি। চা-ও নিয়ে যাই কি?" },
                        { speaker: "ラキブ", jp: "お願いします。社長にどうぞ召し上がってくださいと伝えてください。", reading: "おねがいします。しゃちょうにどうぞめしあがってくださいとつたえてください。", en: "Please do. Please tell the president to go ahead and enjoy it.", bn: "দাও। প্রেসিডেন্টকে বলে দাও দয়া করে খেয়ে নিতে।" },
                        { speaker: "田中", jp: "はい、伝えます。", reading: "はい、つたえます。", en: "Yes, I'll tell him.", bn: "হ্যাঁ, বলে দেব।" }
                    ]
                }
            },
            {
                id: "humble-keigo",
                title: "Humble Keigo (謙譲語)",
                conversation: {
                    title: "面接の練習",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "明日、面接がありますよね。練習しましょうか。", reading: "あした、めんせつがありますよね。れんしゅうしましょうか。", en: "You have an interview tomorrow, right? Shall we practice?", bn: "আগামীকাল তো ইন্টারভিউ আছে। অনুশীলন করি চলো?" },
                        { speaker: "ラキブ", jp: "お願いします。まず、自己紹介からですか。", reading: "おねがいします。まず、じこしょうかいからですか。", en: "Please. Should I start with a self-introduction?", bn: "দয়া করে করাও। প্রথমে কি নিজের পরিচয় দিয়ে শুরু করব?" },
                        { speaker: "田中", jp: "はい、どうぞ。", reading: "はい、どうぞ。", en: "Yes, go ahead.", bn: "হ্যাঁ, শুরু করো।" },
                        { speaker: "ラキブ", jp: "ラキブと申します。よろしくお願いいたします。", reading: "ラキブともうします。よろしくおねがいいたします。", en: "My name is Rakib. Pleased to meet you.", bn: "আমার নাম রাকিব। আপনার সাথে কাজ করতে পেরে ভালো লাগবে।" },
                        { speaker: "田中", jp: "いいですね。「明日、そちらに伺います」も言えますか。", reading: "いいですね。「あした、そちらにうかがいます」もいえますか。", en: "Good. Can you also say, \"I will visit you there tomorrow\"?", bn: "বেশ ভালো। \"আগামীকাল আপনার কাছে যাব\" এটাও বলতে পারবে?" },
                        { speaker: "ラキブ", jp: "明日、そちらに伺います。資料は拝見しました。", reading: "あした、そちらにうかがいます。しりょうははいけんしました。", en: "I will visit you there tomorrow. I have looked over the materials.", bn: "আগামীকাল আপনার কাছে যাব। কাগজপত্র দেখে নিয়েছি।" },
                        { speaker: "田中", jp: "完璧です。「うちの会社のことをご存じですか」と聞かれたら、何と答えますか。", reading: "かんぺきです。「うちのかいしゃのことをごぞんじですか」ときかれたら、なんとこたえますか。", en: "Perfect. If they ask, \"Do you know about our company?\" what will you answer?", bn: "একদম নিখুঁত। \"আমাদের কোম্পানি সম্পর্কে জানেন কি?\" জিজ্ঞেস করলে কী উত্তর দেবে?" },
                        { speaker: "ラキブ", jp: "「はい、存じております」と申し上げます。", reading: "「はい、ぞんじております」ともうしあげます。", en: "I'll say, \"Yes, I am aware of it.\"", bn: "\"হ্যাঁ, জানি\" বলে বিনয়ের সাথে উত্তর দেব।" }
                    ]
                }
            },
            {
                id: "commands-and-orders",
                title: "Commands, Orders & Strong Requests",
                conversation: {
                    title: "厳しい先生の思い出",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "田中さんの高校の先生は厳しかったですか。", reading: "たなかさんのこうこうのせんせいはきびしかったですか。", en: "Was your high school teacher strict, Tanaka?", bn: "তানাকা, তোমার হাইস্কুলের শিক্ষক কি কঠোর ছিলেন?" },
                        { speaker: "田中", jp: "はい、とても厳しかったです。よく「早く来い」と言われました。", reading: "はい、とてもきびしかったです。よく「はやくこい」といわれました。", en: "Yes, very strict. I was often told, \"Come quickly!\"", bn: "হ্যাঁ, খুব কঠোর ছিলেন। প্রায়ই বলতেন, \"তাড়াতাড়ি আয়!\"" },
                        { speaker: "ラキブ", jp: "怖いですね。私の先生は「静かにしろ」とよく言っていました。", reading: "こわいですね。わたしのせんせいは「しずかにしろ」とよくいっていました。", en: "That's scary. My teacher often said, \"Be quiet!\"", bn: "ভয়ংকর তো। আমার শিক্ষক প্রায়ই বলতেন, \"চুপ থাক!\"" },
                        { speaker: "田中", jp: "分かります。「廊下を走るな」というルールもありましたね。", reading: "わかります。「ろうかをはしるな」というルールもありましたね。", en: "I know what you mean. There was also a rule, \"Don't run in the hallway.\"", bn: "বুঝি। \"বারান্দায় দৌড়াবি না\" নিয়মও ছিল, তাই না।" },
                        { speaker: "ラキブ", jp: "うちの学校にもありました。「宿題を忘れるな」ともよく言われました。", reading: "うちのがっこうにもありました。「しゅくだいをわすれるな」ともよくいわれました。", en: "We had that at my school too. I was also often told, \"Don't forget your homework.\"", bn: "আমাদের স্কুলেও ছিল। \"হোমওয়ার্ক ভুলবি না\" এটাও প্রায়ই শুনতে হতো।" },
                        { speaker: "田中", jp: "母にも「野菜を食べなさい」とよく言われました。", reading: "ははにも「やさいをたべなさい」とよくいわれました。", en: "My mother also often told me, \"Eat your vegetables.\"", bn: "মায়ের কাছ থেকেও প্রায়ই শুনতাম, \"সবজি খাও।\"" },
                        { speaker: "ラキブ", jp: "懐かしいですね。でも、そのおかげで、今の私たちがあります。", reading: "なつかしいですね。でも、そのおかげで、いまのわたしたちがあります。", en: "That's nostalgic. But thanks to that, we are who we are today.", bn: "নস্টালজিক লাগছে তো। তবে তার কারণেই আজকের আমরা এমন হয়েছি।" },
                        { speaker: "田中", jp: "そうですね。今度、先生に会いに行きましょう。", reading: "そうですね。こんど、せんせいにあいにいきましょう。", en: "That's true. Let's go visit our teachers sometime.", bn: "ঠিক তাই। একদিন শিক্ষকদের সাথে দেখা করতে যাই চলো।" }
                    ]
                }
            },
            {
                id: "volitional-and-intentions",
                title: "Volitional Form & Intentions",
                conversation: {
                    title: "将来の夢",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさんは将来、何をしようと思っていますか。", reading: "ラキブさんはしょうらい、なにをしようとおもっていますか。", en: "What are you thinking of doing in the future, Rakib?", bn: "রাকিব, ভবিষ্যতে কী করবে বলে ভাবছ?" },
                        { speaker: "ラキブ", jp: "自分の会社を作ろうと思っています。田中さんは?", reading: "じぶんのかいしゃをつくろうとおもっています。たなかさんは?", en: "I'm thinking of starting my own company. What about you, Tanaka?", bn: "নিজের একটা কোম্পানি বানাব বলে ভাবছি। তানাকা, তুমি?" },
                        { speaker: "田中", jp: "私は大学院に進学するつもりです。", reading: "わたしはだいがくいんにしんがくするつもりです。", en: "I intend to go on to graduate school.", bn: "আমি গ্র্যাজুয়েট স্কুলে পড়াশোনা চালিয়ে যাওয়ার ইচ্ছা করছি।" },
                        { speaker: "ラキブ", jp: "いいですね。いつごろ卒業する予定ですか。", reading: "いいですね。いつごろそつぎょうするよていですか。", en: "That's nice. When are you scheduled to graduate?", bn: "ভালো তো। কখন গ্র্যাজুয়েট হওয়ার পরিকল্পনা?" },
                        { speaker: "田中", jp: "来年の三月に卒業する予定です。そのあと、少し休もうと思います。", reading: "らいねんのさんがつにそつぎょうするよていです。そのあと、すこしやすもうとおもいます。", en: "I'm scheduled to graduate next March. After that, I'm thinking of resting a bit.", bn: "আগামী বছরের মার্চে গ্র্যাজুয়েট হওয়ার কথা। তারপর একটু বিশ্রাম নেব বলে ভাবছি।" },
                        { speaker: "ラキブ", jp: "いいですね。私は今年中に準備を始めるつもりです。", reading: "いいですね。わたしはことしじゅうにじゅんびをはじめるつもりです。", en: "That's good. I intend to start preparing by the end of this year.", bn: "ভালো তো। আমি এই বছরের মধ্যেই প্রস্তুতি শুরু করার ইচ্ছা করছি।" },
                        { speaker: "田中", jp: "応援しています。困ったことがあれば、いつでも相談しに行こうと思っています。", reading: "おうえんしています。こまったことがあれば、いつでもそうだんしにいこうとおもっています。", en: "I'm rooting for you. If you have any trouble, I'm thinking of coming to you for advice anytime.", bn: "পাশে আছি। কোনো সমস্যা হলে যেকোনো সময় পরামর্শ নিতে যাব বলে ভাবছি।" },
                        { speaker: "ラキブ", jp: "ありがとうございます。頑張りましょう。", reading: "ありがとうございます。がんばりましょう。", en: "Thank you. Let's do our best.", bn: "ধন্যবাদ। একসাথে চেষ্টা করি চলো।" }
                    ]
                }
            },
            {
                id: "reasons-and-connectors",
                title: "Reasons & Connecting Sentences",
                conversation: {
                    title: "休みの日の過ごし方",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "休みの日は何をしますか。", reading: "やすみのひはなにをしますか。", en: "What do you do on your days off?", bn: "ছুটির দিনে কী করো?" },
                        { speaker: "田中", jp: "本を読んだり、料理をしたりします。", reading: "ほんをよんだり、りょうりをしたりします。", en: "I do things like reading books and cooking.", bn: "বই পড়া, রান্না করা—এসবই করি।" },
                        { speaker: "ラキブ", jp: "いいですね。この店は安いし、料理もおいしいし、よく来ます。", reading: "いいですね。このみせはやすいし、りょうりもおいしいし、よくきます。", en: "Nice. This shop is cheap and the food is delicious, so I come here often.", bn: "ভালোই তো। এই দোকানটা সস্তাও, খাবারও সুস্বাদু, তাই প্রায়ই আসি।" },
                        { speaker: "田中", jp: "本当ですね。音楽を聞きながら食べると、もっとおいしく感じます。", reading: "ほんとうですね。おんがくをききながらたべると、もっとおいしくかんじます。", en: "True. If you eat while listening to music, it feels even more delicious.", bn: "ঠিক তাই। গান শুনতে শুনতে খেলে আরও সুস্বাদু মনে হয়।" },
                        { speaker: "ラキブ", jp: "そうですね。私は散歩したり、写真を撮ったりするのも好きです。", reading: "そうですね。わたしはさんぽしたり、しゃしんをとったりするのもすきです。", en: "That's right. I also like doing things like taking walks and taking photos.", bn: "ঠিক। আমারও হাঁটাহাঁটি করা, ছবি তোলা—এসবও পছন্দ।" },
                        { speaker: "田中", jp: "頭も痛いし、少し疲れているし、今日はゆっくりしたいです。", reading: "あたまもいたいし、すこしつかれているし、きょうはゆっくりしたいです。", en: "My head hurts and I'm a bit tired, so I want to relax today.", bn: "মাথাও ব্যথা করছে, একটু ক্লান্তও লাগছে, তাই আজ একটু আরাম করতে চাই।" },
                        { speaker: "ラキブ", jp: "大丈夫ですか。休みながら、無理をしないでくださいね。", reading: "だいじょうぶですか。やすみながら、むりをしないでくださいね。", en: "Are you okay? Please rest and don't push yourself too hard.", bn: "ঠিক আছ তো? বিশ্রাম নাও, নিজেকে বেশি কষ্ট দিও না।" },
                        { speaker: "田中", jp: "ありがとうございます。少し休んだら、元気になると思います。", reading: "ありがとうございます。すこしやすんだら、げんきになるとおもいます。", en: "Thank you. I think I'll feel better after resting a bit.", bn: "ধন্যবাদ। একটু বিশ্রাম নিলে ভালো লাগবে বলে মনে হয়।" }
                    ]
                }
            },
            {
                id: "concession-and-contrast",
                title: "Concession, Contrast & Unexpected Outcomes",
                conversation: {
                    title: "諦めない気持ち",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "試験、どうでしたか。", reading: "しけん、どうでしたか。", en: "How was the exam?", bn: "পরীক্ষা কেমন হলো?" },
                        { speaker: "ラキブ", jp: "一生懸命勉強したのに、あまりできませんでした。", reading: "いっしょうけんめいべんきょうしたのに、あまりできませんでした。", en: "Even though I studied hard, I couldn't do very well.", bn: "প্রাণপণ পড়াশোনা করেছিলাম, তবুও ভালো হয়নি।" },
                        { speaker: "田中", jp: "それは残念でしたね。でも、それでも、諦めないでくださいね。", reading: "それはざんねんでしたね。でも、それでも、あきらめないでくださいね。", en: "That's a shame. But even so, please don't give up.", bn: "খারাপ লাগল শুনে। তবে তাও, হাল ছেড়ো না কিন্তু।" },
                        { speaker: "ラキブ", jp: "はい。難しいけれど、来月もう一度受けます。", reading: "はい。むずかしいけれど、らいげつもういちどうけます。", en: "Yes. It's difficult, but I'll take it again next month.", bn: "হ্যাঁ। কঠিন হলেও আগামী মাসে আবার পরীক্ষা দেব।" },
                        { speaker: "田中", jp: "いいですね。天気がいいのに、今日はずっと勉強していましたか。", reading: "いいですね。てんきがいいのに、きょうはずっとべんきょうしていましたか。", en: "That's good. Even though the weather is nice, were you studying the whole time today?", bn: "ভালো তো। আবহাওয়া এত সুন্দর হওয়া সত্ত্বেও আজ সারাদিন পড়াশোনা করছিলে?" },
                        { speaker: "ラキブ", jp: "はい。外に出たかったけれど、我慢しました。", reading: "はい。そとにでたかったけれど、がまんしました。", en: "Yes. I wanted to go outside, but I held back.", bn: "হ্যাঁ। বাইরে যেতে ইচ্ছা করছিল, তবু সামলে নিয়েছি।" },
                        { speaker: "田中", jp: "偉いですね。それでも、たまには休んでくださいね。", reading: "えらいですね。それでも、たまにはやすんでくださいね。", en: "That's admirable. Even so, please rest sometimes too.", bn: "খুব ভালো। তবু, মাঝেমধ্যে একটু বিশ্রামও নিও কিন্তু।" },
                        { speaker: "ラキブ", jp: "分かりました。ありがとうございます。", reading: "わかりました。ありがとうございます。", en: "Understood. Thank you.", bn: "বুঝেছি। ধন্যবাদ।" }
                    ]
                }
            },
            {
                id: "quoting-and-reported-speech",
                title: "Quoting & Reported Speech",
                conversation: {
                    title: "噂を聞きました",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "田中さん、山田さんが来月結婚するって聞きましたか。", reading: "たなかさん、やまださんがらいげつけっこんするってききましたか。", en: "Tanaka, did you hear that Yamada is getting married next month?", bn: "তানাকা, শুনেছ ইয়ামাদা আগামী মাসে বিয়ে করছে?" },
                        { speaker: "田中", jp: "はい、聞きました。とても幸せだと言っていました。", reading: "はい、ききました。とてもしあわせだといっていました。", en: "Yes, I heard. She said she's very happy.", bn: "হ্যাঁ, শুনেছি। বলেছিল খুব খুশি।" },
                        { speaker: "ラキブ", jp: "私もそう思います。相手はとても優しい人だということです。", reading: "わたしもそうおもいます。あいてはとてもやさしいひとだということです。", en: "I think so too. I hear the partner is a very kind person.", bn: "আমারও তাই মনে হয়। শুনেছি ওর সঙ্গী নাকি খুব ভালো মানুষ।" },
                        { speaker: "田中", jp: "いいですね。私は、二人はきっと幸せになると思います。", reading: "いいですね。わたしは、ふたりはきっとしあわせになるとおもいます。", en: "That's wonderful. I think the two of them will surely be happy.", bn: "ভালো তো। আমার মনে হয় দুজনেই নিশ্চয়ই সুখী হবে।" },
                        { speaker: "ラキブ", jp: "田中さんも結婚するつもりだって、誰かが言っていましたよ。", reading: "たなかさんもけっこんするつもりだって、だれかがいっていましたよ。", en: "Someone said that you're planning to get married too, Tanaka.", bn: "তানাকা, তুমিও নাকি বিয়ে করার ইচ্ছা করছ, কেউ একজন বলছিল।" },
                        { speaker: "田中", jp: "え、誰がそんなことを言っていましたか。", reading: "え、だれがそんなことをいっていましたか。", en: "What, who said such a thing?", bn: "আরে, কে এমন কথা বলল?" },
                        { speaker: "ラキブ", jp: "冗談です。でも、いつか幸せになってほしいということです。", reading: "じょうだんです。でも、いつかしあわせになってほしいということです。", en: "I'm joking. But it means I hope you'll be happy someday.", bn: "মজা করছিলাম। তবে বলতে চাইছি, একদিন তুমি সুখী হও এটাই চাই।" },
                        { speaker: "田中", jp: "ありがとうございます。", reading: "ありがとうございます。", en: "Thank you.", bn: "ধন্যবাদ।" }
                    ]
                }
            },
            {
                id: "degree-and-extent",
                title: "Degree & Extent",
                conversation: {
                    title: "昨日の飲み会",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "昨日、飲みすぎましたか。顔色が悪いですよ。", reading: "きのう、のみすぎましたか。かおいろがわるいですよ。", en: "Did you drink too much yesterday? You look pale.", bn: "গতকাল কি বেশি মদ খেয়েছিলে? মুখটা ফ্যাকাশে দেখাচ্ছে তো।" },
                        { speaker: "ラキブ", jp: "はい、少し飲みすぎました。頭が痛いです。", reading: "はい、すこしのみすぎました。あたまがいたいです。", en: "Yes, I drank a bit too much. My head hurts.", bn: "হ্যাঁ, একটু বেশিই খেয়ে ফেলেছিলাম। মাথা ব্যথা করছে।" },
                        { speaker: "田中", jp: "大丈夫ですか。動けないほど痛いですか。", reading: "だいじょうぶですか。うごけないほどいたいですか。", en: "Are you okay? Does it hurt so much you can't move?", bn: "ঠিক আছ তো? এতটাই ব্যথা যে নড়তেও পারছ না?" },
                        { speaker: "ラキブ", jp: "そこまでではないです。少し休めば良くなると思います。", reading: "そこまでではないです。すこしやすめばよくなるとおもいます。", en: "Not that much. I think I'll get better if I rest a little.", bn: "অতটা না। একটু বিশ্রাম নিলে ভালো হয়ে যাবে মনে হয়।" },
                        { speaker: "田中", jp: "駅まで十分くらい歩けますか。", reading: "えきまでじゅっぷんくらいあるけますか。", en: "Can you walk about ten minutes to the station?", bn: "স্টেশন পর্যন্ত মিনিট দশেক হাঁটতে পারবে?" },
                        { speaker: "ラキブ", jp: "はい、大丈夫です。もう水をたくさん飲みましたから。", reading: "はい、だいじょうぶです。もうみずをたくさんのみましたから。", en: "Yes, I'm fine. I've already drunk a lot of water.", bn: "হ্যাঁ, পারব। ইতিমধ্যে অনেক পানি খেয়ে নিয়েছি তো।" },
                        { speaker: "田中", jp: "それはいいですね。彼ほどお酒に強い人はいませんね。", reading: "それはいいですね。かれほどおさけにつよいひとはいませんね。", en: "That's good. There's no one who can hold their liquor as well as he can, huh.", bn: "ভালো তো। তার মতো মদ সহ্য করার ক্ষমতা কারো নেই, তাই না।" },
                        { speaker: "ラキブ", jp: "本当ですね。次は飲みすぎないように気をつけます。", reading: "ほんとうですね。つぎはのみすぎないようにきをつけます。", en: "True. Next time I'll be careful not to drink too much.", bn: "সত্যিই তাই। পরের বার বেশি না খাওয়ার ব্যাপারে সতর্ক থাকব।" }
                    ]
                }
            },
            {
                id: "difficulty-and-ease",
                title: "Difficulty & Ease of Doing",
                conversation: {
                    title: "新しい携帯電話",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "新しい携帯電話を買いましたね。使いやすいですか。", reading: "あたらしいけいたいでんわをかいましたね。つかいやすいですか。", en: "You bought a new phone, right? Is it easy to use?", bn: "নতুন মোবাইল ফোন কিনেছ তো। ব্যবহার করা সহজ?" },
                        { speaker: "田中", jp: "はい、とても使いやすいです。画面も見やすいです。", reading: "はい、とてもつかいやすいです。がめんもみやすいです。", en: "Yes, it's very easy to use. The screen is also easy to see.", bn: "হ্যাঁ, খুব সহজে ব্যবহার করা যায়। স্ক্রিনটাও দেখতে সুবিধাজনক।" },
                        { speaker: "ラキブ", jp: "いいですね。私の携帯は古くて、字が読みにくいです。", reading: "いいですね。わたしのけいたいはふるくて、じがよみにくいです。", en: "That's nice. My phone is old and the letters are hard to read.", bn: "ভালো তো। আমার ফোনটা পুরনো, লেখা পড়তে কষ্ট হয়।" },
                        { speaker: "田中", jp: "このアプリの使い方を教えましょうか。", reading: "このアプリのつかいかたをおしえましょうか。", en: "Shall I teach you how to use this app?", bn: "এই অ্যাপটা কীভাবে ব্যবহার করতে হয় শিখিয়ে দিই?" },
                        { speaker: "ラキブ", jp: "お願いします。設定の仕方が分かりにくいんです。", reading: "おねがいします。せっていのしかたがわかりにくいんです。", en: "Please. The way to set it up is hard to understand.", bn: "দাও। সেটিংস করার পদ্ধতিটা বুঝতে কষ্ট হচ্ছে।" },
                        { speaker: "田中", jp: "分かりました。この操作は覚えやすいですよ。", reading: "わかりました。このそうさはおぼえやすいですよ。", en: "Got it. This operation is easy to remember.", bn: "বুঝেছি। এই অপারেশনটা মনে রাখা সহজ।" },
                        { speaker: "ラキブ", jp: "ありがとうございます。写真の撮り方も教えてください。", reading: "ありがとうございます。しゃしんのとりかたもおしえてください。", en: "Thank you. Please also teach me how to take photos.", bn: "ধন্যবাদ। ছবি তোলার পদ্ধতিও শিখিয়ে দাও।" },
                        { speaker: "田中", jp: "いいですよ。とても簡単で、分かりやすいです。", reading: "いいですよ。とてもかんたんで、わかりやすいです。", en: "Sure. It's very simple and easy to understand.", bn: "ঠিক আছে। খুব সহজ, বোঝাও সহজ।" }
                    ]
                }
            },
            {
                id: "change-of-state",
                title: "Change of State & Decisions",
                conversation: {
                    title: "引っ越しのニュース",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさん、来月から福岡で働くことになりました。", reading: "ラキブさん、らいげつからふくおかではたらくことになりました。", en: "Rakib, it's been decided that I'll work in Fukuoka starting next month.", bn: "রাকিব, আগামী মাস থেকে ফুকুওকায় কাজ করার সিদ্ধান্ত হয়ে গেছে।" },
                        { speaker: "ラキブ", jp: "本当ですか。急ですね。", reading: "ほんとうですか。きゅうですね。", en: "Really? That's sudden.", bn: "সত্যি? বেশ হঠাৎই তো।" },
                        { speaker: "田中", jp: "はい。だから、この部屋を引っ越すことにしました。", reading: "はい。だから、このへやをひっこすことにしました。", en: "Yes. So I decided to move out of this apartment.", bn: "হ্যাঁ। তাই এই ঘরটা ছেড়ে চলে যাওয়ার সিদ্ধান্ত নিয়েছি।" },
                        { speaker: "ラキブ", jp: "寂しくなりますね。でも、日本語がとても上手になりましたね。", reading: "さびしくなりますね。でも、にほんごがとてもじょうずになりましたね。", en: "It'll be lonely. But you've become really good at Japanese, haven't you.", bn: "মন খারাপ হয়ে যাবে তো। তবে জাপানি ভাষায় তো খুব ভালো হয়ে গেছ, তাই না।" },
                        { speaker: "田中", jp: "ありがとうございます。最近、敬語も上手に使えるようになりました。", reading: "ありがとうございます。さいきん、けいごもじょうずにつかえるようになりました。", en: "Thank you. Lately I've also become able to use keigo well.", bn: "ধন্যবাদ। সম্প্রতি কেইগোও ভালোভাবে ব্যবহার করতে পারি এখন।" },
                        { speaker: "ラキブ", jp: "素晴らしいです。福岡でも、時々連絡することにしましょう。", reading: "すばらしいです。ふくおかでも、ときどきれんらくすることにしましょう。", en: "That's wonderful. Let's make sure to keep in touch sometimes even from Fukuoka.", bn: "চমৎকার। ফুকুওকা থেকেও মাঝেমধ্যে যোগাযোগ করার চেষ্টা কোরো।" },
                        { speaker: "田中", jp: "はい、ぜひ。新しい生活にも、すぐ慣れるようになると思います。", reading: "はい、ぜひ。あたらしいせいかつにも、すぐなれるようになるとおもいます。", en: "Yes, definitely. I think I'll quickly get used to the new life too.", bn: "হ্যাঁ, অবশ্যই। নতুন জীবনেও শীঘ্রই অভ্যস্ত হয়ে যাব মনে হয়।" },
                        { speaker: "ラキブ", jp: "きっとそうですね。応援しています。", reading: "きっとそうですね。おうえんしています。", en: "I'm sure you will. I'm rooting for you.", bn: "নিশ্চয়ই তাই হবে। পাশে আছি।" }
                    ]
                }
            },
            {
                id: "time-and-simultaneity",
                title: "Time Relations & Simultaneous Actions",
                conversation: {
                    title: "引っ越しの準備",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "今、何をしていますか。", reading: "いま、なにをしていますか。", en: "What are you doing right now?", bn: "এখন কী করছ?" },
                        { speaker: "田中", jp: "ちょうど荷物を整理しているところです。", reading: "ちょうどにもつをせいりしているところです。", en: "I'm just in the middle of organizing my things.", bn: "এইমাত্র জিনিসপত্র গুছাচ্ছিলাম।" },
                        { speaker: "ラキブ", jp: "手伝いましょうか。", reading: "てつだいましょうか。", en: "Shall I help?", bn: "সাহায্য করি?" },
                        { speaker: "田中", jp: "ありがとうございます。実は、さっき箱を全部閉じたところなんです。", reading: "ありがとうございます。じつは、さっきはこをぜんぶとじたところなんです。", en: "Thank you. Actually, I just finished closing all the boxes a moment ago.", bn: "ধন্যবাদ। আসলে এইমাত্র সব বাক্সগুলো বন্ধ করা শেষ করলাম।" },
                        { speaker: "ラキブ", jp: "そうですか。私も先月、引っ越したばかりですから、大変さが分かります。", reading: "そうですか。わたしもせんげつ、ひっこしたばかりですから、たいへんさがわかります。", en: "I see. Since I just moved last month too, I understand how tough it is.", bn: "তাই নাকি। আমিও গত মাসেই মাত্র বাসা বদলেছি, তাই কষ্টটা বুঝি।" },
                        { speaker: "田中", jp: "本当ですね。あ、この箱、開けたままでした。", reading: "ほんとうですね。あ、このはこ、あけたままでした。", en: "True. Oh, this box was left open.", bn: "ঠিক তাই। ওহ, এই বাক্সটা তো খোলাই রয়ে গেছে।" },
                        { speaker: "ラキブ", jp: "大丈夫です。閉めておきます。窓も開いたままですよ。", reading: "だいじょうぶです。しめておきます。まどもあいたままですよ。", en: "It's fine. I'll close it. The window is also left open.", bn: "ঠিক আছে। বন্ধ করে রাখছি। জানালাও খোলা রয়ে গেছে।" },
                        { speaker: "田中", jp: "あ、本当ですね。閉めましょう。", reading: "あ、ほんとうですね。しめましょう。", en: "Oh, that's true. Let's close it.", bn: "ওহ, সত্যিই তো। বন্ধ করে দিই।" }
                    ]
                }
            },
            {
                id: "uncertainty-and-possibility",
                title: "Uncertainty, Possibility & Confirmation",
                conversation: {
                    title: "明日の天気",
                    participants: ["ラキブ", "田中"],
                    lines: [
                        { speaker: "ラキブ", jp: "明日の天気予報、見ましたか。雨が降るかどうか知っていますか。", reading: "あしたのてんきよほう、みましたか。あめがふるかどうかしっていますか。", en: "Did you see tomorrow's weather forecast? Do you know whether it'll rain or not?", bn: "আগামীকালের আবহাওয়ার পূর্বাভাস দেখেছ? বৃষ্টি হবে কিনা জানো?" },
                        { speaker: "田中", jp: "いいえ、まだです。でも、曇っていますから、降るかもしれませんね。", reading: "いいえ、まだです。でも、くもっていますから、ふるかもしれませんね。", en: "No, not yet. But it's cloudy, so it might rain.", bn: "না, এখনো দেখিনি। তবে মেঘলা তো, তাই হতেও পারে।" },
                        { speaker: "ラキブ", jp: "そうですね。ハイキングの予定なのに、心配です。", reading: "そうですね。ハイキングのよていなのに、しんぱいです。", en: "That's right. I'm worried since we have a hike planned.", bn: "ঠিক তাই। হাইকিংয়ের পরিকল্পনা আছে, তাই চিন্তা হচ্ছে।" },
                        { speaker: "田中", jp: "大丈夫ですよ。天気予報によると、午後は晴れるはずです。", reading: "だいじょうぶですよ。てんきよほうによると、ごごははれるはずです。", en: "It's fine. According to the forecast, it should clear up in the afternoon.", bn: "চিন্তা কোরো না। পূর্বাভাস অনুযায়ী বিকেলে রোদ ওঠার কথা।" },
                        { speaker: "ラキブ", jp: "それを聞いて安心しました。朝は少し寒いでしょうね。", reading: "それをきいてあんしんしました。あさはすこしさむいでしょうね。", en: "That's a relief to hear. It'll probably be a bit cold in the morning, right?", bn: "শুনে স্বস্তি পেলাম। সকালে একটু ঠান্ডা থাকবে, তাই না?" },
                        { speaker: "田中", jp: "そうでしょう。上着を持って行ったほうがいいかもしれません。", reading: "そうでしょう。うわぎをもっていったほうがいいかもしれません。", en: "Probably. It might be better to bring a jacket.", bn: "হয়তো তাই। একটা জ্যাকেট নিয়ে যাওয়াই ভালো হবে হয়তো।" },
                        { speaker: "ラキブ", jp: "はい、そうします。田中さんも来られるかどうか、まだ分かりませんか。", reading: "はい、そうします。たなかさんもこられるかどうか、まだわかりませんか。", en: "Yes, I'll do that. Do you still not know whether you can come too, Tanaka?", bn: "হ্যাঁ, তাই করব। তানাকা, তুমি আসতে পারবে কিনা এখনো জানো না?" },
                        { speaker: "田中", jp: "いいえ、もう決まりました。私も行けるはずです。", reading: "いいえ、もうきまりました。わたしもいけるはずです。", en: "No, it's already decided. I should be able to go too.", bn: "না, এখন ঠিক হয়ে গেছে। আমারও যাওয়া হয়ে যাবে মনে হয়।" }
                    ]
                }
            },
            {
                id: "purpose-and-advice",
                title: "Purpose & Giving Advice",
                conversation: {
                    title: "健康のために",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "最近、体の調子はどうですか。", reading: "さいきん、からだのちょうしはどうですか。", en: "How's your health been lately?", bn: "সম্প্রতি শরীর কেমন আছে?" },
                        { speaker: "ラキブ", jp: "あまり良くないです。少し太ってしまいました。", reading: "あまりよくないです。すこしふとってしまいました。", en: "Not very good. I've gained a little weight.", bn: "খুব একটা ভালো না। একটু মোটা হয়ে গেছি।" },
                        { speaker: "田中", jp: "健康のために、毎日運動したほうがいいですよ。", reading: "けんこうのために、まいにちうんどうしたほうがいいですよ。", en: "For your health, you'd better exercise every day.", bn: "স্বাস্থ্যের জন্য প্রতিদিন ব্যায়াম করা ভালো।" },
                        { speaker: "ラキブ", jp: "そうですね。甘い物も食べすぎないほうがいいですよね。", reading: "そうですね。あまいものもたべすぎないほうがいいですよね。", en: "That's true. I'd also better not eat too many sweets, right?", bn: "ঠিক তাই। মিষ্টি জিনিসও বেশি না খাওয়া ভালো, তাই না?" },
                        { speaker: "田中", jp: "はい。太らないように、野菜をたくさん食べてください。", reading: "はい。ふとらないように、やさいをたくさんたべてください。", en: "Yes. Please eat plenty of vegetables so you don't gain weight.", bn: "হ্যাঁ। মোটা না হওয়ার জন্য প্রচুর সবজি খাও।" },
                        { speaker: "ラキブ", jp: "分かりました。夜遅くに食べないほうがいいですか。", reading: "わかりました。よるおそくにたべないほうがいいですか。", en: "Got it. Is it better not to eat late at night?", bn: "বুঝেছি। রাতে দেরিতে না খাওয়াই ভালো?" },
                        { speaker: "田中", jp: "はい、そうです。よく眠れるように、早く寝たほうがいいですよ。", reading: "はい、そうです。よくねむれるように、はやくねたほうがいいですよ。", en: "Yes, that's right. You'd better sleep early so you can sleep well.", bn: "হ্যাঁ, ঠিক। ভালো ঘুমের জন্য তাড়াতাড়ি ঘুমানো ভালো।" },
                        { speaker: "ラキブ", jp: "分かりました。今日から気をつけます。", reading: "わかりました。きょうからきをつけます。", en: "Got it. I'll be careful starting today.", bn: "বুঝেছি। আজ থেকেই খেয়াল রাখব।" }
                    ]
                }
            },
            {
                id: "compound-verbs-and-review",
                title: "Compound Verbs & Everyday Expressions",
                conversation: {
                    title: "三年間の日本語学習",
                    participants: ["田中", "ラキブ"],
                    lines: [
                        { speaker: "田中", jp: "ラキブさんはいつから日本語を勉強し始めましたか。", reading: "ラキブさんはいつからにほんごをべんきょうしはじめましたか。", en: "When did you start studying Japanese, Rakib?", bn: "রাকিব, তুমি কবে থেকে জাপানি ভাষা শেখা শুরু করেছিলে?" },
                        { speaker: "ラキブ", jp: "三年前から勉強し始めました。今もまだ勉強し続けています。", reading: "さんねんまえからべんきょうしはじめました。いまもまだべんきょうしつづけています。", en: "I started studying three years ago. I'm still continuing to study even now.", bn: "তিন বছর আগে থেকে শুরু করেছিলাম। এখনও পড়াশোনা চালিয়ে যাচ্ছি।" },
                        { speaker: "田中", jp: "すごいですね。よく諦めないで続けられましたね。", reading: "すごいですね。よくあきらめないでつづけられましたね。", en: "That's amazing. You managed to keep going without giving up, huh.", bn: "দারুণ তো। হাল না ছেড়ে চালিয়ে যেতে পেরেছ, খুব ভালো।" },
                        { speaker: "ラキブ", jp: "妹も日本語を習いたがっています。一緒に勉強するとか、教えるとかしたいです。", reading: "いもうともにほんごをならいたがっています。いっしょにべんきょうするとか、おしえるとかしたいです。", en: "My little sister wants to learn Japanese too. I'd like to do things like study together or teach her.", bn: "আমার ছোট বোনও জাপানি শিখতে চাইছে। একসাথে পড়া বা শেখানো—এমন কিছু করতে চাই।" },
                        { speaker: "田中", jp: "いいですね。子供は新しいことを覚えたがりますからね。", reading: "いいですね。こどもはあたらしいことをおぼえたがりますからね。", en: "That's nice. Children want to learn new things, after all.", bn: "ভালো তো। বাচ্চারা নতুন কিছু শিখতে চায় তো সবসময়।" },
                        { speaker: "ラキブ", jp: "はい。この三年間、本当にたくさんのことを学びました。", reading: "はい。このさんねんかん、ほんとうにたくさんのことをまなびました。", en: "Yes. Over these three years, I've really learned a lot.", bn: "হ্যাঁ। এই তিন বছরে সত্যিই অনেক কিছু শিখেছি।" },
                        { speaker: "田中", jp: "これからも一緒に勉強し続けましょう。", reading: "これからもいっしょにべんきょうしつづけましょう。", en: "Let's keep studying together from now on too.", bn: "এখন থেকেও একসাথে পড়াশোনা চালিয়ে যাই চলো।" },
                        { speaker: "ラキブ", jp: "はい、よろしくお願いします。", reading: "はい、よろしくおねがいします。", en: "Yes, I look forward to it.", bn: "হ্যাঁ, তোমার সাথে কাজ করতে পেরে ভালো লাগবে।" }
                    ]
                }
            }
        ]
    },
    n3: { chapters: [] },
    n2: { chapters: [] },
    n1: { chapters: [] }

};

if (typeof module !== "undefined" && module.exports) { module.exports = conversationsData; }
