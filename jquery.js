$(document).ready(function () {
    // Fade in title and main text one after the other
    $("#title").fadeIn(900, function () {
      $(".text").fadeIn(800);
    });

  });
  // Fade in the image from the left
  $(document).ready(function () {
    $("#heroImage").css({ position: "relative", left: "0px", opacity: 0 });
  
    $("#heroImage").animate({
      left: "50px",
      opacity: 1,
      width: "300px" // optional resizing
    }, 1000);
  });

  // Use jQuery UI for autocomplete functionality
  $(document).ready(function() {
    var fruits = [
      "Apple",
      "Banana",
      "Blueberry",
      "Cherry",
      "Grape",
      "Mango",
      "Orange",
      "Peach",
      "Strawberry",
      "Watermelon"
    ];
  
    $("#fruit").autocomplete({
      source: fruits,
      minLength: 0 
    });
    $("#randSearch").submit(function(e) {
      e.preventDefault(); // Prevent form from refreshing page
      var favoriteFruit = $("#fruit").val(); 
      $("#result").html("Your favorite fruit is: <strong>" + favoriteFruit + "</strong>"); // Display message
      $("#fruit").val(""); // Clear input field
    });
    
  });