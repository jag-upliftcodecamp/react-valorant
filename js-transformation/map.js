// ARRAY: Favorite colors
const faveColors = ['Pink', 'Blue', 'Red', 'Black', 'Maroon', 'White'];

const upperColors = faveColors.map(color => {
  // IF color is 3 characters or less
  //   THEN just return
  if (color.length <= 3){
    return;
  }
  
  return color.toUpperCase();
})

console.log('upperColors:', upperColors)















const lowerColor = (color) => {
  let lower = color.toLowerCase();
  return lower;
}

const newFaveColor = faveColors.map(lowerColor);
// console.log('newFaveColor:', newFaveColor)



//const upperColors = faveColors.map(color => {
//  return color.toUpperCase();
//});