// for
for (var i = 1; i < 10; i++) {
    console.log(i)
}

//for-in para recorer las propiedades de un objetos
let identi = {
    nombres: "Moises Emanuel",
    apellidos: "Ayala Mejia",
    ID: 0801199112890,
    sangre: "A+"
}

for (var propiedades in identi) {
    console.log(propiedades)
}

//for-of para recorrer los elementos de un array
var estudiantes = ["Juan", "Luis", "Pablo", "Moises"];

for (var estudia of estudiantes) {
    console.log(estudia);
}

//while
let n = 1;
while (n <= 6) {
    console.log(`Hola bucle que imprime el numero ${n}`)
    n++
}

//do-while
let m = 1;
do {
    console.log(m);
    m++;
} while (m <= 10);

