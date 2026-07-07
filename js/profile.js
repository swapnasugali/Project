// // // const selectedStudentId = localStorage.getItem("viewStudentId");

// // // const students = JSON.parse(localStorage.getItem("students")) || [];

// // // const student = students.find(function (item) {
// // //     return item.studentId === selectedStudentId;
// // // });

// // // const profileContent = document.getElementById("profileContent");
// // // const notFoundMessage = document.getElementById("notFoundMessage");

// // // if (!student) {
// // //     profileContent.style.display = "none";
// // //     notFoundMessage.textContent = "Student details not found.";
// // // } else {
// // //     document.getElementById("studentName").textContent = student.fullName;
// // //     document.getElementById("studentIdText").textContent = "Student ID: " + student.studentId;
// // //     document.getElementById("studentDepartmentText").textContent =
// // //         "Department: " + student.department;

// // //     document.getElementById("fullName").textContent = student.fullName;
// // //     document.getElementById("email").textContent = student.email;
// // //     document.getElementById("mobile").textContent = student.mobile;
// // //     document.getElementById("gender").textContent = student.gender;
// // //     document.getElementById("dob").textContent = student.dob;

// // //     document.getElementById("department").textContent = student.department;
// // //     document.getElementById("year").textContent = student.year;
// // //     document.getElementById("section").textContent = student.section;
// // //     document.getElementById("rollNumber").textContent = student.rollNumber;

// // //     document.getElementById("addressLine").textContent = student.addressLine;
// // //     document.getElementById("city").textContent = student.city;
// // //     document.getElementById("state").textContent = student.state;
// // //     document.getElementById("country").textContent = student.country;
// // //     document.getElementById("pincode").textContent = student.pincode;

// // //     const skillsBox = document.getElementById("skills");

// // //     if (student.skills && student.skills.length > 0) {
// // //         student.skills.forEach(function (skill) {
// // //             const skillTag = document.createElement("span");
// // //             skillTag.classList.add("skill-tag");
// // //             skillTag.textContent = skill;
// // //             skillsBox.appendChild(skillTag);
// // //         });
// // //     } else {
// // //         skillsBox.textContent = "No skills added";
// // //     }

// // //     document.getElementById("profileImageFile").textContent =
// // //         student.profileImage ? "Uploaded" : "Not Uploaded";

// // //     document.getElementById("resumeFile").textContent =
// // //         student.resume ? "Uploaded" : "Not Uploaded";

// // //     document.getElementById("audioFile").textContent =
// // //         student.audio ? "Uploaded" : "Not Uploaded";

// // //     document.getElementById("videoFile").textContent =
// // //         student.video ? "Uploaded" : "Not Uploaded";

// // //     if (student.profileImage) {
// // //         document.getElementById("profileImagePreview").src = student.profileImage;
// // //     }

// // //     const attendanceData = JSON.parse(localStorage.getItem("attendance")) || [];

// // //     const studentAttendance = attendanceData.filter(function (item) {
// // //         return item.studentId === student.studentId;
// // //     });

// // //     let presentDays = 0;
// // //     let absentDays = 0;

// // //     studentAttendance.forEach(function (item) {
// // //         if (item.status === "Present") {
// // //             presentDays++;
// // //         } else if (item.status === "Absent") {
// // //             absentDays++;
// // //         }
// // //     });

// // //     const totalDays = presentDays + absentDays;

// // //     let percentage = 0;

// // //     if (totalDays > 0) {
// // //         percentage = ((presentDays / totalDays) * 100).toFixed(2);
// // //     }

// // //     document.getElementById("presentDays").textContent = presentDays;
// // //     document.getElementById("absentDays").textContent = absentDays;
// // //     document.getElementById("attendancePercentage").textContent = percentage + "%";

// // //     const marksData = JSON.parse(localStorage.getItem("marks")) || [];

// // //     const studentMarks = marksData.find(function (item) {
// // //         return item.studentId === student.studentId;
// // //     });

// // //     if (studentMarks) {
// // //         document.getElementById("englishMarks").textContent = studentMarks.english;
// // //         document.getElementById("mathsMarks").textContent = studentMarks.maths;
// // //         document.getElementById("scienceMarks").textContent = studentMarks.science;

// // //         const total =
// // //             Number(studentMarks.english) +
// // //             Number(studentMarks.maths) +
// // //             Number(studentMarks.science);

// // //         document.getElementById("totalMarks").textContent = total;
// // //     }
// // // }

// // // document.getElementById("logoutButton").addEventListener("click", function () {
// // //     sessionStorage.removeItem("loggedInUser");
// // //     window.location.href = "../index.html";
// // // });



// // const selectedStudentId = localStorage.getItem("viewStudentId");
// // const students = JSON.parse(localStorage.getItem("students")) || [];

// // const student = students.find(function (item) {
// //     return String(item.studentId) === String(selectedStudentId);
// // });

// // const profileContent = document.getElementById("profileContent");
// // const notFoundMessage = document.getElementById("notFoundMessage");

// // if (!student) {
// //     profileContent.style.display = "none";

