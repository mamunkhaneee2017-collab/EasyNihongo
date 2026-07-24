/* ==========================================
   EASY NIHONGO — SERVICE WORKER
   Basic offline cache for the app shell so
   lesson pages already visited stay available
   with a flaky/no connection (relevant for
   students on mobile data).

   NOTE: service workers only run when the site
   is served over http(s) (e.g. GitHub Pages, a
   local dev server) — browsers refuse to
   register them for pages opened directly via
   file://, which is how this project is tested
   by default. See js/utils.js for the guarded
   registration call.
========================================== */

const CACHE_NAME = "easynihongo-shell-v5";

const APP_SHELL = [
    "index.html",
    "pages/courses.html",
    "pages/vocabulary.html",
    "pages/grammar.html",
    "pages/kanji.html",
    "pages/quiz.html",
    "pages/hiragana.html",
    "pages/katakana.html",
    "pages/contact.html",
    "css/variables.css",
    "css/reset.css",
    "css/base.css",
    "css/navbar.css",
    "css/footer.css",
    "css/dark.css",
    "css/pages/courses.css",
    "css/pages/vocabulary.css",
    "css/pages/grammar.css",
    "css/pages/kanji.css",
    "css/pages/quiz.css",
    "css/pages/hiragana.css",
    "css/pages/contact.css",
    "components/header.js",
    "components/footer.js",
    "js/utils.js",
    "js/i18n.js",
    "locales/en.js",
    "locales/bn.js",
    "assets/icons/logo.jpeg",
    "manifest.json"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
        )
    );
    self.clients.claim();
});

// Network-first for same-origin GET requests, falling back to the cache
// only when the network is unavailable. This is deliberately NOT
// cache-first: this site's app-shell files (header.js, CSS, etc.) change
// often during active development, and cache-first previously caused
// real bugs where already-cached pages kept serving stale JS/CSS for
// days after a fix shipped, because the browser only re-checks sw.js's
// own bytes for updates — not the files it precached. Network-first
// keeps every visit fresh while still giving the offline fallback this
// worker exists for.
self.addEventListener("fetch", (event) => {

    if (event.request.method !== "GET") return;
    if (new URL(event.request.url).origin !== self.location.origin) return;

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                return response;
            })
            .catch(() => caches.match(event.request))
    );

});
