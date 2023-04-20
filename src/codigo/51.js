//programacion orientada a objetos
class Animal {
    constructor(especie) {
        this.especie = especie;
    }
    respirar() {
        console.log("Respirando...");
    }
}

class Perro extends Animal {
    ladrar() {
        console.log("Guau!");
    }
}

const perro = new Perro("Canino");
console.log(perro.especie); // Output: "Canino"
perro.respirar(); // Output: "Respirando..."
perro.ladrar(); // Output: "Guau!"

//.......this
function Animal(especie) {
    // Función constructora
    this.especie = especie;
  }
  
  Animal.prototype.respirar = function() {
    // En este scope no existe "especie"
      // Pero con "this" estamos accediendo directamente a "Animal"
      // Por lo que esto vendría siendo "Animal.especie"
    console.log(`La especie ${this.especie} está respirando...`);
  }
  
  const perro = new Animal("Canino");
  perro.respirar(); // Output: "La especie Canino está respirando..."

  //con clases
// TODAS las clases empizan por mayúscula por convención
class Animal{
	constructor(especie){
		// Con clases la función constructora es más explicita, aquí se asignan
    // los valores recibidos
		// Parecido a las funciones, se recibe como parametro cualquier valor necesario
		// y lo pasamos al scope de la clase con "this.valor = valor"
		this.especie = especie
	}

	respirar(){
		// Directamente podemos crear los métodos dentro de las clases
		// básicamente una función cualquier pero sin la keyword "function"
		console.log(`La especie ${this.especie} está respirando...`)
	}	
}

const perro = new Animal("Canino");
perro.respirar(); // Output: "La especie Canino está respirando..."

//.......new
// Aquí estamos creando una copia de la clase Animal o mejor dicho creando una instancia
// Por lo que perro, es una instancia de Animal que tiene como especie el valor de "Canino"
const perro = new Animal("Canino"); 
// De esta manera podemos acceder a todos los métodos creados en la clase
perro.respirar(); // Output: "La especie Canino está respirando..."

//.......extends
class Perro {
    constructor(especie) {
    this.especie = especie;
}
respirar() {
    console.log("Respirando...");
}
ladrar() {
    console.log("Guau!");
}
}

const animal = {
    respirar: function() {
      console.log("Respirando...");
    }
  };
  
  const perro = Object.create(animal);
  
  perro.ladrar = function() {
    console.log("Guau!");
  }
  
  perro.respirar(); // Output: "Respirando..."
  perro.ladrar(); // Output: "Guau!"

  