// //     notFoundMessage.innerHTML = `
// //         Student details not found.<br><br>
// //         Go back to Student List and click the View button.
// //     `;
// // } else {
// //     document.getElementById("studentName").textContent = student.fullName;
// //     document.getElementById("studentIdText").textContent =
// //         "Student ID: " + student.studentId;

// //     document.getElementById("studentDepartmentText").textContent =
// //         "Department: " + student.department;

// //     document.getElementById("fullName").textContent = student.fullName;
// //     document.getElementById("email").textContent = student.email;
// //     document.getElementById("mobile").textContent = student.mobile;
// //     document.getElementById("gender").textContent = student.gender;
// //     document.getElementById("dob").textContent = student.dob;

// //     document.getElementById("department").textContent = student.department;
// //     document.getElementById("year").textContent = student.year;
// //     document.getElementById("section").textContent = student.section;
// //     document.getElementById("rollNumber").textContent = student.rollNumber;

// //     document.getElementById("addressLine").textContent = student.addressLine;
// //     document.getElementById("city").textContent = student.city;
// //     document.getElementById("state").textContent = student.state;
// //     document.getElementById("country").textContent = student.country;
// //     document.getElementById("pincode").textContent = student.pincode;

// //     const skillsBox = document.getElementById("skills");

// //     if (student.skills && student.skills.length > 0) {
// //         student.skills.forEach(function (skill) {
// //             const skillTag = document.createElement("span");

// //             skillTag.className = "skill-tag";
// //             skillTag.textContent = skill;

// //             skillsBox.appendChild(skillTag);
// //         });
// //     } else {
// //         skillsBox.textContent = "No skills added";
// //     }

// //     document.getElementById("profileImageFile").textContent =
// //         student.profileImage ? "Uploaded" : "Not Uploaded";

// //     document.getElementById("resumeFile").textContent =
// //         student.resume ? "Uploaded" : "Not Uploaded";

// //     document.getElementById("audioFile").textContent =
// //         student.audio ? "Uploaded" : "Not Uploaded";

// //     document.getElementById("videoFile").textContent =
// //         student.video ? "Uploaded" : "Not Uploaded";

// //     const attendanceRecords =
// //         JSON.parse(localStorage.getItem("attendanceRecords")) || [];

// //     const currentStudentAttendance = attendanceRecords.filter(function (record) {
// //         return String(record.studentId) === String(student.studentId);
// //     });

// //     const presentDays = currentStudentAttendance.filter(function (record) {
// //         return record.status === "Present";
// //     }).length;

// //     const absentDays = currentStudentAttendance.filter(function (record) {
// //         return record.status === "Absent";
// //     }).length;

// //     const totalDays = presentDays + absentDays;

// //     const attendancePercentage =
// //         totalDays === 0 ? 0 : ((presentDays / totalDays) * 100).toFixed(2);

// //     document.getElementById("presentDays").textContent = presentDays;
// //     document.getElementById("absentDays").textContent = absentDays;
// //     document.getElementById("attendancePercentage").textContent =
// //         attendancePercentage + "%";

// //     const marksData = JSON.parse(localStorage.getItem("marks")) || [];

// //     const studentMarks = marksData.find(function (item) {
// //         return String(item.studentId) === String(student.studentId);
// //     });

// //     if (studentMarks) {
// //         document.getElementById("englishMarks").textContent =
// //             studentMarks.english;

// //         document.getElementById("mathsMarks").textContent =
// //             studentMarks.maths;

// //         document.getElementById("scienceMarks").textContent =
// //             studentMarks.science;

// //         const total =
// //             Number(studentMarks.english) +
// //             Number(studentMarks.maths) +
// //             Number(studentMarks.science);

// //         document.getElementById("totalMarks").textContent = total;
// //     }
// // }

// // document.getElementById("logoutButton").addEventListener("click", function () {
// //     sessionStorage.removeItem("loggedInUser");
// //     window.location.href = "../index.html";
// // });



// const viewStudentId = localStorage.getItem("viewStudentId");

// const students = JSON.parse(localStorage.getItem("students")) || [];

// const student = students.find(function (item) {
//     return String(item.studentId) === String(viewStudentId);
// });

// const profileDetails = document.getElementById("profileDetails");

// if (student) {
//     profileDetails.innerHTML = `
//         <div class="profile-container">


//     <div class="profile-header-card">

//         <div class="profile-avatar">
//             ${student.fullName.charAt(0)}
//         </div>

//         <div>
//             <h2>${student.fullName}</h2>
//             <p>Student ID : ${student.studentId}</p>
//             <p>${student.department} | ${student.year}</p>
//         </div>

//     </div>



//     <div class="details-grid">


//         <div class="detail-card">

//             <h3>Personal Details</h3>

//             <div class="detail-row">
//                 <span>Name</span>
//                 <strong>${student.fullName}</strong>
//             </div>

//             <div class="detail-row">
//                 <span>Email</span>
//                 <strong>${student.email}</strong>
//             </div>


