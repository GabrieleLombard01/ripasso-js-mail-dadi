/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare (in console)
*/

// Randomizzo i numeri
const playerNumber = Math.floor(Math.random() * 6 ) + 1;
const cpuNumber = Math.floor(Math.random() * 6 ) + 1;

// Variabile result
let result = 'Pareggio';

// Controllo chi ha vinto
if(playerNumber > cpuNumber) {
    result = 'Ha vinto il giocatore';
} else if(playerNumber < cpuNumber) {
    result = 'Ha vinto la CPU';
}

console.log(result)