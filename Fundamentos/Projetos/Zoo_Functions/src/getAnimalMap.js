const data = require('../data/zoo_data');

const { species } = data;

const verifyObject = (obj, e) => {
  // eslint-disable-next-line no-param-reassign
  if (!obj[e]) obj[e] = [];
};

const noParams = () => {
  const obj = {};

  species.forEach((elem) => {
    const { location, name } = elem;
    verifyObject(obj, location);
    obj[location].push(name);
  });

  return obj;
};

const animalsResidents = (resid) => resid.map((item) => item.name);

const animalsResidentsSort = (resid) => resid.map((item) => item.name).sort();

const animalsSorted = (...opts) => {
  const [obj, location, name, resid] = opts;
  obj[location].push({ [name]: animalsResidentsSort(resid) });
};

const namesInclude = (...opts) => {
  const [obj, location, name, resid] = opts;
  obj[location].push({ [name]: animalsResidents(resid) });
};

const optionsParams = (sorted) => {
  const obj = {};

  species.forEach((elem) => {
    const { location, name, residents } = elem;
    const resid = [...residents];
    verifyObject(obj, location);
    if (sorted) return animalsSorted(obj, location, name, resid);
    return namesInclude(obj, location, name, resid);
  });
  return obj;
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted } = options;
  if (includeNames) return optionsParams(sorted);

  return noParams();
}

console.log(getAnimalMap({ includeNames: true, sorted: true }));

module.exports = getAnimalMap;
