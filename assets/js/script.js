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

// should i make the question into an object?
// edit these please - using the test quiz as a placeholder for now...set the key to be the inner content of the buttons, and the click value to return the boolean value:
var question1Obj = {
  question: "Commonly used data types DO NOT include:",
  1: ["1. strings", true],
  2: ["2. booleans", false],
  3: ["3. alerts", false],
  4: ["4. numbers", false],
};

var question2Obj = {
  question: "objects types DO NOT include:",
  1: ["1. strings", true],
  2: ["2. booleans", false],
  3: ["3. alerts", false],
  4: ["4. numbers", false],
};

var question3Obj = {
  question: "array types used data types DO NOT include:",
  1: ["1. strings", true],
  2: ["2. booleans", false],
  3: ["3. alerts", false],
  4: ["4. numbers", false],
};

var question4Obj = {
  question: "string types used data types DO NOT include:",
  1: ["1. strings", true],
  2: ["2. booleans", false],
  3: ["3. alerts", false],
  4: ["4. numbers", false],
};

var question5Obj = {
  question: "jQUery used data types DO NOT include:",
  1: ["1. strings", true],
  2: ["2. booleans", false],
  3: ["3. alerts", false],
  4: ["4. numbers", false],
};
// create the quiz questons that will display
// i would make them part of a container and just change out the display of the container...
var quizEl = document.querySelector("#quiz");
// we need to use dom to update conent - create, append, set attributes etc
var h1El = document.querySelector("#quiz-title");
var instructionsEl = document.querySelector("#instructions");

// make quiz el have poperty of text center on css?
// make the buttons
var questionEl = document.createElement("h1");
questionEl.id = "question";
var choice1El = document.createElement("button");
choice1El.id = "choice-1";
var choice1ElTruth = question1Obj[1][1];
var choice2El = document.createElement("button");
choice2El.id = "choice-2";
var choice2ElTruth = question1Obj[2][1];
var choice3El = document.createElement("button");
choice3El.id = "choice-3";
var choice3ElTruth = question1Obj[3][1];
var choice4El = document.createElement("button");
choice4El.id = "choice-4";
var choice4ElTruth = question1Obj[4][1];

// we should make the functions controlling the visual output for each question into an array so we can iterate through them
var questionArray = [
  question1(),
  question2(),
  question3(),
  question4(),
  question5(),
];
// question 1
function question1() {
  // hid the quiz h1 title <<<<< this is not working yet
  //   h1El.display = "hidden";
  // how do you hide an element again? none vs visible?
  //   instructionsEl.display = "hidden";
  //   hide the start button
  //   startClick.display = "hidden";
  //   read the content from the question objects:
  questionEl.textContent = question1Obj["question"];
  // give the choices their display values in the buttons:
  choice1El.textContent = question1Obj[1][0];
  choice2El.textContent = question1Obj[2][0];
  choice3El.textContent = question1Obj[3][0];
  choice4El.textContent = question1Obj[4][0];
  //   display the quiz quesiton:
  // create and display the four buttons you will use to answer
  quizEl.append(questionEl, choice1El, choice2El, choice3El, choice4El);
}
// question 2
function question2() {
  // hid the quiz h1 title
  //   h1El.display = "none";
  // how do you hide an element again? none vs visible?
  //   instructionsEl.display = "none";
  //   hide the start button
  //   startClick.display = "none";
  //   read the content from the question objects:
  questionEl.textContent = question2Obj["question"];
  // give the choices their display values in the buttons:
  choice1El.textContent = question2Obj[1][0];
  choice2El.textContent = question2Obj[2][0];
  choice3El.textContent = question2Obj[3][0];
  choice4El.textContent = question2Obj[4][0];
  //   display the quiz quesiton:
  // create and display the four buttons you will use to answer
  quizEl.append(questionEl, choice1El, choice2El, choice3El, choice4El);
}
// question 3
function question3() {
  // hid the quiz h1 title
  //   h1El.display = "none";
  // how do you hide an element again? none vs visible?
  //   instructionsEl.display = "none";
  //   hide the start button
  //   startClick.display = "none";
  //   read the content from the question objects:
  questionEl.textContent = question3Obj["question"];
  // give the choices their display values in the buttons:
  choice1El.textContent = question3Obj[1][0];
  choice2El.textContent = question3Obj[2][0];
  choice3El.textContent = question3Obj[3][0];
  choice4El.textContent = question3Obj[4][0];
  //   display the quiz quesiton:
  // create and display the four buttons you will use to answer
  quizEl.append(questionEl, choice1El, choice2El, choice3El, choice4El);
}
// question 4
function question4() {
  // hid the quiz h1 title
  //   h1El.display = "none";
  // how do you hide an element again? none vs visible?
  //   instructionsEl.display = "none";
  //   hide the start button
  //   startClick.display = "none";
  //   read the content from the question objects:
  questionEl.textContent = question4Obj["question"];
  // give the choices their display values in the buttons:
  choice1El.textContent = question4Obj[1][0];
  choice2El.textContent = question4Obj[2][0];
  choice3El.textContent = question4Obj[3][0];
  choice4El.textContent = question4Obj[4][0];
  //   display the quiz quesiton:
  // create and display the four buttons you will use to answer
  quizEl.append(questionEl, choice1El, choice2El, choice3El, choice4El);
}
// question 5
function question5() {
  // hid the quiz h1 title
  //   h1El.display = "none";
  // how do you hide an element again? none vs visible?
  //   instructionsEl.display = "none";
  //   hide the start button
  //   startClick.display = "none";
  //   read the content from the question objects:
  questionEl.textContent = question5Obj["question"];
  // give the choices their display values in the buttons:
  choice1El.textContent = question5Obj[1][0];
  choice2El.textContent = question5Obj[2][0];
  choice3El.textContent = question5Obj[3][0];
  choice4El.textContent = question5Obj[4][0];
  //   display the quiz quesiton:
  // create and display the four buttons you will use to answer
  quizEl.append(questionEl, choice1El, choice2El, choice3El, choice4El);
}

// call the set time function so that the timer starts - but only on the start quiz button click!!!
// button 1
// start on the first question function from function array - the place we are keeping all our questions
for (let i = 0; i < questionArray.length; ) {
  choice1El.addEventListener("click", function () {
    if (choice1ElTruth) {
      message.textContent = "Correct!";
      quizEl.append(message);
      return questionArray[i + 1];
    } else {
      message.textContent = "Wrong!";
      quizEl.append(message);
      secondsLeft -= 10;
      return questionArray[i];
    }
  });
  // button 2
  choice2El.addEventListener("click", function () {
    if (choice2ElTruth) {
      message.textContent = "Correct!";
      quizEl.append(message);
      return questionArray[i + 1];
    } else {
      message.textContent = "Wrong!";
      quizEl.append(message);
      secondsLeft -= 10;
      return questionArray[i];
    }
  });
  // button 3
  choice3El.addEventListener("click", function () {
    if (choice3ElTruth) {
      message.textContent = "Correct!";
      quizEl.append(message);
      return questionArray[i + 1];
    } else {
      message.textContent = "Wrong!";
      quizEl.append(message);
      secondsLeft -= 10;
      return questionArray[i];
    }
  });
  // button 4
  choice4El.addEventListener("click", function () {
    if (choice4ElTruth) {
      message.textContent = "Correct!";
      quizEl.append(message);
      return questionArray[i + 1];
    } else {
      message.textContent = "Wrong!";
      quizEl.append(message);
      secondsLeft -= 10;
      return questionArray[i];
    }
  });
}
