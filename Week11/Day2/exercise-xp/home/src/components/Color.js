import { useState, useEffect } from "react";

const Color = () => {
    const [favoriteColor, setColor] = useState('red')

    useEffect(() => {
        alert('useEffect reached');
        setColor('yellow')
        document.title = favoriteColor;
        }, [favoriteColor]);

    const changeColor = () => {
        setColor(favoriteColor==='red'? 'blue' : 'red')
    }
    return (
        <div>
            <h1>My Favorite Color is {favoriteColor}</h1>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default Color;