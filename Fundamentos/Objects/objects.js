const car = {
  make: 'Ford',
  model: 'Mustang',
  year: 1964
}

const bank = {
  agency: '0975',
  account: {
    cod: '012',
    id: 1254,
    name: 'Lalaland'
  }
}

const user = {
  id: 120,
  email: 'email.@email.com',
  infos: {
    name: 'Raphaela',
    lastName: 'Gonçalves',
    address: {
      street: 'Rua do Sol',
      number: 123,
      city: 'São Paulo',
      state: 'SP'
    }
  }
}

const books = [
  {
    id: 1,
    title: '1984',
    author: 'George Orwell'
  },
  {
    id: 2,
    title: 'Dom Casmurro',
    author: 'Machado de Assis'
  },
  {
    id: 3,
    title: 'Os Irmãos Karamazov',
    author: 'Fiódor Dostoiévski'
  },
  {
    id: 4,
    title: 'Drácula',
    author: 'Bram Stoker'
  }
]


//* ACESSAR INFORMAÇÕES

console.log(user.email)
console.log(user.infos.address.city)
console.log(books[0].author)
console.log(books[books.length - 1].author)

for (let i = 0; i < books.length; i++) {
  console.log(books[i].title);
}

car.color = 'Blood'
console.log(car)

// car['year'] = 1965
// console.log(car)

car.year = 1965
console.log(car)


//* KEYS, VALUES E ENTRIES

console.log(Object.keys(user.infos))
console.log(Object.values(car))
console.log(Object.entries(car)[0][1])