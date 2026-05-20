/**
 * 1)Un docente ha una classe con degli studenti presenti a lezione.
 * 
 *  - deve aggiungere un nuovo studente in ritardo
 *  - rimuovere lo studente che è andato via prima
 *  - mostrare a lista finale degli studenti presenti
 */

// Lista iniziale degli studenti presenti
let studenti = ["Marco", "Luca", "Giulia", "Sara"];

// Rimuovere uno studente che è andato via prima (così si toglie Sara)
// studenti.pop(); 

// Aggiungere uno studente in ritardo
studenti.push("Andrea");

// Rimuovere uno studente che è andato via prima (così si toglie Andrea)
// studenti.pop();

console.log(studenti);

// Rimuovere uno studente che è andato via prima (così si toglie Luca)
let indice = studenti.indexOf("Luca");

if (indice !== -1) {
    studenti.splice(indice, 1);
}

// console.log(studenti);

// Mostrare la lista finale
console.log("Studenti presenti:", studenti);




/* 2)Dovendo far spesa al supermarket, ho una lista della spesa
 * 
 *  - voglio rimuovere il primo elemento perchè già comprato
 *  - aggiungere all inizio "acqua"
 *  - controllare se nella lista della spesa esiste il "LATTE"
 *  - stampare la lista della spesa in stringa
 */ 

// Lista iniziale della spesa
let spesa = ["pane", "latte", "uova", "pasta"];

// console.log(spesa);

// Rimuovere il primo elemento 
spesa.shift();

// console.log(spesa);

// Aggiungere "acqua" all'inizio
spesa.unshift("acqua");

// console.log(spesa);

// Controllare se esiste "LATTE" 
let esisteLatte = spesa.some(item => item.toLowerCase() === "latte");

// console.log(esisteLatte);

// Stampare la lista come stringa
let listaStringa = spesa.join(", ");
console.log("Lista della spesa:", listaStringa);




/* 3)In un ristorante, due camerieri prendono gli ordini
 * 
 *  - voglio avere un unica lista per gli ordini e stamparla in stringa
 */

// Ordini presi dai due camerieri
let cameriere1 = ["pizza", "patatine", "supplì"];
let cameriere2 = ["primo", "secondo", "dolce"];

// Unire le due liste in una sola
let ordiniTotali = cameriere1.concat(cameriere2);

// Stampare la lista come stringa
let ordiniStringa = ordiniTotali.join(", ");
console.log("Ordini totali:", ordiniStringa);