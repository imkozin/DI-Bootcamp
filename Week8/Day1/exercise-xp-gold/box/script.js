let idInterval;
const myBox = document.getElementById('animate');

function myMove() {
    let pos = 1;
    idInterval = setInterval(function() {
    myBox.style.left = pos + 'px';
    pos ++;

    if (pos === 350){
        clearInterval(idInterval);
    }
    }, 1);
}

