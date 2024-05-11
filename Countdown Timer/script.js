(function () {
    //get all the elements
    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minute");
    let second = document.querySelector(".second");

    //get the button
    let startBtn = document.querySelector(".Start");
    let stopBtn = document.querySelector(".Stop");
    let resetBtn = document.querySelector(".Reset");

    let countdownTimer = null;

    startBtn.addEventListener("click", () => {
        if (hour.value == 0 && minute.value == 0 && second.value == 0) {
            return;
        }
        function startInterval() {
            startBtn.style.display = "none";
            stopBtn.style.display = "initial";
            countdownTimer = setInterval(function () {
                timer();
            }, 1000);
        }

        startInterval();
    });

    function timer() {
        if (second.value > 60) {
            m++;
            second.value = parseInt(second.value) - 59;
        }
        if (minute.value > 60) {
            hour++;
            minute.value = parseInt(minute.value) - 60;
        }
        minute.value = minute.value > 60 ? 60 : minute.value;
        if (hour.value == 0 && minute.value == 0 && second.value == 0) {
            hour.value = "";
            minute.value = "";
            second.value = "";
            stopInterval();
        } else if (second.value != 0) {
            second.value = `${second.value <= 10 ? "0" : ""}${second.value - 1}`;
        } else if (minute.value != 0 && second.value == 0) {
            second.value = 59;
            minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`;
        } else if (hour.value != 0 && minute.value == 0) {
            minute.value = 60;
            hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
        }
        return;
    }

    function stopInterval(state) {
        startBtn.innerHTML = state === "pause" ? "Continue" : "Start";

        stopBtn.style.display = "none";
        startBtn.style.display = "initial";

        clearInterval(countdownTimer);
    }
    stopBtn.addEventListener("click", function () {
        stopInterval("pause");
    });

    resetBtn.addEventListener("click", function () {
        hour.value = "";
        minute.value = "";
        second.value = "";
        stopInterval();
    });
})();
