import removeItem from './removeItem';

describe('Testa a função removeItem', () => {
	it('Verifica se a chamada removeItem([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifica se a chamada removeItem([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
		expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
	});

  it('Verifica se a chamada removeItem([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
		expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
	});
});
