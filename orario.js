/**
 * Orario casuale : 
 * 
 *  ora casuale tra 0 e 23
 *  minuti casuali tra 0 e 59
 *  Stampare in console log ora:minuti
 * 
 */


// Genera un'ora casuale tra 0 e 23
let ore = Math.floor(Math.random() * 24);

// Genera minuti casuali tra 0 e 59
let minuti = Math.floor(Math.random() * 60);

// Se i minuti sono da 0 a 9 → aggiunge lo zero davanti
if (minuti < 10) {
    minuti = "0" + minuti;
}

// Stampa in formato ora:minuti
console.log(ore + ":" + minuti);

