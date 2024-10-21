const display = document.querySelector('.circle');
const correct = document.querySelector('#correct');
const wrong = document.querySelector('#wrong');
const progressbar = document.querySelector(".bar1");
const missed = document.querySelector("#missed")
let character;
let timer;

//function to display a random letter

function randomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    
    character = alphabet[randomIndex];
    //convert to uppercase
    character = character.toUpperCase();
    //display the random letter
    display.innerHTML = character;
}
//display the random letter
randomLetter();

//listen for input
document.addEventListener('keyup', (e) => {
    //convert to uppercase
    key = e.key.toUpperCase();
    if (key === character) {
        correct.innerHTML++;
    } else {
        wrong.innerHTML++;
    }
    //display next letter
    randomLetter();

    //display timing period
    startTimer();
});

function startTimer(){
    progressbar.value = 0;
    clearInterval(timer);
    timer = setInterval(function(){
        progressbar.value += 10;
        if(progressbar.value>=100){
            missed.innerHTML++;
            randomLetter();
            startTimer();
        }
    }, 500);

}

function easyMode(){
    missed.innerHTML = 0;
    wrong.innerHTML = 0;
    correct.innerHTML = 0;
    progressbar.value = 0;
    clearInterval(timer);
    timer = setInterval(function(){
        progressbar.value += 10;
        if(progressbar.value>=100){
            missed.innerHTML++;
            randomLetter();
            startTimer();
        }
    }, 1000);
}

function hardMode(){
    missed.innerHTML = 0;
    wrong.innerHTML = 0;
    correct.innerHTML = 0;
    progressbar.value = 0;
    clearInterval(timer);
    timer = setInterval(function(){
        progressbar.value += 10;
        if(progressbar.value>=100){
            missed.innerHTML++;
            randomLetter();
            startTimer();
        }
    }, 100);
}
function mediumMode(){
    missed.innerHTML = 0;
    wrong.innerHTML = 0;
    correct.innerHTML = 0;
    progressbar.value = 0;
    clearInterval(timer);
    timer = setInterval(function(){
        progressbar.value += 10;
        if(progressbar.value>=100){
            missed.innerHTML++;
            randomLetter();
            startTimer();
        }
    }, 500);
}