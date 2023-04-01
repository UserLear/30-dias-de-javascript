//ES6

//.......Sintaxis de clases
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  const persona = new Persona("Juan", 30);
  persona.saludar(); // Output: "Hola, mi nombre es Juan y tengo 30 años."

  //.......Template literals
const nombre = "Juan";
const edad = 30;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`); // Output: "Hola, mi nombre es Juan y tengo 30 años."

//.......Arrow functions
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map(n => n * 2);
console.log(dobles); // Output: [2, 4, 6, 8, 10]

//.......spread operator
const numeross = [1, 2, 3];
const nuevosNumeros = [...numeross, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]

//.......destructuring
const persona1 = {nombre1: "Juan", edad1: 30};
const {nombre1, edad1} = persona1;
console.log(nombre1); // Output: "Juan"
console.log(edad1); // Output: 30

//.......manejo de modulos
import { miFuncion } from './miArchivo.js';
export const otraFuncion = () => {}

//.......nuevos metodos de arrays
const numeros2 = [1, 2, 3, 4, 5];
const encontrado = numeros2.find(n => n === 3);
console.log(encontrado); // Output: 3

//......manejo de promesas
const miPromesa = new Promise((resolve, reject) => {
  // código
});
miPromesa.finally(() => console.log('Promesa finalizada'));

//.......try catch
try {
  // código que puede generar excepciones
} catch (error) {
  console.log(error);
}
