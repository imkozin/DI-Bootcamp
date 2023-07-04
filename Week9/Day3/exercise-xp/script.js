// EXERCISE 1

// fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
// .then(response => {
//     console.log(response.json());
//     // return response.json()
// })

// EXERCISE 2

// fetch('https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
// .then(response => {
//     console.log(response.json());
// })

// EXERCISE 3

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

async function getObject () {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/")
        if (response.ok) {
            const data = await response.json();
            console.log(data.result);
        } else {
            throw new Error('there is an issue');
        }
    } catch (error) {
        console.log(('In the catch' , error))
    }
}

getObject()

// EXERCISE 4

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// The message 'calling' will be logged to the console.
// After a delay of 2 seconds, the message 'resolved' will be logged to the console as the value of the result variable.