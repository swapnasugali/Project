const totalStudentsText = document.getElementById("totalStudents");
const averageMarksText = document.getElementById("averageMarks");
const passedStudentsText = document.getElementById("passedStudents");
const failedStudentsText = document.getElementById("failedStudents");

const topStudentsTable = document.getElementById("topStudentsTable");
const failedStudentsTable = document.getElementById("failedStudentsTable");
const highestAttendanceBox = document.getElementById("highestAttendance");
const lowestAttendanceBox = document.getElementById("lowestAttendance");
const departmentTable = document.getElementById("departmentTable");

function getStudents() {
  return JSON.parse(localStorage.getItem("students")) || [];
}

function getMarksRecords() {
  return JSON.parse(localStorage.getItem("marksRecords")) || [];
}

function getAttendanceRecords() {
  return JSON.parse(localStorage.getItem("attendanceRecords")) || [];
}

function getStudentId(student) {
  return student.studentId || student.id || student.rollNumber || "";
}

function getStudentName(student) {
  return student.fullName || student.name || "No Name";
}

function getDepartment(student) {
  return student.department || "Not Added";
}

const students = getStudents();
const marksRecords = getMarksRecords();
const attendanceRecords = getAttendanceRecords();

function getStudentDetails(studentId) {
  const student = students.find(function (item) {
    return String(getStudentId(item)) === String(studentId);
  });

  if (!student) {
    return {
      studentId: studentId,
      name: "Student Not Found",
      department: "-"
    };
  }

  return {
    studentId: getStudentId(student),
    name: getStudentName(student),
    department: getDepartment(student)
  };
}

/* =========================
   SUMMARY CARDS
========================= */
function showSummaryCards() {
  const passedStudents = marksRecords.filter(function (record) {
    return record.grade !== "Fail";
  });

  const failedStudents = marksRecords.filter(function (record) {
    return record.grade === "Fail";
  });

  let averagePercentage = 0;
  let averageTotal = 0;

  if (marksRecords.length > 0) {
    const totalPercentage = marksRecords.reduce(function (sum, record) {
      return sum + Number(record.percentage || 0);
    }, 0);

    const totalMarks = marksRecords.reduce(function (sum, record) {
      return sum + Number(record.total || 0);
    }, 0);

    averagePercentage = Math.round(totalPercentage / marksRecords.length);
    averageTotal = Math.round(totalMarks / marksRecords.length);
  }

  totalStudentsText.textContent = students.length;

  // Example output: 385 / 500 (77%)
  averageMarksText.textContent =
    averageTotal + " / 500 (" + averagePercentage + "%)";

  passedStudentsText.textContent = passedStudents.length;
  failedStudentsText.textContent = failedStudents.length;
}

/* =========================
   TOP STUDENTS
========================= */
function showTopStudents() {
  topStudentsTable.innerHTML = "";

  const topStudents = [...marksRecords]
    .filter(function (record) {
      return record.grade !== "Fail";
    })
    .sort(function (a, b) {
      return Number(b.total) - Number(a.total);
    })
    .slice(0, 5);

  if (topStudents.length === 0) {
    topStudentsTable.innerHTML = `
      <tr>
        <td colspan="7">No marks records found. Add marks first.</td>
      </tr>
    `;
    return;
  }

  topStudents.forEach(function (record, index) {
    const student = getStudentDetails(record.studentId);

    topStudentsTable.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${student.studentId}</td>
        <td>${student.name}</td>
        <td>${student.department}</td>
        <td>${record.total}</td>
        <td>${record.percentage}%</td>
        <td class="pass">${record.grade}</td>
      </tr>
    `;
  });
}

/* =========================
   FAILED STUDENTS
========================= */
function showFailedStudents() {
  failedStudentsTable.innerHTML = "";

  const failedStudents = marksRecords.filter(function (record) {
    return record.grade === "Fail";
  });

  if (failedStudents.length === 0) {
    failedStudentsTable.innerHTML = `
      <tr>
        <td colspan="7">No failed students found.</td>
      </tr>
    `;
    return;
  }

  failedStudents.forEach(function (record, index) {
    const student = getStudentDetails(record.studentId);

    failedStudentsTable.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${student.studentId}</td>
        <td>${student.name}</td>
        <td>${student.department}</td>
        <td>${record.total}</td>
        <td>${record.percentage}%</td>
        <td class="fail">Fail</td>
      </tr>
    `;
  });
}

/* =========================
   ATTENDANCE PERCENTAGE
========================= */
function calculateAttendancePercentage(studentId) {
  const studentRecords = attendanceRecords.filter(function (record) {
    return String(record.studentId) === String(studentId);
  });

  if (studentRecords.length === 0) {
    return null;
  }

  const presentDays = studentRecords.filter(function (record) {
    return record.status === "Present";
  }).length;

  return Math.round((presentDays / studentRecords.length) * 100);
}

/* =========================
   HIGHEST / LOWEST ATTENDANCE
========================= */
function showAttendanceReports() {
  const attendanceList = students
    .map(function (student) {
      const studentId = getStudentId(student);

      return {
        studentId: studentId,
        name: getStudentName(student),
        department: getDepartment(student),
        percentage: calculateAttendancePercentage(studentId)
      };
    })
    .filter(function (student) {
      return student.percentage !== null;
    });

  if (attendanceList.length === 0) {
    highestAttendanceBox.innerHTML = "<p>No attendance records found.</p>";
    lowestAttendanceBox.innerHTML = "<p>No attendance records found.</p>";
    return;
  }

  const highestStudent = [...attendanceList].sort(function (a, b) {
    return b.percentage - a.percentage;
  })[0];

  const lowestStudent = [...attendanceList].sort(function (a, b) {
    return a.percentage - b.percentage;
  })[0];

  highestAttendanceBox.innerHTML = `
    <div class="attendance-card">
      <p class="high-attendance">${highestStudent.percentage}%</p>
      <h3>${highestStudent.name}</h3>
      <p><b>Student ID:</b> ${highestStudent.studentId}</p>
      <p><b>Department:</b> ${highestStudent.department}</p>
    </div>
  `;

  lowestAttendanceBox.innerHTML = `
    <div class="attendance-card">
      <p class="low-attendance">${lowestStudent.percentage}%</p>
      <h3>${lowestStudent.name}</h3>
      <p><b>Student ID:</b> ${lowestStudent.studentId}</p>
      <p><b>Department:</b> ${lowestStudent.department}</p>
    </div>
  `;
}

/* =========================
   DEPARTMENT-WISE STUDENTS
========================= */
function showDepartmentWiseStudents() {
  departmentTable.innerHTML = "";

  if (students.length === 0) {
    departmentTable.innerHTML = `
      <tr>
        <td colspan="3">No students found. Add students first.</td>
      </tr>
    `;
    return;
  }

  const departments = {};

  students.forEach(function (student) {
    const department = getDepartment(student);

    if (departments[department]) {
      departments[department]++;
    } else {
      departments[department] = 1;
    }
  });

  Object.keys(departments).forEach(function (department, index) {
    departmentTable.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${department}</td>
        <td>${departments[department]}</td>
      </tr>
    `;
  });
}

/* =========================
   RUN ALL REPORTS
========================= */
showSummaryCards();
showTopStudents();
showFailedStudents();
showAttendanceReports();
showDepartmentWiseStudents();