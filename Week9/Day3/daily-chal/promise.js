async function check() {
    const parisResponse = await fetch(`https://sunrise-sunset.org/json?lat=48.864716&lng=2.349014`)
    const newyorkResponse = await fetch(`https://sunrise-sunset.org/json?lat=40.730610&lng=-73.935242`)
    const promise = await Promise.all([parisResponse, newyorkResponse]);
    const promiseResults = await Promise.all([promise[0].json(), promise[1].json()])
    console.log(promiseResults);
}

check()