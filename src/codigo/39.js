//arrays
//.......clase constructora
let myArray = new Array();

//se puede especificar los elementos
let myArray = new Array(1, 2, 3, 4);

//.......array.from()
let myArray = Array.from('hello');
console.log(myArray); // ["h", "e", "l", "l", "o"]

//.......array(n).fill()
let myArray = new Array(5).fill(0);
console.log(myArray); // [0, 0, 0, 0, 0]

//.......Array.isArray()
let myArray = [1, 2, 3, 4];
console.log(Array.isArray(myArray)); // true

//.......crear una nueva instancia usando el constructor
const originalArray = [1, 2, 3, 4];
const copiedArray = new Array(...originalArray);

console.log(originalArray === copiedArray); // Output: false
//En este ejemplo, se utiliza el operador spread para expandir los elementos del array original en una nueva instancia del constructor Array.

//.......metodo incorporado: slice()
const originalArray = [1, 2, 3, 4];
const copiedArray = originalArray.slice();

console.log(originalArray === copiedArray); // Output: false

//.......metodo incorporado: concat
const originalArray = [1, 2, 3, 4];
const copiedArray = originalArray.concat();

console.log(originalArray === copiedArray); // Output: false

//.......operador spread
const originalArray = [1, 2, 3, 4];
const copiedArray = [...originalArray];

console.log(originalArray === copiedArray); // Output: false
/**En este ejemplo, se utiliza el spread 
 * operator para expandir los elementos del
 *  array original en una nueva instancia
 *  de un array. */

//.......bidimensional
const matrix = [];
matrix[0] = [1, 2, 3];
matrix[1] = [4, 5, 6];
matrix[2] = [7, 8, 9];
//se puede crear vacio y luego agregar a sus elementos

console.log(matrix);
// Output: [
//   [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9]
// ]

//.......bidimensional: clase constructora
const matrix = new Array(3);
for (let i = 0; i < matrix.length; i++) {
  matrix[i] = new Array(3);
}

matrix[0][0] = 1;
matrix[0][1] = 2;
matrix[0][2] = 3;
matrix[1][0] = 4;
matrix[1][1] = 5;
matrix[1][2] = 6;
matrix[2][0] = 7;
matrix[2][1] = 8;
matrix[2][2] = 9;
//se puede crear el arrar bidimensional utilizando la clase constructora

console.log(matrix);
// Output: [
//   [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9]
// ]
//indices para acceder a los elementos del array bidimensional
console.log(matrix[1][1]);
// Output: 5

//.......spread operator
const originalMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const copiedMatrix = [...originalMatrix];

console.log(originalMatrix === copiedMatrix);
// Output: false
/**el spread operator se utiliza para crear
 *  una copia profunda del array original, 
 * lo que significa que los elementos dentro
 *  del array también se copian */

//.......arrays tridimensional
const cube = [];
for (let i = 0; i < 3; i++) {
  cube[i] = [];
	for (let j = 0; j < 3; j++) {
		cube[i][j] = [];
		for (let k = 0; k < 3; k++) {
			cube[i][j][k] = i + j + k;
		}
	}
}
console.log(cube);
// Output: 
//[
//  [[0, 1, 2], [1, 2, 3], [2, 3, 4]], 
//  [[1, 2, 3], [2, 3, 4], [3, 4, 5]], 
//  [[2, 3, 4], [3, 4, 5], [4, 5, 6]]
//]

