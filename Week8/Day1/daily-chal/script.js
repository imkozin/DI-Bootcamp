const myForm = document.forms.libform;
const storySpan = document.querySelector('#story');
const shuffleButton = document.querySelector('#shuffle-button');
let stories;

// let valueNoun = document.getElementById('noun');
// let valueAdj = document.getElementById('adjective');
// let valuePerson = document.getElementById('person');
// let valueVerb = document.getElementById('verb');
// let valuePlace = document.getElementById('place');

myForm.addEventListener('submit', getValues);

function getValues (event) {
    event.preventDefault();
    const valueNoun = event.target.elements.noun.value;
    const valueAdj = event.target.elements.adjective.value;
    const valuePerson = event.target.elements.person.value;
    const valueVerb = event.target.elements.verb.value;
    const valuePlace = event.target.elements.place.value;
    
    if ([valueNoun, valueAdj, valuePerson, valueVerb, valuePlace].includes('')) {
        alert('Input shouldn\'t be empty');
    } else {
        stories = [
            `Once upon a time in a faraway place, there was a person named ${valuePerson}. They were known for their extraordinary ${valueAdj} skills. One day, while walking through the enchanted forest, they stumbled upon a magical ${valueNoun}. Curiosity ${valueVerb} them, and they decided to approach it.
            As soon as ${valuePerson} touched the enchanted ${valueNoun}, something incredible happened.
            In this magical world, ${valuePerson} discovered that their ${valueAdj} skills were greatly enhanced. They could ${valueVerb} faster than the wind, create ${valueAdj} artwork with a mere flick of their wrist, and communicate with animals through a secret language.
            Filled with excitement and wonder, ${valuePerson} embarked on a grand adventure, exploring the mystical realms, helping those in need, and spreading joy wherever they went. Their journey took them to the highest peaks, deepest oceans, and the most breathtaking ${valuePlace}.
            As time passed, ${valuePerson} became a legendary figure in this magical realm, forever known for their remarkable talents and kind heart. They inspired generations to embrace their own uniqueness and believe in the extraordinary.
            And so, the tale of ${valuePerson} and their incredible journey will be forever etched in the annals of this enchanting land, reminding us all that dreams do come true.`,
            `It was a super ${valueAdj} day. I visited the best zoo in ${valuePlace}. As soon as I entered, I noticed ${valueNoun} escaped from the zoo. I couldn't believe my eyes when I saw ${valuePerson} there eating bananas like crazy! I spotted ${valuePerson} jumping up and down with excitement. I couldn't resist joining in, because I wanted to ${valueVerb} through ${valuePlace}. ${valuePerson} and I had the time of our lives!`,
            `Once upon a time ${valuePerson} was super ${valueAdj} for lunch. But when he went to ${valuePlace} to ${valueVerb}, a ${valueNoun} stole his food! ${valuePerson} chased the ${valueNoun} all over Developers Institute. But the ${valueNoun} escaped! Luckily, ${valuePerson}'s friends were willing to ${valueVerb} their food with him.`
        ];
        const randomIndex = Math.floor(Math.random() * stories.length);
        storySpan.textContent = stories[randomIndex];
        };
    };

shuffleButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * stories.length);
    storySpan.textContent = stories[randomIndex];
})


// function getValues(event) {
//     event.preventDefault();
//     // const arrValues = [];
//     let objValues = {};
//     const allInputs = event.target.querySelectorAll('input');
//     for (let input of allInputs) {
//         if (inp.value === '') {
//             alert('fill the form')
//             return;
//         }
//         objValues[inp.id] = inp.values;
//     }
//     console.log(objValues);
// }

// function showStory(objValues) {
//     const spanElem = document.getElementById('story');
//     const text = `${objValues['person']} is from ${objValues['place']}. The ${objValues['noun']} is ${objValues['adjective']}, and he wants to ${objValues['verb']} with it}`;
//     const textNode = document.createTextNode(text);
//     spanElem.appendChild(textNode);
// }


