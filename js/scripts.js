// Wraps repository within IIFE
var pokemonRepository = (function () {
 var repository = [
  {
    name: "Bulbasaur",
    type: ['Grass', ' Poison'],
    stage: 1
  },
  {
    name: "Ivysaur",
    type: ['Grass', ' Poison'],
    stage: 2
  },
  {
    name: "Venusaur",
    type: ['Grass', ' Poison'],
    stage: 3
  }
 ];
// Adds new Pokemon to var repository
 function add(pokemon) {
   var expectedProps = ['name', 'type', 'stage'];
// Checks if the input is an object
   if (typeof pokemon === 'object' && Object.keys(pokemon).join() ===
 expectedProps.join()) {
   repository.push(pokemon);
 } else {
   throw new Error('Invalid Pokemon input received')
 }
}

 function catchAll() {
   return repository;
 }

 function addListItem(pokemon) {
   var listItem = document.createElement('li');
   var button = document.createElement('button');
   button.innerText = pokemon.name;
   button.classList.add('pokemon-name');
   listItem.appendChild(button);
   $pokemonList.appendChild(listItem);
 }

 return {
   add: add,
   catchAll: catchAll,
   addListItem: addListItem
 };
})();

pokemonRepository.catchAll().forEach(function(pokeList) {
 pokemonRepository.addListItem(pokeList);
});

// Create a search function that allows access to Pokemon by name
// Unsure whether searchName needs to be within ""
var pokemonSearch = pokemonRepository.catchAll().filter(function(pokemon) {
  return pokemon.name === searchName;
});
