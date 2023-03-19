// this element selects the time id
var timeEl = document.getELementById("time");

// this is our start time
var secondsLeft = 60;

function setTime() {
  var timeInt = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "s";
    //TO DO make conditions here or a function that can be colled on condition if the answer is WRONG it must deduct x from time...
    // function(){}

    if (secondsLeft === 0) {
      // stop the timer at this interval
      clearInterval(timeInt);
      // TO DO call a function to make the page change here...
      //   function() {}
    }
  }, 6000);
}
