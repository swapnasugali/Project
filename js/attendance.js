const user = sessionStorage.getItem("loggedInUser");

if (!user) {
    window.location.href = "login.html";
}

const attendanceDate = document.getElementById("attendanceDate");
const loadButton = document.getElementById("loadButton");
const saveButton = document.getElementById("saveButton");
const tableBody = document.getElementById("attendanceTableBody");
const message = document.getElementById("message");

function getStudents() {
    return JSON.parse(localStorage.getItem("students")) || [];
}

function getAttendance() {
    return JSON.parse(localStorage.getItem("attendance")) || [];
}

function showStudents() {
    const selectedDate = attendanceDate.value;

    if (selectedDate === "") {
        message.style.color = "red";
        message.textContent = "Please select a date";
        return;
    }

    const students = getStudents();
    const attendance = getAttendance();

    tableBody.innerHTML = "";
    message.textContent = "";

    if (students.length === 0) {
        message.style.color = "red";
        message.textContent = "No students found. Add students first.";
        return;
    }

    students.forEach(function (student) {
        const oldAttendance = attendance.find(function (item) {
            return item.studentId === student.studentId &&
                   item.date === selectedDate;
        });

        let status = "Present";

        if (oldAttendance) {
            status = oldAttendance.status;
        }

        tableBody.innerHTML += `
            <tr>
                <td>${student.studentId}</td>
                <td>${student.fullName}</td>
                <td>${student.department}</td>
                <td>
                    <select class="status" data-id="${student.studentId}">
                        <option value="Present" ${status === "Present" ? "selected" : ""}>
                            Present
                        </option>
                        <option value="Absent" ${status === "Absent" ? "selected" : ""}>
                            Absent
                        </option>
                    </select>
                </td>
            </tr>
        `;
    });
}

function saveAttendance() {
    const selectedDate = attendanceDate.value;

    if (selectedDate === "") {
        message.style.color = "red";
        message.textContent = "Please select a date";
        return;
    }

    const statusInputs = document.querySelectorAll(".status");

    if (statusInputs.length === 0) {
        message.style.color = "red";
        message.textContent = "Load students first";
        return;
    }

    let attendance = getAttendance();

    statusInputs.forEach(function (input) {
        const studentId = input.dataset.id;
        const status = input.value;

        attendance = attendance.filter(function (item) {
            return !(item.studentId === studentId && item.date === selectedDate);
        });

        attendance.push({
            studentId: studentId,
            date: selectedDate,
            status: status
        });
    });

    localStorage.setItem("attendance", JSON.stringify(attendance));

    message.style.color = "green";
    message.textContent = "Attendance saved successfully";
}

loadButton.addEventListener("click", showStudents);

saveButton.addEventListener("click", saveAttendance);

document.getElementById("logoutButton").addEventListener("click", function () {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
});