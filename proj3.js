document.addEventListener("DOMContentLoaded", function () {
    let roundsInput = document.getElementById("rounds");
    let gameForm = document.getElementById("game-form");
    let selectionDiv = document.getElementById("selection");
    let resultDiv = document.getElementById("result");
    let resetButton = document.querySelector('input[type="reset"]'); // Select Reset button
    
    let choices = ["rock", "paper", "scissors"];
    let playerScore = 0;
    let computerScore = 0;
    let totalRounds = 0;
    let currentRound = 0;

    // Start Game
    gameForm.addEventListener("submit", function (event) {
        event.preventDefault();
        totalRounds = parseInt(roundsInput.value);
        
        if (isNaN(totalRounds) || totalRounds <= 0 || totalRounds > 4) {
            alert("Please enter a valid number of rounds!");
            return;
        }

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
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        }

        switch (playerChoice) {
            case "rock":
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
        if (currentRound >= totalRounds) {
            alert("Game over! Please start a new game.");
            return;
        }

        let computerChoice = getComputerChoice();
        let resultMessage = determineWinner(playerChoice, computerChoice);

        // Score tracking
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
    // Reset the game when Reset button is clicked
    resetButton.addEventListener("click", function () {
        roundsInput.value = ""; // Reset input field
        resultDiv.innerHTML = ""; // Clear results
        selectionDiv.style.display = "none"; // Hide selection buttons
        resultDiv.style.display = "none"; // Hide results
    });
    // Add event listeners to buttons
    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
    
});
