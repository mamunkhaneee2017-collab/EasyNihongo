/* ==========================================
        SETTINGS PAGE
   Theme, language and font size stay pure
   client-side localStorage preferences (already
   applied site-wide by js/utils.js). Target JLPT
   level and daily study goal are real per-user
   settings, persisted via PATCH /api/users/me.
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

/* ---------------- Learning preferences (real, server-backed) ---------------- */

const saveSettingsBtn = document.getElementById("saveSettingsBtn");
const settingsStatus = document.getElementById("settingsStatus");
const targetLevel = document.getElementById("targetLevel");
const dailyGoal = document.getElementById("dailyGoal");

fetch("/api/users/me", { credentials: "same-origin" })
    .then((res) => (res.ok ? res.json() : null))
    .then((data) => {
        if (!data) return;
        if (targetLevel && data.user.targetLevel) targetLevel.value = data.user.targetLevel;
        if (dailyGoal && data.user.dailyGoalMinutes) dailyGoal.value = data.user.dailyGoalMinutes;
    })
    .catch(() => {});

saveSettingsBtn.addEventListener("click", () => {

    if (languageSelect) localStorage.setItem("lang", languageSelect.value);
    localStorage.setItem("fontSize", selectedFontSize);

    if (window.EasyNihongoI18n && languageSelect) {
        window.EasyNihongoI18n.setLanguage(languageSelect.value);
    }

    const formData = new FormData();
    if (targetLevel) formData.append("targetLevel", targetLevel.value);
    if (dailyGoal) formData.append("dailyGoalMinutes", dailyGoal.value);

    saveSettingsBtn.disabled = true;

    fetch("/api/users/me", {
        method: "PATCH",
        credentials: "same-origin",
        body: formData
    })
        .then(async (res) => {
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Could not save settings.");
            settingsStatus.textContent = "Settings saved.";
            settingsStatus.className = "form-status success";
        })
        .catch((err) => {
            settingsStatus.textContent = err.message;
            settingsStatus.className = "form-status error";
        })
        .finally(() => {
            saveSettingsBtn.disabled = false;
        });

});

/* ---------------- Change Password (real, server-backed) ---------------- */

const changePasswordBtn = document.getElementById("changePasswordBtn");
const passwordChangeStatus = document.getElementById("passwordChangeStatus");
const currentPasswordInput = document.getElementById("currentPassword");
const newPasswordInput = document.getElementById("newPassword");
const confirmNewPasswordInput = document.getElementById("confirmNewPassword");

if (changePasswordBtn) {

    changePasswordBtn.addEventListener("click", () => {

        const currentPassword = currentPasswordInput.value;
        const newPassword = newPasswordInput.value;
        const confirmNewPassword = confirmNewPasswordInput.value;

        passwordChangeStatus.textContent = "";
        passwordChangeStatus.className = "form-status";

        if (!currentPassword || !newPassword || !confirmNewPassword) {
            passwordChangeStatus.textContent = "Please fill in all three password fields.";
            passwordChangeStatus.className = "form-status error";
            return;
        }

        if (newPassword.length < 8) {
            passwordChangeStatus.textContent = "New password must be at least 8 characters.";
            passwordChangeStatus.className = "form-status error";
            return;
        }

        if (newPassword !== confirmNewPassword) {
            passwordChangeStatus.textContent = "New password and confirmation do not match.";
            passwordChangeStatus.className = "form-status error";
            return;
        }

        const formData = new FormData();
        formData.append("currentPassword", currentPassword);
        formData.append("newPassword", newPassword);

        changePasswordBtn.disabled = true;

        fetch("/api/users/me", {
            method: "PATCH",
            credentials: "same-origin",
            body: formData
        })
            .then(async (res) => {
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Could not change password.");

                passwordChangeStatus.textContent = "Password changed.";
                passwordChangeStatus.className = "form-status success";
                currentPasswordInput.value = "";
                newPasswordInput.value = "";
                confirmNewPasswordInput.value = "";
            })
            .catch((err) => {
                passwordChangeStatus.textContent = err.message;
                passwordChangeStatus.className = "form-status error";
            })
            .finally(() => {
                changePasswordBtn.disabled = false;
            });

    });

}
