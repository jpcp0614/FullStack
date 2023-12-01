import { countries } from './countries.js';

const arrayOfCountries = countries;


//* Crie uma função chamada totalAreaByRegion que recebe um parâmetro opcional region com o valor padrão ‘Europe’. Essa função calcula e retorna a área total de todos os países de uma determinada região.

const totalAreaByRegion = (array, region = 'Europe') => {
  return array.reduce((acc, cur) => cur.region === region ? acc + cur.area : acc, 0);
};

console.log(totalAreaByRegion(arrayOfCountries));