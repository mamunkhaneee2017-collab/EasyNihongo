/* ==========================================
   SHARED FOOTER
   Single source of truth for the public-site
   footer. See components/header.js for why
   this is plain JS injection instead of fetch(),
   and for how it detects root vs pages/ depth.

   Usage:
     <div id="site-footer"></div>
     <script src="components/footer.js"></script>       (from the site root)
     <script src="../components/footer.js"></script>     (from pages/*.html)
========================================== */

(function () {

    // See components/header.js for why this reads the actual browser URL
    // rather than this script's own src path (fixes footer links on the
    // 404 fallback page, which is served from root for any unmatched URL).
    const inPagesFolder = window.location.pathname.includes("/pages/");

    const toRoot = inPagesFolder ? "../" : "";
    const toPages = inPagesFolder ? "" : "pages/";

    const mount = document.getElementById("site-footer");
    if (!mount) return;

    mount.innerHTML = `
<footer class="footer">
    <div class="container footer-container">

        <div class="footer-column">
            <h2 class="footer-logo" id="footerLogoText">Easy<span>Nihongo</span></h2>
            <p data-i18n="footer.tagline">
                Structured Japanese learning from N5 to N1 —
                lessons, vocabulary, grammar, Kanji and JLPT
                practice in one place.
            </p>
        </div>

        <div class="footer-column">
            <h3 data-i18n="footer.quicklinks">Quick Links</h3>
            <ul>
                <li><a href="${toRoot}index.html" data-i18n="nav.home">Home</a></li>
                <li><a href="${toPages}courses.html" data-i18n="nav.courses">Courses</a></li>
                <li><a href="${toPages}vocabulary.html" data-i18n="nav.vocabulary">Vocabulary</a></li>
                <li><a href="${toPages}grammar.html" data-i18n="nav.grammar">Grammar</a></li>
                <li><a href="${toPages}kanji.html" data-i18n="nav.kanji">Kanji</a></li>
            </ul>
        </div>

        <div class="footer-column">
            <h3 data-i18n="footer.jlpt">JLPT</h3>
            <ul>
                <li><a href="${toPages}courses.html">N5</a></li>
                <li><a href="${toPages}courses.html">N4</a></li>
                <li><a href="${toPages}courses.html">N3</a></li>
                <li><a href="${toPages}courses.html">N2</a></li>
                <li><a href="${toPages}courses.html">N1</a></li>
            </ul>
        </div>

        <div class="footer-column">
            <a href="${toPages}contact.html" class="contact-btn">
                <span data-i18n="footer.contact">Contact</span> <i class="fa-solid fa-envelope"></i>
            </a>

            <p>Email:</p>
            <p id="footerEmail">info@easynihongo.com</p>

            <br>
            <h4 data-i18n="footer.followUs">Follow us for more updates</h4>

            <div class="social-icons">
                <a id="socialFacebook" href="https://facebook.com/mamun.999.690" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
                <a id="socialInstagram" href="https://instagram.com/mamun.999.690" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                <a id="socialYoutube" href="https://www.youtube.com/channel/UCQnO_ceT5HFF9UtRC266Ykg" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
                <a id="socialGithub" href="https://github.com/mamunkhaneee2017-collab" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            </div>
        </div>

    </div>

    <div class="footer-bottom">
        &copy; 2026 Easy Nihongo. All Rights Reserved.
    </div>
</footer>

<button id="topBtn" title="Back to top" aria-label="Back to top">
    <i class="fa-solid fa-arrow-up"></i>
</button>`;

    // Reflects the admin panel's Site Info / social link settings (falls
    // back to the hardcoded markup above if the API isn't reachable, e.g.
    // a page opened via file:// without the server running).
    fetch("/api/settings")
        .then((res) => (res.ok ? res.json() : null))
        .then((settings) => {
            if (!settings) return;

            if (settings.siteName) {
                const logoText = document.getElementById("footerLogoText");
                if (logoText) {
                    const words = settings.siteName.trim().split(" ");
                    const lastWord = words.pop();
                    logoText.innerHTML = `${words.join(" ")}<span>${lastWord}</span>`;
                }
            }

            if (settings.contactEmail) {
                const emailEl = document.getElementById("footerEmail");
                if (emailEl) emailEl.textContent = settings.contactEmail;
            }

            const social = settings.social || {};
            if (social.facebook) document.getElementById("socialFacebook")?.setAttribute("href", social.facebook);
            if (social.instagram) document.getElementById("socialInstagram")?.setAttribute("href", social.instagram);
            if (social.youtube) document.getElementById("socialYoutube")?.setAttribute("href", social.youtube);
            if (social.github) document.getElementById("socialGithub")?.setAttribute("href", social.github);
        })
        .catch(() => {});

})();
