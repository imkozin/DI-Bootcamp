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
const extractedNumber = extractNumber(trapped);
console.log(extractedNumber);
