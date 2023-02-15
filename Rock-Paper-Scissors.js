function getComputerChoice() {
    let game_options = ["rock", "paper", "scissors"];
    return Math.floor(Math.random() * game_options.length);
}

console.log(getComputerChoice());

let pointTracker = 0

function gameTime (playerSelection, computerSelection) {
    if (playerSelection === 0 && computerSelection === 1) {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === 1 && computerSelection === 2) {
        return "You lose! Scissors beats Paper"
    } else if (playerSelection === 2 && computerSelection === 0) {
        return "You lose! Rock beats Scissors"
    }
}

/* make a prompt that takes the user's input, makes it lowercase, 
and assigns that string a variable
then make an exception that says "Not a valid input"*/

/* Eventually convert the below function to an input-based function?*/
console.log(gameTime(0, 1));