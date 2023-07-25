const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "1234") {
        alert("You have successfully logged in.");
        location.reload();
        window.location.href = "index.html";
    } else {
        loginErrorMsg.style.opacity = 1;
        loginForm.reset(); // 입력된 내용 초기화
    }
});