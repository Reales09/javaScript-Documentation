"use strict"

// Estructura SWITCH

//Evaluacion con números

var edad = 40;
var resultado="";

switch (edad) {
    case 10:
        resultado = "la edad es 10 años"
        break;

    case 10:
            resultado = "la edad es 20 años"
            break;
        
    case 30:
        resultado = "la edad es 30 años"
        break;
    case 40:
        resultado = "la edad es 40 años"
        break;    
                   
        
    default:
        resultado = "Ningun caso coincide"
        break;
}

console.log("El resultado de la evaluación con números es: "+resultado)

