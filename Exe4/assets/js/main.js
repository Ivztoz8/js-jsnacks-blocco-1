// Dichiarazione variabili
let listaInvitatiBG = [
    "Jay Gatsby",
    "Gatsby",
    "Jay",   
    "Nick Carraway", 
    "Tom Buchanan", 
    "Daisy Buchanan", 
    "Jordan Baker",
    "George Wilson",
    "Mr. McKee",
    "Mrs. McKee",
    "Walter Chase",
    "Cops",
    "Cop"];
console.log(listaInvitatiBG);


// Richiesta di 10 numeri e poi somma e sviluppa l'output in HTML
let nomInvitato = prompt("Salve, il suo nome prego: ");
for (i = 0; i < listaInvitatiBG.length; i++){    
   var namechecked = listaInvitatiBG.indexOf(nomInvitato);
    console.log(namechecked);
}
if (namechecked > -1 && namechecked !== 0 && namechecked !== 1 && namechecked !== 2 && namechecked !== 12 && namechecked !== 13){
    alert(`Salve ${(nomInvitato)} prego entri pure. Il guardaroba è sulla sinistra.`);
}
else if (namechecked === 0 || namechecked == 1 || namechecked == 2){
    alert(`Oh ${(nomInvitato)} non l'avevo riconosciuta. E' sempre un piacere incontrarla. Buona festa Sir.`);
}
else if (namechecked === 12 || namechecked === 13){
    alert(`Salve sbirro, il Signor Gatsby mi aveva avvertito del vostro arrivo.
    Lui stesso, se foste arrivati, si è premurato di chiedervi la massima discrezione. 
    Buona "festa" o lavoro, se mai abbiate lavorato.`);
}
else{
    alert("Mi dispiace davvero ma il suo nome non compare sulla lista. ");
}
  

