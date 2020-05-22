// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation:
console.log("Closure is the ability for a nested function to access variables and their values that are stored in their parent functions. This specific variable is outside the parent function though, global actually. Thinking more broadly, we can see that Closure treats all functions - parent and child - as nested within the global scope, so this nested function can still access that global variable.");


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number.
  For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(index) {
  let total = 0;
  for(let i = 0; i <= index; i++) {
    total += i;
  }

  return total;
}

console.log("Closure Task 2: summation() function using a value of 37 below:");
console.log(summation(37));