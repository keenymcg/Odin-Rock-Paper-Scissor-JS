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
    // need to pass choices are parameters and then compare them
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

function playRound(playerChoice, computerChoice) { // We pass the player/comp choices as parameters for one reason: 
    // ...to paste those string values into the winner-declaration "result" string
    const result = checkWinner(playerChoice, computerChoice); // We pass them as parameters again in checkWinner to store the value in "result" var
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

function playGame() { // THE REST OF OUR HELPER FUNCTIONS CULMINATE INSIDE THIS FUNCTION such that to play the game we only have to call this function
    let scorePlayer = 0; 
    let scoreComputer = 0;
    console.log("Welcome!") // announces the game before the 5-round loop starts
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice(); // getting the player & comp choices are inside of the for loop because they need to change with each round
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice)); // we pass the player/computer choices into playRound, which initiates the checkWinner func...
        if (checkWinner(playerChoice, computerChoice) == "Player") { // the round-winner is announced, and then that info is used to tally the score
            scorePlayer++;
        } 
        else if (checkWinner(playerChoice, computerChoice) == "Computer") {
            scoreComputer++;
        }
        console.log("--------"); // logs a line to delineate the rounds
    }
    console.log("Game Over") // loop breaks after 5 rounds
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

playGame();