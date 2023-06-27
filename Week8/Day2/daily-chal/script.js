let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (grocery) => {
    console.log(grocery);
};

console.log(groceries.fruits.forEach(displayGroceries));

const cloneGroceries = () => {
    let user = client; // Creating a copy of the `client` variable
    client = 'Betty'; // Modifying the `client` variable

    console.log(user); // Output: John
    console.log(client); // Output: Betty

    const shopping = { ...groceries }; // Creating a shallow copy of the `groceries` object
    shopping.totalPrice = '35$'; // it updates the value of the totalPrice key in the object that both groceries and shopping point to. 
    shopping.other.paid = false; // modifications to nested properties (like payed) will also be visible through any reference since they refer to the same object in memory.
    console.log('shopping', shopping);
    console.log('groceries', groceries);
};

displayGroceries(groceries);
cloneGroceries()

let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);