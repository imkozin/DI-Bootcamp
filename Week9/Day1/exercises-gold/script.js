const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const userName = urlParams.get('firstn');
console.log(userName);
const userLast = urlParams.get('lastn');
console.log(userLast);

document.querySelector('div').innerHTML = `Welcome ${userName} ${userLast}`;

