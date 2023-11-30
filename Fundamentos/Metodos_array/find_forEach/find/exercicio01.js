//* Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

const songs = [
	{ id: '31031685', title: 'Partita in C moll BWV 997' },
	{ id: '31031686', title: 'Toccata and Fugue, BWV 565' },
	{ id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// Adicione seu código aqui
const musicId = songs.find(({ id }) => id === '31031685');
console.log(musicId);