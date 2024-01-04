import { countries } from './countries.js';

const arrayOfCountries = countries;


//* Crie a função getPopulation que retorne a quantidade total da população de todos os países.

const getPopulation = (array) => {
  return array.reduce((acc, pop) => acc + pop.population, 0)
};

console.log(getPopulation(arrayOfCountries));