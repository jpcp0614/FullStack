const sum = (a, b, callback) => {
	const result = a + b;
	return callback(result);
};

const showResult = (result) => `O resultado é: ${result}`;

console.log(sum(2, 3, showResult)); // O resultado é: 5
