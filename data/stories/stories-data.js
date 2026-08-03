/* ==========================================
   STORIES DATA — Level → Chapter → Short Stories
   Two short stories per chapter from chapter 11
   onward, keyed by the same `id` slug used in
   vocabulary-data.js, grammar-data.js and
   conversations-data.js. Chapters 1-10 have no
   stories yet — paragraph-length narrative prose
   is introduced once chapter 11's grammar/vocab
   base makes it readable; a conversation is
   enough for those very first chapters.

   Difficulty pacing: chapters 11-14 are written
   entirely in hiragana/katakana (no kanji, no
   `reading` field). Kanji (always with furigana
   in `reading`) is phased back in from chapter 15
   onward.

   Shape: { id, title, stories: [ { title,
   paragraphs: [ { jp, reading, en, bn } ] },
   { ...second story } ] }.

   Only N5 has content so far — N4-N1 stay
   empty/locked, same convention as the rest of
   the site.
========================================== */

const storiesData = {

    n5: {
        chapters: [
            {
                id: "greetings-self-intro-numbers",
                title: "Greetings, Self-Introduction & Numbers",
                stories: [
                ]
            },
            {
                id: "family-desu",
                title: "Family & the です Copula",
                stories: [
                ]
            },
            {
                id: "daily-routine-time-dates",
                title: "Daily Routine, Time & Dates",
                stories: [
                ]
            },
            {
                id: "adjectives-comparison",
                title: "Adjectives & Comparison",
                stories: [
                ]
            },
            {
                id: "school-requests-rules",
                title: "School, Requests & Rules",
                stories: [
                ]
            },
            {
                id: "hobbies-skills-ability",
                title: "Hobbies, Skills & Ability",
                stories: [
                ]
            },
            {
                id: "home-furniture-existence",
                title: "Home, Furniture & Existence",
                stories: [
                ]
            },
            {
                id: "objects-places-demonstratives",
                title: "Objects, Places & Demonstratives",
                stories: [
                ]
            },
            {
                id: "shopping-money-clothing",
                title: "Shopping, Money & Clothing",
                stories: [
                ]
            },
            {
                id: "getting-around-time-sequencing",
                title: "Getting Around Town & Time Sequencing",
                stories: [
                ]
            },
            {
                id: "transportation-directions-movement",
                title: "Transportation, Directions & Movement",
                stories: [
                    {
                        title: "公園への道",
                        paragraphs: [
                            { jp: "どようび、ともだちとこうえんへいきました。でんしゃにのって、それからバスにのりかえました。", en: "On Saturday, I went to the park with a friend. We rode the train, then changed to a bus.", bn: "শনিবার বন্ধুর সাথে পার্কে গেলাম। ট্রেনে চড়ে, তারপর বাসে বদলালাম।" },
                            { jp: "こうさてんでしんごうをまって、みちをわたりました。かどをまがると、こうえんがみえました。", en: "We waited for the light at the intersection and crossed the road. When we turned the corner, we saw the park.", bn: "মোড়ে সিগন্যালের জন্য অপেক্ষা করে রাস্তা পার হলাম। কোণায় ঘুরতেই পার্ক দেখা গেল।" },
                            { jp: "こうえんでサッカーをしたり、しゃしんをとったりしました。とてもたのしかったです。", en: "At the park we played soccer, took photos, and so on. It was very fun.", bn: "পার্কে ফুটবল খেললাম, ছবি তুললাম, ইত্যাদি। খুব মজা হলো।" }
                        ]
                    },
                    {
                        title: "駐車場で",
                        paragraphs: [
                            { jp: "たなかさんはくるまでかいしゃにいきます。まいあさ、ちゅうしゃじょうにくるまをとめます。", en: "Tanaka goes to work by car. Every morning he parks his car in the parking lot.", bn: "তানাকা গাড়িতে অফিসে যায়। প্রতি সকালে পার্কিংয়ে গাড়ি রাখে।" },
                            { jp: "かいしゃまではしをわたって、かどをひだりへまがります。それから、まっすぐあるきます。", en: "To get to the office, he crosses a bridge and turns left at the corner. Then he walks straight.", bn: "অফিসে যেতে সেতু পার হয়ে কোণায় বামে মোড় নেয়। এরপর সোজা হাঁটে।" },
                            { jp: "みちはこんでいますから、きをつけてうんてんします。", en: "Since the road is crowded, he drives carefully.", bn: "রাস্তা ব্যস্ত থাকে বলে সাবধানে গাড়ি চালায়।" }
                        ]
                    }
                ]
            },
            {
                id: "everyday-actions-howto",
                title: "Everyday Actions & How-To",
                stories: [
                    {
                        title: "はしの使い方",
                        paragraphs: [
                            { jp: "にほんりょうりはだいたいはしでたべます。はしのつかいかたはむずかしいですが、れんしゅうすればできます。", en: "Japanese food is usually eaten with chopsticks. Using chopsticks is difficult, but you can do it if you practice.", bn: "জাপানি খাবার সাধারণত চপস্টিক দিয়ে খাওয়া হয়। চপস্টিক ব্যবহার কঠিন, তবে অনুশীলন করলে পারা যায়।" },
                            { jp: "ラキブさんはどうやってつかうか、たなかさんにききました。たなかさんがおしえてくれました。", en: "Rakib asked Tanaka how to use them. Tanaka taught him.", bn: "রাকিব তানাকাকে জিজ্ঞেস করল কীভাবে ব্যবহার করে। তানাকা শিখিয়ে দিল।" },
                            { jp: "もうじょうずにつかうことができます。うれしいです。", en: "He can already use them well. He's happy.", bn: "সে এখন ভালোভাবে ব্যবহার করতে পারে। খুশি।" }
                        ]
                    },
                    {
                        title: "日本語で何ですか",
                        paragraphs: [
                            { jp: "ラキブさんはあたらしいことばをべんきょうします。「これはにほんごでなんですか」とよくききます。", en: "Rakib studies new words. He often asks, \"What is this in Japanese?\"", bn: "রাকিব নতুন শব্দ শেখে। প্রায়ই জিজ্ঞেস করে, \"এটা জাপানিতে কী?\"" },
                            { jp: "たなかさんはどのことばもしっています。もうこたえをいってくれます。", en: "Tanaka knows every word. He tells him the answer right away.", bn: "তানাকা প্রতিটা শব্দ জানে। সাথে সাথে উত্তর বলে দেয়।" },
                            { jp: "ラキブさんはあたらしいことばをノートにかきます。もうひゃっこおぼえました。", en: "Rakib writes the new words in his notebook. He's already memorized a hundred.", bn: "রাকিব নতুন শব্দগুলো নোটবুকে লেখে। ইতিমধ্যে একশোটা মনে রেখেছে।" }
                        ]
                    }
                ]
            },
            {
                id: "describing-people-things",
                title: "Describing People & Things",
                stories: [
                    {
                        title: "わたしの友達",
                        paragraphs: [
                            { jp: "わたしのともだちはしんせつなひとです。ハンサムで、いつもげんきです。", en: "My friend is a kind person. Handsome, and always energetic.", bn: "আমার বন্ধু একজন ভালো মানুষ। সুদর্শন, আর সবসময় প্রাণবন্ত।" },
                            { jp: "いぬをかっています。いぬのなまえはポチです。とてもかわいいいぬです。", en: "He has a dog. The dog's name is Pochi. A very cute dog.", bn: "একটা কুকুর পোষে। কুকুরের নাম পোচি। খুব মিষ্টি কুকুর।" },
                            { jp: "ともだちのへやにはいろいろなものがあります。ほんやカメラやフィルムがあります。とてもべんりなへやです。", en: "My friend's room has various things. There are books, a camera, film. A very convenient room.", bn: "বন্ধুর ঘরে নানারকম জিনিস আছে। বই, ক্যামেরা, ফিল্ম। খুব সুবিধাজনক ঘর।" }
                        ]
                    },
                    {
                        title: "有名な猫",
                        paragraphs: [
                            { jp: "このまちにゆうめいなねこがいます。とてもきれいなねこです。えきのまえにいます。", en: "There's a famous cat in this town. A very pretty cat. It's in front of the station.", bn: "এই শহরে একটা বিখ্যাত বিড়াল আছে। খুব সুন্দর বিড়াল। স্টেশনের সামনে থাকে।" },
                            { jp: "「あのねこはどんなねこですか」とよくきかれます。「とてもしんせつなねこです」とこたえます。", en: "I'm often asked, \"What kind of cat is that?\" I answer, \"A very gentle cat.\"", bn: "\"ওই বিড়ালটা কেমন?\" প্রায়ই জিজ্ঞেস করা হয়। উত্তর দিই, \"খুব শান্তশিষ্ট বিড়াল।\"" },
                            { jp: "こどもたちはそのねこがすきです。にぎやかなえきですが、ねこはいつもしずかです。", en: "The children love that cat. It's a busy station, but the cat is always calm.", bn: "বাচ্চারা সেই বিড়ালটাকে পছন্দ করে। স্টেশনটা প্রাণবন্ত হলেও বিড়ালটা সবসময় শান্ত।" }
                        ]
                    }
                ]
            },
            {
                id: "weather-seasons-reasons",
                title: "Weather, Seasons & Reasons",
                stories: [
                    {
                        title: "四つの季節",
                        paragraphs: [
                            { jp: "このくににはよっつのきせつがあります。はる、なつ、あき、ふゆです。", en: "This country has four seasons: spring, summer, autumn, and winter.", bn: "এই দেশে চারটা ঋতু আছে। বসন্ত, গ্রীষ্ম, শরৎ আর শীত।" },
                            { jp: "はるはあたたかくて、はながさきます。なつはあつくて、あめがよくふります。", en: "Spring is warm and flowers bloom. Summer is hot and it rains often.", bn: "বসন্তে গরম আর ফুল ফোটে। গ্রীষ্মে গরম আর প্রায়ই বৃষ্টি হয়।" },
                            { jp: "あきはすずしくて、すごしやすいです。ふゆはさむくて、ゆきがたくさんふります。", en: "Autumn is cool and comfortable. Winter is cold and there's a lot of snow.", bn: "শরৎ ঠান্ডা আর আরামদায়ক। শীতে ঠান্ডা আর প্রচুর তুষার পড়ে।" }
                        ]
                    },
                    {
                        title: "どうして遅れましたか",
                        paragraphs: [
                            { jp: "けさ、あめがたくさんふりましたから、でんしゃがおくれました。", en: "This morning it rained a lot, so the train was late.", bn: "আজ সকালে অনেক বৃষ্টি হয়েছিল, তাই ট্রেন দেরি করল।" },
                            { jp: "「どうしておくれましたか」とせんせいにきかれました。", en: "The teacher asked me, \"Why were you late?\"", bn: "শিক্ষক জিজ্ঞেস করলেন, \"কেন দেরি হলো?\"" },
                            { jp: "「てんきがわるかったですから」とこたえました。すくないですが、でんしゃのおくれはときどきあります。", en: "I answered, \"Because the weather was bad.\" It's rare, but the train is sometimes late.", bn: "\"আবহাওয়া খারাপ ছিল বলে\" উত্তর দিলাম। কম হলেও, ট্রেন মাঝেমধ্যে দেরি করে।" }
                        ]
                    }
                ]
            },
            {
                id: "food-drink-frequency",
                title: "Food, Drink & Frequency",
                stories: [
                    {
                        title: "ラキブさんの食生活",
                        paragraphs: [
                            { jp: "ラキブさんは毎朝、パンと卵を食べます。牛乳も飲みます。", reading: "ラキブさんはまいあさ、パンとたまごをたべます。ぎゅうにゅうものみます。", en: "Every morning, Rakib eats bread and eggs. He also drinks milk.", bn: "রাকিব প্রতি সকালে রুটি আর ডিম খায়। দুধও খায়।" },
                            { jp: "昼ご飯はサンドイッチと果物だけです。肉は一週間に二回だけ食べます。", reading: "ひるごはんはサンドイッチとくだものだけです。にくはいっしゅうかんににかいだけたべます。", en: "For lunch it's just a sandwich and fruit. He eats meat only twice a week.", bn: "দুপুরে শুধু স্যান্ডউইচ আর ফল। মাংস সপ্তাহে মাত্র দুবার খায়।" },
                            { jp: "野菜と魚が好きです。お酒は全然飲みません。アイスクリームが大好きです。", reading: "やさいとさかながすきです。おさけはぜんぜんのみません。アイスクリームがだいすきです。", en: "He likes vegetables and fish. He doesn't drink alcohol at all. He loves ice cream.", bn: "সবজি আর মাছ পছন্দ করে। মদ একেবারেই খায় না। আইসক্রিম খুব পছন্দ করে।" }
                        ]
                    },
                    {
                        title: "パーティーの食べ物",
                        paragraphs: [
                            { jp: "週末、パーティーがあります。田中さんはジュースとビールを準備します。", reading: "しゅうまつ、パーティーがあります。たなかさんはジュースとビールをじゅんびします。", en: "There's a party this weekend. Tanaka is preparing juice and beer.", bn: "সপ্তাহান্তে একটা পার্টি আছে। তানাকা জুস আর বিয়ার প্রস্তুত করছে।" },
                            { jp: "ラキブさんは果物とサンドイッチを作ります。紅茶も入れます。", reading: "ラキブさんはくだものとサンドイッチをつくります。こうちゃもいれます。", en: "Rakib is making fruit and sandwiches. He's also making tea.", bn: "রাকিব ফল আর স্যান্ডউইচ তৈরি করছে। চাও বানাচ্ছে।" },
                            { jp: "友達は一か月に一回だけ集まります。だから、みんな楽しみにしています。", reading: "ともだちはいっかげつにいっかいだけあつまります。だから、みんなたのしみにしています。", en: "Friends only gather once a month. So everyone is looking forward to it.", bn: "বন্ধুরা মাসে মাত্র একবার একত্র হয়। তাই সবাই অপেক্ষায় আছে।" }
                        ]
                    }
                ]
            },
            {
                id: "gifts-presents-wants",
                title: "Gifts, Presents & Wants",
                stories: [
                    {
                        title: "クリスマスの準備",
                        paragraphs: [
                            { jp: "もうすぐクリスマスです。ラキブさんはプレゼントの準備をします。", reading: "もうすぐクリスマスです。ラキブさんはプレゼントのじゅんびをします。", en: "Christmas is coming soon. Rakib is preparing presents.", bn: "শীঘ্রই বড়দিন। রাকিব উপহার প্রস্তুত করছে।" },
                            { jp: "田中さんに花をあげます。陽子さんにお菓子をあげます。", reading: "たなかさんにはなをあげます。ようこさんにおかしをあげます。", en: "He'll give flowers to Tanaka. He'll give candy to Yoko.", bn: "তানাকাকে ফুল দেবে। ইয়োকোকে মিষ্টি দেবে।" },
                            { jp: "自分で全部準備します。荷物はたくさんありますが、楽しいです。", reading: "じぶんでぜんぶじゅんびします。にもつはたくさんありますが、たのしいです。", en: "He's preparing everything by himself. There's a lot of luggage, but it's fun.", bn: "নিজেই সব প্রস্তুত করছে। জিনিসপত্র অনেক, তবে মজার।" }
                        ]
                    },
                    {
                        title: "何か食べたいです",
                        paragraphs: [
                            { jp: "田中さんはおなかがすきました。「何か食べたいです」と言いました。", reading: "たなかさんはおなかがすきました。「なにかたべたいです」といいました。", en: "Tanaka got hungry. He said, \"I want to eat something.\"", bn: "তানাকার খিদে পেয়েছিল। বলল, \"কিছু খেতে চাই।\"" },
                            { jp: "ラキブさんは「どこかいい店を知っていますか」と聞きました。", reading: "ラキブさんは「どこかいいみせをしっていますか」ときました。", en: "Rakib asked, \"Do you know a good place somewhere?\"", bn: "রাকিব জিজ্ঞেস করল, \"কোথাও ভালো দোকান চেনো?\"" },
                            { jp: "田中さんは友達を連れて行きました。店の人が親切に案内してくれました。", reading: "たなかさんはともだちをつれていきました。みせのひとがしんせつにあんないしてくれました。", en: "Tanaka took his friend along. The shop staff kindly showed them around.", bn: "তানাকা বন্ধুকে সাথে নিয়ে গেল। দোকানের লোক বন্ধুত্বপূর্ণভাবে সাহায্য করলেন।" }
                        ]
                    }
                ]
            },
            {
                id: "giving-lending-events",
                title: "Giving, Lending & Natural Events",
                stories: [
                    {
                        title: "貸したり、もらったり",
                        paragraphs: [
                            { jp: "ラキブさんはよく田中さんに物を借ります。ペンや傘をよく借ります。", reading: "ラキブさんはよくたなかさんにものをかります。ペンやかさをよくかります。", en: "Rakib often borrows things from Tanaka. He often borrows pens and umbrellas.", bn: "রাকিব প্রায়ই তানাকার কাছ থেকে জিনিস ধার নেয়। কলম আর ছাতা প্রায়ই ধার নেয়।" },
                            { jp: "借りた物は必ず返します。田中さんはいつも「いいですよ」と貸してくれます。", reading: "かりたものはかならずかえします。たなかさんはいつも「いいですよ」とかしてくれます。", en: "He always returns what he borrows. Tanaka always lends things saying, \"Sure, no problem.\"", bn: "ধার নেওয়া জিনিস অবশ্যই ফেরত দেয়। তানাকা সবসময় \"ঠিক আছে\" বলে ধার দেয়।" },
                            { jp: "先週、ラキブさんは田中さんに小さいプレゼントをあげました。", reading: "せんしゅう、ラキブさんはたなかさんにちいさいプレゼントをあげました。", en: "Last week, Rakib gave Tanaka a small present.", bn: "গত সপ্তাহে রাকিব তানাকাকে একটা ছোট উপহার দিয়েছিল।" }
                        ]
                    },
                    {
                        title: "雨が降っています",
                        paragraphs: [
                            { jp: "外を見ると、雨が降っています。風も強いです。", reading: "そとをみると、あめがふっています。かぜもつよいです。", en: "Looking outside, it's raining. The wind is also strong.", bn: "বাইরে তাকালে বৃষ্টি হচ্ছে। বাতাসও জোরে বইছে।" },
                            { jp: "「傘を貸しましょうか」と田中さんが言いました。", reading: "「かさをかしましょうか」とたなかさんがいいました。", en: "Tanaka said, \"Shall I lend you an umbrella?\"", bn: "তানাকা বলল, \"একটা ছাতা দেব?\"" },
                            { jp: "「はい、お願いします」とラキブさんは答えました。田中さんの傘を借りました。", reading: "「はい、おねがいします」とラキブさんはこたえました。たなかさんのかさをかりました。", en: "\"Yes, please,\" Rakib answered. He borrowed Tanaka's umbrella.", bn: "\"হ্যাঁ, দাও\" রাকিব উত্তর দিল। তানাকার ছাতা ধার নিল।" }
                        ]
                    }
                ]
            },
            {
                id: "body-health-resultant-states",
                title: "Body, Health & Resultant States",
                stories: [
                    {
                        title: "風邪をひきました",
                        paragraphs: [
                            { jp: "ラキブさんは風邪をひきました。熱があって、頭が痛いです。", reading: "ラキブさんはかぜをひきました。ねつがあって、あたまがいたいです。", en: "Rakib caught a cold. He has a fever and a headache.", bn: "রাকিবয়ের ঠান্ডা লেগেছে। জ্বর আছে আর মাথা ব্যথা।" },
                            { jp: "田中さんが薬を持って来てくれました。「お風呂に入らないでください」と言いました。", reading: "たなかさんがくすりをもってきてくれました。「おふろにはいらないでください」といいました。", en: "Tanaka brought medicine for him. He said, \"Please don't take a bath.\"", bn: "তানাকা ওষুধ নিয়ে এসেছিল। বলেছিল, \"গোসল কোরো না।\"" },
                            { jp: "ラキブさんは早く寝ました。次の日、体はもう大丈夫でした。", reading: "ラキブさんははやくねました。つぎのひ、からだはもうだいじょうぶでした。", en: "Rakib went to sleep early. The next day, his body was already fine.", bn: "রাকিব তাড়াতাড়ি ঘুমিয়ে পড়ল। পরদিন শরীর ঠিক হয়ে গেল।" }
                        ]
                    },
                    {
                        title: "背が高い人",
                        paragraphs: [
                            { jp: "田中さんの友達は背が高くて、髪が長いです。", reading: "たなかさんのともだちはせがたかくて、かみがながいです。", en: "Tanaka's friend is tall and has long hair.", bn: "তানাকার বন্ধু লম্বা আর তার চুল লম্বা।" },
                            { jp: "目が明るくて、頭がいいです。体も丈夫です。", reading: "めがあかるくて、あたまがいいです。からだもじょうぶです。", en: "His eyes are bright and he's smart. His body is also strong.", bn: "চোখ উজ্জ্বল আর মাথা ভালো। শরীরও শক্তসমর্থ।" },
                            { jp: "でも、最近忙しくて、少し疲れています。休むことが大切です。", reading: "でも、さいきんいそがしくて、すこしつかれています。やすむことがたいせつです。", en: "But he's been busy lately and is a bit tired. Resting is important.", bn: "তবে সম্প্রতি ব্যস্ত থাকায় একটু ক্লান্ত। বিশ্রাম নেওয়া গুরুত্বপূর্ণ।" }
                        ]
                    }
                ]
            },
            {
                id: "errands-verbs-connecting",
                title: "Errands, More Verbs & Connecting Ideas",
                stories: [
                    {
                        title: "忙しい一日",
                        paragraphs: [
                            { jp: "今日は会議があって、それから出張の準備をして、報告書を書きました。", reading: "きょうはかいぎがあって、それからしゅっちょうのじゅんびをして、ほうこくしょをかきました。", en: "Today there was a meeting, then I prepared for a business trip, then I wrote a report.", bn: "আজ একটা মিটিং ছিল, এরপর ব্যবসায়িক ভ্রমণের প্রস্তুতি নিলাম, তারপর রিপোর্ট লিখলাম।" },
                            { jp: "会議室で上着を脱いで、資料を集めました。忙しくて、疲れました。", reading: "かいぎしつでうわぎをぬいで、しりょうをあつめました。いそがしくて、つかれました。", en: "In the meeting room I took off my jacket and gathered materials. It was busy and I got tired.", bn: "মিটিং রুমে কোট খুলে তথ্য জোগাড় করলাম। ব্যস্ত থাকায় ক্লান্ত হয়ে গেলাম।" },
                            { jp: "でも、仕事が終わってから、歌を歌ったり、ピアノを弾いたりしました。", reading: "でも、しごとがおわってから、うたをうたったり、ピアノをひいたりしました。", en: "But after work ended, I sang songs and played the piano and such.", bn: "তবে কাজ শেষে গান গাইলাম, পিয়ানো বাজালাম, ইত্যাদি।" }
                        ]
                    },
                    {
                        title: "忘れ物",
                        paragraphs: [
                            { jp: "ラキブさんは傘を忘れました。鍵もなくしました。", reading: "ラキブさんはかさをわすれました。かぎもなくしました。", en: "Rakib forgot his umbrella. He also lost his key.", bn: "রাকিব ছাতা ভুলে গিয়েছিল। চাবিও হারিয়ে ফেলেছিল।" },
                            { jp: "心配して、部屋を探しました。捨てていませんでしたから、見つかりました。", reading: "しんぱいして、へやをさがしました。すてていませんでしたから、みつかりました。", en: "He worried and searched the room. Since he hadn't thrown it away, he found it.", bn: "চিন্তিত হয়ে ঘরে খুঁজল। ফেলে দেয়নি বলে খুঁজে পেল।" },
                            { jp: "「見学のとき、鍵を換えてから、ここに置きました」と覚えました。", reading: "「けんがくのとき、かぎをかえてから、ここにおきました」とおぼえました。", en: "He remembered, \"During the tour, after I changed keys, I put it here.\"", bn: "মনে পড়ল, \"ভ্রমণের সময় চাবি বদলে এখানে রেখেছিলাম।\"" }
                        ]
                    }
                ]
            },
            {
                id: "position-adverbs-ability-emphasis",
                title: "Position, Adverbs, Ability & Emphasis",
                stories: [
                    {
                        title: "写真を撮ること",
                        paragraphs: [
                            { jp: "わたしの趣味は写真を撮ることです。近くの公園でよく撮ります。", reading: "わたしのしゅみはしゃしんをとることです。ちかくのこうえんでよくとります。", en: "My hobby is taking photos. I often take them at the nearby park.", bn: "আমার শখ ছবি তোলা। কাছের পার্কে প্রায়ই তুলি।" },
                            { jp: "食事のまえに、いつも写真を撮ります。それから、食べます。", reading: "しょくじのまえに、いつもしゃしんをとります。それから、たべます。", en: "Before eating, I always take a photo. After that, I eat.", bn: "খাওয়ার আগে সবসময় ছবি তুলি। এরপর খাই।" },
                            { jp: "ちょっと変ですが、これはわたしの初めての趣味です。だいたい毎日、写真を撮ります。", reading: "ちょっとへんですが、これはわたしのはじめてのしゅみです。だいたいまいにち、しゃしんをとります。", en: "It's a bit strange, but this is my first hobby. I take photos almost every day.", bn: "একটু অদ্ভুত হলেও, এটাই আমার প্রথম শখ। প্রায় প্রতিদিন ছবি তুলি।" }
                        ]
                    },
                    {
                        title: "机の右と左",
                        paragraphs: [
                            { jp: "田中さんの部屋には机があります。机の右にパソコンがあります。", reading: "たなかさんのへやにはつくえがあります。つくえのみぎにパソコンがあります。", en: "There's a desk in Tanaka's room. There's a computer to the right of the desk.", bn: "তানাকার ঘরে একটা টেবিল আছে। টেবিলের ডানে কম্পিউটার আছে।" },
                            { jp: "左には本がたくさんあります。後ろに窓があります。", reading: "ひだりにはほんがたくさんあります。うしろにまどがあります。", en: "To the left, there are many books. There's a window behind.", bn: "বামে অনেক বই আছে। পেছনে জানালা আছে।" },
                            { jp: "田中さんはいつも机の前に座ります。ときどき音楽を聞きながら勉強します。", reading: "たなかさんはいつもつくえのまえにすわります。ときどきおんがくをききながらべんきょうします。", en: "Tanaka always sits in front of the desk. He sometimes studies while listening to music.", bn: "তানাকা সবসময় টেবিলের সামনে বসে। মাঝেমধ্যে গান শুনতে শুনতে পড়ে।" }
                        ]
                    }
                ]
            },
            {
                id: "travel-life-events-experience",
                title: "Travel, Life Events & Experience",
                stories: [
                    {
                        title: "初めての旅行",
                        paragraphs: [
                            { jp: "去年、ラキブさんは初めて外国へ行きました。飛行機で空港に着きました。", reading: "きょねん、ラキブさんははじめてがいこくへいきました。ひこうきでくうこうにつきました。", en: "Last year, Rakib went abroad for the first time. He arrived at the airport by plane.", bn: "গত বছর রাকিব প্রথমবার বিদেশ গিয়েছিল। প্লেনে বিমানবন্দরে পৌঁছেছিল।" },
                            { jp: "海を見たり、すき焼きを食べたりしました。世界はとても広いと思いました。", reading: "うみをみたり、すきやきをたべたりしました。せかいはとてもひろいとおもいました。", en: "He saw the ocean, ate sukiyaki, and so on. He thought the world was very big.", bn: "সমুদ্র দেখল, সুকিয়াকি খেল, ইত্যাদি। মনে হলো পৃথিবীটা খুব বড়।" },
                            { jp: "田舎のお祭りにも行きました。生け花のグループにも会いました。いいチャンスでした。", reading: "いなかのおまつりにもいきました。いけばなのグループにもあいました。いいチャンスでした。", en: "He also went to a countryside festival. He also met a flower-arranging group. It was a great chance.", bn: "গ্রামের উৎসবেও গিয়েছিল। ফুল সাজানোর একটা দলের সাথেও দেখা হয়েছিল। খুব ভালো সুযোগ ছিল।" }
                        ]
                    },
                    {
                        title: "留学の経験",
                        paragraphs: [
                            { jp: "田中さんは大使館で働きたいです。留学したことがあります。", reading: "たなかさんはたいしかんではたらきたいです。りゅうがくしたことがあります。", en: "Tanaka wants to work at an embassy. He has studied abroad.", bn: "তানাকা দূতাবাসে কাজ করতে চায়। বিদেশে পড়াশোনা করার অভিজ্ঞতা আছে।" },
                            { jp: "留学して、日本語が上手になりました。紅葉もたくさん見ました。", reading: "りゅうがくして、にほんごがじょうずになりました。もみじもたくさんみました。", en: "By studying abroad, his Japanese improved. He also saw a lot of autumn leaves.", bn: "বিদেশে পড়ে জাপানি ভাষায় দক্ষ হয়েছিল। শরতের রঙিন পাতাও অনেক দেখেছিল।" },
                            { jp: "パーティーにも参加したり、天ぷらを作ったりしました。楽しい経験でした。", reading: "パーティーにもさんかしたり、てんぷらをつくったりしました。たのしいけいけんでした。", en: "He also joined parties, made tempura, and so on. It was a fun experience.", bn: "পার্টিতেও অংশ নিয়েছিল, টেম্পুরাও বানিয়েছিল, ইত্যাদি। মজার একটা অভিজ্ঞতা ছিল।" }
                        ]
                    }
                ]
            },
            {
                id: "opinions-society-politeness",
                title: "Opinions, Society & Politeness",
                stories: [
                    {
                        title: "友達との会話",
                        paragraphs: [
                            { jp: "田中さんとラキブさんは友達です。二人で話すとき、普通体を使います。", reading: "たなかさんとラキブさんはともだちです。ふたりではなすとき、ふつうたいをつかいます。", en: "Tanaka and Rakib are friends. When they talk together, they use plain style.", bn: "তানাকা আর রাকিব বন্ধু। দুজন কথা বলার সময় সাধারণ ভাষা ব্যবহার করে।" },
                            { jp: "「今晩暇？」「うん、暇」というふうに話します。", reading: "「こんばんひま？」「うん、ひま」というふうにはなします。", en: "They talk like, \"Are you free tonight?\" \"Yeah, I am.\"", bn: "\"আজ রাতে ফ্রি?\" \"হ্যাঁ, ফ্রি\" — এভাবেই কথা বলে।" },
                            { jp: "でも、先生と話すときは丁寧体を使います。意見を言うときも丁寧に言います。", reading: "でも、せんせいとはなすときはていねいたいをつかいます。いけんをいうときもていねいにいいます。", en: "But when talking with the teacher, they use polite style. They also state opinions politely.", bn: "তবে শিক্ষকের সাথে কথা বলার সময় ভদ্র ভাষা ব্যবহার করে। মতামত বলার সময়ও ভদ্রভাবে বলে।" }
                        ]
                    },
                    {
                        title: "アルバイトの経験",
                        paragraphs: [
                            { jp: "ラキブさんはアルバイトをしています。仕事は役に立つと思います。", reading: "ラキブさんはアルバイトをしています。しごとはやくにたつとおもいます。", en: "Rakib is doing a part-time job. He thinks the work is useful.", bn: "রাকিব খণ্ডকালীন কাজ করছে। মনে হয় কাজটা উপকারী।" },
                            { jp: "最近、交通のニュースをよく見ます。試合の意見も交換します。", reading: "さいきん、こうつうのニュースをよくみます。しあいのいけんもこうかんします。", en: "Lately he often watches traffic news. He also exchanges opinions about matches.", bn: "সম্প্রতি ট্রাফিকের খবর প্রায়ই দেখে। খেলার মতামতও বিনিময় করে।" },
                            { jp: "たぶん、来年もこのアルバイトを続けると思います。", reading: "たぶん、らいねんもこのアルバイトをつづけるとおもいます。", en: "He thinks he'll probably continue this part-time job next year too.", bn: "মনে হয় আগামী বছরও এই কাজটা চালিয়ে যাবে।" }
                        ]
                    }
                ]
            },
            {
                id: "family-honorifics-reported-speech",
                title: "Family Honorifics & Reported Speech",
                stories: [
                    {
                        title: "田中さんの家族の話",
                        paragraphs: [
                            { jp: "田中さんにはお兄さんと妹さんがいます。お兄さんはもう結婚したと言いました。", reading: "たなかさんにはおにいさんといもうとさんがいます。おにいさんはもうけっこんしたといいました。", en: "Tanaka has an older brother and a younger sister. Her older brother said he's already married.", bn: "তানাকার বড় ভাই আর ছোট বোন আছে। বড় ভাই বলেছিল যে সে ইতিমধ্যে বিয়ে করেছে।" },
                            { jp: "お兄さんの奥さんは先生です。とても親切な人だと思います。", reading: "おにいさんのおくさんはせんせいです。とてもしんせつなひとだとおもいます。", en: "Her older brother's wife is a teacher. She thinks she's a very kind person.", bn: "বড় ভাইয়ের স্ত্রী একজন শিক্ষিকা। খুব ভালো মানুষ বলে মনে হয়।" },
                            { jp: "来週、会社でパーティーがあります。田中さんのご主人も来ると言っていました。", reading: "らいしゅう、かいしゃでパーティーがあります。たなかさんのごしゅじんもくるといっていました。", en: "There's a party at the company next week. Tanaka's husband said he'd come too.", bn: "আগামী সপ্তাহে অফিসে পার্টি আছে। তানাকার স্বামীও আসবেন বলেছিলেন।" }
                        ]
                    },
                    {
                        title: "会議での話",
                        paragraphs: [
                            { jp: "会議で田中さんが意見を言いました。「値段が高すぎると思います」と言いました。", reading: "かいぎでたなかさんがいけんをいいました。「ねだんがたかすぎるとおもいます」といいました。", en: "Tanaka gave her opinion at the meeting. She said, \"I think the price is too high.\"", bn: "মিটিংয়ে তানাকা মতামত দিল। বলল, \"দামটা খুব বেশি মনে হচ্ছে।\"" },
                            { jp: "ラキブさんも「そうですね」と言いました。二人とも同じ意見でした。", reading: "ラキブさんも「そうですね」といいました。ふたりともおなじいけんでした。", en: "Rakib also said, \"That's right.\" Both had the same opinion.", bn: "রাকিবও বলল, \"ঠিক বলেছেন।\" দুজনেরই একই মতামত ছিল।" },
                            { jp: "会議でもビールでもいいから、話し合いましょう、と課長は言いました。", reading: "かいぎでもビールでもいいから、はなしあいましょう、とかちょうはいいました。", en: "The section chief said, \"Whether at the meeting or over beer, let's talk it over.\"", bn: "সেকশন চিফ বললেন, \"মিটিংয়ে হোক বা বিয়ারের ওপর, আলোচনা করে নেওয়া যাক।\"" }
                        ]
                    }
                ]
            },
            {
                id: "counting-giving-receiving",
                title: "Native Counting & Giving/Receiving Actions",
                stories: [
                    {
                        title: "陽子さんの誕生日",
                        paragraphs: [
                            { jp: "陽子さんの誕生日は二十日です。友達がプレゼントをくれました。", reading: "ようこさんのたんじょうびははつかです。ともだちがプレゼントをくれました。", en: "Yoko's birthday is the twentieth. Friends gave her presents.", bn: "ইয়োকোর জন্মদিন কুড়ি তারিখে। বন্ধুরা তাকে উপহার দিয়েছিল।" },
                            { jp: "ラキブさんは花をあげました。田中さんはケーキを三つ買ってくれました。", reading: "ラキブさんははなをあげました。たなかさんはケーキをみっつかってくれました。", en: "Rakib gave her flowers. Tanaka bought three cakes for her.", bn: "রাকিব ফুল দিয়েছিল। তানাকা তিনটা কেক কিনে দিয়েছিল।" },
                            { jp: "「だれが料理を作りましたか」と聞くと、「わたしが作りました」と山田さんが答えました。", reading: "「だれがりょうりをつくりましたか」ときくと、「わたしがつくりました」とやまださんがこたえました。", en: "When asked, \"Who made the food?\" Yamada answered, \"I made it.\"", bn: "\"কে রান্না করেছিল?\" জিজ্ঞেস করলে ইয়ামাদা বলল, \"আমি করেছিলাম।\"" }
                        ]
                    },
                    {
                        title: "十日間の旅行",
                        paragraphs: [
                            { jp: "田中さんは十日間、旅行に行きます。一日から十日までです。", reading: "たなかさんはとおかかん、りょこうにいきます。ついたちからとおかまでです。", en: "Tanaka is going on a ten-day trip. From the first to the tenth.", bn: "তানাকা দশ দিনের একটা ভ্রমণে যাচ্ছে। এক তারিখ থেকে দশ তারিখ পর্যন্ত।" },
                            { jp: "母がセーターを送ってくれました。友達も手伝ってくれました。", reading: "ははがセーターをおくってくれました。ともだちもてつだってくれました。", en: "His mother sent him a sweater. Friends also helped him.", bn: "মা একটা সোয়েটার পাঠিয়েছিল। বন্ধুরাও সাহায্য করেছিল।" },
                            { jp: "だれが空港まで送りますか。ラキブさんが送ってくれることになりました。", reading: "だれがくうこうまでおくりますか。ラキブさんがおくってくれることになりました。", en: "Who will drive him to the airport? It was decided that Rakib would.", bn: "কে বিমানবন্দর পর্যন্ত পৌঁছে দেবে? ঠিক হলো রাকিব দিয়ে দেবে।" }
                        ]
                    }
                ]
            },
            {
                id: "everyday-essentials-conditionals",
                title: "Everyday Essentials & Conditionals",
                stories: [
                    {
                        title: "郵便局での用事",
                        paragraphs: [
                            { jp: "今日、郵便局へ行きます。用事は切手とはがきと封筒を買うことです。", reading: "きょう、ゆうびんきょくへいきます。ようじはきってとはがきとふうとうをかうことです。", en: "Today I'm going to the post office. My errand is to buy stamps, postcards, and envelopes.", bn: "আজ পোস্ট অফিসে যাচ্ছি। কাজ হলো স্ট্যাম্প, পোস্টকার্ড আর খাম কেনা।" },
                            { jp: "安かったら、たくさん買います。雨が降っても、行きます。", reading: "やすかったら、たくさんかいます。あめがふっても、いきます。", en: "If they're cheap, I'll buy a lot. Even if it rains, I'll go.", bn: "সস্তা হলে অনেক কিনব। বৃষ্টি হলেও যাব।" },
                            { jp: "郵便局のとなりの店でりんごを買ったら、うちへ帰ります。", reading: "ゆうびんきょくのとなりのみせでりんごをかったら、うちへかえります。", en: "After buying apples at the shop next to the post office, I'll go home.", bn: "পোস্ট অফিসের পাশের দোকান থেকে আপেল কিনে বাসায় ফিরব।" }
                        ]
                    },
                    {
                        title: "もし時間があったら",
                        paragraphs: [
                            { jp: "もし時間があったら、映画のチケットを買いたいです。", reading: "もしじかんがあったら、えいがのチケットをかいたいです。", en: "If I have time, I want to buy movie tickets.", bn: "সময় থাকলে সিনেমার টিকিট কিনতে চাই।" },
                            { jp: "友達と映画を見たら、一緒にご飯を食べます。安くても、おいしい店がいいです。", reading: "ともだちとえいがをみたら、いっしょにごはんをたべます。やすくても、おいしいみせがいいです。", en: "After watching a movie with a friend, we'll eat together. Even if it's cheap, a delicious shop is best.", bn: "বন্ধুর সাথে সিনেমা দেখলে একসাথে খাব। সস্তা হলেও সুস্বাদু দোকানই ভালো।" },
                            { jp: "用事が多くても、友達との時間はいつも楽しみです。", reading: "ようじがおおくても、ともだちとのじかんはいつもたのしみです。", en: "Even when I have a lot to do, time with friends is always something to look forward to.", bn: "কাজ বেশি থাকলেও বন্ধুদের সাথে সময় কাটানো সবসময়ই আনন্দের।" }
                        ]
                    }
                ]
            }
        ]
    },

    n4: {
        chapters: [
{
        id: "obligation-permission-prohibition",
        title: "Obligation, Permission & Prohibition",
        stories: [
            {
                title: "図書館のルール",
                paragraphs: [
                    { jp: "大学の図書館にはルールがあります。本を借りたら、二週間以内に返さなければなりません。", reading: "だいがくのとしょかんにはルールがあります。ほんをかりたら、にしゅうかんいないにかえさなければなりません。", en: "The university library has rules. If you borrow a book, you must return it within two weeks.", bn: "বিশ্ববিদ্যালয়ের লাইব্রেরিতে কিছু নিয়ম আছে। বই ধার নিলে দুই সপ্তাহের মধ্যে ফেরত দিতেই হবে।" },
                    { jp: "図書館の中で電話をかけてはいけません。でも、静かに話すのはいいです。", reading: "としょかんのなかででんわをかけてはいけません。でも、しずかにはなすのはいいです。", en: "You must not make phone calls inside the library. But it's fine to talk quietly.", bn: "লাইব্রেরির ভেতরে ফোনে কথা বলা যাবে না। তবে চুপচাপ কথা বলা যায়।" },
                    { jp: "学生証を見せなくてもいいですが、持って来たほうがいいです。ラキブさんは毎日、図書館で勉強しています。", reading: "がくせいしょうをみせなくてもいいですが、もってきたほうがいいです。ラキブさんはまいにち、としょかんでべんきょうしています。", en: "You don't have to show your student ID, but it's better to bring it. Rakib studies at the library every day.", bn: "শিক্ষার্থী পরিচয়পত্র না দেখালেও চলবে, তবে সাথে আনাই ভালো। রাকিব প্রতিদিন লাইব্রেরিতে পড়াশোনা করে।" }
                ]
            },
            {
                title: "宿題を忘れずに",
                paragraphs: [
                    { jp: "田中先生のクラスでは、宿題を毎日出さなければなりません。忘れたら、次の日に二つ出さなければなりません。", reading: "たなかせんせいのクラスでは、しゅくだいをまいにちださなければなりません。わすれたら、つぎのひにふたつださなければなりません。", en: "In Tanaka-sensei's class, you must submit homework every day. If you forget, you must submit two the next day.", bn: "তানাকা শিক্ষকের ক্লাসে প্রতিদিন হোমওয়ার্ক জমা দিতেই হয়। ভুলে গেলে পরদিন দুটো জমা দিতে হয়।" },
                    { jp: "テストのとき、辞書を使ってもいいですが、友達と話してはいけません。", reading: "テストのとき、じしょをつかってもいいですが、ともだちとはなしてはいけません。", en: "During the test, you may use a dictionary, but you must not talk with friends.", bn: "পরীক্ষার সময় অভিধান ব্যবহার করা যায়, তবে বন্ধুর সাথে কথা বলা যাবে না।" },
                    { jp: "病気のときは、休んでもいいです。でも、先生にメールを送らなければなりません。", reading: "びょうきのときは、やすんでもいいです。でも、せんせいにメールをおくらなければなりません。", en: "When you're sick, you may take a day off. But you must send the teacher an email.", bn: "অসুস্থ হলে ছুটি নেওয়া যায়। তবে শিক্ষককে ইমেইল পাঠাতেই হবে।" }
                ]
            }
        ]
    },
    {
        id: "conditionals-tara-to",
        title: "Conditionals I: たら & と",
        stories: [
            {
                title: "駅に着いたら",
                paragraphs: [
                    { jp: "駅に着いたら、電話してください。迎えに行きます。", reading: "えきについたら、でんわしてください。むかえにいきます。", en: "When you arrive at the station, please call me. I'll come pick you up.", bn: "স্টেশনে পৌঁছালে ফোন কোরো। আমি নিতে আসব।" },
                    { jp: "このボタンを押すと、電気がつきます。分からなかったら、聞いてください。", reading: "このボタンをおすと、でんきがつきます。わからなかったら、きいてください。", en: "If you press this button, the light turns on. If you don't understand, please ask.", bn: "এই বোতাম চাপলে বাতি জ্বলে ওঠে। না বুঝলে জিজ্ঞেস কোরো।" },
                    { jp: "去年、もっと早く準備すればよかったと思いました。今年は、忘れ物をしたら困りますから、リストを作りました。", reading: "きょねん、もっとはやくじゅんびすればよかったとおもいました。ことしは、わすれものをしたらこまりますから、リストをつくりました。", en: "Last year, I thought I should have prepared earlier. This year, since it would be a problem if I forgot something, I made a list.", bn: "গত বছর মনে হয়েছিল আরও আগে প্রস্তুতি নিলে ভালো হতো। এবার জিনিস ভুলে গেলে সমস্যা হবে বলে একটা লিস্ট বানিয়েছি।" }
                ]
            },
            {
                title: "疲れたらどうしますか",
                paragraphs: [
                    { jp: "仕事で疲れたら、どうしますか。田中さんは音楽を聞いて休みます。", reading: "しごとでつかれたら、どうしますか。たなかさんはおんがくをきいてやすみます。", en: "What do you do when you get tired from work? Tanaka listens to music and rests.", bn: "কাজে ক্লান্ত হলে কী করো? তানাকা গান শুনে বিশ্রাম নেয়।" },
                    { jp: "疲れているなら、少し休んだらどうですか、とラキブさんに言いました。", reading: "つかれているなら、すこしやすんだらどうですか、とラキブさんにいいました。", en: "\"If you're tired, why don't you rest a little?\" she said to Rakib.", bn: "\"ক্লান্ত থাকলে একটু বিশ্রাম নিলে কেমন হয়?\" রাকিবকে বলল।" },
                    { jp: "天気がよければ、公園を歩くと、気持ちがよくなります。もっと早く相談すればよかったです。", reading: "てんきがよければ、こうえんをあるくと、きもちがよくなります。もっとはやくそうだんすればよかったです。", en: "If the weather's nice, walking in the park makes you feel better. I should have consulted him earlier.", bn: "আবহাওয়া ভালো থাকলে পার্কে হাঁটলে মনটা ভালো হয়ে যায়। আরও আগে পরামর্শ নিলে ভালো হতো।" }
                ]
            }
        ]
    },
    {
        id: "conditionals-ba-nara",
        title: "Conditionals II: ば & なら",
        stories: [
            {
                title: "日本語が上手になりたいなら",
                paragraphs: [
                    { jp: "日本語が上手になりたいなら、毎日練習したほうがいいです。練習すれば、必ず話せるようになります。", reading: "にほんごがじょうずになりたいなら、まいにちれんしゅうしたほうがいいです。れんしゅうすれば、かならずはなせるようになります。", en: "If you want to get good at Japanese, you should practice every day. If you practice, you'll definitely become able to speak.", bn: "জাপানি ভাষায় দক্ষ হতে চাইলে প্রতিদিন অনুশীলন করা ভালো। অনুশীলন করলে অবশ্যই কথা বলতে পারবে।" },
                    { jp: "時間があれば、映画を見るのもいい勉強になります。難しくても、諦めないでください。", reading: "じかんがあれば、えいがをみるのもいいべんきょうになります。むずかしくても、あきらめないでください。", en: "If you have time, watching movies is also good study. Even if it's difficult, please don't give up.", bn: "সময় থাকলে সিনেমা দেখাও ভালো একটা পড়াশোনা হয়। কঠিন হলেও হাল ছেড়ো না।" },
                    { jp: "分からないことがあるなら、いつでも聞いてください。雨の日でも、クラスは休みません。", reading: "わからないことがあるなら、いつでもきいてください。あめのひでも、クラスはやすみません。", en: "If there's something you don't understand, please ask anytime. Even on rainy days, class doesn't stop.", bn: "না বুঝলে যেকোনো সময় জিজ্ঞেস কোরো। বৃষ্টির দিনেও ক্লাস বন্ধ হয় না।" }
                ]
            },
            {
                title: "安ければ買います",
                paragraphs: [
                    { jp: "新しい教科書がほしいです。安ければ、今日買います。高ければ、来月まで待ちます。", reading: "あたらしいきょうかしょがほしいです。やすければ、きょうかいます。たかければ、らいげつまでまちます。", en: "I want a new textbook. If it's cheap, I'll buy it today. If it's expensive, I'll wait until next month.", bn: "একটা নতুন পাঠ্যবই চাই। সস্তা হলে আজই কিনব। দাম বেশি হলে আগামী মাস পর্যন্ত অপেক্ষা করব।" },
                    { jp: "本屋に行くなら、一緒に行きましょう。忙しいなら、また今度でもいいです。", reading: "ほんやにいくなら、いっしょにいきましょう。いそがしいなら、またこんどでもいいです。", en: "If you're going to the bookstore, let's go together. If you're busy, some other time is fine too.", bn: "বইয়ের দোকানে যেতে চাইলে একসাথেই যাই। ব্যস্ত থাকলে পরে অন্য কোনো সময়ও চলবে।" },
                    { jp: "雨が降っても、傘があれば大丈夫です。安くても、いい本を選びたいです。", reading: "あめがふっても、かさがあればだいじょうぶです。やすくても、いいほんをえらびたいです。", en: "Even if it rains, if I have an umbrella, it's fine. Even if it's cheap, I want to choose a good book.", bn: "বৃষ্টি হলেও ছাতা থাকলে ঠিক আছে। সস্তা হলেও ভালো বই বেছে নিতে চাই।" }
                ]
            }
        ]
    },
    {
        id: "trying-preparing-finishing",
        title: "Trying, Preparing & Finishing Actions",
        stories: [
            {
                title: "新しい料理に挑戦",
                paragraphs: [
                    { jp: "ラキブさんは初めて日本料理を作ってみました。作る前に、レシピを読んでおきました。", reading: "ラキブさんははじめてにほんりょうりをつくってみました。つくるまえに、レシピをよんでおきました。", en: "Rakib tried making Japanese food for the first time. Before making it, he had read the recipe in advance.", bn: "রাকিব প্রথমবার জাপানি খাবার রান্না করে দেখল। রান্নার আগে রেসিপিটা পড়ে রেখেছিল।" },
                    { jp: "でも、砂糖を入れすぎてしまいました。少し甘くなってしまいましたが、おいしかったです。", reading: "でも、さとうをいれすぎてしまいました。すこしあまくなってしまいましたが、おいしかったです。", en: "But he ended up putting in too much sugar. It ended up a bit too sweet, but it was delicious.", bn: "তবে চিনি একটু বেশি দিয়ে ফেলল। একটু বেশি মিষ্টি হয়ে গেল, তবে সুস্বাদু হয়েছিল।" },
                    { jp: "料理を作り終わったら、田中さんを呼びました。二人で楽しく食べました。", reading: "りょうりをつくりおわったら、たなかさんをよびました。ふたりでたのしくたべました。", en: "When he finished making the food, he called Tanaka over. The two of them ate happily together.", bn: "রান্না শেষ হলে তানাকাকে ডাকল। দুজনে মিলে আনন্দে খেল।" }
                ]
            },
            {
                title: "引っ越しの準備",
                paragraphs: [
                    { jp: "来月、引っ越します。今のうちに、荷物を整理しておきます。", reading: "らいげつ、ひっこします。いまのうちに、にもつをせいりしておきます。", en: "I'm moving next month. I'll organize my things in advance while I have time now.", bn: "আগামী মাসে বাসা বদলাচ্ছি। এখনই জিনিসপত্র গুছিয়ে রাখছি।" },
                    { jp: "古い服は捨ててしまいました。新しい部屋のかぎも、もうもらっておきました。", reading: "ふるいふくはすててしまいました。あたらしいへやのかぎも、もうもらっておきました。", en: "I threw away my old clothes. I've already received the key to the new room in advance too.", bn: "পুরনো কাপড় ফেলেই দিয়েছি। নতুন ঘরের চাবিও আগে থেকেই নিয়ে রেখেছি।" },
                    { jp: "荷物をまとめ終わったら、少し休みたいです。新しい生活を、一度やってみたいです。", reading: "にもつをまとめおわったら、すこしやすみたいです。あたらしいせいかつを、いちどやってみたいです。", en: "Once I finish packing, I want to rest a bit. I want to try out this new life once.", bn: "জিনিসপত্র গোছানো শেষ হলে একটু বিশ্রাম নিতে চাই। নতুন জীবনটা একবার চেষ্টা করে দেখতে চাই।" }
                ]
            }
        ]
    },
    {
        id: "appearance-hearsay-sou",
        title: "Appearance & Hearsay: そうです",
        stories: [
            {
                title: "美味しそうなケーキ",
                paragraphs: [
                    { jp: "店の窓に、美味しそうなケーキがありました。ラキブさんは食べてみたくなりました。", reading: "みせのまどに、おいしそうなケーキがありました。ラキブさんはたべてみたくなりました。", en: "There was a cake that looked delicious in the shop window. Rakib wanted to try eating it.", bn: "দোকানের জানালায় সুস্বাদু দেখতে একটা কেক ছিল। রাকিবের খেতে ইচ্ছা করে উঠল।" },
                    { jp: "店員さんの話によると、そのケーキはとても人気だそうです。今日中に売り切れそうです。", reading: "てんいんさんのはなしによると、そのケーキはとてもにんきだそうです。きょうじゅうにうりきれそうです。", en: "According to the shop clerk, that cake is apparently very popular. It seems like it'll sell out by the end of today.", bn: "দোকানির কথা অনুযায়ী, ওই কেকটা নাকি খুব জনপ্রিয়। শুনে মনে হচ্ছে আজকের মধ্যেই শেষ হয়ে যাবে।" },
                    { jp: "ラキブさんは急いで一つ買いました。食べたら、急に笑い出しました。とてもおいしかったからです。", reading: "ラキブさんはいそいでひとつかいました。たべたら、きゅうにわらいだしました。とてもおいしかったからです。", en: "Rakib hurriedly bought one. When he ate it, he suddenly burst out laughing. It's because it was so delicious.", bn: "রাকিব তাড়াতাড়ি একটা কিনল। খেতেই হঠাৎ হেসে উঠল। কারণ খুবই সুস্বাদু ছিল।" }
                ]
            },
            {
                title: "台風が来るそうです",
                paragraphs: [
                    { jp: "ニュースによると、明日大きい台風が来るそうです。空が暗くて、雨が降りそうです。", reading: "ニュースによると、あしただいたいふうがくるそうです。そらがくらくて、あめがふりそうです。", en: "According to the news, a big typhoon is coming tomorrow. The sky is dark and it looks like it's going to rain.", bn: "খবরে বলা হচ্ছে, আগামীকাল একটা বড় টাইফুন আসছে। আকাশ অন্ধকার, বৃষ্টি হবে বলে মনে হচ্ছে।" },
                    { jp: "田中さんは心配そうな顔をしていました。窓を閉めて、ドアにも鍵をかけておきました。", reading: "たなかさんはしんぱいそうなかおをしていました。まどをしめて、ドアにもかぎをかけておきました。", en: "Tanaka had a worried-looking face. She closed the windows and also locked the door in advance.", bn: "তানাকাকে চিন্তিত দেখাচ্ছিল। জানালা বন্ধ করে দরজাতেও তালা লাগিয়ে রেখেছিল।" },
                    { jp: "風が急に強くなり、木の枝が折れそうでした。でも、次の日、台風は思ったより弱かったそうです。", reading: "かぜがきゅうにつよくなり、きのえだがおれそうでした。でも、つぎのひ、たいふうはおもったよりよわかったそうです。", en: "The wind suddenly grew strong, and tree branches looked like they might break. But the next day, they say the typhoon was weaker than expected.", bn: "বাতাস হঠাৎ জোরে বইতে শুরু করল, গাছের ডাল ভেঙে যাবে বলে মনে হচ্ছিল। তবে পরদিন শোনা গেল টাইফুনটা ধারণার চেয়ে দুর্বল ছিল।" }
                ]
            }
        ]
    },
{
        id: "seeming-and-comparing",
        title: "Seeming & Comparing: ようだ・らしい・みたい",
        stories: [
            {
                title: "有名な店らしいです",
                paragraphs: [
                    { jp: "この店はとても人気があるようです。いつも人がたくさん並んでいます。", reading: "このみせはとてもにんきがあるようです。いつもひとがたくさんならんでいます。", en: "This shop seems very popular. There are always a lot of people lining up.", bn: "এই দোকানটা খুব জনপ্রিয় মনে হচ্ছে। সবসময় অনেক মানুষ লাইনে দাঁড়িয়ে থাকে।" },
                    { jp: "友達の話では、ラーメンが特に美味しいらしいです。スープは牛乳のようにまろやかだそうです。", reading: "ともだちのはなしでは、ラーメンがとくにおいしいらしいです。スープはぎゅうにゅうのようにまろやかだそうです。", en: "According to a friend, the ramen is apparently especially delicious. The soup is apparently as smooth as milk.", bn: "বন্ধুর কথা অনুযায়ী, রামেনটা নাকি বিশেষভাবে সুস্বাদু। স্যুপটা নাকি দুধের মতো মসৃণ।" },
                    { jp: "実際に食べてみると、本当に評判どおりみたいです。まるで高級レストランのような味でした。", reading: "じっさいにたべてみると、ほんとうにひょうばんどおりみたいです。まるでこうきゅうレストランのようなあじでした。", en: "When I actually tried eating it, it really does seem to live up to its reputation. It tasted just like a high-class restaurant.", bn: "আসলে খেয়ে দেখলে সত্যিই খ্যাতি অনুযায়ী মনে হয়। যেন একটা দামি রেস্টুরেন্টের স্বাদের মতো ছিল।" }
                ]
            },
            {
                title: "元気がないようです",
                paragraphs: [
                    { jp: "今日、田中さんは元気がないようです。顔色も悪いみたいです。", reading: "きょう、たなかさんはげんきがないようです。かおいろもわるいみたいです。", en: "Today Tanaka seems to have no energy. Her complexion also looks bad.", bn: "আজ তানাকাকে প্রাণহীন মনে হচ্ছে। মুখটাও ফ্যাকাশে দেখাচ্ছে।" },
                    { jp: "聞いた話では、風邪をひいているらしいです。子供のように、ずっと寝ていたそうです。", reading: "きいたはなしでは、かぜをひいているらしいです。こどものように、ずっとねていたそうです。", en: "From what I've heard, apparently she has a cold. Like a child, she was apparently sleeping the whole time.", bn: "শুনেছি নাকি তার ঠান্ডা লেগেছে। বাচ্চার মতো সারাদিন ঘুমিয়ে ছিল বলে শুনলাম।" },
                    { jp: "早く元気になるように、みんなでお見舞いに行くことにしました。", reading: "はやくげんきになるように、みんなでおみまいにいくことにしました。", en: "So that she gets well soon, we all decided to go visit her.", bn: "তাড়াতাড়ি সুস্থ হয়ে ওঠার জন্য সবাই মিলে দেখতে যাওয়ার সিদ্ধান্ত নিলাম।" }
                ]
            }
        ]
    },
    {
        id: "giving-receiving-favors",
        title: "Giving & Receiving Favors",
        stories: [
            {
                title: "友達を助けてあげました",
                paragraphs: [
                    { jp: "ラキブさんは引っ越しのとき、友達を手伝ってあげました。田中さんも荷物を運んでくれました。", reading: "ラキブさんはひっこしのとき、ともだちをてつだってあげました。たなかさんもにもつをはこんでくれました。", en: "When moving, Rakib helped his friend. Tanaka also carried luggage for him.", bn: "বাসা বদলানোর সময় রাকিব বন্ধুকে সাহায্য করেছিল। তানাকাও জিনিসপত্র বয়ে দিয়েছিল।" },
                    { jp: "山田さんに新しい部屋の場所を教えてもらいました。とても助かりました。", reading: "やまださんにあたらしいへやのばしょをおしえてもらいました。とてもたすかりました。", en: "He had Yamada tell him the location of the new room. It helped a lot.", bn: "ইয়ামাদার কাছ থেকে নতুন ঘরের ঠিকানা জেনে নিয়েছিল। খুব সাহায্য হয়েছিল।" },
                    { jp: "「箱を少し持っていただけませんか」とラキブさんが頼みました。「もちろん、手伝ってほしいです」と田中さんが答えました。", reading: "「はこをすこしもっていただけませんか」とラキブさんがたのみました。「もちろん、てつだってほしいです」とたなかさんがこたえました。", en: "\"Could you please hold a few boxes?\" Rakib asked. \"Of course, I'd like to help,\" Tanaka answered.", bn: "\"বাক্সগুলো একটু ধরবেন কি?\" রাকিব অনুরোধ করল। \"অবশ্যই, সাহায্য করতে চাই\" তানাকা উত্তর দিল।" }
                ]
            },
            {
                title: "誕生日のお祝い",
                paragraphs: [
                    { jp: "田中さんの誕生日に、みんなでケーキを買ってあげました。ラキブさんは歌を歌ってくれました。", reading: "たなかさんのたんじょうびに、みんなでケーキをかってあげました。ラキブさんはうたをうたってくれました。", en: "For Tanaka's birthday, everyone bought her a cake together. Rakib sang a song for her.", bn: "তানাকার জন্মদিনে সবাই মিলে একটা কেক কিনে দিল। রাকিব একটা গান গেয়ে শোনাল।" },
                    { jp: "田中さんは友達にプレゼントを選んでもらいました。とても嬉しそうでした。", reading: "たなかさんはともだちにプレゼントをえらんでもらいました。とてもうれしそうでした。", en: "Tanaka had her friends choose a present for her. She looked very happy.", bn: "তানাকা বন্ধুদের কাছ থেকে একটা উপহার বেছে নিতে বলেছিল। খুব খুশি দেখাচ্ছিল।" },
                    { jp: "「来年もパーティーをしていただけませんか」と田中さんが冗談を言いました。みんなで笑いました。", reading: "「らいねんもパーティーをしていただけませんか」とたなかさんがじょうだんをいいました。みんなでわらいました。", en: "\"Could you please have a party next year too?\" Tanaka joked. Everyone laughed.", bn: "\"আগামী বছরও একটা পার্টি করবেন কি?\" তানাকা মজা করে বলল। সবাই মিলে হেসে উঠল।" }
                ]
            }
        ]
    },
    {
        id: "potential-form-ability",
        title: "Potential Form & Ability",
        stories: [
            {
                title: "泳げるようになりました",
                paragraphs: [
                    { jp: "ラキブさんは毎日練習して、上手に泳げるようになりました。最初は全然泳げませんでした。", reading: "ラキブさんはまいにちれんしゅうして、じょうずにおよげるようになりました。さいしょはぜんぜんおよげませんでした。", en: "Rakib practiced every day and became able to swim well. At first he couldn't swim at all.", bn: "রাকিব প্রতিদিন অনুশীলন করে ভালোভাবে সাঁতার কাটতে পারা শুরু করল। প্রথমে একেবারেই সাঁতার কাটতে পারত না।" },
                    { jp: "今は漢字を読むこともできます。少し難しい本も読むことができるようになりました。", reading: "いまはかんじをよむこともできます。すこしむずかしいほんもよむことができるようになりました。", en: "Now he can also read kanji. He's become able to read even slightly difficult books.", bn: "এখন কাঞ্জিও পড়তে পারে। একটু কঠিন বইও পড়তে পারা শুরু করেছে।" },
                    { jp: "海の近くに住んでいるので、波の音がいつも聞こえます。窓から海も見えます。", reading: "うみのちかくにすんでいるので、なみのおとがいつもきこえます。まどからうみもみえます。", en: "Since he lives near the sea, he can always hear the sound of the waves. He can also see the sea from the window.", bn: "সমুদ্রের কাছে থাকায় ঢেউয়ের শব্দ সবসময় শোনা যায়। জানালা থেকে সমুদ্রও দেখা যায়।" }
                ]
            },
            {
                title: "運転できますか",
                paragraphs: [
                    { jp: "田中さんは車を運転することができます。でも、まだ夜は運転できません。", reading: "たなかさんはくるまをうんてんすることができます。でも、まだよるはうんてんできません。", en: "Tanaka is able to drive a car. But she still can't drive at night.", bn: "তানাকা গাড়ি চালাতে পারে। তবে এখনও রাতে চালাতে পারে না।" },
                    { jp: "遠くに山が見えます。天気がいい日は、富士山も見えるそうです。", reading: "とおくにやまがみえます。てんきがいいひは、ふじさんもみえるそうです。", en: "You can see mountains in the distance. On days with good weather, apparently you can even see Mt. Fuji.", bn: "দূরে পাহাড় দেখা যায়। আবহাওয়া ভালো থাকলে নাকি ফুজি পাহাড়ও দেখা যায়।" },
                    { jp: "静かな場所なので、鳥の声もよく聞こえます。ここでなら、ゆっくり休めます。", reading: "しずかなばしょなので、とりのこえもよくきこえます。ここでなら、ゆっくりやすめます。", en: "Since it's a quiet place, you can hear birds well too. If it's here, you can rest peacefully.", bn: "শান্ত জায়গা বলে পাখির ডাকও ভালোভাবে শোনা যায়। এখানে হলে আরামে বিশ্রাম নেওয়া যায়।" }
                ]
            }
        ]
    },
    {
        id: "passive-voice",
        title: "Passive Voice",
        stories: [
            {
                title: "財布を盗まれました",
                paragraphs: [
                    { jp: "昨日、電車の中で財布を盗まれました。とても驚きました。", reading: "きのう、でんしゃのなかでさいふをぬすまれました。とてもおどろきました。", en: "Yesterday, my wallet was stolen on the train. I was very surprised.", bn: "গতকাল ট্রেনের ভেতরে মানিব্যাগ চুরি হয়ে গিয়েছিল। খুব অবাক হয়েছিলাম।" },
                    { jp: "駅員に色々と質問されましたが、財布はまだ見つかっていません。", reading: "えきいんにいろいろとしつもんされましたが、さいふはまだみつかっていません。", en: "The station staff asked me various questions, but the wallet still hasn't been found.", bn: "স্টেশনের কর্মীরা নানারকম প্রশ্ন করেছিলেন, তবে মানিব্যাগ এখনো পাওয়া যায়নি।" },
                    { jp: "この駅は多くの人によって毎日使われています。もっと気をつけなければなりません。", reading: "このえきはおおくのひとによってまいにちつかわれています。もっときをつけなければなりません。", en: "This station is used by many people every day. I have to be more careful.", bn: "এই স্টেশনটা প্রতিদিন অনেক মানুষ ব্যবহার করে। আরও সাবধান থাকতে হবে।" }
                ]
            },
            {
                title: "有名な小説",
                paragraphs: [
                    { jp: "この小説は世界中の人に読まれています。有名な作家によって書かれました。", reading: "このしょうせつはせかいじゅうのひとによまれています。ゆうめいなさっかによってかかれました。", en: "This novel is read by people all over the world. It was written by a famous author.", bn: "এই উপন্যাসটা সারা বিশ্বের মানুষ পড়ে। একজন বিখ্যাত লেখক এটা লিখেছিলেন।" },
                    { jp: "子供のとき、母によく読んでもらいました。だから、この本にとても好かれています。", reading: "こどものとき、ははによくよんでもらいました。だから、このほんにとてもすかれています。", en: "As a child, my mother often read it to me. That's why this book is very much loved by me.", bn: "ছোটবেলায় মা প্রায়ই আমাকে পড়ে শোনাতেন। তাই এই বইটা খুব প্রিয়।" },
                    { jp: "最近、この小説は映画にもされました。多くの人に見られているそうです。", reading: "さいきん、このしょうせつはえいがにもされました。おおくのひとにみられているそうです。", en: "Recently, this novel was also made into a movie. Apparently it's being watched by many people.", bn: "সম্প্রতি এই উপন্যাসটা সিনেমাও বানানো হয়েছে। শোনা যায় অনেক মানুষ এটা দেখছেন।" }
                ]
            }
        ]
    },
    {
        id: "causative-form",
        title: "Causative Form",
        stories: [
            {
                title: "子供に野菜を食べさせます",
                paragraphs: [
                    { jp: "田中さんは子供に毎日野菜を食べさせます。子供は野菜が好きではありませんが、頑張って食べます。", reading: "たなかさんはこどもにまいにちやさいをたべさせます。こどもはやさいがすきではありませんが、がんばってたべます。", en: "Tanaka makes her child eat vegetables every day. The child doesn't like vegetables, but tries hard to eat them.", bn: "তানাকা প্রতিদিন বাচ্চাকে সবজি খাওয়ায়। বাচ্চা সবজি পছন্দ করে না, তবে চেষ্টা করে খায়।" },
                    { jp: "週末は、子供を公園で自由に遊ばせます。とても楽しそうです。", reading: "しゅうまつは、こどもをこうえんでじゆうにあそばせます。とてもたのしそうです。", en: "On weekends, she lets the child play freely at the park. He looks very happy.", bn: "সপ্তাহান্তে বাচ্চাকে পার্কে স্বাধীনভাবে খেলতে দেয়। খুব আনন্দিত দেখায়।" },
                    { jp: "「今日は休ませてください」と子供が言いました。「分かりました」と田中さんは答えました。", reading: "「きょうはやすませてください」とこどもがいいました。「わかりました」とたなかさんはこたえました。", en: "\"Please let me rest today,\" the child said. \"Okay,\" Tanaka answered.", bn: "\"আজ বিশ্রাম নিতে দাও\" বাচ্চা বলল। \"ঠিক আছে\" তানাকা উত্তর দিল।" }
                ]
            },
            {
                title: "発表させてもらいました",
                paragraphs: [
                    { jp: "会議で、部長は私に意見を発表させてくれました。とても緊張しました。", reading: "かいぎで、ぶちょうはわたしにいけんをはっぴょうさせてくれました。とてもきんちょうしました。", en: "At the meeting, the department head let me present my opinion. I was very nervous.", bn: "মিটিংয়ে ম্যানেজার আমাকে মতামত উপস্থাপন করতে দিয়েছিলেন। খুব নার্ভাস লাগছিল।" },
                    { jp: "「新しいプロジェクトを担当させていただけますか」と課長に聞きました。", reading: "「あたらしいプロジェクトをたんとうさせていただけますか」とかちょうにききました。", en: "\"Could you please let me be in charge of the new project?\" I asked the section chief.", bn: "\"নতুন প্রকল্পের দায়িত্ব দেওয়া যাবে কি?\" সেকশন চিফকে জিজ্ঞেস করলাম।" },
                    { jp: "課長は喜んで、担当させてくれました。頑張って働こうと思います。", reading: "かちょうはよろこんで、たんとうさせてくれました。がんばってはたらこうとおもいます。", en: "The section chief happily let me take charge. I'm thinking of working hard.", bn: "সেকশন চিফ খুশি হয়ে দায়িত্ব দিলেন। কঠোর পরিশ্রম করব বলে ভাবছি।" }
                ]
            }
        ]
    },
{
        id: "causative-passive",
        title: "Causative-Passive Form",
        stories: [
            {
                title: "母に野菜を食べさせられました",
                paragraphs: [
                    { jp: "子供のころ、母に毎日野菜を食べさせられました。あまり好きではありませんでした。", reading: "こどものころ、ははにまいにちやさいをたべさせられました。あまりすきではありませんでした。", en: "When I was a child, my mother made me eat vegetables every day. I didn't like it very much.", bn: "ছোটবেলায় মা প্রতিদিন জোর করে সবজি খাওয়াতেন। খুব একটা পছন্দ ছিল না।" },
                    { jp: "学校でも、漢字を百回書かされました。手が疲れました。", reading: "がっこうでも、かんじをひゃっかいかかされました。てがつかれました。", en: "At school too, I was made to write kanji a hundred times. My hand got tired.", bn: "স্কুলেও কাঞ্জি একশোবার লিখতে বাধ্য করা হতো। হাত ক্লান্ত হয়ে যেত।" },
                    { jp: "でも、その映画を見て、本当に泣かされました。感動的な話でした。", reading: "でも、そのえいがをみて、ほんとうになかされました。かんどうてきなはなしでした。", en: "But watching that movie really made me cry. It was a moving story.", bn: "তবে ওই সিনেমাটা দেখে সত্যিই কাঁদতে বাধ্য হয়েছিলাম। খুবই হৃদয়স্পর্শী গল্প ছিল।" }
                ]
            },
            {
                title: "驚かされることが多いです",
                paragraphs: [
                    { jp: "田中さんの話にはいつも驚かされます。とても面白い経験をたくさんしています。", reading: "たなかさんのはなしにはいつもおどろかされます。とてもおもしろいけいけんをたくさんしています。", en: "I'm always surprised by Tanaka's stories. She's had a lot of very interesting experiences.", bn: "তানাকার গল্পে সবসময়ই অবাক হয়ে যাই। খুব মজার অনেক অভিজ্ঞতা তার আছে।" },
                    { jp: "先週、パーティーで歌を歌わされました。恥ずかしかったですが、楽しかったです。", reading: "せんしゅう、パーティーでうたをうたわされました。はずかしかったですが、たのしかったです。", en: "Last week, I was made to sing a song at a party. It was embarrassing, but fun.", bn: "গত সপ্তাহে পার্টিতে জোর করে গান গাওয়ানো হয়েছিল। লজ্জা লাগলেও মজা হয়েছিল।" },
                    { jp: "子供の一言に、よく考えさせられます。子供から学ぶことも多いです。", reading: "こどものひとことに、よくかんがえさせられます。こどもからまなぶこともおおいです。", en: "Children's remarks often make me think. There's a lot to learn from children too.", bn: "বাচ্চাদের একটা কথায় প্রায়ই ভাবতে বাধ্য হই। বাচ্চাদের কাছ থেকেও অনেক কিছু শেখার আছে।" }
                ]
            }
        ]
    },
    {
        id: "respectful-keigo",
        title: "Respectful Keigo (尊敬語)",
        stories: [
            {
                title: "社長がいらっしゃいます",
                paragraphs: [
                    { jp: "明日、社長が会社にいらっしゃいます。みんな緊張しています。", reading: "あした、しゃちょうがかいしゃにいらっしゃいます。みんなきんちょうしています。", en: "Tomorrow, the president will come to the office. Everyone is nervous.", bn: "আগামীকাল প্রেসিডেন্ট অফিসে আসবেন। সবাই নার্ভাস।" },
                    { jp: "「資料をもうお読みになりましたか」と部長が聞きました。", reading: "「しりょうをもうおよみになりましたか」とぶちょうがききました。", en: "\"Have you already read the materials?\" the department head asked.", bn: "\"কাগজপত্র ইতিমধ্যে পড়েছেন কি?\" ম্যানেজার জিজ্ঞেস করলেন।" },
                    { jp: "「どうぞこちらにお座りください」と社員が案内しました。社長はにこにこしていました。", reading: "「どうぞこちらにおすわりください」としゃいんがあんないしました。しゃちょうはにこにこしていました。", en: "\"Please sit here,\" an employee showed him. The president was smiling.", bn: "\"দয়া করে এখানে বসুন\" একজন কর্মী নির্দেশ দিলেন। প্রেসিডেন্ট মিটমিট করে হাসছিলেন।" }
                ]
            },
            {
                title: "先生がおっしゃいました",
                paragraphs: [
                    { jp: "山田先生は、明日試験があるとおっしゃいました。学生は驚きました。", reading: "やまだせんせいは、あしたしけんがあるとおっしゃいました。がくせいはおどろきました。", en: "Yamada-sensei said that there's a test tomorrow. The students were surprised.", bn: "ইয়ামাদা শিক্ষক বললেন যে আগামীকাল পরীক্ষা আছে। শিক্ষার্থীরা অবাক হলো।" },
                    { jp: "「静かに勉強なさってください」と先生はおっしゃいました。", reading: "「しずかにべんきょうなさってください」とせんせいはおっしゃいました。", en: "\"Please study quietly,\" the teacher said.", bn: "\"চুপচাপ পড়াশোনা করুন\" শিক্ষক বললেন।" },
                    { jp: "先生はいつも学生のことをよくご覧になっています。とても優しい先生です。", reading: "せんせいはいつもがくせいのことをよくごらんになっています。とてもやさしいせんせいです。", en: "The teacher always watches over the students carefully. A very kind teacher.", bn: "শিক্ষক সবসময় শিক্ষার্থীদের ভালোভাবে খেয়াল রাখেন। খুবই ভালো শিক্ষক।" }
                ]
            }
        ]
    },
    {
        id: "humble-keigo",
        title: "Humble Keigo (謙譲語)",
        stories: [
            {
                title: "面接の日",
                paragraphs: [
                    { jp: "面接の日、ラキブさんは「ラキブと申します」と自己紹介しました。", reading: "めんせつのひ、ラキブさんは「ラキブともうします」とじこしょうかいしました。", en: "On the day of the interview, Rakib introduced himself, saying, \"My name is Rakib.\"", bn: "ইন্টারভিউয়ের দিন রাকিব \"আমার নাম রাকিব\" বলে নিজের পরিচয় দিল।" },
                    { jp: "「資料は拝見しました」と言って、質問に答えました。", reading: "「しりょうははいけんしました」といって、しつもんにこたえました。", en: "He said, \"I have looked over the materials,\" and answered the questions.", bn: "\"কাগজপত্র দেখে নিয়েছি\" বলে প্রশ্নের উত্তর দিল।" },
                    { jp: "面接官に「弊社のことをご存じですか」と聞かれ、「はい、存じております」と答えました。", reading: "めんせつかんに「へいしゃのことをごぞんじですか」ときかれ、「はい、ぞんじております」とこたえました。", en: "When the interviewer asked, \"Do you know about our company?\" he answered, \"Yes, I am aware of it.\"", bn: "ইন্টারভিউয়ার জিজ্ঞেস করলেন, \"আমাদের কোম্পানি সম্পর্কে জানেন কি?\" উত্তর দিল, \"হ্যাঁ, জানি।\"" }
                ]
            },
            {
                title: "お客様への挨拶",
                paragraphs: [
                    { jp: "店員は「いらっしゃいませ」と挨拶して、「少々お待ちください」と言いました。", reading: "てんいんは「いらっしゃいませ」とあいさつして、「しょうしょうおまちください」といいました。", en: "The clerk greeted, \"Welcome,\" and said, \"Please wait a moment.\"", bn: "দোকানি \"স্বাগতম\" বলে সম্ভাষণ করে বলল, \"একটু অপেক্ষা করুন।\"" },
                    { jp: "「こちらの資料をお持ちいたしました」と丁寧に渡しました。", reading: "「こちらのしりょうをおもちいたしました」とていねいにわたしました。", en: "\"I have brought these materials,\" they said, handing them over politely.", bn: "\"এই কাগজপত্রগুলো নিয়ে এসেছি\" বিনয়ের সাথে হাতে দিল।" },
                    { jp: "お客様に「どうぞ召し上がってください」とお菓子を差し上げました。", reading: "おきゃくさまに「どうぞめしあがってください」とおかしをさしあげました。", en: "They offered the customer sweets, saying, \"Please go ahead and enjoy these.\"", bn: "গ্রাহককে \"দয়া করে খেয়ে নিন\" বলে মিষ্টি দিলেন।" }
                ]
            }
        ]
    },
    {
        id: "commands-and-orders",
        title: "Commands, Orders & Strong Requests",
        stories: [
            {
                title: "先生の言葉",
                paragraphs: [
                    { jp: "高校のとき、先生はよく「早く来い」と言いました。とても厳しかったです。", reading: "こうこうのとき、せんせいはよく「はやくこい」といいました。とてもきびしかったです。", en: "In high school, the teacher often said, \"Come quickly!\" He was very strict.", bn: "হাইস্কুলে শিক্ষক প্রায়ই বলতেন \"তাড়াতাড়ি আয়!\" খুব কঠোর ছিলেন।" },
                    { jp: "「廊下を走るな」というルールもありました。「宿題を忘れるな」ともよく言われました。", reading: "「ろうかをはしるな」というルールもありました。「しゅくだいをわすれるな」ともよくいわれました。", en: "There was also a rule, \"Don't run in the hallway.\" I was also often told, \"Don't forget your homework.\"", bn: "\"বারান্দায় দৌড়াবি না\" এমন নিয়মও ছিল। \"হোমওয়ার্ক ভুলবি না\" এটাও প্রায়ই শুনতাম।" },
                    { jp: "母にも「野菜を食べなさい」とよく言われました。今、懐かしく思い出します。", reading: "ははにも「やさいをたべなさい」とよくいわれました。いま、なつかしくおもいだします。", en: "My mother also often told me, \"Eat your vegetables.\" Now, I recall it fondly.", bn: "মায়ের কাছ থেকেও প্রায়ই শুনতাম \"সবজি খাও।\" এখন নস্টালজিক লাগে মনে পড়লে।" }
                ]
            },
            {
                title: "危ないから、触るな",
                paragraphs: [
                    { jp: "工事現場に「危ないから、入るな」という看板がありました。", reading: "こうじげんばに「あぶないから、はいるな」というかんばんがありました。", en: "At the construction site, there was a sign that said, \"It's dangerous, so don't enter.\"", bn: "নির্মাণস্থলে \"বিপজ্জনক, ঢুকবেন না\" এমন একটা সাইনবোর্ড ছিল।" },
                    { jp: "父はいつも「電気を消せ」「静かにしろ」と大きい声で言います。", reading: "ちちはいつも「でんきをけせ」「しずかにしろ」とおおきいこえでいいます。", en: "My father always says loudly, \"Turn off the light!\" \"Be quiet!\"", bn: "বাবা সবসময় জোরে বলেন \"বাতি নিভা!\" \"চুপ থাক!\"" },
                    { jp: "「危ないから、そこに触るな」と兄が妹に注意しました。「分かった」と妹は言いました。", reading: "「あぶないから、そこにさわるな」とあにがいもうとにちゅういしました。「わかった」といもうとはいいました。", en: "\"Don't touch that, it's dangerous,\" the older brother warned his younger sister. \"Got it,\" she said.", bn: "\"বিপজ্জনক, ওখানে ছোঁবে না\" বড় ভাই ছোট বোনকে সতর্ক করল। \"বুঝেছি\" বোন বলল।" }
                ]
            }
        ]
    },
    {
        id: "volitional-and-intentions",
        title: "Volitional Form & Intentions",
        stories: [
            {
                title: "将来の夢",
                paragraphs: [
                    { jp: "ラキブさんは将来、自分の会社を作ろうと思っています。今から準備するつもりです。", reading: "ラキブさんはしょうらい、じぶんのかいしゃをつくろうとおもっています。いまからじゅんびするつもりです。", en: "Rakib is thinking of starting his own company in the future. He intends to start preparing now.", bn: "রাকিব ভবিষ্যতে নিজের একটা কোম্পানি বানাবে বলে ভাবছে। এখন থেকেই প্রস্তুতি নেওয়ার ইচ্ছা করছে।" },
                    { jp: "田中さんは大学院に進学する予定です。来年の三月に卒業する予定です。", reading: "たなかさんはだいがくいんにしんがくするよていです。らいねんのさんがつにそつぎょうするよていです。", en: "Tanaka is scheduled to go on to graduate school. She's scheduled to graduate next March.", bn: "তানাকা গ্র্যাজুয়েট স্কুলে যাওয়ার পরিকল্পনা করছে। আগামী বছরের মার্চে গ্র্যাজুয়েট হওয়ার কথা।" },
                    { jp: "「一緒に頑張ろう」と二人は約束しました。困ったら、いつでも相談しに行こうと思っています。", reading: "「いっしょにがんばろう」とふたりはやくそくしました。こまったら、いつでもそうだんしにいこうとおもっています。", en: "\"Let's do our best together,\" the two promised each other. They're thinking of coming to each other for advice anytime they're in trouble.", bn: "\"একসাথে চেষ্টা করি\" দুজন প্রতিশ্রুতি দিল। সমস্যা হলে যেকোনো সময় পরামর্শ নিতে যাবে বলে ভাবছে।" }
                ]
            },
            {
                title: "旅行の計画",
                paragraphs: [
                    { jp: "夏休みに、家族で旅行に行こうと思います。海に行くつもりです。", reading: "なつやすみに、かぞくでりょこうにいこうとおもいます。うみにいくつもりです。", en: "During summer vacation, I'm thinking of going on a trip with my family. I intend to go to the sea.", bn: "গ্রীষ্মের ছুটিতে পরিবার নিয়ে ভ্রমণে যাব বলে ভাবছি। সমুদ্রে যাওয়ার ইচ্ছা করছি।" },
                    { jp: "ホテルは、駅の近くに予約する予定です。天気がよければ、泳ごうと思っています。", reading: "ホテルは、えきのちかくによやくするよていです。てんきがよければ、およごうとおもっています。", en: "I'm planning to book a hotel near the station. If the weather's good, I'm thinking of swimming.", bn: "হোটেলটা স্টেশনের কাছেই বুক করার পরিকল্পনা করছি। আবহাওয়া ভালো থাকলে সাঁতার কাটব বলে ভাবছি।" },
                    { jp: "帰ってきたら、写真をみんなに見せようと思います。楽しい旅行にするつもりです。", reading: "かえってきたら、しゃしんをみんなにみせようとおもいます。たのしいりょこうにするつもりです。", en: "When I get back, I'm thinking of showing everyone the photos. I intend to make it a fun trip.", bn: "ফিরে এসে সবাইকে ছবি দেখাব বলে ভাবছি। আনন্দের একটা ভ্রমণ করার ইচ্ছা করছি।" }
                ]
            }
        ]
    },
{
        id: "reasons-and-connectors",
        title: "Reasons & Connecting Sentences",
        stories: [
            {
                title: "休みの日の過ごし方",
                paragraphs: [
                    { jp: "休みの日は、本を読んだり、料理をしたりします。音楽を聞きながら過ごすのが好きです。", reading: "やすみのひは、ほんをよんだり、りょうりをしたりします。おんがくをききながらすごすのがすきです。", en: "On days off, I read books, cook, and so on. I like spending time while listening to music.", bn: "ছুটির দিনে বই পড়া, রান্না করা—এসবই করি। গান শুনতে শুনতে সময় কাটাতে পছন্দ করি।" },
                    { jp: "この店は安いし、料理もおいしいし、よく行きます。散歩したり、写真を撮ったりするのも好きです。", reading: "このみせはやすいし、りょうりもおいしいし、よくいきます。さんぽしたり、しゃしんをとったりするのもすきです。", en: "This shop is cheap and the food is delicious, so I go there often. I also like taking walks and taking photos.", bn: "এই দোকানটা সস্তাও, খাবারও সুস্বাদু, তাই প্রায়ই যাই। হাঁটাহাঁটি করা, ছবি তোলা—এসবও পছন্দ করি।" },
                    { jp: "頭が痛いし、少し疲れているし、今日はゆっくりしたいです。休みながら、無理をしないようにします。", reading: "あたまがいたいし、すこしつかれているし、きょうはゆっくりしたいです。やすみながら、むりをしないようにします。", en: "My head hurts and I'm a bit tired, so I want to relax today. I'll try not to push myself too hard while resting.", bn: "মাথা ব্যথা করছে, একটু ক্লান্তও লাগছে, তাই আজ একটু আরাম করতে চাই। বিশ্রাম নিতে নিতে নিজেকে বেশি কষ্ট না দেওয়ার চেষ্টা করব।" }
                ]
            },
            {
                title: "忙しい一週間",
                paragraphs: [
                    { jp: "今週は、会議があるし、宿題も多いし、とても忙しいです。", reading: "こんしゅうは、かいぎがあるし、しゅくだいもおおいし、とてもいそがしいです。", en: "This week, there's a meeting, and I also have a lot of homework, so I'm very busy.", bn: "এই সপ্তাহে মিটিং আছে, হোমওয়ার্কও অনেক, তাই খুব ব্যস্ত।" },
                    { jp: "電車の中で本を読んだり、単語を覚えたりします。歩きながら考えることも多いです。", reading: "でんしゃのなかでほんをよんだり、たんごをおぼえたりします。あるきながらかんがえることもおおいです。", en: "On the train, I read books, memorize words, and so on. I also think a lot while walking.", bn: "ট্রেনে বই পড়া, শব্দ মুখস্থ করা—এসবই করি। হাঁটতে হাঁটতেও অনেক কিছু ভাবি।" },
                    { jp: "忙しいし、疲れているし、週末はゆっくり休むつもりです。", reading: "いそがしいし、つかれているし、しゅうまつはゆっくりやすむつもりです。", en: "I'm busy and I'm tired, so I intend to rest peacefully on the weekend.", bn: "ব্যস্ত, ক্লান্তও, তাই সপ্তাহান্তে আরামে বিশ্রাম নেওয়ার ইচ্ছা করছি।" }
                ]
            }
        ]
    },
    {
        id: "concession-and-contrast",
        title: "Concession, Contrast & Unexpected Outcomes",
        stories: [
            {
                title: "諦めない気持ち",
                paragraphs: [
                    { jp: "一生懸命勉強したのに、試験の結果はあまりよくありませんでした。", reading: "いっしょうけんめいべんきょうしたのに、しけんのけっかはあまりよくありませんでした。", en: "Even though I studied hard, the exam results weren't very good.", bn: "প্রাণপণ পড়াশোনা করার পরও পরীক্ষার ফলাফল খুব একটা ভালো হয়নি।" },
                    { jp: "残念でしたが、それでも、諦めませんでした。難しいけれど、来月もう一度受けることにしました。", reading: "ざんねんでしたが、それでも、あきらめませんでした。むずかしいけれど、らいげつもういちどうけることにしました。", en: "It was disappointing, but even so, I didn't give up. Even though it's difficult, I decided to take it again next month.", bn: "খারাপ লেগেছিল, তবু হাল ছাড়িনি। কঠিন হলেও, আগামী মাসে আবার পরীক্ষা দেওয়ার সিদ্ধান্ত নিলাম।" },
                    { jp: "天気がいいのに、家でずっと勉強していました。外に出たかったけれど、我慢しました。", reading: "てんきがいいのに、いえでずっとべんきょうしていました。そとにでたかったけれど、がまんしました。", en: "Even though the weather was nice, I was studying at home the whole time. I wanted to go outside, but I held back.", bn: "আবহাওয়া সুন্দর হওয়া সত্ত্বেও বাসায় সারাক্ষণ পড়াশোনা করছিলাম। বাইরে যেতে ইচ্ছা করলেও সামলে নিয়েছিলাম।" }
                ]
            },
            {
                title: "小さいけれど、丈夫です",
                paragraphs: [
                    { jp: "この部屋は小さいけれど、とても便利です。駅から近いのに、家賃は安いです。", reading: "このへやはちいさいけれど、とてもべんりです。えきからちかいのに、やちんはやすいです。", en: "This room is small, but very convenient. Even though it's close to the station, the rent is cheap.", bn: "এই ঘরটা ছোট হলেও খুব সুবিধাজনক। স্টেশনের কাছে হওয়া সত্ত্বেও ভাড়া কম।" },
                    { jp: "古いのに、部屋の中はきれいです。それでも、少し狭いと感じることもあります。", reading: "ふるいのに、へやのなかはきれいです。それでも、すこしせまいとかんじることもあります。", en: "Even though it's old, the inside of the room is clean. Even so, sometimes I feel it's a bit cramped.", bn: "পুরনো হওয়া সত্ত্বেও ঘরের ভেতরটা পরিষ্কার। তবুও মাঝেমধ্যে একটু ছোট মনে হয়।" },
                    { jp: "家具は少ないけれど、必要な物は全部あります。それでも、いつか広い家に住みたいです。", reading: "かぐはすくないけれど、ひつようなものはぜんぶあります。それでも、いつかひろいいえにすみたいです。", en: "There's not much furniture, but everything I need is there. Even so, someday I want to live in a spacious house.", bn: "আসবাবপত্র কম হলেও দরকারি সবকিছুই আছে। তবুও একদিন একটা বড় বাড়িতে থাকতে চাই।" }
                ]
            }
        ]
    },
    {
        id: "quoting-and-reported-speech",
        title: "Quoting & Reported Speech",
        stories: [
            {
                title: "噂を聞きました",
                paragraphs: [
                    { jp: "田中さんによると、山田さんは来月結婚するそうです。とても幸せだと言っていました。", reading: "たなかさんによると、やまださんはらいげつけっこんするそうです。とてもしあわせだといっていました。", en: "According to Tanaka, Yamada is getting married next month. She said she's very happy.", bn: "তানাকার মতে, ইয়ামাদা আগামী মাসে বিয়ে করছে। সে নাকি বলেছিল খুব খুশি।" },
                    { jp: "相手はとても優しい人だということです。二人はきっと幸せになると思います。", reading: "あいてはとてもやさしいひとだということです。ふたりはきっとしあわせになるとおもいます。", en: "I hear the partner is a very kind person. I think the two of them will surely be happy.", bn: "তার সঙ্গী নাকি খুব ভালো মানুষ। মনে হয় দুজনেই নিশ্চয়ই সুখী হবে।" },
                    { jp: "「ラキブさんも結婚するつもりだって」と誰かが言っていました。冗談かもしれません。", reading: "「ラキブさんもけっこんするつもりだって」とだれかがいっていました。じょうだんかもしれません。", en: "Someone said, \"I heard Rakib is planning to get married too.\" It might be a joke.", bn: "\"রাকিবও নাকি বিয়ে করার ইচ্ছা করছে\" কেউ একজন বলছিল। হয়তো মজা করছিল।" }
                ]
            },
            {
                title: "先生の話",
                paragraphs: [
                    { jp: "先生は、来週テストがあると言っていました。学生たちは少し驚きました。", reading: "せんせいは、らいしゅうテストがあるといっていました。がくせいたちはすこしおどろきました。", en: "The teacher said there would be a test next week. The students were a bit surprised.", bn: "শিক্ষক বলেছিলেন যে আগামী সপ্তাহে পরীক্ষা আছে। শিক্ষার্থীরা একটু অবাক হয়েছিল।" },
                    { jp: "「今回のテストは難しいということです」とラキブさんが教えてくれました。", reading: "「こんかいのテストはむずかしいということです」とラキブさんがおしえてくれました。", en: "\"I hear this test is difficult,\" Rakib told me.", bn: "\"এবারের পরীক্ষাটা নাকি কঠিন\" রাকিব জানিয়ে দিল।" },
                    { jp: "「頑張って勉強しなきゃ」って田中さんが言いました。みんなで一緒に勉強することにしました。", reading: "「がんばってべんきょうしなきゃ」ってたなかさんがいいました。みんなでいっしょにべんきょうすることにしました。", en: "\"I've gotta study hard,\" Tanaka said. Everyone decided to study together.", bn: "\"পরিশ্রম করে পড়তে হবে\" তানাকা বলল। সবাই মিলে একসাথে পড়াশোনার সিদ্ধান্ত নিল।" }
                ]
            }
        ]
    },
    {
        id: "degree-and-extent",
        title: "Degree & Extent",
        stories: [
            {
                title: "飲みすぎました",
                paragraphs: [
                    { jp: "昨日の飲み会で、ラキブさんは少し飲みすぎました。今日は頭が痛いです。", reading: "きのうののみかいで、ラキブさんはすこしのみすぎました。きょうはあたまがいたいです。", en: "At yesterday's drinking party, Rakib drank a bit too much. Today his head hurts.", bn: "গতকালের পার্টিতে রাকিব একটু বেশি মদ খেয়ে ফেলেছিল। আজ মাথা ব্যথা করছে।" },
                    { jp: "動けないほど痛いわけではありませんが、少し辛いです。水を五杯くらい飲みました。", reading: "うごけないほどいたいわけではありませんが、すこしつらいです。みずをごはいくらいのみました。", en: "It's not so painful that he can't move, but it's a bit rough. He drank about five glasses of water.", bn: "নড়তে না পারার মতো ব্যথা না হলেও একটু কষ্ট হচ্ছে। প্রায় পাঁচ গ্লাস পানি খেয়েছে।" },
                    { jp: "彼ほどお酒に強い人はいません。でも、次は飲みすぎないように気をつけると言いました。", reading: "かれほどおさけにつよいひとはいません。でも、つぎはのみすぎないようにきをつけるといいました。", en: "There's no one who can hold their liquor as well as he can. But he said he'll be careful not to drink too much next time.", bn: "তার মতো মদ সহ্য করতে পারার মতো কেউ নেই। তবে পরের বার বেশি না খাওয়ার ব্যাপারে সতর্ক থাকবে বলল।" }
                ]
            },
            {
                title: "働きすぎです",
                paragraphs: [
                    { jp: "田中さんは最近、働きすぎだと思います。毎日十時間くらい会社にいます。", reading: "たなかさんはさいきん、はたらきすぎだとおもいます。まいにちじゅうじかんくらいかいしゃにいます。", en: "I think Tanaka has been working too much lately. She's at the office about ten hours every day.", bn: "মনে হয় তানাকা সম্প্রতি অতিরিক্ত কাজ করছে। প্রতিদিন প্রায় দশ ঘণ্টা অফিসে থাকে।" },
                    { jp: "疲れが顔に出るほど、無理をしています。少しくらい休んだほうがいいです。", reading: "つかれがかおにでるほど、むりをしています。すこしくらいやすんだほうがいいです。", en: "She's pushing herself so hard that the tiredness shows on her face. She should rest at least a little.", bn: "ক্লান্তি মুখে ফুটে ওঠার মতো নিজেকে চাপ দিচ্ছে। অন্তত একটু বিশ্রাম নেওয়া ভালো।" },
                    { jp: "「働きすぎですよ」とラキブさんが心配して言いました。田中さんも少し休むと約束しました。", reading: "「はたらきすぎですよ」とラキブさんがしんぱいしていいました。たなかさんもすこしやすむとやくそくしました。", en: "\"You're working too much,\" Rakib said worriedly. Tanaka also promised to rest a bit.", bn: "\"অতিরিক্ত কাজ করছ\" রাকিব চিন্তিত হয়ে বলল। তানাকাও একটু বিশ্রাম নেবে বলে প্রতিশ্রুতি দিল।" }
                ]
            }
        ]
    },
    {
        id: "difficulty-and-ease",
        title: "Difficulty & Ease of Doing",
        stories: [
            {
                title: "使いやすいアプリ",
                paragraphs: [
                    { jp: "ラキブさんは新しいアプリを使ってみました。画面が見やすくて、使いやすいです。", reading: "ラキブさんはあたらしいアプリをつかってみました。がめんがみやすくて、つかいやすいです。", en: "Rakib tried using a new app. The screen is easy to see and easy to use.", bn: "রাকিব নতুন একটা অ্যাপ ব্যবহার করে দেখল। স্ক্রিনটা দেখতে সহজ, ব্যবহারও সহজ।" },
                    { jp: "古いアプリは字が読みにくくて、設定の仕方も分かりにくかったです。", reading: "ふるいアプリはじがよみにくくて、せっていのしかたもわかりにくかったです。", en: "The old app had text that was hard to read, and the setup method was also hard to understand.", bn: "পুরনো অ্যাপটায় লেখা পড়া কষ্টকর ছিল, সেটিংস করার পদ্ধতিও বোঝা কঠিন ছিল।" },
                    { jp: "田中さんに写真の撮り方を教えてもらいました。とても簡単で、覚えやすかったです。", reading: "たなかさんにしゃしんのとりかたをおしえてもらいました。とてもかんたんで、おぼえやすかったです。", en: "Tanaka taught him how to take photos. It was very simple and easy to remember.", bn: "তানাকার কাছে ছবি তোলার পদ্ধতি শিখে নিল। খুব সহজ, মনে রাখাও সহজ ছিল।" }
                ]
            },
            {
                title: "食べやすい料理",
                paragraphs: [
                    { jp: "このパンは柔らかくて、とても食べやすいです。子供にも食べやすい味です。", reading: "このパンはやわらかくて、とてもたべやすいです。こどもにもたべやすいあじです。", en: "This bread is soft and very easy to eat. It's a taste that's easy for children to eat too.", bn: "এই রুটিটা নরম, খেতেও খুব সহজ। বাচ্চাদেরও খেতে সহজ স্বাদ।" },
                    { jp: "反対に、あの店の料理は硬くて、少し食べにくいです。", reading: "はんたいに、あのみせのりょうりはかたくて、すこしたべにくいです。", en: "On the other hand, that shop's food is hard and a bit difficult to eat.", bn: "বিপরীতে, ওই দোকানের খাবার শক্ত, খেতে একটু কষ্ট হয়।" },
                    { jp: "料理の作り方が分かりやすいレシピの本を買いました。今度、作ってみたいです。", reading: "りょうりのつくりかたがわかりやすいレシピのほんをかいました。こんど、つくってみたいです。", en: "I bought a recipe book where the way of cooking is easy to understand. I want to try making it sometime.", bn: "রান্নার পদ্ধতি সহজে বোঝা যায় এমন একটা রেসিপি বই কিনলাম। কখনো বানিয়ে দেখতে চাই।" }
                ]
            }
        ]
    },
{
        id: "change-of-state",
        title: "Change of State & Decisions",
        stories: [
            {
                title: "福岡に引っ越すことになりました",
                paragraphs: [
                    { jp: "田中さんは来月から福岡で働くことになりました。急な話で、驚きました。", reading: "たなかさんはらいげつからふくおかではたらくことになりました。きゅうなはなしで、おどろきました。", en: "It's been decided that Tanaka will work in Fukuoka starting next month. It was a sudden thing, and I was surprised.", bn: "তানাকার আগামী মাস থেকে ফুকুওকায় কাজ করার সিদ্ধান্ত হয়ে গেছে। হঠাৎ ব্যাপার, অবাক হয়েছিলাম।" },
                    { jp: "だから、今住んでいる部屋を引っ越すことにしました。荷物の整理も始めました。", reading: "だから、いますんでいるへやをひっこすことにしました。にもつのせいりもはじめました。", en: "So, she decided to move out of the room she's currently living in. She also started organizing her belongings.", bn: "তাই এখন যে ঘরে থাকছে সেটা ছেড়ে চলে যাওয়ার সিদ্ধান্ত নিল। জিনিসপত্র গোছানোও শুরু করল।" },
                    { jp: "最近、敬語も上手に使えるようになりました。新しい生活にも、すぐ慣れるようになると思います。", reading: "さいきん、けいごもじょうずにつかえるようになりました。あたらしいせいかつにも、すぐなれるようになるとおもいます。", en: "Lately she's become able to use keigo well too. She thinks she'll quickly get used to the new life too.", bn: "সম্প্রতি কেইগোও ভালোভাবে ব্যবহার করতে পারা শুরু করেছে। নতুন জীবনেও শীঘ্রই অভ্যস্ত হয়ে যাবে বলে মনে করে।" }
                ]
            },
            {
                title: "毎日運動することにしました",
                paragraphs: [
                    { jp: "医者に、もっと運動したほうがいいと言われました。だから、毎日運動することにしました。", reading: "いしゃに、もっとうんどうしたほうがいいといわれました。だから、まいにちうんどうすることにしました。", en: "The doctor told me I should exercise more. So, I decided to exercise every day.", bn: "ডাক্তার বলেছিলেন আরও ব্যায়াম করা ভালো। তাই প্রতিদিন ব্যায়াম করার সিদ্ধান্ত নিলাম।" },
                    { jp: "最初は大変でしたが、今は楽しく運動できるようになりました。", reading: "さいしょはたいへんでしたが、いまはたのしくうんどうできるようになりました。", en: "At first it was hard, but now I've become able to exercise happily.", bn: "প্রথমে কষ্ট হলেও এখন আনন্দের সাথে ব্যায়াম করতে পারা শুরু করেছি।" },
                    { jp: "来月から、ジムに通うことになりました。健康的な生活を続けたいです。", reading: "らいげつから、ジムにかようことになりました。けんこうてきなせいかつをつづけたいです。", en: "Starting next month, it's been arranged that I'll go to the gym. I want to continue a healthy lifestyle.", bn: "আগামী মাস থেকে জিমে যাওয়ার সিদ্ধান্ত হয়ে গেছে। স্বাস্থ্যকর জীবনযাপন চালিয়ে যেতে চাই।" }
                ]
            }
        ]
    },
    {
        id: "time-and-simultaneity",
        title: "Time Relations & Simultaneous Actions",
        stories: [
            {
                title: "引っ越しの準備中",
                paragraphs: [
                    { jp: "今、荷物を整理しているところです。実は、さっき箱を全部閉じたところです。", reading: "いま、にもつをせいりしているところです。じつは、さっきはこをぜんぶとじたところです。", en: "I'm just in the middle of organizing my things right now. Actually, I just finished closing all the boxes a moment ago.", bn: "এখন জিনিসপত্র গুছাচ্ছি। আসলে এইমাত্র সব বাক্স বন্ধ করা শেষ করলাম।" },
                    { jp: "先月、引っ越したばかりのラキブさんが手伝いに来てくれました。", reading: "せんげつ、ひっこしたばかりのラキブさんがてつだいにきてくれました。", en: "Rakib, who just moved last month, came to help.", bn: "গত মাসেই মাত্র বাসা বদলানো রাকিব সাহায্য করতে এসেছিল।" },
                    { jp: "この箱、開けたままでした。窓も開いたままなので、閉めましょう。", reading: "このはこ、あけたままでした。まどもあいたままなので、しめましょう。", en: "This box was left open. The window is also left open, so let's close it.", bn: "এই বাক্সটা খোলাই ছিল। জানালাও খোলা রয়ে গেছে, তাই বন্ধ করি।" }
                ]
            },
            {
                title: "会議が終わったところです",
                paragraphs: [
                    { jp: "ちょうど会議が終わったところです。少し疲れました。", reading: "ちょうどかいぎがおわったところです。すこしつかれました。", en: "The meeting just ended. I'm a bit tired.", bn: "এইমাত্র মিটিং শেষ হলো। একটু ক্লান্ত লাগছে।" },
                    { jp: "資料を作っているところに、電話がかかってきました。", reading: "しりょうをつくっているところに、でんわがかかってきました。", en: "While I was in the middle of making materials, a call came in.", bn: "কাগজপত্র বানানোর সময়ই একটা ফোন এলো।" },
                    { jp: "電話に出たばかりなのに、もう会議室に呼ばれました。今日は忙しいままです。", reading: "でんわにでたばかりなのに、もうかいぎしつによばれました。きょうはいそがしいままです。", en: "I had only just answered the phone, but I was already called to the meeting room. Today remains busy.", bn: "এইমাত্র ফোন ধরেছি, তবুও মিটিং রুমে ডাকা হলো। আজ ব্যস্ততাই থেকে যাচ্ছে।" }
                ]
            }
        ]
    },
    {
        id: "uncertainty-and-possibility",
        title: "Uncertainty, Possibility & Confirmation",
        stories: [
            {
                title: "明日の天気",
                paragraphs: [
                    { jp: "明日雨が降るかどうか、まだ分かりません。曇っていますから、降るかもしれません。", reading: "あしたあめがふるかどうか、まだわかりません。くもっていますから、ふるかもしれません。", en: "I still don't know whether it will rain tomorrow or not. Since it's cloudy, it might rain.", bn: "আগামীকাল বৃষ্টি হবে কিনা এখনো জানা নেই। মেঘলা তো, তাই হতেও পারে।" },
                    { jp: "天気予報によると、午後は晴れるはずです。朝は少し寒いでしょう。", reading: "てんきよほうによると、ごごははれるはずです。あさはすこしさむいでしょう。", en: "According to the weather forecast, it should clear up in the afternoon. It'll probably be a bit cold in the morning.", bn: "পূর্বাভাস অনুযায়ী বিকেলে রোদ ওঠার কথা। সকালে একটু ঠান্ডা থাকবে হয়তো।" },
                    { jp: "ハイキングに行けるかどうか、まだ決まっていませんが、たぶん行けるはずです。", reading: "ハイキングにいけるかどうか、まだきまっていませんが、たぶんいけるはずです。", en: "It's still not decided whether we can go hiking or not, but we should probably be able to go.", bn: "হাইকিংয়ে যেতে পারব কিনা এখনো ঠিক না হলেও, সম্ভবত যেতে পারব।" }
                ]
            },
            {
                title: "田中さんは来られるでしょうか",
                paragraphs: [
                    { jp: "田中さんが来られるかどうか、まだ分かりません。忙しいかもしれません。", reading: "たなかさんがこられるかどうか、まだわかりません。いそがしいかもしれません。", en: "I still don't know whether Tanaka can come or not. She might be busy.", bn: "তানাকা আসতে পারবে কিনা এখনো জানা নেই। হয়তো ব্যস্ত থাকতে পারে।" },
                    { jp: "でも、もう返事をくれたはずです。たぶん、大丈夫でしょう。", reading: "でも、もうへんじをくれたはずです。たぶん、だいじょうぶでしょう。", en: "But she should have already given a reply. It's probably fine.", bn: "তবে ততক্ষণে উত্তর দেওয়ার কথা। সম্ভবত ঠিক আছে।" },
                    { jp: "本当に来るかどうか、明日確認するつもりです。来られるといいですね。", reading: "ほんとうにくるかどうか、あしたかくにんするつもりです。こられるといいですね。", en: "I intend to confirm tomorrow whether she's really coming or not. It would be nice if she can come.", bn: "সত্যিই আসবে কিনা আগামীকাল নিশ্চিত করার ইচ্ছা করছি। আসতে পারলে ভালো হয়।" }
                ]
            }
        ]
    },
    {
        id: "purpose-and-advice",
        title: "Purpose & Giving Advice",
        stories: [
            {
                title: "健康のために",
                paragraphs: [
                    { jp: "太らないように、野菜をたくさん食べたほうがいいです。", reading: "ふとらないように、やさいをたくさんたべたほうがいいです。", en: "So as not to gain weight, you should eat plenty of vegetables.", bn: "মোটা না হওয়ার জন্য প্রচুর সবজি খাওয়া ভালো।" },
                    { jp: "よく眠れるように、夜遅くに食べないほうがいいです。", reading: "よくねむれるように、よるおそくにたべないほうがいいです。", en: "So that you can sleep well, you'd better not eat late at night.", bn: "ভালো ঘুমের জন্য রাতে দেরিতে না খাওয়াই ভালো।" },
                    { jp: "健康のために、毎日少し運動したほうがいいと医者に言われました。", reading: "けんこうのために、まいにちすこしうんどうしたほうがいいといしゃにいわれました。", en: "The doctor told me that for my health, I should exercise a little every day.", bn: "স্বাস্থ্যের জন্য প্রতিদিন একটু ব্যায়াম করা ভালো বলে ডাক্তার জানিয়েছিলেন।" }
                ]
            },
            {
                title: "試験のアドバイス",
                paragraphs: [
                    { jp: "忘れないように、今からノートにまとめたほうがいいです。", reading: "わすれないように、いまからノートにまとめたほうがいいです。", en: "So as not to forget, you should summarize it in your notebook starting now.", bn: "ভুলে না যাওয়ার জন্য এখন থেকেই নোটবুকে গুছিয়ে রাখা ভালো।" },
                    { jp: "試験の前の日は、遅くまで勉強しないほうがいいですよ。", reading: "しけんのまえのひは、おそくまでべんきょうしないほうがいいですよ。", en: "The day before the exam, you shouldn't study late.", bn: "পরীক্ষার আগের দিন রাত করে পড়াশোনা না করাই ভালো।" },
                    { jp: "分かるように、田中さんは丁寧に説明してくれました。おかげで、少し安心しました。", reading: "わかるように、たなかさんはていねいにせつめいしてくれました。おかげで、すこしあんしんしました。", en: "So that I would understand, Tanaka explained carefully. Thanks to that, I felt a bit relieved.", bn: "বোঝার জন্য তানাকা বিস্তারিতভাবে ব্যাখ্যা করে দিল। তার কারণে একটু স্বস্তি পেলাম।" }
                ]
            }
        ]
    },
    {
        id: "compound-verbs-and-review",
        title: "Compound Verbs & Everyday Expressions",
        stories: [
            {
                title: "三年間の日本語学習",
                paragraphs: [
                    { jp: "ラキブさんは三年前から日本語を勉強し始めました。今もまだ勉強し続けています。", reading: "ラキブさんはさんねんまえからにほんごをべんきょうしはじめました。いまもまだべんきょうしつづけています。", en: "Rakib started studying Japanese three years ago. He's still continuing to study even now.", bn: "রাকিব তিন বছর আগে থেকে জাপানি ভাষা শেখা শুরু করেছিল। এখনও পড়াশোনা চালিয়ে যাচ্ছে।" },
                    { jp: "妹も日本語を習いたがっています。漢字とか、文法とか、色々教えてあげたいです。", reading: "いもうともにほんごをならいたがっています。かんじとか、ぶんぽうとか、いろいろおしえてあげたいです。", en: "His little sister wants to learn Japanese too. He wants to teach her various things like kanji and grammar.", bn: "তার ছোট বোনও জাপানি শিখতে চাইছে। কাঞ্জি, ব্যাকরণ—নানা কিছু শেখাতে চায়।" },
                    { jp: "この三年間、本当にたくさんのことを学びました。これからも一緒に勉強し続けようと思っています。", reading: "このさんねんかん、ほんとうにたくさんのことをまなびました。これからもいっしょにべんきょうしつづけようとおもっています。", en: "Over these three years, he's really learned a lot. He's thinking of continuing to study together from now on too.", bn: "এই তিন বছরে সত্যিই অনেক কিছু শিখেছে। এখন থেকেও একসাথে পড়াশোনা চালিয়ে যাবে বলে ভাবছে।" }
                ]
            },
            {
                title: "新しいことに挑戦したがる子供",
                paragraphs: [
                    { jp: "田中さんの子供はいつも新しいことに挑戦したがります。最近、ピアノを習い始めました。", reading: "たなかさんのこどもはいつもあたらしいことにちょうせんしたがります。さいきん、ピアノをならいはじめました。", en: "Tanaka's child always wants to try new things. Recently, they started learning piano.", bn: "তানাকার বাচ্চা সবসময় নতুন কিছু চেষ্টা করতে চায়। সম্প্রতি পিয়ানো শেখা শুরু করেছে।" },
                    { jp: "難しいですが、諦めないで練習し続けています。ダンスとか、水泳とか、他にもやりたがっています。", reading: "むずかしいですが、あきらめないでれんしゅうしつづけています。ダンスとか、すいえいとか、ほかにもやりたがっています。", en: "It's difficult, but they keep practicing without giving up. They also want to do other things like dance and swimming.", bn: "কঠিন হলেও হাল না ছেড়ে অনুশীলন চালিয়ে যাচ্ছে। নাচ, সাঁতার—আরও অনেক কিছু করতে চায়।" },
                    { jp: "子供は新しいことを覚えたがりますから、田中さんも一緒に楽しみ続けています。", reading: "こどもはあたらしいことをおぼえたがりますから、たなかさんもいっしょにたのしみつづけています。", en: "Since children want to learn new things, Tanaka continues to enjoy it together with them.", bn: "বাচ্চারা নতুন কিছু শিখতে চায় বলে তানাকাও একসাথে উপভোগ করে চলেছে।" }
                ]
            }
        ]
    }
        ]
    },
    n3: { chapters: [] },
    n2: { chapters: [] },
    n1: { chapters: [] }

};

if (typeof module !== "undefined" && module.exports) { module.exports = storiesData; }
