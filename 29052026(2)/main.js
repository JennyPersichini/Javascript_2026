let progress = 0;
let interval = null;
let isPaused = false;

const progressBar = document.getElementById("progressBar");
const percentuale = document.getElementById("percentuale");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const cancelBtn = document.getElementById("cancelBtn");

const modalElement = document.getElementById("downloadModal");
const modalMessage = document.getElementById("modalMessage");

const modal = new bootstrap.Modal(modalElement);

// FUNZIONE AGGIORNAMENTO BARRA
function updateProgress() {
  progress++;

  progressBar.style.width = progress + "%";
  progressBar.innerText = progress + "%";

  percentuale.innerText = progress + "%";

  // DOWNLOAD COMPLETATO
  if (progress >= 100) {
    clearInterval(interval);

    modalMessage.innerText = "Download Completato!";

    modal.show();
  }
}

// AVVIA DOWNLOAD
startBtn.addEventListener("click", () => {
  clearInterval(interval);

  progress = 0;

  progressBar.style.width = "0%";
  progressBar.innerText = "0%";

  percentuale.innerText = "0%";

  interval = setInterval(updateProgress, 100);
});

// PAUSA
pauseBtn.addEventListener("click", () => {
  clearInterval(interval);

  isPaused = true;
});

// RIPRENDI
resumeBtn.addEventListener("click", () => {
  if (isPaused && progress < 100) {
    interval = setInterval(updateProgress, 100);

    isPaused = false;
  }
});

// ANNULLA
cancelBtn.addEventListener("click", () => {
  clearInterval(interval);

  progress = 0;

  progressBar.style.width = "0%";
  progressBar.innerText = "0%";

  percentuale.innerText = "0%";

  modalMessage.innerText = "Download Annullato!";

  modal.show();
});
