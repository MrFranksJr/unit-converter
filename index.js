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
const bodyEl = document.body
const bottomSection = document.getElementById("bottom-section")
const subSection = document.getElementsByClassName("subsection")
const h1 = document.getElementsByTagName("h1")
const h3 = document.getElementsByTagName("h3")

//query to detect system
detectMode()

function detectMode() {
    if (localStorage.getItem("modePref") === "Dark") {
        dModeToggle.checked = true
        switchModes()
    }
    else if (localStorage.getItem("modePref") === "Light") {
        dModeToggle.checked = false
        switchModes()
    }
    else {
        const runColorMode = (fn) => {
        if (!window.matchMedia) {
        return;
        }
        const query = window.matchMedia('(prefers-color-scheme: dark)')
    
        fn(query.matches);

        query.addEventListener('change', (event) => fn(event.matches))
    }
    
    runColorMode((isDarkMode) => {
        if (isDarkMode) {
            if (localStorage.getItem("modePref") === null) {
            dModeToggle.checked = true
            switchModes()
            }
        } else {
            if (localStorage.getItem("modePref") === null) {
            dModeToggle.checked = false
            switchModes()
            }
        }
    })
    }
}


dModeToggle.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
        window.localStorage.setItem("modePref", "Dark")
        switchModes()
    } else {
        switchModes()
        window.localStorage.setItem("modePref", "Light")
    }
  })

function switchModes() {
    if (dModeToggle.checked) {
        bodyEl.classList.add("darkmode")
        h1[0].classList.add("dmodeH")
        for (let x=0; x < h3.length; x++) {
            h3[x].classList.add("dmodeH")
        }
        bottomSection.classList.add("dmodeBottom")
        for (let i=0; i < subSection.length; i++) {
            subSection[i].classList.add("dmodeSubSection")
        }
    }
    else {
        bodyEl.classList.remove("darkmode")
        h1[0].classList.remove("dmodeH")
        for (let x=0; x < h3.length; x++) {
            h3[x].classList.remove("dmodeH")
        }
        bottomSection.classList.remove("dmodeBottom")
        for (let i=0; i < subSection.length; i++) {
            subSection[i].classList.remove("dmodeSubSection")
        }
    }
}