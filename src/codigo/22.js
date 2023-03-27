//uso estricto
"use strict";
let uno = 4;
//let uno = 5;

function miFuncion() {
"use strict";
    let numero = 5;
    numero = "10";
}

console.log(miFuncion());

function strict() {
    // Sintaxis del modo estricto a nivel de función
    'use strict';
    function nested() { return "¡Y yo también!"; }
    return "¡Hola!  ¡Soy una función en modo estricto!  " + nested();
  }
  function notStrict() { return "Yo no soy estricto."; }