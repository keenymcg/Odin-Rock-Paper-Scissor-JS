const options = ["ROCK", "PAPER", "SCISSORS"]
let winners = []

function getComputerChoice() {
    const randOption = options[Math.floor(Math.random() * options.length)]; // length method doesn't start from index 0...
    // ...therefore there's an equal chance for each option
    // putting this math in square brackets, prefixed by the "options" var, brings back the string (since it's being indexed)
    return randOption
    }

function checkWinner(playerChoice, computerChoice) { 
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
        return "Player"; 
    }
}   

/* function playRound(playerChoice, computerChoice) { 
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
   // console.log(result)
} */

function startGame() { //todo: change to playGame()
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) => 
        img.addEventListener("click", () => {
            if (img.id) {
                // console.log(img.id);
                playRound(img.id);
            }
        })  
    );
}

// startGame();

function playRound(playerChoice) { // todo: change to PlayRound()
    let wins = checkAmountOfWins();
    if (wins >= 5) {
        return;
    }
    const computerChoice = getComputerChoice();

    let winner = checkWinner(playerChoice, computerChoice);
    winners.push(winner);

    tally();

    displayRound(playerChoice, computerChoice, winner);

    wins = checkAmountOfWins();
    if (wins == 5) {
        displayEnd();
    }
    /* console.log("Game Over") // loop breaks after 5 rounds
    if (scorePlayer == 5) {
        console.log("Player was the winner")
        //return "Player was the winner"
    } else {
        console.log("Computer was the winner")
        //return "Computer was the winner"
    }
    */ 
}

function checkAmountOfWins() {
    // maybe store round-winner string in a variable
    // that winner is then pushed to the winners array
    // we filter both for "computer" and "player", and check the length of that array
    // return  math.max to get the higher number
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCount, cWinCount);
}

function tally() {
    let playerScore = winners.filter((item) => item == "Player").length;
    let compScore = winners.filter((item) => item == "Computer").length;
    let tieScore = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Player Score: ${playerScore}`;
    document.querySelector(".compScore").textContent = `Computer Score: ${compScore}`;
    document.querySelector(".tieScore").textContent = `Ties: ${tieScore}`;
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector(".roundWinner").textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}.`
    displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
    if (winner == "Player") {
        return "You won this round!"
    } else if (winner = "Computer") {
        return "You lose this round!"
    } else {
        return "It's a tie..."
    }
}

function displayEnd() {
    let playerWins = winners.filter((item) => item = "Player").length;
    if (playerWins == 5) {
        document.querySelector(".roundWinner").textContent = "You beat the computer!"
    } else {
        document.querySelector(".roundWinner").textContent = "You lost to the computer!"
    }
}

startGame();

/* function announceWinner() {
    if (scorePlayer = 5) {
        console.log("You win!")
    } else if (scoreComputer = 5) {
        console.log("The computer wins!")
    }
} */

// HTML

const body = document.body;

// R/P/S Buttons

// Tally

