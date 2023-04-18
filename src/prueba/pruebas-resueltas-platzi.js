//4-encontrar el tipo de dato
function solution(valor) {
  return typeof valor;
}

//7-calcula la propina
function calculateTip(billAmount, tipPercentage) {
  return billAmount * (tipPercentage / 100)
}

//11-AÑO BISIESTO
function isLeapYear(year) {
  // Primero verificamos que el número sea positivo
  // Y además el número sea entero
  if(year % 1 != 0 || year <= 0){
    return false
  }

  // Verificamos que el año sea divisible entre 4
 // (la regla básica de los años bisiestos) 
  if(year % 4 === 0){
    // Si el numero es múltiplo de 100 y de 400 entonces es bisiesto
    if(year % 100 === 0 && year % 400 === 0){
      return true
    }

    // Si solo es multiplo de 100 no lo es
    if(year % 100 === 0){
      return false
    }
    // Si solo es múltiplo de 4, también lo es
    return true
  }

  // si no cumple con nada de lo anterior, no es bisiesto
  return false
}

//13-obten informacion de mascotas segun su tipo
function getPetExerciseInfo(type, age) {

  switch (type) {
    case "perro":
      if (age < 1) return "Los cachorros necesitan pequeñas y frecuentes  sesiones de juego"
      else if (age >= 1 && age <= 7) return "Los perros a esta edad necesitan caminatas diarias y sesiones de juego"
      else return "Los perros viejos necesitan caminatas más cortas"

      break;

    case "gato":
      if (age < 1) return "Los gatitos necesitan frecuentes sesiones de juego"
      else if (age >= 1 && age <= 7) return "Los gatos a esta edad necesitan jugar diariamente"
      else return "Los gatos viejos necesitan sesiones de juego más cortas"

      break;

    case "ave":
      if (age < 1) return "Las aves jóvenes necesitan mucho espacio para volar"
      else if (age >= 1 && age <= 7) return "Las aves necesitan jugar diariamente y un lugar para volar"
      else return "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar"

      break;
    default:
    return  "Tipo de mascota inválida"
  }

}
//15-dibuja un tiangulo-si funciona
 function printTriangle(size, character) {
  let triangle = "";
  let newSize = Number(size);

  while (newSize > 0) {
    let line = "";
    let lineSize = Number(size);

    while (lineSize > 0) {
      let char = lineSize > newSize
        ? ' '
        : character;
      line = line + char;
      lineSize--;
    }

    triangle = triangle.length
      ? `${line}\n${triangle}`
      : line;

    newSize--;
  }

  return triangle;
}
console.log(printTriangle(5, "8")); 

//17-ENCUENTRA AL MICHI MAS FAMOSO
function findFamousCats(cats) {
  // Creamos un objeto en el cual guardaremos los nombres
  // de los gatitos y el número máximo de seguidores
  let famousStats = {
    // El array de nombres empieza vacío
    catNames: [],
    // Y el número máximo de seguidores en 0
    maxNumOfFollowers: 0,
  };

  for (let i = 0; i < cats.length; i++) {
    // Iteramos por cada gatito recibido en el array
    const cat = cats[i];
    // Obtenemos la suma total de seguidores con reduce
    const totalFollowers = cat.followers.reduce(
      (acum, currentVal) => acum + currentVal,
      0
    );
 
    // comparamos si el total de followers del actual gatito es IGUAL
    // al del objeto que declaramos al inicio
    if (totalFollowers === famousStats.maxNumOfFollowers) {
      // De ser así, solo agregamos el nombre del gatito
      famousStats.catNames.push(cat.name);
    }

    // Por otro lado, si es MAYOR
    if (totalFollowers > famousStats.maxNumOfFollowers) {
       // Reiniciamos el array de nombres
      famousStats.catNames = [];
       // Agregamos a nuestro gatito influencer
      famousStats.catNames.push(cat.name);
       // Para al final asignar el número máximo de seguidores
       // a la debida propiedad del objeto
      famousStats.maxNumOfFollowers = totalFollowers;
    }
  }

  // Al final solo retornamos LOS NOMBRES
  return famousStats.catNames;
}

