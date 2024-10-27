const showTime = document.querySelector('.timerDisplay');
const startButton = document.getElementById('startTimer');
const pauseButton = document.getElementById('pauseTimer');
const resetButton = document.getElementById('resetTimer');
let milliseconds = 0;
let intervalID;

const timeFunc = (ms) => {
    let hrs = Math.floor(ms / 3600000).toString().padStart(2, '0');
    let mins = Math.floor((ms % 3600000) / 60000).toString().padStart(2, '0');
    let secs = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0');
    let msOnly = (ms % 1000).toString().padStart(3, '0');
    return `${hrs}:${mins}:${secs}:${msOnly}`;
}

//Starting The Timer
startButton.addEventListener('click', () => {
    if (!intervalID) {
        intervalID = setInterval(() => {
            milliseconds += 10;
            showTime.innerHTML = timeFunc(milliseconds);
        }, 10);
    }
});

//Pausing the Timer
pauseButton.addEventListener('click', () => {
    clearInterval(intervalID);
    intervalID = null;
});


//Reseting the Timer
resetButton.addEventListener('click', () => {
    clearInterval(intervalID);
    intervalID = null;
    milliseconds = 0;
    showTime.textContent = "00 : 00 : 00 : 000";
});