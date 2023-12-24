const data = require('../data/zoo_data');

const { employees, species } = data;

const employee = (obj) =>
  employees.find((item) => item.firstName === obj.name || item.lastName === obj.name);

const funcIds = (obj) => employee(obj).responsibleFor;

const funcSpecies = (obj) => {
  const ids = funcIds(obj);
  return ids.map((elem) => species.find((item) => item.id === elem).name);
};

const funcLocations = (obj) => {
  const ids = funcIds(obj);
  return ids.map((elem) => species.find((item) => item.id === elem).location);
};

function getEmployeesCoverage(obj) {
  const emp = employee(obj);
  const specs = funcSpecies(obj);
  const locations = funcLocations(obj);

  const fullName = `${emp.firstName} ${emp.lastName}`;

  return { id: emp.id, fullName, species: specs, locations };
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
