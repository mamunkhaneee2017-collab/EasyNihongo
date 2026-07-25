/*==================================
        LESSON PROGRESS
==================================*/

const progress =
document.querySelector(".progress-fill");

window.addEventListener("load",()=>{

progress.style.width="20%";

});

/*==========================
    SEARCH
==========================*/

const search =
document.getElementById("searchCharacter");

search.addEventListener("keyup",()=>{

const value =
search.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

const text =
card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

/*===============================
        RENDER CHARACTERS
   katakanaData comes from data/katakana-data.js
   (loaded as a <script> tag before this file).
   This works even when the page is opened
   directly via file://, unlike fetch(), which
   browsers block for local files.
================================*/

(function renderKatakana(){

const grid=document.getElementById("katakanaGrid");
if(!grid || typeof katakanaData==="undefined") return;

grid.innerHTML="";

katakanaData.forEach((item, index)=>{

grid.innerHTML += `

<div class="card">

    <div class="card-header">

        <span class="jlpt">${item.level}</span>

        <button class="favorite" data-index="${index}">

            <i class="fa-regular fa-star"></i>

        </button>

    </div>

    <h2>${item.character}</h2>

    <h3>${item.romaji}</h3>

    <div class="example">

        <h4>${item.word}</h4>

        <small>${item.reading}</small>

        <p>${item.meaning}</p>

    </div>

    <div class="sentence">

        <p>${item.sentence}</p>

        <small>${item.translation}</small>

    </div>

    <div class="bottom">

        <span class="difficulty">
            ${item.difficulty}
        </span>

        <button
            class="play-btn"
            data-speak="${item.character}">

            <i class="fa-solid fa-volume-high"></i>

        </button>

    </div>

    <a class="practice-link" href="character.html?type=katakana&char=${encodeURIComponent(item.character)}">
        <i class="fa-solid fa-pen-nib"></i> Stroke Order &amp; Practice
    </a>

</div>

`;

});

initializeButtons();
loadFavorites();

})();

function initializeButtons(){

const playButtons=
document.querySelectorAll(".play-btn");

const speechSupported = window.EasyNihongoSpeech && window.EasyNihongoSpeech.isSupported();

playButtons.forEach(button=>{

if(!speechSupported){
    button.disabled = true;
    button.title = "Audio not supported in this browser";
    return;
}

button.addEventListener("click",()=>{

window.EasyNihongoSpeech.speak(button.dataset.speak);

});

});

const favorites=

document.querySelectorAll(".favorite");

favorites.forEach(button=>{

button.addEventListener("click",()=>{

const itemIndex = button.dataset.index;

fetch("/api/progress/favorite", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify({ contentType: "katakana", itemIndex })
})
    .then(async (res) => {
        if (!res.ok) throw new Error("not logged in");
        const data = await res.json();
        button.classList.toggle("active", data.favorited);
    })
    .catch(() => {
        button.classList.toggle("active");
        button.title = "Log in to save favorites across visits";
    });

});

});

}

/*==========================
    LOAD SAVED FAVORITES
    (only marks stars for logged-in users;
    anonymous visitors just get the local-only
    toggle above)
==========================*/

function loadFavorites(){

    fetch("/api/progress/favorites?contentType=katakana", { credentials: "same-origin" })
        .then((res) => {
            if (!res.ok) throw new Error("not logged in");
            return res.json();
        })
        .then((data) => {
            data.itemIndexes.forEach((index) => {
                const button = document.querySelector(`.favorite[data-index="${index}"]`);
                if (button) button.classList.add("active");
            });
        })
        .catch(() => {});

}
