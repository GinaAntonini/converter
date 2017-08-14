console.log("hello out there!");

var inputTemp = document.getElementById("tempEntered").value;

//Funcations that converts Temps:
function celsiusToFarenheit (inputTemp) {
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
function colorChanger (inputTemp, scaleSelected) {
if ((scaleSelected === "C" && inputTemp > 32) || (scaleSelected === "F" && inputTemp > 90)) {
		return "red"
	} else if ((scaleSelected === "C" && inputTemp < 0) || (scaleSelected === "F" && inputTemp < 32)) {
		return "blue"
	} else {
		return "green"
	}
}

//function that uses the results of previous functions 
function puppetMaster () {
	var scaleSelected = scale()
	var convertedTemp = converter(scaleSelected, inputTemp)
	// var changedColor = colorChanger(convertedTemp, scaleSelected)
	console.log(convertedTemp)
}

///////////////////BUTTON FUNCTIONS////////////////////////
var converterButton = document.getElementById("converterButton")

// function displayConvertedTemp () {
// 	converterButton(puppetMaster);
// 	return convertedTemp;
// }

function clearField(tempEntered) {
     document.getElementById("tempEntered").value = "";
}

tempEntered.addEventListener('click', [function clearField])
////////function to make the enter key work/////////////











