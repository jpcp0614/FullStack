const character = {
	nome: 'Luke SkyWalker',
	age: '53',
	description: {
		specieName: 'Human',
		jedi: true,
	},
	homeWorld: {
		name: 'Tatooine',
		population: '200000',
	},
};

const {
	nome,
	age,
	homeWorld: { name: planetName },
	description: { jedi },
} = character;

console.log(
	`Esse é o ${nome}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${
		jedi ? 'é um Jedi' : 'não é um Jedi'
	}.`
);