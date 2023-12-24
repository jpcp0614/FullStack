const data = require('../data/zoo_data');

const { employees, species } = data;

const employeeName = (obj) => employees.find((item) => item
  .firstName === obj.name || item.lastName === obj.name);

const employeeId = (obj) => employees.find((item) => item.id === obj.id);

const employee = (obj) => {
  if (obj.name) return employeeName(obj);
  if (obj.id) return employeeId(obj);
};

const error = (obj) => {
  if (!employee(obj)) throw new Error('Informações inválidas');
};

const funcIds = (obj) => employee(obj).responsibleFor;

const funcSpecies = (obj) => {
  const ids = funcIds(obj);
  return ids.map((elem) => species.find((item) => item.id === elem).name);
};

const funcLocations = (obj) => {
  const ids = funcIds(obj);
  return ids.map((elem) => species.find((item) => item.id === elem).location);
};

const buildEmployee = (obj) => {
  error(obj);
  const emp = employee(obj);
  const specs = funcSpecies(obj);
  const locations = funcLocations(obj);

  const fullName = `${emp.firstName} ${emp.lastName}`;

  return { id: emp.id, fullName, species: specs, locations };
};

const noParams = () => {
  const array = [];
  employees.forEach((item) => array.push(buildEmployee({ id: item.id })));
  return array;
};

function getEmployeesCoverage(obj) {
  return (!obj) ? noParams() : buildEmployee(obj);
}

module.exports = getEmployeesCoverage;
