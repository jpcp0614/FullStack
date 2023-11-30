const series = [
	{ title: 'Stranger Things', genre: 'Sci-Fi', rating: 8.8 },
	{ title: 'Narcos', genre: 'Crime', rating: 8.8 },
	{ title: 'The Crown', genre: 'Drama', rating: 8.7 },
	{ title: 'Black Mirror', genre: 'Sci-Fi', rating: 8.8 },
];

console.log("SERIADOS DA NETFLIX:");

series.forEach((serie) => {
  console.log(`${serie.title} - ${serie.genre} - Avaliação: ${serie.rating}`);
});

// SERIADOS DA NETFLIX:
// Stranger Things - Sci-Fi - Avaliação: 8.8
// Narcos - Crime - Avaliação: 8.8
// The Crown - Drama - Avaliação: 8.7
// Black Mirror - Sci-Fi - Avaliação: 8.8