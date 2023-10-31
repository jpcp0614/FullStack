// Exemplo A

const sumA = (value1, value2) => value1 + value2;

//console.log('Exemplo 1: 2 + 4 =', sumA(2, 4));
//console.log('Exemplo 2: 2 + "4" =', sumA(2, '4'));

// Exemplo B

const sumB = (value1, value2) => {
	if (typeof value1 !== 'number' || typeof value2 !== 'number') {
		return 'Os valores devem ser numéricos!';
	}
  return value1 + value2;
};

//console.log('Exemplo 1: 2 + 4 =', sumB(2, 4));
//console.log('Exemplo 2: 2 + "4" =', sumB(2, '4'));

// Exemplo C

const sumC = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
		throw new Error('Os valores devem ser numéricos!');
	}
	return value1 + value2;
};

//console.log('Exemplo 1: 2 + 4 =', sumC(2, 4));
console.log('Exemplo 2: 2 + "4" =', sumC(2, '4'));