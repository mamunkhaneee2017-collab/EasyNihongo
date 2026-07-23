/* ==========================================
   CHAPTERS PAGE (?level=n5&type=vocabulary)
   The chapter grid for one level+type. Chapter
   boundaries (startIndex/endIndex) come from
   flattenLevel() — the same normalizer the
   backend uses — so progress % here always
   matches what /api/progress/complete actually
   recorded.
========================================== */

(function () {

    const params = new URLSearchParams(window.location.search);
    const level = (params.get("level") || "n5").toLowerCase();
    const type = (params.get("type") || "vocabulary").toLowerCase();

    const TYPE_LABELS = { vocabulary: "Vocabulary", grammar: "Grammar", kanji: "Kanji" };
    const TYPE_DATA = {
        vocabulary: typeof vocabularyData !== "undefined" ? vocabularyData : null,
        grammar: typeof grammarData !== "undefined" ? grammarData : null,
        kanji: typeof kanjiData !== "undefined" ? kanjiData : null
    };

    const badge = document.getElementById("chaptersBadge");
    const title = document.getElementById("chaptersTitle");
    const label = TYPE_LABELS[type] || type;
    if (badge) badge.textContent = `${level.toUpperCase()} · ${label}`;
    if (title) title.textContent = `${label} Chapters`;
    document.title = `${label} Chapters | Easy Nihongo`;

    const grid = document.getElementById("chaptersGrid");
    if (!grid) return;

    const dataSource = TYPE_DATA[type];
    const flat = dataSource && dataSource[level] ? flattenLevel(dataSource[level]) : { chapters: [], items: [] };

    if (!flat.chapters.length) {
        grid.innerHTML = `<p class="no-results">No chapters here yet for ${level.toUpperCase()} ${label} — check back soon.</p>`;
        return;
    }

    function render(completedIndexes) {
        grid.innerHTML = flat.chapters.map((chapter, i) => {
            const completed = completedIndexes.filter((idx) => idx >= chapter.startIndex && idx <= chapter.endIndex).length;
            const percent = chapter.itemCount ? Math.round((completed / chapter.itemCount) * 100) : 0;

            return `
                <a href="chapter.html?level=${level}&type=${type}&chapter=${i + 1}" class="chapter-card">
                    <div class="chapter-card-number">${i + 1}</div>
                    <div class="chapter-card-body">
                        <h3>${chapter.title}</h3>
                        <p>${chapter.itemCount} items</p>
                        <div class="chapter-progress-bar">
                            <div class="chapter-progress-fill" style="width:${percent}%"></div>
                        </div>
                        <span class="chapter-progress-label">${completed}/${chapter.itemCount} learned</span>
                    </div>
                </a>`;
        }).join("");
    }

    render([]);

    fetch(`/api/progress/completed?contentType=${type}&level=${level}`, { credentials: "same-origin" })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
            if (data && Array.isArray(data.itemIndexes)) render(data.itemIndexes);
        })
        .catch(() => {});

})();
