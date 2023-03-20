var startButton = document.getElementById("start-btn");
var timeEl = document.getElementById("time");
var secondsLeft;
var highScore = 0;
var timeInt;
var buttonContainerEl = document.querySelector("#button-container");
var questionsAnswered = 0;
var introEl = document.getElementById("intro");
var quizEl = document.getElementById("quiz-container");
var questionEl = document.getElementById("quiz-question");
var scoreEl = document.getElementById("high-score");
var scorePageEl = document.getElementById("score-page");
var submitButtonEl = document.getElementById("submit");
var leaderBoardEl = document.getElementById("leaderboard");
var scoreListEl = document.getElementById("score-list");
var leaderLinkEl = document.getElementById("leader-link");
var goBackButton = document.getElementById("go-back");
var clearScoreButton = document.getElementById("clear-scores");
var playerTextEL = document.getElementById("player-text");

var players = [];
if (localStorage.getItem("leaderboard") !== null) {
  players = JSON.parse(localStorage.getItem("leaderboard"));
  scoreListEl.innerHTML = "";
  renderListItems();
}

leaderLinkEl.addEventListener("click", function () {
  introEl.classList.add("hide");
  leaderBoardEl.classList.remove("hide");
});

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
  // hide the intro div
  introEl.classList.add("hide");
  quizEl.classList.remove("hide");
  nextQuestion(questionsAnswered);
  setTime();
});

// event handler for answer button clicks
buttonContainerEl.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches(".btn")) {
    questionsAnswered++;
    //set the value of the button to true or false at time of creating the button element
    // HUGE debug here - can't do !(string value for some reason)
    if (element.dataset.correct === "false") {
      secondsLeft -= 10;
      // this fixed the timer not showing the final time
      timeEl.textContent = secondsLeft;
    }
    if (questionsAnswered === questions.length || secondsLeft <= 0) {
      quizTimeOut();
    } else {
      nextQuestion(questionsAnswered);
    }
  }
});

// this handles stopping the time at 0,answered all questions given, or - time negative, going to score page,
function quizTimeOut() {
  clearInterval(timeInt);
  highScore = secondsLeft;
  scoreEl.innerText = highScore;
  loadScorePage();
}

function loadScorePage() {
  quizEl.classList.add("hide");
  scorePageEl.classList.remove("hide");
}

function nextQuestion(index) {
  //  clears the previous buttons
  buttonContainerEl.innerHTML = "";
  // grab a question from our questions array
  var question = questions[index];
  // add text to the h2 quiz element
  questionEl.innerText = question.question;
  // create buttons and add the answers to the button display
  question.answers.forEach((answer, i) => {
    var button = document.createElement("button");
    // may want to concat a number here for the button display
    button.innerText = (i + 1).toString() + ". " + answer.text;
    button.classList.add("btn");
    // add the truth value of the answer to the button dataset
    button.dataset.correct = answer.correct;
    buttonContainerEl.appendChild(button);
  });
}

// submit form handler
submitButtonEl.addEventListener("click", function (event) {
  event.preventDefault();
  // sometimes does not clear the leaderboard
  // playerTextEL.value = "";
  // scoreListEl.innerHTML = "";
  var initials = document
    .getElementById("player-text")
    .value.trim()
    .slice(0, 3)
    .toUpperCase();
  // made our player local storage object
  // localStorage.setItem("player", initials);
  // localStorage.setItme("score", highScore);
  var playerObj = {
    player: initials,
    score: highScore,
  };
  players.push(playerObj);
  // sorted high to low
  players.sort((a, b) => b.score - a.score);
  localStorage.setItem("leaderboard", JSON.stringify(players));
  showLeaderBoard();
  playerTextEL.value = "";
});

function showLeaderBoard() {
  scorePageEl.classList.add("hide");
  leaderBoardEl.classList.remove("hide");
  var displayPlayers = JSON.parse(localStorage.getItem("leaderboard"));
  console.log(displayPlayers);
  renderListItems();
}

function renderListItems() {
  scoreListEl.innerHTML = "";
  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    var liEl = document.createElement("li");
    liEl.textContent = player.player + "'s - score: " + player.score;
    scoreListEl.appendChild(liEl);
  }
}

goBackButton.addEventListener("click", function () {
  introEl.classList.remove("hide");
  leaderBoardEl.classList.add("hide");
  highScore = 0;
  questionsAnswered = 0;
  secondsLeft = 101;
});

clearScoreButton.addEventListener("click", function () {
  localStorage.removeItem("leaderboard");
  scoreListEl.innerHTML = "";
  // was missing this before - required to clear array
  players = [];
});
// lets make a randomizer!!!

// create the questions:
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
    question: "Which is NOT a way to declare a variable?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "mkdir", correct: true },
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
    question: 'What is returned by console.log(22 + "2")?',
    answers: [
      { text: "24", correct: false },
      { text: "the string 222", correct: true },
      { text: "the number 222", correct: false },
      { text: '22 + "22"', correct: false },
    ],
  },
];
