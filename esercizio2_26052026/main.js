/* 1. Scelta difficoltà:
0 = > da 1 a 100
1 = > da 1 a 80
2 = > da 1 a 50 */

let difficolta = parseInt(
  prompt("Scegli difficoltà (0=facile, 1=media, 2=difficile): "),
);

let maxNum;

if (difficolta === 0) {
  maxNum = 100;
} else if (difficolta === 1) {
  maxNum = 80;
} else if (difficolta === 2) {
  maxNum = 50;
} else {
  alert("Difficoltà non valida");
}

// 2. Il computer deve generare 16 numeri casuali da 1 a 100
let numeriVietati = [];

while (numeriVietati.length < 16) {
  let num = Math.floor(Math.random() * maxNum) + 1;

  if (!numeriVietati.includes(num)) {
    numeriVietati.push(num);
  }
}

// 3. Variabili utili
let numeriUtente = [];
let punteggio = 0;
let maxConsentiti = maxNum - 16;

// 4. Ciclo while
while (true) {
  // chiedo all'utente di inserire un numero da 1 a 100 alla volta
  let numero = parseInt(prompt(`Inserisci un numero (1-${maxNum}):`));

  // controllo validità
  if (isNaN(numero) || numero < 1 || numero > maxNum) {
    alert("Numero non valido!");
    continue;
  }

  // controllo duplicati
  if (numeriUtente.includes(numero)) {
    alert("Numero già inserito!");
    continue;
  }

  numeriUtente.push(numero);

  /* Se il numero è presente nella lista dei numeri generati,
    la partita termina, 
    altrimenti continua, chiedendo all utente un altro numero.
    */

  if (numeriVietati.includes(numero)) {
    alert("GAME OVER!");
    break;
  } else {
    punteggio++;
  }

  // La partita termina quando il giocatore raggiunge il numero massimo possibile di numeri consentiti.
  if (punteggio === maxConsentiti) {
    alert("Hai vinto!");
    break;
  }
}

// 5. risultato finale
alert("Punteggio finale: " + punteggio);
