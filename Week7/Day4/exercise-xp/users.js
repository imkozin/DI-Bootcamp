// Exercise 5 : Users
// Using Javascript:
// Retrieve the div and console.log it
console.log(document);

const getDiv = document.getElementById('container');
console.log(getDiv)

// Change the name “Pete” to “Richard”.
const ulOne = document.getElementsByClassName('list')[0];
const lastChild = ulOne.lastElementChild;
lastChild.textContent = 'Richard';
// const changeLi = document.body.children[1].children[1];
// changeLi.textContent = 'Richard';

// Delete the second <li> of the second <ul>.
const ulTwo = document.getElementsByClassName('list')[1];
const secondChildTwo = ulTwo.children[1];
secondChildTwo.remove();

// const deleteLi = document.body.children[2].children[1].remove();

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
for (let list of document.querySelectorAll('.list')) {
    list.firstElementChild.textContent = 'Ivan';
}


// const allListClass = document.querySelectorAll('ul');
// for (let el of allListClass) {
//     const firstLi = el.querySelector('li');
//     firstLi.textContent = 'Ivan';
// }

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