//arrays con numeros
let a1 = [2, 14, 25, 10];
console.log(a1.pop()); //elimina el ultimo elemento
console.log(a1);
console.log(a1.push(27)); //anade al final de la lista
console.log(a1);
console.log(a1[0]); //llamar elemento por notacion de corchete
console.log(a1.length); //para medir cuantos elementos tiene la lista
console.log(a1.unshift(30)); //imprime cuantos elementos tiene anadiendo el 30
console.log(a1);
console.log(a1.shift()); //imprime el elemento eliminado
console.log(a1);

//metodo map
let cuadrados = a1.map(function (numero) {
    return numero * numero;});
console.log(cuadrados); //multiplica cada elemento del array por si mismo y devuelve una nueva lista

const map1 = a1.map(x => x * 2);
console.log(map1); //multiplica cada elemento del array por 2


//metodo reduce
let suma = a1.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(suma);

console.log(Array.isArray(a1)); //para saber si una variable es array

const array = [
    { id: 1, username: "Mapper"},
    { id: 2, username: "Finder"},
    { id: 3, username: "Eaching"}
  ];
  
  const filtered = array.filter(function(element){
    return element.id > 2;
  }); //crea un nuevo arreglo y devuelve los que cumplan con la condicion

  console.log(filtered);