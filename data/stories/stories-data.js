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

    n4: { chapters: [] },
    n3: { chapters: [] },
    n2: { chapters: [] },
    n1: { chapters: [] }

};

if (typeof module !== "undefined" && module.exports) { module.exports = storiesData; }
