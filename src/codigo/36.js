//callback
function getUserData(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error))
  }
  
  function displayUserData(data) {
    console.log(data.name);
  }
  
  getUserData(1, displayUserData);
  /**En este ejemplo, se define una 
   * función getUserData que toma un ID 
   * de usuario y un callback como 
   * parámetros. Dentro de esta función, 
   * se llama a la API de jsonplaceholder 
   * y se obtiene el objeto de datos del 
   * usuario. Luego, se llama al callback 
   * con los datos del usuario como 
   * argumento. En este caso, el callback 
   * es la función displayUserData que 
   * simplemente muestra el nombre del 
   * usuario en la consola.*/

//callback hell
operation1(function(result1) {
    operation2(result1, function(result2) {
      operation3(result2, function(result3) {
        operation4(result3, function(result4) {
          // ...continuar con más operaciones
        });
      });
    });
  });
  /**En este ejemplo, la ejecución de 
   * operation2 depende del resultado de 
   * operation1, y la ejecución de 
   * operation3 depende del resultado de 
   * operation2, y así sucesivamente. Como 
   * se puede ver, el código se vuelve cada 
   * vez más anidado y difícil de leer a 
   * medida que se agregan más operaciones. 
   * */

//Async/Await
operation1()
  .then(result1 => {
    return operation2(result1);
  })
  .then(result2 => {
    return operation3(result2);
  })
  .then(result3 => {
    return operation4(result3);
  })
  .then(result4 => {
    // ...continuar con más operaciones
  })
  .catch(error => {
    // Manejar errores
  });
  /**En este ejemplo, cada operación 
   * devuelve una Promesa que se encadena 
   * usando el método then(). Esto hace 
   * que el código sea más legible y fácil 
   * de seguir en comparación con la versión
   *  anterior.*/

  async function getUserData(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  async function displayUserData(userId) {
    const data = await getUserData(userId);
    console.log(data.name);
  }
  
  displayUserData(1);
  /**En este ejemplo, se define una función
   *  getUserData que hace la misma llamada
   *  a la API que en el ejemplo anterior, 
   * pero esta vez usa await para esperar 
   * la respuesta y el try/catch para manejar
   *  los errores. La función displayUserData
   *  también utiliza await para esperar que
   *  se resuelva la promesa retornada por 
   * getUserData y luego muestra el nombre 
   * del usuario en la consola */
  