// // const viewStudentId =
// // localStorage.getItem("viewStudentId");


// // const students =
// // JSON.parse(localStorage.getItem("students")) || [];

// // function showValue(value) {
// //     return value ? value : "";
// // }

// // const student =
// // students.find(function(student){

// //     return String(student.studentId)
// //     === String(viewStudentId);

// // });



// // const profileDetails =
// // document.getElementById("profileDetails");



// // if(student){


// // profileDetails.innerHTML = `


// // <div class="profile-card">


// // <!-- HEADER -->

// // <div class="student-header">


// // <div class="student-photo">

// // ${student.fullName.charAt(0)}

// // </div>


// // <div class="student-info">

// // <h1>${student.fullName}</h1>

// // <p>
// // Student ID : ${student.studentId}
// // </p>

// // <p>
// // ${student.department} | ${student.year}
// // </p>


// // </div>


// // </div>





// // <!-- DETAILS -->


// // <div class="content-grid">



// // <div class="box">


// // <h3>
// // Personal Details
// // </h3>


// // <table>

// // <tr>
// // <td>Name</td>
// // <td>${student.fullName}</td>
// // </tr>


// // <tr>
// // <td>Email</td>
// // <td>${student.email}</td>
// // </tr>


// // <tr>
// // <td>Mobile</td>
// // <td>${student.mobile}</td>
// // </tr>


// // <tr>
// // <td>Gender</td>
// // <td>${student.gender}</td>
// // </tr>


// // <tr>
// // <td>Date of Birth</td>
// // <td>${student.dob}</td>
// // </tr>


// // </table>


// // </div>






// // <div class="box">


// // <h3>
// // Academic Details
// // </h3>



// // <table>


// // <tr>
// // <td>Department</td>
// // <td>${student.department}</td>
// // </tr>


// // <tr>
// // <td>Year</td>
// // <td>${student.year}</td>
// // </tr>


// // <tr>
// // <td>Section</td>
// // <td>${student.section}</td>
// // </tr>


// // <tr>
// // <td>Roll Number</td>
// // <td>${student.rollNumber}</td>
// // </tr>



// // </table>


// // </div>







// // <div class="box">


// // <h3>
// // Skills
// // </h3>


// // <div class="skill-container">


// // ${
// // student.skills.map(function(skill){

// // return `<span>${skill}</span>`

// // }).join("")
// // }


// // </div>


// // </div>






// // <div class="box">


// // <h3>
// // Address
// // </h3>


// // <p>

// // ${showValue(student.addressLine)}

// // <br>

// // ${student.city || ""}
// // ${student.state || ""}
// // ${student.country || ""}

// // <br>

// // ${student.pincode || ""}

// // </p>


// // </div>







// // <div class="box">


// // <h3>
// // Attendance
// // </h3>


// // <div class="status-card">

// // 0%

// // </div>


// // <p>
// // Attendance details will appear here
// // </p>


// // </div>







// // <div class="box">


// // <h3>
// // Marks
// // </h3>


// // <div class="status-card">

// // Not Added

// // </div>


// // <p>
// // Marks details will appear here
// // </p>


// // </div>





// // </div>



// // </div>


// // `;


// // }

// // else{


// // profileDetails.innerHTML=

// // `
// // <h2>
// // Student Not Found
// // </h2>
// // `;

// // }




// // document
// // .getElementById("logoutButton")
// // .addEventListener("click",function(){

// // sessionStorage.removeItem("loggedInUser");

// // window.location.href="../index.html";

// // });




// const viewStudentId = localStorage.getItem("viewStudentId");

// const students = JSON.parse(localStorage.getItem("students")) || [];

// const profileDetails = document.getElementById("profileDetails");

// function showValue(value) {
//     return value ? value : "-";
// }

// const student = students.find(function (student) {
//     return String(student.studentId) === String(viewStudentId);
// });

// if (student) {

//     const skills = Array.isArray(student.skills)
//         ? student.skills
//         : [];

//     profileDetails.innerHTML = `

//     <div class="profile-card">

//         <div class="student-header">

//             <div class="student-photo">
//                 ${(student.fullName || "S").charAt(0).toUpperCase()}
//             </div>

