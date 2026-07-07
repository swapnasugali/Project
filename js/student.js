const form = document.getElementById("studentForm");
const message = document.getElementById("message");

const editStudentId = localStorage.getItem("editStudentId");

if (editStudentId) {
    const students = JSON.parse(localStorage.getItem("students")) || [];

    const editStudent = students.find(function (student) {
        return student.studentId === editStudentId;
    });

    if (editStudent) {
        document.getElementById("studentId").value = editStudent.studentId;
        document.getElementById("fullName").value = editStudent.fullName;
        document.getElementById("email").value = editStudent.email;
        document.getElementById("mobile").value = editStudent.mobile;
        document.getElementById("gender").value = editStudent.gender;
        document.getElementById("dob").value = editStudent.dob;
        document.getElementById("department").value = editStudent.department;
        document.getElementById("year").value = editStudent.year;
        document.getElementById("section").value = editStudent.section;
        document.getElementById("rollNumber").value = editStudent.rollNumber;
        document.getElementById("addressLine").value = editStudent.addressLine;
        document.getElementById("city").value = editStudent.city;
        document.getElementById("state").value = editStudent.state;
        document.getElementById("country").value = editStudent.country;
        document.getElementById("pincode").value = editStudent.pincode;

        document.querySelectorAll(".skills input").forEach(function (skill) {
            if (editStudent.skills.includes(skill.value)) {
                skill.checked = true;
            }
        });

        document.getElementById("studentId").readOnly = true;
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentId = document.getElementById("studentId").value.trim();
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;
    const section = document.getElementById("section").value.trim();
    const rollNumber = document.getElementById("rollNumber").value.trim();
    const addressLine = document.getElementById("addressLine").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const country = document.getElementById("country").value.trim();
    const pincode = document.getElementById("pincode").value.trim();

    message.style.color = "red";
    message.textContent = "";

    if (
        studentId === "" || fullName === "" || email === "" ||
        mobile === "" || gender === "" || dob === "" ||
        department === "" || year === "" || section === "" ||
        rollNumber === "" || addressLine === "" || city === "" ||
        state === "" || country === "" || pincode === ""
    ) {
        message.textContent = "Please fill all required fields";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Enter a valid email address";
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        message.textContent = "Mobile number must contain 10 digits";
        return;
    }

    const students = JSON.parse(localStorage.getItem("students")) || [];

    if (!editStudentId) {
        const duplicate = students.some(function (student) {
            return student.studentId === studentId;
        });

        if (duplicate) {
            message.textContent = "Student ID already exists";
            return;
        }
    }

    const selectedSkills = [];

    document.querySelectorAll(".skills input:checked").forEach(function (skill) {
        selectedSkills.push(skill.value);
    });

    const student = {
        studentId: studentId,
        fullName: fullName,
        email: email,
        mobile: mobile,
        gender: gender,
        dob: dob,
        department: department,
        year: year,
        section: section,
        rollNumber: rollNumber,
        skills: selectedSkills,
        addressLine: addressLine,
        city: city,
        state: state,
        country: country,
        pincode: pincode,
        profileImage: document.getElementById("profileImage").value,
        resume: document.getElementById("resume").value,
        audio: document.getElementById("audio").value,
        video: document.getElementById("video").value
    };

    if (editStudentId) {
        const updatedStudents = students.map(function (item) {
            if (item.studentId === editStudentId) {
                return student;
            }

            return item;
        });

        localStorage.setItem("students", JSON.stringify(updatedStudents));
        localStorage.removeItem("editStudentId");

        message.style.color = "green";
        message.textContent = "Student updated successfully";
    } else {
        students.push(student);
        localStorage.setItem("students", JSON.stringify(students));

        message.style.color = "green";
        message.textContent = "Student added successfully";
    }

    setTimeout(function () {
        window.location.href = "student-list.html";
    }, 800);
});

document.getElementById("logoutButton").addEventListener("click", function () {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
});