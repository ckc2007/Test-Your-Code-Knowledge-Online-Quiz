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
  console.log("started");
  // start the timer
  setTime();
  // hide the intro
  introEl.classList.add("hide");
  // makes the button dissapear by adding the .hide class
  startButton.classList.add("hide");
  // make the question div show up:
  //   questionContainerEl.classList.remove("hide");
  //   questionContainerEl.innerText = "QUESTION " + (i + 1);
  // need to define the function that sets the next question
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

  //   button1El.addEventListener("click", function () {
  //     button1Truth = questions[i][1][1];
  //   });
  //   button2El.addEventListener("click", function () {
  //     button2Truth = questions[i][2][1];
  //   });
  //   button3El.addEventListener("click", function () {
  //     button3Truth = questions[i][3][1];
  //   });
  //   button4El.addEventListener("click", function () {
  //     button4Truth = questions[i][4][1];
  //   });
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
const button5El = document.getElementById("btn-5");
const button6El = document.getElementById("btn-6");
const button7El = document.getElementById("btn-7");
const button8El = document.getElementById("btn-8");

// the question index
let i = 0;

function setNextQuestion1() {
  question1Display.classList.remove("hide");
  // set the content to display what
  //   questionEl.innerText = questions[i].question;
  // set the content of the answer buttons
  //   button1El.textContent = questions[i][1][0];
  //   button2El.textContent = questions[i][2][0];
  //   button3El.textContent = questions[i][3][0];
  //   button4El.textContent = questions[i][4][0];
  // un hide the the answer buttons with content
  //   answerButtonsEl.classList.remove("hide");
  //   i++;
}

function setNextQuestion2() {
  //   messageCorrectEl.classList.add("hide");
  messageWrongEl.classList.add("hide");
  question1Display.classList.add("hide");
  question2Display.classList.remove("hide");
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

// if (button1Truth) {
//     messageCorrectEl.classList.remove("hide");
//     setNextQuestion();
//     messageCorrectEl.classList.add("hide");
//   } else if (!button1Truth) {
//     messageWrongEl.classList.remove("hide");
//     secondsLeft -= 10;
//     messageWrongEl.classList.add("hide");
//   }
//   if (button2Truth) {
//     messageCorrectEl.classList.remove("hide");
//     setNextQuestion();
//     messageCorrectEl.classList.add("hide");
//   } else if (!button2Truth) {
//     messageWrongEl.classList.remove("hide");
//     secondsLeft -= 10;
//     messageWrongEl.classList.add("hide");
//   }
//   if (button3Truth) {
//     messageCorrectEl.classList.remove("hide");
//     setNextQuestion();
//     messageCorrectEl.classList.add("hide");
//   } else if (!button3Truth) {
//     messageWrongEl.classList.remove("hide");
//     secondsLeft -= 10;
//     messageWrongEl.classList.add("hide");
//   }
//   if (button4Truth) {
//     messageCorrectEl.classList.remove("hide");
//     setNextQuestion();
//     messageCorrectEl.classList.add("hide");
//   } else if (!button4Truth) {
//     messageWrongEl.classList.remove("hide");
//     secondsLeft -= 10;
//     messageWrongEl.classList.add("hide");
//   }
