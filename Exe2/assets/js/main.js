// Dichiarazione variabili
let wordOutput = document.getElementById("outPut");  

// Richiesta di due numeri col
let wordInputA = prompt ("Inserire la prima parola: ");
let wordInputB = prompt ("Inserire la seconda parola: ");
let wordAlenght = wordInputA.length;
let wordBlenght = wordInputB.length;
if (wordAlenght > wordBlenght ){
    wordOutput.innerHTML = `<div class="col"> ${(wordInputA)}</div>`;
} 
else if (wordAlenght  === wordBlenght){
    wordOutput .innerHTML = `<div class="col"> Le due parole sono lunghe uguale:${(wordInputA)}, ${(wordInputB)}</div>`;
} 
else {
    wordOutput .innerHTML = `<div class="col"> ${(wordInputB)}</div>`;
}
