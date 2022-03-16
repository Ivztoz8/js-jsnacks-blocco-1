// Dichiarazione variabili
let sommaOutput = document.getElementById("outPut");  
let sommaNumbers = 0;

// Richiesta di 10 numeri e poi somma e sviluppa l'output in HTML
for (i = 0; i < 10; i++){
    let numInput = parseInt(prompt("Inserisci il numero: "));
    console.log(numInput);
    sommaNumbers += numInput;
}
sommaOutput.innerHTML = `<div class="col"> Le somma dei ${(i)} numeri è: ${(sommaNumbers)}</div>`;

  

