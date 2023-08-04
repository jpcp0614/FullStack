const divBoard = document.createElement('div');
divBoard.id = 'pixel-board';
document.querySelector('section').appendChild(divBoard);

for (let i = 1; i <= 25; i += 1) {
  const div = document.createElement('div');
  div.classList.add('pixel');
  document.querySelector('#pixel-board').appendChild(div);
}

//* Requisito 6

const selectedBlack = document.querySelector('.black');
selectedBlack.classList.add('selected');


//* Requisito 7

const getAllColor = document.querySelectorAll('.color');
for (let i = 0; i < getAllColor.length; i++) {
  getAllColor[i].addEventListener('click', changeSelected);
}

function changeSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}