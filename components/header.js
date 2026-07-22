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

    const scriptSrc = (document.currentScript && document.currentScript.getAttribute("src")) || "";
    const inPagesFolder = scriptSrc.startsWith("../");

    const toRoot = inPagesFolder ? "../" : "";
    const toPages = inPagesFolder ? "" : "pages/";

    const currentPage = document.body.dataset.page || "";

    // Courses, Vocabulary, Grammar and Kanji are grouped under one
    // "Courses" dropdown instead of 4 separate top-level nav items —
    // keeps the navbar from wrapping on smaller desktop widths.
    const COURSES_GROUP = [
        { key: "courses", href: `${toPages}courses.html`, label: "Course Overview" },
        { key: "vocabulary", href: `${toPages}vocabulary.html`, label: "Vocabulary" },
        { key: "grammar", href: `${toPages}grammar.html`, label: "Grammar" },
        { key: "kanji", href: `${toPages}kanji.html`, label: "Kanji" }
    ];

    const groupIsActive = COURSES_GROUP.some((item) => item.key === currentPage);

    const dropdownItemsHtml = COURSES_GROUP.map((item) => {
        const active = item.key === currentPage ? ' class="active"' : "";
        const i18nAttr = item.key === "courses" ? "" : ` data-i18n="nav.${item.key}"`;
        return `<a href="${item.href}"${active} role="menuitem"${i18nAttr}>${item.label}</a>`;
    }).join("");

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
                <span class="logo-text">Easy<span>Nihongo</span></span>
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
            </ul>

            <div class="nav-buttons">
                <button id="langBtn" class="lang-btn" title="Change language" aria-haspopup="listbox" aria-expanded="false">
                    <i class="fa-solid fa-globe"></i> <span id="langLabel">EN</span>
                </button>
                <div class="lang-menu" id="langMenu" role="listbox" hidden>
                    <button type="button" data-lang="en" role="option">English</button>
                    <button type="button" data-lang="bn" role="option">বাংলা</button>
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
</header>`;

})();
