"use strict";

window.addEventListener("load", createLightBox);

function createLightBox() {

    // HERO div
    let lightBox = document.getElementById("HERO");

    // Project 5 using nodes like createElement
    let lbCounter = document.createElement("div");
    let lbPrev = document.createElement("div");
    let lbNext = document.createElement("div");
    let lbImages = document.createElement("div");
    
 
    // Design the lightbox slide counter
    // Project 5 using appendChild
    lightBox.appendChild(lbCounter);
    lbCounter.id = "lbCounter"; 
    let currentImg = 1;
    lbCounter.textContent = currentImg + " / " + imgCount;
 
    // Design the lightbox previous slide button
    lightBox.appendChild(lbPrev);
    lbPrev.id = "lbPrev"; 
    lbPrev.innerHTML = "&#9664;";
    lbPrev.onclick = showPrev;
 
    // Design the lightbox next slide button
    lightBox.appendChild(lbNext);
    lbNext.id = "lbNext";
    lbNext.innerHTML = "&#9654;";
    lbNext.onclick = showNext;
 
   
 
    // Design the lightbox images container
    lightBox.appendChild(lbImages);
    lbImages.id = "lbImages";
    // Add images from the imgFiles array to the container
    for (let i = 0; i < imgCount; i++) {
       let image = document.createElement("img");
       image.src = pictureData[i];
       image.alt = pictureCaptions[i];
       image.onclick = createOverlay;
       lbImages.appendChild(image);
    }
    
    // Function to move forward through the image list
    function showNext() {
       lbImages.appendChild(lbImages.firstElementChild);
       (currentImg < imgCount) ? currentImg++ : currentImg = 1;
       lbCounter.textContent = currentImg + " / " + imgCount;
    }
    
    // Function to move backward through the image list
    function showPrev() {
       lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
       (currentImg > 1) ? currentImg-- : currentImg = imgCount;
       lbCounter.textContent = currentImg + " / " + imgCount;
    }
    function createOverlay() {
       let overlay = document.createElement("div");
       overlay.id = "lbOverlay";
       
       // Add the figure box to the overlay
       let figureBox = document.createElement("figure");
       overlay.appendChild(figureBox);
       
       // Add the image to the figure box
       let overlayImage = this.cloneNode("true");
       figureBox.appendChild(overlayImage);
 
       // Add the caption to the figure box
       let overlayCaption = document.createElement("figcaption");
       overlayCaption.textContent = this.alt;
       figureBox.appendChild(overlayCaption);

       // Add a close button to the overlay
       let closeBox = document.createElement("div");
       closeBox.id = "lbOverlayClose";
       closeBox.innerHTML = "&times;";
       closeBox.onclick = function() {
          document.body.removeChild(overlay);
       }      
       overlay.appendChild(closeBox);
       
       document.body.appendChild(overlay);
    }   
 }
 
 
