// Exercise 7: Quarterly sales winners
//
// For each category, find the product with the highest total yearly unit sales.
// Total yearly sales = q1 + q2 + q3 + q4.
// Return one item per category with: category, productName, totalUnits.
// Sort from highest totalUnits to lowest.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const products = require('../data/products.json');

const lodashSolution = _.chain(products)
.groupBy('category')
.map((items, category) => {
  const bestProduct =_.maxBy(items, product => {
    const sales = product.sales || {};
      return (sales.q1 || 0) +
    (sales.q2 || 0) +
    (sales.q3 || 0) +
    (sales.q4 || 0);
    });
 
    const sales = bestProduct.sales || {};
    const totalUnits =
      (sales.q1 || 0) +
      (sales.q2 || 0) +
      (sales.q3 || 0) +
      (sales.q4 || 0);

  return {
    category,
    productName: bestProduct.name,
    totalUnits

  };
  
})

.orderBy('totalUnits', 'desc')
.value();

console.log(lodashSolution);

/*
Expected output:
[
  { category: 'Grocery', productName: 'Espresso Beans 1kg', totalUnits: 1505 },
  { category: 'Stationery', productName: 'Notebook 3 Pack', totalUnits: 1325 },
  { category: 'Electronics', productName: 'Metro Mouse', totalUnits: 1295 },
  { category: 'Outdoor', productName: 'Insulated Bottle', totalUnits: 1003 },
  { category: 'Fitness', productName: 'Resistance Band Kit', totalUnits: 1001 },
  { category: 'Travel', productName: 'Packing Cube Set', totalUnits: 686 },
  { category: 'Home', productName: 'Cast Iron Pan', totalUnits: 563 }
]
*/
