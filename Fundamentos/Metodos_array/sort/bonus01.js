import { pokemons } from './pokemons.js';

const arrayOfPokemons = pokemons;

/*
 * Utilizando o método filter e object destructuring, crie uma função filterStrongPokemons que retorna um novo array contendo apenas os Pokemons com nível superior a 30.
 */

const filterStrongPokemons = (array) => array.filter(({ level }) => level > 30);

console.log(filterStrongPokemons(arrayOfPokemons));
