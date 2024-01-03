import './style.css';

import Swal from 'sweetalert2';

import fetchApiExchangeRate from './helpers/fetchApi';

const myKey = import.meta.env.VITE_API_KEY;
const API_URL = `https://v6.exchangerate-api.com/v6/${myKey}/latest`;

const btn = document.querySelector('#pesquisar');

btn.addEventListener('click', () => {
  fetchApiExchangeRate(`${API_URL}/USD`)
		.then((data) => console.log(data))
		.catch((error) =>
			Swal.fire({
				title: 'Error!',
				text: error.message,
				icon: 'error',
				confirmButtonText: 'Cool',
			})
		);
});
