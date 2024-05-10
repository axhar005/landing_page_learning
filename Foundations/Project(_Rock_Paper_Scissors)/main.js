let humanScore = 0;
let computerScore = 0;
let roundCount = 0; // Initialize round counter
const maxRounds = 5; // Set maximum number of rounds to 5
let choice = ["rock", "paper", "scissors"];


const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const score = document.getElementById("score");
const result = document.getElementById("result");

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  let rand = Math.floor(Math.random() * choice.length);
  return choice[rand];
}

function playRound(humman, computer) {
  console.log(humman);
  if (humman === computer) {
    console.log("Tie !", computer, "is same then", humman, "!");
    result.textContent = "Tie !", computer, "is same then", humman, "!";
  } else if (
    (humman === "rock" && computer === "scissors") ||
    (humman === "paper" && computer === "rock") ||
    (humman === "scissors" && computer === "paper")
  ) {
    console.log("You win!", humman, "beats", computer, "!");
    result.textContent = "You win!", humman, "beats", computer, "!";
    humanScore++;
  } else {
    console.log("You lose!", computer, "beats", humman, "!");
    result.textContent = "You lose!", computer, "beats", humman, "!";
    computerScore++;
  }
  roundCount++;
  update()
}


function update() {
  score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
  if (roundCount >= maxRounds) {
    gameOver(); // Call gameOver() when max rounds are reached
  }
}

function gameOver() {
  if (humanScore > computerScore) {
    result.textContent = "Game Over! You Win!";
    alert("Game Over! You Win!");
  } else if (humanScore < computerScore) {
    result.textContent = "Game Over! Computer Wins!";
    alert("Game Over! Computer Wins!");
  } else {
    result.textContent = "Game Over! It's a Tie!";
    alert("Game Over! It's a Tie!");
  }
  humanScore = 0;
  computerScore = 0;
  roundCount = 0;
  result.textContent = "";
  update();
}