let secretNumber = Math.trunc(Math.random()*20)+1;
let roundEl = 1;
let score = 20;
let highScore = 0;

function displayMessage(msg){
    document.querySelector('.message').textContent = msg;
}

document.getElementById('checkbtn').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess-number').value);

    if(!guess){
        displayMessage('Not a number! ⛔️');
    }else if(guess === secretNumber){
        displayMessage('Correct!🎉');
        document.querySelector('body').style.backgroundColor = '#a2a8d3';
        document.querySelector('.header').style.backgroundColor = '#a2a8d3';
        document.querySelector('.guess').style.width = '150px';
        document.querySelector('.guess').textContent = secretNumber;
        document.querySelector('.highscore').textContent = (score > highScore) ? score : highScore;
    }else if(guess !== secretNumber){
        if(score > 1){
        score--;
        displayMessage((secretNumber > guess) ? 'Too high 📈' : 'Too low 📉');
        document.querySelector('.score').textContent = score;
        }else{
        displayMessage('You lost game💥');
        document.querySelector('.score').textContent = 0;
        }
    };
});

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;
    roundEl++;
    document.querySelector('.guess').textContent = secretNumber;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').style.width = '100px';
    document.querySelector('body').style.backgroundColor = ' rgb(76, 149, 149)';
    document.querySelector('.header').style.backgroundColor = 'rgb(64, 139, 193)';
    document.querySelector('.guess-number').value = '';
    document.querySelector('.guess').textContent = '?';
    document.querySelector('.round-game').textContent = roundEl;
    displayMessage('Guess My Number?');
});

