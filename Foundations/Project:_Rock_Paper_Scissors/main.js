console.log("Hello World");
let humanScore;
let computerScore;
let choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
	let rand = Math.floor(Math.random() * choice.length);
	return (choice[rand]);
}

function getHumanChoice() {
	let p;
	do {
		p = prompt("rock, paper or scissors ?").toLowerCase();
		if (!choice.includes(p)){
			p = null;
			console.log("Wrong value !");
		}
	} while (!p);

	return p;
}

function playRound(humman, computer) {
	if (humman === computer) {
		console.log("Tie !", computer, "is same then", humman, "!");
	}
	else if ((humman === "rock" && computer === "scissors") ||
		(humman === "paper" && computer === "rock") ||
		(humman === "scissors" && computer === "paper")) {
		console.log("You win!", humman, "beats", computer, "!");
		humanScore++;
	} else {
		console.log("You lose!", computer, "beats", humman, "!");
		computerScore++;
	}
}

function playGame() {
	humanScore = 0;
	computerScore = 0;

	for (let i = 0; i < 5; i++) {
		playRound(getHumanChoice(), getComputerChoice());
		console.log("Your score:", humanScore, "Computer score:", computerScore);
	}
}

playGame();