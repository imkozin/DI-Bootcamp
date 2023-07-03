// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:
const myForm = document.querySelector('form');

myForm.addEventListener('submit', getValues);

// function getValues(event){
//     event.preventDefault();
//     // Retrieve the values from the inputs
//     const inp1 = document.getElementById('fname').value;
//     const inp2 = document.getElementById('lname').value;

//     // Create an object with the retrieved values
//     const myObj = {
//         name : inp1,
//         lastname : inp2
//     };
//     // Convert the object to a JSON string
//     const jsonString = JSON.stringify(myObj);
//     // Append the JSON string to the DOM
//     const myDiv = document.querySelector('div');
//     myDiv.innerHTML = jsonString;
// }

function getValues(e) {
    e.preventDefault();
    const formData = new FormData(myForm);
    const entries = formData.entries();
    const data = Object.fromEntries(entries);
    const dataString = JSON.stringify(data);
    displayData(dataString);
}

function displayData(str) {
    const p = document.createElement('p');
    p.innerText = str;
    document.body.appendChild(p);
}

function allTruthy(...params) {
    console.log(params);
    return params.every(param => param != false);
}


console.log(allTruthy(true, true, true)); // true
console.log(allTruthy(true, false, true)); // false
console.log(allTruthy(5, 4, 3, 2, 1, 0)); // false
