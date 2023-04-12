//Declaramos la funcion, esta nos sirve para ahorrar codigo
function testFunction() {
    console.log("Hola");
    console.log("Mundo");
}

//Esto nos evita el generar codigo como el siguiente
console.log("Comencemos:"); // -> Comencemos:
console.log("Hola"); // -> Hola
console.log("Mundo"); // -> Mundo
console.log("y otra vez:"); // -> y otra vez:
console.log("Hola"); // -> Hola
console.log("Mundo"); // -> Mundo
console.log("y una vez más:"); // -> y una vez más:
console.log("Hola"); // -> Hola
console.log("Mundo"); // -> Mundo

//Y se genera de la siguiente manera con menos llamando la funcion
console.log("Comencemos:");
testFunction();
console.log("y otra vez:");
testFunction();
console.log("y una vez más:");
testFunction();