//             <div class="detail-row">
//                 <span>Mobile</span>
//                 <strong>${student.mobile}</strong>
//             </div>


//             <div class="detail-row">
//                 <span>Gender</span>
//                 <strong>${student.gender}</strong>
//             </div>


//             <div class="detail-row">
//                 <span>Date of Birth</span>
//                 <strong>${student.dob}</strong>
//             </div>

//         </div>




//         <div class="detail-card">

//             <h3>Academic Details</h3>


//             <div class="detail-row">
//                 <span>Department</span>
//                 <strong>${student.department}</strong>
//             </div>


//             <div class="detail-row">
//                 <span>Year</span>
//                 <strong>${student.year}</strong>
//             </div>


//             <div class="detail-row">
//                 <span>Section</span>
//                 <strong>${student.section}</strong>
//             </div>


//             <div class="detail-row">
//                 <span>Roll Number</span>
//                 <strong>${student.rollNumber}</strong>
//             </div>


//         </div>




//         <div class="detail-card">

//             <h3>Skills</h3>

//             <div class="skills">

//                 ${
//                     student.skills.map(skill =>
//                     `<span>${skill}</span>`
//                     ).join("")
//                 }

//             </div>


//         </div>





//         <div class="detail-card">

//             <h3>Address Details</h3>

//             <p>
//             ${
//                 student.addressLine || "Address not added"
//             }
//             </p>


//             <p>
//             ${
//                 student.city || ""
//             }
//             ${
//                 student.state || ""
//             }
//             ${
//                 student.country || ""
//             }
//             ${
//                 student.pincode || ""
//             }
//             </p>

//         </div>




//         <div class="detail-card">

//             <h3>Attendance</h3>

//             <h2 class="number">
//                 0%
//             </h2>

//             <p>
//             Attendance data will appear here
//             </p>

//         </div>





//         <div class="detail-card">

//             <h3>Marks</h3>

//             <h2 class="number">
//                 Not Added
//             </h2>

//             <p>
//             Marks data will appear here
//             </p>

//         </div>



//     </div>


// </div>
//     `;
// } else {
//     profileDetails.innerHTML = `
//         <p>Student details not found.</p>
//     `;
// }

// document.getElementById("logoutButton").addEventListener("click", function () {
//     sessionStorage.removeItem("loggedInUser");
//     window.location.href = "../index.html";
// });



const viewStudentId =
localStorage.getItem("viewStudentId");


const students =
JSON.parse(localStorage.getItem("students")) || [];

function showValue(value) {
    return value ? value : "";
}

const student =
students.find(function(student){

    return String(student.studentId)
    === String(viewStudentId);

});



const profileDetails =
document.getElementById("profileDetails");



if(student){


profileDetails.innerHTML = `


<div class="profile-card">


<!-- HEADER -->

<div class="student-header">


<div class="student-photo">

${student.fullName.charAt(0)}

</div>


<div class="student-info">

<h1>${student.fullName}</h1>

<p>
Student ID : ${student.studentId}
</p>

<p>
${student.department} | ${student.year}
</p>


</div>


</div>





<!-- DETAILS -->


<div class="content-grid">



<div class="box">


<h3>
Personal Details
</h3>


<table>

<tr>
<td>Name</td>
<td>${student.fullName}</td>
</tr>


<tr>
<td>Email</td>
<td>${student.email}</td>
</tr>


<tr>
<td>Mobile</td>
<td>${student.mobile}</td>
</tr>


<tr>
<td>Gender</td>
<td>${student.gender}</td>
</tr>


<tr>
<td>Date of Birth</td>
<td>${student.dob}</td>
</tr>


</table>


</div>






<div class="box">


<h3>
Academic Details
</h3>



<table>


<tr>
<td>Department</td>
<td>${student.department}</td>
</tr>


<tr>
<td>Year</td>
<td>${student.year}</td>
</tr>


<tr>
<td>Section</td>
<td>${student.section}</td>
</tr>


<tr>
<td>Roll Number</td>
<td>${student.rollNumber}</td>
</tr>



</table>


</div>







<div class="box">


<h3>
Skills
</h3>


<div class="skill-container">


${
student.skills.map(function(skill){

return `<span>${skill}</span>`

}).join("")
}


</div>


</div>






<div class="box">


<h3>
Address
</h3>


<p>

${showValue(student.addressLine)}

<br>

${student.city || ""}
${student.state || ""}
${student.country || ""}

<br>

${student.pincode || ""}

</p>


</div>







<div class="box">


<h3>
Attendance
</h3>


<div class="status-card">

0%

</div>


<p>
Attendance details will appear here
</p>


</div>







<div class="box">


<h3>
Marks
</h3>


<div class="status-card">

Not Added

</div>


<p>
Marks details will appear here
</p>


</div>





</div>



</div>


`;


}

else{


profileDetails.innerHTML=

`
<h2>
Student Not Found
</h2>
`;

}




document
.getElementById("logoutButton")
.addEventListener("click",function(){

sessionStorage.removeItem("loggedInUser");

window.location.href="../index.html";

});
