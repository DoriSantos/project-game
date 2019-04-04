// Score:
// right answer = 100 points

var timeleft = 25;
// let nbOfHearts = 3
let score = 0
let currentQuestionIndex = 0
let isQuestionAnswered = false
let $question = document.getElementById("questions1")


// function showhideFinal() {
//     var final = document.getElementById("final");
//     if (final.style.display !== "block") {
//         final.style.display = "block";
//     }
//     else {
//         final.style.display = "none";
//     }
// }

var button = document.getElementById('button');

button.onclick = function() {
    var initial = document.getElementById('initial');
    if (initial.style.display !== 'none') {
        initial.style.display = 'none';
    }
    else {
        initial.style.display = 'block';
    }
    time();
};


// function questionHearts() {
//     if (isQuestionAnswered === false) {
//         return $hearts.style.display = "none";
//     }
// }


function renderQuestion() {
    // If the game is over
    if (currentQuestionIndex >= questions.length) {
        alert("GAME OVER")
        return
    }

    let currentQuestion = questions[currentQuestionIndex]

    let innerHTML = `<div id="questions1">`
    innerHTML += `<p class="questions2">${currentQuestion.title}</p>`
    innerHTML += `<div class='btns'>`
    for (let iAnswer = 0; iAnswer < currentQuestion.answers.length; iAnswer++) {
        let className = "btn2"
        if (isQuestionAnswered) {
            if (currentQuestion.answers[iAnswer].isCorrect)  // Hint: use currentQuestion and iAnswer
            {
                className += " correct-answer"
                console.log("lol")
            }
            else {
                console.log("wrong")
                className += " wrong-answer"
            }
        }
        innerHTML += `  <button class="${className}">${currentQuestion.answers[iAnswer].text}</button>`
    }
    innerHTML += `</div>`
    innerHTML += `</div>`
    if (isQuestionAnswered) {
        innerHTML += `<div id="results">
            <button class="btn2" id="next">Next</button>
        </div>`
    }
    $question.innerHTML = innerHTML


    let $answerButtons = $question.querySelectorAll(".btns button")
    $answerButtons.forEach(($button, iAnswer) => {
        $button.onclick = event => {
            let isCorrect = questions[currentQuestionIndex].answers[iAnswer].isCorrect
            if (isCorrect && !isQuestionAnswered) {
                score += 100 + timeleft*10
                // score += timeleft * 10

                renderScore()
            }
            isQuestionAnswered = true
            renderQuestion()
        }
    })

    let $nextButton = document.querySelector("#next")
    if ($nextButton) {
        $nextButton.onclick = event => {
            timeleft = 25
            time()
            currentQuestionIndex++
            isQuestionAnswered = false
            renderQuestion()
        }
    }
}


function renderScore() {
    document.getElementById('score').innerText = score
}

renderQuestion()
renderScore()
// showhideInitial()
