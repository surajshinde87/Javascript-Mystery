
//  EX 1
function outer() {
  let outerVar = 'I am from outer';

  function inner() {
    console.log(outerVar); 
  }

  inner();
}

outer();

// EX 2
let name = 'Global';

function printName() {
  console.log(name);
}

function caller() {
  let name = 'Caller';
  printName(); // Still prints "Global"
}

caller();

// EX 3
function createCounter() {
  let count = 0; // Lexical scope variable

  return function() {
    count += 1; // Accessing the outer function's variable
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1    
console.log(counter()); // 2

// Bullet points:
// Lexical scope refers to the visibility of variables in nested functions. 
// Variables defined in an outer function are accessible to inner functions.
// Inner functions can access variables from their parent scope, but not vice versa.
// The outer function's variables are not accessible to the inner function if they are not defined in the outer scope.