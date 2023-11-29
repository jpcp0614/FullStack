/*
 * Utilizando o método filter e array destructuring, crie uma função filterHighPlayers que retorna um novo array contendo apenas os jogadores com altura igual ou superior a 200 centímetros.
 */

const players = [
	{ name: 'Michael Jordan', height: 198, team: 'Chicago Bulls' },
	{ name: 'LeBron James', height: 203, team: 'Los Angeles Lakers' },
	{ name: 'Kobe Bryant', height: 198, team: 'Los Angeles Lakers' },
	{ name: 'Stephen Curry', height: 191, team: 'Golden State Warriors' },
	{ name: 'Kevin Durant', height: 211, team: 'Brooklyn Nets' },
];

const filterHighPlayers = (players) => {
	return players.filter(({ height }) => height >= 200);
};

console.log(filterHighPlayers(players));
