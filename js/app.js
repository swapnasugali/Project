const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const rememberMe = document.getElementById("rememberMe");
const showPassword = document.getElementById("showPassword");

const savedUsername = getRememberedUsername();

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

    const userValue = username.value.trim();
    const passwordValue = password.value.trim();

    const isValid = validateLogin(userValue, passwordValue);

    if (!isValid) {
        return;
    }

    if (userValue === "admin" && passwordValue === "admin123") {
        saveLoggedInUser(userValue);

        if (rememberMe.checked) {
            saveRememberedUsername(userValue);
        } else {
            removeRememberedUsername();
        }

        window.location.href = "Pages/dashboard.html";
    } else {
        document.getElementById("passwordError").textContent =
            "Wrong username or password";
    }
});






