// Exercise 5: Product margins
//
// Return the top 8 products by profit margin percentage.
// Formula: ((price - cost) / price) * 100
// Ignore discontinued products.
// Each item should include: id, name, category, marginPercent rounded to 1 decimal place.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const products = require('../data/products.json');

const lodashSolution = _.chain(products)
.filter(product => !product.discontinued)
.map(product => ({
  id: product.id,
  name: product.name,
  category: product.category,
  marginPercent: _.round(
    ((product.price - product.cost) / product.price) * 100,
    1
  
  )
}))

.orderBy('marginPercent',  'desc')
.take(8)
.value();

console.log(lodashSolution);

/*
Expected output:
[
  {
    id: 'P-1018',
    name: 'Resistance Band Kit',
    category: 'Fitness',
    marginPercent: 74
  },
  {
    id: 'P-1019',
    name: 'Running Belt',
    category: 'Fitness',
    marginPercent: 72
  },
  {
    id: 'P-1032',
    name: 'Notebook 3 Pack',
    category: 'Stationery',
    marginPercent: 72
  },
  {
    id: 'P-1035',
    name: 'Packing Cube Set',
    category: 'Travel',
    marginPercent: 71.8
  },
  {
    id: 'P-1033',
    name: 'Travel Pillow',
    category: 'Travel',
    marginPercent: 70.7
  },
  {
    id: 'P-1016',
    name: 'Yoga Mat Align',
    category: 'Fitness',
    marginPercent: 69.7
  },
  {
    id: 'P-1012',
    name: 'Insulated Bottle',
    category: 'Outdoor',
    marginPercent: 69.1
  },
  {
    id: 'P-1029',
    name: 'Kids Watercolor Set',
    category: 'Stationery',
    marginPercent: 67.6
  }
]
*/
