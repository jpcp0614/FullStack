const fetchApiExchangeRate = (api) => {
  return fetch(api)
    .then((response) => response.json());
};

export default fetchApiExchangeRate;