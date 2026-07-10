const lightTheme = document.getElementById("lightTheme");
const darkTheme = document.getElementById("darkTheme");
const saveThemeButton = document.getElementById("saveThemeButton");

const profileForm = document.getElementById("profileForm");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");

const logoutButton = document.getElementById("logoutButton");
const logoutNowButton = document.getElementById("logoutNowButton");

const message = document.getElementById("message");

/* Apply theme */

function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        darkTheme.checked = true;
    } else {
        document.body.classList.remove("dark-mode");
        lightTheme.checked = true;
    }
}

/* Load saved theme */

function loadTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
}

/* Save selected theme */

saveThemeButton.addEventListener("click", function () {
    let selectedTheme = "light";

    if (darkTheme.checked) {
        selectedTheme = "dark";
    }

    localStorage.setItem("theme", selectedTheme);

    applyTheme(selectedTheme);

    message.style.color = "#15803d";
    message.textContent = selectedTheme + " mode saved successfully.";

    setTimeout(function () {
        message.textContent = "";
    }, 2500);
});

/* Load saved profile */

function loadProfile() {
    const profile = JSON.parse(localStorage.getItem("adminProfile")) || {};

    profileName.value = profile.name || "";
    profileEmail.value = profile.email || "";
}

/* Save profile */

profileForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = profileName.value.trim();
    const email = profileEmail.value.trim();

    if (name === "" || email === "") {
        message.style.color = "#dc2626";
        message.textContent = "Please enter name and email.";
        return;
    }

    const profileData = {
        name: name,
        email: email
    };

    localStorage.setItem("adminProfile", JSON.stringify(profileData));

    message.style.color = "#15803d";
    message.textContent = "Profile updated successfully.";

    setTimeout(function () {
        message.textContent = "";
    }, 2500);
});

/* Logout */

function logoutUser() {
    const confirmLogout = confirm("Do you want to logout?");

    if (confirmLogout) {
        sessionStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    }
}

logoutButton.addEventListener("click", logoutUser);
logoutNowButton.addEventListener("click", logoutUser);

/* Run functions */

loadTheme();
loadProfile();
