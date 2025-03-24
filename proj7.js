// Variable for contact-form
let form = document.forms["contact-form"];


document.addEventListener("DOMContentLoaded", function () {

    
   
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload
        console.log("Form submitted");
        // Validation Requirement - 2
        validation();

        // User selection requirement - 1
        selection();

        // Display File Content requirement 3--- Only txt files 
        files();
        document.getElementById("contact-form").reset();
        document.getElementById("selections").innerHTML = "";
      
         // Log the form data to the console
        console.log(document.getElementById("contact-form").elements["name"].value);
        console.log(document.getElementById("contact-form").elements["phone"].value);
       
        
    });
    // Add event listener to checkboxes
    document.getElementById("contact-form").addEventListener("change", selection);
    
});

function validation()
{
    
    // Variables for error messages
    let nameError = document.getElementById("nameError");
    let phoneError = document.getElementById("phoneError");

    // try and catch block to handle errors for project 7 form validation
    try
    {
         // Project 6 form validation
        //regex for name validation
        let nameregex = /^[a-zA-Z\s]+$/;
        // Check if name contains only letters
        if(!nameregex.test(form.elements["name"].value.trim()))
        {
             // Error handling
            nameError.style.display = "inline";
            throw new Error("Invalid name: Name must contain only letters");
         
        }
        nameError.style.display = "none";

        // regex for phone number validation
        let phoneregex = /^\d{3}\d{3}\d{4}$/;
        // Check phone number
        if(!phoneregex.test(form.elements["phone"].value))
        {
             // Error handling
            phoneError.style.display = "inline";
            throw new Error("Invalid phone number: Phone number must be 10 digits");
        }
        phoneError.style.display = "none";

        // Log the form data to the console
        console.log(document.getElementById("contact-form").elements["name"].value);
        console.log(document.getElementById("contact-form").elements["phone"].value);
 
    }
    catch (error)
    {
         console.error(error);
    }
    // If no errors, submit the form
    
}
// Function to handle selection of animals
function selection(){
  
     // Get checkboxes 
     let animalSelections = Array.from(document.getElementsByName('animals'));

    // Array to hold selected values
    let selectedAnimals = [];
    // Loop through and collect checked values to push into array
    for (let i = 0; i < animalSelections.length; i++) {
        if (animalSelections[i].checked) {
            selectedAnimals.push(animalSelections[i].value);
        }
    }
     // Display selected animals
    document.getElementById("selections").innerHTML = `<p> ${selectedAnimals.join(', ')}</p>`;
    for(let i = 0; i < selectedAnimals.length; i++){
        console.log(selectedAnimals[i]);
    }
   

}
function files()
{
    let form = document.forms["contact-form"];
    // Get the file input element
    let fileInput = form.elements["file"];
    // Get the file name
    let fileName = fileInput.files[0].name;
    // Display the file name
    document.getElementById("fileOutput").innerHTML = `<h1> ${fileName}</h1>`;
    console.log(fileName);

    // Read the file
    const reader = new FileReader();
    reader.onload = function(event) {
        const fileContent = event.target.result;
        document.getElementById("fileOutput").innerHTML += `<p> ${fileContent}</p><br> `;
        console.log('File content:', fileContent);
    };
    reader.readAsText(fileInput.files[0]);
}
