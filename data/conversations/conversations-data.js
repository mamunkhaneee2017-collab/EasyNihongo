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

    n4: { chapters: [] },
    n3: { chapters: [] },
    n2: { chapters: [] },
    n1: { chapters: [] }

};

if (typeof module !== "undefined" && module.exports) { module.exports = conversationsData; }
