const user = sessionStorage.getItem("loggedInUser");

if (!user) {
    window.location.href = "index.html";
}

document.getElementById("welcome").textContent = "Welcome! " + user;

function showDateTime() {
    const now = new Date();
    document.getElementById("dateTime").textContent =
        now.toLocaleDateString() + " | " + now.toLocaleTimeString();
}

showDateTime();

setInterval(showDateTime, 1000);

document.getElementById("logoutButton").addEventListener("click", function () {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
});