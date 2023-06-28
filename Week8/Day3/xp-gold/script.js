const myArray = [1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  });

console.log(myArray) // [2, 4, 6]

const conArr = [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );

  console.log(conArr); // output is [1, 2, 0, 1, 2, 3].


const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    // alert(num);
    return num * 2;
})

// console.log(newArray); // [2, 4, 8, 10, 16, 18]
// i is index of num in array


// Exercise 4 : Nested Arrays
// Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const modifiedArray = array.flat(Infinity);
console.log(modifiedArray);
// Bonus Try to do it on one line.
// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

const modifiedGreeting = greeting.map(arr => arr.join(" "));
console.log(modifiedGreeting);
// Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.const greeting = [['Hello', 'young', 'grasshopper!'], ['you', 'are'], ['learning', 'fast!']];
const greetingString = greeting.map(arr => arr.join(' ')).join(' ');
console.log(greetingString);

// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const extractedNumber = trapped.flat(Infinity);
console.log(extractedNumber);

// Exercise 1: Sum Elements
// Write a JavaScript program to find the sum of all elements in an array.
function findSum(arr) {
  const total = arr.reduce((a,b) => a + b, 0);
  return total
}

console.log(findSum([1, 2, 3, 4]))

// Exercise 2 : Remove Duplicates
// Write a JavaScript program to remove duplicate items in an array.
function removeDuplicate(arr) {
  return arr.filter((elem, index) => {
    return arr.indexOf(elem) === index
  });
}

console.log(removeDuplicate(["apple", "mango", "apple",
"orange", "mango", "mango"]))
// Exercise 3 : Remove Certain Values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
function removeNone(arr) {
  return arr.filter(item => {
    return Boolean(item);
  })
}
console.log(removeNone([NaN, 0, 15, false, -22, '',undefined, 47, null]))

// Exercise 4 : Repeat Please !
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
function repeatFunc(str, num) {
  return str.repeat(num)
}
console.log(repeatFunc('Ha!',3));
// "Ha!Ha!Ha!"


// Exercise 5 : Turtle & Rabbit

// Using this code :

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
// Line up the Turtle and the Rabbit at the start line.
// Expected Output:

//     When you write:

    console.log(startLine);
    console.log(turtle.padStart(startLine.length));
    console.log(rabbit.padStart(startLine.length));

//     It should look like this:

//     '     ||<- Start line'
//     '       🐢'
//     '       🐇'


// What happens when you run 
// turtle = turtle.trim().padEnd(9, '=');

