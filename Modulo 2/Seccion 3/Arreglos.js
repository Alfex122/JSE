// UN ARREGLOS PUEDE CONTENER DISTINTOS TIPOS DE DATOS 
let values = ["Test", 7, 12.3, false];

//EL ARREGLO EN JAVASCRIPT ES PARECIDO A LAS LISTAS EN PYTHON
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]); // -> Sun
console.log(days[2]); // -> Tue
console.log(days[5]); // -> Fri

days[0] = "Sunday";
console.log(days[0]); // -> Sunday

let emptyArray = [];
console.log(emptyArray[0]); // -> undefined

//UNA MANERA DE AGREGAR ELEMENTOS A UN ARREGLOS DEJANDO CAMPOS VACIOS
let animals = [];
console.log(animals[0]); // -> undefined

animals[0] = "dog";
animals[2] = "cat";

console.log(animals[0]); // -> dog
console.log(animals[1]); // -> undefined
console.log(animals[2]); // -> cat
    
//SE PUEDE OBTENER UN ARREGLOS DE ARREGLOS, Y SE MUESTRA A CONTINUACION LA MANERA DE ACCEDER A ESTOS VALORES
let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia

//TIPO QUE ARROJA AL APLICARLO A UN ARREGLO 
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(typeof days); // -> object

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";

console.log(typeof days); // -> object
console.log(typeof day); // -> string

//CHECAMOS SI LA VARIABLE ES ARREGLO O NO
console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false


