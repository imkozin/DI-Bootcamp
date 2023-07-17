const formRegister = document.querySelector('registerForm');
formRegister.addEventListener("submit", registerUser);

async function registerUser() {
    const data = new FormData(formRegister);
    console.log(data);
    const objData = Object.fromEntries(data);
    console.log(objData);

    const responsePost = await fetch("/registeruser", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(objData)
    })

    if (responsePost.ok) {
        const result = await 
    }
}