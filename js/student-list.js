const tableBody = document.getElementById("studentTableBody");
const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const sortSelect = document.getElementById("sortSelect");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const pageNumber = document.getElementById("pageNumber");
const logoutButton = document.getElementById("logoutButton");

let currentPage = 1;
const studentsPerPage = 5;

function getStudents() {
    return JSON.parse(localStorage.getItem("students")) || [];
}

function getFilteredStudents() {
    let students = getStudents();

    const searchText = searchInput.value.trim().toLowerCase();
    const selectedDepartment = departmentFilter.value;
    const selectedSort = sortSelect.value;

    students = students.filter(function (student) {
        const studentId = String(student.studentId || "").toLowerCase();
        const fullName = String(student.fullName || "").toLowerCase();

        const matchesSearch =
            studentId.includes(searchText) ||
            fullName.includes(searchText);

        const matchesDepartment =
            selectedDepartment === "All" ||
            student.department === selectedDepartment;

        return matchesSearch && matchesDepartment;
    });

    if (selectedSort === "nameAZ") {
        students.sort(function (a, b) {
            return String(a.fullName).localeCompare(String(b.fullName));
        });
    }

    if (selectedSort === "nameZA") {
        students.sort(function (a, b) {
            return String(b.fullName).localeCompare(String(a.fullName));
        });
    }

    if (selectedSort === "idLowHigh") {
        students.sort(function (a, b) {
            return String(a.studentId).localeCompare(
                String(b.studentId),
                undefined,
                { numeric: true }
            );
        });
    }

    if (selectedSort === "idHighLow") {
        students.sort(function (a, b) {
            return String(b.studentId).localeCompare(
                String(a.studentId),
                undefined,
                { numeric: true }
            );
        });
    }

    return students;
}

function displayStudents() {
    const students = getFilteredStudents();

    const totalPages = Math.max(
        1,
        Math.ceil(students.length / studentsPerPage)
    );

    if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    const startIndex = (currentPage - 1) * studentsPerPage;

    const studentsForCurrentPage = students.slice(
        startIndex,
        startIndex + studentsPerPage
    );

    tableBody.innerHTML = "";

    if (studentsForCurrentPage.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" class="no-data">
                    No students found
                </td>
            </tr>
        `;
    } else {
        studentsForCurrentPage.forEach(function (student) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${student.studentId || "-"}</td>
                <td>${student.fullName || "-"}</td>
                <td>${student.email || "-"}</td>
                <td>${student.department || "-"}</td>
                <td>${student.mobile || "-"}</td>
                <td>Active</td>
                <td class="action-buttons">
                    <button type="button" class="view-btn" data-id="${student.studentId}">
                        View
                    </button>

                    <button type="button" class="edit-btn" data-id="${student.studentId}">
                        Edit
                    </button>

                    <button type="button" class="delete-btn" data-id="${student.studentId}">
                        Delete
                    </button>
                </td>
            `;

            tableBody.appendChild(row);
        });
    }

    pageNumber.textContent = `Page ${currentPage} of ${totalPages}`;

    previousButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

tableBody.addEventListener("click", function (event) {
    const studentId = event.target.dataset.id;

    if (!studentId) {
        return;
    }

    if (event.target.classList.contains("view-btn")) {
        localStorage.setItem("viewStudentId", studentId);
        window.location.href = "profile.html";
    }

    if (event.target.classList.contains("edit-btn")) {
        localStorage.setItem("editStudentId", studentId);
        window.location.href = "student.html";
    }

    if (event.target.classList.contains("delete-btn")) {
        const isConfirmed = confirm("Do you want to delete this student?");

        if (!isConfirmed) {
            return;
        }

        const students = getStudents();

        const updatedStudents = students.filter(function (student) {
            return String(student.studentId) !== String(studentId);
        });

        localStorage.setItem("students", JSON.stringify(updatedStudents));

        displayStudents();
    }
});

searchInput.addEventListener("input", function () {
    currentPage = 1;
    displayStudents();
});

departmentFilter.addEventListener("change", function () {
    currentPage = 1;
    displayStudents();
});

sortSelect.addEventListener("change", function () {
    currentPage = 1;
    displayStudents();
});

previousButton.addEventListener("click", function () {
    if (currentPage > 1) {
        currentPage--;
        displayStudents();
    }
});

nextButton.addEventListener("click", function () {
    const totalPages = Math.max(
        1,
        Math.ceil(getFilteredStudents().length / studentsPerPage)
    );

    if (currentPage < totalPages) {
        currentPage++;
        displayStudents();
    }
});

logoutButton.addEventListener("click", function () {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "../index.html";
});

displayStudents();