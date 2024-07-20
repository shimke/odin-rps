//declare integer consts for each choice
const throwLookup = {
    'rock': 0,
    'paper': 1,
    'scissors': 2
}

//declare score variables
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    console.log(`Computer chose ${randomChoice}`);
    return randomChoice;
}

function getHumanChoice() {
    const humanInput = prompt("Enter your throw: rock, paper, or scissors").toLowerCase();
    console.log(`Human chose ${humanInput}`);
    let humanChoice;
    switch(humanInput) {
        case "rock":
            humanChoice = throwLookup.rock;
            break
        case "paper":
            humanChoice = throwLookup.paper;
            break;
        case "scissors":
            humanChoice = throwLookup.scissors;
            break
        default:
            console.log("Sorry, that's not a valid choice!");
    }

    return humanChoice;
}

function playRound() {
    
}
