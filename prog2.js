document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload
        
        // Variables created with values from user input
        let name = document.getElementById("name").value.trim();
        let age = parseInt(document.getElementById("age").value);
        // Error message and popup div
        let errorMsg = document.getElementById("errorMsg");
        let popup = document.getElementById("popup");
        let popupContent = document.getElementById("popupContent");
        
        // Validating user input to ensure name is not empty and age is a positive number
        if (name === "" || isNaN(age) || age <= 0) {
            errorMsg.style.display = "block";
            console.error("Invalid input: Name or Age is incorrect");
            return;
        }
        // Make sure error message is hidden after inputs are valid
        errorMsg.style.display = "none";
        
        // Variables created with calculated values from functions 
        let { ageInMonths, birthYear } = calculateAgeDetails(age);
        let randomMsg = getFunMessage();
        
        // Results displayed in a popup window
        popupContent.innerHTML = `<p>Hello, <strong>${name}</strong>!</p>
                                <p>You are <strong>${age}</strong> years old.</p>
                                   <p>That’s <strong>${ageInMonths}</strong> months!</p>
                                   <p>You were born in <strong>${birthYear}</strong>.</p>
                                   <p>Surprise! I guessed your age in months and birth year!!</p>
                                   <p><em>${randomMsg}</em></p>`;
        popup.style.display = "block";
        
        // Log data to console
        console.log("User Input:", { name, age });
        console.log("Calculated Age in Months:", ageInMonths);
        console.log("Estimated Birth Year:", birthYear);
    });
    
    // Close popup window and reset the form
    document.getElementById("closePopup").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("contact-form").reset();
    });
});

// Functions to calculate age in months and birth year, and to get a random message
function calculateAgeDetails(age) {
    return {
        // Calculating age in months and birth year
        ageInMonths: age * 12,
        birthYear: new Date().getFullYear() - age
    };
}

// Random message generator
function getFunMessage() {
    // Array of messages to choose from
    let messages = ["Keep shining!", "You're doing great!", "The future is bright!"];
    // Return a random message from
    return messages[Math.floor(Math.random() * messages.length)];
}