//19 ENCUENTRA EL PROMEDIO ESTUDIANTES
function getStudentAverage(students) {
  // Creamos un array donde obtendremos los estudiantes con su promedio
  const studentsWithAverage = students.map((student) => {
    // separamos las notas en una sola variable para hacerlo más legible
    const grades = student.grades;
    // calculamos el promedio sumando todas las notas para dividirlas
    // en el total de materias
    const average =
      grades.reduce((total, item) => total + item, 0) / grades.length;

    return {
      // Retornamos un objeto con el nombre del estudiante
      name: student.name,
      // Junto con su promedio a 2 decimales
      // Es importante parsearlo con Number porque el método toFixed devuelve un string
      average: Number(average.toFixed(2)),
    };
  });

  // Después pasamos a hacer lo mismo pero obteniendo el promedio de la clase
  const classAverage =
    studentsWithAverage.reduce((total, student) => total + student.average, 0) /
    studentsWithAverage.length;
  // Sumamos todos los promedios y los dividimos entre el total de estudiantes

  // Al final armamos un objeto que será el que retornaremos
  const rta = {
    // De igual manera pasamos el promedio de la clase a 2 decimales
    classAverage: Number(classAverage.toFixed(2)),
    students: studentsWithAverage,
  };

  // Y retornamos el objeto anterior
  return rta;
}
 
//20 ENCUENTRA EL MAYOR PALINDROMO
export function findLargestPalindrome(words) {
  // Primero definimos que la palabra más larga es null
  // Debido a que no se tiene un valor 
  let largest = null;
  // Después iteramos por cada una de las palabras
  for (const word of words) {
    // con split("") creamos un array donde cada elemento es una letra
    // Ejemplo "hola" => ["h","o","l","a"]
    // con reverse() "volteamos" el array
    // Ejemplo ["h","o","l","a"] => ["a"","l","o","h"]
    // y con .join("") volvemos a convertirlo en un string
    // Ejemplo  ["a"","l","o","h"] => "aloh"
    const reversedWord = word.split("").reverse().join("");
    // La primer validación que hacemos es para ver si efectivamente es un array
    if (reversedWord === word) {
      // Si si lo es, primero verificamos que se reemplace la variable largest
      // por el primer palindromo si es que no existe uno aún
      if (largest == null || word.length > largest.length) {
         // En caso de existir, se compara su longitud con el palindromo existente
        largest = word;
      }
    }
  }

  // Al final siempre retornamos la variable largest
  // Ya que si no existe ni uno solo en el array, su valor se mantiene como null
  return largest;
}
//26-CREA UNA CALCULADORA CON CLOSURES
function createCalculator() {
  // Primero declaramos nuestra variable privada
  // que tendrá un valor inicial de 0
  let total = 0;

  // dentro del return devolvemos las funciones que modifican la variable privada
  return {
    add(value) {
      // Para sumar, simplemente sumamos el valor al total
      // y retornamos el total
      total += value;
      return total;
    },

    subtract(value) {
     // Lo mismo con la resta 
      total -= value;
      return total;
    },

    multiply(value) {
      // Lo mismo con la multiplicación y división
      total *= value;
      return total;
    },

    divide(value) {
      total /= value;
      return total;
    },

    // Al final una función para reiniciar el valor a 0
    clear() {
      total = 0;
      return total;
    },

    getTotal() {
      // Y el total por si se quiere guardar el valor en otra variable en cierto momento
      return total;
    },
  };
}

