import React from "react";

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        }
    }

    handleClick() {
        this.setState({
            counter : this.state.counter + 1}); 
    } 

    render () {
        if (this.state.counter === 5) {
            throw new Error('I crashed!!!')
        } else {
            return (
                <>
                    {this.state.counter}
                    <button onClick={()=>this.handleClick()}>Count</button>
                </>
            )
        }
}
}

export default BuggyCounter;