import myFizzBuzz from './myFizzBuzz';

describe('Testa a função myFizzBuzz', () => {
	it('Verifica se, caso o número seja divisível por 3 e por 5, retorna "fizzbuzz"', () => {
		expect(myFizzBuzz(15)).toBe('fizzbuzz');
	});

	it('Verifica se, caso o número seja divisível por 3, retorna "fizz"', () => {
		expect(myFizzBuzz(9)).toBe('fizz');
	});

	it('Verifica se, caso o número seja divisível por 5, retorna "buzz"', () => {
		expect(myFizzBuzz(25)).toBe('buzz');
	});

	it('Verifica se, caso o número não seja divisível por 3 e nem por 5, retorna o próprio número', () => {
		expect(myFizzBuzz(14)).toBe(14);
	});

	it('Verifica se, caso a função não receba um número, retorna "false"', () => {
		expect(myFizzBuzz('10')).toBe(false);
	});
});
