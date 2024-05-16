let [milliSeconds, seconds, minutes, hour] = [0, 0, 0, 0];

let timeRef = document.querySelector('.timer-display');

let int = null;

document.querySelector('.start-timer').addEventListener('click', function () {
    if (int != null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10)
})

document.querySelector('.pause-timer').addEventListener('click', function () {
    clearInterval(int);

})

document.querySelector('.reset-timer').addEventListener('click', function () {

    clearInterval(int);
    [milliSeconds, seconds, minutes, hour] = [0, 0, 0, 0];
    timeRef.innerHTML = '00:00:00:000'
})

function displayTimer() {
    milliSeconds += 10;
    if (milliSeconds == 1000) {
        milliSeconds = 0;
        seconds += 1;
        if (seconds == 60) {
            seconds = 0;
            minutes += 1;
            if (minutes == 60) {
                minutes = 0;
                hour += 1;
            }
        }
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliSeconds < 10 ? "00" + milliSeconds : milliSeconds < 100 ? "0" + milliSeconds : milliSeconds;

    timeRef.innerHTML = `${h}:${m}:${s}:${ms}`

}