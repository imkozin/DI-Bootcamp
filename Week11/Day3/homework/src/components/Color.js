import React from 'react';
import Child from './Child';


class Color extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'red',
            show: true
        }
    }

    componentDidMount = () => {
        alert('componentDidMount reached');
        this.setState({color : 'yellow'})
    }

    // default true / by false color isn't updated
    shouldComponentUpdate = () => {
        return true;
    }

    getSnapshotBeforeUpdate = () => {
        console.log("in getSnapshotBeforeUpdate", this.state.color)
    } 

    componentDidUpdate = () => {
        console.log("after update", this.state.color)
    }

    changeColor = () => {
        this.setState({color : this.state.color==='red'? 'blue' : 'red'})
    }

    deleteHeader = () => {
        this.setState({show : false})
    }

    render () {
        return (
            <>
                <h1>My favorite color is {this.state.color}</h1>
                <button onClick={this.changeColor}>Change Color</button>
                {this.state.show ? <Child /> : null}
                <button onClick={this.deleteHeader}>Delete Header</button>
            </>
        )
    }
}

export default Color;


