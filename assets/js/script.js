var startButton = document.getElementById("start-btn");
var timeEl = document.getElementById("time");
var secondsLeft = 100;
var highScore = 0;
var timeInt;
var buttonContainerEl = document.querySelector("#button-container");
var questionsAnswered = 0;
var questions = [];

function setTime() {
  timeInt = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // if time runs out - go to the score page
      quizTimeOut();
    }
  }, 1000);
}

startButton.addEventListener("click", function () {
  setTime();
});

buttonContainerEl.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button")) {
    questionsAnswered++;
    //set the value of the button to true or false at time of creating the button element
    if (!element.value) {
      secondsLeft -= 10;
      // this needs to be defined
    }
    if (questionsAnswered === questions.length || secondsLeft <= 0) {
      quizTimeOut();
    } else {
      setNextQuestion();
    }
  }
});

// this handles stopping the time at 0,answered all questions given, or - time negative, going to score page,
function quizTimeOut() {
  clearInterval(timeInt);
}

function setNextQuestion() {}
