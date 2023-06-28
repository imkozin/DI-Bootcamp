// Exercise 1 : Print Full Name
// Create a function called printFullName.


function printFullName({first, last}) {
    console.log(`Your full name is ${first} ${last}`);
}

// The function should return a string like the example below
printFullName({first: 'Elie', last:'Schoppik'}) 
// // 'Your full name is Elie Schoppik`

// Destructure this object directly from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)


// The output of the printFullName function should be the exact same as the displayStudentInfo function. (Exercise XP)

// Exercise 2 : Keys And Values
// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.
function keysAndValues(userObj) {
    const keys = Object.keys(userObj);
    const values = Object.values(userObj);
    console.log(keys, values);
}

keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]


// Exercise 3 : Counter Class
// Analyze the code below, what will be the output?
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();
// Since counterOne and counterTwo refer to the same object, the count property is incremented by 1
const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count); // output: 3