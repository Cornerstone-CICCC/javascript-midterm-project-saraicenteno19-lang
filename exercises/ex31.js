// Exercise 31: Electronics inventory value
//
// Return all electronics products.
// Each item should include: name, stock, inventoryValue.
// inventoryValue is price multiplied by stock, rounded to 2 decimal places.
// Sort by inventoryValue descending.
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
  { name: 'Studio Monitor 27', stock: 18, inventoryValue: 7019.82 },
  {
    name: 'Noise Cancel Headphones',
    stock: 25,
    inventoryValue: 6249.75
  },
  { name: 'Metro Mouse', stock: 110, inventoryValue: 5498.9 },
  { name: 'Aero Keyboard', stock: 42, inventoryValue: 5459.58 },
  { name: 'USB-C Travel Hub', stock: 64, inventoryValue: 5119.36 },
  { name: 'Laptop Sleeve 14', stock: 86, inventoryValue: 3439.14 },
  { name: 'Drawing Tablet S', stock: 12, inventoryValue: 2399.88 },
  { name: 'Legacy MP3 Player', stock: 6, inventoryValue: 359.94 }
]
*/
