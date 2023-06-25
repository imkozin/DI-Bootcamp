// Using a DOM property, retrieve the h1 and console.log it.
const myh1 = document.querySelector('h1');
console.log(myh1);

// Using DOM methods, remove the last paragraph in the <article> tag.
const myArticle = document.querySelector('article');
console.log(myArticle);
myArticle.removeChild(myArticle.lastElementChild);

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const myh2 = document.querySelector('h2');
myh2.addEventListener('click', function() {
    myh2.style.backgroundColor = 'red';
});
// myh2.setAttribute('id', 'red');
// myh2.addEventListener('click', changeColor);

// function changeColor(event) {
//     const color = event.target.id;
//     myh2.style.backgroundColor = color;
// }

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
myh3 = document.querySelector('h3');
myh3.addEventListener('click', function() {
    myh3.style.display = 'none';
});

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const button = document.createElement('button');
const text = document.createTextNode('Make Bold')
button.appendChild(text);
myArticle.appendChild(button);


// console.log(allPara);
const myButton = document.querySelector('button');
myButton.addEventListener('click', function() {
    const allPara = myArticle.querySelectorAll('p');
    for (let para of allPara) {
        para.style.fontWeight = 'bold';
    }
});

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// myh1.addEventListener('mouseover', changeFontsize);
// myh1.addEventListener('mouseout', changeFontsize);

myh1.addEventListener('mouseover', function() {
    let myRandomSize = Math.floor(Math.random() * 101);
    myh1.style.fontSize = myRandomSize + 'px';
});

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
const allPara = myArticle.querySelectorAll('p');
const paraTwo = allPara[1];

console.log(paraTwo);

paraTwo.addEventListener('mouseover', fadeOut);

function fadeOut() {
    paraTwo.classList.toggle('fade');
};

// Exercise 2 : Work With Forms
// Retrieve the form and console.log it.
const myForm = document.querySelector('form');
console.log(myForm);
// Retrieve the inputs by their id and console.log them.
const inputFirst = myForm.querySelector('#fname');
const inputSecond = myForm.querySelector('#lname');
const inputThird = myForm.querySelector('#submit');
console.log(inputFirst);
console.log(inputSecond);
console.log(inputThird);

// Retrieve the inputs by their name attribute and console.log them.
myForm.addEventListener('submit', getValuesForm);

function getValuesForm(event) {
    event.preventDefault();
    const valueFisrt = event.target.fname.value;
    const valueSecond = event.target.lname.value;
    console.log(valueFisrt, valueSecond);
    if (valueFisrt === '' && valueSecond === '') {
        alert('no user credentials');
    } else {
        let myUl = document.querySelector('ul');
        let myLi = document.createElement('li');
        myLi.appendChild(document.createTextNode(`${valueFisrt} ${valueSecond}`));
        myUl.appendChild(myLi);
    }
}

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.


// Exercise 3: Transform The Sentence
// Declare a global variable named allBoldItems.
let allBoldItems = [];

const boldItems = document.querySelectorAll('strong');
// console.log(boldItems);

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

function getBoldItems() {
    // const boldItems = document.querySelectorAll('strong');

    for (let i = 0; i < boldItems.length; i++) {
        allBoldItems.push(boldItems[i]);    
    } 
    console.log(allBoldItems);
}

// Create a function called highlight() that changes the color of all the bold text to blue.
// boldItems.addEventListener('mouseover', highlight)

function highlight() {
    let blueItems = allBoldItems;
    for (let item of blueItems) {
        item.style.color = 'blue';
    }
}

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
const lastPara = document.body.lastElementChild.previousElementSibling;

function returnItemsToDefault() {
    let blackItems = allBoldItems;
    for (let item of blackItems) {
        item.style.color = 'black';
    }
}

getBoldItems();
// highlight()

lastPara.addEventListener('mouseover', highlight);
lastPara.addEventListener('mouseout', returnItemsToDefault);

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

// Exercise 5 : Event Listeners

// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.
const firstPara = document.body.firstElementChild;
console.log(firstPara);

firstPara.addEventListener('dblclick', function() {
    firstPara.style.position = 'absolute';
    firstPara.style.left = 50 + 'px';
    firstPara.style.top = 700 + 'px';
});

firstPara.addEventListener('mouseover', function() {
    firstPara.style.fontSize = '2rem';
});

firstPara.addEventListener('mouseout', function() {
    firstPara.style.fontStyle = 'italic';
})

firstPara.addEventListener('click', function() {
    firstPara.style.color = 'red';
})