const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((employee) => employee.managers
      .includes(managerId))
      .map((manager) => `${manager.firstName} ${manager.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
