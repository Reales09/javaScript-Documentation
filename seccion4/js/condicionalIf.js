"use strict"

// condion IF

var datoA = 110;
var datoB = 20;
var datoC = 5;

var resultado = "Sin datos";

if (datoA > datoB) {
    resultado = "La condición se cumplio";

    if (datoC < datoA) {
        resultado = "Evaluación anidada verdadera";
    }
    
}else if(datoA == datoB){
    resultado = "Segunda evaluación verdadera";

}
else{
    resultado = "No se cumplio ninguna evaluación";
}

console.log("El resultado de la evaluación If-else es: ",resultado);