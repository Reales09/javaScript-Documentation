"use strict"

// 2 tipos: Definidos e indefinidos


// Definidos: Ciclo FOR

// Indefinidos: Ciclo While y Ciclo DO.... WHILE

//*** Ciclo for | Ciclo definido */
// Repeticion - iteracion

/*
var productos = 5;

for (let contador = 0; contador < productos; contador++) {
    console.log("Producto # "+ contador);
    debugger;
    
}
*/

var contador = 0;
var cuenta = 0;

for (let contador = 0; contador <= 20; contador++) {
 
    if (contador ==5) {
        break;
    }

    if (contador % 2==0) {
        continue;
    }
    cuenta++;
    debugger;
}

console.log("Hay" + cuenta + "números impares");
