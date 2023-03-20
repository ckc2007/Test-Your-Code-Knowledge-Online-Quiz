// this element selects the time id
var timeEl = document.querySelector("#time");
// this is our start time
var secondsLeft = 60;
// make an element that listens for a click on the start button
var startClick = document.querySelector("#start-btn");
// message if correct or not
var messageCorrectEl = document.getElementById("message-1");
var messageWrongEl = document.getElementById("message-2");

// hard coding the question display because i just haven't been able to get the logic down yet for data attributes...
var question1Display = document.getElementById("question-1");
var question2Display = document.getElementById("question-2");

// the question index
let i = 0;

function setNextQuestion1() {
  question1Display.classList.remove("hide");
}

function setNextQuestion2() {
  messageWrongEl.classList.add("hide");
  question1Display.classList.add("hide");
  question2Display.classList.remove("hide");
}

// set the high score
var highScore = 0;

// runs the timer display
function setTime() {
  var timeInt = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft + "s";
    if (secondsLeft === 0) {
      clearInterval(timeInt);
    }
  }, 1000);
}

// defines the start button
const startButton = document.getElementById("start-btn");
// here in case I need it
const questionContainerEl = document.getElementById("question-container");
// targets the intro message displayed on load
const introEl = document.getElementById("intro");

// add event listener to click event on start button - starts the game
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  // de bug console log to confirm start
  console.log("started");
  // start the timer
  setTime();
  // hide the intro
  introEl.classList.add("hide");
  // makes the button dissapear by adding the .hide class
  startButton.classList.add("hide");
  // function sets the next question to display
  setNextQuestion1();

  //   now we need to listen for the click with a true value
  button1El.addEventListener("click", function () {
    messageCorrectEl.classList.remove("hide");
    setNextQuestion2();
  });

  button2El.addEventListener("click", function () {
    messageCorrectEl.classList.add("hide");
    messageWrongEl.classList.remove("hide");
    secondsLeft -= 10;
  });
  button3El.addEventListener("click", function () {
    messageCorrectEl.classList.add("hide");
    messageWrongEl.classList.remove("hide");
    secondsLeft -= 10;
  });
  button4El.addEventListener("click", function () {
    messageCorrectEl.classList.add("hide");
    messageWrongEl.classList.remove("hide");
    secondsLeft -= 10;
  });
  button5El.addEventListener("click", function () {
    messageCorrectEl.classList.remove("hide");
    messageWrongEl.classList.add("hide");
    // save the time at time of win to high score
    highScore = secondsLeft;
    console.log(highScore);
    // at the end of the test, go to the scores page
  });
  button6El.addEventListener("click", function () {
    messageCorrectEl.classList.add("hide");
    messageWrongEl.classList.remove("hide");
    secondsLeft -= 10;
  });
  button7El.addEventListener("click", function () {
    messageCorrectEl.classList.add("hide");
    messageWrongEl.classList.remove("hide");
    secondsLeft -= 10;
  });
  button8El.addEventListener("click", function () {
    messageCorrectEl.classList.add("hide");
    messageWrongEl.classList.remove("hide");
    secondsLeft -= 10;
  });
}

const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");
const button1El = document.getElementById("btn-1");
const button2El = document.getElementById("btn-2");
const button3El = document.getElementById("btn-3");
const button4El = document.getElementById("btn-4");
const button5El = document.getElementById("btn-5");
const button6El = document.getElementById("btn-6");
const button7El = document.getElementById("btn-7");
const button8El = document.getElementById("btn-8");
