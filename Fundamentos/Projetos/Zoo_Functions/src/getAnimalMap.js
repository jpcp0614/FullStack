const data = require('../data/zoo_data');

const { species } = data;

const noParams = () => {
  const obj = {};

  species.forEach((elem) => {
    const { location, name } = elem;
    if (!obj[location]) obj[location] = [];
    obj[location].push(name);
  });

  return obj;
};

function getAnimalMap(options) {
  if (!options) return noParams();
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
