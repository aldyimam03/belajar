// impure function
let value = 0;

function addWith(addingValue) {
  value += addingValue;
  console.log(`Current value is ${value}`);
  return value;
}

const result1 = addWith(1); // Output: Current value is 1
const result2 = addWith(1); // Output: Current value is 2
const result3 = addWith(1); // Output: Current value is 3

console.log(result1, result2, result3); // Output: 1, 2, 3

// pure function 
function addWithAgain(value, addingValue) {
    return value + addingValue;
  }
  
  const result1Again = addWithAgain(0, 1);
  console.log(`result1 is ${result1Again}`); // Output: result1 is 1
  
  const result2Again = addWithAgain(result1Again, 1);
  console.log(`result2 is ${result1Again}`); // Output: result2 is 2
  
  const result3Again = addWithAgain(result2Again, 1);
  console.log(`result3 is ${result3Again}`); // Output: result3 is 3
  
  console.log(result1Again, result2Again, result3Again); // Output: 1, 2, 3