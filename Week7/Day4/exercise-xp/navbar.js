// Exercise 6 : Change The Navbar
// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const getDiv = document.getElementById('navBar');
// getDiv.id = 'socialNetworkNavigation';
getDiv.setAttribute('id', 'socialNetworkNavigation');

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
const getUl = document.querySelector('ul');
console.log(getUl.innerHTML);

const createLi = createElement('li');

// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
createLi.innerText = 'Logout';


// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
getUl.appendChild(createLi);

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
getFisrtLi = getUl.firstElementChild;
getLastLi = getUl.lastElementChild;

console.log(getFisrtLi.textContent);
console.log(getLastLi.textContent);