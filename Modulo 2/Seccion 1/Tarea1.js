/*Tarea 1

Juguemos a la floristería. Declara seis variables, recordando nombrarlas según su propósito:

el precio de una sola rosa (8) y el número de rosas que tienes (70)
el precio de un solo lirio (10) y el número de lirios que tienes (50)
el precio de un solo tulipán (2) y la cantidad de tulipanes que tienes (120)
Ahora declara tres variables, una para cada una de las rosas, lirios y tulipanes que tienes, en las que colocas su precio total. Inserta los valores correspondientes en las variables utilizando las variables declaradas en el paso anterior. Finalmente, declara una variable en la que almacenes el precio de todas tus flores (nuevamente, usa las variables anteriores para la inicialización). Muestra toda la información del inventario en la consola de la siguiente forma:

Rosa: precio unitario: 8 , cantidad: 70 , valor: 560
Lirio: precio unitario: 10 , cantidad: 50 , valor: 500
Tulipán: precio unitario: 2 , cantidad: 120 , valor: 240
Total:  1300
*/
//Declaracion de las 6 variables de la cantidad y precio de las rosas
let Precio_Rosa = 8;
let Cantidad_Rosa = 70;
let Precio_Lirio = 10;
let Cantidad_Lirio = 50;
let Precio_Tulipán = 2;
let Cantidad_Tulipán = 120;

//Declaracion de las 3 variables del total de las rosas
let Rosas = (Precio_Rosa * Cantidad_Rosa);
let Lirios = (Precio_Lirio * Cantidad_Lirio);
let Tulipanes = (Precio_Tulipán * Cantidad_Tulipán);

//Declaracion de la variable total
let Total = ((Rosas + Lirios) + Tulipanes);

console.log("Rosa: " , "Precio unitario: " , Cantidad_Rosa + ", cantidad: " , Cantidad_Rosa , ", valor: " , Rosas);
console.log("Lirio: " , "Precio unitario: " , Cantidad_Lirio , ", cantidad: " , Cantidad_Lirio , ", valor: " ,Lirios);
console.log("Tulipán: " , "Precio unitario: " , Cantidad_Tulipán , ", cantidad: " , Cantidad_Tulipán , ", valor: " , Tulipanes);
console.log("Total: " + Total);