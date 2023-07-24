//* CORRIDA F1
// const laps = 70;

// for (let i = 1; i <= laps; i++) {
//   console.log(`Volta ${i} completada!`);
// }

// console.log('Acabou a corrida! Senna CAMPEÃO!!!');

//* LISTA DE COMPRAS
// const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];

// for (let i = 0; i < groceryList.length ; i++) {
//   console.log(groceryList[i]);
// }

//* SOMAR NÚMEROS DO ARRAY
// const numbers = [1, 2, 3, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i]
// }

// console.log(total);

//* CONTAGEM REGRESSIVA

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// console.log('BOOOOOM!')


//* CONTAGEM NÚMEROS PARES

// for (let i = 0; i <= 50; i += 2) {
//   console.log(i)
// }

// for (let i = 0; i <= 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
// }
// console.log('Acabou!')


//* FOR DENTRO DE OUTRO FOR

for (let i = 0; i <= 6; i++) {
  for (let j = 2; j <= 5; j++) {
    if (i == j) {
      console.log(i)
    }
  }
}