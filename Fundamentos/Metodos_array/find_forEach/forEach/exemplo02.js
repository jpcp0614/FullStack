const products = [
	{ product: 'T-shirt', price: 30 },
	{ product: 'Pants', price: 50 },
	{ product: 'Socks', price: 10 },
	{ product: 'Sneakers', price: 80 },
	{ product: 'Jacket', price: 100 },
	{ product: 'Cap', price: 20 },
	{ product: 'Shorts', price: 35 },
	{ product: 'Shoes', price: 60 },
];

const calcTax = (tax) => {
	products.forEach((product) => {
		product.totalPrice = (product.price * (tax / 100 + 1)).toFixed(2);
	});
};

calcTax(10);

console.log(products);
