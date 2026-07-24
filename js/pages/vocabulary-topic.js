/* ==========================================
   SINGLE TOPIC VOCABULARY PAGE (?topic=kitchen)
   Browse-only flat word list, no progress
   tracking (v1 scope) — but keeps the same
   EN/BN language toggle as chapter.js so the
   multi-language meanings are still useful here.
========================================== */

(function () {

    const params = new URLSearchParams(window.location.search);
    const topicId = params.get("topic") || "";

    const topic = (typeof vocabularyTopicsData !== "undefined" ? vocabularyTopicsData : []).find((t) => t.id === topicId);

    const badge = document.getElementById("topicBadge");
    const title = document.getElementById("topicTitle");
    const grid = document.getElementById("topicItemsGrid");

    if (!topic) {
        if (title) title.textContent = "Topic not found";
        if (grid) grid.innerHTML = `<p class="no-results">That topic doesn't exist.</p>`;
        return;
    }

    if (badge) badge.textContent = "Topic";
    if (title) title.textContent = topic.title;
    document.title = `${topic.title} Vocabulary | Easy Nihongo`;

    function escapeAttr(str) {
        return String(str || "").replace(/"/g, "&quot;");
    }

    // Side note pointing at the N5 chapter (and its conversation/story)
    // that reinforces this topic's words — curated per-topic via the
    // `chapterRef` field, not auto-detected. Silently omitted if the
    // topic has no chapterRef or vocabulary-data.js isn't loaded.
    const refNote = document.getElementById("topicChapterRef");
    if (refNote && topic.chapterRef && typeof vocabularyData !== "undefined") {
        const n5Chapters = (vocabularyData.n5 && vocabularyData.n5.chapters) || [];
        const chapterIndex = n5Chapters.findIndex((c) => c.id === topic.chapterRef);
        if (chapterIndex !== -1) {
            const refChapter = n5Chapters[chapterIndex];
            refNote.href = `chapter.html?level=n5&type=vocabulary&chapter=${chapterIndex + 1}`;
            refNote.innerHTML = `<i class="fa-solid fa-diagram-project"></i> এই শব্দগুলো Chapter ${chapterIndex + 1}: ${refChapter.title}-এর কথোপকথন ও গল্পেও ব্যবহৃত হয়েছে`;
            refNote.hidden = false;
        }
    }

    if (grid) {
        grid.innerHTML = topic.items
            .map(
                (item) => `
            <div class="lesson-item-card">
                <div class="lesson-item-main">
                    <span class="lesson-word">${item.word}</span>
                    ${item.reading ? `<span class="lesson-reading">${item.reading}</span>` : ""}
                </div>
                <p class="meaning" data-i18n-en="${escapeAttr(item.meanings.en)}" data-i18n-bn="${escapeAttr(item.meanings.bn)}">${item.meanings.en}</p>
            </div>`
            )
            .join("");
    }

    const langToggleBtn = document.getElementById("langToggleBtn");
    const langToggleLabel = document.getElementById("langToggleLabel");
    const LABELS = { en: "EN", bn: "বাং" };

    function applyLang(lang) {
        if (langToggleLabel) langToggleLabel.textContent = LABELS[lang] || "EN";
        document.querySelectorAll(".meaning[data-i18n-en]").forEach((el) => {
            el.textContent = lang === "bn" ? el.dataset.i18nBn : el.dataset.i18nEn;
        });
    }

    // Own storage key ("contentLang"), separate from the site-wide "lang"
    // key the navbar switcher uses — this toggle only swaps this page's
    // word-meaning content between EN/BN, independent of UI language.
    let currentLang = localStorage.getItem("contentLang") || "en";
    applyLang(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            currentLang = currentLang === "bn" ? "en" : "bn";
            localStorage.setItem("contentLang", currentLang);
            applyLang(currentLang);
        });
    }

})();
