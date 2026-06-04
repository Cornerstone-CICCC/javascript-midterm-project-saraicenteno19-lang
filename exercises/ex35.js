// Exercise 35: Low stock products
//
// Return all products with stock under 30.
// Each item should include: name, category, stock.
// Sort by stock ascending, then by name ascending.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const products = require('../data/products.json');

const lodashSolution = null;

console.log(lodashSolution);

/*
Expected output:
[
  { name: 'Legacy MP3 Player', category: 'Electronics', stock: 6 },
  { name: 'Standing Desk Basic', category: 'Home', stock: 9 },
  { name: 'Drawing Tablet S', category: 'Electronics', stock: 12 },
  { name: 'Adjustable Dumbbell', category: 'Fitness', stock: 15 },
  { name: 'Studio Monitor 27', category: 'Electronics', stock: 18 },
  { name: 'Air Purifier Mini', category: 'Home', stock: 20 },
  { name: 'Rain Shell Jacket', category: 'Outdoor', stock: 22 },
  {
    name: 'Noise Cancel Headphones',
    category: 'Electronics',
    stock: 25
  },
  { name: 'Carry-On Spinner', category: 'Travel', stock: 28 }
]
*/
