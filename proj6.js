document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload
       
        // Variable for contact-form
        let form = document.forms["contact-form"];

        // Variables for error messages
        let nameError = document.getElementById("nameError");
        let usernameError = document.getElementById("unameError");
        let emailError = document.getElementById("emailError");
        let passwordError = document.getElementById("passError");
        let password2Error = document.getElementById("pass2Error");
        let phoneError = document.getElementById("phoneError");
        let ageError = document.getElementById("ageError");

        // try and catch block to handle errors for project 6 form validation
        try
        {
            // Project 6 form validation
            // regex for name validation
            let nameregex = /^[a-zA-Z\s]+$/;
            // Check if name contains only letters
            if(!nameregex.test(form.elements["name"].value.trim()))
            {
                // Error handling
                nameError.style.display = "inline";
                throw new Error("Invalid name: Name must contain only letters");
                
            }
            nameError.style.display = "none";
    
            // regex for username validation
            let unregex = /^[a-zA-Z][a-zA-Z0-9]{5,14}$/;
            // Check if username is empty or contains only letters and numbers
            if(!unregex.test(form.elements["username"].value))
            {
                // Error handling
                usernameError.style.display = "inline";
                throw new Error("Invalid username: Username must contain only letters and numbers and be between 6 and 15 characters and cannot start with a number");
                
            }
            usernameError.style.display = "none";
    
            // regex for email validation
            let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            // Check if email is empty or contains a valid email address
            if(!emailregex.test(form.elements["email"].value))
            {
                // Error handling
                emailError.style.display = "inline";
                throw new Error("Invalid email: Email must be a valid email address");
            }
            emailError.style.display = "none";
    
            // regex for password validation
            let passregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;    
            // Check password
            if(!passregex.test(form.elements["password"].value))
            {
                // Error handling
                passwordError.style.display = "inline";
                throw new Error("Invalid password: Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be 8-20 characters long");
            }
            passwordError.style.display = "none";
            // Check to make sure that the password and confirm password fields match
            if(form.elements["password"].value !== form.elements["confirmPassword"].value)
            {
                // Error handling
                password2Error.style.display = "inline";
                throw new Error("Passwords do not match");
            }
            password2Error.style.display = "none";
            // regex for phone number validation
            let phoneregex = /^\d{3}-\d{3}-\d{4}$/;
            // Check phone number
            if(!phoneregex.test(form.elements["phone"].value))
            {
                // Error handling
                phoneError.style.display = "inline";
                throw new Error("Invalid phone number: Phone number must be in the format xxx-xxx-xxxx");
            }
            phoneError.style.display = "none";
    
            // validation to check if user is over 18
            // we are given the date of birth and must calculate the age
            let dob = new Date(form.elements["dob"].value);
            let today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            let month = today.getMonth() - dob.getMonth();
            // If the user has not had their birthday yet this year, subtract one from the age
            if(month < 0 || (month === 0 && today.getDate() < dob.getDate()))
            {
                age--;
            }
            if(age < 18)
            {
                // Error handling
                ageError.style.display = "inline";
                throw new Error("User must be at least 18 years old");
            }
            ageError.style.display = "none";
    
            // Check to make sure the checkbox is checked
            if(!form.elements["terms"].checked)
            {
                // Error handling
                throw new Error("You must agree to the terms and conditions");
            }



            let randomMsg = getFunMessage();
            // Results displayed in a popup window
            popupContent.innerHTML = `<p>Welcome, <strong>${document.getElementById("contact-form").elements["name"].value}</strong>!</p>
            <p><em>${randomMsg}</em></p>`;
            popup.style.display = "block";
            // Log the form data to the console
            console.log(document.getElementById("contact-form").elements["name"].value);
            console.log(document.getElementById("contact-form").elements["username"].value);
            console.log(document.getElementById("contact-form").elements["email"].value);
            console.log(document.getElementById("contact-form").elements["password"].value);
            console.log(document.getElementById("contact-form").elements["confirmPassword"].value);
            console.log(document.getElementById("contact-form").elements["phone"].value);
            console.log(document.getElementById("contact-form").elements["dob"].value);
            console.log(document.getElementById("contact-form").elements["terms"].checked);

        
        }
        catch (error)
        {
            console.error(error);
        }
        // If no errors, submit the form
    });
    // Close popup window and reset the form
    document.getElementById("closePopup").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("contact-form").reset();
    });
});
// Random message generator
function getFunMessage() {
    // Array of messages to choose from
    let messages = ["Keep shining!", "You're doing great!", "The future is bright!"];
    // Return a random message from
    return messages[Math.floor(Math.random() * messages.length)];
}