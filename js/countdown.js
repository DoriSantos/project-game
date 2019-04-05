var intervalId = null

function time() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalFunction()
  intervalId = setInterval(intervalFunction, 1000);
}

function intervalFunction () {
  if (!isQuestionAnswered) {
    timeleft -= 1;
  }
  document.getElementById("countdown").innerHTML = timeleft + " ";
  if (timeleft === 0) {
    clearInterval(intervalId);
    intervalId = null
    // document.getElementById("countdown").innerHTML = " "
    renderQuestion()
  }
}