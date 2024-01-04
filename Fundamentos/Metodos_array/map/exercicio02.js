const numbers = [4, 9, -1, 16, -5, 25];

const result = numbers.map(number => {
  if (number < 0) NaN
  return number ** 0.5;
});

console.log(result)