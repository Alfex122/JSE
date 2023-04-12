/*
Datos Primitivos
<--> Escribe un fragmento de código que creará variables y las inicializará con valores Boolean, Number, BigInt, String y tipos undefined utilizando (siempre que sea posible) literales y funciones constructoras.
<--> Imprime todos los valores y todos los tipos de esos valores usando console.log. Intenta usar la interpolación de cadenas para mostrar el valor y el tipo al mismo tiempo con una sola llamada a console.log, por ejemplo, en el siguiente formato: 1000 [número].
<--> Realiza una cadena de conversiones: crea un Boolean a partir de un BigInt creado a partir de un Number que se creó a partir de un String. Comienza con el valor "1234". ¿Es posible?
<--> Intenta agregar dos valores del mismo tipo y verifica el tipo de resultado. Pruébalo para todos los tipos de datos primitivos.
<--> Intenta sumar dos valores de diferentes tipos y verifica los resultados.
<--> Intenta modificar la línea const str1 = 42 + "1"; para obtener el resultado 43 (sin eliminar las comillas alrededor del 1)
 */
const Booleano = false;
const Suma = new Function('a', 'b', 'return a + b');
const Bigint = 1n;
const Cadena = "Heidis";
const SinDefinir = undefined;

//CONSOLE.LOG
console.log(`${typeof(Booleano)} : ${Booleano}`)
console.log(`${typeof(Suma(1,3))} : ${Suma(1,3)}`)
console.log(`${typeof(Bigint)} : ${Bigint}`)
console.log(`${typeof(Cadena)} : ${Cadena}`)
console.log(`${typeof(SinDefinir)} : ${SinDefinir}`)

//CONVERSIONES STRING/NUMBER/BIGINT/BOOLEAN
const ConversionStr = "1234";
const ConversionNumber = Number (ConversionStr)
const ConversionBigint = BigInt(ConversionNumber)
const ConversionBoolean = Boolean(ConversionBigint)

console.log(`${typeof(ConversionStr)} : ${ConversionStr}`)
console.log(`${typeof(ConversionNumber)} : ${ConversionNumber}`)
console.log(`${typeof(ConversionBigint)} : ${ConversionBigint}`)
console.log(`${typeof(ConversionBoolean)} : ${ConversionBoolean}`)

//DOS VALORES DEL MISMO TIPO Y COMPROBAR EL RESULTADO DE CADA TIPO
var Cadena1 = ("Ara"), Cadena2 = ("Heidis");
var Numero1 = 22, Numero2 = 03;
var Bigint1 = 11n, Bigint2 = ("0x11");
var Booleano1 = true, Booleano2 = Boolean(NaN);

console.log((`${typeof(Cadena1)} : ${Cadena1}`) , (`${typeof(Cadena2)} : ${Cadena2}`))
console.log((`${typeof(Numero1)} : ${Numero1}`) , (`${typeof(Numero2)} : ${Numero2}`))
console.log((`${typeof(Bigint1)} : ${Bigint1}`) , (`${typeof(Bigint2)} : ${Bigint2}`))
console.log((`${typeof(Booleano1)} : ${Booleano1}`) , (`${typeof(Booleano2)} : ${Booleano2}`))

//SUMAR DOS VALORES DE DISTINTO TIPO
var String1 = "Arely", String2 = "Dayana";
var Number1 = 24, Number2 = 01;
var BigInt1 = 11n, BigInt2 = ("0x11");
var Boolean1 = false, Boolean2 = true;

console.log(String1 + Number2);
console.log(Suma(Number1, BigInt2));
console.log(Suma(Bigint1, Boolean2)); // ->Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(Suma(Boolean1, String2)); // -> Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

//MODIFICAR LA LINEA str1 = 42 + "1", Y DE EL RESSULTADO 43
const str1 = 42 + Number("1");

console.log(str1);