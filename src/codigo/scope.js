//scope global
var a1 = 12;

function multip (a2) {
    return a2 * a1;
}

console.log(multip(4));

//scope local
function multipl (a3) {
    var b2 = 7;
    return a3 + b2;
}
console.log(multipl(5));
//console.log(multipl(b2)); 
//console.log(b1); devuelve error porque la variable no puede ser accedida eso implica que no ha sido declarada

