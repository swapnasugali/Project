function saveRememberedUsername(username) {
    localStorage.setItem("rememberedUsername", username);
}

function getRememberedUsername() {
    return localStorage.getItem("rememberedUsername");
}

function removeRememberedUsername() {
    localStorage.removeItem("rememberedUsername");
}

function saveLoggedInUser(username) {
    sessionStorage.setItem("loggedInUser", username);
}