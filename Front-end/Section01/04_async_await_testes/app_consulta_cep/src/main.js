import './style.css';

import Swal from 'sweetalert2';

const inputEl = document.querySelector('.input-cep');
const buttonEl = document.querySelector('.button-cep');
const preEl = document.querySelector('.address');

const API_URL = 'https://viacep.com.br/ws/';

const fetchApi = async (cep) => {
	const response = await fetch(`${API_URL}/${cep}/json/`);
	const data = await response.json();
	return data;
};

buttonEl.addEventListener('click', async () => {
	const cep = inputEl.value;

	try {
		const data =  await fetchApi(cep);
		preEl.innerHTML = JSON.stringify(data);
	} catch (error) {
		Swal.fire({
			title: 'Deu ruim!!!',
			text: error.message,
			icon: 'error',
			confirmButtonText: 'Cool',
		});
	}
});