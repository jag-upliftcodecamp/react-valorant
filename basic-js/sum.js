function sum(paragraph) {
  let arr = [];

  for (let i = 0; i <= paragraph.length; i++) {
    if (i === 1) {
      //   arr.push(paragraph[i]);
      return;
    }
  }

  console.log(arr);
}

// Invoke
// sum(['Si', 'Rom', 'rin', 'ang', 'may', 'bangs']);
// sum(['Si', 'Mark', 'rin', 'ang', 'may', 'bangs']);

const paragraph = ['Si', 123, false, null, 'Rom', 'rin', 'ang', 'may', 'bangs'];
let arr = [];

for (let i = 0; i < paragraph.length; i++) {
  console.log('🔴 BEFORE RETURN', i);
  if (typeof paragraph[i] !== 'string') {
    console.log('🟢 i is not a string');
    //   arr.push(paragraph[i]);
    continue; // SKIP 
    break; // STOP THE LOOP
    return; // STOP EVERYTHING
  }
  console.log('🔵 AFTER CONDITION', i);
}

console.log('RETURN LOOP:', arr);
