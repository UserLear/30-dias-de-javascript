//funciones mutables
//.......push()
const numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);
// Output: [1, 2, 3, 4, 5]

//.......funcion inmutable: concat()
const numbers = [1, 2, 3, 4];
const newNumbers = numbers.concat([5]);
console.log(numbers);
// Output: [1, 2, 3, 4]
console.log(newNumbers);
// Output: [1, 2, 3, 4, 5]

//.......mutar objetos
const person = {
	name: 'John Doe',
	age: 30
};
function addProperty(object, key, value) {
	object[key] = value;
}
addProperty(person, 'address', '123 Main St');
console.log(person);
// Output: { name: 'John Doe', age: 30, address: '123 Main St' }
//En este ejemplo, la función addProperty modifica directamente el objeto person al agregar una propiedad “address” a él

//.......bucles + mutable functions
const numbers = [1, 2, 3, 4];

const people = [
	{ name: 'John Doe', age: 30 },
	{ name: 'Jane Doe', age: 25 },
	{ name: 'Jim Doe', age: 35 }
];

function addFive(array) {
	for (let i = 0; i < array.length; i++) {
		array[i] += 5;
	}
}

function addYear(array) {
	for (let i = 0; i < array.length; i++) {
		array[i].age++;
	}
}

addFive(numbers);
addYear(people);
console.log(numbers);
// Output: [6, 7, 8, 9]
console.log(people);
// Output: [{ name: 'John Doe', age: 31 }, { name: 'Jane Doe', age: 26 }, { name: 'Jim Doe', age: 36 }]