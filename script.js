const buttonConvert = document.querySelector(".convert-button")
const currencyToConvert = document.querySelector(".valueToConvert") 
const currencyConverted = document.querySelector(".ValueConverted")
const currencySelect = document.querySelector(".currency-select")
const currencySelectOP = document.querySelector("#currency-select2")



function converter (){

const inputValue = document.querySelector(".input-1").value
const dolarValue=  5.20
const euro = 6.20
const libra = 7.20
const bitcoin = 441.433

currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
style: "currency",
currency: "BRl",
}).format(inputValue);


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

if (currencySelect.value == "libra"){

   currencyConverted.innerHTML = new Intl.NumberFormat("en-GB",{
   style:"currency",
   currency: "GBP"
   }).format(inputValue / libra);
}

if (currencySelect.value == "Bitcoin"){

   currencyConverted.innerHTML = new Intl.NumberFormat("en-US",{
   style:"currency",
   currency: "BTC"
   }).format(inputValue / bitcoin);
}

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

if (currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra";
    countryFlag.src = "./assets/libraflag.png"
}

if (currencySelect.value == "Bitcoin"){

    currencyName.innerHTML = "Bitcoin";
    countryFlag.src = "./assets/btcflag.png"

}   

 converter()
}


currencySelect.addEventListener("change", (changeCurrency))
buttonConvert.addEventListener("click", (converter))