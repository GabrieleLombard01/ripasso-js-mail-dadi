/*
- Inventiamo una lista di email a nostro piacimento
- Chiediamo all'utente una mail (con un prompt)
- controlliamo che la mail inserita sia presente nella lista
- se è presente, gli diamo il benvenuto. (in console)
- altrimenti gli diciamo che non può accedere (in console)
*/

// Recupero gli elementi dal DOM
const emailInput = document.getElementById('input');
const button = document.querySelector('button');
const message = document.getElementById('message');

// Preparo una lista di mail "autorizzate"
const allowedEmails = ['marco@boolean.it', 'luca@boolean.it', 'matteo@boolean.it', 'gabriele@boolean.it'];