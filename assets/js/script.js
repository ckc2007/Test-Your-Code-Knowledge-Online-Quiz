const startButton = document.getElementById("start-btn");
const questionContainerEl = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("started");
  // makes the button dissapear by adding the .hide class
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[i]);
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
}

// make quesitons

let question1 = {
  question: "Which is NOT a primitive data type?",
  object: true,
  number: false,
  string: false,
  boolean: false,
};

let question2 = {
  question: "which is a global variable in JavaScript?",
  var: true,
  const: false,
  let: false,
  mkdir: false,
};

// this element selects the time id
var timeEl = document.querySelector("#time");

// this is our start time
var secondsLeft = 60;

// make an element that listens for a click on the start button
var startClick = document.querySelector("#start-button");

var message = document.querySelector("#message");

// we may need a container so we can change the overall content here queston to question....
// var container = document.querySelector(".container");

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

// call the set time function so that the timer starts - but only on the start quiz button click!!!
startClick.addEventListener("click", function () {
  //TO DO: first change the section to the first question
  question1();
  // function that changes the section conent to the first question here
  // then start the timer countdown...
  setTime();
});
