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

katakanaData.forEach(item=>{

grid.innerHTML += `

<div class="card">

    <div class="card-header">

        <span class="jlpt">${item.level}</span>

        <button class="favorite">

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
            data-audio="${item.audio}">

            <i class="fa-solid fa-volume-high"></i>

        </button>

    </div>

</div>

`;

});

initializeButtons();

})();

function initializeButtons(){

const playButtons=
document.querySelectorAll(".play-btn");

playButtons.forEach(button=>{

button.addEventListener("click",()=>{

const audioFile=

button.dataset.audio;

const audio=

new Audio(audioFile);

audio.play();

});

});

const favorites=

document.querySelectorAll(".favorite");

favorites.forEach(button=>{

button.addEventListener("click",()=>{

button.classList.toggle("active");

});

});

}
