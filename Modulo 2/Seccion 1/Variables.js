//Declaramos la variable, puede ser tambien constante
//La variable nos permite declarar la misma variable muchas veces
var height;
//tambien una variable se puede declarar con la palabra "let", la funcion de esta es que no nos permite declarar una segunda vez la variable con el mismo nombre y esto evita que se generen errores en el codigo por tener la misma variable dos veces
let HEIGHT;
//La constante no puede cambiar su valor
const Constante = 0;
console.log(height); // -> undefined
console.log(weight); // -> Uncaught ReferenceError: weight is not defined