//28-CREA TU PROPIO METODO MAP
function myMap(array, func) {
  // Creamos el array que retornaremos
  // Inicialmente está vacío 
  const rta = [];
  for (let i = 0; i < array.length; i++) {
    // Luego iteramos por cada elemento del array
    const element = array[i];

    // Y lo vamos pasando al array vacío después de ejecutar 
    // la función sobre cada elemento del array
    rta.push(func(element));

    // Es importante recalcar que en ningún momento modificamos el array original 
  }

  // Al final lo retornamos
  return rta;
}

//33-CREA UN PLANIFICADOR DE TAREAS
export function createTaskPlanner() {
  // Empezamos con un array vacío
  // aquí almacenaremos las tareas
  let tasks = [];

  // retornamos las funciones 
  // que servirán para manipular el array
  return {
    // La función de agregar tareas debe recibir una tarea
    addTask(task) {
      // Por lógica al añadir una nueva tarea inicia sin estar completada
      task.completed = false;
      // Una vez modificada la enviamos al array
      tasks.push(task);
    },

    //  Ahora la función para remover tareas
    removeTask(value) {
       // Dependiendo si el valor es un número o un string
      if (typeof value === "number") {
        // Si es un número, filtramos todas las tareas que no tengan el mismo valor
        //  y luego lo reasignamos al array de tareas
        tasks = tasks.filter((task) => task.id !== value);
      } else {
        // En caso de ser un string, hacemos lo mismo pero con la propiedad de .name
        tasks = tasks.filter((task) => task.name !== value);
      }
    },

    // Para obtener las tareas simplemente las retornamos
    getTasks() {
      return tasks;
    },

     // Para obtener las tareas pendientes o completadas simplemente las filtramos
    // y retornamos el resultado
    getPendingTasks() {
      return tasks.filter((task) => !task.completed);
    },

    getCompletedTasks() {
      return tasks.filter((task) => task.completed);
    },

    // Para marcar una tarea dependiendo el valor recibido
    markTaskAsCompleted(value) {
      // primero declaramos la variable de index
      // la cual tendrá el indice de la posición del elemento
      let index;

     // buscamos el indice dependiendo el valor
      if (typeof value === "number") {
        // buscamos por index dependiendo si es por id
        index = tasks.findIndex((task) => task.id === value);
      } else {
        // O por name
        index = tasks.findIndex((task) => task.name === value);
      }

      // Al final con ese indice modificamos la propiedad de completed a true
      tasks[index].completed = true;
    },

    getSortedTasksByPriority() {
      // Para ordenar las tareas sin modificar el array original
     // solamente hacemos una copia del array y ejecutamos sort sobre este
      const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
      // Al final lo retornamos
      return sortedTasks;
    },

    filterTasksByTag(tag) {
      // Filtramos las tareas que incluyan cierto tag
      return tasks.filter((task) => task.tags.includes(tag));
    },

    updateTask(taskId, updates) {
     
      // obtenemos el id como lo hicimos previamente
      const index = tasks.findIndex((task) => task.id === taskId);
      // agregamos las propiedades extras destructurando ambos objetos
      tasks[index] = { ...tasks[index], ...updates };
    },
  };
}

//35 CREA UNA PROMESA PARA MANDAR EMAILS
export function sendEmail(email, subject, body) {
  // De entrada empezamos retornando una promesa
  // La cual nos provee de resolve y reject dependiendo si hay éxito en esta
  return new Promise((resolve, reject) => {
    // Primero validamos que todos los aspectos del email estén disponibles
    if (email && subject && body) {
      // De ser así, creamos un timeout para "enviar" el email
      // Recuerden hacer uso de window para que las pruebas pasen
      window.setTimeout(() => {
        // Dentro del timeout definimos un objeto con
        // todos los datos recibidos
        const emailInfo = {
          email,
          subject,
          body,
        };

        // Y lo pasamos a la resolución exitosa de la promesa
        // Para que esto sea "enviado" después de 2 segundos
        resolve(emailInfo);
      }, 2000);
    } else {
      // En caso de faltar algún dato, lanzamos un error indicándolo
      reject(new Error("Hacen falta datos para poder enviar el correo"));
    }
  });
}
// 36 EVITA EL CALLBACK HELL HACIENDO USO DE PROMISES
export function doTask1() {
  return new Promise((resolve, reject) =>
    (window.setTimeout(() => resolve('Task 1'), 300))
  );
}

