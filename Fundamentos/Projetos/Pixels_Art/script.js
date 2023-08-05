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

function changeSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

const getAllColor = document.querySelectorAll('.color');
for (let i = 0; i < getAllColor.length; i += 1) {
  getAllColor[i].addEventListener('click', changeSelected);
}

//* Requisito 8

function selectedAndPrintPixel(e) {
  const select = document.querySelector('.selected');
  const selectedStyle = window.getComputedStyle(select);
  const getBackgroundColor = selectedStyle.getPropertyValue('background-color');
  e.target.style.backgroundColor = getBackgroundColor;
}

document.querySelector('#pixel-board').addEventListener('click', selectedAndPrintPixel);

//* Requisito 9

const clearButton = document.createElement('button');
clearButton.id = 'clear-board';
clearButton.textContent = 'Limpar';
const pixelBoard = document.querySelector('section');
pixelBoard.parentNode.insertBefore(clearButton, pixelBoard);

function clearPixels() {
  const pixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearPixels);
