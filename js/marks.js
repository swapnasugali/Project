const marksTable = document.getElementById("marksTable");

const totalStudentsText = document.getElementById("totalStudents");
const passedStudentsText = document.getElementById("passedStudents");
const failedStudentsText = document.getElementById("failedStudents");

const saveMarksButton = document.getElementById("saveMarksButton");
const clearMarksButton = document.getElementById("clearMarksButton");

function getStudents() {
  return JSON.parse(localStorage.getItem("students")) || [];
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

let marksRecords = JSON.parse(localStorage.getItem("marksRecords")) || [];

function calculateResult(html, css, javascript, react, node) {
  const total = html + css + javascript + react + node;
  const percentage = Math.round(total / 5);

  let grade = "Fail";

  if (html < 35 || css < 35 || javascript < 35 || react < 35 || node < 35) {
    grade = "Fail";
  } else if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 75) {
    grade = "A";
  } else if (percentage >= 60) {
    grade = "B";
  } else {
    grade = "C";
  }

  return { total, percentage, grade };
}

function updateCards() {
  const students = getStudents();

  const passed = marksRecords.filter(function (record) {
    return record.grade !== "Fail";
  }).length;

  const failed = marksRecords.filter(function (record) {
    return record.grade === "Fail";
  }).length;

  totalStudentsText.textContent = students.length;
  passedStudentsText.textContent = passed;
  failedStudentsText.textContent = failed;
}

function showStudents() {
  const students = getStudents();

  marksTable.innerHTML = "";

  if (students.length === 0) {
    marksTable.innerHTML = `
      <tr>
        <td colspan="13">No students found. Add students first in Student Registration.</td>
      </tr>
    `;

    updateCards();
    return;
  }

  students.forEach(function (student, index) {
    const studentId = getStudentId(student);

    const oldRecord = marksRecords.find(function (record) {
      return String(record.studentId) === String(studentId);
    });

    const html = oldRecord ? oldRecord.html : "";
    const css = oldRecord ? oldRecord.css : "";
    const javascript = oldRecord ? oldRecord.javascript : "";
    const react = oldRecord ? oldRecord.react : "";
    const node = oldRecord ? oldRecord.node : "";

    const total = oldRecord ? oldRecord.total : "-";
    const percentage = oldRecord ? oldRecord.percentage + "%" : "-";
    const grade = oldRecord ? oldRecord.grade : "-";
    const rank = oldRecord ? oldRecord.rank : "-";

    marksTable.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${studentId}</td>
        <td>${getStudentName(student)}</td>
        <td>${getDepartment(student)}</td>

        <td><input type="number" min="0" max="100" id="${studentId}-html" value="${html}"></td>
        <td><input type="number" min="0" max="100" id="${studentId}-css" value="${css}"></td>
        <td><input type="number" min="0" max="100" id="${studentId}-javascript" value="${javascript}"></td>
        <td><input type="number" min="0" max="100" id="${studentId}-react" value="${react}"></td>
        <td><input type="number" min="0" max="100" id="${studentId}-node" value="${node}"></td>

        <td>${total}</td>
        <td>${percentage}</td>
        <td class="${grade === "Fail" ? "fail" : "pass"}">${grade}</td>
        <td>${rank}</td>
      </tr>
    `;
  });

  updateCards();
}

function getMark(studentId, subject) {
  const input = document.getElementById(studentId + "-" + subject);

  if (!input || input.value === "") {
    return 0;
  }

  return Number(input.value);
}

function saveMarks() {
  const students = getStudents();

  if (students.length === 0) {
    alert("No students found. Add students first.");
    return;
  }

  const newRecords = [];

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const studentId = getStudentId(student);

    const html = getMark(studentId, "html");
    const css = getMark(studentId, "css");
    const javascript = getMark(studentId, "javascript");
    const react = getMark(studentId, "react");
    const node = getMark(studentId, "node");

    const marks = [html, css, javascript, react, node];

    const invalidMark = marks.some(function (mark) {
      return mark < 0 || mark > 100 || isNaN(mark);
    });

    if (invalidMark) {
      alert("All marks must be between 0 and 100.");
      return;
    }

    const result = calculateResult(html, css, javascript, react, node);

    newRecords.push({
      studentId: studentId,
      html: html,
      css: css,
      javascript: javascript,
      react: react,
      node: node,
      total: result.total,
      percentage: result.percentage,
      grade: result.grade,
      rank: 0
    });
  }

  newRecords.sort(function (a, b) {
    return b.total - a.total;
  });

  newRecords.forEach(function (record, index) {
    record.rank = index + 1;
  });

  marksRecords = newRecords;

  localStorage.setItem("marksRecords", JSON.stringify(marksRecords));

  alert("Marks saved successfully.");
  showStudents();
}

function clearMarks() {
  const answer = confirm("Do you want to delete all marks records?");

  if (!answer) {
    return;
  }

  marksRecords = [];
  localStorage.removeItem("marksRecords");

  showStudents();
}

saveMarksButton.addEventListener("click", saveMarks);
clearMarksButton.addEventListener("click", clearMarks);

showStudents();