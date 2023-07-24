function helloWorld(){
  return 'Olá, mundo!';
};

console.log(helloWorld());


//* Função soma
function sum(num1, num2){
  return num1 + num2;
};

console.log(sum(12,23));


//* Função com laço for
const bankCustomers = ['Renata', 'Clarice', 'Jorge'];

function greetCustomer(customer){
  for (let i = 0; i < customer.length; i += 1){
    console.log(`Olá, ${customer[i]}! Esta é sua conta neste banco.`);
  }
};

greetCustomer(bankCustomers)
