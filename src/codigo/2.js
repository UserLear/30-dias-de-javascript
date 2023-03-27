//3 tipos de variables
let uno = 2; //puede cambiar el valor, pero no puede declarar otra con el mismo nombre
var dos = 3; //puede cambiar y puede declarar otra con el mismo nombre
const tres = 4; //no puede cambiar, no puede crear otra con mismo nombre

//declaracion (asignarle nombre pero sin asignarle valor)
let cuatro;
var dos;
const cinco = 5; //al declararla debe asignarle el valor

//inicializacion (asignarle valor)
cuatro = 6;
dos = 7;

//function-declaration
function seis(p1, p2) {
    let multiplicacion = p1 * p2;
    return multiplicacion;
};
console.log(seis(4,3)); //con parametros

function siete() {
    return console.log("imprimiste algo sin parametros");
}
siete() //prueba-sin parametros

//IIFE (immediately invoked function expression)
(function() {
    console.log("Yo soy un programador")
})(); //esta tira error porque se debe ejecutar de forma individual

//function-exprection
let saluda = function () {
    console.log("hola")
}
saluda();

//arrow function (sintaxis diferente)
let saluda1 = () => {console.log("Moises")};
saluda1();








