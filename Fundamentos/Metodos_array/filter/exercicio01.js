/*
* O array de objetos people, contêm elementos que representam pessoas com as propriedades name e age. Utilize o método filter para filtrar as pessoas que têm a idade igual ou superior a 30.
*/

const people = [
	{ name: 'João', age: 25 },
	{ name: 'Maria', age: 30 },
	{ name: 'Pedro', age: 20 },
	{ name: 'Ana', age: 35 },
];

const result = people.filter(item => item.age >= 30);
console.log(result)