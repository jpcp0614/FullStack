const maiorPalavra = frase => {
  let arrayPalavra = frase.split(' ');
  // console.log(arrayPalavra);
  let counterTamanhoPalavra = 0;
  let result = '';

  for (const palavra of arrayPalavra) {
    if (palavra.length > counterTamanhoPalavra){
      counterTamanhoPalavra = palavra.length;
      result = palavra.replace(/\.$/, ''); // remover o ponto final com regex
    }
  }
  return `A maior palavra é "${result}" e ela contém ${result.length} caracteres.`;
}

console.log(maiorPalavra('Antônio foi ao banheiro e não sabemos o que aconteceu.'));