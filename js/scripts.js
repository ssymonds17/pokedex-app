var repository = [
  {
    name: "Bulbasaur",
    type: ['grass', 'poison'],
    stage: 1
  },
  {
    name: "Ivysaur",
    type: ['grass', 'poison'],
    stage: 2
  },
  {
    name: "Venusaur",
    type: ['grass', 'poison'],
    stage: 3
  }
];

for (var i = 0; i < repository.length; i++) {
  document.write("<br>" + repository[i].name + "<br>");
  if (i < repository.length && repository[i].stage === 3) {
    document.write('Final Evolutionary Stage');
  }
}
