$(document).ready(function () {
    // Fade in title and main text one after the other
    $("#title").fadeIn(900, function () {
      $(".text").fadeIn(800);
    });
  
    // Keep your nav fadeOut effect if you want
    $("a").click(function (event) {
      const link = $(this).attr("href");
  
      if (
        !link ||
        link.startsWith("#") ||
        link.startsWith("http") ||
        event.which > 1 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey
      ) return;
  
      event.preventDefault();
  
      $("body").fadeOut(400, function () {
        window.location.href = link;
      });
    });
  });
  $(document).ready(function () {
    $("#heroImage").css({ position: "relative", left: "0px", opacity: 0 });
  
    $("#heroImage").animate({
      left: "50px",
      opacity: 1,
      width: "300px" // optional resizing
    }, 1000);
  });