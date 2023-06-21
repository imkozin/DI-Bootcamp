const people = ["Greg", "Mary", "Devon", "James"];

// Write code to remove “Greg” from the people array.
people.splice(0, 1)

// Write code to replace “James” to “Jason”.
people.splice(-1, 1, 'Jason')

// Write code to add your name to the end of the people array.
people.push('Ivan')
console.log(people)

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
const index = people.indexOf('Mary');
console.log(index)

// Write code to make a copy of the people array using the slice method.
const people2 = people.slice()
console.log(people2)

// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
const people3 = people.slice(1)
console.log(people3)

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people)
const indexFoo = people.indexOf('Foo')
console.log(indexFoo)
// because there is no such value in the array

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
console.log(people)
const last = people.length-1
console.log(people[last])


// Using a loop, iterate through the people array and console.log each person.
console.log(people)
for (let person of people) {
    console.log(person)
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
console.log(people)
for (let i of people ) {
    if (i === 'Devon') {
        break;
    }
    console.log(i)
}

// Create an array called colors where the value is a list of your five favorite colors.
const colors = ['green', 'blue', 'black', 'grey', 'white']
console.log(colors)
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i+1} choice is ${colors[i]}`)
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
const suf = ['st', 'nd', 'rd', 'th', 'th']
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i+1}${suf[i]} choice is ${colors[i]}`)
}

// for (let i = 0; i < colors.length; i++) {
//     if (i === 0) {
//     console.log(`My ${i+1}st choice is ${colors[i]}`)
// } else if (i === 1) {
//     console.log(`My ${i+1}nd choice is ${colors[i]}`)
// } else if (i === 2) {
//     console.log(`My ${i+1}rd choice is ${colors[i]}`)
// } else {
//     console.log(`My ${i+1}th choice is ${colors[i]}`)
// }
// }

// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

let usernumber = prompt('Enter a number')
console.log(typeof parseInt(usernumber))

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
let usernum = 0
do {
    usernum = parseInt(prompt('Enter a number:'));
    console.log("Your number is less than 10");
}
while (usernum < 10);

// Exercise 4 : Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log the number of floors in the building.
console.log(building['numberOfFloors'])

// Console.log how many apartments are on the floors 1 and 3.
console.log(building['numberOfAptByFloor']['firstFloor'] + building['numberOfAptByFloor']['thirdFloor'])

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building['nameOfTenants'][1], building['numberOfRoomsAndRent']['dan'][0])

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
const sum = building['numberOfRoomsAndRent']['sarah'][1] + building['numberOfRoomsAndRent']['david'][1]
const dan_rent = building['numberOfRoomsAndRent']['dan'][1]
console.log(sum, dan_rent)
if (sum > dan_rent) {
    console.log(dan_rent + 200)
}

// Exercise 5 : Family
// Create an object called family with a few key value pairs.
let family = {
    father: "John",
    mother: "Jane",
    children: ["Emily", "Michael"],
    pets: {
      dog: "Max",
      cat: "Whiskers"
    }
  };  

// Using a for in loop, console.log the keys of the object.
for (let key in family) {
    console.log(key)
}
// Using a for in loop, console.log the values of the object.
for (let key in family) {
    console.log(family[key])
}

// Exercise 6 : Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let sentence = []
for (let k in details){
    // console.log(k),
    // console.log(details[k])
    sentence.push(`${k} ${details[k]}`)
}
let output = sentence.join(' ');
console.log(output);

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
let letters = []
for (let char of names) {
    letters.push(char[0])
}
let sortedLetters = letters.sort().join('')
console.log(sortedLetters)
// Console.log the name of their secret society. The output should be “ABJKPS”