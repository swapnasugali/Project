const user = sessionStorage.getItem("loggedInUser");

if (!user) {
    window.location.href = "index.html";
}

const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const sortSelect = document.getElementById("sortSelect");
const tableBody = document.getElementById("studentTableBody");
const noStudents = document.getElementById("noStudents");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const pageNumber = document.getElementById("pageNumber");

let currentPage = 1;
const studentsPerPage = 3;

function getStudents() {
    return JSON.parse(localStorage.getItem("students")) || [];
}

function showStudents() {
    let students = getStudents();

    const searchText = searchInput.value.toLowerCase();
    const selectedDepartment = departmentFilter.value;
    const sortValue = sortSelect.value;

    students = students.filter(function (student) {
        const id = student.studentId.toLowerCase();
        const name = student.fullName.toLowerCase();
        const email = student.email.toLowerCase();

        const searchMatch =
            id.includes(searchText) ||
            name.includes(searchText) ||
            email.includes(searchText);

        const departmentMatch =
            selectedDepartment === "" ||
            student.department === selectedDepartment;

        return searchMatch && departmentMatch;
    });

    if (sortValue === "name") {
        students.sort(function (a, b) {
            return a.fullName.localeCompare(b.fullName);
        });
    }

    if (sortValue === "id") {
        students.sort(function (a, b) {
            return a.studentId.localeCompare(b.studentId);
        });
    }

    const totalPages = Math.ceil(students.length / studentsPerPage) || 1;

    if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    const start = (currentPage - 1) * studentsPerPage;
    const pageStudents = students.slice(start, start + studentsPerPage);

    tableBody.innerHTML = "";

    if (pageStudents.length === 0) {
        noStudents.textContent = "No students found";
    } else {
        noStudents.textContent = "";

        pageStudents.forEach(function (student) {
            tableBody.innerHTML += `
                <tr>
                    <td>${student.studentId}</td>
                    <td>${student.fullName}</td>
                    <td>${student.email}</td>
                    <td>${student.department}</td>
                    <td>${student.mobile}</td>
                    <td>Active</td>
                    <td>
                        <button onclick="viewStudent('${student.studentId}')">View</button>
                        <button onclick="editStudent('${student.studentId}')">Edit</button>
                        <button onclick="deleteStudent('${student.studentId}')">Delete</button>
                    </td>
                </tr>
            `;
        });
    }

    pageNumber.textContent = "Page " + currentPage + " of " + totalPages;

    previousButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

function viewStudent(studentId) {
    const students = getStudents();

    const student = students.find(function (item) {
        return item.studentId === studentId;
    });

    alert(
        "Student ID: " + student.studentId +
        "\nName: " + student.fullName +
        "\nEmail: " + student.email +
        "\nMobile: " + student.mobile +
        "\nDepartment: " + student.department +
        "\nYear: " + student.year +
        "\nSection: " + student.section +
        "\nRoll Number: " + student.rollNumber
    );
}

function editStudent(studentId) {
    localStorage.setItem("editStudentId", studentId);
    window.location.href = "student.html";
}

function deleteStudent(studentId) {
    const confirmDelete = confirm("Do you want to delete this student?");

    if (!confirmDelete) {
        return;
    }

    const students = getStudents();

    const updatedStudents = students.filter(function (student) {
        return student.studentId !== studentId;
    });

    localStorage.setItem("students", JSON.stringify(updatedStudents));

    showStudents();
}

searchInput.addEventListener("input", function () {
    currentPage = 1;
    showStudents();
});

departmentFilter.addEventListener("change", function () {
    currentPage = 1;
    showStudents();
});

sortSelect.addEventListener("change", function () {
    currentPage = 1;
    showStudents();
});

previousButton.addEventListener("click", function () {
    if (currentPage > 1) {
        currentPage--;
        showStudents();
    }
});

nextButton.addEventListener("click", function () {
    currentPage++;
    showStudents();
});

document.getElementById("logoutButton").addEventListener("click", function () {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
});

showStudents();