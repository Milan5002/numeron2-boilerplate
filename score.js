// Iteration 8: Making scoreboard functional

console.log(window.location.search)

let params =new URLSearchParams(window.location.search);
let score = params.get("score")

let scoreboard=document.getElementById("score-board");
scoreboard.textContent =score;

let playagainbtn = document.getElementById("play-again-button")

playagainbtn.onclick = () => {
    // window.open("./game.html")
    window.location.href = "./game.html"
}