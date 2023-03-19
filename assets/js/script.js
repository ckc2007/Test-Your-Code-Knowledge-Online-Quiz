// this element selects the time id
var timeEl = document.querySelector("#time");
// this is our start time
var secondsLeft = 60;
// make an element that listens for a click on the start button
var startClick = document.querySelector("#start-btn");

function setTime() {
  var timeInt = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    //TO DO make conditions here or a function that can be colled on condition if the answer is WRONG it must deduct x from time...
    if (secondsLeft === 0) {
      // stop the timer at this interval
      clearInterval(timeInt);
      //   reset time to 60s
      // secondsLeft = 60
      // TO DO call a function to make the page change here...
      //   function() {}
    }
  }, 1000);
}

const startButton = document.getElementById("start-btn");
const questionContainerEl = document.getElementById("question-container");
const introEl = document.getElementById("intro");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("started");
  // start the timer
  setTime();
  // hide the intro
  introEl.classList.add("hide");
  // makes the button dissapear by adding the .hide class
  startButton.classList.add("hide");
  // make the question div show up:
  questionContainerEl.classList.remove("hide");
  questionContainerEl.innerText = "QUESTION " + (i + 1);
  // need to define the function that sets the next question
  setNextQuestion();
  //   now we need to listen for the click with a true value
  button1El.addEventListener("click"),
    function () {
      var button1Truth = questions[i][1][1];
    };
  button2El.addEventListener("click"),
    function () {
      var button2Truth = questions[i][2][1];
    };
  button3El.addEventListener("click"),
    function () {
      var button3Truth = questions[i][3][1];
    };
  button4El.addEventListener("click"),
    function () {
      var button4Truth = questions[i][4][1];
    };
  // if the correct click happens, then we call setNextQuestion
  // if the incorrect click happens, then we need to deduct 10 seconds from the timer
  // and we then need to display the message wrong and let the same question display until the right answer is clicked
}

const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");
const button1El = document.getElementById("btn-1");
const button2El = document.getElementById("btn-2");
const button3El = document.getElementById("btn-3");
const button4El = document.getElementById("btn-4");

// the question index
let i = 0;

function setNextQuestion() {
  // set the content to display what
  questionEl.innerText = questions[i].question;
  // set the content of the answer buttons
  button1El.textContent = questions[i][1][0];
  button2El.textContent = questions[i][2][0];
  button3El.textContent = questions[i][3][0];
  button4El.textContent = questions[i][4][0];
  // un hide the the answer buttons with content
  answerButtonsEl.classList.remove("hide");
}

let question1 = {
  question: "Which is NOT a primitive data type?",
  1: ["object", true],
  2: ["number", false],
  3: ["string", false],
  4: ["boolean", false],
};

let question2 = {
  question: "which is a global variable in JavaScript?",
  1: ["var", true],
  2: ["const", false],
  3: ["let", false],
  4: ["mkdir", false],
};

// make quesitons
var questions = [question1, question2];

// // this will be the message that displays correct or not correct
// var message = document.querySelector("#message");

// const questionContainerEl = document.getElementById("question-container");
// const questionEl = document.getElementById("question");
// const answerButtonsEl = document.getElementById("answer-buttons");

// function setNextQuestion() {
//   resetState();
//   showQuestion(questions[i]);
// }

// function showQuestion(question) {
//   questionEl.innerText = question.question;
//   question.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerText = answer.text;
//     button.classList.add("btn");
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
//     answerButtonsElement.appendChild(button);
//   });
// }

// function resetState() {}

// function selectAnswer(e) {
//   const selectedButton = e.target;
//   const correct = selectedButton.dataset.correct;
// }

// we may need a container so we can change the overall content here queston to question....
// var container = document.querySelector(".container");

// call the set time function so that the timer starts - but only on the start quiz button click!!!
