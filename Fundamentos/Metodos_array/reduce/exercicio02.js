import { countries } from './countries.js';

const arrayOfCountries = countries;


//* Crie a função longestName que deve retornar o país com o maior nome.

const longestName = (array) => {
  return array.reduce((acc, country) => acc.name.length > country.name.length ? acc : country)
};

console.log(longestName(arrayOfCountries));