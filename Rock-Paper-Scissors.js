const options = ["ROCK", "PAPER", "SCISSORS"]

// GENERATE RANDOM ROCK, PAPER, OR SCISSORS
function getComputerChoice() {
    const randomNumber = options[Math.floor(Math.random() * options.length)];
    return randomNumber
    }

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie"
    } 
    else if (
        (playerChoice === "ROCK" && computerChoice === "PAPER") || // Loser conditionals
        (playerChoice === "PAPER" && computerChoice === "SCISSORS") ||
        (playerChoice === "SCISSORS" && computerChoice === "ROCK")
    ) {
        return "Computer";
        // compScore++
        // console.log(compScore) // SCORE SYSTEM WORKS, resets when testing single round
    } 
    else { 
        return "Player";
        // playerScore++
        // console.log(playerScore)
    }
}   

function playRound(playerChoice, computerChoice) {
    const result = checkWinner(playerChoice, computerChoice);
    if (result == "Tie") {
        return "It's a tie!"
    }
    else if (result == "Player") {
        return `You win! ${playerChoice} beats ${computerChoice}`
    }
    else {
        return `You lose! ${computerChoice} beats ${playerChoice}`
    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if (choice == null) {
            continue
        }
        const choiceInUpper = choice.toUpperCase();
        if (options.includes(choiceInUpper)) {
            validatedInput = true;
            return choiceInUpper;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        console.log("--------");
        if (checkWinner(playerChoice, computerChoice) == "Player") {
            scorePlayer++;
        } 
        else if (checkWinner(playerChoice, computerChoice) == "Computer") {
            scoreComputer++;
        }
    }
    console.log("Game Over")
    if (scorePlayer > scoreComputer) {
        console.log("Player was the winner")
    }
    else if (scorePlayer < scoreComputer) {
        console.log("Computer was the winner")
    }
    else {
        console.log("We have a tie.")
    }
}

game();