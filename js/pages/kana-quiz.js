/* ==========================================
   HIRAGANA / KATAKANA QUIZ (?type=hiragana|katakana)
   One "module" = one gojuon row (data/kana-rows.js),
   plus a cumulative "Final Review". Questions are
   generated on the fly (character->romaji, romaji->
   character, listen->character) — no hand-authored
   quiz content needed. Flow/DOM mirrors js/pages/
   quiz.js (level select -> quiz interface -> results),
   reusing the same CSS (css/pages/quiz.css).
========================================== */

(function () {

    const DATA = {
        hiragana: typeof hiraganaData !== "undefined" ? hiraganaData : [],
        katakana: typeof katakanaData !== "undefined" ? katakanaData : []
    };
    const ROWS = typeof kanaRows !== "undefined" ? kanaRows : [];

    const params = new URLSearchParams(window.location.search);
    let currentType = params.get("type") === "katakana" ? "katakana" : "hiragana";
    let currentModule = null;
    let currentQuestions = [];
    let currentIndex = 0;
    let correctAnswers = 0;
    let hasAnswered = false;

    const typeToggle = document.getElementById("kanaTypeToggle");
    const gridTitle = document.getElementById("kanaQuizGridTitle");
    const grid = document.getElementById("kanaLevelGrid");
    const levelSelect = document.getElementById("levelSelect");
    const quizInterface = document.getElementById("quizInterface");
    const quizResults = document.getElementById("quizResults");
    const quizLevelBadge = document.getElementById("quizLevelBadge");
    const quizProgressText = document.getElementById("quizProgressText");
    const quizBarFill = document.getElementById("quizBarFill");
    const quizQuestion = document.getElementById("quizQuestion");
    const quizOptions = document.getElementById("quizOptions");
    const replayBtn = document.getElementById("kanaQuizReplayBtn");
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
    const quizSaveStatus = document.getElementById("quizSaveStatus");

    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function rowLabelFor(row) {
        const parts = row.label.split(" / ");
        return currentType === "hiragana" ? parts[0] : (parts[1] || parts[0]);
    }

    /* ---------------- MODULE GRID ---------------- */

    function renderGrid() {
        if (!grid) return;
        const list = DATA[currentType];
        if (gridTitle) gridTitle.textContent = currentType === "hiragana" ? "Hiragana Rows" : "Katakana Rows";

        const rowCardsHtml = ROWS.map((row) => {
            const chars = list.slice(row.startIndex, row.endIndex + 1).map((c) => c.character).join(" ");
            const count = row.endIndex - row.startIndex + 1;
            return `
                <div class="level-card kana-module-card reveal">
                    <div class="level-top">
                        <h2>${rowLabelFor(row)}</h2>
                        <span class="badge badge-kana">${count} chars</span>
                    </div>
                    <p class="kana-module-preview">${chars}</p>
                    <div class="level-info">
                        <span><i class="fa-solid fa-list-check"></i> ${count} Questions</span>
                        <span><i class="fa-regular fa-clock"></i> ~2 Min</span>
                    </div>
                    <button class="start-test-btn" data-row="${row.id}" type="button" data-i18n="kanaQuiz.startQuiz">Start Quiz</button>
                </div>`;
        }).join("");

        const finalCardHtml = `
            <div class="level-card kana-module-card kana-final-card reveal">
                <div class="level-top">
                    <h2><i class="fa-solid fa-trophy"></i> <span data-i18n="kanaQuiz.finalReview">Final Review</span></h2>
                    <span class="badge badge-kana-final">${list.length} chars</span>
                </div>
                <p class="kana-module-preview" data-i18n="kanaQuiz.finalReviewDesc">Cumulative review across every character you've learned.</p>
                <div class="level-info">
                    <span><i class="fa-solid fa-list-check"></i> ${Math.min(20, list.length)} Questions</span>
                    <span><i class="fa-regular fa-clock"></i> ~8 Min</span>
                </div>
                <button class="start-test-btn" data-row="final" type="button" data-i18n="kanaQuiz.startQuiz">Start Quiz</button>
            </div>`;

        grid.innerHTML = rowCardsHtml + finalCardHtml;

        grid.querySelectorAll(".start-test-btn").forEach((btn) => {
            btn.addEventListener("click", () => startQuiz(btn.dataset.row));
        });
    }

    if (typeToggle) {
        typeToggle.querySelectorAll(".kana-type-btn").forEach((btn) => {
            if (btn.dataset.type === currentType) {
                typeToggle.querySelector(".kana-type-btn.active")?.classList.remove("active");
                btn.classList.add("active");
            }
            btn.addEventListener("click", () => {
                const active = typeToggle.querySelector(".kana-type-btn.active");
                if (active) active.classList.remove("active");
                btn.classList.add("active");
                currentType = btn.dataset.type;
                renderGrid();
            });
        });
    }

    renderGrid();

    /* ---------------- QUESTION GENERATION ---------------- */

    // Distractors prefer the same gojuon row first (visually/phonetically
    // closer, harder questions) and only fall back to the full character
    // set when the row is too small (や/わ rows have 3 members).
    function buildDistractors(correctItem, preferredPool, fallbackPool, key, count) {
        const preferred = shuffle(preferredPool.filter((c) => c.character !== correctItem.character))
            .slice(0, count)
            .map((c) => c[key]);

        if (preferred.length >= count) return preferred;

        const usedValues = new Set([correctItem[key], ...preferred]);
        const fallback = shuffle(fallbackPool.filter((c) => c.character !== correctItem.character && !usedValues.has(c[key])));
        return preferred.concat(fallback.slice(0, count - preferred.length).map((c) => c[key]));
    }

    function generateQuestions(rowId) {
        const list = DATA[currentType];
        let items;
        let preferredPool;

        if (rowId === "final") {
            items = shuffle(list).slice(0, Math.min(20, list.length));
            preferredPool = list;
        } else {
            const row = ROWS.find((r) => r.id === rowId);
            items = list.slice(row.startIndex, row.endIndex + 1);
            preferredPool = items;
        }

        const QUESTION_TYPES = ["char-to-romaji", "romaji-to-char", "audio-to-char"];

        return shuffle(
            items.map((item) => {
                const qType = QUESTION_TYPES[Math.floor(Math.random() * QUESTION_TYPES.length)];

                if (qType === "char-to-romaji") {
                    const distractors = buildDistractors(item, preferredPool, list, "romaji", 3);
                    const options = shuffle([item.romaji, ...distractors]);
                    return { text: `What is the romaji for "${item.character}"?`, options, answer: options.indexOf(item.romaji), speak: null };
                }
                if (qType === "romaji-to-char") {
                    const distractors = buildDistractors(item, preferredPool, list, "character", 3);
                    const options = shuffle([item.character, ...distractors]);
                    return { text: `Which character is "${item.romaji}"?`, options, answer: options.indexOf(item.character), speak: null };
                }
                const distractors = buildDistractors(item, preferredPool, list, "character", 3);
                const options = shuffle([item.character, ...distractors]);
                return { text: "Listen and choose the correct character.", options, answer: options.indexOf(item.character), speak: item.character };
            })
        );
    }

    /* ---------------- QUIZ FLOW ---------------- */

    function startQuiz(rowId) {
        currentModule = rowId;
        currentQuestions = generateQuestions(rowId);
        currentIndex = 0;
        correctAnswers = 0;

        if (!currentQuestions.length) return;

        levelSelect.hidden = true;
        quizResults.hidden = true;
        quizInterface.hidden = false;

        const row = ROWS.find((r) => r.id === rowId);
        quizLevelBadge.textContent = row ? rowLabelFor(row) : "Final Review";

        renderQuestion();
        quizInterface.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderQuestion() {
        hasAnswered = false;
        nextQuestionBtn.disabled = true;

        const total = currentQuestions.length;
        const q = currentQuestions[currentIndex];

        quizProgressText.textContent = `Question ${currentIndex + 1} of ${total}`;
        quizBarFill.style.width = `${(currentIndex / total) * 100}%`;
        quizQuestion.textContent = q.text;

        if (q.speak) {
            if (replayBtn) replayBtn.hidden = false;
            if (window.EasyNihongoSpeech && window.EasyNihongoSpeech.isSupported()) {
                window.EasyNihongoSpeech.speak(q.speak);
            }
        } else if (replayBtn) {
            replayBtn.hidden = true;
        }

        quizOptions.innerHTML = "";
        q.options.forEach((optionText, i) => {
            const btn = document.createElement("button");
            btn.className = "quiz-option";
            btn.type = "button";
            btn.textContent = optionText;
            btn.addEventListener("click", () => selectOption(i, btn));
            quizOptions.appendChild(btn);
        });

        nextQuestionBtn.innerHTML = currentIndex === total - 1
            ? `Finish Quiz <i class="fa-solid fa-flag-checkered"></i>`
            : `Next Question <i class="fa-solid fa-arrow-right"></i>`;
    }

    if (replayBtn) {
        replayBtn.addEventListener("click", () => {
            const q = currentQuestions[currentIndex];
            if (q && q.speak && window.EasyNihongoSpeech) window.EasyNihongoSpeech.speak(q.speak);
        });
    }

    function selectOption(selectedIndex, selectedBtn) {
        if (hasAnswered) return;
        hasAnswered = true;

        const q = currentQuestions[currentIndex];
        const optionButtons = quizOptions.querySelectorAll(".quiz-option");
        optionButtons.forEach((btn) => { btn.disabled = true; });

        if (selectedIndex === q.answer) {
            selectedBtn.classList.add("correct");
            correctAnswers++;
        } else {
            selectedBtn.classList.add("incorrect");
            optionButtons[q.answer].classList.add("correct");
        }

        nextQuestionBtn.disabled = false;
    }

    nextQuestionBtn.addEventListener("click", () => {
        if (!hasAnswered) return;
        const total = currentQuestions.length;
        if (currentIndex < total - 1) {
            currentIndex++;
            renderQuestion();
        } else {
            quizBarFill.style.width = "100%";
            finishQuiz();
        }
    });

    function finishQuiz() {
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

        quizResults.scrollIntoView({ behavior: "smooth", block: "start" });

        saveQuizAttempt(`kana:${currentType}:${currentModule}`, correctAnswers, total);
    }

    function saveQuizAttempt(level, correct, total) {
        if (quizSaveStatus) {
            quizSaveStatus.textContent = "";
            quizSaveStatus.className = "quiz-save-status";
        }
        fetch("/api/quiz/attempts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin",
            body: JSON.stringify({ level, correct, total })
        })
            .then(async (res) => {
                if (!res.ok) throw new Error("not logged in");
                if (quizSaveStatus) quizSaveStatus.textContent = "✓ Saved to your dashboard.";
            })
            .catch(() => {
                if (quizSaveStatus) {
                    quizSaveStatus.textContent = "Log in to save this result to your dashboard.";
                    quizSaveStatus.className = "quiz-save-status error";
                }
            });
    }

    quitQuizBtn.addEventListener("click", () => {
        quizInterface.hidden = true;
        levelSelect.hidden = false;
        levelSelect.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    retryTestBtn.addEventListener("click", () => {
        quizResults.hidden = true;
        startQuiz(currentModule);
    });

    backToLevelsBtn.addEventListener("click", () => {
        quizResults.hidden = true;
        levelSelect.hidden = false;
        levelSelect.scrollIntoView({ behavior: "smooth", block: "start" });
    });

})();
