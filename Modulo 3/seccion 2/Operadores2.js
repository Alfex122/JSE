//              Operadores de concatenacion             //
let greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice
let sentence = "Happy New Year ";
let newSentence = sentence + 10191;
console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string

//Asignacion compuesta
let sentenc = "Happy New ";
sentenc += "Year ";
sentenc += 10191;
console.log(sentenc); // -> Happy New Year 10191

//COMPARACION
//Igualdad estricta, los valores tienen que ser del mismo tipo
console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false

//Igualdad, el operador los convierte a number para hacer la comparacion
console.log(10 == 5); // -> false
console.log(10 == 10); // -> true
console.log(10 == 10n); // -> true
console.log(10 == "10"); // -> true
console.log("10" == "10"); // -> true
console.log("Alice" == "Bob"); // -> false
console.log(0 == false); // -> true
console.log(undefined == false); // -> false
console.log(NaN == NaN); // -> false
//También hay operadores complementarios a los que acabamos de demostrar: el operador de no identidad !== y el operador de desigualdad !=. El primero devuelve true si los operandos no son idénticos, es decir, son iguales pero de diferente tipo, o simplemente son diferentes. El segundo devuelve true si los operandos son diferentes.
console.log(10 !== 5); // -> true
console.log(10 !== 10); // -> false
console.log(10 !== 10n); // -> true
console.log(10 !== "10"); // -> true
console.log("10" !== "10"); // -> false
console.log("Alice" !== "Bob"); // -> true
console.log(0 !== false); // -> true
console.log(undefined !== false); // -> true
console.log(10 != 5); // -> true
console.log(10 != 10); // -> false
console.log(10 != 10n); // -> false
console.log(10 != "10"); // -> false
console.log("10" != "10"); // -> false
console.log("Alice" != "Bob"); // -> true
console.log(0 !=  false); // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN); // -> true
    
//Operadores con simbolos de comparacion
console.log(10 > 100); // -> false
console.log(101 > 100); // -> true
console.log(101 > "100"); // -> true
console.log(101 < 100); // -> false
console.log(100n < 102); // -> true
console.log("10" < 20n); // -> true
console.log(101 <= 100); // -> false
console.log(10 >= 10n); // -> true
console.log("10" <=  20); // -> true
//Para comparar cadenas de caracteres, no es muy eficaz
console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true
console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true
console.log("ab" < "ab4"); // -> true

//Ternary
//El último de los operadores discutidos es bastante inusual, porque es el único operador que usa tres operandos. Es un operador condicional. Según el valor del primer operando (verdadero o falso), se devuelve el valor del segundo o tercer operando, respectivamente. Este operador se usa con mayor frecuencia para colocar uno de los dos valores en la variable dependiendo de una determinada condición. Volveremos al operador cuando hablemos del condicional if, pero aquí daremos solo un ejemplo simple de su uso. Los tres operandos están separados entre sí por ? (el primero del segundo) y : (el segundo del tercero).
console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob
let name = 1 > 2 ? "Alice" : "Bob";
console.log(name); // -> Bob