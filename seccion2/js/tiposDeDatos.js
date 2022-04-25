"use strict"

// Númericos
var edad = 35;

var cantidad = "100";

var nuevaCantidad = parseInt(cantidad);

// Otras formas para cambiar el tipo de dato

parseInt()
parseFloat()


// String

var bebida = "agua";

var comida = 'ceviche';

var instrucion = "El platillo se llama 'ceviche'";

var edad = 34;

// convertir a texto

var edadTxt=String(edad);

// Booleanos

var activo = false;

var estado = Boolean(10 > 9);

// Fecha

var fecha = new Date();

fecha.getFullYear();
fecha.setFullYear(2023);

//Simbolos

var simbolo1 = Symbol();

// es diferente al valor simbolo1 a simbolo 2 tiene un valor unico
var simbolo2 = Symbol();

var ambiente = Symbol('dev');


//JSON -> JavaScript Object Notation

var persona = {nombre: "Reales", twitter: "El yofo09"};

var personas = [

    {nombre: "Reales", twitter: "El yofo09"},
    
    {nombre: "Adriana", twitter: "Adriis"},

    {nombre: "Perla", twitter: "perlis"},
    persona

]

var personaJson = JSON.stringify(persona);

var nuevaPersona = JSON.parse(personaJson);
