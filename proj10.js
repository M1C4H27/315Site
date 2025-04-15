// Add Event Listener for the shuffle button
document.getElementById("shuffle").addEventListener("click", function() {
    shufflePieces();
    startTimer(); // Start the timer when shuffled
});
// Add Event Listener for the reset button
document.getElementById("reset").addEventListener("click", function() {
    resetPieces();
    resetTimer(); // Reset the timer when reset
    stopTimer(); // Stop the timer when reset
   
});
// Function to reset the pieces
function resetPieces() {
    document.getElementById("win-message").textContent = ""; // Clear win message
    shufflePieces(); // Shuffle the pieces again after reset
}
// Function to shuffle the images
function shufflePieces()
{
    const board = document.getElementById("puzzle-container");
    const tiles = Array.from(board.children);
    const shuffled = tiles.sort(() => Math.random() - 0.5);
    shuffled.forEach(tile => board.appendChild(tile));
}

// Drag and Swap functionality
// let draggedTile = null;

// document.querySelectorAll(".pieces").forEach(pieces => {
//     pieces.addEventListener("dragstart",e => {

//         draggedTile = e.target;
//     });
//     pieces.addEventListener("dragover",e => {
//         e.preventDefault();
//     });
   
//     pieces.addEventListener("drop",e => {
//         e.preventDefault();
       
//         if (draggedTile && draggedTile !== e.target) {
//             const temp = draggedTile.src;
//             draggedTile.src = e.target.src;
//             e.target.src = temp;
//             draggedTile = null;
//             checkSolve(); // Check if the puzzle is solved after swapping
//         }
//     });
// });

let draggedTile = null;

  document.querySelectorAll(".pieces").forEach(pieces => {
    pieces.addEventListener("dragstart", e => {
      draggedTile = e.target;
      e.target.classList.add("dragging");
    });

    pieces.addEventListener("dragend", e => {
      e.target.classList.remove("dragging");
    });

    pieces.addEventListener("dragenter", e => {
      if (e.currentTarget !== draggedTile) {
        e.currentTarget.classList.add("hovered");
      }
    });

    pieces.addEventListener("dragleave", e => {
      e.currentTarget.classList.remove("hovered");
    });
    pieces.addEventListener("dragover",e => {
      e.preventDefault();
   });
    pieces.addEventListener("drop", e => {
      e.preventDefault();
      e.currentTarget.classList.remove("hovered");

      if (draggedTile && draggedTile !== e.currentTarget) {
        const tempSrc = draggedTile.src;
        draggedTile.src = e.currentTarget.src;
        e.currentTarget.src = tempSrc;

        checkSolve(); // call win check
      }

      draggedTile = null;
    });
  });
// Function to check if the puzzle is solved
function checkSolve()
{
    const correctSrcOrder = [
        "tile1.png",
        "tile2.png",
        "tile3.png",
        "tile4.png",
        "tile5.png",
        "tile6.png"
      ];
    
      const board = document.getElementById("puzzle-container");
      const tiles = Array.from(board.children).map(tile =>
        tile.src.split("/").pop() // Extract the image name from the src
      );
    
      const isSolved = correctSrcOrder.every((name, i) => name === tiles[i]);
    
      const message = document.getElementById("win-message");
      if (isSolved) {
        stopTimer(); // Stop the timer when solved
        message.textContent = "Puzzle completed successfully!";
        message.style.color = "green";
        message.style.fontWeight = "bold";
        console.log("✅ Puzzle completed successfully!");
       
      } else {
        message.textContent = "";
      }
}
// Create a timer function
let timerInterval = null;
let seconds = 0;
function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        document.getElementById("timer").textContent = `Time: ${seconds} seconds`;
    }, 1000);
}
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}
// Reset the timer
function resetTimer() {
    seconds = 0;
    document.getElementById("timer").textContent = "";
   
}