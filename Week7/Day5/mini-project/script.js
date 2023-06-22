function playTheGame() {
    // let userNumber = 0;
    // let computerNumber = 0;
    let start = confirm('Do you want to start the Game');
    if (start === false) {
        alert('No problem, Goodbye');
    } else {
        // while (isNaN(userNumber)) {
        //     let userNumber = prompt('Enter a number between 0 and 10');
        // }
        let userNumber = Number(prompt('Enter a number between 0 and 10'));
        if (isNaN(userNumber)) {
            alert("Sorry Not a number, Goodbye");
        } else if (!(0 <= userNumber && userNumber <= 10)) {
            alert('Sorry it\'s not a good number, Goodbye');
        } else {
            let computerNumber = Math.floor(Math.random() * 11);
            compareNumbers(userNumber,computerNumber);
        }
    }
}

function compareNumbers(userNumber,computerNumber, counter = 1) {

    if (userNumber > computerNumber && counter < 3) {
        userNumber = prompt('Your number is bigger than the computer\'s, guess again');
        compareNumbers(userNumber,computerNumber, counter + 1);
    } else if (userNumber < computerNumber && counter < 3) {
        userNumber = prompt('Your number is smaller than the computer\'s, guess again');
        compareNumbers(userNumber,computerNumber, counter + 1);
    } else if (counter === 3) {
        alert('Out of Chances');
    } else { 
        (userNumber === computerNumber)
        alert('WINNER');
    }
}
