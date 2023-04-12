let counter;
console.log(counter); // -> undefined
//Bloque de codigo, van adentro de llaves{}
{
    counter = 1;
    console.log(counter); // -> 1
}
counter = counter + 1;
console.log(counter); // -> 2

//ALCANCE DE LAS VARIABLES let Y const

//Esta variable es global y se puede usar en todo el codigo
let height = 180;
{
    //Esta variable solo es visible en el bloque de codigo 
    let weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70   
}
console.log(height); // -> 180
console.log(weight); // -> Uncaught ReferenceError: weight is not defined

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