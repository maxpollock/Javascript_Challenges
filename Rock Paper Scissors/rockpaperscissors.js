// Create a Rock Paper Scissors Game

// Outcomes of game
let userPoint = 0;
let computerPoint = 0;

// Retrieving Choice
const userInput = document.querySelector("form");
userInput.addEventListener("submit", function (event) {
  event.preventDefault();
  if (computerPoint >= 5 || userPoint >= 5){
    alert("You have lost to the AI. Come back loser!")
  }
  if (userPoint >= 5){
    alert("You have already won and beat the AI. Go Celebrate!")
  }
  
  let user = event.target.userInput.value;

  if (user === "Rock") {
    user = 5;
  } else if (user === "Paper") {
    user = 10;
  } else {
    user = 20;
  }

  let computer = getRandomOutcome();
  let outcome = user - computer;

  let gameOutcome = document.getElementById("gameOutcome");
  
  if (outcome > 0) {
    let img = document.createElement("img");
    img.setAttribute('src', './images/win.webp');
    gameOutcome.textContent = `You won!`;
    gameOutcome.appendChild(img);
    userPoint++;
  } else if (outcome < -10) {
    let img = document.createElement("img");
    img.setAttribute('src', './images/win.webp');
    gameOutcome.textContent = `You won!`;
    gameOutcome.appendChild(img);
    userPoint++;
  } else if (outcome < 0) {
    let img = document.createElement("img");
    img.setAttribute('src', './images/lose.png');
    gameOutcome.textContent = `You lost!`;
    gameOutcome.appendChild(img);
    computerPoint++;
  } else {
    let img = document.createElement("img");
    img.setAttribute('src', './images/drew.png');
    gameOutcome.textContent = `You drew!`;
    gameOutcome.appendChild(img);
  }

  let userPoints = document.getElementById("userPoints");
  userPoints.textContent = `You have scored: ${userPoint} points.`;

  let computerPoints = document.getElementById("computerPoints");
  computerPoints.textContent = `AI has scored: ${computerPoint} points.`;
});

function getRandomOutcome() {
  let rockArr = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * 3);
  let outcome = rockArr[index];

  let computerChoice = document.getElementById("computerChoice");
  computerChoice.textContent = `AI chose: ${outcome}`;

  if (outcome === "Rock") {
    outcome = 5;
  } else if (outcome === "Paper") {
    outcome = 10;
  } else {
    outcome = 20;
  }
  return parseInt(outcome);
}

