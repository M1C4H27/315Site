// jquery.js
$(document).ready(function () {
    // Fade in the body when the page loads
    $("body").css("display", "none");
    $("body").fadeIn(600);
  
    // When any nav link is clicked, fade out and then navigate
    $("a").click(function (event) {
      const link = $(this).attr("href");
  
      // Ignore anchor links (e.g., #section) and external links
      if (link && !link.startsWith("#") && !link.startsWith("http")) {
        event.preventDefault(); // prevent instant navigation
  
        $("body").fadeOut(400, function () {
          window.location.href = link; // navigate after fade-out
        });
      }
    });
  });