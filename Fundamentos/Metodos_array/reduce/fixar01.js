//* Faça uma função que some todos os números pares do array numbers usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvenNumbers = (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((acc, number) => (number % 2 === 0) ? acc + number : acc, 0)
}

console.log(sumEvenNumbers(numbers))