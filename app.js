let i = 0;
let form = document.getElementById('form');
let guessNumber;
let result = document.getElementById('result');
let submitBtn = document.getElementById('submit');
let minGuess = 1, maxGuess = 9, maxRound = 3;

function checkAns(e) {
    e.preventDefault();
    let input = document.getElementById('input-value');
    // After clicking try again
    if(i == -1) {
        submitBtn.value = "Submit";
        input.style.borderColor = "#ccc";
        input.value = '';
        result.innerHTML = '';
        i++;
        return;
    }
    // Validate
    if(isNaN(input.value) || input.value < minGuess || input.value > maxGuess) {
        result.innerHTML = "Please enter a valid number";
        result.style.color = 'red';
        return;
    }
    // if the game begins or rebegin
    if(i == 0) {
        guessNumber = Math.ceil(Math.random() * 10);
    }
    // Number Guessing Process
    if(guessNumber !== parseInt(input.value)) {
        // console.log(guessNumber);
        result.innerHTML = "Wrong Guess..";
        result.style.color = 'red';
        input.style.borderColor = 'red';
        i++;
        if(i == maxRound) {
            result.innerHTML = `Failed! The correct answer is ${guessNumber}`;
            result.style.color = 'red';
            input.style.borderColor = 'red';
            submitBtn.value = "Try Again!";
            i = -1;
        }
    } else {
        result.innerHTML = `Correct!! The Answer is ${guessNumber}`;
        result.style.color = '#4caf50';
        input.style.borderColor = '#4caf50';
        submitBtn.value = "Try Again!";
        i = -1;
    }
    result.style.display = "block";
}

form.addEventListener('submit', checkAns);