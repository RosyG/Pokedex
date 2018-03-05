$(document).ready(function() {
    fetch("https://pokeapi.co/api/v2/pokemon-form/").
  then(response => {
    //En la primera promesa se tiene la respuesta del API
    response.json().
    then(data => {
      drawPokemon(data)
      console.log('exito de petición');
    })
  });//Fin del uso de fetch.
});


let drawPokemon = (data) => {
  let templateString = '';
  console.log(data);
  let results = data.results;
  console.log(results);
  for (var i = 0; i < results.length; i++) {
    let namePokemon = results[i].name;
    let descriptionPokemon = results[i].url;

    console.log(namePokemon);
    console.log(descriptionPokemon);
    templateString +=  `<li class="container-one-poke">
    <img src="${descriptionPokemon}" alt="${namePokemon}">
    <span class="style-span">${namePokemon}</span>
    </li>`;
  }

  const responseContainer = document.querySelector("#response-container");
  responseContainer.innerHTML = templateString;//Pintando template en HTML.


/*
  let array = data.pokemon_entries;
  let templateString = '';
  for (var i = 0; i < 5; i++) {
    array[i]
    console.log(array[i]);
    nameP = array[i].pokemon_species.name; //Accediendo al nombre del pokemon.
    srcP = array[i].pokemon_species.url; //Accediendo al src.

     $.getJSON(srcPoke, response => data.selectedPokemon = response)
    templateString +=  `<li class="container-one-poke">
    <img src="#" alt="name del pokemon">
    <span class="style-span">${nameP}</span>
    </li>`;
    //console.log(templateString);
  }
  /*
  for (let infPokemon in array) {
    nameP = array[infPokemon].pokemon_species.name; //Accediendo al nombre del pokemon.
    srcP = array[infPokemon].pokemon_species.url; //Accediendo al src.

    //<img src="${srcP}" alt="${nameP}">
    //console.log(srcP);

    templateString +=  `<li class="container-one-poke">
    <img src="${srcP}" alt="${nameP}">
    <span class="style-span">${nameP}</span>
    </li>`;
    //console.log(templateString);
  }
  */
  /*
  const responseContainer = document.querySelector("#response-container");
  responseContainer.innerHTML = templateString;//Pintando template en HTML.
  */
}//Fin de función drawPokemon()


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
