const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const employee = data.employees.find((e) =>
    e.firstName === employeeName || e.lastName === employeeName);

  return employee;
}

console.log(getEmployeeByName('Nelson'));

module.exports = getEmployeeByName;
