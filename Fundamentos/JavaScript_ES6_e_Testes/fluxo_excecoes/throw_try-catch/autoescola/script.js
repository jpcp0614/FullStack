const verifyInfos = (name, age) => {
	if (!name || !age) {
		throw new Error('Todas as informações são necessárias');
	}
};

const verifyAge = (age) => {
	if (age < 18) {
		throw new Error(
			'Ops, infelizmente nesse momento você não pode fazer as aulas'
		);
	}
};

const studentRegister = (name, age) => {
	verifyInfos(name, age);
	verifyAge(age);

	return `${name}, seja bem-vindo(a) à escola!`;
};

// console.log(studentRegister('John Smith'));
