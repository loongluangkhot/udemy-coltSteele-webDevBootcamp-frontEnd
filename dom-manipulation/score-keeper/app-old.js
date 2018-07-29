var score_p1 = document.querySelector("#score-p1")
var score_p2 = document.querySelector("#score-p2")

var target_score = document.querySelector("#target-score")
var target_input = document.querySelector("input[name=target-input]")

var win_p1 = document.querySelector("#win-p1")
var win_p2 = document.querySelector("#win-p2")
var reset = document.querySelector("#reset")

function start_game() {
  win_p1.addEventListener("click", handler_win_p1)
  win_p2.addEventListener("click", handler_win_p2)
  target_input.addEventListener("input", function(e) {
    // console.log(this.value)
    target_score.textContent = this.value
  })
  reset.addEventListener("click", function() {
    location.reload()
  })
}

function handler_win_p1() {
  score_p1.textContent = parseInt(score_p1.textContent) + 1
  if (won()) {
    score_p1.classList.add("won")
    end_game()
  }
}

function handler_win_p2() {
  score_p2.textContent = parseInt(score_p2.textContent) + 1
  if (won()) {
    score_p2.classList.add("won")
    end_game()
  }
}

function won() {
  return (score_p1.textContent === target_score.textContent) || (score_p2.textContent === target_score.textContent)
}

function end_game() {
  win_p1.removeEventListener("click", handler_win_p1)
  win_p2.removeEventListener("click", handler_win_p2)
}

start_game()




