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
   (one of: home, courses, hiragana, katakana,
   vocabulary, grammar, kanji, quiz, contact) so
   the matching nav link gets marked active. Pages
   with no matching key (login, register, lesson,
   ...) simply get no active link, same as before.

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

    // The Courses dropdown lists how a student actually thinks about
    // progression — by level, not by content type — instead of the old
    // Vocabulary/Grammar/Kanji type-first grouping. N5 is fully open;
    // N4 and N3 require a session (hrefs are filled in below once the
    // /api/auth/me check this file already makes for the Login/Dashboard
    // swap resolves, so no second request); N2-N1 stay locked until
    // that level's content is authored. This is a fixed list (not a
    // data lookup) deliberately: header.js loads on every page site-wide
    // and must not be forced to load the (large) content data files.
    const groupIsActive = ["courses", "hiragana", "katakana"].includes(currentPage);

    const courseOverviewHtml = `<a href="${toPages}courses.html"${currentPage === "courses" ? ' class="active"' : ""} role="menuitem">Course Overview</a>`;
    const hiraganaHtml = `<a href="${toPages}hiragana.html"${currentPage === "hiragana" ? ' class="active"' : ""} role="menuitem" data-i18n="nav.hiragana">Hiragana</a>`;
    const katakanaHtml = `<a href="${toPages}katakana.html"${currentPage === "katakana" ? ' class="active"' : ""} role="menuitem" data-i18n="nav.katakana">Katakana</a>`;
    const n5Html = `<a href="${toPages}level-hub.html?level=n5" role="menuitem">N5</a>`;
    // href is set once auth state is known (see the /api/auth/me handler
    // below) — "#" until then so a click before that resolves is a no-op
    // rather than a broken/unlocked link.
    const gatedLevelsHtml = ["n4", "n3"]
        .map((level) => `<a href="#" class="nav-level-gated" data-level="${level}" role="menuitem">${level.toUpperCase()}</a>`)
        .join("");
    const lockedLevelsHtml = ["n2", "n1"]
        .map((level) => `<span class="locked" aria-disabled="true" title="Coming soon">${level.toUpperCase()}</span>`)
        .join("");

    const dropdownItemsHtml = courseOverviewHtml + hiraganaHtml + katakanaHtml + n5Html + gatedLevelsHtml + lockedLevelsHtml;

    const otherLinksHtml = `<li><a href="${toPages}quiz.html"${currentPage === "quiz" ? ' class="active"' : ""} data-i18n="nav.quiz">JLPT Test</a></li>
                <li><a href="${toPages}contact.html"${currentPage === "contact" ? ' class="active"' : ""} data-i18n="nav.contact">Contact</a></li>`;

    const mount = document.getElementById("site-header");
    if (!mount) return;

    mount.innerHTML = `
<header>
    <nav class="navbar">
        <div class="container nav-container">

            <a href="${toRoot}index.html" class="logo">
                <img src="${toRoot}assets/icons/logo1.jpg" alt="Easy Japanese Logo">
                <span class="logo-text" id="siteLogoText">Easy<span>Japanese</span></span>
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

                <li class="nav-mobile-login" id="navMobileLoginItem"><a href="${toPages}login.html" class="login-btn" data-i18n="nav.login">Login</a></li>

                <li class="nav-mobile-darkmode">
                    <button type="button" id="darkModeBtnMobile" class="nav-mobile-darkmode-btn">
                        <i class="fa-solid fa-moon"></i> <span data-i18n="nav.darkMode">Dark Mode</span>
                    </button>
                </li>

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

                <a href="${toPages}login.html" class="login-btn" id="navLoginBtn" data-i18n="nav.login">Login</a>
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

    // Swap the Login button for Dashboard/Logout when a session already
    // exists — otherwise a logged-in student sees "Login" on every public
    // page (everywhere except the dashboard/profile/settings/favorites
    // pages, which use a separate authenticated layout entirely).
    // Points every .nav-level-gated link (currently just N4) at the
    // level hub if a session exists, or at login.html?redirect=... (so
    // login/register hands the student straight back into that level)
    // if it doesn't. Resolved from the same auth check right below
    // rather than a second request; on request failure it fails toward
    // requiring login rather than silently granting access.
    const resolveGatedLevelLinks = (isLoggedIn) => {
        document.querySelectorAll(".nav-level-gated").forEach((link) => {
            if (isLoggedIn) {
                link.href = `${toPages}level-hub.html?level=${link.dataset.level}`;
                return;
            }
            // login.html always lives in pages/, so the redirect value it
            // consumes must be relative to THAT location (a plain sibling
            // filename), not to wherever this click happened to originate
            // — using toPages here too would double up to pages/pages/...
            // when the click came from the root page.
            const redirectTarget = `level-hub.html?level=${link.dataset.level}`;
            link.href = `${toPages}login.html?redirect=${encodeURIComponent(redirectTarget)}`;
        });
    };

    fetch("/api/auth/me", { credentials: "same-origin" })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
            resolveGatedLevelLinks(!!(data && data.user));

            if (!data || !data.user) return;

            const doLogout = (e) => {
                e.preventDefault();
                fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" })
                    .then(() => window.location.reload())
                    .catch(() => window.location.reload());
            };

            const desktopLogin = document.getElementById("navLoginBtn");
            if (desktopLogin) {
                desktopLogin.textContent = "Dashboard";
                desktopLogin.href = `${toPages}dashboard.html`;
                desktopLogin.removeAttribute("data-i18n");

                const logoutBtn = document.createElement("a");
                logoutBtn.href = "#";
                logoutBtn.className = "secondary-btn nav-logout-btn";
                logoutBtn.textContent = "Logout";
                logoutBtn.addEventListener("click", doLogout);
                desktopLogin.insertAdjacentElement("afterend", logoutBtn);
            }

            const mobileItem = document.getElementById("navMobileLoginItem");
            if (mobileItem) {
                const mobileLogin = mobileItem.querySelector("a");
                mobileLogin.textContent = "Dashboard";
                mobileLogin.href = `${toPages}dashboard.html`;
                mobileLogin.removeAttribute("data-i18n");

                const logoutLi = document.createElement("li");
                logoutLi.className = "nav-mobile-login";
                const logoutLink = document.createElement("a");
                logoutLink.href = "#";
                logoutLink.className = "login-btn";
                logoutLink.textContent = "Logout";
                logoutLink.addEventListener("click", doLogout);
                logoutLi.appendChild(logoutLink);
                mobileItem.insertAdjacentElement("afterend", logoutLi);
            }
        })
        .catch(() => resolveGatedLevelLinks(false));

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
