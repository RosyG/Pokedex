console.log('app.js');

//Ventajas de fetch, facilidad de lectura, es compatible con el navegador (no se baja libreria), convierte una colección de strings en JSON.
fetch("https://pokeapi.co/api/v2/pokedex/1/").
  then(response => {
//En la primera promesa se tiene la respuesta del API
    response.json().
    then(data => {
      console.log(data);
      drawPokemon(data)
    })
  });//Fin del uso de fetch.

let drawPokemon = (data) => {
  let array = data.pokemon_entries;
  let templateString = '';
  for (let infPokemon in array) {
    nameP = array[infPokemon].pokemon_species.name; //Accediendo al nombre del pokemon.
    srcP = array[infPokemon].pokemon_species.url; //Accediendo al src.
    /*
    <img src="${srcP}" alt="${nameP}">
    console.log(srcP);
    */
    templateString +=  `<li class="container-one-poke">
    <img src="${srcP}" alt="${nameP}">
    <span class="style-span">${nameP}</span>
    </li>`;
    console.log(templateString);
  }
  const responseContainer = document.querySelector("#response-container");
  console.log('ineerResponse');
  responseContainer.innerHTML = templateString;
}

/*
//Ventajas de fetch, facilidad de lectura, es compatible con el navegador (no se baja libreria), convierte una colección de strings en JSON.
fetch("https://pokeapi.co/api/v2/pokedex/1/").
  then(response => {
//En la primera promesa se tiene la respuesta del API
    response.json().
    then(data => {
      drawPokemon(data)
      console.log('exito de petición');
    })
  });//Fin del uso de fetch.


///////////////POR MEDIO DE DONE
$.ajax({
    url:"https://pokeapi.co/api/v2/pokedex/1/",
     success: data => {
       //console.log(data.pokemon_entries[0].pokemon_species.name);
       drawPokemon(data.pokemon_entries);
     }

}).done(drawPokemon(data));
//done es para cuando sea success, se ejecuta lo que se indica en parentesis. Por medio de promesa
*/
