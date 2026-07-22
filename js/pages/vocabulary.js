/* ==========================================
            VOCABULARY PAGE
========================================== */

/* ===============================
        RENDER LEVEL CARDS
   vocabularyData comes from data/vocabulary-data.js
   (loaded as a <script> tag before this file).
================================ */

(function renderVocabularyGrid(){

    const grid = document.getElementById("vocabularyGrid");
    if(!grid || typeof vocabularyData === "undefined") return;

    grid.innerHTML = vocabularyData.map(level => {

        if(level.locked){
            return `
<div class="vocabulary-card locked ${level.level}">
    <i class="fa-solid fa-lock"></i>
    <h2>JLPT ${level.level.toUpperCase()}</h2>
    <p>Complete ${level.unlockAfter} to Unlock</p>
</div>`;
        }

        return `
<div class="vocabulary-card ${level.level}">
    <h2>JLPT ${level.level.toUpperCase()}</h2>
    <span class="badge ${level.badge}">${level.badgeLabel}</span>
    <p>${level.words}</p>
    <p>${level.chapters}</p>
    <p>${level.hours}</p>
    <div class="progress">
        <div class="progress-fill" style="width:${level.progress}%"></div>
    </div>
    <a href="lesson.html">
        <button>${level.action}</button>
    </a>
    <button class="mark-complete-btn" data-level="${level.level}">Mark as Complete</button>
</div>`;

    }).join("");

    initMarkComplete();

})();

/* ===============================
        MARK VOCABULARY LEVEL COMPLETE
   Persists per-user via
   POST /api/progress/vocabulary-complete.
   Anonymous visitors see a login hint instead.
================================ */

function setMarkCompleteState(button, completed){
    button.classList.toggle("active", completed);
    button.textContent = completed ? "Completed ✓" : "Mark as Complete";
}

function initMarkComplete(){

    document.querySelectorAll(".mark-complete-btn").forEach(button => {

        button.addEventListener("click", () => {

            fetch("/api/progress/vocabulary-complete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify({ level: button.dataset.level })
            })
                .then(async (res) => {
                    if(!res.ok) throw new Error("not logged in");
                    const data = await res.json();
                    setMarkCompleteState(button, data.completed);
                })
                .catch(() => {
                    alert("Log in to save your vocabulary progress.");
                });

        });

    });

    fetch("/api/progress/vocabulary-completed", { credentials: "same-origin" })
        .then(res => res.ok ? res.json() : null)
        .then(data => {
            if(!data) return;
            data.levels.forEach(level => {
                const button = document.querySelector(`.mark-complete-btn[data-level="${level}"]`);
                if(button) setMarkCompleteState(button, true);
            });
        })
        .catch(() => {});

}

/* ===============================
        SEARCH
================================ */

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".vocabulary-card");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

cards.forEach(card=>{

const text = card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

/* ===============================
        FILTER
================================ */

const filterBtns=document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelector(".filter-btn.active")
.classList.remove("active");

btn.classList.add("active");

const filter=btn.dataset.filter;

cards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

return;

}

if(card.classList.contains(filter)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});

/* Dark mode -> js/utils.js (single shared implementation) */

/* ===============================
        CARD ANIMATION
================================ */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".vocabulary-card").forEach(card=>{

observer.observe(card);

});