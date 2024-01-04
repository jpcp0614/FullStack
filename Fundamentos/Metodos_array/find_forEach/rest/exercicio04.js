import { countries } from './countries.js';

const arrayOfCountries = countries;

/*
 * Desenvolva uma função que crie uma cópia do array countries e adicione a Alemanha a esse novo array através do spread operator.
 */

const newCountry = {
	name: 'Germany',
	region: 'Europe',
	currencies: [{ code: 'EUR', name: 'Euro' }],
	capital: 'Berlin',
	population: 83190556,
	area: 357386,
};

const addNewCountry = (newCountry) => {
  return [...arrayOfCountries, newCountry];
}

console.log(addNewCountry(newCountry))