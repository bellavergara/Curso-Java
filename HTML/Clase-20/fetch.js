// ejemplo de codigo Sincronico 
/* console.log("esto imprime primero");
console.log("esto se imprime segundo");
*/

// ejemplo de codigo asincronico
console.log("esto imprime primero");
setTimeout(function(){console.log("esto se imprime ultimo")},5000);
console.log("esto imprime ultimo");

// Fetch
// una promesa es algo que esperamos a que se cumpla
// al no cargar el segundo parametro, por defecto se hace una peticion GET

fetch("https://rickandmortyapi.com/api/character/1")
// el primer .then recibe la cadena string (json) y la predispone a transformar a objeto.
// .then recibe como parametro una funcion con su propio parametro
.then(function(respuesta){
    // dentro del cuerpo de la funcion transformamos el objetoo JSON
    return respuesta.json();

})
.then(function(datos) {
console.log(datos.name,datos.image);
})
.catch(function(error){
    console.log(error);
})

// declaramos una function para renderizar elementos del DOM 
// actividad realizada en clases

function pedirDatos(){
    fetch("https://rickandmortyapi.com/api/character")
    .then(function(respuesta){
        return respuesta.json();
    })

    .then(function(personajes){
        const contenedor = document.getElementById("contenedor-tarjetas");
    

    personajes.results.forEach(function(dato){
    //Creamos el elemento html
    const article = document.createElement('article');
    //Agregamos estilo a article
    article.classList.add("tarjeta");
//Inyectamos contenido a <article>
    article.innerHTML = `
    <img src="${dato.image}" alt="Imagen del personaje ${dato.name}" class="card_img-size">
    <label>Nombre:</label>
    <p>${dato.name}</p>
    <div>
      <label>Estado:</label>
      <p><i class="fa-solid fa-circle ${dato.status.toLowerCase()}"></i>${dato.status}</p>
      <label>Planeta:</label>
      <p>${dato.location.name}</p>
    </div>
`
    //Adjuntamos el contenido 
    contenedor.appendChild(article);
})
})
.catch(function(error){
    console.error(error);
})
}
pedirDatos()
