//BOOLEAN (booleano)

let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;

console.log(false); // -> false
console.log(typeof false); // -> boolean
console.log(isDataValid); // -> true
console.log(typeof isDataValid); // -> boolean

/*
Podemos realizar, sin conversión (es decir, cambiar a otro tipo) operaciones lógicas en valores booleanos, algunos
quizás los conozcas de las matemáticas, como NOT, AND y OR (los símbolos !, & & y || correspondientemente).
Sabremos más sobre ellos en el capítulo de operadores.
 */

//NUMBER (numérico)

const year = 1991;
let delayInSeconds = 0.00016;
let area = (16 * 3.14);
let halfArea = area / 2;

console.log(year); // -> 1991;
console.log(typeof year); // -> number;

//Se pueden hacer acortaciones como las siguientes
let a = 10; // decimal - default 
let b = 0x10; // hexadecimal 
let c = 0o10; // octal 
let d = 0b10; // binary 
 
console.log(a); // -> 10 
console.log(b); // -> 16 
console.log(c); // -> 8 
console.log(d); // -> 2 

let x = 9e3;
let y = 123e-5;
console.log(x); // -> 9000
console.log(y); // -> 0.00123

let infinite = 1 / 0;
let infiniteN = -Infinity;

console.log(infinite); // -> Infinity
console.log(infiniteN); // -> -Infinity
console.log(typeof a); // -> number
console.log(typeof b); // -> number

let s = "definitivamente no es un numero";
let n = s * 10;
console.log(n); // -> NaN
console.log(typeof n); // -> number

//BIGINT

let big = 1234567890000000000000n;
let big2 = 1n;

console.log(big); // -> 1234567890000000000000n
console.log(typeof big); // -> bigint

console.log(big2); // -> 1n
console.log(7n / 4n); // -> 1n

let big3 = 1000n + 20; 
// -> Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

let big4 = 1000n / 0n; // -> Uncaught RangeError: Division by zero
    
//STRING(cadenas)

/**
 * let message1 = "El buque 'Mars' hizo escala en el puerto.";
let message2 = 'El ciclón "Cilida" pasará cerca de Mauritius.';

console.log(message1); // -> El buque 'Mars' hizo escala en el puerto.
console.log(message2); // -> El ciclón "Cilida" pasará cerca de Mauritius.
 */
let message1 = 'El buque \'Mars\' hizo escala en el puerto.';
let message2 = "El ciclón \"Cilida\" pasará cerca de Mauritius.";

console.log(message1); // -> El buque 'Mars' hizo escala en el puerto.
console.log(message2); // -> El ciclón "Cilida" pasará cerca de Mauritius.
    
let path = "C:\\Windows";
console.log(path); // -> C:\Windows

let country = "Malawi";
let continent = "Africa";

let sentence = ` ${country} se ubica en ${continent}.`;
console.log(sentence); // -> Malawi se ubica en Africa.

