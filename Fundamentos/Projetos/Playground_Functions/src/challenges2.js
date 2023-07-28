//* Desafio 10
function techList(techArray, name) {
  techArray = techArray.sort();
  let objectTech = {};
  let arrayObjectsTech = [];
  
  for (let i = 0; i < techArray.length; i++) {
    objectTech = {
      tech: techArray[i],
      name,
    };
    arrayObjectsTech.push(objectTech);
  };

  if (techArray.length == 0) {
      return 'Vazio!';
  }

  return arrayObjectsTech;
}

//* Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
};

for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (num < 0 || num > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
    };
};

let counts = {};
for (let num of array) {
    counts[num] = (counts[num] || 0) + 1
    if (counts[num] >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
    };
}

let ddd = array.slice(0, 2).join('');
let prefix = array.slice(2, 7).join('');
let number = array.slice(7).join('');

return `(${ddd}) ${prefix}-${number}`;
}


//* Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    function isValidTriangle(a , b, c) {
      return a + b > c && a + c > b && b + c > a
    }
    return isValidTriangle(lineA, lineB, lineC)
}

module.exports = {
  generatePhoneNumber,
  techList,  
  triangleCheck,
};
