const options = ["ROCK", "PAPER", "SCISSORS"];
let wins = 0;
let winners = [];
let roundWinner = ''

function getComputerChoice() {
    const randOption = options[Math.floor(Math.random() * options.length)]; // length method doesn't start from index 0...
    // ...therefore there's an equal chance for each option
    // putting this math in square brackets, prefixed by the "options" var, brings back the string (since it's being indexed)
    return randOption;
};

function checkWinner(playerChoice, computerChoice) { 
    if (playerChoice === computerChoice) { 
        return "Tie"
    } else if (
        (playerChoice === "ROCK" && computerChoice === "PAPER") || // Loser conditionals
        (playerChoice === "PAPER" && computerChoice === "SCISSORS") ||
        (playerChoice === "SCISSORS" && computerChoice === "ROCK")
    ) {
        return "Computer";
    } else { 
        return "Player"; 
    };
};  

function startGame() {
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) => 
        img.addEventListener("click", () => {
            if (img.id) {
                // console.log(img.id);
                playRound(img.id);
            };
        })
    );
};

function playRound(playerChoice) {
    let wins = checkAmountOfWins();
    if (wins >= 5) {
        return; //stops round & the game if 5 comp or human plays have happened
    }
    const computerChoice = getComputerChoice();

    let winner = checkWinner(playerChoice, computerChoice);
    winners.push(winner);

    tally();

    displayRound(playerChoice, computerChoice, winner);

    wins = checkAmountOfWins();
    if (wins === 5) {
        document.querySelector("#roundWinner2").textContent = '';
        displayEnd();
    };
};

function checkAmountOfWins() {
    const pWinCount = winners.filter((item) => item === "Player").length;
    const cWinCount = winners.filter((item) => item === "Computer").length;
    // const tiesCount = winners.filter((item) => item === "Tie").length;
    console.log(`pWinCount = ${Math.max(pWinCount)}`);
    console.log(`cWinCount = ${Math.max(cWinCount)}`);
    return Math.max(pWinCount, cWinCount); //returns the highest number of wins for comp or human. Used for stopping the game
};

function tally() {
    let playerScore = winners.filter((item) => item == "Player").length;
    let compScore = winners.filter((item) => item == "Computer").length;
    let tieScore = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Player Score: ${playerScore}`;
    document.querySelector(".compScore").textContent = `Computer Score: ${compScore}`;
    document.querySelector(".tieScore").textContent = `Ties: ${tieScore}`;
};

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector(".roundWinner").textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}.`
    displayRoundWinner(winner);
};

function displayRoundWinner(winner) {
    if (winner === "Player") {
        roundWinner = "You won this round!";
    } else if (winner === "Computer") {
        roundWinner = "You lose this round!";
    } else {
        roundWinner = "It's a tie!";
    };
    document.querySelector("#roundWinner2").textContent = roundWinner;
};

function displayEnd() {
    let playerWins = winners.filter((item) => item === "Player").length;
    let compWins = winners.filter((item) => item === "Computer").length;
    console.log(playerWins);
    console.log(compWins);
    
    if (playerWins === 5 && compWins < 5) {
        document.querySelector(".roundWinner").textContent = "You beat the computer!"
    } else {
        document.querySelector(".roundWinner").textContent = "You lost to the computer!"
    };
    document.querySelector(".reset").style.display = "flex";
};

function reset() {
    winners = []
    document.querySelector(".roundWinner").textContent = ""
    document.querySelector(".playerScore").textContent = `Player Score: 0`;
    document.querySelector(".compScore").textContent = `Computer Score: 0`;
    document.querySelector(".tieScore").textContent = `Ties: 0`;
    document.querySelector(".reset").style.display = "none";
};

startGame();

const body = document.body;