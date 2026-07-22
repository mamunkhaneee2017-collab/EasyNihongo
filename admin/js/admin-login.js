/* ==========================================
        ADMIN LOGIN
   UI preview only — no real backend exists yet,
   so this checks against the demo credentials
   shown on the page itself and redirects to the
   admin dashboard on match.
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("adminLoginForm");
    const email = document.getElementById("adminEmail");
    const password = document.getElementById("adminPassword");
    const emailError = document.getElementById("adminEmailError");
    const passwordError = document.getElementById("adminPasswordError");
    const togglePassword = document.getElementById("togglePassword");
    const rememberMe = document.getElementById("rememberMe");

    const DEMO_EMAIL = "admin@easynihongo.com";
    const DEMO_PASSWORD = "admin123";

    togglePassword.addEventListener("click", () => {
        const isPassword = password.type === "password";
        password.type = isPassword ? "text" : "password";
        togglePassword.classList.toggle("fa-eye");
        togglePassword.classList.toggle("fa-eye-slash");
    });

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailError.textContent = "";
        passwordError.textContent = "";

        let isValid = true;

        if (email.value.trim() === "") {
            emailError.textContent = "Email is required.";
            isValid = false;
        }

        if (password.value === "") {
            passwordError.textContent = "Password is required.";
            isValid = false;
        }

        if (!isValid) return;

        if (email.value.trim() === DEMO_EMAIL && password.value === DEMO_PASSWORD) {

            if (rememberMe.checked) {
                localStorage.setItem("adminRememberEmail", email.value.trim());
            } else {
                localStorage.removeItem("adminRememberEmail");
            }

            sessionStorage.setItem("adminLoggedIn", "true");
            window.location.href = "index.html";
        } else {
            passwordError.textContent = "Incorrect email or password.";
        }

    });

    const savedEmail = localStorage.getItem("adminRememberEmail");
    if (savedEmail) {
        email.value = savedEmail;
        rememberMe.checked = true;
    }

});
