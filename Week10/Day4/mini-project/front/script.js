const loginBtn = document.getElementById('login');
const userLogin = document.getElementById('userlog');
const passwordLogin = document.getElementById('passlog');

async function login(e) {
    e.preventDefault();

    try {
        const data = {username: userLogin.value, password: passwordLogin.value};

        const res = await fetch('http://localhost:3030/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        console.log("Response", res);
        const parsedData = await res.json();
        console.log("Parsed data", parsedData);
    } catch (err) {
        console.log(err);
    }
}

loginBtn.addEventListener('click', login);
// regBtn.addEventListener('click', register);

// const regBtn = document.getElementById('register');

// async function register(e) {
//     e.preventDefault();
//     const first_name = document.getElementById('fname').value;
//     const last_name = document.getElementById('lname').value;
//     const email = document.getElementById('email').value;
//     const username = document.getElementById('userreg').value;
//     const password = document.getElementById('passreg').value;

//     const data = {
//         first_name,
//         last_name,
//         email,
//         username,
//         password
//     };

//     try {
//         const res = await fetch('http://localhost:3030/users/register', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         })
//         const parsedData = await res.json();
//         if (res.ok) {
//             message.textContent = parsedData.message
//         }
//     }
// }


const handleRegister = async (e) => {
    e.preventDefault();

    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const res = await fetch('http://localhost:3030/users/register', {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({fname, lname, username, email, password})
    })
    console.log("Response", res);
    const parsedData = await res.json();
    console.log("Parsed data", parsedData);
    } catch (err) {
        console.log(err);
    }
}