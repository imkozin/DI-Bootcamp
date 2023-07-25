import "./App.css";
import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            header : null,
            message : ''
        }

    }
    componentDidMount = async () => {
        try {
            const res = await fetch('http://localhost:3030/api/hello')
            const data = await res.json();
            this.setState({header: data})
        } catch (err) {
            console.log(err);
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await fetch('http://localhost:3030/api/world', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ message: this.state.message })
            })
            const data = await res.json();
            this.setState({res: data});
        } catch (err) {
            console.log(err);
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    render () {
        const {header} = this.state;
        const {res} = this.state;
        return (
            <div className="App">
              <header className="App-header">
                <h1>{header ? header : "Loading..."}</h1>
                <h2>Post to Server</h2>
                <form onSubmit={(e)=>this.handleSubmit(e)} method="POST">
                    <input onChange={(e)=>this.handleChange(e)} type="text" name="message"/>
                    <input type="submit" value="Submit" />
                </form>
                <p>{res}</p>
              </header>
            </div>
          );
        }      
    }

export default App;