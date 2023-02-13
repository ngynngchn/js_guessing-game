// * ============ Variables
// get the amount of rounds the use wants to play
const inputs = document.querySelectorAll("input[type='radio']");
const roundsInput = document.querySelector("#customInput");

const userGuess = document.querySelector("#input");
const submit = document.querySelector("button");

const chosenRoundsOutput = document.querySelector(".chosen-rounds");
const roundsCounter = document.querySelector(".round");
const output = document.querySelector(".output");

//* ============ Functions

let rounds = 0;
let count = 0;
let pcChoice;

// determine amound of tries
inputs.forEach((element) => {
	element.addEventListener("change", () => {
		pcChoice = Math.floor(Math.random() * 100);
		if (element.value == 0) {
			roundsInput.hidden = false;
			rounds = roundsInput.value;
		} else {
			rounds = element.value;
		}
		chosenRoundsOutput.innerHTML = rounds;
	});
});
submit.addEventListener("click", play);

function play() {
	if (userGuess.value !== "") {
		let userChoice = userGuess.value;
		let message = document.createElement("p");

		if (count < +rounds) {
			count++;
			roundsCounter.innerHTML = count;
		} else if (count === +rounds) {
			return;
		}

		if (count === +rounds) {
			message.innerHTML = `${count}- You have no guesses left. ${userChoice} is not my number.`;
			output.appendChild(message);
			reset.hidden = false;
			return;
		} else if (userChoice == pcChoice) {
			message.innerHTML = `Yes! You got me in ${count} guesses. My number is ${pcChoice}.`;
			output.appendChild(message);
			reset.hidden = false;
		} else if (userChoice > pcChoice) {
			message.innerHTML = `${count}- You need to guess lower than ${userChoice}, try again!`;
			output.appendChild(message);
		} else if (userChoice < pcChoice) {
			message.innerHTML = `${count}- You need to guess higher than ${userChoice}, try again!`;
			output.appendChild(message);
		}
	}
}
