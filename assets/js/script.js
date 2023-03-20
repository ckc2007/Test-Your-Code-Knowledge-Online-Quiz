var startButton = document.getElementById("start-btn");
var timeEl = document.getElementById("time");
var secondsLeft = 100;
var highScore = 0;

function setTime() {
  var timeInt = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timeInt);
    }
  }, 1000);
}

startButton.addEventListener("click", function () {
  setTime();
});
