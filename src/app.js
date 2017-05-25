var variable1;
variable1 = "Alejandro";
var nombre;
nombre = "Alejandro";
variable1 = true;
var tipoBooleano = false;
var tipoNumberInt = 0;
var tipoNumberDouble = 0.234234234;
var tipoString = "Alejandro";
var tipoArrayNumber = [1, 2, 3];
var tipoArrayString = ["1", "2", "3"];
var tipoArrayString2 = ["1", "2", "3"];
var lista = [];
console.log(lista.length);
lista.push("Alejandro", "Lora", "Gomez", "Aprendiendo");
lista.push("Typescript");
console.log(lista.length);
console.log(lista.pop());
console.log(lista.length);
console.log(lista.shift());
console.log(lista.length);
console.log(lista);
console.log(lista[0]);
console.log(lista[lista.length - 1]);
lista.splice(1, 1);
console.log(lista);
var indiceDelElementoEncontrado = lista.indexOf("Aprendiendo");
console.log(indiceDelElementoEncontrado);
console.log(lista.indexOf("akjdflkjfslkdjf"));
lista.splice(indiceDelElementoEncontrado, 1);
console.log(lista);
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Azul"] = 1] = "Azul";
    Color[Color["Verde"] = 2] = "Verde";
})(Color || (Color = {}));
var color = Color.Rojo;
var myColor = 0;
var tipado;
tipado = 5;
tipado = true;
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
var hombre = "Alejandro1";
console.log("Buscando a Alejandro..");
if (hombre === "Alejandro") {
    console.log("Lo encontré!");
}
else if (hombre === "Alejandro1") {
    console.log("Este no es el mismo Alejandro!");
}
else {
    console.log("Sigo buscando...");
}
if (hombre === "Alejandro") {
    console.log("Lo encontré!");
}
if (hombre === "Alejandro1") {
    console.log("Este no es el mismo Alejandro!");
}
var resultado = 2;
switch (resultado) {
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
var miLista = ["Alejandro", "Fernando", "Antonio"];
for (var i = 0; i < miLista.length; i++) {
}
for (var _i = 0, miLista_1 = miLista; _i < miLista_1.length; _i++) {
    var nombre = miLista_1[_i];
}
miLista.forEach(function (nombre, index) {
    console.log(index + "- " + nombre);
});
var condicionWhile = 0;
while (condicionWhile < 10) {
    console.log("estoy dentro");
    condicionWhile++;
}
while (condicionWhile < 10) {
    console.log("yijaa!");
    condicionWhile++;
}
do {
    console.log("estoy dentro del do while!");
} while (condicionWhile < 10);
if (typeof condicionWhile === "number") {
    console.log("Es un número");
}
//# sourceMappingURL=app.js.map