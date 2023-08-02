//* Cria um par chave-valor
document.cookie = "first-lalaland=trembao"

const myCookie = document.cookie;

//* Deleta um par chave-valor
document.cookie = "first-xablau=; expires=Sun, 01 Dec 2020 00:00:00 UTC"

console.log(myCookie);