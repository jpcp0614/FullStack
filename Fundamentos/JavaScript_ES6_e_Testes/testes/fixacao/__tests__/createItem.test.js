import createItem from '../createItem';

describe('a função createItem', () => {
	it('cria um item válido', () => {
		const newItem = createItem('banana', 'kg', 1.99, 20);
		const objResult = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };

		expect(newItem).toEqual(objResult);
	});

	it('utiliza zero como quantidade padrão', () => {
		const newItemWithQuantityZero = createItem('banana', 'kg', 1.99);
		const objResult = { name: 'banana', unit: 'kg', price: 1.99, quantity: 0 };

		expect(newItemWithQuantityZero).toEqual(objResult);
	});

	it('Lança um erro quando não recebe parâmetros', () => {
		expect(() => createItem()).toThrow();
	});

	it('Lança um erro se o nome do item não é uma string', () => {
		expect(() => createItem([], 'kg', 'banana', 20)).toThrow(
			'O nome do item deve ser uma string'
		);
	});

	it('Lança um erro se o preço é negativo', () => {
		expect(() => createItem('banana', 'kg', -1.99, 20)).toThrow(
			'O preço do item deve ser maior que zero'
		);
	});

	it('Lança um erro se o preço é zero', () => {
		expect(() => createItem('banana', 'kg', 0, 20)).toThrow();
	});
});
