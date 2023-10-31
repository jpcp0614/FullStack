const sum = (a, b) => a + b;

test('sums two values', () => {
	expect(sum(2, 4)).toEqual(6);
});
