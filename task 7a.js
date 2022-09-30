const countries = [
    { name: 'india', continent: 'Asia'},
    { name: 'Nepal', continent: 'Asia'},
    { name: 'srilanka', continent: 'Asia'},
    { name: 'russia', continent: 'Asia'},
    { name: 'pakistan', continent: 'Asia'},
    { name: 'bangladesh', continent: 'Asia'}
    { name: 'japan', continent: 'Asia'}
    { name: 'south korea', continent: 'Asia'}
    { name: 'north korea', continent: 'Asia'}
    { name: 'indonesia', continent: 'Asia'}
    { name: 'china', continent: 'Asia'}
    { name: 'thailand', continent: 'Asia'}
    { name: 'philippines', continent: 'Asia'}
    { name: 'singapore', continent: 'Asia'}
    { name: 'malaysia', continent: 'Asia'}
    { name: 'vietnam', continent: 'Asia'}
    { name: 'hong kong', continent: 'Asia'}
    { name: 'saudi arabia', continent: 'Asia'}
    { name: 'taiwan', continent: 'Asia'}
    { name: 'cambodia', continent: 'Asia'}
    { name: 'myanmar', continent: 'Asia'}
    { name: 'laos', continent: 'Asia'}
    { name: 'iran', continent: 'Asia'}
    { name: 'afghanistan', continent: 'Asia'}
    { name: 'israel', continent: 'Asia'}
    { name: 'qatar', continent: 'Asia'}
    { name: 'mongolia', continent: 'Asia'}
    { name: 'maldives', continent: 'Asia'}
    { name: 'brunei', continent: 'Asia'}
    { name: 'uzbekistan', continent: 'Asia'}
    { name: 'iraq', continent: 'Asia'}
    { name: 'yemen', continent: 'Asia'}
    { name: 'chirstmas island', continent: 'Asia'}
    { name: 'macao', continent: 'Asia'}
    { name: 'armenia', continent: 'Asia'}
    { name: 'lebanon', continent: 'Asia'}
    { name: 'united arab emirates', continent: 'Asia'}
    { name: 'syria', continent: 'Asia'}
    { name: 'jordan', continent: 'Asia'}
    { name: 'kyrgzstan', continent: 'Asia'}
    { name: 'kuwait', continent: 'Asia'}
    { name: 'turkmenist', continent: 'Asia'}
    { name: 'bahrain', continent: 'Asia'}
    { name: 'oman', continent: 'Asia'}
    { name: 'palestine', continent: 'Asia'}
    { name: 'bhutan', continent: 'Asia'}
    { name: 'british indian ocean territory', continent: 'Asia'}
    { name: 'cocos', continent: 'Asia'}
    { name: 'tajikistan', continent: 'Asia'}
    { name: 'timor leste', continent: 'Asia'}

]

let asianCountries = countries.filter(country => {
    return country.continent === 'Asia';
})

console.log(asianCountries);  [ { name: 'india', continent: 'Asia'},
{ name: 'Nepal', continent: 'Asia'},
{ name: 'srilanka', continent: 'Asia'},
{ name: 'russia', continent: 'Asia'},
{ name: 'pakistan', continent: 'Asia'},
{ name: 'bangladesh', continent: 'Asia'}
{ name: 'japan', continent: 'Asia'}
{ name: 'south korea', continent: 'Asia'}
{ name: 'north korea', continent: 'Asia'}
{ name: 'indonesia', continent: 'Asia'}
{ name: 'china', continent: 'Asia'}
{ name: 'thailand', continent: 'Asia'}
{ name: 'philippines', continent: 'Asia'}
{ name: 'singapore', continent: 'Asia'}
{ name: 'malaysia', continent: 'Asia'}
{ name: 'vietnam', continent: 'Asia'}
{ name: 'hong kong', continent: 'Asia'}
{ name: 'saudi arabia', continent: 'Asia'}
{ name: 'taiwan', continent: 'Asia'}
{ name: 'cambodia', continent: 'Asia'}
{ name: 'myanmar', continent: 'Asia'}
{ name: 'laos', continent: 'Asia'}
{ name: 'iran', continent: 'Asia'}
{ name: 'afghanistan', continent: 'Asia'}
{ name: 'israel', continent: 'Asia'}
{ name: 'qatar', continent: 'Asia'}
{ name: 'mongolia', continent: 'Asia'}
{ name: 'maldives', continent: 'Asia'}
{ name: 'brunei', continent: 'Asia'}
{ name: 'uzbekistan', continent: 'Asia'}
{ name: 'iraq', continent: 'Asia'}
{ name: 'yemen', continent: 'Asia'}
{ name: 'chirstmas island', continent: 'Asia'}
{ name: 'macao', continent: 'Asia'}
{ name: 'armenia', continent: 'Asia'}
{ name: 'lebanon', continent: 'Asia'}
{ name: 'united arab emirates', continent: 'Asia'}
{ name: 'syria', continent: 'Asia'}
{ name: 'jordan', continent: 'Asia'}
{ name: 'kyrgzstan', continent: 'Asia'}
{ name: 'kuwait', continent: 'Asia'}
{ name: 'turkmenist', continent: 'Asia'}
{ name: 'bahrain', continent: 'Asia'}
{ name: 'oman', continent: 'Asia'}
{ name: 'palestine', continent: 'Asia'}
{ name: 'bhutan', continent: 'Asia'}
{ name: 'british indian ocean territory', continent: 'Asia'}
{ name: 'cocos', continent: 'Asia'}
{ name: 'tajikistan', continent: 'Asia'}
{ name: 'timor leste', continent: 'Asia'}
]