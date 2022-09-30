
const countries = [
    { name: 'Japan', currency: 'yen' },
    { name: 'USA', currency: 'dollar' },
    { name: 'India', currency: 'rupee' },
    { name: 'France', currency: 'euro' }
  ];
  const usa = countries.find(country => country.currency === 'dollar');
  console.log(usa);