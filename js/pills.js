
// // do la lista della spesa (4 elementi)

// // creo la costante container all'interno del quale aggiungerò poi gli elmenti stampati
//

// // stampo tutti gli elmenti all'interno di una lista in html con for

// // creo un ciclo for con i da 0 a 3
// for(i = 0; i<spesa.length; i++){

//     // aggiungo la possibilità di selezione del singolo ingrediente
//     let elemento = spesa[i];
//     console.log(elemento);

//     // creo i box all'interno di container dove verranno inseriti gli elementi



// }

const spesa = [
    'feta',
    'pasta',
    'pomodorini',
    'olive',
    'olio',
    'sale'
]
const container = document.querySelector('.container');
let i=0;
// converto tutto in ciclo while
while(i < spesa.length){
let elemento = spesa[i];
console.log(elemento);

let box =
`
    <li>
        ${elemento}
    </li>
`;

container.innerHTML= container.innerHTML + box;

i++;
}


