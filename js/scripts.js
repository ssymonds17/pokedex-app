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

repository.forEach(function(pokeList) {
  document.write('Name: ' + pokeList.name + ' Type: '
  + pokeList.type + ' Evolutionary Stage: ' + pokeList.stage + '<br>');
 if (pokeList.stage === 3) {
  document.write('Final Evolutionary Stage');
}
});
