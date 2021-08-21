let randomNumber = Math.floor(Math.random()* 100) + 1;

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

const guesses = document.querySelector('.guesses');
const lastGuess = document.querySelector('.lastGuess');
const lowOrHigh = document.querySelector('.lowOrHigh');

let guessCount = 1; 
let resetButton;

// button was given ability to be click to activate guessing

guessSubmit.addEventListener('click', checkGuess);

// guessing fuction
// 1. can given you all the records of guesses
// 2. can tell you if you are wrong, below or above right guess
// 3. can congratulate you when you win

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
    } else{
        // if userGuess is not less than or greater than random, means you won
        gameWon();
    }

    function gameWon(){
            guessField.disabled = true;
            guessSubmit.disabled = true;
            lastGuess.textContent = "Congratulations! You got it right!"
            lastGuess.style.backgroundColor = 'green';
            lowOrHigh.textContent = " ";
            tryAgain()
    }

    guessCount++;
    resetGameOver();
}

function resetGameOver(){
    if(guessCount === 10){
        lastGuess.textContent = "!!!GAME OVER!!!";
        guessField.disabled = true;
        guessSubmit.disabled = true;
        lowOrHigh.textContent = " ";
       
    }
    tryAgain();
}

function tryAgain(){
    resetButton.createElement('button');
    resetButton.textContent = "Start Again";
    document.body.append(resetButton)
    resetButton.addEventListener('click', resetGame);
}