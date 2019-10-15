// Wraps repository within IIFE
var pokemonRepository = (function () {
  // Creates variable for index 'ul' with pokemonList class
 var $pokemonList = document.querySelector('.pokemonList');
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
// Checks if the input is an object and keys are as expected
   if (typeof pokemon === 'object' && Object.keys(pokemon).join() ===
 expectedProps.join()) {
   repository.push(pokemon); // If yes, push new Pokemon
 } else {
   throw new Error('Invalid Pokemon input received') // If no, user sees this message
 }
}

 function catchAll() { // Function used to return Pokemon object array
   return repository;
 }

 function addListItem(pokemon) {
   var listItem = document.createElement('li');
   var button = document.createElement('button');
   button.innerText = pokemon.name; // Adds Pokemon name to text within button

   button.classList.add('pokemon-name'); // Adds a CSS class to button using classList.add method

   listItem.appendChild(button); // Adds the button element to the 'li'

   $pokemonList.appendChild(listItem); // Adds the 'li' to 'ul' with pokemonList class in index file

   button.addEventListener('click', function(pokemon) { // Calls showDetails function when button is clicked
     showDetails(pokemon)
   });
 }

 function showDetails(pokemon) { // Logs selected Pokemon on console
   console.log(pokemon);
 }

 return {
   add: add,
   catchAll: catchAll,
   addListItem: addListItem
 };
})();

// forEach Used To cycle through addListItem function properties
pokemonRepository.catchAll().forEach(function(pokeList) {
 pokemonRepository.addListItem(pokeList);
});

// Create a search function that allows access to Pokemon by name
// Unsure whether searchName needs to be within ""
var pokemonSearch = pokemonRepository.catchAll().filter(function(pokemon) {
  return pokemon.name === searchName;
});
