// função que gera número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10); // valores entre 0 e 10

// promise resolvida retornando o número aleatório
const resolvedPromise = () => {
  new Promise((resolve, _reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
      console.log(randomNumber);
    }, 1000);
  });
};

resolvedPromise();