const arrayTechList = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];

const techList = (array, user) => {
	if (array.length === 0) return 'Vazio!';

	const result = [];
  const orderList = array.sort();

	for (let i = 0; i < orderList.length; i++) {
		result.push({ tech: orderList[i], name: user });
	}

	return result;
};

export default techList;