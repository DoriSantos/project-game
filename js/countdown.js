var timeleft = 20;
let $hearts = document.getElementsByClassName("hearts2")
var downloadTimer = setInterval(function(){
  if (!isQuestionAnswered) {
    timeleft -= 1;
  }
  document.getElementById("countdown").innerHTML = timeleft + " ";
  if(timeleft === 0){
    isQuestionAnswered = true
    renderQuestion()
    $hearts[$hearts.length-1].style.display = "none";
    // clearInterval(downloadTimer);
    // document.getElementById("countdown").innerHTML = " "
  }
}, 1000);