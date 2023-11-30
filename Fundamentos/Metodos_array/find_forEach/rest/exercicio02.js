import { countries } from './countries.js';

const arrayOfCountries = countries;

/*
* Para cada país, crie um objeto apenas com as informação do nome, código da moeda e nome da moeda. Essas informações devem ser armazenadas em um novo array. Faça esse exercício usando o método forEach, não vale map.

Exemplo:

{
  name: 'United States',
  currencyCode: 'USD',
  currencyName: 'United States Dollar',
}
*/

const newArray = [];

arrayOfCountries.forEach(info => {
  newArray.push({
    name: info.name,
    currencyCode: info.currencies[0].code,
    currencyName: info.currencies[0].name
  })
});

console.log(newArray);