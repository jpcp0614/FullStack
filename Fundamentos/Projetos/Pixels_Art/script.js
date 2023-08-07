//* ids
const COLOR_PALETTE_ID = '#color-palette';
const INPUT_BUTTON_ID = '#input-button';
const PIXEL_BOARD_ID = '#pixel-board';
const SECTION_ID = '#section-id';

//* classes
const BLACK_CLASS = '.black';
const COLOR_CLASS = '.color';
const PIXEL_CLASS = '.pixel';
const SELECTED_CLASS = '.selected';

const BACKGROUND_COLOR = 'background-color';

//* ---------- Requisito 01 ----------
// cria o header e adiciona no body
const header = document.createElement('header');
const headerInBody = document.body.appendChild(header);

// cria o h1 e adiciona no header
const h1 = document.createElement('h1');
h1.id = 'title';
h1.textContent = 'Paleta de Cores';
headerInBody.appendChild(h1);

//* ---------- Requisito 02 ----------
// cria a div e adiciona no body
const divColorPalette = document.createElement('div');
divColorPalette.id = 'color-palette';
document.body.appendChild(divColorPalette);

const arrColors = ['black', 'cyan', 'khaki', 'orange'];

// cria div com classe 'color' e as classes de cor
// através do array de cores
// e adiciona tal div na color-palette
for (let i = 0; i < arrColors.length; i += 1) {
  const divColors = document.createElement('div');
  divColors.classList.add('color');
  divColors.classList.add(arrColors[i]);
  document.querySelector(COLOR_PALETTE_ID).appendChild(divColors);
}

//* ---------- Requisito 04 ----------
// cria o section e adiciona no body
const section = document.createElement('section');
section.id = 'section-id';
document.body.appendChild(section);

// cria div pixel-board e adiciona na section
const divPixelBoard = document.createElement('div');
divPixelBoard.id = 'pixel-board';
document.querySelector(SECTION_ID).appendChild(divPixelBoard);

// cria div com classe 'pixel' adicionando na div pixel-board (quadro)
for (let i = 0; i < 25; i += 1) {
  const divPixel = document.createElement('div');
  divPixel.classList.add('pixel');
  document.querySelector(SECTION_ID).style.maxWidth = `${5 * 42}px`; // limitar o tamanho da section (CSS)
  document.querySelector(PIXEL_BOARD_ID).appendChild(divPixel);
}

//* ---------- Requisito 06 ----------
// adiciona a classe 'selected' no elemento com classe 'black'
const selectColorBlack = document.querySelector(BLACK_CLASS);
selectColorBlack.classList.add('selected');

//* ---------- Requisito 07 ----------
// ao clicar no elemento AZUL
// remove a classe 'selected' do elemento PRETO (classList.remove)
// e cria a classe 'selected' no elemento AZUL (e.target.classList.add)
const selectColorInPalette = (e) => {
  const selected = document.querySelector(SELECTED_CLASS);
  selected.classList.remove('selected');
  e.target.classList.add('selected');
};

// alternar a classe 'selected' entre os elementos
const selectAllColors = document.querySelectorAll(COLOR_CLASS);
for (let i = 0; i < selectAllColors.length; i += 1) {
  selectAllColors[i].addEventListener('click', selectColorInPalette);
}

//* ---------- Requisito 08 ----------
// para não deixar colorido o fundo do quadro
// quando clicamos na área fora dos pixel's
// recuperei o 'background-color' do '#pixel-board'
const checkBackgroundColorInSection = () => {
  const elementPixelBoard = document.querySelector(PIXEL_BOARD_ID);
  const pixelBoardStyle = window.getComputedStyle(elementPixelBoard);
  // aqui vai retornar justamente a cor do background
  return pixelBoardStyle.getPropertyValue(BACKGROUND_COLOR);
};
console.log(checkBackgroundColorInSection())
// selecionar a classe 'selected'
// através do getComputedStyle eu pego todos os estilos do elemento
// usando o getPropertyValue eu tenho acesso ao 'background-color'
// onde eu clicar, vai atualizar para a cor do 'selected' (e.target)
const paintPixel = (e) => {
  const selected = document.querySelector(SELECTED_CLASS);
  const selectStyle = window.getComputedStyle(selected);
  const selectBackgroundColor = selectStyle.getPropertyValue(BACKGROUND_COLOR);
  e.target.style.backgroundColor = selectBackgroundColor;

  // caso a cor de fundo do '#pixel-board' não for branca
  // eu atualizo novamente para branco
  if (checkBackgroundColorInSection() !== 'rgb(255, 255, 255)') {
    document.querySelector(PIXEL_BOARD_ID).style.backgroundColor = 'white';
  }
};

