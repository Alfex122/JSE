/*
Tarea 1
Escribe un código que cree variables y las inicialice con valores Boolean, Number, BigInt, String y tipos undefined usando (cuando sea posible) literales y funciones constructoras.

Tarea 2
Imprime todos los valores y todos los tipos de esos valores usando console.log. Intenta usar la interpolación de cadenas para mostrar el valor y el tipo al mismo tiempo con una sola llamada a console.log.

Tarea 3
Realizar una cadena de conversiones: crear un Boolean a partir de un BigInt creado a partir de un Number que se creó a partir de un String . Comienza con el valor "1234". ¿Es posible?

Tarea 4
Intenta agregar dos valores del mismo tipo y verifica el tipo de resultado. Pruébalo para todos los tipos primitivos.

Tarea 5
Prueba sumar dos valores de diferentes tipos y verifica los resultados.

Tarea 6
Intenta modificar la línea const str1 = 42 + "1"; para obtener el resultado 43 (sin eliminar las comillas alrededor del 1 ).
*/ 


//EJERCICIO 1
let Des = undefined;
let Str = "La madre Heidis", str = String("La maeta Asaceli");
let Big = 24n, big = BigInt(200);
let Num = 22, num = Number("32");
let Bool = true, bool = Boolean(NaN);


//EJEJRCICIO 2
console.log(`${typeof(Des)} : ${Des}`);
console.log(`${typeof(Str)} : ${Str}`);
console.log(`${typeof(str)} : ${str}`);
console.log(`${typeof(Big)} : ${Big}`);
console.log(`${typeof(big)} : ${big}`);
console.log(`${typeof(Num)} : ${Num}`);
console.log(`${typeof(num)} : ${num}`);
console.log(`${typeof(Bool)} : ${Bool}`);
console.log(`${typeof(bool)} : ${bool}`);


//EEJERCICIO 3
const ConversionStr = "1234";
const ConversionNumber = Number (ConversionStr)
const ConversionBigint = BigInt(ConversionNumber)
const ConversionBoolean = Boolean(ConversionBigint)
console.log(`${typeof(ConversionStr)} : ${ConversionStr}`)
console.log(`${typeof(ConversionNumber)} : ${ConversionNumber}`)
console.log(`${typeof(ConversionBigint)} : ${ConversionBigint}`)
console.log(`${typeof(ConversionBoolean)} : ${ConversionBoolean}`)
/** EJEMPLO REALIZADO EN EL CURSO
let b = Boolean( BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);

// or

let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let b = Boolean(bi);
console.log(`${b} [${typeof b}]`); */


//EJERCICIO 4
let Cadena = "La madre " + "Heidis";
let Numero = 22 + 24;
let Booleano = false + true;
let Und = undefined + undefined;
let Gigante = 1n + 21n;
console.log(`${Cadena} : ${typeof(Cadena)}`)
console.log(`${Numero} : ${typeof(Numero)}`)
console.log(`${Booleano} : ${typeof(Booleano)}`) // ->number
console.log(`${Und} : ${typeof(Und)}`)// ->number
console.log(`${Gigante} : ${typeof(Gigante)}`) 


//EJERCICIO 5
let b1 = true + 100; 
// let b2 = true + 100n; // -> error!
let b3 = true + "100"; 
// let n1 = 100 + 200n; // -> error!
let n2 = 100 + true;
let n3 = 100 + "200";
// let bi1 = 100n + 200;  // -> error!
// let bi2 = 100n + true  // -> error!
let bi3 = 100n + "200"; 
let s1 = "100" + 200;
let s2 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;
console.log(`${b1} [${typeof b1}]`);    // -> 101 [number]
// console.log(`${b2} [${typeof b2}]`);
console.log(`${b3} [${typeof b3}]`);    // -> true100 [string]
// console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);    // -> 101 [number]
console.log(`${n3} [${typeof n3}]`);    // -> 100200 [string]
// console.log(`${bi1} [${typeof bi1}]`);
// console.log(`${bi2} [${typeof bi2}]`);
console.log(`${bi3} [${typeof bi3}]`);  // -> 100200 [string]
console.log(`${s1} [${typeof s1}]`);    // -> 100200 [string]
console.log(`${s2} [${typeof s2}]`);    // -> 100200 [string]
console.log(`${s3} [${typeof s3}]`);    // -> 100true [string]
console.log(`${s4} [${typeof s4}]`);    // -> abc200 [string]
console.log(`${s5} [${typeof s5}]`);    // -> abc200 [string]
console.log(`${s6} [${typeof s6}]`);    // -> abctrue [string]


//EJERCICIO 6
const str1 = 42 + +"1";