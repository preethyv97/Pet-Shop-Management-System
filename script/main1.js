let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");

btnLogin.onclick = function() {
    signIn.classList.add("inActive");
    signUp.classList.add("Active");
}

btnSignUp.onclick = function() {
    signIn.classList.remove("inActive");
    signUp.classList.remove("Active");
}