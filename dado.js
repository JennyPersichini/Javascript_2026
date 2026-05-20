/**
 * 
 * viene chiesto all utente di lanciare 2 dadi
 * se la somma di entrambi i dadi è superiore a 7 stampare : hai vinto
 * se la somma di entrambi i dadi è pari stampare : risultato pari
 * 
 *  
 * */


// Lancio di 2 dadi (numeri casuali da 1 a 6)
let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2 = Math.floor(Math.random() * 6) + 1;

// Calcolo della somma
let somma = dado1 + dado2;

// Mostra i risultati dei dadi
console.log("Dado 1:", dado1);
console.log("Dado 2:", dado2);
console.log("Somma:", somma);

// Condizioni
if (somma > 7) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso!!")
}


if (somma % 2 === 0) {
    console.log("Risultato pari");
} else{
    console.log("Risultato dispari");
}