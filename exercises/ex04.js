// Exercise 4: Language popularity
//
// Create a ranked list of languages used by countries.
// Return the 10 most common languages.
// Each item should include: language, countryCount.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const countries = require('../data/countries.json');

const lodashSolution = _.chain(countries)
.flatMap(country => country.languages)
.countBy()
.toPairs()
.orderBy(pair => pair [1], 'desc') // Feedback: Add language as a secondary alphabetical sort for languages with the same count.
.take(10)
.map(([language, countryCount]) => ({
  language,
  countryCount
}))
.value();

console.log(lodashSolution);

/*
Expected output:
[
  { language: 'English', countryCount: 15 },
  { language: 'French', countryCount: 10 },
  { language: 'Arabic', countryCount: 5 },
  { language: 'Swahili', countryCount: 4 },
  { language: 'Hausa', countryCount: 2 },
  { language: 'Portuguese', countryCount: 2 },
  { language: 'Spanish', countryCount: 2 },
  { language: 'Tamazight', countryCount: 2 },
  { language: 'Afrikaans', countryCount: 1 },
  { language: 'Akan', countryCount: 1 }
]
*/
