var startButton = document.getElementById("start-btn");
var timeEl = document.getElementById("time");
var secondsLeft;
var highScore = 0;
var timeInt;
var buttonContainerEl = document.querySelector("#button-container");
var questionsAnswered = 0;
var questions = [];

function setTime() {
  // lollllllll
  secondsLeft = 101;
  timeInt = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // if time runs out - go to the score page
      quizTimeOut();
    }
  }, 1000);
}

// event handler for start button click
startButton.addEventListener("click", function () {
  setNextQuestion();
  setTime();
});

// event handler for answer button clicks
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

// create the questions
const questions = [
  {
    question: "Which is NOT a primitive data type?",
    answers: [
      { text: "string", correct: false },
      { text: "boolean", correct: false },
      { text: "number", correct: false },
      { text: "object", correct: true },
    ],
  },
  {
    question: "Which variable is declared in the global scope?",
    answers: [
      { text: "var", correct: true },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "mkdir", correct: false },
    ],
  },
  {
    question:
      "Which array method does NOT modify the original array in JavaScript?",
    answers: [
      { text: "slice()", correct: true },
      { text: "reverse()", correct: false },
      { text: "unshift()", correct: false },
      { text: "splice()", correct: false },
    ],
  },
  {
    question: "What is 4 * 2?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
    ],
  },
];
