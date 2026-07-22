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

   setTimeout(()=>{

    window.location.href="dashboard.html";

},1500);

});

/* ==========================
    AUTO FILL REMEMBERED EMAIL
========================== */

const savedEmail = localStorage.getItem("rememberEmail");

if(savedEmail){

    email.value = savedEmail;

    rememberMe.checked = true;

}