const axios = require('axios');

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');

const users = axios.get('robo.json')
.then(res => console.log(res.data))
.catch(err => console.log(err))
console.log(users);

// form.addEventListener('submit', async(event) =>{
//     event.preventDefault();

//     const users = axios.get('robo.json')
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))

//     const name = input.value;

//     ul.innerHTML = '';
//     for (let user of res.data) {
//         ul.innerHTML += `<li>
//         <strong>${user.name}</strong>
//         <br>
//         ${user.username}
//         <br>
//         ${user.email}
//         <br>
//         <img src="${user.image}">
//       </li>`;
//     }
// });