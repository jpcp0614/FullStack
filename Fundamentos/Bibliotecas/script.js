const format = require('date-fns/format');

const date = new Date();

const formatDate = format(date, 'dd/MM/yyyy')

console.log('Data não formatada:', date);

console.log('Data formatada:', formatDate);