function showMessage() {
    alert("Welcome to Sunshine Public School!");
}

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "student" && password === "12345"){
        alert("Login Successful!");
        return true;
    } else {
        alert("Invalid Username or Password!");
        return false;
    }
}
function validateLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user === "gaurav" && pass === "12345") {
        window.location.href = "info.html";  // Redirect
        return false;  // Stop actual form submit
    } else {
        alert("Invalid Login!");
        return false;
    }
}

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000); // Changes image every 3 seconds


function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let msg = document.getElementById("message").value;

    if (name && email && subject && msg) {
        document.getElementById("status").innerHTML = "Message Sent Successfully!";
        document.getElementById("status").style.color = "green";
    } else {
        document.getElementById("status").innerHTML = "Please fill all fields!";
        document.getElementById("status").style.color = "red";
    }

    return false;
}

