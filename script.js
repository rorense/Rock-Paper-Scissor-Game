// Initialsing Variables
let playerPoint = 0;
let computerPoint = 0;

// Calling the fundtion to play 5 rounds of rock, scissor and paper
game();

// function to retrieve the hand of the computer
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection;

    switch (randomNumber) {

        case 0:
            return computerSelection = "ROCK";
            break;
        
        case 1:
            return computerSelection = "SCISSOR";
            break;

        case 2:
            return computerSelection = "PAPER";
    }
}

// function to prompt to retireve data from user
function getUserInput() {
    let userInput = prompt("Choose your hand! (choose between ROCK, SCISSOR, PAPER").toUpperCase();
    return userInput;
}

// function for the win-lose algorithm of the game
function playGame () {
    let userInput = getUserInput();
    let computerSelection = getComputerChoice();
    if ((userInput == "ROCK" && computerSelection == "ROCK")
                    || (userInput == "PAPER" && computerSelection == "PAPER")
                    || (userInput == "SCISSOR" && computerSelection == "SCISSOR")) {
        console.log("It's a tie!");
        return;
    } else if ((userInput == "ROCK" && computerSelection == "SCISSOR")
                    || (userInput == "PAPER" && computerSelection == "ROCK")
                    || (userInput == "SCISSOR" && computerSelection == "PAPER")) {
        playerPoint++
        console.log("You win a point");
        return;
    } else if ((userInput == "ROCK" && computerSelection == "PAPER")
                    || (userInput == "PAPER" && computerSelection == "SCISSOR")
                    || (userInput == "SCISSOR" && computerSelection == "ROCK")) {
        computerPoint++;
        console.log("You lose a point");
        return;
    } 
}

// function to play 5 rounds of the game
function game () {
        for (let i = 0; i < 100; i++) {
        playGame();
        console.log("You: " + playerPoint + " computer: " + computerPoint);
    
        if (playerPoint == 5) {
            console.log("You win the game!")
        } else if (computerPoint == 5) {
            console.log("Computer wins the game!")
        }
    }
}