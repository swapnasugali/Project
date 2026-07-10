const user = sessionStorage.getItem("loggedInUser")
if (!user) {
    window.location.href = "../index.html";
}

document.getElementById("welcome").textContent = "Welcome! " + user;

function showDateTime() {
    const now = new Date();

    document.getElementById("dateTime").textContent =
        now.toLocaleDateString() + " | " + now.toLocaleTimeString();
}

function updateDashboard() {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const attendance = JSON.parse(localStorage.getItem("attendance")) || [];

    const today = new Date().toISOString().split("T")[0];

    const todayAttendance = attendance.filter(function (item) {
        return item.date === today;
    });

    const present = todayAttendance.filter(item => item.status === "Present").length;
    const absent = todayAttendance.filter(item => item.status === "Absent").length;

    const departments = [...new Set(students.map(item => item.department))];

    document.getElementById("totalStudents").textContent = students.length;
    document.getElementById("totalDepartments").textContent = departments.length;
    document.getElementById("presentStudents").textContent = present;
    document.getElementById("absentStudents").textContent = absent;
}

showDateTime();
updateDashboard();

setInterval(showDateTime, 1000);

document.getElementById("logoutButton").addEventListener("click", function () {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "../index.html";
});

