//Definisco le costanti 
const pricePerKm = 0.21;
const ageAdult = 18;
const ageElderly = 65;
const discountUnderAge = 0.2;
const discountOver65 = 0.4;

//Definisco le variabili iniziali
let namePassenger = document.getElementById("namePassenger");
let kmToRun = document.getElementById("kmToRun");
let agePassenger = document.getElementsByTagName("select");

// Variabili bottoni da premere
let processData = document.getElementById("process-data");
let discardData = document.getElementById("discard-data");

// Variabili per CP Code
let min = 90000;
let max = 99999;
let randomCpCode = Math.floor(Math.random() * (max - min) + min);

// Variabili per numero carrozza
let randomCoach = Math.floor(Math.random() * 9) + 1;

//Calcolo prezzo biglietto standard
let priceTicket = kmToRun * pricePerKm;
document.getElementById("traveller-name").innerHTML = namePassenger;
document.getElementById("ticket-type").innerHTML = "Biglietto Standard";
document.getElementById("coach").innerHTML = randomCoach;
document.getElementById("CP-code").innerHTML = randomCpCode;
document.getElementById("price").innerHTML = priceTicket.toFixed(2) + "€";



























let priceDiscounted;
let underAgeSavings = priceTicket * discountUnderAge;
let elderlySavings = priceTicket * discountOver65;

if (agePassenger < ageAdult){
    priceDiscounted = priceTicket - (priceTicket * discountUnderAge); 
    document.getElementById("price").innerHTML = priceDiscounted.toFixed(2);
} else if (agePassenger >= ageElderly) {
    priceDiscounted = priceTicket - (priceTicket * discountOver65); 
    document.getElementById("price").innerHTML = priceDiscounted.toFixed(2);
}

