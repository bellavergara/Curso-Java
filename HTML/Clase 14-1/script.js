/**
 * Autor
 * version
 * fercha
 * El siguiente script genera control de flujos
 */

// 1- declaracion de las variables

let usr;
let clave;

// 2- Inicializacion de las variables por instruccion de entrada promtt()//
usr = prompt("Por favor ingrese el usuario o email validos");
clave = prompt("Por favor ingrese su contraseña");

// 3 Proceso de validacion mediante la estructura if-else

if (usr === "codo" && clave === "123") {
    document.write("<h2> Ingreso exitoso</h2>")
} else {
    alert("Usuario o clave incorrectos");
}