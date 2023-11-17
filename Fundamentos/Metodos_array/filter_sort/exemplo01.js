const bankValues = {
	accountNumber: '1756832',
	balance: 5000,
	currency: 'USD',
};
// Usando object destructuring

//sem utilizar a notação literal ficaria redundante, repetindo a chave na variável:
// let {
// 	accountNumber: accountNumber,
// 	balance: balance,
// 	currency: currency,
// } = bankValues;

//mas com a notação literal, podemos omitir o nome das nossas variáveis desejadas:
let { accountNumber, balance, currency } = bankValues;

//o resultado das duas formas é o mesmo, as variáveis são criadas com os nomes das chaves:
console.log(accountNumber); // '1756832'
console.log(balance); // 5000
console.log(currency); // 'USD'
