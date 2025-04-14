// Form Variable
const form = document.getElementById('color-form');


// function to set cookies from w3 schools
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
// function to get cookies from w3 schools
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
// function to get the query parameters from the URL from sitpoint
function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}
// function to apply the customizations to the page
function applyCustomizations(bgColor, textColor, fontSize) {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    document.body.style.fontSize = fontSize + "px";
    document.body.style.transition = "all 0.5s ease"; // Smooth transition for the changes
   
}
// Event listener for the form submission
// If statement to make sure the form exist because it does not exist for other files not projects.html
// The changes will apply to all pages go ahead and check
if(form){
    // Event listener for the form submission
    document.getElementById("color-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting
    
        // Get the values from the form
        const bgColor = form.elements["bg-color"].value;
        const textColor = form.elements["text-color"].value;
        const fontSize = form.elements["font-size"].value;
       
    
        // Save in Cookies
        setCookie("bgColor", bgColor, 7); 
        setCookie("textColor", textColor, 7); 
        setCookie("fontSize", fontSize, 7);
    
        // Apply the customizations to the page
        applyCustomizations(bgColor, textColor, fontSize);

        // Update the URL with query string
        const queryString = `?bgColor=${encodeURIComponent(bgColor)}&textColor=${encodeURIComponent(textColor)}&fontSize=${encodeURIComponent(fontSize)}`;
        window.history.replaceState({}, '', queryString);

    });
}


// On page load, apply the user preferences from cookies
document.addEventListener("DOMContentLoaded", function() {
    const bgColor = getQueryParam("bgColor") || getCookie("bgColor") ;
    const textColor = getQueryParam("textColor") || getCookie("textColor") ;
    const fontSize = getQueryParam("fontSize") || getCookie("fontSize") ;

    // Apply the customizations to the page
    applyCustomizations(bgColor, textColor, fontSize);
});