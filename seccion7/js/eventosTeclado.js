"use strict"

//Evento Teclado

//keydown
//keypress
//keyup

const boton = document.querySelector('.boton');

window.addEventListener('keydown', function(event) {
console.log('Pulsando tecla');
console.log(String.fromCharCode( event.keyCode));
})

window.addEventListener('keypress', function(event) {
    console.log('Tecla pulsada');
    })

window.addEventListener('keyup', function(event) {
console.log('El mouse esta fuera del boton');
})