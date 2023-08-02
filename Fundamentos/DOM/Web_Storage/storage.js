//* console.log(localStorage);

//* localStorage.setItem('firstName', 'Xablau');
//* localStorage.setItem('lastName', 'Lalaland');

//* console.log(localStorage.getItem('lastName'))

//* console.log(localStorage.removeItem('firstName'));

//* console.log(sessionStorage);

//* sessionStorage.setItem('firstName', 'Xablau');
//* sessionStorage.setItem('lastName', 'Lalaland');


//* ------------
localStorage.setItem('bool', true); //* true -> boolean
let recoveryBool = localStorage.getItem('bool');
//console.log(recoveryBool);
//console.log(typeof recoveryBool); //* true -> string

//* JSON.parse recupera o valor original de entrada
let recoveryBoolParse = JSON.parse(localStorage.getItem('bool'));
//console.log(typeof recoveryBoolParse); //* true-> boolean


//* ------------
const books = [
  {
    id: 1,
    title: 'Ensaio sobre a Cegueira',
    author: 'José Saramago'
  },
  {
    id: 2,
    title: 'A vida que vale a pena ser vivida',
    author: 'Clóvis de Barros Filho'
  },
  {
    id: 3,
    title: 'Macunaíma',
    author: 'Mário de Andrade'
  }
];

localStorage.setItem('arrObj', JSON.stringify(books));
let recoveryArrObj = localStorage.getItem('arrObj');
//console.log(recoveryArrObj);
//console.log(typeof recoveryArrObj);

let recoveryArrObjParse = JSON.parse(localStorage.getItem('arrObj'));
//console.log(recoveryArrObjParse[0]);
//console.log(typeof recoveryArrObjParse);

for (let i = 0; i < recoveryArrObjParse.length; i++) {
  console.log(recoveryArrObjParse[i].author);
};