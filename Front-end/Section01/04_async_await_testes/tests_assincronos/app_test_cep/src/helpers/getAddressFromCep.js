const API_URL = 'https://viacep.com.br/ws/';

const getAddressFromCep = async (cep) => {
	if (!cep) throw new Error('Digite um CEP');

	const response = await fetch(`${API_URL}/${cep}/json/`);
	const data = await response.json();
	return data;
};

export default getAddressFromCep;
