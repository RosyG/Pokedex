const form = document.querySelector("#search");
const namePoke = document.querySelector("#name-poke");
const responseContainer = document.querySelector("#response-container");
const buttonSearch = document.querySelector("#btn-search");
let searchText;

//const API_ENDPOINT_ALL_INF = "https://pokeapi.co/api/v2/pokedex/1/"; //Contiene la dirección de la API
const API_ENDPOINT_ALL_INF = "https://pokeapi.co/api/v2/pokemon/"; //Contiene la dirección de la API
form.addEventListener('submit', function(e){
  e.preventDefault();
  responseContainer.innerHTML='';
  searchText = namePoke.value;
  getAllPoke();
})


function getAllPoke() {
  //Función que se conecta a la API.
  const allInfRequest = new XMLHttpRequest();
  allInfRequest.open('GET', API_ENDPOINT_ALL_INF);
  allInfRequest.onload = hadleSuccess;
  allInfRequest.onerror = hadlError;
  allInfRequest.send();//Envío de petición.
}

function hadleSuccess(){
  console.log("this.responseText");
  let dataPoke = JSON.parse(this.responseText);
  console.log(dataPoke.results);
  painPokemon(dataPoke.results);
}
function hadlError(){
    alert('Ooooops!')
}

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
