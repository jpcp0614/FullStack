import '../simulator/fetchSimulator.js';
import { getMagicCard } from '../src/magic.js';
import { card } from '../simulator/card.js';

describe('Testa a função getMagicCard', () => {
	it('Deve possuir a propriedade name com o valor Ancestor"s Chosen', () => {
		const response = getMagicCard('130550');
		// implemente seus testes aqui
	});
});
