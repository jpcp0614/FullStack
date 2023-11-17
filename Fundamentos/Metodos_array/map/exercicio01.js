// Temperaturas em graus Celsius
const temperaturesCelsius = [23, 10, 32, 21, 47];

const temperatureFahrenheit = temperaturesCelsius.map(
	(temp) => (temp * 9) / 5 + 32
);

console.log(temperatureFahrenheit);
