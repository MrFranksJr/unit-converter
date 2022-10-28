/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
1 celcius = [(°F-32)×5]/9
*/

const inputEl = document.getElementById("input-el")

function calcEverything(input) {
    let tempToFahrenheit = (input*(9/5))+32
    let tempToCelcius = (input - 32)/(9/5)
    let massToPounds = input*2.204
    let massToKilos = input/2.204
    let volToGallons = input*0.264
    let volToLiters = input/0.264
    let lengToFeet = input*3.281
    let lengToMeters = input/3.281

    const tempField = document.getElementById("temp-calc")
    const lengField = document.getElementById("leng-calc")
    const volField = document.getElementById("vol-calc")
    const massField = document.getElementById("mass-calc")
    
    tempField.textContent = `${input} Fahrenheit = ${tempToCelcius.toFixed(2)} Celsius | ${input} Celsius = ${tempToFahrenheit.toFixed(2)} Fahrenheit`
    lengField.textContent = `${input} feet = ${lengToMeters.toFixed(2)} meters | ${input} meters = ${lengToFeet.toFixed(2)} feet`
    volField.textContent = `${input} gallons = ${volToLiters.toFixed(2)} liters | ${input} liters = ${volToGallons.toFixed(2)} gallons`
    massField.textContent = `${input} pounds = ${massToKilos.toFixed(2)} kilos | ${input} kilos = ${massToPounds.toFixed(2)} pounds`
}

calcEverything(inputEl.value)

inputEl.addEventListener('change', function() {
    console.log("event triggered")
    calcEverything(inputEl.value)
});