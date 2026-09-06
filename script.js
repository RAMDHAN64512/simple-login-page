const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Demo username and password
    const correctUsername = "admin";
    const correctPassword = "12345";

    if (username === "" || password === "") {

        message.textContent = "Please fill all fields.";
        message.style.color = "red";

    } 
    else if (username === correctUsername && password === correctPassword) {

        message.textContent = "Login Successful!";
        message.style.color = "green";

    } 
    else {

        message.textContent = "Invalid username or password.";
        message.style.color = "red";

    }

});