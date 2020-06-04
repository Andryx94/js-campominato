//variabili difficoltà
var difficoltaUtente;
var difficolta = 0;

//variabili mine
var mine = [];

//variabili gioco e tabellone
var risultato = "";
var numeroUtente;
var numeroUtenteArray = [];
var punteggio = 0;

//prompt richiesta difficoltà
while (difficoltaUtente <0 || difficoltaUtente >2 || isNaN(difficoltaUtente)) {
  difficoltaUtente = parseInt(prompt("Dimmi la difficoltà (0 = facile, 1= medio, 2= difficile)"))
}

//inizializzazione difficoltà e bombe
difficolta = selettoreDifficolta(difficoltaUtente);
mine = creazioneMine(difficolta, 16);

//core gioco
while (risultato == "") {
  numeroUtente = parseInt(prompt("Dimmi un numero tra 1 e 100"));
  if (!isNaN(numeroUtente) && !numeroUtenteArray.includes(numeroUtente) && numeroUtente >0 && numeroUtente <=100)  {
    if (mine.includes(numeroUtente)) {
      risultato = "Hai perso!";
    }

    else if (difficolta - punteggio == 0) {
      risultato = "Hai vinto!";
    }

    else {
      punteggio+=1;
      numeroUtenteArray+= numeroUtente;
    }
  }
}

//risultato tabellone
alert(risultato + " Il tuo punteggio è: " + punteggio);

//FUNZIONE selezione difficoltà
function selettoreDifficolta(difficoltaUtente){
  switch(difficoltaUtente) {
    case 0:
    difficolta = 100;
    break;
    case 1:
    difficolta = 80;
    break;
    case 2:
    difficolta = 50;
    break;
  }
  return difficolta;
}

//FUNZIONE creazione mine
function creazioneMine(difficolta, n){
  var minaTemp = 0;

  while (mine.length<n) {
    minaTemp = Math.ceil(Math.random() * difficolta);
    if (!mine.includes(minaTemp)) {
      mine[mine.length] = minaTemp
    }
  }
  return mine
}
