//declare lookup table mapping throws to integers
const throwLookup = {
    'rock': 0,
    'paper': 1,
    'scissors': 2,
    0: 'rock',
    1: 'paper',
    2: 'scissors'
}

function playGame() {
    //declare score variables
    let computerScore = 0;
    let humanScore = 0;

    for (i=0; i<6; i++) {
        let compThrow = getComputerChoice();
        let humanThrow = getHumanChoice();

        playRound(compThrow,humanThrow);
    }

    function playRound(compChoice,humanChoice) {
        let compThrow = throwLookup[compChoice];
        let userThrow = throwLookup[humanChoice];
    
        //calculates outcome - Adding 3 to difference ensures remainder is positive
        let outcome = ((userThrow - compThrow) + 3) % 3
    
        //Map outcome to score - Outcome of 0 is tie, 1 is human win, 2 is human loss
        switch (outcome) {
            case 1:
                humanScore++;
                console.log(`You win! You threw ${humanChoice} which beats ${compChoice}!`);
                break;
            case 2:
                computerScore++;
                console.log(`You lose! You threw ${humanChoice} which loses to ${compChoice}!`);
                break;
        }
    
    }

    function getComputerChoice() {
        const randomChoice = throwLookup[Math.floor(Math.random() * 3)];
        console.log(`Computer chose ${randomChoice}`);
        return randomChoice;
    }
    
    function getHumanChoice() {
        const humanChoice = prompt("Enter your throw: rock, paper, or scissors").toLowerCase();
        
        switch(humanChoice) {
            case "rock":
            case "paper":
            case "scissors":
                console.log(`Human chose ${humanChoice}`);
                return humanChoice;
                break;
            default:
                console.log("Sorry, that's not a valid choice! Please try again.");
    
                //This recursion is ok because it's just a demo browser game and moreover is limited by human input. 
                return getHumanChoice();
        }
    }
}


