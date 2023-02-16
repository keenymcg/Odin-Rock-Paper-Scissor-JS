/* getComputerChoice returns a random index of the R/P/S array */
function getComputerChoice() {
    let game_options = ["rock", "paper", "scissors"];
    switch 
}

/* variables to set initial zero'd-out point values */
let pointTracker_computer = 0
let pointTracker_human = 0


/* playRound sets all the conditional responses to each round
TO DO: ADD POINT TRACKING? */
function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === 1) {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === 2) {
        return "You lose! Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === 0) {
        return "You lose! Rock beats Scissors"
    } else if (playerSelection === "scissors" && computerSelection === 2 || 
                playerSelection === "rock" && computerSelection === 0 || 
                playerSelection === "paper" && computerSelection === 1) {
        return "It's a tie"
    } else {
        return "You win!"
    }
}

/* Calls the playRound function inside in order to assign points, but something
is not working. 
It checks the strings, but even if the human wins, it says the computer gets a point */
function game() {
    for (let rounds = 0; rounds < 5; rounds++)
        playRound();
            if ("You lose! Rock beats Scissors" ||
            "You lose! Scissors beats Paper" ||
            "You lose! Paper beats Rock") {
                pointTracker_computer += 1;
            } else if ("You win!") {
                pointTracker_human += 1;
    
    console.log("That's 5 rounds!")        }
    if (pointTracker_computer < pointTracker_human) {
        console.log("You win! The Computer loses!");
    } else {
        console.log("You lose! The Computer wins!");
    }
}

/* make a prompt that takes the user's input, makes it lowercase, 
and assigns that string a variable
then make an exception that says "Not a valid input"*/

console.log(game(playRound(prompt("Rock, Paper, or Scissors? --> "), getComputerChoice)));