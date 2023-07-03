// function makeAllCaps(array) {
//     const newPromise = new Promise((resolve, reject) => {
//         if (array.every(word => typeof word === 'string')) {
//             //loop to make each element of the array uppercwse
//             //resolve with this array

//             //map create a new array, whatever you return from the callback function is pushed to the array
//             //filter create a new array, whatever you return from the callback function that passes a condition, is pushed to the array
//             // every and some loop inside the array and retrun true or false depending on a condition
//             const newArr = array.map(element => element.toUpperCase())
//             resolve(newArr);  
//         } else {
//             reject('Not all words are strings');
//         }
//     }) 
//     return newPromise 
// }

// makeAllCaps([1,2,3])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error)
// })

// makeAllCaps(['ilya', 'loves', 'tennis'])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error)
// })

// function sortWords(array) {
//     const newPromise = new Promise((resolve, reject) => {
//         if (array.length > 4) {
//             const newArr = array.sort();
//             resolve(newArr);
//         } else {
//             reject('Array is too short')
//         }
//     })
//     return newPromise;
// }

//in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))


// 2nd Daily Challenge   
const morse = `{
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }`

function toJs(morse) {
    const promiseOne = new Promise((resolve, reject) => {
        const morseJS = JSON.parse(morse)
        if (Object.keys(morseJS).length === 0) {
            reject('String is empty')
        } else {
            resolve(morseJS)
        }
    })
    return promiseOne
}

const userInput = prompt('Enter a word or a sentence') 



function toMorse(morseJS, userInput) {
    const word = userInput.toLowerCase().split('');
    const morseArray = [];

    const isValidMorse = word.every(char => char in morseJS);

    const promiseTwo = new Promise((resolve, reject) => {
        if (isValidMorse) {
            word.forEach(char => {
                morseArray.push(morseJS[char]);
            });
            console.log(`${userInput} gives you`);
            resolve(morseArray);
        } else {
            reject('Some character do not exist in the morse javascript object')
        }  
    })
    return promiseTwo;
}

toJs(morse)
.then(result => {
    console.log(result)
    return toMorse(result, userInput)
})
.then(result => {
    console.log(result)
    return joinWords(result)
})
.catch((error) => {
    console.log(error)
})

function joinWords(morseArray) {
    const myDiv = document.querySelector('div');
    myDiv.innerText = `${userInput} in morse code will be ${morseArray}`;
}

// function isValidMorse(userInput) {
//     const word = userInput.toLowerCase().split('');
//     // ['i', 'v', 'a', 'n']
//     const morseJS = JSON.parse(morse)
//     const isValid = word.every(char => morseJS.hasOwnProperty(char))
//     console.log('is Valid?')
//     return isValid
// }

// console.log(isValidMorse(userInput))


// toJs()
// .then((result) => {
//     console.log(result)
//     return isValidMorse(userInput, result)
// })
// .catch((error) => {
//     console.log(error)
// })