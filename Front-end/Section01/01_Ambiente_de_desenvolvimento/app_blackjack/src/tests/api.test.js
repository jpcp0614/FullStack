import { getNewDeck } from '../helpers/api';

describe('API', () => {
  describe('getNewDeck test', () => {
    
    it('Deve retornar um objeto com os dados da API', async () => {
      const data = await getNewDeck();
      expect(data).toHaveProperty('success');
      expect(data).toHaveProperty('deck_id');
      expect(data).toHaveProperty('shuffled');
      expect(data).toHaveProperty('remaining');
    });
  });
});
