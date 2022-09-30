
const totalPopulation = (acc, curr) => acc + curr.population;

const countries = [
  { name: 'China', population: 1347350000 },
  { name: 'India', population: 1251690000 },
  { name: 'United States', population: 313912000 },
  { name: 'Indonesia', population: 237641326 }
];


console.log(countries.reduce(totalPopulation, 0));