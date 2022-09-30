
var country = [
    {name: 'India', capital: 'Delhi', flag: 'https://www.countryflags.io/in/flat/64.png'},
    {name: 'USA', capital: 'Washington DC', flag: 'https://www.countryflags.io/us/flat/64.png'},
    {name: 'China', capital: 'Beijing', flag: 'https://www.countryflags.io/cn/flat/64.png'}
];

var printDetails = function(obj) {
    console.log('Name : ', obj['name']);
    console.log('Capital : ', obj['capital']);
    console.log('Flag : ', obj['flag']);
    
    
};

 country.forEach(printDetails);