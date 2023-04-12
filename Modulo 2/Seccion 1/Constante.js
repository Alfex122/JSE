const greeting = "¡Hola!";

/*
La variable constante no se puede definir en otra linea de codigo si no en la misma que fue declarada
const greeting;  -> Uncaught SyntaxError: Missing initializer in const declaration <-
greeting = "¡Hola!";
*/  

/*
Una constante no puede cambiar de valor
const greeting = "¡Hola!";
greeting = "Hi!"; // -> Uncaught TypeError: Assignment to constant variable.
 */
