const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekendDays = ['Sunday', 'Saturday'];
const weekDays = workDays.concat(weekendDays);

test('Sunday is a week day', () => {
	expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
	expect(workDays).not.toContain('Sunday');
});
