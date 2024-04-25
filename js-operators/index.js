// Add your codes here

// 1. Collect and Initialize Variables
const userName = 'Juan Dela Cruz';

let userAge = '30'; //data is set as string (word)

let isStudent = 'true'; //data is set as string (word)

let favoriteNumber = '42'; //data is set as string (word)


// 2. Perform Type Coercion (Change correct format)
userAge = Number(userAge)
favoriteNumber = Number(favoriteNumber)
isStudent = isStudent === 'yes'; // Converts to true if "yes", false otherwise

// or
isStudent = Boolean(isStudent === 'yes');

// 3. Format and Output a Summary Message
let summaryMessage = `Hello, my name is ${userName}. I am ${userAge} years old. 
Am I a student? ${isStudent ? 'Yes' : 'No'}
My favorite number is ${favoriteNumber}.`;

console.log(summaryMessage);

// 4. Use typeof for Debugging
console.log(`userName is of type: ${typeof userName}`);
console.log(`userAge is of type: ${typeof userAge}`);
console.log(`isStudent is of type: ${typeof isStudent}`);
console.log(`favoriteNumber is of type: ${typeof favoriteNumber}`);