//             <div class="student-info">

//                 <h1>${showValue(student.fullName)}</h1>

//                 <p>
//                     Student ID :
//                     ${showValue(student.studentId)}
//                 </p>

//                 <p>
//                     ${showValue(student.department)}
//                     |
//                     ${showValue(student.year)}
//                 </p>

//             </div>

//         </div>

//         <div class="content-grid">

//             <div class="box">

//                 <h3>Personal Details</h3>

//                 <table>

//                     <tr>
//                         <td>Name</td>
//                         <td>${showValue(student.fullName)}</td>
//                     </tr>

//                     <tr>
//                         <td>Email</td>
//                         <td>${showValue(student.email)}</td>
//                     </tr>

//                     <tr>
//                         <td>Mobile</td>
//                         <td>${showValue(student.mobile)}</td>
//                     </tr>

//                     <tr>
//                         <td>Gender</td>
//                         <td>${showValue(student.gender)}</td>
//                     </tr>

//                     <tr>
//                         <td>Date of Birth</td>
//                         <td>${showValue(student.dob)}</td>
//                     </tr>

//                 </table>

//             </div>

//             <div class="box">

//                 <h3>Academic Details</h3>

//                 <table>

//                     <tr>
//                         <td>Department</td>
//                         <td>${showValue(student.department)}</td>
//                     </tr>

//                     <tr>
//                         <td>Year</td>
//                         <td>${showValue(student.year)}</td>
//                     </tr>

//                     <tr>
//                         <td>Section</td>
//                         <td>${showValue(student.section)}</td>
//                     </tr>

//                     <tr>
//                         <td>Roll Number</td>
//                         <td>${showValue(student.rollNumber)}</td>
//                     </tr>

//                 </table>

//             </div>

//             <div class="box">

//                 <h3>Skills</h3>

//                 <div class="skill-container">

//                     ${
//                         skills.length
//                             ? skills.map(function (skill) {
//                                 return `<span>${skill}</span>`;
//                               }).join("")
//                             : "<p>No Skills Added</p>"
//                     }

//                 </div>

//             </div>

//             <div class="box">

//                 <h3>Address</h3>

//                 <p>

//                     ${showValue(student.addressLine)}

//                     <br>

//                     ${showValue(student.city)},
//                     ${showValue(student.state)},
//                     ${showValue(student.country)}

//                     <br>

//                     ${showValue(student.pincode)}

//                 </p>

//             </div>

//             <div class="box">

//                 <h3>Attendance</h3>

//                 <div class="status-card">
//                     0%
//                 </div>

//                 <p>
//                     Attendance details will appear here.
//                 </p>

//             </div>

//             <div class="box">

//                 <h3>Marks</h3>

//                 <div class="status-card">
//                     Not Added
//                 </div>

//                 <p>
//                     Marks details will appear here.
//                 </p>

//             </div>

//         </div>

//     </div>

//     `;

// } else {

//     profileDetails.innerHTML = `

//         <h2 style="text-align:center;">
//             Student Not Found
//         </h2>

//     `;

// }

// const logoutButton = document.getElementById("logoutButton");

// if (logoutButton) {

//     logoutButton.addEventListener("click", function () {

//         sessionStorage.removeItem("loggedInUser");

//         window.location.href = "../index.html";

//     });

// }


const viewStudentId = localStorage.getItem("viewStudentId");

const students = JSON.parse(localStorage.getItem("students")) || [];
const attendanceRecords =
    JSON.parse(localStorage.getItem("attendanceRecords")) || [];
const marksRecords =
    JSON.parse(localStorage.getItem("marksRecords")) || [];

const profileDetails = document.getElementById("profileDetails");

function showValue(value) {
    return value ? value : "-";
}

const student = students.find(function (student) {
    return String(student.studentId) === String(viewStudentId);
});

