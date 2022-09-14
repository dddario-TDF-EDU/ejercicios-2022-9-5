//ejercicio 1

function ejercicio1() {
    let readlineSync = require('readline-sync');
    let mensaje = readlineSync.question("Indique el mensaje: ");
    console.log("Su mensaje es: ");
    console.log(mensaje);
}

//ejercicio 2

function ejercicio2() {
    let readlineSync = require('readline-sync');
    let cantMensaje = readlineSync.questionInt("Indique la cant de mensajes: ");
    console.log("Su cantidad de mensajes es: ");
    console.log(cantMensaje);
    let arrayMsj = new Array (cantMensaje);
    cargaMensaje(arrayMsj);
    muestraMensaje(arrayMsj);
    
}

function cargaMensaje(arrayAux) {
    let readlineSync = require('readline-sync');
    for(let i=0;i<arrayAux.length;i++){
        arrayAux[i]=readlineSync.question("Indique el msj: ");
    }
}

function muestraMensaje(arrayAux) {
    for(let i=0;i<arrayAux.length;i++){
        console.log(arrayAux[i]);
    }
}

ejercicio3();

function ejercicio3() {
    let readlineSync = require('readline-sync');
    let B = readlineSync.questionInt("ingrese la Base: ");
    let H = readlineSync.questionInt("Ingrese la Altura: ");
    console.log("El resultado de base por altura es: "+B*H);
}


