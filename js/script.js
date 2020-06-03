//VARIABILI
//variabili difficoltà
var difficoltaUtente = -1;
var difficolta = 0;

//variabili mine
var mine = [];
var minaTemp = 0;
var i=0;

//variabili gioco e tabellone
var risultato = "";
var numeroUtente;
var numeroUtenteArray = [];
var punteggio = 0;

//DIFFICOLTA'
//prompt richiesta difficoltà
while (difficoltaUtente <0 || difficoltaUtente >2 || isNaN(difficoltaUtente)) {
  difficoltaUtente = parseInt(prompt("Dimmi la difficoltà (0 = facile, 1= medio, 2= difficile)"))
}

//condizione selezione difficoltà
if (difficoltaUtente == 0) {
  difficolta = 100;
}

else if (difficoltaUtente == 1){
  difficolta = 80;
}

else {
  difficolta = 50;
}

//MINE
//creazione 16 mine
while (i<16) {
  minaTemp = Math.ceil(Math.random() * difficolta);
  if (!mine.includes(minaTemp)) {
    mine[i] = minaTemp
    i+=1;
  }

  else {
    i+=0;
  }
}

//GIOCO E TABELLONE
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

//alert tabellone
alert(risultato + "Il tuo punteggio è: " + punteggio);
