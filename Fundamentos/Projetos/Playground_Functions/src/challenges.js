//* Desafio 1
function compareTrue(value1, value2) {
  if (value1 == true && value2 == true) {
    return true;
  } else {
    return false;
  };
}

//* Desafio 2
function calcArea(base, height) {
  return base * height * 0.5;
}

//* Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

//* Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

//* Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

//* Desafio 6
function highestCount(array) {
  let higherNumber = array[0];
  let count = 0;
  
  // qual o maior número do array
  for (let i = 0; i < array.length; i++) {
      if (array[i] > higherNumber) {
          higherNumber = array[i];
      };
  };
  
  // quantas vezes ese número se repete
  for (let j = 0; j < array.length; j++) {
      if (array[j] == higherNumber) {
          count++;
      };
  };
  
  return count;
}

//* Desafio 7
function catAndMouse(mouse, cat1, cat2) {  
  let result = '';
  let distanceCat1Mouse = Math.abs(cat1 - mouse); 
  let distanceCat2Mouse = Math.abs(cat2 - mouse); 
  if(distanceCat1Mouse < distanceCat2Mouse){
    result = 'cat1';
  } else if(distanceCat1Mouse > distanceCat2Mouse){
    result = 'cat2';
  } else{
    result = 'os gatos trombam e o rato foge';
  }
  return result
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
