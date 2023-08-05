const pixelBoardId = '#pixel-board';
const pixelClass = '.pixel';

const divBoard = document.createElement('div');
divBoard.id = 'pixel-board';
document.querySelector('section').appendChild(divBoard);

for (let i = 1; i <= 25; i += 1) {
  const div = document.createElement('div');
  div.classList.add('pixel');
  document.querySelector(pixelBoardId).appendChild(div);
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

document.querySelector(pixelBoardId).addEventListener('click', selectedAndPrintPixel);

//* Requisito 9

const clearButton = document.createElement('button');
clearButton.id = 'clear-board';
clearButton.textContent = 'Limpar';
const pixelBoard = document.querySelector('section');
pixelBoard.parentNode.insertBefore(clearButton, pixelBoard);

function clearPixels() {
  const pixels = document.querySelectorAll(pixelClass);

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearPixels);

//* Requisito bônus 10

const divInputButton = document.createElement('div');
divInputButton.id = 'input-button';
const divSection = document.querySelector('section');
divSection.parentNode.insertBefore(divInputButton, divSection);

// input
const input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.min = '1';
divInputButton.appendChild(input);

// button
const btn = document.createElement('button');
btn.id = 'generate-board';
btn.textContent = 'Criar';
divInputButton.appendChild(btn);

//* apaga o quadro inicial
const deleteBoard = () => {
  const boardPixels = document.querySelectorAll(pixelClass);
  for (let i = 0; i < boardPixels.length; i += 1) {
    boardPixels[i].remove();
  }
};

const makeBoard = (inputValue) => {
  for (let i = 1; i <= inputValue ** 2; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    document.querySelector(pixelBoardId).appendChild(div);
  }
};

//* cria um novo quadro
const createNewBoard = () => {
  //* input.value === '' é a mesma coisa que !input.value
  if (input.value === '') alert('Board inválido!');
  if (input.value >= 5 && input.value <= 50) {
    deleteBoard();
    makeBoard(input.value);
  }
};

btn.addEventListener('click', createNewBoard);
