// Exercise 1 : Colors
// Using this array :
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((element, index) => {
//     let sentence = `${index + 1}# choice is ${element}`;
//     console.log(sentence);
// });

// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

// const isViolet = colors.some((color) => color === 'Violet');
// isViolet ? console.log('Yeah') : console.log('No...');

// const checkViolet = colors.some((color) => {
//     if (color==='Violet') {
//         console.log('Yeah');
//         return true;
//     } else {
//         return false;
//     }
// });

// if (!checkViolet) {
//     console.log('No...');
// };

// Exercise 2 : Colors #2
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
// let choice = '';

// colors.forEach((el, index) => {
//     if (index === 0) {
//         choice = `${index+1}${ordinal[1]} choice is ${el}`;
//         console.log(choice);
//     } else if (index === 1) {
//         choice = `${index+1}${ordinal[2]} choice is ${el}`;
//         console.log(choice);
//     } else if (index === 2) {
//         choice = `${index+1}${ordinal[3]} choice is ${el}`;
//         console.log(choice);
//     } else {
//         choice = `${index+1}${ordinal[0]} choice is ${el}`;
//         console.log(choice);
//     }
// })

colors.forEach((el, index) => {
    const suffix = index + 1 <= 3 ? ordinal[index + 1] : ordinal[0];
    const choice = `${index+1}${suffix} choice is ${el}.`;
    console.log(choice);
});

// Exercise 3 : Analyzing
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // ['bread', "carrot", "potato", 'chicken', "apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]); // ['U', 'S', 'A']
// the spread operator is used to create a new array by spreading the characters of the country string. 

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray); // [undefined, undefined]

// Exercise 4 : Employees
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
const welcomeStudents = users.map((element) => `Hello ${element.firstName}`);
console.log(welcomeStudents);

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents
const fullStack = users.filter((element) => element.role.includes('Full Stack Resident'))
console.log(fullStack);
// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const fullStackNames = users.filter((element) => element.role.includes('Full Stack Resident')).map((element) => element.lastName);
console.log(fullStackNames);

// Exercise 5 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.
const str = epic.reduce((acc, element) => acc + ' ' + element);
console.log(str); 

// Exercise 6 : Employees #2

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.

const passed = students.filter((student) => {
    return student.isPassed === true
});
console.log(passed);
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
passed.forEach((element, index) => {
    console.log(`Good job ${element.name}, you passed the course in ${element.course}`);
});



