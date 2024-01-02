const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle';

const startNewGame = () => {
  return fetch(API_URL)
    .then((res) => res.json());
};

const drawCard = () => console.log('drawCard');

const stopGame = () => console.log('stopGame');

export {
  startNewGame,
  drawCard,
  stopGame,
};
