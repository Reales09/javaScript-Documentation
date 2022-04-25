"use strinct"

// operadores de concatenación

var datoA = 10;
var datoB = 20;

var nombre = "Reales";
var apellido = "Myles";

//concatenación de números
var concatNumero = datoA + datoB;
console.log("Los nombres "+ datoA +" y "+ datoB +" usados como números concatenados hacen una suma igual a: "+concatNumero);

// Concatenación de cadenas de texto
var concatTexto=nombre + " " + apellido;
console.log("Los texto "+ nombre +" y "+ apellido + " se unen para formar: ", concatTexto);

// Concatenación de numeros como texto
var concatNumComoTxt = "2"+"8";
console.log("Los números 2 y 8 usados como texto se unen para formar: ",concatNumComoTxt);

//Concatenación de texto y número
var concatTxtNum = datoA + "B";
console.log("El número "+ datoA +" usado como número y 8 como texto se unen para forman: ", concatTxtNum);



