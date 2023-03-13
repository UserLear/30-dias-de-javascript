//arrays con numeros
let a1 = [2, 14, 25, 10];
console.log(a1.pop());
console.log(a1);
console.log(a1.push(27)); // resultado extraño
console.log(a1);


let cuadrados = a1.map(function (numero) {
    return numero * numero;
});
console.log(cuadrados);

let suma = a1.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 1);
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

  