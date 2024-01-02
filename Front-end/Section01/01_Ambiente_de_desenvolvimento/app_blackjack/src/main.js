import './styles.css';

import { startNewGame, drawCard, stopGame } from './helpers/fetchFunctions';

const shuffleButton = document.querySelector('.shuffle');
const stopButton = document.querySelector('.stop');
const drawButton = document.querySelector('.draw');

let deckId;

shuffleButton.addEventListener('click', () => {
  startNewGame()
    .then((dados) => {
      deckId = dados.deck_id;
      console.log(deckId);
    });
});

stopButton.addEventListener('click', stopGame);
drawButton.addEventListener('click', drawCard);