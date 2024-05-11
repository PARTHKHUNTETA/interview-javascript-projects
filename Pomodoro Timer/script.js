(function () {
  //get all the elements
  let focusBtn = document.querySelector(".focus");
  let shortBreakBtn = document.querySelector(".short");
  let longBreakBtn = document.querySelector(".long");

  let startBtn = document.querySelector(".start");
  let pauseBtn = document.querySelector(".pause");
  let resetBtn = document.querySelector(".reset");

  let minuteTime = document.querySelector(".minute");
  let secondTime = document.querySelector(".second");

  let countdownTimer = null;

  startBtn.addEventListener("click", function () {
    function startInterval() {
      startBtn.style.display = "none";
      pauseBtn.style.display = "initial";
      countdownTimer = setInterval(function () {
        timer();
      }, 1000);
    }
    startInterval();
  });

  focusBtn.addEventListener("click", function () {
    longBreakBtn.classList.remove("active");
    shortBreakBtn.classList.remove("active");
    focusBtn.classList.add("active");
    minuteTime.value = "25";
    secondTime.value = "00";
  });

  shortBreakBtn.addEventListener("click", function () {
    longBreakBtn.classList.remove("active");
    focusBtn.classList.remove("active");
    shortBreakBtn.classList.add("active");
    minuteTime.value = "05";
    secondTime.value = "00";
  });

  longBreakBtn.addEventListener("click", function () {
    focusBtn.classList.remove("active");
    shortBreakBtn.classList.remove("active");
    longBreakBtn.classList.add("active");
    minuteTime.value = "10";
    secondTime.value = "00";
  });

  function timer() {
    if (minuteTime.value == 0 && secondTime.value == 0) {
      stopInterval();
    } else if (secondTime.value != 0) {
      secondTime.value = `${secondTime.value <= 10 ? "0" : ""}${
        secondTime.value - 1
      }`;
    } else if (minuteTime.value != 0 && secondTime.value == 0) {
      secondTime.value = "59";
      minuteTime.value = `${minuteTime.value <= 10 ? "0" : ""}${minuteTime.value - 1}`;
    }
  }

  function stopInterval() {
    pauseBtn.style.display = "none";
    startBtn.style.display = "initial";

    clearInterval(countdownTimer);
  }

  pauseBtn.addEventListener("click", function () {
    stopInterval();
  });

  resetBtn.addEventListener("click", function () {
    if (focusBtn.classList.contains("active")) {
      minuteTime.value = "25";
      secondTime.value = "00";
      return;
    }
    if (shortBreakBtn.classList.contains("active")) {
      minuteTime.value = "05";
      secondTime.value = "00";
      return;
    }
    if (longBreakBtn.classList.contains("active")) {
      minuteTime.value = "10";
      secondTime.value = "00";
      return;
    }
  });
})();
