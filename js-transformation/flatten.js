const numbersOne = [1, 2, 3, 4, 5];
const numbersTwo = [6, 7, 8, 9, 10];

// .concat()
// const combineNumbers = numbersOne.concat(numbersTwo)

// or spread operator
const combineNumbers = [...numbersOne, ...numbersTwo]
console.log('combineNumbers:', combineNumbers);

const totalNumbers = combineNumbers.reduce((accumulator, number) => {
  return accumulator + number;
});

console.log('totalNumbers: ', totalNumbers);



