// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

setTimeout(helloWorld, 2000);

function helloWorld() {
    alert('Hello World');
}

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

setTimeout(createPara, 2000);

const myDiv = document.getElementById('container');

function createPara() {
    const myPara = document.createElement('p');
    myPara.appendChild(document.createTextNode('Hello World'));
    myDiv.appendChild(myPara);
}

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
let idInterval;

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', stopInterval);

function addPara() {
    idInterval = setInterval(function() {
        const newPara = document.createElement('p');
        newPara.appendChild(document.createTextNode('Hello World'));
        myDiv.appendChild(newPara)
    }, 2000);
}

function stopInterval() {
    clearInterval(idInterval);
}

addPara()

// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

function addParagraph() {
    let counter = 0;

    idInterval = setInterval(function() {
        const newPara = document.createElement('p');
        newPara.textContent = 'Hello World';
        myDiv.appendChild(newPara);
        counter ++;

        if (counter === 5) {
            clearInterval(idInterval);
        }
    }, 2000);
}

addParagraph()
