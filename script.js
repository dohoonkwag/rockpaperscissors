let randNum;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    randNum = Math.random()
    if (randNum <= 0.33) {
        return 'rock';
    } else if ((randNum > 0.33) && (randNum <= 0.66)) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    humanChoice = prompt('Please type one of the following: rock, paper, scissors');
    if ((humanChoice !== 'rock') && (humanChoice !== 'paper')) {
        humanChoice = 'scissors';
    }
    return humanChoice;
}

function playRound(human, computer) {
    human = human.toUpperCase();
    computer = computer.toUpperCase();
    if ((human === 'ROCK') && (computer === 'PAPER')) {
        computerScore++;
    } else if ((human === 'ROCK') && (computer === 'SCISSORS')) {
        humanScore++;
    } else if ((human === 'PAPER') && (computer === 'SCISSORS')) {
        computerScore++;
    } else if ((human === 'PAPER') && (computer === 'ROCK')) {
        humanScore++;
    } else if ((human === 'SCISSORS') && (computer === 'ROCK')) {
        computerScore++;
    } else if ((human === 'SCISSORS') && (computer === 'PAPER')) {
        humanScore++;
    }
}

function playGame() {
    for (let i=0; i<=4; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore >= 3) {
        console.log('YOU WIN!')
    } else {
        console.log('COMPUTER WINS!')
    }
}

playGame();