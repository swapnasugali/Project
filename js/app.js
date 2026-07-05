const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const rememberMe = document.getElementById("rememberMe");
const showPassword = document.getElementById("showPassword");

const savedUsername = getUsername();

if (savedUsername) {
    username.value = savedUsername;
    rememberMe.checked = true;
}

showPassword.addEventListener("click", function () {
    const icon = showPassword.querySelector("i");

    if (password.type === "password") {
        password.type = "text";
        icon.className = "fa-solid fa-eye";
    } else {
        password.type = "password";
        icon.className = "fa-solid fa-eye-slash";
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const user = username.value.trim();
    const pass = password.value.trim();

    if (!validateLogin(user, pass)) {
        return;
    }

    if (user === "admin" && pass === "admin123") {
        sessionStorage.setItem("loggedInUser", user);

        if (rememberMe.checked) {
            saveUsername(user);
        } else {
            removeUsername();
        }

        window.location.href = "dashboard.html";
    } else {
        document.getElementById("passwordError").textContent =
            "Wrong username or password";
    }
});