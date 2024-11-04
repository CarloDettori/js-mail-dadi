"use strict";
console.clear();

/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email
*/

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
