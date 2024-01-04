/*
* Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.
*/

const people = [
	{ name: 'Mateus', age: 18 },
	{ name: 'José', age: 16 },
	{ name: 'Ana', age: 23 },
	{ name: 'Cláudia', age: 20 },
	{ name: 'Bruna', age: 19 },
];

// Adicione seu código aqui
// people.sort((a, b) => a.age - b.age) // crescente

people.sort((a, b) => b.age - a.age) // decrescente

console.log(people);