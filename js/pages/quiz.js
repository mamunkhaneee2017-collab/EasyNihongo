/* ==========================================
            QUIZ PAGE
   Dark mode, mobile menu, language switcher,
   scroll reveal, ripple, counters, back-to-top
   -> js/utils.js
   This file handles the quiz flow itself.
========================================== */



// ==========================================
// QUESTION DATA
// quizData comes from data/quiz-data.js
// (loaded as a <script> tag before this file).
// ==========================================


// ==========================================
// STATE
// ==========================================

let currentLevel = null;
let currentQuestions = [];
let currentIndex = 0;
let correctAnswers = 0;
let hasAnswered = false;


// ==========================================
// DOM REFERENCES
// ==========================================

const levelSelect = document.getElementById("levelSelect");
const quizInterface = document.getElementById("quizInterface");
const quizResults = document.getElementById("quizResults");

const quizLevelBadge = document.getElementById("quizLevelBadge");
const quizProgressText = document.getElementById("quizProgressText");
const quizBarFill = document.getElementById("quizBarFill");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const quitQuizBtn = document.getElementById("quitQuizBtn");

const scoreRing = document.getElementById("scoreRing");
const scoreNumber = document.getElementById("scoreNumber");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const correctCountEl = document.getElementById("correctCount");
const incorrectCountEl = document.getElementById("incorrectCount");
const retryTestBtn = document.getElementById("retryTestBtn");
const backToLevelsBtn = document.getElementById("backToLevelsBtn");


// ==========================================
// START TEST
// ==========================================

document.querySelectorAll(".start-test-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const level = btn.dataset.level;
        startTest(level);

    });

});

function startTest(level){

    currentLevel = level;
    currentQuestions = quizData[level] || [];
    currentIndex = 0;
    correctAnswers = 0;

    if(!currentQuestions.length) return;

    levelSelect.hidden = true;
    quizResults.hidden = true;
    quizInterface.hidden = false;

    quizLevelBadge.textContent = level.toUpperCase();

    renderQuestion();

    quizInterface.scrollIntoView({ behavior:"smooth", block:"start" });

}


// ==========================================
// RENDER QUESTION
// ==========================================

function renderQuestion(){

    hasAnswered = false;
    nextQuestionBtn.disabled = true;

    const total = currentQuestions.length;
    const q = currentQuestions[currentIndex];

    quizProgressText.textContent = `Question ${currentIndex + 1} of ${total}`;
    quizBarFill.style.width = `${((currentIndex) / total) * 100}%`;

    quizQuestion.textContent = q.question;

    quizOptions.innerHTML = "";

    q.options.forEach((optionText, i) => {

        const btn = document.createElement("button");
        btn.className = "quiz-option";
        btn.type = "button";
        btn.textContent = optionText;

        btn.addEventListener("click", () => selectOption(i, btn));

        quizOptions.appendChild(btn);

    });

    nextQuestionBtn.innerHTML = (currentIndex === total - 1)
        ? `Finish Test <i class="fa-solid fa-flag-checkered"></i>`
        : `Next Question <i class="fa-solid fa-arrow-right"></i>`;

}


// ==========================================
// SELECT OPTION
// ==========================================

function selectOption(selectedIndex, selectedBtn){

    if(hasAnswered) return;

    hasAnswered = true;

    const q = currentQuestions[currentIndex];
    const optionButtons = quizOptions.querySelectorAll(".quiz-option");

    optionButtons.forEach(btn => btn.disabled = true);

    if(selectedIndex === q.answer){

        selectedBtn.classList.add("correct");
        correctAnswers++;

    }
    else{

        selectedBtn.classList.add("incorrect");
        optionButtons[q.answer].classList.add("correct");

    }

    nextQuestionBtn.disabled = false;

}


// ==========================================
// NEXT / FINISH
// ==========================================

nextQuestionBtn.addEventListener("click", () => {

    if(!hasAnswered) return;

    const total = currentQuestions.length;

    if(currentIndex < total - 1){

        currentIndex++;
        renderQuestion();

    }
    else{

        quizBarFill.style.width = "100%";
        finishQuiz();

    }

});


// ==========================================
// FINISH -> RESULTS
// ==========================================

function finishQuiz(){

    const total = currentQuestions.length;
    const incorrect = total - correctAnswers;
    const percent = Math.round((correctAnswers / total) * 100);
    const passed = percent >= 60;

    quizInterface.hidden = true;
    quizResults.hidden = false;

    scoreRing.style.setProperty("--score", percent);
    scoreNumber.textContent = `${percent}%`;

    resultTitle.textContent = passed ? "Well done! 🎉" : "Keep practicing 💪";
    resultMessage.textContent = `You answered ${correctAnswers} out of ${total} questions correctly.`;

    correctCountEl.textContent = correctAnswers;
    incorrectCountEl.textContent = incorrect;

    quizResults.scrollIntoView({ behavior:"smooth", block:"start" });

}


// ==========================================
// QUIT / RETRY / BACK
// ==========================================

quitQuizBtn.addEventListener("click", () => {

    quizInterface.hidden = true;
    levelSelect.hidden = false;
    levelSelect.scrollIntoView({ behavior:"smooth", block:"start" });

});

retryTestBtn.addEventListener("click", () => {

    quizResults.hidden = true;
    startTest(currentLevel);

});

backToLevelsBtn.addEventListener("click", () => {

    quizResults.hidden = true;
    levelSelect.hidden = false;
    levelSelect.scrollIntoView({ behavior:"smooth", block:"start" });

});
