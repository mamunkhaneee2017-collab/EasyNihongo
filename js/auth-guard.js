/* ==========================================
   EASY NIHONGO — AUTH GUARD
   Include on any page that requires a logged-in
   student (dashboard.html, profile.html,
   settings.html). Redirects to login.html if
   the session cookie set by /api/auth/login
   isn't present/valid.

   Also exposes window.EasyNihongoUser once the
   check resolves, so page scripts (dashboard.js,
   settings.js, profile.html's inline script) can
   read the current user without a second fetch.
========================================== */

(function () {

    const inPagesFolder = /\/pages\//.test(location.pathname);
    const loginUrl = inPagesFolder ? "login.html" : "pages/login.html";

    window.EasyNihongoAuthReady = fetch("/api/auth/me", { credentials: "same-origin" })
        .then((res) => {
            if (!res.ok) throw new Error("Not logged in");
            return res.json();
        })
        .then((data) => {
            window.EasyNihongoUser = data.user;
            return data.user;
        })
        .catch(() => {
            window.location.href = loginUrl;
            return null;
        });

    document.addEventListener("DOMContentLoaded", () => {
        const logoutLink = document.getElementById("logoutLink");
        if (!logoutLink) return;

        logoutLink.addEventListener("click", (e) => {
            e.preventDefault();
            fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" })
                .finally(() => { window.location.href = loginUrl; });
        });
    });

})();
