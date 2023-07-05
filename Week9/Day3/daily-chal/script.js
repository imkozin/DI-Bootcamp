async function getGif(input) {
    console.log('Start fetching a Gif...');
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${input}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)

        if (response.ok) {
            const dataGif = await response.json();
            //console.log(dataGif);
            displayGif(dataGif, input);
        } else {
            throw new Error ('issues with fetch')
        }
    } catch (error) {
        if (error.message = 'Cannot Find a Gif') {
            console.log('Fill the form again');
        } else {
            console.log('ERROR', error);
        }
    }
}

const myDiv = document.getElementById('container');

function displayGif(dataGif, input) {
    if (dataGif.data.length === 0) {
        console.log('Cannot Find a Gif');
        throw new Error ('Cannot Find a Gif');
    } else {
        const image = document.createElement('img');
        const urlGif = dataGif.data.images.original.url;
        image.src = urlGif;

        const btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.setAttribute('id', 'btn')
        btn.addEventListener('click', function () {
            image.remove();
            btn.remove();
        });

        myDiv.appendChild(image);
        myDiv.appendChild(btn);
    }
}


function getInput () {
    const userInput = document.querySelector('input').value;
    const input = userInput.toString();
    console.log(input);
    getGif(input)
}

const myForm = document.getElementById('form');
myForm.addEventListener('submit', getInput)

const delAll = document.getElementById('delete');
delAll.addEventListener('click', deleteAll);

function deleteAll() {
    // while(myDiv.firstElementChild){
    //     myDiv.firstElementChild.remove()
    // };
    return myDiv.textContent = '';
}




// function deleteGif (){
//     const imgGif = document.querySelector('img');
//     const btnGif = document.getElementById('btn');
//     imgGif.remove();
//     btnGif.remove();
// }

