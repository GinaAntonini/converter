console.log("hello out there!");


var converterButton = document.getElementById("converterButton");

//Functions that converts Temps:
function celsiusToFarenheit (inputTemp) {
	console.log(inputTemp);
	return (inputTemp * 1.8) + 32;
}

function farenheitToCelsius (inputTemp) {
	return (inputTemp - 32) / 1.8;
}

//function that determines which conversion should happen based on radio button selected (if/else)
function scale(inputTemp) { 
	return document.querySelector('input[name="radio"]:checked').value;
}; 

function converter (scaleSelected, inputTemp) {
	if (scaleSelected === "C") {
		 return celsiusToFarenheit(inputTemp)
	} else { 
		 return farenheitToCelsius(inputTemp)
	}
}	

//function that turns converted temp red if greater than 90F/32C, blue if less than 32F/0C, and for any other temperature-green
function createDomString (convertedTemp, scaleSelected) {
if ((scaleSelected === "C" && convertedTemp > 32) || (scaleSelected === "F" && convertedTemp > 90)) {
		return `<h2 class="red">${convertedTemp}</h2>`
	} else if ((scaleSelected === "C" && convertedTemp < 0) || (scaleSelected === "F" && convertedTemp < 32)) {
		return `<h2 class="blue">${convertedTemp}</h2>`
	} else {
		return `<h2 class="green">${convertedTemp}</h2>`
	}
}

var outputDiv = document.getElementById("outputDiv");

function writeToDom(domString){
	outputDiv.innerHTML = domString;
}

//function that uses the results of previous functions 
function puppetMaster () {
	var inputTemp = document.getElementById("tempEntered").value;
	var scaleSelected = scale()
	var convertedTemp = converter(scaleSelected, inputTemp)
	var domString = createDomString(convertedTemp, scaleSelected)
	writeToDom(domString)
	console.log(convertedTemp)
	console.log(domString)
}

///////////////////BUTTON FUNCTIONS////////////////////////

converterButton.addEventListener('click', puppetMaster);

var clearBtn = document.getElementById("clearButton");

function clearField(tempEntered) {
     document.getElementById("tempEntered").value = "";
}

clearBtn.addEventListener('click', clearField);
////////function to make the enter key work/////////////











