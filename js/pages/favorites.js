/* ==========================================
   MY FAVORITES PAGE
   One list across every content type (server
   aggregate: GET /api/progress/favorites/all),
   with client-side search, type filter, remove,
   and a Quick Review Mode overlay (flip-card,
   cycles through whatever's currently filtered).
========================================== */

(function () {

    const grid = document.getElementById("favoritesGrid");
    const countEl = document.getElementById("favoritesCount");
    const searchInput = document.getElementById("favoritesSearchInput");
    const filterGroup = document.getElementById("favoritesFilterGroup");

    let allFavorites = [];
    let currentFilter = "all";
    let currentSearch = "";

    const TYPE_LABELS = {
        hiragana: "Hiragana",
        katakana: "Katakana",
        kanji: "Kanji",
        vocabulary: "Vocabulary",
        "vocabulary-topic": "Vocabulary (Topic)",
        grammar: "Grammar"
    };
    const TYPE_ICON = {
        hiragana: "fa-a",
        katakana: "fa-a",
        kanji: "fa-torii-gate",
        vocabulary: "fa-language",
        "vocabulary-topic": "fa-layer-group",
        grammar: "fa-pen"
    };

    function primaryText(fav) {
        return fav.character || fav.char || fav.word || fav.pattern || "";
    }
    function secondaryText(fav) {
        return fav.romaji || fav.reading || "";
    }
    function meaningText(fav) {
        return fav.meaning || "";
    }

    function detailHref(fav) {
        if (fav.contentType === "hiragana" || fav.contentType === "katakana") {
            return `character.html?type=${fav.contentType}&char=${encodeURIComponent(fav.character)}`;
        }
        if (fav.contentType === "vocabulary-topic") {
            return `vocabulary-topic.html?topic=${fav.level}`;
        }
        return `chapter.html?level=${fav.level}&type=${fav.contentType}&chapter=${fav.chapterNumber || 1}`;
    }

    function matchesFilters(fav) {
        if (currentFilter !== "all" && fav.contentType !== currentFilter) return false;
        if (!currentSearch) return true;
        const haystack = `${primaryText(fav)} ${secondaryText(fav)} ${meaningText(fav)}`.toLowerCase();
        return haystack.includes(currentSearch);
    }

    function removeFavorite(fav) {
        fetch("/api/progress/favorite", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin",
            body: JSON.stringify({ contentType: fav.contentType, level: fav.level, itemIndex: fav.itemIndex })
        })
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => {
                if (!data || data.favorited) return;
                allFavorites = allFavorites.filter(
                    (f) => !(f.contentType === fav.contentType && f.level === fav.level && f.itemIndex === fav.itemIndex)
                );
                render();
            })
            .catch(() => {});
    }

    function render() {
        const filtered = allFavorites.filter(matchesFilters);

        if (countEl) countEl.textContent = `${filtered.length} favorite${filtered.length === 1 ? "" : "s"}`;

        if (!grid) return;

        if (!filtered.length) {
            grid.innerHTML = `<p class="no-results">No favorites yet — tap the star on any word, kanji, or character to save it here.</p>`;
            return;
        }

        grid.innerHTML = filtered
            .map(
                (fav, i) => `
                <div class="favorite-card">
                    <span class="favorite-type-badge"><i class="fa-solid ${TYPE_ICON[fav.contentType] || "fa-star"}"></i> ${TYPE_LABELS[fav.contentType] || fav.contentType}</span>
                    <a class="favorite-card-link" href="${detailHref(fav)}">
                        <div class="favorite-jp">${primaryText(fav)}</div>
                        ${secondaryText(fav) ? `<div class="favorite-reading">${secondaryText(fav)}</div>` : ""}
                        <div class="favorite-meaning">${meaningText(fav)}</div>
                    </a>
                    <button class="favorite-remove-btn" data-idx="${i}" title="Remove from favorites">
                        <i class="fa-solid fa-star"></i>
                    </button>
                </div>`
            )
            .join("");

        grid.querySelectorAll(".favorite-remove-btn").forEach((btn) => {
            btn.addEventListener("click", () => removeFavorite(filtered[Number(btn.dataset.idx)]));
        });
    }

    function loadFavorites() {
        fetch("/api/progress/favorites/all", { credentials: "same-origin" })
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => {
                allFavorites = data ? data.favorites : [];
                render();
            })
            .catch(() => {
                allFavorites = [];
                render();
            });
    }

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            currentSearch = searchInput.value.trim().toLowerCase();
            render();
        });
    }

    if (filterGroup) {
        filterGroup.querySelectorAll(".filter-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                const active = filterGroup.querySelector(".filter-btn.active");
                if (active) active.classList.remove("active");
                btn.classList.add("active");
                currentFilter = btn.dataset.filter;
                render();
            });
        });
    }

    /* ---------------- QUICK REVIEW MODE ---------------- */

    const overlay = document.getElementById("quickReviewOverlay");
    const reviewJp = document.getElementById("quickReviewJp");
    const reviewReveal = document.getElementById("quickReviewReveal");
    const reviewReading = document.getElementById("quickReviewReading");
    const reviewMeaning = document.getElementById("quickReviewMeaning");
    const reviewProgress = document.getElementById("quickReviewProgress");
    const reviewType = document.getElementById("quickReviewType");
    const flipBtn = document.getElementById("quickReviewFlipBtn");
    const prevBtn = document.getElementById("quickReviewPrevBtn");
    const nextBtn = document.getElementById("quickReviewNextBtn");
    const closeBtn = document.getElementById("quickReviewCloseBtn");
    const quickReviewBtn = document.getElementById("quickReviewBtn");

    let reviewList = [];
    let reviewIndex = 0;

    function renderReviewCard() {
        const fav = reviewList[reviewIndex];
        if (!fav || !reviewJp) return;
        if (reviewProgress) reviewProgress.textContent = `${reviewIndex + 1} / ${reviewList.length}`;
        if (reviewType) reviewType.textContent = TYPE_LABELS[fav.contentType] || fav.contentType;
        reviewJp.textContent = primaryText(fav);
        if (reviewReading) reviewReading.textContent = secondaryText(fav);
        if (reviewMeaning) reviewMeaning.textContent = meaningText(fav);
        if (reviewReveal) reviewReveal.hidden = true;
        if (flipBtn) flipBtn.textContent = "Show Answer";
    }

    function openQuickReview() {
        reviewList = allFavorites.filter(matchesFilters);
        if (!reviewList.length) {
            alert("No favorites to review in this filter.");
            return;
        }
        reviewIndex = 0;
        renderReviewCard();
        if (overlay) overlay.hidden = false;
    }

    if (quickReviewBtn) quickReviewBtn.addEventListener("click", openQuickReview);
    if (closeBtn) closeBtn.addEventListener("click", () => { if (overlay) overlay.hidden = true; });
    if (flipBtn) {
        flipBtn.addEventListener("click", () => {
            if (!reviewReveal) return;
            reviewReveal.hidden = !reviewReveal.hidden;
            flipBtn.textContent = reviewReveal.hidden ? "Show Answer" : "Hide Answer";
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            reviewIndex = (reviewIndex - 1 + reviewList.length) % reviewList.length;
            renderReviewCard();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            reviewIndex = (reviewIndex + 1) % reviewList.length;
            renderReviewCard();
        });
    }

    loadFavorites();

})();
