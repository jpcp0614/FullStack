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

const optionsParams = () => {
  const obj = {};

  species.forEach((elem) => {
    const { location, name, residents } = elem;
    if (!obj[location]) obj[location] = [];
    const resid = [...residents];
    const newResid = resid.map((item) => item.name);
    obj[location].push({ [name]: newResid });
  });
  return obj;
};

function getAnimalMap(options = {}) {
  const { includeNames } = options;
  if (includeNames) return optionsParams();

  return noParams();
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
