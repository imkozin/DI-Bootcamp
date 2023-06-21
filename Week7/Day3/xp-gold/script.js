// Exercise 1 : Divisible By Three
let numbers = [123, 8409, 100053, 333333333, 7]

// for (let i in numbers) {
//     if (numbers[i] % 3 === 0) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

for ( let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log(numbers[i], true)
    } else {
        console.log(numbers[i], false)
    }
}

// Exercise 2 : Attendance

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

// Prompt the student for their name.
let userName = prompt('Enter your name');

// If the name is in the object, console.log the name of the student and the country they come from.
// For example: "Hi! I'm [name], and I'm from [country]."
// Hint: You don’t need to use a for loop, just look up the statement if ... in

// If the name is not in the object, console.log: "Hi! I'm a guest."

if (userName in guestList) {
    let country = guestList[userName];
    console.log('Hi! I\'m ' + userName + ', and I\'m from ' + country)
    } else {
        console.log("Hi! I'm a guest.")
}

// Exercise 3 : Playing With Numbers

let age = [20,5,12,43,98,55];

// 1. Console.log the sum of all the numbers in the age array.
let sum = 0
for (let i in age) {
    sum += age[i]
}
console.log(sum)
// 2. Console.log the highest age in the array.
let highest = 0
for (let h in age) {
    if (age[h] > highest) {
        highest = age[h]
    }
}
console.log(highest)