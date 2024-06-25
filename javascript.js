function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    console.log(`Computer chose ${randomChoice}`);
    return randomChoice;
}

function getHumanChoice() {
    const humanChoice = prompt("Enter your throw: Rock, paper, or scissors");
    console.log(`Human chose ${humanChoice}`);
    return humanChoice;
}

