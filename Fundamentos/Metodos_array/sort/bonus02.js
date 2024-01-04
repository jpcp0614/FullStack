import { pokemons } from './pokemons.js';

const arrayOfPokemons = pokemons;

/*
 * Utilizando os métodos filter e map encadeados, crie uma função getStrongPokemonNames que retorna um novo array contendo apenas os nomes dos Pokemons com nível superior a 50.
 */

const getStrongPokemonNames = (array) =>
	array.filter(({ level }) => level > 50).map((pokemon) => pokemon.name);

console.log(getStrongPokemonNames(arrayOfPokemons));
