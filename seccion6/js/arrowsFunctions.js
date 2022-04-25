"use strict"

//Funcion Arrow | fat Arrow | Lambds

var saludar = nombre => "Hola "+ nombre;


console.log(saludar("Reales"));

var sumar = cantidad => cantidad+10

console.log(sumar(10));

// Con más parametros

var calcular = (datoA, datoB) => datoA + datoB
console.log(calcular(10,15));

//Con más operaciones

var generar = (datoA, datoB) =>{
    var datoC = 5;
    return datoA + datoB + datoC;
}

console.log(generar(10,15));

// Sin parametro

var validar = () =>{
    return 'validación correcta';

}
console.log(validar());