if (student) {

    // Attendance

    const studentAttendance = attendanceRecords.filter(function (record) {
        return String(record.studentId) === String(student.studentId);
    });

    let presentDays = studentAttendance.filter(function (record) {
        return record.status === "Present";
    }).length;

    let absentDays = studentAttendance.filter(function (record) {
        return record.status === "Absent";
    }).length;

    let attendancePercentage = 0;

    if (studentAttendance.length > 0) {
        attendancePercentage = Math.round(
            (presentDays / studentAttendance.length) * 100
        );
    }

    // Marks

    const studentMarks = marksRecords.find(function (record) {
        return String(record.studentId) === String(student.studentId);
    });

    // Skills

    let skillsHTML = "";

    if (student.skills && student.skills.length > 0) {

        student.skills.forEach(function (skill) {
            skillsHTML += `<span>${skill}</span>`;
        });

    } else {

        skillsHTML = "<span>No Skills</span>";

    }

    profileDetails.innerHTML = `

<div class="profile-card">

    <div class="student-header">

        <div class="student-photo">
            ${(student.fullName || "S").charAt(0).toUpperCase()}
        </div>

        <div class="student-info">

            <h1>${showValue(student.fullName)}</h1>

            <p>
                Student ID :
                ${showValue(student.studentId)}
            </p>

            <p>
                ${showValue(student.department)}
                |
                ${showValue(student.year)}
            </p>

        </div>

    </div>

    <div class="content-grid">

        <!-- Personal -->

        <div class="box">

            <h3>Personal Details</h3>

            <table>

                <tr>
                    <td>Name</td>
                    <td>${showValue(student.fullName)}</td>
                </tr>

                <tr>
                    <td>Email</td>
                    <td>${showValue(student.email)}</td>
                </tr>

                <tr>
                    <td>Mobile</td>
                    <td>${showValue(student.mobile)}</td>
                </tr>

                <tr>
                    <td>Gender</td>
                    <td>${showValue(student.gender)}</td>
                </tr>

                <tr>
                    <td>Date of Birth</td>
                    <td>${showValue(student.dob)}</td>
                </tr>

            </table>

        </div>

        <!-- Academic -->

        <div class="box">

            <h3>Academic Details</h3>

            <table>

                <tr>
                    <td>Department</td>
                    <td>${showValue(student.department)}</td>
                </tr>

                <tr>
                    <td>Year</td>
                    <td>${showValue(student.year)}</td>
                </tr>

                <tr>
                    <td>Section</td>
                    <td>${showValue(student.section)}</td>
                </tr>

                <tr>
                    <td>Roll Number</td>
                    <td>${showValue(student.rollNumber)}</td>
                </tr>

            </table>

        </div>

        <!-- Skills -->

        <div class="box">

            <h3>Skills</h3>

            <div class="skill-container">

                ${skillsHTML}

            </div>

        </div>

        <!-- Address -->

        <div class="box">

            <h3>Address</h3>

            <p>

                ${showValue(student.addressLine)}

                <br>

                ${showValue(student.city)},
                ${showValue(student.state)},
                ${showValue(student.country)}

                <br>

                ${showValue(student.pincode)}

            </p>

        </div>

        <!-- Attendance -->

        <div class="box">

            <h3>Attendance</h3>

            <div class="status-card">

                ${attendancePercentage}%

            </div>

            <p>

                Present : ${presentDays}

                <br>

                Absent : ${absentDays}

            </p>

        </div>

        <!-- Marks -->

        <div class="box">

            <h3>Marks</h3>

            ${
                studentMarks
                    ? `
                <table>

                    <tr>
                        <td>Total</td>
                        <td>${studentMarks.total}</td>
                    </tr>

                    <tr>
                        <td>Percentage</td>
                        <td>${studentMarks.percentage}%</td>
                    </tr>

                    <tr>
                        <td>Grade</td>
                        <td>${studentMarks.grade}</td>
                    </tr>

                    <tr>
                        <td>Rank</td>
                        <td>${studentMarks.rank}</td>
                    </tr>

                </table>
            `
                    : `
                <div class="status-card">
                    Not Added
                </div>

                <p>Marks not added.</p>
            `
            }

        </div>

    </div>

</div>

`;

} else {

    profileDetails.innerHTML = `
        <h2 style="text-align:center;">
            Student Not Found
        </h2>
    `;

}

document.getElementById("logoutButton").addEventListener("click", function () {

    sessionStorage.removeItem("loggedInUser");

    window.location.href = "../index.html";

});