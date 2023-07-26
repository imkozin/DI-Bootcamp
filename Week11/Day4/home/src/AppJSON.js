
import "./App.css";

function App () {

const postData = async (e) => {
    e.preventDefault();
    const url = 'https://webhook.site/49cdfb5a-4f80-4c2a-a858-eb4160326dae';
    const request = {
        method : "POST",
        Headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            key1: 'myusername',
            email: 'mymail@gmail.com',
            name: 'Isaac',
            lastname: 'Doe',
            age: 27}),
        mode: 'no-cors'
    }
    try {
        const res = await fetch(url, request);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={(e)=>postData(e)} type="submit">Press to post some data</button>
      </header>
    </div>
  );
}

export default App;