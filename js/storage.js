function saveUsername(username) {
    localStorage.setItem("rememberedUsername", username);
}

function getUsername() {
    return localStorage.getItem("rememberedUsername");
}

function removeUsername() {
    localStorage.removeItem("rememberedUsername");
}