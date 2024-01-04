import { countries } from './countries.js';

const arrayOfCountries = countries;

//* Adicione a propriedade planet com o valor Earth em todos os países diretamente no array countries.

arrayOfCountries.forEach((p) => (p.planet = 'Earth'));

console.log(arrayOfCountries);
