//              ASIGNACION              //
let year = 2050;
let newYear = year = 2051;
/**Es lo mismo que
let year = 2050;
year = 2051;
let newYear = year;*/


//              ARITMETICOS             //
console.log(2 + 2 * 2); // -> 6
console.log(2 + (2 * 2)); // -> 6
console.log((2 + 2) * 2); // -> 8

const x = 5;
const y = 2;
console.log("suma: ", x + y); // -> 7
console.log("resta: ", x - y); // -> 3
console.log("multiplicación: ", x * y); // -> 10
console.log("división: ", x / y); // -> 2.5
console.log("residuo de la división: ", x % y); // -> 1
console.log("potencia: ", x ** y); // -> 25


//              UNARIOS                 //
//Ambos operadores convierten los operandos al tipo Number, mientras que el operador de menos (negativo) lo niega.
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";
console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number
let n11 = 10;
let n22 = 10;
console.log(n11); // -> 10
console.log(n11++); // -> 10
console.log(n11); // -> 11
console.log(n22); // -> 10
console.log(++n22); // -> 11
console.log(n22); // -> 11  
let n33 = 20;
let n44 = 20;
console.log(n33); // -> 20
console.log(n33--); // -> 20
console.log(n33); // -> 19
console.log(n44); // -> 20
console.log(--n44); // -> 19
console.log(n44); // -> 19


//              ASIGNACION COMPUESTA                //
let xx = 10;
xx += 2;
console.log(x); // -> 12        jobana564
xx -= 4;
console.log(x); // -> 8
xx *= 3;
console.log(x); // -> 24
xx /= 6;
console.log(x); // -> 4
xx **= 3;
console.log(x); // -> 64
xx %= 10;
console.log(x); // -> 4


//             LOGICOS                          //
/**una conjunción, es decir, AND (Y) lógico (símbolo &&)
una disyunción, es decir, OR (O) lógico (símbolo ||)
una negación, es decir, NOT (NO) lógico (símbolo !) */
//Londres es una ciudad AND (Y) Londres está en Islandia
console.log(true && true); // -> true
console.log(true && false); // -> false
console.log(false && true); // -> false
console.log(false && false); // -> false

//Londres es una ciudad OR (O) Londres está en Islandia.
console.log(true || true); // -> true
console.log(true || false); // -> true
console.log(false || true); // -> true
console.log(false || false); // -> false

//Londres NO es una ciudad.
console.log(!true); // -> false
console.log(!false); // -> true

//Podemos, por supuesto, conectar tantos de estos operadores como necesitemos, creando "frases" más complejas. Como en el caso de los operadores aritméticos, aquí se determina la secuencia de acciones. La prioridad más alta es la negación !, luego la conjunción &&, y finalmente la disyunción ||. Por supuesto, la precedencia se puede cambiar mediante paréntesis
const a = false;
const b = true;
const c = false;
const d = true;
console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false

//DATOS CON TIPOS QUE NO SON NECESARIAMENTE BOOLEANOS
console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string
console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob

let xX = 0;
let yX = 0;
console.log(xX++ && yX++); // -> 0
console.log(xX); // -> 1
console.log(yX); // -> y == 0
