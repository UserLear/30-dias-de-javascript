//Asincronismo
//.......constructor promise + parametros (resolve + reject)
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(42);
    }, 2000);
  });
  //ejemplo crear una promesa que resuelva (o devuelva con el numero 42 despues de 2 segundos)

//.......then (encadenar)
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ number: 42, text: "hello" });
  }, 2000);
});

promise1
  .then((result) => {
    const doubledNumber = result.number * 2;
    return doubledNumber.toString();
  })
  .then((result) => {
    console.log(`The result is ${result}`);
  })
  .catch((error) => {
    console.error(error);
  });
  /** ejemplo crea una promesa que resuelva con un objeto 
   * que contenga el numero 42 y una cadena despues de 2 
   * segundos, y luego encadenar otra promesa que devuelva
   * una cadena que contenga el doble del numero de la 
   * promesa anterior.*/

//.......setTimeout()
setTimeout(() => {
  console.log('Han pasado 5 segundos');
}, 5000);
  /**imprime un mensaje despues de 5 segundos*/

//.......clearTimeout()
let id = setTimeout(() => {
  console.log('Han pasado 5 segundos');
}, 5000);

// Cancelar el temporizador
clearTimeout(id);

//.......setInterval
setInterval(() => {
  console.log('Han pasado 2 segundos');
}, 2000);
  //ejemplo imprimira un mensaje cada 2 segundos

//10....... promise() + setTimeout
function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
			const seconds = ms / 1000
      resolve(seconds);
    }, ms);
  });
}

// ejemplo de uso
wait(2000).then((seconds) => {
  console.log(`Han pasado ${seconds} segundos`);
});
  /**ejemplo Al crear una promesa con setTimeout(), podemos 
   * utilizar el constructor new Promise(). La función 
   * interna debe contener el código que se ejecutará 
   * en el futuro y, finalmente, llamará a resolve() o 
   * reject() para indicar si la tarea se completó 
   * correctamente o no. */
  /**En este ejemplo, la función wait() toma un argumento 
   * ms, que representa el número de milisegundos que se 
   * deben esperar antes de resolver la promesa. Dentro del 
   * constructor new Promise(), se llama a setTimeout() para 
   * crear una tarea asincrónica que llamará a resolve() 
   * después del número de milisegundos especificado. La 
   * función wait() devuelve la promesa creada.*/
  /**Cuando se llama a wait(2000), se crea una nueva promesa 
   * que se resolverá después de 2 segundos. Después de que 
   * se resuelva la promesa, se llama a la función then() 
   * y se ejecuta la función de devolución de llamada, que 
   * simplemente registra con la variable seconds que es 
   * devuelta al resolverse la promesa un mensaje en la 
   * consola.
   * También podemos usar setTimeout() en conjunto con 
   * reject() para manejar errores en una tarea asincrónica. 
   * Si ocurre un error durante la ejecución de la tarea, 
   * podemos llamar a reject() con un objeto de error para 
   * indicar que la tarea ha fallado. */

//11.......promesa + setTimeout() (para manejar errores)
function wait(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("El número de milisegundos no puede ser negativo"));
    } else {
      setTimeout(() => {
				const seconds = ms / 1000
        resolve(seconds);
      }, ms);
    }
  });
}

// ejemplo de uso
wait(-2000)
  .then((seconds) => {
    console.log(`Han pasado ${seconds} segundos`);
  })
  .catch((error) => {
    console.error(error.message);
		// El número de milisegundos no puede ser negativo
  });
  /**En este ejemplo, la función wait() verifica si el 
   * argumento ms es menor que cero. Si es así, se llama a 
   * reject() con un objeto de error que indica que el número 
   * de milisegundos es inválido. Si ms es mayor o igual a 
   * cero, se llama a setTimeout() para crear la tarea 
   * asincrónica que llamará a resolve() después del número 
   * de milisegundos especificado. La función wait() devuelve 
   * la promesa creada. */

