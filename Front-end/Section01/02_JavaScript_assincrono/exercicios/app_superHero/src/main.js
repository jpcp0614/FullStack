import './style.css';
import Swal from 'sweetalert2';

import getApiHeroes from './helpers/fetchApi';
import randomNumber from './helpers/randomNumber';

const button = document.querySelector('#button');
const name = document.querySelector('#name');
const image = document.querySelector('#image');

button.addEventListener('click', () => {
	const id = randomNumber();
	getApiHeroes(id)
		.then((data) => {
			name.innerHTML = data.name;
			image.src = data.images.md;
		})
		.catch((error) => Swal.fire({
			title: 'Hero not found',
			text: error.message,
			icon: 'error',
			confirmButtonText: 'Cool'
		}));
});