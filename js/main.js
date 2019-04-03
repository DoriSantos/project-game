// Score:
// 1 second = 10 points
// Maximum score in a row = 200 points (20 seconds)


let nbOfHearts = 3
let score = 0
let currentQuestionIndex = 0
let isQuestionAnswered = false
let $question = document.getElementById("questions1")


function loseHeartsTime() {
    if (timeleft === 0) {
        $hearts[$hearts.length-1].style.display = "none";
    }
}


function questionHearts() {
    if (isQuestionAnswered === false) {
        return $hearts.style.display = "none";
    }
}


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
        innerHTML += `  <button class="btn2">${currentQuestion.answers[iAnswer].text}</button>`
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
                score += 100
                renderScore()
            }
            isQuestionAnswered = true
            renderQuestion()
        }
    })
    
    let $nextButton = document.querySelector("#next")
    if ($nextButton) {
        $nextButton.onclick = event => {
            timeleft = 20
            currentQuestionIndex++
            isQuestionAnswered = false
            renderQuestion()
        }
    }
}


function renderScore() {
    document.getElementById('score').innerText=score
}

renderQuestion()
loseHeartsTime()
renderScore()

