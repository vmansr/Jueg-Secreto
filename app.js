let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto);
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    } else {
        // Si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {      // recorrer todo el arreglo y verificar si algo ya existe
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}
function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalos de números
    // Generar el número aleatorio    
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabiliar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}    

condicionesIniciales();


/*function mostrarHola() {
    console.log("Hola Mundo!");
};

mostrarHola();*/


/*
function mostrarHolaNombre(nombre) {
    console.log(`Hola, ${nombre}!`);
}

mostrarHolaNombre("Victor");*/


/*function mostrarDobleNumero(numero)  {
    return numero * 2;
}
let resultaDoble= mostrarDobleNumero(5);
console.log(resultaDoble);*/


/*function mostrarNumeros(numero1, numero2, numero3)  {
    return (numero1 + numero2 + numero3) / 3;
}
let promedio= mostrarNumeros(5, 8, 10);
console.log(promedio);*/


/*function mostrarNumeros(a, b)  {
    return a > b ? a : b;
}
let numeroMayor= mostrarNumeros(5, 10);
console.log(numeroMayor);*/


/*function cuadrado(numero) {
    return numero * numero;
}

let resultado = cuadrado(5);
console.log(resultado);*/


/*function calcularDoble(numero) {
    return numero * 2;
}
function calcularTriple(numero) {
    return numero * 3;
}
    
const numero = 5;
const doble = calcularDoble(numero);
const triple = calcularTriple(numero);
      
console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);*/

/*const nombre = "Juan";
const edad = 30;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(mensaje);*/

// Salida: Hola, soy Juan y tengo 30 años.


//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

/*function calcularIMC(altura, peso) {
    var imc = peso / (altura * altura);
        return imc;
     
}*/

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

/*function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }

}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);*/

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales. Para esto, considera la cotización del dólar igual a R$4,80.

/*function convertirDolaresAReales(dolares) {
    var cotizacionDolar = 4.80;
    var reales = dolares * cotizacionDolar;
    return reales;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares es R$ ${valorEnReales}`);*/

//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

/*function calcularAreaYPerimetroRectangular(altura,anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura * anchura);
    console.log("Area: " + area);
    console.log("Perimetro: " + perimetro);
}

let altura = 3;
let anchura = 5;

calcularAreaYPerimetroRectangular(altura,anchura);*/

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

/*function calcularAreayPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Area: "+ area);
    console.log("Perimetro: " + perimetro);
    
}
// Ejemplo de uso
let radio = 4;
calcularAreayPerimetroCircular(radio);*/

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

/*function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        console.log(numero + "x" + i + " = " + resultado);
    }
}
//Ejemplo de uso
let numero = 7
mostrarTablaDeMultiplicar(numero);*/


// LISTAS
/*let numerosSorteados = [];
console.log(numerosSorteados);

numerosSorteados.push(5);
numerosSorteados.push(8);
numerosSorteados.push(3);
numerosSorteados.push(9);

console.log(numerosSorteados);
//console.log(numerosSorteados.length);
//console.log(numerosSorteados[0]);
//console.log(numerosSorteados[numerosSorteados.length-1]);*/


/*let listaCompras = [];

listaCompras.push("Manzana");
listaCompras.push("Arroz");
listaCompras.push("Leche");
listaCompras.push("Pan");
listaCompras.push("Carne");

//console.log(listaCompras.length);
console.log(listaCompras[3]);*/

//Puedes crear un array en JavaScript declarando una variable y asignándole valores entre corchetes [].

/*let frutas = ["Manzana", "Uva", "Naranja"];
console.log(frutas[0]); // Salida: "Manzana"
console.log(frutas[2]); // Salida: "Naranja"
frutas.push("Fresa");
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]

//Para eliminar el último elemento, puedes usar el método pop.
frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]
*/

