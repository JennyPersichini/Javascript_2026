/**
 *
 * Voglio in pagina due pulsanti che incrementano e decrementano un numero
 *
 * il numero dovrà partire da 20.
 *
 * con un bottone aumento a 21 ect
 * con un bottone diminuisco a 19 ect
 *
 * il valore dovrà vedersi in pagina
 *
 * il numero sarà visualizzato rosso sotto il valore 5 e giallo sopra i 25
 *
 */

let numero = 20;

// gestisco e aggiorno il colore
function colore() {
  let elemento = document.getElementById("valore");

  if (numero < 5) {
    elemento.style.color = "red";
  } else if (numero > 25) {
    elemento.style.color = "yellow";
  } else {
    elemento.style.color = "black";
  }
}

// aggiorno la pagina
function aggiornaPagina() {
  document.getElementById("valore").textContent = numero;
  colore();
}

// incrementa/aumenta il numero ad ogni click
function aumenta() {
  numero++;
  aggiornaPagina();
}

// diminuisce il numero ad ogni clcik
function diminuisci() {
  numero--;
  aggiornaPagina();
}

aggiornaPagina();
