// #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }



// #1.1 - run in the console:
// funcOne() // 5
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// TypeError: Assignment to constant variable.

//#2
let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()

// When funcThree() is called before funcTwo(), it will display an alert with the message "inside the funcThree function 0" because a is initially assigned the value of 0.
// After calling funcTwo(), a will be assigned the value of 5.
// When funcThree() is called again, it will display an alert with the message "inside the funcThree function 5" because a has been updated to 5.

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// If the variable a is declared with const instead of let, it will throw an error because const variables cannot be reassigned.


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${window.a}`);
}

// #3.1 - run in the console:
// funcFour()
// After executing funcFour(), the value of window.a will be "hello"
// funcFive()
// value a undefined

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix()
// #4.2 What will happen if the variable is declared 
// it declares a new local variable a with the value "test" within the function scope.
// with const instead of let ?
// it will still display the same result because the local variable a shadows the outer variable.

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// Within the if block, it declares a new local variable a with the value of 5, which only exists within the if block scope.
// Outside of the if block, it displays an alert with the message "outside of the if block 2" using the global variable a.
// with const instead of let ?
// If the variable a is declared with const instead of let, it will throw an error because const variables are block-scoped and cannot be redeclared.

// Exercise 2 : Ternary Operator
// Using the code below:

// function winBattle(){
//     return true;
// }

// Transform the winBattle() function to an arrow function.
const winBattle = () => true;
let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints)
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

// Exercise 3 : Is It A String ?

// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:
const isString = (str) => typeof str === 'string' ? true : false;

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

// Exercise 4 : Find The Sum
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const countSum = (a, b) => a + b;
console.log(countSum(2,8));

// Exercise 5 : Kg And Grams

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// First, use function declaration and invoke it.
// function convertToGrams(weightInKg) {
//     return weightInKg * 1000;
//   }
  
// convertToGrams(2); // Output: 2000  
// Then, use function expression and invoke it.
// const convertToGrams = function(weightInKg) {
//     return weightInKg * 1000;
//   };
  
// convertToGrams(2); // Output: 2000
  
// const convertKg = function(weight) {
//     return weight * 1000;
// }; 
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.
const convertToGrams = (weight) => weight * 1000;

console.log(convertToGrams(81));

// Exercise 6 : Fortune Teller

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
// ((job, location, name, num) => {
//     const myDiv = document.getElementById('teller');
//     myDiv.textContent = `You will be a ${job} in ${location}, and married to ${name} with ${num} kids.`;
// })('tennis player', 'Paris', 'Ilya', 3)

// Exercise 7 : Welcome
// John has just signed in to your website and you want to welcome him.
// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.

((username, picture) => {
    const myNav = document.getElementById('navbar');
    const myDiv = document.createElement('div');
    const myImg = document.createElement('img')
    myDiv.setAttribute('id', 'welcome');
    myNav.append(myDiv, myImg);
    myDiv.textContent = `Welcome ${username}`
    myImg.src = `${picture}`;
    myImg.style.width = "50%";
})('John', 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg')

// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

// Exercise 8 : Juice Bar
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
// const myDiv = document.getElementById('juice');
// function makeJuice(size) {
    
//     function addIngredients(first, second, third) {
//         myDiv.textContent = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}.`
//     }
//     addIngredients('apple', 'mango', 'kiwi');
// }

// makeJuice('medium');

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

const myDiv = document.getElementById('juice');
function makeJuice(size) {
    let ingredients = [];

    function addIngredients(first, second, third) {
        ingredients.push(first, second, third);
    }
    addIngredients('apple', 'orange', 'kiwi');
    addIngredients('banana', 'strawberry', 'mango');

    function displayJuice() {
        let order = `The client wants a ${size} juice, containing: `;
        for (let fruit of ingredients) {
            order += fruit + ", ";
        }
        myDiv.textContent = order;
    }
    displayJuice();
}

makeJuice('medium');
