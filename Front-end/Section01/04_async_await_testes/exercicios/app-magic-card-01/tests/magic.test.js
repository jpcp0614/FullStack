import '../simulator/fetchSimulator.js';
import { getMagicCard } from '../src/magic.js';
import cardInfo from '../simulator/card.js';


describe('Testa a função getMagicCard', () => {
	it('Deve possuir a propriedade name com o valor Ancestor"s Chosen', async () => {
		const response = await getMagicCard('130550');
		const { name } = response;

		expect(name).toBe('Ancestor\'s Chosen');
	});

	it('Deve ser uma função', () => {
		expect(typeof getMagicCard).toBe('function');
	});

	it('A função fetch deve ser chamada com o argumento "130550"', async () => {
		await getMagicCard('130550');

		expect(fetch).toHaveBeenCalled();
	});
	
	it('A função fetch deve ser chamada com o argumento "130550", usando o endpoint "https://api.magicthegathering.io/v1/cards/130550"', async () => {
		const endpoint = 'https://api.magicthegathering.io/v1/cards/130550';
		await getMagicCard('130550');

		expect(fetch).toHaveBeenCalledWith(endpoint);
	});

	it('O retorno da função getMagicCard deve ser um objeto igual ao card', async () => {
		const response = await getMagicCard('130550');

		const { card } = cardInfo;

		expect(response).toEqual(card);

	});

	it('Deve retornar um error, com a mensagem "Id is not found!" ao passar "idDesconhecido"', async () => {
		const response = await getMagicCard('idDesconhecido');

		expect(response).toEqual(new Error('Id is not found!'))
	});
	
});
