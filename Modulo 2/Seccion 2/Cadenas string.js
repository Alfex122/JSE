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

//Medir tiempo de ejecucion de un programa
console.time();
console.log("probar consola"); // -> probar consola
console.timeEnd(); // -> default: 0.108154296875 ms

let river = "Mekong";
let character = river.charAt(2);
console.log(character); // -> k

//METODOS COMUNMENTE UTILIZADOS 
let str = "java script language";

console.log(str.length); // -> 20
console.log('test'.length); // -> 4

console.log(str.charAt(0)); // -> 'j'
console.log('abc'.charAt(1)); // -> 'b'

console.log(str.slice(0, 4)); // -> 'java'
console.log('test'.slice(1, 3)); // -> 'es'

console.log(str.split(' ')); // -> ['java', 'script', 'language']
console.log('192.168.1.1'.split('.'));  // -> ['192', '168', '1', '1']
    
