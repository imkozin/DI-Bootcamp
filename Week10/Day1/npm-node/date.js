const timeLeft = () => {
    const now = new Date().getTime();
    const futureDate = new Date('January 1, 2024 10:34:01').getTime();

    const timeleft = futureDate - now;

    const days = Math.floor( timeleft / (1000 * 60 * 60 * 24));
    // const hours   = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    // console.log(days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds left');
    return days;
}


const minutesLived = async (date) => {
    const now = new Date().getTime();
    const birthday = new Date(date).getTime();

    const timeDiff = now - birthday;
    // const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    // console.log(now);
    return timeDiff;
};


const nextHoliday = () => {
    const now = new Date().getTime();
    const holiday = new Date('July 27, 2023 10:34:01');

    const timeleft = holiday - now;
    const days = Math.floor( timeleft / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    const daysleft = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds';
    return daysleft;
}

const getCurrentDateTime = () => {
    const currentDateTime = new Date();
    return currentDateTime.toLocaleString();
  };

module.exports = {
    timeLeft,
    minutesLived,
    nextHoliday,
    getCurrentDateTime
}
