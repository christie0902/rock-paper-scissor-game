const yourScore = document.querySelector ('.score-human');
const botScore = document.querySelector('.score-bot');
const btnRock = document.querySelector('.btn.rock');
const btnPaper = document.querySelector('.btn.paper');
const btnScissors = document.querySelector('.btn.scissors');
const humanChoice = document.querySelector('.choice-human');
const botChoice = document.querySelector('.choice-bot');
const result = document.querySelector('.result-current');
let humanScore = 0;
let comScore = 0;
let finalResult;
let humanSelect;
let botSelect;

const getBotPlay = () => {
    const options = ["rock", "paper", "scissors"];
    const playOption = Math.ceil(Math.random()*3);

    switch (playOption) {
        case 1:
            botSelect = options[0];
            break;
        case 2:
            botSelect = options[1];
            break;
        case 3:
            botSelect = options[2];
            break;
    }
    botChoice.innerText = `${botSelect}`;
    return botSelect;
}

const play = (humanSelect) => {
    getBotPlay();
    humanChoice.innerText = `${humanSelect}`;

    if (humanSelect === botSelect) {
        result.innerText = "Tie!"
    } else if (humanSelect ==="rock") {
        if (botSelect === "paper") {
            result.innerText = "Bot win!";
            comScore +=1
            botScore.innerText = `${comScore}`;
        } else {
            result.innerText = "You win!";
            humanScore +=1
            yourScore.innerText = `${humanScore}`;
        }
    } else if (humanSelect ==="paper") {
        if (botSelect === "scissors") {
            result.innerText = "Bot win!";
            comScore +=1
            botScore.innerText = `${comScore}`;
        } else {
            result.innerText = "You win!";
            humanScore +=1
            yourScore.innerText = `${humanScore}`;
        }
    } else if (humanSelect ==="scissors") {
        if (botSelect === "rock") {
            result.innerText = "Bot win!";
            comScore +=1
            botScore.innerText = `${comScore}`;
        } else {
            result.innerText = "You win!";
            humanScore +=1
            yourScore.innerText = `${humanScore}`;
        }
    }
}

btnRock.addEventListener("click", (event) => { 
    humanSelect="rock";
    play('rock');
})
btnScissors.addEventListener("click", (event)  => { 
    humanSelect="scissors";
    play('scissors');
})
btnPaper.addEventListener("click", (event)  => { 
    humanSelect="paper";
    play('paper');
})