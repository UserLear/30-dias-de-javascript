
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
//15-dibuja un tiangulo
 //forma un tiangulo isosceles
 export function printTriangle(size, character) {
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
 
