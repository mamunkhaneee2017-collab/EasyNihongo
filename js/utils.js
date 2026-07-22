/* ==========================================
   EASY NIHONGO — SHARED UTILITIES
   Single implementation of behavior that used
   to be copy-pasted (and sometimes missing)
   across page-specific files: dark mode,
   mobile menu, language switcher, back-to-top,
   counters, FAQ accordion, scroll-reveal and
   button ripple.

   Load this AFTER components/header.js and
   components/footer.js (so the elements it
   wires up already exist in the DOM), on
   every page.
========================================== */

(function () {

    /* ==========================================
       DARK MODE
    ========================================== */

    const darkBtn = document.getElementById("darkModeBtn");

    function setDarkIcon(isDark) {
        if (!darkBtn) return;
        darkBtn.innerHTML = isDark
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
    }

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
    setDarkIcon(document.body.classList.contains("dark"));

    if (darkBtn) {
        darkBtn.addEventListener("click", () => {
            const isDark = document.body.classList.toggle("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            setDarkIcon(isDark);
        });
    }

    /* ==========================================
       FONT SIZE PREFERENCE (set on the Settings page)
    ========================================== */

    const savedFontSize = localStorage.getItem("fontSize");
    if (savedFontSize && savedFontSize !== "normal") {
        document.documentElement.classList.add(`font-${savedFontSize}`);
    }

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    /* ==========================================
       LANGUAGE SWITCHER
       Persists the choice and applies translations
       via js/i18n.js if it's loaded on the page.
    ========================================== */

    const langBtn = document.getElementById("langBtn");
    const langMenu = document.getElementById("langMenu");
    const langLabel = document.getElementById("langLabel");

    const LANG_LABELS = { en: "EN", bn: "বাং" };

    function applyStoredLanguage() {
        const saved = localStorage.getItem("lang") || "en";
        if (langLabel) langLabel.textContent = LANG_LABELS[saved] || "EN";
        if (window.EasyNihongoI18n) {
            window.EasyNihongoI18n.setLanguage(saved);
        }
    }

    function closeLangMenu() {
        if (!langMenu) return;
        langMenu.hidden = true;
        if (langBtn) langBtn.setAttribute("aria-expanded", "false");
    }

    if (langBtn && langMenu) {

        langBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = !langMenu.hidden;
            closeCoursesDropdown();
            langMenu.hidden = isOpen;
            langBtn.setAttribute("aria-expanded", String(!isOpen));
        });

        langMenu.querySelectorAll("button[data-lang]").forEach((btn) => {
            btn.addEventListener("click", () => {
                const lang = btn.dataset.lang;
                localStorage.setItem("lang", lang);
                if (langLabel) langLabel.textContent = LANG_LABELS[lang] || lang.toUpperCase();
                if (window.EasyNihongoI18n) window.EasyNihongoI18n.setLanguage(lang);
                closeLangMenu();
            });
        });

        document.addEventListener("click", closeLangMenu);

        applyStoredLanguage();
    }

    /* ==========================================
       NAV "COURSES" DROPDOWN
       (Courses / Vocabulary / Grammar / Kanji)
    ========================================== */

    const coursesDropdownBtn = document.getElementById("coursesDropdownBtn");
    const coursesDropdownMenu = document.getElementById("coursesDropdownMenu");

    function closeCoursesDropdown() {
        if (!coursesDropdownMenu) return;
        coursesDropdownMenu.hidden = true;
        if (coursesDropdownBtn) coursesDropdownBtn.setAttribute("aria-expanded", "false");
    }

    if (coursesDropdownBtn && coursesDropdownMenu) {

        coursesDropdownBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = !coursesDropdownMenu.hidden;
            closeLangMenu();
            coursesDropdownMenu.hidden = isOpen;
            coursesDropdownBtn.setAttribute("aria-expanded", String(!isOpen));
        });

        document.addEventListener("click", closeCoursesDropdown);
    }

    /* ==========================================
       BACK TO TOP
    ========================================== */

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        window.addEventListener("scroll", () => {
            topBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* ==========================================
       ANIMATED COUNTERS
    ========================================== */

    document.querySelectorAll(".counter").forEach((counter) => {

        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText.replace(/[^\d]/g, "") || 0;
            const increment = Math.ceil(target / 60) || 1;

            if (current < target) {
                counter.innerText = Math.min(current + increment, target).toLocaleString();
                requestAnimationFrame(() => setTimeout(updateCounter, 15));
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        updateCounter();

    });

    /* ==========================================
       FAQ ACCORDION
    ========================================== */

    document.querySelectorAll(".faq-item").forEach((item) => {

        const question = item.querySelector(".faq-question");
        if (!question) return;

        question.setAttribute("role", "button");
        question.setAttribute("tabindex", "0");
        question.setAttribute("aria-expanded", "false");

        const toggle = () => {
            const isOpen = item.classList.toggle("active");
            question.setAttribute("aria-expanded", String(isOpen));
        };

        question.addEventListener("click", toggle);
        question.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle();
            }
        });

    });

    /* ==========================================
       SCROLL REVEAL
       Elements with class="reveal" and an optional
       data-anim (fade-up | scale) and data-delay
       (ms) fade/slide into place the first time
       they enter the viewport.
    ========================================== */

    const revealTargets = document.querySelectorAll(".reveal");

    if (revealTargets.length) {

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion || !("IntersectionObserver" in window)) {
            revealTargets.forEach((el) => el.classList.add("in-view"));
        } else {

            revealTargets.forEach((el) => {
                const delay = el.dataset.delay;
                if (delay) el.style.transitionDelay = `${delay}ms`;
            });

            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });

            revealTargets.forEach((el) => revealObserver.observe(el));

        }

    }

    /* ==========================================
       SERVICE WORKER (offline cache)
       Only registers over http(s) — browsers
       block service workers for pages opened
       directly via file://, which is how this
       project is tested by default.
    ========================================== */

    if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("sw.js").catch(() => {
                // Offline caching is a progressive enhancement — safe to ignore.
            });
        });
    }

    /* ==========================================
       BUTTON RIPPLE
    ========================================== */

    document.querySelectorAll(".btn-ripple").forEach((btn) => {

        btn.addEventListener("click", (e) => {

            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const circle = document.createElement("span");

            circle.classList.add("ripple-circle");
            circle.style.width = circle.style.height = `${size}px`;
            circle.style.left = `${e.clientX - rect.left - size / 2}px`;
            circle.style.top = `${e.clientY - rect.top - size / 2}px`;

            btn.appendChild(circle);
            circle.addEventListener("animationend", () => circle.remove());

        });

    });

})();
