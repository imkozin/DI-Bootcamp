import { useState } from 'react';
import Garage from './Garage';

// Exercise 1 : Car And Components

const Car = (props) => {
    const {model} = props;
    const [color, setColor] = useState('black');
    // const changeColor= ()=>{
    //     setColor("blue")
    // }
    return (
        <div>
            <h2>This car is {color} {model}</h2>
            <Garage size="small" />
            {/* <button onClick={changeColor}>change</button> */}
        </div>
    )
}

export default Car;