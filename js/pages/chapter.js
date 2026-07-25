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

    // Furigana convention: "reading" fields hold HIRAGANA, not romaji.
    // Words/patterns/examples that are already pure kana (hiragana or
    // katakana) carry no `reading` at all — a furigana gloss over kana
    // is redundant, exactly as real textbooks never gloss kana with
    // kana. Renderers below only print a reading span when one exists.

    function readingSpan(reading, className) {
        return reading ? `<span class="${className}">${reading}</span>` : "";
    }

    function renderVocabularyItem(item) {
        return `
            <div class="lesson-item-main">
                <span class="lesson-word">${item.word}</span>
                ${readingSpan(item.reading, "lesson-reading")}
            </div>
            <p class="meaning" data-i18n-en="${escapeAttr(item.meanings.en)}" data-i18n-bn="${escapeAttr(item.meanings.bn)}">${item.meanings.en}</p>
            ${item.example ? `
            <div class="lesson-example">
                <div class="lesson-example-text">
                    <p class="example-jp">${item.example.jp}</p>
                    ${item.example.reading ? `<p class="example-reading">${item.example.reading}</p>` : ""}
                    <p class="example-translation" data-i18n-en="${escapeAttr(item.example.meanings.en)}" data-i18n-bn="${escapeAttr(item.example.meanings.bn)}">${item.example.meanings.en}</p>
                </div>
                <button class="audio-btn" data-speak="${escapeAttr(item.example.jp)}" title="Listen"><i class="fa-solid fa-volume-high"></i></button>
            </div>` : ""}`;
    }

    function renderGrammarItem(item) {
        const connectionHtml = (item.connection || []).length
            ? `
            <div class="grammar-connection">
                <span class="section-label">接続 &middot; Connection</span>
                <ul>${item.connection.map((rule) => `<li>${rule}</li>`).join("")}</ul>
            </div>` : "";

        const examplesHtml = (item.examples || []).map((ex) => `
            <div class="lesson-example">
                <div class="lesson-example-text">
                    <p class="example-jp">${ex.jp}</p>
                    ${ex.reading ? `<p class="example-reading">${ex.reading}</p>` : ""}
                    <p class="example-translation">${ex.en}</p>
                </div>
                <button class="audio-btn" data-speak="${escapeAttr(ex.jp)}" title="Listen"><i class="fa-solid fa-volume-high"></i></button>
            </div>`).join("");

        return `
            <div class="lesson-item-main">
                <span class="lesson-word">${item.pattern}</span>
                ${readingSpan(item.reading, "lesson-reading")}
            </div>
            <p class="meaning" data-i18n-en="${escapeAttr(item.meanings.en)}" data-i18n-bn="${escapeAttr(item.meanings.bn)}">${item.meanings.en}</p>
            ${connectionHtml}
            ${examplesHtml}`;
    }

    function renderKanjiItem(item) {
        const examplesHtml = (item.examples || [])
            .map((ex) => `<li><span class="kanji-example-word">${ex.word}</span> ${ex.reading ? `<span class="kanji-example-reading">(${ex.reading})</span>` : ""} — <span class="kanji-example-meaning" data-i18n-en="${escapeAttr(ex.meanings.en)}" data-i18n-bn="${escapeAttr(ex.meanings.bn)}">${ex.meanings.en}</span></li>`)
            .join("");

        const sentence = item.exampleSentence;
        const sentenceHtml = sentence ? `
            <div class="lesson-example">
                <div class="lesson-example-text">
                    <p class="example-jp">${sentence.jp}</p>
                    ${sentence.reading ? `<p class="example-reading">${sentence.reading}</p>` : ""}
                    <p class="example-translation" data-i18n-en="${escapeAttr(sentence.meanings.en)}" data-i18n-bn="${escapeAttr(sentence.meanings.bn)}">${sentence.meanings.en}</p>
                </div>
                <button class="audio-btn" data-speak="${escapeAttr(sentence.jp)}" title="Listen"><i class="fa-solid fa-volume-high"></i></button>
            </div>` : "";

        return `
            <div class="lesson-item-main">
                <span class="lesson-word kanji-char-lg">${item.char}</span>
            </div>
            <div class="kanji-readings"><strong>On:</strong> ${item.on} &nbsp;&nbsp; <strong>Kun:</strong> ${item.kun}</div>
            <p class="meaning" data-i18n-en="${escapeAttr(item.meanings.en)}" data-i18n-bn="${escapeAttr(item.meanings.bn)}">${item.meanings.en}</p>
            <p class="kanji-stroke-count">${item.strokes} strokes</p>
            ${examplesHtml ? `<ul class="kanji-examples">${examplesHtml}</ul>` : ""}
            ${sentenceHtml}`;
    }

    const RENDERERS = { vocabulary: renderVocabularyItem, grammar: renderGrammarItem, kanji: renderKanjiItem };

    // What each card's bottom-right audio button speaks (Web Speech API,
    // js/speech.js). Every example sentence now has its own audio button
    // too (added directly to each .lesson-example), so this card-level
    // button deliberately speaks something DIFFERENT from those — the
    // word/character/pattern itself in isolation, not a duplicate of
    // example #1. Grammar patterns contain 〜 placeholders that read
    // oddly aloud, so those are stripped before speaking.
    function speakTextFor(item) {
        if (type === "vocabulary") return item.word;
        if (type === "kanji") return item.char;
        if (type === "grammar") return item.pattern.replace(/〜/g, "");
        return "";
    }

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
                        <button class="favorite-btn" data-index="${globalIndex}" title="Favorite">
                            <i class="fa-regular fa-star"></i>
                        </button>
                        ${renderItem(item)}
                        <div class="card-actions">
                            <button class="learned-btn" data-index="${globalIndex}">
                                <i class="fa-regular fa-circle-check"></i> Mark as Learned
                            </button>
                            <button class="audio-btn" data-speak="${escapeAttr(speakTextFor(item))}" title="Listen">
                                <i class="fa-solid fa-volume-high"></i>
                            </button>
                        </div>
                    </div>`;
            })
            .join("");
    }

    /* ---------------- AUDIO (Web Speech API) ---------------- */

    const speechSupported = window.EasyNihongoSpeech && window.EasyNihongoSpeech.isSupported();
    document.querySelectorAll(".audio-btn").forEach((button) => {
        if (!speechSupported) {
            button.disabled = true;
            button.title = "Audio not supported in this browser";
            return;
        }
        button.addEventListener("click", () => {
            window.EasyNihongoSpeech.speak(button.dataset.speak);
        });
    });

    /* ---------------- FAVORITE (STAR) ---------------- */

    document.querySelectorAll(".favorite-btn").forEach((button) => {
        button.addEventListener("click", () => {
            fetch("/api/progress/favorite", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify({ contentType: type, level, itemIndex: button.dataset.index })
            })
                .then(async (res) => {
                    if (!res.ok) throw new Error("not logged in");
                    const data = await res.json();
                    button.classList.toggle("active", data.favorited);
                })
                .catch(() => {
                    alert(`Log in to save your favorite ${label.toLowerCase()}.`);
                });
        });
    });

    fetch(`/api/progress/favorites?contentType=${type}&level=${level}`, { credentials: "same-origin" })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
            if (!data) return;
            data.itemIndexes.forEach((index) => {
                const button = document.querySelector(`.favorite-btn[data-index="${index}"]`);
                if (button) button.classList.add("active");
            });
        })
        .catch(() => {});

    /* ---------------- CONVERSATION & SHORT STORIES ---------------- */

    // Shown on both the vocabulary and grammar page for a chapter (not
    // kanji) — same underlying data, looked up by the stable chapter
    // `id` slug (shared across vocabulary-data.js, grammar-data.js,
    // conversations-data.js and stories-data.js) rather than position,
    // so it keeps working if chapters are ever reordered.
    function renderConversationAndStories() {
        const section = document.getElementById("conversationStorySection");
        if (!section || (type !== "vocabulary" && type !== "grammar")) return;

        const convChapter = (typeof conversationsData !== "undefined" && conversationsData[level])
            ? conversationsData[level].chapters.find((c) => c.id === chapter.id) : null;
        const storyChapter = (typeof storiesData !== "undefined" && storiesData[level])
            ? storiesData[level].chapters.find((c) => c.id === chapter.id) : null;

        if (!convChapter && !storyChapter) return;

        const conversationHtml = convChapter ? `
            <div class="conversation-block">
                <h3 class="conversation-title">${convChapter.conversation.title}</h3>
                <div class="conversation-lines">
                    ${convChapter.conversation.lines.map((line) => `
                        <div class="conversation-line">
                            <span class="conversation-speaker">${line.speaker}</span>
                            <p class="conversation-jp">${line.jp}</p>
                            ${line.reading ? `<p class="conversation-reading">${line.reading}</p>` : ""}
                            <p class="conversation-translation" data-i18n-en="${escapeAttr(line.en)}" data-i18n-bn="${escapeAttr(line.bn)}">${line.en}</p>
                        </div>`).join("")}
                </div>
            </div>` : "";

        const storiesHtml = storyChapter ? storyChapter.stories.map((story) => `
            <div class="story-block">
                <h3 class="story-title">${story.title}</h3>
                ${story.paragraphs.map((p) => `
                    <div class="story-paragraph">
                        <p class="story-jp">${p.jp}</p>
                        ${p.reading ? `<p class="story-reading">${p.reading}</p>` : ""}
                        <p class="story-translation" data-i18n-en="${escapeAttr(p.en)}" data-i18n-bn="${escapeAttr(p.bn)}">${p.en}</p>
                    </div>`).join("")}
            </div>`).join("") : "";

        section.innerHTML = `
            <h2 class="section-title">Conversation &amp; Short Stories</h2>
            ${conversationHtml}
            ${storiesHtml}`;
        section.hidden = false;
    }

    renderConversationAndStories();

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

    // Vocabulary, grammar, and kanji all carry bilingual meaning fields
    // now — the toggle is always available regardless of content type.
    const hasToggleableContent = type === "vocabulary" || type === "grammar" || type === "kanji";

    if (hasToggleableContent && langToggleBtn) {
        langToggleBtn.hidden = false;

        const LABELS = { en: "EN", bn: "বাং" };
        const TOGGLE_SELECTOR = ".meaning[data-i18n-en], .example-translation[data-i18n-en], .conversation-translation[data-i18n-en], .story-translation[data-i18n-en], .kanji-example-meaning[data-i18n-en]";

        // Deliberately its own storage key, not the site-wide "lang" key —
        // this toggle only swaps this page's EN/BN *content* (word
        // meanings, example/conversation/story translations), independent
        // of which UI language (en/bn/ja) the navbar switcher has picked.
        function applyLang(lang) {
            if (langToggleLabel) langToggleLabel.textContent = LABELS[lang] || "EN";
            document.querySelectorAll(TOGGLE_SELECTOR).forEach((el) => {
                el.textContent = lang === "bn" ? el.dataset.i18nBn : el.dataset.i18nEn;
            });
        }

        let currentLang = localStorage.getItem("contentLang") || "en";
        applyLang(currentLang);

        langToggleBtn.addEventListener("click", () => {
            currentLang = currentLang === "bn" ? "en" : "bn";
            localStorage.setItem("contentLang", currentLang);
            applyLang(currentLang);
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
