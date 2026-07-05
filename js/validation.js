function validateLogin(username, password) {
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    usernameError.textContent = "";
    passwordError.textContent = "";

    if (username === "") {
        usernameError.textContent = "Username is required";
        return false;
    }

    if (password === "") {
        passwordError.textContent = "Password is required";
        return false;
    }

    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        return false;
    }

    return true;
}