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

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
