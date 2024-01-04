const data = require('../data/zoo_data');

const { employees, species } = data;

const animalId = (id) =>
  employees.find((item) => item.id === id).responsibleFor[0];

const specie = (id) => species.find((anim) => anim.id === animalId(id));

const oldSpecie = (id) =>
  specie(id)
    .residents.filter((idade) => idade.age)
    .sort((a, b) => b.age - a.age)[0];

function getOldestFromFirstSpecies(id) {
  return [...Object.values(oldSpecie(id))];
}

module.exports = getOldestFromFirstSpecies;
