/*El sombreado se refiere a que podemos usar el nombre de la misma variable delntro de un bloque de codigo y esta misma a su vez tendra ek valor que se le proporciono dentro del bloque.
El Valor se hace local mientras que queda oculto el global*/
let counter = 100;
console.log(counter); // -> 100
{
  let counter = 200;
  console.log(counter); // -> 200
}
console.log(counter); // -> 100

//El sombreado también está presente en las declaraciones de variables que usan la palabra var, y esta vez el alcance local no está limitado por el bloque de programa, sino por el bloque de funciones.

var Counter = 100;

function testFunction() {
    var Counter = 200;  
    console.log(Counter);
}

console.log(Counter); // -> 100
testFunction(); // -> 200
console.log(Counter); // -> 100
    

