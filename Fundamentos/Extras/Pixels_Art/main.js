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


