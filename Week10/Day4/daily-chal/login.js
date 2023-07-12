const form = document.querySelector('form');
// const username = document.getElementById('username')
// const password = document.getElementById('password')
const messageBox = document.getElementById('message-box')

const [username, password] = ['username', 'password'].map((id) => document.getElementById(id));

const url = 'http://localhost:3000/login'

form?.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    if (username.value === "" || password.value === "") return;
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({password: password.value, username: username.value })
    };
    fetch(url, options)
    .then(res => res.json())
    .then((res) => (messageBox.textContent = res.message))
    .catch(console.error)
    .finally(() => {
        [username, password].forEach((input) => (input.value = ''))
    })
}