export function doTask2() {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => resolve('Task 2'), 300)
  })
}

export function doTask3() {
  return new Promise((resolve, reject) => 
    (window.setTimeout(() => resolve('Task 3'), 300))
  )
}

//solo le agregamos la promesa y el resolve

exercise.js

import { doTask1, doTask2, doTask3 } from './tasks';

export function runCode() {
  const strings = [];
  return doTask1()
    .then(res => {
      strings.push(res)
      return doTask2();
    })
    .then(res => {
      strings.push(res)
      return doTask3();
    })
    .then(res => {
      strings.push(res)
      return strings
    })
    .catch(error => {
      console.log(error)
    });
}

//38-EVITA EL CALLBACK HELL HACIENDO USO DE AWAIT
export async function runCode() {
  const strings = [];

  strings.push(await doTask1());
  strings.push(await doTask2());
  strings.push(await doTask3());

  return strings;
}
//task.js

export async function doTask1(callback) {
  return new Promise((resolve, reject) => {

    window.setTimeout(() => resolve('Task 1'), 300)
  })
}

export async function doTask2(callback) {
  return new Promise((resolve, reject) => {

    window.setTimeout(() => resolve('Task 2'), 300)
  })
}

export async function doTask3(callback) {
  return new Promise((resolve, reject) => {

    window.setTimeout(() => resolve('Task 3'), 300)
  })
}

//41-valida un formulario de registro
export function validateForm(formData, registeredUsers) {
  //Datos requeridos
  const requiredData = ["name", "lastname", "email", "password"]
  //Encontrar que datos faltan
  const missingData = requiredData.filter(x => !Object.keys(formData).includes(x))

  //Mensaje de error si faltan datos
  if (!!missingData.length)
    throw new Error(`Faltan los siguientes campos: ${missingData.join(", ")}`);

  //Extraer los valores necesarios de formData
  const { name, lastname, email } = formData

  //Comprobar si ya esta registrado ese email
  if (registeredUsers.some(x => x.email == email))
    throw new Error(`Email ya existe: ${email}`);

  //Agregar el registro
  registeredUsers.push({ name, lastname, email })

  //Retorno
  return (`Tu registro fue exitoso ${name} ${lastname}`)

}

//43-AGRUPA LOS PRODUCTOS
export function groupProducts(products, category) {
  // Filtrar los produtos
  const products1 = products.filter(prod => prod.category === category);
  // Nombre de los productos separados por comas en orden
  const prodName = products1.map(prod => prod.name).join(', ');
  // Suma de los precios de productos de la categoría
  const sumPrices = products1.map(prod => prod.price).reduce((sum, curr) => sum + curr);

  return {
    products: prodName,
    totalPrice: sumPrices
  }
}

//45-Encuentra la ubicación del valor buscado
export function searchValue(array, value)
{
  let flat = array.flat(1).includes(value);
  if (!flat)
    throw new Error("Valor no encontrado");

  let rta;
  const result = array.map((array, index) => {
    if (array.includes(value))
      rta = { row: index, column: array.indexOf(value) }
  });
  return rta;
}

//47-MODIFICA UNA LISTA DE COMPRAS
export function processShoppingList(list) {
  let total = 0;

  let newList = list.map(item => {
    if (item.name.includes("oferta")) {
      item.price = item.price * 0.8;
    }
    item.price = item.price * item.quantity;

    total += item.price;

    let { quantity, ...auxItem } = item;
    return auxItem;
  })

  Object.assign(list, newList);

  return total;
}