let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (grocery) => {
    console.log(grocery);
};

console.log(groceries.fruits.forEach(displayGroceries));

const cloneGroceries = () => {
    let user = client; // Creating a copy of the `client` variable
    client = Betty; // Modifying the `client` variable

    const shopping = { ...groceries }; // Creating a shallow copy of the `groceries` object
    shopping.totalPrice = '35$'; // it updates the value of the totalPrice key in the object that both groceries and shopping point to. 
    shopping.other.payed = false; // modifications to nested properties (like payed) will also be visible through any reference since they refer to the same object in memory.
};

cloneGroceries()
console.log(user); // Output: John
// console.log(client); // Output: Betty