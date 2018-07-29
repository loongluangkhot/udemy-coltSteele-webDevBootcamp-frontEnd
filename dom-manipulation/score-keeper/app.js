var score_p1 = document.querySelector("#score-p1")
var score_p2 = document.querySelector("#score-p2")

var target_score = document.querySelector("#target-score")
var target_input = document.querySelector("input[name=target-input]")

var win_p1 = document.querySelector("#win-p1")
var win_p2 = document.querySelector("#win-p2")
var reset = document.querySelector("#reset")

start_game()

function start_game() {
  win_p1.addEventListener("click", handler_win_p1)
  win_p2.addEventListener("click", handler_win_p2)
  target_input.addEventListener("change", function(e) {
    handler_reset()
    target_score.textContent = this.value
  })
  reset.addEventListener("click", handler_reset)
}

function won() {
  if ((score_p1.textContent !== target_score.textContent) && (score_p2.textContent !== target_score.textContent)) {
    return false
  } else if (score_p1.textContent === target_score.textContent) {
    return 1
  } else {
    return 2
  }
}

function handler_win_p1() {
  if (!won()) {
    score_p1.textContent = parseInt(score_p1.textContent) + 1
  }
  if (won() === 1) {
    score_p1.classList.add("won")
  }
}

function handler_win_p2() {
  if(!won()) {
    score_p2.textContent = parseInt(score_p2.textContent) + 1
  }
  if (won() === 2) {
    score_p2.classList.add("won")
  }
}

function handler_reset() {
  console.log('reset clicked')
  score_p1.textContent = 0
  score_p2.textContent = 0
  score_p1.classList.remove("won")
  score_p2.classList.remove("won")
}