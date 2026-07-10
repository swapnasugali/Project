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
