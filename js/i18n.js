/* ==========================================
   EASY NIHONGO — TRANSLATION ENGINE
   Applies strings from locales/en.js / bn.js
   to any element carrying data-i18n="key".
   Both locale files must be loaded as <script>
   tags before this file (see index.html).

   This is a starter implementation covering the
   shared navbar/footer and the homepage hero —
   proving the pattern, not translating the whole
   site yet. To extend: add data-i18n attributes
   to more elements and more keys to each locale
   file (see locales/en.js for the key list).
========================================== */

window.EasyNihongoI18n = (function () {

    const STRINGS = {
        en: window.EN_STRINGS || {},
        bn: window.BN_STRINGS || {}
    };

    function apply(lang) {

        const dict = STRINGS[lang] || STRINGS.en;

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.dataset.i18n;
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        document.documentElement.lang = lang === "bn" ? "bn" : "en";

    }

    function setLanguage(lang) {
        apply(STRINGS[lang] ? lang : "en");
    }

    // Apply the saved (or default) language as soon as the DOM the
    // header/footer inject is ready. Called again by js/utils.js
    // whenever the user picks a different language.
    document.addEventListener("DOMContentLoaded", () => {
        setLanguage(localStorage.getItem("lang") || "en");
    });

    return { setLanguage };

})();
