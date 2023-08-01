const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotify');


// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

//* 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
//* 2.1. Deve existir apenas um elemento com a classe 'tech'.
//* Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.

const handleChangeTech = (event) => {
  let techClass = document.querySelector('.tech');
  techClass.classList.remove('tech');
  event.target.classList.add('tech');//* 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.

};

firstLi.addEventListener('click', handleChangeTech);
secondLi.addEventListener('click', handleChangeTech);
thirdLi.addEventListener('click', handleChangeTech);


//* 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
//* com a classe 'tech'.

input.addEventListener('input', (e) => {
  let tech = document.querySelector('.tech');
  tech.innerText = e.target.value;
  // console.log("TARGET:", e.target);
  // console.log("VALUE:", e.target.value);
});


//* 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotify',
//* redirecione para alguma página.

myWebpage.addEventListener('dblclick', () => {
  window.location.replace("https://google.com.br");
})



//* 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotify', altere
//* a cor do mesmo.

myWebpage.addEventListener('mouseover', (event) => {
  event.target.style.color = 'blue';
})

myWebpage.addEventListener('mouseout', (event) => {
  event.target.style.color = 'white';
})

// Segue abaixo um exemplo de uso do event.target.

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

