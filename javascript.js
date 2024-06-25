function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    console.log(`Computer chose ${randomChoice}`);
    return randomChoice;
}

getComputerChoice();