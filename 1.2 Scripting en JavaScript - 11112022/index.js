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
//             document. -> es un atributo de javascript y el camel case es un atributo 
// snake_case - Pyton JavaScript
//              variables y funciones
// evento se le dice cuando se le hace un click a unelemento


parrafoinicial.onclick = function () {
    // accion();
    cambiandoDeColorAleatorio();
}

function accion () {
    // parrafoinicial.style.color="red";
    alert("Holi");
}

// creamos un array con strings con nombres de colores dentro de una funcion 
// Creamos una funciom para que nos de resultados aleatorios

function cambiandoDeColorAleatorio(){

    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ];
        // Colocamos el metodo florr para que nosde el indice del rango
        //Tenemos que multiplicar por colores . lenght que es lo que nos da el largo de nuestra array
            // porque el math nos da numeros aleatorio pero con decimales en 0.12312312412 y el math floor solo
            // redondea hacia abajo  
    parrafoinicial.style.color = colores[Math.floor(Math.random() * colores.length)];
    
}


