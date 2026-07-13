const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(name===""){
        alert("Please enter your name");
        return;
    }

    if(email===""){
        alert("Please enter your email");
        return;
    }

    if(!emailPattern.test(email)){
        alert("Enter a valid email");
        return;
    }

    if(subject===""){
        alert("Please enter subject");
        return;
    }

    if(message===""){
        alert("Please enter message");
        return;
    }

    
document.getElementById("successMessage").innerHTML = `
<h2>🎉 Thank You!</h2>
<p>Your message has been sent successfully.</p>
<p>Thank you for contacting the Student Management Portal.</p>
<p>We appreciate your feedback and will get back to you soon.</p>
`;

form.reset();

});