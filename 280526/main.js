const animali = [

    {
        nome: "Luna",
        specie: "Gatto",
        eta: 3,
        peso: 4.5,
        vaccini: ["FELV", "Trivalente"],

        mangia: function () {
            console.log(this.nome + " sta mangiando");
        },

        dorme: function () {
            console.log(this.nome + " sta dormendo");
        }
    },

    {
        nome: "Rocky",
        specie: "Cane",
        eta: 5,
        peso: 18,
        vaccini: ["Scabbia", "Rabbia"],

        mangia: function () {
            console.log(this.nome + " sta mangiando");
        },

    }

];


// ---------------------------------------------------
// forEach -> stampa nome, specie e peso
// ---------------------------------------------------

console.log("=== LISTA ANIMALI ===");

animali.forEach(animale => {

    console.log(
        "Nome:", animale.nome,
        "| Specie:", animale.specie,
        "| Peso:", animale.peso + "kg"
    );

});


// ---------------------------------------------------
// Calcolo peso totale
// ---------------------------------------------------

let pesoTotale = 0;

animali.forEach(animale => {
    pesoTotale += animale.peso;
});

console.log("Peso totale:", pesoTotale + "kg");


// ---------------------------------------------------
// Modifica peso di un animale
// ---------------------------------------------------

animali[0].peso = 5;

console.log("Nuovo peso di", animali[0].nome + ":", animali[0].peso + "kg");


// ---------------------------------------------------
// Aggiunta nuova proprietà
// ---------------------------------------------------

animali[0].colore = "Nero";

console.log("Nuova proprietà colore:", animali[0].colore);


// ---------------------------------------------------
// for in -> stampa tutte le proprietà
// ---------------------------------------------------

console.log("=== PROPRIETÀ DI LUNA ===");

for (let chiave in animali[0]) {

    console.log(chiave + ":", animali[0][chiave]);

}


// ---------------------------------------------------
// Stampare tutti i valori di un animale
// ---------------------------------------------------

console.log("=== VALORI DI ROCKY ===");

const valori = Object.values(animali[1]);

valori.forEach(valore => {
    console.log(valore);
});


// ---------------------------------------------------
// Eliminare una proprietà
// ---------------------------------------------------

delete animali[0].eta;

console.log("Proprietà 'eta' eliminata da", animali[0].nome);

console.log(animali[0]);


// ---------------------------------------------------
// Copia di un animale con for in
// ---------------------------------------------------

const copiaAnimale = {};

for (let chiave in animali[1]) {

    copiaAnimale[chiave] = animali[1][chiave];

}

console.log("=== COPIA ANIMALE ===");

console.log(copiaAnimale);


// ---------------------------------------------------
// Test funzioni
// ---------------------------------------------------

animali[0].mangia();
animali[0].dorme();

animali[1].mangia();
animali[1].abbaia();