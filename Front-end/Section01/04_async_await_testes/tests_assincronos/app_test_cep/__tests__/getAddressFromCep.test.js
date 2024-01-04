import getAddressFromCep from '../src/helpers/getAddressFromCep';

//* ACERTOS
//* 1 - deve retornar os dados quando passamos um CEP válido
//* 2 - deve aceitar CEPs com ou sem hífen

//* ERROS
//* 1 - deve lançar um erro "Digite um CEP" quando não há nenhum CEP digitado
//* 2 - deve lançar um erro quando passar um CEP no formato inválido

const CEP = '30130010';
const CEP_HIFEN = '30130-010';

const mockInvalidCeps = {
	cepInvalid_1: 'xxxxx-xxx',
	cepInvalid_2: '3012',
	cepInvalid_3: '30130-1000',
};

const mockAddress = {
	cep: '30130-010',
	logradouro: 'Praça Sete de Setembro',
	bairro: 'Centro',
	localidade: 'Belo Horizonte',
	uf: 'MG',
};

describe('Quando a requisição é bem sucedida, ela retorna os dados esperados', () => {
	it('1 - retorna os dados quando passamos um CEP válido', async () => {
		const address = await getAddressFromCep(CEP);

		expect(address.cep).toBe(mockAddress.cep);
		expect(address.logradouro).toBe(mockAddress.logradouro);
		expect(address.bairro).toBe(mockAddress.bairro);
		expect(address.localidade).toBe(mockAddress.localidade);
		expect(address.uf).toBe(mockAddress.uf);
	});

	it('2 - retorna os dados quando passamos um CEP com ou sem hífen', async () => {
		const addressWithoutHyphen = await getAddressFromCep(CEP);
		expect(addressWithoutHyphen.cep).toBe(mockAddress.cep);

		const addressWithHyphen = await getAddressFromCep(CEP_HIFEN);
		expect(addressWithHyphen.cep).toBe(mockAddress.cep);
	});
});

describe('Quando a requisição é rejeitada, deve retornar um erro', () => {
	it('1 - retorna um error com a mensagem "Digite um CEP" quando recebe um CEP vazio', async () => {
		const empty = '';
		const err = new Error('Digite um CEP');
		await expect(getAddressFromCep(empty)).rejects.toThrow(err);
	});

	it('2 - retorna um error quando passa um CEP no formato inválido', async () => {
		await expect(
			getAddressFromCep(mockInvalidCeps.cepInvalid_1)
		).rejects.toThrow();
		await expect(
			getAddressFromCep(mockInvalidCeps.cepInvalid_2)
		).rejects.toThrow();
		await expect(
			getAddressFromCep(mockInvalidCeps.cepInvalid_3)
		).rejects.toThrow();
	});
});
