//tipo de dato null
const a1 = null;
console.log(a1);

//tipo de dato undefined
let a2;
console.log(a2);

//tipo de dato symbol
let a3 = Symbol("Moises"); //'Moises' es una descripcion opcional que puede ser util para depurar y mantener el codigo
var a4 = {
    edad: 31, 
    apellido: 'Ayala Mejia',
    [a3]: 'Emanuel'
};
console.log(a4[a3])
console.log(a3)

//tipo de dato BigInt
const numegrande = 12345678901234567890n;

console.log(numegrande + 1n);
console.log(numegrande * 2n);
console.log(numegrande / 3n);


