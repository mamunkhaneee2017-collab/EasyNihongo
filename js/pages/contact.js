/* ==========================================
   CONTACT FORM — validation + submission
   ==========================================
   This form sends messages using Formspree
   (a free service that emails form submissions
   straight to your inbox, so you can reply to
   the person directly from Gmail).

   SETUP (one-time, takes 2 minutes):
   1. Go to https://formspree.io and sign up free.
   2. Create a new form, it will give you an endpoint
      like: https://formspree.io/f/abcdwxyz
   3. Replace FORM_ENDPOINT below with your real link.
   4. Every submission will land in your email inbox
      with the sender's name, Gmail, phone number and
      message — just hit "Reply" to answer them.

   Later, when your Spring Boot backend is ready, you
   can simply change FORM_ENDPOINT to your own API
   route (e.g. "/api/contact") and store messages in
   MySQL instead — the validation code below does not
   need to change.
========================================== */

const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    if (!form) return;

    const submitBtn = document.getElementById("submitBtn");
    const formStatus = document.getElementById("formStatus");

    const fields = {
        fullName: {
            el: document.getElementById("fullName"),
            errorEl: document.getElementById("fullNameError"),
            validate: (val) => {
                if (!val.trim()) return "Please enter your name.";
                if (val.trim().length < 2) return "Name looks too short.";
                return "";
            }
        },
        email: {
            el: document.getElementById("email"),
            errorEl: document.getElementById("emailError"),
            validate: (val) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!val.trim()) return "Please enter your Gmail address.";
                if (!emailRegex.test(val.trim())) return "Please enter a valid email address.";
                return "";
            }
        },
        phone: {
            el: document.getElementById("phone"),
            errorEl: document.getElementById("phoneError"),
            validate: (val) => {
                const phoneRegex = /^[0-9+\-\s()]{7,20}$/;
                if (!val.trim()) return "Please enter your phone number.";
                if (!phoneRegex.test(val.trim())) return "Please enter a valid phone number.";
                return "";
            }
        },
        subject: {
            el: document.getElementById("subject"),
            errorEl: document.getElementById("subjectError"),
            validate: (val) => {
                if (!val) return "Please choose a subject.";
                return "";
            }
        },
        message: {
            el: document.getElementById("message"),
            errorEl: document.getElementById("messageError"),
            validate: (val) => {
                if (!val.trim()) return "Please write your question or comment.";
                if (val.trim().length < 10) return "Please add a little more detail (10+ characters).";
                return "";
            }
        }
    };

    // Validate one field and show/hide its error
    function validateField(key) {
        const field = fields[key];
        const error = field.validate(field.el.value);

        if (error) {
            field.el.classList.add("invalid");
            field.errorEl.textContent = error;
        } else {
            field.el.classList.remove("invalid");
            field.errorEl.textContent = "";
        }

        return !error;
    }

    // Live validation as the user types / selects
    Object.keys(fields).forEach((key) => {
        const eventType = fields[key].el.tagName === "SELECT" ? "change" : "blur";
        fields[key].el.addEventListener(eventType, () => validateField(key));
        fields[key].el.addEventListener("input", () => {
            if (fields[key].el.classList.contains("invalid")) {
                validateField(key);
            }
        });
    });

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        // Validate every field, stop on first failure encountered
        let allValid = true;
        Object.keys(fields).forEach((key) => {
            const isValid = validateField(key);
            if (!isValid) allValid = false;
        });

        if (!allValid) {
            formStatus.textContent = "Please fix the highlighted fields.";
            formStatus.className = "form-status error";
            return;
        }

        // Build payload
        const payload = {
            name: fields.fullName.el.value.trim(),
            email: fields.email.el.value.trim(),
            phone: fields.phone.el.value.trim(),
            subject: fields.subject.el.value,
            message: fields.message.el.value.trim()
        };

        submitBtn.disabled = true;
        submitBtn.querySelector(".btn-text").textContent = "Sending...";
        formStatus.textContent = "";
        formStatus.className = "form-status";

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                formStatus.textContent = "Thank you! Your message has been sent — we'll reply to your Gmail soon.";
                formStatus.className = "form-status success";
                form.reset();
                Object.keys(fields).forEach((key) => {
                    fields[key].el.classList.remove("invalid");
                    fields[key].errorEl.textContent = "";
                });
            } else {
                throw new Error("Submission failed");
            }
        } catch (err) {
            formStatus.textContent = "Something went wrong. Please try again, or email us directly at info@easynihongo.com.";
            formStatus.className = "form-status error";
        } finally {
            submitBtn.disabled = false;
            submitBtn.querySelector(".btn-text").textContent = "Send Message";
        }
    });

});
