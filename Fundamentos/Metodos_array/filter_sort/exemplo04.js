// Função para processar uma transação bancária
const processTransaction = (transaction) => {
	const [type, amount] = transaction;

	if (type === 'deposit') {
		performDeposit(amount);
	} else if (type === 'withdrawal') {
		performWithdrawal(amount);
	} else {
		console.log('Tipo de transação inválida.');
	}
};

// Função para realizar um depósito
const performDeposit = (amount) => {
	console.log(`Depósito de ${amount} realizado com sucesso.`);
};

// Função para realizar um saque
const performWithdrawal = (amount) => {
	console.log(`Saque de ${amount} realizado com sucesso.`);
};

// Chamadas da função processTransaction
processTransaction(['deposit', 1000]); // Depósito de 1000 realizado com sucesso.
processTransaction(['withdrawal', 500]); // Saque de 500 realizado com sucesso.
processTransaction(['golpe', 1000000]); // Tipo de transação inválida.
