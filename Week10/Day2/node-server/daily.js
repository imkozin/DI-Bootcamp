// Use Express to create a few routes:
// The route /aboutMe/:hobby sends the name of one hobby (ie. the value of the route parameter). If the parameter is not a string (ie. numbers or else), set the status to 404.
// The route /pic : displays an HTML file with a picture of your choice.
// The route /form: displays an HTML file.
// Requirements:
// The HTML file must be in the public folder.
// The HTML file must contain a form to contact you.
// The form must contain the inputs email and message. (add some HTML form validations)
// Output:
// You should get the data and display it on the browser at the route /formData.
// For example, “john@gmail.com sent you a message “Love your new website”.

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false}))

app.use(express.json())

app.use(express.static(__dirname+'/daily-chal/public'))

app.get('/form', (req, res) => {
    res.sendFile(__dirname+'/daily-chal/public/form.html')
})

app.post('/formData', (req, res) => {
    const email = req.body.email;
    const message = req.body.message;
    res.send(`${email} sent you a message “${message}”`);
})

app.listen(8000, () => {
    console.log("Server running on port 8000");
})

app.get("/aboutMe/:hobby", (req, res) => {
    const hobby = req.params['hobby'];
    if (hobby.search(/[^A-Za-z\s]/) != -1 ) {
        return res.status(404).json({msg: "the parameter is not a string"});
    }
    res.send(hobby)
})

app.get("/pic", (req, res) => {
    res.send(`<div><img src="https://www.diabetes.co.uk/wp-content/uploads/2019/01/sports-%E2%80%93-tennis.jpg" alt="tennis"></img></div>`)
})

