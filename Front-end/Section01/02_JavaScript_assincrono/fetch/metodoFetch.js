const req = fetch('https://dummyjsong.com/quotes/random');

const result = req
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message))

