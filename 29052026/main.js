let studenti = [];

const output = document.getElementById("output");

function stampa(testo) {
  output.innerText = testo;
}

// 1 AGGIUNGI STUDENTE
function aggiungiStudente() {
  const studente = {
    nome: document.getElementById("nome").value,
    cognome: document.getElementById("cognome").value,
    eta: Number(document.getElementById("eta").value),
    voto: Number(document.getElementById("voto").value),
    sport: [
      document.getElementById("sport1").value,
      document.getElementById("sport2").value,
    ],
  };

  studenti.push(studente);
  stampa("Studente aggiunto ✔");
}

// 2 MOSTRA STUDENTI
function mostraStudenti() {
  let testo = "";

  studenti.forEach((s, i) => {
    let stato;

    if (s.promosso === true) {
      stato = "✔ Promosso";
    } else if (s.promosso === false) {
      stato = "❌ Bocciato";
    } else {
      stato = "Non valutato";
    }

    testo += `${i + 1}) ${s.nome} ${s.cognome} - Età: ${s.eta} - Voto: ${s.voto} - Sport: ${s.sport.join(", ")} - ${stato}\n`;
  });

  stampa(testo || "Nessuno studente");
}

// 3 MEDIA VOTI
function mediaVoti() {
  let somma = 0;

  studenti.forEach((s) => {
    somma += s.voto;
  });

  let media;

  if (studenti.length > 0) {
    media = somma / studenti.length;
  } else {
    media = 0;
  }

  stampa("Media voti: " + media.toFixed(2));
}

// 4 PRIMO STUDENTE
function primoStudente() {
  stampa(JSON.stringify(studenti[0], null, 2) || "Nessuno studente");
}

// 5 PROMOSSO
function aggiungiPromosso() {
  studenti.forEach((s) => {
    s.promosso = s.voto >= 6;
  });

  stampa("Valutazione finale aggiunta ✔");
}

// 6 ELIMINA ETÀ PRIMO
function eliminaEtaPrimo() {
  if (studenti[0]) {
    delete studenti[0].eta;
    stampa("Età primo studente eliminata");
  }
}

// 7 CHIAVI PRIMO
function chiaviPrimo() {
  if (!studenti[0]) return;

  stampa(Object.keys(studenti[0]).join(", "));
}

// 8 VALORI PRIMO
function valoriPrimo() {
  if (!studenti[0]) return;

  stampa(Object.values(studenti[0]).join(", "));
}

// 9 CLONA PRIMO
function clonaPrimo() {
  if (!studenti[0]) return;

  let clone = {};

  for (let key in studenti[0]) {
    clone[key] = studenti[0][key];
  }

  studenti.push(clone);

  stampa("Clonato e aggiunto:\n" + JSON.stringify(clone, null, 2));
}
