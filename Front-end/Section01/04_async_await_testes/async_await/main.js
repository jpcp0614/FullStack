const API_URL = 'https://dummyjson.com/quotes/random';

const getQuoteBtn = document.querySelector('.get-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const error = document.querySelector('.error');

//* THEN CATCH
const fetchApi = () => {
	return fetch(API_URL).then((response) => response.json());
};

getQuoteBtn.addEventListener('click', () => {
	fetchApi()
    .then((data) => {
      quote.innerText = data.quote;
      author.innerText = data.author;
      error.innerText = '';
	  })
    .catch((err) => {
      quote.innerText = '';
			author.innerText = '';
			error.innerText = `Error getting quote: ${err.message}`;
    });
});