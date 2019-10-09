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
// Checks if the input is an object
   if (typeof pokemon === 'object')repository.push(pokemon);
 }

 function catchAll() {
   return repository;
 }

 return {
   add: add,
   catchAll: catchAll
 };
})();

pokemonRepository.catchAll().forEach(function(pokeList) {
 document.write('Name: ' + pokeList.name + ' Type: '
  + pokeList.type + ' Evolutionary Stage: ' + pokeList.stage + '<br>');
 if (pokeList.stage === 3) {
  document.write('Final Evolutionary Stage');
}
});

// Create a search function that allows access to Pokemon by name
// (Unfinished)
// var pokemonSearch = pokemonRepository.filter(function(pokeName);
