const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((item) => item.age < 18).length;
  const adult = entrants.filter((item) => item.age >= 18 && item.age < 50).length;
  const senior = entrants.filter((item) => item.age >= 50).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const age = countEntrants(entrants);
  const children = age.child * data.prices.child;
  const adults = age.adult * data.prices.adult;
  const seniors = age.senior * data.prices.senior;
  const totalPrice = children + adults + seniors;

  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
