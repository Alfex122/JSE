//      CUADRO DE DIALOGO DE ALERTA
//Aparece 
alert("¡Hola, Mundo!")
//Se puede poner de ambas maneras y seguira haciendo lo mismo
window.alert("¡Hola, Mundo!, por segunda ocasión");
alert(4 * 7);
alert(true);
alert("texto 1", "texto 2"); // solo "texto 1" será mostrado


//      CUADRO DE DIALOGO DE CONFIRMACION 
//El segundo cuadro de diálogo se denomina cuadro de diálogo confirm. Al igual que alert, es un método que acepta un parámetro opcional: un mensaje que se mostrará. La diferencia entre alert y confirm es que el cuadro de diálogo confirm muestra dos botones, el botón Aceptar y el botón Cancelar. Dependiendo del botón presionado por el usuario, el método confirm devuelve un valor booleano. Se devuelve verdadero cuando el usuario cierra el cuadro de diálogo con el botón Aceptar y se devuelve falso cuando el usuario presiona el botón Cancelar.
let decision = window.confirm("¿Está bien?");
console.log(decision);

let remove = confirm("¿Eliminar todos los datos?");
let message = remove ? "Eliminando Datos" : "Cancelado"
console.log(message);//Dependiendo de la seleccion mostrara el mensaje
    

//      CUADRO DE DIALOGO PROMPT
let name = window.prompt("¿Cuál es tu nombre?", "Juan Pérez");
name = name ? name : "anónimo";
let age = prompt("Hola " + name + " ¿Cuántos años tienes?");
alert(name + " tiene " + age + " años");
