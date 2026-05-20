//Ho un array di numeri e voglio stmpare solamete i numeri pari

let numeri = [20, 34, 56, 33, 11, 98, 87, 37, 128];

for (let i = 0; i < numeri.length; i++){

    if(numeri[i] % 2 === 0){

        console.log(numeri[i] + " è paro!!");
    }


}


//stampare il valore del numero raddoppiato di un array

const numeri2 = [1, 2, 3, 4, 5];

for (let i = 0; i < numeri2.length; i++) {
  console.log(numeri2[i] * 2);
}




// Confrontiamo due array e stampiamo i valori uguali

const array1 = [1, 51, 60, 82, 73];
const array2 = [99, 73, 112, 80, 60, 4, 1];

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (array1[i] === array2[j]) {
      console.log(array1[i]);
    }
  }
}




// Genereare due array con n numeri casuali e confrontare se uguale
const n = 5;

const num1 = [];
const num2 = [];

// generazione array num1
for (let i = 0; i < n; i++) {
  num1.push(Math.floor(Math.random() * 10));
}

// generazione array num2
for (let i = 0; i < n; i++) {
  num2.push(Math.floor(Math.random() * 10));
}

console.log("Array 1:", num1);
console.log("Array 2:", num2);

// confronto con for annidati
for (let i = 0; i < num1.length; i++) {
  for (let j = 0; j < num2.length; j++) {
    if (num1[i] === num2[j]) {
      console.log("Valore uguale:", num1[i]);
    }
  }
}