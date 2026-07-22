/* ==========================
    SHOW PASSWORD
========================== */

const password = document.getElementById("password");

const togglePassword =
document.getElementById("togglePassword");

togglePassword.addEventListener("click",()=>{

    if(password.type==="password"){

        password.type="text";

        togglePassword.classList.remove("fa-eye");

        togglePassword.classList.add("fa-eye-slash");

    }else{

        password.type="password";

        togglePassword.classList.remove("fa-eye-slash");

        togglePassword.classList.add("fa-eye");

    }

});
/* ==========================
        LOGIN FORM
========================== */

const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const rememberMe = document.getElementById("rememberMe");
const loginBtn = document.getElementById("loginBtn");

loginForm.addEventListener("submit",function(e){

    e.preventDefault();

    const emailValue = email.value.trim();

    const passwordValue = password.value.trim();

    if(emailValue==="" || passwordValue===""){

        alert("Please fill in all fields.");

        return;

    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(emailValue)){

        alert("Please enter a valid email.");

        return;

    }



    /* ==========================
        REMEMBER ME
========================== */

if(rememberMe.checked){

    localStorage.setItem("rememberEmail", emailValue);

}else{

    localStorage.removeItem("rememberEmail");

}

/* ==========================
        LOADING BUTTON
========================== */

loginBtn.disabled = true;

loginBtn.innerHTML = `
<i class="fa-solid fa-spinner fa-spin"></i>
Logging in...
`;

/* ==========================
        REAL LOGIN
========================== */

fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify({ email: emailValue, password: passwordValue })
})
    .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Login failed.");
        window.location.href = "dashboard.html";
    })
    .catch((err) => {
        alert(err.message);
        loginBtn.disabled = false;
        loginBtn.innerHTML = "Login";
    });

});

/* ==========================
    AUTO FILL REMEMBERED EMAIL
========================== */

const savedEmail = localStorage.getItem("rememberEmail");

if(savedEmail){

    email.value = savedEmail;

    rememberMe.checked = true;

}

/* ==========================
    SOCIAL LOGIN
========================== */

document.querySelector(".google-btn")?.addEventListener("click", () => {
    window.location.href = "/api/auth/google";
});

document.querySelector(".github-btn")?.addEventListener("click", () => {
    window.location.href = "/api/auth/github";
});

const oauthError = new URLSearchParams(window.location.search).get("error");
if (oauthError === "oauth_not_configured") {
    alert("Social login isn't set up on this server yet — please log in with email and password.");
} else if (oauthError === "oauth") {
    alert("Social login failed. Please try again or use email and password.");
}