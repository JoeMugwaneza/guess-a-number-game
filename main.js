let randomNumber = Math.floor(Math.random()* 100) + 1;

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

const guesses = document.querySelector('.guesses');
const lastGuess = document.querySelector('.lastGuess');
const lowOrHigh = document.querySelector('.lowOrHigh');

let guessCount = 1;
let resetButton;

// button is given ability to be clicked


// guessing fuction
// 1. can given you all the records of guesses
// 2. can tell you if you are wrong, below or above right guess
// 3. can congratulate you when you win.

function checkGuess(){
    let userGuess = Number(guessField.value);

    if(guessCount === 1){
        guesses.textContent = "Previous Guesses: ";
    }
    
    guesses.textContent += userGuess + " ";
   
    if(userGuess < randomNumber){
        lastGuess.textContent = "WRONG!"
        lastGuess.style.backgroundColor = 'red';
        lowOrHigh.textContent = "Last guess was too low!";
        guessField.value = "";
        guessField.focus();

    } else if(userGuess > randomNumber){
        lastGuess.textContent = "WRONG!"
        lastGuess.style.backgroundColor = 'red';
        lowOrHigh.textContent = "Last guess was too high!";
        guessField.value = "";
        guessField.focus();
    }

    function gameOutcome(){
        if(guessCount === 10){
            lastGuess.textContent = "!!!GAME OVER!!!";
            tryAgainButton();
        } else if (userGuess === randomNumber){
            lastGuess.textContent = "Congratulations! You got it right!"
            lastGuess.style.backgroundColor = 'green';
            tryAgainButton();
        }
    }

    guessCount++;
    gameOutcome();
}

guessSubmit.addEventListener('click', checkGuess);

// create button to refresh the game and start over
function tryAgainButton(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    lowOrHigh.textContent = " ";
    resetButton = document.createElement('button');
    resetButton.textContent = "Start New Game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGameOver)
}

// reset recorded guesses to start fresh

function resetGameOver(){
    guessCount = 1;
    let resetResultSections = document.querySelectorAll('resultSections p');
    for (let i = 0; i < resetResultSections.length; i++){
        resetResultSections[i].textContent = " ";
    }

    resetButton.parentNode.removeChild(resetButton);
    guesses.textContent = "";
    guessSubmit.disabled = false;
    guessField.disabled = false;
    lastGuess.textContent = "";
    guessField.value = "";
    guessField.focus();
    lastGuess.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random()*100)+ 1;
}