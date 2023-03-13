//operadores aritmeticos (devuelve un valor)
var a1 = 10;
let a2 = 4;
console.log(a1 + a2);
console.log(a1 - a2);
console.log(a1 * a2);
console.log(a1 / a2);
console.log(a1 % a2);
console.log(a1 ** a2)

//operadores de asignacion (devuelve un valor)
var a3 = 8;
console.log(a3 += 2);
console.log(a3 -= 4);
console.log(a3 *= 5);
console.log(a3 /= 2);
console.log(a3 **= 3);
console.log(a3 %= 4);

//operadores de comparacion (devuelve un boolean)
var a4 = 10;
var a5 = 11;
var a6 = "10";
console.log(a4 == a6); //comparacion no estricta (verifica el valor)
console.log(a4 === a6); //comparacion estricta (verifica el valor y el tipo)
console.log(a4 < a5); 
console.log(a4 > a5);
console.log(a4 <= a5);
console.log(a4 >= a5);
console.log(a4 !== a5);

//operadores logicos (evaluan booleans)
var a7 = 10;
var a8 = 11;
var a9 = 12;
var a10 = 13;
console.log(a7 <= a8 && a8++ <= a10) //devuelve true si ambos son true
console.log(a7 >= a8 || a9 <= a10) //devuelve true si almenos uno es true
console.log(!(a7 <= a8)) //devuelve el valor inverso al resultado obtenido





