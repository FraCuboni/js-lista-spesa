// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//  Il programma stampa la somma di tutti i numeri inseriti. 
//  Esegui questo programma in due versioni, con il for e con il while


// let somma = 0;
// // *5
// for(i = 0; i < 5; i++){
//     // chiedo numero all'utente
//     let numero = parseInt(prompt('inserisci un numero'));
//     // sommo la somma + il nuovo numero
//     somma = somma + numero;
//     console.log(numero + '+');
// }
// // loggo il risultato
// console.log('=' + somma)

// let somma=0;
// let i = 0;
// // chiedo
// while(i<5){
//     // chiedo numero
//     let numero = parseInt(prompt('inserisci un numero'));
//     // faccio la somma
//     somma = somma + numero;
//     // sommo 1 ad i
//     i++;
//     console.log('+'+ numero );
// }
// console.log('=' + somma)

// ================================================================================================================
// ================================================================================================================
// ================================================================================================================
// ================================================================================================================
// ================================================================================================================

// Data una lista della spesa;
// Stampare tutti gli elementi della lista della spesa, all'interno di una lista in HTML
// Va fatto SOLO CON IL FOR!!!!!!

// do la lista della spesa (4 elementi)
const spesa = [
    'feta',
    'pasta',
    'pomodorini',
    'olive',
    'olio',
    'sale'
]
// creo la costante container all'interno del quale aggiungerò poi gli elmenti stampati
const container = document.querySelector('.container');

// stampo tutti gli elmenti all'interno di una lista in html con for

// creo un ciclo for con i da 0 a 3
for(i = 0; i<spesa.length; i++){

    // aggiungo la possibilità di selezione del singolo ingrediente
    let elemento = spesa[i];
    console.log(elemento);

    // creo i box all'interno di container dove verranno inseriti gli elementi
    let box =
        `
            <li>
                ${elemento}
            </li>
        `;

    // aggiungo box all'interno di container
    container.innerHTML= container.innerHTML + box;
}