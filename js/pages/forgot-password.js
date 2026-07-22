/* ==========================================
        FORGOT PASSWORD FORM
   No backend exists yet, so this only
   validates the email and shows a confirmation
   message — it does not actually send an email.
========================================== */

const forgotPasswordForm = document.getElementById("forgotPasswordForm");
const email = document.getElementById("email");
const formStatus = document.getElementById("formStatus");
const resetBtn = document.getElementById("resetBtn");

forgotPasswordForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        formStatus.textContent = "Please enter a valid email address.";
        formStatus.className = "form-status error";
        return;
    }

    resetBtn.disabled = true;
    formStatus.textContent = `If an account exists for ${email.value.trim()}, a reset link has been sent.`;
    formStatus.className = "form-status success";
    forgotPasswordForm.reset();

});
