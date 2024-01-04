const funcSubtitle = (coin) => {
  const sub = document.createElement('h2');
  sub.className = 'subtitle';
  sub.innerHTML = `Valores referentes a 1 ${coin}`;
  return sub;
};

const funcCoinsElements = (data) => {
  const result = Object.keys(data.conversion_rates).map((currency) => {
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

  return result;
};

export { funcSubtitle, funcCoinsElements };