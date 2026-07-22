/* ==========================================
            GRAMMAR PAGE
   Dark mode, mobile menu, language switcher,
   scroll reveal, ripple, counters, back-to-top
   -> js/utils.js
   This file only handles what's unique to
   the grammar page.
========================================== */



// ==========================================
// RENDER GRAMMAR GRID
// grammarData comes from data/grammar-data.js
// (loaded as a <script> tag before this file).
// ==========================================

(function renderGrammarGrid(){

    const grid = document.getElementById("grammarGrid");
    if(!grid || typeof grammarData === "undefined") return;

    const LEVELS = ["n5", "n4", "n3", "n2", "n1"];
    let html = "";

    LEVELS.forEach((level, levelIndex) => {

        const points = grammarData[level] || [];

        if(points.length){

            points.forEach((point, i) => {
                html += `
    <div class="grammar-card ${level} reveal" data-anim="fade-up" data-delay="${i * 60}">
        <div class="grammar-top">
            <span class="jp-pattern">${point.pattern}</span>
            <span class="badge badge-${level}">${level.toUpperCase()}</span>
        </div>
        <p class="reading">${point.reading}</p>
        <p class="meaning">${point.meaning}</p>
        <div class="example">
            <p class="jp">${point.jp}</p>
            <p class="en">${point.en}</p>
        </div>
    </div>`;
            });

        } else {

            const prevLevel = LEVELS[levelIndex - 1];
            html += `
    <div class="grammar-card locked ${level} reveal" data-anim="fade-up" data-delay="${levelIndex * 80}">
        <i class="fa-solid fa-lock lock"></i>
        <h2>JLPT ${level.toUpperCase()}</h2>
        <p>${prevLevel ? `Complete ${prevLevel.toUpperCase()} to Unlock` : "Coming soon"}</p>
    </div>`;

        }

    });

    grid.insertAdjacentHTML("afterbegin", html);

})();


// ==========================================
// FILTER
// ==========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const grammarCards = document.querySelectorAll(".grammar-card");
const noResults = document.getElementById("noResults");

function updateNoResults(){

    if(!noResults) return;

    const visible = Array.from(grammarCards).some(card => card.style.display !== "none");
    noResults.classList.toggle("show", !visible);

}

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        grammarCards.forEach(card => {

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
// SEARCH (matches pattern or meaning text)
// ==========================================

const searchInput = document.getElementById("grammarSearch");
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

            grammarCards.forEach(card => {

                const pattern = card.querySelector(".jp-pattern")?.textContent.toLowerCase() || "";
                const meaning = card.querySelector(".meaning")?.textContent.toLowerCase() || "";

                if(pattern.includes(searchValue) || meaning.includes(searchValue)){
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
