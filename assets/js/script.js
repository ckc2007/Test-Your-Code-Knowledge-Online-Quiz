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
