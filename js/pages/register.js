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

const terms = document.getElementById("terms");


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
    // Success
    // ==========================

    if(isValid){

        alert("🎉 Registration Successful!");

        registerForm.reset();

    }

});