// console.log("hi");

const options = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice() {
    while (true) {
        const input = prompt("Rock, Paper or Scissors: ");
        if (input === null) return null;
        const choice = input.trim().toLowerCase();
        if (options.includes(choice)) return choice;
        alert("Invalid. Please type rock, paper or scissors.");
    }
}

function checkResult(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        return "Tie";
    }
    else if(
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "rock")
    ){
        return "Human";
    } else {
        return "Computer";
    }
}

function playRound(humanChoice, computerChoice){
    const winner = checkResult(humanChoice , computerChoice);
    if(winner == "Tie"){
        return "Its a Tie."
    }
    else if(winner == "Human"){
        humanScore++;
        return `You Win ${humanChoice} beats ${computerChoice}`
    }
    else{
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`
    }
}

function playGame(){
    humanScore = 0;
    computerScore = 0;

    for(let i=1; i<=5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Round ${i}: ${playRound(humanSelection, computerSelection)}`);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

     if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("The computer won the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();