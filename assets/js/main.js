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

let count = 0;
let rounds = 0;
let pcChoice;

// determine times to play
inputs.forEach((element) => {
	element.addEventListener("change", () => {
		pcChoice = Math.floor(Math.random() * 100);

		if (element.value === "0") {
			roundsInput.hidden = false;
			roundsInput.addEventListener("input", () => {
				rounds = roundsInput.value;
				chosenRoundsOutput.innerHTML = rounds;
			});
		} else {
			rounds = element.value;
			chosenRoundsOutput.innerHTML = rounds;
		}
	});
});

submit.addEventListener("click", play);

function play() {
	if (userGuess.value !== "" && userGuess.value > 0) {
		let userChoice = userGuess.value;
		let message = document.createElement("p");

		if (count < +rounds) {
			count++;
			roundsCounter.innerHTML = count;
		} else if (count === +rounds) {
			return;
		}

		if (count === +rounds) {
			message.innerHTML = `${count}.Try -Sorry. You have no guesses left. ${userChoice} is not my age.`;
			document.querySelector(".reset").classList.add("show");
		} else if (userChoice == pcChoice) {
			message.innerHTML = `Yes! It took you ${count} guesses. I am ${pcChoice} years old.`;
		} else if (userChoice > pcChoice) {
			message.innerHTML = `${count}.Try - No! I am younger than ${userChoice}, try again!`;
		} else if (userChoice < pcChoice) {
			message.innerHTML = `${count}.Try - No! I am older than ${userChoice}, try again!`;
		}
		output.appendChild(message);
	}
}
