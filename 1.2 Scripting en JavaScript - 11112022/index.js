const parrafoinicial = document.getElementById("parrafoInicial");

console.log(parrafoinicial);
/*
Tipos de Datos
var: Este puede modificarse despues de declararse y tiene scope global (JavaScript no sabe que tipo de dato
    vas a guardar por tanto te asigna un espacio grande) - NO SE RECOMIENDA
let: Este se puede modificar, pero tiene Scope limitado, en cuanto se sale del ambito de donde esta
actuando LET se muere, esto hace  que nos de mas espacio - Recomendada
const: No modificable, Scope global


*/

// Cases

// pascalCase - va a ser usado para nombres de Clases - JAVA
// camelCase - va a ser usado para variables, funciones y atributos - JavaScript
//          variable -> parrafoinicial =
//            funcion -> parrafoInicial()
//            atributo -> parrafoInicial
// snake_case - Pyton JavaScript
//              variables y funciones

// parrafoinicial.onclick = function () {
//     accion();
// }

// function accion () {
//     parrafoinicial.style.color="red";
// }

parrafoinicial.onclick = function () {
    cambiaColorAleatorio();
}

function cambiaColorAleatorio (){

    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ]  
    parrafoinicial.style.color = colores[]
};

