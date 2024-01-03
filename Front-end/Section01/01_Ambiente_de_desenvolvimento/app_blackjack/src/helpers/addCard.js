export const addCardToPlayer = (card, playerNumber, playersScore) => {
  // cria a imagem da carta
  const img = document.createElement('img');
  img.src = card.image;
  img.alt = `${card.value} of ${card.suit}`;
  img.classList.add('card');

  // adiciona a carta na tela
  document.querySelector(`.player-${playerNumber}.cards`).appendChild(img);

  // JACK é o J (valete)
  // QUEEN é o Q (rainha)
  // KING é o K (rei)
  // ACE é o A
  if (
    card.value === 'JACK' ||
		card.value === 'QUEEN' ||
		card.value === 'KING'
  ) {
    playersScore[playerNumber] += 10;
  } else if (card.value === 'ACE') {
    playersScore[playerNumber] += 1;
  } else {
    playersScore[playerNumber] += Number(card.value);
  }

  // adiciona o score (placar) do jogador na tela
  document.querySelector(`.player-${playerNumber}.score`).textContent =
		playersScore[playerNumber];
};
