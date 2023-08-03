//* Cria um <header> no <body>, com um <h1>
//* contendo um id 'title' e um texto escrito 'Color Palette'

const header = document.createElement('header');
const headerInBody = document.body.appendChild(header);

const title = document.createElement('h1');
title.id = 'title';
title.textContent = 'Color Palette';
headerInBody.appendChild(title);

//* Cria uma <section> no <body>, depois do header,
//* com id 'color-palette'

const section = document.createElement('section');
section.id = 'color-palette';
document.body.appendChild(section);

//* Cria 4 <div> com class 'color', dentro da <section>
//* e cada div com uma cor diferente

const colors = ['black', 'cyan', 'khaki', 'orange'];

for (const color of colors) {
  const div = document.createElement('div');
  div.classList.add('color');
  div.classList.add(color);
  document.querySelector('#color-palette').appendChild(div);
};

//* -----------------------------------------------

//* Cria uma <div> Board com a class 'pixel-board'
const divBoard = document.createElement('div');
divBoard.classList.add('pixel-board');
document.body.appendChild(divBoard);

//* Laço for para criar as 25 <div>
for (let i = 1; i <= 25; i++) {
  //* Cria a <div> com class 'pixel'
  const divElement = document.createElement('div');
  divElement.classList.add('pixel');

  //* Adiciona a <div> pixel a <div> Board
  divBoard.appendChild(divElement);

  /*
  //* Acrescenta uma tag <br> a cada 5 <div> pixel
  if (i % 5 === 0) {
    divBoard.appendChild(document.createElement('br'));
  }
  */
}

//* --------------------------------------------------
