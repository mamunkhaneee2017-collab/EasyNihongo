// ==========================================
// Easy Nihongo
// Register Page JavaScript
// ==========================================

// ---------- Elements ----------

const registerForm = document.getElementById("registerForm");

const fullName = document.getElementById("fullName");

const email = document.getElementById("email");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");

const country = document.getElementById("country");

const currentLevel = document.getElementById("currentLevel");

const goalLevel = document.getElementById("goalLevel");

const terms = document.getElementById("terms");

const registerBtn = registerForm.querySelector('button[type="submit"]');


// ==========================================
// PASSWORD SHOW / HIDE
// ==========================================

const togglePassword = document.getElementById("togglePassword");

const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

if(togglePassword){

togglePassword.addEventListener("click",()=>{

password.type=password.type==="password"
?"text"
:"password";

togglePassword.classList.toggle("fa-eye");

togglePassword.classList.toggle("fa-eye-slash");

});

}

if(toggleConfirmPassword){

toggleConfirmPassword.addEventListener("click",()=>{

confirmPassword.type=confirmPassword.type==="password"
?"text"
:"password";

toggleConfirmPassword.classList.toggle("fa-eye");

toggleConfirmPassword.classList.toggle("fa-eye-slash");

});

}


// ==========================================
// REMOVE OLD ERROR
// ==========================================

function clearErrors(){

document.querySelectorAll(".error-message").forEach(error=>{

error.remove();

});

}


// ==========================================
// SHOW ERROR
// ==========================================

function showError(input,message){

const oldError=input.parentElement.querySelector(".error-message");

if(oldError){

oldError.remove();

}

const error=document.createElement("small");

error.className="error-message js-error-message";

error.innerText=message;

input.parentElement.appendChild(error);

}
// ==========================================
// EMAIL VALIDATION
// ==========================================

function isValidEmail(email){

    const emailPattern =

    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}

// ==========================================
// PASSWORD STRENGTH
// ==========================================

function isStrongPassword(password){

    const passwordPattern =

    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    return passwordPattern.test(password);

}
// ==========================================
// REGISTER FORM VALIDATION
// ==========================================

registerForm.addEventListener("submit", function(e){

    e.preventDefault();

    // Remove Previous Errors

    clearErrors();

    let isValid = true;

    // ==========================
    // Full Name
    // ==========================

    if(fullName.value.trim()===""){

        showError(

            fullName,

            "Full name is required."

        );

        isValid = false;

    }

// ==========================
// Email
// ==========================

if(email.value.trim()===""){

    showError(

        email,

        "Email is required."

    );

    isValid=false;

}

else if(!isValidEmail(email.value.trim())){

    showError(

        email,

        "Please enter a valid email."

    );

    isValid=false;

}

    // ==========================
    // Password
    // ==========================

    if(password.value===""){

        showError(

            password,

            "Password is required."

        );

        isValid = false;

    }

else if(!isStrongPassword(password.value)){

    showError(

        password,

        "Password must contain uppercase, lowercase, number and special character."

    );

    isValid=false;

}

    // ==========================
    // Confirm Password
    // ==========================

    if(confirmPassword.value===""){

        showError(

            confirmPassword,

            "Please confirm your password."

        );

        isValid = false;

    }

    else if(password.value!==confirmPassword.value){

        showError(

            confirmPassword,

            "Passwords do not match."

        );

        isValid = false;

    }

    // ==========================
    // Country
    // ==========================

    if(country.value===""){

        showError(

            country,

            "Please select your country."

        );

        isValid = false;

    }

    // ==========================
    // Terms
    // ==========================

    if(!terms.checked){

        alert("Please accept the Terms & Conditions.");

        isValid = false;

    }

    // ==========================
    // Submit to server
    // ==========================

    if(isValid){

        registerBtn.disabled = true;
        const originalBtnHtml = registerBtn.innerHTML;
        registerBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating account...';

        fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin",
            body: JSON.stringify({
                fullName: fullName.value.trim(),
                email: email.value.trim(),
                password: password.value,
                country: country.value,
                currentLevel: currentLevel ? currentLevel.value : "",
                goalLevel: goalLevel ? goalLevel.value : ""
            })
        })
            .then(async (res) => {
                const data = await res.json();
                if(!res.ok) throw new Error(data.error || "Registration failed.");
                alert("🎉 Registration Successful! Please log in.");
                window.location.href = "login.html";
            })
            .catch((err) => {
                alert(err.message);
                registerBtn.disabled = false;
                registerBtn.innerHTML = originalBtnHtml;
            });

    }

});

// ==========================================
// SOCIAL LOGIN (also creates an account on first use)
// ==========================================

document.querySelector(".google-btn")?.addEventListener("click", () => {
    window.location.href = "/api/auth/google";
});

document.querySelector(".github-btn")?.addEventListener("click", () => {
    window.location.href = "/api/auth/github";
});