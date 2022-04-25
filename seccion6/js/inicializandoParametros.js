"use strict"

//Inicializanción de parametros

function contar(cantidad=20) {
    console.log('Total: ',cantidad);
}

contar(30);

//Parametros REST

function cocinar(/*ingrediente1,ingrediente2,*/...masIngredientes) {
    //console.log('ingrediente1: ',ingrediente1);
   // console.log('ingrediente2: ', ingrediente2);
    console.log('masIngredientes',masIngredientes);
}

cocinar("pollo","Tomate","arroz","Frijoles","Pescado","Chile");

//Parmetros Spread

function cocinar1(ingrediente1,ingrediente2,ingrediente3, ...otros) {
    console.log('ingrediente1: ', ingrediente1);
    console.log('ingrediente2: ', ingrediente2);
    console.log('ingrediente3: ', ingrediente3);
    console.log('Otros: ', otros);
}

var ingredientesBase=["Pollo","Tomate"];

cocinar1(...ingredientesBase,"Arroz","Pescado", "Chile");