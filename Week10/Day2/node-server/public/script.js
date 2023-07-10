fetch('/users')
.then((res) => res.json())
.then((data) => {
    console.log(data);
    // render(data);
})
.catch((err) => {
    console.log(err);
})

// const render = (obj) => {
//     const html = 
//     document.getElementById('root').innerHTML = obj.join('');
// }

function alertF() {
    alert("Hello from JavaScript")
}