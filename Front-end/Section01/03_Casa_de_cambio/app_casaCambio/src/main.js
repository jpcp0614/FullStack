import './style.css';

import Swal from 'sweetalert2';

import fetchApiExchangeRate from './helpers/fetchApi';
import { funcSubtitle, funcCoinsElements } from './helpers/createElements';
import { inputError, coinError } from './helpers/error';

const myKey = import.meta.env.VITE_API_KEY;
const API_URL = `https://v6.exchangerate-api.com/v6/${myKey}/latest`;

const btn = document.querySelector('#pesquisar');
const inputCoin = document.querySelector('#input-coin');
const frame = document.querySelector('.frame');

btn.addEventListener('click', () => {
  const coin = inputCoin.value.toUpperCase();
  inputError(coin);

  fetchApiExchangeRate(`${API_URL}/${coin}`)
		.then((data) => {
      coinError(data, coin);
      console.log(data);
      const subtitle = funcSubtitle(coin);
      frame.innerHTML = ''; // limpar os campos de moedas
      
      const coinsElements = funcCoinsElements(data);
      frame.appendChild(subtitle);
      coinsElements.forEach((coinsEl) => frame.appendChild(coinsEl));
    })
    .catch((error) => console.log(error.message));
});
