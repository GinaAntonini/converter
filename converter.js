console.log("hello out there!");


//Converts Temps:

function celsiusToFarenheit (inputTemperature) {
	return (inputTemperature * 1.8 + 32)
}

function farenheitToCelsius (inputTemperature) {
	return (inputTemperature - 32 / 1.8)
}

//function that determines which conversion should happen based on radio button selected (if/else)

function converter (scaleSelected, inputTemperature) {
	if (scaleSelected === "C") {
		 return celsiusToFarenheit(inputTemperature)
	} else {
		return farenheitToCelsius(inputTemperature)
	}
}
console.log(converter("C", 45));

//function that turns converted temp red if greater than 90F/32C, blue if less than 32F/0C, and for any other temperature-green





//function to be executed when the converter button is clicked as well as when the clear button is clicked.