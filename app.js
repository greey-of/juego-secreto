
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento); //antes: let titulo = document.querySelector('h1'); 

    elementoHTML.innerHTML = texto; //antes: titulo.innerHTML = 'juego del numero secreto';
    return;
}

function verificarIntento(){

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    

    if(numeroDeUsuario === numeroSecreto){
        
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{

            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
}

function limpiarCaja(){
 /*let valorCaja=document.querySelector('#valorUsuario');
    valorCaja.value = '';*/

//simplificado
document.querySelector('#valorUsuario').value='';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
//si ya sorteamos todos los numeros

if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');

}else{
    
    //si el num generado esta en la lista 
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;

    }

}

    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
//limpiar caja
limpiarCaja();
//indicar mensaje de intervalo de numeros
//generar el numero aleatorio
//inicializar el numero de inentos
condicionesIniciales();
//deshailitar elboton de "nuevo juego"
document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();



