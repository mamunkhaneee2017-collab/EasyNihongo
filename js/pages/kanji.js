/* ==========================================
            KANJI PAGE
   Dark mode, mobile menu, language switcher,
   scroll reveal, ripple, counters, back-to-top
   -> js/utils.js
   This file only handles what's unique to
   the kanji page.
========================================== */



// ==========================================
// RENDER KANJI GRID
// kanjiData comes from data/kanji-data.js
// (loaded as a <script> tag before this file).
// ==========================================

(function renderKanjiGrid(){

    const grid = document.getElementById("kanjiGrid");
    if(!grid || typeof kanjiData === "undefined") return;

    const LEVELS = ["n5", "n4", "n3", "n2", "n1"];
    let html = "";

    LEVELS.forEach((level, levelIndex) => {

        const entries = kanjiData[level] || [];

        if(entries.length){

            entries.forEach((k, i) => {
                html += `
    <div class="kanji-card ${level} reveal" data-anim="scale" data-delay="${i * 40}">
        <div class="kanji-top">
            <span class="kanji-char">${k.char}</span>
            <span class="badge badge-${level}">${level.toUpperCase()}</span>
        </div>
        <div class="kanji-readings">
            <span><strong>On:</strong> ${k.on}</span>
            <span><strong>Kun:</strong> ${k.kun}</span>
        </div>
        <p class="kanji-meaning">${k.meaning}</p>
        <div class="kanji-info"><i class="fa-solid fa-pen-nib"></i> ${k.strokes} strokes</div>
        <button class="learned-btn" data-level="${level}" data-index="${i}">
            <i class="fa-regular fa-circle-check"></i> Mark as Learned
        </button>
    </div>`;
            });

        } else {

            const prevLevel = LEVELS[levelIndex - 1];
            html += `
    <div class="kanji-card locked ${level} reveal" data-anim="fade-up" data-delay="${levelIndex * 80}">
        <i class="fa-solid fa-lock lock"></i>
        <h2>JLPT ${level.toUpperCase()}</h2>
        <p>${prevLevel ? `Complete ${prevLevel.toUpperCase()} to Unlock` : "Coming soon"}</p>
    </div>`;

        }

    });

    grid.insertAdjacentHTML("afterbegin", html);

    initLearnedButtons();

})();


// ==========================================
// MARK AS LEARNED
// Persists per-user via POST /api/progress/complete.
// Anonymous visitors see a login hint instead.
// ==========================================

function setLearnedButtonState(button, learned){
    button.classList.toggle("active", learned);
    button.innerHTML = learned
        ? '<i class="fa-solid fa-circle-check"></i> Learned'
        : '<i class="fa-regular fa-circle-check"></i> Mark as Learned';
}

function initLearnedButtons(){

    const LEVELS = ["n5", "n4", "n3", "n2", "n1"];

    document.querySelectorAll(".learned-btn").forEach(button => {

        button.addEventListener("click", () => {

            fetch("/api/progress/complete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify({
                    contentType: "kanji",
                    level: button.dataset.level,
                    itemIndex: button.dataset.index
                })
            })
                .then(async (res) => {
                    if(!res.ok) throw new Error("not logged in");
                    const data = await res.json();
                    setLearnedButtonState(button, data.completed);
                })
                .catch(() => {
                    alert("Log in to save your learned kanji.");
                });

        });

    });

    LEVELS.forEach(level => {
        fetch(`/api/progress/completed?contentType=kanji&level=${level}`, { credentials: "same-origin" })
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                if(!data) return;
                data.itemIndexes.forEach(index => {
                    const button = document.querySelector(`.learned-btn[data-level="${level}"][data-index="${index}"]`);
                    if(button) setLearnedButtonState(button, true);
                });
            })
            .catch(() => {});
    });

}


// ==========================================
// FILTER
// ==========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const kanjiCards = document.querySelectorAll(".kanji-card");
const noResults = document.getElementById("noResults");

function updateNoResults(){

    if(!noResults) return;

    const visible = Array.from(kanjiCards).some(card => card.style.display !== "none");
    noResults.classList.toggle("show", !visible);

}

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        kanjiCards.forEach(card => {

            if(filter === "all" || card.classList.contains(filter)){
                card.style.display = "flex";
            }
            else{
                card.style.display = "none";
            }

        });

        updateNoResults();

    });

});


// ==========================================
// SEARCH (matches the Kanji character or its meaning)
// ==========================================

const searchInput = document.getElementById("kanjiSearch");
const searchCount = document.getElementById("searchCount");

if(searchInput){

    let debounceTimer;

    searchInput.addEventListener("keyup", () => {

        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {

            const searchValue = searchInput.value.toLowerCase().trim();
            let matches = 0;

            if(searchValue && filterButtons.length){
                filterButtons.forEach(btn => btn.classList.remove("active"));
                document.querySelector('.filter-btn[data-filter="all"]')?.classList.add("active");
            }

            kanjiCards.forEach(card => {

                const char = card.querySelector(".kanji-char")?.textContent.toLowerCase() || "";
                const meaning = card.querySelector(".kanji-meaning")?.textContent.toLowerCase() || "";

                if(char.includes(searchValue) || meaning.includes(searchValue)){
                    card.style.display = "flex";
                    matches++;
                }
                else{
                    card.style.display = "none";
                }

            });

            if(searchCount){
                searchCount.textContent = searchValue ? `${matches} found` : "";
            }

            updateNoResults();

        }, 200);

    });

}
