// Exercise 1 : Location
// Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`); // I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2: Display Student Info
// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
function displayStudentInfo(objUser){
    let {first, last} = objUser
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});
//output : 'Your full name is Elie Schoppik'

// Exercise 3: User & Id

const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:

const userData = Object.entries(users);
console.log(userData);
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
const updatedUserData = userData.map(([user, id]) => [user, id*2]);
console.log(updatedUserData);
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// Exercise 4 : Person Class

// Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); // object

// Exercise 5 : Dog Class

class Dog {
  constructor(name) {
    this.name = name;
  }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?

  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] false
// {} === {} false


// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; // { number: 5 }; 
const object3 = object2;  // { number: 5 }; 
const object4 = { number: 5 }; // { number: 5 }; 

object1.number = 4;
console.log(object1.number) // 4
console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5


// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …
class Animal {
    constructor(name, type, color) {
        this.nameA = name;
        this.typeA = type;
        this.colorA = color
    }
}

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.
class Mamal extends Animal {
    constructor(name, type, color, animalVoice){
        super(name, type, color)
        this.voiceA = animalVoice
    }
    sound(animalVoice) {
        return `${animalVoice} I'm a ${this.typeA} named ${this.nameA} and I'm ${this.colorA}`;
    }
}

const cat = new Mamal("Furguson", 'cat', 'black', 'Meow')
console.log(cat.sound('Meow'))

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
const cow = new Mamal('Lily', 'cow', 'brown and white', 'Moooo')
console.log(cow.sound('Moooo'))

// For example: Moooo I'm a cow, named Lily and I'm brown and white

var employee = {    // Object we want to destructure
  firstname: 'Jon',
  lastname: 'Snow',
  dateofbirth: '1990'
};

// // Destructuring the object into variables without 
// // assigning default values 
// var { firstname, lastname, country } = employee;
// console.log("Without setting default values")
// console.log( firstname, lastname, country);

// // Destructuring the object into variables by 
// // assigning default values 
// var { firstname = 'default firstname', 
//     lastname = 'default lastname', 
//     country = 'default country' } = employee;
// console.log("\n After setting default values")
// console.log( firstname, lastname, country);