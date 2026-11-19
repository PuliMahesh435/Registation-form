
const registrationForm = document.getElementById(
    "registrationForm"
);

const message = document.getElementById("message");


registrationForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get input values
    const fullname = document.getElementById("fullname").value.trim();

    const username = document.getElementById("username").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById(
        "confirmPassword"
    ).value;


    // Check password length
    if (password.length < 8) {

        message.style.color = "#ffb3b3";

        message.textContent =
            "Password must contain at least 8 characters.";

        return;
    }


    // Check password match
    if (password !== confirmPassword) {

        message.style.color = "#ffb3b3";

        message.textContent =
            "Password and Confirm Password do not match.";

        return;
    }


    // Check phone number
    if (!/^[0-9]{10}$/.test(phone)) {

        message.style.color = "#ffb3b3";

        message.textContent =
            "Please enter a valid 10-digit phone number.";

        return;
    }


    // Registration Success
    message.style.color = "#7dffb0";

    message.textContent =
        "Registration Successful! Welcome, " + fullname + "!";


    console.log("Registration Details:", {
        fullname,
        username,
        email,
        phone
    });


    // Reset form after success
    registrationForm.reset();

});
