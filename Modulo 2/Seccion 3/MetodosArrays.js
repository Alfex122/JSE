//                  INDEXOF             //

//BUSCA ELEMENTOS EN ESPECIFICO EN UN ARREGLO Y DEVUELVE LA POSICION
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.indexOf("Mateo")); // -> 2
//SI EL VALOR NO SE ENCUENTRA EN EL ARREGLO NOS DEVUELVE EL VALOR DE '-1'
console.log(names.indexOf("Victor")); // -> -1



//                  PUSH                //

//NOS PERMITE AGREGAR UN ELEMENTO AL ARREGLO DE MANERA RAPIDA Y ESTE ELEMENTO SE GUARDA AL FINAL DE LA LISTA
let Names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(Names.length); // -> 4

Names.push("Amelia");
console.log(Names.length); // -> 5
console.log(Names); // - > ["Olivia", "Emma", "Mateo","Samuel", "Amelia"]
    

//                  UNSHIFT             //

//ES PARECIDO AL PUSH PERO ESTE AGREGA EL ELEMENTO AL PRINCIPIO Y LOS ELEMENTOS ANTERIORES SE DESPLAZAN A LA DERECHA AUMENTANDO EL INDICE (DE TENER EL INDICE 0 PASARIA A TENER EL INDICE 1)
let ames = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(ames); // ->["Olivia", "Emma", "Mateo", "Samuel"]

console.log(ames.indexOf("Mateo")); // -> 2
console.log(ames.indexOf("Victor")); // -> -1 -> No existe
ames.unshift("Amelia");
console.log(ames.indexOf("Amelia")); // -> 0
console.log(ames); //->["Amelia", "Olivia", "Emma", "Mateo", "Samuel"]


//                  POP                 //  
//ELIMINA EL ULTIMO ELEMENTO DEL ARREGLO Y ESTE A SU VEZ ES REDUCIDO EN LA SIGUIENTE PARTE DEL CODIGO
let Heidis= ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(Heidis.length); // -> 4

let Are = Heidis.pop();
console.log(Heidis.length); // -> 3
console.log(Are); // -> Samuel
console.log(Heidis); // -> ["Olivia", "Emma", "Mateo"]
    
let Ara = Heidis.pop();
console.log(Heidis.length); // -> 2
console.log(Ara); // -> Mateo
console.log(Heidis); // -> ["Olivia", "Emma"]


//                  SHIFT               //
//ES LO MISMO QUE EL POP PERO ESTE ELIMINA EL PRIMER ELEMENTO DEL ARREGLO
let SHIFT = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(SHIFT.length); // -> 4

let SHIFT2 = SHIFT.shift();
console.log(SHIFT.length); // -> 3
console.log(SHIFT2); // -> Olivia
console.log(SHIFT); // -> ["Emma", "Mateo", "Samuel"]
    

//                   REVERSE            //
//EL METODO DEVUELVE EL MISMO ARREGLO PERO CON EL ORDEN CONTRARIO
let REVERSE = ["Olivia", "Emma", "Mateo", "Samuel"];

REVERSE.reverse();
console.log(REVERSE); // -> ["Samuel", "Mateo", "Emma", "Olivia"]
    

//                  SLICE               //
//El método slice te permite crear un nuevo arreglo a partir de elementos seleccionados del arreglo original. 
//Llamar al método no afecta el arreglo original. El método toma uno o dos valores enteros como argumentos.
let SLICE = ["Olivia", "Emma", "Mateo", "Samuel"];

//Utilizamos los elementos que van a partir del indice (positivo) dado hasta el final del argumento, en este caso es el 2
let n1 = SLICE.slice(2);
console.log(n1); // -> ["Mateo", "Samuel"]

//Dos valores positivos nos dan el resultado que se encuentran en esos indices
let n2 = SLICE.slice(1,3);
console.log(n2); // -> ["Emma", "Mateo"]

//Un elemento positivo y el otro negativo nos da los elementos desde el primer indice dado hasta el final del arreglo pero omitiendo la cantidad de datos que nos marcan(Si es -2, no se obtienen los dos ultimos elementos)
let n3 = SLICE.slice(0, -1);
console.log(n3); // -> ["Olivia", "Emma", "Mateo"]

//Un numero negativo nos da los ultimos elementos del arreglo dependiendo del rango que coloquemos(Si es -2, nos devolveria los dos ultimos elementos)
let n4 = SLICE.slice(-1);
console.log(n4); // -> ["Samuel"]

console.log(SLICE); // -> ["Olivia", "Emma", "Mateo","Samuel"]
    

//                  CONCAT              //
//ESTA FUNCION CREA UN NUEVO ARREGO A PARTIR DE DOS YA EXISTENTES, NO AFECTA A LOS ARREGLOS QUE YA SE TENIAN
let CONCAT = ["Olivia", "Emma", "Mateo", "Samuel"];
let otherNames = ["William", "Jane"];
let allNames = CONCAT.concat( otherNames);

console.log(CONCAT); // -> ["Olivia", "Emma", "Mateo", "Samuel"]
console.log(otherNames); // -> ["William", "Jane"]
console.log(allNames); // -> ["Olivia", "Emma", "Mateo","Samuel", "William", "Jane"]
    
