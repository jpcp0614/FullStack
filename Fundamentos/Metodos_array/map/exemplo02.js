const heroes = ['Homem-Aranha', 'Hulk', 'Batman', 'Homer Simpson'];
const weight = [64, 400, 95.3, 130.23];

const updateHeroes = (heroesArray, weightArray) =>
	heroesArray.map((hero, index) => ({ [hero]: weightArray[index] }));

const heroesList = updateHeroes(heroes, weight);
console.log(heroesList);
// [
//   { 'Homem-Aranha': 64 },
//   { Hulk: 400 },
//   { Batman: 95.3 },
//   { 'Homer Simpson': 130.23 }
// ]
