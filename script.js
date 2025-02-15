let minutes = 0, seconds = 0, milliseconds = 0, interval;
let running = false;

function startStopwatch() {
    if (!running) {
        running = true;
        interval = setInterval(updateTime, 10);
    }
}

function pauseStopwatch() {
    running = false;
    clearInterval(interval);
}

function resetStopwatch() {
    running = false;
    clearInterval(interval);
    minutes = seconds = milliseconds = 0;
    updateDisplay();
}

function updateTime() {
    milliseconds++;
    if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    document.getElementById("milliseconds").innerText = milliseconds.toString().padStart(2, '0');
}
