//declare integer consts for each choice
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

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
            humanChoice = ROCK;
            break
        case "paper":
            humanChoice = PAPER;
            break;
        case "scissors":
            humanChoice = SCISSORS;
            break
        default:
            console.log("Sorry, that's not a valid choice!");
    }

    return humanChoice;
}

