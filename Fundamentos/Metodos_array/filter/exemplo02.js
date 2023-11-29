// Array de produtos no mercado
const products = [
	{ name: 'Maçã', category: 'Frutas', price: 2.5 },
	{ name: 'Leite', category: 'Laticínios', price: 3.0 },
	{ name: 'Pão', category: 'Padaria', price: 1.5 },
	{ name: 'Cenoura', category: 'Legumes', price: 1.0 },
	{ name: 'Queijo', category: 'Laticínios', price: 5.0 },
	{ name: 'Banana', category: 'Frutas', price: 2.0 },
];

//* filtrar somente os produtos que são frutas:

const frutas = products.filter(fruta => fruta.category === 'Frutas');
console.log(frutas);
