// Get the timer display element
const timerDisplay = document.querySelector('.time');
let timerInterval;
function startTimer() {
    
    // Initialize variables for time tracking
    let seconds = 0;
    let minutes = 0;
    let hours = 0;


    // Start the timer interval
    timerInterval = setInterval(() => {
        seconds++;
        
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        // Format time with leading zeros
        const formattedTime = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Update the display
        timerDisplay.textContent = formattedTime;
    }, 1000);
    console.log("Start Timer");
}

function stopTimer() {
    clearInterval(timerInterval);
    console.log("Stop Timer");
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timerDisplay.textContent = "00:00:00";
    console.log("Reset Timer");
}
let countdownInterval;
const countdownDisplay = document.querySelector('.countdown');
function countdownTimer() {
    let totalSeconds = 1200; // 20 minuti

    countdownDisplay.textContent = "20:00";

    countdownInterval = setInterval(() => {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        countdownDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (totalSeconds === 0) {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = "Time's up!";
            const alarm = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            alarm.play();
        } else {
            totalSeconds--; // Decrementa il tempo rimanente
        }
    }, 1000);
}
function countdownStop() {
    clearInterval(countdownInterval);
    console.log("Countdown Stop");
}
function countdownReset() {
    clearInterval(countdownInterval);
    totalSeconds = 1200;
    countdownDisplay.textContent = "20:00";
    console.log("Countdown Reset");
}