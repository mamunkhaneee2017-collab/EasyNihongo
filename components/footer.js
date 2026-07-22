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

    const scriptSrc = (document.currentScript && document.currentScript.getAttribute("src")) || "";
    const inPagesFolder = scriptSrc.startsWith("../");

    const toRoot = inPagesFolder ? "../" : "";
    const toPages = inPagesFolder ? "" : "pages/";

    const mount = document.getElementById("site-footer");
    if (!mount) return;

    mount.innerHTML = `
<footer class="footer">
    <div class="container footer-container">

        <div class="footer-column">
            <h2 class="footer-logo">Easy<span>Nihongo</span></h2>
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
            <p>info@easynihongo.com</p>

            <br>
            <h4 data-i18n="footer.followUs">Follow us for more updates</h4>

            <div class="social-icons">
                <a href="https://facebook.com/mamun.999.690" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
                <a href="https://instagram.com/mamun.999.690" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/channel/UCQnO_ceT5HFF9UtRC266Ykg" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
                <a href="https://github.com/mamunkhaneee2017-collab" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
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

})();
