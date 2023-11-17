//* map

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => number ** 2);

console.log(squaredNumbers); // [ 1, 4, 9, 16, 25 ]


//* for
const numbers2 = [1, 2, 3, 4, 5];
const squaredNumbers2 = [];

for (let index = 0; index < numbers2.length; index += 1) {
	squaredNumbers2.push(numbers[index] ** 2);
}

console.log(squaredNumbers2);
