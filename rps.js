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

// Lets game run 5 times
function game () {
    for (var i = 0; i < 5; i++) {
        console.log(playGame());
    }
}

// Run game
game();

// Path: rps.html
