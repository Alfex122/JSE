/**Podemos usar comentarios para documentar el código y escribir exactamente qué funciones hace y qué parámetros
 *  requiere. En muchos proyectos, los archivos tienen un encabezado con información sobre el autor, la licencia o\
 *  el historial de cambios. Hay herramientas que pueden generar documentación automáticamente a partir de 
 * comentarios, siempre que se utilicen de acuerdo con la referencia de las herramientas. Un ejemplo de tal 
 * herramienta podría ser JSDoc. Colocar comentarios en el código de acuerdo con el formato de esta herramienta
 *  permitirá generar un sitio web que contenga información detallada sobre un proyecto (por ejemplo, descripciones
 *  de funciones, sus parámetros de llamada, valores devueltos, etc.). */


//              TAREA               //

//Comentar el codigo de manera que funcione
"use strict"; 
 
const prefix = "username_"; 
 
let userName = "Jack"; 
// const userName = "Adam"; 
 
let prefixedUserName; 
// const prefixedUserName; 
 
userName = "John"; 
prefixedUserName = prefix + userName; 
 
console.log(prefixedUserName /*+ prefixedUserName2*/); 
// console.log(prefixedUserName2); 

