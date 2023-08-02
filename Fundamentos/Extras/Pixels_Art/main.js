//* Cria um <header> no <body>, com um <h1>
//* contendo um id 'title' e um texto escrito 'Color Palette'

const header = document.createElement('header');
const headerInBody = document.body.appendChild(header);

const title = document.createElement('h1');
title.id = 'title';
title.textContent = 'Color Palette';
headerInBody.appendChild(title);

