const exemplo = '1 cerveja, 0 caipirinha';

const hydrate = (string) => {
	const stringSplit = string.split(' ');
  let countWater = 0;

  for (let i = 0; i < stringSplit.length; i++) {
    const parsedChar = parseInt(stringSplit[i]);

    if (parsedChar) {
      countWater += parsedChar;
    }
  };

  let glass = 'copo';

  if (countWater > 1) {
    glass = 'copos'
  }

  return `${countWater} ${glass} de água`;

};

console.log(hydrate(exemplo));

export default hydrate;
