//declare integer consts for each choice

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    console.log(`Computer chose ${randomChoice}`);
    return randomChoice;
}

function getHumanChoice() {
    const humanInput = prompt("Enter your throw: rock, paper, or scissors");
    console.log(`Human chose ${humanInput}`);
    let humanChoice;
    switch(humanInput) {
        case "rock":
            humanChoice = 0;
            break
        case "paper":
            humanChoice = 1;
            break;
        case "scissors":
            humanChoice = 2;
            break
        default:
            console.log("Sorry, that's not a valid choice!");
    }

    return humanChoice;
}

