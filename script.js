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




buttonConvert.addEventListener("click", (converter))

