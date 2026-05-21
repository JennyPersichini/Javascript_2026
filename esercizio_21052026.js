//Esercizio 1

//Viene chiesto all utente 5 volte un numero
//questo numero dovrà essere raddoppiato
//stampare i valori raddoppiati

// BONUS : nel prompt voglio avere
//         un messaggio che cambia dopo ogni numero inserito.
//         es.: Inserisci il PRIMO numero di 5
//              Inserisci il SECONDO numero di 5..



//dichiaro un array vuoto per salvare l dato inserito
//dichiaro un altro array per salvare quelli raddoppiati
let numeri = [];
let numeriDoppi = [];

// BONUS:
let ordine = ["primo", "secondo", "terzo", "quarto", "quinto"];

// ciclo 5 volte
for (let i = 0; i < 5; i++) {

  // prendo il dato e lo converto in numero (+ BONUS)
  let num = parseInt(prompt("Inserisci il " + ordine[i] + " numero di 5 : "));

  if (isNaN(num)) {
    console.log("Valore non valido");
  } else {
    // push il numero nell'array numeri
    numeri.push(num);

    // push il valore raddoppiato nell'array numeriDoppi
    numeriDoppi.push(num * 2);
  }
}

// stampo array dei doppi
console.log(numeriDoppi);


// ---------------------------------------------------------------------------------------------------------------- 

//Esercizio 2

//Abbiamo un sistema che dispone di una lista di codici di accesso

// let codici = [101, 202, 303, 404];

//Problema :  l utente deve inserire un codice per accedere al sistema.

    //  il programma deve verficare : SE il codice è valido E SE questo codice rientra in un certo intervallo.
   
    // Richieste : verifica se il codice è presente nell array 
    //             e contemporaneamente SE MAGGIORE O UGUALE A 100 E MINORE O UGUALE A 400

    //Se entrambe le condizioni sono vere, > stampa "Accesso Consentito"
    //Se il codice è nell array MA è fuori dall intervallo, > stmpa "Codice valido ma fuori dal range"
    //Se il codice non è presente > "Accesso Negato"


// lista di codici di accesso
let codici = [101, 202, 303, 404];

// Input utente + conversione in numero
let codiceUtente = parseInt(prompt("Inserisci il codice di accesso: "));

// Creo variabili per ogni richiesta: se il codice è presente nell array e se è maggiore/uguale a 100 e minore /uguale a 400
let presente = codici.includes(codiceUtente);
let range = codiceUtente >= 100 && codiceUtente <= 400;

if (presente && range) {
    console.log("Accesso Consentito");
} else if (presente && !range) {
    console.log("Codice valido ma fuori dal range");
} else {
    console.log("Accesso Negato");
}