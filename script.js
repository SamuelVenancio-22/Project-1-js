const buttonConvert = document.querySelector(".convert-button")
const currencyToConvert = document.querySelector(".valueToConvert") 
const currencyConverted = document.querySelector(".ValueConverted")
const currencySelect = document.querySelector(".currency-select")

function converter (){

const inputValue = document.querySelector(".input-1").value
const dolarValue=  5.20
const euro = 6.20


if(currencySelect.value == "Dolar"){

currencyConverted.innerHTML = new Intl.NumberFormat("en-US",{
style: "currency",
currency: "USD",
}).format( inputValue / dolarValue);

}

 
if (currencySelect.value == "Euro"){

currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{
style:"currency",
currency: "EUR"
}).format(inputValue / euro);

}

currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
style: "currency",
currency: "BRl",
}).format(inputValue);

}


const currencyName = document.querySelector(".currency-name")
const countryFlag = document.querySelector(".Country-flag")

function changeCurrency (){


if(currencySelect.value == "Dolar"){
   
    currencyName.innerHTML = "Dólar Americano";
    countryFlag.src = "./assets/flag-USA.webp"
}

if (currencySelect.value == "Euro"){
   
    currencyName.innerHTML = "Euro";
    countryFlag.src = "./assets/Euroflag.png"

}

converter()

}

currencySelect.addEventListener("change", (changeCurrency))
buttonConvert.addEventListener("click", (converter))

