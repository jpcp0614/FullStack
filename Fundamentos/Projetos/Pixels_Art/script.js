let divBoard = document.createElement('div');
divBoard.id = 'pixel-board';
document.querySelector('section').appendChild(divBoard);

for(let i = 1; i <= 25; i++) {
  let div = document.createElement('div');  
  div.classList.add('pixel');  
  document.querySelector('#pixel-board').appendChild(div);
}


