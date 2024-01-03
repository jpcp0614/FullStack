const API_URL = 'https://akabab.github.io/superhero-api/api';

const getApiHeroes = (id) => {
	return fetch(`${API_URL}/id/${id}.json`)
		.then((response) => response.json());
};

export default getApiHeroes;