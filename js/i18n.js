/* ==========================================
   EASY NIHONGO — TRANSLATION ENGINE
   Applies strings from locales/*.js to any
   element carrying data-i18n="key". Every
   locale file must be loaded as a <script> tag
   before this file (see index.html) — they set
   window.XX_STRINGS globals, read here.

   Adding a language later is a two-step, no-
   code-change process: drop in locales/xx.js
   (window.XX_STRINGS = {...}), add "xx" to the
   LANGUAGES list below, and add its option to
   components/header.js's #langMenu.
========================================== */

window.EasyNihongoI18n = (function () {

    const LANGUAGES = ["en", "bn", "ja"];

    const STRINGS = {};
    LANGUAGES.forEach((code) => {
        STRINGS[code] = window[code.toUpperCase() + "_STRINGS"] || {};
    });

    function apply(lang) {

        const dict = STRINGS[lang] || STRINGS.en;

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.dataset.i18n;
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // Placeholders/titles can't take translated HTML via [data-i18n]
        // (that sets innerHTML) — a separate attribute pair covers them.
        document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
            const key = el.dataset.i18nPlaceholder;
            if (dict[key] !== undefined) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        document.documentElement.lang = STRINGS[lang] ? lang : "en";

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

    return { setLanguage, LANGUAGES };

})();
