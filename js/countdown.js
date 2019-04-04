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
    console.log('LOOOOL')
    let $hearts = document.getElementsByClassName("hearts1")[0]
    isQuestionAnswered = true

    if ($hearts.childNodes.length != 0) {
      $hearts.removeChild($hearts.lastElementChild);
      if ($hearts.childNodes.length === 0) {
        //show game over

      }
    }

    clearInterval(intervalId);
    intervalId = null
    // document.getElementById("countdown").innerHTML = " "
    renderQuestion()
  }
}