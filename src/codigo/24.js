//programacion funcional

function add(a, b) { //1. creo una funcion pequena
    return a + b;
  }

  const operation = add; //2. asigno la funcion como una variable

  function makeOperation(operation, num1, num2) { //3. utilizo la funcion como parametro
    return operation(num1, num2); //4. retorno la funcion dentro de una funcion
  }
  
  console.log(makeOperation(operation, 2, 3)); // Output: 5 //5. utilizo la funcion como argumento

  const numbers = [1, 2, 3, 4, 5];
  const doubles = numbers.map(function(number) { //utilizo la funcion pura map() para realizar una operacion sobre la lista original pero no muto la original
    return numbers * 2;
  });
  console.log(doubles); // [2, 4, 6, 8, 10]