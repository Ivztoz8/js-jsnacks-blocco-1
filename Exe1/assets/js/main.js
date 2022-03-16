// Dichiarazione variabili
let numOutput = document.getElementById("outPut");  

// Richiesta di due numeri col
let numInputA = prompt ("Inserire il primo numero: ");
let numInputB = prompt ("Inserire il secondo numero: ")
if (numInputA > numInputB){
    numOutput.innerHTML = `<div class="col"> Il numero maggiore è: ${(numInputA)}</div>`;
} 
else if (numInputA === numInputB){
    numOutput.innerHTML = `<div class="col"> I due numeri sono uguali. </div>`;
} 
else {
    numOutput.innerHTML = `<div class="col"> Il numero maggiore è: ${(numInputB)}</div>`;
}
