// const fetchApi = () => {
//   return fetch('https://deckofcardsapi.com/api/deck/new')
//     .then((res) => res.json())
//     .then((data) => data);
// };

// const result = fetchApi();
// result.then((value) => console.log(value));

// uma função com a assinatura de async sempre retorna uma promise
const fetchApi = async () => {
  const response = await fetch('https://deckofcardsapi.com/api/deck/new');
  const data = await response.json();
  return console.log(data);
};

fetchApi();
