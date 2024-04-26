/**
 * Autor/a
 * version
 * fercha
 * El siguiente script genera control de flujos mediante switch
 */

// 1- Declaracoin de las variables

let opc;

// 2- Inicializacion de la variable por istruccion de entrada prompt
opc = prompt("Bienvenido/a\nIngrese 1 si desea un saludo\nIngrese 2 si desea una despedida")

// 3- proceso mediante estructura de Switch

switch (opc) {
    case "1":
        document.write("<h1> Hola, que tengas una buena jornada");

    break;

    case "2":
        document.write("<h1> Adios!, que tengas una buena jornada");
    break;


    default:
        alert("Introduzca una opcion valida");
        break;
}
while (condition) {
    
}