import './style.css';

import Swal from 'sweetalert2';

import fetchApiExchangeRate from './helpers/fetchApi';

const myKey = import.meta.env.VITE_API_KEY;
const API_URL = `https://v6.exchangerate-api.com/v6/${myKey}/latest`;

const btn = document.querySelector('#pesquisar');
const inputCoin = document.querySelector('#input-coin');
const frame = document.querySelector('.frame');

btn.addEventListener('click', () => {
  const coin = inputCoin.value.toUpperCase();

  fetchApiExchangeRate(`${API_URL}/${coin}`)
		.then((data) => {
      const subtitle = document.createElement('h2');
      subtitle.innerHTML = `Valores referentes a 1 ${coin}`;
      subtitle.className = 'subtitle';
      frame.innerHTML = '';

      const coinsElements = Object.keys(data.conversion_rates).map((currency) => {
        const icon = document.createElement('img');
        const nameOfCoin = document.createElement('h3');
        const valueOfCoin = document.createElement('h4');
        icon.src = './src/assets/coins.svg';
        nameOfCoin.innerHTML = currency;
        valueOfCoin.innerHTML = data.conversion_rates[currency].toFixed(3);

        const coinInfo = document.createElement('div');
        coinInfo.className = 'cards-coin';

        const imgAndCoin = document.createElement('div');
        imgAndCoin.className = 'img-coin';

        coinInfo.appendChild(imgAndCoin);
        imgAndCoin.appendChild(icon);
        imgAndCoin.appendChild(nameOfCoin);
        coinInfo.appendChild(valueOfCoin);

        return coinInfo;
      });
      frame.appendChild(subtitle);
      coinsElements.forEach((coinsEl) => frame.appendChild(coinsEl));

    })
		.catch((error) =>
			Swal.fire({
				title: 'Error!',
				text: error.message,
				icon: 'error',
				confirmButtonText: 'Cool',
			})
		);
});
