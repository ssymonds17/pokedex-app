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

repository.forEach(function(repository) {
  document.write('Name: ' + repository.name + ' Type: '
  + repository.type + ' Evolutionary Stage: ' + repository.stage + '<br>');
 if (repository.stage === 3) {
  document.write('Final Evolutionary Stage');
}
});
