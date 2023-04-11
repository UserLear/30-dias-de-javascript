//Métodos de arrays: Includes, Join y concat
//.......metodo includes
const numbers = [1, 2, 3, 4, 5];

const result = numbers.includes(3);

console.log(result); // true

/**Como se puede ver en el ejemplo anterior, el método 
 * Array.prototype.includes se utiliza para determinar si el 
 * elemento 3 está presente en el array numbers. La función 
 * devuelve un valor booleano de true, lo que indica que el 
 * elemento se encuentra en el array */

//.......metodo join()
const fruits = ["apple", "banana", "cherry"];
const fruitsString = fruits.join(", ");
console.log(fruitsString); // "apple, banana, cherry"

/**En este ejemplo, el separador que se utiliza es una coma y 
 * un espacio (, ), pero podemos usar cualquier otra cadena de
 * texto como separador. Si no se proporciona un separador, se 
 * usará una coma (,) por defecto */

const fruits = ["apple", "banana", "cherry"];
const fruitsString = fruits.join();
console.log(fruitsString); // "apple,banana,cherry"

//.......metodo concat()
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const string = "hello";
const number = 123;

const result = array1.concat(array2,  string, number);

console.log(result); // [1, 2, 3, 4, 5, 6, "hello", 123]
