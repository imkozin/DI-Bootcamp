const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

const promises = [promise1, promise2, promise3]; // The promises array is created to hold the three promises.

Promise.all(promises)
.then(values => {
    console.log(values)
})
.catch(error => {
    console.log(error)
});

// Since all three promises are resolved successfully, the then callback is executed.
// After 3 seconds, promise3 resolves with the value 'foo'.
// The resolved values of all promises ([3, 42, 'foo']) are logged to the console.
// The output will be [3, 42, 'foo'].

function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2));
  }
  
  const arr = [1, 2, 3];
  const promiseArr = arr.map(timesTwoAsync);
  
  Promise.all(promiseArr)
    .then(result => {
      console.log(result);
    });

// [2, 4, 6]