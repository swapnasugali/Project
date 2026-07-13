// // Check Login
// const user = sessionStorage.getItem("loggedInUser");

// if (!user) {
//     window.location.href = "../index.html";
// }

// document.getElementById("welcome").textContent = "Welcome, " + user;

// // Date & Time
// function showDateTime() {

//     const now = new Date();

//     document.getElementById("dateTime").textContent =
//         now.toLocaleDateString() + " | " + now.toLocaleTimeString();

// }

// // Dashboard
// function updateDashboard() {

//     const students = JSON.parse(localStorage.getItem("students")) || [];

//     const attendance = JSON.parse(localStorage.getItem("attendanceRecords")) || [];

//     const marks = JSON.parse(localStorage.getItem("marks")) || [];

//     const today = new Date().toISOString().split("T")[0];

//     // Total Students
//     document.getElementById("totalStudents").textContent = students.length;

//     // Total Departments
//     const departments = [...new Set(students.map(student => student.department))];

//     document.getElementById("totalDepartments").textContent = departments.length;

//     // Present Students
//     const present = attendance.filter(function(record){

//         return record.date === today &&
//                record.status === "Present";

//     }).length;

//     // Absent Students
//     const absent = attendance.filter(function(record){

//         return record.date === today &&
//                record.status === "Absent";

//     }).length;

//     document.getElementById("presentStudents").textContent = present;

//     document.getElementById("absentStudents").textContent = absent;

//     // Highest Scorer

//     if(marks.length > 0){

//         marks.sort(function(a,b){

//             return b.total - a.total;

//         });

//         document.getElementById("highestScorer").textContent =
//         marks[0].fullName + " (" + marks[0].total + ")";

//     }
//     else{

//         document.getElementById("highestScorer").textContent="-";

//     }

//     // Recent Students

//     const recent = document.getElementById("recentStudents");

//     recent.innerHTML="";

//     if(students.length==0){

//         recent.innerHTML="<p>No students added yet.</p>";

//     }
//     else{

//         students.slice(-5).reverse().forEach(function(student){

//             recent.innerHTML +=
//             `
//             <p>
//                 <b>${student.studentId}</b> -
//                 ${student.fullName}
//                 (${student.department})
//             </p>
//             `;

//         });

//     }

// }

// // Load Dashboard
// showDateTime();
// updateDashboard();

// setInterval(showDateTime,1000);

// // Logout

// document.getElementById("logoutButton").addEventListener("click",function(){

//     sessionStorage.removeItem("loggedInUser");

//     window.location.href="../index.html";

// });




// ================= LOGIN =================

const user = sessionStorage.getItem("loggedInUser");

if (!user) {
    window.location.href = "../index.html";
}

document.getElementById("welcome").textContent = "Welcome, " + user;

// ================= DATE & TIME =================

function showDateTime() {

    const now = new Date();

    document.getElementById("dateTime").textContent =
        now.toLocaleDateString() + " | " +
        now.toLocaleTimeString();
}

// ================= DASHBOARD =================

function updateDashboard() {

    const students =
        JSON.parse(localStorage.getItem("students")) || [];

    const attendance =
        JSON.parse(localStorage.getItem("attendanceRecords")) || [];

    const marks =
        JSON.parse(localStorage.getItem("marksRecords")) || [];

    const today = new Date().toISOString().split("T")[0];

    // Total Students

    document.getElementById("totalStudents").textContent =
        students.length;

    // Total Departments

    const departments = [...new Set(

        students
            .map(student => student.department)
            .filter(dept => dept)

    )];

    document.getElementById("totalDepartments").textContent =
        departments.length;

    // Present Students

    const present = attendance.filter(record =>

        record.date === today &&
        record.status === "Present"

    ).length;

    document.getElementById("presentStudents").textContent =
        present;

    // Absent Students

    const absent = attendance.filter(record =>

        record.date === today &&
        record.status === "Absent"

    ).length;

    document.getElementById("absentStudents").textContent =
        absent;

    // Highest Scorer

    const highestText =
        document.getElementById("highestScorer");

    if (marks.length > 0) {

        let highest = marks[0];

        marks.forEach(function (item) {

            if (item.total > highest.total) {
                highest = item;
            }

        });

        const student = students.find(function (s) {

            return String(s.studentId) ===
                String(highest.studentId);

        });

        if (student) {

            highestText.textContent =
                student.fullName +
                " (" +
                highest.total +
                "/500)";

        } else {

            highestText.textContent =
                highest.studentId +
                " (" +
                highest.total +
                "/500)";
        }

    } else {

        highestText.textContent = "-";

    }

    // Recent Students

    const recent =
        document.getElementById("recentStudents");

    recent.innerHTML = "";

    if (students.length === 0) {

        recent.innerHTML =

            `<tr>
                <td colspan="3">
                    No students added.
                </td>
            </tr>`;

    } else {

        students
            .slice(-5)
            .reverse()
            .forEach(function (student) {

                recent.innerHTML +=

                    `<tr>

                        <td>${student.studentId}</td>

                        <td>${student.fullName}</td>

                        <td>${student.department}</td>

                    </tr>`;

            });

    }

}

// ================= LOAD =================

showDateTime();

updateDashboard();

setInterval(showDateTime, 1000);

// ================= LOGOUT =================

document
.getElementById("logoutButton")
.addEventListener("click", function () {

    sessionStorage.removeItem("loggedInUser");

    window.location.href = "../index.html";

});