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

calcEverything(20)

inputEl.addEventListener('change', function() {
    console.log("event triggered")
    calcEverything(inputEl.value)
});


//darkmode
const dModeToggle = document.getElementById("darkmode-toggle")

dModeToggle.addEventListener("change", e => {
    const bodyEl = document.body
    const bottomSection = document.getElementById("bottom-section")
    const subSection = document.getElementsByClassName("subsection")
    const h1 = document.getElementsByTagName("h1")
    const h3 = document.getElementsByTagName("h3")
    
    bodyEl.classList.toggle("darkmode")
    h1[0].classList.toggle("dmodeH")
    for (let x=0; x < h3.length; x++) {
        h3[x].classList.toggle("dmodeH")
    }
    bottomSection.classList.toggle("dmodeBottom")
    for (let i=0; i < subSection.length; i++) {
        subSection[i].classList.toggle("dmodeSubSection")
    }
})