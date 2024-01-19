import { drawCard, getNewDeck } from './helpers/api';
import { addCardToPlayer, restartGame } from './helpers/game';

import './styles.css';

const shuffleButton = document.querySelector('.shuffle');
const stopButton = document.querySelector('.stop');
const drawButton = document.querySelector('.draw');

let deckId;
let playersScore = {
  1: 0,
  2: 0,
};

shuffleButton.addEventListener('click', () => {
  restartGame(playersScore);
  getNewDeck().then((dados) => {
    deckId = dados.deck_id;
    stopButton.disabled = false;
    drawButton.disabled = false;
  });
});
drawButton.addEventListener('click', () => {
  drawCard(deckId).then((data) => {
    const card = data.cards[0];
    addCardToPlayer(card, 1, playersScore);

    if (playersScore[1] > 21) {
      stopGame();
    }
  });
});

const showResult = (result) => {
  const resultElement = document.querySelector('.result');
  resultElement.src =
		result === 'win' ? 'src/assets/win.png' : 'src/assets/lose.png';
  resultElement.classList.remove('hidden');
};

const stopGame = async () => {
  drawButton.disabled = true;
  stopButton.disabled = true;
  shuffleButton.disabled = false;

  await dealerTurn();

  if (playersScore[1] > 21) {
    return showResult('lose');
  }

  showResult('win');
};

const dealerTurn = async () => {
  const promises = [drawCard(deckId), drawCard(deckId), drawCard(deckId)];
  console.log(promises);

  const results = await Promise.all(promises);
  console.log(results);

  results.forEach((data) => {
    const card = data.cards[0];
    addCardToPlayer(card, 2, playersScore);
  });
};

stopButton.addEventListener('click', stopGame);
