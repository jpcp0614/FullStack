const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }

  const { residents } = data.species.find((spec) => spec.name === animal.specie);

  return (!animal.sex)
    ? residents.length : residents.filter((item) => item.sex === animal.sex).length;
}

console.log(countAnimals());

console.log(countAnimals({ specie: 'penguins' }));

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
