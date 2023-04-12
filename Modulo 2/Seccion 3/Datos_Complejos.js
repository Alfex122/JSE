/*let testObj = {};
console.log(typeof testObj); // -> object
*/
//Creamos un objeto con dos valores dentro de el (Atributos)
let testObj = {
    nr: 600,
    str: "texto"
};
console.log(testObj.nr); // -> 600
console.log(testObj.str); // -> texto

//EJEMPLO DE COMO USAR LOS OBJETOS//
    let name1 = "Calvin";
    let surname1 = "Hart";
    let age1 = 66;
    let email1 = "CalvinMHart@teleworm.us";

    let name2 = "Mateus";
    let surname2 = "Pinto";
    let age2 = 21;
    let email2 = "MateusPinto@dayrep.com";

let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
};

//MANERA DE ELIMINAR O MODIFICAR LOS DATOS DEL OBJETO
console.log(user1.name); // -> Calvin
console.log(user2.name); // -> Mateus

console.log(user1.age); // -> 66
user1.age = 67;
console.log(user1.age); // -> 67

console.log(user2.phone); // -> undefined
user2.phone = "904-399-7557";
console.log(user2.phone); // -> 904-399-7557

console.log(user2.phone); // -> 904-399-7557
delete user2.phone;
console.log(user2.phone); // -> undefined
