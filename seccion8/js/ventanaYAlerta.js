"use strict"

// ventana de alerta

const video = document.querySelector('.bostonVideo');

video.addEventListener("ended", function () {
    //alert("MENSAJE \n El video ha terminado")

    /*
    let resultado = confirm("¿Desea ver el video nuevamente?")

    console.log(resultado);

    if (resultado) {

        video.play();
        
    }else{
        window.location = "http://www.google.com"
    }
    */

    let email = prompt("Escribe tu correo para ver más videos", "data@info.com");
    
    if (email == null || email =="") {
        console.log("sin datos");
    } else {
        console.log(email);
    }


});