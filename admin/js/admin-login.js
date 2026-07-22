/* ==========================================
        ADMIN LOGIN
   Verifies against the real /api/auth/login
   endpoint (same one the student login page
   uses) and requires the account's role to be
   "admin" before granting access to index.html.
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("adminLoginForm");
    const email = document.getElementById("adminEmail");
    const password = document.getElementById("adminPassword");
    const emailError = document.getElementById("adminEmailError");
    const passwordError = document.getElementById("adminPasswordError");
    const togglePassword = document.getElementById("togglePassword");
    const rememberMe = document.getElementById("rememberMe");

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

        fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin",
            body: JSON.stringify({ email: email.value.trim(), password: password.value })
        })
            .then(async (res) => {
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Incorrect email or password.");
                if (data.user.role !== "admin") throw new Error("This account does not have admin access.");

                if (rememberMe.checked) {
                    localStorage.setItem("adminRememberEmail", email.value.trim());
                } else {
                    localStorage.removeItem("adminRememberEmail");
                }

                window.location.href = "index.html";
            })
            .catch((err) => {
                passwordError.textContent = err.message;
            });

    });

    const savedEmail = localStorage.getItem("adminRememberEmail");
    if (savedEmail) {
        email.value = savedEmail;
        rememberMe.checked = true;
    }

});
