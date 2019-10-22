// Wraps repository within IIFE
var pokemonRepository = (function () {
 // Creates variable for index 'ul' with pokemonList class
 var $pokemonList = document.querySelector('.pokemonList');
 var repository = [];
 var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

// Adds new Pokemon to var repository
 function add(pokemon) {
   repository.push(pokemon);
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
   pokemonRepository.loadDetails(pokemon).then(function () {
     console.log(pokemon);
   });
 }

// Loading data from an external API
 function loadList() {
   return fetch(apiUrl).then(function (response) {
     return response.json();
   }).then(function (json) {
     json.results.forEach(function (item) {
       var pokemon = {
         name: item.name,
         detailsUrl: item.url
       };
       add(pokemon);
     });
   }).catch(function (e) {
     console.error(e);
   })
 }

 function loadDetails(item) {
   var url = item.detailsUrl;
   return fetch(url).then(function (response) {
     return response.json();
   }).then(function (details) {
     // Now we add details to the item
     item.imageUrl = details.sprites.front_default;
     item.height = details.height;
     item.types = Object.keys(details.types);
   }).catch(function (e) {
     console.error(e);
   });
 }

 return {
   add: add,
   catchAll: catchAll,
   addListItem: addListItem,
   search: search,
   loadList: loadList,
   loadDetails: loadDetails
 };
})();

// forEach Used To cycle through addListItem function properties
pokemonRepository.loadList().then(function() {
  // Now the data is loaded
  pokemonRepository.catchAll().forEach(function(pokeList) {
    pokemonRepository.addListItem(pokeList);
  });
});
