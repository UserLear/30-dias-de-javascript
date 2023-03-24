//4-encontrar el tipo de dato
function solution(valor) {
  return typeof valor;
}

//7-calcula la propina
function calculateTip(billAmount, tipPercentage) {
  return billAmount * (tipPercentage / 100)
}

//11-año bisiesto
function isLeapYear(year) {
    if (year < 0) {
        console.log(false);
    } else if (year % 4 === 0 && year % 100 !== 0) {
        console.log(true);
    } else if (year % 100 === 0 && year % 400 === 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  isLeapYear(2020);
  isLeapYear(-2024);
  isLeapYear(1984.25);

  //13-obten informacion mascotas segun su tipo
function getPetExerciseInfo(type, age) {
    switch (type) {
      case "perro":
        if (age > 0 && age < 1) {
          return "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
        } else if (age >= 1 && age <= 7) {
          return "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
        } else {
          return "Los perros viejos necesitan caminatas más cortas"
        };
        break;
      case "gatos":
        if (age > 0 && age < 1) {
          return "Los gatitos necesitan frecuentes sesiones de juego"
        } else if (age >= 1 && age <= 7) {
          return "Los gatos a esta edad necesitan jugar diariamente"
        } else {
          return "Los gatos viejos necesitan sesiones de juego más cortas"
        };
        break;
      case "aves":
        if (age > 0 && age < 1) {
          return "Las aves jóvenes necesitan mucho espacio para volar"
        } else if (age >= 1 && age <= 7) {
          return "Las aves necesitan jugar diariamente y un lugar para volar"
        } else {
          return "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar"
        };
        break;
      default:
      return "Tipo de mascota invalida"
    }
  };
  
  console.log(getPetExerciseInfo("perro", 3))
  console.log(getPetExerciseInfo("gatos",8))
  console.log(getPetExerciseInfo("mamut",25))

//15-Ejercicio triangulo-no realizado

//17-Ejercicio gato famoso-no realizado

//19-Ejercicio-obten el promedio de los estudiantes-no realizado
