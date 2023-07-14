const http = require('http')
const datetime = require('./date.js');

const currentDateTime = datetime.getCurrentDateTime();
console.log(currentDateTime);

const {newNumber} = require('./script.js')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const currentDateTime = datetime.getCurrentDateTime();
    res.end(`
            My Module is: ${newNumber}
            <h1>Hi there at the frontend</h1>
            <p>Current date and time: ${currentDateTime}</p>`);
})

server.listen(5051, () => {
    console.log("I'm listening");
})
