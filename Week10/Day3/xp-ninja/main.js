const userList = document.getElementById('user-list');
const form = document.querySelector('form');


const getUsers = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = res.data;
        console.log(users);
        return users;
    } catch (err) {
        console.log(err);
    }
}


form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const searchValue = document.getElementById('search').value;
    try {
        if (searchValue === '') {
            getUsers()
            .then(users => {
                displayUsers(users)
            })
        } else {
            getUsers()
            .then(users => {
                const filteredUsers = users.filter(user => user['name'].toLowerCase().includes(searchValue.toLowerCase()));
                displayUsers(filteredUsers);
            })
        }
    } catch (err) {
        console.log(err);
    }
})

const displayUsers = async (arr) => {
    userList.innerHTML = '';

    if (arr.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'No users found.';
        userList.appendChild(message);
    } else {
        try {
            arr.forEach(user => {
            const userCard = document.createElement('div')
            userCard.classList.add('user-card')
    
            const userImage = document.createElement('img');
            userImage.src = `https://robohash.org/${user['id']}`;
            userCard.appendChild(userImage);
    
            const fullName = document.createElement('h2');
            fullName.textContent = user['name'];
            userCard.appendChild(fullName);
    
            const userName = document.createElement('p');
            userName.textContent = user['username'];
            userCard.appendChild(userName);
    
            const email = document.createElement('p');
            email.textContent = user['email'];
            userCard.appendChild(email);
    
            userList.appendChild(userCard);
        });
        } catch (err) {
            console.log(err);
        }
    }
}