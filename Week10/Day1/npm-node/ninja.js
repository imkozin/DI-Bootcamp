// const faker = require('faker')

// const users = [];

// function addUser() {
//     const user = {
//         name : faker.name.findName(),
//         address : {
//             street: faker.address.streetName(),
//             country: faker.address.country()
//         }
//     };

//     users.push(user);
// };

// for (let i = 0; i<10; i++) {
//     addUser();
// }

// console.log(users)

function returnNumbers(str) {
    const newStr = str.replace(/\D/g, '');
    console.log(newStr);
}

returnNumbers('k5k3q2g5z6x9bn');

function validateName() {
    const regex = /^[A-Z][a-zA-Z]* [A-Z][a-zA-Z]*$/;

    const userInput = prompt('Please enter your name: ');
    while (!regex.test(userInput)){
        userInput = prompt("Enter a valid username")
    }
}

validateName()

