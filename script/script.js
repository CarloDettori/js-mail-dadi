"use strict";
console.clear();

/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email

const mailDatabase = ["gianfranco@gmail.com", "antongiulio@gmail.com" , "pierluigi@gmail.com", "carlo@gmail.com", "pistirzio@gmail.com", "teofrasto@gmail.com", "redegardo@gmail.com",];
const mail = prompt("inserisci qui la tua mail");
let mailFlag = false;
for (let i = 0; i < mailDatabase.length; i++) {
    if (mailDatabase[i] === mail) {
        console.log("Hai l'autorizzaione per accedere")
        mailFlag = true;
    }
    else if (mailDatabase.indexOf(mailDatabase[i]) === mailDatabase.length - 1 && mailFlag == false) {
        console.log("ACCESSO NEGATO. La mail che hai inserito non è valida")
    }
}
*/

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.


function rng() {
    let x = Math.floor((Math.random() * 6) + 1);
    return x;
}

let diceSrtikePc = rng();
let diceSrtikeMe = rng();
let pairflag = false;
console.log(`il tuo numero è ${diceSrtikeMe}`)
console.log(`il numero del comuter è ${diceSrtikePc}`)

if (diceSrtikePc > diceSrtikeMe) {
    console.log("Ritenta, sarai piu fortunato/a")
} else if (diceSrtikePc < diceSrtikeMe) {
    console.log("Congratulazioni! Hai vinto!")
} else if (diceSrtikePc == diceSrtikeMe) {
    console.log("Abbiamo un pareggio ")
    pairflag = true;
    console.log("Ricarica la pagina per giocare lo spareggio")
}
if (pairflag == false) {
    console.log("Ricarica la pagina per riprovare")
}
*/


/*
snak 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.


let sixNumers = [];
while (sixNumers.length < 6) {
    let num = prompt("scrivi un numero qualsiasi");
    if (num % 2 != 0) {
        sixNumers.push(num)
    }
}
*/

/*
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.

let cubes = [];
let n = prompt("scrivi un numero maggiore di zero qualsiasi")

for (let i = n; i =! 0; i--) {
    cubes.push(i**3);
}

console.log(cubes);
*/

/* 
snak 7
Stampa le potenze di 2 fino a 1000.
*/

for (let i = 1; i <= 1000; i++) {
    console.log(i**2)
}


