//tipo de dato null
const a1 = null;
console.log(a1);

//tipo de dato undefined
let a2;
console.log(a2);

//tipo de dato symbol
let a3 = Symbol(); //'Moises' es una descripcion opcional que puede ser util para depurar y mantener el codigo
var a4 = {
    edad: 31, 
    apellido: 'Ayala Mejia',
    [a3]: 'Emanuel' //a3 se origina de la variable inicializada arriba
};
console.log(a4[a3])
console.log(a3)

let a5 = Symbol("Este mensaje es especial"); //'Moises' es una descripcion opcional que puede ser util para depurar y mantener el codigo
var a6 = {
    edad: 31, 
    apellido: 'Ayala Mejia',
    [a5]: "hola" //a3 se origina de la variable inicializada arriba
};
console.log(a6[a5])
console.log(a5)

//tipo de dato BigInt
const numegrande = 12345678901234567890n;

console.log(numegrande + 1n);
console.log(numegrande * 2n);
console.log(numegrande / 3n);

//BigInt.asIntN
//https://runebook.dev/es/docs/javascript/global_objects/bigint/asintn


