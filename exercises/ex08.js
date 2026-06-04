// Exercise 8: Tag search index
//
// Build an object where each key is a product tag.
// Each value should be an array of product names that contain that tag.
// Sort each product-name array alphabetically.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const products = require('../data/products.json');

const lodashSolution = _.chain(products)
.flatMap(product =>
  product.tags.map(tag => ({
    tag,
    name: product.name
  }))
)
.groupBy('tag')
.mapValues(items =>
  _.sortBy(items.map(i => i.name))
)
.value();
console.log(lodashSolution);

/*
Expected output:
{
  audio: [ 'Legacy MP3 Player', 'Noise Cancel Headphones' ],
  bedroom: [ 'Cotton Sheet Set' ],
  breakfast: [ 'Protein Granola' ],
  camping: [ 'Camp Chair', 'Solar Lantern' ],
  coffee: [ 'Espresso Beans 1kg' ],
  creative: [ 'Drawing Tablet S', 'Kids Watercolor Set' ],
  daily: [ 'Espresso Beans 1kg', 'Insulated Bottle', 'Planner Weekly' ],
  display: [ 'Studio Monitor 27' ],
  durable: [ 'Cast Iron Pan' ],
  filter: [ 'Air Purifier Mini' ],
  fitness: [ 'Protein Granola' ],
  furniture: [ 'Standing Desk Basic' ],
  gift: [ 'Ceramic Dinner Set', 'Dark Chocolate Box', 'Fountain Pen Classic' ],
  health: [ 'Air Purifier Mini', 'Smart Scale' ],
  hiking: [ 'Rain Shell Jacket', 'Trail Backpack 35L' ],
  kids: [ 'Kids Watercolor Set' ],
  kitchen: [ 'Cast Iron Pan', 'Ceramic Dinner Set', 'Olive Oil Reserve' ],
  lighting: [ 'Desk Lamp Pro', 'Solar Lantern' ],
  office: [
    'Aero Keyboard',
    'Desk Lamp Pro',
    'Drawing Tablet S',
    'Fountain Pen Classic',
    'Laptop Sleeve 14',
    'Metro Mouse',
    'Notebook 3 Pack',
    'Planner Weekly',
    'Standing Desk Basic',
    'USB-C Travel Hub'
  ],
  organic: [ 'Organic Green Tea' ],
  organizer: [ 'Packing Cube Set' ],
  premium: [
    'Adjustable Dumbbell',
    'Aero Keyboard',
    'Carry-On Spinner',
    'Dark Chocolate Box',
    'Fountain Pen Classic',
    'Noise Cancel Headphones',
    'Olive Oil Reserve',
    'Studio Monitor 27'
  ],
  running: [ 'Running Belt' ],
  school: [ 'Notebook 3 Pack' ],
  smart: [ 'Smart Scale' ],
  strength: [ 'Adjustable Dumbbell', 'Resistance Band Kit' ],
  studio: [ 'Yoga Mat Align' ],
  tea: [ 'Organic Green Tea' ],
  textile: [ 'Cotton Sheet Set' ],
  travel: [
    'Carry-On Spinner',
    'Insulated Bottle',
    'Laptop Sleeve 14',
    'Noise Cancel Headphones',
    'Packing Cube Set',
    'Resistance Band Kit',
    'Running Belt',
    'Trail Backpack 35L',
    'Travel Pillow',
    'USB-C Travel Hub'
  ],
  weather: [ 'Rain Shell Jacket' ],
  wellness: [ 'Yoga Mat Align' ],
  wireless: [ 'Aero Keyboard', 'Metro Mouse' ]
}
*/
