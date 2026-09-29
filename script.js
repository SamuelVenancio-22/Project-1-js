const buttonConvert = document.querySelector(".convert-button")
const currencyToConvert = document.querySelector(".valueToConvert") 
const currencyConverted = document.querySelector(".ValueConverted")


function converter (){

const inputValue = document.querySelector(".input-1").value
const dolarValue=  5.20
const convertedValue = inputValue / dolarValue

currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{

style: "currency",
currency: "BRl",

}).format(inputValue);


currencyConverted.innerHTML = new Intl.NumberFormat("en-US",{

style: "currency",
currency: "USD",

}).format(convertedValue);

}




buttonConvert.addEventListener("click", (converter))

