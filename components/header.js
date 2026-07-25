/* ==========================================
   SHARED HEADER / NAVBAR
   Single source of truth for the public-site
   navbar, injected via plain JS (not fetch())
   so it still works when a page is opened
   directly by double-click (file:// protocol).

   Usage: put
     <div id="site-header"></div>
     <script src="components/header.js"></script>       (from the site root, e.g. index.html)
     <script src="../components/header.js"></script>     (from pages/*.html)
   and set
     <body data-page="courses">
   (one of: home, courses, vocabulary, grammar,
   kanji, quiz, contact) so the matching nav
   link gets marked active. Pages with no
   matching key (login, register, lesson, ...)
   simply get no active link, same as before.

   This file detects whether it was loaded from
   the root or from pages/ by reading its own
   <script src="..."> path, and adjusts every
   generated link accordingly — no page-specific
   configuration needed beyond the src path above.
========================================== */

(function () {

    // Based on the actual browser URL, not this script's own src path —
    // the two usually agree, but diverge for Express's 404 fallback
    // (backend/server.js sends root's 404.html verbatim for ANY unmatched
    // path, including /pages/whatever — the script tag inside it still
    // reads "components/header.js" since that's genuinely where the file
    // living on disk sits, but the browser's address bar can be under
    // /pages/, so links built from the script-src heuristic alone would
    // point one level too shallow). window.location.pathname always
    // reflects where the user actually is.
    const inPagesFolder = window.location.pathname.includes("/pages/");

    const toRoot = inPagesFolder ? "../" : "";
    const toPages = inPagesFolder ? "" : "pages/";

    const currentPage = document.body.dataset.page || "";

    // Courses, Vocabulary, Grammar and Kanji are grouped under one
    // "Courses" dropdown instead of 4 separate top-level nav items —
    // keeps the navbar from wrapping on smaller desktop widths.
    // Vocabulary/Grammar/Kanji each additionally get a nested level
    // flyout (N5-N1) so picking a level jumps straight into chapter 1 —
    // only N5 is a real link; N4-N1 are shown locked, matching the same
    // "coming soon" convention used everywhere else on the site. This is
    // a fixed, numeric-position link (not a data lookup) deliberately:
    // header.js loads on every page site-wide and must not be forced to
    // load the (large) content data files just to resolve "first chapter."
    const LEVELS = ["n5", "n4", "n3", "n2", "n1"];
    const COURSE_TYPES = [
        { key: "vocabulary", label: "Vocabulary" },
        { key: "grammar", label: "Grammar" },
        { key: "kanji", label: "Kanji" }
    ];

    const groupIsActive = ["courses", "vocabulary", "grammar", "kanji"].includes(currentPage);

    const courseOverviewHtml = `<a href="${toPages}courses.html"${currentPage === "courses" ? ' class="active"' : ""} role="menuitem">Course Overview</a>`;

    const courseTypeFlyoutsHtml = COURSE_TYPES.map((type) => {
        const levelLinksHtml = LEVELS.map((level) => {
            const isUnlocked = level === "n5";
            return isUnlocked
                ? `<a href="${toPages}chapter.html?level=${level}&type=${type.key}&chapter=1" role="menuitem">${level.toUpperCase()}</a>`
                : `<span class="locked" aria-disabled="true" title="Coming soon">${level.toUpperCase()}</span>`;
        }).join("");

        return `
            <div class="nav-flyout-item">
                <a href="${toPages}${type.key}.html"${currentPage === type.key ? ' class="active"' : ""} role="menuitem" data-i18n="nav.${type.key}">${type.label}</a>
                <button type="button" class="nav-flyout-caret" aria-label="Choose a ${type.label} level" aria-haspopup="true" aria-expanded="false">
                    <span class="caret">&#9662;</span>
                </button>
                <div class="nav-flyout-submenu" role="menu" hidden>
                    ${levelLinksHtml}
                </div>
            </div>`;
    }).join("");

    const dropdownItemsHtml = courseOverviewHtml + courseTypeFlyoutsHtml;

    const otherLinksHtml = `<li><a href="${toPages}quiz.html"${currentPage === "quiz" ? ' class="active"' : ""} data-i18n="nav.quiz">JLPT Test</a></li>
                <li><a href="${toPages}contact.html"${currentPage === "contact" ? ' class="active"' : ""} data-i18n="nav.contact">Contact</a></li>`;

    const mount = document.getElementById("site-header");
    if (!mount) return;

    mount.innerHTML = `
<header>
    <nav class="navbar">
        <div class="container nav-container">

            <a href="${toRoot}index.html" class="logo">
                <img src="${toRoot}assets/icons/logo.jpeg" alt="Easy Nihongo Logo">
                <span class="logo-text" id="siteLogoText">Easy<span>Nihongo</span></span>
            </a>

            <ul class="nav-menu" id="navMenu">
                <li><a href="${toRoot}index.html"${currentPage === "home" ? ' class="active"' : ""} data-i18n="nav.home">Home</a></li>

                <li class="nav-item-dropdown">
                    <button type="button" class="nav-dropdown-btn${groupIsActive ? " active" : ""}" id="coursesDropdownBtn" aria-haspopup="true" aria-expanded="false" data-i18n="nav.courses">
                        Courses <span class="caret">&#9662;</span>
                    </button>
                    <div class="nav-dropdown-menu" id="coursesDropdownMenu" role="menu" hidden>
                        ${dropdownItemsHtml}
                    </div>
                </li>

                ${otherLinksHtml}

                <li><a href="${toPages}search.html"${currentPage === "search" ? ' class="active"' : ""}><i class="fa-solid fa-magnifying-glass"></i> <span data-i18n="nav.search">Search</span></a></li>

                <li class="nav-mobile-login"><a href="${toPages}login.html" class="login-btn" data-i18n="nav.login">Login</a></li>

                <li class="nav-lang-mobile">
                    <span class="nav-lang-mobile-label"><i class="fa-solid fa-globe"></i> Language</span>
                    <div class="nav-lang-mobile-options">
                        <button type="button" data-lang="en">English</button>
                        <button type="button" data-lang="bn">বাংলা</button>
                        <button type="button" data-lang="ja">日本語</button>
                    </div>
                </li>
            </ul>

            <div class="nav-buttons">
                <button id="langBtn" class="lang-btn" title="Change language" aria-haspopup="listbox" aria-expanded="false">
                    <i class="fa-solid fa-globe"></i> <span id="langLabel">EN</span>
                </button>
                <div class="lang-menu" id="langMenu" role="listbox" hidden>
                    <button type="button" data-lang="en" role="option">English</button>
                    <button type="button" data-lang="bn" role="option">বাংলা</button>
                    <button type="button" data-lang="ja" role="option">日本語</button>
                </div>

                <button id="darkModeBtn" title="Toggle dark mode">
                    <i class="fa-solid fa-moon"></i>
                </button>

                <a href="${toPages}login.html" class="login-btn" data-i18n="nav.login">Login</a>
            </div>

            <button class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false" aria-controls="navMenu">
                <i class="fa-solid fa-bars"></i>
            </button>

        </div>
    </nav>
</header>

<div class="ad-banner" id="adTextBanner" role="note" aria-label="Announcement" hidden></div>
<div class="ad-media-banner" id="adMediaBanner" hidden></div>`;

    // Both ad slots are fully controlled from the admin panel's
    // Advertisements section (scheduling, priority, on/off). Only the
    // single highest-priority, currently-active, in-date-range ad per
    // slot is ever returned here — see backend/routes/advertisements.js.
    fetch("/api/advertisements")
        .then((res) => (res.ok ? res.json() : null))
        .then((ads) => {
            if (!ads) return;

            const textBanner = document.getElementById("adTextBanner");
            if (ads.text && ads.text.content) {
                textBanner.innerHTML = `
                    <div class="ad-banner-track">
                        <span class="ad-banner-item">${ads.text.content}</span>
                        <span class="ad-banner-item" aria-hidden="true">${ads.text.content}</span>
                    </div>`;
                textBanner.hidden = false;
            }

            const mediaBanner = document.getElementById("adMediaBanner");
            if (ads.banner && sessionStorage.getItem(`adDismissed_${ads.banner.id}`) !== "1") {
                const mediaTag =
                    ads.banner.mediaType === "video"
                        ? `<video src="${ads.banner.mediaPath}" autoplay muted loop playsinline></video>`
                        : `<img src="${ads.banner.mediaPath}" alt="${ads.banner.title || "Advertisement"}">`;

                const inner = ads.banner.linkUrl
                    ? `<a href="${ads.banner.linkUrl}" target="_blank" rel="noopener noreferrer" class="ad-media-link">${mediaTag}</a>`
                    : `<div class="ad-media-link">${mediaTag}</div>`;

                mediaBanner.innerHTML = `
                    ${inner}
                    <button class="ad-media-close" aria-label="Close advertisement" type="button"><i class="fa-solid fa-xmark"></i></button>`;
                mediaBanner.hidden = false;

                mediaBanner.querySelector(".ad-media-close").addEventListener("click", () => {
                    sessionStorage.setItem(`adDismissed_${ads.banner.id}`, "1");
                    mediaBanner.hidden = true;
                });
            }
        })
        .catch(() => {});

    // Reflects the admin panel's Site Name setting (falls back to the
    // hardcoded markup above if the API isn't reachable, e.g. a page
    // opened via file:// without the server running).
    fetch("/api/settings")
        .then((res) => (res.ok ? res.json() : null))
        .then((settings) => {
            if (!settings || !settings.siteName) return;
            const logoText = document.getElementById("siteLogoText");
            if (!logoText) return;

            const words = settings.siteName.trim().split(" ");
            const lastWord = words.pop();
            logoText.innerHTML = `${words.join(" ")}<span>${lastWord}</span>`;
        })
        .catch(() => {});

})();
