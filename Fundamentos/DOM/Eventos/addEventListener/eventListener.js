//* Exemplo 1 - Click <p>

let clickP = document.getElementById('click-paragraph');

//* Adiciona o evento click
clickP.addEventListener("click", recebeClick);

//* Função recebeClick
function recebeClick(e) {
  console.log("Clicou no parágrafo");

  //* Target: O elemento que originou esse mesmo evento
  //* Type: O tipo de evento que originou o click - mouse, keyboard
  console.log("TARGET:", e.target);
  console.log("TYPE:", e.type);
};


//* Exemplo 2 - Mouse over <button>

let btn = document.getElementById('mouse-over-leave');

//* Adiciona o evento mouseover
btn.addEventListener("mouseover", mouseEmCima);

//* Função mouseEmCima
function mouseEmCima() {
  console.log("Mouse em cima");
};


//* Exemplo 3 - Mouse leave <button>

let btn2 = document.getElementById('mouse-over-leave');

//* Adiciona o evento mouseleave
btn2.addEventListener("mouseleave", mouseEmFora);

//* Função mouseEmFora
function mouseEmFora() {
  console.log("Mouse fora");
};


//* Exemplo 4 - Click <button>

let btn3 = document.getElementById('mouse-over-leave');

//* Adiciona o evento click
btn3.addEventListener("click", recebeClick);

//* Função recebeClick
function recebeClick(e) {
  console.log("Clicou no botão");
};