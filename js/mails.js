/*
- Inventiamo una lista di email a nostro piacimento
- Chiediamo all'utente una mail (con un prompt)
- controlliamo che la mail inserita sia presente nella lista
- se è presente, gli diamo il benvenuto. (in console)
- altrimenti gli diciamo che non può accedere (in console)
*/

// Recupero gli elementi dal DOM
const emailInput = document.getElementById('email');
const button = document.querySelector('button');
const message = document.getElementById('message');

// Preparo una lista di mail "autorizzate"
const allowedEmails = ['marco@boolean.it', 'luca@boolean.it', 'matteo@boolean.it', 'gabriele@boolean.it'];

// Al click sul Button...
button.addEventListener('click', function(){

    // Preparo il messaggio
    let result = 'Non sei autorizzato'

    // Raccolgo il valore dell'input
    const userEmail = emailInput.value.trim(); 

    // Giro per tutte le mail della lista
    for(let i = 0; i < allowedEmails.length; i++){

        const email = allowedEmails[i];

        if(email === userEmail) {
            result = 'Sei autorizzato';
        } 
    }

    // Stamperò il messaggio
    message.innerText = result;
});