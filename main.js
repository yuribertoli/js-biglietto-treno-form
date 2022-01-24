//Definisco le costanti 
const pricePerKm = 0.21;
const discountUnderAge = 0.2;
const discountOver65 = 0.4;

//Definisco le variabili iniziali
let namePassenger = document.getElementById("namePassenger");
let kmToRun = document.getElementById("kmToRun");
let agePassenger = document.getElementById("select");

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
let priceTicket = kmToRun.value * pricePerKm;

//Calcolo prezzi biglietti scontati
let priceDiscounted18 = priceTicket - (priceTicket * discountUnderAge);
let priceDiscounted65 = priceTicket - (priceTicket * discountOver65);

//Click su bottone "Genera"
processData.addEventListener("click",

    function() {

        document.getElementById("traveller-name").innerHTML = namePassenger.value;
        document.getElementById("coach").innerHTML = randomCoach;
        document.getElementById("CP-code").innerHTML = randomCpCode;

        if (agePassenger.value == "Minorenne") {
            document.getElementById("price").innerHTML = priceDiscounted18.toFixed(2) + "€";
            document.getElementById("ticket-type").innerHTML = "Biglietto Under18";
        } else if (agePassenger.value == "Over65") {
            document.getElementById("price").innerHTML = priceDiscounted65.toFixed(2) + "€";
            document.getElementById("ticket-type").innerHTML = "Biglietto Over65";
        } else {
            document.getElementById("price").innerHTML = priceTicket.toFixed(2) + "€";
            document.getElementById("ticket-type").innerHTML = "Biglietto Standard";
        } 

    }

);

//Click su bottone "Annulla"
discardData.addEventListener("click",

    function() {

        namePassenger.value = "";
        kmToRun.value = "";

    }

)





