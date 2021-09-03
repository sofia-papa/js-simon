
let numeriGenerati = [];
//tramite un alert vengono mostrati cinque numeri da 1 a 100 generati casualmente
for(let i = 0; i < 5; i++){
    numeriGenerati.push(getRandomInt(1,100));
    alert(numeriGenerati);
}
console.log(numeriGenerati);

// TIMER DI 30 SECONDI
let tempoRimasto = 30;
let elem = document.getElementById("timer");
let timerId = setInterval(countdown, 1000);

function countdown() {
    if (tempoRimasto == -1) {
        clearTimeout(timerId);
        inseriscoNumeri();
    } else {
        elem.innerHTML = tempoRimasto + " SECONDI RIMASTI";
        tempoRimasto--;
    }
}

function inseriscoNumeri() { //al termine dei trenta secondi chiedo all'utente di inserire
                             // i cinque numeri che ha visto precedentemente
    for(let j = 0; j < 5; j++){
        prompt("inserisci i numeri che hai appena visto");

    }
}








//funzione per ottenere un numero randomico 
function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}