function getComputerChoice() {
    let game_options = ["rock", "paper", "scissors"];
    return Math.floor(Math.random() * game_options.length);
}

let pointTracker_computer = 0
let pointTracker_human = 0

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

function game() {
    playRound();
        if ("You lose! Rock beats Scissors" ||
        "You lose! Scissors beats Paper" ||
        "You lose! Paper beats Rock") {
            pointTracker_computer += 1;
        } else if ("You win!") {
            pointTracker_human += 1;
        }
}

/* make a prompt that takes the user's input, makes it lowercase, 
and assigns that string a variable
then make an exception that says "Not a valid input"*/
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection); /* don't know why changing this console.log to the getComputerChoice function doesn't */
console.log(playRound(playerSelection, computerSelection));
