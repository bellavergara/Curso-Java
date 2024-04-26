/**
 * Autor
 * version
 * fercha
 * El siguiente script sirve a index2.html y utiliza una accion repetitiva con bucle while
 */
// 1- Declaracion de las variables
let dato;

// Variable de control
let registrar;

// 2- Inicializacion de las variables
registrar = prompt("desea registrar datos?(s-n)");

// 3- Proceso mediante bucle while

while (registrar.toLocaleLowerCase()=== "s") {
    dato = prompt("Ingrese un dato")
    document.write("<p> Usted ingreso: "+dato+" </p>");
        
    document.write("Desea ingresar otro dato? (s-n)");
}
