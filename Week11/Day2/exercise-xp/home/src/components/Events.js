import { useState } from 'react';

const Events = () => {
    const clickMe = () => {
        alert('I was clicked');
    }

    const handleKeyDown = (e) => {
        const value = e.target.value
        console.log(e.key);
        if(e.key==='Enter') {
            alert(`the Enter key was pressed, your input is ${value}`)
        }
    }

    const [isToggleOn, setToggle] = useState()
    const changeState = () => {
        setToggle(isToggleOn===false?true:false)
        console.log(isToggleOn);
    }

    return (
        <div>
            <input onKeyDown={handleKeyDown} placeholder="Press the Enter key!"/>
            <button onClick={clickMe}>Click</button>
            <div>Exercise 9: 
                <button onClick={changeState}>{isToggleOn?"ON":"OFF"}</button>    
            </div>            
        </div>
    )
}

export default Events;