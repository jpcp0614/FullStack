import { pokemons } from './pokemons.js';

const arrayOfPokemons = pokemons;

/*
 * Utilizando o método sort e default destructuring, crie uma função chamada sortPokemons que retorna o array de Pokemons ordenado por nível em ordem decrescente. Caso dois Pokemons tenham o mesmo nível, a ordenação deve ser feita pelo nome em ordem alfabética crescente.
 */

const sortPokemons = (array) => {
	return array.sort(
		({ name: aName, level: aLevel }, { name: bName, level: bLevel }) => {
      if (aLevel === bLevel) {
        return aName.localeCompare(bName)
      } else {
        return bLevel - aLevel
      }
    }
	);
};

console.log(sortPokemons(arrayOfPokemons));
