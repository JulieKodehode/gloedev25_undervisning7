// DATATYPES
// Primative datatypes:
// strig = tekst
// number = tall
// boolean = sant/usant sjekk

// VARAIBLES
// let = kan bytte verdi
// const = kan ikke bytte verdi
// var = utdatert

let userName = "Julie";
userName = "JulieIsobelle";
console.log(userName);
console.log(typeof userName);

let userAge = 28;
console.log(userAge);
console.log(typeof userAge);

let isPresent = true;
console.log(isPresent);
console.log(typeof isPresent);

const firstName = "Julie";
// firstName = "Julius";
console.log(firstName);

const lastName = "Isobelle";

// Variable chaining med +
let fullName = firstName + " " + lastName + "!";
// Template litteral
fullName = `${firstName} ${lastName}!!`;
console.log(fullName);

const num1 = 10;
const num2 = 10;
const sum = num1 + num2;
console.log(sum);

// NON-PRIMATIVE DATATYPES
// Function = En blokk med kode som kjøres samtidig
// Array = En liste av data
// Object = key:value liste av data

function buisnessCard() {
    console.log("Hei fra inni en funksjon");
    // Sett opp variabler for navn og tittel
    const firstName = "Julie";
    const lastName = "Isobelle";
    const title = "Kurs veileder";
    console.log(`${firstName} ${lastName}, ${title}.`)

    // Kjapp introduksjon til DOMM - mer om dette på onsdag 30.04
    const main = document.querySelector("main");
    main.textContent = `${firstName} ${lastName}, ${title}.`;
}
buisnessCard();

