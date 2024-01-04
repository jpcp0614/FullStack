import './style.css';

import Swal from 'sweetalert2';

import getAddressFromCep from './helpers/getAddressFromCep';

const inputEl = document.querySelector('.input-cep');
const buttonEl = document.querySelector('.button-cep');
const preEl = document.querySelector('.address');

buttonEl.addEventListener('click', async () => {
	const cep = inputEl.value;

	try {
		const data = await getAddressFromCep(cep);
		preEl.innerHTML = JSON.stringify(data);
	} catch (error) {
		Swal.fire({
			title: 'Ops!!!',
			text: error.message,
			icon: 'error',
			confirmButtonText: 'Cool',
		});
	}
});