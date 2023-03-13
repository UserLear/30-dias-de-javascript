//tipo de dato number
var numer = 20;
console.log(numer);
console.log(1e-6);

//tipo de tado string
let string = 'hola';
console.log(string)

//concanetacion
const unica = 'hola';
console.log(unica + 'Moises');
console.log(`disculpa que no te salude, ${unica}!`);

//metodos / strings
const nombre = 'MoIsEs';
console.log(nombre.length); //mide el string
console.log(nombre.toUpperCase()) //transforma en mayuscula
console.log(nombre.toLowerCase()); //transforma en minuscula
console.log(nombre.substring(3)); //devuele cierta cantidad de strings 

//objeto
let objet = {
    nombre: 'Moises',
    edad: 25, 
    aspiracion: {
        profecion1: 'programador',
        profecion2: 'financista',
        profecion3: "ingeniero civil"
    }
}

console.log(objet.nombre) //notacion de punto
console.log(objet['aspiracion']['profecion1']) //notacion de corchete

//tipo de dato boolean
var bool = true;
let bool2 = false; 
console.log(bool, bool2)

//identificar tipo de dato
console.log(typeof numer)
console.log(typeof string)
console.log(typeof objet)
console.log(typeof bool)








