import { countries } from './countries.js';

const arrayOfCountries = countries;


//* Crie uma função chamada getLargestCountriesByRegion que retorna um objeto contendo os países com a maior área em cada região. O objeto de retorno deve ter a seguinte estrutura:

const getLargestCountriesByRegion = (array) => {
  const result =  array.reduce((acc, country) => {
    if (!acc[country.region]) {
      acc[country.region] = { name: country.name, area: country.area }
    }
    return acc;
  }, {});
  return result;
}

console.log(getLargestCountriesByRegion(arrayOfCountries));