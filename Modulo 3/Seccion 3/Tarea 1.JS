/**Usando todo lo que has aprendido hasta este punto, escribe una secuencia de comandos que le pregunte al usuario sobre el ancho, alto y largo de una caja, luego calcula y devuelve al usuario el volumen de esta caja.

Como ejemplo, una caja con anchura = 20, altura = 10 y longitud = 50 tendrá un volumen de 10000 (omitiendo unidades, ya que no son relevantes en este escenario). Por ahora, supón que los valores proporcionados por el usuario son números válidos, pero si tienes alguna idea sobre cómo hacerlo, puedes intentar hacer este script de tal manera que sea resistente a los valores no válidos. */

let Ancho = prompt("Volumen de la caja, Ingresa el ancho", 0);
let Alto = prompt("Volumen de la caja, Ingresa la altura", 0);
let Fondo = prompt("Volumen de la caja, Ingresa la profundidad", 0);

let Volumen = Ancho * Alto * Fondo;

alert(`El volumen de la caja es: ${Volumen}`)