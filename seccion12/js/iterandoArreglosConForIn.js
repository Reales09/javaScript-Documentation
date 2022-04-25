"use strict"

/** Iterando arreglos con for...in */

//var platillos = ["Ceviche","Tacos","Pasta"];

/*
for (let platillo in platillos){
    console.log(platillos[platillo]);

}
*/

/** Iterando arreglos con foreach */
/*
var platillos = ["Ceviche","Tacos","Pasta"];

//platillos.forEach(platillo => console.log(platillo))

platillos.forEach((platillo, index) => console.log(index,platillo))
*/

/**Buscando en un arreglo */

var platillos = ["Ceviche","Tacos","Pasta"];

//var pElegido = platillos.find(platillo => platillo == "Pasta");


var menu = [
	{nombre: 'Ceviche', precio: 20, pais: 'Perú'},
	{nombre: 'Tacos', precio: 10 , pais: 'México'},
	{nombre: 'Pasta', precio: 50, pais: 'Italia'}
];

var pElegido = menu.find(platillo => platillo.nombre == "Tacos");


console.log(pElegido);
