const generateRandomNumber = () => Math.round(Math.random() * 10); // valores entre 0 e 10

// const resolvedPromise = () => {
//   new Promise((resolve, _reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       resolve(randomNumber);
//     }, 1000);
//   }).then((response) => console.log(`O número é ${response}`));
// };

// resolvedPromise();

// const rejectPromise = () => {
// 	new Promise((_resolve, reject) => {
// 		setTimeout(() => {
// 			const randomNumber = generateRandomNumber();
// 			reject(new Error('Deu ruim!'));
// 		}, 1000);
// 	})
//   .then((response) => console.log(`O número é ${response}`))
//   .catch((err) => console.log(err))
// };

// rejectPromise();

const randomPromise = () => {
	new Promise((resolve, reject) => {
		setTimeout(() => {
			const randomNumber = generateRandomNumber();
			if (randomNumber % 2 === 0) {
				resolve(randomNumber);
			} else {
				reject(new Error(`Número inválido: ${randomNumber}`));
			}
		}, 1000);
	})
		.then((response) => {
			console.log(`Promise resolvida: ${response}`);
		})
		.catch((err) => {
			console.log(err.message);
		});
};

randomPromise();
