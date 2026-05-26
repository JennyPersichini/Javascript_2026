//creare una funzione che calcola il prezzo di un prodotto
//
//- chiedi all utente il prezzo del prodotto e la % di sconto
// i prezzi sono decimali -> toFixed(2)

// Chiedo i dati all'utente e converto
let prezzo = parseFloat(prompt("Inserisci il prezzo del prodotto: "));
let sconto = parseFloat(prompt("Inserisci la percentuale di sconto: "));

function calcolaPrezzoScontato(x, y) {
  // Calcolo sconto
  return (x = x - (x / 100) * y);
}

let risultato = calcolaPrezzoScontato(prezzo, sconto).toFixed(2);

alert("Prezzo finale: " + risultato + "€");
