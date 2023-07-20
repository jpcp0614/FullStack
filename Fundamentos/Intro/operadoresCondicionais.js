const age = 18;

const a = 15;
const b = 22;
const c = "18";

if (a <= b) {
  console.log(a + b)
} else {
  console.log("a é maior que b")
}

if (age === c) {
  console.log("são do mesmo tipo")
} else {
  console.log("são de tipos diferentes")
}

/*
?TERNÁRIO
*/

const canDrive = age >= 18 ? 'Pode Dirigir' : 'Não pode Dirigir';
console.log(canDrive);