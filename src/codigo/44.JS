//Métodos de arrays: Flat y FlatMap
//.......flat()
const multiDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatArray = multiDimensionalArray.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
/**En este ejemplo, el arreglo multidimensional multiDimensionalArray 
 * se aplanó utilizando el método Array.prototype.flat() y se guardó en 
 * la variable flatArray. Luego, se imprime en la consola el valor de 
 * flatArray y se puede ver que se trata de un arreglo plano con los 
 * elementos del arreglo multidimensional combinados en una sola 
 * secuencia */

const multiDimensionalArray = [[1, 2, 3], [4, [5, 6]], [7, 8, 9]];
const flatArray = multiDimensionalArray.flat(1);
console.log(flatArray); // [1, 2, 3, 4, [5, 6], 7, 8, 9]
//con profundidad especifica

/**En este ejemplo, el arreglo multidimensional multiDimensionalArray 
 * se aplanó hasta una profundidad de anidamiento de 1 utilizando el 
 * método Array.prototype.flat(1). Esto significa que solo se aplanaron 
 * los arreglos de nivel más externo, por lo que el arreglo dentro del 
 * arreglo [5, 6] se mantuvo intacto. */

//.......flatMap()
const numbers = [1, 2, 3, 4];

const result = numbers.flatMap(x => [x, x * 2]);

console.log(result);
// Output: [1, 2, 2, 4, 3, 6, 4, 8]

/**En este ejemplo, la función x => [x, x * 2] se aplica a cada elemento 
 * del arreglo numbers. Cada elemento del arreglo numbers es 
 * multiplicado por 2 y los dos valores se almacenan en un nuevo 
 * arreglo. Luego, el método flatMap aplana todos los arreglos 
 * resultantes en un único arreglo. */

const values = [1, 2, 3, null, 4, undefined, 5];

const result = values.flatMap(x => x);

console.log(result);
// Output: [1, 2, 3, 4, 5]
/**Además de transformar y aplanar arreglos, flatMap también puede ser 
 * útil para eliminar elementos null o undefined de un arreglo. */

const bidimensionalArray = [[1, 2, 3], [4, 5, 6]];
const result = bidimensionalArray.flatMap(x => x);
console.log(result);
// Output: [1, 2, 3, 4, 5, 6]
/**El método flatMap aplana cada subarreglo dentro del arreglo 
 * bidimensionalArray en un único arreglo resultante. De esta manera, 
 * podemos trabajar con arreglos bidimensionales de manera más fácil y 
 * eficiente */