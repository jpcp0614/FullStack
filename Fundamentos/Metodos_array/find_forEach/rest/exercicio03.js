import { countries } from './countries.js';

const arrayOfCountries = countries;

/*
* Escreva uma função chamada findCountry que recebe dois parâmetros: o array de países e o nome do país desejado. Ao receber esses valores, a função deve retornar o elemento do país desejado. Caso não seja encontrado, a função deve lançar um erro com a mensagem: “País não encontrado!”.
*/

const findCountry = (countries, name) => {
  const result = countries.find(c => c.name === name);

  if (!result) return 'País não encontrado!'

  return result;
};

console.log(findCountry(arrayOfCountries, 'Brazil'));