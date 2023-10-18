const fortuneSpace = document.getElementById("fortune-space");
const form = document.getElementById("form1");

form.addEventListener("submit", fortune);

function fortune(event) {
	event.preventDefault();
	// get the input values
	let name = event.target.nameInput.value;
	let age = event.target.ageInput.value;
	// get today's date - so each day will be a new fortune
	today = new Date().getDate();
	// calculate a fortune index using the inputs
	let fortuneIndex = asciiTotal(name) * age * today;
	// adjust by modulo of length of the array
	fortuneIndex = fortuneIndex % fortunesArray.length;
	const fortune = name + ": " + fortunesArray[fortuneIndex];

	const fortunePara = document.createElement("p");
	fortunePara.textContent = fortune;
	fortunePara.className = "fortune-para";
	fortuneSpace.appendChild(fortunePara);
}

// function to convert name in total of its ascii codes
function asciiTotal(name) {
	// make an array of the name letters
	let n = name.split("");

	// find sum of letter asciis
	let asciiTotal = 0;
	for (let i = 0; i < n.length; i++) {
		let asciiCode = n[i].charCodeAt(0);
		asciiTotal = asciiTotal + parseInt(asciiCode);
	}

	return asciiTotal;
}
