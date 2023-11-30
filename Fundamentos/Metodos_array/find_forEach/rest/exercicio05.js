import { countries } from './countries.js';

const arrayOfCountries = countries;

/*
 * Desenvolva uma solução para percorrer o array countries e construir uma string para cada país com informações e formatação específicas. As propriedades são passadas como argumentos para a função buildString e adicionadas à string final. A string deverá ser construída com as propriedades name, capital, currencies.code e currencies.name separadas por um -.

Anguilla - The Valley - XCD - East Caribbean dollar
Brazil - Brasília - BRL - Brazilian Real
Canada - Ottawa - CAD - Canadian Dollar
China - Beijing - CNY - Chinese Yuan
France - Paris - EUR - Euro
India - New Delhi - INR - Indian Rupee
Mexico - Mexico City - MXN - Mexican Peso
Russia - Moscow - RUB - Russian Ruble
South Africa - Pretoria - ZAR - South African Rand
United States - Washington -  D.C. - USD - United States Dollar
 */

const buildString = (name, capital, ...properties) => {
	return `${name} - ${capital} - ${properties}`;
};

arrayOfCountries.forEach((c) => {
	const result = buildString(
		c.name,
		c.capital,
		c.currencies[0].code,
		c.currencies[0].name
	);
	console.log(result.split(',').join(' - '));
});
