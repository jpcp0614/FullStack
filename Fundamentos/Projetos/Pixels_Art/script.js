const pixelBoardId = '#pixel-board';
const pixelClass = '.pixel';
const elementSection = document.querySelector('section');

const divBoard = document.createElement('div');
divBoard.id = 'pixel-board';
document.querySelector('section').appendChild(divBoard);

for (let i = 1; i <= 25; i += 1) {
  const div = document.createElement('div');
  div.classList.add('pixel');
  elementSection.style.maxWidth = `${5 * 45}px`;
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

function selectSection() {
  const pixelBoardAfterSection = document.querySelector(pixelBoardId);
  const getStyleSection = window.getComputedStyle(pixelBoardAfterSection);
  const getBackgroundColorSection = getStyleSection.getPropertyValue('background-color');

  return getBackgroundColorSection;
}

function selectedAndPrintPixel(e) {
  const select = document.querySelector('.selected');
  const selectedStyle = window.getComputedStyle(select);
  const getBackgroundColor = selectedStyle.getPropertyValue('background-color');
  e.target.style.backgroundColor = getBackgroundColor;

  if (selectSection() !== 'rgba(0, 0, 0, 0)') {
    document.querySelector(pixelBoardId).style.backgroundColor = 'white';
  }
}

const elementDivPixelBoard = document.querySelector(pixelBoardId);
elementDivPixelBoard.addEventListener('click', selectedAndPrintPixel);

//* Requisito 9

const clearButton = document.createElement('button');
clearButton.id = 'clear-board';
clearButton.textContent = 'Limpar';
elementSection.parentNode.insertBefore(clearButton, elementSection);

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
elementSection.parentNode.insertBefore(divInputButton, elementSection);

// input
const input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.min = '1';
input.autofocus = true;
input.placeholder = 'Digite um valor';
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
    elementSection.style.maxWidth = `${inputValue * 42}px`;
    document.querySelector(pixelBoardId).appendChild(div);
  }
};

//* Requisito bônus 11

//* cria um novo quadro
const createNewBoard = () => {
  if (input.value === '') alert('Board inválido!');
  if (input.value < 5) {
    deleteBoard();
    makeBoard(5);
    input.value = '5';
  } else if (input.value > 50) {
    deleteBoard();
    makeBoard(50);
    input.value = '50';
  } else {
    deleteBoard();
    makeBoard(input.value);
  }
};

btn.addEventListener('click', createNewBoard);

// * Requisito 12

const randomGenerateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const changeColors = () => {
  const colorPalette = document.querySelectorAll('.color');
  for (let i = 0; i < colorPalette.length; i += 1) {
    if (colorPalette[i].classList[2] === 'selected') {
      colorPalette[0].style.backgroundColor = 'black';
    } else {
      colorPalette[i].style.backgroundColor = randomGenerateColor();
    }
  }
};

window.onload = () => {
  changeColors();
};
