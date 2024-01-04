const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const resultAnimal = data.species.find((specie) => specie.name === animal);

  return resultAnimal.residents.every((a) => a.age > age);
}

module.exports = getAnimalsOlderThan;
