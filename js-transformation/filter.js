// ARRAY: Favorite colors
const faveColors = ['Pink', 'Blue', 'Red', 'Black', 'Maroon', 'White'];

const filteredFaveColors = faveColors.filter((color) => {
  return color[0] !== 'B';
  // IF first letter is "B"
  if (!(color[0] === 'B')) {
    //    THEN return false
    return false;
    // ELSE
  } else {
    //    THEN return true
    return true;
  }

  console.log(color, color[0] === 'B' && color[1] === 'l');
});

// console.log('faveColors:', faveColors);
// console.log('filteredFaveColors:', filteredFaveColors);

const menu = [
  { id: 1, name: 'Adobo', price: 250 },
  { id: 2, name: 'Sinigang na Baboy', price: 300 },
  { id: 3, name: 'Lechon Kawali', price: 350 },
  { id: 4, name: 'Kare-Kare', price: 400 },
  { id: 5, name: 'Pancit Canton', price: 200 },
  { id: 6, name: 'Chicken Inasal', price: 250 },
  { id: 7, name: 'Bicol Express', price: 280 },
  { id: 8, name: 'Halo-Halo', price: 150 },
  { id: 9, name: 'Lumpiang Shanghai', price: 180 },
  { id: 10, name: 'Bulalo', price: 350 },
];

// FILTER: price less than or equal to 200
const filteredMenu = menu.filter((item, index) => {
  console.log('index:', index, 'item:', item);

  return item.id === 5;
});
  // IF item's price is less than or equal to 200

console.log('filteredMenu:', filteredMenu);






