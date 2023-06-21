// Exercise 1 : Find The Numbers Divisible By 23
// Create a function call displayNumbersDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.
// function displayNumbersDivisible() {
//     let sum = 0;
//     let numbers = [];
//     for (let i=0; i <= 500; i++) {
//         if (i % 23 === 0) {
//             numbers.push(i);
//             sum += i;
//         }
//     } 
//     console.log(numbers);
//     console.log(sum);
// }

// displayNumbersDivisible()

// Bonus: Add a parameter divisor to the function.
// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
// and their sum

function displayNumbersDivisible(divisor) {
    let sum = 0;
    let numbers = [];
    for (let i=0; i <= 500; i++) {
        if (i % divisor === 0) {
            numbers.push(i);
            sum += i;
        }
    } 
    console.log(numbers);
    console.log(sum);
}

// displayNumbersDivisible(45)

// Exercise 2 : Shopping List
// Add the stock and prices objects to your js file.
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

const shoppingList = ['banana', 'orange', 'apple']

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

function myBill () {
    let sum = 0
    for (let item of shoppingList) {
        if (item in stock) {
            sum += prices[item];
            stock[item] -= 1;
        }
    } console.log(sum)
}

// Call the myBill() function.
// myBill()

// Bonus: If the item is in stock, decrease the item’s stock by 1

// Exercise 3 : What’s In My Wallet ?
// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.

function changeEnough(itemPrice, amountOfChange) {
    let total = 0;
    let change = [0.25, 0.1, 0.05, 0.01]
    for (let i = 0; i < amountOfChange.length; i++) {
        total += change[i] * amountOfChange[i];
        if (total >= itemPrice) {
            return true;
        } else {
            return total;
        }
    }
}

// console.log(changeEnough(4.25, [25, 20, 5, 0]))
// console.log(changeEnough(14.11, [2,100,0,0]))
// console.log(changeEnough(0.75, [0,0,20,5]))

// Exercise 4 : Vacations Costs
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost() {
    const price = 140;
    let total = 0;
    do { 
        numberOfNights = prompt('How many nights would you like to stay?')
    } while (isNaN(numberOfNights));
    total = numberOfNights * price;
    return total;
}

// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

function planeRideCost() {
    let destination = prompt('What is your destination?');
    while (typeof destination !== 'string') {
        destination = prompt('Please enter a valid destination?');
    } if (destination === 'London') {
        return 183;
    } else if (destination === 'Paris') {
        return 220;
    } else {
        return 300;
    }
}

// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost () {
    let carDays = prompt('For how long do you need a car?');
    let carCost = 40;
    let total = carDays * carCost;
    while (isNaN(carDays)) {
        carDays = prompt('Please enter a valid number of days:');
    }
    if (carDays > 10) {
            total *= 0.95;
    } return total;
}

//  that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

function totalVacationCost() {
    let total;
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    total = hotel + plane + car;
    return `The car cost: ${car}$, the hotel cost: ${hotel}$, the plane tickets cost: ${plane}$. Total: ${total}$`;
}


// console.log(totalVacationCost())

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

function hotelCost(nights) {
    return nights * 140;
}

function planeRideCost(destination) {
    if (destination === 'London') {
        return 183;
    } else if (destination === 'Paris') {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost(days) {
    let carCost = 40;
    let total = days * carCost;
    if (days > 10) {
            total *= 0.95;
    } return total;
}

function totalVacationCost() {
    let totalAmount = 0;
    do { 
        nights = prompt('How many nights would you like to stay?');
    } while (isNaN(nights));

    do {
        destination = prompt('What is your destination?');
    } while (!isNaN(destination));

    do {
        days = prompt('For how long do you need a car?');
    } while (isNaN(days));


    totalAmount = hotelCost(nights) + planeRideCost(destination) + rentalCarCost(days);
    return `The car cost: ${rentalCarCost(days)}$, the hotel cost: ${hotelCost(nights)}$, the plane tickets cost: ${planeRideCost(destination)}$. Total: ${totalAmount}$`;
}

// console.log(totalVacationCost())


// Exercise 5 : Users
// Using Javascript:
// Retrieve the div and console.log it
console.log(document);

const getDiv = document.getElementById('container');
console.log(getDiv)

// Change the name “Pete” to “Richard”.
const changeLi = document.body.children[1].children[1];
changeLi.textContent = 'Richard';

// Delete the second <li> of the second <ul>.
const deleteLi = document.body.children[2].children[1].remove();

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
const allListClass = document.querySelectorAll('ul');
for (let el of allListClass) {
    const firstLi = el.querySelector('li');
    firstLi.textContent = 'Ivan';
}

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
const getUl = document.getElementsByClassName('list');
for (let elem of getUl) {
    elem.classList.add('student_list');
}

// Add the classes university and attendance to the first <ul>.
const getFirstUl = document.querySelector('ul');
let addClasses = getFirstUl.classList.add('university', 'attendance');

console.log(getFirstUl.classList); 

// Add a “light blue” background color and some padding to the <div>.
getDiv.style.backgroundColor = 'lightblue';
getDiv.style.padding = '2em';

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
const getLastLi = getFirstUl.nextElementSibling.lastElementChild;
getLastLi.hidden = true;

// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
getFirstUl.lastElementChild.style.border = '2px solid black';

// Change the font size of the whole body.
document.body.style.fontSize = '2em';

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if(getDiv.style.backgroundColor === 'lightblue'){
    alert("Hello Ivan and Richard");
}