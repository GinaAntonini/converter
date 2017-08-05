console.log("hello out there!");

//Converts Temps:

function celsiusToFarenheit (inputTemperature) {
	return ((inputTemperature * 1.8) + 32)
}

function farenheitToCelsius (inputTemperature) {
	return ((inputTemperature - 32)/ 1.8)
}

//function that determines which conversion should happen based on radio button selected (if/else)
function scale() { 
	return document.querySelector('input[name="radio"]:checked').value ;
}; 


function converter (scaleSelected, inputTemperature) {
	if (scaleSelected === "C") {
		 return celsiusToFarenheit(inputTemperature)
	} else { 
		 return farenheitToCelsius(inputTemperature)
	}
}

var inputTemperature = document.getElementById("textInput").value;


//function that turns converted temp red if greater than 90F/32C, blue if less than 32F/0C, and for any other temperature-green

function colorChanger (inputTemperature, scaleSelected) {
if ((scaleSelected === "C" && inputTemperature > 32) || (scaleSelected === "F" && inputTemperature > 90)) {
		return "red"
	} else if ((scaleSelected === "C" && inputTemperature < 0) || (scaleSelected === "F" && inputTemperature < 32)) {
		return "blue"
	} else {
		return "green"
	}
}


function puppetMaster () {
	var scaleSelected = scale()
	var convertedTemp = converter(scaleSelected, inputTemperature)
	var changedColor = colorChanger(convertedTemp, scaleSelected)
	console.log(changedColor);
}


///////////////////function to be executed when the converter button is clicked///////////////////////////

var displayButton = document.getElementById("displayConvertedTemp")

displayButton.addEventListener('click', puppetMaster)


///////////////////function to be executed when the clear input field button is clicked/////////////////////

function clearButton () {
	return document.getElementById("clearInputField").value = "";
}

var textInput = document.getElementById("textInput");
var input = document.querySelector('clearInputField');


// input.addEventListener('click', clearButton) {
// 	console.log("textInput");
//     input.value = '';
//     console.log("clear");
// }














