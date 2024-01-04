const data = ['Andre', 998812789, 'Gabriel', 995794897, 'Carol', 955589216];

const result = data.filter((item) => typeof item === 'string');

console.log(result); // ['Andre', 'Gabriel', 'Carol']
