import { mapString, encode, decode } from './encodeDecode';

describe('Testa as funções encode e decode', () => {
	it('Verifica se a função encode está definida', () => {
		expect(encode).toBeDefined();
	});

	it('Verifica se encode é uma função', () => {
		expect(typeof encode).toBe('function');
	});

	it('Verifica se a função encode está definida', () => {
		expect(encode).toBeDefined();
	});

	it('Verifica se decode é uma função', () => {});
	expect(typeof decode).toBe('function');
});

describe('Testa somente a função encode', () => {
	it('Verifica se a vogal "a" é convertida no número "1", respectivamente', () => {
		expect(encode('ana')).toEqual('1n1');
	});

  it('Verifica se a vogal "e" é convertida no número "2", respectivamente', () => {
		expect(encode('peter')).toEqual('p2t2r');
	});

  it('Verifica se a vogal "i" é convertida no número "3", respectivamente', () => {
		expect(encode('lili')).toEqual('l3l3');
	});

  it('Verifica se a vogal "o" é convertida no número "4", respectivamente', () => {
		expect(encode('ovo')).toEqual('4v4');
	});

  it('Verifica se a vogal "u" é convertida no número "5", respectivamente', () => {
		expect(encode('tutu')).toEqual('t5t5');
	});

  it('Verifica se, ao usar a palavra "xablau", a quantidade de caracteres será igual a 6', () => {
		expect(encode('xablau').length).toEqual(6);
	});
});

describe('Testa somente a função decode', () => {
	it('Verifica se o número "1" é convertido na vogal "a", respectivamente', () => {
    expect(decode('1n1')).toEqual('ana');
  });

  it('Verifica se o número "2" é convertido na vogal "e", respectivamente', () => {
		expect(decode('l2l2')).toEqual('lele');
	});

  it('Verifica se o número "3" é convertido na vogal "i", respectivamente', () => {
		expect(decode('l3l3')).toEqual('lili');
	});

  it('Verifica se o número "4" é convertido na vogal "o", respectivamente', () => {
		expect(decode('4v4')).toEqual('ovo');
	});

  it('Verifica se o número "5" é convertido na vogal "u", respectivamente', () => {
		expect(decode('t5t5')).toEqual('tutu');
	});

  it('Verifica se, ao usar a palavra "x1bl15", a quantidade de caracteres será igual a 6', () => {
		expect(decode('x1bl15').length).toEqual(6);
	});
});
