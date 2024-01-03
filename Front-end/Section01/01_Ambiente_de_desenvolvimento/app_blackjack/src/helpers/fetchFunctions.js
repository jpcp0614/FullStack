const API_URL = 'https://deckofcardsapi.com/api/deck/';

const startNewGame = () => {
  return fetch(`${API_URL}new/shuffle`).then((res) => res.json());
};

const drawCard = (deckId) => {
  return fetch(`${API_URL}${deckId}/draw/`).then((res) => res.json());
};

const stopGame = () => console.log('stopGame');

export { startNewGame, drawCard, stopGame };
