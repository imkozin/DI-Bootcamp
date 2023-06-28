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

// Exercise 4 : Array To Object
// Use a for loop to get this output { x: 1, y: 1, z: 2 };

const newObj = {}
const letters = ['x', 'y', 'z', 'z'];
letters.forEach(letter => {
    if (!newObj[letter]) {
        newObj[letter] = 1
    } else {
        newObj[letter]++;
    }
})
console.log(newObj);

// Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
const count = letters.reduce((acc, letter) => {
    if (acc[letter]) {
        acc[letter]++;
    } else {
        acc[letter] = 1
    }
    return acc;
}, {});

console.log(count)

// Exercise 1 : Menu
const menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
]
// Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
const isDessert = menu.some(item => item.type === 'dessert');
console.log(isDessert ? 'At least one dessert is available' : 'Dessert on stop-list')

// Using an array method, check if all the elements in the array are starter
const isStarter = menu.every(item => item.type === 'starter')
console.log(isStarter)

// Using an array method, check if there is at least one element in the array that is a main course. If not, add a main course of your choice to the array.
const isMain = menu.some(item => item.type === 'main course')
if (!isMain) {
    menu.push({type : 'main course', name : 'Beef Shawarma'})
}
console.log(menu)

// Using an array method, add a key “vegetarian” (a boolean) to the menu array. The value of the key should be true if the name of the course contains at least one element from the vegetarian array.
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"]

const updatedMenu = menu.map(item => {
    const isVegetarian = vegetarian.some(vegItem => item.name.toLowerCase().includes(vegItem.toLowerCase()));
    return {...item, vegetarian: isVegetarian};
});

console.log(updatedMenu);


// Exercise 2 : Chop Into Chunks
// Write a JavaScript function that takes 2 parameters: a string and a number.
// The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.
// Example:

function string_chop(str, num) {
    const result = [];
    for (let i = 0; i < str.length; i += num) {
      const chop = str.slice(i, i + num);
      result.push(chop);
    }
    return result;
  }
  
console.log(string_chop('developers', 2));
// ["de", "ve", "lo", "pe", "rs"] 