import './styles.css';

import { startNewGame, drawCard, stopGame } from './helpers/fetchFunctions';

const shuffleButton = document.querySelector('.shuffle');
const stopButton = document.querySelector('.stop');
const drawButton = document.querySelector('.draw');

shuffleButton.addEventListener('click', startNewGame);
stopButton.addEventListener('click', stopGame);
drawButton.addEventListener('click', drawCard);