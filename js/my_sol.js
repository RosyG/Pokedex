
const form = document.querySelector("#search");
const namePoke = document.querySelector("#name-poke");
const responseContainer = document.querySelector("#response-container");
const buttonSearch = document.querySelector("#btn-search");
let searchText;

//const API_ENDPOINT_ALL_INF = "https://pokeapi.co/api/v2/pokedex/1/"; //Contiene la dirección de la API
const API_ENDPOINT_ALL_INF = "https://pokeapi.co/api/v2/pokemon/"; //Contiene la dirección de la API
const API_ENDPOINT_INDIVIDUAL_INF = "https://pokeapi.co/api/v2/pokemon-species/1/"; //Contiene la dirección de la API

$(document).ready(function() {
  getAllPoke();
});


function getAllPoke() {
  fetch("https://pokeapi.co/api/v2/pokemon/").
  then(response => {
    //En la primera promesa se tiene la respuesta del API
    response.json().
    then(data => {
      painPokemon(data)
      console.log('exito de petición');
    })
  });//Fin del uso de fetch.

}

/*
function hadleSuccess(){
  console.log("this.responseText");
  let dataPoke = JSON.parse(this.responseText);
  console.log(dataPoke.results);
  painPokemon(dataPoke.results);
}
function hadlError(){
    alert('Ooooops!')
}

*/
function painPokemon(data) {
  let name = '';
  let src ='';
  clearContent();
  let templateString = '';
  for (let content in data) {
    nameP = data[content].name; //Accediendo al nombre del pokemon.
    srcP = data[content].url; //Accediendo al src.
/*
    <img src="${srcP}" alt="${nameP}">
    console.log(srcP);
*/
    templateString +=  `<li class="container-one-poke">
                          <img src="https://dummyimage.com/250x250/000000/00f2ff" alt="${nameP}">
                          <span class="style-span">${nameP}</span>
                      </li>`;
    console.log(templateString);
  }
  responseContainer.innerHTML = templateString;
}
function clearContent() {
  $('#response-container').empty();//Borrando el contenedor para evitar repeticiones.

}
