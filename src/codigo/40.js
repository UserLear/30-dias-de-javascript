//metodos de array: every(), find y findIndex

//.......every()
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(function(element) {
	return element > 0;
});

console.log(allPositive);

// Output: true

/**En este ejemplo, el método every se 
 *utiliza para comprobar si todos los 
 elementos en el array numbers son mayores 
 que cero. La función que se pasa como 
 argumento a every devuelve true si el 
 elemento es mayor que cero y false en 
 caso contrario. Si todos los elementos 
 devuelven true, every devuelve true. De 
 lo contrario, devuelve false. */

 //.......arrow para simular a every()
 const numbers = [1, 2, 3, 4, 5];
 const allPositive = numbers.every(element => element > 0);
 onsole.log(allPositive);
 // Output: true

 //.......every para comprobar una propiedad de un array de objetos
 const objects = [{name: 'John'}, {name: 'Jane'}, {name: 'Jim'}];
const allHaveName = objects.every(function(element) {
  return element.hasOwnProperty('name');
});

console.log(allHaveName);
// Output: true

//.......metodo find()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers.find(number => number > 5);

console.log(result);
// Output: 6
/**En este ejemplo, el callback number => 
 * number > 5 se utiliza para determinar si 
 * un número es mayor que 5. Si se encuentra 
 * un número que cumpla con esta condición, 
 * el método find devuelve ese número y 
 * detiene la búsqueda */

//.......metodo find() con objetos
const people = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 28 },
    { name: 'Jim', age: 40 }
  ];
  const result = people.find(person => person.age === 32);
  
  console.log(result);
  // Output: { name: 'John', age: 32 }
  /**En este ejemplo, el callback person =>
   * person.age === 32 se utiliza para 
   * determinar si una persona tiene una 
   * edad de 32 años. Si se encuentra un 
   * objeto que cumpla con esta condición, 
   * el método find devuelve ese objeto y 
   * detiene la búsqueda. */

//.......findIndex()
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = numbers.findIndex(num => num > 5);
console.log(index); // Output: 5
/**En este ejemplo, la función de callback 
 * recibe cada elemento del array numbers y 
 * devuelve true si el elemento es mayor que 
 * 5. El método findIndex devuelve el índice 
 * del primer elemento que cumple con esta 
 * condición, que es 5 */

//.......findIndex() no encuentra elemento
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = numbers.findIndex(num => num > 100);
console.log(index); // Output: -1
