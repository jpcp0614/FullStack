import '../simulator/fetchSimulator.js';
import { getMagicCard } from '../src/magic.js';
import { card } from '../simulator/card.js';

describe('Testa a função getMagicCard', () => {
	it('Deve possuir a propriedade name com o valor Ancestor"s Chosen', async () => {
		const response = await getMagicCard('130550');
		// implemente seus testes aqui
	});
});
