//sintaxis de un objeto
const curso = {
	nombre: "30 días de JS", 
	duración: "20 horas", 
	clases: 100,
	detalles: {
		tecnologias: ["js", "node", "web browser"],
		calificacion: 5,	
	},
	comentarios: ["¡Excelente curso!", "Javscript no es lo mismo que Java", "hola"]
};

console.log(curso.nombre); // "30 días de JS"
console.log(curso["nombre"]); // "30 dias de JS"

//metodo
let carro = {
    marca: "Toyota",
    encender: function() {
      console.log("El carro ha sido encendido");
    }
  };

  carro.encender(); //llamar el metodo de un objeto

  