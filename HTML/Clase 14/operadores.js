/* Operadores en JS */
 /* Utilizaremos los operadores en JS 
 * desarrollando los siguientes ejemplos:
 * Ejemplo de operaciones aritmeticas
 * Ejemplo de operadores de autoasignación
 * Ejemplo de operadores incrementales
 * Ejemplo de operadores relacionales
 * Ejemplo de operadores lógicos
*/

//declaracion e inicializacion de las variables//
let a = 15;
let b = 3;

//ejemplo de op aritmeticas//

// renderiza y crea  codigo HTML//
document.write("<h2>Operadores aritméticos + - * /</h2>");
document.write("<p>El valor de a+b es: "+(a+b)+"</p>");
document.write("<p>El valor de a/b es: "+(a/b)+"</p>");

// tarea practicar * - y **

// operadores de autoasignacion//
// a= a+5; a+=5

document.write("<p>El valor de a+b es: "+(a+b)+"</p>");
document.write("<p>El valor de a/b es: "+(a+=5)+"</p>");
document.write("<p>El valor de a/b es: "+(a= a*2)+"</p>");
document.write("<p>El valor de a/b es: "+(a- a*2)+"</p>");

// Operadores de autoasignación
// a = a+5; a+=5;
document.write("<h2>Operadores de autoasignacion</h2>");
document.write("<p>a = a + 5 : "+(a+=5)+"</p>");
// a = a*2;
document.write("<p>a = a * 2 es:" +(a*=2) +"</p>");
// a = a-2
document.write("<p> a = a - 2: "+(a-=2)+ "</p>");
// a = a/2
document.write("<p> El valor de a = a/2 es: "+(a/=2)+"</p>");

// Operador incremental unitario//
// a = a +1 ; a++  // esto es un post incremento
// ++a // esto es un pre incremento//

document.write("<h2>Operadores incrementales</h2>");
document.write("<p> a = a + 1 = a++ :  "+(a++)+"</p>"); //19
document.write("<p> a = a + 1 = ++a :  "+(++a)+"</p>");// 20
document.write("<p> a = a + 1 = a++ :  "+(a)+"</p>");// 21


// Variables y operadores booleanos
// declaraciones de variables booleanas

let v = true ; // true es una palabra reservada
let f = false; // falso es reservado

// operaciones relacionales//

console.log(3<10); // true
console.log(123 ==="123"); // false === compara valor y tipo
console.log(123 == "123"); // true
