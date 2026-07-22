/* ==========================================
   CONTACT FORM — validation + submission
   ==========================================
   Submissions are stored for real in the
   messages table (via POST /api/contact) and
   show up in the admin panel's Messages inbox.
========================================== */

const FORM_ENDPOINT = "/api/contact";

document.addEventListener("DOMContentLoaded", function () {

    // Reflects the admin panel's Site Info / social link settings (falls
    // back to the hardcoded markup already on the page if the API isn't
    // reachable, e.g. this page opened via file:// without the server).
    fetch("/api/settings")
        .then((res) => (res.ok ? res.json() : null))
        .then((settings) => {
            if (!settings) return;

            if (settings.contactEmail) {
                const emailEl = document.getElementById("contactEmailDisplay");
                if (emailEl) emailEl.textContent = settings.contactEmail;
            }

            const social = settings.social || {};
            if (social.facebook) document.getElementById("contactSocialFacebook")?.setAttribute("href", social.facebook);
            if (social.instagram) document.getElementById("contactSocialInstagram")?.setAttribute("href", social.instagram);
            if (social.youtube) document.getElementById("contactSocialYoutube")?.setAttribute("href", social.youtube);
            if (social.github) document.getElementById("contactSocialGithub")?.setAttribute("href", social.github);
        })
        .catch(() => {});

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
                credentials: "same-origin",
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
