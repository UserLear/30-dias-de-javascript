//ES7
//.......exponentiation operator (**)
console.log(2 ** 3); // Output: 8
console.log(Math.pow(2,3)); // Output: 8

//.......trailing commas
const objeto = {nombre: "Juan", edad: 30,};
const array = [1, 2, 3,];
//El poner una coma al final de un array u objetos ocasionaba errores en el pasado

//.......string.prototype.padStart() , string.prototype.padEnd()
const cadena = "Hola";
console.log(cadena.padStart(7, "**")); // Output: "****Hola"
console.log(cadena.padEnd(7, "*")); // Output: "Hola****"
