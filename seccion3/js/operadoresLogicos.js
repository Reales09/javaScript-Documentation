"use strict"

// operadores lógicos

var datoA = 10;
var datoB = 20;

// Operador y o AND - &&

var and = (datoA > 10 && datoB > 10);
console.log('El resultado de la evaluación AND es: '+ and);

// operador O u OR - ||
var or = (datoA > 10 || datoB > 10);
console.log('El resultado de la evaluación OR es: '+ or);

//operador de negación o not - !

var not = !(datoA > 10);
console.log('El resultado de la evaluación Not es: '+ not);
