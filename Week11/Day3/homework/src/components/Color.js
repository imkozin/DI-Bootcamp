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
        setTimeout(() => {
            alert('componentDidMount reached');
            this.setState({color : 'yellow'})
        }, 3000)
    }

    // default true / by false color isn't updated
    shouldComponentUpdate = () => {
        return true;
    }

    getSnapshotBeforeUpdate = () => {
        console.log("in getSnapshotBeforeUpdate", this.state.color)
    } 

    componentDidUpdate = (prevProps, prevState) => {
        console.log("Previous state:", prevState.color);
        console.log("Current state:", this.state.color);
        console.log("after update", this.state.color)
    }

    changeColor = () => {
        this.setState({color : this.state.color==='red'? 'blue' : 'red'})
    }

    deleteHeader = () => {
        this.setState({show : false})
    }

    render() {
        return (
            <>
                {this.state.show ? 
                    <div>
                       <Child />
                       <button onClick={this.deleteHeader}>Delete Header</button>
                    </div> :
                    <div>
                        <h1>My favorite color is {this.state.color}</h1>
                        <button onClick={this.changeColor}>Change Color</button>
                    </div>
                }
            </>
        );
    }
}

export default Color;


