const food = 'pão';
const drink = 'café';
const toast = 'torrada'

if (drink === 'café' || toast === 'torrada') {
  console.log('Valdênio vai tomar café')
} else {
  console.log('Valdênio vai fazer o café')
}

if (food === 'pão' && toast === 'torrada') {
  console.log('João vai fazer o café')
} else {
  console.log('João vai tomar café')
}

if (food !== 'pão' && toast !== 'torrada') {
  console.log('Tem que comprar pão e torrada')
} else {
  console.log('Já tem pão e torrada')
}