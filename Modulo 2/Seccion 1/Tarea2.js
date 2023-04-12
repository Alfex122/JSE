/*
Tarea 2

Modifica el código de la tarea 1. Supón que los precios de las flores serán constantes (no cambiarán). Declara e inicializa las variables restantes de la misma manera que en el ejemplo anterior. Muestra toda la información recopilada en la consola. Ahora disminuye el número de rosas en 20 y el de lirios en 30. Vuelve a mostrar toda la información recopilada en la consola.
 */
//Declaracion de las 6 variables de la cantidad y precio de las rosas
const Precio_Rosa = 8;
let Cantidad_Rosa = 70;
const Precio_Lirio = 10;
let Cantidad_Lirio = 50;
const Precio_Tulipán = 2;
let Cantidad_Tulipán = 120;

//Declaracion de las 3 variables del total de las rosas
let Rosas = (Precio_Rosa * Cantidad_Rosa);
let Lirios = (Precio_Lirio * Cantidad_Lirio);
let Tulipanes = (Precio_Tulipán * Cantidad_Tulipán);

//Declaracion de la variable total
let Total = ((Rosas + Lirios) + Tulipanes);

console.log("Rosa: " , "Precio unitario: " , Cantidad_Rosa + ", cantidad: " , (Precio_Rosa) , ", valor: " , Rosas);
console.log("Lirio: " , "Precio unitario: " , Cantidad_Lirio , ", cantidad: " , (Precio_Lirio) , ", valor: " ,Lirios);
console.log("Tulipán: " , "Precio unitario: " , Cantidad_Tulipán , ", cantidad: " , Precio_Tulipán , ", valor: " , Tulipanes);
console.log("Total: " + Total);

//restammos a las rosas y lirios
Cantidad_Rosa = Cantidad_Rosa-20
Cantidad_Lirio = Cantidad_Lirio-30

Rosas = (Precio_Rosa * Cantidad_Rosa);
Lirios = (Precio_Lirio * Cantidad_Lirio);
Tulipanes = (Precio_Tulipán * Cantidad_Tulipán);
Total = ((Rosas + Lirios) + Tulipanes);

console.log("Rosa: " , "Precio unitario: " , Cantidad_Rosa + ", cantidad: " , (Precio_Rosa) , ", valor: " , Rosas);
console.log("Lirio: " , "Precio unitario: " , Cantidad_Lirio , ", cantidad: " , (Precio_Lirio) , ", valor: " ,Lirios);
console.log("Tulipán: " , "Precio unitario: " , Cantidad_Tulipán , ", cantidad: " , Precio_Tulipán , ", valor: " , Tulipanes);
console.log("Total: " + Total);