// Exercise 1 : Dog Age To Human Years


const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];

data.forEach(item => {
    item.humanYears = item.age * 7
})
console.log(data)


const sumAge = data.reduce((total, item) => {
    return total + item.age * 7
}, 0)
console.log(sumAge);
// Use a loop to find the sum of the dogs’ ages in human years.
// Hint: 1 dog year equals 7 human years
// Using the reduce() method, find the sum of the dogs’ ages in human years.

// Exercise 2 : Email
// Clean up this email to have no whitespaces. Do it in a single line (return a new string).
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '.trim()
console.log(userEmail3);

// Exercise 3 : Employees #3

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// const newUsers = Object.fromEntries(
//     users.map(user => [`${user.firstName} ${user.lastName}`, user.role]));

const newUsers = {};
users.forEach(user => {
  const fullName = `${user.firstName} ${user.lastName}`;
  newUsers[fullName] = user.role;
});

console.log(newUsers);
// Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.
// Example: { 'Bradley Bouley': 'Full Stack Resident' }
// Hint: Step one, create an empty object.

