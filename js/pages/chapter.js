/* ==========================================
   CHAPTER (LESSON) PAGE
   ?level=n5&type=vocabulary&chapter=1

   One consolidated page for all three content
   types instead of three near-duplicates — a
   type -> renderer map handles the per-type
   card markup, while progress-bar / mark-as-
   learned / locked-state / prev-next-chapter
   chrome is written once and shared.
========================================== */

(function () {

    const params = new URLSearchParams(window.location.search);
    const level = (params.get("level") || "n5").toLowerCase();
    const type = (params.get("type") || "vocabulary").toLowerCase();
    const chapterNum = parseInt(params.get("chapter"), 10) || 1;

    const TYPE_LABELS = { vocabulary: "Vocabulary", grammar: "Grammar", kanji: "Kanji" };
    const TYPE_DATA = {
        vocabulary: typeof vocabularyData !== "undefined" ? vocabularyData : null,
        grammar: typeof grammarData !== "undefined" ? grammarData : null,
        kanji: typeof kanjiData !== "undefined" ? kanjiData : null
    };

    const label = TYPE_LABELS[type] || type;
    const dataSource = TYPE_DATA[type];
    const flat = dataSource && dataSource[level] ? flattenLevel(dataSource[level]) : { chapters: [], items: [] };
    const chapter = flat.chapters[chapterNum - 1];

    const badge = document.getElementById("chapterBadge");
    const title = document.getElementById("chapterTitle");
    const grid = document.getElementById("lessonItemsGrid");
    const backLink = document.getElementById("backToChaptersLink");

    if (badge) badge.textContent = `${level.toUpperCase()} · ${label}`;
    if (backLink) backLink.href = `chapters.html?level=${level}&type=${type}`;

    if (!chapter) {
        if (title) title.textContent = "Chapter not found";
        if (grid) grid.innerHTML = `<p class="no-results">This chapter doesn't exist yet — check back soon.</p>`;
        document.getElementById("prevChapterBtn")?.setAttribute("hidden", "");
        document.getElementById("nextChapterBtn")?.setAttribute("hidden", "");
        return;
    }

    if (title) title.textContent = chapter.title;
    document.title = `${chapter.title} | Easy Nihongo`;

    /* ---------------- RENDERERS ---------------- */

    function renderVocabularyItem(item) {
        return `
            <div class="lesson-item-main">
                <span class="lesson-word">${item.word}</span>
                <span class="lesson-reading">${item.reading}</span>
            </div>
            <p class="meaning" data-i18n-en="${escapeAttr(item.meanings.en)}" data-i18n-bn="${escapeAttr(item.meanings.bn)}">${item.meanings.en}</p>
            ${item.example ? `
            <div class="lesson-example">
                <p class="example-jp">${item.example.jp}</p>
                <p class="example-reading">${item.example.reading}</p>
                <p class="example-translation" data-i18n-en="${escapeAttr(item.example.meanings.en)}" data-i18n-bn="${escapeAttr(item.example.meanings.bn)}">${item.example.meanings.en}</p>
            </div>` : ""}`;
    }

    function renderGrammarItem(item) {
        return `
            <div class="lesson-item-main">
                <span class="lesson-word">${item.pattern}</span>
                <span class="lesson-reading">${item.reading}</span>
            </div>
            <p class="meaning">${item.meaning}</p>
            <div class="lesson-example">
                <p class="example-jp">${item.jp}</p>
                <p class="example-translation">${item.en}</p>
            </div>`;
    }

    function renderKanjiItem(item) {
        const examplesHtml = (item.examples || [])
            .map((ex) => `<li><span class="kanji-example-word">${ex.word}</span> <span class="kanji-example-reading">(${ex.reading})</span> — ${ex.meaning}</li>`)
            .join("");

        return `
            <div class="lesson-item-main">
                <span class="lesson-word kanji-char-lg">${item.char}</span>
            </div>
            <div class="kanji-readings"><strong>On:</strong> ${item.on} &nbsp;&nbsp; <strong>Kun:</strong> ${item.kun}</div>
            <p class="meaning">${item.meaning} &middot; ${item.strokes} strokes</p>
            ${examplesHtml ? `<ul class="kanji-examples">${examplesHtml}</ul>` : ""}`;
    }

    const RENDERERS = { vocabulary: renderVocabularyItem, grammar: renderGrammarItem, kanji: renderKanjiItem };

    function escapeAttr(str) {
        return String(str || "").replace(/"/g, "&quot;");
    }

    /* ---------------- RENDER CARDS ---------------- */

    const renderItem = RENDERERS[type] || (() => "");

    if (grid) {
        grid.innerHTML = flat.items
            .slice(chapter.startIndex, chapter.endIndex + 1)
            .map((item, i) => {
                const globalIndex = chapter.startIndex + i;
                return `
                    <div class="lesson-item-card">
                        ${renderItem(item)}
                        <button class="learned-btn" data-index="${globalIndex}">
                            <i class="fa-regular fa-circle-check"></i> Mark as Learned
                        </button>
                    </div>`;
            })
            .join("");
    }

    /* ---------------- MARK AS LEARNED ---------------- */

    function setLearnedButtonState(button, learned) {
        button.classList.toggle("active", learned);
        button.innerHTML = learned
            ? '<i class="fa-solid fa-circle-check"></i> Learned'
            : '<i class="fa-regular fa-circle-check"></i> Mark as Learned';
    }

    document.querySelectorAll(".learned-btn").forEach((button) => {
        button.addEventListener("click", () => {
            fetch("/api/progress/complete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify({ contentType: type, level, itemIndex: button.dataset.index })
            })
                .then(async (res) => {
                    if (!res.ok) throw new Error("not logged in");
                    const data = await res.json();
                    setLearnedButtonState(button, data.completed);
                })
                .catch(() => {
                    alert(`Log in to save your learned ${label.toLowerCase()}.`);
                });
        });
    });

    fetch(`/api/progress/completed?contentType=${type}&level=${level}`, { credentials: "same-origin" })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
            if (!data) return;
            data.itemIndexes.forEach((index) => {
                const button = document.querySelector(`.learned-btn[data-index="${index}"]`);
                if (button) setLearnedButtonState(button, true);
            });
        })
        .catch(() => {});

    /* ---------------- LANGUAGE TOGGLE (vocabulary only) ---------------- */

    const langToggleBtn = document.getElementById("langToggleBtn");
    const langToggleLabel = document.getElementById("langToggleLabel");

    if (type === "vocabulary" && langToggleBtn) {
        langToggleBtn.hidden = false;

        const LABELS = { en: "EN", bn: "বাং" };

        function applyLang(lang) {
            if (langToggleLabel) langToggleLabel.textContent = LABELS[lang] || "EN";
            document.querySelectorAll(".meaning[data-i18n-en], .example-translation[data-i18n-en]").forEach((el) => {
                el.textContent = lang === "bn" ? el.dataset.i18nBn : el.dataset.i18nEn;
            });
        }

        let currentLang = localStorage.getItem("lang") || "en";
        applyLang(currentLang);

        langToggleBtn.addEventListener("click", () => {
            currentLang = currentLang === "bn" ? "en" : "bn";
            localStorage.setItem("lang", currentLang);
            applyLang(currentLang);
            if (window.EasyNihongoI18n) window.EasyNihongoI18n.setLanguage(currentLang);
            const navLangLabel = document.getElementById("langLabel");
            if (navLangLabel) navLangLabel.textContent = LABELS[currentLang] || "EN";
        });
    }

    /* ---------------- PREV / NEXT CHAPTER ---------------- */

    const prevBtn = document.getElementById("prevChapterBtn");
    const nextBtn = document.getElementById("nextChapterBtn");

    if (prevBtn) {
        if (chapterNum > 1) {
            prevBtn.href = `chapter.html?level=${level}&type=${type}&chapter=${chapterNum - 1}`;
        } else {
            prevBtn.classList.add("disabled");
            prevBtn.setAttribute("aria-disabled", "true");
            prevBtn.addEventListener("click", (e) => e.preventDefault());
        }
    }

    if (nextBtn) {
        if (chapterNum < flat.chapters.length) {
            nextBtn.href = `chapter.html?level=${level}&type=${type}&chapter=${chapterNum + 1}`;
        } else {
            nextBtn.classList.add("disabled");
            nextBtn.setAttribute("aria-disabled", "true");
            nextBtn.addEventListener("click", (e) => e.preventDefault());
        }
    }

})();
