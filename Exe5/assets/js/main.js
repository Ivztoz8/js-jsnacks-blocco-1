// Dichiarazione variabili
let voidArray = [];


// Richiesta di un numero per 6 volte, se è dispari lo inserisco nell'Array
for (i= 0; i < 6; i++){
    let numberInput = parseInt(prompt("Inserisci un numero: "));
    if((numberInput % 2) === 0){
        alert("Il numero non è dispari.")
    }
    else {
        alert("Il numero è dispari ed è stato inserito nell'Array.")
        voidArray.push(numberInput);
        console.log(voidArray);
    }
}


  

