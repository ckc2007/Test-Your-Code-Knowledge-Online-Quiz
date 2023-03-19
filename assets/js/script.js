// this element selects the time id
var timeEl = document.querySelector("#time");

// this is our start time
var secondsLeft = 60;

// make an element that listens for a click on the start button
var startClick = document.querySelector("#start-button");

// we may need a container so we can change the overall content here queston to question....
// var container = document.querySelector(".container");

function setTime() {
  var timeInt = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    //TO DO make conditions here or a function that can be colled on condition if the answer is WRONG it must deduct x from time...
    // function(){}

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
  // function that changes the section conent to the first question here
  // then start the timer countdown...
  setTime();
});

// create the quiz questons that will display
// i would make them part of a container and just change out the display of the container...
// we need to use dom to update conent - create, append, set attributes etc
var h1El = document.querySelector("h1");
var instructionsEl = document.querySelector("#instructions");
var quizEl = document.querySelector("#quiz");
// make the buttons
var choice1El = document.createElement("button");
choice1El.id = "choice-1";
var choice2El = document.createElement("button");
choice2El.id = "choice-2";
var choice3El = document.createElement("button");
choice3El.id = "choice-3";
var choice4El = document.createElement("button");
choice4El.id = "choice-4";

function question1() {
  h1El.textContent = "Question 1:.......";
  // how do you hide an element again? none vs visible?
  instructionsEl.display = "none";
  //   hide the start button
  startClick.display = "none";
  // create and display the four buttons you will use to answer
  quizEl.
}

// should i make the question into an object?
