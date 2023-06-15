//Esto selecciona un número aleatorio
let numero = Math.floor(Math.random()*100)+1

let numeroEntrada = document.getElementById('numeroEntrada');
let intento = document.getElementById('intento');
let intentos = 0
let msj = document.getElementById('msj');

//Esta función se ejecuta cuando se oprime el botón COMPROBAR
function resultado(){
    intentos ++
    intento.textContent = intentos
    let numeroIngreso = parseInt(numeroEntrada.value);
    if(numeroIngreso <1 || numeroIngreso >100 || isNaN(numeroIngreso)){

        msj.textContent = 'Introduce un número válido entre 1 y 100!';
        msj.style.color = 'black'
        return;
    }
    
    if (numeroIngreso === numero){
        msj.textContent = '¡Felicidades! ¡Lograste adivinar el número!';
        msj.style.color = 'blue';
        numeroEntrada.disabled = true;
    } else if(numeroIngreso < numero){
        msj.textContent = '¡Más arriba! ¡El número es mayor!';
        msj.style.color = 'red';
    }else{
        msj.textContent = '¡Más abajo! ¡El número es menor!';
        msj.style.color = 'red';
    }
}