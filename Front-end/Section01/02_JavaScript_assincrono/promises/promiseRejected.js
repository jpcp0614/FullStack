// função que gera número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10); // valores entre 0 e 10

// promise resolvida retornando o número aleatório
const resolvedPromise = () => {
	new Promise((_resolve, reject) => {
		setTimeout(() => {
			const randomNumber = generateRandomNumber();
			reject(new Error(`O número ${randomNumber} é inválido`));
		}, 1000);
	});
};

resolvedPromise();
