const b = 5;

const {largeNumber} = require('./main.js');
const newNumber = largeNumber + b;
console.log(newNumber);

module.exports = {
    newNumber,
}

const {timeLeft, todayDate} = require('./date.js');

// if async func
// timeLeft()
// .then((data) => {
//     console.log(data);
// })

// if normal func
const daysLeft = timeLeft();
console.log('Days left:', daysLeft);

const {minutesLived} = require('./date.js');

minutesLived('October 8, 2011 17:34:01')
.then((minutes) => {
    console.log('minutes:', minutes);
})

const {nextHoliday} = require('./date.js');
const remainingTime = nextHoliday();
console.log(`the next holiday is in ${remainingTime}`);