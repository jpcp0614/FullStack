const data = require('../data/zoo_data');

const { species, hours } = data;
const arrayHours = Object.entries(hours);

const noParams = () => {
  const obj = {};

  arrayHours.forEach((days) => {
    const { open, close } = days[1];
    Object.assign(obj, { [days[0]]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: species.filter(({ availability }) =>
        availability.includes(days[0])).map(({ name }) => name),
    } });
  });
  obj.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

  return obj;
};

const returnDay = (scheduleTarget) => ({
  [scheduleTarget]: noParams()[scheduleTarget],
});

const closedMonday = () => (
  {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  });

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') return closedMonday();
  if (Object.keys(noParams()).includes(scheduleTarget)) return returnDay(scheduleTarget);
  return noParams();
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
