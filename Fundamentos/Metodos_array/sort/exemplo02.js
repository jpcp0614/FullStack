const products = [
	{ name: 'Notebook', price: 2500 },
	{ name: 'Celular', price: 1500 },
	{ name: 'TV', price: 3000 },
	{ name: 'Fones de ouvido', price: 100 },
	{ name: 'Lápis', price: 5 },
	{ name: 'Garrafa de Água', price: 80 },
	{ name: 'Borracha', price: 2 },
];


products.sort((a, b) => a.name.localeCompare(b.name));

console.log(products);
// [
//    { name: 'Borracha', price: 2 },
//    { name: 'Celular', price: 1500 },
//    { name: 'Fones de ouvido', price: 100 },
//    { name: 'Garrafa de Água', price: 80 },
//    { name: 'Lápis', price: 5 },
//    { name: 'Notebook', price: 2500 },
//    { name: 'TV', price: 3000 }
// ]
