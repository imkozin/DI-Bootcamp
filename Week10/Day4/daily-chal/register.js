const ids = ['first', 'last', 'email', 'username', 'password'];
const submitButton = document.getElementById('submit');
const messageBox = document.getElementById('message');
const form = document.querySelector('form');

const url = 'http://localhost:3000/register'
const inputs = ids.map(id => document.getElementById(id));
console.log(inputs);

inputs.forEach(input => input?.addEventListener('input', handleChange));

form?.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    // const [first, last, email, username, password] = inputs;
    // const body = {
    //     first: first.value,
    //     last: last.value,
    //     email: email.value,
    //     username: username.value,
    //     password: password.value
    // };
    e.preventDefault();
    const [first, last, email, username, password] = inputs.map((input) => input.value);
    const body = { first, last, email, username, password }
    if (inputs.includes(null)) return;
    e.preventDefault();
    
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body)
    }
    fetch(url, options)
    .then((res) => res.json())
    .then(res =>messageBox.innerHTML = res['message'])
    .catch(console.error)
    .finally(() => form.reset());
}

// function handleChange(e) {
//     if (isAnyFieldEmpty()) {
//         submitButton.disabled = true;
//     } else {
//         submitButton.disabled = false;
//     }
// }

function handleChange(e) {
    submitButton.disabled = isAnyFieldEmpty();
}

function isAnyFieldEmpty() {
    return inputs.some(input => input.value === "")
}