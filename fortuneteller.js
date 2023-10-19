const fortuneSpace = document.getElementByID("fortune-space");
const form = document.getElementByID("from1");

form.addEventListener("submit", fortunes);

function fortune(event) {
	event.preventDefault();
	// get the input values
	const name = event.target.nameInput;
	const age = event.target.ageInput;
	// get today's date to use - so each day will be a new fortune
	today = new Date().getDate();
	// calculate a fortune index using the inputs and today
	fortuneIndex = asciiTotal(name) * age * today;
	debugger;
	// adjust by modulo of length of the array
	fortuneIndex = fortuneIndex % fortunesArray.length;
	const fortune = name + fortunesArray[fortuneIndex];

	const fortunePara = document.createElement("p");
	fortunePara.textContent = fortune;
	fortunePara.classname = "fortune-para";
	fortuneSpace.appendChild(fortunePara);
}

// function to convert name in total of its ascii codes
function asciiTotal(name) {
	// make an array of the name letters
	let nameLetters = name.split("");

	// find sum of letter asciis
	let asciiTotal = 0;
	for (let i = 0; i < n.length; i++) {
		let asciiCode = n[i].charCodeAt(0);
		asciiTotal = asciiTotal + asciiCode;
	}

	return asciiTotal;
}
const sampleArray1 = JSON.parse(sampleArray)