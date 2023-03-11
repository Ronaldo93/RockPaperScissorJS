// Function RockPaperScissors on console
function getComputerChoice () {
    var Possibility = ['rock', 'paper', 'scissor'];
    var random = Math.floor(Math.random() * Possibility.length);
    return Possibility[random];
}

// Play RPS with user (get input from both user and computer):
function playGame (playerSelection, computerSelection) {
    // Get computer choice first
    var computerSelection = getComputerChoice();
    // Get user (and case-insensitive)
    var playerSelection = prompt("Rock, Paper, Scissor?").toLowerCase();
    // Check if user input is valid
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor') {
        // Check if user wins
        if ((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')) {
            console.log("You win! " + playerSelection + " beats " + computerSelection);
        }
        // Check if user loses
        else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissor') || (playerSelection === 'scissor' && computerSelection === 'rock')) {
            console.log("You lose! " + computerSelection + " beats " + playerSelection);
        }
        // Check if user draws
        else if (playerSelection === computerSelection) {
            console.log("Draw! You both chose " + playerSelection);
        }
    }

    // If user input is invalid
    else {
        console.log("Invalid input. Please try again.");
    }
}

// Run game

// select all of the button within div
const DivButtons = document.querySelectorAll('.userChoice > button');
// select the div that will display the result
const result = document.querySelector('.result');
// select the div that will display the score
const score = document.querySelector('.score');
// select the div that will display the round
const round = document.querySelector('.round');
// select the div that will display the winner
const winner = document.querySelector('.winner');

// Set initial score
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// Set initial winner
let Winner = "";

console.log(DivButtons.id);

// Add event listener to buttons (loop through all the button)
DivButtons.forEach((button) => {
    // Get comp choice
    var computerSelection = getComputerChoice();
    // Get user choice
    var playerSelection = button.className;
    // Add event listener

    button.addEventListener('click', () => {
        if ((playerScore < 5) && (computerScore < 5)) {        
            if ((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')) {
                // Add playerscore
                playerScore += 1;
                // Add round
                roundCount += 1;
                // Display result
                result.textContent = "You win! " + playerSelection + " beats " + computerSelection;
            }
            // Check if user loses
            else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissor') || (playerSelection === 'scissor' && computerSelection === 'rock')) {
                computerScore += 1;
                roundCount += 1;
                result.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
            }
            // Check if user draws
            else if (playerSelection === computerSelection) {
                roundCount += 1;
                result.textContent = "Draw! You both chose " + playerSelection;
            }
            // Display score
            score.textContent = "Score: " + playerScore + " - " + computerScore;
            // Display round
            round.textContent = "Round: " + roundCount;

            // Check if player wins
            if (playerScore === 5) {
                Winner = "Player";
            }
            // Check if computer wins
            else if (computerScore === 5) {
                Winner = "Computer";
            }
            else { Winner = "It's a tie!"}

            // Display winner
            winner.textContent = "Winner: " + Winner;
        }
    })  
})







