import favoriteCards from '../data/favoriteCards.js';
import saveFavoriteMagicCard from '../src/magic.js';

const retrievesFavoriteCards = () => {
  // implemente sua função aqui
}

describe(' Testa a função saveFavoriteMagicCard', () => {
  it('Testa se um novo card é adicionado a cada execução', async () => {
    // expect.assertions(1);
    await saveFavoriteMagicCard('130553');

    expect(favoriteCards.length).toBe(5);
  }, 5000);

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    // expect.assertions();
    // expect(favoriteCards).toHaveLength(4);

    // implemente seus testes aqui
  });
});