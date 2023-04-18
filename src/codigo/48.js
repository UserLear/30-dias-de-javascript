//function sort()
//.......mutar arreglo
const numbers = [1, 5, 2, 4, 3];
numbers.sort();
console.log(numbers);
// Output: [1, 2, 3, 4, 5]

//.......modificar el orden
const numbers = [1, 5, 2, 4, 3];
numbers.sort((a, b) => b - a);
console.log(numbers);
// Output: [5, 4, 3, 2, 1]
/**Si el número devuelto es menor que 0, 
 * el primer elemento debe ir antes que el
 * segundo elemento; si el número devuelto 
 * es mayor que 0, el segundo elemento debe 
 * ir antes que el primero; y si el número 
 * devuelto es 0, los elementos son iguales 
 * y no se cambia su orden. */

//.......detalle modificar el orden
const numbers = [1, 5, 2, 4, 3];
numbers.sort((a, b) => {
    console.log(`${b} - ${a}: ${ b - a}`)
    return b - a
});
// 5 - 1: 4 por lo tanto va primero el 5 [5, 1, 2, 4, 3]
// 2 - 1: 1 Por lo tanto va después el 2 [5, 2, 1, 4, 3]
// 2 - 5: -3 Por lo tanto va después el orden sigue igual [5, 2, 1, 4, 3]
// 4 - 1: 3 Por lo tanto se cambia de lugar el 4 [5,2,4,1,3]
// 4 - 2: 2 Por lo tanto se vuelve a cambiar de lugar el 4 [5,4,2,1,3]
// 4 - 5: -1 Por lo tanto el 5 y 4 se mantienen iguales [5,4,2,1,3]
// 3 - 1: 2 por lo tanto se recorre un lugar el 3 [5,4,2,3,1]
// 3 - 2: 1 Por lo tanto sigue recorriendose el 3 [5,4,3,2,1]
// 3 - 4: -1 Y se hace la última comprobación [5,4,3,2,1]
console.log(numbers);

//.......ordenar objetos
const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Jim", age: 32 }
    ];
    people.sort((a, b) => a.age - b.age);
    console.log(people);
    // Output: [{ name: "Jane", age: 28 }, { name: "John", age: 30 }, { name: "Jim", age: 32 }]

/**En este ejemplo, la función de 
 * comparación (a, b) => a.age - b.age se 
 * utiliza para ordenar los objetos en el 
 * arreglo people por su edad. */