// Exercise 25: Best movie from each decade
//
// Group movies into decades using releaseYear.
// Examples: 2014 becomes "2010s", 2022 becomes "2020s".
// For each decade, return the highest-rated movie.
// Each item should include: decade, title, releaseYear, rating.
// Sort by decade alphabetically.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const movies = require('../data/movies.json');

const lodashSolution = _.chain(movies)
.groupBy(movie => `${Math.floor(movie.releaseYear / 10) * 10}s`)
.map((group, decade) => {
  const bestMovie = _.maxBy(group, 'rating');
  return {
    decade,
    title: bestMovie.title,
    releaseYear: bestMovie.releaseYear,
    rating: bestMovie.rating
  };
})
.sortBy('decade')
.value();

console.log(lodashSolution);

/*
Expected output:
[
  { decade: '2010s', title: 'North Harbor', releaseYear: 2018, rating: 8.1 },
  { decade: '2020s', title: 'Solar Drift', releaseYear: 2022, rating: 8.4 }
]
*/
