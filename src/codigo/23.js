//debugging (deteccion y manejo de errores)

try {
    const num = 100;
    if (num > 50) {
      throw new Error("El número es mayor a 50");
    }
  } catch (error) {
    console.error(error.message);
  }

  let numero = 5;
  debugger;
  let resultado = numero / 2; 

