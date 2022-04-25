"use strict"

/** Busqueda de eindice de elementos */

/*
var platillos = ["ceviche", "tacos","pasta"];

var menu =[{
    nombre: "ceviche",
    precio: 20,
    pais: "peru"
},
{
    nombre: "Tacos",
    precio: 10,
    pais: "Mexico"
},
{
    nombre: "Pasta",
    precio: 50,
    pais: "Italia"
}

]

//var numPlatillo = platillos.findIndex( platillo => platillo == 'tacos');

var numPlatillo = menu.findIndex( platillo => platillo.nombre == 'Tacos');


console.log("Platillo número: ", numPlatillo);

*/

/** Filtrar arreglo */

/*
var menu =[{
    nombre: "ceviche",
    precio: 20,
    pais: "peru"
},
{
    nombre: "Tacos",
    precio: 10,
    pais: "Mexico"
},
{
    nombre: "Pasta",
    precio: 50,
    pais: "Mexico"
}

]

var resultado = null;

//resultado = menu.find(platillo =>platillo.pais == 'Mexico');

resultado = menu.filter(platillo =>platillo.pais == 'Mexico');


console.log(resultado);
*/

/** Validación de elementos de un arreglo */

var resultado = null;

var menu =[{
    nombre: "ceviche",
    precio: 20,
    pais: "peru"
},
{
    nombre: "Tacos",
    precio: 10,
    pais: "Mexico"
},
{
    nombre: "Pasta",
    precio: 50,
    pais: "Italia"
},
{
    nombre: "Quesadillas",
    precio: 15,
    pais: "Mexico"
}

]
//resultado = menu.some(platillo => platillo.precio <= 10 );

//console.log("¿Hay platillos abajo de 20?", resultado);

resultado = menu.every(platillo => platillo.precio <= 60 );

console.log("¿todos los platillos cuestan menos de 60?", resultado);
