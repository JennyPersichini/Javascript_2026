// Consumo fisso -> 5 litri di carburante ogni 100km
const litriPer100Km = 5; 

// Prezzi carburante 
const prezzoBenzina = 1.80;
const prezzoDiesel = 1.60;

// Costo autostrada fisso
const costoAutostradaFisso = 5;

// Input utente: i km da percorrere e il tipo di carburante scelto
let km = parseFloat(prompt("Quanti km devi percorrere? "));
let tipoCarburante = prompt("Tipo di carburante (benzina/diesel): ").toLowerCase();

// Calcolo litri consumati per i km percorsi
let litriConsumati = (km / 100) * litriPer100Km;

// Determina prezzo carburante
let prezzoCarburante;

if (tipoCarburante === "benzina") {
    prezzoCarburante = prezzoBenzina;
} else if (tipoCarburante === "diesel") {
    prezzoCarburante = prezzoDiesel;
} else {
    alert("Tipo di carburante non valido!");
}

// Calcolo costo carburante
let costoCarburante = litriConsumati * prezzoCarburante;

// Aggiungere autostrada come scelta opzionale
let autostrada = prompt("Vuoi aggiungere l'autostrada? (si/no)").toLowerCase();

let costoAutostrada = 0;
if (autostrada === "si") {
    costoAutostrada = costoAutostradaFisso;
}

// Totale
let totale = costoCarburante + costoAutostrada;

// Output risultati
console.log("Litri consumati: " + litriConsumati.toFixed(2));
console.log("Costo carburante: " + costoCarburante.toFixed(2) + " €");
console.log("Costo autostrada: " + costoAutostrada.toFixed(2) + " €");
console.log("Totale spesa: " + totale.toFixed(2) + " €");