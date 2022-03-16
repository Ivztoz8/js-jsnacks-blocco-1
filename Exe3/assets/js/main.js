// Dichiarazione variabili
let sommaOutput = document.getElementById("outPut");  
let sommaNumbers;

// Richiesta di due numeri col
let numInput0 = prompt ("Inserisci il primo numero: ");
Math.floor(numInput0);
let numInput1 = prompt  ("Inserisci il secondo numero: ");
Math.floor(numInput1);
let numInput2 = prompt ("Inserisci il terzo numero: ");
parseInt(numInput2);
let numInput3 = prompt ("Inserisci il quarto numero: ");
Math.floor(numInput3);
let numInput4 = prompt ("Inserisci il quinto numero: ");
Math.floor(numInput4);
let numInput5 = prompt ("Inserisci il sesto numero: ");
parseInt(numInput5);
let numInput6 = prompt ("Inserisci il settimo numero: ");
Math.floor(numInput6);
let numInput7 = prompt ("Inserisci l'ottavo numero: ");
Math.floor(numInput7);
let numInput8 = prompt ("Inserisci il nono numero: ");
parseInt(numInput8);
let numInput9 = prompt ("Inserisci il decimo numero: ");
Math.floor(numInput9);
sommaNumbers = numInput0.value + numInput1.value + numInput2.value + numInput3.value + numInput4.value + numInput5.value + numInput6.value + numInput7.value + numInput8.value + numInput9.value; 
sommaOutput.innerHTML = `<div class="col"> Le somma di tutti i numeri è: ${(sommaNumbers)}</div>`;

  

