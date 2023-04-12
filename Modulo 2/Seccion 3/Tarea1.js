/**\
            Objetos
Crea un objeto que describa un boleto de tren y guárdalo en la variable ticket. El objeto debe tener tres campos:

estación inicial (el nombre clave es 'from', y como valor, proporciona el nombre de la estación más cercana en tu área)
estación final (el nombre clave es 'to', y como valor, dar cualquier otra estación dentro de 100 km)
el precio del boleto (el nombre clave es 'price', y como valor, proporciona la cantidad que te gustaría pagar por este boleto)
El objeto debe crearse usando llaves {}, en los que todos los campos se enumerarán inmediatamente. Luego muestra los valores de todos los campos del ticket en la consola.

Declara un objeto vacío y guárdalo en la variable person. Usando la notación de punto, agrega los campos firstName y lastName al objeto ingresando tus datos como valores. Intenta mostrar los campos individuales en la consola.

            Arreglos
Estamos creando una pequeña biblioteca de libros sobre programación en JavaScript. Tenemos tres libros y queremos preparar una lista de ellos. Almacenaremos tres datos de cada libro: el título, el autor y el número de páginas:

Speaking JavaScript, Axel Rauschmayer, 460.
Programming JavaScript Applications, Eric Elliott, 254.
Understanding ECMAScript 6, Nicholas C. Zakas, 352.
Crea un arreglo de tres objetos que representen los libros. Cada objeto debe tener las siguientes propiedades: título, autor, páginas.
Hemos agregado un nuevo libro a nuestra colección: Learning JavaScript Design Patterns, por Addy Osmani, 254 páginas. Usa el método apropiado para adjuntar el libro al final del arreglo. Muestra la longitud del arreglo y, a su vez, todos los nombres de los libros en la colección.
Utiliza el comando slice para copiar los dos últimos libros al nuevo arreglo.
El primer libro de la colección se pierde en circunstancias inexplicables. Ya has aceptado la pérdida, así que ahora elimínalo del arreglo. ¿Cuál método usarás para este propósito? Muestra la longitud del arreglo y todos los nombres de los libros de la colección a su vez.
Muestra la suma de las páginas de todos los libros de la colección.
 */

//OBJETO 
let Ticket = {
    From: "Aguascalientes",
    To: "Zacatecas",
    Price: 50,
};
console.log(Ticket.From );
console.log(Ticket.To);
console.log(Ticket.Price);

let Person = {};
Person.Firstname = "Dayana";
Person.Lastname = "Ishiwaka"
console.log(Person.Firstname);
console.log(Person.Lastname);


//ARREGLO
let Library = [
    {
        Title: "Speaking JavaScript",
        Author: "Axel Rauschmayer",
        Pages: 460
    },
    {
        Title: "Programming JavaScript Applications",
        Author: "Eric Elliott",
        Pages: 254
    },
    {
        Title: "Understanding ECMAScript 6",
        Author: "Nicholas C. Zakas",
        Pages: 352
    }
]
//Agregamos nuevo libro
Library.push({Title: "Learning JavaScript Design Patterns", Author: "Addy Osmani", Pages: 254});

//Imprimimos la longitud de el arreglo
console.log(Library.length);
console.log(Library[0].Author);
console.log(Library[1].Author);
console.log(Library[2].Author);
console.log(Library[3].Author);

//Nuevo arreglo con los dos ultimos libros
let NewColection = Library.slice(-2);
console.log(NewColection[0].Author);
console.log(NewColection[1].Author);

//Eliminamos el primer elemento
Library.shift();
console.log(Library.length);
console.log(Library[0].Author);
console.log(Library[1].Author);
console.log(Library[2].Author);

//Suma de las paginas de todos los libros 
let Suma = (Library[0].Pages + Library[1].Pages + Library[2].Pages); 