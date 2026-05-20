// Prezzi energia
let prezzoBase = 0.25;
let prezzoKwhSuccessivi = 0.20;

// Soglia Kwh
let soglia = 100;

// Canone fisso
let canoneSky = 10;

// Input utente: kwh consumati e se applicare il canone sky
let kwh = parseFloat(prompt("Quanti kWh hai consumato? "));
let sky = prompt("Vuoi aggiungere il canone Sky? (si/no)").toLowerCase();

// Calcolo costo energia
let costoEnergia;

if (kwh <= soglia) {
    costoEnergia = kwh * prezzoBase;
} else {
    let primi = soglia * prezzoBase;
    let extra = (kwh - soglia) * prezzoKwhSuccessivi;
    costoEnergia = primi + extra;
}

// Calcolo canone
let costoSky = 0;
if (sky === "si") {
    costoSky = canoneSky;
}

// Totale
let totale = costoEnergia + costoSky;

// Output
console.log("Consumo: " + kwh + " kWh");
console.log("Costo energia: " + costoEnergia.toFixed(2) + " €");
console.log("Canone Sky: " + costoSky.toFixed(2) + " €");
console.log("Totale bolletta: " + totale.toFixed(2) + " €");