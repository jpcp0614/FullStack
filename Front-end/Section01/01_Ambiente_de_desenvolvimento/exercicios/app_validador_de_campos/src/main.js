import { isTaxID, isHexColor, isEmail, isUUID, isURL } from 'validator';
import './styles.css';

const textValue = document.querySelector('#value');
const option = document.querySelector('#option');
const button = document.querySelector('#button');
const answer = document.querySelector('#answer');

button.addEventListener('click', (e) => {
  e.preventDefault();

  const result = {
    cpf: isTaxID(textValue.value, 'pt-BR'),
    hexColor: isHexColor(textValue.value),
    email: isEmail(textValue.value),
    uuid: isUUID(textValue.value),
    url: isURL(textValue.value),
  };

  answer.innerHTML = `A validação retornou ${result[option.value]}`;
});


