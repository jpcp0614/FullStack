import './style.css';

import { fetchApi } from './helpers/fetchApi';

const API_URL_DOG = 'https://dog.ceo/api/breeds/image/random';
const API_URL_CAT = 'https://api.thecatapi.com/v1/images/search';

const btnGetRandomDog = document.querySelector('.get-dog');
const btnGetRandomCat = document.querySelector('.get-cat');
const btnSurprise = document.querySelector('.surprise');
const image = document.querySelector('#image');

btnGetRandomDog.addEventListener('click', () => {
	fetchApi(API_URL_DOG).then((data) => {
		console.log(data);
		image.src = data.message;
	});
});

btnGetRandomCat.addEventListener('click', () => {
	fetchApi(API_URL_CAT).then((data) => {
		console.log(data[0]);
		image.src = data[0].url;
	});
});

btnSurprise.addEventListener('click', () => {
	Promise.any([
		fetchApi(API_URL_DOG),
		fetchApi(API_URL_CAT),
	])
		.then((data) => {
			const img = data.message || data[0].url;
			image.src = img;
		});
});