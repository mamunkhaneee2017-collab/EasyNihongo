/* ==========================================
        SETTINGS PAGE
   No backend exists yet, so every preference
   here is saved to localStorage on this device
   only. Dark mode and font size already apply
   site-wide (read by js/utils.js on every page).
========================================== */

/* ---------------- Mobile sidebar ---------------- */

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});

/* ---------------- Dark mode (button + toggle switch) ---------------- */

const darkModeBtn = document.getElementById("darkModeBtn");
const themeToggle = document.getElementById("themeToggle");

function applyTheme(isDark) {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (themeToggle) themeToggle.checked = isDark;
}

applyTheme(localStorage.getItem("theme") === "dark");

darkModeBtn.addEventListener("click", () => {
    applyTheme(!document.body.classList.contains("dark"));
});

if (themeToggle) {
    themeToggle.addEventListener("change", () => {
        applyTheme(themeToggle.checked);
    });
}

/* ---------------- Language ---------------- */

const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {
    languageSelect.value = localStorage.getItem("lang") || "en";
}

/* ---------------- Font size ---------------- */

const fontSizeButtons = document.querySelectorAll(".font-size-btn");
let selectedFontSize = localStorage.getItem("fontSize") || "normal";

function markActiveFontSizeButton() {
    fontSizeButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.size === selectedFontSize);
    });
}

markActiveFontSizeButton();

fontSizeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        selectedFontSize = btn.dataset.size;
        markActiveFontSizeButton();

        document.documentElement.classList.remove("font-small", "font-large");
        if (selectedFontSize !== "normal") {
            document.documentElement.classList.add(`font-${selectedFontSize}`);
        }
    });
});

/* ---------------- Save ---------------- */

const saveSettingsBtn = document.getElementById("saveSettingsBtn");
const settingsStatus = document.getElementById("settingsStatus");
const targetLevel = document.getElementById("targetLevel");
const dailyGoal = document.getElementById("dailyGoal");

saveSettingsBtn.addEventListener("click", () => {

    if (languageSelect) localStorage.setItem("lang", languageSelect.value);
    localStorage.setItem("fontSize", selectedFontSize);
    if (targetLevel) localStorage.setItem("targetLevel", targetLevel.value);
    if (dailyGoal) localStorage.setItem("dailyGoal", dailyGoal.value);

    if (window.EasyNihongoI18n && languageSelect) {
        window.EasyNihongoI18n.setLanguage(languageSelect.value);
    }

    settingsStatus.textContent = "Settings saved on this device.";
    settingsStatus.className = "form-status success";

});
