import './style.css';

const myKey = import.meta.env.VITE_API_KEY;

const btn = document.querySelector('#pesquisar');

btn.addEventListener('click', () => {
  console.log(myKey);
});
