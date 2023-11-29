//* Passar argumentos para funções

const sumNumbers = (num1, num2, num3) => num1 + num2 + num3;

const numbers = [1, 2, 3];
const result = sumNumbers(...numbers);

console.log(result); // 6