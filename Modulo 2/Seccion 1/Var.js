//ALCANCE DE LA VARIABLE VAR
//A diferencia de las otra estas son globales, no importa si esta adentro de un bloque de codigo, Solo deja de ser global cuando se declara dentro de una funcion
var Height = 180;
{
    var weight = 70;
    console.log(Height); // -> 180
    console.log(weight); // -> 70   
}
console.log(Height); // -> 180
console.log(weight); // -> 70

//En el siguiente ejemplo se ve como la variable solo se ef=jecuta en la funcion de manera local
var globalGreeting = "Buenos";

function testFunction() {
    var localGreeting = "Días";  
    console.log("función:");
    console.log(globalGreeting);
    console.log(localGreeting);
}

testFunction();

console.log("programa principal:");
console.log(globalGreeting);
console.log(localGreeting); // -> Uncaught ReferenceError: localGreeting is not defined
    

