let player1Score = 0;
let player2Score = 0;

let player1 = true;
let player2 = false;

const playerName = document.getElementById("player-name");
const player1ScoreUpdate = document.getElementById("player-1-score");
const player2ScoreUpdate = document.getElementById("player-2-score");
const player1Btn = document.getElementById("player-1-btn");
const player2Btn = document.getElementById("player-2-btn");
const resetBtn = document.getElementById("reset-btn");
const diceImg = document.getElementById("dice-img");

player1Btn.addEventListener("click", player1Turn);
player2Btn.addEventListener("click", player2Turn);
resetBtn.addEventListener("click", resetGame);

// player 1 playing function
function player1Turn() {
  if (player1) {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let res = "dice" + randomNumber1 + ".png";
    let res2 = "./images/" + res;
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", res2);
    player1Score += randomNumber1;
    player1ScoreUpdate.textContent = player1Score;
    if (player1Score >= 30) {
      player2 = false;
      player1 = false;
      playerName.textContent = "Player-1 win";
      player1Btn.classList.remove("active");
      player2Btn.classList.remove("active");
    } else {
      player1 = false;
      player2 = true;
      playerName.textContent = "Player-2 to play";
      player1Btn.classList.remove("active");
      player2Btn.classList.add("active");
    }
  }
}

// player 2 playing function
function player2Turn() {
  if (player2) {
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let res = "dice" + randomNumber2 + ".png";
    let res2 = "./images/" + res;
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", res2);
    player2Score += randomNumber2;
    player2ScoreUpdate.textContent = player2Score;
    if (player2Score >= 30) {
      player1 = false;
      player2 = false;
      playerName.textContent = "Player-2 win";
      player1Btn.classList.remove("active");
      player2Btn.classList.remove("active");
    } else {
      player1 = true;
      player2 = false;
      playerName.textContent = "Player-1 to play";
      player2Btn.classList.remove("active");
      player1Btn.classList.add("active");
    }
  }
}

// Game reset or restart function
function resetGame() {
  playerName.textContent = "Player-1 to play";
  player1Score = 0;
  player2Score = 0;
  player1ScoreUpdate.textContent = 0;
  player2ScoreUpdate.textContent = 0;
  player2Btn.classList.remove("active");
  player1Btn.classList.add("active");
  let diceStart = "./images/dice1.png";
  let image2 = document.querySelectorAll("img")[0];
  image2.setAttribute("src", diceStart);
  player1 = false;
  player2 = true;
  playerName.textContent = "Player-2 to play";
  player1Btn.classList.remove("active");
  player2Btn.classList.add("active");
}