// clicar no quadro de pixels
const pixelBoard = document.querySelector(PIXEL_BOARD_ID);
pixelBoard.addEventListener('click', paintPixel);

//* ---------- Requisito 09 ----------
// cria um botão com id e texto
// que foi adicionado antes do elemento '#pixel-board'
const clearButton = document.createElement('button');
clearButton.id = 'clear-board';
clearButton.textContent = 'Limpar';
const elementSection = document.querySelector(SECTION_ID);
elementSection.parentNode.insertBefore(clearButton, elementSection);

// função para limpar todos os pixels usando laço for
const clearPixels = () => {
  const pixels = document.querySelectorAll(PIXEL_CLASS);

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
};

clearButton.addEventListener('click', clearPixels);

//* ----- Requisito bônus 10 e 11 -----
// criar uma div '#board-size' e adicioná-la antes da section
const divForInputAndButton = document.createElement('div');
divForInputAndButton.id = 'input-button';
const sectionElement = document.querySelector(SECTION_ID);
sectionElement.parentNode.insertBefore(divForInputAndButton, sectionElement);

// input
const input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.min = '1';
input.autofocus = true;
input.placeholder = 'Digite um valor aqui';
divForInputAndButton.appendChild(input);

// button
const btn = document.createElement('button');
btn.id = 'generate-board';
btn.textContent = 'Criar';
divForInputAndButton.appendChild(btn);

// deletar o quadro inicial
const deleteBoard = () => {
  const boardPixels = document.querySelectorAll(PIXEL_CLASS);
  for (let i = 0; i < boardPixels.length; i += 1) {
    boardPixels[i].remove();
  }
};

// construir quadro, de acordo com o valor do input
const makeBoard = (inputValue) => {
  for (let i = 1; i <= inputValue ** 2; i += 1) {
    const divPixels = document.createElement('div');
    divPixels.classList.add('pixel');
    document.querySelector(SECTION_ID).style.maxWidth = `${inputValue * 42}px`;
    document.querySelector(PIXEL_BOARD_ID).appendChild(divPixels);
  }
};

// Checagem para criar o novo quadro
const checkAndCreateNewBoard = () => {
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

btn.addEventListener('click', checkAndCreateNewBoard);

//* ------- Requisito bônus 12 -------
// função para gerar cores em rgb de forma aleatória
const generateRGB = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

// lógica para mudar as cores, mantendo
// o primeiro pixel com a cor preta
// colorPalette[0] -> retorna a primeira div do array
// colorPalette[0].classList[2] -> retorna a classe que eu preciso 'selected'
const changeColorsPalette = () => {
  const colorPalette = document.querySelectorAll(COLOR_CLASS);
  for (let i = 0; i < colorPalette.length; i += 1) {
    if (colorPalette[i].classList[2] === 'selected') {
      colorPalette[0].style.backgroundColor = 'black';
    } else {
      colorPalette[i].style.backgroundColor = generateRGB();
    }
  }
};

// quando a página atualiza
changeColorsPalette();

//* Mudar as cores sem atualizar a página
const btnChange = document.createElement('button');
btnChange.id = 'btn-change';
btnChange.textContent = 'Mudar as cores';
const inputButton = document.querySelector(INPUT_BUTTON_ID);
inputButton.parentNode.insertBefore(btnChange, inputButton);

btnChange.addEventListener('click', changeColorsPalette);

//* Selecionando um pixel já colorido, remove sua cor com duplo clique
const getPixelColored = (e) => {
  const coloredPixelClass = document.querySelectorAll(PIXEL_CLASS);

  for (let i = 0; i < coloredPixelClass.length; i += 1) {
    const myPixels = coloredPixelClass[i].style.backgroundColor;
    if (myPixels !== 'rgb(255, 255, 255)') {
      e.target.style.backgroundColor = 'white';
    }
  }
};

const coloredPixel = document.querySelectorAll(PIXEL_CLASS);
for (let i = 0; i < coloredPixel.length; i += 1) {
  coloredPixel[i].addEventListener('dblclick', getPixelColored);
}
