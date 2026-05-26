let immagini = [
  "https://picsum.photos/id/240/800/500",
  "https://picsum.photos/id/237/800/500",
  "https://picsum.photos/id/238/800/500",
  "https://picsum.photos/id/239/800/500",
];

let indice = 0;

function mostraImmagine() {
  const img = document.getElementById("immagine");
  const prev = document.getElementById("precedente");
  const next = document.getElementById("successiva");

  // immagine centrale
  img.src = immagini[indice];

  // precedente
  let indicePrec = (indice - 1 + immagini.length) % immagini.length;

  prev.src = immagini[indicePrec];

  // successiva
  let indiceSucc = (indice + 1) % immagini.length;

  next.src = immagini[indiceSucc];
}

// AVANTI
function successiva() {
  indice = (indice + 1) % immagini.length;
  mostraImmagine();
}

// INDIETRO
function precedente() {
  indice = (indice - 1 + immagini.length) % immagini.length;

  mostraImmagine();
}

// TASTIERA
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    successiva();
  }

  if (event.key === "ArrowLeft") {
    precedente();
  }
});

mostraImmagine();
