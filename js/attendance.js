const user = sessionStorage.getItem("loggedInUser");

if (!user) {
    window.location.href = "../index.html";
}

const dateInput = document.getElementById("date");
const studentTable = document.getElementById("studentTable");

const totalStudentsText = document.getElementById("totalStudents");
const presentStudentsText = document.getElementById("presentStudents");
const absentStudentsText = document.getElementById("absentStudents");
const selectedDateText = document.getElementById("selectedDateText");

const historyBox = document.getElementById("historyBox");
const historyTitle = document.getElementById("historyTitle");
const historyTotal = document.getElementById("historyTotal");
const historyPresent = document.getElementById("historyPresent");
const historyAbsent = document.getElementById("historyAbsent");
const historyPercentage = document.getElementById("historyPercentage");
const historyData = document.getElementById("historyData");

dateInput.value = new Date().toISOString().split("T")[0];

function getStudents() {
    return JSON.parse(localStorage.getItem("students")) || [];
}

function getAttendanceRecords() {
    return JSON.parse(localStorage.getItem("attendanceRecords")) || [];
}

let records = getAttendanceRecords();

function getStudentId(student) {
    return student.studentId || student.id || student.rollNumber || "";
}

function getStudentName(student) {
    return student.fullName || student.name || "No Name";
}

function getDepartment(student) {
    return student.department || "Not Added";
}

function getPercentage(studentId, monthly) {
    let studentRecords = records.filter(function (record) {
        return String(record.studentId) === String(studentId);
    });

    if (monthly) {
        const selectedMonth = dateInput.value.slice(0, 7);

        studentRecords = studentRecords.filter(function (record) {
            return record.date.slice(0, 7) === selectedMonth;
        });
    }

    if (studentRecords.length === 0) {
        return 0;
    }

    const presentDays = studentRecords.filter(function (record) {
        return record.status === "Present";
    }).length;

    return Math.round((presentDays / studentRecords.length) * 100);
}

function updateCards() {
    const students = getStudents();
    const selectedDate = dateInput.value;

    const selectedDateRecords = records.filter(function (record) {
        return record.date === selectedDate;
    });

    const presentCount = selectedDateRecords.filter(function (record) {
        return record.status === "Present";
    }).length;

    const absentCount = selectedDateRecords.filter(function (record) {
        return record.status === "Absent";
    }).length;

    totalStudentsText.textContent = students.length;
    presentStudentsText.textContent = presentCount;
    absentStudentsText.textContent = absentCount;
    selectedDateText.textContent = selectedDate;
}

function showStudents() {
    const students = getStudents();

    studentTable.innerHTML = "";

    if (students.length === 0) {
        studentTable.innerHTML = `
            <tr>
                <td colspan="9">
                    No students found. Add students from Student Registration first.
                </td>
            </tr>
        `;

        updateCards();
        return;
    }

    students.forEach(function (student, index) {
        const studentId = getStudentId(student);
        const studentName = getStudentName(student);
        const department = getDepartment(student);

        const oldRecord = records.find(function (record) {
            return String(record.studentId) === String(studentId) &&
                record.date === dateInput.value;
        });

        const status = oldRecord ? oldRecord.status : "Present";

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${studentId}</td>
            <td>${studentName}</td>
            <td>${department}</td>

            <td class="present">
                <input type="radio"
                    name="attendance-${studentId}"
                    value="Present"
                    ${status === "Present" ? "checked" : ""}>
                Present
            </td>

            <td class="absent">
                <input type="radio"
                    name="attendance-${studentId}"
                    value="Absent"
                    ${status === "Absent" ? "checked" : ""}>
                Absent
            </td>

            <td>${getPercentage(studentId, false)}%</td>
            <td>${getPercentage(studentId, true)}%</td>

            <td>
                <button type="button" class="history-button">
                    View History
                </button>
            </td>
        `;

        row.querySelector(".history-button").addEventListener("click", function () {
            viewHistory(studentId, studentName);
        });

        studentTable.appendChild(row);
    });

    updateCards();
}

function allPresent() {
    const students = getStudents();

    students.forEach(function (student) {
        const studentId = getStudentId(student);

        const presentRadio = document.querySelector(
            `input[name="attendance-${studentId}"][value="Present"]`
        );

        if (presentRadio) {
            presentRadio.checked = true;
        }
    });
}

function saveAttendance() {
    const students = getStudents();

    if (students.length === 0) {
        alert("No students found. Add students first.");
        return;
    }

    students.forEach(function (student) {
        const studentId = getStudentId(student);

        if (!studentId) {
            return;
        }

        const selectedRadio = document.querySelector(
            `input[name="attendance-${studentId}"]:checked`
        );

        if (!selectedRadio) {
            return;
        }

        const recordIndex = records.findIndex(function (record) {
            return String(record.studentId) === String(studentId) &&
                record.date === dateInput.value;
        });

        const attendanceData = {
            studentId: studentId,
            date: dateInput.value,
            status: selectedRadio.value
        };

        if (recordIndex === -1) {
            records.push(attendanceData);
        } else {
            records[recordIndex] = attendanceData;
        }
    });

    localStorage.setItem("attendanceRecords", JSON.stringify(records));

    alert("Attendance saved successfully.");
    showStudents();
}

function viewHistory(studentId, studentName) {
    const history = records
        .filter(function (record) {
            return String(record.studentId) === String(studentId);
        })
        .sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });

    const presentDays = history.filter(function (record) {
        return record.status === "Present";
    }).length;

    const absentDays = history.filter(function (record) {
        return record.status === "Absent";
    }).length;

    const percentage = history.length === 0
        ? 0
        : Math.round((presentDays / history.length) * 100);

    historyTitle.textContent = studentName + " - Attendance History";
    historyTotal.textContent = history.length;
    historyPresent.textContent = presentDays;
    historyAbsent.textContent = absentDays;
    historyPercentage.textContent = percentage + "%";

    if (history.length === 0) {
        historyData.innerHTML = "<p>No attendance records found.</p>";
    } else {
        let historyHTML = "<ul>";

        history.forEach(function (record) {
            const className = record.status === "Present" ? "present" : "absent";

            historyHTML += `
                <li>
                    <b>${record.date}</b> -
                    <span class="${className}">${record.status}</span>
                </li>
            `;
        });

        historyHTML += "</ul>";
        historyData.innerHTML = historyHTML;
    }

    historyBox.classList.remove("hidden");
}

function closeHistory() {
    historyBox.classList.add("hidden");
}

dateInput.addEventListener("change", function () {
    records = getAttendanceRecords();
    showStudents();
});


showStudents();