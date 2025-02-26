document.addEventListener("DOMContentLoaded", function () {

    // All my variables taken from the document
    let roundsInput = document.getElementById("rounds");
    let gameForm = document.getElementById("game-form");
    let selectionDiv = document.getElementById("selection");
    let resultDiv = document.getElementById("result");
    let resetButton = document.querySelector('input[type="reset"]'); 

    // Array to hold possible answers assignnment 3
    let choices = ["rock", "paper", "scissors"];

    // Variables to keep track of scores and rounds
    let playerScore = 0;
    let computerScore = 0;
    let totalRounds = 0;
    let currentRound = 0;

    // Start Game
    gameForm.addEventListener("submit", function (event) {
        event.preventDefault();
        totalRounds = parseInt(roundsInput.value);
        
        // Error checking to make sure the user enters a valid number of rounds
        if (isNaN(totalRounds) || totalRounds <= 0 || totalRounds > 4) {
            alert("Please enter a valid number of rounds!");
            return;
        }

        // These make sure that the variables are reset when the user starts a new game
        currentRound = 0;
        playerScore = 0;
        computerScore = 0;

        resultDiv.innerHTML = ""; // Clear previous results
        selectionDiv.style.display = "flex"; // Show choice buttons
        resultDiv.style.display = "block"; // Show results section
    });

    // Function to get random computer choice
    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    // Function to determine the winner
    function determineWinner(playerChoice, computerChoice) {
        // Check for a tie
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        }

        // Switch statement to check for win/lose conditions Assignment 3 
        switch (playerChoice) {
            case "rock":
                // Return the correct output. Terenary operator is used to shorten the code
                return computerChoice === "scissors" ? "You win! Rock beats Scissors." : "You lose! Paper beats Rock.";
            case "paper":
                return computerChoice === "rock" ? "You win! Paper beats Rock." : "You lose! Scissors beats Paper.";
            case "scissors":
                return computerChoice === "paper" ? "You win! Scissors beats Paper." : "You lose! Rock beats Scissors.";
            default:
                return "Invalid choice.";
        }
    }

    // Function to handle player choice
    function playRound(playerChoice) {
        // Quick if statement to see if the game is over
        if (currentRound >= totalRounds) {
            alert("Game over! Please start a new game.");
            return;
        }

        // Get computer choice and determine winner
        let computerChoice = getComputerChoice();
        let resultMessage = determineWinner(playerChoice, computerChoice);

        // Score tracking
        // Assignment 3 - If else if statement to check if the player wins or loses
        if (resultMessage.includes("You win")) {
            playerScore++;
        } else if (resultMessage.includes("You lose")) {
            computerScore++;
        }

        currentRound++;

        // Display result
        let roundResult = document.createElement("p");
        roundResult.innerText = `Round ${currentRound}: You chose ${playerChoice}, Computer chose ${computerChoice}. ${resultMessage}`;
        resultDiv.appendChild(roundResult);

        // Check if game is over
        if (currentRound >= totalRounds) {
            let finalResult = document.createElement("h3");
            finalResult.innerText = `Game Over! Final Score - You: ${playerScore}, Computer: ${computerScore}`;
            resultDiv.appendChild(finalResult);
            selectionDiv.style.display = "none"; // Hide choices after game ends
        }
    }

    resetButton.addEventListener("click", function () {
        roundsInput.value = ""; // Reset input field

        // Clear the results
        // Using ChildNodes to get all the child elements of the resultDiv
        let childElements = resultDiv.children;

        // Using a for loop to remove all the child elements effectively clearing the results
        // For loop for Assignment 3
        for (let i = childElements.length - 1; i >= 0; i--) {
            resultDiv.removeChild(childElements[i]);
        }

        // Hiding the divs again
        selectionDiv.style.display = "none"; // Hide selection buttons
        resultDiv.style.display = "none"; // Hide results
    });

    // Add event listeners to buttons
    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
    
});
