//GLOBAL VARIABLES
let playerScore = 0
let compScore = 0


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
console.log(getComputerChoice());
const computerChoice = getComputerChoice();

// RECEIVE PLAYER SELECTION
function getPlayerChoice() {
    return prompt("Rock, Paper, or Scissors? --> ").toUpperCase()
}
// Returns player R/P/S selection
const playerChoice = getPlayerChoice();


/* 2) write a function that plays a single round of R/P/S
- define the function playRound(playerSelection, computerSelection)
- write conditional for tie
- write shorthand conditionals for "you win" scenarios
    - return "You win this round!"
    - add point to playerScore++

- write shorthand conditionals for "you lose" scenarios
    - return "Computer wins this round!"
    - add point to compScore++


    OTHER THINGS WE NEED: 
    loop for multiple rounds


    
 */