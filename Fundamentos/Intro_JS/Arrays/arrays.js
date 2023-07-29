const languages = ['JS', 'Python', 'R', 'Ruby', 'Java', 'TS', 'C#', 'Go','Swift', 'PHP']
console.log(languages[9]);
console.log(languages[languages.length -1]);
console.log(languages.at(-1))

//Métodos:
languages.push('Lua') // adiciona elemento no final
// console.log(languages)

languages.unshift('VBA') // adiciona elemento no início
// console.log(languages)

languages.pop() // remove elemento no final
// console.log(languages)

languages.shift() // remove elemento no início
// console.log(languages)

languages.splice(5, 1, 'SPLICE' ) // adiciona e remove elementos de acordo com índice do argumento
console.log(languages)