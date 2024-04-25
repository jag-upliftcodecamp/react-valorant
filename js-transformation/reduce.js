// ARRAY: Favorite colors
const faveColors = ['Pink', 2, 3, 'Blue', 'Red', 'Black', 'Maroon', 'White'];

const allFaveColors = faveColors.reduce((accumulator, color) => {
  // ADD the accumulator and color
  // IF color is Black
  if (color === 'Black') {
    //console.log('color:', color, 'accumulator:', accumulator);
    return accumulator;
  }
  return accumulator + color;
}, 'COLORS:');

// console.log('allFaveColors:', allFaveColors);

const numbers = [1, 2, 3, 4, 5];
const numbersTwo = 10;

const reduceNumbers = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, numbersTwo);

console.log('reduceNumbers:', reduceNumbers);