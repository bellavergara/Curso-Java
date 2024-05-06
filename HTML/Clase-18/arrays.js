/**
 * DESAFIO 1
 * Declaramos un array
 * Exploramos los distintos métodos
 * create(crear), read(leer), upload(actualizar), delete(borrar)
 */
let autos = ["Tito"," F.Fuego"];

// 2- Inpresion del array

console.log(("El array de autos es:" + autos));

// 3- Metodos del array
// Insertamos valores en el array.push()

autos.push("volvo");
console.log("El array autos es:" +autos);

//4- Obtenemos la longuitud del array .length

let longitud = autos.length;
console.log("La longitud de autos es:" +longitud);

// 5- Para inspeccionar o leer un Indice particular utilizamos .at()

console.log("El elemento del indice 3 es:" +autos.at(3));
console.log("EL indice del ultimo elemento es:" +autos.at(-1));

//6- Para saber el Indice de un elemento utilizamos .indexOF()

console.log("El indice del ultimo elemento es :" +autos.indexOf("volvo"))

//7- Borramos elementos del array con Splice()
console.log("Eliminamos el indice 2 :" +autos.splice(2,1));
//8- 0rdenamos con .sort()

console.log(autos,sort());

//9-  Agregamos datos al principio .unshitft()
autos.unshift("Tesla");
console.log("El array autos : es " +autos);

//10- 

for(let i=0; i<5 ; i++){

}

// For-in

for(let i in  autos){
console.log(i+ "valor : " +autos[i]);
}

//11 For-of
for(let dato of autos){
    console.log(dato);
}
