"use strict"

/** Trabajando con Clases */

class Producto{

    constructor(numSerie){
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;        
    }

    static get infoTienda(){
        console.log('Producto de la tienda patito Inc');
    }

    set garantia(value){
        this.tiempoGarantia -= value
    }
    get garantia(){
        return this.tiempoGarantia;
    }

}

class Pantalla extends Producto{

    constructor(numSerie,marca,modelo,pulgadas){
        super(numSerie)
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    encendido(){
        this.garantia = 1;
        console.log(`La pantalla ${this.marca} se ha encendido`);
    }

    volumen() {
        console.log('El volumen se ha modificado');
    }

    info(){
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas}`);
    }

    setPeso(value){
        this.kgs = value.trim();
        
    }

    getPeso(){
        return this.kgs;
    }

}

const tvSala = new Pantalla('13579','Master','Oasis',55);
const tvHabitacion = new Pantalla ('24880',"Origin","Artemis",83);

/*
function Pantalla(marca, modelo, pulgadas){
    this.marca = marca;
    this.modelo = modelo;
    this.pulgadas = pulgadas;

}
*/

/*
Pantalla.prototype.encendido = function(){
    console.log(`La pantalla ${this.marca} se ha encendido`);
};

Pantalla.prototype.volumen = function(){

    console.log('El volumen se ha modificado');
    
};

Pantalla.prototype.info = function () {
    console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas}`);
}


*/