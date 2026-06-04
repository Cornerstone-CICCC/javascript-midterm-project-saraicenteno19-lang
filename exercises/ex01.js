// Exercise 1: African countries by population
//
// Return the 5 most populated countries in Africa.
// Each item should include: name, population, subregion.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const countries = require('../data/countries.json');

const lodashSolution = _.chain(countries)
  .filter(country => country.region === 'Africa')
  .orderBy('population', 'desc')
  .take(5)
  .map(country => ({
    name: country.name,
    population: country.population,
    subregion: country.subregion
  }))
  .value();
console.log(lodashSolution);

/*
Expected output:
[
  { name: 'Nigeria', population: 223804632, subregion: 'Western Africa' },
  { name: 'Ethiopia', population: 126527060, subregion: 'Eastern Africa' },
  { name: 'Egypt', population: 112716598, subregion: 'Northern Africa' },
  {
    name: 'Democratic Republic of the Congo',
    population: 102262808,
    subregion: 'Middle Africa'
  },
  { name: 'Tanzania', population: 67438106, subregion: 'Eastern Africa' }
]
*/
