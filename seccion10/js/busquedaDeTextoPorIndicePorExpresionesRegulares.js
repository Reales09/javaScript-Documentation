"use strict"

//*** Métodos búsqueda | parte 1

//var mensaje = "Estoy aprendiendo javaScript y estoy aprendiendo mucho";

// Index of
//var resultado = mensaje.indexOf("aprendiendo");

//lastIndexOf
//var resultado = mensaje.lastIndexOf("aprendiendo");

//search
//var resultado = mensaje.search("aprendiendo");

//search | Expresion regular

//var resultado = mensaje.search(/ja/i);

//console.log(resultado);

//** Métodos búsqueda | parte 2

var resultado;

//var mensaje = "Estoy aprendiendo javaScript y estoy aprendiendo mucho";
//march
//resultado = mensaje.match(/aprendiendo/gi);

//substr
//resultado = mensaje.substr(6,11);

//Substring

//resultado = mensaje.substring(6, 17);

//charAt
//resultado = mensaje.charAt(0);

//console.log(resultado);

//** Métodos búsqueda | parte 3

var mensaje = "Estoy aprendiendo javaScript";

var resultado;

// starsWith
//resultado = mensaje.startsWith("Es");

//var textoEn = mensaje.indexOf("javaScript")
//resultado = mensaje.startsWith("ja",textoEn);
//resultado = mensaje;

//endWith
//resultado = mensaje.endsWith("javaScript");

//includes
resultado = mensaje.includes("Estoy", 6);


console.log(resultado);
//console.log(textoEn);