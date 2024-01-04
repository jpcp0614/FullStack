import './styles.css';

import { startNewGame, drawCard, stopGame } from './helpers/fetchFunctions';
import { addCardToPlayer } from './helpers/addCard';

const shuffleButton = document.querySelector('.shuffle');
const stopButton = document.querySelector('.stop');
const drawButton = document.querySelector('.draw');

let deckId;
const playerScore = {
  1: 0,
  2: 0,
};

shuffleButton.addEventListener('click', () => {
  startNewGame()
    .then((dados) => {
      deckId = dados.deck_id;
      stopButton.disabled = false;
      drawButton.disabled = false;
    });
});

drawButton.addEventListener('click', () => {
  drawCard(deckId)
    .then((data) => {
      const card = data.cards[0];
      addCardToPlayer(card, 1, playerScore);
    });
});

stopButton.addEventListener('click', stopGame);