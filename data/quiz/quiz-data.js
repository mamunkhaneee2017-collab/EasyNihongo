/* ==========================================
   QUIZ QUESTION DATA
   Loaded via <script> tag (not fetch()) so
   quiz.html still works over file://.
   N3-N1 are intentionally empty — those levels
   are locked in the UI until content is added.
========================================== */

const quizData = {

    n5: [
        {
            question: "わたし＿がくせいです。 (Choose the correct particle)",
            options: ["を", "は", "に", "で"],
            answer: 1
        },
        {
            question: "すみません、トイレ＿どこですか。",
            options: ["は", "が", "を", "も"],
            answer: 0
        },
        {
            question: "「昨日」(きのう) means:",
            options: ["Today", "Tomorrow", "Yesterday", "Next week"],
            answer: 2
        },
        {
            question: "How do you say \"Good morning\" in Japanese?",
            options: ["こんばんは", "おはようございます", "さようなら", "ありがとう"],
            answer: 1
        },
        {
            question: "How do you say \"pen\" in Japanese?",
            options: ["ほん", "ペン", "つくえ", "いす"],
            answer: 1
        },
        {
            question: "わたしはまいにち＿をのみます。 (I drink ___ every day — water)",
            options: ["水", "火", "木", "土"],
            answer: 0
        },
        {
            question: "がっこう＿いきます。 (go to school)",
            options: ["を", "に", "は", "と"],
            answer: 1
        },
        {
            question: "「ありがとうございます」means:",
            options: ["Sorry", "Thank you very much", "Good night", "Excuse me"],
            answer: 1
        }
    ],

    n4: [
        {
            question: "宿題を＿なりません。 (must do homework)",
            options: ["して", "しなければ", "したり", "しよう"],
            answer: 1
        },
        {
            question: "もし雨が＿、行きません。 (if it rains)",
            options: ["ふる", "ふったら", "ふっている", "ふれ"],
            answer: 1
        },
        {
            question: "「約束」(やくそく) means:",
            options: ["Promise", "Mistake", "Experience", "Opinion"],
            answer: 0
        },
        {
            question: "このケーキは＿です。 (looks delicious)",
            options: ["おいしいそう", "おいしそう", "おいしくそう", "おいしいでそう"],
            answer: 1
        },
        {
            question: "Which word means \"even though / although\"?",
            options: ["のに", "ので", "から", "と"],
            answer: 0
        },
        {
            question: "彼はピアノが＿。 (is good at piano)",
            options: ["上手です", "上手だ", "上手な", "上手さ"],
            answer: 0
        },
        {
            question: "「経験」(けいけん) means:",
            options: ["Experience", "Promise", "Opinion", "Mistake"],
            answer: 0
        },
        {
            question: "ここに座っ＿いいですか。 (may I sit here?)",
            options: ["ても", "たら", "ながら", "でも"],
            answer: 0
        }
    ],

    n3: [],
    n2: [],
    n1: []

};

if (typeof module !== "undefined" && module.exports) { module.exports = quizData; }
