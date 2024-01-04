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

const getDay = (scheduleTarget) => ({
  [scheduleTarget]: noParams()[scheduleTarget],
});

const getAnimal = (scheduleTarget) => species.find((item) =>
  item.name === scheduleTarget).availability;

function getSchedule(scheduleTarget) {
  if (species.map((item) => item.name).includes(scheduleTarget)) return getAnimal(scheduleTarget);
  if (Object.keys(noParams()).includes(scheduleTarget)) return getDay(scheduleTarget);
  return noParams();
}

module.exports = getSchedule;
