"use strict"

//Estructura básica de una función

function saludar(nombre, edad) {
    //var saludo = "Hola Mundo";
    //console.log(saludo)
    //return saludo 

    console.log("Hola: ", nombre);
    console.log("Edad: ", edad);

    var resultado = nombre + " tiene "+ edad +" años";
    return resultado;
    
}

var mensaje = saludar("Reales",31)

console.log(mensaje);