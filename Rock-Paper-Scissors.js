const options = ["ROCK", "PAPER", "SCISSORS"]

function getComputerChoice() {
    const randOption = options[Math.floor(Math.random() * options.length)]; // length method doesn't start from index 0...
    // ...therefore there's an equal chance for each option
    // putting this math in square brackets, prefixed by the "options" var, brings back the string (since it's being indexed)
    return randOption
    }

function getPlayerChoice() { // We want to return the player's choice only if certain conditions are true
    let validatedInput = false; 
    while(validatedInput == false) {
        const choice = prompt("Rock Paper Scissors"); // store prompt in "choice" variable because...
        // we can't check if the user's input is empty without storing the prompt in a variable
        if (choice == null) {
            continue // all of this first section in the while loop checks for no input, and if no input is given, it restarts While loop from here
        }
        const choiceInUpper = choice.toUpperCase(); // takes the "choice" variable from above...
        // ...and changes it to the case of the global "options" variable
        if (options.includes(choiceInUpper)) { // uses ".includes" method on options-array variable to see if it contains the player choice
            // and if the player choice is something like "poo" or some other invalid input, the condition remains false, and we start the while loop again
            validatedInput = true;
            return choiceInUpper; // the result of this function can now only be one of the "options" choices
        }
    }
}

function checkWinner(playerChoice, computerChoice) { // goal of function is only to return a string of the winner
    // need to pass choices as parameters and then compare them
    if (playerChoice === computerChoice) { 
        return "Tie" // start with "Tie" because it's simple
    } 
    else if (
        (playerChoice === "ROCK" && computerChoice === "PAPER") || // Loser conditionals
        (playerChoice === "PAPER" && computerChoice === "SCISSORS") ||
        (playerChoice === "SCISSORS" && computerChoice === "ROCK")
    ) {
        return "Computer";
    } 
    else { 
        return "Player"; // no need to define the winner conditionals because they are the only options left
    }
}   

function playRound(playerChoice, computerChoice) { // We pass the player/comp choices as parameters... 
    // ...to paste those string values into the winner-declaration "result" string
    const result = checkWinner(playerChoice, computerChoice); // We pass them as parameters again in checkWinner to store the value in "result" 
    if (result == "Tie") { 
        return "It's a tie!"
    }
    else if (result == "Player") {
        return `You win! ${playerChoice} beats ${computerChoice}`
    }
    else {
        return `You lose! ${computerChoice} beats ${playerChoice}`
    }
   // console.log(result)
}

let scorePlayer = 0; 
let scoreComputer = 0;

function playGame(playerChoice) {
    console.log("New Round!")
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    if (checkWinner(playerChoice, computerChoice) == "Player") {
        scorePlayer++;
    } 
    else if (checkWinner(playerChoice, computerChoice) == "Computer") {
        scoreComputer++;
    }
    console.log(scorePlayer);
    console.log(scoreComputer);
    /* console.log("Game Over") // loop breaks after 5 rounds
    if (scorePlayer > scoreComputer) {
        console.log("Player was the winner")
        //return "Player was the winner"
    }
    else if (scorePlayer < scoreComputer) {
        console.log("Computer was the winner")
        //return "Computer was the winner"
    }
    else {
        console.log("We have a tie.")
        // return "We have a tie."
    } */ 
}

function announceWinner() {
    if (scorePlayer = 5) {
        console.log("You win!")
    } else if (scoreComputer = 5) {
        console.log("The computer wins!")
    }
}

// HTML

const body = document.body;

// Header

const header = document.createElement('header');

// R/P/S Buttons

const btnDivRock = document.createElement('div');
const rockBtn = document.createElement('button');
rockBtn.textContent = "ROCK"

const btnDivPaper = document.createElement('div');
const paperBtn = document.createElement('button');
paperBtn.textContent = "PAPER"

const btnDivScissors = document.createElement('div');
const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = "SCISSORS"

const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";

rockBtn.addEventListener('click', () => playGame(rock));
paperBtn.addEventListener('click', () => playGame(paper));
scissorsBtn.addEventListener('click', () => playGame(scissors));

body.append(header, btnDivRock, btnDivPaper, btnDivScissors);

btnDivRock.append(rockBtn);
btnDivPaper.append(paperBtn);
btnDivScissors.append(scissorsBtn);

// Results

const resultsDiv = document.createElement('div');
const scoreComputerDiv = document.createElement('div');
const scorePlayerDiv = document.createElement('div');
const message = document.createElement('p');

resultsDiv.className = 'results score'
resultsDiv.textContent = 'SCOREBOARD'
message.textContent = 'temp text'

scorePlayerDiv.textContent = scorePlayer;
scoreComputerDiv.textContent = scoreComputer;


body.append(resultsDiv);
resultsDiv.append(scoreComputerDiv);
resultsDiv.append(scorePlayerDiv);
resultsDiv.append(message);

