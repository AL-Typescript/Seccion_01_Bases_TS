// *** Variables ***

var variable1; // declaración
variable1 = "Alejandro"; // instanciación


var nombre: string; // declaración
nombre = "Alejandro"; // instanciación

variable1 = true;


// *** Tipos básicos ***

var tipoBooleano: boolean = false;

var tipoNumberInt: number = 0;
var tipoNumberDouble: number = 0.234234234;

var tipoString: string = "Alejandro";

var tipoArrayNumber: number[] = [1,2,3];
var tipoArrayString: string[] = ["1","2","3"];
var tipoArrayString2: Array<string> = ["1","2","3"];


// *** Acceso Arrays ***

var lista: string[] = []; // Vacío
console.log(lista.length); // 0

lista.push("Alejandro", "Lora", "Gomez", "Aprendiendo"); // añadiendo varios valores con push
lista.push("Typescript"); // añadiendo un valor con push

console.log(lista.length); // 5

console.log(lista.pop()); // Borra el último elemento del array y lo devuelve => "Typescript"

console.log(lista.length); // 4

console.log(lista.shift()); // Borra el primer elemento del array y lo devuelve => "Alejandro"

console.log(lista.length); // 3

console.log(lista); // ["Lora", "Gomez", "Aprendiendo"]

console.log(lista[0]); // "Lora"

// console.log(lista[lista.length]); // Error!! length === 3

console.log(lista[lista.length - 1]); // Acceder al último valor => "Aprendiendo"

lista.splice(1, 1); // Borra desde el índice 1, y borra sólo 1 elemento

console.log(lista); // ["Lora", "Aprendiendo"]

var indiceDelElementoEncontrado = lista.indexOf("Aprendiendo");

console.log(indiceDelElementoEncontrado); // 1

console.log(lista.indexOf("akjdflkjfslkdjf")); // -1, que significa que no existe en la lista

lista.splice(indiceDelElementoEncontrado, 1); // Borra "Aprendiendo"

console.log(lista); // "Lora"


// *** Enumeradores ***

enum Color { Rojo, Azul, Verde }

var color: Color = Color.Rojo; // Puedo entender que el color será Rojo - contiene 0

var myColor: number = 0; // NO se que color será - contiene 0


// *** Any ***


var tipado: any; // Tipo dinámico en Typescript
tipado = 5;
tipado = true;


// *** Null vs Undefined ***

var alex1 = 1;
var alex2 = "1";
var alex3 = true;
var alex4 = [];
var alex5 = Color.Rojo;

alex1 = undefined;
alex2 = undefined;
alex3 = undefined;
alex4 = undefined;
alex5 = undefined;

alex1 = null;
alex2 = null;
alex3 = null;
alex4 = null;
alex5 = null;

var alex6 = undefined;

var alex7;
console.log(alex7);


// *** Operadores ***

// Igual que en otros lenguajes excepto el triple comparador
// === y !== que comparan contenido y tipo, en cambio la doble comparación
// o comparación simple == y != no comprueba el tipo

// Más info, visitar => file:///Users/alejandroloragomez/Desktop/ts-basic/src/index.html


// *** Sentencia If ***


var hombre = "Alejandro1";

// console.log("Buscando a Alejandro..");

// if (true) {
//     console.log("Lo encontré!");
// }


// *** Sentencia If Else ***

console.log("Buscando a Alejandro..");

if (hombre === "Alejandro") {
    console.log("Lo encontré!");
} else if (hombre === "Alejandro1") {
    console.log("Este no es el mismo Alejandro!");
} else {
    console.log("Sigo buscando...");
}


if (hombre === "Alejandro") {
    console.log("Lo encontré!");
}
if (hombre === "Alejandro1") {
    console.log("Este no es el mismo Alejandro!");
}

// *** Sentencia Switch ***

var resultado = 2;

switch(resultado) {
    case 1:
        console.log("Vale 1");
        break;
    case 2:
        console.log("Vale 2");
        break;
    case 3:
        console.log("Vale 3");
        break;
    default:
        console.log("No se encuentra!");
}


// *** Bucle For ***

var miLista = ["Alejandro", "Fernando", "Antonio"];

for(var i = 0; i < miLista.length; i++) {
    // console.log(miLista[i]);
}

// *** Bucle For Of ***

for(var nombre of miLista) {
    // console.log(nombre);
}

// *** Bucle For Each ***

miLista.forEach(function(nombre, index) {
    console.log(index + "- " + nombre);
})

// *** Bucle While ***

var condicionWhile = 0;

while(condicionWhile < 10) {
    console.log("estoy dentro");
    condicionWhile++;
}

while(condicionWhile < 10) {
    console.log("yijaa!");
    condicionWhile++;
}

// *** Bucle Do While ***

do {
    console.log("estoy dentro del do while!");
} while(condicionWhile < 10);


// *** TypeOf ***

if (typeof condicionWhile === "number"){
    console.log("Es un número");
}

// function test (){}

// console.log(typeof test);