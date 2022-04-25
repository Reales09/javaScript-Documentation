"use strict"

//********************************
//*** Plantillas y literales


var lenguaje = 'JavaScript';

var lenguaje2 = 'HTML';

var mensaje = `Me gusta ${lenguaje} y su integración con ${lenguaje2}`;

//console.log(mensaje);


//---- Mensaje multilinea

var mensajeMultilinea = `
    Hola mundo,
	estoy aprendiendo
	${lenguaje} y me gusta
	como se integra con HTML y CSS`;


console.log(mensajeMultilinea);

var mensaje = "Ayer fui a comprar unos tenis y después fuimos a comer";

//console.log(mensaje.substr(6,13));
console.log(mensaje.substring(6,14));