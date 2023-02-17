// GENERATE RANDOM ROCK, PAPER, OR SCISSORS
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (3 - 0) + 0)
    switch (randomNumber) {
    case 0:
        return 'ROCK'
    case 1:
        return 'PAPER'
    case 2:
        return 'SCISSORS'
    }
}
// Returns random R/P/S
// console.log(getComputerChoice()); WORKS as function
const computerSelection = getComputerChoice();
console.log(computerSelection); // WORKS as variable

// RECEIVE PLAYER SELECTION
function getPlayerChoice() {
    return prompt("Rock, Paper, or Scissors? --> ").toUpperCase()
    // NEED(?) if statement for invalid inputs?
}
// Returns player R/P/S selection
// console.log(getPlayerChoice()); WORKS as function
const playerSelection = getPlayerChoice();
console.log(playerSelection) // WORKS as variable


// GLOBAL VARIABLES
let playerScore = 0
let compScore = 0
let roundWinner = ''


// PLAYS A SINGLE ROUND
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        roundWinner = "It's a tie for this round."
    } 
    if (
        (playerChoice === "ROCK" && computerChoice === "PAPER") || // Loser conditionals
        (playerChoice === "PAPER" && computerChoice === "SCISSORS") ||
        (playerChoice === "SCISSORS" && computerChoice === "ROCK")
    ) {
        roundWinner = "You lose this round."
        compScore++
        // console.log(compScore) // SCORE SYSTEM WORKS, resets when testing single round
    } 
    if (
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||// Winner conditionals
        (playerChoice === "PAPER" && computerChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER")
    ) { 
        roundWinner = "You win this round."
        playerScore++
        // console.log(playerScore)
    }
    console.log(compScore);
    console.log(playerScore);
    console.log(roundWinner)
    //return roundWinner
}   

// IDEA IS TO RUN SINGLE ROUND 5 TIMES
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
    } 
}

const gameScores = game();
console.log(gameScores);

function gameIsOver() {
    if (compScore === playerScore) {
        console.log("The whole game's a tie!")
    } 
    if (compScore < playerScore) {
        console.log("Player wins whole game!")
    } 
    else {
        console.log("Computer wins whole game!")
    }
    /* 5 rounds possibilities: 
    1) a tie in scores, so a message must be sent
    2) winner 
    3) loser
    Therefore, return string statements based on score possibilities
    */
}

// 
const singleRoundResult = playRound(playerSelection, computerSelection); // STORES STRING
// ^^passing funcs doesn't work, but passing funcs as variables works
console.log(singleRoundResult); // PRINTS STRING TO CONSOLE


/* playGame function
Goal: play single round 5 times
stop after 5th time
announce winner
*/



/* 
    OTHER THINGS WE NEED: 
    loop for multiple rounds
    - use the playRound in the game() function to loop through 5 times    
 */