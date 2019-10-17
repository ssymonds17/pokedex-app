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
 } else { // If no, user sees this message below
   throw new Error('Invalid Pokemon input received')
 }
}
// Function used to return Pokemon object array
 function catchAll() {
   return repository;
 }
// Function to search repository for Pokemon
 function search(searchName) {
   repository.filter(function(pokemon) {
     if (pokemon.name === searchName) {
       return pokemon;
     }
  });
 }

 function addListItem(pokemon) {
   var listItem = document.createElement('li');
   var button = document.createElement('button');
   // Adds Pokemon name to text within button
   button.innerText = pokemon.name;
   // Adds a CSS class to button using classList.add method
   button.classList.add('pokemon-name');
   // Adds the button element to the 'li'
   listItem.appendChild(button);
   // Adds the 'li' to 'ul' with pokemonList class in index file
   $pokemonList.appendChild(listItem);
   // Calls showDetails function when button is clicked
   button.addEventListener('click', function(event) {
     showDetails(pokemon)
   });
 }
 // Logs selected Pokemon on console
 function showDetails(pokemon) {
   console.log(pokemon);
 }

 return {
   add: add,
   catchAll: catchAll,
   addListItem: addListItem,
   search: search
 };
})();

// forEach Used To cycle through addListItem function properties
pokemonRepository.catchAll().forEach(function(pokeList) {
 pokemonRepository.addListItem(pokeList);
});
