var startButton = document.getElementById("start-btn");
var timeEl = document.getElementById("time");
var secondsLeft = 100;
var highScore = 0;
var timeInt;
var buttonContainerEl = document.querySelector("#button-container");

function setTime() {
  timeInt = setInterval(function () {
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

buttonContainerEl.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button")) {
    //set the value of the button to true or false at time of creating the button element
    if (!element.value) {
      secondsLeft -= 10;
      // this needs to be defined
    }
    setNextQuestion();
  }
});
