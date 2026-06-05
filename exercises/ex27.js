// Exercise 27: Highly rated movies
//
// Return all movies with a rating of 8.0 or higher.
// Each item should include: title, genre, rating.
// Sort by rating descending, then by title ascending.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const movies = require('../data/movies.json');

const lodashSolution = _.chain(movies)
.filter(movie => movie.rating >= 8.0)
.map(movie => ({
  title: movie.title,
  genre: movie.genre,
  rating: movie.rating
}))
.orderBy(['rating', 'title'], ['desc', 'asc'])
.value();

console.log(lodashSolution);

/*
Expected output:
[
  { title: 'Solar Drift', genre: 'Sci-Fi', rating: 8.4 },
  { title: 'Silent Circuit', genre: 'Sci-Fi', rating: 8.3 },
  { title: 'Stone Horizon', genre: 'Adventure', rating: 8.2 },
  { title: 'Harbor Lights', genre: 'Drama', rating: 8.1 },
  { title: 'North Harbor', genre: 'Drama', rating: 8.1 },
  { title: 'Glass Meadow', genre: 'Drama', rating: 8 },
  { title: 'Iron Valley', genre: 'Action', rating: 8 },
  { title: 'Moonlit Train', genre: 'Romance', rating: 8 }
]
*/
