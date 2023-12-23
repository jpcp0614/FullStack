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

const optionsParams = (sorted, sex) => {
  const obj = {};

  species.forEach((elem) => {
    const { location, name, residents } = elem;
    let resid = [...residents];
    verifyObject(obj, location);
    if (sex) resid = residents.filter((item) => item.sex === sex);

    if (sorted) return animalsSorted(obj, location, name, resid);
    namesInclude(obj, location, name, resid);
  });
  return obj;
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (includeNames) return optionsParams(sorted, sex);

  return noParams();
}

module.exports = getAnimalMap;
