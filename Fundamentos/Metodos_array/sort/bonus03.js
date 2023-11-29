import { pokemons } from './pokemons.js';

const arrayOfPokemons = pokemons;

/*
* Utilize o método sort para ordenar o array de Pokemons em ordem crescente com base no nível de cada Pokémon.
*/

arrayOfPokemons.sort((a, b) => a.level - b.level);

console.log(arrayOfPokemons);